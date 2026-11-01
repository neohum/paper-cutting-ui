/* 창체 양성평등교육(성교육 포함) — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 gender 고.
 * 근거: 교육기본법 제17조의2, 양성평등기본법 제30·36조, 성폭력방지법 제5조(시행령 제2조), 성매매피해자보호법 제5조, 가정폭력방지법 제4조의3,
 *   학교보건법 제9조 — 교육부 지침 연 15시간(성폭력·가정폭력 예방교육 각 매년 1회 1시간 이상 포함), 교육부 「학교 성교육 표준안」 학교급 범위
 *   (research-mandatory §1·§2: 고 = 피임·성건강, 성적 자기결정권과 동의, 성매매·성착취 예방, 양성평등한 직장·가정).
 * 고 기준: 법·제도와 자료 분석·토론(찬반 근거)·제안서·캠페인·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역은 발행 전에 사람이 직접 보는 민감 영역이다. 지킨 원칙:
 *   · 내용은 체계도 concepts 와 교육부 학교 성교육 표준안 수준 — 성적 행위를 묘사하지 않는다. 생식·피임·성매개감염병 같은 의학 정보는 체계도 concepts 에 있는 것만 사실 수준으로 쓰고 아래 '사람 확인'에 확인처를 적었다.
 *   · 피해 경험·개인 연애·몸 상태를 묻지 않는다. 판단·채점은 모두 가상 인물(가명 두 글자)로 한다.
 *   · 잘못은 늘 가해 행위를 고른 사람에게 있다. 피해자 탓 문장은 함정 카드(why 로 바로잡음)로만 쓴다.
 *   · 성별 고정관념·외모 평가를 정답으로 만들지 않는다. 특정 집단을 깎아내리지 않는다. 찬반이 갈리는 정책 쟁점은 정답을 정하지 않고 근거의 질을 따진다.
 *   · 법 조항 번호·처벌·형량은 근거 파일에 있는 법 이름·조 번호(위 근거 줄)만 쓰고 처벌 내용은 쓰지 않는다.
 *   · 도움 받을 곳은 체계도 concepts 의 범위(믿을 어른·담임·상담·보건 선생님·보건실·보호자·전문 상담·의료 상담)만 쓴다. 전화번호는 근거 파일·체계도에 없어
 *     화면에 '[학교가 확인해 넣는 신고·상담 번호]' 자리로 두었다(계획 brief 와 같은 표기).
 * 수치 자료는 모두 '가상'이다(상대 크기만, 화면 제목에 밝힘). 인물은 직접 지은 가명이다.
 * 주제 27개 × 7모듈 = 189모듈(체계도 계획 전부).
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   [공통] 화면의 '[학교가 확인해 넣는 신고·상담 번호]' 자리 — 학교가 지역 성폭력·가정폭력·성매매 피해 상담 기관과 번호를 확인해 채운다(여성가족부·한국양성평등교육진흥원 안내, 교육청 성교육 담당)
 *   g10-sex-dimensions 전체: 성의 생물학적·심리적·사회문화적 측면 구분과 뜻풀이, '성적 자기결정권 = 나의 결정권 + 상대의 결정을 존중할 책임' 풀이 — 교육부 학교 성교육 표준안(고)
 *   g10-sex-dimensions.activity.rights-duty-map: 자기결정권에 딸린 네 권리(정보를 알 권리·거절할 권리·결정을 바꿀 권리·건강을 지킬 권리) 묶음 — 교육부 학교 성교육 표준안·한국양성평등교육진흥원 성교육 자료
 *   g10-sex-dimensions.intro.quote-reaction·wrap.self-scale: 학급 반응 점수는 수업용 가상 값 — 확인 불필요
 *   g10-consent-talk 전체: 동의의 요건(자유롭고 분명한 동의·언제든 철회·침묵과 압력 뒤의 대답은 동의가 아님) 풀이 — 교육부 학교 성교육 표준안(고)·한국양성평등교육진흥원 성교육 자료
 *   g10-consent-talk.intro.myth-poll: 설문 값은 수업용 가상 값 — 확인 불필요
 *   g10-sv-myth.intro.fact-myth·act.responsibility-dilemma·wrap.support-words: 통념과 사실 문장(아는 사이에서도 일어남·몸이 굳어 저항하지 못할 수 있음·시간이 지나 말해도 피해·책임은 가해 행위를 고른 사람) — 여성가족부·한국양성평등교육진흥원 성폭력 예방교육 자료
 *   g10-sv-myth.activity.responsibility-dilemma·wrap.route-check: 피해자 탓·소문 옮기기·캐묻기가 2차 피해가 된다는 설명, 사실 확인은 학교·전문 기관 몫 — 여성가족부 2차 피해 방지 안내·교육부 학교 성희롱·성폭력 사안 처리 안내
 *   g10-sv-myth.activity.help-map: 학교 안 도움 경로(담임·상담·보건 선생님)와 학교전담경찰관 연결(교무실 안내로 둠), 지역 지원 기관 이름·번호 — 학교 성고충 상담 창구 안내·관할 교육지원청
 *   g10-sv-myth.activity.law-reading: 성폭력방지법 제5조 쉬운 말 요약(해마다 1회 이상·1시간 이상 예방교육 — research-mandatory §1 표) 외의 조문 문장은 쓰지 않음, 요약 문장 표현 — 국가법령정보센터 「성폭력방지 및 피해자보호 등에 관한 법률」 제5조·시행령 제2조
 *   g10-image-rights.activity.bystander-dilemma·wrap.three-verbs: 동의 없이 찍거나 퍼뜨린(전달 포함) 성적 이미지는 디지털 성범죄라는 설명 — 국가법령정보센터 「성폭력범죄의 처벌 등에 관한 특례법」(카메라 등 이용 촬영·허위영상물 조항, 처벌 내용은 쓰지 않음)
 *   g10-image-rights.activity.bystander-dilemma·wrap.quick-quiz: 학생이 사진을 저장·전달하지 말고 방 이름·계정·시간만 적어 알리며 증거는 학교·경찰이 다룬다는 안내 — 경찰청 디지털 성범죄 신고 안내·여성가족부 디지털 성범죄 피해자 지원 안내
 *   g10-image-rights.wrap.three-verbs: ‘한 사람에게 보낸 사진도 퍼뜨리는 것에는 동의하지 않은 것’ — 여성가족부·한국양성평등교육진흥원 디지털 성폭력 예방 자료
 *   g10-image-rights.intro.share-chain·wrap.quick-quiz: 퍼짐 그래프·정답률은 수업용 가상 값 — 확인 불필요
 *   g10-media-ad 전체: ‘성 상품화’(사람의 몸을 제품처럼 쓰는 것)·‘성 고정관념’ 뜻풀이와 몸이 나온다고 모두 상품화는 아니라는 구분 — 한국양성평등교육진흥원 미디어 성평등 교육 자료·방송통신심의위원회 광고 심의 안내
 *   g10-media-ad.activity.debate: 근거 카드의 ‘같은 배역 반복이 고정관념을 굳힌다는 연구가 있다’·‘자율 규제가 잘 지켜지지 않았다는 지적도 있다’는 토론용 일반 진술 — 한국양성평등교육진흥원·한국언론진흥재단 미디어 모니터링 자료로 확인
 *   g10-media-ad.wrap.consumer-action: ‘문제 광고를 공식 창구에 신고’ — 신고 창구(방송통신심의위원회·한국광고자율심의기구 등) 이름은 쓰지 않았음, 수업 때 교사가 확인해 안내
 *   g10-repro-health.intro.organ-match: 생식 기관 이름과 하는 일(고환 — 정자·남성 호르몬, 난소 — 난자·여성 호르몬, 나팔관 — 난자가 지나는 길, 자궁 — 태아가 자라는 곳) — 교육부 학교 성교육 표준안·중학교 과학 교과서(생식) / 질병관리청 국가건강정보포털
 *   g10-repro-health.intro.myth-check·act.test-path·wrap.one-fact: 증상 없이 감염되었을 수 있다·검사로 확인한다·감염을 알면 상대도 함께 검사·치료 뒤 다시 검사·한 번 치료로 다시 걸리지 않는 것은 아니다 — 질병관리청 국가건강정보포털(성매개감염병)
 *   g10-repro-health.activity.care-routine: 생식 건강 습관(씻고 말리기·통풍 잘되는 속옷·날마다 갈아입기·향 강한 세정제 자주 쓰지 않기)과 진료 신호(평소와 다른 통증이 며칠·가려움·분비물 변화 지속·일상이 어려운 통증) — 질병관리청 국가건강정보포털·대한산부인과학회/대한비뇨의학회 청소년 안내, 학교 보건 선생님 확인
 *   g10-repro-health.wrap.trust-route: 청소년 상담 기관 이름·번호와 익명 상담 가능 여부 — 학교 보건실·관할 보건소 안내
 *   g10-dv-myth.activity.forms-sort: 가정폭력 유형(신체·정서·경제·방임)과 ‘가족 사이 폭력을 보게 하는 것도 피해(목격)’, 다툼과 폭력의 구분(두려움·통제) — 여성가족부 가정폭력 예방교육 자료·국가법령정보센터 「가정폭력범죄의 처벌 등에 관한 특례법」·아동복지법(정서적 학대)
 *   g10-dv-myth.activity.friend-dilemma: 안전이 걸린 비밀은 믿을 어른에게 잇는다는 원칙, 상담 선생님이 안전을 먼저 살핀다는 흐름 — 교육부 Wee 클래스 운영 안내·여성가족부 가정폭력 예방교육 자료
 *   g10-dv-myth.activity.law-purpose: 가정폭력방지법 제4조의3 쉬운 말 요약(해마다 1회 이상·1시간 이상 예방교육 — research-mandatory §1 표) — 국가법령정보센터 「가정폭력방지 및 피해자보호 등에 관한 법률」 제4조의3·시행령 제1조의2
 *   g10-dv-myth.intro.myth-scale: 설문 값은 수업용 가상 값 — 확인 불필요
 *   g10-exploit-lure 전체: 온라인 유인의 흐름(관심·칭찬 → 선물·돈 → 비밀 요구 → 사진 요구 → 협박)과 위험 신호(고액·비밀·사진 요구·신분 확인 없음) — 여성가족부·경찰청 온라인 그루밍 예방 안내
 *   g10-exploit-lure.activity.lure-dilemma·wrap.stance·act.rights-analysis: ‘청소년은 유인·착취에서 보호받아야 할 사람이며 이미 응했어도 잘못은 요구한 사람에게 있다’ — 국가법령정보센터 「아동·청소년의 성보호에 관한 법률」(피해아동·청소년 규정)·「성매매알선 등 행위의 처벌에 관한 법률」
 *   g10-exploit-lure.activity.lure-dilemma·wrap.help-check: 메시지·계정 이름·시간을 캡처해 두고 차단한 뒤 알리기, 사진은 퍼뜨리지 않기, 알린 뒤 상담·삭제 요청 지원이 이어진다는 설명 — 경찰청 사이버 피해 대응 안내·여성가족부 디지털 성범죄 피해자 지원 안내
 *   g10-exploit-lure.activity.rights-analysis: 성매매가 인권 침해인 근거 문장(몸의 상품화·힘의 불균형·빚·협박·건강 위협) — 여성가족부 성매매 예방교육 자료(성매매피해자보호법 제5조 취지)
 *   g10-exploit-lure.intro.flow-chart: 그래프 값은 가상 — 확인 불필요
 *   g10-care-career.activity.time-share·wrap.rethink: 가족 시간·학급 수치는 가상 — 확인 불필요
 *   g10-care-career.activity.career-plan: 진로 정보 출처(학교 진로 교사·커리어넷) — 교육부 커리어넷 안내(진로교육법 제12조)
 *   g11-love-control.intro.triangle: 사랑의 세 요소(친밀감·열정·책임)는 심리학의 한 설명 틀(스턴버그 삼각형 이론)로 소개 — 교육부 학교 성교육 표준안(고) 관계 단원 확인
 *   g11-love-control.activity.escalation·wrap.signal-card: 친밀한 관계 폭력이 통제·언어·신체·성적·디지털로 나타나고 작은 통제에서 커진다는 설명, 신호 예(연락 확인·비밀번호·위치 요구·위협) — 여성가족부·한국양성평등교육진흥원 데이트폭력 예방 자료·경찰청 교제폭력 안내
 *   g11-love-control.wrap.help-route: 위협 메시지를 지우지 않고 남기기 — 경찰청 교제폭력·스토킹 피해 대응 안내
 *   g11-love-control.intro.triangle·activity.check-scale: 점수·설문 값은 가상 — 확인 불필요
 *   g11-power-consent 전체: 동의의 네 조건(자유·분명·대등·철회 가능), 힘의 차이·대가·의식 상태가 동의를 무너뜨린다는 설명, ‘거절하지 않은 것은 동의가 아님’ — 교육부 학교 성교육 표준안·한국양성평등교육진흥원 자료
 *   g11-power-consent.activity.workplace-dilemma: 지위를 이용한 원치 않는 신체 접촉이 위력에 의한 성희롱·성폭력이 될 수 있다는 설명, 기록(날짜·시간·한 말)·동료 증언, 청소년 아르바이트 고충 상담 경로 — 고용노동부 직장 내 성희롱 안내·국가법령정보센터 「성폭력범죄의 처벌 등에 관한 특례법」(업무상 위력, 처벌 내용은 쓰지 않음)
 *   g11-power-consent.intro.silence-graph: 조사 값은 가상 — 확인 불필요
 *   g11-ai-image 전체: 동의 없는 성적 합성물(딥페이크)의 제작·유포가 디지털 성범죄라는 설명, ‘가짜여도 피해는 진짜’ — 국가법령정보센터 「성폭력범죄의 처벌 등에 관한 특례법」(허위영상물 조항)·여성가족부 디지털 성범죄 피해자 지원 안내
 *   g11-ai-image.activity.response-flow: 대응 차례(퍼뜨리지 않기 → 주소·화면 기록 → 피해자 지지 → 학교·지원 기관 신고 → 삭제 요청)와 파일을 저장하지 않는다는 안내 — 여성가족부·한국여성인권진흥원 디지털 성범죄 피해자 지원센터 안내·경찰청
 *   g11-ai-image.intro.report-trend: 상담 유형 비율은 가상 — 확인 불필요
 *   g11-objectification 전체: ‘대상화’(사람을 몸 한 부분·외모 점수로만 보이게 함) 뜻풀이, 추천 알고리즘이 많이 본 것을 더 보여 주며 쏠림을 키울 수 있다는 일반 설명(앱마다 다름) — 한국양성평등교육진흥원 미디어 성평등 자료·방송통신위원회/한국지능정보사회진흥원 미디어 리터러시 자료
 *   g11-objectification.intro.comment-data: 댓글 수는 가상 — 확인 불필요
 *   g11-exploitation 전체: 성착취물이 동의·존중을 지우고 지배·고통을 정상처럼 보이게 한다는 설명, 수요가 착취를 만든다는 구조, 피해가 심리·건강·경제·관계에 남는다는 설명 — 여성가족부 성매매 예방교육 자료·한국여성인권진흥원
 *   g11-exploitation.activity.law-roles: 기관 역할 분담(학교 예방교육·지원 기관 상담과 회복·경찰 수사와 보호·병원 치료) — 국가법령정보센터 「성매매방지 및 피해자보호 등에 관한 법률」(제5조 예방교육, 지원시설·상담소 규정)
 *   g11-exploitation.activity.debate: ‘수요 차단’ 쟁점은 정답을 두지 않는 토론 주제로만 다룸 — 정치적 중립 검토(사람이 봄)
 *   g11-exploitation.activity.harm-data: 피해 영역 비율은 가상 — 확인 불필요
 *   g11-contraception.intro.cycle-order: 임신 과정 뜻풀이(배란 — 난소에서 난자가 나옴, 수정 — 난자와 정자가 만남, 착상 — 수정란이 자궁벽에 자리 잡음, 태아 성장 — 자궁에서 자람) — 교육부 학교 성교육 표준안·과학 교과서(생식)
 *   g11-contraception.activity.principle-sort: 피임 방법 분류(남성용·여성용 콘돔 — 차단, 먹는 피임약·피임 패치 — 호르몬으로 배란 조절, 응급 피임약 — 의사 처방·정해진 시간 안 상담), 호르몬 방법을 처음 쓸 때 의료인 상담 — 질병관리청 국가건강정보포털·식품의약품안전처 의약품 안내(응급피임약 전문의약품 여부, 피임 패치 국내 유통 여부 확인)
 *   g11-contraception.activity.effect-chart: ‘바르게 쓸 때’와 ‘실제 사용’ 실패율 예(콘돔 2%·13%, 먹는 피임약 1%·7%)는 교과서 수준 예시로 둔 가상 값 — 질병관리청·WHO 피임 효과 자료로 대조(먹는 피임약 ‘바르게 쓸 때’ 값은 1% 미만으로 알려져 있어 표기 확인)
 *   g11-unplanned 전체: 예기치 않은 임신 가능성이 있을 때 믿을 어른(보건 선생님·보호자) → 의료기관 확인 → 전문 상담으로 잇는 경로, 두 사람의 공동 책임 — 교육부 학교 성교육 표준안·보건복지부/인구보건복지협회 임신·출산 상담 안내(상담 기관 이름·번호는 근거 파일에 없어 학교가 확인해 채움). 임신 뒤 선택지(출산·입양·임신 중지)의 옳고 그름은 다루지 않음 — 사람이 범위 확인
 *   g11-unplanned.intro.myth-poll: 설문 값은 가상 — 확인 불필요
 *   g11-dv-power 전체: 가정폭력을 권력과 통제의 문제로 보는 설명(경제적 통제·고립·위협·깎아내림·아이를 이용함), ‘같은 대상에게 되풀이’ 패턴, 성 역할 고정관념이 통제를 정당화한다는 분석 — 여성가족부 가정폭력 예방교육 자료·한국여성인권진흥원
 *   g11-dv-power.activity.isolation-dilemma·wrap.route: 청소년은 직접 개입하지 않고 안전하게 관심을 보이며 믿을 어른·기관에 잇는다는 안내 — 여성가족부·경찰청 가정폭력 신고 안내·교육부 Wee 클래스 안내
 *   g11-dv-power.intro.impulse-myth: 사례 분석 값은 가상 — 확인 불필요
 *   g11-care-work: 경력 꺾은선·돌봄 비용·직업 성비는 모두 가상 값(실제 통계는 고용노동부·통계청·여성가족부 경력단절 자료로 바꿔 씀) — 확인 불필요, 바꿀 때 출처 확인
 *   g11-care-work.activity.segregation: 직업 성별 분리가 고정관념·돌봄 분담 구조에서 생기고 돌봄 직업의 낮은 평가와 이어진다는 설명 — 한국여성정책연구원·고용노동부 자료
 *   g12-adult-rights 전체: 성인기 성적 권리 다섯(정보 접근권·건강권·자기결정권·폭력으로부터의 자유·차별 금지) 묶음과 뜻풀이, 짝 책임 — 교육부 학교 성교육 표준안(고)·세계보건기구(WHO) 성 건강 권리 설명 대조
 *   g12-adult-rights.activity.scenario-dilemma: 의식이 흐린 상태의 대답은 동의가 될 수 없다는 설명, 술 강요 거절 — 교육부 학교 성교육 표준안·한국양성평등교육진흥원
 *   g12-adult-rights.intro.adult-q: 설문 값은 가상 — 확인 불필요
 *   g12-sv-report.intro.headline-audit·activity.rewrite-lab·wrap.words: 피해자 중심 보도 원칙(책임 주체 분명·피해자 정보 최소·선정 표현 금지·‘몹쓸 짓’ 같은 가해 흐리는 표현 지양) — 한국기자협회·국가인권위원회 「성폭력 범죄 보도 세부 권고 기준」, 여성가족부 2차 피해 방지 안내
 *   g12-sv-report.activity.support-flow: 알린 뒤 지원 흐름(연결 → 의료·상담 → 법률 지원 → 회복) — 여성가족부 성폭력 피해자 통합지원(해바라기센터 등) 안내(기관 이름·번호는 학교가 확인)
 *   g12-sv-report.activity.bystander-debate: 신상 추측·유포가 2차 피해라는 설명, 플랫폼의 신고 글 처리 책임 — 여성가족부 2차 피해 방지 안내·방송통신심의위원회
 *   g12-sv-report.intro.comment-data: 댓글 비율은 가상 — 확인 불필요
 *   g12-workplace 전체: 직장 내 성희롱 판단 기준(업무 관련성·성적 언동·불쾌감, 의도는 기준 아님), 회사의 조사·피해자 보호·보복(불리한 처우) 금지 책임, 고용 형태와 상관없는 보호 — 고용노동부 직장 내 성희롱 예방·대응 매뉴얼·국가법령정보센터 「남녀고용평등과 일·가정 양립 지원에 관한 법률」(조문·처벌은 쓰지 않음)
 *   g12-workplace.intro.ad-check·activity.policy-draft: 채용 공고의 성별·혼인·용모·키 조건이 성차별이라는 설명 — 고용노동부 채용 성차별 안내·같은 법률(모집·채용 차별 금지)
 *   g12-workplace.intro.workplace-poll: 설문 값은 가상 — 확인 불필요
 *   g12-partnership.intro.leave-data·wrap.principles: 육아휴직 등 일·가정 양립 제도가 부모 누구나 쓸 수 있는 권리라는 설명(기간·급여 요건은 쓰지 않음) — 고용노동부 일·가정 양립 제도 안내·국가법령정보센터 「남녀고용평등과 일·가정 양립 지원에 관한 법률」
 *   g12-partnership.activity.control-dilemma: 경제적 통제(지출 감시·카드 빼앗기·일 그만두게 하기)와 합의된 관리의 구분 — 여성가족부 가정폭력·교제폭력 예방 자료(경제적 폭력)
 *   g12-partnership: 육아휴직 비율·예산 금액은 가상 — 확인 불필요
 *   g12-sex-trade.intro.grooming-steps: 그루밍 단계(관심·칭찬 → 비밀 → 고립 → 선물 → 사진·만남 요구 → 협박)와 ‘아는 사람도 그루밍을 할 수 있다’ — 여성가족부·경찰청 온라인 그루밍 예방 안내·국가법령정보센터 「아동·청소년의 성보호에 관한 법률」(온라인 그루밍 조항)
 *   g12-sex-trade.activity.protect-map: 성인이 아동·청소년 피해를 알게 되었을 때의 연결(학교·경찰·온라인 신고·삭제 창구·지원 기관), 증거는 저장·전달하지 않고 기록만 — 여성가족부·방송통신심의위원회·경찰청 안내(창구 이름·번호는 학교가 확인)
 *   g12-sex-trade.activity.campaign: 수요 차단 캠페인은 정책 쟁점의 특정 입장을 정답으로 두지 않음 — 정치적 중립 검토(사람이 봄)
 *   g12-sex-trade.intro.demand-graph: 광고 수 값은 가상 — 확인 불필요
 *   g12-health-plan.intro.year-line·activity.plan-board: 성인 첫해 건강 일정(입학·취업 건강검진·예방접종 기록 확인·필요할 때 성매개감염 검사·피임 상담)과 이용할 곳(보건소 — 예방접종 기록·검사, 의료기관 — 피임 상담·진료), 상담 때 비용·비밀 보장 묻기 — 질병관리청 예방접종도우미·국가건강정보포털, 관할 보건소 안내
 *   g12-health-plan.intro.myth-check: ‘증상이 없어도 정기 검사가 도움이 될 수 있다’·‘피임 상담은 결혼과 상관없이’ — 질병관리청 국가건강정보포털
 *   g12-health-plan.activity.parent-budget: 부모 됨 비용은 가상 값(실제 비용·정부 지원은 다루지 않음) — 확인 불필요
 *   g12-dv-family.intro.conflict-vs·activity.i-message·activity.family-meeting: 갈등과 폭력의 구분(통제·위협·해침), 나 전달법(멈추기·상황·감정·바람), 가족 회의 순서(안건 → 각자 말하기 → 대안 → 합의) — 여성가족부 가족 의사소통 교육 자료·건강가정지원센터(가족센터) 안내
 *   g12-dv-family.intro.cycle-data·activity.break-cycle: ‘폭력 목격이 대물림을 결정하지 않으며 지지와 도움이 고리를 끊는다’는 설명(수치는 가상) — 여성가족부·한국여성인권진흥원 가정폭력 예방교육 자료로 표현 확인
 *   g12-policy-debate 전체: 가상 쟁점 ‘공공기관 위원회 성별 균형 목표제’(한 성별 60% 초과 금지 목표)는 수업용 가상 제도로 두고 찬반 어느 쪽도 정답으로 두지 않음, 실제 정책·정당 언급 없음 — 정치적 중립 검토(사람이 봄). 실제 제도와 연결하려면 국가법령정보센터 「양성평등기본법」(위원회 성별 참여 조항) 대조
 *   g12-policy-debate.intro.data-read: 성별 평균 시급은 가상 값이며 원인을 단정하지 않음 — 확인 불필요(실제 자료로 바꿀 때 고용노동부 고용형태별근로실태조사)
 *   g12-after-school.activity.word-change: 존중의 말로 바꾼 표현(결손 가정 → 한부모 가족, 정상 가족 → 여러 형태의 가족, 편부모 → 한부모, 독거노인 → 혼자 사는 어르신, 입양아 → 입양 가족의 아이) — 국립국어원·여성가족부 성평등 언어 안내, 국가인권위원회 차별 표현 안내
 *   g12-after-school.activity.life-map: 졸업 뒤 도움 창구(대학 인권센터·직장 고충 창구·노동 상담 창구·보건소·지원 기관) 이름과 역할 — 교육부 대학 인권센터 안내·고용노동부·관할 보건소(이름·번호는 학교가 확인)
 *   g12-after-school.intro.three-years: 학급 응답 값은 가상 — 확인 불필요
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'gender', band: '고', topic: `gender.h.${topic}`, grades }, o, { id: `gender.h.${topic}.${o.id}` });
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
  // 분류판 글 카드(sortboard): 쉬움 = instant·showCount 와 앞 k장, 도전 = more(더할 카드 — 함정 포함)
  const BOARDQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const it = { prompt, toolOptions: Object.assign({ slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    it.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg), instant: true, showCount: true }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { more: hard.flat() }, target: tgt(hg) }; }
    return Object.assign(it, more);
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
  // 문장 빈칸(fill): lines = [[칸 id, '…___…', 카드 글]…]. 쉬움 = 앞 k줄
  const FILLQ = (prompt, lines, { k = 2, extra = [], hard = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const mk = (ls, ex) => Object.assign({ mode: 'fill', slots: ls.map(([id, label, , who]) => Object.assign({ id, label }, who ? { who } : {})), cards: [...ls.map((l) => l[2]).reverse(), ...ex] }, opt);
    const tg = (ls) => ({ fill: Object.fromEntries(ls.map(([id, , c]) => [id, c])) });
    const it = { prompt, toolOptions: mk(lines, extra), target: tg(lines), difficulty: d, levels: { easy: { prompt: pfx(prompt, `빈칸 ${k}개`), toolOptions: mk(lines.slice(0, k), extra.slice(0, 1)), target: tg(lines.slice(0, k)) } } };
    if (hard.length) it.levels.challenge = { prompt: pfx(prompt, `빈칸 ${lines.length + hard.length}개`), toolOptions: mk([...lines, ...hard], extra), target: tg([...lines, ...hard]) };
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
  // 갈림 2번(쉬움)·3번(기본)·3번 + 다른 끝까지(도전)
  const DIL3 = (prompt, scene, paths, reasons, good, { d = 0.4, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
        challenge: { prompt: pfx(prompt, '다른 끝도 가 보기'), target: Object.assign(at(3), { explore: 2 }) } } }, more);
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
  // 그래프 읽기(chart read): 쉬움 = 값 보이기, 도전 = 값 숨기고 확인 뒤에만
  const CHARTQ = (prompt, base, question, choices, pick, { why = null, d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'read' }, base, { question, choices }, why ? { why } : {}), target: { pick }, difficulty: d,
    levels: { easy: { toolOptions: { showValues: true } }, challenge: { toolOptions: { showValues: false, revealAfterCheck: true } } } }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };
  const HELPNO = '[학교가 확인해 넣는 신고·상담 번호]';

  const MODS = [];

  // ======================================================================================================
  // 1. 성의 세 측면과 성적 자기결정권 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-sex-dimensions', [10]);
    const SIDES = ['생물학적 측면', '심리적 측면', '사회문화적 측면'];
    const HEAD = [
      ['사춘기 호르몬 변화 연구 발표', '청소년 키 성장 시기 조사'],
      ['청소년 연애 고민 상담 늘어', '"나다운 모습" 찾는 10대 이야기'],
      ['광고 속 남녀 역할 논란', '"남자는 울면 안 돼" 말의 무게'],
    ];
    const REACT = [['1점', 3], ['2점', 4], ['3점', 6], ['4점', 8], ['5점', 9]];
    const REACT_T = '"내 몸은 내 것이니 무엇이든 내 마음대로" 반응(가상 학급 30명)';
    const LATE = { text: '토요일 저녁 친구 모임. 하린은 미리 9시에 집에 가기로 정해 두었다. 서준은 "오늘은 내가 정했으니 끝까지 같이 있자"고 한다. 너는 서준의 입장에서 고른다.', who: '서준', motif: 'house', choices: [
      { id: 'ask', text: '"9시에 가기로 한 까닭이 있어?" 하고 하린의 결정을 묻는다', result: '하린이 내일 아침 일정이 있어서 일찍 쉬고 싶다고 말한다.', impact: [{ who: '하린', text: '내 결정이 존중받는다고 느낀다', tone: 1 }],
        next: { text: '하린이 "넌 더 있고 싶으면 있어도 돼"라고 한다.', who: '서준', choices: [
          { id: 'respect', text: '정류장까지 함께 걷고, 나는 모임에 돌아온다', result: '두 사람 모두 자기 결정대로 저녁을 보낸다.', impact: [{ who: '하린', text: '편하게 집에 간다', tone: 1 }, { who: '서준', text: '나도 내 결정을 지킨다', tone: 1 }],
            next: { text: '돌아오자 친구들이 "여자친구가 가자는 대로 하냐"며 놀린다.', who: '서준', choices: [
              { id: 'own', text: '"각자 정한 걸 존중한 거야"라고 담담히 말한다', result: '친구들이 머쓱해하며 이야기를 바꾼다.', impact: [{ who: '서준', text: '존중을 지킨 것에 떳떳하다', tone: 1 }], ending: '서로의 결정을 묻고 존중하는 것은 약함이 아니라 관계를 지키는 힘이다.' },
              { id: 'mock', text: '"다음엔 끝까지 붙잡아 둘게"라고 맞장구친다', result: '친구들이 웃지만 하린이 이 말을 전해 듣고 서운해한다.', impact: [{ who: '하린', text: '내 결정이 놀림거리가 된다', tone: -1 }], ending: '상대의 결정을 놀림거리로 삼으면 존중이 무너진다.' }] } },
          { id: 'guilt', text: '"너 때문에 분위기 깨진다"며 서운함을 쏟아 낸다', result: '하린이 미안해하며 남지만 내내 불편해한다.', impact: [{ who: '하린', text: '죄책감 때문에 결정을 바꾼다', tone: -1 }], ending: '미안하게 만들어 얻은 대답은 존중받은 결정이 아니다.' }] } },
      { id: 'push', text: '"내가 정했으니까"라며 하린을 계속 붙잡는다', result: '하린이 마지못해 남지만 표정이 굳는다.', impact: [{ who: '하린', text: '내 결정이 무시된다', tone: -1 }],
        next: { text: '10시, 하린이 "정말 가야 해"라고 다시 말한다.', who: '서준', choices: [
          { id: 'stop', text: '"붙잡아서 미안해" 하고 바로 하린의 결정을 따른다', result: '하린이 집에 가며 "다음엔 처음부터 물어봐 줘"라고 한다.', impact: [{ who: '하린', text: '늦게라도 존중받는다', tone: 0 }], ending: '늦게라도 바로잡았지만, 처음부터 묻는 것이 존중이다.' },
          { id: 'more', text: '"한 번만 더"라며 계속 조른다', result: '하린이 혼자 자리를 떠나고 연락을 받지 않는다.', impact: [{ who: '하린', text: '믿음이 흔들린다', tone: -1 }, { who: '서준', text: '관계가 멀어진다', tone: -1 }], ending: '조르기는 상대의 결정을 꺾으려는 압력이다.' }] } }] };
    const LATE_R = [{ id: 'both', text: '나의 결정과 상대의 결정은 똑같이 존중받는다' }, { id: 'asked', text: '상대가 정한 까닭을 묻고 끝까지 들었다' }, { id: 'nopress', text: '상대의 결정을 바꾸게 조르거나 탓하지 않았다' },
      { id: 'lead', text: '연인이면 한쪽이 정한 대로 따라야 한다', why: '자기결정권은 상대에게 내 뜻을 따르게 할 권리가 아니에요.' }, { id: 'mood', text: '분위기를 위해 참는 것이 배려다', why: '한쪽만 참는 관계는 대등하지 않아요. 원하는 것을 말할 수 있어야 해요.' }];
    const PHOTO = { text: '서준이 둘이 찍은 사진을 SNS 프로필로 하자고 한다. 하린은 아직 사진을 공개하고 싶지 않다고 말한다.', who: '서준', motif: 'star', choices: [
      { id: 'wait', text: '"알겠어, 네가 괜찮을 때 다시 얘기하자"고 한다', result: '하린이 고맙다며 마음이 편해졌다고 한다.', impact: [{ who: '하린', text: '내 이미지를 내가 정한다', tone: 1 }],
        next: { text: '친구가 "사진 왜 안 올려? 숨기는 거야?"라고 묻는다.', choices: [
          { id: 'say', text: '"둘이 정한 일이야"라고만 답한다', result: '친구가 더 묻지 않는다.', impact: [{ who: '하린', text: '결정이 지켜진다', tone: 1 }], ending: '공개할지 말지는 사진 속 두 사람이 함께 정한다.' },
          { id: 'post', text: '눈치가 보여 하린 몰래 사진을 올린다', result: '하린이 사진을 보고 크게 실망한다.', impact: [{ who: '하린', text: '결정이 무시된다', tone: -1 }], ending: '남의 눈치는 상대의 결정을 무시할 까닭이 되지 않는다.' }] } },
      { id: 'force', text: '"우리 사이인데 뭐 어때"라며 바로 올린다', result: '하린이 사진을 내려 달라고 부탁한다.', impact: [{ who: '하린', text: '내 이미지를 잃은 느낌이 든다', tone: -1 }], ending: '가까운 사이여도 상대의 이미지는 상대가 정한다.' }] };
    const PHOTO_R = [{ id: 'img', text: '사진 속 사람은 자기 이미지를 정할 권리가 있다' }, { id: 'wait', text: '상대의 "아직"을 기다려 주었다' }, { id: 'close', text: '가까운 사이면 묻지 않아도 된다', why: '가까울수록 더 묻고 들어야 해요.' }];

    MODS.push(
      M({
        id: 'intro.news-headline', type: 'intro', title: '뉴스 제목으로 보는 성의 세 측면',
        method: '뉴스 제목 세 개를 세 측면으로 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 제목마다 핵심 낱말(호르몬·고민·역할)을 짚어 주고 함께 나눈다.', base: '가상 제목 여섯 개를 세 칸에 나누고, 두 칸에 걸쳐 보이는 제목 하나의 까닭을 말한다.', challenge: '세 칸 모두에 걸치는 가상 제목을 직접 지어 말한다.' },
        intro: {
          teacher: '"\'성\'이라고 하면 무엇이 먼저 떠오르나요? 몸과 생식만 떠오른다면 오늘 그 범위를 넓혀 봐요." 가상 기사 제목 여섯 개를 시연 단추로 생물학적·심리적·사회문화적 칸에 나누는 모습을 보여 준다. "성은 결국 몸 이야기죠"라는 말이 나오면 "\'남자는 울면 안 돼\'라는 말은 몸의 이야기일까요, 사회가 만든 기대일까요?"라고 되묻는다. 한 칸에 넣었지만 다른 칸과도 이어지는 제목이 있다는 점, 세 측면은 서로 이어져 있다는 점을 짚는다.',
          student: '가상 기사 제목 여섯 개를 생물학적·심리적·사회문화적 측면 칸에 나누어 보세요. 두 칸에 걸쳐 보이는 제목이 있다면 그 까닭도 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: SIDES, cards: mix(HEAD) }, sequence: [{ sort: Object.fromEntries(SIDES.map((s, i) => [s, HEAD[i]])) }] },
          art: { draw: 'three paper newspaper clippings pinned on a corkboard, each clipping with a small icon (a DNA ribbon, a heart-shaped speech bubble, a group of paper people), red threads connecting the clippings', banner: '성은 몸 이야기뿐일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '기사 제목은 모두 가상이다. 학생 자신의 연애·몸 이야기를 예로 꺼내게 하지 않는다. 두 칸에 걸치는 제목(예: 고민 상담)은 말로 다루고, 교구에서는 가장 가까운 칸 하나에 넣게 한다.',
      }),
      M({
        id: 'intro.quote-reaction', type: 'intro', title: '"내 몸은 내 것" 반응 그래프',
        method: '"내 몸은 내 것" 문장에 대한 반응 척도', tool: 'chart', minutes: 7,
        levels: { easy: '그래프 읽기 질문 두 개(가장 많은 점수·4점 이상 학생 수)만 함께 답한다.', base: '그래프를 읽고, 문장에서 빠진 관점(상대의 결정)을 보기에서 골라 한 줄로 말한다.', challenge: '문장을 권리와 책임이 함께 드러나게 고쳐 말한다.' },
        intro: {
          teacher: '"가상 학급 30명이 \'내 몸은 내 것이니 무엇이든 내 마음대로\'라는 문장에 1~5점으로 반응했어요. 5점이 가장 많네요. 이 문장, 어디까지 맞을까요?" 시연 단추로 \'상대의 결정을 존중할 책임\'이 빠졌다는 보기가 골라지는 모습을 보여 준다. "내 몸이니까 당연히 다 내 마음이죠"라는 말이 나오면 "내 결정이 다른 사람의 몸과 마음에 닿는 일이라면 어떨까요?"라고 되묻는다. 자기결정권은 내 결정을 지킬 권리이면서 상대의 결정을 존중할 책임과 짝이라는 점을 미리 밝힌다.',
          student: '가상 학급의 반응 그래프를 읽고, "내 몸은 내 것이니 무엇이든 내 마음대로"라는 문장에서 빠진 관점이 무엇인지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: REACT_T, unit: '명', xLabel: '반응 점수', yLabel: '학생 수', data: REACT, question: '이 문장에서 빠진 관점은?', choices: ['상대의 결정도 존중해야 한다는 관점', '몸은 자라면서 변한다는 관점', '점수가 높을수록 옳다는 관점', '그래프는 가상이라는 관점'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with five bars on a classroom board, a speech bubble card reading a short sentence above it, two paper students looking at the chart, one holding a pencil and one a question mark', banner: '내 결정, 어디까지일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 값이다. 우리 반 실제 점수를 모으려면 익명으로만 하고, 개인 점수를 묻거나 공개하지 않는다.',
      }),

      M({
        id: 'activity.rights-duty-map', type: 'activity', title: '권리와 책임의 짝 지도',
        method: '권리-책임 짝 마인드맵 만들기', tool: 'mindmap', minutes: 17,
        levels: { easy: '권리 가지 네 개가 판에 놓여 있고, 가지마다 짝이 되는 책임 카드만 붙인다(2쌍, 바로 확인).', base: '권리 네 가지에 책임 카드를 붙이고, 장면 카드를 알맞은 권리 가지에 나눈 뒤 바른 짝 문장을 고른다.', challenge: '함정 카드가 섞인 판에서 짝을 짓고, 권리끼리 부딪히는 장면 하나를 활동지 가지 사이에 메모한다.' },
        activity: {
          title: '자기결정권 가지 뻗기', tool: 'mindmap',
          teacher: '"가운데에 \'성적 자기결정권\'이 있어요. 정보를 알 권리, 거절할 권리, 결정을 바꿀 권리, 건강을 지킬 권리 — 가지마다 짝이 되는 책임은 무엇일까요?" 카드를 붙일 때마다 "이 권리를 상대도 똑같이 가진다면 나는 무엇을 해야 할까요?"라고 묻는다. \'상대가 내 결정을 따르게 할 권리\' 카드를 집는 학생에게 "그건 권리일까요, 상대의 권리를 빼앗는 일일까요?"라고 되묻는다. 모든 권리 가지 끝에는 \'상대의 같은 권리를 존중할 책임\'이 붙는다는 점을 짚는다.',
          task: '자기결정권의 권리 가지마다 짝이 되는 책임을 붙이고, 장면을 알맞은 권리에 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('권리 가지마다 짝이 되는 책임 카드를 붙이세요.', [['정보를 알 권리', '정확한 정보를 확인하고 소문을 퍼뜨리지 않는다'], ['거절할 권리', '상대의 거절을 그대로 받아들인다'], ['결정을 바꿀 권리', '상대가 마음을 바꾸면 따지지 않는다'], ['건강을 지킬 권리', '나와 상대의 건강을 함께 챙긴다']], { k: 2, extra: ['상대가 내 결정을 따르게 한다'], d: 0.3, opt: { topic: '성적 자기결정권' }, more: { hints: ['상대도 같은 권리를 가진다면 내가 지킬 일이 책임이에요.'] } }),
            SORTQ('가상 장면 카드를 관련된 권리 가지에 나누세요.', ['정보를 알 권리', '거절할 권리', '결정을 바꿀 권리', '건강을 지킬 권리'], [
              ['다온이 성 건강 정보를 보건 선생님께 묻는다', '수아가 믿을 만한 자료인지 출처를 확인한다'],
              ['유진이 손잡기를 원치 않는다고 말한다', '태리가 사진 찍기를 거절한다'],
              ['민재가 어제 한 약속을 다시 생각하겠다고 한다', '서아가 "아까는 좋았는데 지금은 싫어"라고 한다'],
              ['하윤이 몸이 아플 때 진료를 받기로 한다', '지안이 피곤해서 오늘 만남을 미룬다'],
            ], { k: 1, traps: ['연인이 정하면 따라가야 한다'], d: 0.35, opt: { topic: '권리와 장면' } }),
            PICKQ('권리와 책임이 바르게 짝지어진 문장만 고르세요.', ['나는 거절할 수 있고, 상대의 거절도 존중한다', '나는 결정을 바꿀 수 있고, 상대가 바꿔도 탓하지 않는다'], ['내가 거절했으니 상대는 내 부탁을 들어줘야 한다', '한 번 정한 일은 상대가 끝까지 지켜야 한다'], { d: 0.3, opt: { basket: '바른 짝 문장' }, more: { conclude: '성적 자기결정권은 내 결정을 지킬 권리이면서, 상대의 같은 권리를 존중할 책임과 늘 짝을 이뤄요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 사람의 권리가 부딪히는 가상 장면 하나를 쓰고, 두 권리를 함께 지킬 방법을 한 줄로 쓰세요.' }] },
        notes: '장면 카드의 인물은 가상이다. 학생 자신의 연애나 몸 상태를 예로 들게 하지 않는다. 쉬움 반은 권리 가지만 먼저 소리 내어 읽고 시작한다.',
      }),
      M({
        id: 'activity.case-dilemma', type: 'activity', title: '서로의 결정을 묻는 갈림길',
        method: '가상 커플의 결정 갈림길 따라가기', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 결과 장면을 읽은 뒤 근거를 고른다.', base: '갈림길 세 번을 지나 끝 장면에서 근거 세 장을 고르고, 사진 장면의 갈림길도 따라간다.', challenge: '첫 선택을 \'붙잡는다\'로 바꾼 길도 끝까지 가 보고, 두 길의 결과 차이를 활동지 표에 견준다.' },
        activity: {
          title: '하린과 서준의 저녁', tool: 'dilemma',
          teacher: '"가상 인물 하린과 서준의 이야기예요. 하린은 9시에 가기로 정했고, 서준은 \'내가 정했으니 끝까지 있자\'고 해요. 서준이라면 어떻게 할까요?" 장면마다 "이 선택에서 누구의 결정이 존중받았나요?"라고 묻는다. \'서운함을 쏟아 낸다\'를 고른 학생에게 "하린이 남았다면 그건 하린이 원해서일까요, 미안해서일까요?"라고 되묻는다. 자기결정권은 상대에게 내 뜻을 따르게 할 권리가 아니고, 미안하게 만들거나 졸라서 얻은 대답은 존중받은 결정이 아니라는 점을 짚는다.',
          task: '하린과 서준의 갈림길을 따라가며 서로의 결정이 지켜지는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('서준의 입장에서 두 사람의 결정이 모두 지켜지는 길을 고르고 근거를 고르세요.', LATE, [['ask', 'respect', 'own']], LATE_R, ['both', 'asked', 'nopress'], { d: 0.4 }),
            DILQ('커플 사진 장면에서 하린의 결정이 지켜지는 길을 고르고 근거를 고르세요.', PHOTO, [['wait', 'say']], PHOTO_R, ['img', 'wait'], { d: 0.35 }),
            EXPLOREQ('저녁 장면에서 \'계속 붙잡는다\' 길도 끝까지 가 보고 결과를 견주세요.', LATE, LATE_R, ['붙잡는 길의 끝 장면을 확인했다', '두 길에서 하린에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '처음부터 상대의 결정을 묻고 들으면 두 사람 모두 자기 결정을 지켜요. 붙잡고 조르는 길은 관계의 믿음을 무너뜨려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '첫 선택에 따라 달라진 결과를 견주세요.', columns: ['첫 선택', '하린에게 생긴 일', '서준에게 생긴 일'], cells: [['결정을 묻는다', '', ''], ['계속 붙잡는다', '', '']] }] },
        notes: '인물과 장면은 가상이며 성적 장면은 다루지 않는다. 학생 자신의 연애 경험을 꺼내게 하지 않는다. 놀리는 친구 장면에서는 성별 고정관념(\'여자친구 말대로 하냐\')이 존중을 깎아내리는 말이라는 점을 함께 짚는다.',
      }),
      M({
        id: 'activity.charter-draft', type: 'activity', title: '학급 자기결정과 존중 원칙문',
        method: '학급 "자기결정과 존중" 원칙문 기준표 글쓰기', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문항마다 문장 틀("나는 ~할 권리가 있고, ~을 존중한다")을 보고 쓴다.', base: '세 측면 정리 → 권리·책임 짝 문장 → 원칙문 다섯 줄 → 말투 다듬기 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 원칙이 지켜지지 않는 가상 상황에 원칙을 적용한 예를 덧붙인다.' },
        activity: {
          title: '우리 반 원칙문 쓰기', tool: 'rubric-writing',
          teacher: '"오늘 배운 세 측면과 권리-책임 짝을 근거로 우리 반 \'자기결정과 존중\' 원칙문을 써 봐요. 좋은 원칙문은 구체적인 행동이 보이는 문장이에요." 먼저 세 측면을 한 문장씩 정리하고, 권리와 책임이 한 문장에 함께 드러나게 쓰게 한다. "서로 존중하자"처럼 막연하게 쓴 학생에게 "존중한다는 것을 교실에서 무엇을 하는 모습으로 보여 줄 수 있을까요?"라고 묻는다. 명령하는 말투보다 함께 약속하는 말투가 원칙을 지키게 한다는 점을 짚는다.',
          task: '세 측면과 권리·책임 짝을 근거로 학급 원칙문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('성의 세 측면을 한 문장씩, 모두 3문장으로 정리하세요.', '성의 생물학적·심리적·사회문화적 측면을 각각 한 문장으로 설명하세요.', ['세 측면을 모두 다루었다', '측면마다 예를 하나씩 들었다', '몸 이야기만으로 끝내지 않았다'], { min: 60, max: 350, sent: [3, 4], must: [['심리'], ['사회']], starter: '생물학적 측면은 ~이고, 심리적 측면은 ~이며, 사회문화적 측면은 ~이다.', plus: '세 측면이 서로 이어지는 예를 썼다', d: 0.35 }),
            RWQ('권리와 책임이 함께 드러나는 문장을 2문장으로 쓰세요.', '성적 자기결정권의 권리 하나와 짝이 되는 책임을 한 문장 안에 함께 쓰세요. 두 문장을 쓰세요.', ['권리와 책임을 한 문장에 함께 썼다', '상대의 결정을 존중하는 내용이 있다', '누구를 탓하는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['권리'], ['존중', '책임']], starter: '나는 ~할 권리가 있고, 상대가 ~할 때 그것을 존중한다.', plus: '두 문장이 서로 다른 권리를 다루었다', d: 0.35 }),
            RWQ('학급 원칙문 다섯 줄을 쓰세요.', '우리 반 "자기결정과 존중" 원칙문을 다섯 문장으로 쓰세요. 문장마다 교실에서 할 행동이 보이게 쓰세요.', ['세 측면 가운데 둘 이상을 반영했다', '권리와 책임의 짝이 드러난다', '구체적인 행동으로 썼다', '함께 약속하는 존중의 말투다'], { min: 120, max: 500, sent: [5, 6], must: [['존중']], starter: '1. 우리는 ~을 묻고 듣는다. 2. 우리는 ~', plus: '원칙이 지켜지지 않는 가상 상황에 원칙을 적용한 예를 덧붙였다', d: 0.45 }),
            RWQ('원칙문에서 가장 고치고 싶은 한 줄을 다시 써 보세요.', '원칙문 가운데 막연하거나 명령하는 말투인 한 줄을 골라, 행동이 보이고 함께 약속하는 말투로 고쳐 쓰세요.', ['고치기 전 문장을 밝혔다', '고친 문장에 행동이 보인다', '고친 까닭을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['고쳐', '바꿔', '고친']], starter: '처음 문장은 ~였는데, ~로 고쳐 썼다. 왜냐하면 ~', d: 0.4, more: { conclude: '좋은 원칙문은 권리와 책임이 함께 보이고, 교실에서 할 행동이 구체적으로 드러나요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 원칙문을 기준표로 다시 점검하세요.', columns: ['기준', '내 문장에서 찾은 곳'], cells: [['세 측면 반영', ''], ['권리·책임 짝', ''], ['구체적 행동', ''], ['존중하는 말투', '']] }, { type: 'short', prompt: '원칙문 가운데 우리 반이 가장 먼저 지킬 한 줄을 고르고 그 까닭을 쓰세요.' }] },
        notes: '원칙문은 학급 게시용으로 모을 수 있지만 이름은 붙이지 않는다. 학생 개인의 연애·몸 이야기를 예로 쓰지 않게 안내한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.exit-check', type: 'wrap', title: '세 측면 한 문장 정리',
        method: '세 측면 한 문장 출구 점검', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 첫 빈칸을 함께 채우고, 카드 하나로 문장을 만든다.', base: '빈칸 네 개를 채우고, 카드 두 개를 이어 한 문장을 쓴다.', challenge: '카드 세 개로 친구에게 설명하는 문장을 만들어 짧은 글로 낸다.' },
        wrap: {
          teacher: '"오늘 낱말 — 심리적 성, 사회문화적 성, 자기결정권, 책임 — 을 문장으로 묶어 봐요." 빈칸을 채운 뒤 두세 명에게 카드 두 개로 이은 문장을 읽게 한다. \'요구\' 카드를 자기결정권 빈칸에 넣은 학생에게 "내가 원하는 것을 상대에게 요구하는 것이 자기결정권일까요?"라고 되묻는다. 쉬움 반은 첫 빈칸을 함께 채우고 시작하고, 도전 반은 세 낱말로 설명하는 문장을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '성별에 대한 나의 느낌과 생각은 성의 ___ 측면이다.' }, { id: 'f2', label: '사회가 성별에 거는 기대와 역할은 성의 ___ 측면이다.' }, { id: 'f3', label: '성적 자기결정권은 내 결정을 지키고 상대의 결정을 ___할 책임과 짝이다.' }, { id: 'f4', label: '거절할 권리에는 상대의 거절을 받아들일 ___이 따른다.' }], cards: ['심리적', '사회문화적', '존중', '책임', '요구', '생물학적', '복종'] }, prompt: '오늘 개념 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '심리적', f2: '사회문화적', f3: '존중', f4: '책임' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '성적 자기결정권을 가장 바르게 설명한 말을 고르세요.', options: ['내가 원하는 것을 상대에게 요구할 권리', '내 결정을 지키고 상대의 결정도 존중하는 권리와 책임', '어른이 되면 저절로 생기는 권리'], answer: 1, difficulty: 0.2, explain: '자기결정권은 상대의 같은 권리를 존중할 책임과 짝이에요.' },
            { type: 'short', prompt: '낱말 카드 두 개를 골라 오늘 배운 것을 한 문장으로 이어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성의 세 측면과 성적 자기결정권',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '성은 생물학적·심리적·___ 측면으로 나누어 볼 수 있다.', answer: '사회문화적' },
            { type: 'short', prompt: '"자기결정권은 내가 원하는 것을 요구할 권리다"라는 말을 바르게 고쳐 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 사회문화적 · 존중 · 책임', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '나는 거절할 수 있고, 상대의 거절도 ___한다.', answer: '존중' }] },
        },
      }),
      M({
        id: 'wrap.self-scale', type: 'wrap', title: '생각이 바뀐 정도 다시 매기기',
        method: '오늘 생각이 바뀐 정도 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가상 학급 그래프를 함께 읽고, 내 점수만 다시 고른다.', base: '내 점수를 다시 고르고 바뀐 까닭을 한 줄 쓴다.', challenge: '점수가 바뀌지 않았다면 그 근거를 수업 내용과 이어 쓴다.' },
        wrap: {
          teacher: '"도입에서 본 문장 \'내 몸은 내 것이니 무엇이든 내 마음대로\'에 지금 다시 점수를 매겨 봐요. 가상 학급은 수업 뒤 4·5점이 줄었어요. 왜 그랬을까요?" 그래프를 읽은 뒤 각자 점수를 다시 고르게 한다. 점수가 그대로인 학생에게 "그대로여도 괜찮아요. 오늘 배운 \'상대의 결정\'과 이어서 근거를 말해 볼까요?"라고 묻는다. 점수는 익명으로만 다루고 서로 묻지 않는다는 점을 먼저 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '4·5점을 고른 학생 수(가상 학급 30명)', unit: '명', xLabel: '때', yLabel: '학생 수', data: [['수업 전', 17], ['수업 뒤', 8]], question: '수업 뒤 4·5점이 줄어든 까닭으로 가장 알맞은 것은?', choices: ['상대의 결정을 존중할 책임도 함께 보게 되어서', '몸에 대한 권리가 없어져서', '그래프 눈금이 바뀌어서'] }, prompt: '가상 학급 그래프를 읽고 알맞은 까닭을 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '"내 몸은 내 것이니 무엇이든 내 마음대로"라는 문장', feeling: '생각', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '매우 그렇다' } }, prompt: '지금 내 생각을 1~5점으로 다시 고르세요(익명).', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'short', prompt: '점수가 바뀌었다면 바뀐 까닭을, 그대로라면 그 근거를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 생각 다시 매기기',
          items: [
            { type: 'short', prompt: '"내 몸은 내 것이니 무엇이든 내 마음대로"를 권리와 책임이 함께 드러나게 고쳐 쓰세요.' },
            { type: 'short', prompt: '오늘 수업에서 내 생각을 가장 크게 움직인 장면이나 문장 하나를 쓰세요.' },
          ],
        },
        notes: '개인 점수는 익명으로만 다루고 발표시키지 않는다. 가상 학급 그래프 값은 수업용이다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 묻고 듣고 존중하는 동의 대화 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-consent-talk', [10]);
    const CUTS = [{ id: 'c1', text: '1컷: 체육대회 단체 사진을 찍는다', motif: 'star' }, { id: 'c2', text: '2컷: 묻지 않고 바로 SNS에 올린다', motif: 'cloud' }, { id: 'c3', text: '3컷: “올려도 돼?” 묻고 대답 전에 올린다', motif: 'cloud' }, { id: 'c4', text: '4컷: 한 친구가 “나는 빼 줘”라고 해서 지우고 다시 올린다', motif: 'sun' }];
    const SCRIPT = ['“이번 주말 사진, 단톡방에 올려도 돼?”', '대답을 재촉하지 않고 기다린다', '“음… 내 얼굴 나온 건 좀 그래.”', '“알겠어. 네 얼굴 나온 건 빼고 올릴게.”', '“고마워. 풍경 사진은 좋아.”', '다음 날, “어제 그 풍경 사진도 내려 줄래?”', '“그래, 바로 내릴게. 말해 줘서 고마워.”', '사진을 내리고 내렸다고 알려 준다'];
    const GAME = { text: '동아리 모임 벌칙 게임. 진 지호에게 친구들이 “좋아하는 사람한테 고백 영상 찍어 올려. 다들 하는데 왜 너만 빼?”라고 한다. 지호는 하고 싶지 않다. 너는 지호의 입장에서 고른다.', who: '지호', motif: 'cloud', choices: [
      { id: 'refuse', text: '“나는 안 할래. 다른 벌칙으로 하자”고 분명히 말한다', result: '잠깐 조용해지고, 한 친구가 다른 벌칙을 꺼낸다.', impact: [{ who: '지호', text: '내 결정을 지킨다', tone: 1 }],
        next: { text: '다른 친구가 “분위기 깨네”라며 계속 조른다.', who: '지호', choices: [
          { id: 'again', text: '“싫다고 했어. 조르지 말아 줘”라고 한 번 더 말한다', result: '친구들이 머쓱해하며 벌칙을 바꾼다.', impact: [{ who: '지호', text: '압력에 지지 않는다', tone: 1 }],
            next: { text: '모임이 끝나고, 조르던 친구 한 명이 너(지호의 친구)에게 “걔 너무 예민하지 않아?”라고 묻는다. 이번엔 네가 지호의 친구로서 고른다.', who: '지호의 친구', choices: [
              { id: 'stopit', text: '“싫다는 걸 계속 조르는 건 압력이야. 다음엔 우리가 먼저 멈추자”고 한다', result: '친구가 잠시 생각하더니 지호에게 사과하겠다고 한다.', impact: [{ who: '지호', text: '존중받는다', tone: 1 }], ending: '“싫어”는 그 자체로 충분한 대답이다. 압력을 멈추는 말은 곁에 있는 사람도 할 수 있다.' },
              { id: 'agree', text: '“좀 예민하긴 하지”라고 맞장구친다', result: '다음 모임에서도 지호를 향한 놀림이 이어진다.', impact: [{ who: '지호', text: '거절했다고 놀림받는다', tone: -1 }], ending: '거절한 사람을 예민하다고 몰면 다음 거절이 어려워진다.' }] } },
          { id: 'give', text: '더 버티기 어려워 “알았어, 할게”라고 한다', result: '지호가 영상을 찍지만 하루 종일 마음이 무겁다.', impact: [{ who: '지호', text: '원하지 않은 일을 한다', tone: -1 }, { who: '영상 속 상대', text: '원치 않게 영상에 등장한다', tone: -1 }], ending: '졸라서 얻은 “할게”는 동의가 아니다.' }] } },
      { id: 'later', text: '“나중에 할게”라며 미룬다', result: '친구들이 “그럼 지금 하자”며 휴대폰을 내민다.', impact: [{ who: '지호', text: '압력이 더 커진다', tone: -1 }],
        next: { text: '모두가 지호를 쳐다보며 기다린다.', who: '지호', choices: [
          { id: 'clear', text: '“아니, 나는 안 할 거야”라고 분명히 말한다', result: '친구들이 아쉬워하지만 벌칙을 바꾼다.', impact: [{ who: '지호', text: '결정을 지킨다', tone: 1 }], ending: '미루는 말보다 분명한 거절이 압력을 멈춘다. 그래도 “나중에”는 “좋아”가 아니다.' },
          { id: 'film', text: '눈치가 보여 영상을 찍는다', result: '영상이 단톡방에 퍼지고 지호는 후회한다.', impact: [{ who: '지호', text: '후회한다', tone: -1 }], ending: '무리의 압력 속에서 한 대답은 자유로운 동의가 아니다.' }] } },
      { id: 'follow', text: '분위기를 맞추려고 바로 영상을 찍는다', result: '영상 속 상대도 놀라 불편해한다.', impact: [{ who: '지호', text: '원하지 않은 일을 한다', tone: -1 }, { who: '영상 속 상대', text: '동의 없이 영상에 나온다', tone: -1 }], ending: '분위기는 동의를 대신하지 못한다.' }] };
    const GAME_R = [{ id: 'press', text: '조르거나 무리가 압박해 얻은 “좋아”는 동의가 아니다' }, { id: 'no', text: '“싫어”는 까닭을 대지 않아도 충분한 대답이다' }, { id: 'stop', text: '거절한 사람을 놀리지 않고 압력을 멈춘다' },
      { id: 'said', text: '결국 하겠다고 했으니 동의한 것이다', why: '압력 속의 대답은 자유로운 동의가 아니에요.' }, { id: 'all', text: '다들 하니까 괜찮다', why: '여럿이 한다고 한 사람의 결정을 대신하지 못해요.' }];
    const POLL = [['그렇다', 45], ['아니다', 35], ['모르겠다', 20]];
    const POLL_T = '“동의를 묻는 건 분위기를 깬다”(가상 고교생 설문, %)';

    MODS.push(
      M({
        id: 'intro.photo-ask', type: 'intro', title: '사진 올리기 전 네 컷',
        method: '사진 올리기 전 묻기 장면 분석', tool: 'story', minutes: 7,
        levels: { easy: '교사가 문제가 있는 컷(2·3컷)을 짚어 주고 함께 이유를 말한다.', base: '네 컷을 ‘묻지 않음’·‘묻고 듣지 않음’·‘동의 지킴’ 칸에 나눈다.', challenge: '네 컷을 동의가 지켜지는 흐름으로 다시 배열해 말한다.' },
        intro: {
          teacher: '“체육대회 단체 사진을 SNS에 올리는 가상 네 컷이에요. 어느 컷에서 동의가 빠졌을까요?” 시연 단추로 컷 카드가 세 칸에 나뉘는 모습을 보여 준다. “물어봤으니까 3컷은 괜찮잖아요”라는 말이 나오면 “묻고 나서 대답을 듣지 않았다면, 그건 물은 걸까요?”라고 되묻는다. 동의는 묻기에서 끝나지 않고 대답을 듣고 그 대답대로 하는 데까지라는 점을 짚는다.',
          student: '사진을 올리는 가상 네 컷을 보고, 동의를 묻지 않은 컷과 물었지만 대답을 듣지 않은 컷을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'sort', slots: [{ id: 'none', label: '묻지 않음' }, { id: 'deaf', label: '묻고 듣지 않음' }, { id: 'ok', label: '동의 지킴' }], cards: CUTS }, sequence: [{ sort: { none: ['c2'], deaf: ['c3'], ok: ['c4'] } }] },
          art: { draw: 'four paper comic panels in a row showing students posing for a group photo on a sports day, a phone uploading the photo, a speech bubble with a question mark, and a hand raised saying wait', banner: '올리기 전에 물었나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '네 컷은 가상이다. 1컷(사진 찍기)은 어느 칸에도 넣지 않는 장면이다. 우리 반 실제 사진·계정을 예로 쓰지 않는다.',
      }),
      M({
        id: 'intro.myth-poll', type: 'intro', title: '“묻는 건 어색하다” 설문 읽기',
        method: '"묻는 건 어색하다" 통념 설문 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '원그래프의 가장 큰 칸(그렇다 45%)만 함께 읽는다.', base: '두 칸을 견주어 읽고, 다수 의견이 반드시 옳은지 묻는 질문을 하나 말한다.', challenge: '설문 문항 자체가 한쪽으로 기울어 있지 않은지 찾아 말한다.' },
        intro: {
          teacher: '“가상 고교생 설문에서 45%가 ‘동의를 묻는 건 분위기를 깬다’에 그렇다고 했어요. 가장 많으니까 맞는 말일까요?” 시연 단추로 ‘많은 사람이 그렇게 느껴도 묻는 것은 필요하다’ 보기가 골라지는 모습을 보여 준다. “다들 어색하다는데 굳이 물어야 해요?”라는 말이 나오면 “어색함과 상대가 원치 않는 일을 겪는 것, 어느 쪽이 더 무거울까요?”라고 되묻는다. 설문은 사람들의 느낌을 보여 줄 뿐, 무엇이 옳은지는 근거로 따져야 한다는 점을 짚는다.',
          student: '가상 설문 원그래프를 읽고, 다수가 그렇다고 답한 생각이 반드시 옳은지 질문을 하나 만들어 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: POLL_T, unit: '%', data: POLL, question: '그래프를 바르게 해석한 것은?', choices: ['많은 사람이 그렇게 느껴도 묻는 것은 필요하다', '45%가 그렇다고 했으니 묻지 않는 게 맞다', '모르겠다가 가장 많다', '설문은 늘 정답을 알려 준다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart split into three colored slices on a board, a speech bubble asking may I, two paper students looking thoughtful beside it, one tilting the chart to look closely', banner: '많으면 옳을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문 값은 수업용 가상 값이다. 도전 반에서는 ‘분위기를 깬다’라는 낱말이 이미 답을 한쪽으로 이끄는 표현이라는 점을 찾아보게 한다.',
      }),

      M({
        id: 'activity.script-build', type: 'activity', title: '동의 대화 대본 차례',
        method: '동의 대화 대본 차례 짜기', tool: 'timeline', minutes: 17,
        levels: { easy: '대사 카드 다섯 장(묻기~고마움)만 차례로 놓는다.', base: '대사 카드 여덟 장(철회까지)을 차례로 놓고, 대화 단계에 맞는 대사를 나누고, 끼어들면 안 되는 대사를 걸러 낸다.', challenge: '함정 대사가 섞인 판에서 차례를 놓고, 활동지에 중간에 마음을 바꾸는 대사를 직접 써 넣는다.' },
        activity: {
          title: '묻기에서 철회까지', tool: 'timeline',
          teacher: '“동의 대화는 묻기 → 기다리기 → 대답 확인 → 거절이나 철회 존중으로 이어져요. 가상 대화 대본을 차례로 놓아 볼까요?” 카드를 놓을 때마다 “이 대사는 대화의 어느 단계인가요?”라고 묻는다. ‘어제는 된다며?’ 같은 카드를 넣으려는 학생에게 “어제 좋다고 했으면 오늘도 좋은 걸까요?”라고 되묻는다. 한 번 좋다고 했어도 언제든 마음을 바꿀 수 있고, 그 철회도 같은 무게로 존중한다는 점을 짚는다.',
          task: '동의 대화 대사를 차례로 놓고, 단계마다 알맞은 대사를 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('사진 올리기 동의 대화의 대사 카드를 차례로 놓으세요.', SCRIPT, { k: 5, traps: ['“어제는 된다며? 그냥 둬.”'], d: 0.35, opt: { axis: ['대화 처음', '대화 끝'] } }),
            SORTQ('대사를 대화 단계 칸에 나누세요.', ['묻기', '대답 확인', '거절·철회 존중'], [
              ['“같이 사진 찍어도 될까?”', '“이 영상 올려도 괜찮아?”'],
              ['“지금 좋다는 거지?”', '“망설여지면 안 해도 돼.”'],
              ['“알겠어, 안 할게.”', '“마음 바뀌었구나. 바로 지울게.”'],
            ], { k: 1, traps: ['“대답 없으니까 괜찮은 거지?”', '“한 번만 해 줘.”'], d: 0.35, opt: { axis: ['처음', '끝'] } }),
            PICKQ('동의라고 볼 수 없는 장면만 고르세요.', ['대답 없이 휴대폰만 보는 친구', '“아… 응…” 하고 망설이며 말끝을 흐림', '여러 번 조르자 “알았어”라고 함'], ['“좋아, 올려 줘!”라고 분명히 말함', '“얼굴 나온 건 빼고는 괜찮아”라고 말함'], { d: 0.35, opt: { mode: 'pick', basket: '동의가 아닌 장면', axis: ['처음', '끝'] }, more: { conclude: '침묵·망설임·조르기 뒤의 대답은 동의가 아니에요. 동의는 자유롭고 분명해야 하고, 언제든 철회할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대본 중간에 한 사람이 마음을 바꾸는 대사와, 그것을 존중하는 대답 대사를 한 줄씩 쓰세요.' }] },
        notes: '대본 상황은 사진·영상 공유로 한정했다(성적 장면을 다루지 않는다). 짝과 읽을 때도 가상 인물로 읽게 한다.',
      }),
      M({
        id: 'activity.pressure-dilemma', type: 'activity', title: '“다들 하는데” 압력 갈림길',
        method: '조르기·압력 장면 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 한 번(따르기·미루기·거절하기)에서 결과 장면을 보고 근거를 고른다.', base: '갈림길 두 번을 따라가 결과를 보고, 압력으로 얻은 대답이 동의가 아닌 근거를 고른다.', challenge: '갈림길 세 번 — 마지막에 지호의 친구 입장에서 압력을 멈추는 말까지 고른다.' },
        activity: {
          title: '지호의 벌칙 게임', tool: 'dilemma',
          teacher: '“가상 인물 지호가 벌칙 게임에서 ‘다들 하는데 왜 너만 빼?’라는 말을 들어요. 지호라면 어떻게 할까요?” 장면마다 “이 대답은 지호가 정말 원해서 나온 걸까요?”라고 묻는다. ‘결국 하겠다고 했으니 동의한 것’ 카드를 고른 학생에게 “여러 명이 쳐다보며 조르는 자리에서 나온 ‘할게’도 자유로운 대답일까요?”라고 되묻는다. 압력으로 얻은 대답은 동의가 아니고, 거절은 까닭이 없어도 충분하며, 곁에 있는 친구도 압력을 멈출 수 있다는 점을 짚는다.',
          task: '지호의 갈림길을 따라가며 압력에 지지 않는 길을 고르고, 동의가 아닌 까닭을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지호의 입장에서 결정을 지키는 길을 고르고 근거를 고르세요.', GAME, [['refuse', 'again', 'stopit']], GAME_R, ['press', 'no', 'stop'], { d: 0.4 }),
            DILQ('‘나중에’로 미룬 길에서 결정을 지키는 길을 고르고 근거를 고르세요.', { text: GAME.text, who: GAME.who, motif: GAME.motif, choices: GAME.choices.filter((c) => c.id !== 'refuse') }, [['later', 'clear']], GAME_R, ['press', 'no'], { d: 0.35 }),
            EXPLOREQ('‘바로 영상을 찍는다’ 길도 끝까지 가 보고 결과를 견주세요.', GAME, GAME_R, ['분위기에 따른 길의 끝을 확인했다', '두 길에서 지호와 영상 속 상대에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '조르기와 무리의 압력은 대답을 바꿀 수는 있어도 동의를 만들지는 못해요. 분명한 거절과 곁에서 멈추는 말이 결정을 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지호의 친구라면 압력을 멈추기 위해 모임에서 할 말을 한 문장으로 쓰세요.' }] },
        notes: '벌칙 게임 장면은 가상이다. 학생에게 실제로 겪은 압력을 말하게 하지 않는다. 고백 영상 속 상대도 동의 없이 등장하는 피해를 입는다는 점을 함께 짚는다.',
      }),
      M({
        id: 'activity.consent-guide', type: 'activity', title: '후배용 동의 대화 안내 카드',
        method: '또래용 동의 안내 카드 설계와 기준표 점검', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문항마다 말 예시 목록(문장 틀)을 보고 골라 고쳐 쓴다.', base: '묻는 말 2개 → 거절 존중 말 2개 → 철회 받아들이는 말 1개 → 안내 카드 완성 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준이 하나 더 붙고, 말 없이 보내는 거절 신호를 읽는 법을 한 줄 더한다.' },
        activity: {
          title: '동의 대화 안내 카드 쓰기', tool: 'rubric-writing',
          teacher: '“중학생 후배에게 줄 ‘동의 대화 안내 카드’를 만들어요. 묻는 말, 거절을 존중하는 말, 철회를 받아들이는 말이 들어가야 해요.” 먼저 묻는 말을 쓰고 “이 말을 들은 사람이 편하게 ‘싫어’라고 할 수 있을까요?”라고 묻는다. “괜찮지? 그렇지?”처럼 답을 정해 놓고 묻는 말을 쓴 학생에게 “이 질문에 ‘아니’라고 답하기 쉬울까요?”라고 되묻는다. 좋은 묻는 말은 거절할 자리를 열어 두는 말이라는 점을 짚는다.',
          task: '후배에게 줄 동의 대화 안내 카드의 문장을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('상대가 편하게 답할 수 있는 묻는 말 2개를 쓰세요.', '사진 공유·연락·만남 같은 일상 장면에서 동의를 묻는 말 두 문장을 쓰세요.', ['답을 정해 놓지 않고 물었다', '거절할 자리를 열어 두었다', '존중하는 말투다'], { min: 30, max: 250, sent: [2, 3], must: [['?', '까', '래']], starter: '“~해도 괜찮아? 싫으면 말해 줘.”', plus: '말 없이 망설이는 신호를 보면 다시 묻는 말을 넣었다', d: 0.35 }),
            RWQ('거절을 존중하는 말 2개를 쓰세요.', '상대가 “싫어” 또는 “아직은”이라고 답했을 때 존중하는 대답 두 문장을 쓰세요.', ['조르거나 따지지 않았다', '상대를 탓하지 않았다', '고마움이나 존중을 표현했다'], { min: 30, max: 250, sent: [2, 3], must: [['알겠', '괜찮', '고마']], starter: '“알겠어, 말해 줘서 고마워.”', plus: '거절한 뒤에도 관계가 이어진다는 말을 넣었다', d: 0.35 }),
            RWQ('철회를 받아들이는 말 1개와 그 까닭을 쓰세요.', '한 번 좋다고 했던 사람이 마음을 바꿨을 때 받아들이는 말과, 그래야 하는 까닭을 쓰세요.', ['“어제는 된다며” 같은 따지는 말이 없다', '바로 그 결정대로 하겠다고 했다', '철회도 존중해야 하는 까닭을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['바뀌', '바꿔', '철회']], starter: '“마음이 바뀌었구나. 바로 ~할게.” 왜냐하면 ~', d: 0.4 }),
            RWQ('안내 카드 첫머리 문장과 마무리 문장을 쓰세요.', '후배에게 동의 대화가 왜 필요한지 알려 주는 첫머리 한 문장과, 기억할 점을 담은 마무리 한 문장을 쓰세요.', ['자유롭고 분명한 동의를 설명했다', '압력·조르기가 동의가 아니라고 밝혔다', '후배가 이해할 쉬운 말이다'], { min: 40, max: 300, sent: [2, 3], must: [['동의']], starter: '동의 대화는 ~이다. 기억할 것은 ~', plus: '말 없이 보내는 거절 신호를 읽는 법을 한 줄 더했다', d: 0.4, more: { conclude: '좋은 동의 대화는 거절할 자리를 열어 두고 묻고, 대답을 듣고, 거절과 철회를 같은 무게로 존중해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안내 카드에 들어간 문장을 칸에 옮겨 쓰세요.', columns: ['칸', '내 문장'], cells: [['묻는 말', ''], ['거절 존중 말', ''], ['철회 받아들이는 말', '']] }, { type: 'short', prompt: '내 안내 카드를 받은 후배가 가장 먼저 써 볼 말 한 줄을 골라 쓰세요.' }] },
        notes: '안내 카드의 장면은 사진 공유·연락·만남 같은 일상으로 한정한다. 성적 장면의 대사를 쓰게 하지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.one-line', type: 'wrap', title: '“동의는 ___이다” 한 줄 정의',
        method: '"동의는 ___ 이다" 한 줄 정의', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 두 빈칸을 함께 채우고, 나머지 빈칸 하나를 채운다.', base: '빈칸 세 개를 카드로 채워 동의의 정의를 완성한다.', challenge: '완성한 정의에 맞지 않는 반례 하나를 출구 질문에 붙인다.' },
        wrap: {
          teacher: '“오늘 배운 동의를 한 줄로 정의해 봐요. 동의는 어떻게 내려지고, 언제까지 유효할까요?” 빈칸을 채운 뒤 두세 명에게 정의를 소리 내어 읽게 한다. ‘한 번이면’ 카드를 넣은 학생에게 “어제 좋다고 했으면 오늘도 좋은 걸까요?”라고 되묻는다. 쉬움 반은 두 빈칸을 함께 채우고, 도전 반은 정의에 맞지 않는 반례(침묵·조르기 뒤의 대답)를 하나 붙이게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '동의는 압력 없이 ___ 내린 결정이다.' }, { id: 'f2', label: '동의는 말이나 행동으로 ___ 드러나야 한다.' }, { id: 'f3', label: '동의는 ___ 철회할 수 있다.' }], cards: ['자유롭게', '분명하게', '언제든', '한 번이면', '조용히', '끝까지'] }, prompt: '동의의 한 줄 정의를 낱말 카드로 채우세요.', target: { fill: { f1: '자유롭게', f2: '분명하게', f3: '언제든' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '동의로 볼 수 있는 것을 고르세요.', options: ['대답 없이 웃기만 했다', '“좋아, 해도 돼”라고 분명히 말했다', '여러 번 조르자 “알았어”라고 했다'], answer: 1, difficulty: 0.2, explain: '침묵이나 조르기 뒤의 대답은 동의가 아니에요.' },
            { type: 'short', prompt: '내가 완성한 정의에 맞지 않는 반례(동의가 아닌 장면) 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '묻고 듣고 존중하는 동의 대화',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '침묵은 ___가 아니다.', answer: '동의' },
            { type: 'short', prompt: '“한 번 좋다고 하면 끝까지 유효하다”는 말을 바르게 고쳐 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 동의 · 언제든 · 철회', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '동의는 ___ 철회할 수 있다.', answer: '언제든' }] },
        },
      }),
      M({
        id: 'wrap.peer-scale', type: 'wrap', title: '대본 실천 점검과 3분 읽기',
        method: '대화 대본 실천 가능성 점검', tool: 'timer', minutes: 7,
        levels: { easy: '스스로 점검 칸만 표시한다.', base: '점검을 표시하고, 3분 타이머를 맞춰 짝과 대본 한 줄을 소리 내어 읽는다.', challenge: '읽으며 어색했던 대사를 바로 고쳐 다시 읽는다.' },
        wrap: {
          teacher: '“오늘 만든 대사를 실제로 쓸 수 있을까요? 먼저 스스로 점검하고, 3분 동안 짝과 한 줄씩 소리 내어 읽어 봐요.” 점검을 마친 뒤 타이머를 3분으로 맞추게 한다. “소리 내서 하니까 너무 어색해요”라는 학생에게 “어색한 건 처음이라서예요. 어떤 낱말을 바꾸면 내 말처럼 들릴까요?”라고 묻는다. 읽을 때는 가상 인물 이름으로 읽고, 실제 관계를 떠올려 말하게 하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '대본 실천 점검' }, prompt: '내 대본을 스스로 점검하고 표시하세요.', target: { selfCheck: ['실제로 쓸 수 있는 대사 하나를 골랐다', '어색한 대사 하나를 찾았다', '어색한 대사를 고칠 방법을 정했다'] }, difficulty: 0.1 },
            { type: 'tool', tool: 'timer', options: { title: '짝과 대본 읽기', timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 } }, prompt: '짝과 대본 한 줄씩 3분 동안 읽도록 타이머를 1번, 3분으로 맞추세요.', target: { plan: { work: 3, rounds: 1 } }, difficulty: 0.15 },
            { type: 'short', prompt: '읽으며 고친 대사 한 줄(고치기 전 → 고친 뒤)을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 대본 실천 점검',
          items: [
            { type: 'check', prompt: '내 대본에 들어 있는 것에 표시하세요.', options: ['묻는 말', '기다리기', '대답 확인', '거절 존중', '철회 받아들이기'] },
            { type: 'short', prompt: '이번 주에 실제로 써 볼 묻는 말 한 줄을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 성폭력 통념과 책임 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-sv-myth', [10]);
    const FM = [
      ['아는 사이에서도 성폭력이 일어난다', '책임은 가해 행위를 고른 사람에게 있다', '놀라서 몸이 굳어 저항하지 못할 수 있다', '시간이 지나서 말해도 피해는 피해다'],
      ['옷차림이 원인을 제공한다', '싫었으면 강하게 저항했을 것이다', '늦은 밤에 다니는 사람에게도 책임이 있다', '친한 사이면 성폭력이 아니다'],
    ];
    const RUMOR = { text: '반에 한 친구의 피해 소문이 돈다. 몇몇이 “걔도 문제 있었대. 그날 거기 왜 갔대?”라고 수군거린다. 너는 같은 반 민서의 입장에서 고른다.', who: '민서', motif: 'cloud', choices: [
      { id: 'stop', text: '“그건 피해자 탓이야. 그만하자”고 말한다', result: '수군거리던 친구들이 잠시 말을 멈춘다.', impact: [{ who: '피해 학생', text: '더 퍼지는 말을 막아 준다', tone: 1 }],
        next: { text: '한 친구가 “그래도 사실인지 궁금하잖아”라고 한다.', who: '민서', choices: [
          { id: 'noask', text: '“궁금해도 캐묻거나 퍼뜨리지 않는 게 맞아”라고 한다', result: '대화가 다른 이야기로 넘어간다.', impact: [{ who: '피해 학생', text: '소문이 커지지 않는다', tone: 1 }],
            next: { text: '쉬는 시간, 피해 학생이 혼자 앉아 있다.', who: '민서', choices: [
              { id: 'support', text: '사정을 묻지 않고 “필요하면 같이 있을게”라고 말한다', result: '피해 학생이 고개를 끄덕이고 조금 편해 보인다.', impact: [{ who: '피해 학생', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '탓하지 않고, 캐묻지 않고, 곁에 있는 것이 주변인이 할 수 있는 지지다.' },
              { id: 'pry', text: '걱정돼서 그날 무슨 일이 있었는지 자세히 묻는다', result: '피해 학생이 굳은 얼굴로 자리를 뜬다.', impact: [{ who: '피해 학생', text: '다시 떠올리게 된다', tone: -1 }], ending: '좋은 뜻이어도 캐묻는 질문은 2차 피해가 될 수 있다.' }] } },
          { id: 'share', text: '“나도 들은 게 있긴 해”라며 아는 걸 말한다', result: '소문에 살이 붙어 다른 반까지 퍼진다.', impact: [{ who: '피해 학생', text: '2차 피해를 입는다', tone: -1 }], ending: '소문을 옮기는 순간 주변인도 2차 피해에 가담하게 된다.' }] } },
      { id: 'silent', text: '불편하지만 아무 말 없이 듣고만 있다', result: '수군거림이 계속되고 다른 친구들도 끼어든다.', impact: [{ who: '피해 학생', text: '소문이 커진다', tone: -1 }],
        next: { text: '다음 날, 단톡방에도 같은 말이 올라온다.', who: '민서', choices: [
          { id: 'late', text: '“확인 안 된 말 퍼뜨리지 말자”고 쓰고 담임 선생님께 알린다', result: '선생님이 단톡방 일을 살피고 피해 학생 보호를 챙긴다.', impact: [{ who: '피해 학생', text: '보호가 시작된다', tone: 1 }], ending: '늦게라도 멈추고 알리면 2차 피해를 줄일 수 있다.' },
          { id: 'keep', text: '계속 모른 척한다', result: '피해 학생이 학교에 나오기 힘들어한다.', impact: [{ who: '피해 학생', text: '고립된다', tone: -1 }], ending: '침묵은 피해자 탓하기를 그대로 두는 선택이 된다.' }] } },
      { id: 'join', text: '“맞아, 왜 거기 갔대?”라고 맞장구친다', result: '말이 더 퍼지고 피해 학생 귀에 들어간다.', impact: [{ who: '피해 학생', text: '큰 상처를 받는다', tone: -1 }], ending: '피해자를 탓하는 말은 피해를 한 번 더 주는 2차 피해다.' }] };
    const RUMOR_R = [{ id: 'resp', text: '잘못은 가해 행위를 고른 사람에게 있다' }, { id: 'second', text: '피해자를 탓하거나 소문을 옮기면 2차 피해가 된다' }, { id: 'nopry', text: '캐묻지 않고 곁에 있는 것이 지지다' },
      { id: 'cause', text: '그 시간에 그곳에 간 것도 원인이다', why: '피해자의 행동은 성폭력의 원인이 아니에요. 책임은 가해 행위를 고른 사람에게 있어요.' }, { id: 'truth', text: '사실을 알아야 하니 자세히 물어야 한다', why: '사실 확인은 학교와 전문 기관이 해요. 주변인의 캐묻기는 2차 피해가 될 수 있어요.' }];
    const SCHOOL = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '우리 반 교실(담임)', icon: 'school', at: [0, 0], legend: '담임 선생님' }, { name: '상담실', icon: 'house', at: [2, 0], legend: '상담 선생님' }, { name: '보건실', icon: 'hospital', at: [4, 0], legend: '보건 선생님' }, { name: '교무실(학교전담경찰관 안내)', icon: 'police', at: [5, 1], legend: '학교전담경찰관 연결' }, { name: '지역 지원 기관', icon: 'office', at: [3, 3], legend: HELPNO }, { name: '도서관', icon: 'library', at: [0, 3] }, { name: '공원', icon: 'park', at: [5, 3] }] });
    const HEADS = [{ id: 'h1', text: '“늦은 밤 혼자 귀가한 여고생…” 사건', motif: 'moon' }, { id: 'h2', text: '“가해자 ○○ 체포… 경찰 수사 중”', motif: 'star' }, { id: 'h3', text: '“짧은 옷차림 화근?” 사건 재조명', motif: 'cloud' }, { id: 'h4', text: '“지인 상대로 범행한 20대 송치”', motif: 'sun' }];

    MODS.push(
      M({
        id: 'intro.fact-myth', type: 'intro', title: '사실일까, 통념일까',
        method: '통념 문장 사실·통념 가르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 여섯 문장을 하나씩 읽어 주며 함께 나눈다.', base: '여덟 문장을 사실·통념 칸에 나눈다.', challenge: '통념 하나가 퍼질 때 피해자에게 생기는 결과를 말한다.' },
        intro: {
          teacher: '“성폭력에 대해 자주 듣는 말 여덟 개예요. 사실일까요, 통념일까요?” 시연 단추로 문장이 사실·통념 칸에 나뉘는 모습을 보여 준다. “옷차림이 원인일 수도 있잖아요”라는 말이 나오면 “같은 옷을 입은 사람 모두에게 일이 생기나요? 그 일을 고른 사람은 누구인가요?”라고 되묻는다. 통념은 책임을 피해자에게 옮기고, 책임은 언제나 가해 행위를 고른 사람에게 있다는 점을 짚는다.',
          student: '성폭력에 대해 자주 듣는 여덟 문장을 사실과 통념 칸에 나누어 보세요. 통념이 책임을 누구에게 옮기는지도 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '통념'], cards: mix(FM) }, sequence: [{ sort: { 사실: FM[0], 통념: FM[1] } }] },
          art: { draw: 'two paper baskets on a shelf labeled with a check mark and a cross, paper sentence strips floating toward them, a magnifying glass over one strip, soft classroom background', banner: '그 말, 사실일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '통념 문장은 함정 문장으로만 쓰고, 칸에 넣은 뒤 반드시 바로잡는 말로 마무리한다. 학생에게 피해 경험을 묻지 않는다. 이 시간은 성폭력 예방교육(성폭력방지법 제5조, 매년 1회 1시간 이상)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.headline-compare', type: 'intro', title: '두 기사 제목, 책임은 어디에',
        method: '가상 기사 제목 두 개 비교', tool: 'story', minutes: 7,
        levels: { easy: '교사가 책임이 드러나는 낱말(혼자 귀가·옷차림·가해자·범행)을 짚어 준다.', base: '가상 제목 네 개를 ‘피해자 행동에 초점’·‘가해 행위에 초점’ 칸에 나누어 견준다.', challenge: '책임이 분명한 세 번째 제목을 지어 말한다.' },
        intro: {
          teacher: '“같은 가상 사건을 다룬 제목들이에요. 제목만 읽었을 때 누가 무엇을 했다고 느껴지나요?” 시연 단추로 제목 카드가 두 칸에 나뉘는 모습을 보여 준다. “늦은 밤에 혼자 다니면 조심해야 하는 건 맞잖아요”라는 말이 나오면 “조심하라는 말이 제목의 중심이 되면, 범행을 한 사람은 어디에 있나요?”라고 되묻는다. 제목의 초점이 피해자 행동에 있으면 책임이 흐려진다는 점을 짚는다.',
          student: '같은 가상 사건을 다룬 기사 제목들을 읽고, 피해자의 행동에 초점을 둔 제목과 가해 행위에 초점을 둔 제목을 나누어 보세요.',
          demo: { tool: 'story', options: { mode: 'sort', slots: [{ id: 'victim', label: '피해자 행동에 초점' }, { id: 'act', label: '가해 행위에 초점' }], cards: HEADS }, sequence: [{ sort: { victim: ['h1', 'h3'], act: ['h2', 'h4'] } }] },
          art: { draw: 'two paper newspaper front pages side by side with bold headline strips, a paper spotlight shining on one headline, a paper student comparing them with a pencil', banner: '제목은 누구를 비출까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '제목은 모두 가상이다(실제 사건·실제 보도를 쓰지 않는다). ‘○○’는 이름 대신 쓴 표시다.',
      }),

      M({
        id: 'activity.responsibility-dilemma', type: 'activity', title: '소문 앞에서 주변인의 선택',
        method: '주변인의 선택과 2차 피해 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번(멈추기·침묵)까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 끝까지 따라가 결과를 보고, 피해자를 탓하지 않는 근거를 고른다.', challenge: '다른 끝도 가 보고, 선택마다 피해 학생에게 준 영향을 활동지 표로 정리한다.' },
        activity: {
          title: '민서의 세 갈림길', tool: 'dilemma',
          teacher: '“가상 인물 민서의 반에 피해 소문이 돌아요. 친구들이 ‘걔도 문제 있었대’라고 해요. 민서라면 어떻게 할까요?” 장면마다 “이 선택은 피해 학생에게 어떤 영향을 줄까요?”라고 묻는다. ‘그날 무슨 일이 있었는지 자세히 묻는다’를 고른 학생에게 “걱정하는 마음은 좋아요. 그런데 그 질문을 받은 친구는 무엇을 다시 떠올리게 될까요?”라고 되묻는다. 피해자 탓하기와 소문 옮기기는 2차 피해이고, 탓하지 않고 캐묻지 않고 곁에 있는 것이 지지라는 점을 짚는다.',
          task: '민서의 갈림길을 따라가며 2차 피해를 막는 길을 고르고, 피해자를 탓하지 않는 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('민서의 입장에서 2차 피해를 막는 길을 끝까지 고르고 근거를 고르세요.', RUMOR, [['stop', 'noask', 'support']], RUMOR_R, ['resp', 'second', 'nopry'], { d: 0.4 }),
            DILQ('‘아무 말 없이 듣는다’로 시작한 길에서 피해를 줄이는 길을 고르고 근거를 고르세요.', { text: RUMOR.text, who: RUMOR.who, motif: RUMOR.motif, choices: RUMOR.choices.filter((c) => c.id !== 'stop') }, [['silent', 'late']], RUMOR_R, ['resp', 'second'], { d: 0.35 }),
            EXPLOREQ('‘맞장구친다’ 길도 끝까지 가 보고 결과를 견주세요.', RUMOR, RUMOR_R, ['맞장구친 길의 끝을 확인했다', '두 길에서 피해 학생에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '피해자를 탓하는 말과 소문은 2차 피해예요. 책임은 가해 행위를 고른 사람에게 있고, 주변인은 멈추고·캐묻지 않고·곁에 있을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '민서의 선택마다 피해 학생에게 준 영향을 쓰세요.', columns: ['선택', '피해 학생에게 준 영향'], cells: [['그만하자고 말한다', ''], ['아무 말 없이 듣는다', ''], ['맞장구친다', '']] }] },
        notes: '사건 내용은 다루지 않고 ‘피해 소문’으로만 둔다. 학생에게 실제로 들은 소문이나 피해 경험을 말하게 하지 않는다. 피해자 탓 카드는 함정으로만 두고 바로잡는다.',
      }),
      M({
        id: 'activity.help-map', type: 'activity', title: '학교 안팎 도움 경로 지도',
        method: '학교 안팎 도움 경로 지도', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '장소 이름 없이 범례 기호를 보고 상황마다 먼저 갈 곳에 핀을 놓고, 연결 순서는 활동지에 잇는다.', challenge: '장소 이름 없이 핀을 놓고, 야간·주말에 쓸 경로(지역 지원 기관)를 따로 찾는다.' },
        activity: {
          title: '먼저 갈 곳 찾기', tool: 'map',
          teacher: '“가상 학교와 동네 지도예요. 친구가 털어놓았을 때 어디로, 어떤 순서로 이어 갈까요?” 핀을 놓기 전에 “지금 필요한 것이 이야기를 들어 줄 사람인가요, 몸을 살펴 줄 사람인가요?”라고 묻는다. 도서관이나 공원에 핀을 놓는 학생에게 “그곳에서 친구를 도와줄 사람은 누구일까요?”라고 되묻는다. 지역 지원 기관의 번호는 우리 학교가 확인한 번호로 채운다는 점, 친구가 원하는 속도를 존중하며 함께 간다는 점을 짚는다.',
          task: '상황마다 먼저 도움을 청할 곳에 핀을 놓아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '점심시간, 친구 하랑이 힘든 일을 털어놓으며 누군가와 이야기하고 싶다고 해요. 학교 안에서 함께 갈 곳에 핀을 놓으세요.', toolOptions: SCHOOL(true), target: { place: '상담실' }, difficulty: 0.2 },
            { prompt: '친구 하랑이 몸이 아프고 어지럽다고 해요. 몸 상태를 먼저 살펴 줄 학교 안 곳에 핀을 놓으세요.', toolOptions: SCHOOL(true), target: { place: '보건실' }, difficulty: 0.25 },
            { prompt: '주말 밤, 친구가 학교가 문을 닫아 누구에게 말해야 할지 모르겠다고 해요. 연결할 곳에 핀을 놓으세요.', toolOptions: SCHOOL(true), target: { place: '지역 지원 기관' }, difficulty: 0.3, conclude: '학교 안에서는 담임·상담·보건 선생님, 학교 밖과 야간·주말에는 지역 지원 기관으로 이어요. 번호는 학교가 확인한 것을 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '친구가 털어놓았을 때의 연결 순서를 쓰세요.', columns: ['차례', '어디로(누구에게)', '번호·때'], cells: [['1', '', ''], ['2', '', ''], ['3', '', HELPNO]] }] },
        notes: '지도는 가상이다. 지역 지원 기관 이름·번호는 학교가 확인한 현행 안내로 채운다. 학교전담경찰관 연결 방법은 학교마다 달라 교무실 안내로 두었다. 실제 피해를 털어놓는 학생이 있으면 수업 뒤 따로 만나 상담 선생님과 잇는다.',
      }),
      M({
        id: 'activity.law-reading', type: 'activity', title: '예방교육의 취지와 우리 학교',
        method: '성폭력방지법 제5조 취지 읽고 학교 예방교육 평가', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '요약문의 핵심어를 짚고, 문항마다 문장 틀을 보고 의견을 세 문장으로 쓴다.', base: '취지 요약 → 우리 학교 예방교육 평가 의견 → 통념 바로잡기 → 개선 제안 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 반대 의견을 하나 세워 반박한다.' },
        activity: {
          title: '예방교육 평가 의견 글', tool: 'rubric-writing',
          teacher: '“성폭력방지법 제5조는 학교 같은 곳이 해마다 성폭력 예방교육을 하도록 정해 두었어요. 쉬운 말 요약: ‘성폭력을 미리 막기 위해, 학생들이 해마다 한 번 이상, 한 시간 이상 예방교육을 받게 한다.’ 왜 해마다일까요?” 요약문을 함께 읽은 뒤, 우리 학교 예방교육이 통념을 바로잡고 있는지 의견을 쓰게 한다. “예방교육은 조심하라는 말만 한다”고 쓴 학생에게 “조심하라는 말만 있다면 책임은 누구에게 놓이게 될까요?”라고 묻는다. 좋은 예방교육은 피해자에게 조심을 요구하기보다 가해하지 않을 책임과 주변인의 역할을 가르친다는 점을 짚는다.',
          task: '예방교육의 취지를 읽고 우리 학교 예방교육에 대한 의견 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('요약문을 읽고 예방교육의 취지를 2문장으로 쓰세요.', '요약: 성폭력을 미리 막기 위해 학생들이 해마다 한 번 이상, 한 시간 이상 예방교육을 받게 한다. 이 규정의 취지를 내 말로 쓰세요.', ['해마다 한다는 점을 담았다', '왜 미리 배워야 하는지 썼다', '요약문을 그대로 베끼지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['예방']], starter: '이 규정은 ~하기 위해 ~하게 한다.', plus: '해마다 되풀이하는 까닭을 썼다', d: 0.35 }),
            RWQ('우리 학교 예방교육에 대한 의견을 근거와 함께 쓰세요.', '“우리 학교 예방교육은 통념을 바로잡고 있는가”에 대한 내 의견을 근거를 들어 쓰세요.', ['의견을 첫 문장에 썼다', '근거를 하나 이상 들었다', '피해자를 탓하는 표현이 없다'], { min: 60, max: 400, sent: [3, 5], must: [['왜냐하면', '때문', '근거']], starter: '나는 우리 학교 예방교육이 ~라고 생각한다. 왜냐하면 ~', plus: '반대 의견을 하나 세우고 반박했다', d: 0.4 }),
            RWQ('예방교육이 바로잡아야 할 통념 하나와 바로잡는 문장을 쓰세요.', '오늘 다룬 통념 하나를 골라, 그 통념이 왜 틀렸는지와 바로잡는 문장을 쓰세요.', ['통념을 정확히 옮겼다', '책임이 가해 행위를 고른 사람에게 있다고 밝혔다', '피해자를 탓하지 않는 말로 썼다'], { min: 50, max: 350, sent: [2, 4], must: [['통념']], starter: '‘~’라는 통념은 틀렸다. 왜냐하면 ~', d: 0.4 }),
            RWQ('예방교육 개선 제안 두 가지를 쓰세요.', '우리 학교 예방교육을 더 좋게 만들 제안 두 가지를 구체적으로 쓰세요.', ['제안이 두 가지다', '학교에서 실제로 할 수 있다', '주변인이나 가해하지 않을 책임을 다룬다'], { min: 50, max: 350, sent: [2, 4], must: [['제안']], starter: '첫째, ~을 제안한다. 둘째, ~', plus: '제안이 통념을 어떻게 줄이는지 썼다', d: 0.4, more: { conclude: '예방교육은 피해자에게 조심을 요구하는 데서 그치지 않고, 통념을 바로잡고 가해하지 않을 책임과 주변인의 역할을 가르쳐야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 의견 글을 네 칸으로 정리하세요.', columns: ['칸', '한 줄 요약'], cells: [['취지', ''], ['의견과 근거', ''], ['바로잡을 통념', ''], ['개선 제안', '']] }, { type: 'short', prompt: '예방교육에서 꼭 다루었으면 하는 질문 하나를 쓰세요.' }] },
        notes: '법 조문 번호는 근거 파일(research-mandatory §1)에 있는 ‘성폭력방지법 제5조(매년 1회 1시간 이상)’만 쓰고, 조문 원문 문장과 처벌 내용은 쓰지 않는다. 요약문은 수업용 풀어 쓴 문장이다. 우리 학교 예방교육을 평가할 때 특정 교사·강사를 비난하는 글이 되지 않게 안내한다.',
      }),

      M({
        id: 'wrap.support-words', type: 'wrap', title: '지지하는 말 고르기',
        method: '지지하는 말 고르기와 고쳐 쓰기', tool: 'emotion', minutes: 7,
        levels: { easy: '지지하는 말만 고른다.', base: '지지하는 말을 고르고, 탓하는 말 하나를 지지하는 말로 고쳐 쓴다.', challenge: '말 대신 함께 할 행동 하나를 더해 쓴다.' },
        wrap: {
          teacher: '“친구가 힘든 일을 털어놓았을 때 우리가 할 첫마디는 무엇일까요?” 카드 가운데 지지하는 말을 고르게 한 뒤, 탓하는 말 하나를 고쳐 쓰게 한다. ‘왜 그때 거기 갔어?’를 고른 학생에게 “그 질문을 들은 친구는 다음에도 말해 줄까요?”라고 되묻는다. 쉬움 반은 고르기만, 도전 반은 함께 할 행동(상담 선생님께 같이 가기 등)까지 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '지지하는 말', cards: [{ id: 'notyou', text: '“네 잘못이 아니야”' }, { id: 'thanks', text: '“말해 줘서 고마워”' }, { id: 'with', text: '“원하면 같이 가 줄게”' }, { id: 'why', text: '“왜 그때 거기 갔어?”' }, { id: 'clothes', text: '“그 옷 입지 말지 그랬어”' }, { id: 'forget', text: '“그냥 잊어버려”' }] }, prompt: '친구가 털어놓을 때 할 지지하는 말만 고르세요.', target: { pick: ['notyou', 'thanks', 'with'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 털어놓은 뒤 주변인이 하지 않을 일은?', options: ['친구가 원하는 어른에게 함께 간다', '다른 친구들에게 사정을 전한다', '친구의 속도를 기다려 준다'], answer: 1, difficulty: 0.2, explain: '털어놓은 이야기를 옮기면 2차 피해가 될 수 있어요.' },
            { type: 'short', prompt: '“왜 그때 거기 갔어?”를 지지하는 말로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성폭력 통념과 책임',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '책임은 언제나 가해 행위를 ___ 사람에게 있다.', answer: '고른' },
            { type: 'short', prompt: '친구가 털어놓았을 때 할 지지하는 말과 함께 할 행동을 한 줄씩 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 고른 · 고마워 · 잘못', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '“네 ___이 아니야.”', answer: '잘못' }] },
        },
      }),
      M({
        id: 'wrap.route-check', type: 'wrap', title: '도움 경로 세 단계 점검',
        method: '도움 경로 세 단계 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검표 세 단계 칸만 표시한다.', base: '세 단계를 표시하고, 칸마다 활동지에 한 줄 메모한다.', challenge: '친구가 어른에게 알리기를 원치 않을 때의 선택을 메모한다.' },
        wrap: {
          teacher: '“오늘 배운 도움 경로를 세 단계로 점검해요 — 지지하는 말, 믿을 어른, 지원 기관.” 점검표에서 해야 할 것만 표시하게 한다. ‘내가 직접 사실을 확인한다’에 표시한 학생에게 “사실 확인은 누가 하는 일일까요? 주변인의 몫은 무엇일까요?”라고 묻는다. 지원 기관 번호는 우리 학교가 확인한 번호를 쓴다는 점을 말해 준다. 도전 반은 친구가 원치 않을 때의 선택(상담 선생님과 먼저 의논하기)을 메모하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '도움 경로 세 단계', items: [{ id: 'words', text: '1단계: 탓하지 않고 지지하는 말을 한다' }, { id: 'adult', text: '2단계: 친구와 함께 믿을 어른에게 간다' }, { id: 'agency', text: `3단계: 지원 기관에 잇는다 ${HELPNO}` }, { id: 'check', text: '내가 직접 사실을 확인한다' }, { id: 'tell', text: '다른 친구들에게 알려 함께 돕게 한다' }] }, prompt: '친구가 털어놓았을 때 할 일만 표시하세요.', target: { checklist: ['words', 'adult', 'agency'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 “어른에게는 말하지 마”라고 할 때 알맞은 것은?', options: ['절대 아무에게도 말하지 않는다', '친구의 마음을 듣고, 상담 선생님과 어떻게 할지 먼저 의논한다', '바로 단톡방에 도움을 청한다'], answer: 1, difficulty: 0.25, explain: '친구의 마음을 존중하면서도 혼자 감당하지 않도록 전문가와 의논해요.' },
            { type: 'short', prompt: '세 단계 가운데 내가 가장 자신 없는 단계와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 경로 점검',
          items: [
            { type: 'table', prompt: '세 단계마다 한 줄씩 메모하세요.', columns: ['단계', '메모'], cells: [['지지하는 말', ''], ['믿을 어른', ''], ['지원 기관', HELPNO]] },
            { type: 'short', prompt: '주변인이 하지 않을 일 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 내 이미지에 대한 권리와 디지털 성범죄 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-image-rights', [10]);
    const CHAIN = [['처음 단톡방', 6], ['두 번째 방', 40], ['세 번째 방', 150], ['익명 계정', 600]];
    const CHAIN_T = '사진 한 장을 본 사람 수(가상)';
    const ROOM = { text: '반 단톡방에 누군가 동의 없이 몰래 찍은 같은 반 친구의 몸 사진을 올렸다. “ㅋㅋ 이거 봐”라는 말이 붙어 있다. 너는 이 방에 있는 학생이다.', who: '같은 반 학생', motif: 'cloud', choices: [
      { id: 'report', text: '사진은 저장하지 않고 방 이름·올린 계정·시간만 적어 담임 선생님께 알린다', result: '선생님이 바로 사진을 내리게 하고 사진 속 친구의 보호부터 챙긴다.', impact: [{ who: '사진 속 친구', text: '더 퍼지기 전에 보호받는다', tone: 1 }, { who: '알린 학생', text: '잘한 일이라는 말을 듣는다', tone: 1 }],
        next: { text: '친구 몇이 “누가 말했냐”며 방에서 범인을 찾는다.', who: '같은 반 학생', choices: [
          { id: 'firm', text: '“퍼뜨린 게 잘못이지 알린 게 잘못은 아니야”라고 쓰고, 이 일도 선생님께 알린다', result: '선생님이 알린 학생이 드러나지 않게 살피겠다고 한다.', impact: [{ who: '알린 학생', text: '보호받는다', tone: 1 }], ending: '알리는 것은 고자질이 아니라 친구를 지키는 일이다.' },
          { id: 'sorry', text: '괜히 말했다며 방에 사과 글을 쓴다', result: '사진을 올린 쪽이 다시 기세를 올린다.', impact: [{ who: '사진 속 친구', text: '다시 위험해진다', tone: -1 }], ending: '알린 사람은 사과할 일을 하지 않았다.' }] } },
      { id: 'look', text: '사진을 눌러 크게 보기만 하고 아무 말 않는다', result: '조회 표시가 늘고 사진이 그대로 남는다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }],
        next: { text: '다른 친구가 “다른 방에도 올려 줄까?”라고 묻는다.', who: '같은 반 학생', choices: [
          { id: 'stopit', text: '“올리지 마. 이건 범죄야”라고 쓰고 선생님께 알린다', result: '늦었지만 사진이 더 퍼지기 전에 내려간다.', impact: [{ who: '사진 속 친구', text: '늦게라도 보호받는다', tone: 0 }], ending: '보기만 하던 사람도 멈추고 알릴 수 있다.' },
          { id: 'okay', text: '“알아서 해”라고 답한다', result: '사진이 다른 방으로 퍼진다.', impact: [{ who: '사진 속 친구', text: '피해가 커진다', tone: -1 }], ending: '보기만 하는 것도 퍼짐을 거드는 일이 된다.' }] } },
      { id: 'share', text: '재밌다며 다른 방에 전달한다', result: '사진이 순식간에 여러 방으로 퍼진다.', impact: [{ who: '사진 속 친구', text: '돌이키기 어려운 피해를 입는다', tone: -1 }, { who: '나', text: '디지털 성범죄에 가담하게 된다', tone: -1 }], ending: '동의 없이 찍힌 성적 이미지를 전달하는 것은 디지털 성범죄다.' },
      { id: 'leave', text: '불편해서 방에서 조용히 나가기만 한다', result: '나는 빠졌지만 사진은 그대로 남아 있다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }], ending: '나가는 것만으로는 친구를 지키지 못한다. 알려야 멈춘다.' }] };
    const ROOM_R = [{ id: 'right', text: '사진 속 사람은 자기 이미지가 함부로 쓰이지 않을 권리가 있다' }, { id: 'nosave', text: '사진을 저장·전달하지 않고 기록만 남겨 알린다' }, { id: 'tellok', text: '알린 사람은 잘한 것이고 보호받아야 한다' },
      { id: 'onlylook', text: '보기만 하면 괜찮다', why: '보는 사람이 늘수록 피해가 커지고, 멈추고 알리는 사람이 없어져요.' }, { id: 'evidence', text: '증거로 쓰려면 사진을 내 휴대폰에 저장해 둔다', why: '사진을 저장·전달하지 않아요. 방 이름·계정·시간만 적고 증거는 학교와 경찰이 다뤄요.' }];
    const SCENES = [{ id: 's1', text: '장면 1: 체육복 갈아입는 모습을 몰래 찍는다', motif: 'cloud' }, { id: 's2', text: '장면 2: 받은 사진을 친구들끼리 돌려 본다', motif: 'cloud' }, { id: 's3', text: '장면 3: 반 친구 얼굴을 다른 사진에 합성한다', motif: 'cloud' }];
    const QUIZ = [['1번', 92], ['2번', 85], ['3번', 48], ['4번', 77], ['5번', 63]];
    const QUIZ_T = '디지털 성범죄 사실 퀴즈 문항별 정답률(가상 학급, %)';

    MODS.push(
      M({
        id: 'intro.share-chain', type: 'intro', title: '사진 한 장이 퍼지는 그래프',
        method: '사진 한 장이 퍼지는 경로 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프의 두 지점(처음 단톡방·익명 계정)만 함께 읽는다.', base: '퍼짐을 가장 적은 피해로 멈출 수 있었던 지점과 까닭을 고른다.', challenge: '지점마다 그 방에 있던 사람이 할 수 있었던 행동을 말한다.' },
        intro: {
          teacher: '“가상 사진 한 장이 단톡방에서 다른 방으로, 익명 계정으로 옮겨 가며 본 사람이 6명에서 600명으로 늘었어요. 어디서 멈출 수 있었을까요?” 시연 단추로 ‘처음 단톡방’이 골라지는 모습을 보여 준다. “처음 올린 사람만 잘못이죠”라는 말이 나오면 “두 번째 방으로 옮긴 사람, 보기만 한 사람은 퍼짐과 상관없을까요?”라고 되묻는다. 지점마다 멈추고 알리는 사람이 한 명만 있어도 그래프가 꺾인다는 점을 짚는다.',
          student: '가상 사진 한 장이 퍼지며 본 사람 수가 늘어나는 그래프를 읽고, 퍼짐을 멈출 수 있었던 지점을 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: CHAIN_T, unit: '명', xLabel: '퍼진 곳', yLabel: '본 사람 수', data: CHAIN, question: '피해가 가장 적을 때 멈출 수 있었던 지점은?', choices: ['처음 단톡방', '두 번째 방', '세 번째 방', '익명 계정'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper phone screen with a single photo icon multiplying into many small copies along a rising paper line graph, chat bubbles linking room to room, a paper hand holding up a stop sign at the first point', banner: '어디서 멈출 수 있었을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '값은 수업용 가상 값이다. 실제 사건·실제 이미지를 보여 주지 않는다.',
      }),
      M({
        id: 'intro.scenario-cards', type: 'intro', title: '세 장면의 공통점',
        method: '세 장면의 공통점 찾기', tool: 'story', minutes: 7,
        levels: { easy: '공통점 보기 셋 가운데 함께 고른다.', base: '세 장면의 공통점을 한 낱말 카드로 고르고 까닭을 말한다.', challenge: '공통점을 ‘디지털 성범죄’와 이어 한 문장으로 말한다.' },
        intro: {
          teacher: '“세 가상 장면 — 몰래 찍기, 받은 사진 돌려 보기, 얼굴 합성 — 은 서로 달라 보여요. 공통점은 무엇일까요?” 시연 단추로 공통점 칸에 ‘사진 속 사람의 동의가 없다’ 카드가 들어가는 모습을 보여 준다. “돌려 본 것만으로는 찍은 게 아니잖아요”라는 말이 나오면 “사진 속 사람은 돌려 보는 것에 동의했을까요?”라고 되묻는다. 찍기·보기·만들기 모두 사진 속 사람의 동의가 빠져 있고, 이것이 디지털 성범죄로 이어진다는 점을 미리 밝힌다.',
          student: '세 가상 장면을 읽고, 세 장면에 모두 들어 있는 공통점을 한 낱말로 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', label: '세 장면의 공통점: ___' }], cards: [{ id: 'noconsent', text: '사진 속 사람의 동의가 없다' }, { id: 'school', text: '장소가 학교다' }, { id: 'joke', text: '장난이었다' }] }, sequence: [{ fill: { f1: 'noconsent' } }] },
          art: { draw: 'three paper scene cards in a row: a hidden phone camera, phones passing a photo hand to hand, a face cut-out being pasted onto another picture, a thin red paper thread tying all three cards together', banner: '세 장면, 무엇이 같을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: `장면은 말로만 다루고 이미지를 보여 주지 않는다. 장면 카드: ${SCENES.map((s) => s.text).join(' / ')}. ‘장난이었다’는 함정 카드로, 의도와 상관없이 피해가 생긴다는 점으로 바로잡는다.`,
      }),

      M({
        id: 'activity.bystander-dilemma', type: 'activity', title: '단톡방에 사진이 올라왔을 때',
        method: '단톡방에 사진이 올라왔을 때 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길(알리기·보기·퍼뜨리기·나가기)에서 결과를 보고 근거를 고른다.', base: '두 갈림길을 따라가 결과를 추적하고, 피해를 줄인 근거를 고른다.', challenge: '보기만 하던 길도 끝까지 가 보고, 기록을 남길 때 지킬 점(저장·전달하지 않기)을 활동지에 덧붙인다.' },
        activity: {
          title: '단톡방 갈림길', tool: 'dilemma',
          teacher: '“가상 단톡방에 동의 없이 몰래 찍힌 친구의 몸 사진이 올라왔어요. 나는 이 방에 있는 학생이에요. 무엇을 할까요?” 장면마다 “이 선택은 사진 속 친구에게 어떤 일을 만들까요?”라고 묻는다. ‘증거로 쓰려고 사진을 저장해 둔다’를 고른 학생에게 “저장한 사진이 내 휴대폰에서 또 퍼질 위험은 없을까요? 증거는 누가 다뤄야 할까요?”라고 되묻는다. 보지 않고, 퍼뜨리지 않고, 사진은 저장하지 않은 채 방 이름·계정·시간만 적어 알리는 것이 피해를 줄인다는 점을 짚는다.',
          task: '단톡방 갈림길을 따라가며 사진 속 친구의 피해를 줄이는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('사진 속 친구의 피해를 줄이는 길을 고르고 근거를 고르세요.', ROOM, [['report', 'firm']], ROOM_R, ['right', 'nosave', 'tellok'], { d: 0.4 }),
            DILQ('‘보기만 한다’로 시작한 길에서 피해를 줄이는 길을 고르고 근거를 고르세요.', { text: ROOM.text, who: ROOM.who, motif: ROOM.motif, choices: ROOM.choices.filter((c) => c.id !== 'report') }, [['look', 'stopit']], ROOM_R, ['right', 'nosave'], { d: 0.35 }),
            EXPLOREQ('‘전달한다’와 ‘나가기만 한다’ 길도 끝까지 가 보고 결과를 견주세요.', ROOM, ROOM_R, ['전달한 길과 나간 길의 끝을 확인했다', '두 길에서 사진 속 친구에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '동의 없이 찍힌 성적 이미지는 보지 않고, 퍼뜨리지 않고, 알려야 멈춰요. 사진은 저장·전달하지 않고 기록만 남겨 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '단톡방에서 본 일을 알릴 때 적어 둘 것과, 하지 않을 것을 한 줄씩 쓰세요.' }] },
        notes: '이미지는 보여 주지 않고 말로만 다룬다. 우리 학교·우리 반의 실제 일을 사례로 꺼내게 하지 않는다. 신고·상담 번호는 학교가 확인한 번호를 쓴다.',
      }),
      M({
        id: 'activity.campaign-poster', type: 'activity', title: '보지 않고 퍼뜨리지 않고 알린다 포스터',
        method: '"보지 않고 퍼뜨리지 않고 알린다" 캠페인 포스터', tool: 'collage', minutes: 17,
        levels: { easy: '포스터 틀(세 칸)만 조각으로 꾸미고 문구는 활동지의 문구 틀 셋 가운데 고른다.', base: '세 칸 틀·눈에 띄는 대비·세 행동 표시 조각을 꾸미고, 문구를 직접 써서 배치를 점검한다.', challenge: '포스터를 볼 대상(1학년)을 정하고 말투와 배치를 그 대상에 맞췄는지 점검한다.' },
        activity: {
          title: '세 행동 캠페인 포스터', tool: 'collage',
          teacher: '“‘보지 않는다·퍼뜨리지 않는다·알린다’ 세 행동을 한 장 포스터로 만들어요. 판에는 도형과 색으로 틀을 꾸미고, 문구는 활동지에 써요.” 먼저 세 칸 틀을 만들고, 가장 강조할 칸을 정하게 한다. 실제 사진이나 사람 얼굴을 그려 넣으려는 학생에게 “캠페인 포스터가 또 다른 사람의 이미지를 쓰게 되면 어떨까요?”라고 묻는다. 신고 경로 칸에는 우리 학교가 확인한 번호를 넣는다는 점을 짚는다.',
          task: '세 행동 캠페인 포스터의 틀과 강조, 행동 표시를 조각으로 꾸며요.', levels: { easy: { maxPieces: 12 }, base: {}, challenge: {} },
          items: [
            { prompt: '세 행동을 담을 세 칸 틀을 긴 네모 조각 3개 이상으로 만드세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle'], colors: ['빨강', '노랑', '파랑', '초록', '검정', '하양'] }, target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['세 칸이 한눈에 구분된다', '칸마다 한 행동을 담기로 정했다'] }, difficulty: 0.2 },
            { prompt: '‘알린다’ 칸이 눈에 띄도록 따뜻한 색과 차가운 색 조각을 맞닿게 붙이세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'star'], colors: ['빨강', '주황', '노랑', '파랑', '초록', '보라'] }, target: { contrast: 'warm-cool', selfCheck: ['가장 강조할 칸을 정했다', '멀리서도 눈에 띈다'] }, difficulty: 0.25 },
            { prompt: '세 행동을 나타낼 표시 자리를 같은 크기의 동그라미 조각 3개로 만드세요.', toolOptions: { shapes: ['circle', 'rect', 'triangle'], colors: ['빨강', '노랑', '파랑', '초록', '하양'] }, target: { has: [{ shape: 'circle', n: 3 }], selfCheck: ['보지 않는다·퍼뜨리지 않는다·알린다 자리를 정했다', `신고 경로 칸(${HELPNO})을 남겼다`, '실제 사람 얼굴이나 사진을 쓰지 않았다'] }, difficulty: 0.3, conclude: '캠페인 포스터는 세 행동을 짧고 분명하게 보여 주고, 도움을 청할 길을 함께 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 세 칸에 넣을 문구를 쓰세요.', columns: ['칸', '문구'], cells: [['보지 않는다', ''], ['퍼뜨리지 않는다', ''], ['알린다', HELPNO]] }] },
        notes: '조각 판은 틀·강조·표시만 다루고, 문구는 활동지에 쓴다(교구에 글자를 쓰는 칸이 없다). 쉬움 반 문구 틀 예: “눌러 보지 않아요 / 옮기지 않아요 / 선생님께 알려요”. 실제 사진·얼굴을 쓰지 않는다.',
      }),
      M({
        id: 'activity.policy-proposal', type: 'activity', title: '디지털 성범죄 대응 제안서',
        method: '학교 디지털 성범죄 대응 제안서', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '제안서 칸마다 문장 틀을 보고 쓴다.', base: '문제 → 근거 자료 → 제안 두 가지 → 기대 효과 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 예상 반대 의견과 답을 덧붙인다.' },
        activity: {
          title: '학생회 제안서 쓰기', tool: 'rubric-writing',
          teacher: '“학생회에 낼 짧은 제안서를 써요. 문제, 근거 자료, 제안 두 가지, 기대 효과가 들어가야 해요.” 근거 자료는 오늘 본 가상 그래프(사진이 퍼지는 속도)를 쓰게 한다. “올린 학생을 공개하자”처럼 쓴 학생에게 “공개하는 과정에서 사진 속 친구가 또 드러나지는 않을까요?”라고 묻는다. 좋은 제안은 피해자를 먼저 보호하고, 2차 피해를 막고, 학교가 실제로 할 수 있는 것이라는 점을 짚는다.',
          task: '학교 디지털 성범죄 대응 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 ‘문제’ 칸을 2문장으로 쓰세요.', '학교에서 동의 없는 이미지가 퍼질 때 무엇이 문제인지 쓰세요.', ['문제를 한 문장으로 분명히 썼다', '누가 피해를 입는지 밝혔다', '특정 학생을 떠올리게 하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['동의', '퍼지', '유포']], starter: '지금 우리 학교의 문제는 ~이다. 이 때문에 ~', d: 0.35 }),
            RWQ('근거 자료를 들어 2문장으로 쓰세요.', '가상 그래프(본 사람 6명 → 600명) 같은 자료를 근거로 문제가 왜 급한지 쓰세요.', ['자료의 숫자를 정확히 옮겼다', '자료가 가상임을 밝혔다', '자료와 문제를 이었다'], { min: 40, max: 300, sent: [2, 3], must: [['가상']], starter: '가상 자료를 보면 ~에서 ~로 늘었다. 이는 ~', d: 0.35 }),
            RWQ('제안 두 가지를 쓰세요.', '학교가 실제로 할 수 있는 대응 제안 두 가지를 쓰세요.', ['제안이 두 가지다', '피해자 보호가 먼저다', '2차 피해를 막는 내용이 있다', '학교가 할 수 있다'], { min: 60, max: 400, sent: [2, 4], must: [['제안']], starter: '첫째, ~을 제안한다. 둘째, ~', plus: '예상 반대 의견 하나와 그에 대한 답을 썼다', d: 0.45 }),
            RWQ('기대 효과를 2문장으로 쓰세요.', '제안이 실행되면 학생들에게 어떤 변화가 생길지 쓰세요.', ['제안과 효과를 이었다', '알린 학생의 보호를 다루었다', '과장하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['효과', '변화', '줄']], starter: '이 제안이 실행되면 ~', plus: '효과를 확인할 방법을 썼다', d: 0.4, more: { conclude: '좋은 대응 제안은 피해자를 먼저 보호하고, 2차 피해를 막고, 알린 사람을 지키며, 학교가 실제로 할 수 있는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 제안서를 기준표로 점검하세요.', columns: ['기준', '내 제안서에서 찾은 곳'], cells: [['근거', ''], ['실현 가능성', ''], ['피해자 보호', ''], ['2차 피해 방지', '']] }, { type: 'short', prompt: '내 제안 가운데 학생회가 가장 먼저 할 수 있는 것과 그 까닭을 쓰세요.' }] },
        notes: '제안서는 가상 학교를 상정해 쓰고, 우리 학교의 실제 사건을 근거로 쓰지 않는다. 처벌 내용은 다루지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.three-verbs', type: 'wrap', title: '세 동사 약속',
        method: '세 동사 약속 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '세 동사 빈칸을 채우고, 가장 어려운 것 하나를 고르기만 한다.', base: '빈칸을 채우고, 가장 어려운 것 하나를 해낼 방법을 한 줄 쓴다.', challenge: '친구에게 권할 말 한 줄을 더 쓴다.' },
        wrap: {
          teacher: '“오늘의 세 동사 — 보지 않는다, 퍼뜨리지 않는다, 알린다 — 를 약속 문장으로 채워 봐요.” 빈칸을 채운 뒤 셋 가운데 지금 가장 어려운 것과 해낼 방법을 쓰게 한다. ‘저장한다’ 카드를 넣으려는 학생에게 “증거가 필요하면 무엇만 적어 두면 될까요?”라고 되묻는다. 어려운 동사를 고른 까닭은 발표시키지 않고 활동지에만 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '동의 없이 찍힌 사진은 눌러 ___.' }, { id: 'f2', label: '받은 사진은 다른 방에 ___.' }, { id: 'f3', label: '방 이름·계정·시간만 적어 믿을 어른에게 ___.' }], cards: ['보지 않는다', '퍼뜨리지 않는다', '알린다', '저장한다', '모른 척한다'] }, prompt: '세 동사 약속 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '보지 않는다', f2: '퍼뜨리지 않는다', f3: '알린다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“본인이 처음 보낸 사진이니 퍼뜨려도 된다”는 말에 대해 바른 것은?', options: ['보낸 사람이 동의했으니 괜찮다', '보낸 사진이어도 퍼뜨리는 것에는 동의하지 않았다', '한 사람에게만 보여 주면 괜찮다'], answer: 1, difficulty: 0.25, explain: '한 사람에게 보낸 것은 퍼뜨려도 된다는 동의가 아니에요.' },
            { type: 'short', prompt: '세 동사 가운데 지금 가장 어려운 것 하나와 해낼 방법을 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 이미지에 대한 권리와 디지털 성범죄',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '동의 없이 찍거나 퍼뜨린 성적 이미지는 디지털 ___다.', answer: '성범죄' },
            { type: 'short', prompt: '친구에게 세 동사를 권하는 말을 한 줄로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 성범죄 · 알린다 · 동의', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '사진 속 사람의 ___ 없이 퍼뜨리지 않는다.', answer: '동의' }] },
        },
      }),
      M({
        id: 'wrap.quick-quiz', type: 'wrap', title: '사실 퀴즈 정답률 그래프',
        method: '디지털 성범죄 사실 확인 그래프 퀴즈', tool: 'chart', minutes: 7,
        levels: { easy: '가장 많이 틀린 문항과 그 정답만 확인한다.', base: '그 문항의 정답 까닭을 한 줄 쓴다.', challenge: '그 문항이 왜 헷갈렸을지 추측해 쓴다.' },
        wrap: {
          teacher: '“가상 학급이 푼 다섯 문항 정답률이에요. 가장 많이 틀린 문항은 3번 — ‘단톡방에서 보기만 하면 괜찮다’였어요. 정답은 무엇이었을까요?” 그래프를 읽은 뒤 3번 문항을 다시 풀게 한다. “보기만 했는데 무슨 잘못이에요”라는 학생에게 “보는 사람이 많아질수록 사진 속 친구에게는 무슨 일이 생길까요?”라고 묻는다. 많이 틀린 문항은 통념이 강한 문항이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: QUIZ_T, unit: '%', xLabel: '문항', yLabel: '정답률', data: QUIZ, question: '정답률이 가장 낮은 문항은?', choices: QUIZ.map((q) => q[0]) }, prompt: '가상 학급 그래프에서 가장 많이 틀린 문항을 고르세요.', target: { pick: 2 }, difficulty: 0.15 },
            { type: 'choice', prompt: '3번 문항 “단톡방에서 보기만 하면 괜찮다”의 정답은?', options: ['참 — 보기만 하면 책임이 없다', '거짓 — 보는 사람이 늘수록 피해가 커지고, 멈추고 알려야 한다', '상황에 따라 늘 괜찮다'], answer: 1, difficulty: 0.2, explain: '보는 것도 피해를 키워요. 보지 않고, 퍼뜨리지 않고, 알려요.' },
            { type: 'short', prompt: '3번 문항이 많이 틀린 까닭을 추측해 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '디지털 성범죄 사실 확인',
          items: [
            { type: 'short', prompt: '“AI로 만든 가짜 사진이면 피해가 없다”가 왜 틀린지 한 줄로 쓰세요.' },
            { type: 'short', prompt: '오늘 바로잡은 생각 하나를 쓰세요.' },
          ],
        },
        notes: '정답률은 수업용 가상 값이다. 우리 반이 퀴즈를 풀었다면 익명 결과로만 바꿔 보인다.',
      }),
    );
  }

  // ======================================================================================================
  // 5. 광고 속 성 고정관념과 성 상품화 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-media-ad', [10]);
    const ADS = [{ id: 'wash', label: '세탁기 광고: 엄마만 빨래하며 “가족을 위해”라고 웃는다' }, { id: 'car', label: '자동차 광고: 아빠가 운전하고 가족은 뒷자리에서 감탄한다' }, { id: 'cos', label: '화장품 광고: “남자도 피부 관리”라며 운동 뒤 세안을 보여 준다' }];
    const ROLES = [['돌봄(여)', 14], ['돌봄(남)', 3], ['운전(여)', 2], ['운전(남)', 11], ['전문가(여)', 4], ['전문가(남)', 12], ['몸 강조(여)', 9], ['몸 강조(남)', 2]];
    const ROLES_T = '가상 광고 20편 배역을 성별로 센 수(가상, 겹쳐 셈)';
    const DEV = [
      ['음료 광고에서 카메라가 모델의 다리만 천천히 비춘다', '자동차 광고가 차보다 모델의 몸매를 크게 보여 준다', '시계 광고에서 손목 대신 가슴께를 클로즈업한다'],
      ['라면 광고가 맛 대신 모델의 선정적인 몸짓을 보여 준다', '세제 광고에 제품과 상관없는 야릇한 대사가 나온다'],
      ['청소기 광고에 늘 여성만 청소하는 모습이 나온다', '보험 광고에서 남성만 “가장의 책임”을 말한다', '장난감 광고에서 여아는 인형, 남아는 로봇만 고른다'],
      ['운동화 광고가 여러 성별 선수의 기록 도전을 보여 준다', '냉장고 광고가 칸 구조와 전기 사용량을 설명한다'],
    ];
    const DEV_S = ['몸 부분 강조', '제품과 무관한 선정적 연출', '역할 고정', '해당 없음'];
    const DEBATE = [['청소년이 보는 시간대 광고는 영향이 크다', '같은 배역 반복이 고정관념을 굳힌다는 연구가 있다'], ['표현의 자유를 지나치게 좁힐 수 있다', '업계가 스스로 기준을 만드는 자율 규제가 낫다']];

    MODS.push(
      M({
        id: 'intro.ad-scan', type: 'intro', title: '가상 광고 세 편 첫인상',
        method: '가상 광고 세 편 첫인상 기록', tool: 'emotion', minutes: 7,
        levels: { easy: '광고마다 첫인상 마음 카드만 고른다.', base: '마음 카드를 고르고, 그 마음을 만든 장치(배역·문구)를 말한다.', challenge: '같은 광고의 배역 성별을 바꾸면 느낌이 어떻게 달라질지 예상해 말한다.' },
        intro: {
          teacher: '“세 가상 광고 설명을 읽고 첫인상으로 떠오른 마음을 골라 봐요. 정답은 없어요. 그 마음이 어디서 왔는지가 오늘의 질문이에요.” 시연 단추로 광고마다 마음 카드가 붙는 모습을 보여 준다. “광고는 그냥 재밌으면 그만이죠”라는 말이 나오면 “엄마만 빨래하는 장면을 천 번 보면, 빨래는 누구 일이라고 느끼게 될까요?”라고 되묻는다. 마음을 만든 배역·문구가 오늘 분석할 ‘장치’라는 점을 밝힌다.',
          student: '가상 광고 세 편의 설명을 읽고 첫인상으로 떠오른 마음 카드를 골라 보세요. 그 마음을 만든 배역이나 문구가 무엇인지도 찾아보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: ADS, cards: [{ id: 'stuffy', text: '답답함' }, { id: 'awk', text: '어색함' }, { id: 'fresh', text: '신선함' }, { id: 'calm', text: '편안함' }] }, sequence: [{ match: { wash: 'stuffy', car: 'awk', cos: 'fresh' } }] },
          art: { draw: 'three paper TV screens side by side showing a washing machine, a car and a skincare bottle, small paper weather icons floating above each screen as first impressions, a paper student with a notepad', banner: '광고를 보고 든 첫 마음은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고는 모두 가상이다(실제 회사·상품 이름을 쓰지 않는다). 마음 카드는 정답이 없고, 시연의 짝은 한 예일 뿐이다.',
      }),
      M({
        id: 'intro.role-count', type: 'intro', title: '광고 속 배역 수 자료',
        method: '광고 속 배역 수 세기 자료', tool: 'chart', minutes: 7,
        levels: { easy: '돌봄 배역의 두 막대(여·남)만 견준다.', base: '가장 치우친 항목을 찾고 그 까닭을 고른다.', challenge: '자료에서 빠진 정보(광고 대상·방송 시간 등)를 짚어 말한다.' },
        intro: {
          teacher: '“가상 광고 20편의 배역을 성별로 셌어요. 돌봄은 여 14·남 3, 운전은 여 2·남 11이에요. 가장 치우친 항목은 어디일까요?” 시연 단추로 ‘돌봄’ 항목이 골라지는 모습을 보여 준다. “고정관념은 여성에게만 불리하죠”라는 말이 나오면 “‘가장의 책임’ 배역에 남성만 나온다면, 남성에게는 어떤 기대가 생길까요?”라고 되묻는다. 고정관념은 모든 성별의 선택을 좁힌다는 점을 짚는다.',
          student: '가상 광고 20편의 배역을 성별로 센 막대그래프를 읽고, 가장 치우친 항목을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: ROLES_T, unit: '편', xLabel: '배역(성별)', yLabel: '나온 수', data: ROLES, question: '두 성별 차이가 가장 큰 항목은?', choices: ['돌봄', '운전', '전문가', '몸 강조'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with paired bars in two colors, small paper icons under each pair (a stroller, a steering wheel, a lab coat, a mirror), a paper student counting with tally marks', banner: '누가 어떤 배역을 맡을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '값은 수업용 가상 값이다(한 광고에 배역이 여럿이라 겹쳐 셌다). 실제 모니터링 자료를 쓰려면 한국양성평등교육진흥원 등 공식 자료의 조사 대상·기간을 함께 보인다.',
      }),

      M({
        id: 'activity.device-analysis', type: 'activity', title: '성 상품화 장치 분석',
        method: '성 상품화 장치 분석표 채우기', tool: 'sortboard', minutes: 17,
        levels: { easy: '장면 카드 여섯 장을 네 칸에 나눈다(틀리면 바로 되돌아옴, 칸마다 장 수 보임).', base: '장면 카드 열 장을 나누고, 광고 문구와 영향 카드도 분석 칸에 나눈다.', challenge: '헷갈리는 카드가 더해진 판에서 나누고, ‘해당 없음’으로 본 근거를 활동지에 쓴다.' },
        activity: {
          title: '장면 분석 바구니', tool: 'sortboard',
          teacher: '“가상 광고 장면을 네 바구니에 나눠요 — 몸 부분 강조, 제품과 무관한 선정적 연출, 역할 고정, 해당 없음.” 카드를 놓을 때마다 “이 장면은 제품을 보여 주나요, 사람의 몸이나 역할을 팔고 있나요?”라고 묻는다. 운동화 광고를 ‘몸 부분 강조’에 넣는 학생에게 “선수의 몸이 나오는 것과, 제품과 상관없이 몸 한 부분만 비추는 것은 같을까요?”라고 되묻는다. 사람의 몸을 제품처럼 쓰는 것이 성 상품화이고, 몸이 나온다고 모두 그런 것은 아니라는 점을 짚는다.',
          task: '가상 광고 장면을 분석 바구니에 나누고, 문구와 영향도 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('가상 광고 장면 카드를 분석 바구니에 나누세요.', DEV_S, DEV, { k: 1, hard: [['화장품 광고에서 피부 대신 입술만 오래 비춘다'], [], [], ['청소기 광고에 여러 성별 가족이 번갈아 청소한다']], d: 0.35 }),
            BOARDQ('가상 광고 문구를 바구니에 나누세요.', ['고정관념을 굳히는 문구', '고정관념을 깨는 문구'], [['“엄마의 손맛을 그대로”', '“남자라면 이 정도 차는 타야지”', '“여자는 피부가 생명”'], ['“요리는 하고 싶은 사람이 즐기는 것”', '“누구나 운전석에”']], { k: 2, d: 0.3 }),
            BOARDQ('광고 장치를 만든 쪽의 의도와 보는 사람이 받는 영향으로 나누세요.', ['만든 쪽의 의도', '보는 사람이 받는 영향'], [['짧은 시간에 눈길을 끈다', '익숙한 배역으로 쉽게 이해시킨다'], ['특정 성별의 역할을 당연하게 여긴다', '몸을 평가하는 눈이 익숙해진다']], { k: 1, d: 0.35, more: { conclude: '광고 장치는 눈길을 끌려는 의도에서 나오지만, 되풀이되면 역할 고정과 몸을 평가하는 시선을 굳혀요. 몸이 나온다고 모두 상품화는 아니고, 제품과 상관없이 몸을 파는지 봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘해당 없음’으로 나눈 장면 하나를 골라 그렇게 본 근거를 쓰세요.' }] },
        notes: '장면은 모두 말로 쓴 가상 광고다. 실제 광고 영상을 보여 줄 때는 선정적 장면이 없는지 교사가 먼저 확인한다. 특정 연예인의 외모를 평가하는 말로 흐르지 않게 한다.',
      }),
      M({
        id: 'activity.redesign', type: 'activity', title: '고정관념 없는 광고 다시 만들기',
        method: '고정관념 없는 광고로 다시 만들기', tool: 'collage', minutes: 17,
        levels: { easy: '바꿀 요소 하나(배역)만 조각으로 바꾸고 점검한다.', base: '배역·구도·문구 자리 세 요소를 조각으로 바꾸고, 바꾼 점 세 가지를 활동지에 쓴다.', challenge: '세 요소를 바꾼 뒤, 제품 판매 효과도 유지되는지 근거를 점검하고 쓴다.' },
        activity: {
          title: '새 광고 시안 콜라주', tool: 'collage',
          teacher: '“분석한 가상 광고 하나를 골라 새 시안을 만들어요. 배역, 구도, 문구 자리를 바꿔 볼까요?” 먼저 무엇을 바꿀지 정하고 조각을 붙이게 한다. “고정관념 없애면 광고가 재미없어져요”라는 학생에게 “제품을 가장 잘 보여 주는 구도는 무엇일까요? 몸 대신 제품을 크게 놓으면 어떨까요?”라고 묻는다. 배역을 성별 대신 하는 일로 정하고, 제품이 주인공이 되게 하는 것이 대안이라는 점을 짚는다.',
          task: '가상 광고의 배역·구도·문구 자리를 조각으로 바꾼 새 시안을 만들어요.', levels: { easy: { maxPieces: 10 }, base: {}, challenge: {} },
          items: [
            { prompt: '배역을 바꾸세요: 일을 함께하는 두 인물을 서로 다른 색 동그라미 조각 2개로 놓으세요.', toolOptions: { shapes: ['circle', 'rect', 'square'], colors: ['빨강', '파랑', '노랑', '초록', '보라'] }, target: { has: [{ shape: 'circle', min: 2 }], selfCheck: ['배역을 성별이 아니라 하는 일로 정했다', '두 인물이 함께 일하는 모습이다'] }, difficulty: 0.2 },
            { prompt: '구도를 바꾸세요: 제품을 큰 네모 조각으로 판 가운데에 놓으세요.', toolOptions: { shapes: ['square', 'rect', 'circle'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'square', size: 'l', min: 1 }], selfCheck: ['제품이 화면의 주인공이다', '몸 한 부분을 비추는 구도를 쓰지 않았다'] }, difficulty: 0.25 },
            { prompt: '문구 자리를 만드세요: 긴 네모 조각 1개 이상으로 문구 띠를 놓고 바탕과 밝기 대비를 주세요.', toolOptions: { shapes: ['rect', 'square'], colors: ['노랑', '하양', '보라', '검정', '파랑'] }, target: { has: [{ shape: 'rect', min: 1 }], contrast: 'light-dark', selfCheck: ['문구는 제품의 장점을 말한다', '성별 역할을 정하는 말을 넣지 않았다'] }, difficulty: 0.3, conclude: '고정관념 없는 광고는 배역을 하는 일로 정하고, 제품을 주인공으로 두고, 역할을 정하지 않는 문구를 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바꾼 점 세 가지를 쓰세요.', columns: ['요소', '원래 광고', '새 시안'], cells: [['배역', '', ''], ['구도', '', ''], ['문구', '', '']] }] },
        notes: '조각 판에는 글자를 쓸 수 없어 문구는 활동지에 쓴다. 실제 광고 이미지를 붙이지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '광고 규제 찬반 근거 토론',
        method: '"광고 규제가 필요한가" 찬반 근거 토론', tool: 'mindmap', minutes: 34,
        levels: { easy: '근거 카드가 주어지고, 찬성·반대 가지에 나눈 뒤 반박을 짝짓는다.', base: '근거를 나누고, 근거마다 반박을 짝짓고, 질 높은 근거를 고른 뒤 모둠 발표를 한다.', challenge: '헷갈리는 근거가 더해진 판에서 나누고, 양쪽을 아우르는 절충안을 활동지에 쓴다.' },
        activity: {
          title: '찬반 근거 가지', tool: 'mindmap',
          teacher: '“‘성 고정관념·성 상품화 광고를 규제해야 하는가’ — 오늘은 정답을 정하지 않아요. 양쪽의 가장 강한 근거를 공정하게 세우는 것이 목표예요.” 근거 카드를 가지에 나눈 뒤 근거마다 반박을 짝짓게 한다. ‘내 친구도 그렇게 생각한다’ 같은 카드를 강한 근거로 고른 학생에게 “다른 사람이 확인할 수 있는 근거인가요?”라고 묻는다. 모둠마다 각 쪽의 최강 근거를 2분씩 발표하고, 상대 근거를 존중하는 말로 반박하게 한다.',
          task: '광고 규제 찬반 근거를 가지에 나누고, 반박을 짝짓고, 질 높은 근거를 골라 토론해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대 가지에 나누세요.', ['규제가 필요하다(찬성)', '규제는 신중해야 한다(반대)'], DEBATE, { k: 1, hard: [['아이들이 따라 하기 쉬운 장면은 거르는 것이 낫다'], ['소비자가 문제 광고를 거르면 시장이 바뀐다']], d: 0.3, opt: { topic: '광고 규제가 필요한가' } }),
            MATCHQ('근거마다 상대 쪽의 반박을 짝지으세요.', [['청소년이 보는 시간대 광고는 영향이 크다', '시간대만 바꾸면 되고 전체 규제는 지나치다'], ['표현의 자유를 지나치게 좁힐 수 있다', '자유에도 다른 사람을 해치지 않을 책임이 따른다'], ['업계가 스스로 기준을 만드는 자율 규제가 낫다', '자율 규제가 잘 지켜지지 않았다는 지적도 있다']], { k: 2, extra: ['상대는 광고를 몰라서 그렇다'], d: 0.35, opt: { topic: '근거와 반박' }, more: { hints: ['반박은 사람이 아니라 근거를 향해요.'] } }),
            PICKQ('근거의 질이 높은 카드만 고르세요.', ['같은 배역 반복의 영향을 다룬 조사 결과', '규제 전후 광고 내용을 비교한 자료'], ['내 친구도 그렇게 생각한다', '요즘 광고는 다 그렇다', '상대 쪽 사람들은 늘 틀린다'], { d: 0.35, opt: { basket: '질 높은 근거', topic: '근거의 질' } }),
            { prompt: '모둠별로 각 쪽의 최강 근거를 2분씩 발표하고, 상대 근거를 존중하는 말로 반박해 보세요.', free: true, toolOptions: { mode: 'pick', cards: [], topic: '모둠 토론' }, talk: true, conclude: '토론의 목표는 이기는 것이 아니라 양쪽 근거를 공정하게 따져 더 나은 판단에 이르는 것이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '양쪽의 가장 강한 근거와 반박을 정리하세요.', columns: ['쪽', '가장 강한 근거', '그 근거에 대한 반박'], cells: [['찬성', '', ''], ['반대', '', '']] }, { type: 'short', prompt: '양쪽을 아우르는 절충안 하나를 쓰세요.' }] },
        notes: '찬반 어느 쪽도 정답으로 두지 않는다. 근거 카드의 ‘연구가 있다’·‘지적도 있다’는 토론용 일반 진술이며 출처를 묻는 학생에게는 공식 자료로 확인해 보자고 안내한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.consumer-action', type: 'wrap', title: '소비자로서 할 행동',
        method: '소비자로서 할 수 있는 행동 고르기', tool: 'kitchen', minutes: 7,
        levels: { easy: '할 수 있는 행동에 표시만 한다.', base: '표시하고, 이번 주에 실천할 것 하나와 까닭을 한 줄 쓴다.', challenge: '실천할 날짜까지 정해 쓴다.' },
        wrap: {
          teacher: '“소비자로서 문제 광고에 할 수 있는 일은 무엇일까요?” 점검표에서 할 수 있는 행동만 표시하게 한다. ‘광고 모델을 비난하는 글을 퍼뜨린다’에 표시한 학생에게 “광고를 바꾸는 힘은 사람을 공격하는 데서 나올까요, 광고를 비판하는 데서 나올까요?”라고 묻는다. 도전 반은 실천할 날짜까지 정하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '소비자로서 할 수 있는 행동', items: [{ id: 'report', text: '문제 광고를 공식 창구에 신고한다' }, { id: 'support', text: '고정관념 없는 콘텐츠를 찾아 지지한다' }, { id: 'talk', text: '친구와 광고를 보며 이야기 나눈다' }, { id: 'nothing', text: '광고는 원래 그러니 아무것도 안 한다' }, { id: 'attack', text: '광고 모델을 비난하는 글을 퍼뜨린다' }] }, prompt: '소비자로서 할 수 있는 행동만 표시하세요.', target: { checklist: ['report', 'support', 'talk'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“광고는 그냥 재미일 뿐 영향이 없다”에 대한 바른 생각은?', options: ['맞다, 광고는 아무 영향이 없다', '되풀이되는 배역은 역할에 대한 기대를 만들 수 있다', '어른에게만 영향이 있다'], answer: 1, difficulty: 0.2, explain: '같은 장면을 되풀이해 보면 그것을 당연하게 여기게 될 수 있어요.' },
            { type: 'short', prompt: '이번 주에 실천할 행동 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '광고 속 성 고정관념과 성 상품화',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사람의 몸을 제품처럼 쓰는 것을 성 ___라고 한다.', answer: '상품화' },
            { type: 'short', prompt: '고정관념이 남성에게도 불리할 수 있는 예를 하나 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 상품화 · 고정관념 · 대안', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '‘빨래는 엄마 일’처럼 정해진 생각을 성 ___이라고 한다.', answer: '고정관념' }] },
        },
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '광고를 보는 눈 세 줄',
        method: '광고를 보는 눈 성찰 세 줄', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 질문 예 하나를 함께 만들고, 한 줄만 써도 된다고 안내한다.', base: '광고를 볼 때 묻게 될 질문 세 줄을 쓰고 기준표로 점검한다.', challenge: '같은 질문을 웹툰·게임에도 적용한 한 줄을 출구 질문에 더 쓴다.' },
        wrap: {
          teacher: '“오늘 이후 광고를 볼 때 스스로에게 던질 질문을 세 줄로 써 봐요. ‘이 장면은 제품을 보여 주나, 몸을 보여 주나?’ 같은 질문이요.” 쓴 뒤 기준표로 점검하게 한다. “광고 안 보면 되잖아요”라는 학생에게 “피할 수 없을 때 무엇을 물으면 내가 휘둘리지 않을까요?”라고 묻는다. 쉬움 반은 한 줄만 써도 되고, 도전 반은 다른 매체에 적용한 질문을 더 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 이후 광고를 볼 때 스스로에게 물을 질문을 세 줄로 쓰세요.', minChars: 30, maxChars: 300, minSentences: 1, maxSentences: 4 }, prompt: '광고를 볼 때 물을 질문을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['질문이 구체적이다', '고정관념·상품화 같은 오늘 낱말을 썼다', '내가 실제로 물을 질문이다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '광고를 볼 때 가장 먼저 물을 질문으로 알맞은 것은?', options: ['모델이 예쁜가?', '이 장면은 제품을 보여 주는가, 사람의 몸이나 역할을 파는가?', '광고비가 얼마일까?'], answer: 1, difficulty: 0.2, explain: '제품과 상관없이 몸이나 역할을 쓰는지 보는 것이 분석의 시작이에요.' },
            { type: 'short', prompt: '같은 질문을 웹툰이나 게임에 적용해 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '광고를 보는 눈',
          items: [
            { type: 'short', prompt: '광고를 볼 때 물을 질문 하나를 쓰세요.' },
            { type: 'short', prompt: '오늘 분석한 장치 가운데 가장 자주 보이는 것 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 생식 건강과 성매개감염병 예방 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-repro-health', [10]);
    const RUMORS = [['증상이 없어도 감염되었을 수 있다', '성매개감염병은 검사로 확인할 수 있다', '감염을 알면 상대에게도 알려 함께 검사한다'], ['증상이 없으면 감염되지 않은 것이다', '검사를 받는 사람은 문제가 있는 사람이다', '한 번 치료하면 다시는 걸리지 않는다']];
    const PATH = ['예방 수칙을 알고 지킨다', '평소와 다른 신호를 알아차린다', '보건 선생님·의료기관에 상담하고 검사한다', '치료를 받고 상대에게도 알린다', '다시 검사해 나았는지 확인한다'];
    const TOWN = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '보건실', icon: 'hospital', at: [1, 0], legend: '학교 보건실(보건 선생님)' }, { name: '상담실', icon: 'house', at: [3, 0], legend: '학교 상담실' }, { name: '병원(의료기관)', icon: 'hospital', at: [5, 2], legend: '병원·의원' }, { name: '청소년 상담 기관', icon: 'office', at: [2, 3], legend: `청소년 상담 기관 ${HELPNO}` }, { name: '도서관', icon: 'library', at: [0, 3] }, { name: '시장', icon: 'market', at: [4, 3] }] });
    const ORGANS = (q, choices) => ({ mode: 'layers', readOnly: true, readout: false, ask: { q, choices } });

    MODS.push(
      M({
        id: 'intro.organ-match', type: 'intro', title: '생식 기관 이름과 하는 일',
        method: '생식 기관 이름과 하는 일 잇기', tool: 'body', minutes: 7,
        levels: { easy: '교사가 교과서 단면 그림에서 이름 세 개(난소·자궁·고환)를 짚어 주고 함께 답한다.', base: '종이 몸 옆에 띄운 질문 보기에서 하는 일에 맞는 기관 이름을 고르고, 나머지 기관의 일을 말로 잇는다.', challenge: '기관 하나를 골라 지킬 건강 습관 하나를 말한다.' },
        intro: {
          teacher: '“과학 시간에 배운 생식 기관을 다시 떠올려 봐요. 교과서 단면 그림을 함께 보며, 하는 일에 맞는 이름을 골라 볼까요?” 화면의 종이 몸에는 생식 기관 칸이 없어 교과서(또는 교사가 준비한 단면 그림)를 함께 띄우고, 시연 단추로 ‘정자를 만드는 기관 → 고환’이 골라지는 모습을 보여 준다. 웃음이 나오면 “몸의 이름을 바르게 부르는 것이 건강을 지키는 첫걸음이에요”라고 말한다. “이건 어른만 알면 되는 거잖아요”라는 말에는 “내 몸을 알아야 이상 신호도 알아차릴 수 있겠죠?”라고 되묻는다.',
          student: '교과서 수준 단면 그림을 보며 생식 기관의 이름과 하는 일을 이어 보세요. 몸의 이름을 바르게 부르는 것이 건강을 지키는 첫걸음이에요.',
          demo: { tool: 'body', options: ORGANS('정자를 만드는 기관은?', ['고환', '난소', '자궁', '나팔관']), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper anatomy textbook page with simple outlined diagrams kept abstract and modest, label tags on strings, a paper stethoscope and a notebook beside it on a desk', banner: '내 몸의 이름을 바르게', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '종이 몸(body) 교구에는 생식 기관 칸이 없어 질문 보기(ask)로 이름을 고르고, 단면 그림은 교과서·교사 자료로 보인다. 이름과 하는 일 예: 고환 — 정자와 남성 호르몬, 난소 — 난자와 여성 호르몬, 나팔관 — 난자가 지나는 길, 자궁 — 태아가 자라는 곳(사람 확인 목록). 학생의 몸 상태를 묻지 않는다.',
      }),
      M({
        id: 'intro.myth-check', type: 'intro', title: '성 건강 소문 가려내기',
        method: '성 건강 소문 참·거짓 판단', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 세 장을 함께 읽고 사실·소문을 가른다.', base: '카드 여섯 장을 가르고 근거를 말한다.', challenge: '소문이 퍼지는 까닭을 하나 말한다.' },
        intro: {
          teacher: '“성 건강에 대해 떠도는 말 여섯 개예요. 사실일까요, 소문일까요?” 시연 단추로 카드가 사실·소문 칸에 나뉘는 모습을 보여 준다. “증상이 없으면 괜찮은 거 아니에요?”라는 말이 나오면 “증상 없이 지나가는 감염도 있다면, 어떻게 알 수 있을까요?”라고 되묻는다. 검사는 문제가 있는 사람이 아니라 자기와 상대의 건강을 챙기는 사람이 받는 것이라는 점을 짚는다.',
          student: '성 건강에 대해 떠도는 여섯 문장을 사실과 소문으로 나누어 보세요. 증상이 없으면 괜찮은지도 생각해 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['사실', '소문'], cards: mix(RUMORS) }, sequence: [{ sort: { 사실: RUMORS[0], 소문: RUMORS[1] } }] },
          art: { draw: 'paper rumor speech bubbles drifting from phones toward two paper baskets marked with a check and a cross, a paper school nurse badge and a magnifying glass on the side', banner: '그 소문, 사실일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사실 문장은 체계도 concepts(증상 없는 전파·검사와 치료·낙인) 범위다. 병 이름·증상·치료법은 자세히 다루지 않고, 궁금한 점은 보건 선생님·의료기관에서 확인하게 한다.',
      }),

      M({
        id: 'activity.care-routine', type: 'activity', title: '생식 건강 습관과 진료 신호',
        method: '생식 건강 습관과 진료 신호 체크리스트', tool: 'kitchen', minutes: 17,
        levels: { easy: '점검표 앞 항목만 골라 넣는다(항목 수 줄임).', base: '습관 점검표·진료 신호 점검표를 고르고, 상황마다 보건실·의료기관 연결 칸을 나눈다.', challenge: '모두 고른 뒤, 부끄러워 진료를 미루는 친구에게 할 말을 활동지에 쓴다.' },
        activity: {
          title: '건강 습관 점검표', tool: 'kitchen',
          teacher: '“생식 건강도 손 씻기처럼 매일의 습관과, ‘이럴 땐 진료’라는 신호가 있어요. 점검표를 만들어 볼까요?” 항목마다 “이 습관은 몸에 어떤 도움이 될까요?”라고 묻는다. ‘아파도 부끄러우니 참는다’를 넣으려는 학생에게 “다른 곳이 아플 때는 어떻게 하나요? 생식 기관도 몸의 한 부분이에요”라고 되묻는다. 진료가 필요한 신호를 알아차리면 혼자 참지 말고 보건 선생님이나 의료기관에 묻는다는 점을 짚는다.',
          task: '생식 건강 습관과 진료가 필요한 신호를 점검표로 고르고, 도움받을 곳을 나눠요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('생식 건강을 지키는 습관만 고르세요.', '생식 건강 습관', [['wash', '매일 씻고 잘 말린다', true], ['cotton', '바람이 잘 통하는 속옷을 입는다', true], ['change', '속옷을 날마다 갈아입는다', true], ['sleep', '잠과 운동으로 몸 전체를 챙긴다', true], ['strong', '향이 강한 세정제로 자주 세게 씻는다', false], ['endure', '아파도 부끄러우니 참는다', false]], { k: 4, d: 0.25 }),
            CHECKQ('진료가 필요한 신호만 고르세요.', '이럴 땐 진료', [['pain', '평소와 다른 통증이 며칠 이어진다', true], ['itch', '가려움이나 분비물 변화가 계속된다', true], ['daily', '통증 때문에 일상생활이 어렵다', true], ['once', '하루 잠깐 피곤했다', false], ['grow', '키가 자라며 몸이 조금씩 변한다', false]], { k: 3, d: 0.3 }),
            SORTQ('상황마다 먼저 도움을 청할 곳으로 나누세요.', ['학교 보건실', '병원(의료기관)'], [['학교에서 갑자기 배가 아플 때', '건강 정보를 묻고 싶을 때'], ['통증이 며칠째 이어질 때', '검사가 필요하다는 말을 들었을 때']], { k: 1, d: 0.3, opt: { groups: false, autoMotif: false }, more: { conclude: '생식 건강은 매일의 습관으로 챙기고, 평소와 다른 신호가 이어지면 부끄러워하지 말고 보건 선생님·의료기관에 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부끄러워 진료를 미루는 친구(가상)에게 할 말을 한 문장으로 쓰세요.' }] },
        notes: '학생 자신의 몸 상태·증상을 묻거나 발표시키지 않는다. 신호 항목은 일반적인 안내이며, 진단은 의료기관이 한다고 말해 준다. 생리 관련 고민은 보건 선생님과 따로 이야기할 수 있다고 안내한다.',
      }),
      M({
        id: 'activity.test-path', type: 'activity', title: '예방·검사·치료의 차례',
        method: '예방-검사-치료 차례 짜기', tool: 'timeline', minutes: 17,
        levels: { easy: '앞 네 단계만 차례로 놓는다.', base: '다섯 단계를 차례로 놓고, 단계마다 흔한 망설임을 짝짓는다.', challenge: '모두 놓은 뒤, 낙인이 가로막는 단계를 고른다.' },
        activity: {
          title: '검사와 치료의 길', tool: 'timeline',
          teacher: '“예방에서 재검까지, 성 건강을 챙기는 길을 차례로 놓아 봐요.” 카드를 놓을 때마다 “이 단계에서 사람들이 망설이는 까닭은 무엇일까요?”라고 묻는다. ‘상대에게 알리는 것’을 빼려는 학생에게 “상대가 모르면 상대의 건강은 누가 챙길까요?”라고 되묻는다. 검사를 ‘문제 있는 사람’으로 보는 낙인이 검사 단계를 가장 크게 막는다는 점을 짚는다.',
          task: '예방에서 재검까지 차례로 놓고, 단계마다 망설임과 낙인이 막는 곳을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('성 건강을 챙기는 다섯 단계를 차례로 놓으세요.', PATH, { k: 4, traps: ['소문을 듣고 혼자 짐작한다'], d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 흔한 망설임을 짝지으세요.', [['상담·검사', '“검사받으면 이상하게 볼까 봐”'], ['상대에게 알림', '“말하면 관계가 끝날까 봐”'], ['다시 검사', '“이제 괜찮은 것 같은데”']], { k: 2, d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('“검사받는 사람은 문제가 있다”는 낙인이 가장 크게 가로막는 단계를 고르세요.', ['보건 선생님·의료기관에 상담하고 검사한다'], ['예방 수칙을 알고 지킨다', '다시 검사해 나았는지 확인한다'], { d: 0.35, opt: { basket: '낙인이 막는 단계', axis: ['먼저', '나중'] }, more: { conclude: '증상이 없어도 감염될 수 있어 검사가 중요해요. 검사는 책임 있는 선택이고, 낙인은 그 선택을 가로막아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '단계 하나를 골라 그 단계의 망설임을 줄일 말을 한 문장으로 쓰세요.' }] },
        notes: '병 이름·증상·치료 방법은 다루지 않고 차례와 태도만 다룬다. 실제 상담·검사 기관은 보건 선생님과 확인해 안내한다.',
      }),
      M({
        id: 'activity.stigma-campaign', type: 'activity', title: '낙인 없는 검사 문화 캠페인',
        method: '낙인 없는 검사 문화 캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문항마다 예시 문장 틀을 보고 쓰고, 본문은 한 문장부터 시작한다.', base: '제목 → 본문 세 문장 → 행동 제안 → 대상 맞추기 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 반응이 엇갈릴 표현을 찾아 고친다.' },
        activity: {
          title: '“검사는 책임 있는 선택” 캠페인', tool: 'rubric-writing',
          teacher: '“‘검사는 책임 있는 선택’이라는 메시지로 캠페인 글을 써요. 사실이 정확하고, 누구도 부끄럽게 만들지 않는 말이어야 해요.” 먼저 제목을 쓰고 본문 세 문장을 쓰게 한다. “검사 안 받으면 큰일 난다”처럼 겁주는 말을 쓴 학생에게 “겁주는 말을 들으면 검사가 더 쉬워질까요, 더 숨고 싶어질까요?”라고 묻는다. 낙인 없는 말은 검사받는 사람을 칭찬하고, 할 행동을 구체적으로 알려 준다는 점을 짚는다.',
          task: '낙인 없는 검사 문화 캠페인 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('캠페인 제목을 한 문장으로 쓰세요.', '“검사는 책임 있는 선택”이라는 메시지를 담은 캠페인 제목을 쓰세요.', ['메시지가 한눈에 보인다', '누구도 부끄럽게 하지 않는다', '짧고 기억하기 쉽다'], { min: 8, max: 80, sent: [1, 2], starter: '“검사, ~”', d: 0.3 }),
            RWQ('본문을 3문장으로 쓰세요.', '증상이 없어도 감염될 수 있다는 사실, 검사가 책임 있는 선택인 까닭, 낙인이 왜 해로운지를 한 문장씩 쓰세요.', ['사실이 정확하다', '낙인 없는 말을 썼다', '세 내용을 모두 담았다'], { min: 60, max: 400, sent: [3, 4], must: [['증상'], ['검사']], starter: '증상이 없어도 ~. 그래서 검사는 ~. 검사받는 사람을 ~', plus: '반응이 엇갈릴 표현을 찾아 고쳤다', d: 0.4 }),
            RWQ('행동 제안을 2문장으로 쓰세요.', '캠페인을 본 사람이 할 행동 두 가지를 구체적으로 쓰세요(도움받을 곳 포함).', ['행동이 구체적이다', '도움받을 곳을 썼다', '겁주지 않는 말투다'], { min: 40, max: 300, sent: [2, 3], must: [['보건', '의료', '상담']], starter: '궁금하면 ~에 물어보세요. 그리고 ~', d: 0.4 }),
            RWQ('캠페인을 볼 대상을 정하고 말투를 맞춘 까닭을 쓰세요.', '캠페인을 볼 대상(예: 같은 학년 친구)을 정하고, 그 대상에 맞게 말투를 고른 까닭을 쓰세요.', ['대상을 정했다', '말투를 고른 까닭을 썼다', '대상이 이해할 낱말을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['대상']], starter: '이 캠페인의 대상은 ~이다. 그래서 ~', plus: '대상이 가장 망설일 지점을 짚었다', d: 0.4, more: { conclude: '낙인 없는 캠페인은 사실을 정확히 말하고, 검사받는 사람을 존중하고, 할 행동과 도움받을 곳을 알려 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 캠페인을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['사실 정확성', ''], ['낙인 없는 말', ''], ['행동 제안', ''], ['대상 맞춤', '']] }, { type: 'short', prompt: '캠페인 글 가운데 가장 고치고 싶은 표현과 고친 표현을 쓰세요.' }] },
        notes: '의학 사실은 오늘 다룬 범위(증상 없는 전파·검사와 치료·낙인)만 쓰게 한다. 게시 전에 보건 선생님이 사실을 확인한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.trust-route', type: 'wrap', title: '건강 고민을 들고 갈 곳',
        method: '건강 고민을 들고 갈 곳 지도', tool: 'map', minutes: 7,
        levels: { easy: '핀 두 개(보건실·병원)만 함께 놓는다.', base: '핀 두 개를 놓고, 가는 차례를 활동지에 쓴다.', challenge: '익명으로 상담할 수 있는 곳을 활동지에 따로 표시한다.' },
        wrap: {
          teacher: '“건강 고민이 생기면 어디로 갈까요? 학교 안 먼저, 그다음 동네로 이어 봐요.” 지도에 핀을 놓게 한다. 시장이나 도서관에 핀을 놓는 학생에게 “그곳에 건강을 살펴 줄 사람이 있을까요?”라고 묻는다. 청소년 상담 기관 번호는 학교가 확인한 것을 쓴다고 말해 준다. 도전 반은 이름을 밝히지 않고 상담할 수 있는 곳을 보건 선생님께 확인해 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교에서 건강 고민이 생겼을 때 먼저 갈 곳에 핀을 놓으세요.', target: { place: '보건실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '검사나 진료가 필요하다는 말을 들었을 때 갈 곳에 핀을 놓으세요.', target: { place: '병원(의료기관)' }, difficulty: 0.2 },
            { type: 'short', prompt: '건강 고민을 들고 갈 곳을 차례대로 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '생식 건강과 성매개감염병 예방',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '___이 없어도 감염되었을 수 있어 검사가 중요하다.', answer: '증상' },
            { type: 'table', prompt: '건강 고민을 들고 갈 곳을 쓰세요.', columns: ['차례', '곳', '번호·메모'], cells: [['1', '보건실', ''], ['2', '', ''], ['3', '청소년 상담 기관', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 증상 · 검사 · 보건실', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '학교에서 건강 고민이 생기면 먼저 ___에 간다.', answer: '보건실' }] },
        },
      }),
      M({
        id: 'wrap.one-fact', type: 'wrap', title: '오늘 바뀐 사실 하나',
        method: '오늘 바뀐 사실 하나 기록', tool: 'chart', minutes: 7,
        levels: { easy: '그래프에서 가장 많이 오른 막대만 함께 본다.', base: '가장 많이 바뀐 사실 하나를 고르고 내 말로 쓴다.', challenge: '여전히 헷갈리는 점을 질문으로 남긴다.' },
        wrap: {
          teacher: '“가상 학급이 수업 전과 뒤에 소문 판단 퀴즈를 풀었어요. 정답률이 가장 많이 오른 문장은 무엇일까요?” 그래프를 읽은 뒤 각자 오늘 바뀐 사실 하나를 쓰게 한다. “아직도 헷갈려요”라는 학생에게 “헷갈리는 걸 질문으로 남기는 것도 좋은 마무리예요. 보건 선생님께 물어볼 질문으로 써 볼까요?”라고 말한다. 질문은 이름 없이 모아 보건 선생님께 전한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '수업 뒤 정답률이 오른 폭(가상 학급, %p)', unit: '%p', xLabel: '소문', yLabel: '오른 폭', data: [['증상 없으면 괜찮다', 50], ['검사는 부끄럽다', 35], ['한 번 치료면 끝', 20], ['검사로 확인 가능', 10]], question: '정답률이 가장 많이 오른 소문은?', choices: ['증상 없으면 괜찮다', '검사는 부끄럽다', '한 번 치료면 끝', '검사로 확인 가능'] }, prompt: '가상 학급 그래프에서 정답률이 가장 많이 오른 소문을 고르세요.', target: { pick: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '“증상이 없으면 감염되지 않은 것이다”에 대한 바른 말은?', options: ['맞다', '증상 없이 감염된 경우도 있어 검사로 확인한다', '어른에게만 해당한다'], answer: 1, difficulty: 0.2, explain: '증상이 없어도 감염되었을 수 있어요. 검사로 확인해요.' },
            { type: 'short', prompt: '오늘 바뀐 사실 하나, 또는 아직 헷갈리는 점을 질문으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '오늘 바뀐 사실',
          items: [
            { type: 'short', prompt: '오늘 가장 크게 바뀐 생각을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '보건 선생님께 묻고 싶은 질문 하나를 쓰세요(이름은 쓰지 않아요).' },
          ],
        },
        notes: '정답률은 수업용 가상 값이다. 질문은 이름 없이 모은다.',
      }),
    );
  }

  // ======================================================================================================
  // 7. 가정폭력 통념과 인권 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-dv-myth', [10]);
    const AGREE = [['“가정 일은 남이 끼어들 일이 아니다”', 48], ['“맞을 만한 이유가 있으면 폭력이 아니다”', 22], ['“부부 싸움은 칼로 물 베기”', 36]];
    const AGREE_T = '통념 문장에 ‘그렇다’고 답한 비율(가상 고교생 설문, %)';
    const YUNA = { text: '쉬는 시간, 친구 윤아가 “요즘 집에 가기 싫어. 밤마다 큰 소리가 나”라고 작게 말한다. 너는 윤아의 친구다.', who: '윤아의 친구', motif: 'cloud', choices: [
      { id: 'listen', text: '“말해 줘서 고마워. 네 마음을 더 들어도 될까?” 하고 들어 준다', result: '윤아가 조금 안심한 얼굴로 “무서워서 잠을 못 자”라고 말한다.', impact: [{ who: '윤아', text: '마음을 말할 사람이 생긴다', tone: 1 }],
        next: { text: '윤아가 “근데 아무한테도 말하지 마”라고 부탁한다.', who: '윤아의 친구', choices: [
          { id: 'together', text: '“너 혼자 감당하지 않게 믿을 만한 선생님께 같이 가자”고 말한다', result: '윤아가 망설이며 생각해 보겠다고 한다.', impact: [{ who: '윤아', text: '도움의 길이 보인다', tone: 1 }],
            next: { text: '윤아가 “선생님이 집에 연락할까 봐 무서워”라고 한다.', who: '윤아의 친구', choices: [
              { id: 'askfirst', text: '“그 걱정도 상담 선생님께 먼저 물어보자”며 함께 상담실에 간다', result: '상담 선생님이 윤아의 걱정을 듣고 안전을 먼저 살피겠다고 한다.', impact: [{ who: '윤아', text: '안전을 함께 살필 어른이 생긴다', tone: 1 }], ending: '털어놓은 친구의 걱정을 존중하면서, 안전이 걸린 일은 믿을 어른에게 잇는다.' },
              { id: 'secret', text: '“알았어, 비밀로 할게” 하고 아무에게도 말하지 않는다', result: '윤아는 다음 날도 잠을 못 잔 얼굴로 온다.', impact: [{ who: '윤아', text: '혼자 견딘다', tone: -1 }], ending: '안전이 걸린 비밀은 지키는 것보다 어른에게 잇는 것이 친구를 지키는 일이다.' }] } },
          { id: 'promise', text: '“절대 말 안 할게”라고 약속하고 이야기를 끝낸다', result: '윤아의 상황은 그대로다.', impact: [{ who: '윤아', text: '도움이 닿지 않는다', tone: -1 }], ending: '듣는 것만으로는 안전을 지킬 수 없다. 어른과 함께해야 한다.' }] } },
      { id: 'pry', text: '“누가 그랬어? 맞았어?” 하고 자세히 캐묻는다', result: '윤아가 놀라 입을 닫는다.', impact: [{ who: '윤아', text: '다시 말하기 어려워진다', tone: -1 }],
        next: { text: '윤아가 “됐어, 아무것도 아니야”라며 돌아선다.', who: '윤아의 친구', choices: [
          { id: 'sorry', text: '“캐물어서 미안해. 말하고 싶을 때 들을게. 상담 선생님도 있어”라고 한다', result: '윤아가 고개를 끄덕인다.', impact: [{ who: '윤아', text: '다시 말할 문이 열린다', tone: 0 }], ending: '캐묻기보다 들을 준비가 되어 있다는 신호가 문을 연다.' },
          { id: 'spread', text: '걱정돼서 다른 친구들에게 윤아네 집 이야기를 전한다', result: '소문이 퍼지고 윤아가 더 숨는다.', impact: [{ who: '윤아', text: '2차 피해를 입는다', tone: -1 }], ending: '친구의 사정을 옮기는 것은 걱정이 아니라 피해다.' }] } },
      { id: 'brush', text: '“다들 집에서 그래, 별일 아닐 거야”라고 넘긴다', result: '윤아가 “그런가…” 하고 더 말하지 않는다.', impact: [{ who: '윤아', text: '혼자 견딘다', tone: -1 }], ending: '가정 일이라고 넘기면 도움이 필요한 친구를 놓친다.' }] };
    const YUNA_R = [{ id: 'right', text: '가족 안에서도 누구나 안전하고 존중받을 권리가 있다' }, { id: 'adult', text: '안전이 걸린 일은 믿을 어른과 함께 다룬다' }, { id: 'listen', text: '캐묻지 않고 들어 주는 것이 먼저다' },
      { id: 'private', text: '집안일은 가족끼리 해결해야 한다', why: '가정폭력은 사회가 함께 막아야 할 인권 문제예요.' }, { id: 'reason', text: '맞을 만한 이유가 있었을 것이다', why: '어떤 이유로도 폭력은 정당화되지 않아요.' }];
    const TOWN = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '상담실', icon: 'house', at: [1, 0], legend: '학교 상담실' }, { name: '교무실(학교전담경찰관 안내)', icon: 'police', at: [3, 0], legend: '학교전담경찰관 연결' }, { name: '지역 지원 기관', icon: 'office', at: [5, 2], legend: `지역 지원 기관 ${HELPNO}` }, { name: '보건실', icon: 'hospital', at: [0, 2] }, { name: '공원', icon: 'park', at: [2, 3] }, { name: '도서관', icon: 'library', at: [4, 3] }] });

    MODS.push(
      M({
        id: 'intro.myth-scale', type: 'intro', title: '가정폭력 통념 설문 읽기',
        method: '통념 문장 동의 척도', tool: 'chart', minutes: 7,
        levels: { easy: '한 문장(가장 높은 막대)만 함께 읽는다.', base: '세 문장의 ‘그렇다’ 비율을 견주어 가장 높은 통념을 고른다.', challenge: '그 통념의 동의율이 높은 까닭을 추측해 말한다.' },
        intro: {
          teacher: '“가상 고교생 설문이에요. ‘가정 일은 남이 끼어들 일이 아니다’에 48%가 그렇다고 했어요. 세 문장 가운데 가장 많이 동의한 통념은 무엇일까요?” 시연 단추로 첫 문장이 골라지는 모습을 보여 준다. “집안 일은 정말 남이 끼어들 일이 아니잖아요”라는 말이 나오면 “가족 안에서 누군가 다치고 있다면, 그래도 남의 일일까요?”라고 되묻는다. 가정폭력은 집안의 사생활이 아니라 인권의 문제라는 점을 오늘의 질문으로 밝힌다.',
          student: '가정폭력 통념 세 문장에 대한 가상 설문 그래프를 읽고, 가장 많이 동의한 통념을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: AGREE_T, unit: '%', xLabel: '통념 문장', yLabel: '그렇다 비율', data: AGREE, question: '‘그렇다’ 비율이 가장 높은 통념은?', choices: AGREE.map((a) => a[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper house with its door half open and three speech bubble strips floating out, a paper bar chart beside the house, a paper magnifying glass marked with a heart', banner: '집안일, 정말 남의 일일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문 값은 수업용 가상 값이다(계획의 띠그래프 대신 세 문장을 견주는 막대그래프로 보였다 — 띠그래프는 한 문장의 응답 나눔만 보일 수 있다). 학생에게 자기 가정 이야기를 묻지 않는다. 이 시간은 가정폭력 예방교육(가정폭력방지법 제4조의3, 매년 1회 1시간 이상)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.rights-lens', type: 'intro', title: '인권 낱말로 장면 다시 보기',
        method: '인권 낱말로 장면 다시 보기', tool: 'wordcards', minutes: 7,
        levels: { easy: '장면 하나에 인권 낱말 하나를 함께 붙인다.', base: '장면 셋에 존엄·안전·평등 낱말을 붙인다.', challenge: '두 권리가 함께 침해되는 장면을 찾아 말한다.' },
        intro: {
          teacher: '“가상 가족 장면 세 개에 인권 낱말 — 존엄, 안전, 평등 — 을 붙여 봐요. 어떤 권리가 다치고 있을까요?” 시연 단추로 낱말 카드가 장면 빈칸에 들어가는 모습을 보여 준다. “혼내는 건 부모 마음이죠”라는 말이 나오면 “말로 깎아내리는 것도 사람의 존엄을 다치게 할까요?”라고 되묻는다. 가족 안에서도 모든 사람은 존엄하고 안전하며 평등하게 대우받을 권리가 있다는 점을 짚는다.',
          student: '가상 가족 장면 세 개를 읽고, 각 장면에서 다치고 있는 권리를 인권 낱말 카드로 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '장면 1: “넌 아무 쓸모 없어”라는 말을 매일 듣는다 → ___' }, { id: 'f2', label: '장면 2: 큰 소리와 함께 물건이 던져진다 → ___' }, { id: 'f3', label: '장면 3: 한 사람만 늘 모든 결정을 하고 다른 가족은 말할 수 없다 → ___' }], cards: ['존엄', '안전', '평등', '취향'] }, sequence: [{ fill: { f1: '존엄', f2: '안전', f3: '평등' } }] },
          art: { draw: 'a paper house cut open like a dollhouse with three small rooms, each room with a word tag hanging on a string, a paper lens held over the house', banner: '인권의 눈으로 본 집', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면은 가상이며 폭력 장면을 자세히 묘사하지 않는다. 학생에게 자기 가정 이야기를 묻지 않는다.',
      }),

      M({
        id: 'activity.forms-sort', type: 'activity', title: '가정폭력의 여러 모습',
        method: '가정폭력의 모습 분류', tool: 'sortboard', minutes: 17,
        levels: { easy: '네 바구니(신체·정서·경제·방임)에 카드 네 장을 나눈다(틀리면 되돌아옴).', base: '네 바구니에 카드를 나누고, 목격 피해를 가르고, 다툼과 폭력을 가르는 기준 카드를 나눈다.', challenge: '헷갈리는 카드가 더해진 판에서 나누고, 경계가 모호한 사례 하나를 활동지에 논증한다.' },
        activity: {
          title: '모습별 바구니', tool: 'sortboard',
          teacher: '“가정폭력은 때리는 것만일까요? 가상 사례 카드를 신체·정서·경제·방임 바구니에 나눠 봐요.” 카드를 놓을 때마다 “이 행동은 몸, 마음, 돈, 돌봄 가운데 무엇을 해치나요?”라고 묻는다. ‘다툼을 늘 보게 되는 아이’ 카드를 폭력이 아니라고 하는 학생에게 “직접 맞지 않았어도 그 장면을 매일 보는 아이의 마음은 어떨까요?”라고 되묻는다. 목격도 피해이고, 다툼과 폭력은 두려움과 통제가 있는지로 가른다는 점을 짚는다.',
          task: '가정폭력의 여러 모습을 바구니에 나누고, 목격 피해와 다툼·폭력의 기준을 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('가상 사례 카드를 가정폭력의 모습 바구니에 나누세요.', ['신체적 폭력', '정서적 폭력', '경제적 폭력', '방임'], [['물건을 던져 가족을 다치게 한다', '밀치고 붙잡아 못 나가게 한다'], ['“너 같은 건 필요 없어”라고 위협한다', '가족의 휴대폰을 뺏고 연락을 끊게 한다'], ['생활비를 주지 않고 돈을 모두 쥔다', '가족이 번 돈을 허락 없이 가져간다'], ['아픈 아이를 병원에 데려가지 않는다', '어린 아이에게 며칠씩 밥을 챙겨 주지 않는다']], { k: 1, hard: [['문을 세게 차며 겁을 준다'], [], [], []], d: 0.35 }),
            BOARDQ('카드를 ‘목격 피해’와 ‘해당 없음’으로 나누세요.', ['목격 피해', '해당 없음'], [['부모 사이 폭력을 아이가 매일 본다', '형제를 때리는 소리를 방에서 듣는다'], ['가족이 저녁 메뉴로 말다툼하다 웃으며 정한다', '부모가 차분히 의견 차이를 이야기한다']], { k: 1, d: 0.3 }),
            BOARDQ('다툼과 폭력을 가르는 기준 카드를 나누세요.', ['다툼에 가깝다', '폭력에 가깝다'], [['서로 의견을 말하고 들을 수 있다', '끝나면 누구도 두렵지 않다'], ['한쪽이 늘 두려워하며 눈치를 본다', '한쪽이 다른 사람을 힘으로 통제한다']], { k: 1, traps: ['맞을 만한 이유가 있으면 폭력이 아니다'], d: 0.35, more: { conclude: '가정폭력은 신체·정서·경제·방임으로 나타나고, 목격도 피해예요. 다툼과 폭력은 두려움과 통제가 있는지로 갈라요. 어떤 이유로도 폭력은 정당화되지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다툼과 폭력을 가르는 기준을 내 말로 한 문장으로 쓰세요.' }] },
        notes: '사례는 모두 가상이며 자세히 묘사하지 않는다. 학생에게 자기 가정 이야기를 묻지 않는다. 바구니가 넷까지라 ‘목격 피해’는 둘째 문항으로 따로 다루었다(계획의 다섯 칸).',
      }),
      M({
        id: 'activity.friend-dilemma', type: 'activity', title: '친구가 털어놓을 때',
        method: '친구가 털어놓을 때 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 추적하고 근거를 고른다.', challenge: '다른 끝도 가 보고, 윤아가 원치 않을 때 할 다음 행동을 활동지에 덧붙인다.' },
        activity: {
          title: '윤아의 말', tool: 'dilemma',
          teacher: '“가상 친구 윤아가 ‘집에 가기 싫어’라고 말해요. 나는 윤아의 친구예요. 무엇부터 할까요?” 장면마다 “윤아가 다음에도 말할 수 있게 하는 선택은 무엇일까요?”라고 묻는다. ‘비밀로 할게’를 고른 학생에게 “친구의 부탁을 지키는 것도 중요해요. 그런데 안전이 걸린 일이라면 비밀이 윤아를 지켜 줄까요?”라고 되묻는다. 캐묻지 않고 듣고, 안전이 걸린 일은 친구의 걱정을 존중하며 믿을 어른에게 잇는다는 점을 짚는다.',
          task: '윤아의 갈림길을 따라가며 친구를 지키는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('윤아의 친구로서 윤아를 지키는 길을 끝까지 고르고 근거를 고르세요.', YUNA, [['listen', 'together', 'askfirst']], YUNA_R, ['right', 'adult', 'listen'], { d: 0.4 }),
            DILQ('‘캐묻는다’로 시작한 길에서 다시 문을 여는 길을 고르고 근거를 고르세요.', { text: YUNA.text, who: YUNA.who, motif: YUNA.motif, choices: YUNA.choices.filter((c) => c.id !== 'listen') }, [['pry', 'sorry']], YUNA_R, ['listen'], { d: 0.35 }),
            EXPLOREQ('‘별일 아닐 거야’ 길도 끝까지 가 보고 결과를 견주세요.', YUNA, YUNA_R, ['넘긴 길의 끝을 확인했다', '두 길에서 윤아에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '친구가 털어놓으면 캐묻지 않고 듣고, 안전이 걸린 일은 친구의 걱정을 존중하며 믿을 어른에게 함께 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '윤아가 끝내 어른에게 알리기를 원치 않을 때, 내가 할 수 있는 다음 행동 하나를 쓰세요.' }] },
        notes: '장면은 가상이며 폭력을 묘사하지 않는다. 실제로 털어놓는 학생이 있으면 수업 뒤 따로 만나 상담 선생님과 잇는다. 친구가 원치 않을 때도 혼자 감당하지 않고 상담 선생님과 먼저 의논할 수 있다고 안내한다.',
      }),
      M({
        id: 'activity.law-purpose', type: 'activity', title: '가정폭력 예방교육의 취지 설명문',
        method: '가정폭력방지법 취지와 학교 역할 정리 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '주장·근거·도움 경로 문장 틀을 보고 쓴다.', base: '취지 요약 → 통념 반박 → 인권 근거 → 도움 경로 차례로 설명문을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, ‘가족 사생활’ 반론을 세워 답한다.' },
        activity: {
          title: '“사회가 함께 막을 인권 문제” 설명문', tool: 'rubric-writing',
          teacher: '“가정폭력방지법 제4조의3은 학교가 해마다 가정폭력 예방교육을 하도록 정해 두었어요. 쉬운 말 요약: ‘가정폭력을 미리 막기 위해, 학생들이 해마다 한 번 이상, 한 시간 이상 예방교육을 받게 한다.’ 왜 집안일을 학교에서 배울까요?” 요약문을 함께 읽고 ‘가정폭력은 사회가 함께 막아야 할 인권 문제’라는 주장의 설명문을 쓰게 한다. “남의 집 일에 끼어드는 건 실례”라고 쓴 학생에게 “다치는 사람이 있을 때도 실례일까요? 누가 그 사람을 지킬 수 있을까요?”라고 묻는다. 낙인 없는 말로 쓰고, 피해 가족을 깎아내리지 않게 짚는다.',
          task: '가정폭력 예방교육의 취지를 읽고 ‘사회가 함께 막을 인권 문제’ 설명문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('요약문을 읽고 예방교육의 취지를 2문장으로 쓰세요.', '요약: 가정폭력을 미리 막기 위해 학생들이 해마다 한 번 이상, 한 시간 이상 예방교육을 받게 한다. 이 규정의 취지를 내 말로 쓰세요.', ['해마다 한다는 점을 담았다', '왜 학교에서 배우는지 썼다', '요약문을 그대로 베끼지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['예방']], starter: '이 규정은 ~하기 위해 ~하게 한다.', d: 0.35 }),
            RWQ('통념 하나를 반박하는 문단을 쓰세요.', '“가정 일은 가족끼리 해결해야 한다” 또는 “맞을 만한 이유가 있으면 폭력이 아니다” 가운데 하나를 골라 반박하세요.', ['통념을 정확히 옮겼다', '반박 근거를 들었다', '피해자를 탓하지 않았다'], { min: 60, max: 350, sent: [2, 4], must: [['통념', '아니다', '않는다']], starter: '‘~’라는 통념은 틀렸다. 왜냐하면 ~', plus: '‘가족 사생활’ 반론을 세우고 답했다', d: 0.4 }),
            RWQ('인권을 근거로 주장을 펴는 문단을 쓰세요.', '존엄·안전·평등 가운데 둘 이상을 근거로 ‘가정폭력은 인권 문제’라고 설명하세요.', ['인권 낱말을 둘 이상 썼다', '가족 안에서도 권리가 있다고 밝혔다', '낙인 없는 말을 썼다'], { min: 60, max: 350, sent: [2, 4], must: [['존엄', '안전', '평등']], starter: '가족 안에서도 누구나 ~할 권리가 있다. 그러므로 ~', d: 0.4 }),
            RWQ('도움 경로를 넣어 마무리 문단을 쓰세요.', '가정폭력을 알게 되었을 때 학교 안팎의 도움 경로를 넣어 설명문을 마무리하세요.', ['학교 안 도움(상담 선생님 등)을 썼다', '학교 밖 지원 기관을 썼다', '혼자 해결하지 않아도 된다는 말을 넣었다'], { min: 40, max: 300, sent: [2, 3], must: [['상담', '선생님', '기관']], starter: '가정폭력을 알게 되면 ~에 알릴 수 있다. ~', plus: '목격도 피해라는 점을 넣었다', d: 0.4, more: { conclude: '가정폭력은 집안의 사생활이 아니라 사회가 함께 막아야 할 인권 문제예요. 그래서 학교가 해마다 예방교육을 하고 도움 경로를 알려 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 설명문을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['통념 반박', ''], ['인권 근거', ''], ['도움 경로', ''], ['낙인 없는 말', '']] }, { type: 'short', prompt: '설명문에서 가장 설득력 있다고 생각하는 문장 하나를 옮겨 쓰세요.' }] },
        notes: '법 조문 번호는 근거 파일에 있는 ‘가정폭력방지법 제4조의3(매년 1회 1시간 이상)’만 쓰고 조문 원문·처벌 내용은 쓰지 않는다. 요약문은 수업용 풀어 쓴 문장이다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.route-map', type: 'wrap', title: '도움 경로 지도 완성',
        method: '도움 경로 지도 완성', tool: 'map', minutes: 7,
        levels: { easy: '핀 두 개(상담실·지역 지원 기관)만 함께 놓는다.', base: '핀 두 개를 놓고, 연결 차례를 활동지에 쓴다.', challenge: '밤·주말에 쓸 경로를 활동지에 따로 표시한다.' },
        wrap: {
          teacher: '“가정폭력을 알게 되었을 때 학교 안에서, 학교 밖에서 어디로 이어 갈까요?” 지도에 핀을 놓게 한다. 공원에 핀을 놓는 학생에게 “그곳에 도와줄 어른이 늘 있을까요?”라고 묻는다. 지역 지원 기관 번호는 우리 학교가 확인한 것을 쓴다고 말해 준다. 도전 반은 밤·주말에 쓸 경로를 따로 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교 안에서 가정폭력 고민을 먼저 이야기할 곳에 핀을 놓으세요.', target: { place: '상담실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교 밖, 주말에도 도움을 청할 곳에 핀을 놓으세요.', target: { place: '지역 지원 기관' }, difficulty: 0.2 },
            { type: 'short', prompt: '친구가 털어놓았을 때의 연결 차례를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '가정폭력 통념과 인권',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '폭력을 직접 당하지 않고 보기만 해도 ___ 피해다.', answer: '목격' },
            { type: 'table', prompt: '도움 경로를 쓰세요.', columns: ['곳', '언제', '번호·메모'], cells: [['상담실', '학교에 있을 때', ''], ['지역 지원 기관', '밤·주말', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 목격 · 인권 · 상담실', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '가정폭력은 집안일이 아니라 ___ 문제다.', answer: '인권' }] },
        },
      }),
      M({
        id: 'wrap.myth-rewrite', type: 'wrap', title: '통념 문장 고쳐 쓰기',
        method: '통념 문장 하나 고쳐 쓰기', tool: 'emotion', minutes: 7,
        levels: { easy: '두 문장을 들은 사람의 마음 카드를 고른다.', base: '마음 카드를 고르고, 통념 문장 하나를 인권을 담은 문장으로 직접 고쳐 쓴다.', challenge: '두 문장의 차이를 듣는 사람의 마음과 이어 설명한다.' },
        wrap: {
          teacher: '“‘가정 일은 남이 끼어들 일이 아니다’를 들은 사람과 ‘누구도 가족 안에서 폭력을 견뎌서는 안 돼’를 들은 사람의 마음은 어떻게 다를까요?” 마음 카드를 고른 뒤 통념 문장 하나를 고쳐 쓰게 한다. “말 하나 바꾼다고 뭐가 달라져요”라는 학생에게 “이 말을 들은 친구가 도움을 청할 마음이 생길까요?”라고 묻는다. 쉬움 반은 마음 카드만, 도전 반은 두 문장의 차이까지 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'myth', label: '“가정 일은 남이 끼어들 일이 아니다”를 들은 사람' }, { id: 'right', label: '“누구도 가족 안에서 폭력을 견뎌서는 안 돼”를 들은 사람' }], cards: [{ id: 'lonely', text: '외로움' }, { id: 'relief', text: '안심' }, { id: 'joy', text: '신남' }] }, prompt: '두 문장을 들은 사람의 마음을 짝지으세요.', target: { match: { myth: 'lonely', right: 'relief' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '인권을 담은 문장으로 알맞은 것은?', options: ['맞을 만한 이유가 있으면 어쩔 수 없다', '어떤 이유로도 가족 안의 폭력은 정당화되지 않는다', '부부 싸움은 남이 모르는 게 낫다'], answer: 1, difficulty: 0.2, explain: '가족 안에서도 누구나 안전하고 존중받을 권리가 있어요.' },
            { type: 'short', prompt: '통념 문장 하나를 골라 인권을 담은 문장으로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '통념을 인권의 말로',
          items: [
            { type: 'short', prompt: '“맞을 만한 이유가 있으면 폭력이 아니다”를 인권을 담은 문장으로 고쳐 쓰세요.' },
            { type: 'short', prompt: '내가 고친 문장을 들은 친구가 느낄 마음을 한 줄로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 온라인 유인과 성매매·성착취 알아보기 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-exploit-lure', [10]);
    const JOB = { good: ['“하루 두 시간, 얼굴만 나오면 고수익”', '“부모님께는 비밀로 해 줄게”', '“먼저 전신 사진부터 보내 줘”', '“미성년자도 신분 확인 없이 가능”'], bad: ['“근무 시간·장소·시급을 계약서로 안내”', '“청소년은 보호자 동의서가 필요해요”'] };
    const DEEP = [['관심·칭찬', 2], ['선물·돈', 4], ['비밀 요구', 6], ['사진 요구', 8], ['협박', 10]];
    const DEEP_T = '빠져나오기 어려운 정도(가상, 0~10)';
    const DOYUN = { text: 'SNS로 처음 보는 계정이 도윤에게 메시지를 보냈다. “얼굴이 좋아서 모델 알바 제안해요. 하루 두 시간에 50만 원. 일단 사진 몇 장만 보내 줄래요? 비밀은 지켜 줄게요.” 너는 도윤의 입장에서 고른다.', who: '도윤', motif: 'cloud', choices: [
      { id: 'refuse', text: '답하지 않고 메시지를 캡처해 둔 뒤 차단하고 믿을 어른에게 알린다', result: '담임 선생님이 캡처를 함께 보고 학교가 도울 방법을 안내한다.', impact: [{ who: '도윤', text: '위험에서 빨리 벗어난다', tone: 1 }],
        next: { text: '며칠 뒤 다른 계정으로 “아까 왜 차단해? 돈 필요 없어?”라는 메시지가 온다.', who: '도윤', choices: [
          { id: 'again', text: '이것도 캡처하고 차단한 뒤 선생님께 이어서 알린다', result: '선생님이 지원 기관과 연결해 계정 신고를 돕는다.', impact: [{ who: '도윤', text: '혼자 감당하지 않는다', tone: 1 }],
            next: { text: '친구 서하가 “나도 그런 메시지 받았는데 사진을 보냈어”라고 털어놓는다.', who: '도윤', choices: [
              { id: 'support', text: '“네 잘못이 아니야. 요구한 사람이 잘못이야” 하고 함께 상담 선생님께 간다', result: '상담 선생님이 서하를 보호받아야 할 사람으로 대하며 지원을 잇는다.', impact: [{ who: '서하', text: '보호받는다', tone: 1 }], ending: '청소년은 유인과 착취에서 보호받아야 할 사람이다. 이미 응했어도 잘못은 요구한 사람에게 있다.' },
              { id: 'blame', text: '“그걸 왜 보냈어?”라며 나무란다', result: '서하가 더 말하지 않고 혼자 연락을 이어 간다.', impact: [{ who: '서하', text: '더 깊이 빠진다', tone: -1 }], ending: '나무라면 도움의 길이 닫힌다. 잘못은 요구한 사람에게 있다.' }] } },
          { id: 'reply', text: '궁금해서 “얼마나 주는데요?”라고 답한다', result: '상대가 더 높은 돈을 말하며 사진을 재촉한다.', impact: [{ who: '도윤', text: '다시 끌려 들어간다', tone: -1 }], ending: '대화를 이어 갈수록 끊기 어려워진다. 지금이라도 캡처하고 알리면 된다.' }] } },
      { id: 'ask', text: '“무슨 회사예요? 어디서 일해요?”라고 더 물어본다', result: '상대가 대답 없이 “일단 사진부터”라며 재촉한다.', impact: [{ who: '도윤', text: '압박이 커진다', tone: -1 }],
        next: { text: '상대가 “부모님께는 말하지 마. 다들 몰래 해”라고 한다.', who: '도윤', choices: [
          { id: 'stop', text: '비밀 요구가 위험 신호임을 알아차리고 캡처·차단 뒤 알린다', result: '선생님이 잘 알아차렸다며 도울 방법을 안내한다.', impact: [{ who: '도윤', text: '빠져나온다', tone: 1 }], ending: '비밀을 요구하는 제안은 위험 신호다. 늦게라도 끊고 알리면 된다.' },
          { id: 'send', text: '돈이 필요해 사진을 보낸다', result: '상대가 사진을 빌미로 더 많은 것을 요구한다.', impact: [{ who: '도윤', text: '협박의 위험에 놓인다', tone: -1 }], ending: '보냈더라도 도윤의 잘못이 아니다. 지금 알리면 보호받을 수 있다.' }] } },
      { id: 'accept', text: '50만 원이 끌려 바로 사진을 보낸다', result: '상대가 “더 보내 주면 더 줄게”라며 요구를 키운다.', impact: [{ who: '도윤', text: '착취의 위험에 놓인다', tone: -1 }], ending: '고액 알바 제안은 유인의 시작일 수 있다. 응했어도 청소년은 보호받아야 할 사람이고, 지금 알리면 된다.' }] };
    const DOYUN_R = [{ id: 'protect', text: '청소년은 유인·착취에서 보호받아야 할 사람이다' }, { id: 'signal', text: '고액·비밀·사진 요구는 위험 신호다' }, { id: 'tell', text: '캡처해 두고 차단한 뒤 믿을 어른에게 알린다' },
      { id: 'self', text: '스스로 응했으면 청소년도 책임이 있다', why: '청소년을 유인한 어른에게 책임이 있어요. 응했어도 청소년은 보호받아요.' }, { id: 'deal', text: '돈을 주고받으면 그냥 거래다', why: '몸이나 사진을 대가로 요구하는 것은 거래가 아니라 착취예요.' }];
    const FRIEND = { text: '친구 서하가 “온라인에서 알게 된 사람에게 선물을 받고 사진을 보냈어. 이제 더 보내라고 해”라고 털어놓는다. 너는 서하의 친구다.', who: '서하의 친구', motif: 'cloud', choices: [
      { id: 'thanks', text: '“말해 줘서 고마워. 네 잘못이 아니야”라고 먼저 말한다', result: '서하가 울먹이며 조금 안심한다.', impact: [{ who: '서하', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '서하가 “부모님이 아시면 어떡해”라고 걱정한다.', who: '서하의 친구', choices: [
          { id: 'counsel', text: '“상담 선생님께 먼저 같이 가서 어떻게 할지 묻자”고 한다', result: '상담 선생님이 서하의 걱정을 듣고 보호와 지원 방법을 안내한다.', impact: [{ who: '서하', text: '보호와 지원이 시작된다', tone: 1 }], ending: '털어놓은 친구에게는 탓하지 않는 말이 먼저이고, 그다음 함께 믿을 어른에게 간다.' },
          { id: 'myself', text: '“내가 그 사람한테 직접 따질게”라고 한다', result: '상대가 서하의 사진을 빌미로 더 위협한다.', impact: [{ who: '서하', text: '더 위험해진다', tone: -1 }], ending: '직접 맞서기보다 기록을 남기고 어른·전문 기관에 알린다.' }] } },
      { id: 'why', text: '“왜 그런 사람한테 보냈어?”라고 묻는다', result: '서하가 고개를 숙이고 입을 닫는다.', impact: [{ who: '서하', text: '자기 탓이라고 느낀다', tone: -1 }], ending: '잘못은 요구한 사람에게 있다. 탓하는 말은 도움의 문을 닫는다.' }] };
    const FRIEND_R = [{ id: 'notyou', text: '이미 응했어도 잘못은 요구한 사람에게 있다' }, { id: 'adult', text: '혼자 맞서지 않고 믿을 어른과 전문 기관에 알린다' }, { id: 'fault', text: '보낸 사람에게도 잘못이 있다', why: '청소년을 유인하고 요구한 사람에게 책임이 있어요.' }];

    MODS.push(
      M({
        id: 'intro.ad-spot', type: 'intro', title: '가상 구인 글의 위험 신호',
        method: '가상 구인 글의 위험 신호 찾기', tool: 'wordcards', minutes: 7,
        levels: { easy: '위험 신호 카드 둘(고수익·비밀)을 함께 찾는다.', base: '문구 카드 여섯 장에서 위험 신호 넷을 고른다.', challenge: '안전한 구인 글과 다른 점을 한 가지 말한다.' },
        intro: {
          teacher: '“SNS에 올라온 가상 구인 글 문구예요. 이 가운데 위험 신호는 무엇일까요?” 시연 단추로 위험 신호 카드가 바구니에 담기는 모습을 보여 준다. “돈 많이 주면 좋은 거 아니에요?”라는 말이 나오면 “일이 무엇인지, 어디서 하는지 말하지 않고 돈만 크게 말한다면 무엇을 숨기고 있을까요?”라고 되묻는다. 고액·비밀·사진 요구·신분 확인 없음이 유인의 신호라는 점을 짚는다.',
          student: '가상 구인 글 문구 카드를 읽고, 유인의 위험 신호를 찾아 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '위험 신호', cards: mix([JOB.good, JOB.bad]) }, sequence: [{ pick: JOB.good }] },
          art: { draw: 'a paper phone screen showing a flashy job offer card with a big coin and a lock icon, paper warning flags popping out of the screen, a paper student pausing with a hand raised', banner: '이 알바, 괜찮을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '구인 글은 가상이다. 이 시간은 성매매 예방교육(성매매피해자보호법 제5조)으로 운영할 수 있다. 학생에게 실제로 받은 제안을 말하게 하지 않는다.',
      }),
      M({
        id: 'intro.flow-chart', type: 'intro', title: '유인이 깊어지는 그래프',
        method: '유인이 깊어지는 단계 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '두 지점(관심·협박)만 함께 읽는다.', base: '가장 빨리 끊을 지점과 까닭을 고른다.', challenge: '단계마다 쓸 거절의 말을 하나씩 붙여 말한다.' },
        intro: {
          teacher: '“유인은 관심과 칭찬으로 시작해 선물, 비밀 요구, 사진 요구, 협박으로 깊어져요. 가상 그래프에서 빠져나오기 어려운 정도가 어떻게 변하나요?” 시연 단추로 ‘관심·칭찬’ 지점이 골라지는 모습을 보여 준다. “협박 단계에서만 위험한 거 아니에요?”라는 말이 나오면 “선물을 받은 뒤에는 거절이 왜 더 어려워질까요?”라고 되묻는다. 일찍 끊을수록 쉽고, 어느 단계에서든 알리면 도움을 받을 수 있다는 점을 짚는다.',
          student: '유인이 깊어지는 단계를 나타낸 가상 그래프를 읽고, 가장 빨리 끊을 수 있는 지점을 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: DEEP_T, unit: '점', xLabel: '단계', yLabel: '어려운 정도', data: DEEP, question: '가장 빨리 끊을 수 있는 지점은?', choices: DEEP.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper staircase going down into shadow with five steps labeled by small icons (a heart, a gift box, a lock, a camera, a chain), a paper exit door glowing at the top step', banner: '어디서 끊을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '값은 수업용 가상 값이다(실제 측정값이 아니다). 단계 구분은 일반적인 설명이다.',
      }),

      M({
        id: 'activity.lure-dilemma', type: 'activity', title: '“모델 알바” 제안의 갈림길',
        method: '고액 알바 제안 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 추적하고, 청소년은 보호 대상이라는 근거를 고른다.', challenge: '다른 끝도 가 보고, 친구가 이미 응했을 때의 장면에서 도움 경로를 고른다.' },
        activity: {
          title: '도윤에게 온 메시지', tool: 'dilemma',
          teacher: '“가상 인물 도윤에게 ‘모델 알바, 하루 두 시간에 50만 원, 사진 먼저’라는 메시지가 왔어요. 도윤이라면 어떻게 할까요?” 장면마다 “이 메시지에서 위험 신호는 무엇인가요?”라고 묻는다. ‘스스로 응했으면 책임이 있다’ 카드를 고른 학생에게 “청소년에게 돈을 내걸고 사진을 요구한 사람은 누구인가요?”라고 되묻는다. 청소년은 유인과 착취에서 보호받아야 할 사람이고, 이미 응했어도 잘못은 요구한 사람에게 있으며, 캡처하고 차단하고 알리면 된다는 점을 짚는다.',
          task: '도윤과 서하의 갈림길을 따라가며 위험에서 벗어나는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('도윤의 입장에서 위험에서 벗어나는 길을 끝까지 고르고 근거를 고르세요.', DOYUN, [['refuse', 'again', 'support']], DOYUN_R, ['protect', 'signal', 'tell'], { d: 0.4 }),
            DILQ('친구 서하가 이미 응했다고 털어놓는 장면에서 서하를 돕는 길을 고르고 근거를 고르세요.', FRIEND, [['thanks', 'counsel']], FRIEND_R, ['notyou', 'adult'], { d: 0.35 }),
            EXPLOREQ('도윤의 ‘바로 사진을 보낸다’ 길도 끝까지 가 보고 결과를 견주세요.', DOYUN, DOYUN_R, ['사진을 보낸 길의 끝을 확인했다', '두 길에서 도윤에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '고액·비밀·사진 요구는 유인의 신호예요. 청소년은 보호받아야 할 사람이고, 이미 응했어도 캡처하고 차단하고 알리면 도움을 받을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 이미 응했다고 털어놓을 때 가장 먼저 할 말과, 함께 갈 곳을 쓰세요.' }] },
        notes: '장면은 가상이며 착취 내용을 묘사하지 않는다. 학생에게 실제로 받은 메시지를 보여 주거나 말하게 하지 않는다. 신고·상담 번호는 학교가 확인한 번호를 쓴다.',
      }),
      M({
        id: 'activity.rights-analysis', type: 'activity', title: '성매매·성착취가 인권 침해인 까닭',
        method: '성매매가 인권 침해인 이유 분석', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드 네 장을 네 가지에 붙인다(바로 확인).', base: '근거 카드를 네 가지에 붙이고, 반박을 짝짓고, 예방교육의 취지를 고른다.', challenge: '헷갈리는 카드가 섞인 판에서 붙이고, ‘자발적 선택’ 주장에 대한 반박을 활동지에 더 쓴다.' },
        activity: {
          title: '인권 침해 가지', tool: 'mindmap',
          teacher: '“가운데 ‘성매매·성착취’에서 네 가지 — 몸의 상품화, 힘의 불균형, 건강·안전 위협, 청소년 보호 — 를 뻗어요. 가지마다 근거를 붙여 볼까요?” 카드를 붙일 때마다 “이 근거는 누구의 어떤 권리를 다치게 하나요?”라고 묻는다. ‘스스로 원해서 하면 괜찮다’ 카드를 집는 학생에게 “돈이 필요한 사람과 돈을 가진 사람 사이에 정말 대등한 선택이 있을까요?”라고 되묻는다. 성매매피해자보호법이 학교에 예방교육을 두게 한 것도 이것이 인권 문제이기 때문이라는 점을 짚는다.',
          task: '성매매·성착취가 인권 침해인 까닭을 가지마다 근거로 붙이고, 반박을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 알맞은 가지에 붙이세요.', ['몸의 상품화', '힘의 불균형', '건강·안전 위협', '청소년 보호'], [
              ['사람의 몸을 돈으로 사고파는 물건처럼 다룬다', '사람을 존엄한 존재가 아닌 상품으로 본다'],
              ['돈과 힘을 가진 쪽이 조건을 정한다', '빚이나 협박으로 그만두기 어렵게 만든다'],
              ['폭력과 감염의 위험에 놓인다', '몸과 마음에 오래 상처가 남는다'],
              ['청소년은 유인과 착취에서 보호받아야 한다', '청소년을 유인한 어른에게 책임이 있다'],
            ], { k: 1, traps: ['서로 원하면 아무 문제 없다'], d: 0.35, opt: { topic: '성매매·성착취' } }),
            MATCHQ('잘못된 주장마다 반박을 짝지으세요.', [['“스스로 원해서 하면 괜찮다”', '돈과 힘의 차이 속에서 대등한 선택은 어렵다'], ['“돈을 주고받으면 거래일 뿐이다”', '사람의 몸은 사고팔 물건이 아니다'], ['“응한 청소년도 책임이 있다”', '청소년은 보호받아야 할 사람이다']], { k: 2, extra: ['그런 일은 우리와 상관없다'], d: 0.35, opt: { topic: '주장과 반박' } }),
            PICKQ('학교가 성매매 예방교육을 하는 까닭으로 알맞은 것만 고르세요.', ['성매매·성착취를 인권 침해로 알고 막기 위해', '청소년이 유인을 알아차리고 도움을 청하게 하기 위해'], ['청소년에게 겁을 주기 위해', '피해를 입은 사람을 가려내기 위해'], { d: 0.3, opt: { basket: '예방교육의 취지', topic: '예방교육의 취지' }, more: { conclude: '성매매·성착취는 몸을 상품으로 만들고, 힘의 차이로 선택을 빼앗고, 건강과 안전을 위협하는 인권 침해예요. 청소년은 보호받아야 할 사람이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '“스스로 원해서 하면 괜찮다”는 주장에 대한 반박을 두 문장으로 쓰세요.' }] },
        notes: '성매매피해자보호법은 근거 파일(research-mandatory §1, 제5조)에 있는 이름·조 번호만 쓰고 조문 내용·처벌은 쓰지 않는다. 특정 직업·집단을 깎아내리는 말이 나오지 않게, 비판의 대상은 착취 구조와 수요라는 점을 지킨다.',
      }),
      M({
        id: 'activity.warning-guide', type: 'activity', title: '후배용 유인 경고 안내문',
        method: '후배용 유인 경고 안내문 쓰기', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문항마다 틀과 예시 문장을 보고 쓴다.', base: '위험 신호 셋 → 거절의 말 둘 → 알릴 곳 → 마무리 차례로 안내문을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 안내문을 카드뉴스 4장 구성으로 나눈다.' },
        activity: {
          title: '중학생 후배에게 주는 안내문', tool: 'rubric-writing',
          teacher: '“중학생 후배에게 줄 유인 경고 안내문을 써요. 위험 신호 셋, 거절의 말 둘, 알릴 곳이 들어가야 해요.” 먼저 위험 신호를 구체적인 문구로 쓰게 한다. “이상한 사람 조심”처럼 막연하게 쓴 학생에게 “후배가 어떤 메시지를 보면 ‘이거다’ 하고 알아차릴까요?”라고 묻는다. 겁주는 말보다 ‘이미 응했어도 네 잘못이 아니고 도움을 받을 수 있다’는 말이 후배를 움직인다는 점을 짚는다.',
          task: '후배에게 줄 유인 경고 안내문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('위험 신호 세 가지를 구체적인 문구로 쓰세요.', '후배가 알아차릴 수 있게 유인 메시지의 위험 신호 세 가지를 예시 문구와 함께 쓰세요.', ['신호가 세 가지다', '예시 문구가 구체적이다', '겁주지 않는 말투다'], { min: 60, max: 350, sent: [3, 4], must: [['비밀', '사진', '고수익', '선물']], starter: '첫째, “~”처럼 ~. 둘째, ~', d: 0.35 }),
            RWQ('거절의 말 두 가지를 쓰세요.', '유인 메시지를 받았을 때 쓸 수 있는 짧고 분명한 거절의 말 두 가지를 쓰세요.', ['짧고 분명하다', '대화를 이어 가지 않는다', '차단·캡처와 함께 쓴다'], { min: 30, max: 250, sent: [2, 3], must: [['싫', '안 ', '차단']], starter: '“~” 하고 차단한다.', d: 0.35 }),
            RWQ('알릴 곳과 알리는 방법을 쓰세요.', `알릴 곳(믿을 어른·상담 선생님·지역 지원 기관 ${HELPNO})과 캡처를 남기는 방법을 쓰세요.`, ['알릴 곳을 둘 이상 썼다', '캡처로 기록을 남기라고 썼다', '번호 자리를 학교 확인 번호로 남겼다'], { min: 40, max: 300, sent: [2, 3], must: [['캡처', '기록']], starter: '이런 메시지를 받으면 ~을 캡처해 두고 ~에게 알린다.', d: 0.4 }),
            RWQ('안내문 마무리 문장을 2문장으로 쓰세요.', '이미 응한 후배도 도움을 청할 수 있도록, 피해자를 탓하지 않는 마무리 문장을 쓰세요.', ['이미 응했어도 잘못이 아니라고 밝혔다', '도움을 받을 수 있다고 썼다', '피해자를 탓하는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['잘못']], starter: '혹시 이미 ~했더라도 네 잘못이 아니야. ~', plus: '안내문을 카드뉴스 4장(신호·거절·알리기·마무리)으로 나누었다', d: 0.4, more: { conclude: '좋은 경고 안내문은 위험 신호를 구체적으로 알려 주고, 짧은 거절과 알릴 곳을 주며, 이미 응한 사람도 도움을 청하게 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 안내문을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['구체성', ''], ['피해자 탓하지 않음', ''], ['신고 경로', HELPNO], ['겁주지 않는 말투', '']] }, { type: 'short', prompt: '안내문 가운데 후배가 꼭 기억했으면 하는 한 문장을 쓰세요.' }] },
        notes: '안내문은 가상 후배를 대상으로 쓴다. 신고·상담 번호는 학교가 확인한 번호로 채운다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.help-check', type: 'wrap', title: '알릴 곳 점검표',
        method: '알릴 곳 확인 체크리스트', tool: 'kitchen', minutes: 7,
        levels: { easy: '알릴 곳 세 칸만 표시한다.', base: '알릴 곳과 기록 남기기를 표시하고, 칸마다 활동지에 메모한다.', challenge: '알린 뒤 이어지는 지원(상담·삭제 요청 등)을 활동지에 적는다.' },
        wrap: {
          teacher: '“유인 메시지를 받거나 친구가 털어놓으면 어디에 어떻게 알릴까요? 점검표로 확인해요.” 해야 할 것만 표시하게 한다. ‘대화를 모두 지운다’에 표시한 학생에게 “지우면 도움을 청할 때 무엇이 없어질까요?”라고 묻는다. 캡처할 때는 메시지·계정 이름·시간을 남기고, 사진을 받았다면 퍼뜨리지 않는다는 점을 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '알릴 곳과 할 일', items: [{ id: 'adult', text: '믿을 어른(보호자·담임)에게 알린다' }, { id: 'counsel', text: '상담실(상담 선생님)과 함께 의논한다' }, { id: 'agency', text: `지역 지원 기관에 잇는다 ${HELPNO}` }, { id: 'capture', text: '메시지·계정 이름·시간을 캡처해 둔다' }, { id: 'erase', text: '부끄러우니 대화를 모두 지운다' }, { id: 'meet', text: '직접 만나서 따진다' }] }, prompt: '알릴 곳과 할 일만 표시하세요.', target: { checklist: ['adult', 'counsel', 'agency', 'capture'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '유인 메시지를 받았을 때 기록으로 남길 것은?', options: ['메시지·계정 이름·시간 캡처', '받은 사진을 친구들에게 보여 주기', '상대에게 보낸 내 사진 다시 보내기'], answer: 0, difficulty: 0.2, explain: '캡처는 남기고, 사진은 퍼뜨리지 않아요.' },
            { type: 'short', prompt: '알린 뒤 이어질 수 있는 지원 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '온라인 유인과 성매매·성착취',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '청소년은 유인과 착취에서 ___받아야 할 사람이다.', answer: '보호' },
            { type: 'table', prompt: '알릴 곳을 메모하세요.', columns: ['곳', '메모'], cells: [['믿을 어른', ''], ['상담실', ''], ['지역 지원 기관', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 보호 · 캡처 · 차단', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '유인 메시지는 ___해 두고 차단한 뒤 알린다.', answer: '캡처' }] },
        },
      }),
      M({
        id: 'wrap.stance', type: 'wrap', title: '한 문장 입장 정리',
        method: '한 문장 입장 정리', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 카드로 빈칸을 채운다.', base: '빈칸을 채우고, 그 문장을 내 말로 다시 쓴다.', challenge: '말이 바뀌면 피해 청소년의 마음이 어떻게 달라지는지 견주어 쓴다.' },
        wrap: {
          teacher: '“‘청소년 성착취는 ___의 잘못이다’ — 빈칸에 들어갈 말은 무엇일까요?” 카드를 넣은 뒤 그 말을 들은 피해 청소년의 마음을 고르게 한다. ‘응한 청소년’ 카드를 넣은 학생에게 “그 말을 들은 청소년이 도움을 청할 수 있을까요?”라고 되묻는다. 도전 반은 두 말(탓하는 말·보호하는 말)을 들은 마음을 견주어 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'fill', slots: [{ id: 'f1', label: '청소년 성착취는 ___의 잘못이다.' }], cards: [{ id: 'adult', text: '착취한 어른' }, { id: 'teen', text: '응한 청소년' }, { id: 'friend', text: '곁의 친구' }] }, prompt: '입장 문장의 빈칸을 카드로 채우세요.', target: { fill: { f1: 'adult' } }, difficulty: 0.15 },
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'blame', label: '“네가 응했으니 네 책임이야”를 들은 청소년' }, { id: 'safe', label: '“네 잘못이 아니야. 도와줄게”를 들은 청소년' }], cards: [{ id: 'shame', text: '부끄러움' }, { id: 'relief', text: '안심' }, { id: 'excite', text: '신남' }] }, prompt: '두 말을 들은 청소년의 마음을 짝지으세요.', target: { match: { blame: 'shame', safe: 'relief' } }, difficulty: 0.2 },
            { type: 'short', prompt: '오늘의 입장을 내 말로 한 문장 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 입장 한 문장',
          items: [
            { type: 'short', prompt: '“돈을 주고받으면 거래일 뿐이다”에 대한 내 입장을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '피해 청소년에게 건넬 한마디를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 돌봄의 평등과 고정관념 없는 진로 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-care-career', [10]);
    const DAY = [{ id: 'list', text: '일주일 장보기 목록 짜기' }, { id: 'clinic', text: '할머니 병원 예약 챙기기' }, { id: 'call', text: '친척 안부 연락하기' }, { id: 'supply', text: '떨어진 세제 미리 사 두기' }, { id: 'sched', text: '가족 일정 맞추기' }, { id: 'tv', text: 'TV 보기' }, { id: 'game', text: '게임하기' }];
    const HOURS = [['엄마', 14], ['아빠', 4], ['형(19)', 2], ['나(17)', 1]];
    const FAIR = [['엄마', 6], ['아빠', 6], ['형(19)', 5], ['나(17)', 4]];
    const EUNHO = { text: '가상 인물 은호는 로봇 동아리 활동이 즐겁고 기계공학에 끌린다. 그런데 친척 어른이 “여자가 하기엔 힘든 길이야”라고 말한다. 너는 은호의 입장에서 고른다.', who: '은호', motif: 'star', choices: [
      { id: 'info', text: '학과 정보와 졸업생 이야기를 찾아보며 흥미·적성으로 따져 본다', result: '은호는 실습이 많고 문제 해결을 좋아하는 사람에게 맞는다는 것을 알게 된다.', impact: [{ who: '은호', text: '근거로 판단한다', tone: 1 }],
        next: { text: '진로 상담 시간, 담임 선생님이 은호에게 “관심 진로가 뭐니?”라고 묻는다.', who: '은호', choices: [
          { id: 'say', text: '“기계공학에 관심 있어요. 제 흥미와 강점은 이거예요”라고 말한다', result: '선생님이 관련 탐구 활동과 체험 프로그램을 안내한다.', impact: [{ who: '은호', text: '진로 준비가 구체적이 된다', tone: 1 }],
            next: { text: '친척 어른이 다시 “그래도 여자는…”이라고 말을 꺼낸다.', who: '은호', choices: [
              { id: 'calm', text: '“제가 찾아본 정보로는 흥미와 적성이 더 중요했어요”라고 차분히 말한다', result: '친척 어른이 “그렇게 알아봤구나”라며 고개를 끄덕인다.', impact: [{ who: '은호', text: '내 기준을 지킨다', tone: 1 }], ending: '진로는 성별이 아니라 흥미·적성·가치와 정보로 판단한다.' },
              { id: 'quiet', text: '말다툼이 싫어 아무 말 하지 않는다', result: '대화는 끝났지만 은호는 계속 마음에 걸린다.', impact: [{ who: '은호', text: '흔들린다', tone: 0 }], ending: '말하지 않아도 내 판단의 근거를 지켜 가면 된다. 다음엔 근거를 차분히 말해 볼 수 있다.' }] } },
          { id: 'hide', text: '“아직 잘 모르겠어요”라며 관심을 숨긴다', result: '선생님이 다른 진로를 이것저것 권한다.', impact: [{ who: '은호', text: '기회를 놓친다', tone: -1 }], ending: '관심을 말하지 않으면 필요한 정보와 기회도 멀어진다.' }] } },
      { id: 'later', text: '나중에 다시 생각하자며 결정을 미룬다', result: '동아리 대회 신청 기간이 지나간다.', impact: [{ who: '은호', text: '경험할 기회를 놓친다', tone: -1 }],
        next: { text: '친구 지오가 “나도 간호학과 가고 싶은데 남자라서 고민돼”라고 말한다.', who: '은호', choices: [
          { id: 'both', text: '“우리 둘 다 성별 말고 흥미랑 적성으로 정보를 찾아보자”고 한다', result: '둘이 함께 학과 정보를 찾아보기 시작한다.', impact: [{ who: '은호', text: '다시 시작한다', tone: 1 }, { who: '지오', text: '용기를 얻는다', tone: 1 }], ending: '고정관념은 모든 성별의 진로를 좁힌다. 함께 근거를 찾으면 넓어진다.' },
          { id: 'agree', text: '“맞아, 그런 건 성별에 맞는 게 있지”라고 한다', result: '두 사람 모두 관심 진로를 접는다.', impact: [{ who: '지오', text: '선택이 좁아진다', tone: -1 }], ending: '‘성별에 맞는 직업’이라는 생각이 두 사람의 길을 막았다.' }] } },
      { id: 'quit', text: '“역시 안 되겠지” 하고 다른 진로로 바꾼다', result: '은호는 로봇 동아리도 그만둔다.', impact: [{ who: '은호', text: '좋아하는 일을 접는다', tone: -1 }], ending: '근거 없이 성별로 접은 진로는 나중에 아쉬움으로 남을 수 있다.' }] };
    const EUNHO_R = [{ id: 'fit', text: '진로는 흥미·적성·가치와 정보로 판단한다' }, { id: 'all', text: '성 고정관념은 모든 성별의 선택을 좁힌다' }, { id: 'voice', text: '내 판단의 근거를 차분히 말할 수 있다' },
      { id: 'sex', text: '어떤 직업은 성별에 더 맞다', why: '직업에 맞는 것은 성별이 아니라 흥미·적성·역량이에요.' }, { id: 'elder', text: '어른 말이니 따르는 게 맞다', why: '어른의 걱정은 들을 수 있지만, 판단은 근거로 해요.' }];

    MODS.push(
      M({
        id: 'intro.invisible-work', type: 'intro', title: '잘 안 보이는 집안일',
        method: '하루 집안일 목록에서 안 보이는 일 찾기', tool: 'kitchen', minutes: 7,
        levels: { easy: '안 보이는 일 셋(장보기 목록·병원 예약·안부 연락)을 함께 찾는다.', base: '가상 가족 일과에서 안 보이는 일 다섯을 찾아 표시한다.', challenge: '그 일들이 왜 잘 안 보이는지 말한다.' },
        intro: {
          teacher: '“집안일 하면 설거지, 빨래가 떠오르죠. 그런데 장보기 목록 짜기, 병원 예약 챙기기처럼 잘 안 보이는 일도 있어요. 가상 가족의 하루에서 찾아볼까요?” 시연 단추로 안 보이는 일이 표시되는 모습을 보여 준다. “그건 일이라기보다 그냥 챙기는 거잖아요”라는 말이 나오면 “아무도 챙기지 않으면 그 집에 무슨 일이 생길까요?”라고 되묻는다. 보이지 않는 일도 시간과 마음이 드는 노동이라는 점을 짚는다.',
          student: '가상 가족의 하루 일과 목록에서 잘 보이지 않지만 꼭 필요한 집안일을 찾아 표시해 보세요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '가상 가족의 하루', items: DAY }, sequence: [{ checklist: ['list', 'clinic', 'call', 'supply', 'sched'] }] },
          art: { draw: 'a paper family calendar on a fridge with sticky notes, a shopping list, a phone with a hospital reminder, faint dotted outlines around the notes as if they were invisible work', banner: '보이지 않는 일도 일이다', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '가상 가족이다. 학생에게 자기 집 분담 상황을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.job-image', type: 'intro', title: '직업 이미지 떠올리기',
        method: '직업 이미지 연상 기록', tool: 'wordcards', minutes: 7,
        levels: { easy: '직업 카드 둘(간호사·조종사)을 보고 떠오른 성별을 마음속으로 적어 본다.', base: '직업 카드 넷을 보고 떠오른 성별을 활동지에 적은 뒤, 빈칸 문장으로 직업의 조건을 확인한다.', challenge: '그런 연상이 어디서 생겼는지(드라마·광고·주변) 말한다.' },
        intro: {
          teacher: '“간호사, 엔지니어, 보육교사, 조종사 — 카드를 보는 순간 떠오른 성별이 있나요? 정답은 없으니 활동지에만 조용히 적어 보세요.” 그다음 시연 단추로 ‘네 직업 모두 성별과 상관없이 할 수 있다’ 빈칸이 채워지는 모습을 보여 준다. “그래도 간호사는 여자가 많잖아요”라는 말이 나오면 “지금 많은 것과, 그 성별만 할 수 있는 것은 같은 말일까요?”라고 되묻는다. 연상은 우리가 본 장면에서 생기고, 진로는 흥미·적성으로 판단한다는 점을 밝힌다.',
          student: '직업 카드 네 장을 보고 먼저 떠오른 성별을 활동지에 조용히 적어 보세요. 그다음 그 직업에 정말 필요한 것이 무엇인지 생각해 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '간호사·엔지니어·보육교사·조종사는 모두 ___ 할 수 있는 직업이다.' }, { id: 'f2', label: '직업에 필요한 것은 성별이 아니라 흥미와 ___이다.' }], cards: ['성별과 상관없이', '적성', '한 성별만', '외모'] }, sequence: [{ fill: { f1: '성별과 상관없이', f2: '적성' } }] },
          art: { draw: 'four paper job badge cards (a nurse cap, a gear, a children\'s block, a pilot wing) floating above a paper student with a thought bubble that shows a question mark', banner: '먼저 떠오른 얼굴은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '연상한 성별은 정답·오답이 없으며 발표시키지 않는다(활동지에만 적음). 학급 결과를 모을 때는 익명으로만 센다.',
      }),

      M({
        id: 'activity.time-share', type: 'activity', title: '가족 돌봄 시간 그래프',
        method: '가상 가족 돌봄 시간 그래프 만들기', tool: 'chart', minutes: 17,
        levels: { easy: '표 값 일부(엄마·아빠 막대)를 미리 그려 주고 나머지를 채운다.', base: '지금 분담 그래프와 공정하게 다시 나눈 계획 그래프를 모두 완성하고, 공정의 기준을 고른다.', challenge: '값을 숨긴 판에서 완성하고, 공정의 기준(시간·능력·일정)을 활동지에 설명한다.' },
        activity: {
          title: '지금과 다시 나눈 계획', tool: 'chart',
          teacher: '“가상 가족 네 명의 주간 집안일·돌봄 시간 표예요. 엄마 14시간, 아빠 4시간, 형 2시간, 나 1시간. 그래프로 그리면 어떻게 보일까요?” 지금 그래프를 그린 뒤, 공정하게 다시 나눈 계획 그래프를 그리게 한다. “시간 있는 사람이 하면 되죠”라는 학생에게 “엄마도 일을 한다면, 시간 있는 사람은 누구일까요?”라고 묻는다. 공정한 분담은 똑같은 시간이 아니라 각자의 일정과 능력을 따져 함께 정하는 것이라는 점을 짚는다.',
          task: '가상 가족의 지금 분담과 다시 나눈 계획을 그래프로 그리고, 공정의 기준을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 가상 가족의 지금 주간 집안일·돌봄 시간 막대그래프를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '지금 주간 집안일·돌봄 시간(가상 가족)', unit: '시간', xLabel: '가족', yLabel: '시간', data: HOURS, max: 16, scale: 2, step: 1 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '엄마·아빠 막대는 그려 두었어요. 표를 보고 형과 나의 막대를 완성하세요.', toolOptions: { given: [0, 1] }, target: { build: [2, 3] } }, challenge: { toolOptions: { revealAfterCheck: true } } } },
            { prompt: '가족 회의에서 다시 나눈 계획 표를 보고 계획 막대그래프를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '다시 나눈 계획(가상 가족)', unit: '시간', xLabel: '가족', yLabel: '시간', data: FAIR, max: 16, scale: 2, step: 1 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '엄마·아빠 막대는 그려 두었어요. 계획 표를 보고 형과 나의 막대를 완성하세요.', toolOptions: { given: [0, 1] }, target: { build: [2, 3] } }, challenge: { toolOptions: { revealAfterCheck: true } } } },
            CHARTQ('다시 나눈 계획이 공정하다고 볼 수 있는 까닭으로 가장 알맞은 것을 고르세요.', { type: 'bar', title: '다시 나눈 계획(가상 가족)', unit: '시간', data: FAIR, max: 16, scale: 2 }, '이 계획의 공정함을 가장 잘 설명한 것은?', ['각자의 일정과 능력을 따져 함께 정했다', '나이가 가장 많은 사람이 정했다', '모두 정확히 같은 시간을 맡았다', '시간이 남는 사람에게 몰았다'], 0, { d: 0.35, more: { conclude: '공정한 분담은 보이지 않는 일까지 함께 세고, 각자의 일정과 능력을 따져 가족이 함께 정하는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공정의 기준(시간·능력·일정) 가운데 가장 중요하다고 생각하는 것과 그 까닭을 쓰세요.' }] },
        notes: '가족은 가상이며 값은 수업용이다. 학생 자기 집의 분담 시간을 발표시키지 않는다.',
      }),
      M({
        id: 'activity.career-dilemma', type: 'activity', title: '은호의 진로 갈림길',
        method: '진로 상담 장면 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 보고 근거를 고른다.', challenge: '다른 끝도 가 보고, 주변 사람의 말을 바꾸는 대사를 활동지에 쓴다.' },
        activity: {
          title: '“여자가 하기엔 힘들어”', tool: 'dilemma',
          teacher: '“가상 인물 은호는 기계공학에 끌리지만 ‘여자가 하기엔 힘든 길’이라는 말을 들어요. 은호라면 어떻게 할까요?” 장면마다 “이 선택의 근거는 성별인가요, 흥미·적성인가요?”라고 묻는다. ‘어른 말이니 따른다’를 고른 학생에게 “걱정해 주는 마음은 고마워요. 그 걱정이 정보에 바탕을 두었는지 확인해 볼까요?”라고 되묻는다. 친구 지오의 간호학과 고민도 함께 보며, 고정관념은 모든 성별의 진로를 좁힌다는 점을 짚는다.',
          task: '은호의 갈림길을 따라가며 근거로 진로를 판단하는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('은호의 입장에서 흥미·적성으로 판단하는 길을 끝까지 고르고 근거를 고르세요.', EUNHO, [['info', 'say', 'calm']], EUNHO_R, ['fit', 'voice'], { d: 0.4 }),
            DILQ('‘미룬다’로 시작한 길에서 친구와 함께 다시 시작하는 길을 고르고 근거를 고르세요.', { text: EUNHO.text, who: EUNHO.who, motif: EUNHO.motif, choices: EUNHO.choices.filter((c) => c.id !== 'info') }, [['later', 'both']], EUNHO_R, ['fit', 'all'], { d: 0.35 }),
            EXPLOREQ('‘다른 진로로 바꾼다’ 길도 끝까지 가 보고 결과를 견주세요.', EUNHO, EUNHO_R, ['접은 길의 끝을 확인했다', '두 길에서 은호에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '진로는 성별이 아니라 흥미·적성·가치와 정보로 판단해요. 고정관념은 모든 성별의 선택을 좁혀요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '“여자가 하기엔 힘든 길이야”라는 말을 근거를 묻는 말로 바꿔 쓰세요.' }] },
        notes: '인물은 가상이다. 특정 직업이나 성별을 깎아내리는 말로 흐르지 않게, 판단 기준(흥미·적성·가치·정보)에 초점을 둔다.',
      }),
      M({
        id: 'activity.career-plan', type: 'activity', title: '내 기준으로 쓰는 진로 판단 글',
        method: '내 기준으로 쓰는 진로 판단표 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '흥미·적성 두 기준만 문장 틀을 보고 쓴다.', base: '흥미 → 적성 → 가치 → 정보 → 자립 계획 차례로 판단 글을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 집안일 분담 계획과 진로의 연결을 쓴다.' },
        activity: {
          title: '진로 판단 글 쓰기', tool: 'rubric-writing',
          teacher: '“관심 진로 하나를 골라 흥미·적성·가치·정보 네 기준으로 판단 글을 써요. 성별을 까닭으로 쓰지 않는 것이 오늘의 기준이에요.” 기준마다 근거를 하나씩 쓰게 한다. “남자라서 이 일이 맞을 것 같다”라고 쓴 학생에게 “성별을 빼고, 그 일이 맞는다고 느낀 진짜 까닭은 무엇일까요?”라고 묻는다. 진로는 집안일·돌봄을 함께 해내는 자립 계획과도 이어진다는 점을 짚는다.',
          task: '관심 진로 하나를 네 기준으로 판단하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('관심 진로와 흥미를 2문장으로 쓰세요.', '관심 진로 하나를 밝히고, 그 진로의 어떤 활동에 흥미가 있는지 쓰세요.', ['진로를 밝혔다', '흥미를 활동으로 구체적으로 썼다', '성별을 까닭으로 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['흥미', '재미', '좋아']], starter: '내가 관심 있는 진로는 ~이다. 나는 ~할 때 흥미를 느낀다.', d: 0.35 }),
            RWQ('적성과 가치를 2~3문장으로 쓰세요.', '그 진로에 필요한 능력 가운데 내 강점과, 내가 일에서 중요하게 여기는 가치를 쓰세요.', ['강점을 근거와 함께 썼다', '가치를 밝혔다', '성별을 까닭으로 쓰지 않았다'], { min: 50, max: 350, sent: [2, 4], must: [['강점', '잘하', '적성'], ['가치', '중요']], starter: '이 진로에는 ~이 필요한데, 나는 ~을 잘한다. 나는 일에서 ~을 중요하게 여긴다.', d: 0.4 }),
            RWQ('더 알아볼 정보를 2문장으로 쓰세요.', '판단에 더 필요한 정보(학과·자격·일하는 모습)와 알아볼 방법을 쓰세요.', ['필요한 정보를 하나 이상 썼다', '알아볼 방법을 썼다', '믿을 만한 출처를 떠올렸다'], { min: 40, max: 300, sent: [2, 3], must: [['정보', '출처']], starter: '더 알아볼 정보는 ~이다. ~에서 찾아보겠다.', d: 0.35 }),
            RWQ('진로와 자립 계획을 이어 2~3문장으로 쓰세요.', '그 진로로 일하며 내 생활(집안일·돌봄 포함)을 스스로 꾸리는 계획을 쓰세요.', ['일과 생활을 함께 다루었다', '집안일·돌봄을 내 몫으로 넣었다', '실천할 수 있는 계획이다'], { min: 50, max: 350, sent: [2, 4], must: [['집안일', '돌봄', '생활']], starter: '이 일을 하며 나는 ~. 집안일과 돌봄은 ~', plus: '지금의 집안일 분담 계획과 진로 계획을 이었다', d: 0.4, more: { conclude: '진로는 성별이 아니라 흥미·적성·가치·정보로 판단하고, 집안일과 돌봄을 함께 해내는 자립 계획으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 판단 글을 네 기준으로 정리하세요.', columns: ['기준', '한 줄 요약'], cells: [['흥미', ''], ['적성', ''], ['가치', ''], ['정보', '']] }, { type: 'short', prompt: '내 판단 글에서 성별을 까닭으로 쓰지 않았는지 확인하고, 고친 곳이 있으면 쓰세요.' }] },
        notes: '진로 정보는 학교 진로 교사·커리어넷 등 공식 진로 자료로 확인하게 한다(진로교육법 제12조 — research-mandatory §1). 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.pledge', type: 'wrap', title: '이번 주 집안일 하나',
        method: '이번 주 집안일 분담 실천 하나', tool: 'timer', minutes: 7,
        levels: { easy: '맡을 집안일 하나만 정해 쓴다.', base: '맡을 일과 걸리는 시간을 기록판에 적는다.', challenge: '가족에게 제안할 분담 방식을 한 줄 덧붙인다.' },
        wrap: {
          teacher: '“이번 주에 내가 맡을 집안일 하나와, 그 일에 걸리는 시간을 적어 봐요. 안 보이는 일도 좋아요.” 기록판에 시간을 적게 한다. “우리 집은 엄마가 다 해요”라는 학생에게 “그중 내가 해 볼 수 있는 작은 일 하나는 무엇일까요?”라고 묻는다. 집 사정은 발표시키지 않고 각자 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '이번 주 맡을 집안일', fields: [{ label: '한 번에 걸리는 시간', unit: '분', step: 5 }, { label: '이번 주에 할 횟수', unit: '번', step: 1 }] }, prompt: '이번 주 맡을 집안일 하나의 걸리는 시간과 횟수를 기록판에 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '보이지 않는 집안일의 예로 알맞은 것은?', options: ['TV 보기', '떨어진 생필품 미리 챙기기', '게임하기'], answer: 1, difficulty: 0.15, explain: '챙기고 계획하는 일도 시간이 드는 집안일이에요.' },
            { type: 'short', prompt: '이번 주 맡을 집안일 하나를 쓰세요(가족에게 제안할 분담 방식도 써도 좋아요).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌봄의 평등과 고정관념 없는 진로',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '장보기 목록 짜기처럼 잘 보이지 않지만 꼭 필요한 일을 보이지 않는 ___이라고 한다.', answer: '노동' },
            { type: 'short', prompt: '이번 주 맡을 집안일과 걸리는 시간을 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 노동 · 분담 · 적성', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '집안일은 가족이 함께 ___한다.', answer: '분담' }] },
        },
      }),
      M({
        id: 'wrap.rethink', type: 'wrap', title: '직업 연상 다시 보기',
        method: '연상 결과 다시 보기', tool: 'chart', minutes: 7,
        levels: { easy: '가상 학급 그래프에서 가장 많이 바뀐 직업만 고른다.', base: '고르고, 내 생각이 바뀐 직업 하나와 까닭을 쓴다.', challenge: '생각이 바뀌지 않은 직업이 있다면 그 까닭도 쓴다.' },
        wrap: {
          teacher: '“가상 학급에서 수업 뒤 ‘성별과 상관없다’로 생각을 바꾼 학생 수예요. 가장 많이 바뀐 직업은 무엇일까요?” 그래프를 읽은 뒤 각자 생각이 바뀐 직업 하나를 쓰게 한다. “저는 안 바뀌었어요”라는 학생에게 “괜찮아요. 왜 그대로인지 근거를 써 보는 것도 오늘의 공부예요”라고 말한다. 개인 연상은 발표시키지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '수업 뒤 ‘성별과 상관없다’로 바꾼 학생 수(가상 학급 30명)', unit: '명', xLabel: '직업', yLabel: '학생 수', data: [['간호사', 9], ['엔지니어', 7], ['보육교사', 10], ['조종사', 12]], question: '가장 많은 학생이 생각을 바꾼 직업은?', choices: ['간호사', '엔지니어', '보육교사', '조종사'] }, prompt: '가상 학급 그래프에서 생각이 가장 많이 바뀐 직업을 고르세요.', target: { pick: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '진로를 판단할 때 가장 알맞은 기준은?', options: ['그 직업에 많은 성별', '흥미·적성·가치와 정보', '주변 사람들의 첫인상'], answer: 1, difficulty: 0.15, explain: '진로는 성별이 아니라 흥미·적성·가치와 정보로 판단해요.' },
            { type: 'short', prompt: '내 생각이 바뀐 직업 하나와 까닭(또는 바뀌지 않은 까닭)을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '직업 연상 다시 보기',
          items: [
            { type: 'short', prompt: '직업에 대한 연상이 생기는 출처 하나를 쓰세요.' },
            { type: 'short', prompt: '친구가 “그건 남자(여자) 직업이야”라고 할 때 할 말을 쓰세요.' },
          ],
        },
        notes: '값은 수업용 가상 값이다.',
      }),
    );
  }

  // ======================================================================================================
  // 10. 사랑의 요소와 친밀한 관계 폭력 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-love-control', [11]);
    const LINES = { good: [{ id: 'mine', text: '“너 내 거야. 다른 사람이랑 말하지 마.”' }, { id: 'phone', text: '“휴대폰 줘 봐. 누구랑 연락했어?”' }, { id: 'wear', text: '“그 옷 입고 나가지 마. 내가 싫어.”' }, { id: 'where', text: '“지금 어디야? 사진 찍어 보내.”' }], bad: [{ id: 'ask', text: '“오늘 친구들 만나? 재밌게 놀다 와.”' }, { id: 'care', text: '“힘들면 말해 줘. 기다릴게.”' }] };
    const STEPS = ['수시로 연락하며 답장을 확인한다', '친구 만남을 줄이라고 한다', '휴대폰 비밀번호를 알려 달라고 한다', '위치를 늘 켜 두라고 한다', '헤어지자고 하면 위협한다', '몸을 밀치고 붙잡는다'];
    const LOVE = [['A 친밀감', 2], ['A 열정', 9], ['A 책임', 1], ['B 친밀감', 7], ['B 열정', 6], ['B 책임', 7], ['C 친밀감', 6], ['C 열정', 2], ['C 책임', 8]];
    const LOVE_T = '가상 세 커플의 사랑 세 요소(가상 점수, 10점 만점)';
    const SURVEY = [['연락 확인', 45], ['위치 공유 요구', 38], ['비밀번호 요구', 30], ['옷차림 간섭', 22], ['친구 만남 제한', 15]];
    const SURVEY_T = '이 행동을 ‘사랑의 표현’으로 본 비율(가상 고교생 설문, %)';
    const CTRL = { type: 'bar', title: SURVEY_T, unit: '%', xLabel: '행동', yLabel: '비율', data: SURVEY };
    const TOWN = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '상담실', icon: 'house', at: [1, 0], legend: '학교 상담실' }, { name: '교실(담임 선생님)', icon: 'school', at: [3, 0], legend: '담임 선생님' }, { name: '지역 지원 기관', icon: 'office', at: [5, 2], legend: `지역 지원 기관 ${HELPNO}` }, { name: '편의점', icon: 'market', at: [0, 3] }, { name: '공원', icon: 'park', at: [3, 3] }] });

    MODS.push(
      M({
        id: 'intro.drama-scene', type: 'intro', title: '드라마 고백 장면의 신호',
        method: '드라마 고백 장면의 신호 읽기', tool: 'story', minutes: 7,
        levels: { easy: '교사가 신호 둘(“너 내 거야”·“휴대폰 줘 봐”)을 짚어 준다.', base: '대사 여섯 가운데 낭만으로 포장된 통제 신호 넷을 고른다.', challenge: '통제 대사 하나를 존중하는 대사로 바꿔 말한다.' },
        intro: {
          teacher: '“가상 드라마 고백 장면의 대사예요. 설렘으로 그려지지만, 이 가운데 통제 신호는 무엇일까요?” 시연 단추로 통제 대사가 바구니에 담기는 모습을 보여 준다. “드라마에선 이게 멋있잖아요”라는 말이 나오면 “현실에서 매일 ‘휴대폰 줘 봐’를 듣는다면 어떤 기분일까요?”라고 되묻는다. 낭만으로 포장된 질투·소유의 말이 통제의 시작일 수 있다는 점을 짚는다.',
          student: '가상 드라마 장면의 대사를 읽고, 낭만처럼 그려졌지만 상대를 통제하는 신호인 대사를 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '통제 신호', cards: mix([LINES.good, LINES.bad]) }, sequence: [{ pick: LINES.good.map((c) => c.id) }] },
          art: { draw: 'a paper TV screen showing two paper silhouettes under cherry blossoms, speech bubbles drifting out, some bubbles tied with thin paper chains, a paper remote control on a sofa', banner: '설렘일까, 통제일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면은 가상 드라마다. 학생 자신의 연애를 묻지 않는다. 성별을 바꾸어도 같은 신호라는 점을 함께 짚는다.',
      }),
      M({
        id: 'intro.triangle', type: 'intro', title: '사랑의 세 요소 그래프',
        method: '사랑의 세 요소 비율 그리기', tool: 'chart', minutes: 7,
        levels: { easy: '커플 하나(B)의 세 막대만 함께 읽는다.', base: '세 커플의 세 요소를 견주어 가장 고르게 갖춘 관계를 고른다.', challenge: '열정만 높은 관계가 시간이 지나며 어떻게 바뀔지 예측해 말한다.' },
        intro: {
          teacher: '“사랑은 친밀감(가까움), 열정(끌림), 책임(서로를 지키려는 약속)으로 볼 수 있어요. 가상 세 커플의 점수를 견주어 볼까요? 어느 관계가 가장 안정적일까요?” 시연 단추로 커플 B가 골라지는 모습을 보여 준다. “열정이 제일 높은 A가 진짜 사랑 아니에요?”라는 말이 나오면 “친밀감과 책임이 거의 없을 때, 열정은 질투나 집착으로 바뀌기 쉽지 않을까요?”라고 되묻는다. 세 요소가 고르게 자랄 때 관계가 안정적이라는 점을 짚는다.',
          student: '가상 세 커플의 친밀감·열정·책임 점수를 견주어 보고, 어느 관계가 가장 안정적인지 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: LOVE_T, unit: '점', xLabel: '커플·요소', yLabel: '점수', data: LOVE, max: 10, question: '세 요소를 가장 고르게 갖춘 커플은?', choices: ['커플 A', '커플 B', '커플 C'] }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper triangle with three corners labeled by small icons (two hands, a flame, a shield), three paper couples standing at different spots inside the triangle', banner: '사랑을 이루는 세 꼭짓점', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '점수는 수업용 가상 값이다(계획의 띠그래프 대신 세 커플을 견주는 막대그래프로 보였다). 사랑의 세 요소는 심리학의 한 설명 틀로 소개한다. 학생 자신의 연애를 점수 매기게 하지 않는다.',
      }),

      M({
        id: 'activity.escalation', type: 'activity', title: '통제가 커지는 흐름',
        method: '통제가 커지는 흐름 순서 짓기', tool: 'timeline', minutes: 17,
        levels: { easy: '앞 네 장만 차례로 놓는다.', base: '여섯 장을 차례로 놓고, 가장 먼저 끊을 지점에 깃발(고르기)을 놓고, 지점마다 도움 행동을 짝짓는다.', challenge: '함정 카드가 섞인 판에서 차례를 놓고, 지점마다 도움 행동을 활동지에 더 쓴다.' },
        activity: {
          title: '작은 통제에서 폭력까지', tool: 'timeline',
          teacher: '“가상 사례 카드예요. 연락 확인에서 신체 폭력까지, 통제가 어떻게 커지는지 차례로 놓아 볼까요?” 카드를 놓을 때마다 “이 단계에서 상대는 무엇을 잃게 되나요?”라고 묻는다. ‘연락 확인은 사랑이니까 폭력이 아니다’라는 학생에게 “처음엔 작아 보여도, 다음 단계로 이어질 때 끊기는 더 쉬워질까요, 어려워질까요?”라고 되묻는다. 친밀한 관계의 폭력은 통제·언어·신체·성적·디지털로 나타나고, 이른 단계에서 알아차리고 끊을수록 쉽다는 점을 짚는다.',
          task: '통제가 커지는 흐름을 차례로 놓고, 끊을 지점과 도움 행동을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('가상 사례에서 통제가 커지는 흐름을 차례로 놓으세요.', STEPS, { k: 4, traps: ['서로의 일정을 묻고 존중한다'], d: 0.35, opt: { axis: ['처음', '나중'] } }),
            PICKQ('가장 먼저 알아차리고 끊을 수 있는 지점에 깃발을 꽂으세요(카드 하나).', ['수시로 연락하며 답장을 확인한다'], ['헤어지자고 하면 위협한다', '몸을 밀치고 붙잡는다'], { d: 0.3, opt: { basket: '깃발', axis: ['처음', '나중'] } }),
            MATCHQ('지점마다 할 수 있는 도움 행동을 짝지으세요.', [['연락·답장 확인', '“나도 내 시간이 필요해”라고 말한다'], ['비밀번호·위치 요구', '거절하고 믿을 친구에게 이야기한다'], ['위협·신체 폭력', '기록을 남기고 믿을 어른·지원 기관에 알린다']], { k: 2, d: 0.35, opt: { axis: ['처음', '나중'] }, more: { conclude: '통제는 작은 확인에서 시작해 위협과 폭력으로 커질 수 있어요. 이른 지점에서 알아차릴수록 끊기 쉽고, 어느 지점이든 도움을 청할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '통제의 첫 단계를 알아차렸을 때 쓸 수 있는 말을 한 문장으로 쓰세요.' }] },
        notes: '사례는 가상이다. 학생 자신이나 친구의 연애를 사례로 꺼내게 하지 않는다. 성적·디지털 폭력은 낱말로만 다루고 묘사하지 않는다.',
      }),
      M({
        id: 'activity.check-scale', type: 'activity', title: '관계 점검 설문 해석',
        method: '관계 점검 척도 자료 해석', tool: 'chart', minutes: 17,
        levels: { easy: '값이 보이는 그래프로 읽기 질문 둘을 먼저 답한다.', base: '값을 보며 읽고, 해석과 자료의 한계를 고른 뒤 활동지에 한계를 쓴다.', challenge: '값을 숨긴 그래프로 읽고, 새 설문 문항 두 개를 활동지에 설계한다.' },
        activity: {
          title: '“사랑의 표현” 설문 읽기', tool: 'chart',
          teacher: '“가상 고교생 설문에서 ‘연락 확인’을 사랑의 표현으로 본 학생이 45%예요. 이 숫자는 무엇을 말해 주고, 무엇을 말해 주지 않을까요?” 그래프를 읽고 해석을 고르게 한다. “45%나 되니까 연락 확인은 사랑이 맞네요”라는 학생에게 “많은 사람이 그렇게 본다는 것과 그것이 존중인지는 같은 질문일까요?”라고 되묻는다. 통계는 생각의 분포를 보여 줄 뿐 그 행동이 통제인지를 판정하지 않고, 조사 문항 자체도 따져 봐야 한다는 점을 짚는다.',
          task: '가상 설문 그래프를 읽고 해석과 자료의 한계를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHARTQ('그래프에서 ‘사랑의 표현’으로 본 비율이 가장 높은 행동을 고르세요.', CTRL, '비율이 가장 높은 행동은?', SURVEY.map((s) => s[0]), 0, { d: 0.2 }),
            CHARTQ('그래프를 바르게 해석한 것을 고르세요.', CTRL, '바른 해석은?', ['통제 행동을 사랑으로 여기는 생각이 적지 않다', '45%가 그렇게 보니 연락 확인은 존중이다', '친구 만남 제한은 15%라 문제없다', '모든 학생이 연락 확인을 원한다'], 0, { d: 0.3 }),
            CHARTQ('이 자료만으로 알 수 없는 것을 고르세요.', CTRL, '이 자료가 말해 주지 않는 것은?', ['그 행동을 당한 사람이 어떻게 느꼈는지', '연락 확인을 사랑으로 본 비율', '비율이 가장 낮은 행동', '조사한 행동의 종류'], 0, { d: 0.35, more: { conclude: '설문은 생각의 분포를 보여 줄 뿐, 그 행동이 존중인지 통제인지를 정하지 않아요. 상대의 자유를 줄이는 행동은 사랑이라는 이름이 붙어도 통제예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다음 조사에서 물어보고 싶은 문항 하나를 쓰고, 그 문항이 한쪽으로 기울지 않았는지 점검하세요.' }] },
        notes: '설문 값은 수업용 가상 값이다. 우리 반 설문을 한다면 익명으로만 하고, 자기 연애 경험을 묻는 문항은 넣지 않는다.',
      }),
      M({
        id: 'activity.myth-rewrite', type: 'activity', title: '로맨스 신화 장면 다시 쓰기',
        method: '로맨스 신화 장면 다시 쓰기 기준표 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '장면 틀(원래 대사 → 바꾼 대사)을 보고 쓴다.', base: '장면 고르기 → 문제 짚기 → 존중하는 장면으로 다시 쓰기 → 재미 살리기 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 원래 장면과 바꾼 장면을 견주는 해설을 쓴다.' },
        activity: {
          title: '존중하는 로맨스로 다시 쓰기', tool: 'rubric-writing',
          teacher: '“웹툰이나 드라마에 자주 나오는 가상 장면 — 손목을 잡아끌며 ‘넌 나만 봐’라고 하는 장면 — 을 존중하는 관계로 다시 써 봐요. 설렘은 그대로 살릴 수 있을까요?” 먼저 원래 장면의 문제를 짚게 한다. “존중하면 재미없어요”라는 학생에게 “상대가 웃으며 ‘좋아’라고 답하는 장면은 설레지 않을까요?”라고 묻는다. 존중하는 장면은 동의를 확인하고, 거절을 존중하고, 결정을 함께 내린다는 점을 짚는다.',
          task: '로맨스 신화 장면을 존중하는 관계의 장면으로 다시 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('고른 가상 장면과 그 장면의 통제 신호를 2문장으로 쓰세요.', '로맨스 신화 장면(가상) 하나를 고르고, 그 장면에서 통제·소유의 신호가 무엇인지 쓰세요.', ['장면을 짧게 소개했다', '신호를 정확히 짚었다', '실제 인물이나 내 연애를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['통제', '소유', '집착']], starter: '내가 고른 장면은 ~이다. 이 장면의 신호는 ~이다.', d: 0.35 }),
            RWQ('같은 장면을 존중하는 대사로 다시 쓰세요.', '같은 장면에서 두 인물이 동의를 확인하고 서로의 결정을 존중하는 대사를 3문장 안팎으로 쓰세요.', ['동의를 묻는 대사가 있다', '거절해도 괜찮다는 대사가 있다', '두 사람이 함께 결정한다'], { min: 60, max: 400, sent: [3, 5], must: [['?', '물어']], starter: 'A: “~해도 될까?” B: “~”', plus: '설렘이 살아 있는 대사를 넣었다', d: 0.4 }),
            RWQ('바꾼 장면에서 재미와 설렘이 살아 있는 지점을 쓰세요.', '존중하는 장면에서도 설렘이 느껴지는 대목과 그 이유를 쓰세요.', ['설렘이 살아 있는 대목을 짚었다', '존중과 설렘이 함께 갈 수 있다고 썼다', '구체적으로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['설렘', '재미']], d: 0.4 }),
            RWQ('원래 장면과 바꾼 장면을 견주는 해설을 쓰세요.', '두 장면이 보는 사람에게 남기는 메시지가 어떻게 다른지 견주어 쓰세요.', ['두 장면을 모두 다루었다', '메시지의 차이를 썼다', '로맨스 신화가 왜 해로운지 밝혔다'], { min: 50, max: 350, sent: [2, 4], must: [['메시지', '다르']], plus: '이런 장면이 되풀이될 때의 영향까지 썼다', d: 0.4, more: { conclude: '존중하는 로맨스도 충분히 설레요. 동의를 확인하고, 거절을 존중하고, 결정을 함께 내리는 장면이 사랑의 세 요소를 고르게 키워요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 글을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['동의 확인', ''], ['거절 존중', ''], ['평등한 결정', ''], ['재미 유지', '']] }, { type: 'short', prompt: '앞으로 웹툰·드라마를 볼 때 알아차릴 신호 하나를 쓰세요.' }] },
        notes: '장면은 가상이며 신체 접촉·성적 장면은 다시 쓰기 대상으로 삼지 않는다(대사 중심). 실제 작품 이름을 들 때는 장면을 자세히 옮기지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.signal-card', type: 'wrap', title: '관계 신호등 카드',
        method: '내 관계 신호등 카드', tool: 'emotion', minutes: 7,
        levels: { easy: '색마다 행동 카드 하나씩만 고른다.', base: '행동 카드 여섯 장을 세 신호에 나누고, 활동지에 내 말로 행동 하나를 더 쓴다.', challenge: '노랑이 빨강으로 바뀌는 순간을 설명한다.' },
        wrap: {
          teacher: '“오늘 배운 행동을 신호등으로 정리해요 — 초록은 존중, 노랑은 주의, 빨강은 통제. 내 관계가 아니라 일반적인 행동으로 생각해요.” 카드를 나눈 뒤 두세 명에게 노랑 카드를 고른 까닭을 묻는다. ‘위치를 늘 켜 두라고 한다’를 초록에 놓은 학생에게 “싫다고 해도 계속 요구한다면 어느 색일까요?”라고 되묻는다. 자기 관계를 밝히지 않게 하고, 걱정되는 일이 있으면 수업 뒤 상담 선생님께 이야기할 수 있다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: [{ id: 'green', label: '초록(존중)' }, { id: 'yellow', label: '노랑(주의)' }, { id: 'red', label: '빨강(통제)' }], cards: [{ id: 'g1', text: '서로의 친구 만남을 응원한다' }, { id: 'g2', text: '거절해도 기다려 준다' }, { id: 'y1', text: '답장이 늦으면 자꾸 서운해한다' }, { id: 'y2', text: '어디 가는지 매번 묻는다' }, { id: 'r1', text: '비밀번호를 내놓으라고 한다' }, { id: 'r2', text: '헤어지자면 위협한다' }] }, prompt: '행동 카드를 관계 신호등 세 칸에 나누세요.', target: { sort: { green: ['g1', 'g2'], yellow: ['y1', 'y2'], red: ['r1', 'r2'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '“질투와 연락 확인은 사랑의 증거다”에 대한 바른 생각은?', options: ['맞다, 사랑할수록 확인해야 한다', '상대의 자유를 줄이는 확인은 통제의 신호일 수 있다', '연인 사이에는 폭력이라는 말이 어울리지 않는다'], answer: 1, difficulty: 0.2, explain: '사랑이라는 이름이 붙어도 상대의 자유를 줄이면 통제예요.' },
            { type: 'short', prompt: '노랑 신호가 빨강으로 바뀌는 순간을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사랑의 요소와 친밀한 관계 폭력',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사랑의 세 요소는 친밀감·열정·___이다.', answer: '책임' },
            { type: 'short', prompt: '초록 신호 행동 하나를 내 말로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 책임 · 통제 · 존중', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '상대의 자유를 줄이는 행동은 ___의 신호다.', answer: '통제' }] },
        },
      }),
      M({
        id: 'wrap.help-route', type: 'wrap', title: '관계 폭력 도움 경로',
        method: '관계 폭력 도움 경로 확인', tool: 'map', minutes: 7,
        levels: { easy: '핀 두 개(상담실·지역 지원 기관)만 함께 놓는다.', base: '핀 두 개를 놓고 연결 차례를 활동지에 쓴다.', challenge: '디지털 증거(메시지·통화 기록)를 남기는 방법을 활동지에 메모한다.' },
        wrap: {
          teacher: '“친구가 연인에게 통제나 폭력을 겪는다고 털어놓으면 어디로 이어 갈까요?” 지도에 핀을 놓게 한다. 편의점이나 공원에 핀을 놓는 학생에게 “그곳에서 친구의 안전을 함께 살필 어른이 있을까요?”라고 묻는다. 지역 지원 기관 번호는 학교가 확인한 것을 쓴다고 말해 준다. 도전 반은 위협 메시지를 지우지 않고 남기는 방법을 메모하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '친구가 털어놓은 뒤 학교 안에서 함께 갈 곳에 핀을 놓으세요.', target: { place: '상담실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교 밖에서 관계 폭력 상담을 이어 갈 곳에 핀을 놓으세요.', target: { place: '지역 지원 기관' }, difficulty: 0.2 },
            { type: 'short', prompt: '위협 메시지를 받았다는 친구에게 할 말과 할 일을 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '관계 폭력 도움 경로',
          items: [
            { type: 'table', prompt: '도움 경로를 쓰세요.', columns: ['차례', '곳', '번호·메모'], cells: [['1', '상담실', ''], ['2', '믿을 어른', ''], ['3', '지역 지원 기관', HELPNO]] },
            { type: 'short', prompt: '디지털 증거를 남길 때 지킬 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 지위·힘의 차이와 동의 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-power-consent', [11]);
    const POWER = [['코치와 선수', '코치가 출전 기회를 정한다'], ['선배와 후배', '선배가 동아리 분위기를 쥔다'], ['매장 관리자와 아르바이트생', '관리자가 근무 시간과 계속 일할지를 정한다']];
    const SILENT = [['불이익을 받을까 봐', 42], ['안 믿어 줄까 봐', 31], ['알려도 바뀌지 않을 것 같아서', 18], ['어디에 알릴지 몰라서', 9]];
    const SILENT_T = '불편한 일을 알리지 못한 까닭(가상 조사, %)';
    const SUA = { text: '가상 인물 수아는 주말에 매장 아르바이트를 한다. 관리자가 자꾸 어깨를 주무르고, 수아가 피하자 “계속 일하고 싶으면 예민하게 굴지 마”라고 한다. 너는 수아의 입장에서 고른다.', who: '수아', motif: 'cloud', choices: [
      { id: 'record', text: '날짜·시간·한 말을 적어 두고 믿을 어른에게 알린다', result: '보호자가 수아의 이야기를 듣고 함께 대처하기로 한다.', impact: [{ who: '수아', text: '혼자 감당하지 않는다', tone: 1 }],
        next: { text: '보호자가 “어디에 알리면 좋을까?”라고 묻는다.', who: '수아', choices: [
          { id: 'agency', text: `학교 상담 선생님·지원 기관(${HELPNO})에 기록을 가지고 상담한다`, result: '상담 기관이 대처 방법과 다음 절차를 안내한다.', impact: [{ who: '수아', text: '보호받는 길이 열린다', tone: 1 }],
            next: { text: '같은 매장의 동료 지원이 “나도 비슷한 일을 봤어”라고 말한다. 이번엔 지원의 입장에서 고른다.', who: '동료 지원', choices: [
              { id: 'witness', text: '본 일을 적어 수아에게 필요하면 함께 말하겠다고 한다', result: '수아의 이야기가 한 사람의 말이 아니게 된다.', impact: [{ who: '수아', text: '지지를 얻는다', tone: 1 }], ending: '힘의 차이가 있는 곳에서는 기록과 곁의 지지가 침묵을 깬다.' },
              { id: 'away', text: '괜히 끼어들기 싫어 모른 척한다', result: '수아는 다시 혼자 남는다.', impact: [{ who: '수아', text: '외로워진다', tone: -1 }], ending: '동료의 침묵은 힘센 쪽을 돕는 침묵이 된다.' }] } },
          { id: 'quietly', text: '일이 커질까 봐 그냥 다른 곳으로 옮긴다', result: '수아는 벗어났지만 그 매장의 다른 사람들은 그대로다.', impact: [{ who: '수아', text: '피해에서는 벗어난다', tone: 0 }], ending: '피하는 것도 나를 지키는 선택이지만, 알리면 다른 사람도 지킬 수 있다.' }] } },
      { id: 'endure', text: '일자리를 잃을까 봐 참고 아무 말 하지 않는다', result: '관리자의 행동이 더 잦아진다.', impact: [{ who: '수아', text: '피해가 이어진다', tone: -1 }],
        next: { text: '수아가 출근하기 전마다 배가 아프다.', who: '수아', choices: [
          { id: 'tell', text: '지금이라도 기록을 적고 믿을 어른에게 알린다', result: '늦었지만 보호자와 함께 대처를 시작한다.', impact: [{ who: '수아', text: '도움이 시작된다', tone: 1 }], ending: '참아 온 시간도 수아의 잘못이 아니다. 지금 알려도 늦지 않다.' },
          { id: 'self', text: '“내가 너무 예민한 거겠지” 하고 계속 참는다', result: '수아의 몸과 마음이 더 지친다.', impact: [{ who: '수아', text: '자기를 탓한다', tone: -1 }], ending: '예민한 것이 아니라 싫은 것이다. 거절하지 못한 것은 동의가 아니다.' }] } },
      { id: 'quit', text: '바로 아르바이트를 그만둔다', result: '수아는 벗어났지만 일한 날의 급여를 받지 못할까 걱정한다.', impact: [{ who: '수아', text: '피해에서는 벗어난다', tone: 0 }], ending: '그만두는 것도 나를 지키는 선택이다. 기록하고 알리면 급여·피해 문제도 도움을 받을 수 있다.' }] };
    const SUA_R = [{ id: 'silence', text: '힘의 차이 속에서 거절하지 못한 것은 동의가 아니다' }, { id: 'record', text: '기록을 남기고 믿을 어른·기관에 알린다' }, { id: 'ally', text: '곁의 동료도 증언과 지지로 도울 수 있다' },
      { id: 'sensitive', text: '피하지 않았으니 괜찮다는 뜻이다', why: '거절하지 않았다고 동의한 것이 아니에요.' }, { id: 'private', text: '윗사람과의 일은 개인 간 문제다', why: '지위를 이용한 행동은 구조의 문제이고, 알리고 도움을 받을 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.power-map', type: 'intro', title: '관계 속 힘의 방향',
        method: '관계 속 힘의 방향 표시', tool: 'mindmap', minutes: 7,
        levels: { easy: '관계 둘(코치-선수·선배-후배)에 힘의 근거를 함께 잇는다.', base: '관계 셋에 힘의 근거를 잇고, 거절하기 어려운 까닭을 말한다.', challenge: '겉으로 힘이 안 보이는 관계(친한 친구 사이의 인기 등)를 찾아 말한다.' },
        intro: {
          teacher: '“코치와 선수, 선배와 후배, 매장 관리자와 아르바이트생 — 이 관계에서 힘은 어느 쪽에 있을까요? 그 힘은 무엇에서 나올까요?” 시연 단추로 관계마다 힘의 근거 카드가 이어지는 모습을 보여 준다. “싫으면 그냥 싫다고 하면 되잖아요”라는 말이 나오면 “출전 기회나 일자리가 걸려 있다면, 거절이 그렇게 쉬울까요?”라고 되묻는다. 힘의 차이가 있으면 ‘싫다’고 말하기 어려워지고, 그래서 침묵은 동의가 아니라는 점을 오늘의 질문으로 밝힌다.',
          student: '가상 관계 세 가지에서 힘이 어느 쪽에 있고, 그 힘이 무엇에서 나오는지 이어 보세요. 거절하기 어려운 까닭도 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '힘의 차이', slots: POWER.map((p) => p[0]), cards: POWER.map((p) => p[1]).reverse() }, sequence: [{ match: Object.fromEntries(POWER) }] },
          art: { draw: 'three paper pairs of figures standing on a seesaw, each seesaw tilted toward a figure holding a small object (a whistle, a club badge, a store key), arrows cut from paper pointing downward', banner: '힘은 어느 쪽에 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '관계는 가상이다. 특정 직업·지위의 사람을 모두 가해자로 보지 않게, ‘힘의 차이가 거절을 어렵게 만드는 구조’에 초점을 둔다.',
      }),
      M({
        id: 'intro.silence-graph', type: 'intro', title: '“말하지 못한 까닭” 조사',
        method: '"말하지 못한 이유" 가상 조사 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '가장 큰 막대(불이익 걱정)만 함께 읽는다.', base: '막대를 견주어 구조적 원인을 고른다.', challenge: '학교가 줄일 수 있는 원인을 골라 말한다.' },
        intro: {
          teacher: '“가상 조사에서 불편한 일을 알리지 못한 까닭 1위는 ‘불이익을 받을까 봐’ 42%였어요. 이건 개인이 겁이 많아서일까요?” 시연 단추로 ‘힘의 차이가 알리기를 막는 구조’ 보기가 골라지는 모습을 보여 준다. “용기 내서 말하면 되잖아요”라는 말이 나오면 “알린 사람이 불이익을 받는 곳이라면, 용기만으로 충분할까요?”라고 되묻는다. 침묵은 개인의 약함이 아니라 구조가 만든다는 점을 짚는다.',
          student: '불편한 일을 알리지 못한 까닭을 조사한 가상 그래프를 읽고, 침묵을 만드는 구조적 원인을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: SILENT_T, unit: '%', xLabel: '까닭', yLabel: '비율', data: SILENT, question: '그래프가 보여 주는 구조적 원인은?', choices: ['힘의 차이가 알리기를 막는다', '알리지 않은 사람이 겁이 많다', '불편한 일이 별일 아니었다', '조사가 잘못되었다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with the tallest bar shaped like a closed padlock, a paper figure with a speech bubble that is folded shut, a paper key lying on the floor nearby', banner: '왜 말하지 못했을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '조사 값은 수업용 가상 값이다. 학생에게 자기가 알리지 못한 경험을 묻지 않는다.',
      }),

      M({
        id: 'activity.consent-conditions', type: 'activity', title: '동의가 성립하는 조건',
        method: '동의 성립 조건 판정', tool: 'sortboard', minutes: 17,
        levels: { easy: '사례 네 장을 ‘성립’·‘성립 안 함’에 나눈다(틀리면 되돌아옴).', base: '사례 여섯 장을 나누고, 무너진 조건(자유·분명·대등·철회 가능)에 사례를 나누고, 확인하는 행동을 가른다.', challenge: '헷갈리는 사례가 더해진 판에서 나누고, 판정이 엇갈릴 사례 하나를 활동지에 논증한다.' },
        activity: {
          title: '동의 판정 바구니', tool: 'sortboard',
          teacher: '“동의가 성립하려면 자유롭고, 분명하고, 대등하고, 언제든 철회할 수 있어야 해요. 가상 사례를 판정해 볼까요?” 카드를 놓을 때마다 “네 조건 가운데 무엇이 무너졌나요?”라고 묻는다. ‘선물을 받은 뒤 거절하지 못한 요청’을 성립으로 놓은 학생에게 “선물을 받았으니 거절하면 안 된다는 마음이 들었다면, 그 대답은 자유로웠을까요?”라고 되묻는다. 거절하지 않은 것은 동의가 아니고, 힘의 차이·대가·의식 상태가 동의를 무너뜨린다는 점을 짚는다.',
          task: '가상 사례를 동의 성립 여부와 무너진 조건으로 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('가상 사례 카드를 동의 성립 여부로 나누세요.', ['동의 성립', '성립 안 함'], [['대등한 친구가 “좋아, 그렇게 하자”고 분명히 말함', '“지금은 좋아. 싫어지면 말할게”라고 함'], ['비싼 선물을 받은 뒤 거절하지 못한 요청', '성적을 매기는 사람이 한 요청에 “네”라고 함', '의식이 흐린 상태에서 웅얼거린 대답', '여러 번 조른 끝에 나온 “알았어”']], { k: 2, hard: [[], ['아무 말 없이 고개만 숙임']], d: 0.35 }),
            BOARDQ('성립 안 한 사례를 무너진 조건 바구니에 나누세요.', ['자유', '분명함', '대등함', '철회 가능'], [['여러 번 조른 끝에 나온 “알았어”'], ['의식이 흐린 상태에서 웅얼거린 대답'], ['성적을 매기는 사람이 한 요청에 “네”라고 함'], ['“어제 된다고 했잖아”라며 바꾼 마음을 무시함']], { k: 1, d: 0.35 }),
            BOARDQ('동의를 확인하는 행동과 확인이 아닌 행동을 나누세요.', ['동의 확인', '확인이 아님'], [['“싫으면 말해도 돼”라고 먼저 말한다', '망설이면 멈추고 다시 묻는다'], ['대답이 없으니 괜찮다고 여긴다', '“선배 말 들어야지”라며 밀어붙인다']], { k: 1, d: 0.3, more: { conclude: '동의는 자유롭고, 분명하고, 대등하고, 언제든 철회할 수 있을 때 성립해요. 거절하지 않은 것은 동의가 아니고, 힘의 차이는 거절을 어렵게 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '판정이 엇갈릴 수 있는 가상 사례 하나를 쓰고, 네 조건으로 판정해 보세요.' }] },
        notes: '사례는 가상이며 성적 장면을 묘사하지 않는다(요청·대답만 다룸). 학생 자신의 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.workplace-dilemma', type: 'activity', title: '아르바이트 매장의 갈림길',
        method: '아르바이트 장면 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 추적하고 근거를 고른다.', challenge: '다른 끝도 가 보고, 동료가 할 수 있는 행동을 활동지에 덧붙인다.' },
        activity: {
          title: '수아의 주말', tool: 'dilemma',
          teacher: '“가상 인물 수아는 아르바이트 매장 관리자가 자꾸 어깨를 주무르고, ‘계속 일하고 싶으면 예민하게 굴지 마’라는 말을 들어요. 수아라면 어떻게 할까요?” 장면마다 “이 말에 담긴 힘은 무엇인가요?”라고 묻는다. ‘피하지 않았으니 괜찮다는 뜻’ 카드를 고른 학생에게 “일자리가 걸린 자리에서 피하지 못한 것을 동의라고 할 수 있을까요?”라고 되묻는다. 참기·그만두기도 나를 지키려는 선택일 수 있지만, 기록하고 알리면 나와 다른 사람을 함께 지킬 수 있다는 점을 짚는다.',
          task: '수아의 갈림길을 따라가며 위력에 맞서는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('수아의 입장에서 나와 다른 사람을 함께 지키는 길을 끝까지 고르고 근거를 고르세요.', SUA, [['record', 'agency', 'witness']], SUA_R, ['silence', 'record', 'ally'], { d: 0.4 }),
            DILQ('‘참고 아무 말 하지 않는다’로 시작한 길에서 도움을 여는 길을 고르고 근거를 고르세요.', { text: SUA.text, who: SUA.who, motif: SUA.motif, choices: SUA.choices.filter((c) => c.id !== 'record') }, [['endure', 'tell']], SUA_R, ['silence', 'record'], { d: 0.35 }),
            EXPLOREQ('‘바로 그만둔다’ 길도 끝까지 가 보고 결과를 견주세요.', SUA, SUA_R, ['그만둔 길의 끝을 확인했다', '두 길에서 수아와 다른 직원에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '지위를 이용한 원치 않는 신체 접촉은 위력에 의한 성희롱·성폭력이 될 수 있어요. 거절하지 못한 것은 동의가 아니고, 기록과 곁의 지지, 믿을 어른·기관이 침묵을 깨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '같은 매장의 동료라면 수아를 위해 할 수 있는 행동 하나를 쓰세요.' }] },
        notes: '장면은 가상이며 신체 접촉은 ‘어깨를 주무른다’ 수준으로만 쓴다. 청소년 아르바이트 고충은 학교 취업 지원 담당·지원 기관과 함께 안내한다(번호는 학교 확인).',
      }),
      M({
        id: 'activity.structure-essay', type: 'activity', title: '위력 구조 분석 글',
        method: '위력 구조 분석 글과 예방 제안', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문단마다 틀(구조 → 사례 → 제안)을 보고 쓴다.', base: '구조 분석 → 가상 사례 → 예방 제안 → 예방교육 취지 잇기 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 반대 관점(개인 책임론)을 반박한다.' },
        activity: {
          title: '“힘의 차이 속 침묵은 동의가 아니다”', tool: 'rubric-writing',
          teacher: '“‘힘의 차이가 있을 때 침묵은 동의가 아니다’를 주제로 분석 글을 써요. 구조, 사례, 예방 제안의 세 문단이 들어가야 해요.” 먼저 구조 문단에서 힘이 어디서 나오는지 쓰게 한다. “싫으면 확실히 거절했어야 한다”고 쓴 학생에게 “거절하면 불이익이 오는 자리라면, 거절의 책임을 약한 쪽에 두는 것이 공정할까요?”라고 묻는다. 성폭력방지법이 학교에 예방교육을 두게 한 취지(침묵을 깨고 미리 막기)와 이어 쓰게 한다.',
          task: '위력 구조를 분석하고 예방을 제안하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('구조 문단: 힘의 차이가 거절을 어렵게 만드는 까닭을 쓰세요.', '나이·지위·대가·의존 가운데 둘 이상을 들어, 힘의 차이가 왜 거절을 어렵게 만드는지 쓰세요.', ['힘의 근거를 둘 이상 들었다', '거절이 어려운 까닭을 구조로 설명했다', '피해자를 탓하지 않았다'], { min: 60, max: 400, sent: [2, 4], must: [['지위', '나이', '대가', '의존']], starter: '힘의 차이는 ~에서 나온다. 그래서 ~', d: 0.4 }),
            RWQ('사례 문단: 가상 사례 하나로 구조를 보여 주세요.', '오늘 다룬 가상 사례(수아 등) 하나로, 침묵이 동의가 아닌 까닭을 보여 주세요.', ['가상 사례임을 밝혔다', '침묵이 동의가 아닌 까닭을 썼다', '실제 사람을 떠올리게 하지 않았다'], { min: 60, max: 400, sent: [2, 4], must: [['가상']], starter: '가상 사례에서 ~는 ~ 때문에 말하지 못했다.', d: 0.4 }),
            RWQ('제안 문단: 침묵을 깨는 예방 제안 두 가지를 쓰세요.', '학교·일터가 할 수 있는 예방 제안 두 가지를 쓰세요(익명 알림 창구·예방교육 등).', ['제안이 두 가지다', '제도·구조를 바꾸는 제안이다', '알린 사람의 보호를 다루었다'], { min: 60, max: 400, sent: [2, 4], must: [['제안']], starter: '첫째, ~을 제안한다. 둘째, ~', plus: '‘개인이 조심하면 된다’는 개인 책임론을 반박했다', d: 0.45 }),
            RWQ('예방교육의 취지와 이어 마무리하세요.', '성폭력방지법이 학교에 해마다 예방교육을 두게 한 취지와 내 제안을 이어 쓰세요.', ['예방교육의 취지를 썼다', '내 제안과 이었다', '침묵을 깨는 것이 목표라고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['예방교육']], plus: '알리지 못한 사람을 탓하지 않는 문장으로 끝냈다', d: 0.4, more: { conclude: '힘의 차이가 있는 곳에서 침묵은 동의가 아니에요. 그래서 개인의 용기보다 침묵을 깨는 제도와 예방교육이 필요해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 글을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['구조 분석', ''], ['피해자 탓하지 않음', ''], ['제도 제안', ''], ['예방교육 취지 연결', '']] }, { type: 'short', prompt: '내 제안 가운데 우리 학교에 가장 먼저 필요한 것과 그 까닭을 쓰세요.' }] },
        notes: '법은 근거 파일에 있는 ‘성폭력방지법 제5조(예방교육)’만 쓰고, ‘위력’의 법적 요건·처벌은 쓰지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.ally-words', type: 'wrap', title: '조력자가 할 말',
        method: '조력자가 할 말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '조력하는 말만 고른다.', base: '조력하는 말을 고르고, 탓하는 말 하나를 고쳐 쓴다.', challenge: '말 다음에 할 행동 하나를 덧붙인다.' },
        wrap: {
          teacher: '“친구가 지위가 높은 사람에게 불편한 일을 겪었다고 털어놓으면, 조력자는 무엇이라고 말할까요?” 카드 가운데 조력하는 말을 고르게 한다. ‘왜 바로 말 안 했어?’를 고른 학생에게 “힘의 차이가 있는 자리에서 바로 말하기 쉬웠을까요? 그 질문을 들은 친구는 어떤 마음일까요?”라고 되묻는다. 쉬움 반은 고르기만, 도전 반은 다음 행동까지 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '조력하는 말', cards: [{ id: 'record', text: '“날짜랑 한 말을 같이 적어 두자”' }, { id: 'go', text: '“같이 상담실 가 줄게”' }, { id: 'believe', text: '“네 말 믿어. 네 잘못이 아니야”' }, { id: 'why', text: '“왜 바로 말 안 했어?”' }, { id: 'small', text: '“그 정도는 참을 만하지 않아?”' }, { id: 'quit', text: '“그냥 네가 그만두면 되잖아”' }] }, prompt: '조력자가 할 말만 고르세요.', target: { pick: ['record', 'go', 'believe'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“거절하지 않았으면 동의한 것이다”에 대한 바른 말은?', options: ['맞다', '힘의 차이 속에서 거절하지 못한 것은 동의가 아니다', '어른 사이에서만 맞는 말이다'], answer: 1, difficulty: 0.2, explain: '동의는 자유롭고 대등할 때 성립해요.' },
            { type: 'short', prompt: '“왜 바로 말 안 했어?”를 조력하는 말로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '지위·힘의 차이와 동의',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '힘의 차이가 있을 때 ___은 동의가 아니다.', answer: '침묵' },
            { type: 'short', prompt: '조력하는 말과 그다음 할 행동을 한 줄씩 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 침묵 · 기록 · 대등', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '불편한 일은 날짜와 한 말을 ___해 둔다.', answer: '기록' }] },
        },
      }),
      M({
        id: 'wrap.route-steps', type: 'wrap', title: '알리기 세 단계',
        method: '알리기 세 단계 점검', tool: 'timer', minutes: 7,
        levels: { easy: '세 단계 차례만 놓는다.', base: '차례를 놓고, 3분 동안 단계별 첫 문장을 활동지에 쓴다.', challenge: '단계마다 장애물과 해결을 함께 쓴다.' },
        wrap: {
          teacher: '“불편한 일을 알리는 세 단계 — 기록, 믿을 어른, 지원 기관 — 를 차례로 놓고, 3분 동안 단계마다 첫 문장을 써 봐요.” 차례를 놓은 뒤 타이머를 3분으로 맞추게 한다. 지원 기관을 맨 앞에 놓은 학생에게 “기록이 있으면 기관에서 상담할 때 무엇이 쉬워질까요?”라고 묻는다. 지원 기관 번호는 학교가 확인한 것을 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '알리기 세 단계', cards: ['지원 기관에 상담한다', '날짜·시간·한 말을 기록한다', '믿을 어른에게 알린다'] }, prompt: '알리기 세 단계를 차례로 놓으세요.', target: { order: ['날짜·시간·한 말을 기록한다', '믿을 어른에게 알린다', '지원 기관에 상담한다'] }, difficulty: 0.2 },
            { type: 'tool', tool: 'timer', options: { title: '단계별 첫 문장 쓰기', timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 } }, prompt: '단계별 첫 문장을 쓸 시간을 1번, 3분으로 맞추세요.', target: { plan: { work: 3, rounds: 1 } }, difficulty: 0.15 },
            { type: 'short', prompt: `믿을 어른에게 처음 꺼낼 첫 문장을 쓰세요(지원 기관: ${HELPNO}).` },
            MOOD,
          ],
        },
        worksheet: {
          title: '알리기 세 단계',
          items: [
            { type: 'table', prompt: '단계마다 첫 문장과 장애물을 쓰세요.', columns: ['단계', '첫 문장', '장애물과 해결'], cells: [['기록', '', ''], ['믿을 어른', '', ''], ['지원 기관', HELPNO, '']] },
            { type: 'short', prompt: '세 단계 가운데 가장 어려울 것 같은 단계와 그 까닭을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 생성형 AI와 디지털 성범죄 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-ai-image', [11]);
    const THREE = [['AI로 상상 속 풍경을 만든다', '내 얼굴로 만든 캐릭터를 내 계정에 올린다', '동의한 친구와 함께 만든 그림을 둘이 나눈다'], ['반 친구 얼굴로 웃긴 밈을 만들어 단톡방에 올린다', '연예인 얼굴로 성적 합성물을 만든다', '친구 사진을 동의 없이 다른 몸에 합성한다']];
    const TYPES = [['합성물', 45], ['유포', 30], ['협박', 15], ['불법 촬영', 10]];
    const TYPES_T = '디지털 성범죄 상담 유형 비율(가상 자료, %)';
    const TAEMIN = { text: '가상 인물 태민에게 친구 준서가 “반에서 하린이 얼굴로 재밌는 합성 하나 만들자. 앱으로 금방 돼”라고 한다. 준서는 몸을 바꾸는 합성을 보여 준다. 너는 태민의 입장에서 고른다.', who: '태민', motif: 'cloud', choices: [
      { id: 'refuse', text: '“그건 장난이 아니라 범죄야. 만들지 말자”고 분명히 말한다', result: '준서가 “농담인데”라며 머쓱해한다.', impact: [{ who: '하린', text: '피해를 막는다', tone: 1 }],
        next: { text: '준서가 “다른 애들은 벌써 만들어 돌렸던데”라고 한다.', who: '태민', choices: [
          { id: 'tell', text: '퍼뜨리지 않고, 어디서 돌았는지만 적어 담임 선생님께 알린다', result: '선생님이 빠르게 삭제와 보호 조치를 시작한다.', impact: [{ who: '하린', text: '보호받는다', tone: 1 }, { who: '준서', text: '멈출 기회를 얻는다', tone: 0 }],
            next: { text: '하린이 이 일을 알고 크게 놀라 있다.', who: '태민', choices: [
              { id: 'support', text: '“네 잘못이 아니야. 필요하면 같이 상담실 가자”고 말한다', result: '하린이 혼자가 아니라고 느낀다.', impact: [{ who: '하린', text: '지지를 받는다', tone: 1 }], ending: '만들지 않고, 퍼뜨리지 않고, 알리고, 피해자를 지지하는 것이 주변인의 몫이다.' },
              { id: 'detail', text: '“그 사진 어떻게 생겼는지 봤어?”라고 묻는다', result: '하린이 더 괴로워한다.', impact: [{ who: '하린', text: '2차 피해를 입는다', tone: -1 }], ending: '피해자에게 합성물의 내용을 묻는 것은 2차 피해가 된다.' }] } },
          { id: 'ignore', text: '“나랑 상관없지” 하고 넘긴다', result: '합성물이 다른 반까지 퍼진다.', impact: [{ who: '하린', text: '피해가 커진다', tone: -1 }], ending: '알고도 넘기면 퍼짐을 멈출 기회를 놓친다.' }] } },
      { id: 'watch', text: '만들지는 않고 준서가 만드는 걸 옆에서 본다', result: '준서가 완성본을 단톡방에 올린다.', impact: [{ who: '하린', text: '피해를 입는다', tone: -1 }],
        next: { text: '단톡방에 웃음 이모티콘이 이어진다.', who: '태민', choices: [
          { id: 'stopnow', text: '“이거 지워. 범죄야”라고 쓰고 선생님께 알린다', result: '늦었지만 삭제와 보호가 시작된다.', impact: [{ who: '하린', text: '늦게라도 보호받는다', tone: 0 }], ending: '보기만 하던 사람도 멈추고 알릴 수 있다.' },
          { id: 'laugh', text: '웃음 이모티콘을 단다', result: '합성물이 더 빠르게 퍼진다.', impact: [{ who: '하린', text: '피해가 커진다', tone: -1 }], ending: '반응하는 것도 퍼짐을 키우는 가담이 된다.' }] } },
      { id: 'make', text: '재밌을 것 같아 함께 만든다', result: '합성물이 퍼지고 하린이 학교에 오지 못한다.', impact: [{ who: '하린', text: '깊은 피해를 입는다', tone: -1 }, { who: '태민', text: '디지털 성범죄 제작에 가담한다', tone: -1 }], ending: 'AI로 만든 가짜여도 피해는 진짜다. 동의 없는 성적 합성물 제작은 디지털 성범죄다.' }] };
    const TAEMIN_R = [{ id: 'real', text: 'AI로 만든 가짜여도 피해는 진짜다' }, { id: 'consent', text: '실제 사람의 이미지는 동의·맥락·공유 범위로 판단한다' }, { id: 'act', text: '만들지 않고 퍼뜨리지 않고 알린다' },
      { id: 'fake', text: '가짜니까 피해가 없다', why: '합성물 속 사람은 실제로 존엄과 인격을 다쳐요.' }, { id: 'joke', text: '장난으로 만든 것은 괜찮다', why: '의도가 장난이어도 동의 없는 성적 합성물은 디지털 성범죄예요.' }];
    const FLOW = ['퍼뜨리지 않는다', '주소·화면을 기록한다', '피해자에게 알리고 지지한다', `학교·지원 기관에 신고한다 ${HELPNO}`, '삭제를 요청한다'];

    MODS.push(
      M({
        id: 'intro.three-q', type: 'intro', title: '세 질문으로 AI 이미지 판정',
        method: '세 질문으로 이미지 판정', tool: 'sortboard', minutes: 7,
        levels: { easy: '사례 셋을 함께 세 질문으로 판정한다.', base: '사례 여섯을 ‘통과’·‘통과 못 함’ 바구니에 나눈다.', challenge: '판단이 갈리는 사례(내 얼굴 캐릭터를 남이 쓰는 경우 등)를 설명한다.' },
        intro: {
          teacher: '“생성형 AI로 이미지를 만들 때 세 질문을 던져요 — 동의가 있나, 맥락이 맞나, 공유 범위는 어디까지인가.” 시연 단추로 가상 사례가 두 바구니에 나뉘는 모습을 보여 준다. “웃긴 밈은 그냥 장난이잖아요”라는 말이 나오면 “그 친구가 동의했나요? 단톡방에 올라가는 것까지 괜찮다고 했나요?”라고 되묻는다. 실제 사람의 이미지는 세 질문을 모두 통과할 때만 만들고 나눈다는 점을 짚는다.',
          student: 'AI 이미지 가상 사례를 ‘동의 있나·맥락 맞나·공유 범위는’ 세 질문으로 따져 통과와 통과 못 함으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['세 질문 통과', '통과 못 함'], cards: mix(THREE) }, sequence: [{ sort: { '세 질문 통과': THREE[0], '통과 못 함': THREE[1] } }] },
          art: { draw: 'a paper laptop generating an image, three paper question-mark gates in front of it labeled with small icons (a handshake, a frame, a share arrow), some image cards passing the gates and some stopped', banner: '만들기 전에 세 질문', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 말로만 다루고 실제 합성 이미지를 보여 주지 않는다. 실제 연예인 이름을 쓰지 않는다.',
      }),
      M({
        id: 'intro.report-trend', type: 'intro', title: '디지털 성범죄 상담 유형 자료',
        method: '디지털 성범죄 상담 유형 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '가장 큰 칸(합성물)만 함께 읽는다.', base: '두 칸을 견주고, 합성물이 늘어난 배경을 고른다.', challenge: '이 자료의 출처·조사 방식의 한계를 짚어 말한다.' },
        intro: {
          teacher: '“가상 상담 유형 자료예요. 합성물이 45%로 가장 커요. 왜 합성물 상담이 많아졌을까요?” 시연 단추로 ‘누구나 쉽게 합성할 수 있는 도구가 퍼졌다’ 보기가 골라지는 모습을 보여 준다. “상담이 많으니 피해자가 많아진 거네요”라는 말이 나오면 “상담 건수는 일어난 일 전체일까요, 알린 일일까요?”라고 되묻는다. 도구가 쉬워질수록 동의를 따지는 책임이 커진다는 점을 짚는다.',
          student: '디지털 성범죄 상담 유형을 나타낸 가상 원그래프를 읽고, 가장 큰 칸과 그것이 늘어난 배경을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: TYPES_T, unit: '%', data: TYPES, question: '합성물 상담이 많아진 배경으로 알맞은 것은?', choices: ['누구나 쉽게 합성할 수 있는 도구가 퍼졌다', '합성물은 피해가 없다', '불법 촬영이 사라졌다', '상담은 늘 정확한 전체 수다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart on a board with the largest slice shaped like a puzzle piece face mask, a paper phone and laptop beside it with sparkles of AI generation, a paper student holding a notepad', banner: '왜 합성물이 늘었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 실제 통계를 쓰려면 여성가족부·한국여성인권진흥원 디지털 성범죄 피해자 지원 실적 자료의 기준·기간을 함께 보인다.',
      }),

      M({
        id: 'activity.creator-dilemma', type: 'activity', title: '친구의 합성 제안',
        method: '친구의 합성 제안 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 피해자·주변인·제작자에게 이어지는 결과를 보고 근거를 고른다.', challenge: '다른 끝도 가 보고, 이미 퍼진 뒤 할 수 있는 행동을 활동지에 덧붙인다.' },
        activity: {
          title: '태민의 선택', tool: 'dilemma',
          teacher: '“가상 인물 태민에게 친구가 반 친구 얼굴로 몸을 바꾸는 합성을 하자고 해요. 태민이라면 어떻게 할까요?” 장면마다 “이 선택은 하린, 준서, 태민에게 각각 어떤 결과를 남길까요?”라고 묻는다. ‘가짜니까 피해가 없다’ 카드를 고른 학생에게 “합성물 속 얼굴의 주인이 그걸 본다면, 그 마음도 가짜일까요?”라고 되묻는다. 동의 없는 성적 합성물은 디지털 성범죄이고, 만들지 않고 퍼뜨리지 않고 알리고 피해자를 지지한다는 점을 짚는다.',
          task: '태민의 갈림길을 따라가며 세 사람에게 이어지는 결과를 보고, 피해를 막는 길과 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('태민의 입장에서 피해를 막는 길을 끝까지 고르고 근거를 고르세요.', TAEMIN, [['refuse', 'tell', 'support']], TAEMIN_R, ['real', 'consent', 'act'], { d: 0.4 }),
            DILQ('‘옆에서 보기만 한다’로 시작한 길에서 피해를 줄이는 길을 고르고 근거를 고르세요.', { text: TAEMIN.text, who: TAEMIN.who, motif: TAEMIN.motif, choices: TAEMIN.choices.filter((c) => c.id !== 'refuse') }, [['watch', 'stopnow']], TAEMIN_R, ['real', 'act'], { d: 0.35 }),
            EXPLOREQ('‘함께 만든다’ 길도 끝까지 가 보고 결과를 견주세요.', TAEMIN, TAEMIN_R, ['함께 만든 길의 끝을 확인했다', '두 길에서 하린과 태민에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: 'AI로 만든 가짜여도 피해는 진짜예요. 동의 없는 성적 합성물은 만들지도, 퍼뜨리지도 않고, 발견하면 알리고 피해자를 지지해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '합성물이 이미 퍼진 뒤 주변인이 할 수 있는 행동 두 가지를 쓰세요.' }] },
        notes: '합성물은 말로만 다루고 보여 주지 않는다. 학생에게 본 적 있는 합성물을 말하게 하지 않는다. 처벌 내용은 쓰지 않는다.',
      }),
      M({
        id: 'activity.response-flow', type: 'activity', title: '발견했을 때 대응 차례',
        method: '발견했을 때 대응 순서 짜기', tool: 'timeline', minutes: 17,
        levels: { easy: '앞 네 단계만 차례로 놓는다.', base: '다섯 단계를 차례로 놓고, 단계마다 주의점을 짝짓고, 하지 않을 행동을 걸러 낸다.', challenge: '함정 카드가 섞인 판에서 놓고, 피해자가 신고를 원치 않을 때의 대안을 활동지에 쓴다.' },
        activity: {
          title: '합성물 발견 대응', tool: 'timeline',
          teacher: '“단톡방에서 반 친구의 성적 합성물을 발견했어요(가상). 무엇부터 할까요? 다섯 단계를 차례로 놓아 봐요.” 카드를 놓을 때마다 “이 단계에서 조심할 것은 무엇일까요?”라고 묻는다. ‘증거로 내 휴대폰에 저장한다’를 넣으려는 학생에게 “저장한 파일이 또 퍼질 위험은 없을까요? 주소와 화면 정보만 적어도 신고할 수 있어요”라고 되묻는다. 신고 번호는 학교가 확인한 것을 쓴다는 점을 짚는다.',
          task: '합성물을 발견했을 때 대응 단계를 차례로 놓고, 단계별 주의점을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('합성물을 발견했을 때 대응 단계를 차례로 놓으세요.', FLOW, { k: 4, traps: ['증거로 내 휴대폰에 저장해 둔다'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 주의점을 짝지으세요.', [['주소·화면을 기록한다', '파일은 저장하지 않고 주소·시간만 적는다'], ['피해자에게 알리고 지지한다', '내용을 묻지 않고 “네 잘못이 아니야”라고 말한다'], ['삭제를 요청한다', '혼자 하지 않고 학교·지원 기관과 함께 한다']], { k: 2, d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('발견했을 때 하지 않을 행동만 고르세요.', ['다른 친구에게 “이거 봤어?” 하고 보여 준다', '만든 사람을 단톡방에서 공개 저격한다'], ['주소와 시간을 적는다', '믿을 어른에게 알린다'], { d: 0.3, opt: { basket: '하지 않을 행동', axis: ['먼저', '나중'] }, more: { conclude: '발견하면 퍼뜨리지 않고, 기록하고, 피해자를 지지하고, 학교·지원 기관에 신고해 삭제를 요청해요. 파일은 저장하지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '피해자가 신고를 원치 않을 때 할 수 있는 대안 하나를 쓰세요.' }] },
        notes: '신고·삭제 지원 기관 이름·번호는 학교가 확인해 채운다. 학생이 증거 파일을 저장·전달하지 않게 거듭 안내한다.',
      }),
      M({
        id: 'activity.ai-ethics-code', type: 'activity', title: 'AI 이미지 윤리 수칙 제안서',
        method: '우리 학교 AI 이미지 윤리 수칙 제안서', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀을 보고 수칙 셋부터 쓴다.', base: '문제 → 수칙 다섯 → 위반 시 절차 → 피해 지원 차례로 제안서를 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 수칙이 표현의 자유를 지나치게 막지 않는지 검토 문단을 쓴다.' },
        activity: {
          title: '학생회 수칙 제안서', tool: 'rubric-writing',
          teacher: '“우리 학교 AI 이미지 윤리 수칙을 학생회에 제안해요. 문제, 수칙 다섯, 어겼을 때 절차, 피해 지원이 들어가야 해요.” 수칙은 ‘하지 마’만이 아니라 ‘이렇게 하자’로도 쓰게 한다. “AI 이미지는 아예 금지하자”라고 쓴 학생에게 “풍경 그림이나 내 캐릭터처럼 괜찮은 쓰임까지 막아야 할까요? 무엇을 기준으로 가를까요?”라고 묻는다. 좋은 수칙은 동의 원칙을 중심에 두고, 실천할 수 있고, 피해자를 먼저 보호한다는 점을 짚는다.',
          task: '우리 학교 AI 이미지 윤리 수칙 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 ‘문제’를 2문장으로 쓰세요.', 'AI 합성 도구가 쉬워지며 학교에서 생길 수 있는 문제를 쓰세요.', ['문제를 분명히 썼다', '누가 피해를 입는지 밝혔다', '특정 학생을 떠올리게 하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['AI', '합성']], starter: '요즘 AI 합성 도구가 쉬워지면서 ~', d: 0.35 }),
            RWQ('수칙 다섯 가지를 쓰세요.', '동의·맥락·공유 범위를 바탕으로 우리 학교 AI 이미지 수칙 다섯 가지를 쓰세요.', ['수칙이 다섯 가지다', '동의 원칙이 들어 있다', '‘이렇게 하자’ 꼴의 수칙도 있다', '실천할 수 있다'], { min: 80, max: 500, sent: [5, 6], must: [['동의']], starter: '1. 실제 사람의 이미지는 ~ 2. ~', plus: '수칙이 표현의 자유를 지나치게 막지 않는지 검토했다', d: 0.45 }),
            RWQ('수칙을 어겼을 때의 절차를 쓰세요.', '수칙을 어긴 이미지가 발견되었을 때 학교가 밟을 절차를 차례로 쓰세요.', ['피해자 보호가 첫 단계다', '삭제와 신고를 다루었다', '2차 피해를 막는다'], { min: 50, max: 350, sent: [2, 4], must: [['삭제'], ['보호']], starter: '발견되면 먼저 ~. 그다음 ~', d: 0.4 }),
            RWQ('피해 지원과 교육 연계를 쓰세요.', '피해 학생을 지원할 방법과 이 수칙을 교육으로 이을 방법을 쓰세요.', ['피해 지원을 구체적으로 썼다', '교육과 이었다', '피해자를 탓하지 않는다'], { min: 50, max: 350, sent: [2, 4], must: [['지원'], ['교육']], plus: '지원 기관 번호 자리를 학교 확인 번호로 남겼다', d: 0.4, more: { conclude: '좋은 AI 이미지 수칙은 동의 원칙을 중심에 두고, 실천할 수 있으며, 피해자를 먼저 보호하고, 교육으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 제안서를 기준표로 점검하세요.', columns: ['기준', '내 제안서에서 찾은 곳'], cells: [['동의 원칙', ''], ['실천 가능성', ''], ['피해자 보호', ''], ['교육 연계', '']] }, { type: 'short', prompt: '내 수칙 가운데 친구들이 가장 지키기 어려울 것과 그 까닭을 쓰세요.' }] },
        notes: '처벌 내용은 쓰지 않는다. 표현의 자유 검토 문단은 찬반 정답을 정하지 않고 근거를 따지게 한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.pledge-card', type: 'wrap', title: '만들지·퍼뜨리지 않기 서약',
        method: '만들지·퍼뜨리지 않기 서약 문장', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 두 빈칸을 함께 채우고, 나머지 하나를 채운다.', base: '빈칸 셋을 카드로 채워 서약 문장을 완성한다.', challenge: '서약을 친구에게 권하는 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '“오늘의 서약 문장을 완성해요. 실제 사람의 이미지를 만들고 나눌 때 무엇을 지킬까요?” 빈칸을 채운 뒤 두세 명에게 읽게 한다. ‘재미’ 카드를 넣은 학생에게 “재미가 기준이면 사진 속 사람의 마음은 어디에 있을까요?”라고 되묻는다. 서약은 이름 없이 활동지에만 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '나는 실제 사람의 이미지를 ___ 없이 만들거나 바꾸지 않는다.' }, { id: 'f2', label: '합성물도 사람의 ___을 다치게 하므로 장난이 아니다.' }, { id: 'f3', label: '동의 없는 합성물을 발견하면 퍼뜨리지 않고 ___.' }], cards: ['동의', '인격', '알린다', '재미', '저장한다'] }, prompt: '서약 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '동의', f2: '인격', f3: '알린다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“AI가 만든 가짜라 실제 피해가 없다”에 대한 바른 말은?', options: ['맞다, 가짜는 피해가 없다', '얼굴의 주인은 실제로 존엄과 인격을 다친다', '유명인에게만 피해가 있다'], answer: 1, difficulty: 0.2, explain: 'AI로 만든 가짜여도 피해는 진짜예요.' },
            { type: 'short', prompt: '내 서약을 친구에게 권하는 말로 바꿔 한 문장 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '생성형 AI와 디지털 성범죄',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '실제 사람의 이미지는 동의·맥락·___ 범위로 판단한다.', answer: '공유' },
            { type: 'short', prompt: '오늘의 서약 문장을 내 말로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 공유 · 동의 · 인격', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '실제 사람의 이미지는 ___ 없이 바꾸지 않는다.', answer: '동의' }] },
        },
      }),
      M({
        id: 'wrap.poster-mini', type: 'wrap', title: '한 장 경고 배너',
        method: '한 장 경고 배너 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '배너 틀만 조각으로 꾸미고, 문구는 보기 셋 가운데 고른다.', base: '배너 틀과 강조 조각을 꾸미고, 문구를 직접 써서 배치를 점검한다.', challenge: '배너를 볼 신입생에 맞춰 말투와 배치를 점검한다.' },
        wrap: {
          teacher: '“‘장난이 아니라 범죄’ 배너를 빠르게 꾸며요. 판에는 틀과 강조를, 문구는 활동지에 써요.” 조각을 붙인 뒤 점검 칸을 표시하게 한다. 실제 사람 얼굴을 그려 넣으려는 학생에게 “경고 배너가 또 다른 사람의 이미지를 쓰면 안 되겠죠?”라고 말한다. 쉬움 반 문구 보기: “장난이 아니라 범죄예요 / 만들지 않아요 / 보면 알려요”.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'triangle', 'circle', 'star'], colors: ['빨강', '노랑', '검정', '하양', '파랑'], maxPieces: 10 }, prompt: '경고 배너의 틀과 강조 조각을 붙이고 점검하세요.', target: { selfCheck: ['배너의 띠(틀)를 만들었다', '경고가 눈에 띄게 강조했다', '실제 사람 얼굴이나 사진을 쓰지 않았다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '배너 문구로 가장 알맞은 것은?', options: ['“걸리면 끝장!”', '“합성은 장난이 아니라 범죄예요. 보면 알려요”', '“AI 합성 재밌게 해 봐요”'], answer: 1, difficulty: 0.15, explain: '겁주기보다 무엇이 문제이고 무엇을 할지 알려 줘요.' },
            { type: 'short', prompt: '내 배너 문구를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '경고 배너',
          items: [
            { type: 'short', prompt: '배너 문구와 그 문구를 고른 까닭을 쓰세요.' },
            { type: 'short', prompt: '이 배너를 학교 어디에 붙이면 좋을지 쓰세요.' },
          ],
        },
        notes: '조각 판에는 글자를 쓸 수 없어 문구는 활동지에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 13. 숏폼·팬덤 속 대상화와 미디어 고정관념 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-objectification', [11]);
    const THUMB = { good: [{ id: 't1', text: '썸네일 1: 출연자 다리만 크게 잘라 “각선미 미쳤다”' }, { id: 't2', text: '썸네일 2: “얼굴 순위 1위부터 10위까지”' }, { id: 't3', text: '썸네일 3: 몸매를 강조한 정지 화면에 “이 몸 실화?”' }], bad: [{ id: 't4', text: '썸네일 4: “안무 연습 12시간 비하인드”' }, { id: 't5', text: '썸네일 5: “라이브 고음 구간 모음”' }, { id: 't6', text: '썸네일 6: “멤버들이 직접 만든 응원법”' }] };
    const COMM = [['실력 칭찬', 64], ['응원', 58], ['외모 평가', 52], ['성적 언급', 26]];
    const COMM_T = '가상 아이돌 영상 댓글 200개의 유형(가상 자료, 개)';
    const P = { hot: 'star:rose', skill: 'circle:sky', daily: 'square:mint' };

    MODS.push(
      M({
        id: 'intro.feed-sample', type: 'intro', title: '가상 피드 썸네일 분석',
        method: '가상 피드 썸네일 분석', tool: 'emotion', minutes: 7,
        levels: { easy: '썸네일 셋(1·2·4)만 함께 보고 대상화 표시를 고른다.', base: '썸네일 여섯 가운데 몸 부분 강조·외모 평가 문구가 있는 것을 고른다.', challenge: '그런 썸네일을 만든 쪽의 의도를 추측해 말한다.' },
        intro: {
          teacher: '“가상 숏폼 피드 썸네일 설명 여섯 개예요. 보는 순간 어떤 느낌이 드나요? 그리고 사람을 몸이나 외모 점수로만 보이게 만드는 썸네일은 어느 것일까요?” 시연 단추로 대상화 썸네일이 바구니에 담기는 모습을 보여 준다. “좋아서 하는 말인데 뭐가 문제예요?”라는 말이 나오면 “다리만 잘라 보여 주는 썸네일에서, 그 사람의 노력이나 생각은 어디에 있나요?”라고 되묻는다. 사람을 한 부분이나 점수로만 보이게 하는 것이 대상화라는 점을 짚는다.',
          student: '가상 숏폼 썸네일 설명 여섯 개를 읽고 첫 느낌을 떠올린 뒤, 몸 한 부분을 강조하거나 외모를 평가하는 썸네일을 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '대상화 썸네일', cards: mix([THUMB.good, THUMB.bad]) }, sequence: [{ pick: THUMB.good.map((c) => c.id) }] },
          art: { draw: 'a paper phone with a vertical feed of six small video thumbnail cards, some thumbnails cropped oddly with a paper scissors icon, a paper magnifying glass hovering over the feed', banner: '썸네일은 무엇을 보여 줄까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '썸네일은 말로 쓴 가상 예시다. 실제 아이돌·유튜버 이름이나 이미지를 쓰지 않는다. 학생의 외모를 평가하는 말이 나오지 않게 한다.',
      }),
      M({
        id: 'intro.comment-data', type: 'intro', title: '댓글 유형 자료 읽기',
        method: '댓글 유형 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '가장 큰 막대만 함께 읽는다.', base: '외모 평가·성적 언급 댓글이 차지하는 몫을 견주어 해석을 고른다.', challenge: '이 자료가 보여 주지 않는 것(출연자 성별별 차이 등)을 말한다.' },
        intro: {
          teacher: '“가상 아이돌 영상 댓글 200개를 유형별로 나눴어요. 실력 칭찬이 가장 많지만, 외모 평가와 성적 언급을 더하면 몇 개일까요?” 시연 단추로 해석 보기가 골라지는 모습을 보여 준다. “칭찬이 제일 많으니 괜찮은 거죠”라는 말이 나오면 “200개 가운데 78개가 외모나 몸 이야기라면, 출연자는 어떤 기분일까요?”라고 되묻는다. 칭찬처럼 보여도 외모 평가와 성적 언급은 사람을 대상으로 만든다는 점을 짚는다.',
          student: '가상 아이돌 영상 댓글을 유형별로 나눈 막대그래프를 읽고, 외모 평가와 성적 언급이 얼마나 되는지 살펴보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: COMM_T, unit: '개', xLabel: '댓글 유형', yLabel: '댓글 수', data: COMM, question: '그래프를 바르게 해석한 것은?', choices: ['외모 평가·성적 언급 댓글도 적지 않다', '실력 칭찬이 많으니 문제가 없다', '성적 언급이 가장 많다', '댓글은 출연자에게 영향이 없다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper video player with a stage and microphone, a stream of paper comment bubbles flowing out in four colors, a paper bar chart building up from the bubbles', banner: '댓글은 무엇을 말할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 실제 댓글을 옮겨 보여 주지 않는다.',
      }),

      M({
        id: 'activity.algorithm-pattern', type: 'activity', title: '추천이 쏠리는 규칙',
        method: '추천이 쏠리는 규칙 찾기', tool: 'pattern', minutes: 17,
        levels: { easy: '시청 기록 줄의 다음 빈칸 하나를 채운다.', base: '빈칸 둘을 채우고, 쏠림 규칙을 고르고, 세 종류가 고르게 되풀이되는 시청 순서를 만든다.', challenge: '규칙을 고른 뒤, 그 규칙이 고정관념을 어떻게 굳히는지 활동지에 쓴다.' },
        activity: {
          title: '시청 기록 줄', tool: 'pattern',
          teacher: '“가상 시청 기록이에요. 빨간 별은 몸을 강조한 자극적인 영상, 파란 동그라미는 실력 영상, 초록 네모는 일상 영상이에요. 다음에 무엇이 추천될까요?” 빈칸을 채운 뒤 규칙을 고르게 한다. “알고리즘은 그냥 내가 좋아하는 걸 보여 주는 거죠”라는 학생에게 “한 번 오래 본 영상이 계속 추천된다면, 내가 고른 걸까요, 고르게 된 걸까요?”라고 묻는다. 추천은 중립이 아니라 많이 본 것을 더 보여 주며 쏠림을 키우고, 내 시청 선택으로 그 줄을 바꿀 수 있다는 점을 짚는다.',
          task: '가상 시청 기록 줄에서 추천이 쏠리는 규칙을 찾고, 규칙을 깨는 시청 순서를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '빨간 별 = 자극적인 몸 강조 영상, 파란 동그라미 = 실력 영상. 가상 시청 기록 줄에서 다음 추천 빈칸을 채우세요.', toolOptions: { mode: 'fill', seq: [P.hot, P.skill, P.hot, P.hot, P.skill, P.hot, P.hot, P.hot, null, null], palette: [P.hot, P.skill, P.daily] }, target: { fill: [P.skill, P.hot] }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 시청 기록 줄에서 다음 추천 빈칸 하나를 채우세요(빨간 별 = 자극적인 영상, 파란 동그라미 = 실력 영상).', toolOptions: { seq: [P.hot, P.skill, P.hot, P.skill, P.hot, P.skill, null] }, target: { fill: [P.hot] } } } },
            { prompt: '이 시청 기록 줄의 규칙으로 가장 알맞은 것을 고르세요.', toolOptions: { mode: 'rule', seq: [P.hot, P.skill, P.hot, P.hot, P.skill, P.hot, P.hot, P.hot], question: '추천 줄의 규칙은?', choices: ['자극적인 영상이 갈수록 더 자주 나온다', '세 종류가 고르게 나온다', '실력 영상이 갈수록 늘어난다'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '세 종류(자극·실력·일상) 영상이 고르게 되풀이되는 시청 순서를 9칸으로 만들어 쏠림을 깨 보세요.', toolOptions: { mode: 'make', palette: [P.hot, P.skill, P.daily], length: 9 }, target: { rule: 'repeat', period: 3, uses: 3 }, difficulty: 0.35, conclude: '추천은 중립이 아니라 많이 본 것을 더 보여 주며 쏠림을 키워요. 쏠림은 고정관념을 굳히고, 내 시청 선택이 그 줄을 바꿀 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자극적인 영상이 계속 추천될 때 고정관념에 생길 수 있는 영향을 한 문장으로 쓰세요.' }] },
        notes: '시청 기록은 가상이며 조각 색·모양으로만 나타낸다. 실제 앱의 추천 방식은 앱마다 다르다는 점을 함께 말해 준다.',
      }),
      M({
        id: 'activity.fan-guide', type: 'activity', title: '존중하는 팬 활동 가이드',
        method: '존중하는 팬 활동 가이드 콜라주', tool: 'collage', minutes: 17,
        levels: { easy: '세 칸 틀만 조각으로 만들고, 문구는 활동지 보기에서 고른다.', base: '세 칸 틀·칸 표시·강조를 조각으로 꾸미고, 칸마다 문구를 직접 써서 구성한다.', challenge: '꾸민 가이드의 문구를 팬덤 커뮤니티 규칙 문장으로 다듬는다.' },
        activity: {
          title: '팬 활동 가이드 한 장', tool: 'collage',
          teacher: '“좋아하는 마음을 존중하는 방식으로 표현하는 팬 활동 가이드를 만들어요. 세 칸 — 존중하는 응원 문구, 하지 않을 행동, 신고할 것.” 판에서 틀을 꾸미고 문구는 활동지에 쓰게 한다. ‘몸매 칭찬도 응원이다’라고 쓰려는 학생에게 “출연자가 그 말을 듣고 싶어 할지, 실력과 노력을 말하는 응원과 무엇이 다를지 생각해 볼까요?”라고 묻는다. 좋아하는 마음과 사람에 대한 존중이 함께 갈 수 있다는 점을 짚는다.',
          task: '존중하는 팬 활동 가이드의 세 칸 틀과 표시를 조각으로 꾸며요.', levels: { easy: { maxPieces: 12 }, base: {}, challenge: {} },
          items: [
            { prompt: '가이드의 세 칸 틀을 네모 조각 3개 이상으로 만드세요.', toolOptions: { shapes: ['square', 'rect', 'heart', 'star'], colors: ['분홍', '보라', '하양', '노랑', '파랑'] }, target: { has: [{ shape: 'square', min: 3 }], selfCheck: ['세 칸(응원·하지 않을 행동·신고)을 정했다', '칸이 한눈에 구분된다'] }, difficulty: 0.2 },
            { prompt: '응원 칸에 하트 조각 2개 이상을 붙여 표시하세요.', toolOptions: { shapes: ['heart', 'star', 'circle', 'square'], colors: ['분홍', '빨강', '노랑', '하양'] }, target: { has: [{ shape: 'heart', min: 2 }], selfCheck: ['응원 문구는 실력과 노력을 말한다', '외모·몸을 평가하는 문구를 넣지 않았다'] }, difficulty: 0.25 },
            { prompt: '하지 않을 행동·신고 칸이 눈에 띄도록 밝은 색과 어두운 색 조각을 맞닿게 붙이세요.', toolOptions: { shapes: ['triangle', 'rect', 'circle'], colors: ['노랑', '하양', '보라', '검정', '분홍'] }, target: { contrast: 'light-dark', selfCheck: ['하지 않을 행동(사생활 쫓기·성적 댓글·합성)을 정했다', '신고할 것을 정했다', '실제 사람 사진을 쓰지 않았다'] }, difficulty: 0.3, conclude: '좋아하는 마음은 사람에 대한 존중과 함께 갈 수 있어요. 실력과 노력을 응원하고, 대상화하는 말과 행동은 하지 않고 신고해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가이드 세 칸의 문구를 쓰세요.', columns: ['칸', '문구'], cells: [['존중하는 응원', ''], ['하지 않을 행동', ''], ['신고할 것', '']] }] },
        notes: '조각 판에는 글자를 쓸 수 없어 문구는 활동지에 쓴다. 쉬움 반 문구 보기: “무대 위 노력에 박수를 / 사생활은 지켜 줘요 / 성적 댓글·합성은 신고해요”. 특정 팬덤을 깎아내리지 않는다.',
      }),
      M({
        id: 'activity.media-review', type: 'activity', title: '게임 캐릭터 설정 비평',
        method: '콘텐츠 하나 비평 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문단마다 틀(장면 → 개념 → 대안)을 보고 쓴다.', base: '근거 장면 → 개념으로 분석 → 대안 제안 → 존중하는 마무리 차례로 비평을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 제작자 입장의 반론을 넣고 답한다.' },
        activity: {
          title: '캐릭터 설정 비평 쓰기', tool: 'rubric-writing',
          teacher: '“가상 게임 설정이에요: 여성 전사 캐릭터는 갑옷이 몸을 거의 가리지 않고, 남성 캐릭터는 늘 근육과 분노로만 그려진다. 이 설정을 대상화·고정관념의 눈으로 비평해 봐요.” 먼저 근거가 되는 설정을 쓰고, 개념(대상화·고정관념)으로 분석하게 한다. “게임이 재밌으면 그만이죠”라는 학생에게 “재미를 지키면서 바꿀 수 있는 설정은 없을까요?”라고 묻는다. 비평은 작품과 설정을 향하고, 그 게임을 좋아하는 사람을 깎아내리지 않는다는 점을 짚는다.',
          task: '가상 게임 캐릭터 설정을 대상화·고정관념의 눈으로 비평하고 대안을 제안해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('비평할 근거 장면(설정)을 2문장으로 쓰세요.', '가상 게임 설정(여성 캐릭터의 노출 갑옷, 남성 캐릭터의 근육·분노 설정)에서 문제가 되는 부분을 쓰세요.', ['설정을 정확히 옮겼다', '두 성별의 설정을 모두 다루었다', '실제 게임 이름을 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['설정', '캐릭터']], d: 0.35 }),
            RWQ('개념을 써서 분석하는 문단을 쓰세요.', '대상화와 고정관념이라는 낱말을 써서, 이 설정이 무엇을 굳히는지 분석하세요.', ['대상화를 바르게 썼다', '고정관념을 바르게 썼다', '두 성별 모두에게 미치는 영향을 썼다'], { min: 60, max: 400, sent: [2, 4], must: [['대상화'], ['고정관념']], starter: '이 설정은 ~라는 점에서 대상화다. 또 ~', d: 0.4 }),
            RWQ('대안 설정을 제안하세요.', '재미는 살리면서 대상화·고정관념을 줄이는 대안 설정 두 가지를 쓰세요.', ['대안이 두 가지다', '재미를 살리는 방법을 썼다', '구체적이다'], { min: 50, max: 350, sent: [2, 4], must: [['대안', '바꾸', '제안']], plus: '제작자 입장의 반론(판매·재미)을 넣고 답했다', d: 0.4 }),
            RWQ('존중하는 말투로 마무리 문단을 쓰세요.', '그 게임을 좋아하는 사람을 깎아내리지 않으면서 비평을 마무리하세요.', ['좋아하는 사람을 깎아내리지 않았다', '비평의 목적을 밝혔다', '존중하는 말투다'], { min: 40, max: 300, sent: [2, 3], must: [['존중', '좋아', '즐기']], d: 0.4, more: { conclude: '좋은 비평은 근거 장면을 들고, 개념으로 분석하고, 재미를 살린 대안을 내며, 즐기는 사람을 존중해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 비평을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['근거 장면', ''], ['개념 사용', ''], ['대안 제시', ''], ['존중 표현', '']] }, { type: 'short', prompt: '앞으로 콘텐츠를 즐길 때 던질 질문 하나를 쓰세요.' }] },
        notes: '게임 설정은 가상이다. 실제 게임 이미지를 보여 줄 때는 선정적 장면이 없는지 교사가 먼저 확인한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.feed-choice', type: 'wrap', title: '내 피드 바꾸기 실천',
        method: '내 피드 바꾸기 실천 체크', tool: 'kitchen', minutes: 7,
        levels: { easy: '할 수 있는 행동에 표시만 한다.', base: '표시하고, 이번 주에 할 것 하나와 까닭을 쓴다.', challenge: '일주일 뒤 피드가 바뀌었는지 확인할 방법을 정해 쓴다.' },
        wrap: {
          teacher: '“내 피드를 바꾸는 힘은 나에게도 있어요. 점검표에서 할 수 있는 행동만 표시해 봐요.” 표시한 뒤 이번 주에 할 것 하나를 쓰게 한다. ‘대상화 댓글에 같이 맞장구친다’에 표시한 학생에게 “맞장구도 추천과 분위기를 키울까요?”라고 묻는다. 도전 반은 일주일 뒤 확인 방법을 정하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 피드 바꾸기', items: [{ id: 'hide', text: '대상화 영상은 ‘관심 없음’으로 추천을 숨긴다' }, { id: 'sub', text: '실력·노력을 다루는 콘텐츠를 구독한다' }, { id: 'report', text: '성적 댓글·합성물은 신고한다' }, { id: 'join', text: '대상화 댓글에 같이 맞장구친다' }, { id: 'share', text: '자극적인 썸네일을 친구에게 퍼 나른다' }] }, prompt: '내 피드를 바꾸는 행동만 표시하세요.', target: { checklist: ['hide', 'sub', 'report'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“알고리즘은 중립이다”에 대한 바른 생각은?', options: ['맞다, 알고리즘은 아무 방향이 없다', '많이 본 것을 더 보여 주며 쏠림을 키울 수 있다', '알고리즘은 고정관념과 상관없다'], answer: 1, difficulty: 0.2, explain: '추천은 내가 본 것을 더 보여 주며 쏠림을 키울 수 있어요.' },
            { type: 'short', prompt: '이번 주에 해 볼 행동 하나와 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '숏폼·팬덤 속 대상화와 미디어 고정관념',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사람을 몸 한 부분이나 외모 점수로만 보이게 하는 것을 ___라고 한다.', answer: '대상화' },
            { type: 'short', prompt: '“좋아해서 하는 말이면 대상화가 아니다”를 바르게 고쳐 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 대상화 · 추천 · 존중', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '좋아하는 마음과 사람에 대한 ___은 함께 갈 수 있다.', answer: '존중' }] },
        },
      }),
      M({
        id: 'wrap.one-question', type: 'wrap', title: '즐기면서 던질 질문',
        method: '즐기면서 던질 질문 하나', tool: 'wordcards', minutes: 7,
        levels: { easy: '비판적으로 보는 질문 카드를 고르기만 한다.', base: '질문 카드를 고르고, 그 질문을 오늘 본 콘텐츠에 적용해 한 줄 쓴다.', challenge: '나만의 질문을 하나 만들어 쓴다.' },
        wrap: {
          teacher: '“콘텐츠를 즐기면서도 던질 수 있는 질문이 있어요. ‘누구의 시선으로 찍었나?’, ‘몸이 왜 강조되나?’ 같은 질문이요.” 질문 카드 가운데 비판적으로 보는 질문을 고르게 한다. ‘이 사람 몇 점일까?’를 고른 학생에게 “그 질문은 콘텐츠를 보는 눈일까요, 사람을 점수 매기는 눈일까요?”라고 되묻는다. 도전 반은 자기 질문을 만들게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '비판적으로 보는 질문', cards: [{ id: 'gaze', text: '누구의 시선으로 찍었나?' }, { id: 'body', text: '몸이 왜 강조되나?' }, { id: 'role', text: '성별 역할이 정해져 있나?' }, { id: 'score', text: '이 사람 외모는 몇 점일까?' }, { id: 'more', text: '더 자극적인 건 없나?' }] }, prompt: '콘텐츠를 비판적으로 볼 때 던질 질문만 고르세요.', target: { pick: ['gaze', 'body', 'role'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '대상화를 줄이는 응원 댓글로 알맞은 것은?', options: ['“몸매 미쳤다”', '“12시간 연습한 게 무대에서 보여요”', '“얼굴 순위 1위”'], answer: 1, difficulty: 0.15, explain: '실력과 노력을 말하는 응원은 사람을 존중해요.' },
            { type: 'short', prompt: '고른 질문 하나를 오늘 본 콘텐츠(가상)에 적용해 한 줄 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '즐기면서 던질 질문',
          items: [
            { type: 'short', prompt: '내가 만든 질문 하나를 쓰세요.' },
            { type: 'short', prompt: '그 질문을 웹툰이나 게임에 적용해 한 줄 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 성착취물·성매매와 인권 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-exploitation', [11]);
    const RS = [['동의를 묻고 대답을 듣는다', '상대의 감정과 고통을 살핀다', '싫다고 하면 바로 멈춘다', '두 사람이 대등하게 결정한다'], ['고통을 즐거움처럼 보여 준다', '거절을 무시해도 되는 것처럼 그린다', '한쪽이 일방적으로 지배한다', '사람을 몸과 행위로만 보여 준다']];
    const CHAIN = [['사는 사람', '돈을 내며 수요를 만든다'], ['알선하는 사람', '돈을 챙기고 사람을 통제한다'], ['착취당하는 사람', '몸과 안전·자유를 빼앗긴다']];
    const HARM = [['심리 피해', 35], ['건강 피해', 30], ['경제 피해', 20], ['관계 피해', 15]];
    const HARM_T = '지원 기관에 알려진 피해 영역 비율(가상 자료, %)';
    const HB = { type: 'band', title: HARM_T, unit: '%', data: HARM };
    const CITY = (names) => ({ title: '가상 도시', grid: [6, 4], names, places: [{ name: '학교', icon: 'school', at: [0, 0], legend: '학교(예방교육·상담)' }, { name: '지원 기관', icon: 'office', at: [3, 1], legend: `지원 기관 ${HELPNO}` }, { name: '경찰서', icon: 'police', at: [5, 0], legend: '경찰서(수사·보호)' }, { name: '병원', icon: 'hospital', at: [2, 3], legend: '병원(치료)' }, { name: '공원', icon: 'park', at: [5, 3] }] });

    MODS.push(
      M({
        id: 'intro.real-vs-shown', type: 'intro', title: '보여 주는 성과 실제 관계',
        method: '보여 주는 성과 실제 관계 비교', tool: 'sortboard', minutes: 7,
        levels: { easy: '카드 넷을 함께 두 바구니에 나눈다.', base: '카드 여덟을 ‘실제 존중 관계’·‘착취물이 보여 주는 것’에 나눈다.', challenge: '착취물의 왜곡이 실제 관계에 주는 영향을 한 줄 말한다.' },
        intro: {
          teacher: '“성착취물은 실제 관계를 보여 주지 않아요. 문장 카드로만 견주어 볼까요? 실제 존중 관계에는 무엇이 있고, 착취물은 무엇을 보여 줄까요?” 시연 단추로 카드가 두 바구니에 나뉘는 모습을 보여 준다. “그건 연출이라 다들 알잖아요”라는 말이 나오면 “되풀이해 본 장면이 ‘원래 그런 것’처럼 느껴지게 되지는 않을까요?”라고 되묻는다. 착취물은 동의·존중·대등함을 지우고 지배와 고통을 정상처럼 보이게 한다는 점을 짚는다.',
          student: '문장 카드를 ‘실제 존중 관계’와 ‘착취물이 보여 주는 것’으로 나누어 보세요. 두 바구니가 무엇이 다른지 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['실제 존중 관계', '착취물이 보여 주는 것'], cards: mix(RS) }, sequence: [{ sort: { '실제 존중 관계': RS[0], '착취물이 보여 주는 것': RS[1] } }] },
          art: { draw: 'two paper frames side by side: one showing two paper figures talking face to face with a balanced scale, the other a cracked paper screen with tangled strings, kept abstract and modest', banner: '보여 주는 것과 실제', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '노골적인 묘사 없이 문장으로만 다룬다. 학생에게 시청 경험을 묻지 않는다. 이 시간은 성매매 예방교육(성매매피해자보호법 제5조)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.demand-chain', type: 'intro', title: '수요와 착취의 사슬',
        method: '수요-공급 사슬 그림 읽기', tool: 'mindmap', minutes: 7,
        levels: { easy: '사슬의 세 고리에 하는 일을 함께 잇는다.', base: '세 고리에 하는 일을 잇고, 사슬을 끊는 가장 앞 고리를 고른다.', challenge: '고리마다 필요한 제도(수요 차단·알선 처벌·피해자 지원)를 말한다.' },
        intro: {
          teacher: '“성매매·성착취는 사는 사람, 알선하는 사람, 착취당하는 사람으로 이어지는 사슬이에요. 돈과 힘은 어디로 흐를까요?” 시연 단추로 고리마다 하는 일이 이어지는 모습을 보여 준다. “서로 원해서 하는 거래 아니에요?”라는 말이 나오면 “돈을 내는 쪽이 없다면 이 사슬은 시작될까요?”라고 되묻는다. 수요가 착취를 만들고, 착취당하는 사람은 보호받아야 할 사람이라는 점을 짚는다.',
          student: '수요와 착취의 사슬에서 고리마다 하는 일을 이어 보고, 돈과 힘이 어디로 흐르는지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '착취의 사슬', slots: CHAIN.map((c) => c[0]), cards: CHAIN.map((c) => c[1]).reverse() }, sequence: [{ match: Object.fromEntries(CHAIN) }] },
          art: { draw: 'a paper chain of three linked rings on a table, coins sliding along the chain from the first ring, a pair of paper scissors ready to cut the first link', banner: '사슬은 어디서 시작될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '착취당하는 사람을 깎아내리는 말이 나오지 않게, 비판의 대상은 수요와 착취 구조라는 점을 지킨다.',
      }),

      M({
        id: 'activity.harm-data', type: 'activity', title: '성착취의 피해 영역 자료',
        method: '성착취의 피해 영역 자료 분석', tool: 'chart', minutes: 17,
        levels: { easy: '두 영역(심리·건강)을 값이 보이는 그래프로 견준다.', base: '피해 영역을 견주고 해석을 고른 뒤, 착취가 개인 선택 문제가 아닌 까닭을 자료 근거로 활동지에 두 줄 쓴다.', challenge: '값을 숨긴 그래프로 읽고, 자료 수집 방법의 한계를 고른다.' },
        activity: {
          title: '피해 영역 띠그래프', tool: 'chart',
          teacher: '“가상 지원 기관 자료예요. 성착취 피해는 심리 35%, 건강 30%, 경제 20%, 관계 15%로 나타났어요. 이 자료는 무엇을 말해 줄까요?” 그래프를 읽고 해석을 고르게 한다. “본인이 선택한 일이면 본인 책임이죠”라는 학생에게 “피해가 몸·마음·돈·관계에 두루 남는다면, 그것을 한 사람의 선택 문제로만 볼 수 있을까요?”라고 묻는다. 지원 기관 자료는 알려진 피해만 담는다는 한계도 함께 짚는다.',
          task: '성착취의 피해 영역 자료를 읽고, 해석과 자료의 한계를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHARTQ('띠그래프에서 가장 큰 피해 영역을 고르세요.', HB, '가장 큰 피해 영역은?', HARM.map((h) => h[0]), 0, { d: 0.2 }),
            CHARTQ('자료를 바르게 해석한 것을 고르세요.', HB, '바른 해석은?', ['피해가 몸·마음·돈·관계에 두루 남는다', '경제 피해만 있으니 돈 문제다', '관계 피해는 15%라 신경 쓸 필요 없다', '피해는 모두 본인 선택의 결과다'], 0, { d: 0.3 }),
            CHARTQ('이 자료의 한계로 알맞은 것을 고르세요.', HB, '이 자료가 놓칠 수 있는 것은?', ['지원 기관에 알리지 못한 피해', '가장 큰 피해 영역', '네 영역의 비율', '자료가 가상이라는 점'], 0, { d: 0.35, more: { conclude: '성착취의 피해는 몸·마음·돈·관계에 두루 남아요. 그래서 개인의 선택 문제가 아니라 인권 문제이고, 알려진 피해 밖에도 피해가 있을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '성착취가 개인 선택의 문제가 아닌 까닭을 자료를 근거로 두 줄 쓰세요.' }] },
        notes: '자료는 수업용 가상 값이다(실제 자료는 여성가족부·한국여성인권진흥원 성매매 피해 지원 실적 등의 기준을 함께 보인다).',
      }),
      M({
        id: 'activity.law-roles', type: 'activity', title: '기관마다 맡은 역할',
        method: '성매매피해자보호법 취지로 보는 역할 분담', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 이름이 바로 읽힌다.', base: '장소 이름 없이 범례를 보고 역할마다 맡은 기관에 핀을 놓고, 역할 메모를 활동지에 단다.', challenge: '장소 이름 없이 핀을 놓고, 청소년이 처음 닿을 곳과 그 까닭을 활동지에 쓴다.' },
        activity: {
          title: '역할 지도', tool: 'map',
          teacher: '“성매매피해자보호법은 학교에 예방교육을 두게 했어요. 예방은 학교, 상담과 회복은 지원 기관, 수사와 보호는 경찰, 치료는 병원 — 가상 도시 지도에서 역할마다 맡은 곳을 찾아볼까요?” 핀을 놓기 전에 “이 역할은 막는 일인가요, 돕는 일인가요?”라고 묻는다. 공원에 핀을 놓는 학생에게 “그곳에 이 일을 맡은 사람이 있을까요?”라고 되묻는다. 여러 기관이 이어져야 피해자가 보호받고, 학교의 몫은 미리 알고 알리게 하는 예방이라는 점을 짚는다.',
          task: '역할마다 맡은 기관에 핀을 놓아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '청소년이 유인의 신호를 미리 배우는 예방교육을 맡은 곳에 핀을 놓으세요.', toolOptions: CITY(true), target: { place: '학교' }, difficulty: 0.2 },
            { prompt: '피해를 입은 사람의 상담과 회복을 돕는 곳에 핀을 놓으세요.', toolOptions: CITY(true), target: { place: '지원 기관' }, difficulty: 0.25 },
            { prompt: '지금 위험에 놓인 사람을 수사하고 보호하는 곳에 핀을 놓으세요.', toolOptions: CITY(true), target: { place: '경찰서' }, difficulty: 0.25 },
            { prompt: '몸의 피해를 치료하는 곳에 핀을 놓으세요.', toolOptions: CITY(true), target: { place: '병원' }, difficulty: 0.25, conclude: '예방(학교)·상담과 회복(지원 기관)·수사와 보호(경찰)·치료(병원)가 이어져야 피해자가 보호받아요. 번호는 학교가 확인한 것을 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기관마다 역할 메모를 다세요.', columns: ['기관', '역할'], cells: [['학교', ''], ['지원 기관', HELPNO], ['경찰서', ''], ['병원', '']] }] },
        notes: '성매매피해자보호법은 근거 파일의 이름·조 번호(제5조 예방교육)만 쓰고, 기관 역할은 일반적인 설명으로 둔다. 지도는 가상 도시다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '“수요를 줄이는 것이 핵심인가” 토론',
        method: '"수요를 줄이는 것이 핵심인가" 찬반 토론', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '근거 예시 목록(문장 틀)을 보고 양쪽 근거를 쓴다.', base: '찬성 근거 → 반대 근거 → 내 3분 발언문 → 토론 뒤 점검 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 토론 뒤 입장 변화를 성찰한다.' },
        activity: {
          title: '3분 발언문 쓰기', tool: 'rubric-writing',
          teacher: '“‘성착취를 막으려면 수요를 줄이는 것이 핵심인가’ — 오늘은 어느 쪽도 정답으로 두지 않아요. 수요 차단을 핵심으로 보는 쪽, 피해자 지원·알선 차단 등 다른 고리도 똑같이 중요하다고 보는 쪽의 근거를 공정하게 세워 봐요.” 양쪽 근거를 쓴 뒤 자기 발언문을 쓰고 모둠 토론을 한다. 상대를 ‘모르는 사람’이라고 부르는 학생에게 “근거가 아니라 사람을 향한 말은 토론을 어떻게 만들까요?”라고 묻는다. 어느 쪽이든 피해자를 탓하는 근거는 쓰지 않는다는 점을 짚는다.',
          task: '찬반 양쪽 근거를 세우고 3분 발언문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('‘수요를 줄이는 것이 핵심이다’ 쪽 근거를 2문장으로 쓰세요.', '수요 차단을 핵심으로 보는 쪽의 근거를 공정하게 쓰세요.', ['근거가 사실에 바탕을 두었다', '인권 관점이 있다', '피해자를 탓하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['수요']], starter: '수요를 줄이면 ~. 왜냐하면 ~', d: 0.35 }),
            RWQ('‘다른 고리도 똑같이 중요하다’ 쪽 근거를 2문장으로 쓰세요.', '피해자 지원·알선 차단 등 다른 고리도 중요하다는 쪽의 근거를 공정하게 쓰세요.', ['근거가 사실에 바탕을 두었다', '인권 관점이 있다', '피해자를 탓하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['지원', '알선']], starter: '수요만으로는 ~. 왜냐하면 ~', d: 0.35 }),
            RWQ('내 입장의 3분 발언문을 쓰세요.', '내 입장을 밝히고, 근거 두 가지와 상대 근거에 대한 존중하는 반박을 담은 발언문을 쓰세요.', ['입장을 첫 문장에 밝혔다', '근거가 두 가지다', '상대 근거를 존중하며 반박했다', '피해자를 탓하지 않았다'], { min: 120, max: 600, sent: [4, 8], must: [['왜냐하면', '때문', '근거']], starter: '나는 ~라고 생각한다. 첫째, ~. 둘째, ~. 상대 쪽은 ~라고 하지만 ~', d: 0.45 }),
            RWQ('토론 뒤 내 발언을 점검하는 글을 쓰세요.', '모둠 토론 뒤, 내 발언에서 잘한 점과 고칠 점을 쓰세요.', ['잘한 점을 썼다', '고칠 점을 썼다', '상대에게서 배운 점을 썼다'], { min: 40, max: 300, sent: [2, 4], must: [['토론']], plus: '토론 뒤 입장이 바뀌었는지와 그 까닭을 썼다', d: 0.4, more: { conclude: '토론은 이기는 것이 아니라 근거를 공정하게 따져 더 나은 판단에 이르는 과정이에요. 어느 쪽이든 착취당한 사람은 보호받아야 할 사람이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 발언을 기준표로 점검하세요.', columns: ['기준', '내 발언에서 찾은 곳'], cells: [['근거 정확성', ''], ['인권 관점', ''], ['피해자 탓하지 않음', ''], ['상대 존중', '']] }, { type: 'short', prompt: '상대 쪽 근거 가운데 가장 설득력 있었던 것 하나를 쓰세요.' }] },
        notes: '찬반 어느 쪽도 정답으로 두지 않는다(정책 쟁점). 성매매 관련 입법 논쟁의 특정 정당·단체 입장을 소개하지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.stance-line', type: 'wrap', title: '입장 한 문장',
        method: '입장 한 문장 고쳐 쓰기', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나를 카드로 채운다.', base: '빈칸 둘을 카드로 채워 입장 문장을 완성한다.', challenge: '반론 하나에 답하는 문장을 붙인다.' },
        wrap: {
          teacher: '“‘성착취는 ___ 문제다’ — 오늘 배운 낱말로 입장 문장을 완성해요.” 빈칸을 채운 뒤 두세 명에게 읽게 한다. ‘개인 선택’ 카드를 넣은 학생에게 “피해가 몸·마음·돈·관계에 두루 남는다는 자료를 떠올리면 어떨까요?”라고 되묻는다. 도전 반은 반론에 답하는 문장을 붙이게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '성착취는 사람의 몸을 상품으로 만드는 ___ 문제다.' }, { id: 'f2', label: '성착취는 돈과 힘의 차이가 만드는 ___의 문제다.' }, { id: 'f3', label: '사는 사람의 ___가 착취를 만든다.' }], cards: ['인권', '구조', '수요', '개인 선택', '취향'] }, prompt: '입장 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '인권', f2: '구조', f3: '수요' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“성착취물은 연출이라 실제 피해가 없다”에 대한 바른 말은?', options: ['맞다, 연출은 피해가 없다', '촬영·유포 과정과 보는 사람의 인식에 실제 피해가 생긴다', '어른에게만 해당한다'], answer: 1, difficulty: 0.2, explain: '착취물에는 실제 사람이 있고, 왜곡된 인식도 실제 관계를 해쳐요.' },
            { type: 'short', prompt: '“성매매는 개인 간 자유 거래다”라는 반론에 답하는 문장을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성착취물·성매매와 인권',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사는 사람의 ___가 착취를 만든다.', answer: '수요' },
            { type: 'short', prompt: '오늘의 내 입장을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 수요 · 인권 · 보호', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '착취당한 사람은 ___받아야 할 사람이다.', answer: '보호' }] },
        },
      }),
      M({
        id: 'wrap.peer-help', type: 'wrap', title: '친구가 위험한 제안을 받았을 때',
        method: '친구가 유인에 걸렸을 때 첫 행동', tool: 'emotion', minutes: 7,
        levels: { easy: '친구의 마음 카드만 고른다.', base: '마음 카드를 고르고, 첫마디와 연결할 어른을 쓴다.', challenge: '친구가 비밀을 원할 때의 대응을 쓴다.' },
        wrap: {
          teacher: '“가상 장면이에요. 친구가 ‘온라인에서 돈 줄 테니 만나자는 제안을 받았어’라고 털어놓아요. 친구는 어떤 마음일까요?” 마음 카드를 고른 뒤 첫마디와 함께 갈 어른을 쓰게 한다. ‘신남’을 고른 학생에게 “돈 제안에 끌렸어도, 털어놓을 때는 어떤 마음이 함께 있을까요?”라고 묻는다. 친구가 비밀을 원하면 그 마음을 존중하되 혼자 감당하지 않게 상담 선생님과 의논한다는 점을 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '털어놓는 친구의 마음', cards: [{ id: 'worry', text: '걱정' }, { id: 'scared', text: '무서움' }, { id: 'shame', text: '부끄러움' }, { id: 'joy', text: '신남' }, { id: 'proud', text: '뿌듯함' }] }, prompt: '위험한 제안을 털어놓는 친구가 느낄 만한 마음을 고르세요.', target: { pick: ['worry', 'scared', 'shame'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구에게 할 첫마디로 알맞은 것은?', options: ['“왜 그런 사람이랑 연락했어?”', '“말해 줘서 고마워. 네 잘못이 아니야. 같이 상담 선생님께 가자”', '“모르는 척하고 넘어가”'], answer: 1, difficulty: 0.15, explain: '고마움과 “네 잘못이 아니야”가 먼저, 그다음 함께 어른에게 가요.' },
            { type: 'short', prompt: '친구가 “아무한테도 말하지 마”라고 할 때 내 대응을 한 줄 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '친구를 돕는 첫 행동',
          items: [
            { type: 'short', prompt: '친구에게 건넬 첫마디를 쓰세요.' },
            { type: 'table', prompt: '함께 갈 어른과 곳을 쓰세요.', columns: ['누구·어디', '메모'], cells: [['믿을 어른', ''], ['지원 기관', HELPNO]] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 15. 임신의 과정과 피임의 원리·공동 책임 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-contraception', [11]);
    const STAGES = [{ id: 'ov', text: '배란: 난소에서 난자가 나온다' }, { id: 'fe', text: '수정: 난자와 정자가 만난다' }, { id: 'im', text: '착상: 수정란이 자궁벽에 자리 잡는다' }, { id: 'gr', text: '태아 성장: 자궁에서 태아가 자란다' }];
    const MYTH = [['피임은 두 사람이 미리 함께 정한다', '피임 방법마다 효과에 차이가 있다', '궁금한 점은 의료인과 상담한다'], ['한 번은 괜찮다', '피임은 여자가 알아서 할 일이다', '인터넷 소문만 믿어도 된다']];
    const FAIL = [['콘돔(바르게 쓸 때)', 2], ['콘돔(실제 사용)', 13], ['먹는 피임약(바르게 쓸 때)', 1], ['먹는 피임약(실제 사용)', 7]];
    const FAIL_T = '방법별 1년 동안 임신이 된 비율 예(가상 교과서 수준 자료, %)';
    const FB = { type: 'bar', title: FAIL_T, unit: '%', xLabel: '방법·사용', yLabel: '비율', data: FAIL };

    MODS.push(
      M({
        id: 'intro.cycle-order', type: 'intro', title: '임신의 과정 차례',
        method: '임신 과정 순서 놓기', tool: 'lifecycle', minutes: 7,
        levels: { easy: '앞 세 단계(배란·수정·착상)를 함께 놓는다.', base: '네 단계를 차례로 놓으며 각 단계의 뜻을 읽는다.', challenge: '피임이 이 흐름의 어느 지점을 끊는지 말한다.' },
        intro: {
          teacher: '“임신은 배란, 수정, 착상, 태아 성장의 차례로 이어져요. 판에 차례대로 놓아 볼까요?” 시연 단추로 네 단계 카드가 차례로 놓이는 모습을 보여 준다. 웃음이 나오면 “몸의 과정을 바르게 아는 것이 책임 있는 결정의 바탕이에요”라고 말한다. “한 번은 괜찮지 않아요?”라는 말이 나오면 “이 흐름은 횟수를 셀까요?”라고 되묻는다. 피임은 이 흐름의 어느 지점(만남 또는 배란)을 막는 원리라는 점을 미리 밝힌다.',
          student: '임신의 과정 카드 네 장을 차례대로 놓고, 각 단계가 무엇을 뜻하는지 읽어 보세요.',
          demo: { tool: 'lifecycle', options: { mode: 'order', center: '임신의 과정', cycle: false, spin: false, slots: 4, cards: [STAGES[2], STAGES[0], STAGES[3], STAGES[1]] }, sequence: [{ order: STAGES.map((s) => s.id) }] },
          art: { draw: 'a paper ring diagram with four soft pastel stations connected by arrows, small abstract icons (a tiny circle leaving an oval, two dots meeting, a dot nesting in a curved wall, a small sprout growing), kept textbook-simple', banner: '임신은 어떻게 이어질까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교과서 수준의 과정만 다루고 성적 행위는 묘사하지 않는다. 각 단계 뜻풀이는 사람 확인 목록에 있다. 학생 자신의 몸 상태를 묻지 않는다.',
      }),
      M({
        id: 'intro.myth-cards', type: 'intro', title: '피임 소문 가려내기',
        method: '피임 소문 참·거짓', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 셋을 함께 사실·소문으로 가른다.', base: '카드 여섯을 사실·소문으로 가른다.', challenge: '소문이 만들어진 배경을 하나 말한다.' },
        intro: {
          teacher: '“피임에 대해 떠도는 말 여섯 개예요. 사실일까요, 소문일까요?” 시연 단추로 카드가 사실·소문 칸에 나뉘는 모습을 보여 준다. “피임은 여자가 알아서 하는 거 아니에요?”라는 말이 나오면 “임신은 두 사람이 관계된 일인데, 책임은 한 사람 몫일까요?”라고 되묻는다. 피임은 두 사람이 미리 함께 정하고, 정확한 정보는 의료인과 상담해 얻는다는 점을 짚는다.',
          student: '피임에 대해 떠도는 여섯 문장을 사실과 소문으로 나누어 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['사실', '소문'], cards: mix(MYTH) }, sequence: [{ sort: { 사실: MYTH[0], 소문: MYTH[1] } }] },
          art: { draw: 'paper speech bubbles of rumors falling into two paper boxes marked with a check and a cross, a paper clinic sign and two paper figures holding one shared notebook', banner: '그 말, 사실일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사용법은 다루지 않는다. 궁금한 점은 보건 선생님·의료기관에서 확인하게 한다.',
      }),

      M({
        id: 'activity.principle-sort', type: 'activity', title: '피임 방법을 원리로 나누기',
        method: '피임 방법을 원리로 나누기', tool: 'sortboard', minutes: 17,
        levels: { easy: '방법 이름 카드 셋을 원리 바구니에 나눈다(틀리면 되돌아옴).', base: '방법 이름 카드를 원리 바구니에 나누고, 원리 설명 카드를 나누고, 의료인 상담이 필요한 경우를 가른다.', challenge: '헷갈리는 카드가 더해진 판에서 나누고, 효과 차이가 생기는 까닭을 활동지에 쓴다.' },
        activity: {
          title: '원리 바구니', tool: 'sortboard',
          teacher: '“피임 방법을 이름이 아니라 원리로 나눠 봐요 — 정자와 난자가 만나지 못하게 막기(차단), 호르몬으로 배란 조절, 응급 상황의 의료 상담.” 카드를 놓을 때마다 “이 방법은 임신 과정의 어느 지점을 막나요?”라고 묻는다. 사용법을 묻는 학생에게 “오늘은 원리까지 배워요. 쓰는 방법은 의료인과 상담해 정확히 배우는 거예요”라고 말한다. 어떤 방법이든 두 사람이 미리 정하고, 호르몬 방법과 응급 상황은 의료인과 상담한다는 점을 짚는다.',
          task: '피임 방법을 원리 바구니에 나누고, 원리 설명과 의료 상담이 필요한 경우를 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('피임 방법 이름 카드를 원리 바구니에 나누세요.', ['막기(차단)', '호르몬 조절', '응급 상황 의료 상담'], [['남성용 콘돔', '여성용 콘돔'], ['먹는 피임약', '피임 패치'], ['응급 피임약(의사 처방)']], { k: 1, hard: [[], [], ['피임에 실패했을 때 바로 의료기관 상담']], d: 0.35 }),
            BOARDQ('원리 설명 카드를 바구니에 나누세요.', ['막기(차단)', '호르몬 조절', '응급 상황 의료 상담'], [['정자와 난자가 만나지 못하게 막는다'], ['배란이 일어나지 않게 조절한다'], ['정해진 시간 안에 의료인과 상담해 처방받는다']], { k: 1, traps: ['한 번은 괜찮으니 아무것도 하지 않는다'], d: 0.3 }),
            BOARDQ('의료인과 상담이 필요한 경우와 두 사람이 함께 정할 일을 나누세요.', ['의료인 상담이 필요하다', '두 사람이 미리 함께 정한다'], [['호르몬 방법을 처음 쓰려 할 때', '피임에 실패했다고 느낄 때'], ['어떤 방법을 쓸지', '준비가 안 되면 미루기로 할지']], { k: 1, d: 0.35, more: { conclude: '피임은 임신 과정의 만남이나 배란을 막는 원리로 나눌 수 있어요. 어떤 방법이든 두 사람이 미리 함께 정하고, 호르몬 방법과 응급 상황은 의료인과 상담해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '같은 방법이어도 효과에 차이가 생기는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '사용법은 묘사하지 않고 원리만 다룬다. 방법 이름·원리·처방 여부는 사람 확인 목록에 있다. 학생 자신의 상황을 묻지 않는다.',
      }),
      M({
        id: 'activity.effect-chart', type: 'activity', title: '피임 효과 차이 자료',
        method: '피임 효과 차이 자료 읽기', tool: 'chart', minutes: 17,
        levels: { easy: '값이 보이는 그래프로 막대 둘(콘돔 두 막대)을 견준다.', base: '값을 보며 ‘바르게 쓸 때’와 ‘실제 사용’의 차이와 그 까닭을 고른다.', challenge: '값을 숨긴 그래프로 읽고, 두 사람이 함께 정해야 하는 까닭을 자료로 고른다.' },
        activity: {
          title: '“바르게 쓸 때”와 “실제 사용”', tool: 'chart',
          teacher: '“가상 교과서 수준 자료예요. 같은 콘돔이어도 바르게 쓸 때는 2%, 실제 사용에서는 13%예요. 왜 차이가 날까요?” 그래프를 읽고 까닭을 고르게 한다. “그럼 피임은 소용없네요”라는 학생에게 “차이를 줄이는 것은 무엇일까요? 정확한 정보와 두 사람의 약속이 아닐까요?”라고 묻는다. 효과 차이는 정확히 알고 꾸준히 바르게 쓰는지에서 생기고, 그래서 두 사람이 함께 정하고 의료인과 상담한다는 점을 짚는다.',
          task: '피임 효과 자료를 읽고, 차이가 생기는 까닭과 함께 정해야 하는 까닭을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHARTQ('콘돔의 ‘바르게 쓸 때’와 ‘실제 사용’ 가운데 비율이 더 높은 쪽을 고르세요.', FB, '비율이 더 높은 막대는?', ['콘돔(바르게 쓸 때)', '콘돔(실제 사용)'], 1, { d: 0.2 }),
            CHARTQ('‘바르게 쓸 때’와 ‘실제 사용’의 차이가 생기는 까닭으로 알맞은 것을 고르세요.', FB, '차이가 생기는 까닭은?', ['정확히 알고 꾸준히 바르게 쓰는지가 다르다', '방법 이름이 달라서', '그래프가 가상이라서', '실제 사용하는 사람은 운이 나빠서'], 0, { d: 0.3 }),
            CHARTQ('이 자료로 두 사람이 함께 정해야 하는 까닭을 고르세요.', FB, '자료가 보여 주는 함께 정해야 할 까닭은?', ['효과는 두 사람이 정확히 알고 함께 지킬 때 높아진다', '한 사람만 알면 충분하다', '어떤 방법도 효과가 같다', '자료는 결정과 상관없다'], 0, { d: 0.35, more: { conclude: '피임 효과는 방법마다 다르고, 정확히 알고 꾸준히 바르게 쓸 때 높아져요. 그래서 두 사람이 미리 함께 정하고 의료인과 상담해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘한 번은 괜찮다’는 소문을 오늘 자료로 반박하는 문장을 쓰세요.' }] },
        notes: '수치는 교과서 수준의 예시로 둔 가상 자료다(화면에 밝힘). 실제 수치는 사람 확인 목록의 공식 자료로 대조한 뒤 쓴다.',
      }),
      M({
        id: 'activity.joint-decision', type: 'activity', title: '미리 함께 정하는 대화',
        method: '두 사람의 미리 정하는 대화 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '대사 틀(묻기·대답·제안)을 보고 쓴다.', base: '동의 확인 → 피임 결정 → 의료 상담 → 결정 바꾸기 차례로 대본을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 한쪽이 거부할 때의 대사를 넣는다.' },
        activity: {
          title: '가상 커플의 대화 대본', tool: 'rubric-writing',
          teacher: '“가상 성인 커플 서진과 도하가 미래의 관계를 앞두고 미리 나눌 대화를 대본으로 써요. 동의 확인, 피임 결정, 의료 상담, 결정 바꾸기가 들어가야 해요.” 대사는 장면 묘사 없이 대화만 쓰게 한다. “그런 얘기는 어색해서 안 해요”라는 학생에게 “어색함을 피한 대가를 한 사람이 혼자 진다면 공정할까요?”라고 묻는다. 좋은 대화는 미리, 함께, 정확한 정보로, 언제든 바꿀 수 있게 정한다는 점을 짚는다.',
          task: '가상 커플이 미리 함께 정하는 대화 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('동의를 확인하는 대사를 2~3줄 쓰세요.', '서진과 도하가 서로의 마음과 준비를 묻고 확인하는 대사를 쓰세요(장면 묘사 없이 대화만).', ['서로 묻고 답한다', '준비가 안 되면 미뤄도 된다고 말한다', '존중하는 말투다'], { min: 40, max: 300, sent: [2, 4], must: [['?']], starter: '서진: “~할 준비가 됐는지 이야기해 볼까?” 도하: “~”', d: 0.35 }),
            RWQ('피임을 함께 정하는 대사를 2~3줄 쓰세요.', '두 사람이 피임 방법을 함께 정하고, 책임을 나누는 대사를 쓰세요.', ['두 사람이 함께 정한다', '한쪽에만 맡기지 않는다', '정확한 정보를 쓴다'], { min: 40, max: 300, sent: [2, 4], must: [['피임']], starter: '도하: “피임은 우리 둘이 ~” 서진: “~”', plus: '한쪽이 거부할 때 멈추는 대사를 넣었다', d: 0.4 }),
            RWQ('의료 상담을 정하는 대사를 2줄 쓰세요.', '궁금한 점을 의료인·보건 선생님과 상담하기로 정하는 대사를 쓰세요.', ['상담할 곳을 정했다', '인터넷 소문에 기대지 않는다', '함께 간다는 말이 있다'], { min: 30, max: 250, sent: [2, 3], must: [['상담']], d: 0.35 }),
            RWQ('결정을 바꾸는 대사를 2줄 쓰세요.', '한 사람이 마음이 바뀌었을 때 말하고, 상대가 존중하는 대사를 쓰세요.', ['마음을 바꿀 수 있다고 말한다', '상대가 따지지 않고 존중한다', '관계가 이어진다'], { min: 30, max: 250, sent: [2, 3], must: [['바뀌', '바꿔', '바꾸']], d: 0.4, more: { conclude: '피임은 두 사람이 미리, 함께, 정확한 정보로 정하는 일이고, 그 결정은 언제든 바꿀 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 대본을 기준표로 점검하세요.', columns: ['기준', '내 대본에서 찾은 곳'], cells: [['동의', ''], ['공동 책임', ''], ['정확한 정보', ''], ['존중', '']] }, { type: 'short', prompt: '대본에서 가장 중요하다고 생각하는 대사 하나를 옮겨 쓰세요.' }] },
        notes: '대본 인물은 가상 성인이며 장면 묘사 없이 대화만 쓴다. 학생 자신의 연애·성 경험을 묻지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.source-check', type: 'wrap', title: '믿을 만한 정보 출처',
        method: '믿을 만한 성 건강 정보 출처 고르기', tool: 'kitchen', minutes: 7,
        levels: { easy: '믿을 출처에 표시만 한다.', base: '표시하고, 고른 까닭을 한 줄 쓴다.', challenge: '정보를 가려내는 기준 하나를 쓴다.' },
        wrap: {
          teacher: '“성 건강 정보는 어디서 얻을까요? 점검표에서 믿을 만한 출처만 표시해 봐요.” 표시한 뒤 고른 까닭을 쓰게 한다. ‘조회수 많은 영상’에 표시한 학생에게 “조회수는 정확함을 말해 줄까요?”라고 묻는다. 도전 반은 정보를 가려내는 기준(누가 썼나·근거가 있나·언제 썼나)을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '성 건강 정보 출처', items: [{ id: 'nurse', text: '보건 선생님' }, { id: 'clinic', text: '의료기관(의사·간호사)' }, { id: 'public', text: '공공 보건 누리집' }, { id: 'anon', text: '익명 커뮤니티 소문' }, { id: 'views', text: '조회수 많은 자극적 영상' }] }, prompt: '믿을 만한 성 건강 정보 출처만 표시하세요.', target: { checklist: ['nurse', 'clinic', 'public'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '정보를 가려내는 기준으로 알맞은 것은?', options: ['조회수가 많은가', '누가, 어떤 근거로, 언제 썼는가', '내 생각과 같은가'], answer: 1, difficulty: 0.2, explain: '쓴 사람·근거·시점을 확인해요.' },
            { type: 'short', prompt: '믿을 출처를 고른 까닭을 한 줄 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '임신의 과정과 피임의 원리·공동 책임',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '임신의 과정은 배란 → 수정 → ___ → 태아 성장이다.', answer: '착상' },
            { type: 'short', prompt: '피임 정보가 궁금할 때 찾아갈 곳 두 곳을 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 착상 · 상담 · 함께', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '피임은 두 사람이 미리 ___ 정한다.', answer: '함께' }] },
        },
      }),
      M({
        id: 'wrap.responsibility', type: 'wrap', title: '공동 책임 한 줄',
        method: '공동 책임 한 줄', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 카드로 빈칸을 채운다.', base: '빈칸을 채우고, 한쪽에만 맡겼을 때의 마음 카드를 고른다.', challenge: '책임을 나누는 구체적인 행동을 쓴다.' },
        wrap: {
          teacher: '“‘피임은 ___가 함께’ — 빈칸에 들어갈 말은 무엇일까요?” 카드를 넣은 뒤, 한쪽에만 맡겼을 때 그 사람이 느낄 마음을 고르게 한다. ‘여자’ 카드를 넣은 학생에게 “임신은 두 사람이 관계된 일인데, 한 사람만 신경 쓴다면 그 사람은 어떤 마음일까요?”라고 되묻는다. 도전 반은 책임을 나누는 행동(함께 정보 찾기·함께 상담 가기)을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'fill', slots: [{ id: 'f1', label: '피임은 ___가 함께 정하고 책임진다.' }], cards: [{ id: 'both', text: '두 사람' }, { id: 'f', text: '여자' }, { id: 'm', text: '남자' }] }, prompt: '공동 책임 문장의 빈칸을 카드로 채우세요.', target: { fill: { f1: 'both' } }, difficulty: 0.15 },
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '혼자 떠맡은 사람의 마음', cards: [{ id: 'worry', text: '걱정' }, { id: 'lonely', text: '외로움' }, { id: 'stuffy', text: '답답함' }, { id: 'joy', text: '신남' }, { id: 'calm', text: '편안함' }] }, prompt: '피임을 한쪽에만 맡겼을 때 그 사람이 느낄 만한 마음을 고르세요.', target: { pick: ['worry', 'lonely', 'stuffy'] }, difficulty: 0.2 },
            { type: 'short', prompt: '책임을 나누는 구체적인 행동 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '공동 책임',
          items: [
            { type: 'short', prompt: '“피임은 한쪽이 알아서 하는 일이다”를 바르게 고쳐 쓰세요.' },
            { type: 'short', prompt: '두 사람이 함께 할 수 있는 책임 행동 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 16. 예기치 않은 임신과 책임 있는 결정 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-unplanned', [11]);
    const ALONE = [['혼자 고민하겠다', 41], ['친구에게만 말하겠다', 27], ['믿을 어른에게 말하겠다', 19], ['전문 상담을 받겠다', 13]];
    const ALONE_T = '“예기치 않은 임신 가능성이 생긴다면?”(가상 고교생 설문, %)';
    const JIAN = { text: '가상 인물 지안(19세, 고3)은 연인 유건과 함께 임신 가능성이 있다는 것을 알게 되었다. 지안은 무섭고 혼란스럽다. 너는 지안의 입장에서 고른다.', who: '지안', motif: 'cloud', choices: [
      { id: 'adult', text: '유건과 함께 믿을 어른(보건 선생님·보호자)에게 먼저 이야기한다', result: '보건 선생님이 놀라지 않고 들어 주며 의료기관 확인과 전문 상담을 안내한다.', impact: [{ who: '지안', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '보건 선생님이 “먼저 의료기관에서 정확히 확인하고, 전문 상담을 받아 보자”고 한다.', who: '지안', choices: [
          { id: 'check', text: `의료기관에서 확인하고 전문 상담(${HELPNO})을 예약한다`, result: '정확한 정보를 듣고, 선택지와 지원을 차분히 안내받는다.', impact: [{ who: '지안', text: '정확한 정보로 생각할 수 있다', tone: 1 }],
            next: { text: '유건이 “나는 네 결정만 따를게”라며 한 발 물러선다. 이번엔 유건의 입장에서 고른다.', who: '유건', choices: [
              { id: 'share', text: '“같이 상담 가고, 같이 책임질게”라며 함께한다', result: '두 사람이 함께 상담을 받고 서로의 생각을 나눈다.', impact: [{ who: '지안', text: '짐을 나눈다', tone: 1 }, { who: '유건', text: '책임을 함께 진다', tone: 1 }], ending: '예기치 않은 임신은 두 사람의 공동 책임이다. 함께 정보를 얻고 함께 결정 과정에 선다.' },
              { id: 'step', text: '“네가 알아서 해”라며 연락을 줄인다', result: '지안은 혼자 결정의 무게를 떠안는다.', impact: [{ who: '지안', text: '혼자 남는다', tone: -1 }], ending: '상대방이 물러서면 한 사람에게 모든 짐이 쏠린다. 책임은 두 사람의 것이다.' }] } },
          { id: 'wait', text: '무서워서 확인을 미룬다', result: '시간이 지날수록 지안의 불안이 커진다.', impact: [{ who: '지안', text: '불안이 커진다', tone: -1 }], ending: '확인을 미루면 선택과 지원의 시간이 줄어든다. 믿을 어른과 함께 다시 시작할 수 있다.' }] } },
      { id: 'net', text: '익명 커뮤니티에서 소문과 경험담만 찾아본다', result: '서로 다른 말이 쏟아져 더 혼란스럽다.', impact: [{ who: '지안', text: '잘못된 정보에 놓인다', tone: -1 }],
        next: { text: '어떤 글은 “아무에게도 말하지 마”라고 한다.', who: '지안', choices: [
          { id: 'turn', text: '소문 대신 보건 선생님께 정확한 정보를 묻기로 한다', result: '보건 선생님이 의료기관과 전문 상담을 안내한다.', impact: [{ who: '지안', text: '정확한 길을 찾는다', tone: 1 }], ending: '소문보다 믿을 어른과 전문가에게 묻는 것이 안전한 결정의 시작이다.' },
          { id: 'secret', text: '글에 따라 아무에게도 말하지 않는다', result: '지안은 혼자 고민하며 지쳐 간다.', impact: [{ who: '지안', text: '고립된다', tone: -1 }], ending: '혼자 고민하면 정확한 정보와 지원에서 멀어진다.' }] } },
      { id: 'hide', text: '아무에게도 말하지 않고 혼자 숨긴다', result: '지안은 잠을 못 자고 수업에 집중하지 못한다.', impact: [{ who: '지안', text: '혼자 견딘다', tone: -1 }], ending: '알리면 혼나기만 할 것 같아도, 믿을 어른과 전문 상담은 함께 길을 찾아 준다.' }] };
    const JIAN_R = [{ id: 'notalone', text: '혼자 고민하지 않고 믿을 어른에게 먼저 이야기한다' }, { id: 'expert', text: '소문이 아니라 의료기관·전문 상담에서 정확한 정보를 얻는다' }, { id: 'both', text: '예기치 않은 임신은 두 사람의 공동 책임이다' },
      { id: 'scold', text: '알리면 혼나기만 하니 숨기는 게 낫다', why: '믿을 어른과 전문 상담은 혼내는 곳이 아니라 함께 길을 찾는 곳이에요.' }, { id: 'hers', text: '임신한 사람이 혼자 정하고 책임진다', why: '상대방에게도 함께할 책임이 있어요.' }];
    const TOWN = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '보건실', icon: 'hospital', at: [0, 0], legend: '학교 보건실' }, { name: '상담실', icon: 'house', at: [2, 0], legend: '학교 상담실' }, { name: '의료기관', icon: 'hospital', at: [5, 1], legend: '산부인과 등 의료기관' }, { name: '지역 상담 기관', icon: 'office', at: [3, 3], legend: `지역 상담 기관 ${HELPNO}` }, { name: '편의점', icon: 'market', at: [0, 3] }, { name: '도서관', icon: 'library', at: [5, 3] }] });

    MODS.push(
      M({
        id: 'intro.feelings', type: 'intro', title: '가상 인물의 마음 지도',
        method: '가상 인물의 마음 지도', tool: 'emotion', minutes: 7,
        levels: { easy: '마음 카드 둘을 함께 고른다.', base: '마음 카드 셋을 고르고, 그 마음일 때 필요한 것을 말한다.', challenge: '상대방이 느낄 마음도 함께 말한다.' },
        intro: {
          teacher: '“가상 인물 지안이 임신 가능성이 있다는 것을 알게 되었어요. 지안은 어떤 마음일까요? 그 마음일 때 무엇이 가장 필요할까요?” 시연 단추로 불안·혼란·두려움 카드가 바구니에 담기는 모습을 보여 준다. “조심했어야지”라는 말이 나오면 “지금 지안에게 그 말이 도움이 될까요? 지금 필요한 것은 무엇일까요?”라고 되묻는다. 이런 마음일수록 혼자 두지 않고 믿을 어른과 전문 상담이 필요하다는 점을 짚는다.',
          student: '가상 인물이 임신 가능성을 알게 된 장면에서 느낄 수 있는 마음을 고르고, 그 마음일 때 필요한 것을 생각해 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '지안의 마음', cards: [{ id: 'anx', text: '불안함' }, { id: 'conf', text: '혼란' }, { id: 'fear', text: '두려움' }, { id: 'joy', text: '신남' }, { id: 'bored', text: '지루함' }] }, sequence: [{ pick: ['anx', 'conf', 'fear'] }] },
          art: { draw: 'a paper figure sitting on a bench under a small rain cloud, swirling paper thought bubbles above, a paper hand reaching in from the side holding an umbrella', banner: '혼자가 아니에요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '인물은 가상이다. 학생 자신이나 주변의 경험을 묻지 않는다. 임신 뒤의 선택(출산·입양 등)에 대한 찬반 판단은 다루지 않고, 혼자 고민하지 않는 결정 과정에만 초점을 둔다.',
      }),
      M({
        id: 'intro.myth-poll', type: 'intro', title: '“혼자 고민하겠다” 설문',
        method: '"알리면 안 된다" 통념 자료', tool: 'chart', minutes: 7,
        levels: { easy: '가장 큰 막대(혼자 고민)만 함께 읽는다.', base: '그렇게 답한 까닭을 보기에서 골라 말한다.', challenge: '그 까닭을 줄일 학교 방안을 하나 말한다.' },
        intro: {
          teacher: '“가상 설문에서 41%가 ‘혼자 고민하겠다’고 답했어요. 왜 그렇게 답했을까요?” 시연 단추로 ‘알리면 혼날까 봐’ 보기가 골라지는 모습을 보여 준다. “혼자 해결하는 게 어른스러운 거죠”라는 말이 나오면 “정확한 정보 없이 혼자 정하는 것이 정말 책임 있는 결정일까요?”라고 되묻는다. 혼자 고민하게 만드는 두려움을 줄이는 것이 학교와 어른의 몫이라는 점을 짚는다.',
          student: '예기치 않은 임신 가능성이 생긴다면 어떻게 하겠냐는 가상 설문 그래프를 읽고, 혼자 고민하겠다고 답한 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: ALONE_T, unit: '%', xLabel: '응답', yLabel: '비율', data: ALONE, question: '‘혼자 고민하겠다’가 많은 까닭으로 알맞은 것은?', choices: ['알리면 혼나기만 할 것 같아서', '혼자가 가장 정확해서', '상담은 쓸모없어서', '설문이 가상이라서'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with the tallest bar shaped like a closed door, a smaller bar shaped like an open door with light coming through, a paper student looking between them', banner: '왜 혼자 고민할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '설문 값은 수업용 가상 값이다.',
      }),

      M({
        id: 'activity.decision-path', type: 'activity', title: '지안의 결정 과정',
        method: '결정 과정 갈림길 따라가기', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 보고, 안전한 결정 과정의 근거를 고른다.', challenge: '다른 끝도 가 보고, 상대방 유건의 갈림길까지 견준다.' },
        activity: {
          title: '혼자 두지 않는 길', tool: 'dilemma',
          teacher: '“가상 인물 지안과 유건이 임신 가능성을 알게 되었어요. 지안은 숨길 수도, 인터넷 소문을 찾을 수도, 믿을 어른에게 갈 수도 있어요. 어느 길이 안전한 결정 과정일까요?” 장면마다 “이 선택으로 지안은 정확한 정보에 가까워졌나요, 멀어졌나요?”라고 묻는다. ‘임신한 사람이 혼자 책임진다’ 카드를 고른 학생에게 “임신은 두 사람이 관계된 일인데, 유건의 책임은 어디 있을까요?”라고 되묻는다. 오늘 배우는 것은 무엇을 정하느냐가 아니라 혼자 두지 않고 정확한 정보로 함께 정하는 과정이라는 점을 짚는다.',
          task: '지안의 갈림길을 따라가며 안전한 결정 과정을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('지안과 유건이 함께하는 안전한 결정 과정을 끝까지 고르고 근거를 고르세요.', JIAN, [['adult', 'check', 'share']], JIAN_R, ['notalone', 'expert', 'both'], { d: 0.4 }),
            DILQ('‘익명 커뮤니티를 찾는다’로 시작한 길에서 정확한 길로 돌아오는 선택을 고르고 근거를 고르세요.', { text: JIAN.text, who: JIAN.who, motif: JIAN.motif, choices: JIAN.choices.filter((c) => c.id !== 'adult') }, [['net', 'turn']], JIAN_R, ['notalone', 'expert'], { d: 0.35 }),
            EXPLOREQ('‘혼자 숨긴다’ 길도 끝까지 가 보고 결과를 견주세요.', JIAN, JIAN_R, ['숨긴 길의 끝을 확인했다', '두 길에서 지안에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '예기치 않은 임신 앞에서 책임 있는 결정은 혼자 고민하지 않고, 믿을 어른과 의료기관·전문 상담에서 정확한 정보를 얻어, 두 사람이 함께 서는 과정이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유건의 입장에서 지안에게 할 수 있는 책임 있는 말과 행동을 한 줄씩 쓰세요.' }] },
        notes: '임신 뒤의 선택지(출산·입양·임신 중지 등)에 대한 옳고 그름은 다루지 않는다(사람이 보는 민감 쟁점). 결정 과정(혼자 두지 않기·정확한 정보·공동 책임)만 다룬다. 학생에게 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.support-map', type: 'activity', title: '도움받을 곳 지도',
        method: '도움받을 곳 지도', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 이름이 바로 읽힌다(핀 셋).', base: '장소 이름 없이 범례를 보고 차례마다 갈 곳에 핀을 놓고, 연결 차례를 활동지에 잇는다.', challenge: '장소 이름 없이 핀을 놓고, 비용·비밀 보장에 대해 물을 질문을 활동지에 메모한다.' },
        activity: {
          title: '처음 닿을 곳에서 다음 곳으로', tool: 'map',
          teacher: '“가상 학교와 동네 지도예요. 지안이 처음 닿을 곳, 정확히 확인할 곳, 이어서 상담받을 곳은 어디일까요?” 핀을 놓기 전에 “지금 필요한 것은 이야기를 들어 줄 사람인가요, 정확한 의학 정보인가요?”라고 묻는다. 편의점이나 도서관에 핀을 놓는 학생에게 “그곳에서 정확한 확인과 상담을 받을 수 있을까요?”라고 되묻는다. 지역 상담 기관 번호는 학교가 확인한 것을 쓴다는 점을 짚는다.',
          task: '차례마다 도움받을 곳에 핀을 놓아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '학교에서 지안이 처음 이야기할 수 있는 곳에 핀을 놓으세요.', toolOptions: TOWN(true), target: { place: '보건실' }, difficulty: 0.2 },
            { prompt: '임신 여부를 정확히 확인할 곳에 핀을 놓으세요.', toolOptions: TOWN(true), target: { place: '의료기관' }, difficulty: 0.25 },
            { prompt: '마음과 앞으로의 일을 이어서 상담할 학교 밖 곳에 핀을 놓으세요.', toolOptions: TOWN(true), target: { place: '지역 상담 기관' }, difficulty: 0.3, conclude: '학교 보건실·상담실에서 시작해 의료기관에서 정확히 확인하고, 지역 상담 기관으로 이어 가요. 번호는 학교가 확인한 것을 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움받을 곳의 차례와 물을 질문을 쓰세요.', columns: ['차례', '곳', '물을 질문(비용·비밀 보장 등)'], cells: [['1', '보건실', ''], ['2', '의료기관', ''], ['3', '지역 상담 기관', HELPNO]] }] },
        notes: '지도는 가상이다. 지역 상담 기관 이름·번호와 비밀 보장 범위는 학교 보건 선생님이 확인해 안내한다(근거 파일에 기관 이름·번호가 없다).',
      }),
      M({
        id: 'activity.letter', type: 'activity', title: '가상 친구에게 보내는 지지 편지',
        method: '가상 친구에게 보내는 지지 편지', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '편지 틀(공감 → 혼자가 아님 → 도움 경로 → 함께 갈 제안)을 보고 쓴다.', base: '네 부분을 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 상대방 친구에게 보내는 책임 편지도 쓴다.' },
        activity: {
          title: '지안에게 쓰는 편지', tool: 'rubric-writing',
          teacher: '“고민하는 가상 친구 지안에게 지지 편지를 써요. 공감, 혼자가 아니라는 말, 도움 경로, 함께 갈 제안이 들어가야 해요.” 먼저 공감 문장을 쓰게 한다. “다음부터 조심해”라고 쓴 학생에게 “지금 지안에게 필요한 것은 충고일까요, 곁에 있다는 말일까요?”라고 묻는다. 판단하지 않는 말과 정확한 정보, 함께 갈 곳이 지지 편지를 완성한다는 점을 짚는다.',
          task: '고민하는 가상 친구에게 지지 편지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('공감하는 첫 부분을 2문장으로 쓰세요.', '지안의 마음(불안·혼란·두려움)을 알아주는 문장을 쓰세요.', ['마음을 알아주었다', '판단하거나 탓하지 않았다', '따뜻한 말투다'], { min: 40, max: 300, sent: [2, 3], must: [['마음', '힘들', '무섭']], starter: '지안아, ~해서 많이 힘들었지.', d: 0.35 }),
            RWQ('혼자가 아니라는 부분을 2문장으로 쓰세요.', '지안이 혼자가 아니고 함께할 사람이 있다는 것을 쓰세요(유건의 책임도 담아).', ['혼자가 아니라고 썼다', '두 사람의 공동 책임을 담았다', '판단하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['혼자']], plus: '상대방 유건에게 보내는 책임 편지 한 문단을 덧붙였다', d: 0.4 }),
            RWQ('도움 경로 부분을 2~3문장으로 쓰세요.', `보건 선생님·의료기관·지역 상담 기관(${HELPNO})으로 이어지는 도움 경로를 쓰세요.`, ['도움받을 곳을 둘 이상 썼다', '정확한 정보를 얻는 곳을 썼다', '소문을 믿지 말자고 썼다'], { min: 40, max: 350, sent: [2, 4], must: [['보건', '의료', '상담']], d: 0.4 }),
            RWQ('함께 갈 제안으로 편지를 맺으세요.', '지안에게 함께 갈 것을 제안하며 편지를 맺으세요.', ['함께 가겠다고 제안했다', '지안의 결정을 존중했다', '판단하지 않는 말로 끝냈다'], { min: 30, max: 250, sent: [1, 3], must: [['같이', '함께']], d: 0.35, more: { conclude: '지지 편지는 판단하지 않고 마음을 알아주며, 혼자가 아님을 알리고, 정확한 도움 경로와 함께 갈 제안을 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 편지를 기준표로 점검하세요.', columns: ['기준', '내 편지에서 찾은 곳'], cells: [['판단하지 않음', ''], ['정확한 정보', ''], ['도움 경로', HELPNO]] }, { type: 'short', prompt: '편지에서 지안이 가장 듣고 싶을 것 같은 한 문장을 옮겨 쓰세요.' }] },
        notes: '편지 대상은 가상 인물이다. 임신 뒤의 선택지를 권하거나 판단하는 문장은 쓰지 않게 안내한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.steps', type: 'wrap', title: '세 단계 확인',
        method: '세 단계 확인', tool: 'timer', minutes: 7,
        levels: { easy: '세 단계 점검 칸만 표시한다.', base: '표시하고, 칸마다 활동지에 메모한다.', challenge: '단계마다 장애물과 해결을 메모한다.' },
        wrap: {
          teacher: '“오늘의 세 단계 — 혼자 두지 않기, 믿을 어른, 전문 상담 — 를 스스로 점검해요.” 점검 칸을 표시하게 한 뒤 활동지에 메모하게 한다. “믿을 어른이 없으면요?”라는 학생에게 “보건 선생님, 상담 선생님도 믿을 어른이 될 수 있어요. 학교에서 누구에게 먼저 갈 수 있을까요?”라고 묻는다. 지역 상담 기관 번호는 학교가 확인한 것을 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '세 단계 점검' }, prompt: '오늘 배운 세 단계를 스스로 점검하고 표시하세요.', target: { selfCheck: ['혼자 두지 않는다(나도, 친구도)', '믿을 어른(보건·상담 선생님·보호자)에게 이야기한다', `전문 상담·의료기관으로 잇는다 ${HELPNO}`] }, difficulty: 0.1 },
            { type: 'choice', prompt: '“상대방은 책임이 없다”에 대한 바른 말은?', options: ['맞다, 임신한 사람의 일이다', '두 사람 모두에게 함께할 책임이 있다', '어른이 되면 책임이 생긴다'], answer: 1, difficulty: 0.15, explain: '예기치 않은 임신은 두 사람의 공동 책임이에요.' },
            { type: 'short', prompt: '세 단계 가운데 가장 어려울 것 같은 단계와 그 해결 방법을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '예기치 않은 임신과 책임 있는 결정',
          items: [
            { type: 'table', prompt: '세 단계마다 메모하세요.', columns: ['단계', '메모'], cells: [['혼자 두지 않기', ''], ['믿을 어른', ''], ['전문 상담', HELPNO]] },
            { type: 'short', prompt: '“알리면 혼나기만 한다”는 생각에 답하는 문장을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.words', type: 'wrap', title: '판단하지 않는 말',
        method: '판단하지 않는 말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '지지하는 말만 고른다.', base: '고르고, 고른 까닭을 쓴다.', challenge: '탓하는 말 하나를 자기 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '“고민하는 친구에게 할 말 카드예요. 판단하지 않고 지지하는 말은 무엇일까요?” 카드를 고르게 한다. ‘왜 조심 안 했어?’를 고른 학생에게 “그 말을 들은 친구가 다음 단계로 갈 힘이 생길까요?”라고 되묻는다. 도전 반은 탓하는 말을 지지하는 말로 바꿔 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '판단하지 않는 말', cards: [{ id: 'together', text: '“같이 알아보자”' }, { id: 'alone', text: '“너 혼자가 아니야”' }, { id: 'go', text: '“보건 선생님께 같이 갈까?”' }, { id: 'why', text: '“왜 조심 안 했어?”' }, { id: 'yours', text: '“네가 알아서 해야지”' }] }, prompt: '고민하는 친구에게 할 판단하지 않는 말만 고르세요.', target: { pick: ['together', 'alone', 'go'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '정확한 정보를 얻을 곳으로 알맞은 것은?', options: ['익명 커뮤니티', '의료기관·보건 선생님', '친구의 짐작'], answer: 1, difficulty: 0.15, explain: '의학 정보는 의료기관과 보건 선생님에게 물어요.' },
            { type: 'short', prompt: '“왜 조심 안 했어?”를 지지하는 말로 바꿔 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '판단하지 않는 말',
          items: [
            { type: 'short', prompt: '고민하는 친구에게 건넬 첫마디를 쓰세요.' },
            { type: 'short', prompt: '그 말을 고른 까닭을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 17. 가정폭력 뒤의 권력과 통제 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-dv-power', [11]);
    const WHEEL = [['경제적 통제', '생활비를 주지 않고 돈을 모두 쥔다'], ['고립', '가족이 친구·친척을 만나지 못하게 한다'], ['위협', '물건을 부수며 “가만 안 둔다”고 한다'], ['깎아내림', '“넌 아무것도 못 해”라고 되풀이한다']];
    const REPEAT = [['같은 구성원에게만 되풀이', 78], ['여러 사람에게 고르게', 14], ['한 번뿐', 8]];
    const REPEAT_T = '가상 사례 분석: 폭력이 향한 대상(가상 자료, %)';
    const NEIGHBOR = { text: '같은 아파트 가상 이웃 가족. 한 어른 구성원이 요즘 장 보러 나오지도 못하고, 휴대폰을 가족이 들고 있다고 한다. 밤에 큰 소리도 들린다. 너는 그 집 아이 민호의 같은 반 친구다.', who: '민호의 친구', motif: 'house', choices: [
      { id: 'care', text: '민호에게 “요즘 괜찮아? 무슨 일 있으면 말해”라고 안전하게 관심을 보인다', result: '민호가 “집에 들어가기 무서워”라고 작게 말한다.', impact: [{ who: '민호', text: '말할 곳이 생긴다', tone: 1 }],
        next: { text: '민호가 “엄마가 아무한테도 말하지 말래”라고 한다.', who: '민호의 친구', choices: [
          { id: 'connect', text: '“그 걱정도 상담 선생님께 같이 말해 보자”며 함께 상담실에 간다', result: '상담 선생님이 민호와 가족의 안전을 살피며 지원 기관과 잇는다.', impact: [{ who: '민호', text: '안전을 함께 살필 어른이 생긴다', tone: 1 }],
            next: { text: '상담 뒤, 민호가 “내가 말해서 집이 더 시끄러워지면 어떡해”라고 걱정한다.', who: '민호의 친구', choices: [
              { id: 'notyou', text: '“네 잘못이 아니야. 선생님이 안전하게 하는 방법을 같이 찾는대”라고 말한다', result: '민호가 조금 마음을 놓는다.', impact: [{ who: '민호', text: '죄책감을 덜어 낸다', tone: 1 }], ending: '청소년인 내가 할 수 있는 일은 안전하게 관심을 보이고, 믿을 어른과 기관에 잇고, 곁을 지키는 것이다.' },
              { id: 'fix', text: '“내가 너희 집에 가서 그만하라고 할게”라고 한다', result: '민호가 더 불안해한다.', impact: [{ who: '민호', text: '위험이 커질까 두려워한다', tone: -1 }], ending: '직접 개입하면 위험이 커질 수 있다. 연결은 어른과 기관에 맡긴다.' }] } },
          { id: 'keep', text: '“그럼 비밀로 할게”라고만 한다', result: '민호는 계속 혼자 견딘다.', impact: [{ who: '민호', text: '도움이 닿지 않는다', tone: -1 }], ending: '안전이 걸린 비밀은 믿을 어른에게 잇는 것이 친구를 지키는 일이다.' }] } },
      { id: 'confront', text: '그 집 문을 두드려 직접 따진다', result: '어른이 화를 내며 문을 닫고, 이후 그 구성원은 더 보이지 않는다.', impact: [{ who: '그 가족 구성원', text: '고립이 더 심해진다', tone: -1 }],
        next: { text: '민호가 학교에서 너를 피한다.', who: '민호의 친구', choices: [
          { id: 'sorry', text: '민호에게 사과하고 상담 선생님께 본 일을 알린다', result: '상담 선생님이 안전하게 살필 방법을 찾는다.', impact: [{ who: '민호', text: '도움이 다시 이어진다', tone: 0 }], ending: '직접 따지기보다 안전하게 관심을 보이고 기관에 잇는 것이 낫다.' },
          { id: 'drop', text: '괜히 끼어들었다며 손을 뗀다', result: '그 가족의 고립은 그대로다.', impact: [{ who: '민호', text: '혼자 남는다', tone: -1 }], ending: '손을 떼는 대신 알맞은 길로 다시 이을 수 있다.' }] } },
      { id: 'ignore', text: '“남의 집 일이니까” 하고 모른 척한다', result: '소리는 계속되고, 민호는 점점 말이 없어진다.', impact: [{ who: '민호', text: '혼자 견딘다', tone: -1 }], ending: '가정폭력은 남의 집 일이 아니라 함께 막아야 할 인권 문제다.' }] };
    const NEIGHBOR_R = [{ id: 'safe', text: '직접 따지기보다 안전하게 관심을 보이고 연결한다' }, { id: 'link', text: '안전이 걸린 일은 믿을 어른과 기관에 잇는다' }, { id: 'notyou', text: '알린 아이의 잘못이 아니다' },
      { id: 'private', text: '남의 집 일에는 끼어들지 않는다', why: '가정폭력은 함께 막아야 할 인권 문제예요.' }, { id: 'hero', text: '내가 직접 해결해야 한다', why: '직접 개입은 위험을 키울 수 있어요. 어른과 기관에 이어요.' }];

    MODS.push(
      M({
        id: 'intro.wheel', type: 'intro', title: '통제의 여러 얼굴',
        method: '통제의 여러 얼굴 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 셋(경제·고립·위협)에 사례를 함께 잇는다.', base: '가지 넷(깎아내림 포함)에 가상 사례 문장을 잇는다.', challenge: '성 역할 고정관념과 이어지는 가지를 짚어 말한다.' },
        intro: {
          teacher: '“가정폭력의 가운데에는 ‘권력과 통제’가 있어요. 통제는 경제, 고립, 위협, 깎아내림처럼 여러 얼굴로 나타나요. 가지마다 가상 사례를 이어 볼까요?” 시연 단추로 사례 카드가 가지에 이어지는 모습을 보여 준다. “때리지 않으면 폭력이 아니잖아요”라는 말이 나오면 “돈을 다 쥐고 친구를 못 만나게 한다면, 그 가족 구성원은 자유로울까요?”라고 되묻는다. 통제는 때리지 않아도 사람의 자유와 존엄을 빼앗는다는 점을 짚는다.',
          student: '가운데 ‘권력과 통제’에서 뻗은 가지마다 알맞은 가상 사례 문장을 이어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '권력과 통제', slots: WHEEL.map((w) => w[0]), cards: WHEEL.map((w) => w[1]).reverse() }, sequence: [{ match: Object.fromEntries(WHEEL) }] },
          art: { draw: 'a paper wheel with spokes radiating from a central circle, each spoke with a small icon (a wallet, a locked door, a cracked cup, a frowning speech bubble), a paper house outline behind the wheel', banner: '통제는 여러 얼굴을 한다', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이며 자세히 묘사하지 않는다. 계획의 ‘아이를 이용함’ 가지는 판이 넷까지라 활동 문항에서 다룬다. 학생에게 자기 가정 이야기를 묻지 않는다.',
      }),
      M({
        id: 'intro.impulse-myth', type: 'intro', title: '“순간적 분노” 통념 자료',
        method: '"순간적 분노" 통념 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '‘분노 조절 문제’만으로 설명되지 않는 까닭을 고른다.', challenge: '다른 해석의 가능성도 하나 말한다.' },
        intro: {
          teacher: '“가상 사례 분석에서 폭력의 78%가 같은 구성원에게만 되풀이되었어요. 순간적으로 화가 나서라면 왜 늘 같은 사람에게만 향할까요?” 시연 단추로 ‘힘이 약한 상대를 골라 통제한다’ 보기가 골라지는 모습을 보여 준다. “화를 못 참는 성격이라 그래요”라는 말이 나오면 “직장 상사 앞에서도 그렇게 화를 낼까요?”라고 되묻는다. 가정폭력은 분노가 아니라 통제의 문제라는 점을 짚는다.',
          student: '폭력이 향한 대상을 분석한 가상 그래프를 읽고, ‘순간적 분노’만으로 설명되지 않는 까닭을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: REPEAT_T, unit: '%', xLabel: '향한 대상', yLabel: '비율', data: REPEAT, question: '‘분노 조절 문제’만으로 설명되지 않는 까닭은?', choices: ['힘이 약한 같은 상대에게만 되풀이된다', '한 번뿐인 경우가 많다', '모두에게 고르게 향한다', '그래프는 해석할 수 없다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with one tall bar shaped like an arrow pointing to the same small paper figure each time, a paper thermometer labeled anger set aside with a question mark', banner: '분노일까, 통제일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '자료는 수업용 가상 값이다. 분노 조절의 어려움이 있는 사람을 모두 가해자로 보지 않게, ‘통제의 대상을 고른다’는 패턴에 초점을 둔다.',
      }),

      M({
        id: 'activity.gender-link', type: 'activity', title: '고정관념과 통제의 연결',
        method: '성 역할 고정관념과 통제의 연결 분석', tool: 'sortboard', minutes: 17,
        levels: { easy: '고정관념 문장 넷을 통제 유형 바구니에 나눈다(틀리면 되돌아옴).', base: '문장 여섯을 나누고, 고정관념을 바꾸는 말과 짝을 가르고, 아이를 이용하는 통제를 가른다.', challenge: '헷갈리는 문장이 더해진 판에서 나누고, 고정관념을 바꾸는 말을 활동지에 하나씩 붙인다.' },
        activity: {
          title: '고정관념 바구니', tool: 'sortboard',
          teacher: '“‘집안 결정은 가장이’, ‘남자는 참지 않는다’ 같은 성 역할 고정관념은 어떤 통제를 정당화할까요? 문장을 통제 유형 바구니에 나눠 봐요.” 카드를 놓을 때마다 “이 말이 당연하게 여겨지면 누가 힘을 갖게 되나요?”라고 묻는다. ‘가장의 권위로 하는 일은 훈육’이라는 학생에게 “훈육이 두려움과 통제로 이어진다면 그것은 존중일까요?”라고 되묻는다. 고정관념은 통제를 당연한 것처럼 보이게 하고, 그래서 성평등이 가정폭력 예방과 이어진다는 점을 짚는다.',
          task: '성 역할 고정관념 문장을 그것이 정당화하는 통제 유형에 나누고, 바꾸는 말을 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('고정관념 문장을 그것이 정당화하는 통제 유형 바구니에 나누세요.', ['경제적 통제', '결정권 독점', '감정·위협', '고립'], [['“돈 관리는 버는 사람이 한다”', '“집에 있는 사람은 돈 쓸 자격이 없다”'], ['“집안 결정은 가장이 한다”'], ['“남자는 화나면 참지 않는 법이다”'], ['“아내는 친정 일에 끼면 안 된다”', '“여자가 밖에 나돌면 안 된다”']], { k: 1, hard: [[], ['“아이 일은 아빠 말이 곧 법이다”'], [], []], d: 0.35 }),
            BOARDQ('고정관념을 정당화하는 말과 바꾸는 말을 나누세요.', ['고정관념을 정당화하는 말', '고정관념을 바꾸는 말'], [['“가장 말에 토 달지 마”', '“남자는 원래 거칠어”'], ['“가족 일은 함께 의논해 정하자”', '“화가 나도 폭력은 선택하지 않는다”']], { k: 1, d: 0.3 }),
            BOARDQ('아이를 이용하는 통제와 아닌 것을 나누세요.', ['아이를 이용하는 통제', '해당 없음'], [['아이 앞에서 다른 부모를 깎아내린다', '“아이를 못 보게 하겠다”고 위협한다'], ['부모가 함께 아이 일정을 정한다', '아이에게 두 부모 모두 사랑한다고 말한다']], { k: 1, d: 0.35, more: { conclude: '성 역할 고정관념은 경제·결정·감정·고립의 통제를 당연한 것처럼 보이게 해요. 그래서 성평등한 가정이 가정폭력 예방과 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '고정관념 문장 하나를 골라 그것을 바꾸는 말을 한 문장으로 쓰세요.' }] },
        notes: '문장은 고정관념을 분석하기 위한 가상 문장이다(정답으로 두지 않음). 특정 성별을 가해자로 단정하지 않게, ‘고정관념이 통제를 정당화한다’는 구조에 초점을 둔다.',
      }),
      M({
        id: 'activity.isolation-dilemma', type: 'activity', title: '고립되어 가는 이웃',
        method: '고립되어 가는 가족 구성원 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 추적하고 근거를 고른다.', challenge: '다른 끝도 가 보고, 청소년인 내가 할 수 있는 범위를 활동지에 정리한다.' },
        activity: {
          title: '민호네 집', tool: 'dilemma',
          teacher: '“가상 이웃 가족에서 한 어른이 점점 밖에 나오지 못하고, 밤에 큰 소리가 들려요. 나는 그 집 아이 민호의 친구예요. 무엇을 할 수 있을까요?” 장면마다 “이 선택은 민호와 그 가족의 안전을 키울까요, 위험을 키울까요?”라고 묻는다. ‘직접 문을 두드려 따진다’를 고른 학생에게 “마음은 용감해요. 그런데 그 뒤 그 가족 구성원은 어떻게 되었나요?”라고 되묻는다. 청소년인 내가 할 수 있는 범위는 안전하게 관심을 보이고, 믿을 어른과 기관에 잇고, 곁을 지키는 것이라는 점을 짚는다.',
          task: '민호네 갈림길을 따라가며 안전하게 돕는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('민호의 친구로서 안전하게 돕는 길을 끝까지 고르고 근거를 고르세요.', NEIGHBOR, [['care', 'connect', 'notyou']], NEIGHBOR_R, ['safe', 'link', 'notyou'], { d: 0.4 }),
            DILQ('‘직접 따진다’로 시작한 길에서 다시 바르게 잇는 선택을 고르고 근거를 고르세요.', { text: NEIGHBOR.text, who: NEIGHBOR.who, motif: NEIGHBOR.motif, choices: NEIGHBOR.choices.filter((c) => c.id !== 'care') }, [['confront', 'sorry']], NEIGHBOR_R, ['safe', 'link'], { d: 0.35 }),
            EXPLOREQ('‘모른 척한다’ 길도 끝까지 가 보고 결과를 견주세요.', NEIGHBOR, NEIGHBOR_R, ['모른 척한 길의 끝을 확인했다', '두 길에서 민호에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '고립은 통제의 한 얼굴이에요. 청소년은 직접 맞서기보다 안전하게 관심을 보이고, 믿을 어른과 기관에 이어요. 알린 아이의 잘못이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '청소년인 내가 할 수 있는 일과 어른·기관에 맡길 일을 나누세요.', columns: ['내가 할 수 있는 일', '어른·기관에 맡길 일'], cells: [['', ''], ['', '']] }] },
        notes: '장면은 가상이며 폭력을 묘사하지 않는다. 지역 지원 기관 번호는 학교가 확인한 번호를 쓴다. 실제로 걱정되는 일이 있으면 수업 뒤 상담 선생님과 이야기할 수 있다고 안내한다.',
      }),
      M({
        id: 'activity.analysis-essay', type: 'activity', title: '권력과 통제 관점 분석 글',
        method: '권력과 통제 관점 분석 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '문단마다 틀(유형 분석 → 고정관념 연결 → 예방과 도움)을 보고 쓴다.', base: '통제 유형 분석 → 고정관념 연결 → 예방교육 취지 → 도움 경로 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, ‘훈육’ 반론에 답한다.' },
        activity: {
          title: '“갈등이 아니라 통제의 문제”', tool: 'rubric-writing',
          teacher: '“‘가정폭력은 갈등이 아니라 통제의 문제다’를 가상 사례로 논증하는 글을 써요.” 먼저 오늘 본 가상 사례에서 통제 유형을 찾아 쓰게 한다. “부부 싸움은 서로 잘못이 있는 거죠”라고 쓴 학생에게 “한쪽이 늘 두려워하고 다른 쪽이 늘 정한다면, 그것을 대등한 다툼이라고 할 수 있을까요?”라고 묻는다. 가정폭력방지법이 학교 예방교육을 둔 취지(미리 알고 함께 막기)와 도움 경로로 글을 맺게 한다.',
          task: '가정폭력을 권력과 통제의 관점으로 분석하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('통제 유형 분석 문단을 쓰세요.', '오늘 본 가상 사례(민호네 등)에서 나타난 통제 유형 둘 이상을 찾아 분석하세요.', ['통제 유형을 둘 이상 짚었다', '가상 사례를 근거로 썼다', '자세히 묘사하지 않았다'], { min: 60, max: 400, sent: [2, 4], must: [['통제']], starter: '가상 사례에서는 ~라는 통제가 나타난다. 또 ~', d: 0.4 }),
            RWQ('고정관념과 잇는 문단을 쓰세요.', '그 통제를 당연하게 보이게 하는 성 역할 고정관념을 찾아 이어 쓰세요.', ['고정관념을 정확히 짚었다', '통제와의 연결을 설명했다', '특정 성별을 깎아내리지 않았다'], { min: 60, max: 400, sent: [2, 4], must: [['고정관념']], plus: '‘가장의 권위로 하는 일은 훈육이다’라는 반론에 답했다', d: 0.4 }),
            RWQ('예방교육의 취지와 잇는 문단을 쓰세요.', '가정폭력방지법이 학교에 해마다 예방교육을 두게 한 취지를 내 글의 주장과 이어 쓰세요.', ['예방교육의 취지를 썼다', '갈등이 아니라 통제라는 주장과 이었다', '사회가 함께 막는다는 점을 밝혔다'], { min: 50, max: 350, sent: [2, 3], must: [['예방']], d: 0.4 }),
            RWQ('도움 경로로 맺는 문단을 쓰세요.', `안전 먼저, 믿을 어른, 학교 상담, 지역 지원 기관(${HELPNO})으로 이어지는 도움 경로로 글을 맺으세요.`, ['도움 경로를 둘 이상 썼다', '안전을 먼저 다루었다', '피해 구성원의 결정을 존중했다'], { min: 40, max: 300, sent: [2, 3], must: [['안전'], ['상담', '기관']], d: 0.4, more: { conclude: '가정폭력은 순간의 갈등이 아니라 힘을 가진 쪽의 통제 문제예요. 고정관념이 그 통제를 당연하게 만들고, 그래서 사회가 함께 예방하고 도움으로 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 글을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['통제 유형 분석', ''], ['고정관념 연결', ''], ['예방교육 취지', ''], ['도움 경로', HELPNO]] }, { type: 'short', prompt: '내 글에서 가장 설득력 있는 문장 하나를 옮겨 쓰세요.' }] },
        notes: '법은 근거 파일의 ‘가정폭력방지법 제4조의3(예방교육)’만 쓰고 조문 내용·처벌은 쓰지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.route', type: 'wrap', title: '연결 경로 점검',
        method: '연결 경로 확인', tool: 'kitchen', minutes: 7,
        levels: { easy: '연결 경로에 표시만 한다.', base: '표시하고, 칸마다 활동지에 메모한다.', challenge: '피해 가족 구성원의 결정을 존중하는 말을 메모한다.' },
        wrap: {
          teacher: '“가정폭력을 알게 되었을 때의 연결 경로를 점검해요 — 안전 먼저, 믿을 어른, 학교 상담, 지역 지원 기관.” 할 일만 표시하게 한다. ‘가해자에게 직접 경고한다’에 표시한 학생에게 “그 뒤 피해 구성원의 안전은 어떻게 될까요?”라고 묻는다. 지역 지원 기관 번호는 학교가 확인한 것을 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '연결 경로', items: [{ id: 'safe', text: '지금 위험하면 안전부터 지킨다' }, { id: 'adult', text: '믿을 어른에게 알린다' }, { id: 'school', text: '학교 상담 선생님과 의논한다' }, { id: 'agency', text: `지역 지원 기관에 잇는다 ${HELPNO}` }, { id: 'warn', text: '가해자에게 직접 경고한다' }, { id: 'post', text: 'SNS에 그 집 이야기를 올린다' }] }, prompt: '연결 경로에 해당하는 것만 표시하세요.', target: { checklist: ['safe', 'adult', 'school', 'agency'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“화가 나서 순간적으로 하는 행동일 뿐이다”에 대한 바른 말은?', options: ['맞다, 분노 조절만 하면 된다', '같은 사람에게 되풀이되는 통제의 문제다', '가족이면 이해해야 한다'], answer: 1, difficulty: 0.2, explain: '가정폭력은 힘을 가진 쪽의 통제 문제예요.' },
            { type: 'short', prompt: '피해 가족 구성원의 결정을 존중하며 건넬 말을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '가정폭력 뒤의 권력과 통제',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '가정폭력은 순간의 분노가 아니라 권력과 ___의 문제다.', answer: '통제' },
            { type: 'table', prompt: '연결 경로를 메모하세요.', columns: ['경로', '메모'], cells: [['안전 먼저', ''], ['학교 상담', ''], ['지역 지원 기관', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 통제 · 고립 · 안전', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '친구·친척을 못 만나게 하는 것은 ___이라는 통제다.', answer: '고립' }] },
        },
      }),
      M({
        id: 'wrap.reframe', type: 'wrap', title: '통념 문장 다시 쓰기',
        method: '통념 문장 다시 쓰기', tool: 'wordcards', minutes: 7,
        levels: { easy: '보기 카드로 인권 문장을 완성한다.', base: '카드로 완성하고, 통념 문장을 직접 고쳐 쓴다.', challenge: '두 문장의 차이를 설명한다.' },
        wrap: {
          teacher: '“‘집안일은 집안에서’라는 통념을 인권의 문장으로 바꿔 봐요.” 빈칸을 채운 뒤 직접 고쳐 쓰게 한다. ‘가장’ 카드를 넣은 학생에게 “한 사람이 모든 것을 정하는 집에서 다른 가족의 권리는 어디 있을까요?”라고 되묻는다. 도전 반은 두 문장의 차이를 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '가족 안에서도 모든 사람은 ___하고 안전할 권리가 있다.' }, { id: 'f2', label: '가정폭력은 집안일이 아니라 사회가 함께 막을 ___ 문제다.' }, { id: 'f3', label: '가족 일은 한 사람이 아니라 ___ 의논해 정한다.' }], cards: ['존엄', '인권', '함께', '가장이', '조용히'] }, prompt: '인권 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '존엄', f2: '인권', f3: '함께' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“가장의 권위로 하는 일은 훈육이다”에 대한 바른 생각은?', options: ['맞다, 가장은 무엇이든 정할 수 있다', '두려움과 통제로 이어진다면 훈육이 아니라 폭력이다', '아이에게만 해당한다'], answer: 1, difficulty: 0.2, explain: '어떤 이유로도 통제와 폭력은 정당화되지 않아요.' },
            { type: 'short', prompt: '“집안일은 집안에서”를 인권을 담은 문장으로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '통념 다시 쓰기',
          items: [
            { type: 'short', prompt: '“가장의 권위로 하는 일은 훈육이다”를 인권을 담은 문장으로 고쳐 쓰세요.' },
            { type: 'short', prompt: '고친 문장이 원래 문장과 어떻게 다른지 한 줄로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 18. 돌봄 노동과 성평등한 일터 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-care-work', [11]);
    const CAREER = [['입사', 1], ['3년', 3], ['5년', 4], ['7년', 4], ['10년', 5]];
    const CAREER_B = [['입사', 1], ['3년', 3], ['5년', 5], ['7년', 6], ['10년', 7]];
    const CARE = [{ id: 'meal', text: '하루 세 끼 식사 준비', price: 60000 }, { id: 'child', text: '아이 돌봄 8시간', price: 90000 }, { id: 'nurse', text: '아픈 가족 병간호 하루', price: 120000 }, { id: 'clean', text: '집 청소·빨래', price: 40000 }, { id: 'game', text: '게임 아이템 사기', price: 30000 }];
    const SEG = [['간호사(여 92%·남 8%)', '조종사(여 5%·남 95%)', '보육교사(여 96%·남 4%)', '건설 현장 기술자(여 3%·남 97%)'], ['약사(여 55%·남 45%)', '회계사(여 48%·남 52%)', '공무원(여 50%·남 50%)', '의사(여 40%·남 60%)']];

    MODS.push(
      M({
        id: 'intro.career-line', type: 'intro', title: '두 사람의 경력 꺾은선',
        method: '가상 두 사람의 경력 꺾은선', tool: 'chart', minutes: 7,
        levels: { easy: '차이가 생긴 지점을 함께 고른다.', base: '차이가 생긴 지점과 그 까닭을 말한다.', challenge: '경력 단절을 막을 제도를 추측해 말한다.' },
        intro: {
          teacher: '“같은 해 입사한 가상 두 사람 가운데 한 사람의 직급 꺾은선이에요. 이 사람은 5년 차에 아이 돌봄으로 1년을 쉬었어요. 어느 지점부터 꺾은선이 평평해졌나요?” 시연 단추로 ‘5년’ 지점이 골라지는 모습을 보여 준다. “쉬었으니 늦어지는 건 당연하죠”라는 말이 나오면 “돌봄을 한 사람만 맡게 되는 구조라면, 그것을 개인의 선택이라고만 할 수 있을까요?”라고 되묻는다. 경력 단절은 돌봄을 한쪽에 맡기는 구조와 이어져 있다는 점을 짚는다.',
          student: '같은 해 입사한 가상 인물의 직급 꺾은선을 읽고, 돌봄으로 경력이 끊긴 지점을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '돌봄으로 1년 쉰 사람의 직급 변화(가상, 단계)', unit: '단계', xLabel: '근무 연차', yLabel: '직급 단계', data: CAREER, question: '꺾은선이 평평해지기 시작한 지점은?', choices: CAREER.map((c) => c[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'two paper line graphs drawn as climbing paths up a hill, one path flattening into a plateau where a paper stroller sits, the other path continuing upward, a paper office building at the top', banner: '어디서 길이 갈렸을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: `값은 수업용 가상 값이다. 쉬지 않은 사람의 직급 변화(가상): ${CAREER_B.map((c) => `${c[0]} ${c[1]}`).join(' · ')} — 교사가 두 줄을 칠판에 함께 그려 견준다.`,
      }),
      M({
        id: 'intro.care-value', type: 'intro', title: '돌봄 일의 값 매기기',
        method: '돌봄 일의 값 매기기', tool: 'economy', minutes: 7,
        levels: { easy: '돌봄 항목 둘(식사·아이 돌봄)을 함께 골라 합계를 본다.', base: '돌봄 항목 넷을 골라 합계를 보고, 돌봄과 상관없는 항목은 뺀다.', challenge: '값으로 매길 수 없는 돌봄의 가치를 말한다.' },
        intro: {
          teacher: '“집에서 하는 돌봄 일을 밖에 맡기면 얼마가 들까요? 가상 비용표에서 하루 돌봄 일을 골라 합계를 보세요.” 시연 단추로 네 항목이 골라져 합계가 31만 원이 되는 모습을 보여 준다. “집안일은 돈 버는 일이 아니잖아요”라는 말이 나오면 “남에게 맡기면 31만 원이 드는 일을 매일 누군가 하고 있다면, 그 일은 가치가 없을까요?”라고 되묻는다. 돌봄은 경제적 가치가 있는 노동이고, 값으로 다 매길 수 없는 가치도 있다는 점을 짚는다.',
          student: '가상 비용표에서 하루 돌봄 일을 밖에 맡길 때 드는 비용을 골라 합계를 살펴보세요.',
          demo: { tool: 'economy', options: { mode: 'budget', items: CARE, budget: 400000 }, sequence: [{ budget: { max: 400000, must: ['meal', 'child', 'nurse', 'clean'], not: ['game'] } }] },
          art: { draw: 'a paper price tag hanging from a teapot, a stroller and a first-aid box, paper coins stacking beside them, a paper calculator showing a total', banner: '돌봄의 값은 얼마일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '비용은 수업용 가상 값이다(실제 시세가 아니다). 학생 집의 돌봄 사정을 묻지 않는다.',
      }),

      M({
        id: 'activity.segregation', type: 'activity', title: '직업 성별 분리 자료',
        method: '직업 성별 분리 자료 해석', tool: 'sortboard', minutes: 17,
        levels: { easy: '가상 성비 카드 넷을 ‘한쪽 쏠림’·‘고르게 섞임’에 나눈다(틀리면 되돌아옴).', base: '카드 여덟을 나누고, 쏠림의 영향을 가르고, 쏠림의 원인을 가른다.', challenge: '모두 나눈 뒤 쏠림의 원인 둘을 활동지에서 견준다.' },
        activity: {
          title: '성비 카드 바구니', tool: 'sortboard',
          teacher: '“가상 직업별 성비 카드예요. 한쪽으로 쏠린 직업과 고르게 섞인 직업으로 나눠 볼까요?” 나눈 뒤 쏠림이 임금과 인식에 주는 영향을 가르게 한다. “간호사가 여자가 많은 건 여자에게 맞아서죠”라는 학생에게 “맞아서일까요, 그렇게 기대받고 그렇게 길러져서일까요?”라고 되묻는다. 직업의 성별 분리는 개인의 적성보다 고정관념과 돌봄 분담의 구조에서 생기고, 돌봄 직업의 낮은 평가와도 이어진다는 점을 짚는다.',
          task: '가상 직업 성비 카드를 나누고, 쏠림의 영향과 원인을 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('가상 직업 성비 카드를 바구니에 나누세요.', ['한쪽 쏠림', '고르게 섞임'], SEG, { k: 2, d: 0.3 }),
            BOARDQ('쏠림이 미치는 영향을 바구니에 나누세요.', ['임금·평가에 주는 영향', '인식에 주는 영향'], [['돌봄 직업의 임금이 낮게 매겨지기 쉽다', '한쪽 성별 직업의 승진 기회가 좁아진다'], ['“그 직업은 그 성별 일”이라는 생각이 굳는다', '다른 성별 지원자가 망설이게 된다']], { k: 1, d: 0.35 }),
            BOARDQ('쏠림의 원인과 원인이 아닌 것을 나누세요.', ['쏠림의 원인', '원인으로 보기 어려운 것'], [['어릴 때부터 성별로 다른 기대를 받는다', '돌봄을 한쪽 성별이 주로 맡는다'], ['성별에 따라 타고난 직업이 정해져 있다', '한 성별이 그 일을 원래 더 잘한다']], { k: 1, d: 0.35, more: { conclude: '직업의 성별 분리는 타고난 적성보다 고정관념과 돌봄 분담의 구조에서 생기고, 돌봄 직업의 낮은 평가와 선택의 좁아짐으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쏠림의 원인 두 가지를 견주어, 학교가 바꿀 수 있는 것을 한 문장으로 쓰세요.' }] },
        notes: '성비는 수업용 가상 값이다(실제 통계는 고용노동부·통계청 자료로 확인해 바꿔 쓴다). ‘원인으로 보기 어려운 것’ 카드는 함정으로만 쓰고 바로잡는다.',
      }),
      M({
        id: 'activity.workplace-design', type: 'activity', title: '성평등한 일터 설계',
        method: '성평등한 일터 설계 콜라주', tool: 'collage', minutes: 17,
        levels: { easy: '요소 둘(돌봄 지원·유연 근무)만 조각으로 붙인다.', base: '요소 넷(돌봄 지원·유연 근무·공정 평가·쉼 공간)을 조각으로 붙이고, 요소마다 설명을 활동지에 단다.', challenge: '요소 넷을 붙이고, 비용과 효과를 활동지에 함께 쓴다.' },
        activity: {
          title: '가상 회사 평면도', tool: 'collage',
          teacher: '“가상 회사의 평면도를 설계해요. 돌봄 지원, 유연 근무, 공정 평가 같은 요소를 조각으로 붙이고, 요소마다 설명을 활동지에 써요.” 먼저 어떤 요소를 넣을지 정하게 한다. “그런 건 회사가 손해 아니에요?”라는 학생에게 “일하는 사람이 경력을 이어 가면 회사에는 무엇이 남을까요?”라고 묻는다. 성평등한 일터는 돌봄을 성별과 상관없이 모두의 일로 보고, 그것을 제도로 뒷받침하는 곳이라는 점을 짚는다.',
          task: '가상 회사 평면에 성평등한 일터 요소를 조각으로 붙여 설계해요.', levels: { easy: { maxPieces: 10 }, base: {}, challenge: {} },
          items: [
            { prompt: '회사 평면의 방 틀을 긴 네모 조각 3개 이상으로 만드세요.', toolOptions: { shapes: ['rect', 'square'], colors: ['하양', '파랑', '노랑', '초록'] }, target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['사무 공간과 지원 공간을 나누었다', '평면이 한눈에 보인다'] }, difficulty: 0.2 },
            { prompt: '돌봄 지원 공간(아이 돌봄방 등)을 하트 조각 1개 이상으로 표시하세요.', toolOptions: { shapes: ['heart', 'circle', 'square'], colors: ['분홍', '노랑', '초록'] }, target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['돌봄 지원이 성별과 상관없이 쓰이게 했다', '돌봄 지원의 설명을 활동지에 쓸 준비가 됐다'] }, difficulty: 0.25 },
            { prompt: '유연 근무·공정 평가 요소를 별 조각 2개 이상으로 표시하세요.', toolOptions: { shapes: ['star', 'circle', 'triangle'], colors: ['노랑', '주황', '파랑', '보라'] }, target: { has: [{ shape: 'star', min: 2 }], selfCheck: ['유연 근무 요소를 넣었다', '공정 평가 요소를 넣었다', '쉼 공간도 생각했다'] }, difficulty: 0.3, conclude: '성평등한 일터는 돌봄을 모두의 일로 보고 돌봄 지원·유연 근무·공정 평가로 뒷받침해, 누구나 경력을 이어 가게 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '요소마다 설명과 비용·효과를 쓰세요.', columns: ['요소', '설명', '비용과 효과'], cells: [['돌봄 지원', '', ''], ['유연 근무', '', ''], ['공정 평가', '', ''], ['쉼 공간', '', '']] }] },
        notes: '조각 판에는 글자를 쓸 수 없어 요소 설명은 활동지에 쓴다. 실제 회사 제도 이름·법정 제도 요건은 다루지 않는다(일·가정 양립 제도는 12학년 주제에서 다룬다).',
      }),
      M({
        id: 'activity.self-plan', type: 'activity', title: '나의 진로·돌봄 자립 계획',
        method: '나의 진로·돌봄 자립 계획 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(10년 뒤 일 → 돌봄 → 분담 방법)을 보고 쓴다.', base: '10년 뒤 진로 → 돌봄 책임 → 분담 방법 → 일터에 바라는 것 차례로 계획을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 변수(이직·가족 변화)에 대한 대응을 넣는다.' },
        activity: {
          title: '10년 뒤의 나', tool: 'rubric-writing',
          teacher: '“10년 뒤 내 진로와 돌봄 책임을 함께 그린 계획을 써요. 내가 맡을 돌봄(나 자신·가족)은 무엇이고, 어떻게 나눌까요?” 먼저 진로를 쓰고, 그다음 돌봄을 쓰게 한다. “돌봄은 나중에 배우자가 하겠죠”라고 쓴 학생에게 “배우자도 일을 한다면 돌봄은 누구의 몫일까요? 내가 맡을 몫은요?”라고 묻는다. 성별 대신 각자의 일정과 능력으로 나누는 계획이 자립 계획이라는 점을 짚는다. 실제 가족 사정은 쓰지 않아도 된다고 말해 준다.',
          task: '10년 뒤 내 진로와 돌봄 책임을 함께 그린 계획 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('10년 뒤의 진로를 2문장으로 쓰세요.', '10년 뒤 내가 하고 싶은 일과 그 근거(흥미·적성)를 쓰세요.', ['진로를 밝혔다', '흥미·적성 근거를 썼다', '성별을 까닭으로 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['흥미', '적성', '좋아']], starter: '10년 뒤 나는 ~을 하고 있을 것이다. 왜냐하면 ~', d: 0.35 }),
            RWQ('내가 맡을 돌봄 책임을 2문장으로 쓰세요.', '10년 뒤 내가 맡을 돌봄(나 자신·함께 사는 사람·가족)을 쓰세요.', ['돌봄을 내 몫으로 넣었다', '구체적인 일로 썼다', '돌봄을 남에게만 미루지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['돌봄', '집안일']], d: 0.35 }),
            RWQ('돌봄 분담 방법을 2~3문장으로 쓰세요.', '함께 사는 사람과 돌봄을 어떻게 나눌지, 성별이 아니라 일정·능력으로 쓰세요.', ['분담 방법이 구체적이다', '성별 고정관념이 없다', '함께 정하는 과정이 있다'], { min: 50, max: 350, sent: [2, 4], must: [['분담', '나누']], plus: '이직·가족 변화 같은 변수에 대한 대응을 넣었다', d: 0.4 }),
            RWQ('일터에 바라는 것을 2문장으로 쓰세요.', '진로와 돌봄을 함께 해내기 위해 일터에 바라는 제도나 문화를 쓰세요.', ['바라는 것을 구체적으로 썼다', '오늘 배운 요소와 이었다', '실현할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['일터', '회사', '직장']], d: 0.4, more: { conclude: '자립 계획은 진로와 돌봄을 함께 그리고, 성별이 아니라 일정과 능력으로 돌봄을 나누며, 그것을 받쳐 줄 일터를 찾는 계획이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 계획을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['성별 고정관념 없음', ''], ['돌봄 분담 구체성', ''], ['진로 근거', '']] }, { type: 'short', prompt: '내 계획에서 지금부터 시작할 수 있는 일 하나를 쓰세요.' }] },
        notes: '실제 가족 사정을 쓰게 하지 않는다. 미래 동반자·결혼을 전제하지 않고 ‘함께 사는 사람’으로 열어 둔다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.one-change', type: 'wrap', title: '일터에 바라는 변화 하나',
        method: '일터에 바라는 변화 하나', tool: 'wordcards', minutes: 7,
        levels: { easy: '변화 카드 하나를 고르기만 한다.', base: '고르고, 그 까닭을 쓴다.', challenge: '그 변화가 이루어질 조건을 쓴다.' },
        wrap: {
          teacher: '“성평등한 일터를 위해 가장 바라는 변화 하나는 무엇일까요?” 빈칸 문장을 채운 뒤 내가 바라는 변화와 까닭을 쓰게 한다. “아무것도 안 바뀔 것 같아요”라는 학생에게 “그 변화가 이루어지려면 무엇이 필요할까요?”라고 묻는다. 도전 반은 실현 조건을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '일하는 시간과 장소를 조절하는 ___ 근무' }, { id: 'f2', label: '부모 누구나 쓸 수 있는 ___휴직 보장' }, { id: 'f3', label: '성별이 아니라 성과로 매기는 공정 ___' }], cards: ['유연', '육아', '평가', '야간', '퇴직'] }, prompt: '일터 변화 카드의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '유연', f2: '육아', f3: '평가' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“경력 단절은 개인 선택의 결과다”에 대한 바른 생각은?', options: ['맞다, 개인이 선택했다', '돌봄을 한쪽에 맡기는 구조와 일터 제도도 원인이다', '경력 단절은 없다'], answer: 1, difficulty: 0.2, explain: '경력 단절은 돌봄 분담 구조와 일터 제도와 이어져 있어요.' },
            { type: 'short', prompt: '내가 가장 바라는 일터 변화 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌봄 노동과 성평등한 일터',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '돌봄 때문에 일을 그만두거나 쉬어 경력이 끊기는 것을 경력 ___이라고 한다.', answer: '단절' },
            { type: 'short', prompt: '돌봄 노동의 가치를 한 문장으로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 단절 · 돌봄 · 유연', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '___은 경제적 가치가 있는 노동이다.', answer: '돌봄' }] },
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '돌봄에 대한 생각 변화',
        method: '돌봄에 대한 생각 변화 점검', tool: 'emotion', minutes: 7,
        levels: { easy: '수업 전·뒤 생각 카드만 나눈다.', base: '나눈 뒤, 바뀐 점을 쓴다.', challenge: '친구와 생각이 다른 점을 쓴다.' },
        wrap: {
          teacher: '“오늘 수업 전과 뒤, 돌봄에 대한 생각은 어떻게 달라졌을까요? 가상 학생의 생각 카드를 ‘수업 전’과 ‘수업 뒤’로 나눠 봐요.” 카드를 나눈 뒤 내 생각이 바뀐 점을 쓰게 한다. 생각이 그대로인 학생에게 “그대로여도 괜찮아요. 그 근거를 쓰는 것이 오늘의 정리예요”라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: [{ id: 'before', label: '수업 전 생각(가상 학생)' }, { id: 'after', label: '수업 뒤 생각(가상 학생)' }], cards: [{ id: 'b1', text: '돌봄은 돈이 안 되는 일이다' }, { id: 'b2', text: '경력 단절은 본인 선택이다' }, { id: 'a1', text: '돌봄은 가치가 있는 노동이다' }, { id: 'a2', text: '돌봄은 성별과 상관없이 모두의 일이다' }] }, prompt: '가상 학생의 생각 카드를 수업 전과 수업 뒤로 나누세요.', target: { sort: { before: ['b1', 'b2'], after: ['a1', 'a2'] } }, difficulty: 0.2 },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '‘돌봄은 모두의 일이다’라는 문장', feeling: '생각', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '매우 그렇다' } }, prompt: '지금 내 생각을 1~5점으로 고르세요(익명).', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'short', prompt: '돌봄에 대한 내 생각이 바뀐 점(또는 그대로인 근거)을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌봄에 대한 내 생각',
          items: [
            { type: 'short', prompt: '오늘 수업에서 돌봄에 대한 생각을 움직인 자료 하나를 쓰세요.' },
            { type: 'short', prompt: '내 생각과 친구 생각이 다른 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 19. 성인기의 성적 권리와 책임 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-adult-rights', [12]);
    const RIGHTS = [['정보 접근권', '정확한 성 건강 정보를 찾아 알 권리'], ['건강권', '검진·상담으로 몸과 마음을 지킬 권리'], ['자기결정권', '관계와 몸에 대한 결정을 스스로 내릴 권리'], ['폭력으로부터의 자유', '어떤 관계에서도 폭력을 당하지 않을 권리'], ['차별 금지', '성별 때문에 불리하게 대우받지 않을 권리']];
    const SELF = [['진로', 72], ['돈 관리', 65], ['연애·관계', 58], ['건강 관리', 31], ['다른 사람 존중', 12]];
    const SELF_T = '“성인이 되면 스스로 결정할 일” 응답(가상 고3 설문, %)';
    const FRESH = { text: '가상 인물 다은(20세)은 대학 신입생이다. 동아리 환영회에서 선배가 “신입은 다 마셔야지”라며 술을 계속 따른다. 다은은 이미 그만 마시고 싶다. 너는 다은의 입장에서 고른다.', who: '다은', motif: 'cloud', choices: [
      { id: 'say', text: '“저는 여기까지 마실게요”라고 분명히 말하고 물을 마신다', result: '선배가 잠깐 머쓱해하지만 다른 신입생들도 따라 거절한다.', impact: [{ who: '다은', text: '자기 몸을 스스로 지킨다', tone: 1 }],
        next: { text: '모임이 끝나고, 한 선배가 “데려다줄게”라며 다은의 팔을 잡는다. 다은은 혼자 가고 싶다.', who: '다은', choices: [
          { id: 'clear', text: '“괜찮아요, 친구랑 같이 갈게요”라고 말하고 친구에게 연락한다', result: '선배가 “그래, 조심히 가”라며 물러난다.', impact: [{ who: '다은', text: '결정이 존중된다', tone: 1 }],
            next: { text: '다음 날 다은은 동아리 단톡방에서 술을 강요하는 분위기가 걱정된다.', who: '다은', choices: [
              { id: 'suggest', text: '동아리 임원에게 “술 강요 없는 환영회 규칙”을 제안하고, 필요하면 학교 상담 창구를 알아본다', result: '다음 모임부터 “원하는 만큼만” 규칙이 생긴다.', impact: [{ who: '다른 신입생', text: '안전한 모임이 된다', tone: 1 }], ending: '성인의 권리는 내 결정을 지키는 데서 나아가, 모두가 존중받는 규칙을 만드는 책임으로 이어진다.' },
              { id: 'leave', text: '말해 봐야 소용없다며 동아리를 조용히 그만둔다', result: '다은은 벗어났지만 분위기는 그대로다.', impact: [{ who: '다른 신입생', text: '같은 일을 겪을 수 있다', tone: -1 }], ending: '떠나는 것도 선택이지만, 알리고 바꾸면 다른 사람도 지킬 수 있다.' }] } },
          { id: 'go', text: '분위기 깰까 봐 원치 않지만 따라간다', result: '다은은 내내 불편하고 불안하다.', impact: [{ who: '다은', text: '원치 않는 결정을 한다', tone: -1 }], ending: '분위기 때문에 바꾼 결정은 자유로운 결정이 아니다. 거절은 성인의 권리다.' }] } },
      { id: 'drink', text: '분위기를 깨기 싫어 계속 마신다', result: '다은은 몸을 가누기 어려워지고 무서워진다.', impact: [{ who: '다은', text: '건강과 안전이 위험해진다', tone: -1 }],
        next: { text: '친구 서윤이 다은의 상태를 알아차렸다. 이번엔 서윤의 입장에서 고른다.', who: '서윤', choices: [
          { id: 'help', text: '다은 곁에 머물며 안전하게 집에 가도록 돕고, 강요한 일을 임원에게 알린다', result: '다은이 무사히 집에 가고, 다음 모임 규칙이 바뀐다.', impact: [{ who: '다은', text: '안전해진다', tone: 1 }], ending: '친구의 상태를 알아차리고 곁에 있는 것이 주변인의 책임이다.' },
          { id: 'away', text: '“알아서 하겠지” 하고 먼저 간다', result: '다은은 혼자 남아 위험에 놓인다.', impact: [{ who: '다은', text: '더 위험해진다', tone: -1 }], ending: '의식이 흐린 친구를 혼자 두지 않는다. 그 상태의 대답은 동의가 될 수 없다.' }] } },
      { id: 'escape', text: '말없이 화장실에 간다며 자리를 빠져나간다', result: '다은은 벗어났지만 선배는 다른 신입생에게 계속 술을 권한다.', impact: [{ who: '다은', text: '스스로는 지킨다', tone: 0 }], ending: '피하는 것도 나를 지키는 방법이다. 분명히 말하면 다른 사람에게도 길이 열린다.' }] };
    const FRESH_R = [{ id: 'own', text: '내 몸과 관계에 대한 결정은 내가 내린다(자기결정권)' }, { id: 'safe', text: '나와 다른 사람의 건강과 안전을 함께 지킨다(책임)' }, { id: 'rule', text: '모두가 존중받는 규칙을 만드는 데 참여한다' },
      { id: 'adult', text: '성인이니 책임 없이 마음대로 해도 된다', why: '성인의 권리에는 다른 사람을 존중할 책임이 짝지어져요.' }, { id: 'mood', text: '분위기를 맞추는 것이 어른스러움이다', why: '분위기 때문에 바꾼 결정은 자유로운 결정이 아니에요.' }];

    MODS.push(
      M({
        id: 'intro.rights-cards', type: 'intro', title: '다섯 권리와 성인 생활 장면',
        method: '다섯 권리와 장면 잇기', tool: 'wordcards', minutes: 7,
        levels: { easy: '권리 셋을 장면에 함께 잇는다.', base: '권리 다섯을 가상 성인 생활 장면에 잇는다.', challenge: '두 권리가 겹치는 장면을 찾아 말한다.' },
        intro: {
          teacher: '“성인이 되면 누리는 성적 권리 다섯 가지 — 정보 접근권, 건강권, 자기결정권, 폭력으로부터의 자유, 차별 금지 — 를 가상 성인 생활 장면에 이어 봐요.” 시연 단추로 권리 카드가 장면 빈칸에 들어가는 모습을 보여 준다. “성인이면 그냥 다 자유 아닌가요?”라는 말이 나오면 “내 권리만큼 상대도 같은 권리를 갖는다면, 나에게는 무엇이 생길까요?”라고 되묻는다. 권리마다 짝이 되는 책임이 있다는 것이 오늘의 질문이라고 밝힌다.',
          student: '성인이 되면 누리는 성적 권리 다섯 가지를 가상 성인 생활 장면에 이어 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '병원에서 피임과 검진을 상담한다 → ___' }, { id: 'f2', label: '면접에서 성별 때문에 탈락하지 않는다 → ___' }, { id: 'f3', label: '연인과의 관계를 스스로 정한다 → ___' }, { id: 'f4', label: '믿을 만한 누리집에서 성 건강 정보를 찾는다 → ___' }, { id: 'f5', label: '헤어진 연인의 위협에서 보호받는다 → ___' }], cards: ['건강권', '차별 금지', '자기결정권', '정보 접근권', '폭력으로부터의 자유'] }, sequence: [{ fill: { f1: '건강권', f2: '차별 금지', f3: '자기결정권', f4: '정보 접근권', f5: '폭력으로부터의 자유' } }] },
          art: { draw: 'five paper key cards hanging from a ring, each key with a small icon (a book, a heart with a cross, a compass, a shield, a balanced scale), a paper young adult holding the ring at a doorway', banner: '성인이 누리는 다섯 권리', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: `권리 뜻풀이: ${RIGHTS.map((r) => `${r[0]} — ${r[1]}`).join(' / ')}. 장면은 가상이며 학생의 연애·건강 상태를 묻지 않는다.`,
      }),
      M({
        id: 'intro.adult-q', type: 'intro', title: '스무 살이 되면 바뀌는 것',
        method: '스무 살이 되면 바뀌는 것 자료', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '책임이 함께 빠진 응답(가장 낮은 막대)을 찾는다.', challenge: '설문 문항을 권리와 책임이 함께 드러나게 고쳐 말한다.' },
        intro: {
          teacher: '“가상 고3 설문에서 ‘성인이 되면 스스로 결정할 일’로 진로 72%, 돈 관리 65%가 나왔어요. 그런데 ‘다른 사람 존중’은 12%예요. 무엇이 빠져 있을까요?” 시연 단추로 ‘다른 사람 존중’ 막대가 골라지는 모습을 보여 준다. “존중은 결정할 일이 아니잖아요”라는 말이 나오면 “내 결정이 다른 사람에게 닿는다면, 존중도 내가 결정하는 일 아닐까요?”라고 되묻는다. 성인기의 자유는 책임과 함께 온다는 점을 짚는다.',
          student: '“성인이 되면 스스로 결정할 일”을 물은 가상 설문 그래프를 읽고, 책임이 함께 빠져 있는 응답을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: SELF_T, unit: '%', xLabel: '응답', yLabel: '비율', data: SELF, question: '책임이 가장 덜 떠올려진 응답은?', choices: SELF.map((s) => s[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'a paper calendar page turning to the number twenty, a paper young adult stepping through a door holding a key and a small balance scale, a paper bar chart on the wall behind', banner: '스무 살, 무엇이 바뀔까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문 값은 수업용 가상 값이다.',
      }),

      M({
        id: 'activity.pair-map', type: 'activity', title: '다섯 권리와 짝 책임',
        method: '권리-책임 짝 지도', tool: 'mindmap', minutes: 17,
        levels: { easy: '권리 셋에 짝 책임을 붙인다(바로 확인).', base: '권리 다섯에 짝 책임을 붙이고, 실천 예를 권리 가지에 나누고, 부딪히는 권리의 해결을 고른다.', challenge: '헷갈리는 카드가 섞인 판에서 붙이고, 부딪히는 권리의 해결을 활동지에 메모한다.' },
        activity: {
          title: '권리 가지와 책임 열매', tool: 'mindmap',
          teacher: '“다섯 권리 가지마다 짝이 되는 책임을 달아요. 정보 접근권의 짝은 무엇일까요? 정확한 정보를 확인하고 나누는 책임이겠죠.” 카드를 붙일 때마다 “상대도 이 권리를 가진다면, 나는 무엇을 해야 할까요?”라고 묻는다. ‘권리는 법이 다 정해 준다’는 학생에게 “법이 정해도, 일상에서 지키는 것은 누구일까요?”라고 되묻는다. 권리는 내가 행사하고 상대의 같은 권리를 존중할 때 완성된다는 점을 짚는다.',
          task: '다섯 권리 가지마다 짝 책임과 실천 예를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('권리 가지마다 짝이 되는 책임을 붙이세요.', [['정보 접근권', '정확한 정보를 확인하고 소문을 퍼뜨리지 않는다'], ['건강권', '나와 상대의 건강을 함께 챙긴다'], ['자기결정권', '상대의 결정과 거절을 존중한다'], ['폭력으로부터의 자유', '어떤 관계에서도 폭력을 쓰지 않는다'], ['차별 금지', '성별로 사람을 다르게 대하지 않는다']], { k: 3, extra: ['내 권리가 상대 권리보다 앞선다'], d: 0.3, opt: { topic: '성인의 성적 권리' } }),
            SORTQ('실천 예를 알맞은 권리 가지에 나누세요.', ['정보 접근권', '건강권', '자기결정권'], [['공공 보건 누리집에서 정보를 확인한다', '모르는 것은 의료인에게 묻는다'], ['정기 검진을 받는다', '아플 때 미루지 않고 진료받는다'], ['원치 않는 만남을 거절한다', '상대가 “싫어”라고 하면 멈춘다']], { k: 1, traps: ['상대의 휴대폰을 몰래 확인한다'], d: 0.35, opt: { topic: '권리와 실천' } }),
            PICKQ('두 사람의 권리가 부딪힐 때 알맞은 해결만 고르세요.', ['서로의 결정을 묻고 둘 다 지킬 방법을 찾는다', '한쪽이라도 원치 않으면 하지 않는 쪽을 고른다'], ['목소리가 큰 쪽이 정한다', '나이 많은 쪽 결정을 따른다'], { d: 0.35, opt: { basket: '알맞은 해결', topic: '부딪히는 권리' }, more: { conclude: '성인의 성적 권리는 다섯 권리와 짝 책임으로 완성돼요. 권리가 부딪히면 묻고, 둘 다 지킬 방법을 찾고, 원치 않는 쪽을 존중해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 사람의 권리가 부딪히는 가상 장면 하나와 해결 방법을 쓰세요.' }] },
        notes: '권리 다섯 가지의 묶음과 뜻풀이는 사람 확인 목록에 있다. 학생의 연애·건강 상태를 묻지 않는다.',
      }),
      M({
        id: 'activity.scenario-dilemma', type: 'activity', title: '성인 첫해의 갈림길',
        method: '성인 첫해 갈림길 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 권리와 책임이 함께 지켜지는 결과를 보고 근거를 고른다.', challenge: '다른 끝도 가 보고, 친구 서윤의 시점 결과도 견준다.' },
        activity: {
          title: '다은의 신입생 환영회', tool: 'dilemma',
          teacher: '“가상 인물 다은은 스무 살 대학 신입생이에요. 동아리 환영회에서 선배가 술을 계속 따라요. 다은은 그만 마시고 싶어요. 어떻게 할까요?” 장면마다 “이 선택에서 다은의 어떤 권리가 지켜지거나 흔들리나요?”라고 묻는다. ‘성인이니 마음대로 해도 된다’ 카드를 고른 학생에게 “선배가 마음대로 술을 권한 것도 그 논리일까요? 다은의 권리는요?”라고 되묻는다. 성인의 권리는 내 결정을 지키고, 다른 사람의 안전을 함께 챙기고, 존중의 규칙을 만드는 책임으로 이어진다는 점을 짚는다.',
          task: '다은의 갈림길을 따라가며 권리와 책임이 함께 지켜지는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('다은의 입장에서 권리와 책임이 함께 지켜지는 길을 끝까지 고르고 근거를 고르세요.', FRESH, [['say', 'clear', 'suggest']], FRESH_R, ['own', 'safe', 'rule'], { d: 0.4 }),
            DILQ('‘계속 마신다’로 시작한 길에서 친구 서윤의 알맞은 선택을 고르고 근거를 고르세요.', { text: FRESH.text, who: FRESH.who, motif: FRESH.motif, choices: FRESH.choices.filter((c) => c.id !== 'say') }, [['drink', 'help']], FRESH_R, ['safe'], { d: 0.35 }),
            EXPLOREQ('‘말없이 빠져나간다’ 길도 끝까지 가 보고 결과를 견주세요.', FRESH, FRESH_R, ['빠져나간 길의 끝을 확인했다', '두 길에서 다은과 다른 신입생에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '성인의 권리는 분명히 거절하고 스스로 결정하는 것에서 시작해, 다른 사람의 안전을 함께 챙기고 존중의 규칙을 만드는 책임으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '술 강요가 없는 모임 규칙 하나를 제안하는 문장을 쓰세요.' }] },
        notes: '인물은 가상의 20세 대학생이다. 음주 장면은 강요와 거절에만 초점을 두고 자세히 묘사하지 않는다. 학생에게 음주 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.charter', type: 'activity', title: '나의 성인기 권리·책임 선언문',
        method: '나의 성인기 권리·책임 선언문', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(“나는 ~할 권리가 있고, ~할 책임을 진다”)을 보고 쓴다.', base: '권리 셋 이상 → 짝 책임 → 실천 행동 → 맺음 차례로 선언문을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 선언문을 지키기 어려운 순간의 대응을 쓴다.' },
        activity: {
          title: '성인기 선언문 쓰기', tool: 'rubric-writing',
          teacher: '“곧 성인이 되는 나에게 주는 선언문을 써요. 다섯 권리와 짝 책임, 그리고 실천 행동이 들어가야 해요.” 먼저 권리를 고르고 짝 책임을 붙이게 한다. “나는 자유롭게 살 권리가 있다”처럼 넓게 쓴 학생에게 “그 자유를 지키려면 어떤 행동을 하고, 다른 사람의 자유는 어떻게 존중할까요?”라고 묻는다. 좋은 선언문은 권리와 책임이 짝을 이루고 행동이 구체적이라는 점을 짚는다.',
          task: '다섯 권리와 책임을 담은 나의 성인기 선언문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('권리 세 가지를 골라 한 문장씩 쓰세요.', '다섯 권리 가운데 셋 이상을 골라, 나에게 그 권리가 있다는 문장을 쓰세요.', ['권리 셋 이상을 썼다', '권리 이름을 바르게 썼다', '내 말로 썼다'], { min: 60, max: 350, sent: [3, 5], must: [['권리']], starter: '나는 ~할 권리가 있다.', d: 0.35 }),
            RWQ('권리마다 짝 책임을 쓰세요.', '앞에서 쓴 권리마다 짝이 되는 책임을 한 문장씩 쓰세요.', ['권리마다 짝 책임을 붙였다', '상대의 같은 권리를 존중한다', '책임이 구체적이다'], { min: 60, max: 350, sent: [3, 5], must: [['책임', '존중']], starter: '그래서 나는 ~할 책임을 진다.', d: 0.4 }),
            RWQ('실천 행동 세 가지를 쓰세요.', '선언문을 지키기 위해 성인이 된 첫해에 할 행동 세 가지를 쓰세요.', ['행동이 세 가지다', '행동이 구체적이다', '다른 사람을 존중하는 행동이 있다'], { min: 60, max: 350, sent: [3, 4], plus: '선언문을 지키기 어려운 순간과 그때의 대응을 썼다', d: 0.4 }),
            RWQ('선언문의 맺음 문장을 2문장으로 쓰세요.', '성인이 되는 나에게 선언문의 뜻을 담아 맺는 문장을 쓰세요.', ['권리와 책임을 함께 담았다', '타인 존중을 담았다', '나다운 말투다'], { min: 30, max: 250, sent: [2, 3], must: [['나는']], d: 0.35, more: { conclude: '성인기의 성적 권리는 다섯 권리와 짝 책임, 그리고 구체적인 실천 행동이 함께할 때 내 삶의 선언이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 선언문을 기준표로 점검하세요.', columns: ['기준', '내 선언문에서 찾은 곳'], cells: [['권리·책임 짝', ''], ['구체 행동', ''], ['타인 존중', '']] }, { type: 'short', prompt: '선언문 가운데 1년 뒤 다시 읽고 싶은 한 문장을 옮겨 쓰세요.' }] },
        notes: '선언문은 개인 성찰용이며 제출 시 이름을 붙이지 않아도 된다. 연애·건강 상태 같은 개인 사정을 쓰지 않게 안내한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.check', type: 'wrap', title: '권리 다섯 자기 점검',
        method: '권리 다섯 자기 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '다섯 권리 점검 칸에 표시만 한다.', base: '표시하고, 칸마다 활동지에 메모한다.', challenge: '더 알아볼 것 하나를 쓴다.' },
        wrap: {
          teacher: '“다섯 권리를 알고, 필요할 때 쓸 수 있을까요? 스스로 점검해 봐요.” 점검표를 표시하게 한다. 모두 표시하지 못한 학생에게 “괜찮아요. 아직 모르는 권리는 어디서 더 알아볼 수 있을까요?”라고 묻는다. 도전 반은 더 알아볼 것을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '권리 다섯 자기 점검', items: [{ id: 'info', text: '믿을 성 건강 정보를 어디서 찾는지 안다' }, { id: 'health', text: '검진·상담을 어디서 받는지 안다' }, { id: 'self', text: '원치 않는 일을 분명히 거절할 수 있다' }, { id: 'free', text: '폭력을 겪으면 어디에 알릴지 안다' }, { id: 'equal', text: '성별로 차별받으면 문제 삼을 수 있다' }] }, prompt: '다섯 권리를 알고 쓸 수 있는지 스스로 점검하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '“성인이 되면 책임 없이 자유롭다”에 대한 바른 말은?', options: ['맞다', '성인의 권리에는 다른 사람을 존중할 책임이 짝지어진다', '책임은 법이 대신 진다'], answer: 1, difficulty: 0.15, explain: '권리와 책임은 늘 짝이에요.' },
            { type: 'short', prompt: '다섯 권리 가운데 더 알아보고 싶은 것과 알아볼 곳을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성인기의 성적 권리와 책임',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '성별 때문에 불리하게 대우받지 않을 권리를 ___ 금지라고 한다.', answer: '차별' },
            { type: 'short', prompt: '다섯 권리 가운데 하나와 그 짝 책임을 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 차별 · 건강권 · 책임', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '권리에는 늘 ___이 짝지어진다.', answer: '책임' }] },
        },
      }),
      M({
        id: 'wrap.line', type: 'wrap', title: '성인이 되는 나에게 한 줄',
        method: '한 줄 정리', tool: 'emotion', minutes: 7,
        levels: { easy: '지금 마음 카드만 고른다.', base: '마음 카드를 고르고, 성인이 되는 나에게 한 줄을 쓴다.', challenge: '1년 뒤 그 한 줄을 확인할 방법을 쓴다.' },
        wrap: {
          teacher: '“성인이 되는 나에게 한 줄을 써 봐요. 그전에 지금 마음을 골라 볼까요?” 마음 크기를 고르게 한다. 정답은 없다고 말해 준다. “걱정돼요”라는 학생에게 “걱정이 드는 것도 준비하고 있다는 뜻이에요. 오늘 배운 무엇이 도움이 될까요?”라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '곧 성인이 되는 나', feeling: '설렘', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt: '곧 성인이 되는 나를 떠올릴 때의 설렘 크기를 고르세요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '성인기에 필요한 마음', cards: [{ id: 'resp', text: '책임감' }, { id: 'respect', text: '존중' }, { id: 'brave', text: '용기' }, { id: 'care', text: '무관심' }, { id: 'force', text: '강요' }] }, prompt: '성인기의 권리를 지키는 데 필요한 마음만 고르세요.', target: { pick: ['resp', 'respect', 'brave'] }, difficulty: 0.15 },
            { type: 'short', prompt: '성인이 되는 나에게 한 줄을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성인이 되는 나에게',
          items: [
            { type: 'short', prompt: '성인이 되는 나에게 주는 한 줄을 쓰세요.' },
            { type: 'short', prompt: '1년 뒤 그 한 줄을 다시 확인할 방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 20. 성폭력 보도와 2차 피해, 지원 체계 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-sv-report', [12]);
    const HL = [['“짧은 치마 입고 밤늦게…” 피해 여성', '“술 취해 따라간 피해자”', '“왜 신고 늦었나” 의문'], ['“몹쓸 짓” 저지른 남성', '“한순간 실수” 유망 선수', '“연인 사이 다툼” 끝에'], ['“가해자 ○○, 성폭력 혐의로 기소”', '“직장 상사가 부하 직원 성추행” 수사']];
    const HL_S = ['피해자 탓하기', '가해 흐리기', '정확한 표현'];
    const CMT = [['지지', 40], ['피해자 탓', 25], ['가해자 옹호', 15], ['사실 확인', 20]];
    const CMT_T = '가상 기사 댓글 유형 비율(가상 자료, %)';
    const FLOW = ['믿을 사람에게 말한다', `학교·지원 기관과 연결한다 ${HELPNO}`, '의료·상담 지원을 받는다', '법률 지원을 받는다', '일상으로 회복한다'];
    const ACTOR = (who, text, good, goodRes, goodEnd, bad, badRes, badEnd) => ({ text, who, motif: 'cloud', choices: [
      { id: 'good', text: good, result: goodRes, impact: [{ who: '피해자', text: '2차 피해가 줄어든다', tone: 1 }], ending: goodEnd },
      { id: 'bad', text: bad, result: badRes, impact: [{ who: '피해자', text: '2차 피해를 입는다', tone: -1 }], ending: badEnd }] });
    const R2 = [{ id: 'second', text: '신상 추측·유포는 2차 피해다' }, { id: 'role', text: '작성자·공유자·플랫폼·학교 모두 몫의 책임이 있다' }, { id: 'curious', text: '궁금한 건 알 권리다', why: '피해자의 신상은 알 권리가 아니라 보호받을 정보예요.' }];

    MODS.push(
      M({
        id: 'intro.headline-audit', type: 'intro', title: '가상 기사 제목 점검',
        method: '가상 기사 제목 점검', tool: 'sortboard', minutes: 7,
        levels: { easy: '제목 여섯을 함께 세 바구니에 나눈다.', base: '제목 여덟을 피해자 탓하기·가해 흐리기·정확한 표현으로 나눈다.', challenge: '피해자 탓하기 제목 하나를 정확한 표현으로 고쳐 말한다.' },
        intro: {
          teacher: '“가상 기사 제목 여덟 개예요. 피해자를 탓하는 제목, 가해를 흐리는 제목, 정확한 제목으로 나눠 볼까요?” 시연 단추로 제목이 세 바구니에 나뉘는 모습을 보여 준다. “‘몹쓸 짓’은 나쁘다는 뜻이니 괜찮지 않아요?”라는 말이 나오면 “‘몹쓸 짓’이라는 말로 무엇이 일어났는지, 그것이 범죄라는 것이 드러나나요?”라고 되묻는다. 보도의 낱말 하나가 책임을 옮기거나 흐린다는 점을 짚는다.',
          student: '가상 기사 제목 여덟 개를 피해자 탓하기·가해 흐리기·정확한 표현 바구니에 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: HL_S, cards: mix(HL) }, sequence: [{ sort: Object.fromEntries(HL_S.map((s, i) => [s, HL[i]])) }] },
          art: { draw: 'a paper newspaper stand with eight headline strips, three paper baskets below labeled with small icons (a pointing finger, a blurred cloud, a clear magnifier), a paper student sorting the strips', banner: '제목의 낱말을 점검해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '제목은 모두 가상이다(실제 보도·실명을 쓰지 않는다). 피해자 탓하기 제목은 함정으로만 쓰고 바로잡는다. 이 시간은 성폭력 예방교육(성폭력방지법 제5조)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.comment-data', type: 'intro', title: '기사 댓글 유형 자료',
        method: '기사 댓글 유형 자료', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '2차 피해에 해당하는 댓글 비율(피해자 탓 + 가해자 옹호)을 찾는다.', challenge: '플랫폼이 할 수 있는 대책을 추측해 말한다.' },
        intro: {
          teacher: '“가상 성폭력 기사의 댓글 유형이에요. 지지 40%, 피해자 탓 25%, 가해자 옹호 15%, 사실 확인 20%. 2차 피해에 해당하는 댓글은 모두 몇 %일까요?” 시연 단추로 40%가 골라지는 모습을 보여 준다. “댓글은 그냥 의견이잖아요”라는 말이 나오면 “그 댓글을 피해자가 읽는다면, 의견일까요 또 한 번의 상처일까요?”라고 되묻는다. 피해자 탓과 가해자 옹호는 2차 피해라는 점을 짚는다.',
          student: '가상 기사의 댓글 유형 원그래프를 읽고, 2차 피해에 해당하는 댓글이 모두 몇 %인지 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: CMT_T, unit: '%', data: CMT, question: '2차 피해에 해당하는 댓글(피해자 탓 + 가해자 옹호)은 모두 몇 %?', choices: ['40%', '25%', '15%', '60%'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart made of overlapping comment bubbles, two slices outlined with thorny paper edges, a paper shield held up beside the chart', banner: '댓글도 상처가 될까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 실제 댓글을 옮겨 보여 주지 않는다.',
      }),

      M({
        id: 'activity.rewrite-lab', type: 'activity', title: '보도문 고쳐 쓰기',
        method: '보도문 고쳐 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문항마다 문장 틀을 보고 고칠 곳부터 짚는다.', base: '고칠 곳 짚기 → 단락 고쳐 쓰기 → 고친 까닭 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 고친 곳마다 이유 주석을 단다.' },
        activity: {
          title: '피해자 중심 보도문', tool: 'rubric-writing',
          teacher: '“가상 보도문이에요: ‘ㄱ시의 한 원룸에 사는 20대 여성 A씨는 술에 취해 귀가하던 중 몹쓸 짓을 당했다. A씨가 늦게까지 술자리에 있었던 것으로 알려졌다.’ 무엇이 문제일까요?” 먼저 고칠 곳을 짚게 한다. “사실을 쓴 건데 왜 문제예요?”라는 학생에게 “사는 곳과 술자리 이야기가 범죄를 이해하는 데 꼭 필요한가요? 그 정보는 누구를 비추나요?”라고 묻는다. 책임 주체를 분명히, 피해자 정보는 최소로, 선정적 표현은 빼고 쓰는 것이 피해자 중심 보도라는 점을 짚는다.',
          task: '가상 보도문을 피해자 중심 표현으로 고쳐 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('보도문에서 고칠 곳 세 군데를 짚어 쓰세요.', '가상 보도문(“원룸에 사는 20대 여성 A씨는 술에 취해 귀가하던 중 몹쓸 짓을 당했다. 늦게까지 술자리에 있었던 것으로 알려졌다”)에서 고칠 곳 셋과 그 문제를 쓰세요.', ['고칠 곳이 셋이다', '피해자 정보 과다를 짚었다', '책임을 흐리는 표현을 짚었다'], { min: 60, max: 350, sent: [3, 4], must: [['몹쓸', '술', '원룸']], d: 0.35 }),
            RWQ('보도문 단락을 피해자 중심으로 고쳐 쓰세요.', '같은 사건을 책임 주체가 분명하고, 피해자 정보는 최소이며, 선정 표현이 없게 2~3문장으로 고쳐 쓰세요.', ['책임 주체(가해자)가 분명하다', '피해자 정보를 최소로 줄였다', '선정적 표현이 없다'], { min: 50, max: 350, sent: [2, 3], must: [['가해', '혐의']], starter: '경찰은 ~한 혐의로 ~을 조사하고 있다.', plus: '고친 곳마다 이유 주석을 달았다', d: 0.4 }),
            RWQ('고친 까닭을 2문장으로 쓰세요.', '내가 고친 보도문이 원래 보도문보다 나은 까닭을 2차 피해와 이어 쓰세요.', ['2차 피해와 이었다', '독자에게 남는 메시지를 썼다', '피해자를 탓하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['2차 피해']], d: 0.4, more: { conclude: '피해자 중심 보도는 책임 주체를 분명히 하고, 피해자 정보를 최소로 하며, 선정적 표현을 빼서 2차 피해를 막아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 고쳐 쓴 보도문을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['책임 주체 분명', ''], ['피해자 정보 최소', ''], ['선정 표현 없음', '']] }] },
        notes: '보도문은 가상이며 실제 사건을 쓰지 않는다. 피해 내용을 자세히 쓰지 않게 안내한다. 보도 원칙은 사람 확인 목록의 공식 권고로 대조한다.',
      }),
      M({
        id: 'activity.support-flow', type: 'activity', title: '알린 뒤 이어지는 지원',
        method: '알린 뒤 이어지는 지원 순서', tool: 'timeline', minutes: 17,
        levels: { easy: '앞 네 단계만 차례로 놓는다.', base: '다섯 단계를 차례로 놓고, 단계마다 주변인의 역할을 짝짓고, 하지 않을 행동을 고른다.', challenge: '함정 카드가 섞인 판에서 놓고, 피해자가 원하는 속도를 존중하는 방법을 활동지에 쓴다.' },
        activity: {
          title: '지원의 차례', tool: 'timeline',
          teacher: '“피해를 알린 뒤 어떤 지원이 이어질까요? 믿을 사람에게 말하기부터 회복까지 차례로 놓아 봐요.” 카드를 놓을 때마다 “이 단계에서 곁의 친구는 무엇을 할 수 있을까요?”라고 묻는다. ‘빨리 신고하라고 재촉한다’를 넣으려는 학생에게 “좋은 뜻이어도 재촉을 받은 피해자는 어떤 마음일까요?”라고 되묻는다. 지원 체계는 단계별로 이어지고, 주변인은 피해자가 원하는 속도를 존중하며 곁에 있는다는 점을 짚는다.',
          task: '알린 뒤 이어지는 지원을 차례로 놓고, 단계마다 주변인의 역할을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('피해를 알린 뒤 이어지는 지원을 차례로 놓으세요.', FLOW, { k: 4, traps: ['빨리 신고하라고 재촉한다'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 주변인의 역할을 짝지으세요.', [['믿을 사람에게 말한다', '“말해 줘서 고마워. 네 잘못이 아니야”라고 한다'], ['의료·상담 지원을 받는다', '원하면 함께 가 준다'], ['일상으로 회복한다', '예전처럼 곁에서 평범하게 지낸다']], { k: 2, d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('주변인이 하지 않을 행동만 고르세요.', ['다른 친구에게 사정을 전한다', '“그때 왜 그랬어?”라고 묻는다'], ['피해자가 원하는 속도를 기다린다', '도움받을 곳을 함께 찾는다'], { d: 0.3, opt: { basket: '하지 않을 행동', axis: ['먼저', '나중'] }, more: { conclude: '알린 뒤에는 연결·의료와 상담·법률 지원·회복으로 지원이 이어져요. 주변인은 탓하지 않고, 퍼뜨리지 않고, 피해자의 속도를 존중하며 곁에 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '피해자가 원하는 속도를 존중하며 곁에 있는 방법 하나를 쓰세요.' }] },
        notes: '지원 단계는 일반적인 흐름이며 기관 이름·번호는 학교가 확인해 채운다. 학생에게 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.bystander-debate', type: 'activity', title: '온라인 2차 피해, 누구의 책임',
        method: '"온라인 2차 피해, 누구 책임인가" 토론', tool: 'dilemma', minutes: 34,
        levels: { easy: '두 주체(작성자·공유자)의 갈림길을 먼저 따라가고, 나머지 두 주체는 모둠이 함께 본다.', base: '네 주체(작성자·공유자·플랫폼·학교)의 갈림길을 따라가 결과를 추적하고 모둠별로 책임 배분을 발표한다.', challenge: '네 주체를 추적한 뒤, 성폭력방지법 예방교육 취지와 이은 제안을 발표에 더한다.' },
        activity: {
          title: '네 주체의 갈림길', tool: 'dilemma',
          teacher: '“가상 사건 뒤 온라인에 피해자 신상을 추측하는 글이 퍼져요. 글을 쓴 사람, 퍼 나른 사람, 플랫폼, 학교 — 각자 어떤 선택을 할 수 있고, 책임은 어떻게 나뉠까요?” 주체마다 갈림길을 따라가게 한다. ‘궁금한 건 알 권리다’ 카드를 고른 학생에게 “피해자의 신상은 알 권리일까요, 보호받을 정보일까요?”라고 되묻는다. 모둠마다 책임 배분 주장과 근거를 발표하게 하고, 어느 한 주체만의 책임이 아니라 각자 몫이 있다는 점을 짚는다.',
          task: '네 주체의 갈림길을 따라가며 2차 피해를 줄이는 선택을 고르고, 모둠별로 책임 배분을 발표해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('글을 쓴 사람의 입장에서 2차 피해를 막는 선택을 고르고 근거를 고르세요.', ACTOR('작성자', '익명 게시판에 가상 사건 기사가 올라왔다. 너는 “피해자가 누군지 안다”는 글을 쓰려 한다.', '추측 글을 쓰지 않고, 이미 쓴 글은 지운다', '피해자 신상 추측이 퍼지지 않는다.', '쓰지 않는 것이 2차 피해를 막는 첫 책임이다.', '아는 정보를 풀어 글을 올린다', '피해자를 특정하는 댓글이 줄줄이 달린다.', '신상 추측 글은 그 자체로 2차 피해다.'), [['good']], R2, ['second'], { d: 0.3 }),
            DILQ('글을 퍼 나르는 사람의 입장에서 2차 피해를 막는 선택을 고르고 근거를 고르세요.', ACTOR('공유자', '단톡방에 피해자 신상을 추측하는 글 캡처가 올라왔다. “이거 다른 방에도 퍼뜨릴까?”라는 말이 나온다.', '퍼 나르지 않고 “이건 2차 피해야, 그만하자”고 쓴다', '캡처가 더 퍼지지 않는다.', '퍼 나르지 않는 것도 책임 있는 선택이다.', '“다들 보는 건데” 하며 다른 방에 옮긴다', '추측 글이 순식간에 퍼진다.', '퍼 나른 사람도 2차 피해의 책임에서 벗어나기 어렵다.'), [['good']], R2, ['second', 'role'], { d: 0.35 }),
            DILQ('플랫폼 운영자의 입장에서 2차 피해를 막는 선택을 고르고 근거를 고르세요.', ACTOR('플랫폼 운영자', '신고가 들어온 신상 추측 게시글의 조회수가 빠르게 늘고 있다.', '신고된 글을 빨리 가리고 같은 글이 다시 올라오지 않게 막는다', '퍼짐이 멈춘다.', '플랫폼은 신고된 2차 피해 글을 빨리 다룰 책임이 있다.', '조회수가 많으니 그대로 둔다', '피해자 신상이 더 넓게 퍼진다.', '조회수를 피해자 보호보다 앞세우면 2차 피해를 키운다.'), [['good']], R2, ['role'], { d: 0.35 }),
            DILQ('학교의 입장에서 2차 피해를 막는 선택을 고르고 근거를 고르세요.', ACTOR('학교', '학생들 사이에 추측 글이 돌고 있다는 것을 학교가 알게 되었다.', '피해 학생 보호를 먼저 챙기고, 학생들에게 2차 피해 예방을 안내한다', '추측이 줄고 피해 학생이 보호받는다.', '학교는 피해자를 보호하고 2차 피해를 예방할 책임이 있다.', '소문이 가라앉을 때까지 기다린다', '추측이 이어지고 피해 학생이 고립된다.', '기다리는 동안에도 2차 피해는 쌓인다.'), [['good']], R2, ['role', 'second'], { d: 0.35 }),
            { prompt: '모둠별로 네 주체의 책임을 어떻게 나눌지 주장과 근거를 정해 발표해 보세요.', free: true, talk: true, toolOptions: { scene: { text: '모둠 토론: 네 주체의 책임 배분', choices: [{ id: 'talk', text: '모둠과 이야기해 본다' }] } }, conclude: '온라인 2차 피해의 책임은 어느 한 주체만의 것이 아니에요. 쓰지 않고, 퍼 나르지 않고, 빨리 가리고, 보호하는 각자의 몫이 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모둠의 책임 배분 주장과 근거를 정리하세요.', columns: ['주체', '책임', '근거'], cells: [['작성자', '', ''], ['공유자', '', ''], ['플랫폼', '', ''], ['학교', '', '']] }, { type: 'short', prompt: '성폭력 예방교육에 더하고 싶은 2차 피해 예방 내용 하나를 쓰세요.' }] },
        notes: '사건은 가상이며 신상 추측 글의 내용을 쓰지 않는다. 책임 배분은 모둠마다 다를 수 있으며 정답을 정하지 않는다(근거의 질을 본다). 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.words', type: 'wrap', title: '지지하는 말 사전',
        method: '지지하는 말 사전', tool: 'wordcards', minutes: 7,
        levels: { easy: '2차 피해 말과 지지하는 말을 한 쌍 짝짓는다.', base: '세 쌍을 짝지어 지지하는 말 사전을 만든다.', challenge: '왜 바꿨는지 설명을 쓴다.' },
        wrap: {
          teacher: '“2차 피해가 되는 말을 지지하는 말로 바꾼 사전을 만들어요.” 빈칸 문장을 채운 뒤 내 사전 한 줄을 쓰게 한다. “말 하나로 뭐가 달라져요”라는 학생에게 “피해자가 다음에 도움을 청할지는 처음 들은 말에 달려 있을 수 있어요”라고 말한다. 도전 반은 바꾼 까닭을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '“왜 그때 거기 갔어?” → “___”' }, { id: 'f2', label: '“증거는 있어?” → “___”' }, { id: 'f3', label: '“이제 그만 잊어” → “___”' }], cards: ['네 잘못이 아니야', '말해 줘서 고마워. 믿어', '네 속도대로 해도 돼', '조심했어야지', '다들 그래'] }, prompt: '2차 피해 말을 지지하는 말로 바꾸는 빈칸을 카드로 채우세요.', target: { fill: { f1: '네 잘못이 아니야', f2: '말해 줘서 고마워. 믿어', f3: '네 속도대로 해도 돼' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“자세히 보도해야 경각심이 생긴다”에 대한 바른 생각은?', options: ['맞다, 자세할수록 좋다', '자세한 피해 묘사와 신상은 2차 피해가 된다', '피해자도 원할 것이다'], answer: 1, difficulty: 0.2, explain: '경각심은 가해 책임과 예방에 초점을 둘 때 생겨요.' },
            { type: 'short', prompt: '내 지지하는 말 사전 한 줄(2차 피해 말 → 지지하는 말)을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성폭력 보도와 2차 피해, 지원 체계',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '피해자를 탓하거나 신상을 퍼뜨려 피해를 더하는 것을 ___ 피해라고 한다.', answer: '2차' },
            { type: 'table', prompt: '지지하는 말 사전을 만드세요.', columns: ['2차 피해 말', '지지하는 말'], cells: [['', ''], ['', ''], ['', '']] },
          ],
          easy: { note: '낱말 상자: 2차 · 지지 · 속도', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '피해자가 원하는 ___를 존중한다.', answer: '속도' }] },
        },
      }),
      M({
        id: 'wrap.route', type: 'wrap', title: '지원 경로 지도',
        method: '지원 경로 지도 확인', tool: 'map', minutes: 7,
        levels: { easy: '핀 둘(학교·지원 기관)만 함께 놓는다.', base: '핀 셋(학교·지원 기관·의료기관)을 놓는다.', challenge: '익명 상담이 되는 곳을 활동지에 표시한다.' },
        wrap: {
          teacher: '“피해를 알렸을 때 이어지는 지원 경로를 지도에서 확인해요.” 핀을 놓게 한다. 공원에 핀을 놓는 학생에게 “그곳에서 상담·치료를 받을 수 있을까요?”라고 묻는다. 번호는 학교가 확인한 것을 쓴다. 도전 반은 이름을 밝히지 않고 상담할 수 있는 곳을 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { title: '가상 동네', grid: [6, 4], places: [{ name: '학교 상담실', icon: 'school', at: [0, 0] }, { name: '지원 기관', icon: 'office', at: [3, 1], legend: `지원 기관 ${HELPNO}` }, { name: '병원', icon: 'hospital', at: [5, 2] }, { name: '공원', icon: 'park', at: [1, 3] }] }, prompt: '피해를 알린 뒤 상담과 연결을 도울 학교 밖 지원 기관에 핀을 놓으세요.', target: { place: '지원 기관' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: { title: '가상 동네', grid: [6, 4], places: [{ name: '학교 상담실', icon: 'school', at: [0, 0] }, { name: '지원 기관', icon: 'office', at: [3, 1], legend: `지원 기관 ${HELPNO}` }, { name: '병원', icon: 'hospital', at: [5, 2] }, { name: '공원', icon: 'park', at: [1, 3] }] }, prompt: '몸의 진료가 필요할 때 갈 곳에 핀을 놓으세요.', target: { place: '병원' }, difficulty: 0.15 },
            { type: 'short', prompt: '지원 경로를 차례대로 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '지원 경로',
          items: [
            { type: 'table', prompt: '지원 경로를 쓰세요.', columns: ['곳', '하는 일', '번호·메모'], cells: [['학교 상담실', '', ''], ['지원 기관', '', HELPNO], ['병원', '', '']] },
            { type: 'short', prompt: '주변인으로서 지원 경로에서 할 수 있는 일 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 21. 직장 내 성희롱과 채용 성차별 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-workplace', [12]);
    const ADS = { good: ['“남성 우대”', '“용모 단정한 미혼 여성”', '“결혼·출산 계획 없는 분”', '“키 165cm 이상”'], bad: ['“관련 직무 경험 2년 이상”', '“엑셀 활용 가능자”'] };
    const WORRY = [['일이 너무 많음', 52], ['성희롱·성차별', 38], ['낮은 임금', 47], ['인간관계', 44], ['출퇴근 거리', 20]];
    const WORRY_T = '첫 직장에서 걱정되는 것(가상 청년 설문, 복수 응답 %)';
    const HAJUN = { text: '가상 인물 하준(22세)은 회사 인턴이다. 팀장이 회의 때마다 “오늘 옷이 섹시하네”, “얼굴 보니 일할 맛 난다”라고 말한다. 하준은 불쾌하다. 너는 하준의 입장에서 고른다.', who: '하준', motif: 'cloud', choices: [
      { id: 'record', text: '날짜·장소·한 말·들은 사람을 적어 두고 회사 고충 창구에 알린다', result: '고충 담당자가 조사를 시작하고, 하준과 팀장의 자리를 떨어뜨린다.', impact: [{ who: '하준', text: '보호받는다', tone: 1 }],
        next: { text: '팀원 몇이 “인턴이 일을 크게 만든다”며 수군거린다.', who: '하준', choices: [
          { id: 'report2', text: '수군거림도 기록해 고충 담당자에게 알린다', result: '회사가 신고를 이유로 한 불이익을 막겠다고 안내한다.', impact: [{ who: '하준', text: '보복에서 보호받는다', tone: 1 }],
            next: { text: '같은 팀 동료 유리가 팀장의 말을 여러 번 들었다. 이번엔 유리의 입장에서 고른다.', who: '유리', choices: [
              { id: 'witness', text: '들은 일을 증언하겠다고 하준에게 말한다', result: '하준의 말이 한 사람의 말이 아니게 된다.', impact: [{ who: '하준', text: '지지를 얻는다', tone: 1 }], ending: '기록, 회사의 조치, 동료의 증언이 이어질 때 일터의 성희롱이 멈춘다.' },
              { id: 'silent', text: '괜히 엮이기 싫어 모른 척한다', result: '하준은 다시 혼자 남는다.', impact: [{ who: '하준', text: '외로워진다', tone: -1 }], ending: '동료의 침묵은 힘 있는 쪽을 돕는다.' }] } },
          { id: 'drop', text: '분위기가 나빠져 신고를 거둔다', result: '팀장의 말이 다시 시작된다.', impact: [{ who: '하준', text: '피해가 이어진다', tone: -1 }], ending: '신고를 이유로 한 따돌림도 문제다. 거둘 것이 아니라 알려야 한다.' }] } },
      { id: 'laugh', text: '분위기를 깨기 싫어 웃어넘긴다', result: '팀장이 “하준 씨도 좋아하네”라며 말을 더 한다.', impact: [{ who: '하준', text: '불쾌함이 커진다', tone: -1 }],
        next: { text: '하준이 출근길마다 불안해진다.', who: '하준', choices: [
          { id: 'now', text: `지금이라도 기록을 시작하고 고충 창구·외부 기관(${HELPNO})에 상담한다`, result: '외부 상담 기관이 대응 방법을 안내한다.', impact: [{ who: '하준', text: '도움이 시작된다', tone: 1 }], ending: '웃어넘긴 것은 동의가 아니다. 지금 기록하고 알려도 된다.' },
          { id: 'self', text: '“내가 너무 예민한가” 하고 계속 참는다', result: '하준은 인턴을 그만둘까 고민한다.', impact: [{ who: '하준', text: '자기를 탓한다', tone: -1 }], ending: '불쾌함은 예민함이 아니다. 판단 기준은 받는 사람이 느낀 불쾌감이다.' }] } },
      { id: 'endure', text: '인턴 평가가 걱정돼 아무 말 없이 참는다', result: '팀장의 말이 계속되고 하준은 지쳐 간다.', impact: [{ who: '하준', text: '피해가 쌓인다', tone: -1 }], ending: '평가가 걸린 자리일수록 참게 된다. 그래서 회사에는 조치할 책임이 있다.' }] };
    const HAJUN_R = [{ id: 'harass', text: '업무 관계에서 성적인 말로 불쾌감을 주면 직장 내 성희롱이다' }, { id: 'record', text: '기록을 남기고 회사 고충 창구·외부 기관에 알린다' }, { id: 'org', text: '회사는 조사하고 피해자를 보호하며 보복을 막을 책임이 있다' },
      { id: 'joke', text: '농담이었다면 성희롱이 아니다', why: '판단 기준은 말한 사람의 의도가 아니라 받는 사람이 느낀 불쾌감이에요.' }, { id: 'intern', text: '인턴이면 참는 게 맞다', why: '고용 형태와 상관없이 일터의 성희롱에서 보호받아요.' }];

    MODS.push(
      M({
        id: 'intro.ad-check', type: 'intro', title: '가상 채용 공고 점검',
        method: '가상 채용 공고 점검', tool: 'wordcards', minutes: 7,
        levels: { easy: '성차별 문구 셋을 함께 찾는다.', base: '공고 문구 여섯 가운데 성차별 문구 넷을 고른다.', challenge: '성차별 문구 하나를 직무 중심의 공정한 문구로 고쳐 말한다.' },
        intro: {
          teacher: '“가상 채용 공고 문구예요. 이 가운데 성차별 문구는 무엇일까요?” 시연 단추로 성차별 문구가 바구니에 담기는 모습을 보여 준다. “회사가 원하는 사람을 뽑는 건 자유 아니에요?”라는 말이 나오면 “그 일을 하는 데 성별·결혼·키가 정말 필요할까요?”라고 되묻는다. 채용 기준은 직무와 관련된 능력이어야 하고, 성별·혼인·용모를 조건으로 거는 것은 성차별이라는 점을 짚는다.',
          student: '가상 채용 공고 문구를 읽고, 직무와 상관없이 성별·결혼·용모로 차별하는 문구를 찾아 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '성차별 문구', cards: mix([ADS.good, ADS.bad]) }, sequence: [{ pick: ADS.good }] },
          art: { draw: 'a paper job posting board with several notice cards, some cards stamped with a small warning icon, a paper magnifying glass and a paper briefcase beside the board', banner: '이 공고, 공정할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '공고는 가상이다. 채용 성차별의 법적 기준은 사람 확인 목록의 공식 안내로 대조한다(조문은 쓰지 않음).',
      }),
      M({
        id: 'intro.workplace-poll', type: 'intro', title: '첫 직장 걱정 자료',
        method: '첫 직장 걱정 자료', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '성희롱·성차별 항목을 찾아 다른 걱정과 견준다.', challenge: '청년이 할 수 있는 대비책을 추측해 말한다.' },
        intro: {
          teacher: '“가상 청년 설문에서 첫 직장의 걱정으로 ‘성희롱·성차별’을 꼽은 비율은 38%예요. 열 명 가운데 거의 네 명이죠. 이 걱정은 개인이 조심하면 사라질까요?” 시연 단추로 해석 보기가 골라지는 모습을 보여 준다. “조심하면 되는 거 아니에요?”라는 말이 나오면 “조심해야 하는 쪽이 피해를 입을 수 있는 사람이라면, 일터는 무엇을 해야 할까요?”라고 되묻는다. 오늘은 걱정을 대응으로 바꾸는 방법을 배운다고 밝힌다.',
          student: '첫 직장에서 걱정되는 것을 물은 가상 청년 설문 그래프를 읽고, 성희롱·성차별 항목을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: WORRY_T, unit: '%', xLabel: '걱정', yLabel: '비율', data: WORRY, question: '그래프를 바르게 해석한 것은?', choices: ['성희롱·성차별도 청년의 큰 걱정 가운데 하나다', '성희롱·성차별 걱정이 가장 크다', '아무도 성희롱을 걱정하지 않는다', '출퇴근이 가장 큰 걱정이다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper office building with a front door, a paper young worker standing at the entrance holding a bar chart scroll, small worried cloud icons above some bars', banner: '첫 직장, 무엇이 걱정일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문 값은 수업용 가상 값이다.',
      }),

      M({
        id: 'activity.case-judge', type: 'activity', title: '직장 사례 판정',
        method: '직장 사례 성희롱 판정', tool: 'sortboard', minutes: 17,
        levels: { easy: '사례 넷을 세 바구니에 나눈다(틀리면 되돌아옴).', base: '사례 여섯을 나누고, 판단 기준을 가르고, 회사의 조치를 가른다.', challenge: '헷갈리는 사례가 더해진 판에서 나누고, ‘판단 더 필요’ 사례 하나를 활동지에 논증한다.' },
        activity: {
          title: '판정 바구니', tool: 'sortboard',
          teacher: '“가상 직장 사례를 ‘성희롱’, ‘아님’, ‘판단 더 필요’로 나눠요. 기준은 성적인 말·행동인지, 받는 사람이 불쾌했는지, 업무와 관련된 관계인지예요.” 카드를 놓을 때마다 “세 기준 가운데 무엇이 드러나나요?”라고 묻는다. ‘업무 실수를 짚는 피드백’을 성희롱에 넣는 학생에게 “성적인 말이나 행동이 있었나요?”라고 되묻는다. 농담이었다는 의도는 판단 기준이 아니라는 점, 그리고 ‘판단 더 필요’는 ‘아님’이 아니라 더 확인한다는 뜻이라는 점을 짚는다.',
          task: '가상 직장 사례를 성희롱 판정 바구니에 나누고, 기준과 회사의 조치를 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('가상 직장 사례를 판정 바구니에 나누세요.', ['성희롱', '아님', '판단 더 필요'], [['회의 때마다 외모를 성적으로 평가한다', '회식에서 원치 않는 신체 접촉을 한다', '팀 단톡방에 성적인 농담 사진을 올린다'], ['업무 실수를 구체적으로 짚어 준다', '회의 시간을 지키라고 말한다'], ['퇴근 뒤 사적인 연락을 자주 한다']], { k: 1, hard: [[], [], ['칭찬이라며 옷차림을 자주 말한다']], d: 0.35 }),
            BOARDQ('판단 기준 카드와 기준이 아닌 카드를 나누세요.', ['판단 기준', '기준이 아님'], [['성적인 말이나 행동이 있었다', '받는 사람이 불쾌감을 느꼈다', '업무와 관련된 관계에서 일어났다'], ['말한 사람은 농담이었다', '다른 직원은 웃었다']], { k: 2, d: 0.3 }),
            BOARDQ('회사의 알맞은 조치와 알맞지 않은 조치를 나누세요.', ['알맞은 조치', '알맞지 않은 조치'], [['신고를 받으면 바로 조사한다', '피해자의 근무 장소를 원하면 바꿔 준다', '신고를 이유로 불이익을 주지 않는다'], ['당사자끼리 화해하라고 한다', '신고한 사람을 다른 부서로 보낸다']], { k: 1, d: 0.35, more: { conclude: '직장 내 성희롱은 업무 관계에서 성적인 말·행동으로 불쾌감을 준 것이에요. 의도는 기준이 아니고, 회사는 조사·피해자 보호·보복 금지의 책임이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘판단 더 필요’ 사례 하나를 골라, 판단에 더 필요한 사실을 쓰세요.' }] },
        notes: '사례는 가상이다. 직장 내 성희롱 판단 기준·회사의 조치 의무는 사람 확인 목록의 공식 안내로 대조한다(근거 파일에 직장 관련 법령 조문이 없다).',
      }),
      M({
        id: 'activity.intern-dilemma', type: 'activity', title: '인턴 하준의 갈림길',
        method: '인턴의 대응 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 결과를 추적하고 근거를 고른다.', challenge: '다른 끝도 가 보고, 동료 유리의 조력 선택까지 견준다.' },
        activity: {
          title: '회의실의 말', tool: 'dilemma',
          teacher: '“가상 인턴 하준은 팀장에게서 회의 때마다 외모에 대한 성적인 말을 들어요. 하준이라면 어떻게 할까요?” 장면마다 “이 선택에서 하준을 지키는 것은 무엇인가요?”라고 묻는다. ‘인턴이면 참는 게 맞다’ 카드를 고른 학생에게 “평가가 걸린 자리라서 더 참게 된다면, 그 부담을 누가 덜어 주어야 할까요?”라고 되묻는다. 기록하고 회사 고충 창구·외부 기관에 알리면 회사는 조사하고 보호하고 보복을 막아야 하며, 동료의 증언이 큰 힘이 된다는 점을 짚는다.',
          task: '하준의 갈림길을 따라가며 일터의 성희롱에 대응하는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('하준과 동료가 함께 대응하는 길을 끝까지 고르고 근거를 고르세요.', HAJUN, [['record', 'report2', 'witness']], HAJUN_R, ['harass', 'record', 'org'], { d: 0.4 }),
            DILQ('‘웃어넘긴다’로 시작한 길에서 도움을 여는 길을 고르고 근거를 고르세요.', { text: HAJUN.text, who: HAJUN.who, motif: HAJUN.motif, choices: HAJUN.choices.filter((c) => c.id !== 'record') }, [['laugh', 'now']], HAJUN_R, ['harass', 'record'], { d: 0.35 }),
            EXPLOREQ('‘아무 말 없이 참는다’ 길도 끝까지 가 보고 결과를 견주세요.', HAJUN, HAJUN_R, ['참은 길의 끝을 확인했다', '두 길에서 하준에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '직장 내 성희롱은 기록하고 회사 고충 창구·외부 기관에 알려요. 회사에는 조사·보호·보복 금지의 책임이 있고, 동료의 증언이 침묵을 깨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '동료 유리라면 하준을 위해 할 수 있는 행동 두 가지를 쓰세요.' }] },
        notes: '인물은 가상이다. 외부 상담 기관 이름·번호는 학교가 확인해 채운다(고용노동부 등). 학생 아르바이트 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.policy-draft', type: 'activity', title: '가상 회사 예방 지침 제안서',
        method: '가상 회사 성희롱 예방 지침 제안서', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(정의 → 신고 창구 → 조사 → 보호 → 재발 방지)을 보고 쓴다.', base: '다섯 부분을 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 채용 성차별 방지 조항을 더한다.' },
        activity: {
          title: '예방 지침 쓰기', tool: 'rubric-writing',
          teacher: '“가상 회사에 낼 성희롱 예방 지침을 써요. 정의, 신고 창구, 조사 절차, 피해자 보호, 재발 방지가 들어가야 해요.” 먼저 정의를 쓰게 한다. “신고하면 양쪽 모두 징계한다”처럼 쓴 학생에게 “신고한 사람까지 징계한다면 누가 신고할 수 있을까요?”라고 묻는다. 좋은 지침은 피해자를 보호하고, 절차가 공정하고, 실제로 실행할 수 있고, 신고를 이유로 한 보복을 막는다는 점을 짚는다.',
          task: '가상 회사의 성희롱 예방 지침 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('지침의 ‘정의’를 2문장으로 쓰세요.', '이 회사에서 직장 내 성희롱을 무엇으로 볼지 판단 기준(성적 언동·불쾌감·업무 관련)을 담아 쓰세요.', ['세 기준을 담았다', '의도가 기준이 아니라고 밝혔다', '이해하기 쉬운 말이다'], { min: 40, max: 300, sent: [2, 3], must: [['불쾌']], d: 0.35 }),
            RWQ('신고 창구와 조사 절차를 쓰세요.', '누구에게 어떻게 신고하고, 회사가 어떤 차례로 조사하는지 쓰세요.', ['신고 창구가 둘 이상이다', '조사 차례가 분명하다', '비밀 보장을 다루었다'], { min: 60, max: 400, sent: [3, 5], must: [['신고'], ['조사']], starter: '신고는 ~에게 할 수 있다. 신고를 받으면 ~', d: 0.4 }),
            RWQ('피해자 보호와 보복 금지를 쓰세요.', '조사 중과 조사 뒤 피해자를 어떻게 보호하고, 신고를 이유로 한 불이익을 어떻게 막을지 쓰세요.', ['피해자 보호 조치를 썼다', '보복 금지를 썼다', '피해자의 뜻을 묻는다'], { min: 50, max: 350, sent: [2, 4], must: [['보호'], ['보복', '불이익']], d: 0.4 }),
            RWQ('재발 방지 방법을 쓰세요.', '같은 일이 다시 일어나지 않게 할 방법(교육·점검 등)을 쓰세요.', ['재발 방지 방법이 둘 이상이다', '실행할 수 있다', '모든 직원에게 해당한다'], { min: 40, max: 300, sent: [2, 3], must: [['교육', '점검']], plus: '채용 공고에서 성별·혼인·용모 조건을 쓰지 않는 조항을 더했다', d: 0.4, more: { conclude: '좋은 예방 지침은 판단 기준이 분명하고, 신고와 조사가 공정하며, 피해자를 보호하고 보복을 막고, 재발을 막는 교육으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 지침을 기준표로 점검하세요.', columns: ['기준', '내 지침에서 찾은 곳'], cells: [['피해자 보호', ''], ['절차 공정', ''], ['실행 가능', ''], ['보복 금지', '']] }, { type: 'short', prompt: '내 지침 가운데 직원들이 가장 먼저 알아야 할 한 줄을 쓰세요.' }] },
        notes: '가상 회사다. 법정 의무(예방교육·조치 의무)의 구체 내용은 사람 확인 목록의 고용노동부 안내로 대조한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.record', type: 'wrap', title: '기록 남기기 점검',
        method: '기록 남기기 체크리스트', tool: 'kitchen', minutes: 7,
        levels: { easy: '기록 양식의 칸을 확인하며 표시한다.', base: '칸을 표시하고, 가상 사례(하준)로 활동지 기록 양식을 채운다.', challenge: '증거를 보관할 때의 주의점을 쓴다.' },
        wrap: {
          teacher: '“일터에서 불쾌한 일이 생기면 무엇을 기록할까요? 기록 양식의 칸을 점검해요 — 언제, 어디서, 무엇을, 들은·본 사람, 내 대응.” 해당하는 칸만 표시하게 한다. ‘상대를 욕하는 글’에 표시한 학생에게 “기록은 감정이 아니라 사실을 남길 때 힘이 있어요”라고 말한다. 도전 반은 증거 보관 주의점(사실만·날짜 붙여·안전한 곳)을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '기록 양식', items: [{ id: 'when', text: '언제(날짜·시간)' }, { id: 'where', text: '어디서' }, { id: 'what', text: '무엇을(한 말·행동 그대로)' }, { id: 'who', text: '들은·본 사람' }, { id: 'me', text: '내 대응과 느낀 점' }, { id: 'curse', text: '상대를 욕하는 글' }, { id: 'rumor', text: '다른 직원에 대한 소문' }] }, prompt: '기록 양식에 들어갈 칸만 표시하세요.', target: { checklist: ['when', 'where', 'what', 'who', 'me'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“농담이었다면 성희롱이 아니다”에 대한 바른 말은?', options: ['맞다, 의도가 중요하다', '판단 기준은 받는 사람이 느낀 불쾌감이다', '웃었으면 괜찮다'], answer: 1, difficulty: 0.2, explain: '의도가 아니라 받는 사람의 불쾌감과 업무 관계를 봐요.' },
            { type: 'short', prompt: '증거를 보관할 때의 주의점 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '직장 내 성희롱과 채용 성차별',
          items: [
            { type: 'table', prompt: '가상 사례(하준)로 기록 양식을 채우세요.', columns: ['칸', '내용'], cells: [['언제', ''], ['어디서', ''], ['무엇을', ''], ['들은·본 사람', ''], ['내 대응', '']] },
            { type: 'short', prompt: '채용 공고에서 성차별이 되는 조건 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.stance', type: 'wrap', title: '공정한 일터 한 문장',
        method: '공정한 일터 한 문장', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 카드로 빈칸을 채운다.', base: '빈칸을 채우고, 내 말로 한 문장을 쓴다.', challenge: '동료로서 할 행동을 더한다.' },
        wrap: {
          teacher: '“‘나는 일터에서 ___ 하겠다’ — 오늘의 다짐을 완성해요.” 카드를 넣은 뒤, 동료가 증언해 줄 때 피해자의 마음을 고르게 한다. ‘모른 척’ 카드를 넣은 학생에게 “유리가 모른 척했을 때 하준은 어떻게 되었나요?”라고 되묻는다. 도전 반은 동료로서 할 행동을 더 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'fill', slots: [{ id: 'f1', label: '나는 일터에서 불쾌한 일을 보면 ___ 하겠다.' }], cards: [{ id: 'record', text: '기록하고 알리기를' }, { id: 'ignore', text: '모른 척을' }, { id: 'laugh', text: '같이 웃기를' }] }, prompt: '공정한 일터 다짐의 빈칸을 카드로 채우세요.', target: { fill: { f1: 'record' } }, difficulty: 0.15 },
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'with', label: '동료가 “내가 들은 걸 말할게”라고 할 때 피해자' }, { id: 'alone', label: '모두가 모른 척할 때 피해자' }], cards: [{ id: 'relief', text: '든든함' }, { id: 'lonely', text: '외로움' }, { id: 'joy', text: '신남' }] }, prompt: '두 장면에서 피해자의 마음을 짝지으세요.', target: { match: { with: 'relief', alone: 'lonely' } }, difficulty: 0.2 },
            { type: 'short', prompt: '공정한 일터를 위한 내 다짐을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '공정한 일터 다짐',
          items: [
            { type: 'short', prompt: '공정한 일터를 위한 내 다짐을 쓰세요.' },
            { type: 'short', prompt: '동료로서 할 수 있는 행동 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 22. 일·가정 양립과 동반자 관계 설계 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-partnership', [12]);
    const LEAVE = [['여성 직원', 82], ['남성 직원', 18]];
    const LEAVE_T = '가상 회사의 육아휴직 사용자 성별 비율(가상 자료, %)';
    const SCENES = [{ id: 's1', text: '이사할 동네를 둘이 출퇴근 거리를 따져 함께 정한다', motif: 'house' }, { id: 's2', text: '통장 관리는 한 사람이 정하고 상대는 용돈을 받는다', motif: 'cloud' }, { id: 's3', text: '아이 등원은 요일을 나눠 맡기로 함께 정한다', motif: 'sun' }, { id: 's4', text: '“내가 더 버니까 이직은 내가 정한다”고 통보한다', motif: 'cloud' }];
    const BUD = [{ id: 'home', text: '주거비(월세·관리비)', price: 1200000 }, { id: 'food', text: '식비', price: 800000 }, { id: 'save', text: '저축', price: 700000 }, { id: 'care', text: '돌봄 비용(어린이집 등)', price: 500000 }, { id: 'bill', text: '공과금·통신비', price: 300000 }, { id: 'trip', text: '해외여행 적립', price: 600000 }, { id: 'car', text: '새 차 할부', price: 900000 }];
    const CARD = { text: '가상 동반자 해솔과 윤재는 함께 산다. 해솔이 “내가 더 버니까 카드는 내가 관리할게”라며 윤재의 지출을 매일 확인하고, 커피 한 잔에도 이유를 묻는다. 너는 윤재의 입장에서 고른다.', who: '윤재', motif: 'cloud', choices: [
      { id: 'propose', text: '“돈 관리 원칙을 둘이 함께 정하자”며 대등한 원칙을 제안한다', result: '해솔이 머뭇거리다 이야기를 들어 보겠다고 한다.', impact: [{ who: '윤재', text: '대등한 대화를 시작한다', tone: 1 }],
        next: { text: '해솔이 “그래도 큰돈은 내가 정해야 하지 않아?”라고 묻는다.', who: '윤재', choices: [
          { id: 'rule', text: '“생활비는 공동 통장, 각자 쓸 돈은 각자, 큰 지출은 함께 정하자”고 구체적으로 말한다', result: '둘이 원칙을 적어 냉장고에 붙인다.', impact: [{ who: '윤재', text: '내 돈의 결정권을 되찾는다', tone: 1 }, { who: '해솔', text: '불안 대신 약속이 생긴다', tone: 1 }],
            next: { text: '석 달 뒤, 해솔이 다시 윤재의 영수증을 일일이 묻기 시작한다.', who: '윤재', choices: [
              { id: 'check', text: '원칙을 함께 다시 보고, 계속되면 상담을 받아 보자고 한다', result: '둘이 관계 상담을 예약한다.', impact: [{ who: '윤재', text: '통제에 선을 긋는다', tone: 1 }], ending: '합의된 관리는 함께 정하고 바꿀 수 있지만, 경제적 통제는 한쪽이 감시하고 결정권을 빼앗는다.' },
              { id: 'give', text: '싸우기 싫어 다시 모든 지출을 보고한다', result: '윤재는 점점 친구 만남도 줄인다.', impact: [{ who: '윤재', text: '고립된다', tone: -1 }], ending: '감시가 되풀이되면 경제적 통제다. 혼자 견디지 말고 도움을 청할 수 있다.' }] } },
          { id: 'yield', text: '“네 말이 맞아”라며 큰 결정을 모두 넘긴다', result: '윤재는 자기 돈에 대한 결정에서 점점 빠진다.', impact: [{ who: '윤재', text: '결정권을 잃는다', tone: -1 }], ending: '수입이 다르다고 결정권이 한쪽에 가는 것은 대등하지 않다.' }] } },
      { id: 'fight', text: '“감시하지 마!”라며 크게 다툰다', result: '말다툼만 커지고 해솔은 더 확인하려 든다.', impact: [{ who: '윤재', text: '관계가 지친다', tone: -1 }],
        next: { text: '다툼 뒤 해솔이 카드를 아예 빼앗아 간다.', who: '윤재', choices: [
          { id: 'help', text: '믿을 사람·상담 기관에 상황을 이야기하고 도움을 청한다', result: '상담 기관이 경제적 통제의 신호와 대응을 안내한다.', impact: [{ who: '윤재', text: '도움을 얻는다', tone: 1 }], ending: '카드를 빼앗고 지출을 막는 것은 경제적 통제다. 도움을 청하는 것이 맞다.' },
          { id: 'endure', text: '“내가 덜 버니까 어쩔 수 없지” 하고 참는다', result: '윤재는 필요한 것도 사지 못한다.', impact: [{ who: '윤재', text: '통제가 굳어진다', tone: -1 }], ending: '덜 번다고 결정권이 없는 것이 아니다.' }] } },
      { id: 'accept', text: '“알았어” 하고 모든 지출을 보고하기 시작한다', result: '해솔의 확인이 점점 늘어 하루 일정까지 묻는다.', impact: [{ who: '윤재', text: '자유가 줄어든다', tone: -1 }], ending: '맞추기만 하면 통제가 커질 수 있다. 대등한 원칙을 말해도 된다.' }] };
    const CARD_R = [{ id: 'equal', text: '돈을 더 번다고 결정권을 더 갖는 것은 아니다' }, { id: 'agree', text: '합의된 관리는 함께 정하고 언제든 바꿀 수 있다' }, { id: 'control', text: '감시하고 결정권을 빼앗는 것은 경제적 통제다' },
      { id: 'earn', text: '돈을 더 버는 쪽이 결정권을 가진다', why: '수입과 상관없이 두 사람은 대등하게 결정해요.' }, { id: 'love', text: '걱정해서 확인하는 것이니 괜찮다', why: '걱정이라는 이름이어도 상대의 자유를 빼앗으면 통제예요.' }];

    MODS.push(
      M({
        id: 'intro.leave-data', type: 'intro', title: '육아휴직 사용 자료',
        method: '육아휴직 사용 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '차이가 생기는 까닭을 보기에서 고른다.', challenge: '차이를 줄일 제도 개선을 추측해 말한다.' },
        intro: {
          teacher: '“가상 회사의 육아휴직 사용자 82%가 여성이에요. 육아휴직은 엄마만 쓰는 제도일까요?” 시연 단추로 ‘돌봄을 한쪽 성별 몫으로 보는 인식과 직장 분위기’ 보기가 골라지는 모습을 보여 준다. “엄마가 쓰는 게 자연스럽잖아요”라는 말이 나오면 “제도는 부모 누구나 쓸 수 있는데 한쪽만 쓴다면, 그 까닭은 제도일까요 인식일까요?”라고 되묻는다. 일·가정 양립 제도는 성별과 상관없는 권리라는 점을 짚는다.',
          student: '가상 회사의 성별 육아휴직 사용 그래프를 읽고, 차이가 생기는 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: LEAVE_T, unit: '%', xLabel: '성별', yLabel: '비율', data: LEAVE, question: '차이가 생기는 까닭으로 가장 알맞은 것은?', choices: ['돌봄을 한쪽 성별 몫으로 보는 인식과 직장 분위기', '남성은 육아휴직을 쓸 수 없어서', '여성만 아이를 돌볼 수 있어서', '그래프가 가상이라서'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper office calendar with a leave sticker, two paper parents holding a baby carrier between them, a paper bar chart on the wall tilted to one side', banner: '육아휴직은 누구의 권리?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 실제 육아휴직 통계는 고용노동부·통계청 자료로 바꿔 쓴다. 제도의 세부 요건(기간·급여)은 다루지 않는다.',
      }),
      M({
        id: 'intro.couple-cards', type: 'intro', title: '가상 커플의 결정 장면',
        method: '가상 커플의 결정 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 둘을 함께 나눈다.', base: '장면 넷을 대등한 결정과 한쪽 결정으로 나눈다.', challenge: '한쪽 결정 장면을 대등한 결정으로 바꿔 말한다.' },
        intro: {
          teacher: '“가상 동반자들의 결정 장면 네 개예요. 둘이 함께 정한 장면과 한쪽이 정한 장면을 나눠 볼까요?” 시연 단추로 장면 카드가 두 칸에 나뉘는 모습을 보여 준다. “돈 버는 사람이 정하는 게 합리적이죠”라는 말이 나오면 “함께 사는 집의 일인데, 수입이 적은 사람의 의견은 덜 중요할까요?”라고 되묻는다. 동반자 관계의 결정은 수입·성별과 상관없이 대등하게 한다는 점을 짚는다.',
          student: '가상 동반자들의 결정 장면을 읽고, 대등한 결정과 한쪽 결정으로 나누어 보세요.',
          demo: { tool: 'story', options: { mode: 'sort', slots: [{ id: 'equal', label: '대등한 결정' }, { id: 'one', label: '한쪽 결정' }], cards: SCENES }, sequence: [{ sort: { equal: ['s1', 's3'], one: ['s2', 's4'] } }] },
          art: { draw: 'a paper kitchen table with two chairs facing each other, a shared notebook and a calendar between two paper figures, a paper house key in the middle', banner: '함께 정할까, 혼자 정할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이며 인물 성별을 정하지 않았다(성별 고정관념 없이 판단하게). 결혼을 전제하지 않고 ‘동반자’로 둔다.',
      }),

      M({
        id: 'activity.budget', type: 'activity', title: '동반자 가계 예산',
        method: '동반자 가계 예산 짜기', tool: 'economy', minutes: 17,
        levels: { easy: '꼭 필요한 항목 넷(주거·식비·저축·돌봄)을 골라 예산 안에 맞춘다.', base: '항목 넷을 넣어 예산을 짜고, 한쪽 수입이 끊긴 달의 예산을 다시 짜고, 결정 방식을 나눈다.', challenge: '모두 짠 뒤, 한쪽 수입이 끊길 때의 재조정 원칙을 활동지에 쓴다.' },
        activity: {
          title: '두 사람의 월 예산', tool: 'economy',
          teacher: '“가상 동반자 두 사람의 월 수입을 합치면 450만 원이에요. 주거·식비·저축·돌봄을 넣어 예산을 짜 볼까요?” 예산을 짠 뒤 한쪽 수입이 끊긴 달을 다시 짜게 한다. “돈 많이 버는 쪽이 정하면 빠르잖아요”라는 학생에게 “함께 쓰는 돈인데, 한 사람만 정하면 다른 사람은 무엇을 잃을까요?”라고 묻는다. 가계 예산은 둘이 함께 정하고, 상황이 바뀌면 함께 다시 정한다는 점을 짚는다.',
          task: '가상 동반자의 월 예산을 짜고, 상황이 바뀌면 다시 짜고, 결정 방식을 나눠요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 월 수입 450만 원 안에서 주거·식비·저축·돌봄 비용을 꼭 넣어 예산을 짜세요(새 차 할부는 빼요).', toolOptions: { mode: 'budget', items: BUD, budget: 4500000 }, target: { budget: { max: 4500000, must: ['home', 'food', 'save', 'care'], not: ['car'] } }, difficulty: 0.3 },
            { prompt: '한 사람이 이직 준비로 수입이 끊겨 이번 달 수입이 270만 원이에요. 주거·식비·돌봄을 꼭 넣고, 여행 적립과 새 차 할부는 빼서 다시 짜세요.', toolOptions: { mode: 'budget', items: BUD, budget: 2700000 }, target: { budget: { max: 2700000, must: ['home', 'food', 'care'], not: ['trip', 'car'] } }, difficulty: 0.35 },
            { prompt: '가계의 일을 ‘함께 정할 일’과 ‘각자 정할 일’로 나누세요.', toolOptions: { mode: 'sort', slots: ['함께 정할 일', '각자 정할 일'], cards: ['이사·주거 계약', '저축 목표', '큰 가전 사기', '내 용돈으로 산 책', '각자 취미 모임'] }, target: { sort: { '함께 정할 일': ['이사·주거 계약', '저축 목표', '큰 가전 사기'], '각자 정할 일': ['내 용돈으로 산 책', '각자 취미 모임'] } }, difficulty: 0.3, conclude: '동반자 가계는 수입과 상관없이 함께 정하고, 상황이 바뀌면 함께 다시 정해요. 각자의 몫은 각자 정할 수 있게 남겨 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한쪽 수입이 끊길 때 두 사람이 지킬 재조정 원칙 하나를 쓰세요.' }] },
        notes: '금액은 수업용 가상 값이다(실제 생활비가 아니다). 학생 집의 수입·지출을 묻지 않는다.',
      }),
      M({
        id: 'activity.week-plan', type: 'activity', title: '맞벌이 가족 돌봄 일과',
        method: '맞벌이 가족 주간 돌봄 일과 배치', tool: 'kitchen', minutes: 17,
        levels: { easy: '하루(월요일) 일과 칸만 짝짓는다.', base: '하루 일과를 짝짓고, 주간 분담을 나누고, 공정성을 점검한다.', challenge: '모두 마친 뒤, 한 사람이 육아휴직 중인 기간의 일과를 활동지에 따로 짠다.' },
        activity: {
          title: '일과 보드', tool: 'kitchen',
          teacher: '“가상 맞벌이 가족 — 동반자 하린과 도윤, 아이 한 명 — 의 일과를 짜 봐요. 출근 시간이 다르니 누가 무엇을 맡으면 좋을까요?” 시간 칸에 일을 놓게 한 뒤 공정성을 점검한다. “아이 병원은 엄마가 가는 게 편하죠”라는 학생에게 “이 가족에서 누가 엄마인지 정해 두지 않았어요. 일정으로 보면 누가 갈 수 있을까요?”라고 묻는다. 공정한 분담은 성별이 아니라 일정과 능력, 그리고 함께 정한 약속으로 나눈다는 점을 짚는다.',
          task: '가상 맞벌이 가족의 돌봄 일과를 시간 칸에 놓고, 주간 분담과 공정성을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MATCHQ('월요일 일과: 출근 시간(하린 9시, 도윤 7시)을 보고 시간 칸마다 할 일을 놓으세요.', [['오전 7시 30분', '하린: 아이 어린이집 등원'], ['오후 4시', '도윤: 아이 하원'], ['오후 6시', '도윤: 저녁 준비'], ['오후 8시', '하린: 아이 씻기기']], { k: 2, extra: ['도윤: 아이 등원(출근 전 7시 30분)'], d: 0.3, opt: { autoMotif: false } }),
            SORTQ('한 주의 돌봄 일을 두 사람과 ‘함께’ 칸에 나누세요.', ['하린', '도윤', '함께'], [['월·수 아이 등원', '주말 장보기'], ['화·목 아이 등원', '평일 저녁 준비'], ['아이 병원 예약 챙기기', '주간 일정 회의']], { k: 1, d: 0.35, opt: { groups: false, autoMotif: false } }),
            CHECKQ('짠 일과가 공정한지 점검할 항목만 고르세요.', '공정성 점검', [['time', '두 사람의 돌봄 시간이 크게 차이 나지 않는다', true], ['invisible', '보이지 않는 일(예약·계획)도 나눠 셌다', true], ['talk', '둘이 함께 정하고 바꿀 수 있다', true], ['gender', '성별에 따라 맡을 일을 정했다', false], ['income', '더 버는 사람은 돌봄에서 빠진다', false]], { d: 0.3, more: { conclude: '공정한 돌봄 일과는 성별이 아니라 일정과 능력으로 나누고, 보이지 않는 일까지 세며, 둘이 함께 정하고 바꿀 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한 사람이 육아휴직 중일 때 일과가 어떻게 바뀌어야 공정할지 한 줄로 쓰세요.' }] },
        notes: '가족은 가상이며 인물 성별을 정하지 않았다. 학생 집의 분담 상황을 묻지 않는다.',
      }),
      M({
        id: 'activity.control-dilemma', type: 'activity', title: '경제적 통제의 갈림길',
        method: '경제적 통제 결과 추적', tool: 'dilemma', minutes: 34,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 관계 결과를 추적하고, 경제적 통제와 합의된 관리를 가르는 근거를 고른 뒤 모둠 원칙 세 줄을 발표한다.', challenge: '다른 끝도 모두 가 보고, 도움이 필요한 수준을 판단하는 기준을 활동지에 쓴다.' },
        activity: {
          title: '해솔과 윤재의 카드', tool: 'dilemma',
          teacher: '“가상 동반자 해솔은 ‘내가 더 버니까 카드는 내가 관리할게’라며 윤재의 지출을 매일 확인해요. 윤재라면 어떻게 할까요?” 장면마다 “이것은 함께 정한 관리일까요, 한쪽의 통제일까요?”라고 묻는다. ‘걱정해서 확인하는 것이니 괜찮다’ 카드를 고른 학생에게 “걱정이라는 이름으로 상대의 커피 한 잔까지 허락받게 한다면, 그 관계는 대등할까요?”라고 되묻는다. 모둠마다 ‘우리 동반자 관계 돈 원칙’ 세 줄을 정해 발표하게 한다.',
          task: '해솔과 윤재의 갈림길을 따라가며 대등한 길을 고르고, 경제적 통제를 가르는 근거를 골라 모둠 원칙을 발표해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('윤재의 입장에서 대등한 관계를 만드는 길을 끝까지 고르고 근거를 고르세요.', CARD, [['propose', 'rule', 'check']], CARD_R, ['equal', 'agree', 'control'], { d: 0.4 }),
            DILQ('‘크게 다툰다’로 시작한 길에서 도움을 여는 길을 고르고 근거를 고르세요.', { text: CARD.text, who: CARD.who, motif: CARD.motif, choices: CARD.choices.filter((c) => c.id !== 'propose') }, [['fight', 'help']], CARD_R, ['control'], { d: 0.35 }),
            EXPLOREQ('‘모든 지출을 보고한다’ 길도 끝까지 가 보고 결과를 견주세요.', CARD, CARD_R, ['보고하기 시작한 길의 끝을 확인했다', '두 길에서 윤재의 자유가 어떻게 달라졌는지 견주었다'], { d: 0.35 }),
            { prompt: '모둠별로 ‘우리 동반자 관계 돈 원칙’ 세 줄을 정해 발표해 보세요.', free: true, talk: true, toolOptions: { scene: { text: '모둠 토론: 돈 원칙 세 줄', choices: [{ id: 'talk', text: '모둠과 이야기해 본다' }] } }, conclude: '합의된 관리는 함께 정하고 언제든 바꿀 수 있어요. 감시하고 결정권을 빼앗는 것은 경제적 통제이고, 그때는 도움을 청할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '경제적 통제와 합의된 관리를 견주세요.', columns: ['기준', '합의된 관리', '경제적 통제'], cells: [['누가 정하나', '', ''], ['바꿀 수 있나', '', ''], ['상대의 자유', '', '']] }, { type: 'short', prompt: '도움이 필요한 수준이라고 판단할 기준 하나를 쓰세요.' }] },
        notes: '인물은 가상이며 성별을 정하지 않았다. 상담 기관은 학교가 확인한 곳을 안내한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.principles', type: 'wrap', title: '동반자 관계 원칙 세 줄',
        method: '동반자 관계 원칙 세 줄', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '원칙 한 줄만 써도 되고, 교사가 예를 하나 들어 준다.', base: '재정·가사·진로 원칙 세 줄을 쓰고 기준표로 점검한다.', challenge: '갈등이 생겼을 때의 원칙을 출구 질문에 하나 더 쓴다.' },
        wrap: {
          teacher: '“미래의 동반자 관계를 위한 원칙 세 줄을 써 봐요 — 재정, 가사, 진로.” 쓴 뒤 기준표로 점검하게 한다. “서로 잘하자”처럼 막연하게 쓴 학생에게 “무엇을 어떻게 나누고, 언제 다시 정할지 보이게 써 볼까요?”라고 묻는다. 결혼이나 연애를 전제하지 않고, 함께 사는 누구와도 쓸 원칙이라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '미래의 동반자 관계를 위한 재정·가사·진로 원칙을 세 줄로 쓰세요.', minChars: 30, maxChars: 300, minSentences: 1, maxSentences: 4 }, prompt: '동반자 관계 원칙을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['두 사람이 대등하다', '무엇을 어떻게 할지 구체적이다', '상황이 바뀌면 다시 정할 수 있다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“돈을 더 버는 쪽이 결정권을 가진다”에 대한 바른 생각은?', options: ['맞다, 버는 만큼 정한다', '수입과 상관없이 두 사람은 대등하게 결정한다', '결정은 나이 많은 쪽이 한다'], answer: 1, difficulty: 0.15, explain: '대등한 관계에서 결정은 함께 해요.' },
            { type: 'short', prompt: '갈등이 생겼을 때 지킬 원칙 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일·가정 양립과 동반자 관계 설계',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '감시하고 돈의 결정권을 빼앗는 것을 ___ 통제라고 한다.', answer: '경제적' },
            { type: 'short', prompt: '육아휴직이 성별과 상관없는 권리인 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 경제적 · 대등 · 함께', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '동반자 관계의 결정은 수입과 상관없이 ___하게 한다.', answer: '대등' }] },
        },
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '나의 자립 준비 점검',
        method: '나의 자립 준비 점검', tool: 'timer', minutes: 7,
        levels: { easy: '자립 기술 점검 칸만 표시한다.', base: '표시하고, 준비 정도를 기록판에 적는다.', challenge: '한 달 연습 계획을 쓴다.' },
        wrap: {
          teacher: '“동반자 관계를 대등하게 꾸리려면 나부터 자립할 수 있어야 해요. 요리, 돈 관리, 돌봄 기술은 얼마나 준비됐을까요?” 점검을 표시한 뒤 기록판에 적게 한다. “요리는 나중에 배우면 돼요”라는 학생에게 “함께 살 때 내 몫을 하려면, 지금 무엇부터 연습할 수 있을까요?”라고 묻는다. 점수는 발표시키지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '자립 기술 점검' }, prompt: '오늘 생각해 본 자립 기술을 스스로 점검하고 표시하세요.', target: { selfCheck: ['요리할 수 있는 음식을 떠올려 보았다', '한 달 용돈·지출을 기록해 본 적이 있는지 돌아보았다', '돌봄(빨래·청소·아픈 사람 챙기기) 가운데 할 수 있는 것을 떠올렸다'] }, difficulty: 0.1 },
            { type: 'tool', tool: 'timer', options: { title: '자립 준비 기록', fields: [{ label: '혼자 만들 수 있는 음식 수', unit: '가지', step: 1 }, { label: '이번 달 연습할 집안일 수', unit: '가지', step: 1 }] }, prompt: '내 자립 준비 정도를 기록판에 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '한 달 동안 연습할 자립 기술 하나와 연습 방법을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 자립 준비',
          items: [
            { type: 'short', prompt: '지금 할 수 있는 자립 기술 하나를 쓰세요.' },
            { type: 'short', prompt: '한 달 연습 계획을 한 줄로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 23. 성매매·성착취 구조와 시민의 책임 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-sex-trade', [12]);
    const GROOM = [{ id: 'g1', text: '“너 진짜 특별해” 관심·칭찬' }, { id: 'g2', text: '“우리끼리 비밀이야” 비밀 공유' }, { id: 'g3', text: '“네 친구들은 널 몰라” 고립' }, { id: 'g4', text: '기프티콘·용돈 같은 선물' }, { id: 'g5', text: '사진·만남 요구' }, { id: 'g6', text: '“안 하면 다 퍼뜨린다” 협박' }];
    const ADS = [['1분기', 20], ['2분기', 28], ['3분기', 35], ['4분기', 44]];
    const ADS_T = '온라인 유인 광고 수(가상 자료, 건)';
    const SENIOR = { text: '가상 인물 준혁(20세)은 대학 동아리 MT에서 선배가 “끝나고 업소 가자, 남자면 다 가는 거야”라고 권하고, 단톡방에는 누군가 성착취물 링크를 올린다. 너는 준혁의 입장에서 고른다.', who: '준혁', motif: 'cloud', choices: [
      { id: 'refuse', text: '“저는 안 가요. 성매매는 착취예요”라고 분명히 거절하고, 단톡방 링크도 “지워 주세요, 범죄예요”라고 쓴다', result: '잠시 어색하지만 다른 신입생 몇이 “나도 안 가”라고 따라 말한다.', impact: [{ who: '준혁', text: '가해에 끼지 않는다', tone: 1 }, { who: '착취 피해자', text: '수요가 하나 줄어든다', tone: 1 }],
        next: { text: '선배가 “분위기 깨네, 사회생활 못 하겠다”며 핀잔을 준다.', who: '준혁', choices: [
          { id: 'firm', text: '“사회생활은 착취에 끼지 않는 데서 시작해요”라고 담담히 말한다', result: '선배가 더 말하지 않는다.', impact: [{ who: '준혁', text: '자기 원칙을 지킨다', tone: 1 }],
            next: { text: '다음 날, 동아리 임원들이 MT 문화를 이야기하는 자리가 열린다.', who: '준혁', choices: [
              { id: 'rule', text: '“성매매 권유·성착취물 공유 금지” 규칙과 신고 창구를 제안한다', result: '동아리 규칙에 새 조항이 들어간다.', impact: [{ who: '공동체', text: '존중하는 문화가 생긴다', tone: 1 }], ending: '성인 시민의 책임은 가해하지 않는 것에서 나아가, 공동체의 규칙을 바꾸는 것까지 이어진다.' },
              { id: 'pass', text: '괜히 또 튈까 봐 말하지 않는다', result: '규칙은 그대로이고 다음 MT도 비슷하다.', impact: [{ who: '공동체', text: '문화가 그대로다', tone: 0 }], ending: '개인의 거절도 중요하지만, 규칙을 바꾸면 다음 사람도 지킬 수 있다.' }] } },
          { id: 'cave', text: '핀잔이 부담돼 “다음엔 갈게요”라고 둘러댄다', result: '선배가 다음 모임에서 또 권한다.', impact: [{ who: '준혁', text: '압박이 이어진다', tone: -1 }], ending: '둘러대면 압박이 남는다. 분명한 거절이 압박을 끊는다.' }] } },
      { id: 'silent', text: '가지는 않지만 아무 말도 하지 않는다', result: '다른 신입생들은 선배를 따라가고, 단톡방 링크는 그대로 남는다.', impact: [{ who: '착취 피해자', text: '착취가 이어진다', tone: -1 }],
        next: { text: '단톡방에 링크를 본 사람이 늘어난다.', who: '준혁', choices: [
          { id: 'report', text: '링크를 열지 않고 방 이름·시간만 적어 학교 신고 창구에 알린다', result: '링크가 지워지고 동아리에 예방 교육이 잡힌다.', impact: [{ who: '착취 피해자', text: '유포가 멈춘다', tone: 1 }], ending: '말하지 못했어도 알리는 길은 남아 있다. 성착취물은 보지 않고 알린다.' },
          { id: 'watch', text: '궁금해서 링크를 눌러 본다', result: '조회 수가 올라가고 링크가 더 퍼진다.', impact: [{ who: '착취 피해자', text: '피해가 커진다', tone: -1 }], ending: '보는 것도 착취의 수요가 된다.' }] } },
      { id: 'follow', text: '분위기를 따라 선배와 함께 간다', result: '준혁은 착취 구조의 수요가 된다.', impact: [{ who: '착취 피해자', text: '착취가 이어진다', tone: -1 }, { who: '준혁', text: '가해에 가담한다', tone: -1 }], ending: '“남자면 다 간다”는 고정관념은 착취의 수요를 만든다. 사지 않는 것이 성인 시민의 책임이다.' }] };
    const SENIOR_R = [{ id: 'demand', text: '사지 않고 보지 않는 것이 착취의 수요를 끊는다' }, { id: 'adult', text: '성인 시민은 가해하지 않을 책임이 있다' }, { id: 'rule', text: '공동체의 규칙을 바꾸는 데 참여한다' },
      { id: 'choice', text: '성인이 되면 성매매는 개인 선택이다', why: '성매매는 사람의 몸을 사고파는 착취 구조이고, 사는 쪽이 수요를 만들어요.' }, { id: 'man', text: '남자면 다 가는 거다', why: '성별 고정관념이 착취의 수요를 정당화해요.' }];
    const LOCAL = (names) => ({ title: '가상 지역', grid: [6, 4], names, places: [{ name: '학교', icon: 'school', at: [0, 1], legend: '학교(담임·상담 선생님)' }, { name: '지원 기관', icon: 'office', at: [2, 0], legend: `지원 기관 ${HELPNO}` }, { name: '경찰서', icon: 'police', at: [5, 1], legend: '경찰서(수사·보호)' }, { name: '온라인 신고 창구', icon: 'dot', at: [3, 3], legend: '온라인 신고·삭제 요청 창구' }, { name: '공원', icon: 'park', at: [0, 3] }] });

    MODS.push(
      M({
        id: 'intro.grooming-steps', type: 'intro', title: '그루밍의 흐름',
        method: '그루밍 흐름 순서 짓기', tool: 'timeline', minutes: 7,
        levels: { easy: '앞 네 단계만 함께 놓는다.', base: '여섯 단계를 차례로 놓는다.', challenge: '단계마다 경고 신호를 하나씩 말한다.' },
        intro: {
          teacher: '“온라인 그루밍은 갑자기 오지 않아요. 관심·칭찬에서 협박까지, 가상 대화 카드를 차례로 놓아 볼까요?” 시연 단추로 카드가 차례로 놓이는 모습을 보여 준다. “그루밍은 낯선 사람만 하죠”라는 말이 나오면 “처음엔 친절한 온라인 친구였다면, 낯선 사람으로 느껴질까요?”라고 되묻는다. 그루밍은 신뢰를 쌓아 고립시키는 흐름이고, 성인이 될 우리는 이 흐름을 알아보고 아동·청소년을 지킬 책임이 있다는 점을 밝힌다.',
          student: '온라인 그루밍이 이어지는 가상 대화 카드를 차례대로 놓아 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '나중'], slots: 6, cards: [GROOM[3], GROOM[0], GROOM[5], GROOM[2], GROOM[1], GROOM[4]] }, sequence: [{ order: GROOM.map((g) => g.id) }] },
          art: { draw: 'a paper timeline ribbon with six chat bubble cards pinned along it, the early bubbles bright and friendly, the later ones darker with a small padlock and chain, a paper hand holding a stop sign near the beginning', banner: '그루밍은 어떻게 다가올까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '대화 카드는 가상이며 성적 요구의 내용을 쓰지 않는다. 학생에게 받은 메시지를 묻지 않는다. 이 시간은 성매매 예방교육(성매매피해자보호법 제5조)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.demand-graph', type: 'intro', title: '수요가 착취를 만드는 자료',
        method: '수요가 착취를 만드는 자료', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '같은 기간 검색 수요도 늘었다는 설명과 함께 두 흐름의 관계를 해석한다.', challenge: '함께 늘었다는 것(상관)과 하나가 다른 하나를 만들었다는 것(인과)을 구별해 말한다.' },
        intro: {
          teacher: '“가상 자료예요. 온라인 유인 광고가 20건에서 44건으로 늘었고, 같은 기간 관련 검색 수요도 비슷하게 늘었어요. 이 둘은 어떤 관계일까요?” 시연 단추로 ‘함께 늘었지만, 이것만으로 원인을 단정할 수는 없다’ 보기가 골라지는 모습을 보여 준다. “수요 때문에 광고가 는 게 확실하네요”라는 말이 나오면 “같이 늘었다는 것과 하나가 다른 하나를 만들었다는 것은 같을까요? 더 필요한 자료는 무엇일까요?”라고 되묻는다. 수요가 착취를 키운다는 구조는 다른 근거와 함께 따지되, 자료 해석은 신중하게 한다는 점을 짚는다.',
          student: '온라인 유인 광고 수 가상 그래프를 읽고, 같은 기간 늘어난 검색 수요와의 관계를 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: ADS_T, unit: '건', xLabel: '분기', yLabel: '광고 수', data: ADS, question: '두 흐름(광고·검색 수요)의 관계를 바르게 말한 것은?', choices: ['함께 늘었지만 이것만으로 원인을 단정할 수는 없다', '광고가 줄었다', '검색 수요는 광고와 상관없다', '그래프는 해석할 수 없다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper line graph rising across four columns, a second faint dotted paper line rising beside it, a paper magnifying glass and a question mark between the two lines', banner: '함께 늘면 원인일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '자료는 수업용 가상 값이다. 교구는 한 줄 그래프만 그릴 수 있어 검색 수요의 변화는 말로 보탰다.',
      }),

      M({
        id: 'activity.adult-dilemma', type: 'activity', title: '스무 살 첫해의 갈림길',
        method: '스무 살 첫 해의 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거를 고른다.', base: '갈림길 세 번을 지나 자신·피해자·공동체에 이어지는 결과를 추적하고 근거를 고른다.', challenge: '다른 끝도 가 보고, 공동체 규칙 제안을 활동지에 쓴다.' },
        activity: {
          title: '준혁의 MT', tool: 'dilemma',
          teacher: '“가상 인물 준혁은 스무 살 대학생이에요. 선배가 ‘남자면 다 가는 거야’라며 성매매 업소를 권하고, 단톡방엔 성착취물 링크가 올라와요. 준혁이라면?” 장면마다 “이 선택은 준혁, 착취 피해자, 동아리에 각각 무엇을 남길까요?”라고 묻는다. ‘성인이면 개인 선택’ 카드를 고른 학생에게 “사는 사람이 없다면 이 착취 구조는 돌아갈까요?”라고 되묻는다. 사지 않고, 보지 않고, 알리고, 규칙을 바꾸는 것이 성인 시민의 책임이라는 점을 짚는다.',
          task: '준혁의 갈림길을 따라가며 자신·피해자·공동체에 이어지는 결과를 보고, 책임 있는 길과 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('준혁의 입장에서 성인 시민의 책임을 지키는 길을 끝까지 고르고 근거를 고르세요.', SENIOR, [['refuse', 'firm', 'rule']], SENIOR_R, ['demand', 'adult', 'rule'], { d: 0.4 }),
            DILQ('‘아무 말도 하지 않는다’로 시작한 길에서 피해를 줄이는 선택을 고르고 근거를 고르세요.', { text: SENIOR.text, who: SENIOR.who, motif: SENIOR.motif, choices: SENIOR.choices.filter((c) => c.id !== 'refuse') }, [['silent', 'report']], SENIOR_R, ['demand'], { d: 0.35 }),
            EXPLOREQ('‘선배와 함께 간다’ 길도 끝까지 가 보고 결과를 견주세요.', SENIOR, SENIOR_R, ['따라간 길의 끝을 확인했다', '두 길에서 착취 피해자와 공동체에 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '성매매·성착취는 사는 쪽의 수요가 만드는 구조예요. 성인 시민은 사지 않고, 보지 않고, 알리고, 공동체의 규칙을 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대학 동아리나 일터에 제안할 규칙 한 줄을 쓰세요.' }] },
        notes: '인물은 가상의 20세 성인이다. 업소·성착취물의 내용은 다루지 않는다. 성별 고정관념(‘남자면 다 간다’)은 함정으로만 쓰고 바로잡는다.',
      }),
      M({
        id: 'activity.protect-map', type: 'activity', title: '아동·청소년 보호 연결 지도',
        method: '아동·청소년 보호 연결 지도', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 이름이 바로 읽힌다(핀 셋).', base: '장소 이름 없이 범례를 보고 상황마다 연결할 곳에 핀을 놓고, 연결 순서를 활동지에 잇는다.', challenge: '장소 이름 없이 핀을 놓고, 증거 보존 주의점을 활동지에 쓴다.' },
        activity: {
          title: '성인이 잇는 보호 경로', tool: 'map',
          teacher: '“성인이 된 내가 아는 청소년이 온라인 그루밍을 당하는 것 같다면, 어디로 이어야 할까요? 가상 지역 지도에서 찾아봐요.” 핀을 놓기 전에 “지금 위험한가요, 상담이 필요한가요, 온라인 게시물을 지워야 하나요?”라고 묻는다. 공원에 핀을 놓는 학생에게 “그곳에서 보호를 맡을 사람이 있을까요?”라고 되묻는다. 번호는 학교가 확인한 것을 쓰고, 증거는 저장·전달하지 않고 기록만 남긴다는 점을 짚는다.',
          task: '상황마다 아동·청소년을 보호하기 위해 연결할 곳에 핀을 놓아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '아는 청소년이 그루밍 메시지를 받고 있다고 털어놓았어요. 그 청소년의 학교에서 함께 이야기할 곳에 핀을 놓으세요.', toolOptions: LOCAL(true), target: { place: '학교' }, difficulty: 0.2 },
            { prompt: '청소년이 지금 만남을 강요받고 있어 위험해요. 바로 연결할 곳에 핀을 놓으세요.', toolOptions: LOCAL(true), target: { place: '경찰서' }, difficulty: 0.25 },
            { prompt: '청소년의 사진이 온라인에 올라가 지워야 해요. 신고·삭제를 요청할 곳에 핀을 놓으세요.', toolOptions: LOCAL(true), target: { place: '온라인 신고 창구' }, difficulty: 0.25 },
            { prompt: '청소년의 마음 회복과 이어지는 지원을 맡을 곳에 핀을 놓으세요.', toolOptions: LOCAL(true), target: { place: '지원 기관' }, difficulty: 0.3, conclude: '성인은 학교·경찰·온라인 신고 창구·지원 기관으로 청소년을 이어 지켜요. 증거는 저장·전달하지 않고 기록만 남기고, 번호는 학교가 확인한 것을 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '연결 순서와 증거 보존 주의점을 쓰세요.', columns: ['차례', '곳', '주의점'], cells: [['1', '', ''], ['2', '', ''], ['3', '지원 기관', HELPNO]] }] },
        notes: '지도는 가상이다. 온라인 신고·삭제 창구와 지원 기관 이름·번호는 학교가 확인해 채운다.',
      }),
      M({
        id: 'activity.campaign', type: 'activity', title: '“사지 않는다” 시민 캠페인 설계',
        method: '"사지 않는다" 시민 캠페인 설계서', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(대상 → 메시지 → 매체 → 행동 제안)을 보고 쓴다.', base: '대상·메시지 → 매체와 행동 제안 → 예방교육 취지 잇기 → 효과 측정 차례로 설계서를 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 캠페인 효과 측정 지표를 만든다.' },
        activity: {
          title: '수요 차단 캠페인 설계서', tool: 'rubric-writing',
          teacher: '“‘사지 않는다’ 시민 캠페인을 설계해요. 누구에게, 어떤 메시지를, 어떤 매체로 전하고, 무엇을 하게 할까요?” 먼저 대상을 정하게 한다. “성매매하는 사람들이 문제”처럼 착취당하는 사람을 겨누는 문장을 쓴 학생에게 “캠페인이 겨눌 쪽은 착취당하는 사람일까요, 수요를 만드는 쪽일까요?”라고 묻는다. 성매매피해자보호법이 예방교육을 두는 취지(미리 알고 막기)와 이어, 피해자를 탓하지 않고 실행할 수 있는 캠페인을 만든다는 점을 짚는다.',
          task: '수요 차단 시민 캠페인 설계서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('캠페인 대상과 핵심 메시지를 쓰세요.', '캠페인을 볼 대상(예: 대학 신입생)과 그들에게 전할 핵심 메시지를 쓰세요.', ['대상을 정했다', '메시지가 수요를 겨눈다', '착취당한 사람을 탓하지 않는다'], { min: 40, max: 300, sent: [2, 3], must: [['대상'], ['메시지']], starter: '이 캠페인의 대상은 ~이고, 핵심 메시지는 “~”이다.', d: 0.35 }),
            RWQ('매체와 행동 제안을 쓰세요.', '메시지를 전할 매체(포스터·숏폼 등)와 대상이 할 행동 두 가지를 쓰세요.', ['매체를 골랐다', '행동이 두 가지다', '실행할 수 있다'], { min: 50, max: 350, sent: [2, 4], must: [['행동', '제안']], d: 0.4 }),
            RWQ('예방교육의 취지와 잇는 문단을 쓰세요.', '성매매피해자보호법이 학교 예방교육을 두는 취지와 내 캠페인을 이어 쓰세요.', ['예방교육의 취지를 썼다', '캠페인과 이었다', '인권 관점이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['예방']], d: 0.4 }),
            RWQ('효과 측정 방법을 쓰세요.', '캠페인이 효과가 있었는지 확인할 방법을 쓰세요.', ['측정 방법이 구체적이다', '실제로 잴 수 있다', '참여자 개인정보를 모으지 않는다'], { min: 40, max: 300, sent: [2, 3], must: [['측정', '확인', '설문']], plus: '측정 지표를 두 개 이상 만들었다', d: 0.4, more: { conclude: '좋은 수요 차단 캠페인은 수요를 겨누고, 착취당한 사람을 탓하지 않으며, 실행할 수 있고, 효과를 잴 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 설계서를 기준표로 점검하세요.', columns: ['기준', '내 설계서에서 찾은 곳'], cells: [['인권 관점', ''], ['피해자 탓하지 않음', ''], ['실행 가능', ''], ['측정 방법', '']] }, { type: 'short', prompt: '캠페인 메시지를 한 줄 구호로 쓰세요.' }] },
        notes: '성매매 관련 정책 논쟁(처벌 방식 등)의 특정 입장을 정답으로 두지 않는다. 캠페인은 ‘사지 않기·보지 않기·알리기’ 같은 시민 행동에 초점을 둔다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.pledge', type: 'wrap', title: '성인 시민 서약',
        method: '성인 시민 서약 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나를 카드로 채운다.', base: '빈칸 둘을 채워 서약을 완성한다.', challenge: '친구에게 권하는 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '“성인이 되는 시민으로서 서약을 완성해요 — 사지 않는다, 보지 않는다, 알린다, 지지한다.” 빈칸을 채운 뒤 두세 명에게 읽게 한다. ‘따라간다’ 카드를 넣은 학생에게 “분위기를 따라가면 누가 피해를 입을까요?”라고 되묻는다. 서약은 이름 없이 활동지에 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '나는 성을 돈으로 ___.' }, { id: 'f2', label: '나는 성착취물을 ___.' }, { id: 'f3', label: '아동·청소년이 위험하면 ___.' }, { id: 'f4', label: '피해자를 탓하지 않고 ___.' }], cards: ['사지 않는다', '보지 않는다', '알린다', '지지한다', '따라간다'] }, prompt: '성인 시민 서약의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '사지 않는다', f2: '보지 않는다', f3: '알린다', f4: '지지한다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '“그루밍은 낯선 사람만 한다”에 대한 바른 말은?', options: ['맞다', '친절한 온라인 친구나 아는 사람도 그루밍을 할 수 있다', '어른은 그루밍과 상관없다'], answer: 1, difficulty: 0.15, explain: '그루밍은 신뢰를 쌓으며 다가와요.' },
            { type: 'short', prompt: '내 서약을 친구에게 권하는 말로 바꿔 한 문장 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성매매·성착취 구조와 시민의 책임',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사는 쪽의 ___가 착취를 만든다.', answer: '수요' },
            { type: 'short', prompt: '성인 시민으로서 나의 서약 한 줄을 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 수요 · 그루밍 · 알린다', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '신뢰를 쌓아 고립시키고 착취하는 흐름을 ___이라고 한다.', answer: '그루밍' }] },
        },
      }),
      M({
        id: 'wrap.poster', type: 'wrap', title: '캠페인 배너 한 장',
        method: '캠페인 배너 한 장', tool: 'collage', minutes: 7,
        levels: { easy: '배너 틀만 꾸미고, 문구는 보기 셋 가운데 고른다.', base: '배너 틀과 강조를 꾸미고, 문구를 직접 써서 배치를 점검한다.', challenge: '캠페인 대상에 맞춰 배치와 말투를 점검한다.' },
        wrap: {
          teacher: '“설계한 캠페인의 배너를 빠르게 꾸며요. 판에는 틀과 강조를, 문구는 활동지에 써요.” 조각을 붙인 뒤 점검 칸을 표시하게 한다. 실제 사람 사진을 넣으려는 학생에게 “캠페인이 또 다른 사람의 이미지를 쓰지 않게 도형으로만 표현해 볼까요?”라고 말한다. 쉬움 반 문구 보기: “사지 않아요 / 보지 않아요 / 보면 알려요”.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'circle', 'star', 'triangle'], colors: ['빨강', '노랑', '파랑', '검정', '하양'], maxPieces: 10 }, prompt: '캠페인 배너의 틀과 강조 조각을 붙이고 점검하세요.', target: { selfCheck: ['배너 띠(틀)를 만들었다', '메시지를 강조할 자리를 정했다', '실제 사람 사진을 쓰지 않았다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '수요 차단 배너 문구로 알맞은 것은?', options: ['“성매매하는 사람들은 부끄러운 줄 알아라”', '“사지 않는 것이 착취를 멈춥니다”', '“업소 정보 공유 환영”'], answer: 1, difficulty: 0.15, explain: '착취당한 사람이 아니라 수요를 겨눠요.' },
            { type: 'short', prompt: '내 배너 문구를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '캠페인 배너',
          items: [
            { type: 'short', prompt: '배너 문구와 그 문구를 고른 까닭을 쓰세요.' },
            { type: 'short', prompt: '배너를 볼 대상과 붙일 곳을 쓰세요.' },
          ],
        },
        notes: '조각 판에는 글자를 쓸 수 없어 문구는 활동지에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 24. 성인기 성 건강 관리와 계획된 부모 됨 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-health-plan', [12]);
    const YEAR = [['입학·취업 건강검진', '예방접종 기록 확인'], ['필요할 때 성매개감염 검사', '피임 상담']];
    const MYTH = [['증상이 없어도 정기 검사가 도움이 될 수 있다', '피임 상담은 결혼과 상관없이 받을 수 있다', '예방접종 기록은 성인이 되어도 확인한다'], ['증상이 없으면 검사가 필요 없다', '피임은 결혼 뒤에나 생각할 일이다', '건강하면 검진이 필요 없다']];
    const PARENT = [{ id: 'med', text: '출산 의료비(가상)', price: 1500000 }, { id: 'goods', text: '아기 용품(가상)', price: 1000000 }, { id: 'care', text: '첫해 돌봄 비용(가상)', price: 3000000 }, { id: 'loss', text: '육아휴직 기간 줄어드는 소득(가상)', price: 4000000 }, { id: 'car', text: '새 차 바꾸기', price: 5000000 }, { id: 'brand', text: '명품 유모차', price: 2500000 }];
    const TOWN = (names) => ({ title: '가상 동네', grid: [6, 4], names, places: [{ name: '보건소', icon: 'office', at: [1, 0], legend: '보건소(예방접종·검사)' }, { name: '의료기관', icon: 'hospital', at: [4, 0], legend: '병원·의원' }, { name: '상담 기관', icon: 'house', at: [2, 3], legend: `상담 기관 ${HELPNO}` }, { name: '카페', icon: 'market', at: [5, 3] }] });

    MODS.push(
      M({
        id: 'intro.year-line', type: 'intro', title: '스무 살 첫해 건강 일정',
        method: '스무 살 첫해 건강 일정 순서 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 셋을 함께 놓는다.', base: '카드 넷을 ‘입학·취업 무렵’과 ‘필요할 때·정기적으로’ 칸에 놓고 미루기 쉬운 일정을 말한다.', challenge: '미루는 까닭과 해결을 말한다.' },
        intro: {
          teacher: '“스무 살 첫해, 스스로 챙길 건강 일정이 있어요 — 건강검진, 예방접종 기록 확인, 필요할 때 성매개감염 검사, 피임 상담. 언제 챙기면 좋을까요?” 시연 단추로 카드가 두 시기 칸에 놓이는 모습을 보여 준다. “아프지 않으면 안 가도 되잖아요”라는 말이 나오면 “증상 없이 지나가는 문제도 있다면, 언제 알 수 있을까요?”라고 되묻는다. 성인기 건강은 스스로 일정을 챙기는 데서 시작한다는 점을 밝힌다.',
          student: '스무 살 첫해에 챙길 건강 일정 카드를 시기 칸에 놓아 보고, 미루기 쉬운 일정이 무엇인지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'sort', axis: ['스무 살 봄', '한 해 동안'], slots: [{ id: 'start', label: '입학·취업 무렵' }, { id: 'need', label: '필요할 때·정기적으로' }], cards: mix(YEAR) }, sequence: [{ sort: { start: YEAR[0], need: YEAR[1] } }] },
          art: { draw: 'a paper calendar ribbon for a year with small health icons pinned on it (a stethoscope, a vaccine bottle, a test tube, a speech bubble with a cross), a paper young adult holding a pen', banner: '스무 살, 내 건강 일정은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '일정의 시기는 일반적인 예시다. 검진·접종·검사 항목과 시기는 사람 확인 목록의 공식 안내로 대조한다. 학생 자신의 건강 상태를 묻지 않는다.',
      }),
      M({
        id: 'intro.myth-check', type: 'intro', title: '성인 성 건강 소문 판정',
        method: '성인 성 건강 소문 판정', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 셋을 함께 사실·소문으로 가른다.', base: '카드 여섯을 사실·소문으로 가른다.', challenge: '소문이 생기는 배경을 하나 말한다.' },
        intro: {
          teacher: '“성인의 성 건강에 대한 말 여섯 개예요. 사실일까요, 소문일까요?” 시연 단추로 카드가 사실·소문 칸에 나뉘는 모습을 보여 준다. “피임은 결혼하고 생각하면 되죠”라는 말이 나오면 “계획하지 않은 일이 생기기 전에 정보를 아는 것과, 생긴 뒤에 찾는 것은 어떻게 다를까요?”라고 되묻는다. 성 건강 관리는 결혼 여부와 상관없이 성인이 스스로 챙기는 일이라는 점을 짚는다.',
          student: '성인의 성 건강에 대한 여섯 문장을 사실과 소문으로 나누어 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['사실', '소문'], cards: mix(MYTH) }, sequence: [{ sort: { 사실: MYTH[0], 소문: MYTH[1] } }] },
          art: { draw: 'paper rumor bubbles drifting toward two paper boxes marked with a check and a cross, a paper clinic door and a paper calendar beside them', banner: '그 말, 사실일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사실 문장은 체계도 concepts(예방접종과 검진·정기 검사·피임 상담) 범위다. 세부 의학 정보는 의료기관에서 확인하게 한다.',
      }),

      M({
        id: 'activity.plan-board', type: 'activity', title: '나의 성 건강 관리 계획',
        method: '나의 성 건강 관리 계획 보드', tool: 'kitchen', minutes: 17,
        levels: { easy: '계획 항목 셋만 고른다.', base: '계획 항목 다섯을 고르고, 항목마다 이용할 곳을 짝짓고, 상담 때 물을 질문을 고른다.', challenge: '모두 고른 뒤 비용·비밀 보장 메모를 활동지에 쓴다.' },
        activity: {
          title: '성 건강 계획 보드', tool: 'kitchen',
          teacher: '“성인이 되면 내 성 건강은 내가 챙겨요. 계획 보드에 넣을 항목을 고르고, 어디서 받을지 이어 볼까요?” 항목을 고를 때 “이 항목은 증상이 있을 때만 필요할까요?”라고 묻는다. ‘인터넷 후기만 보고 정한다’를 넣으려는 학생에게 “후기와 의료인의 상담은 무엇이 다를까요?”라고 되묻는다. 보건소·의료기관을 알고, 궁금한 것은 상담에서 묻는 것이 관리 계획의 시작이라는 점을 짚는다.',
          task: '나의 성 건강 관리 계획 항목을 고르고, 이용할 곳과 상담 질문을 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('성 건강 관리 계획에 넣을 항목만 고르세요.', '성 건강 관리 계획', [['vac', '예방접종 기록 확인', true], ['check', '정기 건강검진', true], ['sti', '필요할 때 성매개감염 검사', true], ['contra', '피임 상담', true], ['ask', '궁금한 것을 의료인에게 묻기', true], ['review', '인터넷 후기만 보고 정하기', false], ['wait', '아플 때까지 미루기', false]], { k: 3, d: 0.3 }),
            MATCHQ('계획 항목마다 이용할 곳을 짝지으세요.', [['예방접종 기록 확인', '보건소'], ['피임 상담', '의료기관(산부인과·비뇨의학과 등)'], ['마음과 관계 고민', '상담 기관']], { k: 2, extra: ['익명 커뮤니티'], d: 0.3, opt: { autoMotif: false } }),
            CHECKQ('상담 때 물어보면 좋은 질문만 고르세요.', '상담 질문', [['cost', '비용은 얼마인가요?', true], ['secret', '상담 내용은 비밀이 보장되나요?', true], ['when', '얼마나 자주 받으면 좋을까요?', true], ['friend', '친구는 어떻게 했나요?', false]], { d: 0.3, more: { conclude: '성인기 성 건강 관리는 예방접종·검진·검사·상담을 스스로 계획하고, 보건소·의료기관을 알고, 비용과 비밀 보장을 묻는 데서 시작해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 성 건강 관리 계획을 쓰세요.', columns: ['항목', '시기', '이용할 곳'], cells: [['예방접종 기록 확인', '', ''], ['정기 건강검진', '', ''], ['피임 상담', '', '']] }] },
        notes: '계획은 일반 예시이며 학생 자신의 건강 상태·성 경험을 묻지 않는다. 이용할 곳·비용·비밀 보장은 사람 확인 목록의 공식 안내로 대조한다.',
      }),
      M({
        id: 'activity.parent-budget', type: 'activity', title: '부모 됨 준비 예산',
        method: '부모 됨 준비 예산', tool: 'economy', minutes: 17,
        levels: { easy: '꼭 필요한 항목 셋(의료비·용품·돌봄)을 골라 예산 안에 맞춘다.', base: '항목 넷(소득 감소 포함)을 넣어 예산을 짜고, 준비 기간을 고르고, 두 사람의 몫을 나눈다.', challenge: '모두 마친 뒤 돌봄 분담 계획을 활동지에 이어 쓴다.' },
        activity: {
          title: '첫해 준비 예산', tool: 'economy',
          teacher: '“가상 동반자 두 사람이 아이를 계획하고 있어요. 출산 의료비, 아기 용품, 첫해 돌봄, 육아휴직 기간 줄어드는 소득 — 얼마가 필요할까요?” 예산을 짜게 한 뒤 준비 기간을 따지게 한다. ‘명품 유모차’를 넣으려는 학생에게 “부모 됨의 준비에서 꼭 필요한 것과 바람은 어떻게 나눌까요?”라고 묻는다. 부모 됨은 마음만이 아니라 건강·경제·돌봄을 두 사람이 함께 준비하는 일이라는 점을 짚는다.',
          task: '가상 동반자의 부모 됨 첫해 예산을 짜고, 준비 기간과 두 사람의 몫을 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 예산 1,000만 원 안에서 출산 의료비·아기 용품·첫해 돌봄 비용·소득 감소분을 꼭 넣어 예산을 짜세요(새 차는 빼요).', toolOptions: { mode: 'budget', items: PARENT, budget: 10000000 }, target: { budget: { max: 10000000, must: ['med', 'goods', 'care', 'loss'], not: ['car'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 예산 1,000만 원 안에서 출산 의료비·아기 용품·첫해 돌봄 비용을 꼭 넣어 예산을 짜세요(새 차는 빼요).', target: { budget: { max: 10000000, must: ['med', 'goods', 'care'], not: ['car'] } } } } },
            { prompt: '두 사람이 함께 한 달에 100만 원씩 모은다면, 꼭 필요한 네 항목(950만 원)을 준비하는 데 걸리는 기간을 고르세요.', toolOptions: { mode: 'pick', basket: '준비 기간', cards: ['약 10개월', '약 3개월', '약 2년 6개월'] }, target: { pick: ['약 10개월'] }, difficulty: 0.35 },
            { prompt: '부모 됨 준비를 ‘두 사람이 함께’와 ‘한쪽만’으로 나누세요.', toolOptions: { mode: 'sort', slots: ['두 사람이 함께', '한쪽만 하면 되는 일'], cards: ['돈 모으기', '출산 전 건강 상담', '육아휴직 계획', '돌봄 분담 정하기'] }, target: { sort: { '두 사람이 함께': ['돈 모으기', '출산 전 건강 상담', '육아휴직 계획', '돌봄 분담 정하기'], '한쪽만 하면 되는 일': [] } }, difficulty: 0.3, conclude: '부모 됨은 마음만으로 되지 않아요. 건강·경제·돌봄을 두 사람이 함께 계획하고 준비하는 일이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부모 됨 준비에서 두 사람의 돌봄 분담 계획을 한 줄로 쓰세요.' }] },
        notes: '금액은 수업용 가상 값이다(실제 비용·정부 지원은 다루지 않음). 세 번째 문항은 모든 카드가 ‘함께’ 칸에 들어가는 문항이다. 학생 가정의 사정을 묻지 않는다.',
      }),
      M({
        id: 'activity.readiness-essay', type: 'activity', title: '부모 됨의 준비 네 영역',
        method: '부모 됨의 준비 네 영역 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '두 영역(건강·경제)만 문장 틀을 보고 쓴다.', base: '건강 → 관계 → 경제 → 돌봄 네 영역을 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 예기치 않은 상황에 대한 대응 문단을 더한다.' },
        activity: {
          title: '준비 네 영역 분석 글', tool: 'rubric-writing',
          teacher: '“부모 됨의 준비를 건강·관계·경제·돌봄 네 영역으로 분석하는 글을 써요. 계획된 부모 됨은 무엇을 준비하는 걸까요?” 영역마다 근거를 쓰게 한다. “엄마가 될 사람이 준비하면 되죠”라고 쓴 학생에게 “아이는 두 사람의 아이인데, 준비는 한 사람 몫일까요?”라고 묻는다. 부모 됨의 준비는 두 사람의 공동 책임이고, 성별 고정관념 없이 나눈다는 점을 짚는다. 결혼·출산을 해야 한다는 전제를 두지 않는다.',
          task: '부모 됨의 준비를 네 영역으로 분석하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('건강 영역의 준비를 2문장으로 쓰세요.', '계획된 부모 됨을 위해 두 사람이 준비할 건강(검진·상담 등)을 쓰세요.', ['두 사람 모두의 건강을 다루었다', '정확한 정보에 바탕을 두었다', '성별 고정관념이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['건강', '검진', '상담']], starter: '건강 영역에서 두 사람은 ~을 준비한다.', d: 0.35 }),
            RWQ('관계 영역의 준비를 2문장으로 쓰세요.', '부모가 되기 전에 두 사람이 관계에서 준비할 것(대화·갈등 해결·합의)을 쓰세요.', ['대화와 합의를 다루었다', '대등한 관계를 썼다', '구체적이다'], { min: 40, max: 300, sent: [2, 3], must: [['대화', '합의']], d: 0.35 }),
            RWQ('경제 영역의 준비를 2문장으로 쓰세요.', '오늘 짠 가상 예산을 근거로 경제 영역의 준비를 쓰세요.', ['예산 근거를 썼다', '두 사람이 함께 준비한다', '가상 값임을 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['예산', '비용']], d: 0.35 }),
            RWQ('돌봄 영역의 준비를 2~3문장으로 쓰세요.', '아이가 태어난 뒤 돌봄을 두 사람이 어떻게 나눌지 쓰세요.', ['돌봄 분담이 구체적이다', '성별이 아니라 일정·능력으로 나눈다', '육아휴직 등 제도를 떠올렸다'], { min: 50, max: 350, sent: [2, 4], must: [['돌봄']], plus: '예기치 않은 상황(한쪽 수입 중단 등)에 대한 대응 문단을 더했다', d: 0.4, more: { conclude: '계획된 부모 됨은 건강·관계·경제·돌봄 네 영역을 두 사람이 함께 준비하는 공동 책임이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 글을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['네 영역', ''], ['공동 책임', ''], ['정확한 정보', ''], ['성별 고정관념 없음', '']] }, { type: 'short', prompt: '네 영역 가운데 가장 준비가 어려울 것 같은 영역과 그 까닭을 쓰세요.' }] },
        notes: '부모 됨은 선택이며 결혼·출산을 권하거나 전제하지 않는다. 학생 자신의 계획을 발표시키지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.route', type: 'wrap', title: '건강 상담 갈 곳',
        method: '건강 상담 갈 곳 지도', tool: 'map', minutes: 7,
        levels: { easy: '핀 둘(보건소·의료기관)만 함께 놓는다.', base: '핀 셋(상담 기관 포함)을 놓는다.', challenge: '익명·비용 정보를 활동지에 표시한다.' },
        wrap: {
          teacher: '“성인이 된 뒤 건강 상담은 어디서 받을까요? 가상 동네 지도에 핀을 놓아 봐요.” 카페에 핀을 놓는 학생에게 “그곳에서 검사나 상담을 받을 수 있을까요?”라고 묻는다. 상담 기관 번호는 학교가 확인한 것을 쓴다. 도전 반은 익명·비용 정보를 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '예방접종 기록을 확인하고 검사를 받을 수 있는 공공 기관에 핀을 놓으세요.', target: { place: '보건소' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '피임 상담과 진료를 받을 곳에 핀을 놓으세요.', target: { place: '의료기관' }, difficulty: 0.15 },
            { type: 'short', prompt: '마음과 관계 고민을 상담할 곳을 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성인기 성 건강 관리와 계획된 부모 됨',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '증상이 없어도 정기 ___가 도움이 될 수 있다.', answer: '검사' },
            { type: 'table', prompt: '건강 상담 갈 곳을 쓰세요.', columns: ['곳', '하는 일', '익명·비용 메모'], cells: [['보건소', '', ''], ['의료기관', '', ''], ['상담 기관', '', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 검사 · 보건소 · 상담', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '예방접종 기록은 ___에서 확인할 수 있다.', answer: '보건소' }] },
        },
      }),
      M({
        id: 'wrap.one-action', type: 'wrap', title: '이번 달 건강 행동 하나',
        method: '이번 달 건강 행동 하나', tool: 'timer', minutes: 7,
        levels: { easy: '건강 행동 점검 칸만 표시한다.', base: '표시하고, 할 날까지 남은 날을 기록판에 적는다.', challenge: '해냈는지 확인할 방법을 쓴다.' },
        wrap: {
          teacher: '“이번 달 내가 할 건강 행동 하나를 정해요. 예방접종 기록 확인처럼 작고 바로 할 수 있는 것이 좋아요.” 점검을 표시하고 날짜를 적게 한다. 무엇을 할지 모르겠다는 학생에게 “오늘 계획 보드에서 가장 쉬운 항목 하나는 무엇이었나요?”라고 묻는다. 건강 상태는 발표시키지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '이번 달 건강 행동' }, prompt: '이번 달 건강 행동을 정하며 스스로 점검하세요.', target: { selfCheck: ['이번 달 할 건강 행동 하나를 정했다', '할 날짜를 정했다', '도움받을 곳을 알고 있다'] }, difficulty: 0.1 },
            { type: 'tool', tool: 'timer', options: { title: '실천 기록', fields: [{ label: '실천까지 남은 날', unit: '일', step: 1 }] }, prompt: '실천할 날까지 남은 날을 기록판에 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '이번 달 건강 행동 하나와 해냈는지 확인할 방법을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '이번 달 건강 행동',
          items: [
            { type: 'short', prompt: '이번 달 건강 행동과 날짜를 쓰세요.' },
            { type: 'short', prompt: '해냈는지 확인할 방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 25. 폭력 없는 가족 의사소통과 대물림 끊기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-dv-family', [12]);
    const CV = [['저녁 메뉴로 다투다 서로 의견을 듣고 정한다', '방 청소 문제로 언성이 높아졌다가 잠시 쉬고 다시 이야기한다', '용돈 금액을 두고 가족 회의를 연다'], ['화가 나면 물건을 던지며 겁을 준다', '한 사람이 가족의 휴대폰을 뺏고 연락을 막는다', '“말 안 들으면 쫓아낸다”고 위협한다']];
    const CYC = [['지지를 받은 경우', 88], ['지지를 받지 못한 경우', 70]];
    const CYC_T = '어린 시절 가족 폭력을 목격한 사람 가운데 이후 관계에서 폭력을 쓰지 않은 비율(가상 연구 요약, %)';
    const IMSG = ['“잠깐 멈추자. 숨 좀 돌리고 이야기하자.”', '“어제 약속한 시간에 연락이 없었을 때”', '“나는 많이 걱정되고 불안했어.”', '“다음엔 늦으면 미리 문자해 줄래?”'];
    const TOWN = (names) => ({ title: '가상 학교와 동네', grid: [6, 4], names, places: [{ name: '상담실', icon: 'house', at: [0, 0], legend: '학교 상담실' }, { name: '교무실(학교전담경찰관 안내)', icon: 'police', at: [2, 0], legend: '학교전담경찰관 연결' }, { name: '지역 지원 기관', icon: 'office', at: [5, 2], legend: `지역 지원 기관 ${HELPNO}` }, { name: '도서관', icon: 'library', at: [1, 3] }, { name: '공원', icon: 'park', at: [4, 3] }] });

    MODS.push(
      M({
        id: 'intro.conflict-vs', type: 'intro', title: '갈등과 폭력 가르기',
        method: '갈등과 폭력 가르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '장면 넷을 함께 나눈다.', base: '장면 여섯을 ‘갈등(대화로 풂)’과 ‘폭력(통제·위협·해침)’에 나눈다.', challenge: '경계에 있는 장면 하나를 들어 어느 쪽인지 근거를 말한다.' },
        intro: {
          teacher: '“모든 가족에게 갈등은 있어요. 갈등과 폭력은 어떻게 다를까요? 가상 가족 장면을 나눠 볼까요?” 시연 단추로 장면이 두 바구니에 나뉘는 모습을 보여 준다. “언성 높이면 다 폭력 아니에요?”라는 말이 나오면 “잠시 쉬고 다시 이야기할 수 있는 다툼과, 한 사람이 늘 두려워하는 상황은 같을까요?”라고 되묻는다. 갈등은 대화로 풀 수 있지만, 통제·위협·해침은 폭력이라는 점을 짚는다.',
          student: '가상 가족 장면을 ‘갈등(대화로 풂)’과 ‘폭력(통제·위협·해침)’으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['갈등(대화로 풂)', '폭력(통제·위협·해침)'], cards: mix(CV) }, sequence: [{ sort: { '갈등(대화로 풂)': CV[0], '폭력(통제·위협·해침)': CV[1] } }] },
          art: { draw: 'two paper rooms side by side: one with paper family figures around a table with speech bubbles, the other with a cracked paper cup and a shadow looming, a paper divider between them', banner: '갈등과 폭력은 어떻게 다를까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이며 폭력을 자세히 묘사하지 않는다. 학생에게 자기 가족 이야기를 묻지 않는다. 이 시간은 가정폭력 예방교육(가정폭력방지법 제4조의3)으로 운영할 수 있다.',
      }),
      M({
        id: 'intro.cycle-data', type: 'intro', title: '대물림 고리 자료',
        method: '대물림 고리 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '고리를 끊는 요인(지지)을 고른다.', challenge: '“맞으며 자란 사람은 반드시 대물림한다”는 결정론을 자료로 반박한다.' },
        intro: {
          teacher: '“가상 연구 요약이에요. 어린 시절 가족 폭력을 본 사람 가운데, 지지를 받은 경우 88%, 받지 못한 경우에도 70%가 이후 관계에서 폭력을 쓰지 않았어요. 무엇이 고리를 끊을까요?” 시연 단추로 ‘곁의 지지와 도움’ 보기가 골라지는 모습을 보여 준다. “폭력을 보고 자라면 결국 똑같아지잖아요”라는 말이 나오면 “두 막대 모두 대부분이 폭력을 쓰지 않았어요. ‘반드시’라는 말이 맞을까요?”라고 되묻는다. 대물림은 정해진 운명이 아니고, 지지와 선택으로 끊을 수 있다는 점을 짚는다.',
          student: '어린 시절 가족 폭력을 목격한 사람들에 대한 가상 연구 요약 그래프를 읽고, 폭력의 고리를 끊는 요인을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: CYC_T, unit: '%', xLabel: '경우', yLabel: '비율', data: CYC, question: '폭력의 고리를 끊는 데 도움이 된 요인은?', choices: ['곁의 지지와 도움', '폭력을 본 경험 그 자체', '나이', '그래프가 가상이라는 점'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper chain with one link being opened by two paper hands, a small paper sprout growing from the opened link, a paper bar chart in the background', banner: '고리는 끊을 수 있다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '값은 수업용 가상 값이다(실제 연구 수치가 아니다). 폭력을 겪었거나 본 학생이 낙인을 느끼지 않게 ‘대물림은 운명이 아니다’를 먼저 말한다. 학생 경험을 묻지 않는다.',
      }),

      M({
        id: 'activity.i-message', type: 'activity', title: '나 전달법 대본',
        method: '나 전달법 대본 짜기', tool: 'timeline', minutes: 17,
        levels: { easy: '앞 세 단계(멈추기·상황·감정)만 차례로 놓는다.', base: '네 단계를 차례로 놓고, 비난 대사를 나 전달법으로 바꾸고, 나 전달법이 아닌 말을 걸러 낸다.', challenge: '함정 대사가 섞인 판에서 놓고, 상대의 반응 대사를 활동지에 더 쓴다.' },
        activity: {
          title: '나 전달법 대본', tool: 'timeline',
          teacher: '“가상 가족의 갈등이에요. 약속 시간에 연락이 없던 가족에게 화가 났어요. 나 전달법 — 멈추기, 상황, 내 감정, 바람 — 순서로 대사를 놓아 볼까요?” 카드를 놓을 때마다 “이 대사는 상대를 탓하나요, 내 마음을 말하나요?”라고 묻는다. ‘넌 맨날 그래’를 넣으려는 학생에게 “그 말을 들은 가족은 사과하고 싶을까요, 맞서고 싶을까요?”라고 되묻는다. 멈추고 나서 내 감정과 바람을 말하면 갈등이 폭력으로 번지지 않는다는 점을 짚는다.',
          task: '나 전달법 대사를 차례로 놓고, 비난 대사를 나 전달법으로 바꿔요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('나 전달법 대사를 차례로 놓으세요.', IMSG, { k: 3, traps: ['“넌 맨날 그래. 진짜 이기적이야.”'], d: 0.3, opt: { axis: ['처음', '끝'] } }),
            MATCHQ('비난 대사마다 나 전달법으로 바꾼 대사를 짝지으세요.', [['“넌 왜 맨날 늦어?”', '“늦으면 나는 걱정돼. 미리 알려 줄래?”'], ['“네 방은 쓰레기장이야.”', '“거실까지 물건이 나와 있으면 나는 답답해.”'], ['“내 말은 듣지도 않지?”', '“내 말이 끊기면 나는 서운해. 끝까지 들어 줄래?”']], { k: 2, extra: ['“됐어, 말하기 싫어.”'], d: 0.35, opt: { axis: ['처음', '끝'] } }),
            PICKQ('나 전달법이 아닌 말만 고르세요.', ['“너 때문에 다 망쳤어.”', '“또 시작이네.”'], ['“나는 그 말에 마음이 아팠어.”', '“잠깐 쉬었다가 이야기하자.”'], { d: 0.3, opt: { basket: '나 전달법이 아닌 말', axis: ['처음', '끝'] }, more: { conclude: '갈등이 커질 때는 먼저 멈추고, 상황과 내 감정과 바람을 말해요. 탓하는 말 대신 나 전달법이 갈등을 대화로 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '나 전달법 대사를 들은 가족(가상)의 반응 대사를 한 줄 쓰세요.' }] },
        notes: '갈등 장면은 가상이며 일상의 다툼(연락·청소)으로 한정한다. 폭력 상황에서는 대화보다 안전과 도움 요청이 먼저라는 점을 함께 말한다.',
      }),
      M({
        id: 'activity.family-meeting', type: 'activity', title: '가족 회의 운영 연습',
        method: '가족 회의 시간 운영 연습', tool: 'timer', minutes: 17,
        levels: { easy: '회의 순서 카드를 놓고, 각자 말하기 타이머를 맞춘다.', base: '회의 순서를 놓고, 각자 말하기 타이머를 맞추고, 역할극 뒤 순서 점검표를 표시한다.', challenge: '모두 마친 뒤, 합의에 실패했을 때 다음 회의 규칙을 활동지에 쓴다.' },
        activity: {
          title: '가족 회의 역할극', tool: 'timer',
          teacher: '“가상 가족의 가족 회의를 모둠 역할극으로 해 봐요. 안건 정하기 → 각자 말하기 → 대안 내기 → 합의하기 차례예요. 각자 말하기는 한 사람에 3분씩, 네 명이에요.” 순서를 놓고 타이머를 맞춘 뒤 역할극을 하게 한다. “가족 회의는 부모님이 정한 걸 알려 주는 자리 아니에요?”라는 학생에게 “모두가 말할 시간을 똑같이 갖는다면, 그건 통보일까요, 회의일까요?”라고 묻는다. 가족 회의는 모두가 말하고 함께 정하는 자리라는 점을 짚는다. 역할은 가상 가족 역할로만 맡는다.',
          task: '가족 회의 순서를 놓고, 시간을 맞추고, 역할극 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가족 회의의 순서 카드를 차례로 놓으세요.', toolOptions: { title: '가족 회의 순서', cards: ['합의하기', '대안 내기', '안건 정하기', '각자 말하기'] }, target: { order: ['안건 정하기', '각자 말하기', '대안 내기', '합의하기'] }, difficulty: 0.2 },
            { prompt: '‘각자 말하기’ 시간을 한 사람 3분씩, 쉬는 시간 없이 네 명이 말하도록 타이머를 맞추세요.', toolOptions: { title: '각자 말하기 타이머', timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 } }, target: { plan: { work: 3, rounds: 4 } }, difficulty: 0.25 },
            { prompt: '모둠 역할극(가상 가족)을 마친 뒤 회의 점검표를 표시하세요.', toolOptions: { title: '가족 회의 점검' }, target: { selfCheck: ['모두가 말할 시간을 가졌다', '말을 끊거나 깎아내리지 않았다', '대안을 둘 이상 냈다', '합의한 내용을 정리했다'] }, difficulty: 0.2, conclude: '가족 회의는 결정을 알리는 자리가 아니라, 모두가 말하고 대안을 내고 함께 정하는 자리예요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '합의에 실패했을 때 다음 회의에서 지킬 규칙 하나를 쓰세요.' }] },
        notes: '역할극은 가상 가족 역할로만 하며 실제 가족 이야기를 쓰지 않는다. 안건 예: 주말 집안일 나누기, 휴대폰 사용 시간.',
      }),
      M({
        id: 'activity.break-cycle', type: 'activity', title: '대물림을 끊는 성인의 책임',
        method: '대물림을 끊는 성인의 책임 성찰 글', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(인물의 선택 → 끊은 요인 → 내 가정의 원칙)을 보고 쓴다.', base: '가상 인물의 선택 분석 → 끊은 요인 → 예방교육 취지 → 내가 만들 가정의 원칙 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 주변인으로서 도울 방법 문단을 더한다.' },
        activity: {
          title: '가상 인물 지후의 선택', tool: 'rubric-writing',
          teacher: '“가상 인물 지후는 어린 시절 가족의 폭력을 보고 자랐어요. 고등학생 때 상담 선생님과 이야기하며 화가 날 때 멈추는 법을 배웠고, 성인이 되어 ‘우리 집은 소리 지르지 않고 회의로 정한다’는 원칙을 세웠어요. 지후는 어떻게 고리를 끊었을까요?” 지후의 선택을 분석한 뒤 내가 만들 가정의 원칙을 쓰게 한다. 자기 가족 이야기는 쓰지 않는다고 먼저 말한다. “그런 집에서 자라면 어쩔 수 없잖아요”라고 쓴 학생에게 “지후에게 무엇이 있었기에 다른 길을 갔을까요?”라고 묻는다.',
          task: '가상 인물이 폭력의 고리를 끊은 선택을 분석하고 내가 만들 가정의 원칙을 써요(자기 가족 이야기는 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('지후가 고리를 끊은 선택을 2~3문장으로 분석하세요.', '가상 인물 지후가 폭력의 고리를 끊기 위해 한 선택(상담·멈추기·원칙 세우기)을 분석하세요.', ['지후의 선택을 둘 이상 짚었다', '선택과 결과를 이었다', '낙인 없는 말을 썼다'], { min: 50, max: 350, sent: [2, 4], must: [['선택']], starter: '지후는 ~을 선택했다. 그 덕분에 ~', d: 0.35 }),
            RWQ('고리를 끊는 요인을 2문장으로 쓰세요.', '오늘 자료와 지후의 이야기를 근거로, 폭력의 고리를 끊는 요인을 쓰세요.', ['지지·도움을 요인으로 썼다', '대물림이 운명이 아니라고 밝혔다', '자료를 근거로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['지지', '도움']], plus: '“반드시 대물림한다”는 결정론을 반박했다', d: 0.4 }),
            RWQ('예방교육의 취지와 잇는 문단을 쓰세요.', '가정폭력방지법이 학교에 해마다 예방교육을 두게 한 취지를 고리 끊기와 이어 쓰세요.', ['예방교육의 취지를 썼다', '고리 끊기와 이었다', '도움 경로를 넣었다'], { min: 40, max: 300, sent: [2, 3], must: [['예방']], d: 0.4 }),
            RWQ('내가 만들 가정의 원칙 세 가지를 쓰세요.', '성인이 되어 내가 만들 가정(누구와 함께 살든)의 폭력 없는 원칙 세 가지를 쓰세요.', ['원칙이 세 가지다', '구체적인 행동이다', '갈등을 대화로 푸는 방법이 있다'], { min: 60, max: 350, sent: [3, 5], must: [['원칙']], plus: '주변인으로서 다른 가족을 도울 방법 문단을 더했다', d: 0.4, more: { conclude: '폭력의 대물림은 운명이 아니에요. 지지와 도움, 멈추는 연습, 폭력 없는 원칙을 세우는 성인의 선택이 고리를 끊어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 글을 기준표로 점검하세요.', columns: ['기준', '내 글에서 찾은 곳'], cells: [['예방교육 취지 연결', ''], ['구체 원칙', ''], ['도움 경로', HELPNO], ['낙인 없는 말', '']] }, { type: 'short', prompt: '내가 만들 가정의 원칙 가운데 가장 중요한 하나를 쓰세요.' }] },
        notes: '자기 가족 이야기를 쓰게 하지 않는다(계획 그대로). 가정폭력을 겪는 학생이 있을 수 있으므로 ‘대물림은 운명이 아니다’와 도움 경로를 거듭 말한다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.route', type: 'wrap', title: '도움 경로 확인',
        method: '도움 경로 확인', tool: 'map', minutes: 7,
        levels: { easy: '핀 둘(상담실·지역 지원 기관)만 함께 놓는다.', base: '핀 둘을 놓고, 학교전담경찰관 연결을 활동지에 쓴다.', challenge: '성인이 된 뒤 이용할 곳을 활동지에 쓴다.' },
        wrap: {
          teacher: '“가족 안의 폭력을 알게 되었을 때 도움 경로를 확인해요.” 핀을 놓게 한다. 공원에 핀을 놓는 학생에게 “그곳에서 안전을 함께 살필 어른이 있을까요?”라고 묻는다. 지역 지원 기관 번호는 학교가 확인한 것을 쓴다. 도전 반은 성인이 된 뒤 이용할 곳을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교 안에서 가족 고민을 먼저 이야기할 곳에 핀을 놓으세요.', target: { place: '상담실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN(true), prompt: '학교 밖에서, 성인이 된 뒤에도 도움을 청할 곳에 핀을 놓으세요.', target: { place: '지역 지원 기관' }, difficulty: 0.2 },
            { type: 'short', prompt: '친구가 가족 문제로 힘들다고 할 때의 연결 차례를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '폭력 없는 가족 의사소통과 대물림 끊기',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '폭력의 대물림은 운명이 아니며 ___와 도움으로 끊을 수 있다.', answer: '지지' },
            { type: 'table', prompt: '도움 경로를 쓰세요.', columns: ['곳', '메모'], cells: [['상담실', ''], ['학교전담경찰관', ''], ['지역 지원 기관', HELPNO]] },
          ],
          easy: { note: '낱말 상자: 지지 · 멈추기 · 회의', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '갈등이 커지면 먼저 ___를 한다.', answer: '멈추기' }] },
        },
      }),
      M({
        id: 'wrap.phrase', type: 'wrap', title: '오늘의 한 문장',
        method: '오늘의 한 문장', tool: 'emotion', minutes: 7,
        levels: { easy: '그 문장을 떠올릴 때의 마음 크기만 고른다.', base: '마음 카드를 고르고, 존중의 한 문장을 쓴다.', challenge: '그 문장을 두 상황에 적용해 쓴다.' },
        wrap: {
          teacher: '“가족(함께 사는 사람)에게 하고 싶은 존중의 한 문장을 떠올려 봐요. 공유는 하고 싶은 사람만 해요.” 마음 크기를 고르게 한 뒤 문장을 쓰게 한다. 쓰기 어려운 학생에게 “오늘 배운 나 전달법으로 시작해 볼까요? ‘나는 ~할 때 고마워’처럼요”라고 말한다. 가족 이야기를 발표시키지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '함께 사는 사람에게 존중의 말을 건네는 나', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt: '존중의 한 문장을 건넬 때 떠오르는 뿌듯함의 크기를 고르세요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'choice', prompt: '“가족 회의는 부모가 결정을 알리는 자리다”에 대한 바른 생각은?', options: ['맞다', '모두가 말하고 함께 정하는 자리다', '아이는 듣기만 한다'], answer: 1, difficulty: 0.15, explain: '가족 회의는 모두의 목소리가 있는 자리예요.' },
            { type: 'short', prompt: '함께 사는 사람에게 하고 싶은 존중의 한 문장을 쓰세요(공유는 선택).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '존중의 한 문장',
          items: [
            { type: 'short', prompt: '존중의 한 문장을 나 전달법으로 쓰세요.' },
            { type: 'short', prompt: '그 문장을 쓸 수 있는 상황 두 가지를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 26. 성평등 정책 쟁점 토론 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-policy-debate', [12]);
    const FO = [['이 기관의 올해 신규 위원 10명 가운데 여성은 3명이다', '목표제는 2018년에 처음 도입되었다(가상)', '위원 임기는 2년이다(가상)', '회의록은 누리집에 공개된다(가상)'], ['목표제는 정말 훌륭한 제도다', '이런 제도는 실력 있는 사람을 막는다', '누구나 이 제도에 찬성할 것이다', '목표제가 없으면 아무것도 바뀌지 않는다']];
    const WAGE = [['여성 평균 시급(가상)', 18000], ['남성 평균 시급(가상)', 22000]];
    const WAGE_T = '가상 지역 노동자 평균 시급(가상 자료, 원)';
    const WB = { type: 'bar', title: WAGE_T, unit: '원', xLabel: '성별', yLabel: '평균 시급', data: WAGE };
    const VAL = [{ id: 'fair', text: '공정한 기회' }, { id: 'ability', text: '능력에 따른 평가' }, { id: 'trust', text: '기관에 대한 신뢰' }, { id: 'win', text: '상대를 이기는 것', why: '토론의 목적은 이기는 것이 아니라 더 나은 판단이에요.' }, { id: 'mock', text: '상대 쪽을 깎아내리는 것', why: '존중하는 토론은 사람이 아니라 근거를 다뤄요.' }];
    const PRO = { text: '가상 공공기관 위원회 회의. 위원 가운데 한 성별이 30%를 넘지 않는다. ‘성별 균형 목표제(한 성별이 60%를 넘지 않게 하는 목표)’ 도입을 논의한다. 너는 찬성 쪽 위원 서경이다.', who: '서경(찬성)', motif: 'star', choices: [
      { id: 'data', text: '위원 구성 자료와 다른 기관 사례를 근거로 제안한다', result: '반대 위원이 “자료는 알겠다, 능력 평가는 어떻게 지키나”라고 묻는다.', impact: [{ who: '회의', text: '근거로 대화가 이어진다', tone: 1 }],
        next: { text: '반대 위원이 “능력보다 성별을 앞세우게 될까 걱정”이라고 한다.', who: '서경(찬성)', choices: [
          { id: 'both', text: '“능력 기준은 그대로 두고, 후보군을 넓히는 방식이면 어떨까요?”라고 묻는다', result: '양쪽이 공통으로 원하는 ‘공정한 기회’와 ‘능력 평가’를 확인한다.', impact: [{ who: '회의', text: '공통 가치를 찾는다', tone: 1 }], ending: '상대의 걱정을 근거로 다루면 공통 가치를 찾을 수 있다.' },
          { id: 'push', text: '“그건 핑계예요”라며 걱정을 무시한다', result: '회의가 날카로워지고 결론 없이 끝난다.', impact: [{ who: '회의', text: '대화가 끊긴다', tone: -1 }], ending: '상대의 걱정을 무시하면 좋은 제도도 신뢰를 얻기 어렵다.' }] } },
      { id: 'feel', text: '“당연히 해야죠”라며 근거 없이 주장한다', result: '반대 위원들이 “근거가 뭔가요?”라고 되묻는다.', impact: [{ who: '회의', text: '설득력이 떨어진다', tone: -1 }], ending: '근거 없는 주장은 같은 쪽 사람도 설득하기 어렵다.' }] };
    const CON = { text: '같은 회의. 너는 반대 쪽 위원 태오다. 목표제가 능력 평가를 흔들 수 있다고 걱정한다.', who: '태오(반대)', motif: 'star', choices: [
      { id: 'ask', text: '“능력 평가를 지킬 장치가 무엇인지”를 근거와 함께 묻는다', result: '찬성 위원이 후보군 넓히기와 평가 기준 공개를 제안한다.', impact: [{ who: '회의', text: '걱정이 구체적 질문이 된다', tone: 1 }],
        next: { text: '찬성 위원이 “평가 기준은 그대로 공개하겠다”고 한다.', who: '태오(반대)', choices: [
          { id: 'common', text: '“공정한 기회와 능력 평가는 우리 모두 원하는 거네요”라며 공통점을 정리한다', result: '양쪽이 남은 이견을 적고 다음 회의를 잡는다.', impact: [{ who: '회의', text: '존중하며 이어진다', tone: 1 }], ending: '반대 쪽도 공통 가치를 확인하며 이견을 남길 수 있다.' },
          { id: 'label', text: '“결국 특혜잖아요”라며 딱지를 붙인다', result: '찬성 위원이 맞서고 대화가 멈춘다.', impact: [{ who: '회의', text: '대화가 끊긴다', tone: -1 }], ending: '딱지 붙이기는 근거를 대신하지 못한다.' }] } },
      { id: 'mock', text: '“그런 제도 만드는 사람들은 현실을 몰라”라고 말한다', result: '찬성 위원이 불쾌해하며 대화가 멈춘다.', impact: [{ who: '회의', text: '존중이 무너진다', tone: -1 }], ending: '사람을 깎아내리는 말은 토론이 아니다.' }] };

    MODS.push(
      M({
        id: 'intro.fact-opinion', type: 'intro', title: '사실과 의견 가르기',
        method: '사실·의견 가르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '문장 여섯을 함께 나눈다.', base: '가상 정책 기사 문장 여덟을 사실·의견 칸에 나눈다.', challenge: '의견을 사실처럼 쓴 문장을 찾아 말한다.' },
        intro: {
          teacher: '“가상 정책 기사 문장 여덟 개예요. 확인할 수 있는 사실과, 쓴 사람의 판단인 의견으로 나눠 볼까요?” 시연 단추로 문장이 두 칸에 나뉘는 모습을 보여 준다. “‘아무것도 바뀌지 않는다’는 사실처럼 들리는데요?”라는 말이 나오면 “그 말을 확인할 자료가 있나요? 확인할 수 없다면 무엇일까요?”라고 되묻는다. 오늘 쟁점 토론에서는 어느 쪽이 옳은지 정하지 않고, 사실과 의견을 가르며 근거의 질을 따진다는 점을 밝힌다.',
          student: '가상 정책 기사 문장 여덟 개를 사실과 의견으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '의견'], cards: mix(FO) }, sequence: [{ sort: { 사실: FO[0], 의견: FO[1] } }] },
          art: { draw: 'a paper newspaper page split into two columns with sentence strips, a paper ruler measuring one column and a paper speech bubble over the other, a paper student sorting', banner: '사실일까, 의견일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '기사와 수치는 가상이다. 특정 정당·정치인·실제 정책 논쟁의 입장을 다루지 않는다(정치적 중립). 찬반 어느 쪽도 정답으로 두지 않는다.',
      }),
      M({
        id: 'intro.data-read', type: 'intro', title: '쟁점 자료 읽기',
        method: '쟁점 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 함께 읽기만 한다.', base: '자료가 말하는 것과 말하지 않는 것을 가른다.', challenge: '판단에 더 필요한 자료를 말한다.' },
        intro: {
          teacher: '“가상 지역의 성별 평균 시급이에요. 여성 18,000원, 남성 22,000원. 이 자료는 무엇을 말해 주고, 무엇을 말해 주지 않을까요?” 시연 단추로 ‘차이의 원인은 이 자료만으로 알 수 없다’ 보기가 골라지는 모습을 보여 준다. “차별 때문이 확실하네요” 또는 “능력 차이죠”라는 말이 나오면 “직종·근속·근무 시간 자료 없이 원인을 하나로 정할 수 있을까요?”라고 되묻는다. 자료가 말하는 것과 말하지 않는 것을 가르는 것이 존중하는 토론의 출발이라는 점을 짚는다.',
          student: '가상 지역의 성별 평균 시급 그래프를 읽고, 자료가 말해 주는 것과 말해 주지 않는 것을 생각해 보세요.',
          demo: { tool: 'chart', options: Object.assign({ mode: 'read', question: '이 자료만으로 말할 수 있는 것은?', choices: ['평균 시급에 차이가 있다', '차이의 원인은 차별 하나뿐이다', '차이의 원인은 능력 하나뿐이다', '차이는 없다'] }, WB), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with two bars of different heights, a paper magnifying glass revealing hidden question marks behind the bars, a paper notebook listing more data to check', banner: '자료는 무엇을 말할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 임금 격차의 원인을 하나로 단정하지 않게 한다(정답을 정하지 않는 쟁점).',
      }),

      M({
        id: 'activity.evidence-map', type: 'activity', title: '찬반 근거 지도',
        method: '찬반 근거 지도', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드가 주어지고, 찬성·반대 가지에 나눈다(바로 확인).', base: '근거를 찬반 가지에 나누고, 근거마다 사실·의견을 가르고, 가장 약한 근거를 고른다.', challenge: '헷갈리는 근거가 더해진 판에서 나누고, 가장 약한 근거의 까닭을 활동지에 쓴다.' },
        activity: {
          title: '목표제 근거 가지', tool: 'mindmap',
          teacher: '“가상 쟁점: ‘공공기관 위원회 성별 균형 목표제’. 오늘은 어느 쪽이 옳은지 정하지 않고, 양쪽 근거를 공정하게 지도에 그려요.” 근거를 가지에 나누고 사실·의견을 표시하게 한다. 한쪽 근거만 많이 붙이는 학생에게 “반대쪽에서 가장 강한 근거는 무엇일까요?”라고 묻는다. 근거는 확인할 수 있을수록 강하고, ‘다들 그렇게 생각한다’ 같은 말은 약한 근거라는 점을 짚는다.',
          task: '가상 쟁점의 찬반 근거를 가지에 나누고, 사실과 의견을 가르고, 근거의 질을 따져요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대 가지에 나누세요.', ['목표제 찬성', '목표제 신중론'], [['한 성별 위원이 30%도 안 되면 다양한 관점이 빠진다', '목표제를 둔 다른 기관에서 후보군이 넓어졌다는 사례가 있다(가상)'], ['목표 숫자를 맞추느라 평가가 흔들릴 수 있다', '후보가 적은 분야는 목표를 맞추기 어렵다']], { k: 1, hard: [['위원 구성이 다양하면 결정의 신뢰가 높아질 수 있다'], ['자율적인 후보군 넓히기로도 충분할 수 있다']], d: 0.3, opt: { topic: '성별 균형 목표제' } }),
            SORTQ('근거 카드를 사실과 의견으로 나누세요.', ['사실(확인할 수 있음)', '의견(판단)'], [['현재 위원 가운데 한 성별은 30%다(가상)', '후보가 적은 분야가 있다(가상 통계)'], ['목표제는 무조건 옳다', '목표제는 무조건 역차별이다']], { k: 1, d: 0.35, opt: { topic: '사실과 의견' } }),
            PICKQ('근거의 질이 가장 약한 카드를 고르세요.', ['내 주변 사람들은 다 그렇게 생각한다'], ['현재 위원 가운데 한 성별은 30%다(가상)', '다른 기관에서 후보군이 넓어졌다는 사례(가상)'], { d: 0.3, opt: { basket: '가장 약한 근거', topic: '근거의 질' }, more: { conclude: '쟁점 토론에서는 양쪽 근거를 공정하게 세우고, 사실과 의견을 가르며, 확인할 수 있는 근거를 더 무겁게 봐요. 어느 쪽이 정답인지는 정하지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 약한 근거 하나를 골라, 그것을 더 강한 근거로 바꾸려면 무엇이 필요한지 쓰세요.' }] },
        notes: '쟁점은 가상 기관의 제도이며 실제 정당·정치인·법안 이름을 쓰지 않는다. 찬반 어느 쪽도 정답으로 두지 않는다(사람이 확인).',
      }),
      M({
        id: 'activity.role-switch', type: 'activity', title: '입장 바꿔 따라가기',
        method: '입장 바꿔 따라가기', tool: 'dilemma', minutes: 17,
        levels: { easy: '찬성 쪽 인물의 갈림길 하나를 따라가고 공통 가치를 고른다.', base: '찬성 쪽·반대 쪽 인물로 차례로 갈림길을 따라가며 결과를 추적하고, 양쪽이 공통으로 원하는 가치를 고른다.', challenge: '두 쪽의 다른 끝도 모두 가 보고, 절충안을 활동지에 제안한다.' },
        activity: {
          title: '두 위원의 갈림길', tool: 'dilemma',
          teacher: '“가상 위원회 회의예요. 처음엔 찬성 쪽 서경으로, 다음엔 반대 쪽 태오로 회의를 이어 가요. 정답 길은 없어요. 어떤 말이 대화를 잇고, 어떤 말이 끊는지 따라가 봐요.” 장면마다 “이 말은 근거를 다루나요, 사람을 다루나요?”라고 묻는다. ‘상대를 이기는 것’ 카드를 고른 학생에게 “회의가 끝난 뒤 남는 것은 승패일까요, 더 나은 결정일까요?”라고 되묻는다. 입장이 달라도 공정한 기회·능력 평가·신뢰 같은 공통 가치를 찾을 수 있다는 점을 짚는다.',
          task: '찬성·반대 쪽 인물로 차례로 회의를 이어 가며, 대화를 잇는 말을 고르고 양쪽의 공통 가치를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '찬성 쪽 서경으로 회의를 이어 가며 끝까지 가 보고, 양쪽이 공통으로 원하는 가치를 고르세요.', toolOptions: { scene: PRO, reasons: VAL }, target: { reasons: ['fair', 'ability', 'trust'], some: true }, difficulty: 0.35,
              levels: { easy: { prompt: '찬성 쪽 서경으로 첫 갈림길을 고르고, 양쪽이 공통으로 원하는 가치를 고르세요.', toolOptions: { scene: cut(PRO, 1) } } } },
            { prompt: '반대 쪽 태오로 회의를 이어 가며 끝까지 가 보고, 양쪽이 공통으로 원하는 가치를 고르세요.', toolOptions: { scene: CON, reasons: VAL }, target: { reasons: ['fair', 'ability', 'trust'], some: true }, difficulty: 0.35,
              levels: { easy: { prompt: '반대 쪽 태오로 첫 갈림길을 고르고, 양쪽이 공통으로 원하는 가치를 고르세요.', toolOptions: { scene: cut(CON, 1) } } } },
            EXPLOREQ('서경의 회의에서 다른 끝도 가 보고, 대화를 잇는 말과 끊는 말을 견주세요.', PRO, VAL, ['다른 끝 장면을 확인했다', '대화를 잇는 말과 끊는 말의 차이를 견주었다'], { d: 0.35, more: { conclude: '쟁점 토론에 정답 길은 없지만, 근거를 다루고 상대의 걱정을 존중하면 공통 가치를 찾고 이견을 남긴 채 대화를 이어 갈 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '양쪽의 공통 가치를 살린 절충안 하나를 제안하세요.' }] },
        notes: '정답 길이 없는 열린 갈림길이다(공통 가치 카드만 채점). 실제 정책·정당을 연상시키는 이름을 쓰지 않는다. 학생이 배정된 입장은 개인 신념과 상관없다고 말해 준다.',
      }),
      M({
        id: 'activity.debate-speech', type: 'activity', title: '토론 발언문과 반박문',
        method: '토론 발언문과 반박문', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '틀(주장 → 근거 둘 → 반론 예상)을 보고 쓴다.', base: '배정된 입장의 발언문 → 반론 예상 → 존중하는 반박문 → 토론 뒤 점검 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 토론 뒤 입장 변화를 성찰한다.' },
        activity: {
          title: '배정된 입장으로 토론하기', tool: 'rubric-writing',
          teacher: '“모둠마다 가상 쟁점(성별 균형 목표제)의 찬성·신중론 가운데 한 입장을 배정받아요. 배정된 입장은 내 신념과 상관없어요. 근거의 질로 겨루는 연습이에요.” 발언문을 쓰고 토론한 뒤 점검하게 한다. 상대 쪽을 ‘현실을 모르는 사람들’이라고 쓴 학생에게 “그 문장은 근거를 반박하나요, 사람을 평가하나요?”라고 묻는다. 반박은 상대 근거의 사실 여부와 논리를 향하고, 사람을 향하지 않는다는 점을 짚는다.',
          task: '배정된 입장의 발언문과 반박문을 쓰고, 토론 뒤 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('배정된 입장의 주장과 근거 둘을 쓰세요.', '배정된 입장(찬성 또는 신중론)의 주장과, 사실에 바탕을 둔 근거 두 가지를 쓰세요.', ['주장을 첫 문장에 밝혔다', '근거가 두 가지다', '사실과 의견을 구분했다'], { min: 60, max: 400, sent: [3, 5], must: [['왜냐하면', '때문', '근거']], starter: '우리는 ~라고 주장한다. 첫째, ~. 둘째, ~', d: 0.4 }),
            RWQ('예상되는 반론을 2문장으로 쓰세요.', '상대 쪽이 할 가장 강한 반론을 공정하게 쓰세요.', ['상대의 가장 강한 근거를 골랐다', '왜곡하지 않고 옮겼다', '존중하는 말투다'], { min: 40, max: 300, sent: [2, 3], must: [['반론', '상대']], d: 0.4 }),
            RWQ('반론에 대한 반박문을 쓰세요.', '예상 반론에 대해 근거의 사실 여부와 논리를 따지는 반박문을 쓰세요.', ['근거를 향해 반박했다', '사람을 깎아내리지 않았다', '반박이 정확하다'], { min: 50, max: 350, sent: [2, 4], must: [['하지만', '그러나', '반면']], d: 0.4 }),
            RWQ('토론 뒤 내 발언을 점검하세요.', '토론을 마친 뒤 내 발언의 잘한 점과 고칠 점을 쓰세요.', ['잘한 점을 썼다', '고칠 점을 썼다', '상대에게서 배운 점을 썼다'], { min: 40, max: 300, sent: [2, 4], must: [['토론']], plus: '토론 뒤 내 생각이 바뀌었는지와 그 까닭을 썼다', d: 0.4, more: { conclude: '존중하는 토론은 근거의 질로 겨루고, 사실과 의견을 가르며, 사람이 아니라 근거를 반박해요. 목적은 이기는 것이 아니라 더 나은 판단이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 발언을 기준표로 점검하세요.', columns: ['기준', '내 발언에서 찾은 곳'], cells: [['근거 질', ''], ['사실·의견 구분', ''], ['상대 존중', ''], ['반박의 정확성', '']] }, { type: 'short', prompt: '상대 쪽 근거 가운데 가장 설득력 있었던 것을 쓰세요.' }] },
        notes: '입장은 모둠에 배정하며 개인 신념과 상관없다. 교사도 어느 쪽이 옳은지 말하지 않는다(정치적 중립 — 사람이 확인). 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.common', type: 'wrap', title: '공통 가치 한 줄',
        method: '공통 가치 한 줄', tool: 'wordcards', minutes: 7,
        levels: { easy: '공통 가치 카드를 고르기만 한다.', base: '고르고, 한 줄로 쓴다.', challenge: '아직 이견이 남은 점을 쓴다.' },
        wrap: {
          teacher: '“오늘 토론에서 양쪽이 함께 원한 가치는 무엇이었나요?” 카드를 고르게 한다. ‘이기기’를 고른 학생에게 “양쪽이 모두 이기기를 원했다면, 그건 공통 가치일까요, 대결일까요?”라고 되묻는다. 도전 반은 이견이 남은 점을 존중하는 말로 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '양쪽의 공통 가치', cards: [{ id: 'fair', text: '공정한 기회' }, { id: 'ability', text: '능력에 따른 평가' }, { id: 'trust', text: '기관에 대한 신뢰' }, { id: 'win', text: '이기기' }, { id: 'loud', text: '목소리 크기' }] }, prompt: '토론에서 양쪽이 공통으로 원한 가치를 고르세요.', target: { pick: ['fair', 'ability', 'trust'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '“내 경험이 곧 근거다”에 대한 바른 생각은?', options: ['맞다, 경험이 가장 강한 근거다', '경험은 참고가 되지만 확인할 수 있는 자료와 함께 따진다', '경험은 아무 쓸모가 없다'], answer: 1, difficulty: 0.2, explain: '경험은 출발점이고, 확인할 수 있는 자료로 넓혀요.' },
            { type: 'short', prompt: '양쪽의 공통 가치를 한 줄로 쓰고, 이견이 남은 점이 있다면 함께 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성평등 정책 쟁점 토론',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '확인할 수 있는 것은 사실, 쓴 사람의 판단은 ___이다.', answer: '의견' },
            { type: 'short', prompt: '오늘 토론의 공통 가치를 한 줄로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 의견 · 근거 · 존중', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '토론에서는 사람이 아니라 ___를 반박한다.', answer: '근거' }] },
        },
      }),
      M({
        id: 'wrap.self-scale', type: 'wrap', title: '존중한 토론 자기 점검',
        method: '존중한 토론 자기 점검', tool: 'emotion', minutes: 7,
        levels: { easy: '토론 중 내 태도 크기만 고른다.', base: '고르고, 그 까닭을 쓴다.', challenge: '다음 토론의 다짐을 쓴다.' },
        wrap: {
          teacher: '“토론 중 나는 얼마나 상대를 존중했을까요? 스스로 돌아봐요. 점수는 발표하지 않아요.” 척도를 고르게 한 뒤 까닭을 쓰게 한다. 낮게 고른 학생에게 “돌아보는 것 자체가 다음 토론을 바꾸는 시작이에요. 무엇을 바꿔 볼까요?”라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 토론에서 상대의 말을 끝까지 듣고 존중한 정도', feeling: '존중', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt: '오늘 토론에서 내가 상대를 존중한 정도를 고르세요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '존중하는 토론의 태도', cards: [{ id: 'listen', text: '끝까지 듣기' }, { id: 'evidence', text: '근거로 말하기' }, { id: 'admit', text: '좋은 근거 인정하기' }, { id: 'cut', text: '말 끊기' }, { id: 'label', text: '딱지 붙이기' }] }, prompt: '존중하는 토론의 태도만 고르세요.', target: { pick: ['listen', 'evidence', 'admit'] }, difficulty: 0.15 },
            { type: 'short', prompt: '다음 토론에서 지킬 다짐 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '존중한 토론',
          items: [
            { type: 'short', prompt: '오늘 토론에서 내가 잘한 태도 하나를 쓰세요.' },
            { type: 'short', prompt: '다음 토론에서 바꿀 태도 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 27. 다양한 가족 존중과 졸업 뒤 성평등 실천 계획 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-after-school', [12]);
    const FAM = [{ id: 'f1', text: '한부모 가족: 엄마와 두 아이가 저녁마다 하루를 나눈다', motif: 'house' }, { id: 'f2', text: '조부모 가족: 할머니와 손자가 주말마다 텃밭을 가꾼다', motif: 'sun' }, { id: 'f3', text: '재혼 가족: 새로 만난 형제가 서로의 취미를 배운다', motif: 'star' }, { id: 'f4', text: '1인 가구: 혼자 살며 친구·이웃과 돌봄을 주고받는다', motif: 'house' }, { id: 'f5', text: '입양 가족: 부모와 아이가 서로를 가족으로 선택했다', motif: 'sun' }];
    const MEM = [['동의와 자기결정권', 30], ['디지털 성범죄', 25], ['관계 폭력', 15], ['성 건강', 12], ['일·가정 양립', 10], ['정책 토론', 8]];
    const MEM_T = '졸업 뒤 가장 쓸모 있을 주제(가상 학급 응답, %)';
    const LIFE = (names) => ({ title: '졸업 뒤 생활 지도(가상)', grid: [6, 4], names, places: [{ name: '대학 인권센터', icon: 'school', at: [0, 0], legend: '대학 성희롱·성폭력 고충 창구' }, { name: '직장 고충 창구', icon: 'office', at: [3, 0], legend: '회사 고충 담당' }, { name: '지원 기관', icon: 'house', at: [5, 1], legend: `지원 기관 ${HELPNO}` }, { name: '보건소', icon: 'hospital', at: [1, 3], legend: '보건소(예방접종·검사)' }, { name: '노동 상담 창구', icon: 'office', at: [4, 3], legend: '노동 상담 창구(채용 차별 등)' }, { name: '카페', icon: 'market', at: [2, 2] }] });

    MODS.push(
      M({
        id: 'intro.family-cards', type: 'intro', title: '여러 가족의 모습',
        method: '여러 가족 모습 카드', tool: 'story', minutes: 7,
        levels: { easy: '가족 카드 셋을 함께 읽고 공통점을 고른다.', base: '가족 카드 다섯을 읽고 공통점 카드를 고른다.', challenge: '여러 가족을 향한 편견의 말 하나를 찾아 말한다.' },
        intro: {
          teacher: '“가상 가족 다섯을 소개할게요 — 한부모, 조부모, 재혼, 1인 가구, 입양 가족. 모습은 달라도 공통점이 있을까요?” 시연 단추로 ‘서로 돌보고 아끼는 관계’ 카드가 공통점 칸에 들어가는 모습을 보여 준다. “그래도 정상 가족은 엄마·아빠·아이죠”라는 말이 나오면 “할머니와 손자가 서로 돌보는 집은 ‘정상’이 아닐까요? 가족을 가족으로 만드는 것은 무엇일까요?”라고 되묻는다. 가족은 하나의 모습이 아니고, 서로 돌보는 관계라는 점을 짚는다.',
          student: '여러 가상 가족의 소개 카드를 읽고, 모습은 달라도 모두에게 있는 공통점을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', label: '다섯 가족의 공통점: ___' }], cards: [{ id: 'care', text: '서로 돌보고 아끼는 관계다' }, { id: 'same', text: '구성원 수가 같다' }, { id: 'blood', text: '모두 혈연으로만 이어졌다' }] }, sequence: [{ fill: { f1: 'care' } }] },
          art: { draw: 'five small paper houses in a row, each with different paper figures inside (a parent with two kids, a grandmother with a grandson, a blended family, a single person with a plant and neighbors, a family holding hands), a ribbon of hearts linking the roofs', banner: '가족은 여러 모습이다', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: `가족 카드(가상): ${FAM.map((f) => f.text).join(' / ')}. 학생 자기 가족의 형태를 묻거나 밝히게 하지 않는다.`,
      }),
      M({
        id: 'intro.three-years', type: 'intro', title: '세 해 배움 돌아보기',
        method: '세 해 배움 돌아보기 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가상 학급 그래프에서 세 주제만 함께 읽는다.', base: '여섯 주제를 읽고 가장 많이 고른 주제를 찾는다.', challenge: '내게 가장 쓸모 있을 주제와 그 까닭을 말한다.' },
        intro: {
          teacher: '“고1부터 고3까지 양성평등·성교육에서 여러 주제를 배웠어요. 가상 학급은 졸업 뒤 가장 쓸모 있을 주제로 ‘동의와 자기결정권’을 가장 많이 골랐어요. 나는 어떤 주제를 고를까요?” 시연 단추로 가장 큰 칸이 골라지는 모습을 보여 준다. 정답이 없다고 말해 주고, 오늘 실천 계획에 그 주제를 담아 보자고 한다.',
          student: '세 해 동안 배운 주제 가운데 졸업 뒤 가장 쓸모 있을 주제를 고른 가상 학급 그래프를 읽고, 나는 어떤 주제를 고를지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: MEM_T, unit: '%', data: MEM, question: '가상 학급이 가장 많이 고른 주제는?', choices: MEM.map((m) => m[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper band graph stretched like a ribbon across three paper school years, small icons along it (a handshake, a phone shield, a heart, a calendar), a paper graduate cap at the end', banner: '세 해 동안 무엇을 배웠을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '자료는 수업용 가상 값이다(계획의 ‘스스로 표시’는 교구가 개인 값을 채점하지 못해 가상 학급 자료 읽기로 바꾸고, 내 주제는 말과 활동지로 다룬다).',
      }),

      M({
        id: 'activity.word-change', type: 'activity', title: '편견의 말 바꾸기',
        method: '편견의 말 바꾸기', tool: 'wordcards', minutes: 17,
        levels: { easy: '편견의 말 셋을 존중의 말로 바꾼다.', base: '편견의 말 다섯을 바꾸고, 존중의 말을 가르고, 말이 바뀌면 달라지는 것을 고른다.', challenge: '모두 마친 뒤 바꾼 까닭을 활동지에 쓴다.' },
        activity: {
          title: '말 바꾸기 사전', tool: 'wordcards',
          teacher: '“‘결손 가정’, ‘정상 가족’ 같은 말은 어떤 가족을 모자란 것처럼 만들어요. 존중의 말로 바꿔 볼까요?” 빈칸에 카드를 넣게 한다. “그냥 설명하는 말인데요?”라는 학생에게 “‘결손’은 무언가 빠졌다는 뜻이에요. 그 말을 들은 한부모 가족의 아이는 어떤 마음일까요?”라고 되묻는다. 말이 바뀌면 그 가족을 보는 눈과 제도도 바뀔 수 있다는 점을 짚는다.',
          task: '여러 가족을 향한 편견의 말을 존중의 말로 바꾸고, 말이 바뀌면 달라지는 것을 찾아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            FILLQ('편견의 말을 존중의 말로 바꾸는 빈칸을 채우세요.', [['w1', '“결손 가정” → ___', '한부모 가족'], ['w2', '“정상 가족” → ___', '여러 형태의 가족'], ['w3', '“편부모” → ___', '한부모'], ['w4', '“독거노인” → ___', '혼자 사는 어르신'], ['w5', '“입양아” → ___', '입양 가족의 아이']], { k: 3, extra: ['문제 가정', '불완전한 가족'], d: 0.3 }),
            PICKQ('존중의 말만 고르세요.', ['다양한 가족', '조부모 가족', '재혼 가족'], ['결손 가정', '편부모'], { d: 0.3, opt: { basket: '존중의 말' } }),
            PICKQ('말이 바뀌면 달라질 수 있는 것만 고르세요.', ['그 가족을 보는 사람들의 눈', '아이가 학교에서 느끼는 마음', '제도와 서류의 표현'], ['가족 구성원의 수', '가족의 주소'], { d: 0.35, opt: { basket: '말이 바꾸는 것' }, more: { conclude: '가족은 여러 모습이에요. 편견의 말을 존중의 말로 바꾸면 그 가족을 보는 눈과 제도, 아이의 마음이 함께 달라져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 말 바꾸기 사전을 만들고 바꾼 까닭을 쓰세요.', columns: ['편견의 말', '존중의 말', '바꾼 까닭'], cells: [['결손 가정', '', ''], ['정상 가족', '', '']] }] },
        notes: '바꾼 말은 일반적으로 권장되는 표현이며 사람 확인 목록에서 대조한다. 학생 자기 가족 형태를 밝히게 하지 않는다.',
      }),
      M({
        id: 'activity.life-map', type: 'activity', title: '졸업 뒤 도움 경로 지도',
        method: '졸업 뒤 도움 경로 지도', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 이름이 바로 읽힌다(핀 셋).', base: '장소 이름 없이 범례를 보고 상황 다섯마다 찾아갈 곳에 핀을 놓는다.', challenge: '장소 이름 없이 핀을 놓고, 이사·이직 뒤 새 곳을 찾는 방법을 활동지에 쓴다.' },
        activity: {
          title: '대학·직장·동네의 도움 경로', tool: 'map',
          teacher: '“졸업하면 학교 상담실을 떠나요. 대학·직장·동네에서는 어디에 도움을 청할까요? 가상 생활 지도에서 찾아봐요.” 상황마다 “이 일은 어디가 맡을까요?”라고 묻는다. 카페에 핀을 놓는 학생에게 “그곳에서 이 일을 맡아 줄 사람이 있을까요?”라고 되묻는다. 졸업 뒤에도 도움 경로는 있고, 이사·이직을 하면 그곳의 창구를 다시 찾는 것이 성인의 습관이라는 점을 짚는다. 번호는 학교가 확인한 것을 쓴다.',
          task: '졸업 뒤 상황마다 도움을 청할 곳에 핀을 놓아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '대학에서 동아리 선배의 성희롱을 겪은 친구와 함께 찾아갈 곳에 핀을 놓으세요.', toolOptions: LIFE(true), target: { place: '대학 인권센터' }, difficulty: 0.2 },
            { prompt: '회사에서 상사의 성적인 말이 되풀이될 때 먼저 알릴 곳에 핀을 놓으세요.', toolOptions: LIFE(true), target: { place: '직장 고충 창구' }, difficulty: 0.25 },
            { prompt: '채용 면접에서 결혼 계획을 이유로 탈락한 것 같을 때 상담할 곳에 핀을 놓으세요.', toolOptions: LIFE(true), target: { place: '노동 상담 창구' }, difficulty: 0.3 },
            { prompt: '예방접종 기록을 확인하고 검사를 받을 곳에 핀을 놓으세요.', toolOptions: LIFE(true), target: { place: '보건소' }, difficulty: 0.25 },
            { prompt: '관계 폭력이나 성폭력 피해 상담을 이어 갈 곳에 핀을 놓으세요.', toolOptions: LIFE(true), target: { place: '지원 기관' }, difficulty: 0.3, conclude: '졸업 뒤에도 대학 인권센터·직장 고충 창구·노동 상담 창구·보건소·지원 기관이 있어요. 새 곳으로 옮기면 그곳의 창구를 다시 찾아 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이사하거나 직장을 옮긴 뒤 새 곳의 도움 창구를 찾는 방법을 쓰세요.' }] },
        notes: '지도는 가상이다. 대학 인권센터·노동 상담 창구·지원 기관의 실제 이름·번호는 학교가 확인해 안내한다.',
      }),
      M({
        id: 'activity.action-plan', type: 'activity', title: '졸업 뒤 성평등 실천 계획서',
        method: '졸업 뒤 성평등 실천 계획서', tool: 'rubric-writing', minutes: 34,
        levels: { easy: '두 영역(관계·일터)만 틀을 보고 쓴다.', base: '관계 → 일터 → 가정(함께 사는 곳) → 시민 네 영역을 차례로 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 1년 뒤 점검 방법을 쓴다.' },
        activity: {
          title: '네 영역 실천 계획', tool: 'rubric-writing',
          teacher: '“세 해의 배움을 묶어 졸업 뒤 성평등 실천 계획을 써요. 관계, 일터, 함께 사는 곳, 시민 네 영역이에요.” 영역마다 구체적인 행동·시기·도움 경로를 쓰게 한다. “성평등을 실천하겠다”처럼 막연하게 쓴 학생에게 “다음 달, 어디서, 무엇을 하는 모습일까요?”라고 묻는다. “학교를 떠나면 성평등은 남의 일 아닌가요?”라는 말이 나오면 “대학·직장·함께 사는 곳에서 오늘 배운 일이 다시 생기지 않을까요?”라고 되묻는다.',
          task: '관계·일터·가정·시민 네 영역의 졸업 뒤 성평등 실천 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('관계 영역의 실천 계획을 2문장으로 쓰세요.', '졸업 뒤 친구·연인·동료 관계에서 실천할 행동(동의·존중)을 시기와 함께 쓰세요.', ['행동이 구체적이다', '시기를 썼다', '존중하는 말이다'], { min: 40, max: 300, sent: [2, 3], must: [['동의', '존중']], starter: '관계에서 나는 ~할 때 ~하겠다.', d: 0.35 }),
            RWQ('일터 영역의 실천 계획을 2문장으로 쓰세요.', '대학·일터에서 실천할 행동(성희롱에 대응·동료 지지)과 도움 경로를 쓰세요.', ['행동이 구체적이다', '도움 경로를 썼다', '동료를 지지하는 행동이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['창구', '센터', '상담']], d: 0.4 }),
            RWQ('함께 사는 곳(가정) 영역의 실천 계획을 2문장으로 쓰세요.', '함께 사는 곳에서 실천할 돌봄 분담과 대등한 결정을 쓰세요.', ['돌봄 분담이 구체적이다', '대등한 결정을 담았다', '성별 고정관념이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['분담', '함께']], d: 0.4 }),
            RWQ('시민 영역의 실천 계획을 2문장으로 쓰세요.', '사회의 시민으로서 실천할 행동(퍼뜨리지 않기·알리기·사지 않기·편견의 말 바꾸기)을 쓰세요.', ['행동이 구체적이다', '시기를 썼다', '다른 사람을 지지한다'], { min: 40, max: 300, sent: [2, 3], must: [['시민', '알리', '퍼뜨리', '바꾸']], plus: '1년 뒤 이 계획을 점검할 방법을 썼다', d: 0.4, more: { conclude: '성평등은 학교를 떠나도 이어지는 일이에요. 관계·일터·함께 사는 곳·시민 네 영역에서 구체적인 행동과 도움 경로를 가지고 실천해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 계획서를 기준표로 점검하세요.', columns: ['기준', '내 계획서에서 찾은 곳'], cells: [['구체 행동', ''], ['시기', ''], ['도움 경로', HELPNO], ['존중', '']] }, { type: 'short', prompt: '네 영역 가운데 졸업하자마자 가장 먼저 실천할 것 하나를 쓰세요.' }] },
        notes: '계획서는 개인 성찰용이며 연애·가족 사정을 쓰게 하지 않는다. 이 활동 하나로 전개 시간 전체(34분)를 쓴다.',
      }),

      M({
        id: 'wrap.pledge', type: 'wrap', title: '나에게 보내는 메시지 카드',
        method: '나에게 보내는 메시지 카드', tool: 'collage', minutes: 7,
        levels: { easy: '카드 틀만 꾸미고, 메시지는 보기 셋 가운데 고른다.', base: '카드 틀과 장식을 꾸미고, 메시지를 직접 쓴다.', challenge: '친구에게 보내는 메시지도 한 줄 더 쓴다.' },
        wrap: {
          teacher: '“졸업 뒤의 나에게 보내는 메시지 카드를 꾸며요. 판에는 카드 틀과 장식을, 메시지는 활동지에 써요.” 조각을 붙인 뒤 점검 칸을 표시하게 한다. 쓰기 어려운 학생에게 “세 해 동안 배운 것 가운데 1년 뒤의 나에게 꼭 남기고 싶은 한 문장은 무엇일까요?”라고 묻는다. 쉬움 반 메시지 보기: “묻고 듣고 존중해 / 보지 않고 퍼뜨리지 않고 알려 / 혼자 두지 마, 도움은 있어”.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'heart', 'star', 'circle', 'leaf'], colors: ['분홍', '노랑', '파랑', '초록', '하양', '보라'], maxPieces: 12 }, prompt: '나에게 보내는 메시지 카드의 틀과 장식 조각을 붙이고 점검하세요.', target: { selfCheck: ['카드 틀을 만들었다', '메시지를 쓸 자리를 남겼다', '나만의 장식을 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '“학교를 떠나면 성평등은 남의 일이다”에 대한 바른 생각은?', options: ['맞다', '대학·일터·함께 사는 곳에서도 이어지는 일이다', '어른이 되면 저절로 이루어진다'], answer: 1, difficulty: 0.15, explain: '성평등은 삶의 모든 자리에서 이어지는 실천이에요.' },
            { type: 'short', prompt: '졸업 뒤의 나에게 보내는 메시지를 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나에게 보내는 메시지',
          items: [
            { type: 'short', prompt: '졸업 뒤의 나에게 보내는 메시지를 쓰세요.' },
            { type: 'short', prompt: '친구에게 보내는 메시지 한 줄을 쓰세요(선택).' },
          ],
        },
        notes: '조각 판에는 글자를 쓸 수 없어 메시지는 활동지에 쓴다.',
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '실천 계획 점검표',
        method: '실천 계획 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 셋만 표시한다.', base: '항목 넷을 표시한다.', challenge: '항목마다 실천 날짜를 활동지에 쓴다.' },
        wrap: {
          teacher: '“내 실천 계획서를 점검표로 옮겨 확인해요. 네 영역이 모두 들어 있나요?” 스스로 점검하게 한다. 빠진 영역이 있는 학생에게 “그 영역에서 할 수 있는 가장 작은 행동은 무엇일까요?”라고 묻는다. 도전 반은 항목마다 날짜를 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '실천 계획 점검', items: [{ id: 'rel', text: '관계 영역에 동의·존중 행동이 있다' }, { id: 'work', text: '일터 영역에 도움 경로가 있다' }, { id: 'home', text: '함께 사는 곳의 돌봄 분담이 있다' }, { id: 'citizen', text: '시민으로서 할 행동이 있다' }] }, prompt: '내 실천 계획서에 들어 있는 항목을 스스로 점검하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '“정상 가족은 하나의 모습이다”에 대한 바른 생각은?', options: ['맞다', '가족은 여러 모습이고, 서로 돌보는 관계다', '혈연만 가족이다'], answer: 1, difficulty: 0.15, explain: '가족은 여러 모습이에요.' },
            { type: 'short', prompt: '졸업하자마자 가장 먼저 실천할 항목과 날짜를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다양한 가족 존중과 졸업 뒤 성평등 실천 계획',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘결손 가정’ 대신 ___ 가족이라고 말한다.', answer: '한부모' },
            { type: 'table', prompt: '실천 항목과 날짜를 쓰세요.', columns: ['영역', '실천 항목', '날짜'], cells: [['관계', '', ''], ['일터', '', ''], ['함께 사는 곳', '', ''], ['시민', '', '']] },
          ],
          easy: { note: '낱말 상자: 한부모 · 다양한 · 존중', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '‘정상 가족’ 대신 ___ 가족이라고 말한다.', answer: '다양한' }] },
        },
      }),
    );
  }


  PaperLessons.registerModules(MODS);
})();
