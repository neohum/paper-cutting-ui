/* 창체 계기교육 기념일 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 days 중.
 * 근거: research-days.md §1 총괄표·§3 학교급별 제안 + 기존 중학교 기념일 단원(lessons/units/g7·g8·g9-cc-days.js)의 사실 서술.
 *   날짜는 「국경일에 관한 법률」·「각종 기념일 등에 관한 규정」 기준. 7학년은 사건의 흐름, 8학년은 원인과 결과, 9학년은 기록 읽기(추천 조합 기준).
 * 정치적 중립: 정당·현직 정치인·현 정부 정책을 다루지 않고, 사건을 오늘의 정치 논쟁과 잇지 않는다. 해석이 갈리는 곳은 '여러 관점'으로 근거를 따지게 하고 정답을 정하지 않는다.
 *   다른 나라·민족을 미워하게 하는 말을 쓰지 않고, 희생은 폭력 묘사 없이 추모·의미 중심으로 다룬다. 학생의 가족사·개인 견해를 묻거나 채점하지 않는다.
 * 인물: 실존 인물은 공식 자료의 사실만 쓰고 대사·감정을 지어 붙이지 않는다. 갈림길·장면의 학생은 '가상 인물'(가명 한두 글자)이다. 투표·조사 그래프 수치는 모두 '가상'이다.
 * 주제 12개 × 11모듈 = 132모듈.
 *
 * 사람 확인: (발행 전 사람이 공식 자료로 확인할 사실·문구 — 모듈 id 와 확인처)
 *   - days.m.march1.* — 3·1절이 「국경일에 관한 법률」의 국경일이고 1919.3.1 독립 선언·만세 운동을 기념한다는 서술: 행정안전부 국경일 안내·국가법령정보센터
 *   - days.m.march1.activity.line — 고종 승하 1919.1, 2·8 독립 선언 1919.2, 대한민국 임시정부 수립 1919.4(4.11 기념일), 국권 피탈 1910: 국사편찬위원회 우리역사넷·국가보훈부
 *   - days.m.march1.activity.spread — 3월 1일 평양 등 여러 도시 동시 만세, 4월 1일 천안 아우내 장터 만세, 간도 용정 동포 만세(칸 지도 자리는 실제 위치가 아닌 대략): 국사편찬위원회 우리역사넷·독립기념관
 *   - days.m.march1.activity.cause·wrap.chain — 원인(무단 통치·토지 조사 사업·민족 자결주의·고종 승하·2·8 선언)·결과(임시정부 수립·이른바 문화 통치) 서술: 중학교 역사 교과서·국사편찬위원회 우리역사넷
 *   - days.m.march1.intro.quote·activity.read·wrap.spirit — 선언서 원문 구절("오등은 자에 아 조선의 독립국임과…", 공약 3장 "일체의 행동은 가장 질서를 존중하여", "최후의 일인까지 최후의 일각까지")과 현대어 풀이: 독립기념관·국가기록원 기미독립선언서 자료
 *   - days.m.april19.* — 4·19혁명 기념일(4.19)이 「각종 기념일 등에 관한 규정」의 국가보훈부 주관 법정기념일이라는 서술: 국가법령정보센터·국가보훈부
 *   - days.m.april19.activity.line — 대구 2·28 시위(1960.2.28), 3·15 부정 선거, 마산 김주열 학생 소식(4월 초), 교수단 시국 선언(4.25), 대통령 하야 발표(4.26)의 날짜·차례: 국사편찬위원회 우리역사넷·국가보훈부·3·15의거기념사업회
 *   - days.m.april19.activity.line — 2·28민주운동 기념일(2.28)·3·15의거 기념일(3.15)이 국가 기념일이라는 서술: 국가법령정보센터 「각종 기념일 등에 관한 규정」 별표
 *   - days.m.april19.activity.remember·wrap.link·wrap.quiz — 헌법 전문 문구 "불의에 항거한 4·19민주이념을 계승하고": 국가법령정보센터 대한민국헌법
 *   - days.m.april19.activity.chain — 결과(대통령 하야·내각 책임제 개헌)와 원인(장기 집권·3·15 부정 선거) 서술: 중학교 역사 교과서·국사편찬위원회 우리역사넷
 *   - days.m.april19.activity.fair·activity.chain — 3·15 부정 선거의 모습(미리 넣어 둔 표, 여럿이 함께 하는 공개 투표)과 어긴 원칙 연결: 국사편찬위원회 우리역사넷·중앙선거관리위원회 선거 4원칙 안내(그래프 수치는 가상)
 *   - days.m.april19.activity.record — 4·19혁명 기록물의 유네스코 세계기록유산 등재(2023)와 기록 종류(선언문·일기·신문·사진·재판 기록): 국가유산청·국가보훈부·국가기록원
 *   - days.m.april19.intro.voice — 일기 두 줄은 수업용 가상 글(실제 기록으로 소개하지 않음). 실제 기록을 쓸 때 교사가 고를 출처: 국가보훈부·4·19혁명 기록물 공개 자료
 *   - days.m.science.intro.q·wrap.exit — 과학의 날 4.21이 1967.4.21 과학기술처 출범을 기념한 법정기념일(공휴일 아님)이라는 서술: 국가법령정보센터 「각종 기념일 등에 관한 규정」 별표·과학기술정보통신부
 *   - days.m.science.activity.steps·wrap.exit — 탐구 단계 이름(문제 인식·가설 설정·실험 설계·자료 수집·자료 해석·결론 도출)이 중학교 과학 교육과정 용어와 맞는지: 2022 개정 과학과 교육과정·중학교 과학 교과서
 *   - days.m.science.activity.honest·wrap.pledge — 위조·변조·표절의 뜻풀이(없는 자료 지어냄 / 자료 바꾸거나 뺌 / 출처 없이 씀): 교육부 「연구윤리 확보를 위한 지침」·한국연구재단 연구윤리정보센터
 *   - days.m.science.intro.twoface·activity.graph — 투표·설문 그래프 수치는 모두 가상(화면에 '가상' 표기 확인)
 *   - days.m.science.activity.share·intro.notebook·activity.honest — 인물(윤)·사례·노트는 모두 가상, 실제 연구·사람을 가리키지 않음 확인
 *   - days.m.earth.intro.start — 지구의 날이 법정기념일이 아니며 1970.4.22 미국 시민 행사에서 시작해 세계로 퍼졌다는 서술: research-days.md(법정 목록에 없음)·환경부 지구의 날 안내
 *   - days.m.earth.activity.data·wrap.my — 파리 협정(2015) 목표 '2℃보다 훨씬 낮게 유지, 1.5℃로 제한하도록 노력' 문구: 외교부·환경부 파리협정 안내(국가법령정보센터 조약 원문)
 *   - days.m.earth.intro.graphq·activity.data·wrap.fact — 기온 자료(12.1~13.4°C, 40년 1.3°C 상승)와 투표 수치는 모두 가상 — 화면 '가상' 표기 확인, 실제 관측값처럼 읽히지 않는지
 *   - days.m.earth.activity.chain — 해수면 상승 까닭(빙하가 녹고 바닷물이 데워져 부피 증가), 음식 쓰레기 처리에서 온실가스가 나온다는 서술: 기상청 기후정보포털·환경부
 *   - days.m.earth.activity.mitig — 도시 숲이 완화(흡수)와 적응(그늘·열섬 완화) 둘 다에 도움이 된다는 분류: 산림청·환경부 기후변화 적응 안내
 *   - days.m.earth.activity.life — 인물(하늘)·장면은 가상
 *   - days.m.may18.* — 5·18민주화운동 기념일(5.18)이 「각종 기념일 등에 관한 규정」의 국가보훈부 주관 법정기념일이고 1980.5.18~27 광주에서 시민들이 민주주의를 요구한 일을 기념한다는 서술: 국가법령정보센터·국가보훈부·5·18기념재단
 *   - days.m.may18.activity.flow — 10·26 사태(1979.10), 12·12 사태(1979.12), 서울의 봄, 비상계엄 전국 확대(1980.5.17), 광주 학생 시위(5.18), 시민 참여 확대, 5월 27일 계엄군 진압의 차례: 국사편찬위원회 우리역사넷·5·18기념재단·중학교 역사 교과서
 *   - days.m.may18.activity.flow·activity.cause·activity.memory — 국회 청문회(1988), 5·18 특별법(1995), 국가 기념일 지정(1997), 기록물 유네스코 세계기록유산(2011)의 연도: 5·18기념재단·국가보훈부·국가기록원(유네스코 등재)
 *   - days.m.may18.activity.memory — 5·18 특별법이 진상 규명·책임자 처벌·명예 회복의 길을 열었다는 서술: 국가법령정보센터 「5·18민주화운동 등에 관한 특별법」·5·18기념재단
 *   - days.m.may18.activity.spirit·intro.ten — 시민들이 주먹밥을 나누고 헌혈에 줄을 섰으며 질서를 지켰다는 서술(상인이 주먹밥을 지었다는 표현 포함): 5·18기념재단·5·18민주화운동기록관
 *   - days.m.may18.intro.archive·activity.verify — 5·18 기록물에 시민 일기·성명서·외신 취재 기록·보도 사진·재판 기록·국회 청문회 회의록이 포함된다는 서술: 5·18민주화운동기록관·국가기록원
 *   - days.m.may18.activity.cause — 당시 언론 통제로 광주 소식이 다른 지역에 제대로 전해지지 못했다는 서술: 중학교 역사 교과서·5·18기념재단
 *   - days.m.june.* — 현충일 6.6·6·25전쟁일 6.25가 법정기념일(국가보훈부 주관)이라는 서술: 「각종 기념일 등에 관한 규정」 별표·국가보훈부
 *   - days.m.june.intro.twodays·activity.war·wrap.now — 정전 협정 체결 1953.7.27, 한반도가 지금도 정전 상태라는 서술: 국가기록원·국사편찬위원회 우리역사넷
 *   - days.m.june.activity.war — 낙동강 방어선 1950.8, 인천 상륙 작전 1950.9, 중국군 참전 1950.10, 1·4 후퇴 1951.1(때 표기): 국사편찬위원회 우리역사넷·전쟁기념관
 *   - days.m.june.activity.place — 전쟁 중 부산 임시 수도, 판문점 정전 협정 서명, 서울을 1·4 후퇴로 다시 내줌(칸 지도 자리는 대략): 국가기록원·전쟁기념관
 *   - days.m.june.activity.respect·wrap.manner — 현충일 오전 10시 사이렌 1분 묵념, 현충일 조기 게양(깃면 너비만큼 내려 닮): 국가보훈부 현충일 안내·행정안전부 국기 게양 방법
 *   - days.m.june.activity.result·activity.testimony·wrap.keep — 유해 발굴·신원 확인 사업(국방부 유해발굴감식단), 이산가족 상봉 신청: 국방부 유해발굴감식단·통일부 이산가족정보통합센터
 *   - days.m.june.intro.letter — 읽어 주는 '피란길' 한 줄은 수업용 가상 글(실제 증언 인용 아님) — 문구 그대로 써도 되는지 사람 확인
 *   - days.m.june10.* — 6·10민주항쟁 기념일(6.10)이 「각종 기념일 등에 관한 규정」의 행정안전부 주관 법정기념일이라는 서술: 국가법령정보센터·행정안전부·민주화운동기념사업회
 *   - days.m.june10.activity.flow·activity.chain — 박종철 고문치사 사건(1987.1)과 은폐 사실이 드러남, 4·13 호헌 조치, 6월 10일 국민 대회, 6·29 선언, 여야 합의 개헌안, 개헌안 국민 투표(1987.10), 새 헌법에 따른 대통령 선거(1987.12)의 차례: 국사편찬위원회 우리역사넷·민주화운동기념사업회
 *   - days.m.june10.activity.flow — 구호 '호헌 철폐'·'직선제 쟁취'의 뜻 풀이: 민주화운동기념사업회 자료·중학교 역사 교과서
 *   - days.m.june10.activity.change·intro.demand — 대학생·점심시간의 회사원·종교인과 시민이 함께했다는 서술: 민주화운동기념사업회·중학교 역사 교과서
 *   - days.m.june10.intro.article·activity.compare·activity.clause — 현행 헌법 제67조 ①("대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다"), 제70조(임기 5년, 중임 불가), 1980년 헌법의 대통령 선거인단 간접 선거·임기 7년 단임, 헌법재판소가 1987년 헌법으로 신설: 국가법령정보센터 대한민국헌법(현행·1980년 헌법 연혁)
 *   - days.m.june10.wrap.steps·activity.clause — 헌법 개정 절차(제안 → 공고 → 국회 의결(재적 3분의 2 이상) → 국민 투표 → 공포) 서술: 국가법령정보센터 대한민국헌법 제128~130조
 *   - days.m.liberation.* — 광복절이 「국경일에 관한 법률」의 국경일로 1945.8.15 광복과 1948.8.15 정부 수립을 함께 기념한다는 서술: 행정안전부 국경일 안내·국가법령정보센터
 *   - days.m.liberation.activity.road·wrap.chain — 한국광복군 창설 1940, 5·10 총선거 1948.5.10, 헌법 공포 1948.7.17, 38도선 분할 점령: 국사편찬위원회 우리역사넷·국가기록원
 *   - days.m.liberation.intro.doc·activity.docs·wrap.meaning — 임시 헌장(1919) 제1조 "대한민국은 민주공화제로 함", 임시정부 대일 선전 포고(1941), 카이로 선언(1943) "적당한 시기에 자유롭고 독립된" 문구: 국가기록원·독립기념관·국사편찬위원회
 *   - days.m.liberation.activity.force — 임시정부 외교 활동이 카이로 선언에 영향을 주었다는 서술(교과서 서술 범위): 중학교 역사 교과서·국사편찬위원회
 *   - days.m.liberation.activity.manner·wrap.flag — 국경일 태극기는 깃봉과 깃면 사이를 떼지 않고 닮, 현충일 조기는 깃면 너비만큼 내려 닮, 국경일 다섯 날(3·1절·제헌절·광복절·개천절·한글날): 행정안전부 국기 게양 안내
 *   - days.m.liberation.activity.person — 가상 청년 하람의 장면(1943 중국·임시정부·광복군 훈련·동포 학교)은 가상 서사 — 시대 배경이 사실 범위인지 사람 확인: 독립기념관
 *   - days.m.foundation.* — 개천절(10.3)이 「국경일에 관한 법률」의 국경일이고 '하늘이 열림'·단군왕검의 고조선 건국을 기념한다는 서술: 행정안전부 국경일 안내·국가법령정보센터
 *   - days.m.foundation.intro.story·activity.order — 단군 이야기 줄거리(환웅이 무리 삼천을 이끌고 내려옴, 바람·비·구름을 다스리는 신을 거느림, 곰·호랑이와 쑥·마늘, 곰이 여자(웅녀)가 됨, 단군왕검 탄생·고조선 건국)와 장면 해석(곰·호랑이 섬긴 부족, 농경 중시, 제정일치): 『삼국유사』 기이편·국사편찬위원회 우리역사넷·중학교 역사 교과서
 *   - days.m.foundation.intro.book·activity.record — 『삼국유사』는 고려 때 일연이 씀, 8조법 세 조항은 중국 『한서』 「지리지」에 전함, 기록 쓰인 차례(『한서』 → 『삼국유사』): 국사편찬위원회 우리역사넷·한국학중앙연구원 한국민족문화대백과
 *   - days.m.foundation.intro.bronze·activity.symbol — 고인돌·비파형 동검·청동 거울이 고조선(청동기) 문화 유물이며 고인돌이 지배자의 힘을 보여 준다는 교과서 서술: 국립중앙박물관·중학교 역사 교과서
 *   - days.m.foundation.activity.law — 8조법 전하는 세 조항(사람을 죽인 자는 사형, 다치게 한 자는 곡식으로 갚음, 도둑질한 자는 노비로 삼음)과 추론(생명 중시·농경과 노동력·사유 재산과 신분): 국사편찬위원회 우리역사넷·중학교 역사 교과서
 *   - days.m.foundation.activity.hongik·wrap.class·wrap.one — 홍익인간 = '널리 인간을 이롭게 한다'는 풀이(배타적 뜻 아님): 국사편찬위원회 우리역사넷·교육기본법 제2조 교육 이념 문구
 *   - days.m.hangul.intro.days·activity.history·wrap.make — 훈민정음 창제 1443·반포 1446, 한글날 10.9가 반포를 기념하는 국경일: 국립국어원·행정안전부 국경일 안내
 *   - days.m.hangul.activity.history·activity.cause — 가갸날 1926 제정, 한글날로 이름 바뀜, 한글 맞춤법 통일안 1933, 『훈민정음』 해례본 1940 발견, 1997 유네스코 세계기록유산 등재, 일제 강점기 학교 조선어 수업 폐지: 국립국어원·국립한글박물관·문화재청(국가유산청)
 *   - days.m.hangul.intro.preface·activity.jaehae·wrap.spirit — 서문 현대어 풀이 문구와 자주·애민·실용으로 잇는 해석(교과서 서술 수준인지): 국립국어원 훈민정음 해설·중학교 국어/역사 교과서
 *   - days.m.hangul.activity.shape·activity.jaehae·wrap.make — 기본 자음 ㄱ·ㄴ·ㅁ·ㅅ·ㅇ의 상형 설명, 가획(ㄱ→ㅋ, ㄴ→ㄷ, ㅁ→ㅂ, ㅅ→ㅈ, ㅇ→ㅎ), 모음 ·ㅡㅣ = 하늘·땅·사람: 『훈민정음』 해례본 제자해(국립국어원·국립한글박물관)
 *   - days.m.hangul.activity.opinion — 반대 상소의 근거를 '중국과의 관계와 학문에 해가 된다는 걱정'으로 요약한 서술(인물 이름은 쓰지 않음): 중학교 역사 교과서·국사편찬위원회 우리역사넷; 모둠·인물(봄)은 가상
 *   - days.m.hangul.intro.why — 투표 수치는 가상
 *   - days.m.students.* — 학생독립운동기념일 11.3이 법정기념일(교육부·국가보훈부)이고 학생의 날에서 이름을 바꾼 것(바꾼 해는 쓰지 않음): 「각종 기념일 등에 관한 규정」·국가보훈부
 *   - days.m.students.intro.train·activity.flow·activity.map — 1929년 가을 나주역 한일 학생 충돌, 한국 학생만 처벌한 편파 처리, 11월 3일 광주 학생 시위, 신간회 조사단 파견, 전국 동맹 휴학: 국사편찬위원회 우리역사넷·광주학생독립운동기념회관
 *   - days.m.students.activity.map — 서울 학생 호응, 평양 등 북쪽 지역 학교까지 번짐(칸 지도 자리는 대략): 국사편찬위원회 우리역사넷·독립기념관
 *   - days.m.students.activity.cause·activity.flow — '3·1운동 뒤 가장 큰 민족 운동'이라는 평가(교과서 서술 범위): 중학교 역사 교과서
 *   - days.m.students.activity.demand — 1929년 학생들이 바란 것(차별 없는 교육·우리말과 역사·학생 자치·의견을 낼 자유)의 항목: 전북교육청 2015 자료(2차)만 확인 — 광주학생독립운동기념회관·국가보훈부 자료로 사람 확인. 그래프 수치는 가상
 *   - days.m.students.intro.silent — 일제의 보도 통제로 신문이 사건을 제대로 전하지 못했다는 서술, 빈칸 기사는 수업용 가상 글: 국사편찬위원회·한국언론진흥재단 고신문 자료
 *   - days.m.rights.* — 세계 인권 선언 1948.12.10 유엔 총회 채택, 12.10 세계 인권의 날, 모두 30개 조: 국가인권위원회 세계인권선언 번역본·유엔 자료
 *   - days.m.rights.intro.article·activity.origin·activity.apply·wrap.one — 조문 요지(쉬운 말 풀이): 제1조 모든 사람은 태어날 때부터 자유롭고 존엄하며 평등하다 / 제3조 생명·자유·신체의 안전 / 제12조 사생활 / 제19조 의견과 표현의 자유 / 제26조 교육을 받을 권리: 국가인권위원회 세계인권선언 번역본
 *   - days.m.rights.activity.rights — 선언에 있는 권리 카드(사상·양심의 자유 제18조, 고문받지 않을 권리 제5조, 법 앞의 평등 제7조, 차별받지 않을 권리 제2조·제7조, 휴식과 여가 제24조)와 없는 것(노예 제도 금지 제4조): 국가인권위원회 세계인권선언 번역본
 *   - days.m.rights.intro.why·activity.origin — 선언 채택 배경(제2차 세계 대전의 참상)·유엔 창설 1945·아동 권리 협약 채택 1989·우리나라 비준 1991: 중학교 사회·도덕 교과서·외교부·국가인권위원회
 *   - days.m.rights.activity.origin — 오늘 대한민국 헌법의 비슷한 기본권(인간으로서의 존엄과 가치, 언론·출판의 자유, 교육을 받을 권리) 짝 — 인과가 아닌 견주기로만 씀(1948.7 헌법 제정이 선언 채택보다 앞섬): 국가법령정보센터 대한민국헌법
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic) => (sid, o) => Object.assign({ id: `days.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'days', band: '중', topic: `days.m.${topic}`, grades: [7, 8, 9] }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
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
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: !(more && more.all) } },
    },
  }, extra);
  // 도입 시연용 갈림길: 깊이 2 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, 2), reasons: R || [] }, sequence: [{ path: paths(good, 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);

  // ---- 기준표 글쓰기(rubric-writing): o = { topic, min, max, s: [최소 문장, 최대 문장], title?, starter? } ----
  const RW = (prompt, o, checks, must, more) => Object.assign({ prompt, toolOptions: Object.assign({ topic: o.topic, minChars: o.min, maxChars: o.max, minSentences: o.s[0], maxSentences: o.s[1] }, o.title ? { title: o.title } : {}, o.starter ? { starter: o.starter } : {}, o.sample ? { sample: o.sample } : {}), target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}) }, more);
  // 출구 글(정리): 기준표 셋(사실 정확·핵심 낱말·자기 말) 기본
  const EXIT_RW = (prompt, o, checks, must, more) => Object.assign({ type: 'tool', tool: 'rubric-writing', options: Object.assign({ topic: o.topic, minChars: o.min, maxChars: o.max, minSentences: o.s[0], maxSentences: o.s[1] }, o.title ? { title: o.title } : {}, o.starter ? { starter: o.starter } : {}), prompt, target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}), difficulty: 0.3 }, more);

  // ---- 투표 그림그래프(도입 시연): 가상의 우리 반 투표 결과를 읽는다 ----
  const VOTE = (title, data, question, pick) => ({ tool: 'chart', options: { type: 'picture', mode: 'read', title, unit: '명', xLabel: '짐작', yLabel: '표 수', icon: 'person', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], data, question, choices: data.map((d) => d[0]) }, sequence: [{ pick }] });

  // ---- 스스로 점검표(timer): 차례 카드 + 점검 칸 ----
  const SELF = (prompt, title, cards, order, checks, more) => Object.assign({ type: 'tool', tool: 'timer', options: Object.assign({ title }, cards ? { cards } : {}), prompt, target: Object.assign({}, order ? { order } : {}, { selfCheck: checks }), difficulty: 0.2 }, more);

  // ==== 3·1절 — 1919년 만세 운동과 독립 선언 (days.m.march1) ====
  {
    const M = MK('march1');
    const LINE6 = [
      { id: 'e1', text: '국권 피탈(1910)' }, { id: 'e2', text: '고종 황제 승하(1919.1)' }, { id: 'e3', text: '도쿄 2·8 독립 선언(1919.2)' },
      { id: 'e4', text: '3·1 만세 운동(1919.3)' }, { id: 'e5', text: '대한민국 임시정부 수립(1919.4)' }, { id: 'e6', text: '광복(1945)' },
    ];
    const LINE4 = pickCards(LINE6, ['e2', 'e3', 'e4', 'e5']);
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const SPREAD = [
      { id: 's1', text: '서울에서 독립 선언서 낭독' }, { id: 's2', text: '여러 도시에서 같은 날 만세' },
      { id: 's3', text: '장터·마을로 번진 만세' }, { id: 's4', text: '나라 밖 동포들도 만세' },
    ];
    // 우리나라 칸 지도(실제 거리·모양이 아닌 단순 칸 지도)
    const KMAP = (more) => Object.assign({ grid: [6, 8], title: '1919년 만세 운동이 일어난 곳(칸 지도 — 실제 거리 아님)', places: [
      { name: '간도 용정', icon: 'city', at: [5, 0] }, { name: '의주', icon: 'city', at: [0, 1] }, { name: '평양', icon: 'city', at: [1, 2] },
      { name: '원산', icon: 'city', at: [3, 2] }, { name: '서울', icon: 'capital', at: [2, 4] }, { name: '천안 아우내 장터', icon: 'market', at: [2, 5] },
      { name: '대구', icon: 'city', at: [4, 6] }, { name: '부산', icon: 'port', at: [4, 7] },
    ] }, more);
    const CAUSE = [
      { id: 'c1', text: '헌병 경찰의 무단 통치', to: '원인' }, { id: 'c2', text: '토지 조사 사업으로 땅을 잃은 농민', to: '원인' },
      { id: 'c3', text: '민족 자결주의라는 국제 흐름', to: '원인' }, { id: 'c4', text: '고종 황제의 승하', to: '원인' },
      { id: 'r1', text: '대한민국 임시정부 수립', to: '결과' }, { id: 'r2', text: '일제가 이른바 문화 통치로 방식을 바꿈', to: '결과' },
      { id: 'r3', text: '이후 독립운동의 바탕이 됨', to: '결과' }, { id: 't1', text: '만세 운동이 서울 하루로 끝남' },
    ];
    const INOUT = [
      { id: 'i1', text: '헌병 경찰의 무단 통치', to: '국내 배경' }, { id: 'i2', text: '토지 조사 사업의 피해', to: '국내 배경' },
      { id: 'i3', text: '고종 황제의 승하', to: '국내 배경' }, { id: 'o1', text: '민족 자결주의라는 국제 흐름', to: '국외 배경' },
      { id: 'o2', text: '도쿄 유학생의 2·8 독립 선언', to: '국외 배경' }, { id: 'o3', text: '나라 밖 독립운동 단체의 움직임', to: '국외 배경' },
    ];
    // 가상 인물 갈림길 — 1919년 3월 어느 장터 마을의 가상 학생 '솔'
    const D1 = { text: '1919년 3월, 가상의 학생 솔은 서울에서 독립 선언서가 낭독되었다는 소식과 함께 선언서를 베낀 종이 한 장을 받았다.', ask: '솔은 먼저 무엇을 할까?', motif: 'house', choices: [
      { id: 'read', text: '선언서를 끝까지 읽고 무엇을 다짐했는지 확인한다', result: '선언서가 자주독립을 밝히고, 질서를 존중하며 끝까지 뜻을 밝히자고 다짐한 것을 안다.', impact: [{ who: '솔', text: '운동의 뜻과 원칙을 정확히 안다', tone: 1 }], end: '선언서를 읽고 뜻을 확인했어요.',
        next: { text: '장터에서 만세를 부르기로 한 날, 화가 난 한 사람이 "관청 건물을 부수자"고 외친다.', ask: '솔은 어떻게 할까?', choices: [
          { id: 'order', text: '선언서의 공약 3장처럼 질서를 지키며 뜻을 밝히자고 말한다', result: '사람들이 태극기를 들고 만세를 부르며 뜻을 밝힌다.', impact: [{ who: '장터의 사람들', text: '한목소리로 뜻을 밝힌다', tone: 1 }], end: '공약 3장의 원칙대로 뜻을 밝혔어요.',
            next: { text: '만세 운동이 끝난 뒤, 이웃 마을 사람이 그날 일을 묻는다.', ask: '솔은 무엇을 전할까?', choices: [
              { id: 'fact', text: '선언서의 뜻과 장터에서 있었던 일을 본 대로 전한다', result: '이웃 마을에도 운동의 뜻이 바르게 전해진다.', impact: [{ who: '이웃 마을', text: '사실과 뜻을 함께 듣는다', tone: 1 }] },
              { id: 'rumor', text: '더 크게 들리도록 없던 일까지 보태어 전한다', result: '사실과 다른 말이 섞여 퍼진다.', impact: [{ who: '이웃 마을', text: '무엇이 사실인지 헷갈린다', tone: -1 }], why: '기억할 일은 본 대로, 사실대로 전해야 오래 믿을 수 있어요.' }] } },
          { id: 'break', text: '함께 건물을 부수러 간다', result: '선언서가 다짐한 질서 있는 방법에서 벗어난다.', impact: [{ who: '운동의 뜻', text: '선언서의 원칙과 멀어진다', tone: -1 }], why: '선언서의 공약 3장은 모든 행동이 질서를 존중하도록 다짐했어요.' }] } },
      { id: 'pass', text: '읽지 않고 들은 소문만 이웃에게 전한다', result: '선언서가 무엇을 다짐했는지 모른 채 소문이 퍼진다.', impact: [{ who: '이웃', text: '운동의 뜻을 정확히 모른다', tone: -1 }], why: '선언서를 직접 읽어야 운동이 무엇을 바랐는지 알 수 있어요.', ending: '소문만 전해 뜻이 흐려졌어요.' }] };
    const R1 = [{ id: 'r1', text: '선언서는 자주독립을 밝혔다' }, { id: 'r2', text: '공약 3장은 질서를 존중하자고 다짐했다' },
      { id: 'r3', text: '화가 나면 어떤 방법이든 괜찮다', why: '선언서는 끝까지 뜻을 밝히되 질서를 존중하자고 했어요.' }, { id: 'r4', text: '소문이 크면 사실이다', why: '소문의 크기는 사실인지와 상관없어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '본 대로 전해야 기록이 믿을 만해진다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.scene', {
        title: '1919년 3월 거리 장면 세 장', method: '1919년 3월 거리 장면에서 달라진 모습 찾기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 두 장(선언서 낭독·거리의 만세)을 먼저 읽어 주고 "선언서·태극기" 힌트 낱말을 칠판에 적는다.', base: '시연 판의 장면 세 장이 놓이는 차례를 보며 무엇이 먼저 일어났는지 짐작해 말한다.', challenge: '장면마다 그렇게 짐작한 근거(장면 속 물건·장소)를 한 줄씩 말한다.' },
        intro: {
          teacher: '"이 세 장면에서 평소와 달라진 모습은 무엇인가요?" 종이 장면 세 장(공원에서 선언서를 읽는 사람들, 거리로 나와 만세를 부르는 사람들, 장터로 번진 만세)을 보이고 시연 단추로 장면이 차례대로 놓이는 모습을 보인다. 3·1절은 「국경일에 관한 법률」이 정한 국경일로, 1919년 3월 1일 독립을 선언하고 만세 운동을 벌인 일을 기념한다고 알린다. "서울에서 하루 만에 끝난 일 아니에요?"라는 말에는 "셋째 장면은 어디일까요? 만세 소리는 어디까지 갔을까요?"라고 되묻는다.',
          student: '1919년 3월의 장면 세 장을 보고 무엇이 먼저 일어났는지 짐작해요. 장면 속 무엇을 보고 그렇게 생각했는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'order', title: '1919년 3월', slots: ['처음', '가운데', '끝'], cards: [
            { id: 'p1', text: '공원에서 선언서를 읽는 사람들', motif: 'house' }, { id: 'p2', text: '거리로 나와 만세를 부르는 사람들', motif: 'star' },
            { id: 'p3', text: '장터로 번진 만세', motif: 'tree' }], shuffle: false }, sequence: [{ order: ['p1'] }, { order: ['p1', 'p2'] }, { order: ['p1', 'p2', 'p3'] }] },
          art: { draw: 'a paper-cut street scene in spring 1919 with crowds of people holding small flags in front of an old stone gate, a folded declaration paper floating above', banner: '1919년 3월, 무엇이 달라졌을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면 그림은 종이 오림 장면이며 실제 사진이 아니다. 시위 진압 장면은 넣지 않는다.',
      }),
      M('intro.why', {
        title: '"왜 1919년이었을까" 짐작 투표', method: '3·1운동이 이때 일어난 까닭 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개(국내 배경 둘·국외 배경 둘)를 칠판에 이름을 붙여 적어 두고, 손을 들어 투표한다.', base: '짐작 보기에 투표한 뒤, 보기마다 국내 배경인지 국외 배경인지 스스로 갈라 말한다.', challenge: '가장 많이 나온 짐작마다 무엇으로 확인할 수 있을지(교과서·기념관 자료 등) 하나씩 말한다.' },
        intro: {
          teacher: '"3·1운동은 왜 하필 1919년 봄에 일어났을까요? 보기 넷 가운데 가장 그럴듯한 것에 손을 들어 보세요." 손을 든 수를 세어 말한 뒤, 시연 단추로 가상의 우리 반 투표 그림그래프를 읽어 가장 많은 짐작을 고르는 모습을 보인다. "고종 황제가 돌아가셔서 한 가지 까닭으로 일어났어요"라는 말에는 "불씨만 있으면 불이 붙을까요, 마른 땔감도 있어야 할까요?"라고 되묻는다. 오늘의 질문은 "3·1운동의 바탕과 계기는 무엇이었고, 무엇을 남겼나?"로 정한다.',
          student: '3·1운동이 1919년에 일어난 까닭 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('3·1운동이 1919년에 일어난 까닭 짐작(가상의 우리 반 투표)', [['무단 통치에 쌓인 분노', 11], ['고종 황제의 승하', 8], ['민족 자결주의 소식', 5], ['도쿄 2·8 독립 선언', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut classroom board with four paper cards and small paper figures lined up as a picture graph beside them', banner: '왜 1919년 봄이었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 실제 우리 반 투표는 손 들기로 하고, 투표 결과를 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.quote', {
        title: '선언서 첫 구절의 낯선 낱말', method: '선언서 첫 구절 듣고 낯선 낱말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 세 개(독립국·자주민·선언) 가운데 가장 낯선 것 하나를 고르고 교사가 뜻을 알려 준다.', base: '시연 판에서 낱말과 뜻 카드가 이어지는 것을 보기 전에, 낱말마다 뜻을 먼저 짐작해 말한다.', challenge: '첫 구절 전체를 오늘의 말로 바꾸어 짝에게 말한다.' },
        intro: {
          teacher: '"오등은 자에 아 조선의 독립국임과 조선인의 자주민임을 선언하노라." 기미 독립 선언서의 첫 구절을 천천히 읽어 주고 "가장 낯선 낱말은 무엇이었나요?"라고 묻는다. 시연 단추로 낱말 카드가 뜻과 이어지는 모습을 보인다. "선언서는 일본을 미워하자는 글"이라는 말이 나오면 "첫 구절이 밝힌 것은 미움일까요, 우리가 스스로 서는 나라라는 사실일까요?"라고 되묻는다.',
          student: '선언서 첫 구절을 듣고 뜻이 궁금한 낱말 하나를 골라요. 그 낱말의 뜻을 짐작해 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '독립국' }, { id: 'b', label: '자주민' }, { id: 'c', label: '선언하노라' }], cards: [{ id: 'm1', text: '스스로 서는 나라' }, { id: 'm2', text: '스스로 주인인 백성' }, { id: 'm3', text: '널리 밝혀 알린다' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2' } }, { match: { a: 'm1', b: 'm2', c: 'm3' } }] },
          art: { draw: 'a paper-cut old declaration scroll unrolling with bold brush strokes, a quiet crowd and a park gate behind it', banner: '첫 구절, 무엇을 밝혔을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.line', {
        title: '3·1운동 앞뒤 사건 시간 띠', method: '3·1운동 전후 사건 시간 띠 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 4장(1919년 1~4월)에 연도·달이 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 6장(1910~1945)에 연도 없이 차례를 놓는다.', challenge: '연도 없는 6장에 함정 카드 한 장이 섞이고, 임시정부 수립을 만세 운동 뒤에 놓은 까닭을 짝에게 말한다.' },
        activity: {
          title: '사건 시간 띠', tool: 'timeline',
          teacher: '"이 사건이 저 사건보다 먼저일까요?" 카드를 놓을 때마다 근거를 말하게 한다. 임시정부 수립을 만세 운동보다 앞에 두는 학생에게는 "임시정부는 만세 운동의 힘을 모아 세운 것일까요, 그 반대일까요?"라고 되묻는다. 만세 운동이 서울 하루로 끝났다고 여기는 학생에게는 셋째 문항의 퍼져 나간 차례를 다시 보게 한다.',
          task: '3·1운동 앞뒤의 사건 카드를 일어난 차례대로 시간 띠에 놓고, 만세 운동이 퍼져 나간 차례도 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('1910년부터 1945년까지의 사건을 일어난 차례대로 놓아 보세요.', NOYEAR(LINE6), { axis: ['1910년', '1945년'] }),
              OB('1919년 1월부터 4월까지의 사건을 차례대로 놓아 보세요(달이 적혀 있어요).', LINE4, { axis: ['1919년 1월', '1919년 4월'] }),
              OB('연도 없는 카드 6장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(LINE6), { axis: ['1910년', '1945년'] }, [{ id: 'x1', text: '6·25전쟁 발발' }])),
            IT(MB('사건과 그 일이 일어난 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1910년', '국권 피탈'], ['1919년', '3·1 만세 운동'], ['1945년', '광복']], ['6·25전쟁']),
              MB('사건과 그 일이 일어난 해를 이어 보세요.', [['1919년', '3·1 만세 운동'], ['1945년', '광복']], [])),
            IT(OB('만세 운동이 퍼져 나간 차례대로 놓아 보세요.', SPREAD, { axis: ['먼저', '나중'] }),
              OB('만세 운동이 퍼져 나간 차례대로 놓아 보세요(세 장).', pickCards(SPREAD, ['s1', 's3', 's4']), { axis: ['먼저', '나중'] }),
              null, { conclude: '3·1운동은 서울에서 시작해 전국 장터와 나라 밖까지 이어졌고, 그 힘을 모아 같은 해 4월 대한민국 임시정부가 세워졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '3·1운동 앞뒤의 사건을 정리해요.', columns: ['사건', '때'], cells: [['2·8 독립 선언', ''], ['3·1 만세 운동', ''], ['대한민국 임시정부 수립', '']], answer: '1919년 2월 / 1919년 3월 / 1919년 4월' }] },
      }),
      M('activity.spread', {
        title: '만세 운동이 퍼진 곳 칸 지도', method: '만세 운동이 퍼진 곳 지도에 핀 꽂기', tool: 'map', minutes: 16,
        levels: { easy: '설명마다 지역 이름이 들어 있어 이름을 보고 핀을 꽂는다(문항 4개).', base: '지역 이름 대신 일어난 일만 듣고 알맞은 곳에 핀을 꽂는다(문항 4개).', challenge: '넷째 문항에서 핀을 꽂은 뒤 만세 운동이 퍼진 방향을 바르게 말한 보기를 함께 고른다.' },
        activity: {
          title: '퍼진 곳 지도', tool: 'map',
          teacher: '"이 설명은 어디에서 일어난 일일까요?" 설명을 읽어 주고 핀을 꽂을 때마다 그곳에서 누가 만세를 불렀는지 말하게 한다. "서울 사람들만 참여했어요"라는 학생에게 "장터에 모인 사람들은 어떤 일을 하던 사람들일까요?"라고 되묻는다. 칸 지도는 실제 거리와 모양이 아니라 자리만 나타낸다는 점을 처음에 밝힌다.',
          task: '1919년 만세 운동 설명을 듣고 칸 지도에서 그 일이 일어난 곳에 핀을 꽂아요.',
          levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PIN('3월 1일, 민족 대표의 독립 선언과 함께 공원에서 선언서가 낭독되고 만세 운동이 시작된 곳에 핀을 꽂으세요.', KMAP(), { place: '서울' }),
              PIN('3월 1일 선언서가 낭독되고 만세 운동이 시작된 서울에 핀을 꽂으세요.', KMAP(), { place: '서울' })),
            IT(PIN('같은 3월 1일, 서울 북쪽의 큰 도시에서도 만세 운동이 열렸어요. 서울 북서쪽 가까운 큰 도시에 핀을 꽂으세요.', KMAP(), { place: '평양' }),
              PIN('같은 날 만세 운동이 열린 북쪽의 큰 도시 평양에 핀을 꽂으세요.', KMAP(), { place: '평양' })),
            IT(PIN('4월 1일, 장날에 모인 사람들이 만세를 부른 천안의 장터에 핀을 꽂으세요.', KMAP(), { place: '천안 아우내 장터' }),
              PIN('장날 만세 운동이 열린 천안 아우내 장터에 핀을 꽂으세요.', KMAP(), { place: '천안 아우내 장터' })),
            IT(PIN('나라 밖 북쪽, 우리 동포들이 모여 살던 곳에서도 만세를 불렀어요. 그곳에 핀을 꽂으세요.', KMAP(), { place: '간도 용정' }),
              PIN('나라 밖 동포들이 만세를 부른 간도 용정에 핀을 꽂으세요.', KMAP(), { place: '간도 용정' }),
              PIN('나라 밖 동포들이 만세를 부른 곳에 핀을 꽂고, 퍼진 방향을 바르게 말한 보기를 고르세요.', KMAP({ ask: { q: '만세 운동이 퍼진 모습으로 알맞은 것은?', choices: ['도시에서 시작해 장터·마을과 나라 밖으로 퍼졌다', '서울에서만 하루 동안 열렸다', '나라 밖에서 시작해 서울로 들어왔다'] } }), { place: '간도 용정', pick: 0 }),
              { conclude: '만세 운동은 서울과 여러 도시에서 시작해 전국의 장터·마을과 나라 밖 동포 사회로 퍼졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 핀을 꽂은 곳 가운데 두 곳을 골라, 그곳에서 만세를 부른 사람들이 누구였는지 한 문장으로 써요.' }] },
      }),
      M('activity.cause', {
        title: '3·1운동의 배경과 결과 나누기', method: '국내·국외 배경과 결과 카드 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 6장(원인 3·결과 3)을 원인·결과 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 8장(함정 1장)을 원인·결과로 나누고, 원인을 다시 국내·국외 배경으로 나눈다.', challenge: '셋째 문항에서 원인과 결과를 이어 말할 짝 카드를 고르고, 활동지에 화살표로 이어 한 문장으로 설명한다.' },
        activity: {
          title: '배경과 결과 나누기', tool: 'sortboard',
          teacher: '"이 카드는 3·1운동 전의 일일까요, 뒤의 일일까요?" 일제가 통치 방식을 바꾼 일을 원인에 두는 학생에게 "통치 방식을 바꾼 것은 만세 운동을 겪기 전이었을까요, 뒤였을까요?"라고 되묻는다. 민족 자결주의를 국내 배경에 두는 학생에게는 제1차 세계 대전 뒤의 국제 흐름이라는 점을 짚는다. 이른바 문화 통치가 좋은 변화였다고 여기는 학생에게는 겉모습만 바꾼 통치였다는 교과서 서술을 짚는다.',
          task: '3·1운동의 배경과 결과 카드를 바구니에 나누고, 배경을 국내와 국외로 다시 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 3·1운동의 원인과 결과로 나누세요. 사실이 아닌 카드는 남겨요.', ['원인', '결과'], CAUSE),
              SB('카드 6장을 3·1운동의 원인과 결과로 나누세요.', ['원인', '결과'], pickCards(CAUSE, ['c1', 'c3', 'c4', 'r1', 'r2', 'r3']))),
            IT(SB('3·1운동의 배경을 국내와 국외로 나누세요.', ['국내 배경', '국외 배경'], INOUT),
              SB('3·1운동의 배경 4장을 국내와 국외로 나누세요.', ['국내 배경', '국외 배경'], pickCards(INOUT, ['i1', 'i2', 'o1', 'o2']))),
            IT(SB('원인과 결과를 잇는 짝을 보고, 3·1운동에서 이어진 일과 이어지지 않은 일로 나누세요.', ['이어진 일', '이어지지 않은 일'], [
              { id: 'k1', text: '전국 만세 → 독립운동을 이끌 정부 필요', to: '이어진 일' }, { id: 'k2', text: '임시정부 수립 → 이후 독립운동의 중심', to: '이어진 일' },
              { id: 'k3', text: '전국 만세 → 일제가 통치 방식을 바꿈', to: '이어진 일' }, { id: 'k4', text: '만세 운동 → 그날 바로 독립', to: '이어지지 않은 일' },
              { id: 'k5', text: '선언서 낭독 → 무기를 든 전쟁 시작', to: '이어지지 않은 일' }]),
              null, null, { conclude: '3·1운동은 오래 쌓인 국내의 분노와 국제 흐름, 여러 계기가 겹쳐 일어났고, 임시정부 수립과 이후 독립운동으로 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '3·1운동의 배경과 결과를 정리해요.', columns: ['구분', '내용'], cells: [['국내 배경', ''], ['국외 배경', ''], ['결과', '']], answer: '무단 통치·토지 조사 사업 / 민족 자결주의·2·8 독립 선언 / 임시정부 수립·통치 방식 변화' }] },
      }),
      M('activity.choice', {
        title: '1919년 가상 학생의 갈림길', method: '1919년 학생의 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길에서 한 번 골라 결과를 본다.', base: '갈림길 두 번을 끝까지 가 보고, 내 선택의 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번을 끝까지 가 보고, 근거 카드 세 장(선언서·공약 3장·사실 전하기)을 모두 고른다.' },
        activity: {
          title: '가상 학생의 갈림길', tool: 'dilemma',
          teacher: '"선언서를 직접 읽은 사람과 소문만 들은 사람은 무엇이 다를까요?" 가상 학생 솔의 길을 끝까지 따라간 뒤 되돌아가 다른 길의 결과와 견주게 한다. "화가 나면 무엇이든 해도 된다"는 학생에게 "선언서의 공약 3장은 행동의 원칙을 무엇이라고 다짐했나요?"라고 되묻는다. 솔은 지어낸 가상 인물이고, 실제 인물의 말이나 마음을 지어 붙이지 않는다는 점을 처음에 밝힌다.',
          task: '1919년 가상 학생 솔의 길을 골라 결과를 따라가고, 끝에서 선언서에 비추어 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '선언서를 베낀 종이를 받은 솔이 먼저 할 일을 한 번 골라 결과를 보세요.', base: '솔의 갈림길 두 번을 끝까지 가 보고, 내 선택의 근거를 고르세요.', challenge: '솔의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '1919년 3월, 가상 학생 솔', D1, [['read', 'order', 'fact']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            IT({ prompt: '솔의 이야기에서, 선언서의 공약 3장과 가장 가까운 선택은 무엇인가요? 보기를 골라 끝까지 가 보세요.', toolOptions: { title: '공약 3장과 가까운 선택', scene: { text: '장터에서 만세를 부르기로 한 날, 화가 난 한 사람이 "관청 건물을 부수자"고 외친다.', ask: '솔은 어떻게 할까?', motif: 'house', choices: [
              { id: 'order', text: '질서를 지키며 뜻을 밝히자고 말한다', result: '사람들이 태극기를 들고 만세를 부르며 뜻을 밝힌다.', impact: [{ who: '장터의 사람들', text: '한목소리로 뜻을 밝힌다', tone: 1 }], ending: '공약 3장의 원칙대로 뜻을 밝혔어요.' },
              { id: 'break', text: '함께 건물을 부수러 간다', result: '선언서가 다짐한 질서 있는 방법에서 벗어난다.', impact: [{ who: '운동의 뜻', text: '선언서의 원칙과 멀어진다', tone: -1 }], why: '공약 3장은 질서를 존중하자고 다짐했어요.', ending: '선언서의 원칙과 멀어졌어요.' },
              { id: 'leave', text: '아무 말 없이 집으로 돌아간다', result: '그 자리의 의견은 그대로 남는다.', impact: [{ who: '장터의 사람들', text: '함께 정할 기회를 놓친다', tone: 0 }], why: '원칙을 말로 나누면 함께 뜻을 지킬 수 있어요.', ending: '원칙을 나누지 못했어요.' }] }, reasons: [] }, target: { path: [['order']] } }),
            IT({ prompt: '솔의 이야기 끝에서, 그날 일을 이웃에게 전하는 바른 방법을 골라 보세요.', toolOptions: { title: '그날 일을 전하는 방법', scene: { text: '만세 운동이 끝난 뒤, 이웃 마을 사람이 그날 일을 묻는다.', ask: '솔은 무엇을 전할까?', motif: 'house', choices: [
              { id: 'fact', text: '본 대로, 선언서의 뜻과 함께 전한다', result: '이웃 마을에도 운동의 뜻이 바르게 전해진다.', impact: [{ who: '이웃 마을', text: '사실과 뜻을 함께 듣는다', tone: 1 }], ending: '사실과 뜻을 함께 전했어요.' },
              { id: 'rumor', text: '없던 일까지 보태어 전한다', result: '사실과 다른 말이 섞여 퍼진다.', impact: [{ who: '이웃 마을', text: '무엇이 사실인지 헷갈린다', tone: -1 }], why: '본 대로 전해야 오래 믿을 수 있어요.', ending: '사실과 다른 말이 섞였어요.' }] }, reasons: [{ id: 'q1', text: '본 대로 전해야 기록이 믿을 만해진다' }, { id: 'q2', text: '크게 부풀려야 사람들이 움직인다', why: '부풀린 말은 나중에 사실까지 의심받게 해요.' }] }, target: { path: [['fact']], reasons: ['q1'] } },
              null, null, { conclude: '선언서는 자주독립을 밝히고 질서를 존중하며 끝까지 뜻을 밝히자고 다짐했어요. 그날의 일은 본 대로 전할 때 오래 믿을 수 있는 기억이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '기미 독립 선언서의 공약 3장이 다짐한 행동 원칙에 가까운 것은?', options: ['무기를 들고 맞선다', '질서를 존중하며 끝까지 뜻을 밝힌다', '외국 군대에 기댄다'], answer: '질서를 존중하며 끝까지 뜻을 밝힌다' }] },
      }),
      M('activity.read', {
        title: '선언서·공약 3장 현대어로 풀어 쓰기', method: '선언서·공약 3장 구절을 현대어로 풀어 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '구절 두 개(첫 구절·공약 3장 첫째)를 낱말 풀이와 문장 틀을 보며 현대어로 풀어 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '구절 세 개를 현대어로 풀고, 독립의 정신과 행동 원칙을 세 문장 글로 쓴 뒤 기준표로 점검한다.', challenge: '마지막 글에서 선언서·당시 신문·일제 재판 기록이 각각 무엇을 보여 주는지 견주어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '선언서 풀어 쓰기', tool: 'rubric-writing',
          teacher: '"100년도 더 된 이 문장을 오늘 중학생의 말로 바꾸면 어떻게 될까요?" 구절마다 낯선 낱말을 먼저 함께 풀고, 학생이 쓴 풀이를 둘씩 바꿔 읽게 한다. 공약 3장의 "질서를 존중하여"를 "힘으로 맞서자"로 푸는 학생에게 원문을 다시 읽게 하고 "질서를 존중하라는 말이 힘으로 맞서라는 뜻일 수 있을까요?"라고 되묻는다. 선언서에 적히지 않은 내용을 덧붙이지 않고, 적힌 대로 풀어 쓰는 것이 오늘의 기준이라고 밝힌다.',
          task: '기미 독립 선언서와 공약 3장의 구절을 오늘의 말로 풀어 쓰고, 선언서가 밝힌 독립의 정신과 행동 원칙을 짧은 글로 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 구절 "조선의 독립국임과 조선인의 자주민임을 선언하노라"를 오늘의 말로 풀어 쓰세요.', { topic: '"오등은 자에 아 조선의 독립국임과 조선인의 자주민임을 선언하노라"를 오늘의 말로 풀어 쓰세요.', min: 20, max: 140, s: [1, 2], title: '구절 ① 첫 구절' }, ['낯선 낱말을 오늘의 말로 바꾸었다', '원문에 없는 내용을 덧붙이지 않았다', '무엇을 선언했는지 드러난다'], [['독립', '스스로 서는'], ['선언', '밝힌다', '알린다']]),
              RW('낱말 풀이를 보며 첫 구절을 오늘의 말로 풀어 쓰세요(오등=우리, 자에=이에, 자주민=스스로 주인인 백성).', { topic: '첫 구절을 낱말 풀이(오등=우리, 자에=이에, 아=우리, 자주민=스스로 주인인 백성)를 보며 풀어 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '우리는 이에 조선이 ___ 나라이고, 조선 사람이 ___ 백성임을 밝힌다.' }, ['낯선 낱말을 오늘의 말로 바꾸었다', '원문에 없는 내용을 덧붙이지 않았다'])),
            IT(RW('공약 3장 가운데 "모든 행동은 가장 질서를 존중하여"라는 구절을 오늘의 말로 풀고, 이 원칙이 왜 중요했을지 한 문장 덧붙이세요.', { topic: '공약 3장의 "일체의 행동은 가장 질서를 존중하여"를 오늘의 말로 풀고, 이 원칙이 왜 중요했을지 한 문장 덧붙이세요.', min: 25, max: 160, s: [2, 3], title: '구절 ② 공약 3장' }, ['구절을 오늘의 말로 풀었다', '원칙이 중요한 까닭을 썼다', '원문에 없는 내용을 덧붙이지 않았다'], [['질서']]),
              RW('틀을 채워 공약 3장의 구절을 풀어 쓰세요.', { topic: '공약 3장의 "일체의 행동은 가장 질서를 존중하여"를 풀어 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '모든 행동은 ___를 지키며 해야 한다.' }, ['구절을 오늘의 말로 풀었다', '원문에 없는 내용을 덧붙이지 않았다'], [['질서']])),
            IT(RW('공약 3장의 "최후의 일인까지, 최후의 일각까지"를 오늘의 말로 풀어 쓰세요.', { topic: '공약 3장의 "최후의 일인까지 최후의 일각까지 민족의 정당한 의사를 쾌히 발표하라"를 오늘의 말로 풀어 쓰세요.', min: 20, max: 140, s: [1, 2], title: '구절 ③ 끝까지' }, ['낯선 낱말을 오늘의 말로 바꾸었다', '무엇을 끝까지 하자는 것인지 드러난다', '원문에 없는 내용을 덧붙이지 않았다'], [['끝까지', '마지막']]),
              RW('틀을 채워 "최후의 일인까지, 최후의 일각까지"를 풀어 쓰세요.', { topic: '"최후의 일인까지 최후의 일각까지"를 풀어 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '마지막 ___까지, 마지막 ___까지 우리의 뜻을 밝히자.' }, ['낯선 낱말을 오늘의 말로 바꾸었다', '원문에 없는 내용을 덧붙이지 않았다'])),
            IT(RW('앞에서 푼 구절을 바탕으로, 선언서가 밝힌 독립의 정신과 행동 원칙을 세 문장으로 쓰세요.', { topic: '선언서가 밝힌 독립의 정신(무엇을 선언했나)과 행동 원칙(어떻게 하자고 했나)을 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '선언서의 정신과 원칙' }, ['독립의 정신을 썼다', '행동 원칙을 썼다', '구절을 근거로 들었다', '다른 나라 사람을 미워하는 말을 쓰지 않았다'], [['자주', '독립'], ['질서']]),
              RW('틀을 채워 선언서의 정신과 원칙을 두 문장으로 쓰세요.', { topic: '선언서의 정신과 행동 원칙을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '선언서는 조선이 ___ 나라임을 밝혔다. 그리고 모든 행동은 ___를 지키자고 다짐했다.' }, ['독립의 정신을 썼다', '행동 원칙을 썼다'], [['독립', '자주']]),
              RW('선언서·당시 신문·일제 재판 기록이 각각 3·1운동의 무엇을 보여 주는지 견주어 한 문단으로 쓰세요.', { topic: '선언서(뜻과 원칙), 당시 신문(그날의 소식), 일제 재판 기록(만든 쪽의 입장이 담긴 기록)이 각각 무엇을 보여 주는지 견주어 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '기록의 종류 견주기' }, ['기록 세 종류를 모두 다루었다', '기록마다 보여 주는 것을 썼다', '만든 쪽의 입장을 생각했다', '선언서의 정신을 함께 썼다'], [['선언서'], ['재판']]),
              { conclude: '선언서는 우리가 스스로 서는 나라이고 스스로 주인인 백성임을 밝히고, 질서를 존중하며 끝까지 뜻을 밝히자고 다짐했어요. 다른 기록과 견주면 그날의 모습이 더 넓게 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선언서 구절을 오늘의 말로 정리해요.', columns: ['구절', '오늘의 말'], cells: [['조선의 독립국임과 조선인의 자주민임을 선언하노라', ''], ['일체의 행동은 가장 질서를 존중하여', ''], ['최후의 일인까지 최후의 일각까지', '']], answer: '조선은 스스로 서는 나라, 조선 사람은 스스로 주인인 백성임을 밝힌다 / 모든 행동은 질서를 지키며 / 마지막 한 사람까지, 마지막 순간까지' },
          { type: 'choice', prompt: '3·1운동을 알려 주는 기록 가운데 그때 만든 쪽의 입장을 특히 생각하며 읽어야 하는 것은?', options: ['일제 법원의 재판 기록', '선언서를 오늘의 말로 옮긴 풀이', '오늘 내가 쓴 활동지'], answer: '일제 법원의 재판 기록' }] },
      }),

      // ---- 정리 ----
      M('wrap.ticket', {
        title: '3·1절이 기념하는 것 출구 글', method: '3·1절이 기념하는 것 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(무엇을 선언했나)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(언제·무엇을)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 자기 말로 한 문장을 더해 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"누군가 \'3·1절은 쉬는 날\'이라고만 말한다면, 무엇을 더 알려 주고 싶나요?" 출구 글을 쓰기 전에 오늘 시간 띠에서 3·1운동과 임시정부 수립의 앞뒤를 다시 짚는다. "서울에서 하루 있었던 일을 기념한다"고 쓰는 학생에게는 만세 운동이 전국과 나라 밖으로 이어졌다는 점을 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('3·1절이 무엇을 기념하는 날인지 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '3·1절은 무엇을 기념하는 날인지 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '3·1절이 기념하는 것', starter: '3·1절은 ___년 3월 1일 ___을 선언하고 만세 운동을 벌인 일을 기념하는 국경일이다.' }, ['사실(때·한 일)이 정확하다', '핵심 낱말(독립·선언·만세 운동)을 넣었다', '내 말로 썼다'], [['1919'], ['독립']]),
              { prompt: '빈칸 하나를 채워 3·1절의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '3·1절은 1919년 3월 1일 ___을 선언하고 만세 운동을 벌인 일을 기념하는 날이다.' }, target: { selfCheck: ['무엇을 선언했는지 썼다', '내 말로 썼다'], mustInclude: [['독립']] } },
              { prompt: '틀 없이, 3·1절의 뜻에 내 생각 한 문장을 더해 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(때·한 일)이 정확하다', '핵심 낱말(독립·선언·만세 운동)을 넣었다', '내 말로 썼다', '오늘 기념하는 까닭을 한 문장 더했다'], mustInclude: [['1919'], ['독립']] } }),
            { type: 'choice', prompt: '3·1절에 대한 설명으로 가장 알맞은 것은?', options: ['1919년 독립을 선언하고 전국과 나라 밖으로 퍼진 만세 운동을 기념하는 국경일', '서울에서 하루 동안 있었던 일을 기념하는 날', '광복을 맞은 날을 기념하는 날'], answer: 0, difficulty: 0.15, explain: '3·1절은 1919년 3월 1일의 독립 선언과 전국·나라 밖으로 퍼진 만세 운동을 기념해요.' },
          ],
        },
        worksheet: {
          title: '3·1절이 기념하는 것',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '3·1절은 ___년 3월 1일의 독립 선언과 만세 운동을 기념하는 ___이다.', answer: '1919, 국경일' },
            { type: 'short', prompt: '3·1절에 기념하는 것을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.chain', {
        title: '원인·결과 고리 스스로 점검', method: '3·1운동 원인·결과 이해 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '고리 카드 3장(바탕·사건·결과)을 차례로 놓고 점검 칸 두 개에 표시한다.', base: '고리 카드 4장(바탕·계기·사건·결과)을 차례로 놓고, 점검 칸 세 개(고리마다 까닭을 말할 수 있다 등)에 표시한다.', challenge: '고리 카드 4장에 함정 카드가 섞이고, 점검 칸 네 개(다른 사건의 고리와 견줄 수 있다 포함)에 표시한다.' },
        wrap: {
          teacher: '"3·1운동의 바탕, 계기, 사건, 결과를 한 줄로 이으면 어떻게 될까요?" 고리 카드를 놓은 뒤, 점검 칸 가운데 가장 자신 없는 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다. 계기(고종 승하)와 바탕(무단 통치)을 같은 것으로 여기는 학생에게 "불씨와 땔감은 어떻게 다를까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('3·1운동의 고리 카드를 차례로 놓고, 점검 칸에 스스로 표시해요.', '3·1운동의 고리', ['결과: 임시정부 수립', '바탕: 무단 통치 10년', '사건: 전국 만세 운동', '계기: 고종 승하·2·8 선언'], ['바탕: 무단 통치 10년', '계기: 고종 승하·2·8 선언', '사건: 전국 만세 운동', '결과: 임시정부 수립'], ['고리마다 무엇인지 말할 수 있다', '바탕과 계기의 차이를 말할 수 있다', '결과가 이후 독립운동과 어떻게 이어졌는지 말할 수 있다']),
              { prompt: '고리 카드 3장을 차례로 놓고 점검 칸에 표시해요.', toolOptions: { cards: ['결과: 임시정부 수립', '바탕: 무단 통치 10년', '사건: 전국 만세 운동'] }, target: { order: ['바탕: 무단 통치 10년', '사건: 전국 만세 운동', '결과: 임시정부 수립'], selfCheck: ['고리마다 무엇인지 말할 수 있다', '결과를 말할 수 있다'] } },
              { prompt: '함정 카드는 남기고 고리 카드 4장을 차례로 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['결과: 임시정부 수립', '바탕: 무단 통치 10년', '사건: 전국 만세 운동', '계기: 고종 승하·2·8 선언', '결과: 그날 바로 독립'] }, target: { order: ['바탕: 무단 통치 10년', '계기: 고종 승하·2·8 선언', '사건: 전국 만세 운동', '결과: 임시정부 수립'], selfCheck: ['고리마다 무엇인지 말할 수 있다', '바탕과 계기의 차이를 말할 수 있다', '결과가 이후 독립운동과 어떻게 이어졌는지 말할 수 있다', '다른 사건의 고리와 견주어 말할 수 있다'] } }),
            { type: 'choice', prompt: '3·1운동의 원인을 바르게 설명한 것은?', options: ['무단 통치에 대한 분노와 국제 흐름, 여러 계기가 겹쳤다', '고종 황제의 승하 한 가지 때문이다', '나라 밖 사람들이 시켜서 일어났다'], answer: 0, difficulty: 0.2, explain: '큰 사건은 오래 쌓인 바탕과 계기가 겹쳐 일어나요.' },
          ],
        },
        worksheet: {
          title: '3·1운동의 고리',
          items: [
            { type: 'table', prompt: '3·1운동의 고리를 채워요.', columns: ['고리', '내용'], cells: [['바탕', ''], ['계기', ''], ['사건', ''], ['결과', '']], answer: '무단 통치 / 고종 승하·2·8 독립 선언 / 전국 만세 운동 / 임시정부 수립' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
      M('wrap.spirit', {
        title: '선언서 정신을 오늘 장면에 잇기', method: '선언서 정신을 오늘 학교생활에 잇기', tool: 'emotion', minutes: 7,
        levels: { easy: '두 장면을 교사가 소리 내어 읽어 주고, 첫 장면은 교사와 함께 고른다.', base: '학급 회의와 모둠 활동 장면 두 개에서 선언서 정신(자주·평화)에 가까운 선택을 스스로 고른다.', challenge: '두 장면에서 고른 뒤, 그 선택과 가장 가까운 선언서 구절을 고르고 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"\'스스로 주인\'이고 \'질서를 존중\'하자는 선언서의 정신을 오늘 우리 교실에 옮기면 어떤 모습일까요?" 장면마다 고른 선택을 말하게 하고, 선언서 구절과 어떻게 이어지는지 묻는다. "100년 전 일이라 오늘과 상관없다"는 학생에게 "내 의견을 스스로 밝히되 다른 사람을 해치지 않는 방법은 오늘도 필요할까요?"라고 되묻는다. 학생 개인의 생각을 채점하지 않고, 선택의 근거를 말하는 데 집중한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 회의에서 내 의견이 계속 무시되어 화가 난다.', who: '나', feeling: '화남', choices: [
              { id: 'a', text: '근거를 들어 차분히 내 의견을 다시 밝힌다', result: '친구들이 내 의견을 다시 듣는다.' },
              { id: 'b', text: '책상을 치며 소리친다', result: '회의가 멈추고 서로 마음이 상한다.', why: '뜻을 밝히되 질서를 존중하는 방법이 있어요.' },
              { id: 'c', text: '아무 말도 하지 않고 포기한다', result: '내 의견이 회의에 남지 않는다.', why: '스스로 주인이라면 내 뜻을 밝힐 수 있어요.' }] }, prompt: '선언서의 정신(자주·평화)에 가장 가까운 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
              null,
              { prompt: '선언서의 정신에 가까운 선택을 고르세요. 그 선택과 이어지는 구절은 셋째 문항에서 골라요.' }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 발표 주제를 한 친구가 혼자 정해 버리려 한다.', who: '나', feeling: '걱정', choices: [
              { id: 'a', text: '모두의 뜻을 묻고 함께 정하자고 말한다', result: '모둠원 모두가 의견을 낸다.' },
              { id: 'b', text: '그 친구를 다른 친구들과 따돌린다', result: '모둠이 둘로 갈라진다.', why: '다른 사람을 해치는 방법은 선언서의 정신과 멀어요.' }] }, prompt: '모둠 장면에서 자주·평화의 정신에 가까운 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 고른 선택과 가장 가까운 선언서의 구절은?', options: ['일체의 행동은 가장 질서를 존중하여', '외국 군대의 힘을 빌려라', '다른 민족을 미워하라'], answer: 0, difficulty: 0.15, explain: '공약 3장은 질서를 존중하며 뜻을 밝히자고 다짐했어요. 나머지는 선언서에 없는 말이에요.' },
          ],
        },
        worksheet: {
          title: '선언서의 정신, 오늘의 교실',
          items: [
            { type: 'choice', prompt: '선언서의 정신에 가까운 행동에 ○ 해요.', options: ['근거를 들어 차분히 의견을 밝힌다', '화가 나면 물건을 친다', '의견을 말하지 않고 포기한다'], answer: '근거를 들어 차분히 의견을 밝힌다' },
            { type: 'short', prompt: '선언서 구절 하나를 골라, 오늘 학교생활에서 그 정신을 지키는 행동을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 4·19혁명 기념일 — 1960년 학생과 시민의 민주주의 (days.m.april19) ====
  {
    const M = MK('april19');
    const LINE6 = [
      { id: 'e1', text: '대구 학생 2·28 시위(2월)' }, { id: 'e2', text: '3·15 부정 선거(3월)' }, { id: 'e3', text: '마산 김주열 학생 소식(4월 초)' },
      { id: 'e4', text: '4월 19일 대규모 시위' }, { id: 'e5', text: '대학 교수단 시국 선언(4.25)' }, { id: 'e6', text: '대통령 하야 발표(4.26)' },
    ];
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const CHAIN = [
      { id: 'c1', text: '3·15 부정 선거', to: '원인' }, { id: 'c2', text: '오랜 장기 집권에 쌓인 불만', to: '원인' },
      { id: 'p1', text: '대구·마산 학생 시위', to: '전개' }, { id: 'p2', text: '4월 19일 전국 대규모 시위', to: '전개' }, { id: 'p3', text: '대학 교수단 시국 선언', to: '전개' },
      { id: 'r1', text: '대통령 하야', to: '결과' }, { id: 'r2', text: '내각 책임제 개헌', to: '결과' },
      { id: 't1', text: '선거 제도를 없앰' },
    ];
    // 가상 모의 선거 — 3·15 부정 선거의 모습(미리 넣어 둔 표)을 우리 반 선거에 옮겨 본 가상 자료
    const FAIR = [['가 후보(바르게 센 표)', 14], ['나 후보(바르게 센 표)', 16], ['가 후보(미리 넣은 표 더함)', 24]];
    const FAIRC = { type: 'bar', mode: 'read', title: '가상 모의 선거 — 미리 넣어 둔 표 10장이 섞이면', unit: '표', xLabel: '집계', yLabel: '표 수', data: FAIR };

    ALL.push(
      // ---- 도입 ----
      M('intro.photo', {
        title: '1960년 봄 장면으로 질문 만들기', method: '1960년 봄 장면 카드로 질문 만들기', tool: 'story', minutes: 6,
        levels: { easy: '시연 판의 질문 보기 세 장 가운데 가장 궁금한 질문 하나를 고른다.', base: '보기를 본 뒤 내 질문 하나를 새로 만들어 짝에게 말한다.', challenge: '질문 두 개를 만들고, 각 질문을 어디에서 확인할지(교과서·국가보훈부 자료·기록관) 함께 말한다.' },
        intro: {
          teacher: '"교복 입은 학생들이 거리에 나섰어요. 무엇이 가장 궁금한가요?" 1960년 봄 거리에 나선 학생들의 종이 장면을 보이고, 시연 단추로 질문 보기 가운데 하나가 바구니에 담기는 모습을 보인다. 4·19혁명 기념일은 1960년 부정 선거에 맞서 학생과 시민이 민주주의를 지키려 한 일을 기념하는 국가 기념일이라고 알린다. "4월 19일 하루에 끝난 일 아니에요?"라는 말에는 "그 앞에 2월과 3월에는 무슨 일이 있었을까요?"라고 되묻는다.',
          student: '1960년 봄 장면을 보고 궁금한 질문을 골라요. 내 질문을 하나 만들어 짝에게 말하고, 어디에서 확인할지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '확인할 질문', title: '1960년 봄', cards: [
            { id: 'q1', text: '학생들은 왜 거리에 나섰을까?', motif: 'star' }, { id: 'q2', text: '언제부터 시작되었을까?', motif: 'cloud' },
            { id: 'q3', text: '어떤 사람들이 함께했을까?', motif: 'tree' }], shuffle: false }, sequence: [{ pick: ['q1'] }] },
          art: { draw: 'paper-cut students in school uniforms walking together under spring cherry blossoms, holding blank placards, with citizens beside them', banner: '1960년 봄, 무엇이 궁금할까?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '장면은 종이 오림 그림이며 실제 사진이 아니다. 발포·부상 장면은 넣지 않는다.',
      }),
      M('intro.vote', {
        title: '공정한 선거의 조건 짐작 투표', method: '공정한 선거의 가장 중요한 조건 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 조건 보기 네 개를 칠판에 적어 두고, 가장 중요하다고 여기는 것에 손을 들어 투표한다.', base: '투표한 뒤 공정한 선거에 꼭 필요한 조건 세 개를 스스로 말해 본다.', challenge: '조건마다 그 조건이 없으면 어떤 일이 생기는지 까닭을 한 줄씩 말한다.' },
        intro: {
          teacher: '"반장 선거에서 가장 지켜져야 할 것 하나를 고른다면 무엇인가요?" 보기 넷에 손을 든 수를 세어 말한 뒤, 시연 단추로 가상의 우리 반 투표 그림그래프를 읽어 가장 많은 짐작을 고르는 모습을 보인다. "투표만 하면 공정한 거예요"라는 말에는 "누가 미리 표를 넣어 두었다면, 투표를 했으니 공정한 걸까요?"라고 되묻는다. 오늘의 질문은 "1960년 3월의 선거는 무엇을 어겼고, 그 뒤 무슨 일이 이어졌나?"로 정한다.',
          student: '공정한 선거의 가장 중요한 조건 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('공정한 선거의 가장 중요한 조건 짐작(가상의 우리 반 투표)', [['누구에게 찍었는지 비밀', 10], ['한 사람이 한 표', 8], ['내가 직접 투표', 6], ['표를 바르게 세기', 5]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut ballot box on a school desk with small paper figures lined up beside it like a picture graph', banner: '공정한 선거의 조건은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 수치는 가상이다. 실제 투표는 손 들기로 하고 결과를 채점하지 않는다.',
      }),
      M('intro.voice', {
        title: '기록 한 줄 듣고 쓴 사람의 마음', method: '그날의 목소리 기록 한 줄 듣고 감정 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 두 장(걱정·뿌듯함) 가운데 기록과 어울리는 것을 고른다.', base: '시연 판의 마음 카드 네 장 가운데 기록 두 줄에 어울리는 마음을 하나씩 짝 짓는다.', challenge: '마음을 고르고, 기록 속 어느 낱말이 그 마음을 알려 주는지 근거 낱말을 말한다.' },
        intro: {
          teacher: '"이 기록 한 줄을 쓴 사람은 어떤 마음이었을까요?" 수업용으로 지은 가상 고등학생의 일기 두 줄("오늘 친구들과 교문을 나서기 전 손이 떨렸다", "어른들이 우리 뒤를 따라 걸어 주었다")을 읽어 주고, 시연 단추로 마음 카드가 짝 지어지는 모습을 보인다. 이 글은 실제 기록이 아니라 그날의 기록을 읽는 방법을 연습하려고 지은 글이라고 먼저 밝힌다. "기록은 사실만 담는다"는 말에는 "일기에는 사실 말고 무엇이 더 담길까요?"라고 되묻는다.',
          student: '수업용으로 지은 가상 일기 두 줄을 듣고, 쓴 사람의 마음을 골라요. 어느 낱말에서 그 마음을 느꼈는지 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'a', label: '교문을 나서기 전 손이 떨렸다' }, { id: 'b', label: '어른들이 우리 뒤를 따라 걸어 주었다' }], cards: ['걱정', '고마움', '신남', '화남'], shuffle: false }, sequence: [{ match: { a: '걱정' } }, { match: { a: '걱정', b: '고마움' } }] },
          art: { draw: 'a paper-cut open diary with a few handwritten lines and a pressed cherry blossom beside it on a desk', banner: '기록 속 마음을 읽어요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '일기 글은 수업용으로 지은 가상 기록이다. 실제 인물의 말이나 마음으로 소개하지 않는다. 실제 기록을 읽어 주려면 국가보훈부·4·19혁명 기록물 공개 자료에서 교사가 골라 출처와 함께 읽는다.',
      }),

      // ---- 활동 ----
      M('activity.line', {
        title: '2·28에서 4·19까지 시간 띠', method: '2·28에서 4·19까지 시간 띠 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 4장(2·28·3·15·4·19·하야)에 달이 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 6장을 달 없이 차례대로 놓는다.', challenge: '달 없는 6장에 함정 카드 한 장이 섞이고, 교수단 시국 선언이 4·19 뒤에 온 까닭을 짝에게 말한다.' },
        activity: {
          title: '사건 띠', tool: 'timeline',
          teacher: '"부정 선거 다음에 무슨 일이 이어졌나요?" 대통령 하야를 4월 19일 시위보다 앞에 두는 학생에게 "시위가 커진 뒤에 일어난 일일까요, 먼저일까요?"라고 되묻는다. 교수단 시국 선언의 자리를 헷갈리면 4월 19일 뒤에도 시위가 이어졌다는 점을 짚는다. "대학생만 참여했다"는 학생에게는 2월 28일 대구에서 가장 먼저 나선 이들이 고등학생이었다는 점을 짚는다.',
          task: '1960년 2월부터 4월까지 4·19혁명의 사건 카드를 일어난 차례대로 시간 띠에 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('1960년 2월부터 4월 말까지의 사건 6장을 차례대로 놓아 보세요.', NOYEAR(LINE6), { axis: ['1960년 2월', '1960년 4월 말'] }),
              OB('1960년 사건 4장을 차례대로 놓아 보세요(달이 적혀 있어요).', pickCards(LINE6, ['e1', 'e2', 'e4', 'e6']), { axis: ['1960년 2월', '1960년 4월 말'] }),
              OB('사건 6장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(LINE6), { axis: ['1960년 2월', '1960년 4월 말'] }, [{ id: 'x1', text: '6월 10일 국민 대회' }])),
            IT(MB('기념일과 그 날짜를 이어 보세요. 맞지 않는 카드는 남겨요.', [['2월 28일', '2·28민주운동 기념일'], ['3월 15일', '3·15의거 기념일'], ['4월 19일', '4·19혁명 기념일']], ['현충일']),
              MB('기념일과 그 날짜를 이어 보세요.', [['3월 15일', '3·15의거 기념일'], ['4월 19일', '4·19혁명 기념일']], [])),
            IT(OB('4월 19일 뒤의 일을 차례대로 놓아 보세요.', pickCards(LINE6, ['e4', 'e5', 'e6']).map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') })), { axis: ['먼저', '나중'] }),
              OB('4월 19일 뒤의 일 두 장을 차례대로 놓아 보세요.', pickCards(LINE6, ['e5', 'e6']), { axis: ['먼저', '나중'] }),
              null, { conclude: '2·28, 3·15, 4·19는 두 달 넘게 이어진 민주 운동이라 모두 국가 기념일로 기억해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '4·19혁명의 흐름을 정리해요.', columns: ['때', '일어난 일'], cells: [['1960년 2월 28일', ''], ['1960년 3월 15일', ''], ['1960년 4월 19일', '']], answer: '대구 학생들의 시위 / 부정 선거(마산 시위) / 전국의 대규모 시위' }] },
      }),
      M('activity.remember', {
        title: '4·19를 기억하는 까닭 고르기', method: '4·19를 기억하는 까닭 고르기', tool: 'wordcards', minutes: 16,
        levels: { easy: '카드 5장(함정 1장) 가운데 기념하는 까닭을 고르고, 틀린 카드를 넣으면 바로 알려 준다.', base: '카드 7장(함정 2장)에서 까닭을 고르고, 4·19에 관한 문장을 맞음·틀림으로 나눈다.', challenge: '셋째 문항에서 헌법 전문 빈칸을 채운 뒤, 고른 카드로 활동지에 한 문장을 쓴다.' },
        activity: {
          title: '기억 까닭', tool: 'wordcards',
          teacher: '"4·19혁명이 지키려 한 것은 무엇이었을까요?" 시민들이 바란 것이 선거를 없애는 것이 아니라 공정한 선거였다는 점을 짚는다. "그냥 옛날 시위"라는 학생에게 "우리 헌법 전문에 이 사건의 이름이 적혀 있다면, 그 까닭은 무엇일까요?"라고 되묻는다. 오늘의 정치 이야기로 번지면 이 시간은 1960년의 사실과 헌법 전문만 다룬다고 정리한다.',
          task: '4·19혁명을 기념하는 까닭에 맞는 카드를 고르고, 4·19에 관한 문장을 가리고, 헌법 전문의 빈칸을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PB('4·19혁명을 기념하는 까닭에 맞는 카드만 골라 담으세요.', '기념하는 까닭', [
              { id: 'k1', text: '부정 선거에 맞서 민주주의를 지켰다', ok: true }, { id: 'k2', text: '학생과 시민이 함께 뜻을 밝혔다', ok: true },
              { id: 'k3', text: '헌법 전문이 그 이념을 이어 간다', ok: true }, { id: 'k4', text: '공정한 선거의 중요함을 남겼다', ok: true },
              { id: 'k5', text: '모든 선거를 없애자고 했다' }, { id: 'k6', text: '하루 만에 모든 일이 끝났다' }, { id: 'k7', text: '대학생 몇 명만의 일이다' }]),
              PB('기념하는 까닭에 맞는 카드만 골라 담으세요(5장).', '기념하는 까닭', [
                { id: 'k1', text: '부정 선거에 맞서 민주주의를 지켰다', ok: true }, { id: 'k2', text: '학생과 시민이 함께 뜻을 밝혔다', ok: true },
                { id: 'k3', text: '헌법 전문이 그 이념을 이어 간다', ok: true }, { id: 'k4', text: '공정한 선거의 중요함을 남겼다', ok: true }, { id: 'k5', text: '모든 선거를 없애자고 했다' }])),
            IT(SB('4·19혁명에 관한 문장을 맞는 것과 틀린 것으로 나누세요.', ['맞아요', '틀려요'], [
              { id: 'm1', text: '고등학생도 앞장섰다', to: '맞아요' }, { id: 'm2', text: '대학 교수들도 선언에 참여했다', to: '맞아요' },
              { id: 'm3', text: '대학생만 참여했다', to: '틀려요' }, { id: 'm4', text: '4월 19일 하루로 끝났다', to: '틀려요' }])),
            IT(FB('헌법 전문의 빈칸을 채우세요.', [['불의에 ___한 4·19민주이념', '항거'], ['4·19민주이념을 ___하고', '계승']], ['포기']),
              null, null, { conclude: '우리 헌법 전문은 "불의에 항거한 4·19민주이념을 계승"한다고 적고 있어요. 그래서 4·19는 오늘의 민주주의와 이어져 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 고른 까닭 카드 하나로, 4·19혁명을 기념하는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.chain', {
        title: '원인·전개·결과 사슬 나누기', method: '원인에서 결과까지 사슬 잇기', tool: 'sortboard', minutes: 16,
        levels: { easy: '바구니 두 개(원인·결과)에 카드 4장을 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '바구니 세 개(원인·전개·결과)에 카드 8장(함정 1장)을 나눈다.', challenge: '셋째 문항에서 결과가 오늘까지 남긴 것과 남기지 않은 것을 나누고, 활동지에 한 문장으로 쓴다.' },
        activity: {
          title: '원인 사슬', tool: 'sortboard',
          teacher: '"이 카드는 4·19 전의 일일까요, 그 과정일까요, 뒤의 일일까요?" 내각 책임제 개헌을 원인에 두는 학생에게 혁명 뒤 헌법이 바뀌었다는 점을 짚는다. 김주열 학생 소식을 결과에 두는 학생에게는 그 소식이 시위를 전국으로 번지게 한 계기였다고 알린다. 인물을 평가하는 쪽으로 흐르면 교과서 서술 범위의 사실과 인과만 다룬다고 정리한다.',
          task: '4·19혁명의 원인·전개·결과 카드를 바구니에 나누고, 그 결과가 오늘까지 남긴 것을 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 4·19혁명의 원인·전개·결과로 나누세요. 사실이 아닌 카드는 남겨요.', ['원인', '전개', '결과'], CHAIN),
              SB('카드 4장을 4·19혁명의 원인과 결과로 나누세요.', ['원인', '결과'], pickCards(CHAIN, ['c1', 'c2', 'r1', 'r2']))),
            IT(SB('3·15 부정 선거의 모습과 공정한 선거의 모습을 나누세요.', ['부정 선거의 모습', '공정한 선거의 모습'], [
              { id: 'f1', text: '미리 넣어 둔 표', to: '부정 선거의 모습' }, { id: 'f2', text: '여럿이 함께 하는 공개 투표', to: '부정 선거의 모습' },
              { id: 'g1', text: '누구를 찍었는지 비밀', to: '공정한 선거의 모습' }, { id: 'g2', text: '한 사람이 한 표', to: '공정한 선거의 모습' }])),
            IT(SB('4·19혁명이 오늘까지 남긴 것과 남기지 않은 것을 나누세요.', ['오늘까지 남긴 것', '남기지 않은 것'], [
              { id: 'l1', text: '헌법 전문에 적힌 4·19민주이념', to: '오늘까지 남긴 것' }, { id: 'l2', text: '시민이 정부를 바꾼 경험', to: '오늘까지 남긴 것' },
              { id: 'l3', text: '국가 기념일로 기억하기', to: '오늘까지 남긴 것' }, { id: 'l4', text: '선거를 하지 않는 나라', to: '남기지 않은 것' }]),
              null, null, { conclude: '부정 선거와 장기 집권이 원인이 되어 전국 시위로 번졌고, 대통령 하야와 개헌으로 이어졌어요. 그 경험은 헌법 전문에 남았어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '4·19혁명의 사슬을 정리해요.', columns: ['원인', '전개', '결과'], cells: [['', '', '']], answer: '3·15 부정 선거·장기 집권 / 대구·마산 시위, 4·19 전국 시위, 교수단 선언 / 대통령 하야·내각 책임제 개헌' }] },
      }),
      M('activity.fair', {
        title: '가상 모의 선거로 선거 원칙 읽기', method: '선거 원칙과 어긴 방식 잇기 표 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 끝에 표 수가 보이고, 두 원칙(비밀·한 사람 한 표)만 보기로 나온다.', base: '표 수를 막대에서 읽고, 보기 네 원칙(보통·평등·직접·비밀) 가운데 어긴 원칙을 고른다.', challenge: '넷째 문항에서 오늘 공정한 선거를 지키는 장치 하나를 고르고 까닭을 짝에게 말한다.' },
        activity: {
          title: '선거 원칙', tool: 'chart',
          teacher: '"미리 넣어 둔 표 10장이 섞이면 결과는 어떻게 바뀔까요?" 3·15 부정 선거에 미리 넣어 둔 표와 여럿이 함께 하는 공개 투표가 있었다는 교과서 서술을 먼저 소개하고, 그 모습을 가상의 우리 반 모의 선거에 옮긴 그래프를 읽게 한다. "몇 표쯤은 괜찮다"는 학생에게 "이긴 사람이 바뀌었다면, 그 선거 결과를 모두 믿을 수 있을까요?"라고 되묻는다. 그래프는 수업용으로 지은 가상 자료라는 점을 처음에 밝힌다.',
          task: '가상 모의 선거 그래프를 읽고, 미리 넣은 표가 결과를 어떻게 바꾸는지와 어긴 선거 원칙을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 바르게 셌을 때 이긴 후보는 누구인지 그래프에서 고르세요.', toolOptions: Object.assign({}, FAIRC, { question: '바르게 센 표로 이긴 후보는?', choices: ['가 후보', '나 후보', '알 수 없다'] }), target: { pick: 1 } }),
            IT({ prompt: '미리 넣은 표가 섞인 가 후보의 표는 나 후보보다 몇 표 많아졌는지 읽어 쓰세요.', toolOptions: Object.assign({}, FAIRC, { question: '가 후보(미리 넣은 표 더함) − 나 후보 = 몇 표?' }), target: { value: 8 } }),
            IT({ prompt: '미리 넣어 둔 표는 어느 선거 원칙을 어긴 것인지 고르세요.', toolOptions: Object.assign({}, FAIRC, { question: '미리 넣어 둔 표가 어긴 원칙은?', choices: ['보통 선거', '평등 선거(한 사람 한 표)', '직접 선거', '비밀 선거'] }), target: { pick: 1 } },
              { prompt: '미리 넣어 둔 표가 어긴 원칙을 두 보기 가운데 고르세요.', toolOptions: { choices: ['한 사람 한 표', '비밀 선거'] }, target: { pick: 0 } }),
            IT({ prompt: '여럿이 함께 공개 투표를 하게 한 것은 어느 원칙을 어긴 것인지 고르세요.', toolOptions: Object.assign({}, FAIRC, { question: '공개 투표가 어긴 원칙은?', choices: ['보통 선거', '평등 선거', '직접 선거', '비밀 선거'] }), target: { pick: 3 } },
              { prompt: '공개 투표가 어긴 원칙을 두 보기 가운데 고르세요.', toolOptions: { choices: ['한 사람 한 표', '비밀 선거'] }, target: { pick: 1 } },
              { prompt: '오늘 공정한 선거를 지키는 장치로 알맞은 것을 고르세요.', toolOptions: { question: '공정한 선거를 지키는 장치는?', choices: ['투표함·개표를 여러 사람이 지켜보기', '한 사람이 표를 모두 세기', '투표 결과를 비밀로 하기'] }, target: { pick: 0 } },
              { conclude: '미리 넣은 표 몇 장이 이긴 사람을 바꿀 수 있어요. 4·19혁명은 이런 부정에 맞서 공정한 선거를 요구했어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '3·15 부정 선거의 모습과 어긴 원칙을 써요.', columns: ['부정 선거의 모습', '어긴 원칙'], cells: [['미리 넣어 둔 표', ''], ['여럿이 함께 하는 공개 투표', '']], answer: '평등 선거(한 사람 한 표) / 비밀 선거' }] },
      }),
      M('activity.record', {
        title: '기록이 보여 주는 것·보여 주지 않는 것', method: '기록물이 보여 주는 것과 보여 주지 않는 것 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '기록 하나(현장 사진)만 다루고, 문장 틀("이 사진으로 ___을 알 수 있지만 ___은 알 수 없다")을 채워 쓴다.', base: '신문 기사와 학생 일기 두 기록을 견주어 세 문장으로 쓰고 기준표로 점검한다.', challenge: '마지막 글에서 기록을 만든 사람과 목적까지 따져 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '기록 읽기', tool: 'rubric-writing',
          teacher: '"사진 한 장으로 그날 하루를 다 알 수 있을까요?" 4·19혁명 때 학생 선언문·일기, 신문 기사, 사진, 재판 기록 같은 기록물이 남아 있고 2023년 유네스코 세계기록유산에 등재되었다고 알린다. "사진은 무엇이든 다 보여 준다"는 학생에게 "사진 틀 밖에서 일어난 일은 어떻게 알까요?"라고 되묻는다. 회고록을 그때의 기록으로 여기는 학생에게는 시간이 지난 뒤 기억을 되살려 쓴 기록이라는 점을 짚는다.',
          task: '4·19혁명 기록의 종류를 가리고, 기록 하나가 보여 주는 것과 보여 주지 않는 것을 짧은 글로 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('시위 현장 사진 한 장으로 알 수 있는 것과 알 수 없는 것을 한두 문장으로 쓰세요.', { topic: '1960년 4월 시위 현장 사진 한 장으로 알 수 있는 것과 알 수 없는 것을 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '기록 ① 현장 사진' }, ['알 수 있는 것을 썼다', '알 수 없는 것을 썼다', '사진에 없는 내용을 사실처럼 쓰지 않았다'], [['알 수 없']]),
              RW('틀을 채워 사진 한 장으로 알 수 있는 것과 없는 것을 쓰세요.', { topic: '시위 현장 사진 한 장으로 알 수 있는 것과 없는 것을 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '이 사진으로 ___을 알 수 있지만, ___은 알 수 없다.' }, ['알 수 있는 것을 썼다', '알 수 없는 것을 썼다'])),
            IT(RW('그해 4월 신문 기사와 시위에 참여한 학생의 일기가 각각 무엇을 보여 주는지 견주어 쓰세요.', { topic: '1960년 4월 신문 기사(기자가 전한 사건)와 참여한 학생의 일기(쓴 사람의 생각)가 각각 무엇을 보여 주는지 견주어 쓰세요.', min: 30, max: 200, s: [2, 3], title: '기록 ② 신문과 일기' }, ['두 기록을 모두 다루었다', '기록마다 만든 사람을 밝혔다', '서로 다른 점을 썼다'], [['신문', '기사'], ['일기']]),
              RW('틀을 채워 신문 기사와 일기를 견주어 쓰세요.', { topic: '신문 기사와 학생 일기가 보여 주는 것을 견주어 쓰세요.', min: 20, max: 160, s: [1, 2], starter: '신문 기사는 ___을 보여 주고, 일기는 ___을 보여 준다.' }, ['두 기록을 모두 다루었다', '서로 다른 점을 썼다'])),
            IT(RW('기록 하나를 골라, 그 기록이 보여 주는 것과 보여 주지 않는 것을 세 문장으로 쓰세요.', { topic: '4·19혁명 기록 하나(선언문·일기·신문·사진 가운데)를 골라, 보여 주는 것과 보여 주지 않는 것, 그래서 무엇과 견주어야 하는지 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '기록 하나 깊이 읽기' }, ['고른 기록을 밝혔다', '보여 주는 것을 썼다', '보여 주지 않는 것을 썼다', '견주어 볼 다른 기록을 썼다']),
              RW('틀을 채워 기록 하나가 보여 주는 것과 보여 주지 않는 것을 두 문장으로 쓰세요.', { topic: '기록 하나가 보여 주는 것과 보여 주지 않는 것을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '___은 ___을 보여 준다. 하지만 ___은 보여 주지 않는다.' }, ['보여 주는 것을 썼다', '보여 주지 않는 것을 썼다']),
              RW('기록 하나를 골라, 만든 사람과 목적까지 따져 보여 주는 것과 보여 주지 않는 것을 한 문단으로 쓰세요.', { topic: '4·19혁명 기록 하나를 골라, 누가 왜 만들었는지(만든 사람·목적), 그래서 보여 주는 것과 보여 주지 않는 것은 무엇인지, 무엇과 견주어야 하는지 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '만든 사람과 목적까지' }, ['고른 기록을 밝혔다', '만든 사람과 목적을 썼다', '보여 주는 것과 보여 주지 않는 것을 썼다', '견주어 볼 다른 기록을 썼다'], [['만든', '썼다', '남겼다'], ['목적', '까닭', '위해']]),
              { conclude: '기록마다 보여 주는 범위가 달라요. 만든 사람·때·목적을 따지고 여러 기록을 견주어야 그날의 모습이 넓게 보여요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '4·19 기록을 정리해요.', columns: ['기록', '만든 사람', '알 수 있는 것'], cells: [['학생 선언문', '', ''], ['신문 기사', '', ''], ['현장 사진', '', '']], answer: '시위 학생·요구와 뜻 / 기자·보도된 사건 / 사진 기자·시민·그 순간의 모습' },
          { type: 'choice', prompt: '그때 남긴 1차 기록에 해당하는 것은?', options: ['1960년 4월 학생이 쓴 선언문', '수십 년 뒤 쓴 회고록', '오늘 만든 기념관 해설'], answer: '1960년 4월 학생이 쓴 선언문' }] },
      }),

      // ---- 정리 ----
      M('wrap.quiz', {
        title: '2·28에서 4·19까지 흐름 출구 글', method: '2·28에서 4·19까지의 흐름 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 한 칸(4월 19일에 일어난 일)을 채워 한 문장을 쓴다.', base: '문장 틀의 빈칸 두 칸(2월 28일·3월 15일의 일)을 채우고 기준 셋을 점검한다.', challenge: '연도·날짜 없이, 사건의 앞뒤를 잇는 말(그러자·그 뒤)로 흐름을 두 문장에 쓴다.' },
        wrap: {
          teacher: '"2·28, 3·15, 4·19를 한 줄로 이으면 어떤 이야기가 될까요?" 출구 글을 쓰기 전에 시간 띠의 앞뒤를 다시 짚는다. 하야를 시위보다 앞에 쓴 학생에게는 원인(부정 선거)→과정(시위)→결과(하야)로 다시 말하게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('2·28에서 4·19까지의 흐름을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '1960년 2·28에서 4·19까지 어떤 일이 이어졌는지 한두 문장으로 쓰세요.', min: 30, max: 180, s: [1, 2], title: '2·28에서 4·19까지', starter: '대구에서 ___ 학생들이 시위를 벌였고, 3월 15일 ___ 선거에 맞서 4월 19일 전국에서 시위가 일어났다.' }, ['사실(때·한 일)이 정확하다', '핵심 낱말(부정 선거·학생·시민)을 넣었다', '내 말로 썼다'], [['부정']]),
              { prompt: '빈칸 한 칸을 채워 4월 19일의 일을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '1960년 4월 19일, 부정 선거에 맞서 학생과 시민이 ___에서 시위를 벌였다.' }, target: { selfCheck: ['4월 19일에 일어난 일을 썼다', '내 말로 썼다'] } },
              { prompt: '날짜 없이, 앞뒤를 잇는 말로 흐름을 두 문장에 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사건의 차례가 맞다', '핵심 낱말(부정 선거·학생·시민)을 넣었다', '앞뒤를 잇는 말을 썼다', '내 말로 썼다'], mustInclude: [['부정']] } }),
            { type: 'choice', prompt: '4·19혁명에 대한 설명으로 가장 알맞은 것은?', options: ['부정 선거에 맞서 학생과 시민이 민주주의를 지키려 한 혁명', '대학생 몇 명이 하루 동안 벌인 시위', '헌법과는 관계없는 사건'], answer: 0, difficulty: 0.15, explain: '우리 헌법 전문은 "불의에 항거한 4·19민주이념을 계승"한다고 적고 있어요.' },
          ],
        },
        worksheet: {
          title: '2·28에서 4·19까지',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '1960년 3월 15일 ___ 선거에 맞서 학생과 시민이 일어선 일이 ___혁명이다.', answer: '부정, 4·19' },
            { type: 'short', prompt: '2·28에서 4·19까지의 흐름을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.link', {
        title: '4·19가 오늘 남긴 것 짝 짓기', method: '4·19가 오늘 우리에게 남긴 것 짝 짓기', tool: 'emotion', minutes: 7,
        levels: { easy: '오늘 장면 두 개와 4·19가 남긴 가치 카드를 짝 짓는다.', base: '오늘 장면 세 개와 가치 카드를 짝 짓는다(함정 카드 한 장).', challenge: '세 장면을 짝 지은 뒤, 내 생활 장면 하나를 활동지에 더 쓴다.' },
        wrap: {
          teacher: '"우리 학교의 어떤 모습에서 4·19가 남긴 것을 볼 수 있을까요?" 장면마다 고른 가치를 말하게 하고, 그 가치가 1960년의 어느 요구와 이어지는지 묻는다. "옛날 일이라 오늘과 상관없다"는 학생에게 "학생회 선거에서 누구를 찍었는지 비밀이 지켜지는 것은 당연할까요?"라고 되묻는다. 학생 개인의 생각은 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '학생회 선거에서 기표소에 혼자 들어간다' }, { id: 's2', label: '개표를 여러 학생이 함께 지켜본다' }, { id: 's3', label: '부당한 규칙에 근거를 들어 의견을 낸다' }], cards: [{ id: 'v1', text: '비밀 투표' }, { id: 'v2', text: '공정한 개표' }, { id: 'v3', text: '불의에 맞서는 목소리' }, { id: 'v4', text: '어른 말에 무조건 따르기' }] }, prompt: '오늘의 장면과 4·19가 남긴 가치를 짝 지어요.', target: { match: { s1: 'v1', s2: 'v2', s3: 'v3' } }, difficulty: 0.2 },
              { prompt: '오늘의 장면 두 개와 4·19가 남긴 가치를 짝 지어요.', toolOptions: { slots: [{ id: 's1', label: '학생회 선거에서 기표소에 혼자 들어간다' }, { id: 's2', label: '개표를 여러 학생이 함께 지켜본다' }], cards: [{ id: 'v1', text: '비밀 투표' }, { id: 'v2', text: '공정한 개표' }] }, target: { match: { s1: 'v1', s2: 'v2' } } },
              { prompt: '세 장면을 짝 지은 뒤, 내 생활 장면 하나를 활동지에 더 써요.' }),
            { type: 'choice', prompt: '헌법 전문이 4·19에 대해 적은 말로 알맞은 것은?', options: ['불의에 항거한 4·19민주이념을 계승하고', '4·19를 잊고 새로 시작하며', '4·19는 학생만의 일로 하며'], answer: 0, difficulty: 0.15, explain: '헌법 전문은 4·19민주이념을 계승한다고 적고 있어요.' },
          ],
        },
        worksheet: {
          title: '4·19가 남긴 것',
          items: [
            { type: 'choice', prompt: '4·19가 남긴 가치와 가장 가까운 학교 장면에 ○ 해요.', options: ['학생회 선거에서 비밀 투표를 한다', '반장이 혼자 모든 것을 정한다', '투표 결과를 아무도 확인하지 않는다'], answer: '학생회 선거에서 비밀 투표를 한다' },
            { type: 'short', prompt: '내 생활에서 4·19가 남긴 가치를 볼 수 있는 장면 하나를 써요.' },
          ],
        },
      }),
      M('wrap.source', {
        title: '믿을 만한 기록 고르기 스스로 점검', method: '믿을 만한 기록 고르기 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '기록 확인 카드 2장(만든 사람·날짜 확인 → 다른 기록과 견주기)을 차례로 놓고 점검 칸 두 개에 표시한다.', base: '확인 카드 3장을 차례로 놓고, 점검 칸 세 개(단계마다 까닭을 말할 수 있다 등)에 표시한다.', challenge: '확인 카드 3장에 함정 카드가 섞이고, 점검 칸 네 개(다른 사건 기록에도 쓸 수 있다 포함)에 표시한다.' },
        wrap: {
          teacher: '"내일 인터넷에서 4·19 사진 한 장을 본다면, 무엇부터 확인할까요?" 확인 카드를 차례로 놓은 뒤, 점검 칸 가운데 가장 자신 없는 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다. "유명한 사진이니 믿어도 된다"는 학생에게 "유명한 것과 누가 언제 찍었는지 아는 것은 같은 말일까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('믿을 만한 기록을 고르는 확인 카드를 차례로 놓고, 점검 칸에 스스로 표시해요.', '믿을 만한 기록 고르기', ['다른 기록과 견주기', '만든 사람·날짜 확인', '보여 주는 범위 따지기'], ['만든 사람·날짜 확인', '보여 주는 범위 따지기', '다른 기록과 견주기'], ['단계마다 무엇을 하는지 말할 수 있다', '1차 기록과 뒤에 정리한 자료를 구별할 수 있다', '기록 하나로 전체를 단정하지 않는다']),
              { prompt: '확인 카드 2장을 차례로 놓고 점검 칸에 표시해요.', toolOptions: { cards: ['다른 기록과 견주기', '만든 사람·날짜 확인'] }, target: { order: ['만든 사람·날짜 확인', '다른 기록과 견주기'], selfCheck: ['단계마다 무엇을 하는지 말할 수 있다', '기록 하나로 전체를 단정하지 않는다'] } },
              { prompt: '함정 카드는 남기고 확인 카드 3장을 차례로 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['다른 기록과 견주기', '만든 사람·날짜 확인', '보여 주는 범위 따지기', '조회수 많은 것 고르기'] }, target: { order: ['만든 사람·날짜 확인', '보여 주는 범위 따지기', '다른 기록과 견주기'], selfCheck: ['단계마다 무엇을 하는지 말할 수 있다', '1차 기록과 뒤에 정리한 자료를 구별할 수 있다', '기록 하나로 전체를 단정하지 않는다', '다른 사건의 기록에도 이 방법을 쓸 수 있다'] } }),
            { type: 'choice', prompt: '4·19 기록을 믿을 만하게 읽는 방법은?', options: ['만든 사람·날짜를 확인하고 다른 기록과 견준다', '한 장만 보고 결론을 낸다', '마음에 드는 기록만 고른다'], answer: 0, difficulty: 0.15, explain: '기록마다 보여 주는 범위가 달라 여러 기록을 견주어야 해요.' },
          ],
        },
        worksheet: {
          title: '믿을 만한 기록 고르기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '기록을 읽을 때는 ___과 날짜를 확인하고, 다른 기록과 ___어 본다.', answer: '만든 사람, 견주' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 과학의 날 — 탐구와 과학의 정직 (days.m.science) ====
  {
    const M = MK('science');
    const STEPS6 = [
      { id: 'p1', text: '궁금한 점(문제) 찾기' }, { id: 'p2', text: '가설 세우기' }, { id: 'p3', text: '실험 계획 세우기' },
      { id: 'p4', text: '실험·관찰로 자료 모으기' }, { id: 'p5', text: '자료 해석하기' }, { id: 'p6', text: '결론 내리고 알리기' },
    ];
    const CLAIM = [
      { id: 'y1', text: '세 번 되풀이한 실험에서 같은 결과가 나왔다', to: '근거 있음' }, { id: 'y2', text: '측정 자료와 실험 방법을 함께 공개했다', to: '근거 있음' },
      { id: 'y3', text: '다른 연구팀이 같은 방법으로 다시 확인했다', to: '근거 있음' }, { id: 'n1', text: '유명인이 방송에서 그렇다고 말했다', to: '근거 없음' },
      { id: 'n2', text: '조회수가 100만이 넘은 영상에 나왔다', to: '근거 없음' }, { id: 'n3', text: '"누가 그러는데"라며 단톡방에 돌았다', to: '근거 없음' },
    ];
    // 가상 설문(수업용으로 지어낸 자료)
    const TECH = [['정보 찾기 쉬움', 34], ['연락이 빨라짐', 27], ['잠이 줄어듦', 18], ['가짜 정보 접함', 13], ['눈이 피로함', 8]];
    const TG = (q, choices, more) => Object.assign({ type: 'bar', mode: 'read', title: '스마트폰이 가져온 변화(가상 설문 100명)', unit: '명', xLabel: '응답', yLabel: '응답 수', data: TECH, question: q }, choices ? { choices } : {}, more);
    // 가상 인물 갈림길 — 가상의 중학생 '윤'
    const D1 = { text: '가상의 중학생 윤이 "이 음료를 마시면 일주일 만에 기억력이 두 배"라는 영상을 받았다. 출처와 실험 자료는 보이지 않는다.', ask: '윤은 어떻게 할까?', motif: 'house', choices: [
      { id: 'check', text: '나누기 전에 누가 어떤 실험으로 밝힌 것인지 찾아본다', result: '연구 기관 이름도, 실험 방법도 찾을 수 없다.', impact: [{ who: '윤', text: '근거가 없다는 것을 안다', tone: 1 }], end: '나누기 전에 근거를 찾아보았어요.',
        next: { text: '친구가 "그래도 재미있잖아, 일단 올려"라고 한다.', ask: '윤은 어떻게 할까?', choices: [
          { id: 'hold', text: '근거를 못 찾았으니 올리지 않고 그 까닭을 말한다', result: '친구도 영상을 다시 본다.', impact: [{ who: '반 친구들', text: '근거 없는 정보를 받지 않는다', tone: 1 }], end: '올리지 않고 까닭을 나누었어요.',
            next: { text: '며칠 뒤 다른 친구가 같은 영상을 믿고 그 음료를 사려 한다.', ask: '윤은 무엇을 할까?', choices: [
              { id: 'tell', text: '찾아본 내용과 확인할 곳(공공 기관·연구 자료)을 알려 준다', result: '친구가 스스로 확인해 보기로 한다.', impact: [{ who: '친구', text: '근거를 따져 보고 고른다', tone: 1 }] },
              { id: 'laugh', text: '"그걸 믿냐"며 비웃는다', result: '친구가 창피해하고 말을 듣지 않는다.', impact: [{ who: '친구', text: '마음이 상하고 확인하지 않는다', tone: -1 }], why: '사람을 비웃기보다 근거를 함께 보여 주는 편이 도움이 돼요.' }] } },
          { id: 'post', text: '재미로 단체방에 올린다', result: '여러 사람이 사실인 줄 알고 다시 퍼뜨린다.', impact: [{ who: '반 친구들', text: '근거 없는 정보를 믿는다', tone: -1 }], why: '근거를 못 찾은 정보는 재미로라도 퍼뜨리면 사실처럼 번져요.' }] } },
      { id: 'share', text: '신기해서 바로 단체방에 보낸다', result: '친구 몇 명이 음료를 사겠다고 한다.', impact: [{ who: '친구들', text: '근거 없이 돈을 쓴다', tone: -1 }], why: '출처와 실험 자료가 없는 주장은 나누기 전에 확인해요.', ending: '확인하지 않고 퍼뜨렸어요.' }] };
    const R1 = [{ id: 'r1', text: '과학적 주장은 실험 자료로 확인해야 한다' }, { id: 'r2', text: '나눈 정보는 다른 사람의 선택에 영향을 준다' },
      { id: 'r3', text: '많이 본 영상이면 사실이다', why: '조회수는 실험 근거가 아니에요.' }, { id: 'r4', text: '재미있으면 사실인지는 상관없다', why: '재미로 나눈 정보도 사실처럼 퍼져요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '확인할 곳을 알려 주면 스스로 따져 볼 수 있다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.q', {
        title: '"왜 4월 21일일까" 짐작하기', method: '"왜 4월 21일일까" 짐작하고 확인하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 두 장(과학기술처 출범·과학자 생일)만 읽어 주고 하나를 고른다.', base: '시연 판의 보기 네 장을 보기 전에 가장 그럴듯한 유래를 먼저 짐작해 말한다.', challenge: '유래(나라의 과학기술 행정 기관 출범)와 오늘 과학의 날이 뜻하는 것을 이어 한 문장으로 말한다.' },
        intro: {
          teacher: '"4월 21일은 왜 과학의 날이 되었을까요? 보기 넷 가운데 하나를 골라 보세요." 짐작을 들은 뒤 시연 단추로 \'1967년 과학기술처 출범\' 카드가 담기는 모습을 보인다. 과학의 날은 1967년 4월 21일 과학기술처가 문을 연 것을 기념한 법정기념일이며 공휴일은 아니라고 알린다. "유명한 과학자 생일 아니에요?"라는 말에는 "한 사람을 기념한 날일까요, 나라가 과학기술을 키우기 시작한 날일까요?"라고 되묻고, 오늘은 과학자처럼 근거를 따지는 법을 익힌다고 밝힌다.',
          student: '과학의 날이 4월 21일인 까닭을 보기 넷 가운데에서 짐작해 골라요. 왜 그렇게 생각했는지 짝에게 한 줄로 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '과학의 날 유래', cards: [{ id: 'a', text: '1967년 과학기술처 출범' }, { id: 'b', text: '어느 과학자의 생일' }, { id: 'c', text: '첫 인공위성 발사일' }, { id: 'd', text: '발명 특허 첫 등록일' }], shuffle: false }, sequence: [{ pick: ['a'] }] },
          art: { draw: 'a paper-cut calendar page showing April 21 beside a microscope, a paper rocket and floating gears', banner: '왜 4월 21일일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.twoface', {
        title: '스마트폰의 좋은 점과 걱정 투표', method: '스마트폰이 가져온 좋은 점과 걱정 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 보기 네 장(좋은 점 둘·걱정 둘)을 칠판에 적어 두고 손을 들어 투표한다.', base: '투표한 뒤 좋은 점과 걱정을 스스로 두 가지씩 더 떠올려 말한다.', challenge: '가장 많이 나온 짐작을 확인할 근거 자료(설문·연구 보고서 등)를 하나씩 떠올려 말한다.' },
        intro: {
          teacher: '"스마트폰이 우리 생활에 가져온 가장 큰 변화는 무엇일까요? 네 보기 가운데 하나에 손을 들어 보세요." 손든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "과학기술은 무조건 좋아요" 또는 "무조건 나빠요"라는 말에는 "같은 스마트폰이 어떤 사람에게는 도움, 어떤 사람에게는 걱정이 되는 까닭은 무엇일까요?"라고 되묻는다. 오늘의 질문은 "과학기술의 두 얼굴을 무엇으로 판단할까?"로 정한다.',
          student: '스마트폰이 가져온 변화 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 따져 볼 질문을 정해요.',
          demo: VOTE('스마트폰이 가져온 가장 큰 변화 짐작(가상의 우리 반 투표)', [['정보를 빨리 찾음', 10], ['연락이 쉬워짐', 8], ['쓰는 시간이 늘어남', 6], ['가짜 정보가 퍼짐', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut balance scale with a glowing smartphone and an open book on one side and a tangled paper cord on the other', banner: '과학기술의 두 얼굴', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 투표 결과를 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.notebook', {
        title: '실험 노트 두 장 견주기', method: '실험 노트 두 장 견주기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 노트 가운데 날짜 칸 하나를 짚어 주고, 다른 곳 하나를 함께 찾는다.', base: '시연 판에서 두 노트의 다른 곳 두 가지(날짜·조건)가 담기는 것을 보며 스스로 먼저 찾아 말한다.', challenge: '다른 곳마다 그것이 없으면 다른 사람이 실험을 다시 할 때 무엇이 어려운지 말한다.' },
        intro: {
          teacher: '"두 실험 노트 가운데 다른 사람이 똑같이 다시 실험할 수 있는 노트는 어느 쪽일까요?" 날짜·물의 양·빛 조건이 적힌 가상 노트와 결과 숫자 하나만 적힌 노트를 나란히 보이고, 시연 단추로 첫 노트에만 있는 것이 담기는 모습을 보인다. "결과만 맞으면 되잖아요"라는 말에는 "언제, 어떤 조건에서 나온 결과인지 모르면 그 숫자를 믿을 수 있을까요?"라고 되묻는다. 과학의 날에 과학이 기록과 다시 확인으로 자란다는 것을 짚는다.',
          student: '가상의 실험 노트 두 장을 견주어, 첫 노트에만 있는 것을 찾아요. 그것이 왜 필요한지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '첫 노트에만 있는 것', title: '실험 노트 두 장', cards: [
            { id: 'n1', text: '실험한 날짜', motif: 'sun' }, { id: 'n2', text: '물의 양·빛 같은 조건', motif: 'leaf' },
            { id: 'n3', text: '잰 값 그대로', motif: 'star' }, { id: 'n4', text: '예쁜 그림 장식', motif: 'flower' }], shuffle: false }, sequence: [{ pick: ['n1'] }, { pick: ['n1', 'n2'] }] },
          art: { draw: 'two paper-cut lab notebooks side by side, one filled with dated entries and small charts, the other almost blank with a single number', banner: '무엇이 다를까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '노트는 수업용 가상 자료다.',
      }),

      // ---- 활동 ----
      M('activity.steps', {
        title: '과학적 탐구 과정 차례 놓기', method: '과학적 탐구 과정 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '탐구 단계 카드 4장(문제·가설·실험·결론)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '탐구 단계 카드 6장을 차례대로 놓고, 가상 실험 장면 카드도 차례로 놓는다.', challenge: '6장에 함정 카드("결론을 먼저 정하기")가 섞이고, 셋째 문항에서 한 단계를 빼면 생길 일까지 고른다.' },
        activity: {
          title: '탐구 과정 차례 놓기', tool: 'timeline',
          teacher: '"가설은 실험 전에 세울까요, 뒤에 세울까요?" 카드를 놓을 때마다 앞 단계가 없으면 다음 단계를 할 수 있는지 묻는다. 결론을 실험보다 앞에 두는 학생에게 "결론을 먼저 정하면 실험은 무엇을 위한 것이 될까요?"라고 되묻는다. 결과를 알리는 단계를 빼려는 학생에게는 다른 사람이 다시 확인할 수 있어야 과학적 결과가 된다는 점을 짚는다.',
          task: '과학적 탐구 단계 카드를 차례대로 시간 띠에 놓고, 가상 실험 장면도 탐구 차례에 맞게 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('과학적 탐구의 단계를 차례대로 놓아 보세요.', STEPS6, { axis: ['먼저', '나중'] }),
              OB('탐구의 큰 단계 네 장을 차례대로 놓아 보세요.', pickCards(STEPS6, ['p1', 'p2', 'p4', 'p6']), { axis: ['먼저', '나중'] }),
              OB('탐구 단계 여섯 장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', STEPS6, { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '결론을 먼저 정하기' }])),
            IT(OB('"빛이 있어야 식물이 잘 자랄까?"를 알아보는 가상 실험 장면을 차례대로 놓아 보세요.', [
              { id: 'q1', text: '빛을 뺀 조건이 같은 두 화분 준비' }, { id: 'q2', text: '한 화분만 상자로 빛 가리기' }, { id: 'q3', text: '일주일 동안 날마다 키 재어 적기' }, { id: 'q4', text: '기록한 키를 견주어 결론 쓰기' }], { axis: ['먼저', '나중'] }),
              OB('가상 실험 장면 세 장을 차례대로 놓아 보세요.', [{ id: 'q1', text: '빛을 뺀 조건이 같은 두 화분 준비' }, { id: 'q3', text: '일주일 동안 날마다 키 재어 적기' }, { id: 'q4', text: '기록한 키를 견주어 결론 쓰기' }], { axis: ['먼저', '나중'] })),
            IT(PB('실험 계획 단계를 건너뛰면 생길 수 있는 일만 골라 담으세요.', '계획을 빼면 생길 일', [
              { id: 'k1', text: '조건이 섞여 무엇 때문인지 모른다', ok: true }, { id: 'k2', text: '다른 사람이 똑같이 다시 할 수 없다', ok: true },
              { id: 'k3', text: '결과가 언제나 더 정확해진다' }, { id: 'k4', text: '가설이 저절로 맞게 된다' }], { axis: ['먼저', '나중'] }),
              null, null, { conclude: '탐구는 문제에서 결론까지 단계를 거치고, 결과를 알려 다른 사람이 다시 확인할 수 있을 때 믿을 만한 지식이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '과학적 탐구의 차례를 정리해요.', columns: ['차례', '하는 일'], cells: [['1', '궁금한 점 찾기'], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', '']], answer: '가설 세우기 / 실험 계획 / 실험·관찰 / 자료 해석 / 결론·알리기' }] },
      }),
      M('activity.claim', {
        title: '근거 있는 주장과 없는 주장', method: '근거 있는 주장과 없는 주장 가리기', tool: 'sortboard', minutes: 16,
        levels: { easy: '문장 카드 4장을 근거 있음·없음 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '문장 카드 6장을 나누고, 둘째 문항에서 과학 소식 문장을 사실 확인 자료와 짝 지어 나눈다.', challenge: '셋째 문항에서 근거를 보태면 과학적 주장이 될 수 있는 말과 근거로 바뀌지 않는 말(취향·의견)을 가른다.' },
        activity: {
          title: '근거 있는 주장 가리기', tool: 'sortboard',
          teacher: '"이 말은 무엇으로 확인했다고 하나요?" 카드를 넣을 때마다 누가 말했는지가 아니라 무엇으로 확인했는지를 말하게 한다. "유명한 사람이 말하면 믿을 만하다"는 학생에게 "그 사람이 실험 자료를 보여 주었나요?"라고 되묻는다. 퍼진 정보는 다 맞다고 여기는 학생에게는 조회수와 실험 근거는 다르다는 점을 짚는다.',
          task: '과학 소식 문장을 근거 있음·근거 없음 바구니에 나누고, 근거를 보태면 달라질 문장을 찾아요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('과학 소식 문장을 근거 있음·근거 없음으로 나누세요.', ['근거 있음', '근거 없음'], CLAIM),
              SB('문장 카드 4장을 근거 있음·근거 없음으로 나누세요.', ['근거 있음', '근거 없음'], pickCards(CLAIM, ['y1', 'y2', 'n1', 'n2']))),
            IT(SB('과학 소식을 확인할 때 믿을 만한 곳과 믿기 어려운 곳으로 나누세요.', ['믿을 만한 곳', '믿기 어려운 곳'], [
              { id: 'w1', text: '실험 방법이 실린 연구 논문', to: '믿을 만한 곳' }, { id: 'w2', text: '공공 연구 기관의 발표 자료', to: '믿을 만한 곳' },
              { id: 'w3', text: '출처 없는 짧은 영상', to: '믿기 어려운 곳' }, { id: 'w4', text: '물건을 파는 쪽의 광고', to: '믿기 어려운 곳' }]),
              null, null),
            IT(SB('근거를 보태면 과학적 주장이 될 수 있는 말과 근거로 판정할 수 없는 말로 나누세요.', ['근거로 따질 수 있는 말', '취향·의견인 말'], [
              { id: 'g1', text: '이 비료를 주면 콩이 더 빨리 자란다', to: '근거로 따질 수 있는 말' }, { id: 'g2', text: '소금물은 맹물보다 늦게 언다', to: '근거로 따질 수 있는 말' },
              { id: 'g3', text: '파란색이 가장 예쁜 색이다', to: '취향·의견인 말' }, { id: 'g4', text: '과학 시간이 제일 재미있다', to: '취향·의견인 말' }]),
              null, null, { conclude: '과학적 주장은 누가 말했는지가 아니라 실험·관찰 자료로 확인했는지로 따져요. 퍼진 횟수는 근거가 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '근거 없는 문장 하나를 골라, 어떤 근거를 보태야 과학적 주장이 될 수 있는지 한 문장으로 써요.' }] },
      }),
      M('activity.graph', {
        title: '기술 이용 가상 자료 그래프 읽기', method: '기술 이용 자료 그래프 읽고 결과 두 갈래 정리', tool: 'chart', minutes: 16,
        levels: { easy: '막대 3개만 보이고 막대 끝에 값이 보인다.', base: '막대 5개를 읽고 좋은 결과와 걱정되는 결과를 가른다.', challenge: '넷째 문항에서 이 그래프로 말할 수 없는 것(가상 자료·스스로 답한 설문)을 고른다.' },
        activity: {
          title: '가상 자료 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 무엇을 쟀을까요?" 처음에 이 자료는 수업용으로 지어낸 가상 설문이라고 밝힌다. 막대를 읽을 때마다 그 결과가 좋은 쪽인지 걱정되는 쪽인지 말하게 한다. "응답이 많으면 더 중요한 결과"라는 학생에게 "적은 수가 답한 \'가짜 정보 접함\'은 덜 중요한 문제일까요?"라고 되묻는다.',
          task: '가상 설문 막대그래프를 읽고, 스마트폰이 가져온 좋은 결과와 걱정되는 결과를 정리해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '응답이 가장 많은 변화를 고르세요.', toolOptions: TG('응답이 가장 많은 변화는?', TECH.map((d) => d[0])), target: { pick: 0 } },
              { prompt: '막대 3개 가운데 응답이 가장 많은 변화를 고르세요.', toolOptions: { data: TECH.slice(0, 3), choices: TECH.slice(0, 3).map((d) => d[0]) } }),
            IT({ prompt: '\'정보 찾기 쉬움\'은 \'잠이 줄어듦\'보다 응답이 몇 명 많은지 읽어 쓰세요.', toolOptions: TG('몇 명 많은가요?'), target: { value: 16 } },
              { prompt: '\'정보 찾기 쉬움\'은 \'잠이 줄어듦\'보다 몇 명 많은지 읽어 쓰세요.', toolOptions: { data: TECH.slice(0, 3) } }),
            IT({ prompt: '다음 가운데 걱정되는 결과(새 문제)에 들어가는 응답을 고르세요.', toolOptions: TG('새 문제에 들어가는 응답은?', ['정보 찾기 쉬움', '연락이 빨라짐', '가짜 정보 접함']), target: { pick: 2 } },
              { prompt: '다음 가운데 걱정되는 결과에 들어가는 응답을 고르세요.', toolOptions: { data: TECH.slice(0, 3), question: '새 문제에 들어가는 응답은?', choices: ['정보 찾기 쉬움', '연락이 빨라짐', '잠이 줄어듦'] } }),
            IT({ prompt: '좋은 결과 응답(정보·연락)을 모두 더하면 몇 명인지 읽어 쓰세요.', toolOptions: TG('좋은 결과 응답은 모두 몇 명?'), target: { value: 61 } },
              { prompt: '좋은 결과 응답(정보·연락)을 모두 더하면 몇 명인지 읽어 쓰세요.', toolOptions: { data: TECH.slice(0, 3) } },
              { prompt: '이 그래프만으로는 말할 수 없는 것을 고르세요.', toolOptions: TG('이 가상 설문으로 말할 수 없는 것은?', ['응답이 많은 변화의 차례', '스마트폰이 실제로 기억력을 떨어뜨린다는 것', '\'눈이 피로함\' 응답 수']), target: { pick: 1 } },
              { conclude: '같은 기술도 좋은 결과와 새 문제를 함께 가져와요. 설문 그래프는 사람들이 답한 것을 보여 줄 뿐, 원인까지 증명하지는 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프의 응답을 두 갈래로 정리해요.', columns: ['좋은 결과', '걱정되는 결과'], cells: [['', ''], ['', '']], answer: '정보 찾기 쉬움·연락이 빨라짐 / 잠이 줄어듦·가짜 정보 접함·눈이 피로함' }] },
      }),
      M('activity.share', {
        title: '과학 소식 나누기 전 갈림길', method: '과학 소식 나누기 전 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길에서 한 번 골라 결과를 본다.', base: '갈림길 두 번을 끝까지 가 보고, 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '나누기 전 갈림길', tool: 'dilemma',
          teacher: '"확인하지 않은 과학 소식을 나누면 누구에게 어떤 영향이 갈까요?" 가상 학생 윤의 길을 끝까지 따라간 뒤 되돌아가 다른 길과 견주게 한다. "재미로 올린 건데 괜찮잖아요"라는 학생에게 "받은 사람도 재미로만 읽을까요, 사실로 믿을까요?"라고 되묻는다. 친구를 비웃는 길도 함께 보며, 바로잡을 때도 근거를 보여 주는 방법을 짚는다.',
          task: '확인 안 된 과학 소식을 받은 가상 학생 윤의 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '근거 없는 영상을 받은 윤이 먼저 할 일을 한 번 골라 결과를 보세요.', base: '윤의 갈림길 두 번을 끝까지 가 보고, 내 선택의 근거를 고르세요.', challenge: '윤의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '확인 안 된 과학 소식', D1, [['check', 'hold', 'tell']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            IT({ prompt: '"새로운 연구에 따르면"으로 시작하는 기사를 받았어요. 가장 먼저 할 일을 골라 끝까지 가 보세요.', toolOptions: { title: '"새로운 연구에 따르면"', scene: { text: '"새로운 연구에 따르면 초콜릿이 시험 점수를 올린다"는 기사가 왔다. 연구한 곳은 적혀 있지 않다.', ask: '먼저 무엇을 할까?', motif: 'house', choices: [
              { id: 'who', text: '어느 연구 기관이 어떤 방법으로 연구했는지 찾는다', result: '연구한 곳과 방법을 확인할 수 있는지 알게 된다.', impact: [{ who: '나', text: '근거를 따져 본다', tone: 1 }], ending: '연구한 곳과 방법부터 찾았어요.' },
              { id: 'title', text: '제목만 보고 친구들에게 알린다', result: '친구들이 제목을 사실로 기억한다.', impact: [{ who: '친구들', text: '확인 안 된 말을 믿는다', tone: -1 }], why: '제목만으로는 연구 방법을 알 수 없어요.', ending: '제목만 보고 알렸어요.' },
              { id: 'buy', text: '시험 전날 초콜릿을 잔뜩 산다', result: '근거를 모른 채 돈을 쓴다.', impact: [{ who: '나', text: '확인 없이 돈을 쓴다', tone: -1 }], why: '근거를 확인하기 전에 행동부터 하지 않아요.', ending: '확인 없이 행동했어요.' }] }, reasons: [] }, target: { path: [['who']] } }),
            IT({ prompt: '단체방에 내가 올린 과학 소식이 틀렸다는 것을 알았어요. 어떻게 할지 골라 끝까지 가 보세요.', toolOptions: { title: '틀린 소식을 올렸다면', scene: { text: '어제 단체방에 올린 과학 소식이 근거 없는 내용이었다는 것을 알았다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'fix', text: '틀렸다고 알리고 확인한 자료를 함께 올린다', result: '친구들이 바로잡힌 내용을 본다.', impact: [{ who: '반 친구들', text: '바른 정보를 다시 받는다', tone: 1 }], ending: '틀린 것을 바로잡았어요.' },
              { id: 'quiet', text: '창피하니 모른 척한다', result: '틀린 소식이 그대로 남아 퍼진다.', impact: [{ who: '반 친구들', text: '틀린 정보를 계속 믿는다', tone: -1 }], why: '틀린 것을 바로잡는 것도 과학의 정직이에요.', ending: '틀린 소식이 남았어요.' }] }, reasons: [{ id: 'q1', text: '틀렸음을 인정하고 고치는 것이 과학의 태도다' }, { id: 'q2', text: '한번 올린 것은 고치지 않아도 된다', why: '고치지 않으면 틀린 정보가 계속 퍼져요.' }] }, target: { path: [['fix']], reasons: ['q1'] } },
              null, null, { conclude: '과학 소식은 나누기 전에 누가 어떤 방법으로 확인했는지 보고, 틀렸다면 인정하고 바로잡아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '확인 안 된 과학 소식을 받았을 때 가장 먼저 할 일은?', options: ['조회수를 본다', '누가 어떤 실험으로 밝혔는지 찾아본다', '바로 친구에게 보낸다'], answer: '누가 어떤 실험으로 밝혔는지 찾아본다' }] },
      }),
      M('activity.honest', {
        title: '연구 기록이 흔들리는 순간 글쓰기', method: '연구 기록이 흔들리는 순간 글쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '가상 사례 세 개에 위조·변조·표절 이름을 붙이는 글은 낱말 풀이를 보며 쓰고, 기록 방법 글은 두 문장 틀로 쓴다.', base: '사례에 이름을 붙이고, 실험값이 기대와 다를 때의 기록 방법을 세 문장 이상으로 쓴 뒤 기준표로 점검한다.', challenge: '마지막 글에서 연구 윤리를 지켜야 하는 까닭(다시 확인·신뢰·다른 사람에게 미치는 영향)까지 한 문단으로 쓴다.' },
        activity: {
          title: '기록이 흔들리는 순간', tool: 'rubric-writing',
          teacher: '"위조와 변조는 어떻게 다를까요?" 없는 자료를 지어내면 위조, 있는 자료를 바꾸거나 빼면 변조, 남의 것을 출처 없이 쓰면 표절이라고 먼저 함께 정리한다. "조금 고치는 것은 괜찮다"는 학생에게 "그 숫자를 믿고 다음 실험을 한 사람은 어떻게 될까요?"라고 되묻는다. 사례는 모두 지어낸 가상 사례이며, 실제 사람이나 연구를 가리키지 않는다고 처음에 밝힌다.',
          task: '가상 사례에 위조·변조·표절 이름을 붙이고, 실험값이 기대와 다를 때 어떻게 기록할지 글로 쓴 뒤 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('가상 사례 셋에 알맞은 이름(위조·변조·표절)을 붙여 쓰세요: ㉠ 재지 않은 값을 지어 채움 ㉡ 튀는 값을 몰래 지움 ㉢ 남의 그래프를 출처 없이 씀', { topic: '가상 사례 ㉠ 재지 않은 값을 지어 채움, ㉡ 튀는 값을 몰래 지움, ㉢ 남의 그래프를 출처 없이 씀 — 각각 무엇인지 쓰세요.', min: 15, max: 140, s: [1, 3], title: '사례에 이름 붙이기' }, ['세 사례에 모두 이름을 붙였다', '위조와 변조를 바르게 구별했다', '사례를 실제 사람과 잇지 않았다'], [['위조'], ['변조'], ['표절']]),
              RW('낱말 풀이(위조=없는 것을 지어냄, 변조=있는 것을 바꾸거나 뺌, 표절=출처 없이 가져옴)를 보며 사례 셋에 이름을 붙이세요.', { topic: '㉠ 재지 않은 값 채우기 ㉡ 튀는 값 몰래 지우기 ㉢ 남의 그래프 출처 없이 쓰기에 이름을 붙이세요.', min: 10, max: 120, s: [1, 3], starter: '㉠은 ___, ㉡은 ___, ㉢은 ___이다.' }, ['세 사례에 모두 이름을 붙였다', '낱말 풀이를 보고 맞춰 보았다'], [['위조'], ['변조'], ['표절']])),
            IT(RW('가상의 모둠 실험에서 측정값 하나가 예상과 크게 달라요. 어떻게 기록할지 세 문장 이상으로 쓰세요.', { topic: '모둠 실험에서 측정값 하나가 예상과 크게 다를 때, 그 값을 어떻게 기록하고 무엇을 함께 적을지 세 문장 이상으로 쓰세요.', min: 50, max: 240, s: [3, 5], title: '예상과 다른 값의 기록' }, ['값을 지우거나 바꾸지 않고 그대로 적었다', '다시 재거나 까닭을 찾는 방법을 썼다', '함께 적을 것(날짜·조건·까닭)을 썼다'], [['그대로'], ['까닭', '이유', '다시']]),
              RW('틀을 채워 예상과 다른 값을 기록하는 방법을 두 문장으로 쓰세요.', { topic: '예상과 다른 측정값을 어떻게 기록할지 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], starter: '예상과 다른 값도 ___ 적는다. 그리고 ___ 다시 재어 보고 까닭을 함께 적는다.' }, ['값을 지우거나 바꾸지 않았다', '다시 확인하는 방법을 썼다'], [['그대로']])),
            IT(RW('보고서에 인터넷에서 찾은 그래프를 쓰고 싶어요. 정직하게 쓰는 방법을 두 문장으로 쓰세요.', { topic: '보고서에 다른 사람이 만든 그래프를 넣고 싶을 때, 표절이 되지 않게 쓰는 방법을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '남의 자료 정직하게 쓰기' }, ['출처를 밝히는 방법을 썼다', '숫자를 바꾸지 않는다고 썼다', '왜 그래야 하는지 썼다'], [['출처']]),
              null,
              RW('연구 기록을 정직하게 남겨야 하는 까닭을 다시 확인·신뢰·다른 사람에게 미치는 영향을 넣어 한 문단으로 쓰세요.', { topic: '연구 기록을 정직하게 남겨야 하는 까닭을 다시 확인할 수 있음, 믿음(신뢰), 그 결과를 쓰는 다른 사람에게 미치는 영향을 넣어 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '연구 윤리의 까닭' }, ['다시 확인할 수 있어야 한다는 점을 썼다', '신뢰가 무너지는 문제를 썼다', '결과를 쓰는 다른 사람에게 미치는 영향을 썼다', '위조·변조·표절 가운데 하나를 예로 들었다'], [['확인'], ['신뢰', '믿']]),
              { conclude: '과학의 기록은 예상과 다른 값과 빈칸까지 그대로 남기고, 남의 자료는 출처를 밝힐 때 다른 사람이 다시 확인하고 믿을 수 있어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '연구 부정행위를 정리해요.', columns: ['이름', '뜻'], cells: [['위조', ''], ['변조', ''], ['표절', '']], answer: '없는 자료를 지어냄 / 있는 자료를 바꾸거나 뺌 / 남의 것을 출처 없이 씀' },
          { type: 'choice', prompt: '재지 못한 마지막 측정값을 정직하게 기록한 것은?', options: ['앞의 값과 비슷하게 채운다', '"측정하지 못함"이라고 쓰고 까닭을 적는다', '그 칸을 지운다'], answer: '"측정하지 못함"이라고 쓰고 까닭을 적는다' },
        ] },
      }),

      // ---- 정리 ----
      M('wrap.exit', {
        title: '탐구 단계 하나와 그 까닭 출구 글', method: '탐구 단계 하나와 그 까닭 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(단계 이름)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(단계 이름·까닭)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이, 과학 시간에 해 본 실험 하나에 대어 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"오늘 놓은 탐구 단계 가운데 가장 빼먹기 쉬운 단계는 무엇이고, 왜 꼭 필요할까요?" 출구 글을 쓰기 전에 시간 띠를 한 번 다시 읽는다. 가설과 결론을 같은 것으로 쓰는 학생에게 "가설은 실험 전의 짐작, 결론은 자료를 본 뒤의 판단"이라는 차이를 짚는다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('탐구 단계 하나를 골라 그 단계가 필요한 까닭을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '과학적 탐구 단계 하나를 골라 그 단계가 꼭 필요한 까닭을 한두 문장으로 쓰세요.', min: 20, max: 160, s: [1, 2], title: '탐구 단계 하나와 그 까닭', starter: '___ 단계가 필요한 까닭은 ___ 때문이다.' }, ['단계 이름이 정확하다', '핵심 낱말(가설·실험·자료·결론 가운데 하나)을 넣었다', '내 말로 썼다'], [['가설', '실험', '자료', '결론', '문제', '계획']]),
              { prompt: '빈칸 하나를 채워 탐구 단계 하나를 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '___ 단계가 있어야 다른 사람이 실험을 다시 할 수 있다.' }, target: { selfCheck: ['단계 이름이 정확하다', '내 말로 썼다'] } },
              { prompt: '틀 없이, 내가 해 본 실험 하나에 대어 탐구 단계와 까닭을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['단계 이름이 정확하다', '핵심 낱말(가설·실험·자료·결론 가운데 하나)을 넣었다', '내 말로 썼다', '내가 해 본 실험에 대어 썼다'], mustInclude: [['가설', '실험', '자료', '결론', '문제', '계획']] } }),
            { type: 'choice', prompt: '과학의 날에 대한 설명으로 알맞은 것은?', options: ['1967년 4월 21일 과학기술처 출범을 기념하는 법정기념일', '유명한 과학자의 생일을 기념하는 공휴일', '첫 로켓을 쏘아 올린 날'], answer: 0, difficulty: 0.15, explain: '과학의 날은 1967년 과학기술처가 문을 연 4월 21일을 기념해 정한 법정기념일이에요.' },
          ],
        },
        worksheet: {
          title: '탐구 단계와 그 까닭',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '과학의 날은 ___월 ___일로, 과학기술처 출범을 기념한다.', answer: '4, 21' },
            { type: 'short', prompt: '탐구 단계 하나와 그 단계가 필요한 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.rule', {
        title: '과학 소식 나누기 전 나의 규칙', method: '과학 소식 나누기 전 나의 규칙', tool: 'mindmap', minutes: 7,
        levels: { easy: '확인 규칙 두 개를 그 까닭 카드와 잇는다.', base: '확인 규칙 세 개를 그 까닭 카드와 잇는다.', challenge: '함정 까닭 카드 두 장이 섞인 판에서 세 규칙을 잇고, 나만의 규칙 두 개를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘부터 과학 소식을 나누기 전에 지킬 나만의 규칙 하나를 정한다면 무엇일까요?" 규칙 가지에 까닭 카드를 이은 뒤, 가장 지키기 어려울 것 같은 규칙과 그 까닭을 말하게 한다. "확인은 너무 귀찮다"는 학생에게 "10초 동안 출처만 봐도 걸러지는 소식이 얼마나 될까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나누기 전 확인 규칙', slots: [{ id: 'a', label: '누가 만든 정보인지 본다' }, { id: 'b', label: '실험·자료가 있는지 본다' }, { id: 'c', label: '다른 곳에서도 확인한다' }], cards: [
              { id: 'k1', text: '출처를 믿을 수 있는지 안다' }, { id: 'k2', text: '주장의 근거를 따질 수 있다' }, { id: 'k3', text: '한 곳의 실수를 걸러 낸다' }] },
              prompt: '확인 규칙과 그 규칙이 필요한 까닭을 이어요.', target: { match: { a: 'k1', b: 'k2', c: 'k3' } }, difficulty: 0.2 },
              { prompt: '확인 규칙 두 개와 그 까닭을 이어요.', toolOptions: { slots: [{ id: 'a', label: '누가 만든 정보인지 본다' }, { id: 'b', label: '실험·자료가 있는지 본다' }], cards: [{ id: 'k1', text: '출처를 믿을 수 있는지 안다' }, { id: 'k2', text: '주장의 근거를 따질 수 있다' }] }, target: { match: { a: 'k1', b: 'k2' } } },
              { prompt: '맞지 않는 까닭 카드는 남기고 세 규칙과 까닭을 이어요.', toolOptions: { cards: [
                { id: 'k1', text: '출처를 믿을 수 있는지 안다' }, { id: 'k2', text: '주장의 근거를 따질 수 있다' }, { id: 'k3', text: '한 곳의 실수를 걸러 낸다' },
                { id: 't1', text: '조회수를 늘릴 수 있다' }, { id: 't2', text: '빨리 퍼뜨릴 수 있다' }] } }),
            { type: 'choice', prompt: '과학 소식을 나누기 전 규칙으로 가장 알맞지 않은 것은?', options: ['출처를 확인한다', '실험 자료가 있는지 본다', '많이 퍼졌으면 바로 믿는다'], answer: 2, difficulty: 0.15, explain: '퍼진 정도는 근거가 아니에요.' },
          ],
        },
        worksheet: {
          title: '나누기 전 나의 규칙',
          items: [
            { type: 'short', prompt: '과학 소식을 나누기 전에 지킬 나만의 규칙 하나와 그 까닭을 써요.' },
            { type: 'check', prompt: '내가 지킬 규칙에 표시해요.', options: ['누가 만든 정보인지 본다', '실험·자료가 있는지 본다', '다른 곳에서도 확인한다'] },
          ],
        },
      }),
      M('wrap.pledge', {
        title: '정직한 기록 다짐 점검', method: '정직한 기록 다짐 점검', tool: 'timer', minutes: 7,
        levels: { easy: '기록 차례 카드 3장을 놓고 점검 칸 3개에 표시한다.', base: '기록 차례 카드 3장을 놓고 점검 칸 5개에 표시한다.', challenge: '점검 칸 5개에 \'다음 실험 날짜를 정해 활동지에 적었다\'가 더해지고, 활동지에 지킬 날짜를 적는다.' },
        wrap: {
          teacher: '"다음 과학 실험에서 내 노트에 무엇을 꼭 남길까요?" 기록 차례 카드를 놓은 뒤 점검 칸에 스스로 표시하게 하고, 표시하지 못한 칸 하나를 활동지에 다음에 할 일로 적게 한다. "실패한 결과는 적을 필요가 없다"는 학생에게 "예상과 다른 값이 새 발견일 수도 있지 않을까요?"라고 되묻는다. 점검표는 스스로 다짐하는 것이며 점수로 매기지 않는다.',
          exitTicket: [
            IT(SELF('실험 기록 차례 카드를 놓고, 정직한 기록 다짐 칸에 스스로 표시해요.', '정직한 기록 다짐', ['잰 값을 그대로 적기', '빠진 값은 까닭과 함께 적기', '날짜와 조건부터 적기'], ['날짜와 조건부터 적기', '잰 값을 그대로 적기', '빠진 값은 까닭과 함께 적기'], ['잰 값을 바꾸지 않고 적겠다', '예상과 다른 값도 지우지 않겠다', '남의 자료는 출처를 밝히겠다', '모르는 것은 모른다고 쓰겠다', '틀린 것을 알면 바로잡겠다']),
              { prompt: '기록 차례 카드를 놓고 다짐 칸 세 개에 표시해요.', target: { order: ['날짜와 조건부터 적기', '잰 값을 그대로 적기', '빠진 값은 까닭과 함께 적기'], selfCheck: ['잰 값을 바꾸지 않고 적겠다', '예상과 다른 값도 지우지 않겠다', '남의 자료는 출처를 밝히겠다'] } },
              { prompt: '기록 차례 카드를 놓고 다짐 칸에 표시한 뒤, 다음 실험 날짜를 활동지에 적어요.', target: { order: ['날짜와 조건부터 적기', '잰 값을 그대로 적기', '빠진 값은 까닭과 함께 적기'], selfCheck: ['잰 값을 바꾸지 않고 적겠다', '예상과 다른 값도 지우지 않겠다', '남의 자료는 출처를 밝히겠다', '모르는 것은 모른다고 쓰겠다', '틀린 것을 알면 바로잡겠다', '다음 실험 날짜를 정해 활동지에 적었다'] } }),
            { type: 'choice', prompt: '튀는 측정값을 정직하게 다루는 방법은?', options: ['몰래 지운다', '그대로 적고 다시 재어 본 뒤 까닭을 함께 적는다', '예상한 값으로 바꾼다'], answer: 1, difficulty: 0.15, explain: '값을 뺄 때도 까닭을 남겨야 다른 사람이 확인할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '정직한 기록 다짐',
          items: [
            { type: 'check', prompt: '내가 지킬 다짐에 표시해요.', options: ['잰 값을 그대로 적기', '예상과 다른 값도 남기기', '남의 자료는 출처 밝히기'] },
            { type: 'short', prompt: '표시하지 못한 다짐 하나와, 그것을 지킬 다음 실험 날짜를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 지구의 날 — 기후 위기의 원인과 대응 (days.m.earth) ====
  {
    const M = MK('earth');
    const CA = [
      { id: 'c1', text: '석탄·석유 같은 화석 연료 태우기', to: '원인' }, { id: 'c2', text: '숲을 베어 내 땅 넓히기', to: '원인' },
      { id: 'c3', text: '가까운 길도 늘 자동차로 가기', to: '원인' }, { id: 'c4', text: '먹지 않고 버리는 음식 쓰레기', to: '원인' },
      { id: 'a1', text: '태양광·풍력 같은 재생 에너지 늘리기', to: '대응' }, { id: 'a2', text: '숲 가꾸기', to: '대응' },
      { id: 'a3', text: '걷기·대중교통 이용하기', to: '대응' }, { id: 't1', text: '여름에는 늘 비가 온다' },
    ];
    const CHAIN6 = [
      { id: 'h1', text: '화석 연료를 태움' }, { id: 'h2', text: '대기 중 온실가스 증가' }, { id: 'h3', text: '온실 효과가 강해짐' },
      { id: 'h4', text: '지구 평균 기온 상승' }, { id: 'h5', text: '폭염·집중 호우가 잦아짐' }, { id: 'h6', text: '건강·농사 같은 생활 피해' },
    ];
    // 가상 자료(수업용) — 실제 관측값이 아니다
    const TEMP = [['1980년대', 12.1], ['1990년대', 12.4], ['2000년대', 12.7], ['2010년대', 13.0], ['2020년대', 13.4]];
    const TL = (q, choices, more) => Object.assign({ type: 'line', mode: 'read', title: '가상 도시의 연평균 기온(가상 자료)', unit: '°C', xLabel: '시기', yLabel: '연평균 기온', from: 11, data: TEMP, question: q }, choices ? { choices } : {}, more);
    // 생활 속 갈림길 — 가상의 중학생 '하늘'
    const D1 = { text: '가상의 중학생 하늘의 집에서 학교까지는 걸어서 15분이다. 맑은 아침, 보호자가 "차로 데려다줄까?"라고 묻는다.', ask: '하늘은 어떻게 할까?', motif: 'house', choices: [
      { id: 'walk', text: '친구와 걸어가겠다고 한다', result: '자동차 연료를 쓰지 않고 학교에 닿는다.', impact: [{ who: '지구', text: '온실가스 배출이 줄어든다', tone: 1 }], end: '걸어서 학교에 갔어요.',
        next: { text: '급식 시간, 좋아하지 않는 반찬이 많이 담겼다.', ask: '하늘은 어떻게 할까?', choices: [
          { id: 'less', text: '다음부터 먹을 만큼만 받겠다고 말하고 오늘은 남기지 않으려 애쓴다', result: '버려지는 음식이 줄어든다.', impact: [{ who: '지구', text: '음식 쓰레기 처리에서 나오는 온실가스가 준다', tone: 1 }], end: '먹을 만큼 받기로 했어요.',
            next: { text: '모두 체육관으로 가는데 빈 교실에 전등과 냉방기가 켜져 있다.', ask: '하늘은 어떻게 할까?', choices: [
              { id: 'off', text: '마지막에 나가는 사람이 끄자고 반 약속을 제안한다', result: '빈 교실의 전기가 아껴진다.', impact: [{ who: '우리 반', text: '함께 지킬 약속이 생긴다', tone: 1 }] },
              { id: 'leave', text: '"나 하나쯤이야" 하고 그냥 나간다', result: '한 시간 동안 빈 교실에 전기가 쓰인다.', impact: [{ who: '지구', text: '쓰지 않는 전기가 낭비된다', tone: -1 }], why: '모두가 같은 생각을 하면 큰 낭비가 돼요.' }] } },
          { id: 'throw', text: '손대지 않고 그대로 버린다', result: '음식 쓰레기가 늘어난다.', impact: [{ who: '지구', text: '버려진 음식이 썩으며 온실가스가 나온다', tone: -1 }], why: '먹을 만큼만 받으면 버리는 음식을 줄일 수 있어요.' }] } },
      { id: 'car', text: '편하니까 차를 탄다', result: '짧은 거리에도 자동차 연료를 쓴다.', impact: [{ who: '지구', text: '온실가스가 나온다', tone: -1 }], why: '가까운 거리는 걷기만 해도 온실가스를 줄여요.', ending: '짧은 거리에 차를 탔어요.' }] };
    const R1 = [{ id: 'r1', text: '작은 선택이 모이면 온실가스 배출이 달라진다' }, { id: 'r2', text: '반 약속처럼 함께 바꾸면 효과가 커진다' },
      { id: 'r3', text: '나 하나 바꿔 봐야 아무 의미 없다', why: '한 사람의 선택이 모이고 제도와 이어질 때 달라져요.' }, { id: 'r4', text: '개인만 바꾸면 기후 위기는 모두 해결된다', why: '개인 실천과 함께 학교·나라의 제도도 바뀌어야 해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '버리는 음식과 낭비되는 전기도 온실가스와 이어진다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.start', {
        title: '1970년 지구의 날 시작 이야기', method: '1970년 지구의 날 시작 이야기 듣기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 두 장(환경 걱정·시민 행사)을 먼저 읽어 주고 차례를 함께 놓는다.', base: '시연 판의 장면 세 장이 놓이는 차례를 보기 전에 스스로 차례를 짐작해 말한다.', challenge: '시민들이 이 날을 시작한 까닭을 한 줄로 짝에게 말한다.' },
        intro: {
          teacher: '"지구의 날은 나라가 정한 날일까요, 시민이 시작한 날일까요?" 종이 장면 세 장(오염을 걱정하는 사람들, 1970년 4월 22일 미국의 시민 행사, 세계로 퍼진 지구의 날)을 보이고 시연 단추로 차례대로 놓이는 모습을 보인다. 지구의 날은 법정기념일이 아니라 1970년 시민 행사에서 시작해 세계로 퍼진 날이라고 알린다. "불 한 번 끈다고 뭐가 달라져요?"라는 말에는 "시민 한 사람 한 사람이 모인 행사가 세계로 퍼진 까닭은 무엇일까요?"라고 되묻는다.',
          student: '지구의 날이 시작된 이야기 장면 세 장을 차례대로 짐작해 보고, 시민들이 왜 이 날을 시작했을지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'order', title: '지구의 날의 시작', slots: ['처음', '가운데', '끝'], cards: [
            { id: 'p1', text: '환경 오염을 걱정하는 사람들', motif: 'cloud' }, { id: 'p2', text: '1970년 4월 22일 시민 행사', motif: 'star' },
            { id: 'p3', text: '세계 여러 나라로 퍼진 지구의 날', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['p1'] }, { order: ['p1', 'p2'] }, { order: ['p1', 'p2', 'p3'] }] },
          art: { draw: 'a paper-cut globe wrapped in green leaves with crowds of small paper people holding blank signs around it', banner: '지구의 날은 어떻게 시작됐을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M('intro.chainq', {
        title: '"폭염은 왜 잦아질까" 짐작 투표', method: '폭염의 원인 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 칠판에 적어 두고 손을 들어 투표한다.', base: '투표한 뒤 폭염의 원인 짐작을 스스로 두 가지 더 떠올려 말한다.', challenge: '가장 많은 짐작을 무엇으로 확인할 수 있을지(기상청 기후 자료 등) 말한다.' },
        intro: {
          teacher: '"여름 폭염이 잦아지는 까닭은 무엇일까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "그냥 올해 운이 나빠서요"라는 말에는 "한 해의 날씨와 여러 해 쌓인 기후는 같은 것일까요?"라고 되묻는다. 오늘의 질문은 "온실가스와 폭염은 어떤 고리로 이어질까?"로 정한다.',
          student: '폭염이 잦아지는 까닭 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('폭염이 잦아지는 까닭 짐작(가상의 우리 반 투표)', [['온실가스가 늘어서', 12], ['도시에 건물이 많아서', 7], ['한 해 날씨가 나빠서', 5], ['숲이 줄어서', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut city under a big orange sun with heat waves and small paper figures standing in a picture graph line', banner: '폭염은 왜 잦아질까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 투표 결과를 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.graphq', {
        title: '가상 기온 그래프 첫인상', method: '기온 그래프 첫인상 말하기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 보기 두 개(오르고 있다·내리고 있다)만 읽어 주고 고른다.', base: '시연 판의 보기 네 개 가운데 그래프에서 바로 읽히는 것을 먼저 골라 말한다.', challenge: '첫인상 가운데 그래프의 사실과 내 느낌을 나누어 말한다.' },
        intro: {
          teacher: '"이 그래프를 보고 가장 먼저 눈에 띄는 점은 무엇인가요?" 처음에 이 그래프는 수업용으로 지어낸 가상 도시의 가상 자료라고 밝힌다. 시연 단추로 \'시기가 지날수록 오르고 있다\'를 고르는 모습을 보인다. "곧 모든 게 끝나요"라는 말에는 "그건 그래프에 적혀 있는 것일까요, 내가 느낀 것일까요?"라고 되묻는다. 그래프 눈금이 11°C에서 시작한다는 점(물결선)도 함께 짚는다.',
          student: '가상의 기온 그래프를 보고 눈에 띄는 점을 골라요. 그것이 그래프에 적힌 사실인지 내 느낌인지 짝에게 말해요.',
          demo: { tool: 'chart', options: TL('그래프에서 바로 읽히는 것은?', ['시기가 지날수록 기온이 오르고 있다', '이제는 아무것도 할 수 없다', '1980년대가 가장 덥다', '기온이 해마다 똑같다']), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut line graph climbing like a red ribbon over a small paper city, with a magnifying glass made of paper', banner: '그래프가 말하는 것은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '기온 자료는 가상이다. 실제 관측 자료는 기상청 기후 정보에서 따로 보여 줄 수 있다.',
      }),

      // ---- 활동 ----
      M('activity.cause', {
        title: '원인과 대응 행동 카드 나누기', method: '원인과 대응 행동 카드 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 6장(원인 3·대응 3)을 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 8장(함정 1장)을 원인·대응으로 나누고, 대응을 개인·학교와 사회로 다시 나눈다.', challenge: '셋째 문항에서 기후 변화의 원인과 결과 카드를 가르고, 개인 실천과 제도가 어떻게 이어지는지 짝에게 말한다.' },
        activity: {
          title: '원인과 대응 나누기', tool: 'sortboard',
          teacher: '"이 카드는 온실가스를 늘릴까요, 줄일까요?" 숲 가꾸기를 원인에 두는 학생에게 나무가 이산화탄소를 흡수한다는 점을 짚는다. 개인 실천만 고르는 학생에게 "학교와 나라가 하는 일은 어느 바구니에 들어갈까요?"라고 되묻는다. "개인 실천은 의미 없다"와 "개인 실천만으로 충분하다"는 두 생각을 모두 꺼내 견주게 한다.',
          task: '기후 위기의 원인과 대응 카드를 바구니에 나누고, 대응을 개인 실천과 학교·사회의 일로 다시 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 기후 위기의 원인과 대응으로 나누세요. 맞지 않는 카드는 남겨요.', ['원인', '대응'], CA),
              SB('카드 6장을 기후 위기의 원인과 대응으로 나누세요.', ['원인', '대응'], pickCards(CA, ['c1', 'c2', 'c3', 'a1', 'a2', 'a3']))),
            IT(SB('대응 카드를 개인 실천과 학교·사회의 일로 나누세요.', ['개인 실천', '학교·사회의 일'], [
              { id: 'd1', text: '가까운 길 걸어 다니기', to: '개인 실천' }, { id: 'd2', text: '먹을 만큼만 급식 받기', to: '개인 실천' },
              { id: 'd3', text: '학교 지붕에 태양광 설치', to: '학교·사회의 일' }, { id: 'd4', text: '대중교통 노선 늘리기', to: '학교·사회의 일' }]),
              null, null),
            IT(SB('카드를 기후 변화의 원인과 결과로 나누세요.', ['원인', '결과'], [
              { id: 'e1', text: '온실가스 배출 증가', to: '원인' }, { id: 'e2', text: '숲이 줄어듦', to: '원인' },
              { id: 'e3', text: '폭염이 잦아짐', to: '결과' }, { id: 'e4', text: '해수면 상승', to: '결과' }]),
              null, null, { conclude: '기후 위기는 개인 실천과 학교·나라의 제도가 함께 바뀔 때 대응할 수 있어요. 한쪽만으로 충분하지도, 한쪽이 의미 없지도 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인과 그것을 줄이는 대응을 짝 지어 써요.', columns: ['원인', '대응'], cells: [['화석 연료 태우기', ''], ['숲 베어 내기', ''], ['가까운 길 차로 가기', '']], answer: '재생 에너지 늘리기 / 숲 가꾸기 / 걷기·대중교통' }] },
      }),
      M('activity.life', {
        title: '생활 속 선택의 결과 따라가기', method: '생활 속 선택의 결과 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 장면(등굣길)에서 한 번 고르고, 둘째 문항에서 한 번 더 골라 모두 두 번 고른다.', base: '등굣길·급식 갈림길 두 번을 끝까지 가 보고 근거 카드를 고른다(셋째 문항까지 모두 세 번).', challenge: '등굣길·급식·전기 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '생활 속 선택 따라가기', tool: 'dilemma',
          teacher: '"서른 명이 모두 같은 선택을 한다면 결과는 어떻게 달라질까요?" 가상 학생 하늘의 길을 끝까지 따라간 뒤 되돌아가 다른 길과 견주게 한다. "나 하나쯤은 괜찮다"는 학생에게 "우리 반 서른 명이 모두 \'나 하나쯤\'이라고 하면요?"라고 되묻는다. 반 약속처럼 함께 바꾸는 길이 혼자 하는 실천과 어떻게 다른지도 짚는다.',
          task: '가상 학생 하늘의 등굣길·급식·전기 사용 장면에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '하늘의 등굣길 장면에서 한 번 골라 결과를 보세요.', base: '하늘의 갈림길 두 번(등굣길·급식)을 끝까지 가 보고 근거를 고르세요.', challenge: '하늘의 갈림길 세 번(등굣길·급식·전기)을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '하늘의 하루', D1, [['walk', 'less', 'off']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            IT({ prompt: '주말 가족 나들이 장면이에요. 기후를 생각한 선택을 골라 끝까지 가 보세요.', toolOptions: { title: '주말 나들이', scene: { text: '주말에 버스로 30분 걸리는 공원에 가기로 했다. 물병을 챙길지 편의점에서 생수를 살지 정해야 한다.', ask: '어떻게 할까?', motif: 'tree', choices: [
              { id: 'bottle', text: '집에서 물병을 챙기고 버스를 탄다', result: '일회용 병과 자동차 연료를 쓰지 않는다.', impact: [{ who: '지구', text: '쓰레기와 배출이 줄어든다', tone: 1 }], ending: '물병을 챙겨 버스로 갔어요.' },
              { id: 'buy', text: '가는 길마다 생수를 사 마신다', result: '일회용 병 쓰레기가 늘어난다.', impact: [{ who: '지구', text: '쓰레기가 늘어난다', tone: -1 }], why: '다시 쓰는 물병이 쓰레기를 줄여요.', ending: '일회용 병이 늘었어요.' }] }, reasons: [] }, target: { path: [['bottle']] } }),
            IT({ prompt: '반에서 기후 약속을 정해요. 가장 오래 지킬 수 있는 약속을 골라 끝까지 가 보세요.', toolOptions: { title: '우리 반 기후 약속', scene: { text: '학급 회의에서 지구의 날 약속을 하나 정하기로 했다.', ask: '어떤 약속을 낼까?', motif: 'house', choices: [
              { id: 'small', text: '빈 교실 전등 끄기 당번을 돌아가며 맡는다', result: '모두가 돌아가며 지킬 수 있는 약속이 된다.', impact: [{ who: '우리 반', text: '함께 오래 지킨다', tone: 1 }], ending: '모두 지킬 수 있는 약속을 정했어요.' },
              { id: 'huge', text: '한 달 동안 전기를 하나도 쓰지 않는다', result: '하루 만에 지키지 못하고 약속이 흐지부지된다.', impact: [{ who: '우리 반', text: '약속을 믿지 않게 된다', tone: -1 }], why: '지킬 수 있는 약속이 오래 이어져요.', ending: '지킬 수 없는 약속이었어요.' }] }, reasons: [{ id: 'q1', text: '모두 지킬 수 있는 약속이 오래 이어진다' }, { id: 'q2', text: '클수록 좋은 약속이다', why: '지키지 못하면 아무것도 바뀌지 않아요.' }] }, target: { path: [['small']], reasons: ['q1'] } },
              null, null, { conclude: '작은 선택이 모이고 반 약속처럼 함께 바꿀 때 온실가스를 줄이는 힘이 커져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하늘의 갈림길 가운데 하나를 골라, 그 선택을 우리 반 모두가 했을 때 생길 결과를 한 문장으로 써요.' }] },
      }),
      M('activity.chain', {
        title: '기후 변화 원인→결과 사슬 놓기', method: '기후 변화 원인→결과 사슬 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '고리 카드 4장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '고리 카드 6장을 원인에서 결과의 차례로 놓고, 바닷가 마을의 사슬도 놓는다.', challenge: '셋째 문항에서 사슬의 고리 하나를 끊는 방법 카드를 고른다(함정 카드가 섞인다).' },
        activity: {
          title: '원인→결과 사슬', tool: 'timeline',
          teacher: '"온실가스가 늘면 다음에는 무슨 일이 생길까요?" 카드를 놓을 때마다 앞 카드와 "그래서"로 이어 읽게 한다. 기온 상승을 온실가스 증가보다 앞에 두는 학생에게 원인부터 다시 말하게 한다. 해수면이 오르는 까닭을 모르는 학생에게는 빙하가 녹고 바닷물이 데워져 부피가 늘어난다는 점을 알린다.',
          task: '기후 변화의 원인에서 생활 피해까지 고리 카드를 차례대로 놓고, 사슬을 끊는 방법을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('기후 변화의 사슬을 원인에서 결과의 차례로 놓아 보세요.', CHAIN6, { axis: ['원인', '결과'] }),
              OB('기후 변화의 고리 네 장을 차례로 놓아 보세요.', pickCards(CHAIN6, ['h1', 'h2', 'h4', 'h5']), { axis: ['원인', '결과'] })),
            IT(OB('바닷가 마을에 생기는 일을 차례대로 놓아 보세요.', [{ id: 'b1', text: '지구 평균 기온 상승' }, { id: 'b2', text: '빙하가 녹고 바닷물 부피 증가' }, { id: 'b3', text: '해수면 상승' }, { id: 'b4', text: '바닷가 땅 침수 위험' }], { axis: ['원인', '결과'] }),
              OB('바닷가 마을에 생기는 일 세 장을 차례대로 놓아 보세요.', [{ id: 'b1', text: '지구 평균 기온 상승' }, { id: 'b3', text: '해수면 상승' }, { id: 'b4', text: '바닷가 땅 침수 위험' }], { axis: ['원인', '결과'] })),
            IT(PB('"화석 연료를 태움 → 온실가스 증가" 고리를 끊는 방법만 골라 담으세요.', '고리를 끊는 방법', [
              { id: 'k1', text: '재생 에너지로 전기 만들기', ok: true }, { id: 'k2', text: '걷기·대중교통 이용하기', ok: true },
              { id: 'k3', text: '에어컨을 더 세게 틀기' }, { id: 'k4', text: '쓰레기를 더 많이 태우기' }], { axis: ['원인', '결과'] }),
              null, null, { conclude: '기후 변화는 화석 연료 사용에서 생활 피해까지 고리로 이어져요. 앞쪽 고리를 끊을수록 뒤쪽 피해가 줄어들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '사슬의 빈칸을 채워요.', text: '화석 연료 사용 → ___ 증가 → 지구 평균 기온 상승 → ___ 잦아짐', answer: '온실가스, 폭염(집중 호우)' }] },
      }),
      M('activity.mitig', {
        title: '완화와 적응 대응 나누기', method: '완화와 적응 대응 나누기', tool: 'wordcards', minutes: 16,
        levels: { easy: '대응 카드 4장을 완화(줄이기)·적응(대비하기)으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '대응 카드 6장을 나누고, 기후 변화의 결과와 알맞은 대비를 잇는다.', challenge: '셋째 문항에서 완화와 적응 둘 다에 도움이 되는 대응을 골라 그 까닭을 짝에게 말한다.' },
        activity: {
          title: '완화와 적응 나누기', tool: 'wordcards',
          teacher: '"이 대응은 원인을 줄일까요, 이미 온 변화에 대비할까요?" 제방 보강을 완화로 두는 학생에게 "제방은 온실가스를 줄이나요, 높아진 바다에 대비하나요?"라고 되묻는다. "줄이기만 하면 대비는 필요 없다"는 학생에게 이미 시작된 변화에 대비하는 적응도 필요하다는 점을 짚는다. 둘 다 필요하다는 데로 이끈다.',
          task: '기후 변화 대응 카드를 완화(줄이기)와 적응(대비하기)으로 나누고, 결과와 알맞은 대비를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('대응 카드를 완화(줄이기)와 적응(대비하기)으로 나누세요.', ['완화(줄이기)', '적응(대비하기)'], [
              { id: 'm1', text: '재생 에너지 늘리기', to: '완화(줄이기)' }, { id: 'm2', text: '건물 에너지 아끼기', to: '완화(줄이기)' }, { id: 'm3', text: '대중교통 늘리기', to: '완화(줄이기)' },
              { id: 'p1', text: '바닷가 제방 보강', to: '적응(대비하기)' }, { id: 'p2', text: '폭염 경보 알림', to: '적응(대비하기)' }, { id: 'p3', text: '무더위 쉼터 운영', to: '적응(대비하기)' }]),
              SB('대응 카드 4장을 완화와 적응으로 나누세요.', ['완화(줄이기)', '적응(대비하기)'], [
                { id: 'm1', text: '재생 에너지 늘리기', to: '완화(줄이기)' }, { id: 'm3', text: '대중교통 늘리기', to: '완화(줄이기)' },
                { id: 'p1', text: '바닷가 제방 보강', to: '적응(대비하기)' }, { id: 'p2', text: '폭염 경보 알림', to: '적응(대비하기)' }])),
            IT(MB('기후 변화의 결과와 알맞은 대비(적응)를 이어 보세요. 맞지 않는 카드는 남겨요.', [['폭염이 잦아짐', '무더위 쉼터 운영'], ['집중 호우', '빗물을 모아 두는 시설'], ['해수면 상승', '바닷가 제방 보강']], ['난방 더 늘리기']),
              MB('기후 변화의 결과와 알맞은 대비를 이어 보세요.', [['폭염이 잦아짐', '무더위 쉼터 운영'], ['해수면 상승', '바닷가 제방 보강']], [])),
            IT(PB('완화(줄이기)와 적응(대비하기) 둘 다에 도움이 되는 대응을 골라 담으세요.', '둘 다에 도움', [
              { id: 'b1', text: '도시에 나무를 심어 숲 가꾸기', ok: true }, { id: 'b2', text: '바닷가 제방 보강' }, { id: 'b3', text: '폭염 경보 알림' }]),
              null, null, { conclude: '원인을 줄이는 완화와 피해에 대비하는 적응이 함께 있어야 해요. 도시 숲처럼 두 쪽에 다 도움이 되는 대응도 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '원인을 줄이는 대응을 ___, 피해에 대비하는 대응을 ___이라고 한다.', answer: '완화, 적응' }] },
      }),
      M('activity.data', {
        title: '기후 자료의 사실과 해석 가려 쓰기', method: '기후 자료의 사실과 해석 가려 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '가상 자료 문장 네 개 가운데 사실 문장을 골라 옮겨 쓰고, 해설 글은 두 문장 틀로 쓴다.', base: '사실과 해석을 가려 쓰고, 파리 협정의 목표를 넣은 해설 글을 세 문장으로 써서 기준표로 점검한다.', challenge: '마지막 글에서 같은 자료를 두고 해석이 다를 수 있는 까닭까지 한 문단으로 쓴다.' },
        activity: {
          title: '사실과 해석 가려 쓰기', tool: 'rubric-writing',
          teacher: '"이 문장은 자료에서 바로 읽히나요, 누군가의 판단인가요?" 가상 도시 기온 자료의 문장을 함께 읽고 사실과 해석을 먼저 말로 가른다. "정책을 바꿔야 한다"를 사실로 여기는 학생에게 "그 말은 자료에 적혀 있나요, 자료를 근거로 한 주장인가요?"라고 되묻는다. 파리 협정은 2015년 모든 당사국이 참여해 지구 평균 기온 상승을 산업화 이전보다 2℃보다 훨씬 낮게 유지하고 1.5℃로 제한하도록 노력하기로 한 약속이라고 알린다. 자료는 수업용 가상 자료라고 처음에 밝힌다.',
          task: '가상 기후 자료의 문장을 사실과 해석으로 가려 쓰고, 파리 협정의 목표를 넣은 자료 해설 글을 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('가상 자료 문장 ㉠~㉣ 가운데 사실 문장 둘을 골라 옮겨 쓰세요: ㉠ 40년 동안 연평균 기온이 1.3°C 올랐다 ㉡ 이제는 늦었다 ㉢ 2020년대가 가장 높다 ㉣ 당장 모든 차를 없애야 한다', { topic: '가상 도시 자료 문장 ㉠ 40년 동안 연평균 기온이 1.3°C 올랐다 ㉡ 이제는 늦었다 ㉢ 2020년대 기온이 가장 높다 ㉣ 당장 모든 차를 없애야 한다 — 이 가운데 자료의 사실 문장 둘을 옮겨 쓰세요.', min: 15, max: 140, s: [1, 2], title: '사실 문장 고르기' }, ['자료에서 바로 읽히는 문장만 골랐다', '느낌이나 주장을 섞지 않았다', '두 문장을 모두 옮겼다'], [['올랐다', '1.3'], ['2020년대', '가장 높']]),
              RW('틀을 채워 사실 문장 둘을 쓰세요(㉠ 40년 동안 1.3°C 올랐다 ㉡ 이제는 늦었다 ㉢ 2020년대가 가장 높다 ㉣ 모든 차를 없애야 한다).', { topic: '자료의 사실 문장 둘을 옮겨 쓰세요.', min: 12, max: 120, s: [1, 2], starter: '자료의 사실은 ___와 ___이다.' }, ['자료에서 바로 읽히는 문장만 골랐다', '두 문장을 모두 옮겼다'])),
            IT(RW('㉡·㉣ 같은 해석·주장 문장이 왜 사실이 아닌지 두 문장으로 쓰세요.', { topic: '"이제는 늦었다", "당장 모든 차를 없애야 한다" 같은 문장이 자료의 사실이 아니라 해석·주장인 까닭을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '해석은 왜 사실이 아닐까' }, ['자료에 적혀 있지 않다는 점을 썼다', '판단이나 주장이라는 점을 썼다', '해석에도 근거가 필요하다고 썼다'], [['해석', '주장', '판단', '의견']]),
              RW('틀을 채워 해석 문장이 사실이 아닌 까닭을 쓰세요.', { topic: '해석 문장이 사실이 아닌 까닭을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '이 문장은 자료에 ___ 않고, 자료를 보고 한 ___이다.' }, ['자료에 적혀 있지 않다는 점을 썼다', '판단이나 주장이라는 점을 썼다'])),
            IT(RW('파리 협정의 목표를 넣어 이 가상 자료를 해설하는 글을 세 문장으로 쓰세요.', { topic: '가상 도시 기온 자료가 보여 주는 사실, 파리 협정의 목표(2℃보다 훨씬 낮게, 1.5℃로 제한하도록 노력), 우리가 할 수 있는 일을 넣어 해설 글을 세 문장으로 쓰세요.', min: 50, max: 260, s: [3, 4], title: '자료 해설 글' }, ['자료의 사실을 정확히 썼다', '파리 협정의 목표를 넣었다', '사실과 내 해석을 구별해 썼다', '가상 자료임을 밝혔다'], [['1.5'], ['파리']]),
              RW('틀을 채워 자료 해설 글을 두 문장으로 쓰세요.', { topic: '가상 자료와 파리 협정 목표를 넣어 해설 글을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '이 가상 자료에서 기온은 ___. 파리 협정은 기온 상승을 ___℃로 제한하도록 노력하자고 약속했다.' }, ['자료의 사실을 썼다', '파리 협정의 목표를 넣었다'], [['1.5']]),
              RW('해설 글에, 같은 자료를 두고 사람마다 해석이 다를 수 있는 까닭까지 더해 한 문단으로 쓰세요.', { topic: '가상 자료의 사실, 파리 협정의 목표, 그리고 같은 자료를 두고 해석이 다를 수 있는 까닭(보는 기간·관심·가치)을 넣어 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '해석이 다를 수 있는 까닭' }, ['자료의 사실을 정확히 썼다', '파리 협정의 목표를 넣었다', '해석이 다를 수 있는 까닭을 썼다', '다른 해석을 깎아내리지 않았다'], [['1.5'], ['해석']]),
              { conclude: '자료는 사실을 보여 주고, 해석은 그 사실을 보고 사람이 내리는 판단이에요. 해석을 말할 때도 근거 자료를 함께 밝혀요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '가상 자료 문장을 사실과 해석으로 나누어 써요.', columns: ['자료의 사실', '해석·주장'], cells: [['', ''], ['', '']], answer: '40년 동안 1.3°C 올랐다·2020년대가 가장 높다 / 이제는 늦었다·당장 모든 차를 없애야 한다' },
          { type: 'choice', prompt: '파리 협정의 목표로 알맞은 것은?', options: ['기온 상승을 2℃보다 훨씬 낮게, 1.5℃로 제한하도록 노력한다', '선진국만 온실가스를 줄인다', '기온 상승을 5℃까지 허용한다'], answer: '기온 상승을 2℃보다 훨씬 낮게, 1.5℃로 제한하도록 노력한다' },
        ] },
      }),

      // ---- 정리 ----
      M('wrap.my', {
        title: '이번 주 실천 하나 고르기', method: '이번 주 실천 하나 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '실천 카드 3장 가운데 기후 대응이 맞는 카드를 고르고 눈금에 표시한다.', base: '실천 카드 5장(함정 2장) 가운데 맞는 카드를 고르고, 하나를 이번 주 얼마나 할 수 있을지 눈금에 표시한다.', challenge: '눈금 표시 뒤 그 실천을 함께할 사람(가족·짝)을 활동지에 정해 적는다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 대응 가운데 이번 주에 내가 바로 할 수 있는 것은 무엇일까요?" 실천 카드를 고른 뒤, 그 가운데 하나를 얼마나 할 수 있을지 눈금에 솔직하게 표시하게 한다. 눈금은 점수가 아니라 내 다짐의 크기라고 말해 준다. "해 봐야 소용없다"는 학생에게 "오늘 하늘의 갈림길에서 반 약속이 무엇을 바꿨나요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '기후 대응 실천', cards: [
              { id: 'k1', text: '가까운 길 걷기' }, { id: 'k2', text: '먹을 만큼만 받기' }, { id: 'k3', text: '빈 교실 전등 끄기' }, { id: 'k4', text: '일회용 컵 쓰기' }, { id: 'k5', text: '냉방 더 세게' }] },
              prompt: '기후 대응이 맞는 실천 카드만 골라 담아요.', target: { pick: ['k1', 'k2', 'k3'] }, difficulty: 0.15 },
              { prompt: '실천 카드 3장 가운데 기후 대응이 맞는 카드만 골라 담아요.', toolOptions: { cards: [{ id: 'k1', text: '가까운 길 걷기' }, { id: 'k3', text: '빈 교실 전등 끄기' }, { id: 'k4', text: '일회용 컵 쓰기' }] }, target: { pick: ['k1', 'k3'] } }),
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '고른 실천 하나를 이번 주에 얼마나 할 수 있을까요?', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '조금', 5: '매일' } }, prompt: '고른 실천을 이번 주에 얼마나 할 수 있을지 눈금에 표시해요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'choice', prompt: '기후 위기 대응에 대한 생각으로 가장 알맞은 것은?', options: ['개인 실천만으로 충분하다', '개인 실천과 학교·나라의 제도가 함께 바뀌어야 한다', '개인 실천은 아무 의미 없다'], answer: 1, difficulty: 0.15, explain: '한 사람의 실천이 모이고 제도가 함께 바뀔 때 대응할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '이번 주 나의 실천',
          items: [
            { type: 'short', prompt: '이번 주에 할 실천 하나와 함께할 사람을 써요.' },
            { type: 'check', prompt: '이번 주에 해 볼 실천에 표시해요.', options: ['가까운 길 걷기', '먹을 만큼만 받기', '빈 교실 전등 끄기'] },
          ],
        },
      }),
      M('wrap.two', {
        title: '완화·적응 구별 스스로 점검', method: '완화·적응 구별 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 두 개(뜻·카드 구별)에 스스로 표시하고, 둘째 문항 보기를 고른다.', base: '점검 칸 세 개(뜻·카드마다 까닭·둘 다 필요한 까닭)에 스스로 표시한다.', challenge: '점검 칸에 \'우리 학교 사례로 완화·적응을 하나씩 말할 수 있다\'가 더해지고, 그 사례를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 나눈 대응 가운데 완화와 적응을 헷갈리지 않고 말할 수 있나요?" 점검 칸을 하나씩 읽으며 스스로 표시하게 하고, 가장 자신 없는 칸 하나를 활동지에 다음에 할 일로 적게 한다. 제방 보강을 완화로 말하는 학생에게 "제방은 원인을 줄이나요, 피해에 대비하나요?"라고 되묻는다. 점검표는 점수가 아니라 스스로 돌아보는 표라고 말해 준다.',
          exitTicket: [
            IT(SELF('완화·적응 구별 점검 칸을 읽고 내가 할 수 있는 것에 스스로 표시해요.', '완화·적응 점검', null, null, ['완화와 적응의 뜻을 말할 수 있다', '대응 카드마다 어느 쪽인지 까닭을 말할 수 있다', '둘 다 필요한 까닭을 말할 수 있다']),
              { prompt: '점검 칸 두 개를 읽고 스스로 표시해요.', target: { selfCheck: ['완화와 적응의 뜻을 말할 수 있다', '대응 카드마다 어느 쪽인지 말할 수 있다'] } },
              { prompt: '점검 칸을 읽고 우리 학교 사례까지 떠올려 스스로 표시해요.', target: { selfCheck: ['완화와 적응의 뜻을 말할 수 있다', '대응 카드마다 어느 쪽인지 까닭을 말할 수 있다', '둘 다 필요한 까닭을 말할 수 있다', '우리 학교 사례로 완화·적응을 하나씩 말할 수 있다'] } }),
            { type: 'choice', prompt: '기후 변화에 대비하는(적응) 대응은?', options: ['태양광 같은 재생 에너지를 늘린다', '무더위 쉼터를 늘린다', '대중교통을 늘린다'], answer: 1, difficulty: 0.2, explain: '무더위 쉼터는 이미 잦아진 폭염 피해에 대비하는 적응이에요.' },
          ],
        },
        worksheet: {
          title: '완화와 적응',
          items: [
            { type: 'table', prompt: '우리 학교에서 할 수 있는 완화·적응 대응을 하나씩 써요.', columns: ['완화(줄이기)', '적응(대비하기)'], cells: [['', '']], answer: '(예) 빈 교실 전등 끄기 / (예) 폭염 때 실내 수업' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 할 일을 써요.' },
          ],
        },
      }),
      M('wrap.fact', {
        title: '기후 자료의 사실 문장 출구 글', method: '기후 자료의 사실 문장 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(오른 정도)를 채워 사실 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(기간·오른 정도)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 사실 문장과 그에 대한 내 해석 한 문장을 구별해 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"오늘 자료에서 누구나 똑같이 읽을 수 있는 사실 한 문장은 무엇일까요?" 출구 글을 쓰기 전에 사실과 해석을 가른 표를 다시 본다. 느낌을 사실처럼 쓰는 학생에게 "그 말은 그래프의 어느 숫자에서 읽었나요?"라고 되묻는다. 자료가 가상이라는 점을 글에도 밝히게 한다.',
          exitTicket: [
            IT(EXIT_RW('오늘 읽은 가상 기후 자료의 사실 문장을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '가상 도시 기온 자료에서 읽은 사실을 한두 문장으로 쓰세요.', min: 20, max: 160, s: [1, 2], title: '기후 자료의 사실', starter: '가상 자료에서 연평균 기온은 ___년 동안 ___°C 올랐다.' }, ['사실(기간·숫자)이 정확하다', '핵심 낱말(연평균 기온·올랐다)을 넣었다', '내 말로 썼다'], [['기온'], ['올랐', '상승']]),
              { prompt: '빈칸 하나를 채워 사실 문장을 쓰고 기준표에 표시해요.', toolOptions: { starter: '가상 자료에서 연평균 기온은 40년 동안 ___°C 올랐다.' }, target: { selfCheck: ['숫자를 그래프에서 읽었다', '내 말로 썼다'], mustInclude: [['기온']] } },
              { prompt: '틀 없이 사실 문장 하나와 내 해석 문장 하나를 구별해 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(기간·숫자)이 정확하다', '핵심 낱말(연평균 기온·올랐다)을 넣었다', '내 말로 썼다', '사실과 해석을 다른 문장으로 나누어 썼다'], mustInclude: [['기온'], ['올랐', '상승']] } }),
            { type: 'choice', prompt: '다음 가운데 자료의 사실 문장은?', options: ['이제는 늦었다', '2020년대의 연평균 기온이 가장 높다', '당장 모든 차를 없애야 한다'], answer: 1, difficulty: 0.15, explain: '자료에서 누구나 똑같이 읽을 수 있는 것이 사실이에요. 나머지는 해석·주장이에요.' },
          ],
        },
        worksheet: {
          title: '기후 자료의 사실',
          items: [
            { type: 'short', prompt: '가상 기후 자료에서 읽은 사실 한 문장을 써요.' },
            { type: 'choice', prompt: '해석·주장 문장에 ○ 해요.', options: ['40년 동안 1.3°C 올랐다', '이제는 아무것도 할 수 없다'], answer: '이제는 아무것도 할 수 없다' },
          ],
        },
      }),
    );
  }

  // ==== 5·18민주화운동 기념일 — 1980년 5월 광주 (days.m.may18) ====
  {
    const M = MK('may18');
    const FLOW6 = [
      { id: 'e1', text: '10·26 사태(1979.10)' }, { id: 'e2', text: '12·12 사태(1979.12)' }, { id: 'e3', text: '서울의 봄 민주화 요구(1980 봄)' },
      { id: 'e4', text: '비상계엄 전국 확대(5.17)' }, { id: 'e5', text: '광주 학생들의 시위(5.18)' }, { id: 'e6', text: '시민들의 참여 확대(5.19~)' },
    ];
    const FLOW4 = [
      { id: 'f1', text: '비상계엄 전국 확대(5.17)' }, { id: 'f2', text: '광주 학생들의 시위(5.18)' },
      { id: 'f3', text: '시민들의 참여 확대(5.19~)' }, { id: 'f4', text: '5월 27일 계엄군의 진압' },
    ];
    const NODATE = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const BG = [
      { id: 'b1', text: '10·26 사태 뒤 민주화 요구', to: '배경' }, { id: 'b2', text: '신군부의 권력 장악', to: '배경' }, { id: 'b3', text: '비상계엄 전국 확대', to: '배경' },
      { id: 'r1', text: '진상 규명 요구 확산', to: '결과' }, { id: 'r2', text: '1980년대 민주화 운동의 밑거름', to: '결과' }, { id: 'r3', text: '5·18 특별법 제정(1995)', to: '결과' },
      { id: 'r4', text: '국가 기념일 지정(1997)', to: '결과' }, { id: 't1', text: '모든 기록이 사라짐' },
    ];
    // 1980년부터 몇 해 뒤 — 사실 연도를 1980년 기준 햇수로 옮긴 자료
    const MEM = [['5·18민주화운동(1980)', 0], ['국회 청문회(1988)', 8], ['5·18 특별법(1995)', 15], ['국가 기념일 지정(1997)', 17], ['세계기록유산 등재(2011)', 31]];
    const MEMC = (data) => ({ type: 'bar', mode: 'read', horizontal: true, title: '5·18 뒤 진상 규명과 기억의 제도 — 1980년부터 걸린 햇수', unit: '년', xLabel: '일', yLabel: '1980년부터 햇수', data: data || MEM });

    ALL.push(
      // ---- 도입 ----
      M('intro.ten', {
        title: '열흘의 장면 카드로 질문 만들기', method: '열흘의 장면 카드로 질문 만들기', tool: 'story', minutes: 6,
        levels: { easy: '시연 판의 질문 보기 세 장 가운데 가장 궁금한 질문 하나를 고른다.', base: '보기를 본 뒤 내 질문 하나를 새로 만들어 짝에게 말한다.', challenge: '질문 두 개를 만들고, 각 질문을 확인할 기관(5·18기념재단·5·18민주화운동기록관·국가보훈부)을 함께 말한다.' },
        intro: {
          teacher: '"1980년 5월 광주의 열흘을 담은 종이 장면이에요. 무엇이 가장 궁금한가요?" 주먹밥을 나누는 시민, 헌혈에 줄을 선 시민, 광장에 모인 시민의 종이 장면을 보이고, 시연 단추로 질문 보기 하나가 바구니에 담기는 모습을 보인다. 5·18민주화운동 기념일은 1980년 5월 18일부터 27일까지 광주에서 시민들이 민주주의를 요구한 일을 기념하는 국가 기념일이라고 알린다. "광주만의 일"이라는 말에는 "광주 시민들이 요구한 민주주의는 누구를 위한 것이었을까요?"라고 되묻는다.',
          student: '1980년 5월 광주 장면을 보고 궁금한 질문을 골라요. 내 질문을 하나 만들고, 어느 기관의 자료로 확인할지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '확인할 질문', title: '1980년 5월 광주', cards: [
            { id: 'q1', text: '시민들은 무엇을 요구했을까?', motif: 'star' }, { id: 'q2', text: '왜 열흘 동안 이어졌을까?', motif: 'cloud' },
            { id: 'q3', text: '시민들은 서로 어떻게 도왔을까?', motif: 'flower' }], shuffle: false }, sequence: [{ pick: ['q1'] }] },
          art: { draw: 'paper-cut citizens sharing rice balls and lining up to donate blood in a city square, with a quiet sky of soft clouds', banner: '1980년 5월, 무엇이 궁금할까?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '장면은 종이 오림 그림이며 실제 사진이 아니다. 폭력 장면·참혹한 사진은 보여 주지 않고, 공동체 정신과 기억에 초점을 둔다.',
      }),
      M('intro.before', {
        title: '5·18 뒤 바뀐 것 짐작 투표', method: '5·18 뒤 바뀐 것 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 칠판에 적어 두고, 가장 그럴듯한 것에 손을 들어 투표한다.', base: '투표한 뒤 5·18 뒤 바뀌었을 것을 스스로 두 가지 말해 본다.', challenge: '짐작마다 무엇으로 확인할지(법령·기념재단 자료·기록관) 확인 방법을 하나씩 말한다.' },
        intro: {
          teacher: '"5·18민주화운동 뒤에 무엇이 바뀌었을까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손을 든 수를 세어 말한 뒤, 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는 모습을 보인다. "아무것도 바뀌지 않았다"는 말에는 "기념일이 정해지고 기록이 세계유산이 되기까지, 그 사이에 무슨 일이 있었을까요?"라고 되묻는다. 오늘의 질문은 "5·18의 배경은 무엇이었고, 그 뒤 무엇이 이어졌나?"로 정한다.',
          student: '5·18 뒤 바뀐 것 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('5·18 뒤 바뀐 것 짐작(가상의 우리 반 투표)', [['민주화 운동이 커졌다', 9], ['진실을 밝히는 법이 생겼다', 8], ['국가 기념일이 되었다', 6], ['기록이 세계유산이 되었다', 5]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut spring path from a dark cloud to a sunrise with a memorial flower and a book of records along the way', banner: '5·18 뒤, 무엇이 이어졌을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 실제 투표는 손 들기로 하고 결과를 채점하지 않는다.',
      }),
      M('intro.archive', {
        title: '5·18 기록물 종류 맞히기', method: '기록물 종류 맞히기', tool: 'wordcards', minutes: 6,
        levels: { easy: '기록 설명 세 줄(일기·성명서·보도 사진)에 기록 이름 카드를 잇는다.', base: '시연 판의 설명 다섯 줄이 이어지기 전에, 설명마다 기록 이름을 먼저 짐작해 말한다.', challenge: '기록마다 누가 만들었을지(시민·언론·공공 기관) 짐작해 말한다.' },
        intro: {
          teacher: '"진실이 감춰졌던 사건을 우리는 무엇으로 알게 되었을까요?" 5·18민주화운동 기록물에는 시민의 일기와 성명서, 기자의 취재 기록과 사진, 국회 청문회 같은 공공 기록이 있고, 2011년 유네스코 세계기록유산이 되었다고 알린다. 시연 단추로 설명과 기록 이름이 이어지는 모습을 보인다. "인터넷 영상이 더 생생하니 더 정확하다"는 말에는 "그 영상은 누가 언제 만든 것인지 알 수 있나요?"라고 되묻는다.',
          student: '기록 설명을 듣고 어떤 기록인지 이름을 골라요. 그 기록을 누가 만들었을지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '그날 있었던 일과 생각을 적은 글' }, { id: 'b', label: '시민들이 뜻을 밝혀 알린 글' }, { id: 'c', label: '기자가 현장에서 찍은 것' }, { id: 'd', label: '법정에서 남긴 공식 문서' }, { id: 'e', label: '국회에서 묻고 답한 기록' }], cards: [{ id: 'm1', text: '일기' }, { id: 'm2', text: '성명서' }, { id: 'm3', text: '보도 사진' }, { id: 'm4', text: '재판 기록' }, { id: 'm5', text: '청문회 회의록' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2', c: 'm3' } }, { match: { a: 'm1', b: 'm2', c: 'm3', d: 'm4', e: 'm5' } }] },
          art: { draw: 'paper-cut archive boxes, a diary, a camera and a typed report arranged on shelves under soft light', banner: '어떤 기록이 남았을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.flow', {
        title: '5·18 흐름 시간 띠', method: '5·18 흐름 시간 띠 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '1980년 5월의 사건 카드 4장에 날짜가 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '1979~1980년 사건 카드 6장을 날짜 없이 차례대로 놓는다.', challenge: '날짜 없는 6장에 함정 카드가 섞이고, 흐름을 세 문장으로 활동지에 쓴다.' },
        activity: {
          title: '흐름 시간 띠', tool: 'timeline',
          teacher: '"5월 18일 이전에 어떤 일이 있었을까요?" 비상계엄 확대를 학생 시위보다 뒤에 두는 학생에게 5월 17일 비상계엄이 전국으로 확대되고 다음 날 광주에서 시위가 시작되었다는 점을 짚는다. 12·12 사태와 서울의 봄의 앞뒤를 헷갈리면 신군부가 군권을 장악한 뒤 1980년 봄 민주화 요구가 커졌다는 교과서 서술을 짚는다. 장면을 자세히 묘사하기보다 사건의 차례와 시민들이 요구한 것에 집중한다.',
          task: '5·18민주화운동 앞뒤의 사건 카드를 일어난 차례대로 시간 띠에 놓고, 기억의 과정도 차례대로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('1979년 10월부터 1980년 5월까지의 사건을 차례대로 놓아 보세요.', NODATE(FLOW6), { axis: ['1979년 10월', '1980년 5월'] }),
              OB('1980년 5월의 사건 4장을 차례대로 놓아 보세요(날짜가 적혀 있어요).', FLOW4, { axis: ['5월 17일', '5월 27일'] }),
              OB('날짜 없는 사건 6장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NODATE(FLOW6), { axis: ['1979년 10월', '1980년 5월'] }, [{ id: 'x1', text: '6·29 선언' }])),
            IT(OB('5·18을 기억하게 된 과정을 차례대로 놓아 보세요.', [{ id: 'm1', text: '5·18 특별법 제정' }, { id: 'm2', text: '국가 기념일 지정' }, { id: 'm3', text: '기록물 세계기록유산 등재' }], { axis: ['먼저', '나중'] }),
              OB('기억의 과정 두 장을 차례대로 놓아 보세요.', [{ id: 'm2', text: '국가 기념일 지정(1997)' }, { id: 'm3', text: '세계기록유산 등재(2011)' }], { axis: ['먼저', '나중'] })),
            IT(MB('기억과 그 일이 일어난 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1980년', '5·18민주화운동'], ['1997년', '국가 기념일 지정'], ['2011년', '기록물 세계기록유산']], ['6월 민주 항쟁']),
              MB('기억과 그 일이 일어난 해를 이어 보세요.', [['1980년', '5·18민주화운동'], ['2011년', '기록물 세계기록유산']], []),
              null, { conclude: '5·18민주화운동은 1980년 5월 18일부터 27일까지 이어졌고, 그 기록은 2011년 유네스코 세계기록유산이 되어 세계가 함께 기억해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '5·18민주화운동을 정리해요.', columns: ['물음', '답'], cells: [['언제', ''], ['어디에서', ''], ['시민들이 바란 것', '']], answer: '1980년 5월 18일~27일 / 광주 / 계엄 해제와 민주주의' }] },
      }),
      M('activity.spirit', {
        title: '시민들의 공동체 정신 짝 짓기', method: '시민들이 보여 준 공동체 정신 고르기', tool: 'emotion', minutes: 16,
        levels: { easy: '시민들이 서로 도운 장면 두 개에 가치 카드를 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 개에 가치 카드를 짝 짓는다(함정 카드 한 장).', challenge: '셋째 문항에서 오늘 우리 교실 장면에 같은 가치를 잇는다.' },
        activity: {
          title: '공동체 정신', tool: 'emotion',
          teacher: '"어려운 때에 시민들은 서로에게 무엇을 나누었을까요?" 시민들이 주먹밥을 나누고 헌혈에 줄을 섰다는 기록을 소개하고, 장면마다 어떤 가치가 드러나는지 말하게 한다. "그건 그때 광주에서만 있던 일"이라는 학생에게 "다친 사람을 위해 줄을 서는 마음은 오늘 우리 교실에도 있을까요?"라고 되묻는다. 희생은 자세히 묘사하지 않고 추모와 의미 중심으로 다룬다.',
          task: '1980년 5월 광주 시민들이 서로 도운 장면에 맞는 가치 카드를 짝 짓고, 그 가치를 오늘 장면에 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '시민들이 서로 도운 장면과 그 가치를 짝 지으세요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '시장 상인들이 주먹밥을 지어 나누었다' }, { id: 's2', label: '시민들이 헌혈하려고 줄을 섰다' }, { id: 's3', label: '시민들이 함께 거리를 청소하고 질서를 지켰다' }], cards: [{ id: 'v1', text: '나눔' }, { id: 'v2', text: '생명 존중' }, { id: 'v3', text: '질서와 책임' }, { id: 'v4', text: '나만 챙기기' }] }, target: { match: { s1: 'v1', s2: 'v2', s3: 'v3' } } },
              { prompt: '시민들이 서로 도운 장면 두 개와 그 가치를 짝 지으세요.', toolOptions: { slots: [{ id: 's1', label: '시장 상인들이 주먹밥을 지어 나누었다' }, { id: 's2', label: '시민들이 헌혈하려고 줄을 섰다' }], cards: [{ id: 'v1', text: '나눔' }, { id: 'v2', text: '생명 존중' }] }, target: { match: { s1: 'v1', s2: 'v2' } } }),
            IT({ prompt: '5·18을 기억하는 태도와 그 뜻을 짝 지으세요.', toolOptions: { mode: 'match', slots: [{ id: 'a1', label: '희생자를 추모하며 묵념한다' }, { id: 'a2', label: '공식 기록으로 사실을 확인한다' }], cards: [{ id: 'w1', text: '추모' }, { id: 'w2', text: '사실 확인' }, { id: 'w3', text: '장난처럼 말하기' }] }, target: { match: { a1: 'w1', a2: 'w2' } } }),
            IT({ prompt: '오늘 우리 교실 장면과 시민들이 보여 준 가치를 짝 지으세요.', toolOptions: { mode: 'match', slots: [{ id: 'c1', label: '아픈 친구의 짐을 나누어 든다' }, { id: 'c2', label: '모둠 정리를 끝까지 함께 한다' }], cards: [{ id: 'z1', text: '나눔' }, { id: 'z2', text: '질서와 책임' }, { id: 'z3', text: '모른 척하기' }] }, target: { match: { c1: 'z1', c2: 'z2' } } },
              null, null, { conclude: '어려운 때에도 시민들은 나눔과 생명 존중, 질서와 책임으로 서로를 지켰어요. 그 공동체 정신은 오늘 우리 곁에서도 이어질 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '1980년 5월 광주 시민들이 보여 준 모습 가운데 기억하고 싶은 것과 그 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.cause', {
        title: '5·18의 배경과 결과 나누기', method: '배경과 결과 카드 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 6장(배경 3·결과 3)을 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 8장(함정 1장)을 배경·결과로 나눈다.', challenge: '셋째 문항에서 1988 청문회·1995 특별법·1997 기념일이 무엇을 위한 일이었는지 나누고 이어 설명한다.' },
        activity: {
          title: '배경과 결과', tool: 'sortboard',
          teacher: '"이 카드는 5·18 전의 일일까요, 뒤의 일일까요?" 세계기록유산 등재를 배경에 두는 학생에게 2011년의 일이라는 점을 짚는다. "갑자기 일어난 일"이라는 학생에게 "10·26 사태 뒤 시민들은 무엇을 바랐을까요?"라고 되묻는다. 진실이 알려지기까지 오래 걸린 까닭으로 당시 언론이 통제되었다는 교과서 서술을 짚는다.',
          task: '5·18민주화운동의 배경과 결과 카드를 바구니에 나누고, 그 뒤 이어진 일이 무엇을 위한 것인지 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 5·18민주화운동의 배경과 결과로 나누세요. 사실이 아닌 카드는 남겨요.', ['배경', '결과'], BG),
              SB('카드 6장을 5·18민주화운동의 배경과 결과로 나누세요.', ['배경', '결과'], pickCards(BG, ['b1', 'b2', 'b3', 'r1', 'r2', 'r4']))),
            IT(SB('진실이 감춰졌던 까닭과 알려진 길을 나누세요.', ['감춰진 까닭', '알려진 길'], [
              { id: 'h1', text: '당시 언론 통제', to: '감춰진 까닭' }, { id: 'h2', text: '광주 소식이 다른 지역에 막힘', to: '감춰진 까닭' },
              { id: 'k1', text: '시민·외신 기자의 기록', to: '알려진 길' }, { id: 'k2', text: '국회 청문회', to: '알려진 길' }])),
            IT(SB('그 뒤 이어진 일을 진상 규명과 기억·기념으로 나누세요.', ['진상 규명', '기억·기념'], [
              { id: 'j1', text: '국회 청문회(1988)', to: '진상 규명' }, { id: 'j2', text: '5·18 특별법 제정(1995)', to: '진상 규명' },
              { id: 'n1', text: '국가 기념일 지정(1997)', to: '기억·기념' }, { id: 'n2', text: '기록물 세계기록유산(2011)', to: '기억·기념' }]),
              null, null, { conclude: '민주화 요구와 신군부의 권력 장악, 비상계엄 확대가 배경이었고, 진실을 알리려는 노력은 청문회·특별법·국가 기념일로 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '5·18민주화운동의 배경과 결과를 정리해요.', columns: ['배경', '결과'], cells: [['', '']], answer: '10·26 사태 뒤 민주화 요구·신군부의 권력 장악·비상계엄 확대 / 민주화 운동의 밑거름·청문회·특별법·국가 기념일' }] },
      }),
      M('activity.memory', {
        title: '배경에서 기억까지 띠 자료 읽기', method: '배경에서 기억까지 사슬 그래프로 보기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 3개(1980·1997·2011)만 보이고 막대 끝에 햇수가 보인다.', base: '막대 5개(1980·1988·1995·1997·2011)의 햇수를 막대에서 읽고 답한다.', challenge: '넷째 문항에서 제도 하나(특별법·기념일·세계기록유산)가 한 역할을 고른다.' },
        activity: {
          title: '기억의 띠 자료', tool: 'chart',
          teacher: '"진실을 밝히고 기억하는 제도가 생기기까지 몇 해가 걸렸을까요?" 1980년부터 걸린 햇수를 나타낸 막대그래프를 읽게 하고, 막대마다 그때 무슨 일이 있었는지 말하게 한다. "기념일은 바로 정해졌다"는 학생에게 "1980년과 1997년 사이에는 몇 해가 있었을까요? 그 사이에 무엇이 필요했을까요?"라고 되묻는다. 막대는 실제 연도를 1980년 기준 햇수로 옮긴 것이라는 점을 처음에 밝힌다.',
          task: '1980년부터 진상 규명과 기억의 제도가 이어진 햇수 그래프를 읽고, 제도마다 한 일을 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '5·18 뒤 가장 먼저 열린 일을 그래프에서 고르세요.', toolOptions: Object.assign(MEMC(), { question: '1980년 뒤 가장 먼저 이루어진 일은?', choices: ['국회 청문회', '5·18 특별법', '국가 기념일 지정', '세계기록유산 등재'] }), target: { pick: 0 } },
              { prompt: '세 막대 가운데 가장 먼저 이루어진 기억의 일을 고르세요.', toolOptions: Object.assign(MEMC([MEM[0], MEM[3], MEM[4]]), { question: '1980년 뒤 먼저 이루어진 일은?', choices: ['국가 기념일 지정', '세계기록유산 등재'] }), target: { pick: 0 } }),
            IT({ prompt: '국가 기념일로 지정되기까지 1980년부터 몇 해가 걸렸는지 그래프에서 읽어 쓰세요.', toolOptions: Object.assign(MEMC(), { question: '국가 기념일 지정까지 몇 해?' }), target: { value: 17 } },
              { prompt: '국가 기념일 지정까지 몇 해가 걸렸는지 읽어 쓰세요.', toolOptions: Object.assign(MEMC([MEM[0], MEM[3], MEM[4]]), { question: '국가 기념일 지정까지 몇 해?' }), target: { value: 17 } }),
            IT({ prompt: '5·18 특별법 제정과 국가 기념일 지정은 몇 해 차이인지 읽어 쓰세요.', toolOptions: Object.assign(MEMC(), { question: '특별법과 기념일 지정은 몇 해 차이?' }), target: { value: 2 } },
              { prompt: '국가 기념일 지정과 세계기록유산 등재는 몇 해 차이인지 읽어 쓰세요.', toolOptions: Object.assign(MEMC([MEM[0], MEM[3], MEM[4]]), { question: '기념일과 세계기록유산은 몇 해 차이?' }), target: { value: 14 } }),
            IT({ prompt: '세계기록유산 등재가 한 역할로 알맞은 것을 고르세요.', toolOptions: Object.assign(MEMC(), { question: '세계기록유산 등재의 역할은?', choices: ['기록을 세계가 함께 지키고 기억하게 했다', '모든 기록을 비밀로 했다', '기념일을 없앴다'] }), target: { pick: 0 } },
              { prompt: '세계기록유산 등재가 한 역할로 알맞은 것을 고르세요.', toolOptions: Object.assign(MEMC([MEM[0], MEM[3], MEM[4]]), { question: '세계기록유산 등재의 역할은?', choices: ['기록을 세계가 함께 지키고 기억하게 했다', '모든 기록을 비밀로 했다'] }), target: { pick: 0 } },
              { prompt: '5·18 특별법이 한 역할로 알맞은 것을 고르세요.', toolOptions: { question: '5·18 특별법의 역할은?', choices: ['진상 규명과 책임자 처벌·명예 회복의 길을 열었다', '기록을 없애게 했다', '기념일을 정하지 못하게 했다'] }, target: { pick: 0 } },
              { conclude: '진실을 밝히고 기억하는 제도는 한꺼번에 생기지 않았어요. 청문회·특별법·국가 기념일·세계기록유산이 여러 해에 걸쳐 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '5·18 뒤 이어진 일과 해를 써요.', columns: ['일', '해'], cells: [['5·18 특별법 제정', ''], ['국가 기념일 지정', ''], ['세계기록유산 등재', '']], answer: '1995년 / 1997년 / 2011년' }] },
      }),
      M('activity.verify', {
        title: '출처 있는 기록과 근거 없는 주장 가려 쓰기', method: '출처 있는 기록과 근거 없는 주장 가려 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '기록 세 개(시민 일기·외신 보도·청문회 회의록)를 만든 주체에 따라 적고, 문장 틀을 채워 두 문장을 쓴다.', base: '근거 없는 주장 하나에 출처를 들어 답하는 글을 세 문장으로 쓰고 기준표(출처·사실·존중)로 점검한다.', challenge: '마지막 글에서 혐오 표현 없이 출처와 사실로만 답하는 한 문단(4~6문장)을 쓴다.' },
        activity: {
          title: '출처 가려 쓰기', tool: 'rubric-writing',
          teacher: '"이 자료의 출처를 찾아갈 수 있나요?" 5·18 기록물이 시민·언론·공공 기관 등 서로 다른 주체가 만든 기록으로 이루어졌고, 서로 다른 주체의 기록이 같은 사실을 보여 줄 때 그 사실이 단단해진다는 점을 짚는다. "근거 없는 주장도 하나의 의견이니 같은 무게"라는 학생에게 "출처를 확인할 수 없는 말과 여러 기록이 함께 보여 주는 사실이 같은 무게일 수 있을까요?"라고 되묻는다. 답하는 글에는 상대를 비난하는 말 대신 출처와 사실만 쓰게 한다.',
          task: '5·18 기록을 만든 주체에 따라 나누고, 근거 없는 주장 하나에 출처를 들어 답하는 글을 써서 기준표(출처·사실·존중)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('시민의 일기, 외신 기자의 보도, 국회 청문회 회의록을 만든 주체(시민·언론·공공 기관)에 따라 한두 문장으로 정리하세요.', { topic: '5·18 기록 세 가지(시민의 일기·외신 기자의 보도·국회 청문회 회의록)를 만든 주체에 따라 한두 문장으로 정리하세요.', min: 25, max: 160, s: [1, 2], title: '기록 ① 만든 주체' }, ['기록 세 가지를 모두 다루었다', '만든 주체를 바르게 썼다', '기록에 없는 내용을 덧붙이지 않았다'], [['시민'], ['언론', '기자'], ['공공', '국회', '기관']]),
              RW('틀을 채워 기록 세 가지를 만든 주체에 따라 정리하세요.', { topic: '기록 세 가지를 만든 주체에 따라 정리하세요.', min: 20, max: 140, s: [1, 2], starter: '일기는 ___이, 외신 보도는 ___가, 청문회 회의록은 ___이 남겼다.' }, ['기록 세 가지를 모두 다루었다', '만든 주체를 썼다'])),
            IT(RW('"출처를 알 수 없는 짧은 영상이 5·18의 사실을 다르게 말한다"면, 무엇을 먼저 확인할지 두 문장으로 쓰세요.', { topic: '출처를 알 수 없는 짧은 영상이 5·18의 사실을 다르게 말할 때, 무엇을 먼저 확인할지 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '확인할 것' }, ['누가 언제 만들었는지 확인한다고 썼다', '공식 기록과 견준다고 썼다', '확인 기관을 하나 이상 썼다'], [['출처', '누가']]),
              RW('틀을 채워 확인할 것을 쓰세요.', { topic: '출처를 알 수 없는 영상을 볼 때 확인할 것을 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '먼저 ___가 언제 만들었는지 보고, ___ 같은 공식 기관의 기록과 견주어 본다.' }, ['출처를 확인한다고 썼다', '공식 기록과 견준다고 썼다'])),
            IT(RW('근거 없는 주장 "5·18 기록은 다 지어낸 것이다"에 출처를 들어 답하는 글을 세 문장으로 쓰세요.', { topic: '"5·18 기록은 다 지어낸 것이다"라는 근거 없는 주장에, 기록의 출처(시민·언론·공공 기관)와 세계기록유산 등재 사실을 들어 세 문장으로 답하세요.', min: 50, max: 240, s: [3, 4], title: '출처를 들어 답하기' }, ['출처가 있는 기록을 들었다', '확인된 사실을 썼다', '상대를 비난하는 말을 쓰지 않았다', '내 말로 썼다'], [['기록'], ['세계기록유산', '청문회', '기록관']]),
              RW('틀을 채워 근거 없는 주장에 두 문장으로 답하세요.', { topic: '"5·18 기록은 다 지어낸 것이다"라는 주장에 두 문장으로 답하세요.', min: 30, max: 180, s: [2, 3], starter: '5·18 기록에는 ___, ___, ___이 남긴 기록이 있다. 이 기록들은 ___년 세계기록유산이 되었다.' }, ['출처가 있는 기록을 들었다', '상대를 비난하는 말을 쓰지 않았다'], [['2011']]),
              RW('근거 없는 주장에, 혐오 표현 없이 출처와 사실로만 답하는 한 문단을 쓰세요.', { topic: '"5·18 기록은 다 지어낸 것이다"라는 근거 없는 주장에, 서로 다른 주체의 기록이 같은 사실을 보여 준다는 점과 확인할 공식 기관을 들어, 비난하는 말 없이 한 문단으로 답하세요.', min: 90, max: 400, s: [4, 6], title: '존중하며 사실로 답하기' }, ['서로 다른 주체의 기록을 들었다', '확인할 공식 기관을 썼다', '확인된 사실만 썼다', '혐오·비난하는 말을 쓰지 않았다'], [['기록'], ['기념재단', '기록관', '국가보훈부']]),
              { conclude: '서로 다른 주체의 기록이 같은 사실을 보여 줄 때 그 사실은 단단해져요. 근거 없는 주장에는 비난이 아니라 출처와 사실로 답해요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '5·18 기록물을 정리해요.', columns: ['만든 주체', '기록의 예', '보여 주는 것'], cells: [['시민', '', ''], ['언론', '', ''], ['공공 기관', '', '']], answer: '일기·성명서·겪은 사람의 생각 / 외신 취재·사진·현장 모습 / 청문회·병원 기록·공식 확인 사실' },
          { type: 'choice', prompt: '5·18 사실을 확인할 공식 경로는?', options: ['익명 커뮤니티 글', '5·18민주화운동기록관 자료', '조회수 많은 짧은 영상'], answer: '5·18민주화운동기록관 자료' }] },
      }),

      // ---- 정리 ----
      M('wrap.one', {
        title: '오늘 배운 5·18의 사실 출구 글', method: '오늘 배운 5·18의 사실 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(어디에서)를 채워 한 문장을 쓴다.', base: '문장 틀의 빈칸 둘(언제·무엇을 요구)을 채우고 기준 셋을 점검한다.', challenge: '틀 없이 자기 말로 두 문장을 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 5·18의 사실 가운데 친구에게 꼭 전하고 싶은 것 하나는 무엇인가요?" 출구 글을 쓰기 전에 시간 띠의 날짜(5월 18일~27일)와 시민들의 요구를 다시 짚는다. 확인되지 않은 이야기를 쓰려는 학생에게는 오늘 공식 기록으로 확인한 사실만 쓰게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('오늘 배운 5·18의 사실을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '오늘 배운 5·18민주화운동의 사실을 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '오늘 배운 5·18', starter: '5·18민주화운동은 ___년 5월 광주에서 시민들이 ___를 요구한 일이다.' }, ['사실(때·곳·한 일)이 정확하다', '핵심 낱말(광주·시민·민주주의)을 넣었다', '내 말로 썼다'], [['1980'], ['민주']]),
              { prompt: '빈칸 하나를 채워 5·18의 사실을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '5·18민주화운동은 1980년 5월 ___에서 시민들이 민주주의를 요구한 일이다.' }, target: { selfCheck: ['어디에서 일어났는지 썼다', '내 말로 썼다'], mustInclude: [['광주']] } },
              { prompt: '틀 없이, 오늘 배운 사실과 기억하는 까닭을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(때·곳·한 일)이 정확하다', '핵심 낱말(광주·시민·민주주의)을 넣었다', '내 말로 썼다', '기억하는 까닭을 한 문장 더했다'], mustInclude: [['1980'], ['민주']] } }),
            { type: 'choice', prompt: '5·18민주화운동을 바르게 기억하는 태도는?', options: ['공식 기록으로 사실을 확인하고 희생자를 추모한다', '재미있는 영상으로 바꾸어 퍼뜨린다', '확인되지 않은 소문을 그대로 믿는다'], answer: 0, difficulty: 0.15, explain: '공식 기록과 기념재단 자료로 사실을 확인하는 것이 바른 기억의 시작이에요.' },
          ],
        },
        worksheet: {
          title: '오늘 배운 5·18',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '5·18민주화운동 기록물은 ___년 유네스코 ___이 되었다.', answer: '2011, 세계기록유산' },
            { type: 'short', prompt: '오늘 배운 5·18의 사실을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.today', {
        title: '5·18이 오늘에 남긴 것 짝 짓기', method: '5·18이 오늘에 남긴 것 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '오늘 장면 두 개와 5·18이 남긴 가치 카드를 짝 짓는다.', base: '오늘 장면 세 개와 가치 카드를 짝 짓는다(함정 카드 한 장).', challenge: '세 장면을 짝 지은 뒤, 고른 까닭을 활동지에 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"5·18이 남긴 것은 오늘 어디에서 볼 수 있을까요?" 장면마다 고른 가치를 말하게 하고 그 까닭을 묻는다. "기념일은 광주만의 일"이라는 학생에게 "5월 18일 기념식은 어느 나라의 국가 기념일일까요?"라고 되묻는다. 학생 개인의 견해는 채점하지 않고 고른 까닭을 말하는 데 집중한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '5월 18일 국가 기념식에서 묵념한다' }, { id: 's2', label: '기록관 자료로 소문을 확인한다' }, { id: 's3', label: '다친 이웃을 위해 헌혈한다' }], cards: [{ id: 'v1', text: '추모와 기억' }, { id: 'v2', text: '사실 확인' }, { id: 'v3', text: '생명 존중과 나눔' }, { id: 'v4', text: '소문 퍼뜨리기' }] }, prompt: '오늘의 장면과 5·18이 남긴 가치를 짝 지어요.', target: { match: { s1: 'v1', s2: 'v2', s3: 'v3' } }, difficulty: 0.2 },
              { prompt: '오늘의 장면 두 개와 5·18이 남긴 가치를 짝 지어요.', toolOptions: { slots: [{ id: 's1', label: '5월 18일 국가 기념식에서 묵념한다' }, { id: 's2', label: '기록관 자료로 소문을 확인한다' }], cards: [{ id: 'v1', text: '추모와 기억' }, { id: 'v2', text: '사실 확인' }] }, target: { match: { s1: 'v1', s2: 'v2' } } },
              { prompt: '세 장면을 짝 지은 뒤, 고른 까닭을 활동지에 한 문장으로 써요.' }),
            { type: 'choice', prompt: '5·18민주화운동 기념일에 대한 설명으로 알맞은 것은?', options: ['나라 전체가 함께 기억하는 국가 기념일이다', '광주 사람만 기억하는 날이다', '기념일로 정해지지 않았다'], answer: 0, difficulty: 0.15, explain: '5·18민주화운동 기념일은 1997년 국가 기념일로 정해졌어요.' },
          ],
        },
        worksheet: {
          title: '5·18이 오늘에 남긴 것',
          items: [
            { type: 'choice', prompt: '5·18이 남긴 가치와 가까운 장면에 ○ 해요.', options: ['공식 기록으로 사실을 확인한다', '출처 없는 소문을 퍼뜨린다', '희생을 장난처럼 말한다'], answer: '공식 기록으로 사실을 확인한다' },
            { type: 'short', prompt: '오늘 짝 지은 장면 하나를 골라, 그 가치를 고른 까닭을 써요.' },
          ],
        },
      }),
      M('wrap.check', {
        title: '출처 확인 세 단계 스스로 점검', method: '출처 확인 세 단계 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '확인 카드 3장(누가 만들었나 → 언제 만들었나 → 공식 기록과 견주기)을 차례로 놓고 점검 칸 두 개에 표시한다.', base: '확인 카드 3장을 차례로 놓고 점검 칸 네 개에 표시한다.', challenge: '함정 카드가 섞인 판에서 차례를 놓고, 점검 칸에 확인할 공식 기관을 말할 수 있는지까지 표시한다.' },
        wrap: {
          teacher: '"내일 휴대폰에서 5·18에 관한 짧은 영상을 본다면, 무엇부터 확인할까요?" 확인 카드를 차례로 놓은 뒤, 가장 자신 없는 점검 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다. "조회수가 많으면 믿을 만하다"는 학생에게 "조회수는 누가 만들었는지 알려 주나요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('출처 확인 카드를 차례로 놓고, 점검 칸에 스스로 표시해요.', '출처 확인 세 단계', ['공식 기록과 견주기', '누가 만들었나', '언제 만들었나'], ['누가 만들었나', '언제 만들었나', '공식 기록과 견주기'], ['단계마다 무엇을 하는지 말할 수 있다', '조회수와 출처를 구별할 수 있다', '근거 없는 주장을 그대로 퍼뜨리지 않는다', '서로 다른 기록을 견줄 수 있다']),
              { prompt: '확인 카드 3장을 차례로 놓고 점검 칸에 표시해요.', target: { order: ['누가 만들었나', '언제 만들었나', '공식 기록과 견주기'], selfCheck: ['단계마다 무엇을 하는지 말할 수 있다', '근거 없는 주장을 그대로 퍼뜨리지 않는다'] } },
              { prompt: '함정 카드는 남기고 확인 카드를 차례로 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['공식 기록과 견주기', '누가 만들었나', '언제 만들었나', '조회수 세기'] }, target: { order: ['누가 만들었나', '언제 만들었나', '공식 기록과 견주기'], selfCheck: ['단계마다 무엇을 하는지 말할 수 있다', '조회수와 출처를 구별할 수 있다', '근거 없는 주장을 그대로 퍼뜨리지 않는다', '확인할 공식 기관(기념재단·기록관·국가보훈부)을 말할 수 있다'] } }),
            { type: 'choice', prompt: '5·18에 관한 자료를 믿을 만하게 확인하는 방법은?', options: ['조회수가 많은 영상을 고른다', '기념재단·기록관 같은 공식 기관의 기록과 견주어 본다', '마음에 드는 글만 골라 읽는다'], answer: 1, difficulty: 0.15, explain: '공식 기관의 기록과 견주는 것이 사실 확인의 기본이에요.' },
          ],
        },
        worksheet: {
          title: '출처 확인 세 단계',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '자료를 볼 때는 ___가 만들었는지, ___ 만들었는지 보고 공식 기록과 견준다.', answer: '누, 언제' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 현충일·6·25전쟁 — 희생을 기억하는 날 (days.m.june) ====
  {
    const M = MK('june');
    const WAR6 = [
      { id: 'w1', text: '북한군의 남침(1950.6.25)' }, { id: 'w2', text: '낙동강 방어선(1950.8)' }, { id: 'w3', text: '인천 상륙 작전(1950.9)' },
      { id: 'w4', text: '중국군 참전(1950.10)' }, { id: 'w5', text: '1·4 후퇴(1951.1)' }, { id: 'w6', text: '정전 협정 체결(1953.7.27)' },
    ];
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    // 6·25전쟁 관련 장소 칸 지도(실제 거리·모양이 아닌 단순 칸 지도)
    const WMAP = (more) => Object.assign({ grid: [6, 8], title: '6·25전쟁과 관련된 곳(칸 지도 — 실제 거리 아님)', places: [
      { name: '압록강 부근', icon: 'dot', at: [1, 0] }, { name: '평양', icon: 'city', at: [1, 2] }, { name: '판문점', icon: 'dot', at: [2, 3] },
      { name: '서울', icon: 'capital', at: [3, 4] }, { name: '인천', icon: 'port', at: [2, 4] }, { name: '대구', icon: 'city', at: [4, 6] },
      { name: '부산', icon: 'port', at: [5, 7] },
    ] }, more);
    const RESULT = [
      { id: 'a1', text: '많은 사람이 목숨을 잃거나 다침', to: '전쟁 중·직후' }, { id: 'a2', text: '집과 공장·다리가 무너짐', to: '전쟁 중·직후' },
      { id: 'a3', text: '피란민이 남쪽으로 내려옴', to: '전쟁 중·직후' }, { id: 'b1', text: '이산가족이 아직 만나지 못함', to: '오늘까지 이어짐' },
      { id: 'b2', text: '휴전선을 사이에 둔 분단', to: '오늘까지 이어짐' }, { id: 'b3', text: '전사자 유해 발굴이 이어짐', to: '오늘까지 이어짐' },
      { id: 'b4', text: '한반도가 아직 정전 상태', to: '오늘까지 이어짐' }, { id: 't1', text: '평화 조약으로 전쟁이 완전히 끝남' },
    ];
    // 가상 인물 갈림길 — 현충일 오전의 가상 학생 '윤'
    const D1 = { text: '현충일 아침, 가상의 학생 윤은 친구와 동네 공원에서 놀고 있다. 곧 오전 10시가 된다.', ask: '윤은 어떻게 할까?', motif: 'house', choices: [
      { id: 'stop', text: '10시 사이렌이 울리면 멈춰 서서 1분 동안 묵념하자고 한다', result: '사이렌이 울리자 둘이 멈춰 서서 고개를 숙인다.', impact: [{ who: '윤과 친구', text: '희생한 분들을 함께 기린다', tone: 1 }], end: '사이렌에 맞춰 묵념했어요.',
        next: { text: '오후에 가족과 가까운 현충 시설(추모 공간)에 가게 되었다. 친구가 묘역 앞에서 장난치며 사진을 찍자고 한다.', ask: '윤은 어떻게 할까?', choices: [
          { id: 'quiet', text: '조용히 걸으며 안내판을 읽고 추모하자고 한다', result: '안내판에서 이곳에 모신 분들의 이야기를 읽는다.', impact: [{ who: '모신 분과 유가족', text: '존중받는다', tone: 1 }], end: '조용히 추모했어요.',
            next: { text: '집에 돌아와 동생이 "현충일은 그냥 쉬는 날이지?"라고 묻는다.', ask: '윤은 무엇이라고 할까?', choices: [
              { id: 'explain', text: '나라를 위해 희생한 분들을 추모하는 날이라고 알려 준다', result: '동생이 다음 현충일에 함께 묵념하겠다고 한다.', impact: [{ who: '동생', text: '날의 뜻을 안다', tone: 1 }] },
              { id: 'skip', text: '"응, 쉬는 날이야"라고만 한다', result: '동생은 날의 뜻을 모른 채 넘어간다.', impact: [{ who: '동생', text: '날의 뜻을 모른다', tone: -1 }], why: '현충일은 희생을 기리는 날이라는 뜻을 나눌 수 있어요.' }] } },
          { id: 'pose', text: '묘역 앞에서 장난스러운 자세로 사진을 찍는다', result: '곁에 있던 유가족이 얼굴을 찡그린다.', impact: [{ who: '유가족', text: '마음이 상한다', tone: -1 }], why: '추모 공간은 희생한 분들을 기리는 곳이라 조용히 예를 갖춰요.' }] } },
      { id: 'play', text: '사이렌이 울려도 하던 놀이를 계속한다', result: '추모의 1분이 그냥 지나간다.', impact: [{ who: '윤과 친구', text: '기릴 기회를 놓친다', tone: -1 }], why: '오전 10시 사이렌은 모두가 1분 동안 함께 추모하자는 신호예요.', ending: '추모의 시간이 그냥 지나갔어요.' }] };
    const R1 = [{ id: 'r1', text: '사이렌은 함께 추모하자는 신호다' }, { id: 'r2', text: '추모 공간에서는 조용히 예를 갖춘다' },
      { id: 'r3', text: '쉬는 날이니 무엇을 해도 된다', why: '현충일은 희생한 분들을 기리는 날이에요.' }, { id: 'r4', text: '사진이 잘 나오는 것이 먼저다', why: '추모 공간에서는 모신 분과 유가족을 먼저 생각해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '날의 뜻을 다른 사람과 나눌 수 있다' }], ok: ['r5'] };
    const KEEP = ['참전 용사 구술 기록 남기기', '전쟁 기록물 보존', '유해 발굴과 신원 확인', '현충일 묵념 함께하기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.twodays', {
        title: '6월 6일과 6월 25일 견주기', method: '6월 6일과 6월 25일 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '시연 판의 두 쌍(6월 6일·6월 25일)이 이어지는 모습을 교사와 함께 읽는다.', base: '시연 판이 세 쌍(7월 27일 정전 협정 체결 포함)을 잇기 전에 날마다 뜻을 먼저 짐작해 말한다.', challenge: '두 날(현충일·6·25전쟁일)이 어떤 관계인지 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"6월 6일과 6월 25일, 두 날은 같은 날일까요?" 시연 단추로 날짜 카드가 뜻 카드와 이어지는 모습을 보인다. 현충일은 나라를 위해 목숨을 바친 분들을 추모하는 날이고, 6·25전쟁일은 1950년 6월 25일 전쟁이 일어난 날을 기억하는 날이라고 알린다. "현충일은 6·25전쟁만 기억하는 날"이라는 말에는 "독립운동과 나라를 지킨 여러 희생도 함께 기린다면요?"라고 되묻는다.',
          student: '날짜 카드와 그날의 뜻 카드를 이어 보며, 현충일과 6·25전쟁일이 무엇이 다른지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '6월 6일 현충일' }, { id: 'b', label: '6월 25일 6·25전쟁일' }, { id: 'c', label: '1953년 7월 27일' }], cards: [{ id: 'm1', text: '나라를 위해 희생한 분들 추모' }, { id: 'm2', text: '1950년 전쟁이 일어난 날 기억' }, { id: 'm3', text: '정전 협정을 맺은 날' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2' } }, { match: { a: 'm1', b: 'm2', c: 'm3' } }] },
          art: { draw: 'a paper-cut calendar page for June with two dates circled, white flowers and a lowered flag beside it', banner: '6월 6일과 6월 25일', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),
      M('intro.left', {
        title: '"전쟁이 남긴 가장 큰 것" 짐작 투표', method: '전쟁이 남긴 가장 큰 것 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 읽어 주고 손을 들어 투표한다.', base: '투표한 뒤 보기마다 사람에게 남은 것인지 나라에 남은 것인지 스스로 갈라 말한다.', challenge: '가장 많이 나온 짐작을 무엇으로 확인할 수 있을지(교과서·국가기록원 자료 등) 말한다.' },
        intro: {
          teacher: '"6·25전쟁이 남긴 것 가운데 가장 큰 것은 무엇일까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손을 든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "전쟁은 70년도 더 된 옛날 일"이라는 말이 나오면 "가족을 아직 만나지 못한 분들은 지금 어디에 계실까요?"라고 되묻는다. 오늘의 질문은 "전쟁이 남긴 것 가운데 오늘까지 이어지는 것은 무엇인가?"로 정한다.',
          student: '6·25전쟁이 남긴 가장 큰 것 짐작 넷 가운데 하나에 투표하고, 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('6·25전쟁이 남긴 가장 큰 것 짐작(가상의 우리 반 투표)', [['많은 희생', 10], ['이산가족', 8], ['분단', 7], ['무너진 터전', 3]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut classroom board with four cards and small paper figures lined up as a picture graph, white flowers in a vase', banner: '전쟁이 남긴 것은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 학생에게 가족의 전쟁 경험을 묻거나 채점하지 않는다.',
      }),
      M('intro.letter', {
        title: '한 줄 기록의 종류 고르기', method: '증언 한 줄 듣고 기록의 종류 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 "편지"와 "증언" 두 보기만 놓고 함께 고른다.', base: '시연 판의 세 보기(편지·일기·증언) 가운데 가상의 한 줄이 무엇인지 고르는 모습을 보고 까닭을 말한다.', challenge: '그렇게 고른 근거 낱말(받는 사람·날짜·"그때를 떠올리면" 같은 말)을 한 가지 짚는다.' },
        intro: {
          teacher: '"가상의 한 줄을 읽어 줄게요. \'칠십 년이 지났지만, 그때를 떠올리면 아직도 피란길의 추위가 생각납니다.\' 이 한 줄은 편지일까요, 일기일까요, 뒤에 남긴 증언일까요?" 시연 단추로 \'증언\' 카드가 바구니에 담기는 모습을 보인다. "증언은 기억이라 믿을 수 없어요"라는 말에는 "증언을 다른 기록과 견주면 어떻게 될까요?"라고 되묻는다. 읽어 준 한 줄은 수업용으로 지어낸 가상 글이며 실제 인물의 말이 아니라고 밝힌다.',
          student: '가상의 한 줄을 듣고 편지·일기·증언 가운데 무엇인지 골라요. 어느 낱말을 보고 그렇게 생각했는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이 한 줄의 종류', title: '가상의 한 줄', cards: [
            { id: 'l1', text: '전선에서 가족에게 쓴 편지', motif: 'leaf' }, { id: 'l2', text: '그날 밤 적은 일기', motif: 'moon' },
            { id: 'l3', text: '세월이 흐른 뒤 말로 남긴 증언', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['l3'] }] },
          art: { draw: 'a paper-cut old letter, a small diary and a microphone resting on a table beside white flowers', banner: '이 한 줄은 어떤 기록일까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.war', {
        title: '6·25전쟁 전개 시간 띠', method: '6·25전쟁 전개 시간 띠 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 4장(남침·인천 상륙·1·4 후퇴·정전)에 때가 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 6장을 때 없이 차례대로 놓는다.', challenge: '셋째 문항에서 사건과 그 일이 일어난 장소까지 이어 놓는다(함정 카드 포함).' },
        activity: {
          title: '전쟁 전개 시간 띠', tool: 'timeline',
          teacher: '"인천 상륙 작전은 전쟁의 어느 때에 있었을까요?" 카드를 놓을 때마다 근거를 말하게 한다. 중국군 참전을 인천 상륙 작전보다 앞에 두는 학생에게 "국군과 유엔군이 북쪽으로 올라간 뒤에 중국군이 들어왔어요"라고 짚는다. 정전 협정을 전쟁을 끝낸 평화 조약으로 아는 학생에게는 정전은 싸움을 멈춘 것이고 한반도는 지금도 정전 상태라는 점을 알려 준다.',
          task: '6·25전쟁의 사건 카드를 일어난 차례대로 시간 띠에 놓고, 사건과 해·장소를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('6·25전쟁의 사건을 일어난 차례대로 놓아 보세요.', NOYEAR(WAR6), { axis: ['1950년', '1953년'] }),
              OB('때가 적힌 사건 4장을 차례대로 놓아 보세요.', pickCards(WAR6, ['w1', 'w3', 'w5', 'w6']), { axis: ['1950년', '1953년'] }),
              OB('때 없는 사건 6장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(WAR6), { axis: ['1950년', '1953년'] }, [{ id: 'x1', text: '광복' }])),
            IT(MB('6·25전쟁의 사건과 그 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1950년', '전쟁 시작'], ['1951년', '1·4 후퇴'], ['1953년', '정전 협정']], ['광복']),
              MB('6·25전쟁의 사건과 그 해를 이어 보세요(두 쌍).', [['1950년', '전쟁 시작'], ['1953년', '정전 협정']], [])),
            IT(MB('사건과 그 일이 일어난 곳을 이어 보세요.', [['인천 상륙 작전', '인천'], ['정전 협정 서명', '판문점'], ['전쟁 중 임시 수도', '부산']], []),
              MB('사건과 그 일이 일어난 곳을 이어 보세요(두 쌍).', [['인천 상륙 작전', '인천'], ['전쟁 중 임시 수도', '부산']], []),
              MB('사건과 장소를 이어 보세요. 맞지 않는 장소 카드는 남겨요.', [['인천 상륙 작전', '인천'], ['정전 협정 서명', '판문점'], ['전쟁 중 임시 수도', '부산']], ['한라산']),
              { conclude: '1953년 7월 27일 정전 협정으로 싸움은 멈췄지만, 전쟁을 끝낸 평화 조약은 아니어서 한반도는 지금도 정전 상태예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '6·25전쟁의 흐름을 정리해요.', columns: ['때', '일어난 일'], cells: [['1950년 6월 25일', ''], ['1950년 9월', ''], ['1953년 7월 27일', '']], answer: '북한군의 남침 / 인천 상륙 작전 / 정전 협정 체결' }] },
      }),
      M('activity.place', {
        title: '전쟁 관련 장소 칸 지도', method: '전쟁 관련 장소 지도에 찾기', tool: 'map', minutes: 16,
        levels: { easy: '설명마다 장소 이름이 들어 있어 이름을 보고 핀을 꽂는다(문항 4개).', base: '장소 이름 대신 일어난 일만 듣고 알맞은 곳에 핀을 꽂는다(문항 4개).', challenge: '넷째 문항에서 핀을 꽂은 뒤 그 장소에서 일어난 일을 바르게 말한 보기를 함께 고른다.' },
        activity: {
          title: '전쟁 관련 장소 지도', tool: 'map',
          teacher: '"이 일은 어디에서 일어났을까요?" 설명을 읽어 주고 핀을 꽂을 때마다 그 일이 전쟁의 어느 때였는지 시간 띠와 이어 말하게 한다. "전쟁은 휴전선 근처에서만 있었다"는 학생에게 "피란민이 가장 많이 모인 곳은 어디였을까요?"라고 되묻는다. 칸 지도는 실제 거리와 모양이 아니라 자리만 나타낸다는 점을 처음에 밝힌다.',
          task: '6·25전쟁과 관련된 일을 듣고 칸 지도에서 그 일이 일어난 곳에 핀을 꽂아요.',
          levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PIN('1950년 9월, 국군과 유엔군이 바다에서 상륙해 전세를 바꾼 곳에 핀을 꽂으세요.', WMAP(), { place: '인천' }),
              PIN('1950년 9월 상륙 작전이 펼쳐진 인천에 핀을 꽂으세요.', WMAP(), { place: '인천' })),
            IT(PIN('전쟁 중 정부가 옮겨 가 임시 수도가 되었고, 많은 피란민이 모인 남쪽 항구 도시에 핀을 꽂으세요.', WMAP(), { place: '부산' }),
              PIN('전쟁 중 임시 수도였던 부산에 핀을 꽂으세요.', WMAP(), { place: '부산' })),
            IT(PIN('1953년 7월 27일 정전 협정에 서명한 곳에 핀을 꽂으세요.', WMAP(), { place: '판문점' }),
              PIN('정전 협정에 서명한 판문점에 핀을 꽂으세요.', WMAP(), { place: '판문점' })),
            IT(PIN('1·4 후퇴로 다시 내주었다가 되찾은 수도에 핀을 꽂으세요.', WMAP(), { place: '서울' }),
              PIN('1·4 후퇴 때 다시 내주었던 서울에 핀을 꽂으세요.', WMAP(), { place: '서울' }),
              PIN('1·4 후퇴로 다시 내주었던 수도에 핀을 꽂고, 그곳의 일을 바르게 말한 보기를 고르세요.', WMAP({ ask: { q: '이 도시에서 전쟁 중 일어난 일로 알맞은 것은?', choices: ['빼앗겼다가 되찾기를 되풀이했다', '전쟁 내내 한 번도 전투가 없었다', '정전 협정에 서명한 곳이다'] } }), { place: '서울', pick: 0 }),
              { conclude: '전쟁은 한반도 곳곳에 상처를 남겼어요. 장소를 기억하는 것도 희생을 기억하는 한 방법이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 핀을 꽂은 곳 가운데 두 곳을 골라, 그곳에서 일어난 일을 한 문장씩 써요.' }] },
      }),
      M('activity.result', {
        title: '전쟁의 결과 그때·오늘 나누기', method: '전쟁의 결과 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 5장을 \'전쟁 중·직후\'·\'오늘까지 이어짐\' 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 8장(함정 1장)을 두 바구니에 나눈다.', challenge: '셋째 문항에서 오늘의 모습과 이어지는 활동 카드를 나누고, 그 가운데 하나를 활동지에 설명한다.' },
        activity: {
          title: '전쟁의 결과 나누기', tool: 'sortboard',
          teacher: '"이 결과는 전쟁 중에 끝난 일일까요, 오늘까지 이어지는 일일까요?" 카드마다 근거를 말하게 한다. 정전 상태를 지난 일로 두는 학생에게 "평화 조약을 맺었나요, 싸움만 멈췄나요?"라고 되묻는다. 전쟁 이야기를 어느 한쪽 주민 전체에 대한 미움으로 말하는 학생에게는 전쟁으로 다친 사람은 남북 모두였다는 점을 짚는다.',
          task: '6·25전쟁의 결과 카드를 \'전쟁 중·직후\'와 \'오늘까지 이어짐\'으로 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('전쟁의 결과를 두 바구니에 나누세요. 사실이 아닌 카드는 남겨요.', ['전쟁 중·직후', '오늘까지 이어짐'], RESULT),
              SB('결과 카드 5장을 두 바구니에 나누세요.', ['전쟁 중·직후', '오늘까지 이어짐'], pickCards(RESULT, ['a1', 'a2', 'b1', 'b2', 'b3']))),
            IT(SB('결과를 사람에게 남은 것과 나라에 남은 것으로 나누세요.', ['사람에게 남은 것', '나라에 남은 것'], [
              { id: 'p1', text: '많은 사상자', to: '사람에게 남은 것' }, { id: 'p2', text: '흩어진 가족', to: '사람에게 남은 것' },
              { id: 'n1', text: '분단의 고착', to: '나라에 남은 것' }, { id: 'n2', text: '산업 시설 파괴', to: '나라에 남은 것' }]),
              SB('결과 4장을 사람과 나라로 나누세요.', ['사람에게 남은 것', '나라에 남은 것'], [
                { id: 'p1', text: '많은 사상자', to: '사람에게 남은 것' }, { id: 'p2', text: '흩어진 가족', to: '사람에게 남은 것' },
                { id: 'n1', text: '분단의 고착', to: '나라에 남은 것' }, { id: 'n2', text: '산업 시설 파괴', to: '나라에 남은 것' }])),
            IT(SB('오늘의 활동을 \'아픔을 덜어 주는 일\'과 \'기억을 지키는 일\'로 나누세요.', ['아픔을 덜어 주는 일', '기억을 지키는 일'], [
              { id: 'q1', text: '이산가족 상봉 신청', to: '아픔을 덜어 주는 일' }, { id: 'q2', text: '유해 신원 확인해 가족 품으로', to: '아픔을 덜어 주는 일' },
              { id: 'q3', text: '참전 용사 구술 기록', to: '기억을 지키는 일' }, { id: 'q4', text: '현충일 추모식', to: '기억을 지키는 일' },
              { id: 'q5', text: '전쟁을 미움의 이야기로만 전하기' }]),
              null, null, { conclude: '6·25전쟁은 정전 상태로 멈춰 있어 분단과 이산가족의 아픔이 오늘까지 이어지고, 유해 발굴과 기록으로 희생을 기억하는 일도 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '6·25전쟁의 결과를 정리해요.', columns: ['구분', '결과'], cells: [['전쟁 중·직후', ''], ['오늘까지 이어짐', '']], answer: '사상자·파괴·피란 / 이산가족·분단·정전 상태·유해 발굴' }] },
      }),
      M('activity.respect', {
        title: '현충일 추모 장면 갈림길', method: '추모 장면에서 고르기', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(오전 10시 사이렌)에서 한 번 골라 결과를 본다.', base: '갈림길 두 번(사이렌·추모 공간)을 끝까지 가 보고 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번(동생에게 뜻 알려 주기까지)을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '추모 장면 갈림길', tool: 'dilemma',
          teacher: '"오전 10시 사이렌이 울리면 1분 동안 무엇을 할까요?" 가상 학생 윤의 길을 끝까지 따라간 뒤 되돌아가 다른 길과 견주게 한다. "쉬는 날이니 상관없다"는 학생에게 "그날 쉬는 까닭은 무엇일까요?"라고 되묻는다. 윤은 가상 인물이며, 학생에게 가족 가운데 희생한 분이 있는지 묻지 않는다.',
          task: '현충일 가상 학생 윤의 길을 골라 결과를 따라가고, 끝에서 추모 예절의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '현충일 오전 10시가 다가와요. 윤이 할 일을 한 번 골라 결과를 보세요.', base: '윤의 갈림길 두 번을 끝까지 가 보고, 내 선택의 근거를 고르세요.', challenge: '윤의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '현충일, 가상 학생 윤', D1, [['stop', 'quiet', 'explain']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            IT({ prompt: '추모 공간에서 친구가 장난스러운 사진을 찍자고 해요. 알맞은 선택을 골라 끝까지 가 보세요.', toolOptions: { title: '추모 공간에서', scene: { text: '현충 시설(추모 공간) 묘역 앞에서 친구가 장난스러운 자세로 사진을 찍자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'quiet', text: '조용히 안내판을 읽고 추모하자고 한다', result: '모신 분들의 이야기를 함께 읽는다.', impact: [{ who: '유가족', text: '존중받는다', tone: 1 }], ending: '예를 갖춰 추모했어요.' },
              { id: 'pose', text: '같이 장난스러운 사진을 찍는다', result: '곁에 있던 유가족이 얼굴을 찡그린다.', impact: [{ who: '유가족', text: '마음이 상한다', tone: -1 }], why: '추모 공간에서는 조용히 예를 갖춰요.', ending: '유가족의 마음이 상했어요.' }] }, reasons: [] }, target: { path: [['quiet']] } }),
            IT({ prompt: '동생이 "현충일은 그냥 쉬는 날이지?"라고 물어요. 알맞은 대답을 골라 근거도 고르세요.', toolOptions: { title: '날의 뜻 나누기', scene: { text: '동생이 "현충일은 그냥 쉬는 날이지?"라고 묻는다.', ask: '무엇이라고 할까?', motif: 'house', choices: [
              { id: 'explain', text: '희생한 분들을 추모하는 날이라고 알려 준다', result: '동생이 다음 현충일에 함께 묵념하겠다고 한다.', impact: [{ who: '동생', text: '날의 뜻을 안다', tone: 1 }], ending: '날의 뜻을 나누었어요.' },
              { id: 'skip', text: '"응, 쉬는 날이야"라고만 한다', result: '동생은 뜻을 모른 채 넘어간다.', impact: [{ who: '동생', text: '날의 뜻을 모른다', tone: -1 }], why: '날의 뜻을 함께 나눌 수 있어요.', ending: '뜻을 나누지 못했어요.' }] }, reasons: [{ id: 'q1', text: '현충일은 나라를 위해 희생한 분들을 기리는 날이다' }, { id: 'q2', text: '쉬는 날은 뜻이 없어도 된다', why: '국가가 정한 날에는 기리는 뜻이 있어요.' }] }, target: { path: [['explain']], reasons: ['q1'] } },
              null, null, { conclude: '현충일에는 오전 10시 사이렌에 맞춰 1분 동안 묵념하고, 추모 공간에서는 조용히 예를 갖추며, 날의 뜻을 함께 나눠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '현충일 오전 10시 사이렌이 울릴 때 할 일로 알맞은 것은?', options: ['하던 일을 계속한다', '멈춰 서서 1분 동안 묵념한다', '박수를 친다'], answer: '멈춰 서서 1분 동안 묵념한다' }] },
      }),
      M('activity.testimony', {
        title: '기록과 증언으로 전쟁의 모습 쓰기', method: '기록과 증언으로 전쟁의 모습 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '기록 종류(편지·사진·구술 증언)를 문장 틀로 가려 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '기록마다 알 수 있는 것을 쓰고, 정전 협정·유해 발굴 기록이 오늘 알려 주는 것을 세 문장 글로 쓴 뒤 기준표로 점검한다.', challenge: '마지막 글에서 증언의 한계와 그것을 보완하는 방법까지 넣어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '기록과 증언 쓰기', tool: 'rubric-writing',
          teacher: '"전쟁을 겪은 분들이 점점 줄어들면, 전쟁의 기억은 무엇으로 이어질까요?" 문항마다 기록이 언제·누가 만든 것인지 먼저 말하게 한 뒤 쓰게 한다. "증언은 기억이라 믿을 수 없다"는 학생에게 "증언을 날짜·장소가 적힌 다른 기록과 견주면 어떻게 될까요?"라고 되묻는다. 편지 한 통으로 "모든 병사가 그랬다"고 쓰는 학생에게는 한 기록이 말할 수 있는 범위를 짚는다. 학생에게 가족의 전쟁 경험을 쓰게 하지 않는다.',
          task: '6·25전쟁의 편지·사진·구술 증언이 각각 무엇을 알려 주는지 쓰고, 정전 협정과 유해 발굴 기록이 오늘 알려 주는 것을 짧은 글로 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('전선의 병사 편지와 세월이 흐른 뒤의 구술 증언이 무엇이 다른지 두 문장으로 쓰세요.', { topic: '전쟁 중에 쓴 병사의 편지와 수십 년 뒤 말로 남긴 구술 증언은 만든 때와 알려 주는 것이 어떻게 다른지 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ① 편지와 증언' }, ['만든 때가 다르다는 점을 썼다', '각각 알려 주는 것을 썼다', '한 기록으로 모두를 말하지 않았다'], [['편지'], ['증언']]),
              RW('틀을 채워 편지와 증언의 차이를 쓰세요.', { topic: '편지와 구술 증언의 차이를 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '편지는 ___에 쓴 기록이고, 구술 증언은 ___ 뒤에 말로 남긴 기억이다.' }, ['만든 때가 다르다는 점을 썼다', '내 말로 썼다'], [['편지'], ['증언']])),
            IT(RW('1953년 정전 협정 기록이 오늘 우리에게 알려 주는 것을 두 문장으로 쓰세요.', { topic: '1953년 7월 27일 정전 협정 기록이 오늘 한반도에 대해 알려 주는 것을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ② 정전 협정' }, ['정전과 종전의 차이를 썼다', '오늘까지 이어지는 점을 썼다', '사실만 썼다'], [['정전']]),
              RW('틀을 채워 정전 협정이 알려 주는 것을 쓰세요.', { topic: '정전 협정이 알려 주는 것을 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '정전 협정은 싸움을 ___ 약속이어서, 한반도는 지금도 ___ 상태이다.' }, ['정전의 뜻을 썼다', '내 말로 썼다'], [['정전']])),
            IT(RW('전사자 유해 발굴과 신원 확인이 왜 오늘도 이어지는지 두 문장으로 쓰세요.', { topic: '전사자 유해 발굴과 신원 확인이 왜 오늘도 이어지는지, 누구에게 어떤 뜻이 있는지 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ③ 유해 발굴' }, ['유해 발굴의 목적을 썼다', '누구에게 뜻이 있는지 썼다', '희생을 존중하는 말로 썼다'], [['유해', '발굴'], ['가족', '유가족']]),
              RW('틀을 채워 유해 발굴의 뜻을 쓰세요.', { topic: '유해 발굴의 뜻을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '유해 발굴은 신원을 확인해 ___의 품으로 돌려보내는 일이다.' }, ['유해 발굴의 목적을 썼다', '내 말로 썼다'])),
            IT(RW('앞의 글을 이어, 기록과 증언이 오늘 전쟁에 대해 알려 주는 것을 세 문장으로 쓰세요.', { topic: '편지·증언·정전 협정·유해 발굴 기록이 오늘 6·25전쟁에 대해 알려 주는 것을 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '기록이 알려 주는 전쟁' }, ['기록을 두 가지 이상 다루었다', '오늘까지 이어지는 점을 썼다', '희생을 존중하는 말로 썼다', '어느 쪽 사람을 미워하는 말을 쓰지 않았다'], [['기록', '증언']]),
              RW('틀을 채워 기록이 알려 주는 것을 두 문장으로 쓰세요.', { topic: '기록이 알려 주는 6·25전쟁을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '편지와 증언은 ___을 알려 준다. 정전 협정과 유해 발굴은 전쟁의 아픔이 ___ 이어진다는 것을 알려 준다.' }, ['기록을 두 가지 이상 다루었다', '오늘까지 이어지는 점을 썼다'], [['기록', '증언', '편지']]),
              RW('기록과 증언이 알려 주는 것에 증언의 한계와 보완 방법까지 넣어 한 문단으로 쓰세요.', { topic: '기록과 증언이 6·25전쟁에 대해 알려 주는 것, 그리고 증언의 한계와 그것을 보완하는 방법(다른 기록과 견주기 등)을 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '증언의 한계까지' }, ['기록을 두 가지 이상 다루었다', '증언의 한계를 썼다', '보완하는 방법을 썼다', '희생을 존중하는 말로 썼다'], [['증언'], ['견주', '비교', '확인']]),
              { conclude: '편지와 사진은 그때의 모습을, 증언은 겪은 사람의 기억을 보여 줘요. 여러 기록을 견주어 읽을 때 전쟁의 모습과 희생을 바르게 기억할 수 있어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '전쟁의 기록을 정리해요.', columns: ['기록', '만든 때', '알 수 있는 것'], cells: [['병사의 편지', '', ''], ['종군 기자 사진', '', ''], ['구술 증언', '', '']], answer: '전쟁 중·병사의 마음과 형편 / 전쟁 중·현장 모습 / 전쟁 뒤·겪은 사람의 기억' },
          { type: 'choice', prompt: '구술 증언을 믿을 만하게 읽는 방법으로 알맞은 것은?', options: ['한 사람의 말로 결론 낸다', '날짜·장소를 확인하고 다른 기록과 견준다', '극적인 부분만 고른다'], answer: '날짜·장소를 확인하고 다른 기록과 견준다' }] },
      }),

      // ---- 정리 ----
      M('wrap.manner', {
        title: '추모 예절 차례와 1분 묵념', method: '추모 예절 순서 확인', tool: 'timer', minutes: 7,
        levels: { easy: '예절 카드 2장(조기 달기·10시 묵념)을 차례로 놓고 점검 칸 하나에 표시한다.', base: '예절 카드 3장을 차례로 놓고, 묵념 타이머를 1분(60초)·1번으로 맞춘 뒤 점검 칸 두 개에 표시한다.', challenge: '카드 3장과 타이머를 맞추고, 점검 칸 세 개(가족과 함께할 일 하나 정하기 포함)에 표시한다.' },
        wrap: {
          teacher: '"현충일 하루, 추모 예절은 어떤 차례로 할까요?" 예절 카드를 놓은 뒤 타이머를 1분으로 맞추고 함께 조용히 1분을 지켜 본다. "국경일처럼 태극기를 높이 단다"는 학생에게 "기리는 날과 기쁜 날의 태극기는 어떻게 다를까요?"라고 되묻고, 현충일에는 깃면 너비만큼 내려 다는 조기를 단다는 점을 짚는다. 실제 1분 묵념 연습은 원하는 학생만 함께한다.',
          exitTicket: [
            IT(SELF('예절 카드를 차례로 놓고, 묵념 타이머를 60초·1번으로 맞춘 뒤 점검해요.', '현충일 추모 예절', ['오전 10시 사이렌에 1분 묵념', '아침에 태극기를 조기로 단다', '추모 공간에서는 조용히 예를 갖춘다'], ['아침에 태극기를 조기로 단다', '오전 10시 사이렌에 1분 묵념', '추모 공간에서는 조용히 예를 갖춘다'], ['예절마다 까닭을 말할 수 있다', '조기와 국경일 태극기의 차이를 말할 수 있다'], { options: { title: '현충일 추모 예절', labels: ['묵념', '쉬기'], plan: { work: 20, rest: 0, rounds: 2 }, cards: ['오전 10시 사이렌에 1분 묵념', '아침에 태극기를 조기로 단다', '추모 공간에서는 조용히 예를 갖춘다'] }, target: { order: ['아침에 태극기를 조기로 단다', '오전 10시 사이렌에 1분 묵념', '추모 공간에서는 조용히 예를 갖춘다'], plan: { work: 60, rounds: 1 }, selfCheck: ['예절마다 까닭을 말할 수 있다', '조기와 국경일 태극기의 차이를 말할 수 있다'] } }),
              { prompt: '예절 카드 2장을 차례로 놓고 점검해요.', toolOptions: { cards: ['오전 10시 사이렌에 1분 묵념', '아침에 태극기를 조기로 단다'] }, target: { order: ['아침에 태극기를 조기로 단다', '오전 10시 사이렌에 1분 묵념'], selfCheck: ['예절마다 까닭을 말할 수 있다'] } },
              { prompt: '예절 카드를 차례로 놓고 타이머를 60초·1번으로 맞춘 뒤, 가족과 함께할 일까지 정하고 점검해요.', target: { order: ['아침에 태극기를 조기로 단다', '오전 10시 사이렌에 1분 묵념', '추모 공간에서는 조용히 예를 갖춘다'], plan: { work: 60, rounds: 1 }, selfCheck: ['예절마다 까닭을 말할 수 있다', '조기와 국경일 태극기의 차이를 말할 수 있다', '다음 현충일에 가족과 함께할 일 하나를 정했다'] } }),
            { type: 'choice', prompt: '현충일에 태극기를 다는 방법으로 알맞은 것은?', options: ['깃면 너비만큼 내려 조기로 단다', '깃봉에 붙여 높이 단다', '달지 않는다'], answer: 0, difficulty: 0.2, explain: '현충일은 희생을 기리는 날이라 조기를 달아요.' },
          ],
        },
        worksheet: {
          title: '현충일 추모 예절',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '현충일 오전 ___시 사이렌이 울리면 ___분 동안 묵념한다.', answer: '10, 1' },
            { type: 'short', prompt: '다음 현충일에 가족이나 친구와 함께할 추모 예절 하나를 써요.' },
          ],
        },
      }),
      M('wrap.now', {
        title: '오늘까지 남은 것 짝 짓기', method: '오늘까지 남은 것 하나 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '오늘의 장면 2개(이산가족 상봉 신청·휴전선)에 전쟁이 남긴 것을 짝 짓는다.', base: '오늘의 장면 3개에 전쟁이 남긴 것을 짝 짓는다(함정 카드 포함).', challenge: '장면 3개를 짝 지은 뒤, 고른 짝 하나의 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"뉴스에서 이런 장면을 보면 6·25전쟁과 어떻게 이어질까요?" 장면마다 짝 지은 까닭을 말하게 한다. "전쟁은 옛날 일이라 오늘과 관계없다"는 학생에게 오늘 나눈 \'오늘까지 이어짐\' 바구니를 다시 떠올리게 한다. 학생의 가족 이야기를 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '이산가족 상봉 신청 뉴스' }, { id: 's2', label: '휴전선 철책 사진' }, { id: 's3', label: '유해 신원 확인 소식' }], cards: [{ id: 'k1', text: '흩어진 가족' }, { id: 'k2', text: '분단과 정전 상태' }, { id: 'k3', text: '돌아오지 못한 희생자' }, { id: 'x1', text: '평화 조약 체결' }] }, prompt: '오늘의 장면과 전쟁이 남긴 것을 짝 지어요. 맞지 않는 카드는 남겨요.', target: { match: { s1: 'k1', s2: 'k2', s3: 'k3' } }, difficulty: 0.2 },
              { prompt: '오늘의 장면 두 개와 전쟁이 남긴 것을 짝 지어요.', toolOptions: { slots: [{ id: 's1', label: '이산가족 상봉 신청 뉴스' }, { id: 's2', label: '휴전선 철책 사진' }], cards: [{ id: 'k1', text: '흩어진 가족' }, { id: 'k2', text: '분단과 정전 상태' }] }, target: { match: { s1: 'k1', s2: 'k2' } } }),
            { type: 'choice', prompt: '6·25전쟁에 대한 설명으로 알맞은 것은?', options: ['정전 협정으로 싸움이 멈춘 뒤 아직 정전 상태이다', '평화 조약으로 완전히 끝났다', '오늘 우리 사회와는 관계가 없다'], answer: 0, difficulty: 0.2, explain: '정전 상태가 이어지며 분단과 이산가족의 아픔이 남아 있어요.' },
          ],
        },
        worksheet: {
          title: '오늘까지 남은 것',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '6·25전쟁은 1953년 ___ 협정으로 싸움이 멈추었다.', answer: '정전' },
            { type: 'short', prompt: '오늘 짝 지은 것 하나를 골라, 그것이 왜 오늘까지 남아 있는지 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.keep', {
        title: '살아 있는 기억 지키는 방법', method: '살아 있는 기억 보존 방법 한 줄', tool: 'mindmap', minutes: 7,
        levels: { easy: '기억을 지키는 방법 카드 가운데 맞는 것만 고른다(함정 카드 1장).', base: '방법 카드를 고른 뒤, 그 방법이 왜 필요한지 까닭 카드와 잇는다.', challenge: '까닭을 이은 뒤, 우리 학교에서 할 수 있는 일을 활동지에 한 줄 쓴다.' },
        wrap: {
          teacher: '"전쟁을 겪은 분들의 기억을 우리 세대가 이어 가려면 무엇을 할 수 있을까요?" 학생이 고른 방법마다 누가, 어디서 할 수 있는지 묻는다. "기억은 어른들 몫"이라는 학생에게 "학교 도서관이나 교실에서 할 수 있는 일은 없을까요?"라고 되묻는다. 가족에게 이야기를 듣는 것은 선택 과제로만 둔다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '기억을 지키는 방법', basket: '기억을 지키는 방법', cards: [...KEEP.map((t, i) => ({ id: `k${i + 1}`, text: t })), { id: 'x1', text: '전쟁 이야기를 미움으로만 전하기' }, { id: 'x2', text: '오래된 기록 버리기' }] }, prompt: '희생과 전쟁의 기억을 지키는 방법만 골라 담아요.', target: { pick: ['k1', 'k2', 'k3', 'k4'] }, difficulty: 0.2 },
              { prompt: '기억을 지키는 방법만 골라 담아요(함정 카드 1장).', toolOptions: { cards: [...KEEP.slice(0, 3).map((t, i) => ({ id: `k${i + 1}`, text: t })), { id: 'x2', text: '오래된 기록 버리기' }] }, target: { pick: ['k1', 'k2', 'k3'] } }),
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 필요할까?', slots: [{ id: 'm1', label: '구술 기록 남기기' }, { id: 'm2', label: '유해 발굴' }], cards: [{ id: 'c1', text: '겪은 분들의 기억이 사라지기 전에' }, { id: 'c2', text: '희생자를 가족 품으로' }, { id: 'c3', text: '전쟁 영화를 만들려고' }] }, prompt: '방법과 그 방법이 필요한 까닭을 이어요.', target: { match: { m1: 'c1', m2: 'c2' } }, difficulty: 0.25 },
            { type: 'short', prompt: '우리 학교에서 전쟁의 기억을 지키려고 할 수 있는 일 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '살아 있는 기억 지키기',
          items: [
            { type: 'check', prompt: '내가 해 볼 수 있는 기억 지키기에 표시해요.', options: ['현충일 묵념 함께하기', '기념관 자료 찾아 읽기', '들은 이야기를 허락받아 기록하기'] },
            { type: 'short', prompt: '기억을 지키는 방법 하나와 그 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 6·10민주항쟁 기념일 — 1987년 6월과 직선제 개헌 (days.m.june10) ====
  {
    const M = MK('june10');
    const FLOW5 = [
      { id: 'e1', text: '박종철 고문치사 사건(1월)' }, { id: 'e2', text: '4·13 호헌 조치(4월)' }, { id: 'e3', text: '6월 10일 국민 대회' },
      { id: 'e4', text: '6·29 선언(6월 말)' }, { id: 'e5', text: '개헌안 국민 투표(10월)' },
    ];
    const NODATE = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const AFTER = [
      { id: 'a1', text: '6·29 선언' }, { id: 'a2', text: '여야 합의로 개헌안 마련' }, { id: 'a3', text: '개헌안 국민 투표' }, { id: 'a4', text: '새 헌법으로 대통령 선거' },
    ];
    const CH = [
      { id: 'b1', text: '대통령 선거인단이 간접 선출', to: '항쟁 전' }, { id: 'b2', text: '대통령 임기 7년 단임', to: '항쟁 전' }, { id: 'b3', text: '헌법재판소가 없음', to: '항쟁 전' },
      { id: 'n1', text: '국민이 대통령을 직접 선출', to: '항쟁 뒤' }, { id: 'n2', text: '대통령 임기 5년 단임', to: '항쟁 뒤' }, { id: 'n3', text: '헌법재판소 신설', to: '항쟁 뒤' },
    ];
    const TERM = { type: 'bar', mode: 'read', title: '개헌 전후 대통령 임기', unit: '년', xLabel: '헌법', yLabel: '임기', max: 8, data: [['개헌 전 헌법', 7], ['지금 헌법(1987)', 5]] };

    ALL.push(
      // ---- 도입 ----
      M('intro.direct', {
        title: '직접 뽑기와 대신 뽑기 견주기', method: '직접 뽑기와 대신 뽑기 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '장면 두 개(국민이 직접 투표·선거인단이 대신 투표)에 이름 카드를 잇는다.', base: '시연 판의 장면 세 개가 이어지기 전에, 장면마다 이름을 먼저 짐작해 말한다.', challenge: '직접 선거와 간접 선거의 차이를 한 줄로 말한다.' },
        intro: {
          teacher: '"우리나라 대통령은 누가 뽑나요?" 대답을 듣고(기다릴 반응: "국민이요", "투표로요") 국민이 대통령을 직접 뽑는 지금의 방식이 1987년 6월 민주 항쟁의 결과로 얻어진 것이라고 알린다. 시연 단추로 장면과 이름 카드가 이어지는 모습을 보인다. "원래부터 그랬다"는 말에는 "그 전에는 대통령을 누가 뽑았을까요? 둘째 장면을 보세요"라고 되묻는다.',
          student: '대통령을 뽑는 장면 세 개를 보고 이름 카드를 이어요. 직접 뽑기와 대신 뽑기가 무엇이 다른지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '국민이 투표소에서 대통령 후보에게 직접 표를 낸다' }, { id: 'b', label: '국민이 뽑은 선거인단이 모여 대통령을 뽑는다' }, { id: 'c', label: '기표소에 혼자 들어가 아무도 모르게 표시한다' }], cards: [{ id: 'm1', text: '직접 선거' }, { id: 'm2', text: '간접 선거' }, { id: 'm3', text: '비밀 선거' }, { id: 'm4', text: '공개 투표' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2' } }, { match: { a: 'm1', b: 'm2', c: 'm3' } }] },
          art: { draw: 'paper-cut office workers and students side by side on a wide street, with a large ballot box glowing in the sky', banner: '대통령은 누가 뽑을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.demand', {
        title: '1987년 시민들이 바란 것 짐작 투표', method: '1987년 시민들이 가장 바란 것 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 칠판에 적어 두고, 가장 그럴듯한 것에 손을 들어 투표한다.', base: '투표한 뒤 시민들이 바랐을 것을 스스로 두 가지 말해 본다.', challenge: '짐작마다 확인할 근거 자료(헌법 조문·교과서·기념사업회 자료)를 하나씩 말한다.' },
        intro: {
          teacher: '"1987년 6월, 거리에 나선 시민들이 가장 바란 것은 무엇이었을까요?" 보기 넷에 손을 든 수를 세어 말한 뒤, 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는 모습을 보인다. "학생들만 거리에 나섰다"는 말에는 "점심시간에 넥타이를 맨 회사원들도 함께했다는 기록이 있어요. 그들은 무엇을 바랐을까요?"라고 되묻는다. 오늘의 질문은 "6월 민주 항쟁은 왜 일어났고, 무엇을 바꾸었나?"로 정한다.',
          student: '1987년 시민들이 가장 바란 것 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('1987년 시민들이 가장 바란 것 짐작(가상의 우리 반 투표)', [['대통령을 직접 뽑기', 12], ['고문 사건의 진실 밝히기', 7], ['헌법 바꾸기', 5], ['말할 자유', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut classroom board with four paper cards and small paper figures lined up as a picture graph, a calendar page showing June', banner: '1987년, 무엇을 바랐을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 실제 투표는 손 들기로 하고 결과를 채점하지 않는다.',
      }),
      M('intro.article', {
        title: '대통령 선거 조문 한 줄 듣기', method: '헌법 조문 한 줄 소리 내어 읽기', tool: 'story', minutes: 6,
        levels: { easy: '낱말 카드 두 장(직접·비밀) 가운데 조문에 나온 낱말을 고른다.', base: '시연 판의 낱말 카드 가운데 조문에 나온 핵심 낱말 넷이 바구니에 담기는 것을 보고 뜻을 말한다.', challenge: '이 조문이 헌법 몇 조인지(제67조) 교과서나 법령 자료에서 찾아 말한다.' },
        intro: {
          teacher: '"대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다." 지금 헌법의 대통령 선거 조문을 소리 내어 읽고, 시연 단추로 조문에 나온 핵심 낱말이 바구니에 담기는 모습을 보인다. "조문은 어렵기만 하다"는 학생에게 "누가, 어떻게 뽑는지만 찾아 읽어 볼까요?"라고 읽는 방법을 짚어 준다. 이 한 줄이 1987년 개헌으로 들어온 문장이라고 알린다.',
          student: '헌법 조문 한 줄을 듣고 조문에 나온 핵심 낱말을 골라요. 그 낱말이 선거에서 무엇을 지켜 주는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '조문에 나온 낱말', title: '대통령 선거 조문', cards: [
            { id: 'w1', text: '보통', motif: 'sun' }, { id: 'w2', text: '평등', motif: 'leaf' }, { id: 'w3', text: '직접', motif: 'star' },
            { id: 'w4', text: '비밀', motif: 'moon' }, { id: 'w5', text: '선거인단', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['w1'] }, { pick: ['w1', 'w2', 'w3', 'w4'] }] },
          art: { draw: 'two paper-cut constitution books side by side, one dim and one bright, with ballots fluttering between them', banner: '조문 한 줄에 무엇이 담겼을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.flow', {
        title: '6월 민주 항쟁 흐름 시간 띠', method: '6월 민주항쟁 흐름 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 3장(호헌 조치·국민 대회·6·29 선언)에 달이 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '1987년 사건 카드 5장을 달 없이 차례대로 놓는다.', challenge: '셋째 문항에서 선언→합의→국민 투표→선거 차례까지 놓고, 함정 카드 한 장을 남긴다.' },
        activity: {
          title: '항쟁 흐름', tool: 'timeline',
          teacher: '"6·29 선언은 시위 앞일까요, 뒤일까요?" 4·13 호헌 조치를 6월 10일 뒤에 두는 학생에게 헌법을 바꾸지 않겠다는 발표가 시민들을 거리로 나서게 했다는 점을 짚는다. 6·29 선언과 개헌을 같은 것으로 여기는 학생에게 "선언은 약속이고, 헌법이 실제로 바뀐 것은 언제였을까요?"라고 되묻는다. 개헌은 국회만 결정한 것이 아니라 국민 투표로 확정되었다는 점을 짚는다.',
          task: '1987년 6월 민주 항쟁의 사건 카드를 일어난 차례대로 시간 띠에 놓고, 6·29 선언 뒤 헌법이 바뀐 차례도 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('1987년의 사건 5장을 일어난 차례대로 놓아 보세요.', NODATE(FLOW5), { axis: ['1987년 1월', '1987년 10월'] }),
              OB('1987년 사건 3장을 차례대로 놓아 보세요(달이 적혀 있어요).', pickCards(FLOW5, ['e2', 'e3', 'e4']), { axis: ['1987년 4월', '1987년 6월'] })),
            IT(MB('구호와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', [['호헌 철폐', '지금 헌법을 그대로 두지 말고 바꾸자'], ['직선제 쟁취', '국민이 대통령을 직접 뽑자']], ['선거를 미루자']),
              MB('구호와 그 뜻을 이어 보세요.', [['직선제 쟁취', '국민이 대통령을 직접 뽑자']], ['선거를 미루자'])),
            IT(OB('6·29 선언 뒤 헌법이 바뀐 차례대로 놓아 보세요.', AFTER, { axis: ['먼저', '나중'] }),
              OB('6·29 선언 뒤의 일 세 장을 차례대로 놓아 보세요.', pickCards(AFTER, ['a1', 'a3', 'a4']), { axis: ['먼저', '나중'] }),
              OB('6·29 선언 뒤 헌법이 바뀐 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', AFTER, { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '대통령 혼자 헌법 공포' }]),
              { conclude: '6월 민주 항쟁의 요구는 6·29 선언, 여야 합의, 국민 투표를 거쳐 새 헌법이 되었고, 1987년 헌법이 지금의 헌법이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '6월 민주 항쟁의 흐름을 정리해요.', columns: ['원인', '과정', '결과'], cells: [['', '', '']], answer: '박종철 고문치사 사건·4·13 호헌 조치 / 6월 10일 국민 대회와 전국 시위 / 6·29 선언과 직선제 개헌' }] },
      }),
      M('activity.change', {
        title: '항쟁 전·후 카드 나누기', method: '항쟁이 바꾼 것 잇기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 4장을 항쟁 전·항쟁 뒤 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 6장을 항쟁 전·항쟁 뒤로 나눈다.', challenge: '셋째 문항에서 바뀐 것과 바뀌지 않은 것을 나누고, 바뀐 것 하나를 활동지에 설명한다.' },
        activity: {
          title: '바뀐 것', tool: 'sortboard',
          teacher: '"6월 항쟁 전과 뒤에 무엇이 달라졌을까요?" "대통령 임기 7년"을 항쟁 뒤에 두는 학생에게 지금 대통령 임기는 5년 단임이라는 점을 짚는다. "직선제는 처음부터 있었다"는 학생에게 "항쟁 전 헌법에서는 대통령을 누가 뽑았나요?"라고 되묻는다. 오늘의 정치 이야기로 번지면 이 시간은 1987년 개헌 전후의 사실만 다룬다고 정리한다.',
          task: '6월 민주 항쟁 전과 뒤의 헌법 모습을 바구니에 나누고, 항쟁에 함께한 사람과 바뀐 것을 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 항쟁 전과 항쟁 뒤 헌법의 모습으로 나누세요.', ['항쟁 전', '항쟁 뒤'], CH),
              SB('카드 4장을 항쟁 전과 항쟁 뒤로 나누세요.', ['항쟁 전', '항쟁 뒤'], pickCards(CH, ['b1', 'b2', 'n1', 'n2']))),
            IT(SB('6월 민주 항쟁에 함께한 사람과 그렇지 않은 쪽을 나누세요.', ['함께한 사람들', '함께하지 않은 쪽'], [
              { id: 'p1', text: '대학생', to: '함께한 사람들' }, { id: 'p2', text: '점심시간의 회사원', to: '함께한 사람들' },
              { id: 'p3', text: '종교인과 시민', to: '함께한 사람들' }, { id: 'p4', text: '외국 군대', to: '함께하지 않은 쪽' }])),
            IT(SB('1987년 개헌으로 바뀐 것과 그 전부터 이어진 것을 나누세요.', ['개헌으로 바뀐 것', '그 전부터 이어진 것'], [
              { id: 'c1', text: '국민의 대통령 직접 선거', to: '개헌으로 바뀐 것' }, { id: 'c2', text: '헌법재판소 설치', to: '개헌으로 바뀐 것' },
              { id: 'c3', text: '국회가 있는 것', to: '그 전부터 이어진 것' }, { id: 'c4', text: '대법원이 있는 것', to: '그 전부터 이어진 것' }]),
              null, null, { conclude: '6월 민주 항쟁으로 국민이 대통령을 직접 뽑고, 임기는 5년 단임이 되었으며, 헌법재판소가 새로 생겼어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '1987년 개헌으로 바뀐 것 하나를 골라, 그 전과 무엇이 달라졌는지 한 문장으로 써요.' }] },
      }),
      M('activity.chain', {
        title: '원인과 결과 사슬 생각 그물', method: '원인과 결과 사슬 놓기', tool: 'mindmap', minutes: 16,
        levels: { easy: '원인·결과 가지에 카드 4장을 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '원인·결과 가지에 카드 6장(함정 포함)을 붙이고, 원인과 그것이 부른 반응을 잇는다.', challenge: '셋째 문항에서 사슬의 바른 설명 카드를 고르고, 활동지에 사슬을 두 문장으로 설명한다.' },
        activity: {
          title: '원인 사슬', tool: 'mindmap',
          teacher: '"이 카드는 항쟁의 원인일까요, 결과일까요?" 헌법재판소 신설을 원인으로 두는 학생에게 1987년 새 헌법에서 생긴 기관이라는 점을 짚는다. 6·29 선언을 원인으로 여기는 학생에게 "6·29 선언은 시민들의 어떤 요구에 대한 답이었을까요?"라고 되묻는다. 한 사건 때문이라고 말하는 학생에게는 오래 쌓인 직선제에 대한 바람을 함께 떠올리게 한다.',
          task: '6월 민주 항쟁의 원인과 결과 카드를 생각 그물 가지에 붙이고, 원인과 그것이 부른 반응을 이어 사슬을 만들어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 6월 민주 항쟁의 원인과 결과 가지에 붙이세요. 사실이 아닌 카드는 남겨요.', ['원인', '결과'], [
              { id: 'c1', text: '고문치사 사건 은폐가 드러남', to: '원인' }, { id: 'c2', text: '4·13 호헌 조치', to: '원인' }, { id: 'c3', text: '직선제에 대한 오랜 바람', to: '원인' },
              { id: 'r1', text: '대통령 직선제', to: '결과' }, { id: 'r2', text: '헌법재판소 신설', to: '결과' }, { id: 't1', text: '대통령 선거가 사라짐' }], { topic: '6월 민주 항쟁' }),
              SB('카드 4장을 원인과 결과 가지에 붙이세요.', ['원인', '결과'], [
                { id: 'c1', text: '고문치사 사건 은폐가 드러남', to: '원인' }, { id: 'c2', text: '4·13 호헌 조치', to: '원인' },
                { id: 'r1', text: '대통령 직선제', to: '결과' }, { id: 'r2', text: '헌법재판소 신설', to: '결과' }], { topic: '6월 민주 항쟁' })),
            IT(MB('원인과 그것이 부른 반응을 이어 보세요. 맞지 않는 카드는 남겨요.', [['고문 사건 은폐가 드러남', '진상 규명 요구'], ['호헌 조치 발표', '직선제 개헌 요구']], ['선거 포기'], { topic: '원인과 반응' })),
            IT({ prompt: '6월 민주 항쟁의 사슬을 바르게 설명한 카드만 골라 담으세요.', toolOptions: { mode: 'pick', topic: '사슬 설명', basket: '바른 설명', cards: [
              { id: 'k1', text: '호헌 조치가 직선제 요구를 키웠다' }, { id: 'k2', text: '요구에 답해 6·29 선언이 나왔다' },
              { id: 'k3', text: '6·29 선언이 항쟁의 원인이다' }, { id: 'k4', text: '개헌은 국민 투표 없이 끝났다' }] }, target: { pick: ['k1', 'k2'] } },
              null, null, { conclude: '고문 사건의 진실과 호헌 조치가 직선제 요구를 키웠고, 그 요구에 답해 6·29 선언과 개헌이 이루어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '6월 민주 항쟁의 원인과 결과를 한 문장으로 이어 써요.' }] },
      }),
      M('activity.compare', {
        title: '개헌 전후 선출 방식 표 읽기', method: '개헌 전후 선출 방식 표 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 끝에 임기 햇수가 보이고, 선출 방식·임기 두 가지만 묻는다(셋째·넷째 문항은 보기 둘).', base: '임기를 막대에서 읽어 표 빈칸을 채우고, 선출 방식과 단임의 뜻을 고른다.', challenge: '넷째 문항에서 1987년 헌법으로 새로 생긴 기관을 고른다.' },
        activity: {
          title: '선출 방식', tool: 'chart',
          teacher: '"개헌 전과 지금, 대통령 임기는 몇 년 차이일까요?" 막대를 읽은 뒤 선출 방식이 어떻게 바뀌었는지 함께 말한다. "임기가 짧아졌으니 대통령 힘이 약해진 것뿐"이라는 학생에게 "임기와 함께 바뀐 것, 곧 누가 뽑느냐는 무엇이 달라졌을까요?"라고 되묻는다. 이 그래프의 수는 헌법에 적힌 임기라는 점을 짚는다.',
          task: '개헌 전후 대통령 임기 그래프와 표를 읽고, 선출 방식·단임의 뜻·새로 생긴 기관을 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '그래프를 읽고 표의 빈칸에 개헌 전과 지금 대통령 임기를 채우세요.', toolOptions: Object.assign({}, TERM, { showTable: true, tableBlanks: [0, 1] }), target: { table: true } }),
            IT({ prompt: '개헌 전과 지금 대통령 임기는 몇 년 차이인지 그래프에서 읽어 쓰세요.', toolOptions: Object.assign({}, TERM, { question: '임기는 몇 년 차이?' }), target: { value: 2 } }),
            IT({ prompt: '지금 헌법에서 대통령을 뽑는 방법을 고르세요.', toolOptions: Object.assign({}, TERM, { question: '지금 대통령을 뽑는 방법은?', choices: ['대통령 선거인단이 뽑는다', '국민이 직접 뽑는다', '국회가 뽑는다', '대법원이 뽑는다'] }), target: { pick: 1 } },
              { prompt: '지금 헌법에서 대통령을 뽑는 방법을 두 보기 가운데 고르세요.', toolOptions: { choices: ['대통령 선거인단이 뽑는다', '국민이 직접 뽑는다'] }, target: { pick: 1 } }),
            IT({ prompt: '"임기는 5년으로 하며 중임할 수 없다"는 조문의 뜻을 고르세요.', toolOptions: Object.assign({}, TERM, { question: '"중임할 수 없다"의 뜻은?', choices: ['한 번만 할 수 있다', '두 번까지 할 수 있다', '임기가 없다'] }), target: { pick: 0 } },
              { prompt: '"중임할 수 없다"의 뜻을 두 보기 가운데 고르세요.', toolOptions: { choices: ['한 번만 할 수 있다', '두 번까지 할 수 있다'] }, target: { pick: 0 } },
              { prompt: '1987년 헌법으로 새로 생긴 기관을 고르세요.', toolOptions: { question: '1987년 헌법에서 새로 생긴 기관은?', choices: ['헌법재판소', '국회', '대법원'] }, target: { pick: 0 } },
              { conclude: '1987년 개헌으로 대통령은 국민이 직접 뽑고, 임기는 7년 단임에서 5년 단임이 되었으며, 헌법재판소가 새로 생겼어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '개헌 전후 대통령 선거를 견주어 써요.', columns: ['내용', '개헌 전', '지금 헌법'], cells: [['뽑는 사람', '', ''], ['임기', '', '']], answer: '대통령 선거인단·국민 / 7년 단임·5년 단임' }] },
      }),
      M('activity.clause', {
        title: '개헌 전후 조문 견주어 설명 글', method: '개헌 전후 조문 견주어 설명 글 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '조문 두 쌍(선출 방식·임기)을 문장 틀을 보며 견주어 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '선출 방식·임기·헌법재판소를 견주어 쓰고, 세 문장 설명 글을 기준표로 점검한다.', challenge: '마지막 글에 헌법 개정 절차(제안·국회 의결·국민 투표)까지 넣어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '조문 견주기', tool: 'rubric-writing',
          teacher: '"헌법 조문 몇 줄이 바뀌는 것이 왜 큰일일까요?" 조문을 읽을 때 누가·어떻게·몇 년 동안을 먼저 찾게 하고, 개헌 전 조문과 지금 조문을 나란히 견주게 한다. "6·29 선언으로 헌법이 바뀌었다"고 쓰는 학생에게 "선언 뒤에 국회 의결과 국민 투표가 있었지요. 헌법은 언제 실제로 바뀌었을까요?"라고 되묻는다. 지금의 개헌 논쟁으로 번지면 1987년 개헌 전후 비교로 범위를 지킨다.',
          task: '1987년 개헌 전후 헌법 조문을 견주어 대통령 선출 방식·임기·헌법재판소의 변화를 설명하는 글을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('개헌 전 "대통령 선거인단에서 선거"와 지금 "국민의 보통·평등·직접·비밀선거"를 견주어 한두 문장으로 쓰세요.', { topic: '대통령을 뽑는 조문을 개헌 전(대통령 선거인단이 뽑음)과 지금(국민의 보통·평등·직접·비밀선거)으로 견주어 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '조문 ① 선출 방식' }, ['개헌 전과 지금을 모두 썼다', '누가 뽑는지 드러난다', '조문에 없는 내용을 덧붙이지 않았다'], [['직접'], ['선거인단']]),
              RW('틀을 채워 대통령 선출 방식을 견주어 쓰세요.', { topic: '대통령을 뽑는 방식을 개헌 전과 지금으로 견주어 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '개헌 전에는 ___이 대통령을 뽑았지만, 지금은 ___이 직접 뽑는다.' }, ['개헌 전과 지금을 모두 썼다', '누가 뽑는지 드러난다'])),
            IT(RW('개헌 전 "임기 7년, 중임 불가"와 지금 "임기 5년, 중임 불가"를 견주어 쓰세요.', { topic: '대통령 임기 조문을 개헌 전(7년 단임)과 지금(5년 단임)으로 견주고, "중임할 수 없다"의 뜻을 함께 쓰세요.', min: 25, max: 160, s: [1, 2], title: '조문 ② 임기' }, ['두 임기를 모두 썼다', '단임(중임할 수 없음)의 뜻을 썼다', '조문에 없는 내용을 덧붙이지 않았다'], [['5년'], ['7년']]),
              RW('틀을 채워 대통령 임기를 견주어 쓰세요.', { topic: '대통령 임기를 개헌 전과 지금으로 견주어 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '대통령 임기는 ___년에서 ___년으로 바뀌었고, 두 헌법 모두 한 번만 할 수 있다.' }, ['두 임기를 모두 썼다', '단임의 뜻을 썼다'])),
            IT(RW('1987년 헌법으로 새로 생긴 헌법재판소가 무엇을 하는 기관인지 한두 문장으로 쓰세요.', { topic: '1987년 헌법으로 새로 생긴 헌법재판소가 무엇을 하는 기관인지(법률이 헌법에 맞는지 심판하는 등) 한두 문장으로 쓰세요.', min: 20, max: 160, s: [1, 2], title: '조문 ③ 헌법재판소' }, ['새로 생긴 기관임을 썼다', '하는 일을 하나 이상 썼다', '내 말로 썼다'], [['헌법재판소']]),
              RW('틀을 채워 헌법재판소를 소개하세요.', { topic: '헌법재판소를 한 문장으로 소개하세요.', min: 15, max: 120, s: [1, 2], starter: '헌법재판소는 ___년 헌법으로 새로 생겼고, 법률이 ___에 맞는지 심판한다.' }, ['새로 생긴 기관임을 썼다', '하는 일을 썼다'])),
            IT(RW('앞의 세 조문을 묶어, 6월 민주 항쟁이 헌법에 남긴 변화를 세 문장으로 설명하세요.', { topic: '선출 방식·임기·헌법재판소 세 가지 변화를 묶어, 6월 민주 항쟁이 헌법에 남긴 것을 세 문장으로 설명하세요.', min: 50, max: 240, s: [3, 4], title: '헌법에 남은 6월' }, ['세 가지 변화를 모두 썼다', '개헌 전과 지금을 견주었다', '6월 민주 항쟁과 이었다', '현재 정치인·정당 이야기를 쓰지 않았다'], [['직접'], ['헌법재판소']]),
              RW('틀을 채워 헌법에 남은 변화를 두 문장으로 쓰세요.', { topic: '6월 민주 항쟁이 헌법에 남긴 변화를 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '6월 민주 항쟁 뒤 대통령은 국민이 ___ 뽑게 되었다. 임기는 ___년 단임이 되었고 ___가 새로 생겼다.' }, ['변화를 두 가지 이상 썼다', '개헌 전과 지금을 견주었다'], [['직접']]),
              RW('세 가지 변화에 헌법 개정 절차(제안·국회 의결·국민 투표)까지 넣어 한 문단으로 설명하세요.', { topic: '선출 방식·임기·헌법재판소의 변화와, 그 헌법이 어떤 절차(제안 → 국회 의결 → 국민 투표 → 공포)로 바뀌었는지까지 한 문단으로 설명하세요.', min: 90, max: 400, s: [4, 6], title: '변화와 개정 절차' }, ['세 가지 변화를 모두 썼다', '개정 절차를 차례대로 썼다', '국민 투표로 확정되었음을 썼다', '현재 정치인·정당 이야기를 쓰지 않았다'], [['국민 투표', '국민투표'], ['의결']]),
              { conclude: '6월 민주 항쟁의 요구는 국회 의결과 국민 투표를 거쳐 헌법 조문으로 남았어요. 국민이 대통령을 직접 뽑고, 임기는 5년 단임, 헌법재판소가 새로 생겼어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '개헌 전후 헌법을 견주어 정리해요.', columns: ['내용', '개헌 전', '지금 헌법'], cells: [['대통령 뽑는 방법', '', ''], ['대통령 임기', '', ''], ['헌법재판소', '', '']], answer: '선거인단 간접 선거·국민 직접 선거 / 7년 단임·5년 단임 / 없음·있음' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '헌법 개정안은 국회 의결 뒤 ___로 확정된다.', answer: '국민 투표' }] },
      }),

      // ---- 정리 ----
      M('wrap.one', {
        title: '직선제의 뜻 출구 글', method: '직선제의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(누가 뽑나)를 채워 한 문장을 쓴다.', base: '문장 틀의 빈칸 둘(누가·언제부터)을 채우고 기준 셋을 점검한다.', challenge: '틀 없이 자기 말로 두 문장을 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"직선제를 처음 듣는 동생에게 한두 문장으로 설명한다면?" 출구 글을 쓰기 전에 오늘 견준 개헌 전후 선출 방식을 다시 짚는다. "직선제는 원래부터 있었다"고 쓰는 학생에게는 1987년 개헌으로 지금의 직선제가 되었다는 점을 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('직선제의 뜻을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '대통령 직선제가 무엇인지 한두 문장으로 쓰세요.', min: 20, max: 160, s: [1, 2], title: '직선제의 뜻', starter: '직선제는 ___이 대통령을 직접 뽑는 방식으로, ___년 6월 민주 항쟁 뒤 개헌으로 정해졌다.' }, ['사실(누가·언제)이 정확하다', '핵심 낱말(국민·직접·선거)을 넣었다', '내 말로 썼다'], [['직접'], ['국민']]),
              { prompt: '빈칸 하나를 채워 직선제의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '직선제는 ___이 대통령을 직접 뽑는 방식이다.' }, target: { selfCheck: ['누가 뽑는지 썼다', '내 말로 썼다'], mustInclude: [['국민']] } },
              { prompt: '틀 없이, 직선제의 뜻과 그것이 생긴 과정을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(누가·언제)이 정확하다', '핵심 낱말(국민·직접·선거)을 넣었다', '내 말로 썼다', '생긴 과정을 한 문장 더했다'], mustInclude: [['직접'], ['국민']] } }),
            { type: 'choice', prompt: '6월 민주 항쟁의 결과로 알맞은 것은?', options: ['대통령을 국민이 직접 뽑는 헌법으로 바뀌었다', '대통령 임기가 7년으로 늘었다', '대통령 선거가 사라졌다'], answer: 0, difficulty: 0.15, explain: '6월 민주 항쟁으로 대통령 직선제 개헌이 이루어졌어요.' },
          ],
        },
        worksheet: {
          title: '직선제의 뜻',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '6·10민주항쟁의 결과 대통령을 국민이 ___ 뽑는 헌법이 만들어졌다.', answer: '직접' },
            { type: 'short', prompt: '직선제의 뜻을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.today', {
        title: '오늘 내가 쓰는 민주주의 장면', method: '오늘 내가 쓰는 민주주의 장면 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '두 장면을 교사가 소리 내어 읽어 주고, 첫 장면은 교사와 함께 고른다.', base: '학급 선거와 학급 회의 장면 두 개에서 민주주의에 맞는 선택을 스스로 고른다.', challenge: '두 장면에서 고른 뒤, 셋째 문항에서 그 선택의 까닭을 고르고 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"1987년 시민들이 얻은 직접 뽑을 권리를 오늘 우리 교실에서는 어떻게 쓰고 있을까요?" 장면마다 고른 선택을 말하게 하고 그 까닭을 묻는다. "학급 선거는 장난"이라는 학생에게 "우리 반 대표를 우리가 직접 뽑을 수 없다면 어떨까요?"라고 되묻는다. 학생의 개인 견해는 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 대표 선거 날, 친구가 "그냥 내가 정해 줄게, 투표는 귀찮잖아"라고 한다.', who: '나', feeling: '걱정', choices: [
              { id: 'a', text: '모두가 직접 투표해 정하자고 말한다', result: '반 친구 모두가 한 표씩 낸다.' },
              { id: 'b', text: '귀찮으니 친구가 정하게 둔다', result: '반 친구들의 뜻이 담기지 않는다.', why: '대표는 모두가 직접 뽑아야 모두의 대표가 돼요.' },
              { id: 'c', text: '누구를 찍을지 큰 소리로 함께 정한다', result: '눈치를 보며 표를 내는 친구가 생긴다.', why: '누구를 찍었는지는 비밀이 지켜져야 해요.' }] }, prompt: '1987년 시민들이 얻은 권리에 가장 가까운 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
              null,
              { prompt: '민주주의에 맞는 선택을 고르세요. 그 선택의 까닭은 셋째 문항에서 골라요.' }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 회의에서 규칙을 바꾸자는 의견이 나왔는데, 몇몇이 의견을 듣지 않고 넘어가려 한다.', who: '나', feeling: '걱정', choices: [
              { id: 'a', text: '정해진 절차대로 의견을 듣고 함께 정하자고 한다', result: '모두가 의견을 내고 투표로 정한다.' },
              { id: 'b', text: '말해 봐야 소용없으니 가만히 있는다', result: '바꿀 기회를 놓친다.', why: '규칙도 절차를 거쳐 함께 바꿀 수 있어요.' }] }, prompt: '학급 회의 장면에서 민주주의에 맞는 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 고른 선택의 까닭으로 가장 알맞은 것은?', options: ['구성원 모두가 직접, 비밀이 지켜지는 방법으로 뜻을 내야 한다', '빨리 끝내는 것이 가장 중요하다', '목소리가 큰 사람이 정하면 된다'], answer: 0, difficulty: 0.15, explain: '직접·비밀 선거와 정해진 절차는 모두의 뜻을 담는 방법이에요.' },
          ],
        },
        worksheet: {
          title: '오늘 내가 쓰는 민주주의',
          items: [
            { type: 'choice', prompt: '민주주의에 맞는 학급 장면에 ○ 해요.', options: ['반 친구 모두가 비밀 투표로 대표를 뽑는다', '한 사람이 대표를 정해 알린다', '누구를 찍었는지 공개하게 한다'], answer: '반 친구 모두가 비밀 투표로 대표를 뽑는다' },
            { type: 'short', prompt: '내가 처음 투표할 때 꼭 지키고 싶은 태도를 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.steps', {
        title: '헌법 개정 절차 스스로 점검', method: '헌법 개정 절차 이해 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '절차 카드 3장(국회 의결 → 국민 투표 → 공포)을 차례로 놓고 점검 칸 두 개에 표시한다.', base: '절차 카드 5장(제안 → 공고 → 국회 의결 → 국민 투표 → 공포)을 차례로 놓고 점검 칸 세 개에 표시한다.', challenge: '함정 카드가 섞인 판에서 5장을 놓고, 단계별 기준(국회 재적 3분의 2 이상 찬성 등)을 말할 수 있는지까지 표시한다.' },
        wrap: {
          teacher: '"헌법은 대통령 혼자 바꿀 수 있을까요?" 절차 카드를 차례로 놓은 뒤, 가장 자신 없는 점검 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다. 국민 투표를 국회 의결보다 앞에 두는 학생에게 국회가 먼저 의결하고 국민 투표로 확정한다는 점을 짚는다. 1987년 개헌도 이 절차를 거쳤다고 정리한다.',
          exitTicket: [
            IT(SELF('헌법 개정 절차 카드를 차례로 놓고, 점검 칸에 스스로 표시해요.', '헌법 개정 절차', ['국민 투표', '개헌안 제안', '공포', '국회 의결', '공고'], ['개헌안 제안', '공고', '국회 의결', '국민 투표', '공포'], ['단계마다 누가 하는지 말할 수 있다', '국민 투표로 확정된다는 것을 말할 수 있다', '1987년 개헌도 이 절차를 거쳤음을 말할 수 있다']),
              { prompt: '절차 카드 3장을 차례로 놓고 점검 칸에 표시해요.', toolOptions: { cards: ['국민 투표', '공포', '국회 의결'] }, target: { order: ['국회 의결', '국민 투표', '공포'], selfCheck: ['단계마다 누가 하는지 말할 수 있다', '국민 투표로 확정된다는 것을 말할 수 있다'] } },
              { prompt: '함정 카드는 남기고 절차 카드 5장을 차례로 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['국민 투표', '개헌안 제안', '공포', '국회 의결', '공고', '대통령 혼자 결정'] }, target: { order: ['개헌안 제안', '공고', '국회 의결', '국민 투표', '공포'], selfCheck: ['단계마다 누가 하는지 말할 수 있다', '국민 투표로 확정된다는 것을 말할 수 있다', '1987년 개헌도 이 절차를 거쳤음을 말할 수 있다', '국회 의결은 재적 의원 3분의 2 이상 찬성이 필요함을 말할 수 있다'] } }),
            { type: 'choice', prompt: '1987년 헌법 개정에 대한 설명으로 알맞은 것은?', options: ['대통령이 혼자 결정했다', '국회 의결 뒤 국민 투표로 확정되었다', '국민 투표 없이 공포되었다'], answer: 1, difficulty: 0.15, explain: '헌법은 국회 의결과 국민 투표를 거쳐야 바뀌어요.' },
          ],
        },
        worksheet: {
          title: '헌법 개정 절차',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '헌법 개정은 제안 → 공고 → ___ 의결 → ___ → 공포 차례로 이루어진다.', answer: '국회, 국민 투표' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 광복절 — 1945년 광복과 1948년 정부 수립 (days.m.liberation) ====
  {
    const M = MK('liberation');
    const ROAD6 = [
      { id: 'e1', text: '대한민국 임시정부 수립(1919)' }, { id: 'e2', text: '한국광복군 창설(1940)' }, { id: 'e3', text: '광복(1945.8.15)' },
      { id: 'e4', text: '5·10 총선거(1948.5)' }, { id: 'e5', text: '헌법 공포(1948.7.17)' }, { id: 'e6', text: '대한민국 정부 수립(1948.8.15)' },
    ];
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const FORCE = [
      { id: 'n1', text: '임시정부의 외교 활동', to: '민족의 노력' }, { id: 'n2', text: '한국광복군 창설', to: '민족의 노력' },
      { id: 'n3', text: '의병과 독립군의 투쟁', to: '민족의 노력' }, { id: 'n4', text: '임시정부의 대일 선전 포고', to: '민족의 노력' },
      { id: 'g1', text: '카이로 선언', to: '국제 정세' }, { id: 'g2', text: '연합국의 승리', to: '국제 정세' },
      { id: 'g3', text: '일본의 항복', to: '국제 정세' },
    ];
    // 열린 갈림길 — 1943년 중국에서 임시정부 일을 돕는 가상 청년 '하람'. 정답 길 없이 서로 다른 길을 가 보고 근거를 고른다.
    const D1 = { text: '1943년, 가상의 청년 하람은 중국에서 대한민국 임시정부 일을 돕고 있다. 독립을 앞당기려고 할 일을 정해야 한다.', ask: '하람은 어떤 길을 고를까?', motif: 'house', choices: [
      { id: 'army', text: '한국광복군에 들어가 훈련을 받는다', result: '연합군과 힘을 합칠 준비를 하는 부대에서 훈련을 받는다.', impact: [{ who: '독립운동', text: '군사 활동에 힘이 보태진다', tone: 1 }], end: '광복군에서 훈련을 받았어요.',
        next: { text: '훈련 중 동료가 "우리 힘만으로는 어렵다"며 지쳐 한다.', ask: '하람은 무엇이라고 할까?', choices: [
          { id: 'together', text: '우리 노력과 연합국의 힘이 함께 모여야 한다고 말한다', result: '동료가 다시 힘을 낸다.', impact: [{ who: '동료', text: '함께 버틸 힘을 얻는다', tone: 1 }], end: '함께 힘을 모았어요.',
            next: { text: '1945년 8월, 일본이 항복했다는 소식이 들려온다.', ask: '하람은 무엇을 할까?', choices: [
              { id: 'record', text: '그동안의 활동을 기록으로 남겨 둔다', result: '훗날 독립운동의 모습을 알리는 자료가 된다.', impact: [{ who: '뒤 세대', text: '독립운동의 사실을 알 수 있다', tone: 1 }] },
              { id: 'home', text: '나라를 세우는 일을 도우러 고국으로 향한다', result: '광복 뒤 새 나라를 세우는 일에 힘을 보탠다.', impact: [{ who: '고국', text: '나라 세우기에 힘이 보태진다', tone: 1 }] }] } },
          { id: 'quit', text: '동료와 함께 훈련을 그만둔다', result: '부대의 준비가 늦어진다.', impact: [{ who: '부대', text: '힘이 줄어든다', tone: -1 }] }] } },
      { id: 'paper', text: '임시정부의 외교 문서 일을 돕는다', result: '여러 나라에 한국의 독립을 알리는 문서를 만든다.', impact: [{ who: '독립운동', text: '외교 활동에 힘이 보태진다', tone: 1 }], end: '외교 문서 일을 도왔어요.',
        next: { text: '카이로 선언에 한국의 독립이 언급되었다는 소식이 들려온다.', ask: '하람은 어떻게 할까?', choices: [
          { id: 'spread', text: '선언의 내용을 동포들에게 정확히 알린다', result: '동포들이 국제 정세를 바르게 안다.', impact: [{ who: '동포들', text: '희망과 정보를 얻는다', tone: 1 }], end: '선언 내용을 정확히 알렸어요.',
            next: { text: '한 사람이 "이제 우리는 아무것도 안 해도 된다"고 말한다.', ask: '하람은 무엇이라고 할까?', choices: [
              { id: 'keep', text: '선언이 있어도 우리 노력이 이어져야 한다고 말한다', result: '동포들이 활동을 이어 간다.', impact: [{ who: '동포들', text: '활동을 이어 간다', tone: 1 }] },
              { id: 'stop', text: '"그 말이 맞다"며 일을 멈춘다', result: '외교 활동이 느슨해진다.', impact: [{ who: '독립운동', text: '힘이 줄어든다', tone: -1 }] }] } },
          { id: 'ignore', text: '먼 나라 이야기라며 넘긴다', result: '동포들은 소식을 늦게 듣는다.', impact: [{ who: '동포들', text: '정보를 늦게 얻는다', tone: -1 }] }] } },
      { id: 'school', text: '동포 마을 학교에서 우리말과 역사를 가르친다', result: '아이들이 우리말과 역사를 배운다.', impact: [{ who: '동포 아이들', text: '우리말과 역사를 지킨다', tone: 1 }], ending: '교육으로 독립의 뜻을 이었어요.' }] };
    const R1 = [{ id: 'r1', text: '독립운동은 군사·외교·교육 등 여러 길로 이어졌다' }, { id: 'r2', text: '광복에는 민족의 노력과 국제 정세가 함께 작용했다' },
      { id: 'r3', text: '광복은 다른 나라가 혼자 이루어 주었다', why: '임시정부·광복군 등 우리 민족의 노력도 함께였어요.' }, { id: 'r4', text: '옳은 독립운동의 길은 하나뿐이다', why: '군사·외교·교육 등 여러 길이 함께 쓰였어요.' }];
    // 열린 갈림길 판: 깊이 d 까지 자르고 path 없이 서로 다른 끝 장면 n개 탐색 + 근거
    const OPEN = (p, title, tree, R, ok) => ({
      prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { explore: 2, reasons: ok, some: true },
      levels: {
        easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: R }, target: { explore: 2, reasons: ok, some: true } },
        challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: R }, target: { explore: 2, reasons: ok } },
      },
    });
    const DOCS = [{ id: 'd1', text: '대한민국 임시 헌장(1919)' }, { id: 'd2', text: '임시정부 대일 선전 포고(1941)' }, { id: 'd3', text: '카이로 선언(1943)' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.two815', {
        title: '두 번의 8월 15일 견주기', method: '두 번의 8월 15일 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '시연 판의 두 쌍(1945·1948)이 이어지는 모습을 교사와 함께 읽는다.', base: '시연 판에 함정 카드(6·25전쟁 정전)가 섞인 채 두 쌍이 이어지기 전에, 해마다 일어난 일을 먼저 짐작해 말한다.', challenge: '두 날(광복·정부 수립)이 어떤 관계인지 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"광복절은 몇 년 8월 15일을 기념하는 날일까요?" 시연 단추로 1945년·1948년 카드가 사건과 이어지는 모습을 보인다. 광복은 빛을 되찾는다는 뜻으로 1945년 8월 15일 일제의 지배에서 벗어난 일이고, 광복절은 1948년 8월 15일 대한민국 정부 수립도 함께 기념하는 국경일이라고 알린다. "광복한 날 바로 정부가 세워졌다"는 말에는 "두 카드 사이에는 몇 년이 있나요?"라고 되묻는다.',
          student: '1945년과 1948년의 8월 15일에 각각 무슨 일이 있었는지 카드를 이어 보며 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '1945년 8월 15일' }, { id: 'b', label: '1948년 8월 15일' }], cards: [{ id: 'm1', text: '광복' }, { id: 'm2', text: '대한민국 정부 수립' }, { id: 'x1', text: '6·25전쟁 정전' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2' } }] },
          art: { draw: 'a paper-cut sunrise over layered mountains with two calendar pages marked August 15 and people holding flags', banner: '두 번의 8월 15일', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.power', {
        title: '"광복을 이끈 힘" 짐작 투표', method: '광복을 이끈 힘 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 읽어 주고 손을 들어 투표한다.', base: '투표한 뒤 보기마다 민족의 노력인지 국제 정세인지 스스로 갈라 말한다.', challenge: '가장 많이 나온 짐작을 무엇으로 확인할 수 있을지(교과서·독립기념관 자료 등) 말한다.' },
        intro: {
          teacher: '"광복은 누구의 힘으로 이루어졌을까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손을 든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "미국이 이겨서 저절로 왔다"거나 "우리 힘만으로 이루었다"처럼 한쪽만 말하는 학생에게 "카이로 선언은 왜 한국의 독립을 언급했을까요? 그 전에 우리가 한 일은 없었을까요?"라고 되묻는다. 오늘의 질문은 "광복을 이끈 힘은 무엇이었고, 광복 뒤 무엇이 이어졌나?"로 정한다.',
          student: '광복을 이끈 힘 짐작 넷 가운데 하나에 투표하고, 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('광복을 이끈 힘 짐작(가상의 우리 반 투표)', [['연합국의 승리', 10], ['독립운동가들의 노력', 9], ['임시정부의 외교', 5], ['한국광복군', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut classroom board with four cards and small paper figures lined up as a picture graph, a sunrise in the window', banner: '광복을 이끈 힘은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 투표 결과를 맞고 틀림으로 채점하지 않고, 두 힘이 함께였다는 것을 활동에서 확인한다.',
      }),
      M('intro.doc', {
        title: '세 문서 제목 듣고 앞뒤 짐작', method: '문서 제목 카드 듣고 시대 짐작', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 문서(임시 헌장·카이로 선언)만 읽어 주고 함께 앞뒤를 놓는다.', base: '시연 판에서 세 문서가 차례로 놓이기 전에 어느 문서가 먼저일지 짐작해 말한다.', challenge: '그렇게 짐작한 근거 낱말("임시"·"선전 포고"·"선언")을 한 가지 짚는다.' },
        intro: {
          teacher: '"\'대한민국 임시 헌장\', \'대일 선전 포고\', \'카이로 선언\' — 세 문서 가운데 무엇이 가장 먼저 나왔을까요?" 제목만 읽어 주고 짐작을 들은 뒤 시연 단추로 문서 카드가 차례로 놓이는 모습을 보인다. "독립은 총과 만세만으로 이루어졌다"는 말에는 "문서로 남긴 약속과 외교는 어떤 힘이 되었을까요?"라고 되묻는다.',
          student: '세 문서의 제목을 듣고 나온 차례를 짐작해요. 제목의 어느 낱말을 보고 그렇게 생각했는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'order', title: '광복으로 가는 문서', slots: ['처음', '가운데', '끝'], cards: [
            { id: 'p1', text: '대한민국 임시 헌장', motif: 'leaf' }, { id: 'p2', text: '대일 선전 포고', motif: 'star' },
            { id: 'p3', text: '카이로 선언', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['p1'] }, { order: ['p1', 'p2'] }, { order: ['p1', 'p2', 'p3'] }] },
          art: { draw: 'paper-cut documents with seals stacked like stepping stones leading to a sunrise and a flag', banner: '어느 문서가 먼저일까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.road', {
        title: '독립운동에서 정부 수립까지 시간 띠', method: '독립운동에서 정부 수립까지 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 4장(임시정부·광복군·광복·정부 수립)에 해가 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 6장을 해 없이 차례대로 놓는다.', challenge: '해 없는 6장에 함정 카드가 섞이고, 셋째 문항에서 광복과 정부 수립 사이 3년의 일을 차례대로 놓는다.' },
        activity: {
          title: '광복의 길 띠', tool: 'timeline',
          teacher: '"한국광복군은 언제 만들어졌을까요?" 카드를 놓을 때마다 근거를 말하게 한다. 광복군 창설을 임시정부 수립보다 앞에 두는 학생에게 광복군은 임시정부가 만든 군대라는 점을 짚는다. 광복과 정부 수립을 같은 해로 놓는 학생에게는 "1945년과 1948년 사이 3년 동안 무엇이 있었을까요?"라고 되묻는다.',
          task: '독립운동에서 광복, 정부 수립까지의 사건 카드를 차례대로 시간 띠에 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('1919년부터 1948년까지의 사건을 일어난 차례대로 놓아 보세요.', NOYEAR(ROAD6), { axis: ['1919년', '1948년'] }),
              OB('해가 적힌 사건 4장을 차례대로 놓아 보세요.', pickCards(ROAD6, ['e1', 'e2', 'e3', 'e6']), { axis: ['1919년', '1948년'] }),
              OB('해 없는 사건 6장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(ROAD6), { axis: ['1919년', '1948년'] }, [{ id: 'x1', text: '6·25전쟁 발발' }])),
            IT(MB('광복절이 기념하는 두 일과 그 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1945년', '광복'], ['1948년', '대한민국 정부 수립']], ['3·1 만세 운동']),
              MB('광복절이 기념하는 두 일과 그 해를 이어 보세요.', [['1945년', '광복'], ['1948년', '대한민국 정부 수립']], [])),
            IT(OB('광복 뒤 정부 수립까지의 일을 차례대로 놓아 보세요.', [{ id: 'a1', text: '38도선 분할 점령' }, { id: 'a2', text: '5·10 총선거' }, { id: 'a3', text: '헌법 공포' }, { id: 'a4', text: '정부 수립 선포' }], { axis: ['1945년', '1948년'] }),
              OB('1948년의 일을 차례대로 놓아 보세요.', [{ id: 'a2', text: '5·10 총선거' }, { id: 'a3', text: '헌법 공포' }, { id: 'a4', text: '정부 수립 선포' }], { axis: ['1948년 5월', '1948년 8월'] }),
              null, { conclude: '1948년 5·10 총선거로 국회를 꾸리고 7월 17일 헌법을 공포한 뒤, 8월 15일 대한민국 정부를 세웠어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 번의 8월 15일을 정리해요.', columns: ['해', '일어난 일'], cells: [['1945년', ''], ['1948년', '']], answer: '광복 / 대한민국 정부 수립' }] },
      }),
      M('activity.manner', {
        title: '광복절을 맞는 바른 모습 고르기', method: '광복절을 맞는 바른 모습 고르기', tool: 'emotion', minutes: 16,
        levels: { easy: '장면 3개 모두 보기 두 개 가운데 고르고, 결과 글을 보며 넘어간다.', base: '장면 3개에서 보기 두세 개 가운데 고르고 결과를 본다.', challenge: '결과 글은 맞힌 뒤에만 보이고, 고른 선택의 까닭을 짝에게 말한다(교사 진행).' },
        activity: {
          title: '광복절 맞이', tool: 'emotion',
          teacher: '"광복절에 태극기는 어떻게 달까요? 현충일과 같을까요?" 장면마다 고른 뒤 결과 글을 함께 읽는다. 광복절에 조기를 다는 학생에게 국경일에는 깃봉과 깃면 사이를 떼지 않고 단다는 점을 짚는다. "쉬는 날이니 아무 뜻 없다"는 학생에게 "광복을 위해 애쓴 분들은 이날을 어떻게 기억하고 싶어 할까요?"라고 되묻는다.',
          task: '광복절의 국기 게양·기념 행사·독립운동 이야기 장면에서 알맞은 모습을 고르고 결과를 살펴봐요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '광복절 아침, 집에 태극기를 달려고 해요. 알맞은 방법을 고르세요.', toolOptions: { mode: 'branch', situation: '광복절 아침, 가족과 집에 태극기를 달려고 한다.', who: '나', choices: [
              { id: 'top', text: '깃봉에 붙여 높이 단다', result: '국경일을 기념하는 태극기가 바르게 걸린다.' },
              { id: 'half', text: '깃면 너비만큼 내려 조기로 단다', result: '추모하는 날처럼 보인다.', why: '조기는 현충일처럼 기리는 날에 달아요.' },
              { id: 'none', text: '쉬는 날이니 달지 않는다', result: '기념하는 마음을 나타내지 못한다.', why: '국경일에는 태극기를 달아 기념해요.' }] }, target: { choice: 'top' } },
              { toolOptions: { choices: [
                { id: 'top', text: '깃봉에 붙여 높이 단다', result: '국경일을 기념하는 태극기가 바르게 걸린다.' },
                { id: 'half', text: '깃면 너비만큼 내려 조기로 단다', result: '추모하는 날처럼 보인다.', why: '조기는 현충일처럼 기리는 날에 달아요.' }] } }),
            IT({ prompt: '기념 행사에서 친구가 영상만 보며 떠들어요. 어떻게 할지 고르세요.', toolOptions: { mode: 'branch', situation: '학교 광복절 기념 영상을 보는데 옆 친구가 계속 떠든다.', who: '나', choices: [
              { id: 'quiet', text: '"끝나고 이야기하자"고 조용히 말한다', result: '모두가 영상을 끝까지 본다.' },
              { id: 'join', text: '같이 떠든다', result: '다른 친구들이 영상을 제대로 듣지 못한다.', why: '기념 행사는 함께 뜻을 새기는 시간이에요.' }] }, target: { choice: 'quiet' } }),
            IT({ prompt: '독립운동가 이야기를 들은 뒤 한 친구가 다른 나라 사람 전체를 욕해요. 어떻게 할지 고르세요.', toolOptions: { mode: 'branch', situation: '독립운동 이야기를 들은 뒤 한 친구가 다른 나라 사람 전체를 욕한다.', who: '나', choices: [
              { id: 'talk', text: '"잘못된 지배와 그 나라 사람 모두는 나누어 봐야 해"라고 말한다', result: '친구가 사실과 미움을 나누어 생각해 본다.' },
              { id: 'laugh', text: '같이 웃으며 욕한다', result: '역사가 미움의 이야기로만 남는다.', why: '광복을 기억하는 것은 미움이 아니라 자주와 평화를 새기는 일이에요.' },
              { id: 'ignore', text: '못 들은 척한다', result: '같은 말이 되풀이된다.', why: '잘못된 말은 부드럽게 바로잡을 수 있어요.' }] }, target: { choice: 'talk' } },
              { toolOptions: { choices: [
                { id: 'talk', text: '"잘못된 지배와 그 나라 사람 모두는 나누어 봐야 해"라고 말한다', result: '친구가 사실과 미움을 나누어 생각해 본다.' },
                { id: 'laugh', text: '같이 웃으며 욕한다', result: '역사가 미움의 이야기로만 남는다.', why: '광복을 기억하는 것은 미움이 아니라 자주와 평화를 새기는 일이에요.' }] } },
              null, { conclude: '광복절에는 태극기를 깃봉에 붙여 달고, 광복을 위해 애쓴 분들을 기억하며 자주와 평화의 뜻을 새겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '광복절에 태극기를 다는 방법으로 알맞은 것은?', options: ['깃봉에 붙여 단다', '깃면 너비만큼 내려 단다', '달지 않는다'], answer: '깃봉에 붙여 단다' }] },
      }),
      M('activity.force', {
        title: '광복을 이끈 힘 나누기', method: '광복을 이끈 힘 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 5장을 \'민족의 노력\'·\'국제 정세\' 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 7장을 두 바구니에 나눈다.', challenge: '셋째 문항에서 두 힘이 이어진 고리 카드를 가르고, 활동지에 그 고리를 한 문장으로 설명한다.' },
        activity: {
          title: '광복의 힘', tool: 'sortboard',
          teacher: '"이 카드는 우리 스스로 한 일일까요, 나라 밖의 흐름일까요?" 카이로 선언을 우리 민족의 노력으로만 두는 학생에게 연합국 정상들의 선언이었지만 임시정부의 외교 활동도 영향을 주었다는 교과서 서술을 함께 짚는다. "광복은 외국 덕분일 뿐"이라거나 "우리 힘만으로 이루었다"는 학생에게는 두 바구니가 모두 채워진다는 점을 보게 한다.',
          task: '광복을 이끈 힘 카드를 \'민족의 노력\'과 \'국제 정세\'로 나누고, 두 힘이 이어진 고리를 찾아요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('광복을 이끈 힘을 두 바구니에 나누세요.', ['민족의 노력', '국제 정세'], FORCE),
              SB('카드 5장을 두 바구니에 나누세요.', ['민족의 노력', '국제 정세'], pickCards(FORCE, ['n1', 'n2', 'n3', 'g1', 'g2']))),
            IT(SB('광복 뒤의 일을 \'광복 뒤 생긴 일\'과 \'광복 전의 일\'로 나누세요.', ['광복 전의 일', '광복 뒤 생긴 일'], [
              { id: 'b1', text: '한국광복군 창설', to: '광복 전의 일' }, { id: 'b2', text: '카이로 선언', to: '광복 전의 일' },
              { id: 'f1', text: '38도선 분할 점령', to: '광복 뒤 생긴 일' }, { id: 'f2', text: '5·10 총선거', to: '광복 뒤 생긴 일' },
              { id: 'f3', text: '대한민국 정부 수립', to: '광복 뒤 생긴 일' }]),
              SB('카드 4장을 광복 전과 뒤로 나누세요.', ['광복 전의 일', '광복 뒤 생긴 일'], [
                { id: 'b1', text: '한국광복군 창설', to: '광복 전의 일' }, { id: 'b2', text: '카이로 선언', to: '광복 전의 일' },
                { id: 'f2', text: '5·10 총선거', to: '광복 뒤 생긴 일' }, { id: 'f3', text: '대한민국 정부 수립', to: '광복 뒤 생긴 일' }])),
            IT(SB('두 힘을 잇는 설명을 맞는 고리와 틀린 고리로 나누세요.', ['맞는 고리', '틀린 고리'], [
              { id: 'k1', text: '임시정부 외교 → 카이로 선언에 영향', to: '맞는 고리' }, { id: 'k2', text: '광복군 창설 → 연합군과 함께할 준비', to: '맞는 고리' },
              { id: 'k3', text: '연합국 승리 → 일본의 항복과 광복', to: '맞는 고리' }, { id: 'k4', text: '카이로 선언 → 그날 바로 정부 수립', to: '틀린 고리' },
              { id: 'k5', text: '광복 → 독립운동이 필요 없었음이 밝혀짐', to: '틀린 고리' }]),
              null, null, { conclude: '광복에는 임시정부·광복군 같은 우리 민족의 오랜 노력과 연합국의 승리라는 국제 정세가 함께 작용했어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광복을 이끈 힘을 정리해요.', columns: ['민족의 노력', '국제 정세'], cells: [['', ''], ['', '']], answer: '임시정부 외교·한국광복군·독립군 투쟁 / 카이로 선언·연합국 승리·일본의 항복' }] },
      }),
      M('activity.person', {
        title: '가상 독립운동가의 갈림길', method: '독립운동가 선택의 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(광복군·외교·교육)에서 서로 다른 두 길을 골라 보고 근거 카드를 한 장 이상 고른다.', base: '갈림길 두 번까지 서로 다른 두 길을 끝까지 가 보고 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번까지 서로 다른 두 길을 가 보고, 맞는 근거 카드 두 장을 모두 고른다.' },
        activity: {
          title: '독립운동가 갈림길', tool: 'dilemma',
          teacher: '"독립을 앞당기는 길은 하나뿐이었을까요?" 가상 청년 하람의 길을 하나 끝까지 간 뒤, 되돌아가 다른 길도 가 보게 한다. 이 갈림길에는 하나뿐인 정답 길이 없고, 서로 다른 길이 모두 독립운동이었다는 점을 보는 것이 목표라고 밝힌다. "광복은 다른 나라가 다 해 줬다"는 근거를 고르는 학생에게 "하람이 한 일들은 어디에 쓰였을까요?"라고 되묻는다. 하람은 지어낸 가상 인물이고, 실제 독립운동가의 말이나 마음을 지어 붙이지 않는다.',
          task: '1943년 가상 청년 하람이 고를 수 있는 서로 다른 길을 두 가지 이상 끝까지 가 보고, 광복을 이끈 힘에 대한 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            OPEN({ easy: '하람의 첫 갈림길에서 서로 다른 두 길을 골라 보고, 근거를 고르세요.', base: '하람의 갈림길을 두 번까지, 서로 다른 두 길로 끝까지 가 보고 근거를 고르세요.', challenge: '하람의 갈림길을 세 번까지, 서로 다른 두 길로 가 보고 맞는 근거 두 장을 모두 고르세요.' },
              '1943년, 가상 청년 하람', D1, R1, ['r1', 'r2']),
            IT({ prompt: '광복 소식을 들은 하람이 할 일을 골라 보세요. 두 길 모두 가 보고 근거를 고르세요.', toolOptions: { title: '1945년 8월, 하람', scene: { text: '1945년 8월, 일본이 항복했다는 소식이 들려온다.', ask: '하람은 무엇을 할까?', motif: 'house', choices: [
              { id: 'record', text: '그동안의 활동을 기록으로 남겨 둔다', result: '훗날 독립운동의 모습을 알리는 자료가 된다.', impact: [{ who: '뒤 세대', text: '독립운동의 사실을 알 수 있다', tone: 1 }], ending: '활동을 기록으로 남겼어요.' },
              { id: 'home', text: '나라를 세우는 일을 도우러 고국으로 향한다', result: '광복 뒤 새 나라를 세우는 일에 힘을 보탠다.', impact: [{ who: '고국', text: '나라 세우기에 힘이 보태진다', tone: 1 }], ending: '나라 세우기를 도우러 갔어요.' }] }, reasons: [{ id: 'q1', text: '광복 뒤에도 나라를 세우는 과제가 남아 있었다' }, { id: 'q2', text: '광복과 함께 모든 과제가 끝났다', why: '광복 뒤 정부를 세우기까지 3년이 걸렸어요.' }] }, target: { explore: 2, reasons: ['q1'] } }),
            IT({ prompt: '카이로 선언 소식 뒤 "이제 아무것도 안 해도 된다"는 말에 대한 하람의 대답을 골라 보세요.', toolOptions: { title: '선언 뒤의 대답', scene: { text: '카이로 선언 소식을 들은 한 사람이 "이제 우리는 아무것도 안 해도 된다"고 말한다.', ask: '하람은 무엇이라고 할까?', motif: 'house', choices: [
              { id: 'keep', text: '선언이 있어도 우리 노력이 이어져야 한다고 말한다', result: '동포들이 활동을 이어 간다.', impact: [{ who: '동포들', text: '활동을 이어 간다', tone: 1 }], ending: '노력을 이어 가자고 했어요.' },
              { id: 'stop', text: '"그 말이 맞다"며 일을 멈춘다', result: '외교 활동이 느슨해진다.', impact: [{ who: '독립운동', text: '힘이 줄어든다', tone: -1 }], why: '선언은 약속이었고, 우리 노력이 함께 이어져야 했어요.', ending: '활동이 느슨해졌어요.' }] }, reasons: [] }, target: { path: [['keep']] } },
              null, null, { conclude: '독립운동은 군사·외교·교육 등 여러 길로 이어졌고, 광복에는 우리 민족의 노력과 국제 정세가 함께 작용했어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하람이 고를 수 있었던 길 가운데 두 가지를 골라, 각각 광복에 어떤 힘이 되었을지 한 문장으로 써요.' }] },
      }),
      M('activity.docs', {
        title: '광복으로 가는 문서 해설 쓰기', method: '광복으로 가는 문서 읽고 해설 쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '문서 두 개(임시 헌장·카이로 선언)의 해설을 문장 틀로 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '문서 세 개(임시 헌장·대일 선전 포고·카이로 선언)마다 해설을 쓰고, 세 문장 글로 묶은 뒤 기준표로 점검한다.', challenge: '마지막 글에서 세 문서 사이의 관계(누가 냈고 어떻게 이어졌는지)까지 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '광복 문서 해설', tool: 'rubric-writing',
          teacher: '"이 문서에서 가장 중요한 한 문장은 무엇일까요?" 문서마다 누가, 언제 냈는지 먼저 말하게 한 뒤 해설을 쓰게 한다. 임시 헌장의 "민주공화제"를 "왕이 다스림"으로 쓰는 학생에게 제1조 "대한민국은 민주공화제로 함"을 다시 읽어 준다. 카이로 선언이 광복 날짜를 정했다고 쓰는 학생에게는 문서가 말하지 않은 것을 덧붙이지 않게 한다.',
          task: '대한민국 임시 헌장·대일 선전 포고·카이로 선언의 뜻을 해설 글로 쓰고, 세 문서가 광복으로 어떻게 이어졌는지 짧은 글로 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('대한민국 임시 헌장(1919) 제1조 "대한민국은 민주공화제로 함"의 뜻을 두 문장으로 해설하세요.', { topic: '1919년 임시정부가 만든 대한민국 임시 헌장 제1조 "대한민국은 민주공화제로 함"이 무엇을 밝혔는지 두 문장으로 해설하세요.', min: 30, max: 180, s: [2, 3], title: '문서 ① 임시 헌장' }, ['누가 언제 만든 문서인지 썼다', '민주공화제의 뜻을 썼다', '문서에 없는 내용을 덧붙이지 않았다'], [['민주공화']]),
              RW('틀을 채워 임시 헌장의 뜻을 쓰세요.', { topic: '대한민국 임시 헌장 제1조의 뜻을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '임시 헌장은 ___년 임시정부가 만든 문서로, 대한민국이 ___ 나라임을 밝혔다.' }, ['누가 언제 만든 문서인지 썼다', '내 말로 썼다'], [['민주공화']])),
            IT(RW('임시정부의 대일 선전 포고(1941)가 무엇을 밝힌 문서인지 두 문장으로 해설하세요.', { topic: '1941년 대한민국 임시정부가 발표한 대일 선전 포고가 무엇을 밝혔고, 독립운동에 어떤 뜻이 있었는지 두 문장으로 해설하세요.', min: 30, max: 180, s: [2, 3], title: '문서 ② 대일 선전 포고' }, ['누가 언제 낸 문서인지 썼다', '무엇을 선언했는지 썼다', '독립운동에 어떤 뜻이 있었는지 썼다'], [['선전 포고', '전쟁']]),
              RW('틀을 채워 대일 선전 포고의 뜻을 쓰세요.', { topic: '대일 선전 포고의 뜻을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '대일 선전 포고는 ___가 일본과 ___을 하겠다고 밝힌 문서이다.' }, ['누가 낸 문서인지 썼다', '내 말로 썼다'])),
            IT(RW('카이로 선언(1943)이 한국에 대해 무엇을 밝혔는지 두 문장으로 해설하세요.', { topic: '1943년 연합국 정상들이 발표한 카이로 선언이 한국을 "적당한 시기에 자유롭고 독립된 나라"로 만들겠다고 밝힌 뜻을 두 문장으로 해설하세요.', min: 30, max: 180, s: [2, 3], title: '문서 ③ 카이로 선언' }, ['누가 언제 낸 선언인지 썼다', '한국에 대해 밝힌 내용을 썼다', '선언에 없는 내용(날짜 등)을 덧붙이지 않았다'], [['카이로'], ['독립']]),
              RW('틀을 채워 카이로 선언의 뜻을 쓰세요.', { topic: '카이로 선언의 뜻을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '카이로 선언은 ___ 정상들이 한국을 적당한 시기에 ___ 나라로 만들겠다고 밝힌 선언이다.' }, ['누가 낸 선언인지 썼다', '내 말로 썼다'], [['독립']])),
            IT(RW('세 문서를 나온 차례대로 이어, 광복으로 가는 길을 세 문장으로 해설하세요.', { topic: '임시 헌장(1919)·대일 선전 포고(1941)·카이로 선언(1943)을 나온 차례대로 이어 광복으로 가는 길을 세 문장으로 해설하세요.', min: 50, max: 240, s: [3, 4], title: '광복으로 가는 문서' }, ['세 문서를 나온 차례대로 썼다', '문서마다 뜻을 썼다', '민족의 노력과 국제 정세를 함께 다루었다'], [['임시'], ['카이로']]),
              RW('틀을 채워 두 문서로 광복으로 가는 길을 두 문장으로 쓰세요.', { topic: '임시 헌장과 카이로 선언으로 광복으로 가는 길을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '1919년 임시정부는 임시 헌장으로 ___을 밝혔다. 1943년 카이로 선언은 한국의 ___을 밝혔다.' }, ['두 문서를 나온 차례대로 썼다', '문서마다 뜻을 썼다'], [['임시'], ['카이로']]),
              RW('세 문서를 누가 냈는지와 어떻게 이어졌는지까지 넣어 한 문단으로 해설하세요.', { topic: '세 문서를 누가 냈는지(임시정부·연합국), 서로 어떻게 이어져 광복에 이르렀는지 한 문단으로 해설하세요.', min: 90, max: 400, s: [4, 6], title: '문서 사이의 관계' }, ['세 문서를 모두 다루었다', '문서를 낸 쪽을 썼다', '문서 사이의 관계를 썼다', '문서에 없는 내용을 덧붙이지 않았다'], [['임시정부'], ['연합국']]),
              { conclude: '임시정부는 임시 헌장으로 민주공화제를 밝히고 일본에 선전 포고를 했으며, 연합국은 카이로 선언으로 한국의 독립을 언급했어요. 우리 노력과 국제 정세가 이어져 광복에 이르렀어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '광복으로 가는 문서를 정리해요.', columns: ['문서', '해', '낸 쪽', '뜻'], cells: [['대한민국 임시 헌장', '1919년', '', ''], ['대일 선전 포고', '1941년', '', ''], ['카이로 선언', '1943년', '', '']], answer: '임시정부·민주공화제를 밝힘 / 임시정부·일본과 전쟁을 선언 / 연합국·한국 독립을 언급' },
          { type: 'choice', prompt: '대한민국 임시 헌장 제1조가 밝힌 정치 형태는?', options: ['왕정', '민주공화제', '군정'], answer: '민주공화제' }] },
      }),

      // ---- 정리 ----
      M('wrap.flag', {
        title: '국경일 태극기 다는 법 점검', method: '태극기 다는 날·방법 확인', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 두 개(광복절에 깃봉에 붙여 단다·다는 날을 안다)에 스스로 표시한다.', base: '점검 칸 세 개에 표시한다(국경일 다섯 날 말하기 포함).', challenge: '점검 칸 네 개에 표시한다(현충일 조기와 견주어 말하기 포함).' },
        wrap: {
          teacher: '"광복절 아침, 태극기는 어떻게 달까요?" 국경일(3·1절·제헌절·광복절·개천절·한글날)에는 깃봉과 깃면 사이를 떼지 않고 단다는 점을 함께 말한 뒤 점검 칸에 표시하게 한다. 광복절에 조기를 단다는 학생에게 "조기는 어떤 날에 다는 태극기였나요?"라고 되묻는다. 가장 자신 없는 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다.',
          exitTicket: [
            IT(SELF('국경일 태극기 다는 법을 점검 칸에 스스로 표시해요.', '국경일 태극기 점검', null, null, ['광복절에는 깃봉에 붙여 단다는 것을 안다', '태극기를 다는 국경일을 말할 수 있다', '광복절이 기념하는 두 일을 말할 수 있다']),
              { prompt: '태극기 점검 칸 두 개에 스스로 표시해요.', target: { selfCheck: ['광복절에는 깃봉에 붙여 단다는 것을 안다', '광복절이 기념하는 두 일을 말할 수 있다'] } },
              { prompt: '현충일 조기와 견주어 보고 점검 칸 네 개에 스스로 표시해요.', target: { selfCheck: ['광복절에는 깃봉에 붙여 단다는 것을 안다', '태극기를 다는 국경일을 말할 수 있다', '광복절이 기념하는 두 일을 말할 수 있다', '현충일 조기와 다른 점을 말할 수 있다'] } }),
            { type: 'choice', prompt: '광복절에 태극기를 다는 방법으로 알맞은 것은?', options: ['깃봉과 깃면 사이를 떼지 않고 단다', '깃면 너비만큼 내려 조기로 단다', '달지 않는다'], answer: 0, difficulty: 0.15, explain: '국경일에는 깃봉에 붙여 달고, 현충일처럼 기리는 날에는 조기를 달아요.' },
          ],
        },
        worksheet: {
          title: '국경일 태극기',
          items: [
            { type: 'choice', prompt: '광복절에 태극기를 다는 방법에 ○ 해요.', options: ['깃봉에 붙여 단다', '기폭만큼 내려 단다', '달지 않는다'], answer: '깃봉에 붙여 단다' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
      M('wrap.chain', {
        title: '광복에서 정부 수립까지 한 줄 사슬', method: '광복에서 정부 수립까지 한 줄 사슬', tool: 'mindmap', minutes: 7,
        levels: { easy: '고리 두 칸(1945년 8월 15일·1948년 8월 15일)에 알맞은 일을 고른다.', base: '고리 네 칸(광복·총선거·헌법 공포·정부 수립)에 알맞은 일을 고른다(함정 카드 포함).', challenge: '고리 네 칸을 채운 뒤, 둘째 문항의 다른 고리와 견주어 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"광복에서 정부 수립까지, 고리 하나를 빼면 어떻게 될까요?" 날짜 칸에 일을 이은 뒤 고리 하나를 골라 그 고리가 왜 필요했는지 말하게 한다. 광복과 정부 수립을 같은 날로 여기는 학생에게 오늘 시간 띠의 3년을 다시 떠올리게 한다. 분단의 책임을 단정하는 말이 나오면 교과서 서술 범위의 사실(분할 점령·유엔 결정)로만 정리한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '광복에서 정부 수립까지', slots: [{ id: 's1', label: '1945년 8월 15일' }, { id: 's2', label: '1948년 5월 10일' }, { id: 's3', label: '1948년 7월 17일' }, { id: 's4', label: '1948년 8월 15일' }], cards: [{ id: 'k1', text: '광복' }, { id: 'k2', text: '5·10 총선거' }, { id: 'k3', text: '헌법 공포' }, { id: 'k4', text: '대한민국 정부 수립' }, { id: 'x1', text: '6·25전쟁 정전' }] }, prompt: '날짜마다 일어난 일을 이어요. 맞지 않는 카드는 남겨요.', target: { match: { s1: 'k1', s2: 'k2', s3: 'k3', s4: 'k4' } }, difficulty: 0.25 },
              { prompt: '두 번의 8월 15일에 일어난 일을 이어요.', toolOptions: { slots: [{ id: 's1', label: '1945년 8월 15일' }, { id: 's4', label: '1948년 8월 15일' }], cards: [{ id: 'k1', text: '광복' }, { id: 'k4', text: '대한민국 정부 수립' }] }, target: { match: { s1: 'k1', s4: 'k4' } } }),
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '없으면 안 될 고리', basket: '정부 수립에 꼭 필요했던 고리', cards: [{ id: 'c1', text: '국회를 꾸린 총선거' }, { id: 'c2', text: '나라의 틀을 정한 헌법' }, { id: 'c3', text: '6·25전쟁 정전' }] }, prompt: '정부를 세우는 데 꼭 필요했던 고리만 골라 담아요.', target: { pick: ['c1', 'c2'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '광복과 정부 수립에 대한 설명으로 알맞은 것은?', options: ['1945년 광복 뒤 3년의 과정을 거쳐 1948년 정부가 세워졌다', '광복한 날 바로 정부가 세워졌다', '총선거 없이 정부가 세워졌다'], answer: 0, difficulty: 0.2, explain: '총선거 → 헌법 공포 → 정부 수립 차례로 대한민국 정부가 세워졌어요.' },
          ],
        },
        worksheet: {
          title: '광복에서 정부 수립까지',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '1948년 ___ 총선거로 제헌 국회가 구성되고, ___월 17일 헌법이 공포되었다.', answer: '5·10, 7' },
            { type: 'short', prompt: '사슬의 고리 하나를 골라, 그 고리가 없었다면 어떻게 되었을지 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.meaning', {
        title: '문서 하나의 뜻 출구 글', method: '광복으로 가는 문서 하나의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(문서의 뜻)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(낸 쪽·뜻)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 자기 말로 한 문장을 더해 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"오늘 읽은 문서 가운데 하나만 친구에게 소개한다면 무엇을 고를까요?" 출구 글을 쓰기 전에 세 문서를 낸 쪽과 해를 함께 다시 짚는다. 카이로 선언으로 광복 날짜가 정해졌다고 쓰는 학생에게는 선언이 밝힌 것만 쓰도록 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('광복으로 가는 문서 하나를 골라 그 뜻을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '임시 헌장·대일 선전 포고·카이로 선언 가운데 하나를 골라 그 뜻을 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '문서 하나의 뜻', starter: '___(문서)는 ___가 낸 문서로, ___을 밝혔다.' }, ['사실(낸 쪽·해)이 정확하다', '핵심 낱말(민주공화제·선전 포고·독립 등)을 넣었다', '내 말로 썼다']),
              { prompt: '빈칸 하나를 채워 문서의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '카이로 선언은 연합국 정상들이 한국의 ___을 언급한 선언이다.' }, target: { selfCheck: ['문서의 뜻을 썼다', '내 말로 썼다'], mustInclude: [['독립']] } },
              { prompt: '틀 없이, 문서의 뜻에 오늘 기억할 까닭 한 문장을 더해 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(낸 쪽·해)이 정확하다', '핵심 낱말(민주공화제·선전 포고·독립 등)을 넣었다', '내 말로 썼다', '오늘 기억할 까닭을 한 문장 더했다'] } }),
            { type: 'choice', prompt: '카이로 선언에 대한 설명으로 알맞은 것은?', options: ['1943년 연합국 정상들이 한국의 독립을 언급한 선언', '임시정부가 일본에 전쟁을 선포한 문서', '광복 날짜를 정한 문서'], answer: 0, difficulty: 0.2, explain: '카이로 선언은 한국을 적당한 시기에 자유롭고 독립된 나라로 만들겠다고 밝혔어요.' },
          ],
        },
        worksheet: {
          title: '광복으로 가는 문서',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '대한민국 임시 헌장 제1조는 "대한민국은 ___로 함"이라고 밝혔다.', answer: '민주공화제' },
            { type: 'short', prompt: '광복으로 가는 문서 하나의 뜻을 내 말로 한 문장 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 개천절 — 고조선 건국 이야기와 홍익인간 (days.m.foundation) ====
  {
    const M = MK('foundation');
    const STORY5 = [
      { id: 'h', text: '환웅이 무리를 이끌고 하늘에서 내려옴', motif: 'cloud' }, { id: 'w', text: '곰과 호랑이가 사람이 되기를 빎', motif: 'moon' },
      { id: 'g', text: '쑥과 마늘을 받고 굴에서 견딤', motif: 'leaf' }, { id: 'b', text: '곰이 여자(웅녀)가 됨', motif: 'mountain' },
      { id: 'd', text: '단군왕검이 태어나 고조선을 세움', motif: 'house' },
    ];
    const SYM = [
      { id: 'y1', text: '곰이 사람이 됨', to: '이야기 속 상징' }, { id: 'y2', text: '하늘에서 내려온 환웅', to: '이야기 속 상징' },
      { id: 'y3', text: '쑥과 마늘을 먹으며 견딘 날들', to: '이야기 속 상징' }, { id: 'f1', text: '고인돌이 많이 남아 있음', to: '역사적 사실' },
      { id: 'f2', text: '비파형 동검이 나옴', to: '역사적 사실' }, { id: 'f3', text: '청동기 문화가 발달함', to: '역사적 사실' },
    ];
    const SYM_MORE = [{ id: 'y4', text: '바람·비·구름을 다스리는 신', to: '이야기 속 상징' }, { id: 'f4', text: '8조법 세 조항이 옛 책에 전함', to: '역사적 사실' }];
    // 가상 인물 갈림길 — 가상의 중학생 '온'
    const D1 = { text: '가상의 중학생 온의 모둠이 사회 발표 자료를 아주 잘 모았다. 옆 모둠은 같은 주제 자료를 찾지 못해 애를 먹고 있다.', ask: '온은 어떻게 할까?', motif: 'house', choices: [
      { id: 'share', text: '우리가 찾은 자료가 어디 있는지 옆 모둠에도 알려 준다', result: '옆 모둠도 자료를 찾아 발표를 준비한다.', impact: [{ who: '옆 모둠', text: '발표를 준비할 수 있다', tone: 1 }], end: '찾은 자료를 함께 나눴어요.',
        next: { text: '발표 날, 한 친구가 "우리 모둠 점수가 깎이면 어떡해?"라고 걱정한다.', ask: '온은 무엇이라고 할까?', choices: [
          { id: 'explain', text: '자료는 나누어도 우리 생각과 발표는 우리 몫이라고 말한다', result: '모둠이 자기 생각을 더 다듬는 데 힘을 쏟는다.', impact: [{ who: '우리 모둠', text: '발표가 더 좋아진다', tone: 1 }], end: '나누면서도 우리 몫을 해냈어요.',
            next: { text: '선생님이 반 전체가 쓸 자료 모음 게시판을 만들자고 제안한다.', ask: '온은 어떻게 할까?', choices: [
              { id: 'board', text: '우리 모둠이 찾은 자료 목록을 게시판에 올린다', result: '반 친구 모두가 자료를 쓸 수 있게 된다.', impact: [{ who: '반 전체', text: '모두가 도움을 받는다', tone: 1 }] },
              { id: 'hide', text: '좋은 자료는 빼고 나머지만 올린다', result: '게시판 자료가 빈약해진다.', impact: [{ who: '반 전체', text: '도움을 덜 받는다', tone: -1 }], why: '널리 이롭게 하려면 좋은 것도 함께 나눠요.' }] } },
          { id: 'take', text: '점수를 위해 옆 모둠에 알려 준 것을 후회하며 다시 숨긴다', result: '옆 모둠이 당황하고 두 모둠 사이가 서먹해진다.', impact: [{ who: '옆 모둠', text: '준비가 흔들린다', tone: -1 }], why: '나눈 것을 다시 빼앗으면 믿음이 깨져요.' }] } },
      { id: 'keep', text: '우리 모둠만 좋은 점수를 받도록 자료를 숨긴다', result: '옆 모둠은 끝내 자료를 찾지 못한다.', impact: [{ who: '옆 모둠', text: '발표를 제대로 못 한다', tone: -1 }], why: '홍익인간은 우리끼리가 아니라 널리 사람을 이롭게 한다는 뜻이에요.', ending: '우리끼리만 이롭게 했어요.' }] };
    const R1 = [{ id: 'r1', text: '홍익인간은 널리 인간을 이롭게 한다는 뜻이다' }, { id: 'r2', text: '나누어도 우리가 할 몫은 그대로 남는다' },
      { id: 'r3', text: '우리 모둠만 이기면 된다', why: '널리 이롭게 한다는 뜻은 우리끼리만이 아니에요.' }, { id: 'r4', text: '나누면 언제나 손해다', why: '자료를 나누어도 생각과 발표는 각 모둠의 몫이에요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '반 모두가 쓸 수 있으면 더 많은 사람이 도움을 받는다' }], ok: ['r5'] };
    const LAW = (opt) => MB('8조법 조항과 그 조항에서 추론할 수 있는 사회 모습을 이어 보세요. 맞지 않는 카드는 남겨요.', [['사람을 죽이면 사형', '생명을 중시함'], ['다치게 하면 곡식으로 갚음', '농사를 짓고 노동력을 중시함'], ['도둑질하면 노비로 삼음', '사유 재산과 신분 차이가 있음']], ['바다 무역이 중심이었음'], Object.assign({ topic: '8조법 읽기' }, opt));

    ALL.push(
      // ---- 도입 ----
      M('intro.story', {
        title: '건국 이야기 속 인물 고르기', method: '건국 이야기 장면 듣고 인물 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 이야기를 읽어 주며 등장인물 두 명(환웅·단군왕검)을 칠판에 적어 두고 함께 고른다.', base: '이야기를 듣고 시연 판에서 등장인물 세 명(환웅·웅녀·단군왕검)이 바구니에 담기는 모습을 보며 인물마다 한 일을 짐작한다.', challenge: '인물 세 명이 이야기에서 한 일을 한 줄씩 짝에게 말한다.' },
        intro: {
          teacher: '"개천이라는 말은 무슨 뜻일까요?" 개천절은 「국경일에 관한 법률」이 정한 국경일로, 하늘이 열렸다는 뜻이며 단군왕검이 고조선을 세운 것을 기념한다고 알린다. 『삼국유사』에 전하는 단군 이야기를 짧게 읽어 주고 시연 단추로 등장인물 카드가 바구니에 담기는 모습을 보인다. "곰이 정말 사람이 되었어요?"라는 질문에는 "이야기 속 곰은 무엇을 나타낼까요? 오늘은 이야기와 역사를 나누어 읽어 봐요"라고 되묻는다.',
          student: '단군 이야기를 듣고 등장인물을 골라요. 인물마다 이야기에서 무엇을 했는지 짝에게 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이야기 속 인물', title: '단군 이야기', cards: [
            { id: 'p1', text: '환웅', motif: 'cloud' }, { id: 'p2', text: '웅녀', motif: 'mountain' }, { id: 'p3', text: '단군왕검', motif: 'star' },
            { id: 'p4', text: '세종 대왕', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['p1'] }, { pick: ['p1', 'p2'] }, { pick: ['p1', 'p2', 'p3'] }] },
          art: { draw: 'a paper-cut legend scene with a bear and a tiger near a cave, a heavenly figure descending on clouds over a mountain', banner: '이야기 속 인물은 누구일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '건국 이야기는 상징을 담은 이야기로 읽는다 — 그대로 일어난 일로 믿게 하거나 지어낸 이야기라고 버리게 하지 않는다.',
      }),
      M('intro.bronze', {
        title: '청동기 유물로 사회 짐작하기', method: '청동기 유물 카드로 사회 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '짐작 보기 두 개(지배자가 있었다·모두 똑같이 살았다) 가운데 고인돌에 맞는 것을 교사와 함께 고른다.', base: '시연 판의 짐작 보기 세 개 가운데 유물에 맞는 짐작이 담기는 모습을 보고, 고르지 않은 보기가 왜 맞지 않는지 말한다.', challenge: '고른 짐작마다 근거가 되는 유물(고인돌·청동 거울·비파형 동검) 하나를 짝에게 말한다.' },
        intro: {
          teacher: '"이렇게 무거운 돌을 올린 무덤을 만들려면 무엇이 필요했을까요?" 고인돌과 청동 거울 카드를 보이고, 시연 단추로 유물에 맞는 짐작이 바구니에 담기는 모습을 보인다. "옛날 사람들은 모두 똑같이 살았다"는 말이 나오면 "많은 사람을 모아 큰 돌을 옮기게 한 사람은 누구였을까요?"라고 되묻는다. 고조선은 청동기 문화를 바탕으로 세워졌다는 교과서 서술을 알린다.',
          student: '고인돌과 청동 거울 카드를 보고, 그 시대 사회에 대한 짐작 가운데 알맞은 것을 골라요. 어떤 유물을 보고 그렇게 짐작했는지 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '유물로 본 짐작', cards: [
            { id: 'g1', text: '많은 사람을 모을 힘을 가진 지배자가 있었다' }, { id: 'g2', text: '청동 도구로 제사와 의식을 치렀다' }, { id: 'g3', text: '모든 사람이 똑같이 살았다' }], shuffle: false }, sequence: [{ pick: ['g1'] }, { pick: ['g1', 'g2'] }] },
          art: { draw: 'paper-cut dolmen stones and a round bronze mirror on a hill above rice fields, small paper people pulling a large stone with ropes', banner: '유물로 사회를 짐작해 볼까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('intro.book', {
        title: '고조선을 전하는 옛 기록의 앞뒤', method: '옛 책 이름과 쓰인 때 짐작', tool: 'timeline', minutes: 6,
        levels: { easy: '기록 카드 두 장(『삼국유사』·오늘의 교과서)의 앞뒤를 교사와 함께 놓는다.', base: '기록 카드 세 장(『한서』 「지리지」·『삼국유사』·오늘의 교과서)이 쓰인 차례대로 놓이는 시연을 보며 앞뒤를 짐작해 말한다.', challenge: '고조선이 세워진 때와 기록이 쓰인 때 사이가 얼마나 먼지, 그 거리가 읽기에 무엇을 뜻하는지 말한다.' },
        intro: {
          teacher: '"고조선 이야기는 고조선 사람이 직접 쓴 것일까요?" 기록 카드 세 장을 보이고 시연 단추로 쓰인 차례대로 놓이는 모습을 보인다. 8조법은 중국 역사책 『한서』 「지리지」에, 단군 이야기는 고려 때 일연이 쓴 『삼국유사』에 전한다고 알린다. "오래전에 쓰였으니 다 믿을 수 없다"는 말에는 "기록이 쓰인 때와 기록된 일의 때가 다르면 무엇을 따져야 할까요?"라고 되묻는다.',
          student: '고조선을 전하는 기록 카드를 쓰인 차례대로 놓아 보고, 고조선이 세워진 때와 기록이 쓰인 때가 얼마나 떨어져 있는지 짐작해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저 쓰임', '나중 쓰임'], slots: 3, cards: [
            { id: 'b1', text: '『한서』 「지리지」(중국 한나라)' }, { id: 'b2', text: '『삼국유사』(고려, 일연)' }, { id: 'b3', text: '오늘의 역사 교과서' }], shuffle: false }, sequence: [{ order: ['b1'] }, { order: ['b1', 'b2'] }, { order: ['b1', 'b2', 'b3'] }] },
          art: { draw: 'paper-cut ancient books with tassels open on a low desk, a bear and tiger silhouette in the pages and a mountain behind', banner: '언제 쓰인 기록일까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.order', {
        title: '건국 이야기 차례 놓기', method: '건국 이야기 차례 놓기', tool: 'story', minutes: 16,
        levels: { easy: '이야기 장면 3장의 차례를 놓고, 놓으면 바로 맞는지 알려 준다.', base: '이야기 장면 5장의 차례를 놓고, 환웅이 한 일과 장면의 해석도 잇는다.', challenge: '장면 5장에 함정 장면 한 장이 섞이고, 셋째 문항에서 장면마다 상징 해석을 함정 카드 둘 사이에서 고른다.' },
        activity: {
          title: '건국 이야기 차례 놓기', tool: 'story',
          teacher: '"환웅은 무엇을 거느리고 내려왔을까요?" 바람·비·구름을 다스리는 신을 거느렸다는 대목을 읽어 주고 장면 카드를 놓게 한다. 단군왕검의 탄생을 곰이 사람이 되는 장면보다 앞에 두는 학생에게는 이야기를 다시 들려준다. 셋째 문항에서 곰과 호랑이를 "진짜 동물"로만 읽는 학생에게 "곰과 호랑이를 섬긴 부족이 있었다는 해석도 있어요. 해석은 하나뿐일까요?"라고 되묻는다.',
          task: '『삼국유사』에 전하는 단군 이야기 장면을 차례대로 놓고, 장면이 무엇을 나타내는지 해석과 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('단군 이야기 장면 5장을 차례대로 놓아 보세요.', STORY5, { title: '단군 이야기' }),
              OB('단군 이야기 장면 3장을 차례대로 놓아 보세요.', pickCards(STORY5, ['h', 'b', 'd']), { title: '단군 이야기' }),
              OB('장면 5장을 차례대로 놓고, 이야기에 없는 장면 한 장은 남기세요.', STORY5, { title: '단군 이야기' }, [{ id: 'x1', text: '호랑이가 끝까지 견뎌 사람이 됨', motif: 'sun' }])),
            IT(OB('환웅이 한 일을 차례대로 놓아 보세요.', [{ id: 'm', text: '무리 삼천을 이끌고 내려옴', motif: 'cloud' }, { id: 'r', text: '바람·비·구름을 다스리는 신을 거느림', motif: 'bird' }, { id: 'l', text: '세상을 다스리며 사람들을 이롭게 함', motif: 'tree' }], { title: '환웅이 한 일' }),
              OB('환웅이 한 일 두 가지를 차례대로 놓아 보세요.', [{ id: 'm', text: '무리 삼천을 이끌고 내려옴', motif: 'cloud' }, { id: 'l', text: '세상을 다스리며 사람들을 이롭게 함', motif: 'tree' }], { title: '환웅이 한 일' })),
            IT(MB('이야기 속 장면과 그 장면을 읽는 해석을 이어 보세요. 맞지 않는 카드는 남겨요.', [['곰과 호랑이', '곰·호랑이를 섬긴 부족'], ['바람·비·구름 신', '농사를 중시한 사회'], ['단군왕검이라는 이름', '제사와 정치를 함께 맡음']], ['바다를 건너온 무리'], { title: '장면의 해석' }),
              MB('이야기 속 장면과 그 해석을 이어 보세요.', [['곰과 호랑이', '곰·호랑이를 섬긴 부족'], ['바람·비·구름 신', '농사를 중시한 사회']], [], { title: '장면의 해석' }),
              MB('장면과 해석을 잇고, 맞지 않는 카드 두 장은 남기세요.', [['곰과 호랑이', '곰·호랑이를 섬긴 부족'], ['바람·비·구름 신', '농사를 중시한 사회'], ['단군왕검이라는 이름', '제사와 정치를 함께 맡음']], ['바다를 건너온 무리', '곰이 실제로 사람이 됨'], { title: '장면의 해석' }),
              { conclude: '건국 이야기에는 그 시대 사람들의 생각과 사회 모습이 상징으로 담겨 있어요. 해석은 여러 가지일 수 있어서 근거와 함께 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단군 이야기 장면이 나타내는 것을 정리해요.', columns: ['장면', '나타내는 것(해석)'], cells: [['바람·비·구름 신을 거느림', ''], ['곰이 사람이 됨', ''], ['단군왕검이 고조선을 세움', '']], answer: '농사를 중시함 / 곰을 섬긴 부족과의 결합 / 우리 역사 첫 나라의 건국' }] },
      }),
      M('activity.symbol', {
        title: '상징과 역사적 사실 나누기', method: '상징과 역사적 사실 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 6장을 이야기 속 상징과 역사적 사실로 나누고, 건국 이야기를 읽는 태도를 나눈다.', challenge: '카드 2장이 더 섞인 판에서 나누고, 셋째 문항에서 상징으로 읽는 까닭을 가려낸다.' },
        activity: {
          title: '상징과 사실 나누기', tool: 'sortboard',
          teacher: '"이 카드는 이야기 속 상징일까요, 유물과 기록으로 확인되는 사실일까요?" 고인돌을 상징 바구니에 넣는 학생에게 "고인돌은 지금도 남아 있어 직접 볼 수 있을까요?"라고 되묻는다. "건국 이야기는 다 지어낸 것"이라는 학생에게는 이야기에 그 시대 사람들의 생각이 담겨 있다는 점을, "모두 그대로 일어난 일"이라는 학생에게는 상징을 해석하며 읽는다는 점을 짚는다.',
          task: '건국 이야기와 고조선에 관한 카드를 이야기 속 상징과 역사적 사실로 나누고, 이야기를 읽는 바른 태도를 골라요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 이야기 속 상징과 역사적 사실로 나누세요.', ['이야기 속 상징', '역사적 사실'], SYM),
              SB('카드 4장을 이야기 속 상징과 역사적 사실로 나누세요.', ['이야기 속 상징', '역사적 사실'], pickCards(SYM, ['y1', 'y2', 'f1', 'f2'])),
              SB('카드 8장을 이야기 속 상징과 역사적 사실로 나누세요.', ['이야기 속 상징', '역사적 사실'], [...SYM, ...SYM_MORE])),
            IT(SB('건국 이야기를 읽는 태도를 알맞은 것과 알맞지 않은 것으로 나누세요.', ['알맞은 태도', '알맞지 않은 태도'], [
              { id: 'a1', text: '상징이 무엇을 나타내는지 해석한다', to: '알맞은 태도' }, { id: 'a2', text: '유물·기록과 견주어 본다', to: '알맞은 태도' },
              { id: 'a3', text: '모든 장면을 그대로 일어난 일로 믿는다', to: '알맞지 않은 태도' }, { id: 'a4', text: '지어낸 이야기라며 통째로 버린다', to: '알맞지 않은 태도' }])),
            IT(SB('건국 이야기를 상징으로 읽는 까닭을 맞는 것과 맞지 않는 것으로 나누세요.', ['맞는 까닭', '맞지 않는 까닭'], [
              { id: 'w1', text: '그 시대 사람들의 생각이 담겨 있어서', to: '맞는 까닭' }, { id: 'w2', text: '오랜 세월 말로 전해지다 기록되어서', to: '맞는 까닭' },
              { id: 'w3', text: '옛사람들은 거짓말을 좋아해서', to: '맞지 않는 까닭' }, { id: 'w4', text: '역사와 아무 상관이 없어서', to: '맞지 않는 까닭' }]),
              null, null, { conclude: '건국 이야기는 그대로 믿지도, 통째로 버리지도 않고 상징을 해석하며 유물·기록과 견주어 읽어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"곰이 사람이 되었다"는 장면을 상징으로 읽으면 무엇을 나타낸다고 볼 수 있는지 한 문장으로 써요.' }] },
      }),
      M('activity.law', {
        title: '8조법으로 고조선 사회 추론', method: '8조법 조항으로 사회 모습 추론하기', tool: 'mindmap', minutes: 16,
        levels: { easy: '조항 세 개와 추론 카드를 잇되, 놓으면 바로 맞는지 알려 준다.', base: '조항 세 개와 추론을 잇고, 추론 카드를 생명·재산·신분 가지에 나누고, 기록과 추론을 가른다.', challenge: '함정 카드가 더 섞인 판에서 잇고 나눈 뒤, 활동지에 추론의 근거를 두 문장으로 쓴다.' },
        activity: {
          title: '8조법으로 추론하기', tool: 'mindmap',
          teacher: '"도둑질한 사람을 노비로 삼았다면 그 사회에 대해 무엇을 알 수 있을까요?" 조항의 핵심 낱말(목숨·곡식·노비)에 밑줄을 긋게 하고 추론과 잇게 한다. "8조법은 여덟 조항이 다 남아 있다"는 학생에게 지금은 세 조항만 전한다는 점을 짚는다. 셋째 문항에서 기록에 적힌 것과 우리가 추론한 것을 섞어 말하는 학생에게 "이 문장은 책에 적혀 있나요, 우리가 생각해 낸 것인가요?"라고 되묻는다.',
          task: '지금까지 전하는 8조법 세 조항을 읽고, 조항에서 추론할 수 있는 고조선 사회 모습을 생명·재산·신분 가지로 정리해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(LAW(),
              MB('8조법 조항 두 개와 추론할 수 있는 사회 모습을 이어 보세요.', [['사람을 죽이면 사형', '생명을 중시함'], ['도둑질하면 노비로 삼음', '사유 재산과 신분 차이가 있음']], [], { topic: '8조법 읽기' })),
            IT(SB('추론한 사회 모습을 생명·재산·신분 가지에 나누세요.', ['생명', '재산', '신분'], [
              { id: 'n1', text: '사람의 목숨을 귀하게 여김', to: '생명' }, { id: 'n2', text: '다친 값을 곡식으로 갚게 함', to: '재산' },
              { id: 'n3', text: '자기 재산을 가질 수 있었음', to: '재산' }, { id: 'n4', text: '노비라는 신분이 있었음', to: '신분' },
              { id: 'n5', text: '모두가 같은 신분이었음' }], { topic: '고조선 사회' })),
            IT(SB('문장을 기록에 적힌 것과 우리가 추론한 것으로 나누세요.', ['기록에 적힘', '우리가 추론함'], [
              { id: 'k1', text: '도둑질한 자는 노비로 삼음', to: '기록에 적힘' }, { id: 'k2', text: '사람을 죽인 자는 사형', to: '기록에 적힘' },
              { id: 'k3', text: '신분 차이가 있었다', to: '우리가 추론함' }, { id: 'k4', text: '농사가 중요했다', to: '우리가 추론함' }], { topic: '기록과 추론' }),
              null,
              SB('문장을 기록과 추론으로 나누고, 맞지 않는 카드는 남기세요.', ['기록에 적힘', '우리가 추론함'], [
                { id: 'k1', text: '도둑질한 자는 노비로 삼음', to: '기록에 적힘' }, { id: 'k2', text: '사람을 죽인 자는 사형', to: '기록에 적힘' },
                { id: 'k3', text: '신분 차이가 있었다', to: '우리가 추론함' }, { id: 'k4', text: '농사가 중요했다', to: '우리가 추론함' },
                { id: 'k5', text: '여덟 조항이 모두 전한다' }], { topic: '기록과 추론' }),
              { conclude: '8조법은 지금 세 조항만 전해요. 기록에 적힌 것과 그것으로 추론한 것을 나누어 말하면 설명이 더 정확해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '8조법으로 고조선 사회를 추론해요.', columns: ['조항', '추론한 사회 모습'], cells: [['사람을 죽인 자는 사형', ''], ['남을 다치게 한 자는 곡식으로 갚음', ''], ['도둑질한 자는 노비로 삼음', '']], answer: '생명 중시 / 농경 사회·노동력 중시 / 사유 재산·신분 존재' }] },
      }),
      M('activity.hongik', {
        title: '홍익인간을 학교에 대는 갈림길', method: '홍익인간을 오늘 학교생활에 적용하는 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길에서 한 번 골라 결과를 본다.', base: '갈림길 두 번을 끝까지 가 보고, 내 선택의 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '홍익인간 갈림길', tool: 'dilemma',
          teacher: '"\'널리 인간을 이롭게\'라는 말에서 \'널리\'는 누구까지일까요?" 가상 학생 온의 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과와 견주게 한다. 홍익인간을 "우리끼리 이롭게"로 이해하는 학생에게 "\'널리\'에 옆 모둠은 들어갈까요?"라고 되묻는다. 온은 지어낸 가상 인물이고, 정답 길은 홍익인간의 말뜻에 비추어 정한 것이라고 밝힌다.',
          task: '가상 학생 온이 모둠 자료를 두고 고르는 길을 따라가고, 끝에서 홍익인간의 뜻에 비추어 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '자료를 잘 모은 온이 옆 모둠을 두고 할 일을 한 번 골라 결과를 보세요.', base: '온의 갈림길 두 번을 끝까지 가 보고, 내 선택의 근거를 고르세요.', challenge: '온의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '모둠 자료와 홍익인간', D1, [['share', 'explain', 'board']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            { prompt: '급식 줄에서 다리를 다친 친구가 오래 서 있기 힘들어해요. 홍익인간의 뜻에 맞는 길을 골라 끝까지 가 보세요.', toolOptions: { title: '급식 줄의 갈림길', scene: { text: '급식 줄에 다리를 다쳐 목발을 짚은 친구가 서 있다. 줄은 길고, 친구는 힘들어 보인다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'help', text: '친구의 식판을 들어 주고 먼저 앉게 하자고 선생님께 말한다', result: '친구가 앉아서 기다리고 식판을 받는다.', impact: [{ who: '다친 친구', text: '편하게 밥을 먹는다', tone: 1 }], ending: '어려운 친구를 도와 함께 이롭게 했어요.' },
              { id: 'pass', text: '내 순서가 아니니 모른 척한다', result: '친구는 오래 서서 힘들게 기다린다.', impact: [{ who: '다친 친구', text: '힘들게 기다린다', tone: -1 }], why: '널리 이롭게 한다는 것은 둘레의 어려운 사람을 살피는 일이에요.', ending: '도울 기회를 놓쳤어요.' }] }, reasons: [{ id: 'q1', text: '둘레의 어려운 사람을 살피는 것이 널리 이롭게 하는 일이다' }, { id: 'q2', text: '나와 친한 사람만 도우면 된다', why: '널리 이롭게 한다는 뜻은 친한 사람에만 그치지 않아요.' }] }, target: { path: [['help']], reasons: ['q1'] } },
            { prompt: '반 대청소 날, 한 모둠이 맡은 구역이 유난히 넓어요. 홍익인간의 뜻에 맞는 길을 골라 끝까지 가 보세요.', toolOptions: { title: '대청소 날의 갈림길', scene: { text: '대청소 날, 우리 모둠은 일찍 끝났는데 옆 모둠 구역은 넓어서 아직 반도 못 했다.', ask: '우리 모둠은 어떻게 할까?', motif: 'house', choices: [
              { id: 'join', text: '옆 모둠 구역을 함께 치우자고 말한다', result: '반 전체가 일찍 청소를 마친다.', impact: [{ who: '옆 모둠', text: '힘이 덜 든다', tone: 1 }], ending: '함께 도와 반 모두가 이로웠어요.' },
              { id: 'rest', text: '우리 몫은 끝났으니 쉬러 간다', result: '옆 모둠만 늦게까지 남아 청소한다.', impact: [{ who: '옆 모둠', text: '늦게까지 남는다', tone: -1 }], why: '내 몫을 다한 뒤 남을 돕는 것도 널리 이롭게 하는 일이에요.', ending: '우리 몫만 하고 끝났어요.' }] }, reasons: [] }, target: { path: [['join']] }, conclude: '홍익인간은 우리끼리가 아니라 널리 사람을 이롭게 한다는 뜻이에요. 오늘 학교에서는 나누고, 살피고, 함께 돕는 모습으로 나타나요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '홍익인간의 뜻으로 가장 알맞은 것은?', options: ['우리끼리만 이롭게 한다', '널리 인간을 이롭게 한다', '힘센 사람이 다스린다'], answer: '널리 인간을 이롭게 한다' }] },
      }),
      M('activity.record', {
        title: '옛 기록 그대로와 해석 나누어 쓰기', method: '옛 기록 그대로와 해석 나누어 글쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '첫 글에서 문장 네 개를 기록 그대로·해석으로 나누어 옮겨 쓰고, 문장 틀을 따라 마지막 글을 두 문장으로 쓴다.', base: '기록 그대로와 해석을 나누어 쓰고, 기록이 쓰인 때를 설명한 뒤 건국 이야기를 읽는 태도를 세 문장으로 쓰고 기준표로 점검한다.', challenge: '마지막 글에서 『한서』 「지리지」와 『삼국유사』가 쓰인 시기와 고조선 건국 사이의 거리까지 다루어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '기록과 해석 나눠 쓰기', tool: 'rubric-writing',
          teacher: '"이 문장은 기록에 적힌 것일까요, 우리가 풀이한 것일까요?" 『삼국유사』의 단군 이야기 한 대목을 읽어 주고, 기록 그대로와 해석을 나누어 쓰게 한다. "환웅 부족이 옮겨 왔다"를 기록 그대로라고 쓰는 학생에게 그것은 학자들의 해석이라고 짚는다. "고려 때 쓴 책이니 믿을 수 없다"는 학생에게 "쓰인 때가 늦으면 버려야 할까요, 무엇을 더 따져야 할까요?"라고 되묻는다.',
          task: '『삼국유사』 등 옛 기록의 내용을 기록 그대로와 해석으로 나누어 쓰고, 건국 이야기를 읽는 바른 태도를 짧은 글로 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('단군 이야기에서 한 장면을 골라, 기록에 적힌 내용과 그 해석을 나누어 두 문장으로 쓰세요.', { topic: '단군 이야기의 한 장면(예: 곰이 여자가 됨)을 골라, 첫 문장에는 기록에 적힌 내용을, 둘째 문장에는 그 해석을 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 그대로와 해석' }, ['첫 문장은 기록에 적힌 내용이다', '둘째 문장은 해석이다', '해석이라는 것을 드러내는 말(~로 볼 수 있다 등)을 썼다'], [['해석', '볼 수 있다', '나타낸다']]),
              RW('네 문장(곰이 여자가 됨 / 곰을 섬긴 부족과 결합 / 환웅이 무리 삼천을 이끎 / 이주한 무리가 있었음)을 기록 그대로와 해석으로 나누어 옮겨 쓰세요.', { topic: '네 문장을 기록 그대로 두 개, 해석 두 개로 나누어 옮겨 쓰세요.', min: 30, max: 200, s: [2, 4], starter: '기록 그대로: ___, ___. 해석: ___, ___.' }, ['기록 그대로 두 문장을 골랐다', '해석 두 문장을 골랐다'])),
            IT(RW('고조선을 전하는 기록이 언제, 누구에 의해 쓰였는지 쓰고, 그 점을 읽을 때 왜 따져야 하는지 한 문장 덧붙이세요.', { topic: '단군 이야기를 전하는 『삼국유사』가 언제 누구에 의해 쓰였는지 쓰고, 읽을 때 그 점을 따져야 하는 까닭을 덧붙이세요.', min: 30, max: 200, s: [2, 3], title: '기록이 쓰인 때' }, ['쓰인 때와 쓴 사람을 썼다', '따져야 하는 까닭을 썼다', '기록을 통째로 버리지 않았다'], [['삼국유사'], ['고려', '일연']]),
              RW('틀을 채워 『삼국유사』가 쓰인 때를 쓰세요.', { topic: '『삼국유사』가 쓰인 때와 쓴 사람을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '단군 이야기는 ___ 때 ___이 쓴 『삼국유사』에 전한다.' }, ['쓰인 때와 쓴 사람을 썼다'], [['고려'], ['일연']])),
            IT(RW('건국 이야기를 읽는 바른 태도를 세 문장으로 쓰세요.', { topic: '건국 이야기를 그대로 믿지도 통째로 버리지도 않고 읽는 방법을 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '건국 이야기를 읽는 태도' }, ['그대로 믿기와 통째로 버리기를 모두 피했다', '상징을 해석한다는 말을 썼다', '유물이나 기록과 견주어 본다고 썼다', '다른 사람을 깎아내리는 말을 쓰지 않았다'], [['상징'], ['해석']]),
              RW('틀을 채워 건국 이야기를 읽는 태도를 두 문장으로 쓰세요.', { topic: '건국 이야기를 읽는 태도를 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], starter: '건국 이야기는 그대로 믿지 않고 ___을 해석하며 읽는다. 또 ___과 견주어 본다.' }, ['상징을 해석한다는 말을 썼다', '견주어 볼 것을 썼다'], [['상징']]),
              RW('기록이 쓰인 시기와 고조선 건국 사이의 거리까지 다루어, 건국 이야기를 읽는 태도를 한 문단으로 쓰세요.', { topic: '『한서』 「지리지」와 『삼국유사』가 쓰인 시기가 고조선 건국보다 훨씬 뒤라는 점을 넣어, 건국 이야기를 읽는 태도를 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '기록의 거리와 읽는 태도' }, ['기록 두 가지와 쓰인 때를 썼다', '건국과 기록 사이의 거리를 다루었다', '상징을 해석한다는 말을 썼다', '그대로 믿기와 통째로 버리기를 모두 피했다'], [['삼국유사'], ['상징']]),
              { conclude: '단군 이야기는 고려 때 일연이 쓴 『삼국유사』에 전해요. 기록이 쓰인 때를 따지고, 기록 그대로와 해석을 나누어 읽으면 건국 이야기가 전하는 뜻을 더 정확히 이해할 수 있어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '고조선을 전하는 기록을 정리해요.', columns: ['기록', '쓴 때·쓴 곳', '전하는 내용'], cells: [['『삼국유사』', '', ''], ['『한서』 「지리지」', '', '']], answer: '고려, 일연 / 단군 건국 이야기 / 중국 한나라 / 8조법 세 조항' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '단군 이야기는 고려 때 ___이 쓴 『삼국유사』에 전한다.', answer: '일연' }] },
      }),

      // ---- 정리 ----
      M('wrap.one', {
        title: '개천절의 뜻 출구 글', method: '개천절의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(누가 무엇을 세웠나)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 홍익인간의 뜻까지 넣어 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"개천절을 \'하늘이 열린 날\'이라고만 말하는 친구에게 무엇을 더 알려 주고 싶나요?" 출구 글을 쓰기 전에 오늘 나눈 상징과 사실을 다시 짚는다. "곰이 사람이 된 날을 기념한다"고 쓰는 학생에게 개천절은 고조선을 세운 것을 기념하는 날이라는 점을 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('개천절이 무엇을 기념하는 날인지 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '개천절은 무엇을 기념하는 날인지 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '개천절의 뜻', starter: '개천절은 ___이 ___을 세운 것을 기념하는 국경일이다.' }, ['사실(누가·무엇을)이 정확하다', '핵심 낱말(단군왕검·고조선)을 넣었다', '내 말로 썼다'], [['고조선'], ['단군']]),
              { prompt: '빈칸 하나를 채워 개천절의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '개천절은 단군왕검이 ___을 세운 것을 기념하는 날이다.' }, target: { selfCheck: ['무엇을 세웠는지 썼다', '내 말로 썼다'], mustInclude: [['고조선']] } },
              { prompt: '틀 없이, 개천절의 뜻과 홍익인간의 뜻을 넣어 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(누가·무엇을)이 정확하다', '핵심 낱말(단군왕검·고조선)을 넣었다', '내 말로 썼다', '홍익인간의 뜻을 바르게 썼다'], mustInclude: [['고조선'], ['홍익인간', '널리']] } }),
            { type: 'choice', prompt: '개천절에 대한 설명으로 가장 알맞은 것은?', options: ['단군왕검이 고조선을 세운 것을 기념하는 국경일', '나라를 되찾은 것을 기념하는 날', '한글을 만든 것을 기념하는 날'], answer: 0, difficulty: 0.15, explain: '개천절은 하늘이 열렸다는 뜻으로, 고조선 건국을 기념하는 국경일이에요.' },
          ],
        },
        worksheet: {
          title: '개천절의 뜻',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '개천절은 ___월 3일, 단군왕검이 ___을 세운 것을 기념하는 국경일이다.', answer: '10, 고조선' },
            { type: 'short', prompt: '개천절에 기념하는 것을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.class', {
        title: '우리 반의 홍익인간 실천 하나', method: '우리 반의 홍익인간 실천 하나', tool: 'emotion', minutes: 7,
        levels: { easy: '실천 카드 3장 가운데 홍익인간의 뜻에 맞는 것을 하나 골라 담고, 할 수 있는 정도를 눈금으로 고른다.', base: '실천 카드 5장(함정 2장) 가운데 맞는 것을 골라 담고, 할 수 있는 정도를 눈금으로 고른다.', challenge: '카드를 고른 뒤 함께 실천할 친구 한 명(이름은 쓰지 않고 "짝"·"모둠"처럼)을 활동지에 정한다.' },
        wrap: {
          teacher: '"\'널리 인간을 이롭게\'를 이번 주 우리 반에서 한 가지로 해 본다면 무엇일까요?" 실천 카드를 고른 뒤 눈금으로 할 수 있는 정도를 고르게 한다. 눈금은 채점하지 않고 스스로 다짐하는 것이라고 밝힌다. "우리 반만 잘되면 된다"는 카드를 고르는 학생에게 "\'널리\'에는 다른 반, 동네 사람도 들어갈까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '홍익인간 실천', weather: false, cards: [
              { id: 'c1', text: '모르는 친구에게 공부한 것 알려 주기' }, { id: 'c2', text: '공용 물건을 쓰고 제자리에 두기' }, { id: 'c3', text: '어려운 친구 곁에 함께 있어 주기' },
              { id: 't1', text: '우리 모둠 자료는 다른 모둠에 숨기기' }, { id: 't2', text: '친한 친구만 도와주기' }] }, prompt: '홍익인간의 뜻에 맞는 실천 카드를 모두 골라 담으세요.', target: { pick: ['c1', 'c2', 'c3'] }, difficulty: 0.2 },
              { prompt: '실천 카드 3장 가운데 홍익인간의 뜻에 맞는 것을 골라 담으세요.', toolOptions: { cards: [{ id: 'c1', text: '모르는 친구에게 공부한 것 알려 주기' }, { id: 'c2', text: '공용 물건을 쓰고 제자리에 두기' }, { id: 't1', text: '우리 모둠 자료는 다른 모둠에 숨기기' }] }, target: { pick: ['c1', 'c2'] } }),
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '고른 실천을 이번 주에 해 볼 수 있을까요?', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '조금 어려워요', 5: '꼭 할 수 있어요' } }, prompt: '고른 실천을 할 수 있는 정도를 눈금으로 골라요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'choice', prompt: '홍익인간의 뜻을 오늘 학교생활에 옮긴 모습으로 가장 알맞은 것은?', options: ['우리 반만 좋은 점수를 받도록 한다', '둘레의 사람을 두루 돕고 함께 이롭게 한다', '힘센 친구의 말을 따른다'], answer: 1, difficulty: 0.15, explain: '홍익인간은 널리 인간을 이롭게 한다는 뜻이에요.' },
          ],
        },
        worksheet: {
          title: '우리 반의 홍익인간',
          items: [
            { type: 'short', prompt: '이번 주에 해 볼 홍익인간 실천 하나와 함께할 사람(짝·모둠 등, 이름 없이)을 써요.' },
            { type: 'check', prompt: '내가 해 볼 실천에 표시해요.', options: ['모르는 친구에게 공부한 것 알려 주기', '공용 물건 제자리에 두기', '어려운 친구 곁에 있어 주기'] },
          ],
        },
      }),
      M('wrap.read', {
        title: '건국 이야기 읽는 태도 점검', method: '건국 이야기 읽는 태도 점검', tool: 'timer', minutes: 7,
        levels: { easy: '읽는 차례 카드 2장(기록 확인 → 상징 해석)을 놓고 점검 칸 두 개에 표시한다.', base: '읽는 차례 카드 3장(누가 언제 썼나 → 기록 그대로 → 상징 해석)을 놓고 점검 칸 세 개에 표시한다.', challenge: '카드 3장에 함정 카드가 섞이고, 다른 나라 건국 이야기에도 이 태도를 쓸 수 있는지 점검 칸 하나가 더 있다.' },
        wrap: {
          teacher: '"건국 이야기를 처음 만나면 무엇부터 따져 볼까요?" 읽는 차례 카드를 놓은 뒤 점검 칸에 표시하게 하고, 가장 자신 없는 칸에 다음에 할 일을 적게 한다. "우리 건국 이야기만 특별하다"는 말에는 "다른 나라의 건국 이야기에도 상징이 담겨 있을까요?"라고 되묻고, 어느 나라 이야기든 같은 태도로 존중하며 읽는다고 짚는다.',
          exitTicket: [
            IT(SELF('건국 이야기를 읽는 차례 카드를 놓고, 점검 칸에 스스로 표시해요.', '건국 이야기 읽는 차례', ['상징이 나타내는 것 해석하기', '누가 언제 쓴 기록인지 보기', '기록에 적힌 그대로 읽기'], ['누가 언제 쓴 기록인지 보기', '기록에 적힌 그대로 읽기', '상징이 나타내는 것 해석하기'], ['기록이 쓰인 때를 따질 수 있다', '기록 그대로와 해석을 나눌 수 있다', '그대로 믿기·통째로 버리기를 모두 피할 수 있다']),
              { prompt: '읽는 차례 카드 2장을 놓고 점검 칸에 표시해요.', toolOptions: { cards: ['상징이 나타내는 것 해석하기', '기록에 적힌 그대로 읽기'] }, target: { order: ['기록에 적힌 그대로 읽기', '상징이 나타내는 것 해석하기'], selfCheck: ['기록 그대로와 해석을 나눌 수 있다', '상징을 해석할 수 있다'] } },
              { prompt: '함정 카드는 남기고 읽는 차례 카드 3장을 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['상징이 나타내는 것 해석하기', '누가 언제 쓴 기록인지 보기', '기록에 적힌 그대로 읽기', '이상한 장면은 지어낸 것이라 버리기'] }, target: { order: ['누가 언제 쓴 기록인지 보기', '기록에 적힌 그대로 읽기', '상징이 나타내는 것 해석하기'], selfCheck: ['기록이 쓰인 때를 따질 수 있다', '기록 그대로와 해석을 나눌 수 있다', '그대로 믿기·통째로 버리기를 모두 피할 수 있다', '다른 나라 건국 이야기에도 같은 태도로 읽을 수 있다'] } }),
            { type: 'choice', prompt: '건국 이야기를 읽는 태도로 가장 알맞은 것은?', options: ['모든 장면을 그대로 일어난 일로 믿는다', '상징이 무엇을 나타내는지 해석하며 기록·유물과 견준다', '지어낸 이야기이니 역사와 상관없다고 본다'], answer: 1, difficulty: 0.2, explain: '건국 이야기에는 그 시대 사람들의 생각과 사회 모습이 상징으로 담겨 있어요.' },
          ],
        },
        worksheet: {
          title: '건국 이야기 읽는 태도',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '건국 이야기는 그대로 믿지도, 통째로 버리지도 않고 ___을 해석하며 읽는다.', answer: '상징' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 한글날 — 훈민정음 창제·반포와 제자 원리 (days.m.hangul) ====
  {
    const M = MK('hangul');
    const HIS6 = [
      { id: 'h1', text: '훈민정음 창제(1443)' }, { id: 'h2', text: '훈민정음 반포(1446)' }, { id: 'h3', text: '가갸날로 처음 기념(1926)' },
      { id: 'h4', text: '한글 맞춤법 통일안 발표(1933)' }, { id: 'h5', text: '『훈민정음』 해례본 발견(1940)' }, { id: 'h6', text: '해례본 세계기록유산 등재(1997)' },
    ];
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(.+\)$/, '') }));
    const CON5 = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ'];
    // 기본 자음 조립 문항: 본뜬 모양 설명 → 그 자음 + 모음. 쉬움은 자음 두 개, 도전은 획을 더한 자음
    const SHAPE = (desc, base, vowel, easyPair, gaek) => IT(
      { prompt: `${desc}을 본뜬 기본 자음에 모음 ${vowel}를 붙여 글자를 만드세요.`, toolOptions: { consonants: CON5, vowels: ['ㅏ', 'ㅗ'], slotHints: true }, target: { syllable: base } },
      { prompt: `${desc}을 본뜬 자음을 두 조각 가운데 골라 모음 ${vowel}를 붙여 글자를 만드세요.`, toolOptions: { consonants: easyPair } },
      { prompt: gaek.prompt, toolOptions: { consonants: gaek.cons }, target: { syllable: gaek.syl } });
    const D1 = { text: '가상의 중학생 모둠이 한글날 발표를 준비한다. 교과서에 "창제 뒤 새 글자에 반대하는 상소가 올라왔다"는 글이 있다. 모둠원 봄이 "반대한 사람은 다 나쁜 사람이야"라고 말한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'reason', text: '반대 상소가 무엇을 근거로 들었는지 먼저 확인하자고 한다', result: '교과서에서 \'중국과의 관계와 학문에 해가 된다\'는 걱정을 근거로 들었다는 것을 찾는다.', impact: [{ who: '모둠', text: '반대 쪽 근거를 정확히 안다', tone: 1 }], end: '반대 쪽 근거부터 확인했어요.',
        next: { text: '봄이 "그럼 세종은 왜 만들었는데?"라고 묻는다.', ask: '창제 쪽의 까닭은 어디서 찾을까?', choices: [
          { id: 'preface', text: '『훈민정음』 서문에 적힌 까닭을 찾아 읽는다', result: '백성이 제 뜻을 펴지 못하는 것을 딱하게 여겨, 쉽게 익혀 날마다 편하게 쓰도록 했다는 구절을 찾는다.', impact: [{ who: '모둠', text: '창제 쪽 근거를 기록에서 찾는다', tone: 1 }], end: '서문에서 까닭을 찾았어요.',
            next: { text: '발표 마지막에 두 의견을 오늘의 눈으로 평가하는 말을 넣기로 했다.', ask: '어떻게 쓸까?', choices: [
              { id: 'weigh', text: '두 쪽의 근거를 나란히 적고, 오늘 한글이 쓰이는 모습을 근거로 평가한다', result: '듣는 친구들이 근거를 견주며 생각한다.', impact: [{ who: '듣는 친구들', text: '스스로 판단할 근거를 얻는다', tone: 1 }] },
              { id: 'mock', text: '반대한 사람들을 놀리는 그림을 넣는다', result: '발표가 웃음거리가 되고 근거는 남지 않는다.', impact: [{ who: '듣는 친구들', text: '근거 대신 놀림만 기억한다', tone: -1 }], why: '사람을 놀리기보다 근거를 견주어 평가해요.' }] } },
          { id: 'guess', text: '그냥 "착해서 만들었다"고 짐작해 쓴다', result: '기록에 없는 짐작이 발표에 들어간다.', impact: [{ who: '모둠', text: '근거 없는 말을 전한다', tone: -1 }], why: '창제의 까닭은 서문 같은 기록에서 찾을 수 있어요.' }] } },
      { id: 'agree', text: '"맞아, 다 나빠"라고 맞장구친다', result: '반대 쪽이 무엇을 걱정했는지 알아보지 않는다.', impact: [{ who: '모둠', text: '한쪽 말만 듣는다', tone: -1 }], why: '의견을 평가하려면 그 쪽의 근거부터 확인해요.', ending: '근거를 확인하지 않았어요.' }] };
    const R1 = [{ id: 'r1', text: '반대 쪽은 중국과의 관계와 학문을 걱정했다' }, { id: 'r2', text: '서문은 백성이 쉽게 익혀 쓰게 하려 했다고 밝힌다' },
      { id: 'r3', text: '반대한 사람은 모두 나쁜 사람이다', why: '사람을 판정하기보다 근거를 견주어요.' }, { id: 'r4', text: '기록이 없어도 짐작이면 충분하다', why: '까닭은 기록에서 찾아야 믿을 수 있어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '오늘 한글이 쓰이는 모습도 평가의 근거가 된다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.days', {
        title: '1443년과 1446년 짝 짓기', method: '1443년과 1446년 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 해와 두 카드(창제·반포)를 읽어 주고 함께 잇는다.', base: '시연 판의 함정 카드(해례본 발견)를 빼고 두 해와 카드를 스스로 먼저 이어 말한다.', challenge: '한글날 10월 9일이 창제가 아니라 반포를 기념하는 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"한글날은 한글을 만든 날일까요, 널리 알린 날일까요?" 짐작을 들은 뒤 시연 단추로 1443년에 창제, 1446년에 반포 카드가 이어지는 모습을 보인다. 한글날 10월 9일은 1446년 훈민정음 반포를 기념하는 국경일이라고 알린다. "만든 날이 한글날이잖아요"라는 말에는 "만든 해와 백성에게 널리 알린 해 사이에 세 해가 있었어요. 그동안 무엇을 했을까요?"라고 되묻는다.',
          student: '1443년과 1446년에 각각 무슨 일이 있었는지 카드를 이어 보고, 한글날이 어느 쪽을 기념하는지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'a', label: '1443년' }, { id: 'b', label: '1446년' }], cards: [{ id: 'm1', text: '훈민정음 창제' }, { id: 'm2', text: '훈민정음 반포' }, { id: 'm3', text: '해례본 발견' }], shuffle: false }, sequence: [{ match: { a: 'm1' } }, { match: { a: 'm1', b: 'm2' } }] },
          art: { draw: 'a paper-cut old book opening with hangul letters floating out, two paper calendar tags labeled with years hanging beside it', banner: '만든 해, 알린 해', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M('intro.why', {
        title: '백성이 겪은 글자의 어려움 투표', method: '백성이 겪은 글자의 어려움 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 칠판에 적어 두고 손을 들어 투표한다.', base: '투표한 뒤 백성이 겪었을 어려움을 스스로 두 가지 더 떠올려 말한다.', challenge: '가장 많은 짐작을 무엇으로 확인할 수 있을지(『훈민정음』 서문 같은 기록) 말한다.' },
        intro: {
          teacher: '"훈민정음이 없던 때, 글을 모르는 백성은 무엇이 가장 힘들었을까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "그때도 다들 한자를 썼잖아요"라는 말에는 "한자를 배울 시간과 형편이 모두에게 있었을까요?"라고 되묻는다. 오늘의 질문은 "훈민정음은 왜 만들었고, 무엇을 바꾸었나?"로 정한다.',
          student: '백성이 겪은 글자의 어려움 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('백성이 겪은 글자의 어려움 짐작(가상의 우리 반 투표)', [['한자가 너무 많고 어려움', 11], ['말과 글이 달라 적기 힘듦', 8], ['억울한 일을 글로 못 알림', 6], ['배울 시간이 없음', 4]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut village of old times where people look puzzled at a notice board covered with dense brush characters', banner: '글자를 모르면 무엇이 힘들까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 투표 결과를 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.preface', {
        title: '서문 첫 구절의 마음 낱말', method: '서문 첫 구절 듣고 낱말 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 구절 카드 두 장만 짚어 주고, 마음을 나타낸 쪽을 함께 고른다.', base: '시연 판의 구절 카드 세 장 가운데 마음을 나타낸 낱말을 스스로 먼저 골라 말한다.', challenge: '서문 첫 부분을 오늘의 말로 바꾸어 짝에게 말한다.' },
        intro: {
          teacher: '"나랏말이 중국과 달라 한자와 서로 통하지 않으므로, 어리석은 백성이 말하고자 하는 바가 있어도 끝내 제 뜻을 펴지 못하는 사람이 많다. 내가 이를 딱하게 여겨 새로 스물여덟 자를 만드니…" 『훈민정음』 서문을 현대어로 읽어 주고 "이 가운데 만든 사람의 마음이 드러난 말은 무엇일까요?"라고 묻는다. 시연 단추로 \'딱하게 여겨\' 카드가 담기는 모습을 보인다. "어리석은 백성이라니 무시하는 말 아니에요?"라는 반응에는 그 시대에는 글을 모르는 백성을 가리킨 말이었다는 점을 짚는다.',
          student: '훈민정음 서문 첫 부분을 듣고, 만든 사람의 마음이 드러난 낱말 카드를 골라요. 왜 그 낱말인지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '마음이 드러난 말', title: '훈민정음 서문', cards: [
            { id: 'w1', text: '나랏말이 중국과 달라', motif: 'house' }, { id: 'w2', text: '이를 딱하게 여겨', motif: 'flower' }, { id: 'w3', text: '새로 스물여덟 자', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['w2'] }] },
          art: { draw: 'a paper-cut open book with the first page of an old script, soft rays of light rising from the page', banner: '서문에 담긴 마음은?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.history', {
        title: '한글의 역사 시간 띠', method: '한글의 역사 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 3장(창제·반포·세계기록유산)에 연도가 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '연도 없는 사건 카드 5장을 차례대로 놓는다.', challenge: '한글을 지킨 사람들의 일(맞춤법 통일안 발표)까지 6장을 연도 없이 놓고, 함정 카드 한 장을 남긴다.' },
        activity: {
          title: '한글의 역사 띠', tool: 'timeline',
          teacher: '"『훈민정음』 해례본은 언제 다시 세상에 나왔을까요?" 카드를 놓을 때마다 앞 사건과 몇 해 차이인지 말하게 한다. 가갸날을 반포보다 앞에 두는 학생에게 "가갸날은 반포를 기념하려고 정한 날일까요, 반포보다 먼저일까요?"라고 되묻는다. 일제 강점기에 국어학자들이 맞춤법을 다듬고 한글을 지킨 노력도 함께 짚는다.',
          task: '한글의 역사 카드를 일어난 차례대로 시간 띠에 놓고, 사건과 그 해를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('한글의 역사를 일어난 차례대로 놓아 보세요.', NOYEAR(pickCards(HIS6, ['h1', 'h2', 'h3', 'h5', 'h6'])), { axis: ['1443년', '오늘날'] }),
              OB('한글의 역사 카드 세 장을 차례대로 놓아 보세요(연도가 적혀 있어요).', pickCards(HIS6, ['h1', 'h2', 'h6']), { axis: ['1443년', '오늘날'] }),
              OB('연도 없는 카드 여섯 장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(HIS6), { axis: ['1443년', '오늘날'] }, [{ id: 'x1', text: '한자를 모두 없앰' }])),
            IT(MB('한글의 역사 사건과 그 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1443년', '훈민정음 창제'], ['1446년', '훈민정음 반포'], ['1997년', '해례본 세계기록유산 등재']], ['가갸날 제정']),
              MB('한글의 역사 사건과 그 해를 이어 보세요.', [['1443년', '훈민정음 창제'], ['1446년', '훈민정음 반포']], [])),
            IT(OB('한글날이 지금의 모습이 되기까지를 차례대로 놓아 보세요.', [{ id: 'd1', text: '가갸날로 처음 기념' }, { id: 'd2', text: '한글날로 이름이 바뀜' }, { id: 'd3', text: '국경일로 정해짐' }], { axis: ['먼저', '나중'] }),
              null, null, { conclude: '훈민정음은 1443년에 만들고 1446년에 반포했으며, 일제 강점기에도 한글을 지키려는 노력이 이어졌어요. 『훈민정음』 해례본은 1997년 세계기록유산이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '한글의 역사를 정리해요.', columns: ['사건', '해'], cells: [['훈민정음 창제', ''], ['훈민정음 반포', ''], ['해례본 발견', ''], ['세계기록유산 등재', '']], answer: '1443 / 1446 / 1940 / 1997' }] },
      }),
      M('activity.shape', {
        title: '기본 자음 조립하며 본뜬 모양 잇기', method: '기본 자음 조립하며 본뜬 모양 잇기', tool: 'hangul', minutes: 16,
        levels: { easy: '문항마다 자음 조각이 두 개뿐이고, 모음을 들면 알맞은 자리 테두리가 깜박인다.', base: '기본 자음 다섯 조각(ㄱ·ㄴ·ㅁ·ㅅ·ㅇ) 가운데 설명한 모양을 본뜬 자음을 골라 글자를 만든다.', challenge: '기본 자음에 획을 더한 자음(ㅋ·ㄷ·ㅂ·ㅈ·ㅎ)으로 글자를 만들고, 합친 글자는 확인 뒤에만 보인다.' },
        activity: {
          title: '기본 자음 조립', tool: 'hangul',
          teacher: '"ㄱ은 어떤 모양을 본떴을까요?" 글자를 만들기 전에 직접 소리를 내며 혀와 입술의 자리를 느껴 보게 한다. ㅁ을 이 모양과 잇는 학생에게 입술을 다물고 "음" 소리를 내 보게 한다. 자음이 아무 모양이나 본떴다고 여기는 학생에게 "소리 낼 때 혀뿌리가 어디에 닿나요?"라고 되묻고, 도전 단계에서는 획을 더하면 소리가 세진다는 가획의 원리를 짚는다.',
          task: '기본 자음이 본뜬 발음 기관의 모양 설명을 듣고, 그 자음 조각으로 글자를 만들어요.',
          levels: { easy: { slotGuide: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            SHAPE('혀뿌리가 목구멍을 막는 모양', '가', 'ㅏ', ['ㄱ', 'ㅅ'], { prompt: 'ㄱ에 획을 더해 소리가 세진 자음에 모음 ㅏ를 붙여 글자를 만드세요.', cons: ['ㄱ', 'ㅋ', 'ㄴ', 'ㄷ'], syl: '카' }),
            SHAPE('혀끝이 윗잇몸에 닿는 모양', '나', 'ㅏ', ['ㄴ', 'ㅁ'], { prompt: 'ㄴ에 획을 하나 더한 자음에 모음 ㅏ를 붙여 글자를 만드세요.', cons: ['ㄴ', 'ㄷ', 'ㄱ', 'ㅋ'], syl: '다' }),
            SHAPE('입 모양', '모', 'ㅗ', ['ㅁ', 'ㅇ'], { prompt: 'ㅁ에 획을 더한 자음에 모음 ㅗ를 붙여 글자를 만드세요.', cons: ['ㅁ', 'ㅂ', 'ㅅ', 'ㅈ'], syl: '보' }),
            SHAPE('이 모양', '소', 'ㅗ', ['ㅅ', 'ㄴ'], { prompt: 'ㅅ에 획을 더한 자음에 모음 ㅗ를 붙여 글자를 만드세요.', cons: ['ㅅ', 'ㅈ', 'ㅁ', 'ㅂ'], syl: '조' }),
            Object.assign(SHAPE('목구멍 모양', '아', 'ㅏ', ['ㅇ', 'ㄱ'], { prompt: 'ㅇ에 획을 더해 만든 목구멍 소리 자음 ㅎ에 모음 ㅏ를 붙여 글자를 만드세요.', cons: ['ㅇ', 'ㅎ', 'ㄱ', 'ㅋ'], syl: '하' }),
              { conclude: '기본 자음 ㄱ·ㄴ·ㅁ·ㅅ·ㅇ은 소리 낼 때의 발음 기관 모양을 본떴고, 여기에 획을 더해 소리가 센 자음을 만들었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기본 자음이 본뜬 모양을 써요.', columns: ['자음', '본뜬 모양'], cells: [['ㄱ', ''], ['ㄴ', ''], ['ㅁ', ''], ['ㅅ', ''], ['ㅇ', '']], answer: '혀뿌리가 목구멍을 막는 모양 / 혀끝이 윗잇몸에 닿는 모양 / 입 모양 / 이 모양 / 목구멍 모양' }] },
      }),
      M('activity.cause', {
        title: '창제 배경과 그 뒤 변화 나누기', method: '창제 배경과 그 뒤 변화 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 4장을 창제 배경·창제 뒤 변화 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 6장을 나누고, 둘째 문항에서 일제 강점기에 한글을 지키려 한 일과 아닌 일을 가른다.', challenge: '셋째 문항에서 창제 뒤 변화 하나를 원인과 이어 활동지에 한 문장으로 설명한다(함정 카드가 섞인다).' },
        activity: {
          title: '배경과 변화 나누기', tool: 'sortboard',
          teacher: '"이 카드는 한글을 만들기 전의 일일까요, 뒤의 일일까요?" 한글 소설을 배경에 두는 학생에게 한글이 생긴 뒤에 나온 문학이라는 점을 짚는다. "한글을 만들어 한자를 없앴다"고 여기는 학생에게 "서문에 한자를 없애자는 말이 있었나요?"라고 되묻는다. 변화마다 무엇이 그 변화를 가능하게 했는지 원인을 말하게 한다.',
          task: '훈민정음 창제의 배경과 그 뒤의 변화 카드를 바구니에 나누고, 한글을 지킨 일도 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 창제 배경과 창제 뒤 변화로 나누세요.', ['창제 배경', '창제 뒤 변화'], [
              { id: 'b1', text: '한자가 많고 배우기 어려움', to: '창제 배경' }, { id: 'b2', text: '우리말과 한자가 서로 통하지 않음', to: '창제 배경' }, { id: 'b3', text: '백성이 제 뜻을 글로 펴지 못함', to: '창제 배경' },
              { id: 'v1', text: '한글로 쓴 편지가 오감', to: '창제 뒤 변화' }, { id: 'v2', text: '한글 소설이 나옴', to: '창제 뒤 변화' }, { id: 'v3', text: '백성도 글로 뜻을 알림', to: '창제 뒤 변화' }]),
              SB('카드 4장을 창제 배경과 창제 뒤 변화로 나누세요.', ['창제 배경', '창제 뒤 변화'], [
                { id: 'b1', text: '한자가 많고 배우기 어려움', to: '창제 배경' }, { id: 'b3', text: '백성이 제 뜻을 글로 펴지 못함', to: '창제 배경' },
                { id: 'v1', text: '한글로 쓴 편지가 오감', to: '창제 뒤 변화' }, { id: 'v2', text: '한글 소설이 나옴', to: '창제 뒤 변화' }])),
            IT(SB('일제 강점기의 일을 한글을 지키려 한 일과 한글을 억누른 일로 나누세요.', ['한글을 지키려 한 일', '한글을 억누른 일'], [
              { id: 'k1', text: '가갸날을 정해 한글을 기념함', to: '한글을 지키려 한 일' }, { id: 'k2', text: '한글 맞춤법 통일안을 펴냄', to: '한글을 지키려 한 일' },
              { id: 'k3', text: '학교에서 조선어 수업을 없앰', to: '한글을 억누른 일' }]),
              null, null),
            IT(SB('원인과 결과를 잇는 짝을 보고, 맞게 이어진 것과 잘못 이어진 것으로 나누세요.', ['맞게 이어짐', '잘못 이어짐'], [
              { id: 'c1', text: '스물여덟 자로 쉬움 → 누구나 빨리 익힘', to: '맞게 이어짐' }, { id: 'c2', text: '백성도 글을 씀 → 뜻을 글로 알림', to: '맞게 이어짐' },
              { id: 'c3', text: '한글 창제 → 한자를 모두 없앰', to: '잘못 이어짐' }, { id: 'c4', text: '반포 → 그날 모든 백성이 글을 앎', to: '잘못 이어짐' }]),
              null, null, { conclude: '어려운 한자와 뜻을 펴지 못하는 백성이 창제의 배경이었고, 한글은 편지·문학·기록으로 백성의 글살이를 바꾸었어요. 일제 강점기에도 한글을 지키려는 노력이 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '창제 뒤 변화 하나를 골라, 무엇이 그 변화를 가능하게 했는지 한 문장으로 써요.' }] },
      }),
      M('activity.opinion', {
        title: '창제를 둘러싼 여러 의견 가리기', method: '창제를 둘러싼 여러 의견 가리기', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길에서 한 번 골라, 반대 의견의 근거를 확인하는 길의 결과를 본다.', base: '갈림길 두 번(반대 쪽 근거·창제 쪽 근거)을 끝까지 가 보고 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번(오늘의 관점에서 평가까지)을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '여러 의견 가리기', tool: 'dilemma',
          teacher: '"반대 상소를 올린 쪽은 무엇을 걱정했을까요?" 교과서 서술대로 반대 쪽이 중국과의 관계와 학문에 해가 된다는 걱정을 근거로 들었다고 알리고, 가상 모둠의 길을 따라가게 한다. "반대한 사람은 다 나빠요"라는 학생에게 "그 사람들이 든 근거를 확인해 보았나요?"라고 되묻는다. 사람을 판정하지 않고 근거를 견주는 것이 오늘의 기준이며, 모둠원은 가상 인물이고 실제 인물의 말을 지어 붙이지 않는다고 밝힌다.',
          task: '한글날 발표를 준비하는 가상 모둠의 길을 골라 따라가며, 창제를 둘러싼 여러 의견의 근거를 확인하고 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '봄의 말을 들은 뒤 먼저 할 일을 한 번 골라 결과를 보세요.', base: '모둠의 갈림길 두 번을 끝까지 가 보고, 근거 카드를 고르세요.', challenge: '모둠의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '창제를 둘러싼 의견', D1, [['reason', 'preface', 'weigh']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            IT({ prompt: '모둠원이 "쉬운 글자는 수준이 낮다"고 말해요. 근거로 답하는 길을 골라 끝까지 가 보세요.', toolOptions: { title: '쉬운 글자는 수준이 낮을까?', scene: { text: '토의 중 모둠원이 "한글은 너무 쉬워서 수준이 낮은 글자"라고 말한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'evidence', text: '"누구나 쉽게 익히게 하려는 것이 만든 목적"이라고 서문을 근거로 든다', result: '모둠원이 창제의 목적을 다시 생각한다.', impact: [{ who: '모둠원', text: '근거를 듣고 생각을 고친다', tone: 1 }], ending: '서문을 근거로 답했어요.' },
              { id: 'mock', text: '모둠원을 무시하며 웃는다', result: '토의가 감정싸움이 된다.', impact: [{ who: '모둠원', text: '마음이 상한다', tone: -1 }], why: '의견에는 사람이 아니라 근거로 답해요.', ending: '감정싸움이 되었어요.' }] }, reasons: [] }, target: { path: [['evidence']] } }),
            IT({ prompt: '발표 자료에 "세계에서 가장 뛰어난 글자"라고 쓰려 해요. 어떻게 할지 골라 끝까지 가 보세요.', toolOptions: { title: '발표 자료의 한 문장', scene: { text: '발표 자료에 "한글은 세계에서 가장 뛰어난 글자"라는 문장을 넣자는 의견이 나왔다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'fact', text: '확인된 사실(해례본 세계기록유산 등재 등)로 바꾸어 쓴다', result: '누구나 확인할 수 있는 문장이 된다.', impact: [{ who: '듣는 친구들', text: '사실을 근거로 듣는다', tone: 1 }], ending: '확인된 사실로 썼어요.' },
              { id: 'keep', text: '멋있으니 그대로 쓴다', result: '근거를 묻는 질문에 답하지 못한다.', impact: [{ who: '모둠', text: '발표를 믿기 어려워진다', tone: -1 }], why: '"가장 뛰어나다" 같은 평가는 근거와 함께 말해요.', ending: '근거 없는 문장이 남았어요.' }] }, reasons: [{ id: 'q1', text: '확인된 사실은 누구나 다시 확인할 수 있다' }, { id: 'q2', text: '자랑스러우면 근거는 필요 없다', why: '자랑스러운 것일수록 근거로 말해야 믿음을 얻어요.' }] }, target: { path: [['fact']], reasons: ['q1'] } },
              null, null, { conclude: '훈민정음 창제를 두고 반대와 찬성의 근거가 모두 기록에 남아 있어요. 사람을 판정하기보다 근거를 견주고, 오늘의 평가도 확인된 사실로 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '창제를 둘러싼 두 의견의 근거를 정리해요.', columns: ['의견', '근거'], cells: [['반대 상소', ''], ['창제 쪽(서문)', '']], answer: '중국과의 관계·학문에 해가 된다는 걱정 / 백성이 쉽게 익혀 날마다 편하게 쓰게 함' }] },
      }),
      M('activity.jaehae', {
        title: '서문·제자해 읽고 창제 정신 설명', method: '서문·제자해 읽고 창제 정신 설명 글', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '서문 구절 두 개를 문장 틀과 낱말 풀이를 보며 풀어 쓰고, 마지막 설명 글은 두 문장 틀로 쓴다.', base: '서문 구절 세 개에 담긴 정신(자주·애민·실용)을 쓰고, 창제 정신 설명 글을 세 문장으로 써서 기준표로 점검한다.', challenge: '마지막 글에서 제자해의 모음 원리(하늘·땅·사람)까지 넣어 한 문단으로 쓴다.' },
        activity: {
          title: '서문·제자해 읽기', tool: 'rubric-writing',
          teacher: '"이 구절에 담긴 마음을 한 낱말로 줄이면 무엇일까요?" 구절을 함께 읽은 뒤, \'나랏말이 중국과 달라\'는 자주, \'딱하게 여겨\'는 백성을 아끼는 애민, \'날마다 쓰는 데 편하게\'는 실용으로 이어 볼 수 있다고 알린다. 서문에 없는 "한자를 없애려고"를 쓰는 학생에게 원문을 다시 읽게 하고 "서문에 그 말이 적혀 있나요?"라고 되묻는다. 제자해는 모음의 세 기본 글자가 하늘(·)·땅(ㅡ)·사람(ㅣ)을 본떴다고 설명한다는 점을 짚는다.',
          task: '『훈민정음』 서문 구절에 담긴 창제 정신을 쓰고, 제자해의 모음 원리를 더해 창제 정신을 설명하는 글을 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('서문 "나랏말이 중국과 달라 한자와 서로 통하지 않으므로"에 담긴 정신을 오늘의 말로 쓰세요.', { topic: '서문 구절 "나랏말이 중국과 달라 한자와 서로 통하지 않으므로"에 담긴 정신을 오늘의 말로 한두 문장 쓰세요.', min: 20, max: 140, s: [1, 2], title: '구절 ① 나랏말' }, ['구절을 오늘의 말로 풀었다', '담긴 정신을 썼다', '서문에 없는 내용을 덧붙이지 않았다'], [['자주', '우리말', '우리 글']]),
              RW('틀을 채워 "나랏말이 중국과 달라" 구절의 정신을 쓰세요.', { topic: '"나랏말이 중국과 달라" 구절의 정신을 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '우리말은 중국말과 달라서 ___ 글자가 필요했다. 이것은 ___ 정신이다.' }, ['구절을 오늘의 말로 풀었다', '서문에 없는 내용을 덧붙이지 않았다'])),
            IT(RW('서문 "이를 딱하게 여겨"와 "날마다 쓰는 데 편하게 하고자"에 담긴 정신을 각각 쓰세요.', { topic: '서문 구절 "이를 딱하게 여겨"와 "사람마다 쉽게 익혀 날마다 쓰는 데 편하게 하고자"에 담긴 정신을 각각 한 문장씩 쓰세요.', min: 25, max: 160, s: [2, 3], title: '구절 ②③ 애민·실용' }, ['두 구절을 모두 다루었다', '구절마다 담긴 정신을 썼다', '서문에 없는 내용을 덧붙이지 않았다'], [['애민', '백성', '아끼'], ['실용', '편하', '쉽게']]),
              RW('틀을 채워 두 구절의 정신을 쓰세요(애민=백성을 아낌, 실용=쓰기에 편함).', { topic: '"딱하게 여겨"와 "날마다 쓰는 데 편하게" 구절의 정신을 쓰세요.', min: 15, max: 120, s: [1, 3], starter: '"딱하게 여겨"에는 ___ 마음이, "편하게 하고자"에는 ___ 정신이 담겨 있다.' }, ['두 구절을 모두 다루었다', '서문에 없는 내용을 덧붙이지 않았다'])),
            IT(RW('앞에서 쓴 것을 바탕으로 훈민정음의 창제 정신을 세 문장으로 설명하세요.', { topic: '서문 구절을 근거로 훈민정음의 창제 정신(자주·애민·실용)을 세 문장으로 설명하세요.', min: 50, max: 240, s: [3, 4], title: '창제 정신 설명 글' }, ['세 정신을 모두 썼다', '서문 구절을 근거로 들었다', '서문에 없는 내용을 덧붙이지 않았다'], [['자주'], ['애민', '백성'], ['실용']]),
              RW('틀을 채워 창제 정신을 두 문장으로 설명하세요.', { topic: '훈민정음의 창제 정신을 두 문장으로 설명하세요.', min: 30, max: 180, s: [2, 3], starter: '훈민정음은 우리말에 맞는 ___ 글자이다. 백성을 ___ 마음으로, 누구나 쉽게 쓰도록 만들었다.' }, ['정신을 둘 이상 썼다', '서문에 없는 내용을 덧붙이지 않았다']),
              RW('창제 정신에 제자해의 모음 원리(하늘·땅·사람)를 더해 한 문단으로 설명하세요.', { topic: '서문의 창제 정신(자주·애민·실용)과 제자해의 모음 원리(·는 하늘, ㅡ는 땅, ㅣ는 사람을 본뜸, 이를 합쳐 다른 모음을 만듦)를 이어 한 문단으로 설명하세요.', min: 90, max: 400, s: [4, 6], title: '정신과 모음 원리' }, ['세 정신을 모두 썼다', '모음 기본자 셋이 본뜬 것을 썼다', '기본자를 합쳐 모음을 늘린 원리를 썼다', '원리와 정신(쉽게 익힘)을 이었다'], [['하늘'], ['땅'], ['사람']]),
              { conclude: '서문은 자주·애민·실용의 정신을 밝히고, 제자해는 적은 기본자에 원리를 더해 글자를 늘렸다고 설명해요. 그래서 한글은 누구나 쉽게 익힐 수 있어요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '서문 구절에 담긴 정신을 정리해요.', columns: ['구절(현대어)', '정신'], cells: [['나랏말이 중국과 달라', ''], ['이를 딱하게 여겨', ''], ['날마다 쓰는 데 편하게', '']], answer: '자주 / 애민 / 실용' },
          { type: 'choice', prompt: '모음 기본자 ㅣ가 본뜬 것은?', options: ['둥근 하늘', '평평한 땅', '서 있는 사람'], answer: '서 있는 사람' },
        ] },
      }),

      // ---- 정리 ----
      M('wrap.make', {
        title: '글자 하나 조립 확인', method: '글자 하나 조립 확인', tool: 'hangul', minutes: 7,
        levels: { easy: '받침 없는 글자(하)를 자음·모음 조각으로 만든다.', base: '받침 있는 글자(한)를 자음·모음·받침 조각으로 만든다.', challenge: '\'한\'에 이어 \'한글\'의 둘째 글자(글)를 받침까지 만들어 두 글자 낱말을 완성한다.' },
        wrap: {
          teacher: '"오늘 배운 원리로 \'한글\'의 글자를 직접 만들어 볼까요?" 조각을 놓기 전에 소리를 천천히 내며 첫소리·가운데 소리·끝소리를 나누어 듣게 한다. 모음 ㅡ를 자음 옆에 놓으려는 학생에게 "길게 누운 모음은 자음의 어디에 붙나요?"라고 되묻는다. 한글날이 창제가 아니라 반포를 기념한다는 점도 출구 질문에서 다시 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'hangul', options: { consonants: ['ㅎ', 'ㄱ', 'ㄴ'], vowels: ['ㅏ', 'ㅡ'], batchim: ['ㄴ', 'ㄹ'], slotHints: true }, prompt: '\'한글\'의 첫 글자를 받침까지 만들어 보세요.', target: { syllable: '한' }, difficulty: 0.25 },
              { prompt: '\'하늘\'의 첫 글자를 만들어 보세요(받침 없음).', toolOptions: { batchim: [] }, target: { syllable: '하' } },
              { prompt: '\'한\'에 이어 \'한글\'이 되도록 둘째 글자를 받침까지 만들어 보세요.', toolOptions: { wordSoFar: '한' }, target: { syllable: '글' } }),
            { type: 'choice', prompt: '한글날 10월 9일이 기념하는 것은?', options: ['1443년 훈민정음 창제', '1446년 훈민정음 반포', '1940년 해례본 발견'], answer: 1, difficulty: 0.15, explain: '한글날은 1446년 훈민정음 반포를 기념하는 국경일이에요.' },
            { type: 'choice', prompt: '기본 자음 ㅁ이 본뜬 것은?', options: ['입 모양', '이 모양', '목구멍 모양'], answer: 0, difficulty: 0.15, explain: 'ㅁ은 입 모양을, ㅅ은 이 모양을, ㅇ은 목구멍 모양을 본떴어요.' },
          ],
        },
        worksheet: {
          title: '글자 만들기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '훈민정음은 ___년에 만들고 ___년에 반포했다.', answer: '1443, 1446' },
            { type: 'short', prompt: '내 이름이 아닌 좋아하는 낱말 하나를 골라, 첫 글자가 어떤 자음·모음(·받침)으로 이루어졌는지 써요.' },
          ],
        },
      }),
      M('wrap.today', {
        title: '오늘 한글 지키는 실천 고르기', method: '오늘 한글 지키는 실천 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '실천 카드 3장 가운데 한글을 아끼는 실천을 고른다.', base: '실천 카드 5장(함정 2장) 가운데 알맞은 실천을 고르고, 학급 신문 장면에서 선택한다.', challenge: '고른 실천 하나의 까닭을 활동지에 서문의 정신과 이어 한 문장으로 쓴다(교사 진행).' },
        wrap: {
          teacher: '"오늘 우리가 한글을 아끼는 방법은 무엇일까요?" 실천 카드를 고른 뒤 하나를 골라 그 까닭을 말하게 한다. "외국어가 더 멋있잖아요"라는 학생에게 외국어를 쓰지 말자는 것이 아니라 "모두가 뜻을 알 수 있는 말을 고르는 것이 서문의 \'사람마다 쉽게\'와 어떻게 이어질까요?"라고 되묻는다. 학생의 언어 습관을 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '한글을 아끼는 실천', cards: [
              { id: 'k1', text: '뜻이 통하는 우리말로 쓰기' }, { id: 'k2', text: '글 올리기 전 맞춤법 보기' }, { id: 'k3', text: '줄임말 욕 쓰지 않기' }, { id: 'k4', text: '틀린 맞춤법 그냥 두기' }, { id: 'k5', text: '뜻 모를 말로만 쓰기' }] },
              prompt: '한글을 아끼는 실천 카드만 골라 담아요.', target: { pick: ['k1', 'k2', 'k3'] }, difficulty: 0.15 },
              { prompt: '실천 카드 3장 가운데 한글을 아끼는 실천만 골라 담아요.', toolOptions: { cards: [{ id: 'k1', text: '뜻이 통하는 우리말로 쓰기' }, { id: 'k2', text: '글 올리기 전 맞춤법 보기' }, { id: 'k4', text: '틀린 맞춤법 그냥 두기' }] }, target: { pick: ['k1', 'k2'] } }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 신문 제목 후보가 뜻을 모르는 친구도 있는 외국어로만 되어 있다.', who: '나', feeling: '걱정', choices: [
              { id: 'a', text: '뜻이 잘 통하는 우리말 제목도 함께 찾아보자고 한다', result: '누구나 제목의 뜻을 알게 된다.' },
              { id: 'b', text: '멋있으니 그대로 정한다', result: '몇몇 친구는 제목의 뜻을 모른다.', why: '모두가 뜻을 알 수 있는 말이 좋아요.' }] }, prompt: '서문의 \'사람마다 쉽게\' 정신에 가까운 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
            { type: 'choice', prompt: '한글을 아끼는 태도로 가장 알맞은 것은?', options: ['외국어는 절대 쓰지 않는다', '모두가 뜻을 알 수 있는 말을 고르고 맞춤법을 지킨다', '맞춤법은 몰라도 된다'], answer: 1, difficulty: 0.15, explain: '모두가 쉽게 뜻을 알 수 있게 쓰는 것이 창제 정신과 이어져요.' },
          ],
        },
        worksheet: {
          title: '오늘의 한글 실천',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 실천에 표시해요.', options: ['뜻이 통하는 우리말로 쓰기', '글 올리기 전 맞춤법 보기', '줄임말 욕 쓰지 않기'] },
            { type: 'short', prompt: '고른 실천 하나가 서문의 정신과 어떻게 이어지는지 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.spirit', {
        title: '창제 정신 이해 스스로 점검', method: '창제 정신 이해 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '정신 카드 3장(자주·애민·실용)을 서문 구절 차례대로 놓고 점검 칸 두 개에 표시한다.', base: '정신 카드 3장을 구절 차례로 놓고, 점검 칸 세 개(정신마다 까닭을 말할 수 있다 등)에 표시한다.', challenge: '점검 칸에 \'오늘 생활 장면에 창제 정신을 이어 말할 수 있다\'가 더해진다.' },
        wrap: {
          teacher: '"서문의 구절 차례대로 자주·애민·실용을 놓을 수 있나요?" 카드를 놓은 뒤 점검 칸에 스스로 표시하게 하고, 가장 자신 없는 칸 하나를 활동지에 다음에 할 일로 적게 한다. 애민과 실용을 바꾸는 학생에게 "\'딱하게 여겨\'는 마음일까요, 쓰임일까요?"라고 되묻는다. 점검표는 점수가 아니라 스스로 돌아보는 표다.',
          exitTicket: [
            IT(SELF('서문 구절 차례(나랏말 → 딱하게 여겨 → 편하게)대로 정신 카드를 놓고 점검 칸에 표시해요.', '창제 정신 점검', ['실용', '자주', '애민'], ['자주', '애민', '실용'], ['세 정신의 뜻을 말할 수 있다', '정신마다 서문 구절을 근거로 들 수 있다', '서문에 없는 내용을 구별할 수 있다']),
              { prompt: '정신 카드를 서문 구절 차례대로 놓고 점검 칸 두 개에 표시해요.', target: { order: ['자주', '애민', '실용'], selfCheck: ['세 정신의 뜻을 말할 수 있다', '서문 구절과 정신을 이을 수 있다'] } },
              { prompt: '정신 카드를 구절 차례대로 놓고, 오늘 생활 장면까지 떠올려 점검 칸에 표시해요.', target: { order: ['자주', '애민', '실용'], selfCheck: ['세 정신의 뜻을 말할 수 있다', '정신마다 서문 구절을 근거로 들 수 있다', '서문에 없는 내용을 구별할 수 있다', '오늘 생활 장면에 창제 정신을 이어 말할 수 있다'] } }),
            { type: 'choice', prompt: '"사람마다 쉽게 익혀 날마다 쓰는 데 편하게"에 담긴 정신은?', options: ['자주', '실용', '정복'], answer: 1, difficulty: 0.15, explain: '날마다 쓰기에 편하게 하려는 것은 실용 정신이에요.' },
          ],
        },
        worksheet: {
          title: '창제 정신 점검',
          items: [
            { type: 'table', prompt: '세 정신과 서문 구절을 이어 써요.', columns: ['정신', '서문 구절'], cells: [['자주', ''], ['애민', ''], ['실용', '']], answer: '나랏말이 중국과 달라 / 이를 딱하게 여겨 / 날마다 쓰는 데 편하게' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 학생독립운동기념일 — 1929년 광주 학생들 (days.m.students) ====
  {
    const M = MK('students');
    const FLOW5 = [
      { id: 'f1', text: '나주역 한일 학생 충돌' }, { id: 'f2', text: '한국 학생만 처벌' }, { id: 'f3', text: '11월 3일 광주 학생 시위' },
      { id: 'f4', text: '신간회 조사단 파견' }, { id: 'f5', text: '전국 학교 동맹 휴학' },
    ];
    // 학생 운동이 퍼진 곳 칸 지도(실제 거리·모양이 아닌 단순 칸 지도)
    const SMAP = (more) => Object.assign({ grid: [6, 8], title: '1929~1930년 학생 운동이 퍼진 곳(칸 지도 — 실제 거리 아님)', places: [
      { name: '평양', icon: 'city', at: [1, 2] }, { name: '서울', icon: 'capital', at: [2, 4] }, { name: '대구', icon: 'city', at: [4, 6] },
      { name: '광주', icon: 'school', at: [1, 6] }, { name: '나주역', icon: 'station', at: [1, 7] }, { name: '부산', icon: 'port', at: [5, 7] },
    ] }, more);
    const CAUSE = [
      { id: 'c1', text: '식민지 차별 교육', to: '원인' }, { id: 'c2', text: '민족 차별에 쌓인 분노', to: '원인' },
      { id: 'c3', text: '한국 학생만 처벌한 편파 처리', to: '원인' }, { id: 'r1', text: '전국 학교로 번진 동맹 휴학', to: '결과' },
      { id: 'r2', text: '신간회가 진상을 알리려 함', to: '결과' }, { id: 'r3', text: '3·1운동 뒤 가장 큰 민족 운동이 됨', to: '결과' },
      { id: 't1', text: '광주 한 학교에서만 끝남' },
    ];
    const DEMAND = [['차별 없는 교육', 82], ['우리말·역사 배우기', 94], ['학생 자치(학생회)', 71], ['의견을 낼 자유', 58]];
    const DCHART = (more) => Object.assign({ type: 'bar', mode: 'read', title: '1929년 학생들이 바란 것, 오늘 우리 학교는?(가상 설문)', unit: '%', xLabel: '바란 것', yLabel: '이루어졌다고 답한 비율', max: 100, data: DEMAND }, more);
    const VOICE = ['자료를 만든 쪽이 누구인지 확인했다', '빠진 목소리(누가 말하지 못했나)를 찾았다', '다른 쪽 기록과 견주었다', '없는 내용을 상상으로 채우지 않았다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.train', {
        title: '1929년 통학 열차 장면 짐작', method: '통학 열차 장면 듣고 무슨 일인지 짐작', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 두 개(다툼이 일어났다·소풍을 갔다)만 읽어 주고 함께 고른다.', base: '시연 판의 보기 세 개 가운데 장면에서 일어난 일을 고르는 모습을 보고 까닭을 말한다.', challenge: '그렇게 짐작한 근거 낱말(역·두 학교 학생·다툼)을 한 가지 짚는다.' },
        intro: {
          teacher: '"1929년 가을, 전라남도 나주역. 통학 열차에서 내린 한국 학생들과 일본 학생들 사이에 무슨 일이 일어났을까요?" 장면 카드를 보이고 짐작을 들은 뒤, 시연 단추로 \'두 나라 학생 사이 충돌\' 카드가 담기는 모습을 보인다. 이 충돌을 일제 경찰이 한국 학생만 처벌하는 편파적으로 처리하자 분노가 커졌고, 11월 3일 광주 학생들의 시위가 전국으로 번졌다고 알린다. "광주에서만 일어난 일"이라는 말에는 "이 운동은 어디까지 퍼졌을까요?"라고 되묻는다.',
          student: '1929년 통학 열차 장면을 보고 무슨 일이 일어났는지 짐작해요. 장면의 어느 부분을 보고 그렇게 생각했는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이 장면에서 일어난 일', title: '1929년 가을, 나주역', cards: [
            { id: 'p1', text: '두 나라 학생 사이 충돌', motif: 'cloud' }, { id: 'p2', text: '기차가 고장 나 멈춤', motif: 'house' },
            { id: 'p3', text: '함께 소풍을 떠남', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['p1'] }] },
          art: { draw: 'a paper-cut small train station in autumn with students in old school uniforms stepping off a train, falling leaves', banner: '1929년 가을, 나주역에서', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '충돌 장면은 다툼의 내용을 자세히 묘사하지 않는다. 특정 나라 학생 전체를 탓하는 말이 나오면 차별 제도와 사람을 나누어 말하게 한다.',
      }),
      M('intro.spreadq', {
        title: '"왜 전국으로 번졌을까" 짐작 투표', method: '학생 운동이 전국으로 번진 까닭 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 읽어 주고 손을 들어 투표한다.', base: '투표한 뒤 보기마다 오래 쌓인 바탕인지 직접 계기인지 스스로 갈라 말한다.', challenge: '가장 많이 나온 짐작을 무엇으로 확인할 수 있을지(교과서·기념관 자료 등) 말한다.' },
        intro: {
          teacher: '"기차역의 다툼 하나가 왜 전국 학생 운동으로 번졌을까요? 보기 넷 가운데 하나에 손을 들어 보세요." 손을 든 수를 말한 뒤 시연 단추로 가상의 우리 반 투표 그림그래프를 읽는다. "다툼 하나가 원인"이라는 말에는 "같은 다툼이라도 처벌이 공정했다면 어땠을까요?"라고 되묻는다. 오늘의 질문은 "학생 운동이 번진 바탕과 계기는 무엇이고, 무엇을 남겼나?"로 정한다.',
          student: '학생 운동이 전국으로 번진 까닭 짐작 넷 가운데 하나에 투표하고, 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('학생 운동이 전국으로 번진 까닭 짐작(가상의 우리 반 투표)', [['편파적인 처벌', 10], ['차별 교육에 쌓인 분노', 9], ['다른 학교 학생들의 호응', 6], ['신간회의 지원', 3]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut map with sparks spreading from one school building to many, small paper figures lined up as a picture graph', banner: '왜 전국으로 번졌을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 투표 결과를 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.silent', {
        title: '신문이 쓰지 못한 낱말', method: '신문이 쓰지 못한 것 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '빈칸 하나에 낱말 두 개 가운데 알맞은 것을 교사와 함께 고른다.', base: '시연 판에서 빈칸 두 곳에 낱말이 들어가기 전에, 빠진 낱말을 먼저 짐작해 말한다(함정 카드 1장).', challenge: '그 낱말이 왜 빠졌을지(보도 통제) 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상의 1929년 신문 기사예요. \'광주에서 학생들이 ___을 외치며 거리에 나섰다. 이 일은 ___ 학교로 번졌다. (이하 삭제)\' 빈칸에는 어떤 말이 들어갔을까요?" 짐작을 들은 뒤 시연 단추로 낱말 카드가 빈칸에 들어가는 모습을 보인다. 일제가 보도를 통제해 신문이 사건을 제대로 전하지 못했다고 알린다. "신문에 짧게 나왔으면 작은 일"이라는 말에는 "왜 짧게 나왔을까요?"라고 되묻는다. 기사는 수업용으로 지어낸 가상 글이라고 밝힌다.',
          student: '가상의 1929년 신문 기사에서 빠진 낱말을 짐작해요. 그 낱말이 왜 빠졌을지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '광주에서 학생들이 ___을 외쳤다' }, { id: 'f2', label: '이 일은 ___ 학교로 번졌다' }], cards: [{ id: 'w1', text: '민족 차별 반대' }, { id: 'w2', text: '전국 여러' }, { id: 'y1', text: '운동회 응원' }], shuffle: false }, sequence: [{ fill: { f1: 'w1' } }, { fill: { f1: 'w1', f2: 'w2' } }] },
          art: { draw: 'a paper-cut old newspaper page with several lines blacked out and a student\'s handwritten leaflet beside it', banner: '신문이 쓰지 못한 말은?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.flow', {
        title: '광주학생독립운동 흐름 시간 띠', method: '광주학생독립운동 흐름 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 3장(충돌·광주 시위·전국 동맹 휴학)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 5장을 차례대로 놓는다.', challenge: '5장에 함정 카드가 섞이고, 셋째 문항에서 11월 3일이 기념일이 되기까지를 차례대로 놓는다.' },
        activity: {
          title: '학생 운동 흐름 띠', tool: 'timeline',
          teacher: '"기차역에서 일어난 다툼이 왜 큰 운동으로 번졌을까요?" 카드를 놓을 때마다 근거를 말하게 한다. 전국 확산을 광주 시위보다 앞에 두는 학생에게 "불씨가 먼저일까요, 번진 불이 먼저일까요?"라고 되묻는다. 신간회 조사단을 원인으로 여기는 학생에게는 운동이 일어난 뒤 진상을 알리려 한 일이라는 점을 짚는다.',
          task: '광주학생독립운동의 사건 카드를 일어난 차례대로 시간 띠에 놓고, 11월 3일이 기념일이 되기까지를 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('광주학생독립운동의 흐름을 차례대로 놓아 보세요.', FLOW5, { axis: ['1929년 가을', '1930년'] }),
              OB('사건 카드 3장을 차례대로 놓아 보세요.', pickCards(FLOW5, ['f1', 'f3', 'f5']), { axis: ['1929년 가을', '1930년'] }),
              OB('사건 카드 5장을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', FLOW5, { axis: ['1929년 가을', '1930년'] }, [{ id: 'x1', text: '대한민국 임시정부 수립' }])),
            IT(MB('일과 그 때를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1929년', '광주학생독립운동'], ['11월 3일', '학생독립운동기념일'], ['1919년', '3·1 만세 운동']], ['광복']),
              MB('일과 그 때를 이어 보세요.', [['1929년', '광주학생독립운동'], ['11월 3일', '학생독립운동기념일']], [])),
            IT(OB('11월 3일이 기념일이 되기까지를 차례대로 놓아 보세요.', [{ id: 'm1', text: '1929년 11월 3일 광주 학생 시위' }, { id: 'm2', text: '학생의 날로 기념' }, { id: 'm3', text: '학생독립운동기념일로 이름을 바꿈' }], { axis: ['먼저', '나중'] }),
              OB('11월 3일이 기념일이 되기까지를 차례대로 놓아 보세요(두 장).', [{ id: 'm1', text: '1929년 11월 3일 광주 학생 시위' }, { id: 'm3', text: '학생독립운동기념일로 이름을 바꿈' }], { axis: ['먼저', '나중'] }),
              null, { conclude: '1929년 나주역 충돌과 편파 처벌에서 시작된 광주 학생들의 시위는 전국 학교로 번졌고, 11월 3일은 학생독립운동기념일로 기억돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광주학생독립운동을 정리해요.', columns: ['물음', '답'], cells: [['언제', ''], ['어디에서 시작', ''], ['학생들이 반대한 것', '']], answer: '1929년 / 광주(나주역 충돌에서 비롯) / 식민지 차별 교육과 민족 차별' }] },
      }),
      M('activity.map', {
        title: '학생 운동이 퍼진 곳 칸 지도', method: '퍼진 곳 지도에 핀 꽂기', tool: 'map', minutes: 16,
        levels: { easy: '설명마다 지역 이름이 들어 있어 이름을 보고 핀을 꽂는다(문항 4개).', base: '지역 이름 대신 일어난 일만 듣고 알맞은 곳에 핀을 꽂는다(문항 4개).', challenge: '넷째 문항에서 핀을 꽂은 뒤 운동이 퍼진 방향을 바르게 말한 보기를 함께 고른다.' },
        activity: {
          title: '퍼진 곳 지도', tool: 'map',
          teacher: '"이 일은 어디에서 일어났을까요?" 설명을 읽어 주고 핀을 꽂을 때마다 그곳 학생들이 무엇을 했는지 말하게 한다. "광주에서만 일어난 일"이라는 학생에게 "서울과 북쪽 도시의 학생들은 무엇을 했을까요?"라고 되묻는다. 칸 지도는 실제 거리와 모양이 아니라 자리만 나타낸다는 점을 처음에 밝힌다.',
          task: '1929~1930년 학생 운동 설명을 듣고 칸 지도에서 그 일이 일어난 곳에 핀을 꽂아요.',
          levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PIN('1929년 가을, 통학 열차에서 내린 두 나라 학생 사이에 충돌이 일어난 기차역에 핀을 꽂으세요.', SMAP(), { place: '나주역' }),
              PIN('학생 충돌이 일어난 나주역에 핀을 꽂으세요.', SMAP(), { place: '나주역' })),
            IT(PIN('11월 3일, 여러 학교 학생들이 민족 차별에 맞서 시위에 나선 도시에 핀을 꽂으세요.', SMAP(), { place: '광주' }),
              PIN('11월 3일 학생 시위가 열린 광주에 핀을 꽂으세요.', SMAP(), { place: '광주' })),
            IT(PIN('광주 소식을 듣고 여러 학교 학생들이 호응해 시위와 동맹 휴학에 나선 수도에 핀을 꽂으세요.', SMAP(), { place: '서울' }),
              PIN('학생들이 호응해 나선 서울에 핀을 꽂으세요.', SMAP(), { place: '서울' })),
            IT(PIN('운동은 북쪽 지역 학교까지 번졌어요. 서울 북서쪽 큰 도시에 핀을 꽂으세요.', SMAP(), { place: '평양' }),
              PIN('북쪽 지역까지 번진 운동 — 평양에 핀을 꽂으세요.', SMAP(), { place: '평양' }),
              PIN('북쪽 지역까지 번진 운동의 도시에 핀을 꽂고, 퍼진 방향을 바르게 말한 보기를 고르세요.', SMAP({ ask: { q: '학생 운동이 퍼진 모습으로 알맞은 것은?', choices: ['광주에서 시작해 서울과 전국 학교로 번졌다', '광주 한 학교에서만 열렸다', '서울에서 시작해 광주로 내려왔다'] } }), { place: '평양', pick: 0 }),
              { conclude: '광주학생독립운동은 광주에서 시작해 서울과 전국의 학교로 번진, 3·1운동 뒤 가장 큰 민족 운동이었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 핀을 꽂은 곳의 차례를 따라, 운동이 퍼진 방향을 한 문장으로 써요.' }] },
      }),
      M('activity.cause', {
        title: '번진 까닭과 결과 나누기', method: '번진 까닭과 결과 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 4장(원인 2·결과 2)을 원인·결과 바구니에 넣고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 7장(함정 1장)을 원인·결과로 나누고, 원인을 다시 바탕·계기로 나눈다.', challenge: '셋째 문항에서 원인과 결과를 잇는 사슬 카드를 가르고, 활동지에 사슬을 한 문장으로 설명한다.' },
        activity: {
          title: '번진 까닭과 결과', tool: 'sortboard',
          teacher: '"이 카드는 바탕일까요, 계기일까요, 결과일까요?" 신간회의 움직임을 원인으로 두는 학생에게 운동이 일어난 뒤 진상을 알리려 한 일이라는 점을 짚는다. 다툼 하나를 유일한 원인으로 보는 학생에게 "불씨와 땔감은 어떻게 다를까요?"라고 되묻는다. 특정 나라 사람 전체를 탓하는 말이 나오면 차별한 제도와 사람을 나누어 말하게 한다.',
          task: '광주학생독립운동이 번진 까닭과 결과 카드를 바구니에 나누고, 원인을 바탕과 계기로 다시 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 원인과 결과로 나누세요. 사실이 아닌 카드는 남겨요.', ['원인', '결과'], CAUSE),
              SB('카드 4장을 원인과 결과로 나누세요.', ['원인', '결과'], pickCards(CAUSE, ['c1', 'c3', 'r1', 'r2']))),
            IT(SB('원인을 오래 쌓인 바탕과 직접 계기로 나누세요.', ['바탕', '계기'], [
              { id: 'b1', text: '민족 차별 교육', to: '바탕' }, { id: 'b2', text: '일본어 중심 수업', to: '바탕' },
              { id: 'k1', text: '나주역 학생 충돌', to: '계기' }, { id: 'k2', text: '한국 학생만 처벌', to: '계기' }]),
              SB('원인 4장을 바탕과 계기로 나누세요.', ['바탕', '계기'], [
                { id: 'b1', text: '민족 차별 교육', to: '바탕' }, { id: 'b2', text: '일본어 중심 수업', to: '바탕' },
                { id: 'k1', text: '나주역 학생 충돌', to: '계기' }, { id: 'k2', text: '한국 학생만 처벌', to: '계기' }])),
            IT(SB('원인과 결과를 잇는 사슬을 맞는 것과 틀린 것으로 나누세요.', ['맞는 사슬', '틀린 사슬'], [
              { id: 's1', text: '편파 처벌 → 학생들의 분노', to: '맞는 사슬' }, { id: 's2', text: '광주 시위 → 다른 지역 학생 호응', to: '맞는 사슬' },
              { id: 's3', text: '신간회 지원 → 진상이 널리 알려짐', to: '맞는 사슬' }, { id: 's4', text: '광주 시위 → 운동이 바로 멈춤', to: '틀린 사슬' },
              { id: 's5', text: '차별 교육 → 학생들이 만족함', to: '틀린 사슬' }]),
              null, null, { conclude: '나주역 충돌은 계기였고, 식민지 차별 교육에 대한 분노가 바탕이었어요. 운동은 전국 학교로 번져 3·1운동 뒤 가장 큰 민족 운동이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광주학생독립운동의 사슬을 정리해요.', columns: ['바탕', '계기', '결과'], cells: [['', '', '']], answer: '식민지 차별 교육 / 나주역 충돌과 편파 처벌 / 전국 학생 운동·신간회 지원' }] },
      }),
      M('activity.demand', {
        title: '학생들의 요구와 오늘 학교 견주기', method: '학생들의 요구와 오늘 학교 견주기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 끝에 값이 보이는 그래프에서 가장 큰 막대를 고른다.', base: '값이 보이지 않는 그래프에서 막대를 읽어 가장 큰 항목·값·가장 작은 항목을 답한다.', challenge: '셋째 문항에서 가장 작은 항목을 고른 뒤, 넷째 문항에서 이 가상 설문으로 알 수 없는 것을 고른다.' },
        activity: {
          title: '요구와 오늘의 학교', tool: 'chart',
          teacher: '"1929년 학생들이 바란 것은 오늘 우리 학교에서 얼마나 이루어졌을까요?" 그래프는 수업용으로 지어낸 가상 설문이라는 점을 먼저 밝힌다. 막대를 읽을 때마다 1929년에는 그것이 왜 어려웠는지 함께 말한다. "옛날 일이라 오늘과 상관없다"는 학생에게 "가장 낮은 막대는 오늘 우리에게 무엇을 말해 줄까요?"라고 되묻는다.',
          task: '1929년 학생들이 바란 것과 오늘 우리 학교의 모습을 견준 가상 설문 그래프를 읽고, 아직 남은 과제를 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '오늘 우리 학교에서 가장 많이 이루어졌다고 답한 항목을 고르세요.', toolOptions: DCHART({ question: '가장 큰 막대는?', choices: DEMAND.map((d) => d[0]) }), target: { pick: 1 } }),
            IT({ prompt: '\'학생 자치(학생회)\'가 이루어졌다고 답한 비율을 그래프에서 읽어 쓰세요.', toolOptions: DCHART({ question: '학생 자치는 몇 %인가요?' }), target: { value: 71 } }),
            IT({ prompt: '가장 적게 이루어졌다고 답한, 아직 남은 과제에 가까운 항목을 고르세요.', toolOptions: DCHART({ question: '가장 작은 막대는?', choices: DEMAND.map((d) => d[0]) }), target: { pick: 3 } }),
            IT({ prompt: '이 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: DCHART({ question: '이 가상 설문으로 알 수 없는 것은?', choices: ['항목마다 답한 비율의 차례', '1929년 학생들이 실제로 쓴 요구문 전체', '가장 낮게 답한 항목'] }), target: { pick: 1 } },
              null, null, { conclude: '1929년 학생들은 차별 없는 교육과 학생 자치 같은 것을 바랐어요. 설문 그래프는 오늘의 생각을 보여 주지만, 그때의 기록을 대신하지는 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 낮은 막대의 항목을 골라, 우리 학교에서 그것을 채우려면 학생이 할 수 있는 일을 한 문장으로 써요.' }] },
      }),
      M('activity.record', {
        title: '기록의 침묵 읽고 글쓰기', method: '기록의 침묵 읽고 글쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '기록 세 개(학생 격문·일제 판결문·당시 신문)를 만든 쪽을 문장 틀로 가려 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '기록마다 만든 쪽과 알 수 있는 것을 쓰고, 보도 통제 아래 기록이 말하지 못한 것을 세 문장 글로 쓴 뒤 기준표로 점검한다.', challenge: '마지막 글에서 오늘 내가 뉴스·자료를 읽을 때 쓸 방법까지 넣어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '기록의 침묵 쓰기', tool: 'rubric-writing',
          teacher: '"신문이 마음대로 보도할 수 없었다면, 그 시대의 신문을 그대로 믿어도 될까요?" 문항마다 기록을 만든 쪽을 먼저 말하게 한 뒤 쓰게 한다. "기록이 없으면 일어나지 않은 일"이라고 쓰는 학생에게 "기록이 없는 까닭은 무엇일까요?"라고 되묻는다. 빈자리를 상상으로 채우는 학생에게는 근거 있는 다른 기록으로만 채우게 한다. 학생 이름은 쓰지 않는다.',
          task: '광주학생독립운동을 전하는 기록을 만든 쪽에 따라 가려 쓰고, 일제의 보도 통제 아래 기록이 말하지 못한 것을 생각하는 짧은 글을 써서 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('학생들의 격문과 일제 법원 판결문은 누가 만들었고 각각 무엇을 알려 주는지 두 문장으로 쓰세요.', { topic: '학생들이 쓴 격문과 일제 법원의 판결문을 만든 쪽과 각각 알려 주는 것을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ① 만든 쪽' }, ['기록마다 만든 쪽을 썼다', '기록마다 알려 주는 것을 썼다', '만든 쪽의 입장을 생각했다'], [['격문'], ['판결']]),
              RW('틀을 채워 두 기록을 만든 쪽을 쓰세요.', { topic: '격문과 판결문을 만든 쪽을 쓰세요.', min: 20, max: 140, s: [1, 2], starter: '격문은 ___이 쓴 기록이고, 판결문은 ___이 남긴 기록이다.' }, ['기록마다 만든 쪽을 썼다', '내 말로 썼다'], [['격문'], ['판결']])),
            IT(RW('당시 신문 기사가 짧거나 빠진 까닭을 보도 통제와 이어 두 문장으로 쓰세요.', { topic: '일제의 보도 통제 아래 당시 신문이 광주학생독립운동을 짧게 다루거나 다루지 못한 까닭을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ② 통제된 신문' }, ['보도 통제를 썼다', '기사가 짧다고 사건이 작았던 것은 아님을 썼다', '사실만 썼다'], [['통제']]),
              RW('틀을 채워 신문 기사가 짧은 까닭을 쓰세요.', { topic: '당시 신문 기사가 짧은 까닭을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '당시 신문 기사가 짧은 것은 일제가 보도를 ___했기 때문이다.' }, ['보도 통제를 썼다', '내 말로 썼다'], [['통제']])),
            IT(RW('기록의 빈자리를 채우는 바른 방법을 두 문장으로 쓰세요.', { topic: '기록이 말하지 못한 빈자리를 어떻게 채워야 하는지(다른 입장 기록 견주기·뒤에 남긴 회고 확인 등) 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '기록 ③ 빈자리 채우기' }, ['근거 있는 방법을 썼다', '상상으로 채우지 않는다고 썼다', '내 말로 썼다'], [['견주', '비교', '확인']]),
              RW('틀을 채워 빈자리를 채우는 방법을 쓰세요.', { topic: '기록의 빈자리를 채우는 방법을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '기록의 빈자리는 상상이 아니라 ___ 기록과 견주어 채운다.' }, ['근거 있는 방법을 썼다', '내 말로 썼다'])),
            IT(RW('앞의 글을 이어, 보도 통제 아래 기록이 말하지 못한 것과 그것을 읽는 방법을 세 문장으로 쓰세요.', { topic: '광주학생독립운동 때 보도 통제 아래 기록이 말하지 못한 것과, 그런 기록을 읽는 방법을 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '기록의 침묵 읽기' }, ['기록이 말하지 못한 것을 썼다', '만든 쪽을 생각했다', '읽는 방법을 썼다', '어느 나라 사람을 미워하는 말을 쓰지 않았다'], [['기록'], ['통제', '침묵', '빈자리']]),
              RW('틀을 채워 기록의 침묵을 두 문장으로 쓰세요.', { topic: '기록이 말하지 못한 것과 읽는 방법을 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], starter: '보도 통제 때문에 신문은 학생들의 ___를 다 전하지 못했다. 그래서 다른 쪽 ___과 견주어 읽어야 한다.' }, ['기록이 말하지 못한 것을 썼다', '읽는 방법을 썼다'], [['기록']]),
              RW('기록의 침묵을 읽는 방법을 오늘 내가 뉴스·자료를 읽을 때와 이어 한 문단으로 쓰세요.', { topic: '광주학생독립운동 기록의 침묵을 읽는 방법을, 오늘 내가 뉴스·온라인 자료를 읽을 때 쓸 방법과 이어 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '오늘 정보 읽기에 잇기' }, ['기록이 말하지 못한 것을 썼다', '만든 쪽을 생각했다', '오늘 정보 읽기와 이었다', '근거 있는 방법만 썼다'], [['기록'], ['오늘', '지금', '뉴스']]),
              { conclude: '기록이 짧거나 없는 데에도 까닭이 있을 수 있어요. 만든 쪽을 생각하고 여러 기록을 견주어 읽을 때 사실에 가까워져요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '광주학생독립운동의 기록을 정리해요.', columns: ['기록', '만든 쪽', '알 수 있는 것'], cells: [['학생들의 격문', '', ''], ['일제 판결문', '', ''], ['당시 신문 기사', '', '']], answer: '학생·요구 / 일제 법원·처벌 내용 / 언론(통제 아래)·허락된 짧은 사실' },
          { type: 'choice', prompt: '기록의 빈자리를 채우는 방법으로 알맞은 것은?', options: ['상상으로 채운다', '다른 입장의 기록과 견준다', '없던 일로 한다'], answer: '다른 입장의 기록과 견준다' }] },
      }),

      // ---- 정리 ----
      M('wrap.one', {
        title: '학생독립운동기념일의 뜻 출구 글', method: '학생독립운동기념일의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(무엇에 맞섰나)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(해·무엇에 맞섰나)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 자기 말로 한 문장을 더해 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"11월 3일이 \'학생\'의 이름이 붙은 기념일인 까닭은 무엇일까요?" 출구 글을 쓰기 전에 오늘 시간 띠의 흐름을 한 번 다시 짚는다. "광주 한 학교의 일"이라고 쓰는 학생에게는 전국 학교로 번졌다는 점을 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('학생독립운동기념일의 뜻을 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '11월 3일 학생독립운동기념일은 무엇을 기념하는 날인지 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '학생독립운동기념일의 뜻', starter: '학생독립운동기념일은 ___년 광주 학생들이 ___에 맞서 일어나 전국으로 번진 운동을 기념하는 날이다.' }, ['사실(때·한 일)이 정확하다', '핵심 낱말(1929년·광주·차별)을 넣었다', '내 말로 썼다'], [['1929'], ['차별']]),
              { prompt: '빈칸 하나를 채워 기념일의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '학생독립운동기념일은 1929년 광주 학생들이 ___에 맞서 일어난 운동을 기념하는 날이다.' }, target: { selfCheck: ['무엇에 맞섰는지 썼다', '내 말로 썼다'], mustInclude: [['차별']] } },
              { prompt: '틀 없이, 기념일의 뜻에 오늘 학생으로서 기억할 까닭 한 문장을 더해 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(때·한 일)이 정확하다', '핵심 낱말(1929년·광주·차별)을 넣었다', '내 말로 썼다', '오늘 기억할 까닭을 한 문장 더했다'], mustInclude: [['1929'], ['차별']] } }),
            { type: 'choice', prompt: '학생독립운동기념일에 대한 설명으로 알맞은 것은?', options: ['1929년 광주에서 시작해 전국으로 퍼진 학생 항일 운동을 기념한다', '어른들이 학생을 위해 만든 놀이의 날이다', '광주 한 학교에서만 있었던 일을 기념한다'], answer: 0, difficulty: 0.15, explain: '학생독립운동기념일은 1929년 학생들의 항일 운동을 기념해요.' },
          ],
        },
        worksheet: {
          title: '학생독립운동기념일',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '학생독립운동기념일은 ___월 ___일이다.', answer: '11, 3' },
            { type: 'short', prompt: '학생독립운동기념일의 뜻을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.student', {
        title: '오늘 학생이 할 수 있는 참여', method: '오늘 학생이 할 수 있는 참여 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '두 장면을 교사가 소리 내어 읽어 주고, 첫 장면은 교사와 함께 고른다.', base: '학생회·교실 장면 두 개에서 정해진 길로 참여하는 선택을 스스로 고른다.', challenge: '두 장면에서 고른 뒤, 셋째 문항에서 1929년 학생들과 오늘 참여의 같은 점·다른 점을 고르고 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"1929년 학생들은 차별에 맞서 목소리를 냈어요. 오늘 우리 학교에서 학생이 목소리를 내는 길은 무엇일까요?" 장면마다 고른 선택을 말하게 하고, 그 선택이 다른 사람의 존엄도 지키는지 묻는다. "학생은 어려서 할 수 있는 게 없다"는 학생에게 "학생회와 학급 회의는 누구를 위한 자리일까요?"라고 되묻는다. 학생 개인의 생각을 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '급식 메뉴 정하는 방식이 불공평하다는 이야기가 반에서 나왔다.', who: '나', feeling: '걱정', choices: [
              { id: 'a', text: '학급 회의에서 근거를 모아 학생회에 건의한다', result: '학생회가 의견을 모아 학교에 전한다.' },
              { id: 'b', text: '익명 게시판에 담당 선생님 욕을 쓴다', result: '문제는 그대로이고 누군가 상처받는다.', why: '정해진 길로 근거를 들어 말하면 바뀔 수 있어요.' },
              { id: 'c', text: '불평만 하고 아무것도 하지 않는다', result: '불공평한 방식이 그대로 남는다.', why: '학생도 정해진 길로 의견을 낼 수 있어요.' }] }, prompt: '오늘 학생이 할 수 있는 참여에 가장 가까운 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '반에서 전학 온 친구의 말투를 흉내 내며 놀리는 일이 생겼다.', who: '나', feeling: '속상함', choices: [
              { id: 'a', text: '함께 그만하자고 말하고 선생님께 알린다', result: '놀림이 멈추고 친구가 안심한다.' },
              { id: 'b', text: '모른 척 지나간다', result: '놀림이 되풀이된다.', why: '차별에 함께 반대하면 서로의 존엄을 지킬 수 있어요.' }] }, prompt: '차별에 함께 반대하는 선택을 고르세요.', target: { choice: 'a' }, difficulty: 0.2 },
            { type: 'choice', prompt: '1929년 학생들과 오늘 학생 참여의 공통점으로 가장 알맞은 것은?', options: ['불공정과 차별에 목소리를 낸다', '어른이 시키는 대로만 한다', '다른 사람을 미워하는 것이 목표다'], answer: 0, difficulty: 0.2, explain: '그때도 지금도 학생은 불공정과 차별에 목소리를 낼 수 있어요. 오늘은 학생회·학급 회의 같은 정해진 길이 있어요.' },
          ],
        },
        worksheet: {
          title: '오늘 학생의 참여',
          items: [
            { type: 'choice', prompt: '오늘 학교에서 학생이 의견을 내는 바른 길에 ○ 해요.', options: ['학급 회의·학생회에 건의한다', '익명으로 욕을 쓴다', '아무 말도 하지 않는다'], answer: '학급 회의·학생회에 건의한다' },
            { type: 'short', prompt: '우리 학교에서 학생이 목소리를 내면 좋을 일 하나와 그 방법을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.check', {
        title: '자료의 빠진 목소리 점검', method: '정보 빈자리 확인 점검', tool: 'timer', minutes: 7,
        levels: { easy: '확인 차례 카드 2장을 차례로 놓고 점검 칸 두 개에 표시한다.', base: '확인 차례 카드 3장(만든 쪽 보기·빠진 목소리 찾기·다른 기록과 견주기)을 차례로 놓고 점검 칸 세 개에 표시한다.', challenge: '카드 3장을 놓고 점검 칸 네 개(확인할 곳 정하기 포함)에 표시한다.' },
        wrap: {
          teacher: '"오늘 기록의 침묵을 읽은 방법을 내일 뉴스나 온라인 자료를 볼 때도 쓸 수 있을까요?" 확인 차례 카드를 놓은 뒤 점검 칸 가운데 가장 자신 없는 칸 하나를 골라 활동지에 다음에 할 일을 적게 한다. "자료에 없으면 없는 일"이라는 학생에게 "그 자료를 만든 쪽이 말하지 않은 까닭은 없을까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('확인 차례 카드를 차례로 놓고, 점검 칸에 스스로 표시해요.', '빠진 목소리 확인', ['다른 기록과 견준다', '만든 쪽을 확인한다', '빠진 목소리를 찾는다'], ['만든 쪽을 확인한다', '빠진 목소리를 찾는다', '다른 기록과 견준다'], VOICE.slice(0, 3)),
              { prompt: '확인 차례 카드 2장을 차례로 놓고 점검해요.', toolOptions: { cards: ['다른 기록과 견준다', '만든 쪽을 확인한다'] }, target: { order: ['만든 쪽을 확인한다', '다른 기록과 견준다'], selfCheck: [VOICE[0], VOICE[2]] } },
              { prompt: '확인 차례 카드 3장을 차례로 놓고, 확인할 곳까지 정한 뒤 점검해요.', target: { order: ['만든 쪽을 확인한다', '빠진 목소리를 찾는다', '다른 기록과 견준다'], selfCheck: [...VOICE, '확인할 곳(기념관·공공 기록 보관소 등)을 하나 정했다'] } }),
            { type: 'choice', prompt: '당시 신문 기사가 짧은 까닭을 생각하는 태도로 알맞은 것은?', options: ['기사가 짧으니 사건이 작았다고 본다', '보도 통제가 있었는지 생각하고 다른 기록과 견준다', '짧은 기사는 무시한다'], answer: 1, difficulty: 0.2, explain: '기록의 빈자리에는 까닭이 있을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '빠진 목소리 확인',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '일제는 신문의 보도를 ___하여 사건을 제대로 전하지 못하게 했다.', answer: '통제' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 세계 인권의 날 — 1948년 세계 인권 선언 (days.m.rights) ====
  {
    const M = MK('rights');
    const RIGHTS = [
      { id: 'h1', text: '생명과 신체의 안전', to: '선언에 있는 권리' }, { id: 'h2', text: '의견을 말하고 표현할 자유', to: '선언에 있는 권리' },
      { id: 'h3', text: '교육받을 권리', to: '선언에 있는 권리' }, { id: 'h4', text: '쉬고 여가를 누릴 권리', to: '선언에 있는 권리' },
      { id: 'n1', text: '남을 노예로 부릴 권리', to: '선언에 없는 것' }, { id: 'n2', text: '출신으로 사람을 차별할 권리', to: '선언에 없는 것' },
      { id: 'n3', text: '성적이 좋은 사람만 배울 권리', to: '선언에 없는 것' },
    ];
    const ORIGIN = [
      { id: 'o1', text: '제2차 세계 대전의 참상' }, { id: 'o2', text: '국제 연합(유엔) 창설(1945)' }, { id: 'o3', text: '유엔 총회, 세계 인권 선언 채택(1948)' },
      { id: 'o4', text: '아동 권리 협약 채택(1989)' }, { id: 'o5', text: '우리나라 아동 권리 협약 비준(1991)' },
    ];
    const NOYEAR = (cs) => cs.map((c) => Object.assign({}, c, { text: c.text.replace(/\(\d+\)$/, '') }));
    const EB = (prompt, situation, choices, choice, more) => Object.assign({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice } }, more);
    // 가상 인물 갈림길 — 가상의 학급 사진 담당 '서'
    const D1 = { text: '가상의 중학생 서는 학급 사진 담당이다. 체육 대회 사진을 반 누리집에 올리려는데, 사진 속 친구 한 명은 얼굴이 나오는 것을 싫어한다.', ask: '서는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ask', text: '올리기 전에 사진 속 친구들에게 괜찮은지 묻는다', result: '대부분은 괜찮다고 하지만 한 친구는 빼 달라고 한다.', impact: [{ who: '사진 속 친구들', text: '자기 사진에 대해 말할 기회가 있다', tone: 1 }], end: '올리기 전에 먼저 물었어요.',
        next: { text: '반 친구들은 "다 같이 나온 사진이 제일 잘 나왔으니 그냥 올리자"고 한다.', ask: '서는 어떻게 할까?', choices: [
          { id: 'respect', text: '그 친구 얼굴이 나오지 않는 사진을 골라 올린다', result: '행사 기록을 나누면서 친구의 뜻도 지켜진다.', impact: [{ who: '빼 달라던 친구', text: '사생활이 지켜진다', tone: 1 }, { who: '반 친구들', text: '행사 사진을 함께 본다', tone: 1 }], end: '두 쪽의 권리를 함께 지켰어요.',
            next: { text: '한 친구가 "그럼 그 친구만 빼고 단체 사진을 다시 찍자"며 웃는다.', ask: '서는 어떻게 할까?', choices: [
              { id: 'together', text: '빼는 대신 원하는 사람만 나오는 방식을 함께 정하자고 한다', result: '누구도 따돌림받지 않고 사진 규칙이 생긴다.', impact: [{ who: '반 전체', text: '서로의 뜻을 존중하는 규칙이 생긴다', tone: 1 }] },
              { id: 'exclude', text: '재미있겠다며 그 친구만 빼고 찍는다', result: '그 친구가 반에서 따로 떨어진 느낌을 받는다.', impact: [{ who: '빼 달라던 친구', text: '소외감을 느낀다', tone: -1 }], why: '한 사람을 빼는 방식은 또 다른 존엄을 해쳐요.' }] } },
          { id: 'majority', text: '여럿이 원하니 그대로 올린다', result: '빼 달라던 친구의 얼굴이 누리집에 걸린다.', impact: [{ who: '빼 달라던 친구', text: '사생활을 침해받는다', tone: -1 }], why: '여럿이 원해도 한 사람의 사생활을 무시해서는 안 돼요.' }] } },
      { id: 'post', text: '잘 나온 사진이니 묻지 않고 바로 올린다', result: '얼굴이 나오기 싫던 친구가 속상해한다.', impact: [{ who: '사진 속 친구', text: '자기 모습이 허락 없이 걸린다', tone: -1 }], why: '사진 속 사람에게 먼저 묻는 것이 사생활을 지키는 첫걸음이에요.', ending: '묻지 않고 올려 친구가 속상했어요.' }] };
    const R1 = [{ id: 'r1', text: '누구나 자기 모습이 함부로 쓰이지 않을 권리가 있다' }, { id: 'r2', text: '행사를 나눌 자유와 친구의 사생활을 함께 지킬 수 있다' },
      { id: 'r3', text: '여럿이 원하면 한 사람의 뜻은 무시해도 된다', why: '다수의 뜻도 한 사람의 존엄을 해칠 수는 없어요.' }, { id: 'r4', text: '사진 담당이니 내 마음대로 해도 된다', why: '맡은 일을 할 때도 다른 사람의 권리를 지켜야 해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '한 사람을 빼는 방식은 또 다른 존엄을 해친다' }], ok: ['r5'] };
    const ART = [['제1조 모든 사람은 태어날 때부터 자유롭고 존엄하며 평등하다', '존엄과 평등'], ['제3조 모든 사람은 생명과 자유, 신체의 안전을 누릴 권리가 있다', '생명과 안전의 권리'], ['제19조 모든 사람은 의견을 갖고 표현할 자유가 있다', '의견과 표현의 자유'], ['제26조 모든 사람은 교육을 받을 권리가 있다', '교육받을 권리']];

    ALL.push(
      // ---- 도입 ----
      M('intro.every', {
        title: '모든 사람에게 있어야 할 것', method: '모든 사람에게 있는 것 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 4장 가운데 모든 사람에게 있어야 할 것을 교사와 함께 고른다.', base: '시연 판의 카드 6장(함정 2장) 가운데 모든 사람에게 있어야 할 것이 담기는 모습을 보며, 함정 카드가 왜 아닌지 말한다.', challenge: '고른 카드 하나를 골라 모든 사람에게 있어야 하는 까닭을 한 줄 말한다.' },
        intro: {
          teacher: '"사람이라면 누구나 누려야 할 것은 무엇일까요?" 카드 여섯 장을 보이고 시연 단추로 모든 사람에게 있어야 할 것이 바구니에 담기는 모습을 보인다. 1948년 12월 10일 유엔 총회가 세계 인권 선언을 채택했고, 이날을 세계 인권의 날로 기념한다고 알린다. "착한 사람만 인권이 있다"는 말이 나오면 "선언 제1조는 \'모든 사람\'이라고 적어요. 조건이 붙어 있을까요?"라고 되묻는다.',
          student: '카드를 보고 모든 사람에게 있어야 할 것을 골라요. 고르지 않은 카드는 왜 모든 사람의 권리가 될 수 없는지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '모든 사람에게', cards: [
            { id: 'e1', text: '생명과 안전' }, { id: 'e2', text: '의견을 말할 자유' }, { id: 'e3', text: '교육받을 권리' }, { id: 'e4', text: '쉴 권리' },
            { id: 'e5', text: '남을 놀릴 자유' }, { id: 'e6', text: '성적순 교육 기회' }], shuffle: false }, sequence: [{ pick: ['e1'] }, { pick: ['e1', 'e2'] }, { pick: ['e1', 'e2', 'e3', 'e4'] }] },
          art: { draw: 'paper-cut hands of many colors holding up a large scroll, surrounded by doves and small houses', banner: '모든 사람에게 있어야 할 것은?', extra: [{ motif: 'bird', x: 300, y: 96 }] },
        },
      }),
      M('intro.why', {
        title: '"왜 1948년이었을까" 짐작 투표', method: '세계 인권 선언이 1948년에 나온 까닭 짐작을 투표해 그림그래프로 보기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 짐작 보기 네 개를 칠판에 적어 두고 손을 들어 투표한다.', base: '투표한 뒤 가상의 우리 반 그림그래프에서 가장 많은 짐작을 읽고, 내 짐작을 두 가지 더 말한다.', challenge: '가장 많이 나온 짐작을 무엇으로 확인할 수 있을지(교과서·유엔 자료 등) 말한다.' },
        intro: {
          teacher: '"세계 인권 선언은 왜 하필 1948년에 나왔을까요? 보기 넷 가운데 가장 그럴듯한 것에 손을 들어 보세요." 손을 든 수를 센 뒤 시연 단추로 가상의 우리 반 그림그래프를 읽어 가장 많은 짐작을 고르는 모습을 보인다. 제2차 세계 대전에서 수많은 사람의 존엄이 짓밟힌 일을 되풀이하지 않으려는 뜻이 있었다는 교과서 서술은 활동에서 확인한다고 밝힌다. "그냥 날짜를 정한 것"이라는 말에는 "1948년 바로 앞에 세계에 무슨 일이 있었을까요?"라고 되묻는다.',
          student: '세계 인권 선언이 1948년에 나온 까닭 짐작 넷 가운데 하나에 투표하고, 반 전체 그림그래프를 읽어 오늘 확인할 질문을 정해요.',
          demo: VOTE('세계 인권 선언이 1948년에 나온 까닭 짐작(가상의 우리 반 투표)', [['세계 대전의 참상', 10], ['나라끼리 약속이 필요해서', 7], ['유엔이 막 만들어져서', 6], ['기술이 발달해서', 3]], '가장 많이 나온 짐작은?', 0),
          art: { draw: 'a paper-cut dove rising from a war-torn landscape toward a meeting hall with many flags', banner: '왜 1948년이었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수치는 가상이다. 실제 투표는 손 들기로 하고 맞고 틀림으로 채점하지 않는다.',
      }),
      M('intro.article', {
        title: '조문 한 줄과 권리 이름', method: '조문 한 줄 듣고 권리 이름 붙이기', tool: 'story', minutes: 6,
        levels: { easy: '조문 두 줄(제1조·제26조)을 듣고 권리 이름 보기 두 개 가운데 고른다.', base: '조문 세 줄을 듣고 시연 판에서 권리 이름이 이어지는 것을 보기 전에 먼저 짐작해 말한다.', challenge: '조문 하나를 골라 그 권리가 지켜지는 내 생활 장면 하나를 짝에게 말한다.' },
        intro: {
          teacher: '"모든 사람은 교육을 받을 권리가 있다." 세계 인권 선언 조문 한 줄을 쉬운 말로 읽어 주고 "이 권리에 이름을 붙인다면?"이라고 묻는다. 시연 단추로 조문과 권리 이름 카드가 이어지는 모습을 보인다. 세계 인권 선언은 모두 30개 조로 이루어져 있다고 알린다. "조문은 어른들 이야기"라는 반응에는 "오늘 아침 교실에서 이 권리와 이어지는 일이 있었을까요?"라고 되묻는다.',
          student: '세계 인권 선언 조문 한 줄을 듣고 알맞은 권리 이름을 골라요. 그 권리가 지켜지는 생활 장면을 하나 떠올려요.',
          demo: { tool: 'story', options: { mode: 'match', title: '조문과 권리 이름', slots: ART.slice(0, 3).map((a, i) => ({ id: `a${i + 1}`, label: a[0] })), cards: [...ART.slice(0, 3).map((a, i) => ({ id: `k${i + 1}`, text: a[1], motif: ['star', 'sun', 'bird'][i] })), { id: 'x1', text: '남을 차별할 자유', motif: 'cloud' }], shuffle: false }, sequence: [{ match: { a1: 'k1' } }, { match: { a1: 'k1', a2: 'k2' } }, { match: { a1: 'k1', a2: 'k2', a3: 'k3' } }] },
          art: { draw: 'paper-cut open scroll with numbered articles floating above a school, a library and a home, connected by threads', banner: '이 조문은 어떤 권리일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '조문은 원문이 아니라 쉬운 말로 줄인 요지다. 원문은 국가인권위원회 세계 인권 선언 번역본으로 함께 보여 줄 수 있다.',
      }),

      // ---- 활동 ----
      M('activity.rights', {
        title: '선언에 담긴 권리 고르기', method: '선언의 권리 고르기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 5장을 선언에 있는 권리·없는 것으로 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '카드 7장을 나누고, 권리를 묶음(자유·안전·생활과 교육)으로 다시 나눈 뒤 권리가 누구에게 있는지 가른다.', challenge: '둘째 문항에서 묶음 하나가 더 늘고 함정 카드가 섞이며, 묶음마다 붙인 이름을 짝에게 설명한다.' },
        activity: {
          title: '선언의 권리 고르기', tool: 'sortboard',
          teacher: '"이 카드는 세계 인권 선언에 담긴 권리일까요?" "성적이 좋은 사람만 배울 권리"를 권리 바구니에 넣는 학생에게 "선언은 교육받을 권리를 누구에게 있다고 했을까요?"라고 되묻는다. 셋째 문항에서 인권에 조건이 있다고 여기는 학생에게 제1조의 "모든 사람"을 다시 읽게 한다. "인권은 큰 사건에서만 문제"라는 말에는 쉴 권리·표현의 자유처럼 교실에서도 날마다 쓰는 권리라는 점을 짚는다.',
          task: '세계 인권 선언에 담긴 권리와 그렇지 않은 것을 바구니에 나누고, 권리를 묶음으로 정리해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('카드를 세계 인권 선언에 있는 권리와 없는 것으로 나누세요.', ['선언에 있는 권리', '선언에 없는 것'], RIGHTS),
              SB('카드 5장을 선언에 있는 권리와 없는 것으로 나누세요.', ['선언에 있는 권리', '선언에 없는 것'], pickCards(RIGHTS, ['h1', 'h2', 'h3', 'n1', 'n2']))),
            IT(SB('선언에 있는 권리를 묶음으로 나누세요.', ['자유', '생명과 안전', '생활과 교육'], [
              { id: 'g1', text: '사상과 양심의 자유', to: '자유' }, { id: 'g2', text: '의견을 말하고 표현할 자유', to: '자유' },
              { id: 'g3', text: '고문받지 않을 권리', to: '생명과 안전' }, { id: 'g4', text: '생명과 신체의 안전', to: '생명과 안전' },
              { id: 'g5', text: '교육받을 권리', to: '생활과 교육' }, { id: 'g6', text: '쉬고 여가를 누릴 권리', to: '생활과 교육' }]),
              null,
              SB('선언에 있는 권리를 네 묶음으로 나누고, 선언에 없는 카드는 남기세요.', ['자유', '생명과 안전', '생활과 교육', '평등'], [
                { id: 'g1', text: '사상과 양심의 자유', to: '자유' }, { id: 'g2', text: '의견을 말하고 표현할 자유', to: '자유' },
                { id: 'g3', text: '고문받지 않을 권리', to: '생명과 안전' }, { id: 'g4', text: '생명과 신체의 안전', to: '생명과 안전' },
                { id: 'g5', text: '교육받을 권리', to: '생활과 교육' }, { id: 'g6', text: '쉬고 여가를 누릴 권리', to: '생활과 교육' },
                { id: 'g7', text: '법 앞에서 평등할 권리', to: '평등' }, { id: 'g8', text: '차별받지 않을 권리', to: '평등' },
                { id: 'g9', text: '힘센 사람이 먼저 누릴 권리' }])),
            IT(SB('권리가 누구에게 있는지 나누세요.', ['맞는 말', '틀린 말'], [
              { id: 'w1', text: '태어날 때부터 모든 사람에게 있다', to: '맞는 말' }, { id: 'w2', text: '출신·성별·재산과 관계없이 있다', to: '맞는 말' },
              { id: 'w3', text: '어른이 되어야 생긴다', to: '틀린 말' }, { id: 'w4', text: '착한 일을 한 사람에게만 있다', to: '틀린 말' }]),
              null, null, { conclude: '세계 인권 선언의 권리는 조건 없이 모든 사람에게 있고, 큰 사건뿐 아니라 교실 생활 속에서도 날마다 쓰여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '세계 인권 선언에 담긴 권리에 ○ 해요.', options: ['남을 노예로 부릴 권리', '쉬고 여가를 누릴 권리', '출신으로 차별할 권리'], answer: '쉬고 여가를 누릴 권리' }] },
      }),
      M('activity.class', {
        title: '교실에서 인권 지키는 선택', method: '교실에서 인권 지키는 선택', tool: 'emotion', minutes: 16,
        levels: { easy: '장면마다 보기 두 개 가운데 고르고, 결과를 함께 읽는다.', base: '장면마다 보기 두세 개 가운데 고르고 결과에서 누구의 권리가 지켜졌는지 말한다.', challenge: '그럴듯한 보기가 하나 더 섞인 판에서 고르고, 결과는 맞힌 뒤에만 보이며 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '교실 속 인권 선택', tool: 'emotion',
          teacher: '"이 선택을 받은 친구는 어떤 마음일까요?" 결과 칸을 읽고 그 친구의 권리가 지켜졌는지 말하게 한다. "웃자고 한 말"을 고르는 학생에게 듣는 사람이 존엄을 해친다고 느끼면 장난이 아니라는 점을 짚는다. 장면 속 인물은 모두 가상이며, 학생 자신의 경험을 꺼내게 하지 않는다.',
          task: '가상의 교실 장면에서 인권을 존중하는 선택을 고르고, 결과에서 누구의 권리가 지켜졌는지 살펴봐요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(EB('전학 온 친구의 말투를 몇몇이 흉내 내요. 어떻게 할지 골라 보세요.', '다른 지역에서 전학 온 가상의 친구 하의 말투를 친구들이 흉내 내며 웃는다.', [
              { id: 'laugh', text: '같이 웃으며 따라 한다', result: '하는 교실에 오기 싫어진다.', mood: '걱정', why: '말투로 놀리는 것은 출신으로 사람을 차별하는 일이에요.' },
              { id: 'stop', text: '"그만하자"고 말하고 하에게 말을 건다', result: '하가 교실에서 편안해진다.', mood: '편안함' }], 'stop'),
              null,
              { prompt: '말투 흉내 장면에서 인권을 존중하는 선택을 고르세요(보기 셋).', toolOptions: { choices: [
                { id: 'laugh', text: '같이 웃으며 따라 한다', result: '하는 교실에 오기 싫어진다.', mood: '걱정', why: '말투로 놀리는 것은 출신으로 사람을 차별하는 일이에요.' },
                { id: 'stop', text: '"그만하자"고 말하고 하에게 말을 건다', result: '하가 교실에서 편안해진다.', mood: '편안함' },
                { id: 'quiet', text: '나는 안 따라 하니 모른 척한다', result: '흉내는 계속되고 하는 혼자 견딘다.', mood: '걱정', why: '모른 척하면 놀림이 멈추지 않아요.' }] } }),
            IT(EB('모둠 회의에서 한 친구가 늘 의견을 못 내요. 어떻게 할지 골라 보세요.', '모둠 회의에서 목소리 큰 친구들만 의견을 내고, 가상의 친구 진은 말할 기회가 없다.', [
              { id: 'skip', text: '시간이 없으니 그냥 정한다', result: '진의 의견은 끝내 나오지 않는다.', mood: '아쉬움', why: '누구나 의견을 말할 권리가 있어요.' },
              { id: 'turn', text: '한 사람씩 돌아가며 말하자고 한다', result: '진도 생각을 말하고 모둠 결정이 더 좋아진다.', mood: '뿌듯함' },
              { id: 'vote', text: '목소리 큰 쪽으로 바로 정한다', result: '말하지 못한 사람은 결정에 따르기만 한다.', mood: '짜증', why: '말할 기회가 고르게 있어야 공정해요.' }], 'turn'),
              { prompt: '모둠 회의 장면에서 인권을 존중하는 선택을 고르세요(보기 둘).', toolOptions: { choices: [
                { id: 'skip', text: '시간이 없으니 그냥 정한다', result: '진의 의견은 끝내 나오지 않는다.', mood: '아쉬움', why: '누구나 의견을 말할 권리가 있어요.' },
                { id: 'turn', text: '한 사람씩 돌아가며 말하자고 한다', result: '진도 생각을 말하고 모둠 결정이 더 좋아진다.', mood: '뿌듯함' }] } }),
            IT(EB('반 단톡방에 친구 사진이 허락 없이 올라왔어요. 어떻게 할지 골라 보세요.', '체육 시간에 찍힌 가상의 친구 사진이 허락 없이 단톡방에 올라와 놀림거리가 되었다.', [
              { id: 'share', text: '재미있어서 다른 방에도 퍼뜨린다', result: '친구가 크게 상처받고 사진은 계속 퍼진다.', mood: '불안', why: '허락 없이 사진을 퍼뜨리면 사생활을 침해해요.' },
              { id: 'delete', text: '지워 달라고 말하고 선생님께 알린다', result: '사진이 지워지고 친구의 사생활이 지켜진다.', mood: '편안함' }], 'delete'),
              null,
              { prompt: '사진 장면에서 인권을 존중하는 선택을 고르세요(보기 셋).', toolOptions: { choices: [
                { id: 'share', text: '재미있어서 다른 방에도 퍼뜨린다', result: '친구가 크게 상처받고 사진은 계속 퍼진다.', mood: '불안', why: '허락 없이 사진을 퍼뜨리면 사생활을 침해해요.' },
                { id: 'delete', text: '지워 달라고 말하고 선생님께 알린다', result: '사진이 지워지고 친구의 사생활이 지켜진다.', mood: '편안함' },
                { id: 'emoji', text: '웃음 이모티콘만 달고 넘어간다', result: '놀림이 더 커진다.', mood: '불안', why: '작은 반응도 놀림을 키워요.' }] } },
              { conclude: '교실의 작은 선택에서도 출신·의견·사생활 같은 권리가 지켜지거나 해쳐져요. 인권은 큰 사건에서만이 아니라 날마다의 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 장면 하나를 골라, 내 선택으로 누구의 어떤 권리가 지켜졌는지 한 문장으로 써요.' }] },
      }),
      M('activity.origin', {
        title: '선언의 배경과 영향 사슬', method: '선언의 배경과 영향 사슬', tool: 'timeline', minutes: 16,
        levels: { easy: '사슬 카드 3장(참상·유엔 창설·선언 채택)에 연도가 적혀 있고, 놓으면 바로 맞는지 알려 준다.', base: '사슬 카드 5장(아동 권리 협약까지)을 연도 없이 차례대로 놓고, 선언 조문과 오늘 헌법의 기본권을 잇는다.', challenge: '연도 없는 5장에 함정 카드가 섞이고, 셋째 문항에서 조문과 헌법 기본권 세 쌍을 함정 카드 사이에서 잇는다.' },
        activity: {
          title: '선언의 사슬', tool: 'timeline',
          teacher: '"선언 다음에는 무엇이 이어졌을까요?" 유엔 창설과 선언 채택의 차례를 바꾸는 학생에게 유엔이 먼저 만들어지고 그 총회에서 선언을 채택했다는 점을 짚는다. 셋째 문항에서 오늘 우리 헌법에도 비슷한 기본권이 적혀 있다는 점을 견주어 보되, "선언 때문에 헌법이 생겼다"처럼 확인하지 않은 인과로 말하지 않게 한다.',
          task: '세계 인권 선언의 배경과 그 뒤에 이어진 일을 시간 띠에 차례대로 놓고, 선언 조문을 오늘 헌법의 기본권과 견주어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('세계 인권 선언의 배경과 그 뒤의 일을 차례대로 놓아 보세요.', NOYEAR(ORIGIN), { axis: ['먼저', '나중'] }),
              OB('세 일을 차례대로 놓아 보세요(연도가 적혀 있어요).', pickCards(ORIGIN, ['o1', 'o2', 'o3']), { axis: ['먼저', '나중'] }),
              OB('다섯 일을 차례대로 놓고, 맞지 않는 카드 한 장은 남기세요.', NOYEAR(ORIGIN), { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '세계 인권 선언이 유엔보다 먼저 생김' }])),
            IT(MB('사건과 그 일이 일어난 해를 이어 보세요. 맞지 않는 카드는 남겨요.', [['1945년', '국제 연합(유엔) 창설'], ['1948년', '세계 인권 선언 채택'], ['1989년', '아동 권리 협약 채택']], ['3·1 만세 운동']),
              MB('사건과 그 일이 일어난 해를 이어 보세요.', [['1945년', '국제 연합(유엔) 창설'], ['1948년', '세계 인권 선언 채택']], [])),
            IT(MB('선언 조문의 요지와 오늘 대한민국 헌법의 비슷한 기본권을 이어 보세요. 맞지 않는 카드는 남겨요.', [['존엄과 평등(제1조)', '인간으로서의 존엄과 가치'], ['의견과 표현의 자유(제19조)', '언론·출판의 자유'], ['교육받을 권리(제26조)', '교육을 받을 권리']], ['남보다 앞설 권리']),
              MB('선언 조문의 요지와 헌법의 비슷한 기본권 두 쌍을 이어 보세요.', [['존엄과 평등(제1조)', '인간으로서의 존엄과 가치'], ['교육받을 권리(제26조)', '교육을 받을 권리']], []),
              MB('조문과 헌법 기본권 세 쌍을 잇고, 맞지 않는 카드 두 장은 남기세요.', [['존엄과 평등(제1조)', '인간으로서의 존엄과 가치'], ['의견과 표현의 자유(제19조)', '언론·출판의 자유'], ['교육받을 권리(제26조)', '교육을 받을 권리']], ['남보다 앞설 권리', '힘센 사람이 정할 권리']),
              { conclude: '세계 대전의 참상을 되풀이하지 않으려고 유엔이 세계 인권 선언을 채택했고, 그 뒤 아동 권리 협약처럼 권리가 넓혀졌어요. 오늘 우리 헌법에도 비슷한 기본권이 적혀 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세계 인권 선언의 배경과 영향을 정리해요.', columns: ['배경', '채택(언제·어디서)', '그 뒤에 이어진 일'], cells: [['', '', '']], answer: '제2차 세계 대전의 참상 / 1948년 12월 10일 유엔 총회 / 아동 권리 협약(1989) 등' }] },
      }),
      M('activity.clash', {
        title: '권리가 부딪칠 때 갈림길', method: '권리가 부딪칠 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길에서 한 번 골라 결과를 본다.', base: '갈림길 두 번을 끝까지 가 보고, 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고른다.' },
        activity: {
          title: '권리 충돌 갈림길', tool: 'dilemma',
          teacher: '"행사 사진을 나누고 싶은 마음과 얼굴이 나오기 싫은 마음, 둘 다 지킬 길은 없을까요?" 가상 학생 서의 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "여럿이 원하면 따라야 한다"는 학생에게 "다수의 뜻이 한 사람의 존엄보다 언제나 앞설까요?"라고 되묻는다. "내 권리가 늘 먼저"라는 말에는 내 권리도 다른 사람의 존엄을 해치지 않는 범위에서 지켜진다는 점을 짚는다.',
          task: '가상 학생 서가 행사 사진을 두고 고르는 길을 따라가고, 끝에서 모두의 존엄을 지키는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '사진 담당 서가 체육 대회 사진을 두고 할 일을 한 번 골라 결과를 보세요.', base: '서의 갈림길 두 번을 끝까지 가 보고, 모두의 존엄을 지키는 근거를 고르세요.', challenge: '서의 갈림길 세 번을 끝까지 가 보고, 맞는 근거 카드 세 장을 모두 고르세요.' },
              '행사 사진과 사생활', D1, [['ask', 'respect', 'together']], R1, ['r1', 'r2'], Object.assign({ all: true }, R1MORE)),
            { prompt: '도서관에서 모둠 토론 소리 때문에 공부하는 학생들이 불편해해요. 두 권리를 함께 지키는 길을 골라 끝까지 가 보세요.', toolOptions: { title: '도서관의 두 권리', scene: { text: '도서관에서 모둠 토론 소리가 커서, 조용히 공부하던 학생들이 불편해한다.', ask: '공부하던 나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'room', text: '토론할 수 있는 다른 공간을 함께 찾자고 정중히 말한다', result: '토론과 공부가 모두 이어진다.', impact: [{ who: '토론 모둠', text: '토론을 이어 간다', tone: 1 }, { who: '공부하던 학생', text: '조용히 공부한다', tone: 1 }], ending: '두 쪽의 권리를 함께 지켰어요.' },
              { id: 'yell', text: '"조용히 해!"라고 소리친다', result: '서로 기분만 상하고 소리는 더 커진다.', impact: [{ who: '모두', text: '갈등이 커진다', tone: -1 }], why: '내 권리를 지키려다 상대를 무시하면 갈등이 커져요.', ending: '갈등만 커졌어요.' }] }, reasons: [{ id: 'q1', text: '정중히 말하면 두 쪽의 권리를 함께 지킬 수 있다' }, { id: 'q2', text: '내 권리가 늘 먼저다', why: '권리는 다른 사람의 권리와 함께 지켜져요.' }] }, target: { path: [['room']], reasons: ['q1'] } },
            { prompt: '밤늦은 단체 대화방 알림 때문에 쉬지 못하는 친구들이 있어요. 두 권리를 함께 지키는 길을 골라 끝까지 가 보세요.', toolOptions: { title: '대화방 규칙 정하기', scene: { text: '밤늦게까지 이어지는 반 단체 대화방 알림 때문에 쉬지 못하는 친구들이 있다.', ask: '규칙을 어떻게 정할까?', motif: 'house', choices: [
              { id: 'rule', text: '밤에는 급한 일만 보내기로 함께 정한다', result: '대화할 자유와 쉴 권리가 함께 지켜진다.', impact: [{ who: '반 친구들', text: '푹 쉬고 낮에 대화한다', tone: 1 }], ending: '두 권리를 함께 지키는 규칙을 정했어요.' },
              { id: 'free', text: '아무 때나 자유롭게 보내자고 한다', result: '쉬고 싶은 친구들의 휴식이 깨진다.', impact: [{ who: '쉬고 싶은 친구', text: '잠을 설친다', tone: -1 }], why: '모두의 쉴 권리도 함께 생각해야 해요.', ending: '쉴 권리를 놓쳤어요.' }] }, reasons: [] }, target: { path: [['rule']] }, conclude: '권리가 부딪칠 때는 한쪽을 지우지 않고, 모두의 존엄을 기준으로 함께 지킬 방법을 찾아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '권리가 서로 부딪칠 때 알맞은 태도는?', options: ['내 권리가 언제나 먼저이다', '모두의 존엄을 지키는 방법을 함께 찾는다', '목소리 큰 사람의 권리를 따른다'], answer: '모두의 존엄을 지키는 방법을 함께 찾는다' }] },
      }),
      M('activity.apply', {
        title: '조문을 생활 장면에 대어 쓰기', method: '조문을 생활 장면에 대어 판단 글쓰기', tool: 'rubric-writing', minutes: 32,
        levels: { easy: '가상 장면 두 개마다 문장 틀을 채워 관련 조문과 지켜졌는지를 쓰고, 마지막 글은 두 문장으로 쓴다.', base: '장면마다 관련 조문과 지켜진·침해된 권리를 판단해 쓰고, 마지막에 세 문장 판단 글을 쓴 뒤 기준표로 점검한다.', challenge: '마지막 글에서 침해된 권리를 바로잡을 해결 방안까지 넣어 한 문단(4~6문장)으로 쓴다.' },
        activity: {
          title: '조문 대어 쓰기', tool: 'rubric-writing',
          teacher: '"이 장면에서 어떤 권리가 문제일까요?" 가상 장면을 읽어 주고 관련 조문의 요지를 함께 찾은 뒤 판단 글을 쓰게 한다. 사진 장면을 교육받을 권리로 잇는 학생에게 허락 없이 퍼뜨린 사진은 사생활과 이어진다고 짚는다(선언 제12조). 장면은 모두 가상이며 학생 자신의 경험이나 실제 친구 이름은 쓰지 않는다고 밝힌다.',
          task: '세계 인권 선언의 주요 조문을 가상의 생활 장면에 대어 지켜진 권리와 침해된 권리를 판단하는 글을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('장면 ①: 가상의 학생 결이 허락 없이 퍼진 사진 때문에 놀림을 받아요. 관련 조문과 침해된 권리를 두 문장으로 쓰세요.', { topic: '허락 없이 퍼진 사진으로 놀림을 받는 가상 장면에서, 관련 조문(제12조 사생활)과 침해된 권리를 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '장면 ① 퍼진 사진' }, ['관련 조문의 요지를 썼다', '침해된 권리를 썼다', '실제 친구 이름을 쓰지 않았다'], [['사생활']]),
              RW('틀을 채워 장면 ①을 판단하세요.', { topic: '허락 없이 퍼진 사진 장면을 판단하세요.', min: 15, max: 120, s: [1, 2], starter: '이 장면에서는 ___의 권리가 침해되었다. 관련 조문은 제12조이다.' }, ['침해된 권리를 썼다', '실제 친구 이름을 쓰지 않았다'], [['사생활']])),
            IT(RW('장면 ②: 오래 입원한 가상의 학생 담이 병원 학교에서 수업을 받아요. 관련 조문과 지켜진 권리를 두 문장으로 쓰세요.', { topic: '오래 입원한 가상의 학생이 병원 학교에서 수업을 받는 장면에서, 관련 조문(제26조 교육)과 지켜진 권리를 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '장면 ② 병원 학교' }, ['관련 조문의 요지를 썼다', '지켜진 권리를 썼다', '그 권리가 왜 중요한지 썼다'], [['교육']]),
              RW('틀을 채워 장면 ②를 판단하세요.', { topic: '병원 학교 장면을 판단하세요.', min: 15, max: 120, s: [1, 2], starter: '이 장면에서는 ___받을 권리가 지켜졌다. 관련 조문은 제26조이다.' }, ['지켜진 권리를 썼다'], [['교육']])),
            IT(RW('장면 ③: 가상의 학생 윤이 학급 회의에서 반대 의견을 냈다가 따돌림을 받아요. 관련 조문과 침해된 권리를 두 문장으로 쓰세요.', { topic: '학급 회의에서 반대 의견을 냈다가 따돌림을 받는 가상 장면에서, 관련 조문(제19조 의견과 표현)과 침해된 권리를 두 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '장면 ③ 반대 의견' }, ['관련 조문의 요지를 썼다', '침해된 권리를 썼다', '다른 사람을 깎아내리는 말을 쓰지 않았다'], [['표현', '의견']]),
              RW('틀을 채워 장면 ③을 판단하세요.', { topic: '반대 의견 장면을 판단하세요.', min: 15, max: 120, s: [1, 2], starter: '이 장면에서는 의견과 ___의 자유가 침해되었다. 관련 조문은 제19조이다.' }, ['침해된 권리를 썼다'], [['표현']])),
            IT(RW('세 장면을 견주어, 인권이 생활 속에서 어떻게 지켜지거나 침해되는지 세 문장 판단 글을 쓰세요.', { topic: '세 장면을 견주어, 인권이 교실과 생활 속에서 어떻게 지켜지거나 침해되는지 세 문장으로 쓰세요.', min: 50, max: 240, s: [3, 4], title: '생활 속 인권 판단' }, ['장면 둘 이상을 견주었다', '지켜진 권리와 침해된 권리를 모두 다루었다', '조문의 요지를 근거로 들었다', '모든 사람의 존엄을 기준으로 판단했다'], [['존엄', '권리']]),
              RW('틀을 채워 판단 글을 두 문장으로 쓰세요.', { topic: '세 장면에서 배운 것을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], starter: '병원 학교 장면에서는 권리가 ___. 사진 장면과 반대 의견 장면에서는 권리가 ___.' }, ['지켜진 장면을 썼다', '침해된 장면을 썼다']),
              RW('침해된 권리를 바로잡을 해결 방안까지 넣어 한 문단으로 쓰세요.', { topic: '세 장면을 견주어 판단하고, 침해된 권리를 바로잡을 해결 방안(누가 무엇을 할 수 있나)까지 넣어 한 문단으로 쓰세요.', min: 90, max: 400, s: [4, 6], title: '판단과 해결 방안' }, ['장면 둘 이상을 견주었다', '조문의 요지를 근거로 들었다', '해결 방안을 구체적으로 썼다', '모든 사람의 존엄을 기준으로 판단했다'], [['존엄', '권리'], ['해결', '바로잡', '방안']]),
              { conclude: '세계 인권 선언의 조문은 교실과 생활 속 장면에서 어떤 권리가 지켜지고 침해되는지 판단하는 기준이 돼요.' }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '조문과 생활 장면을 정리해요.', columns: ['조문 요지', '지켜진 장면', '침해된 장면'], cells: [['제19조 의견과 표현의 자유', '', ''], ['제26조 교육받을 권리', '', '']], answer: '토론에서 반대 의견 존중·의견 냈다고 따돌림 / 병원 학교 수업·아파서 수업을 못 받음' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '세계 인권 선언은 모두 ___개 조로 이루어져 있다.', answer: '30' }] },
      }),

      // ---- 정리 ----
      M('wrap.one', {
        title: '세계 인권의 날의 뜻 출구 글', method: '세계 인권의 날의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸 하나(무엇을 채택했나)를 채워 한 문장을 쓰고 기준 둘을 점검한다.', base: '문장 틀의 빈칸 둘(언제·무엇을)을 채우고 기준 셋(사실 정확·핵심 낱말·자기 말)을 점검한다.', challenge: '틀 없이 제1조의 뜻까지 넣어 두 문장으로 쓰고 기준 넷을 점검한다.' },
        wrap: {
          teacher: '"12월 10일이 무슨 날인지 처음 듣는 친구에게 한두 문장으로 알려 준다면?" 출구 글을 쓰기 전에 오늘 시간 띠에서 유엔 창설과 선언 채택의 앞뒤를 다시 짚는다. "인권은 어른만 가진다"고 쓰는 학생에게 제1조의 "모든 사람"을 되짚게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT(EXIT_RW('세계 인권의 날이 무엇을 기념하는 날인지 한두 문장으로 쓰고 기준표에 표시해요.', { topic: '세계 인권의 날은 무엇을 기념하는 날인지 한두 문장으로 쓰세요.', min: 25, max: 160, s: [1, 2], title: '세계 인권의 날의 뜻', starter: '세계 인권의 날은 ___년 12월 10일 유엔 총회가 ___을 채택한 것을 기념하는 날이다.' }, ['사실(때·한 일)이 정확하다', '핵심 낱말(세계 인권 선언·유엔)을 넣었다', '내 말로 썼다'], [['1948'], ['인권 선언']]),
              { prompt: '빈칸 하나를 채워 세계 인권의 날의 뜻을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '세계 인권의 날은 1948년 12월 10일 유엔 총회가 ___을 채택한 것을 기념한다.' }, target: { selfCheck: ['무엇을 채택했는지 썼다', '내 말로 썼다'], mustInclude: [['인권 선언']] } },
              { prompt: '틀 없이, 세계 인권의 날의 뜻과 제1조의 뜻을 넣어 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '', minSentences: 2 }, target: { selfCheck: ['사실(때·한 일)이 정확하다', '핵심 낱말(세계 인권 선언·유엔)을 넣었다', '내 말로 썼다', '제1조의 뜻(모든 사람의 존엄과 평등)을 썼다'], mustInclude: [['1948'], ['인권 선언'], ['존엄', '평등']] } }),
            { type: 'choice', prompt: '세계 인권의 날에 대한 설명으로 가장 알맞은 것은?', options: ['1948년 12월 10일 유엔 총회의 세계 인권 선언 채택을 기념하는 날', '우리나라 헌법이 만들어진 날', '어른의 권리만 정한 날'], answer: 0, difficulty: 0.15, explain: '세계 인권의 날은 모든 사람의 권리를 밝힌 세계 인권 선언 채택을 기념해요.' },
          ],
        },
        worksheet: {
          title: '세계 인권의 날의 뜻',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '세계 인권의 날은 ___년 12월 10일 ___ 총회가 세계 인권 선언을 채택한 것을 기념한다.', answer: '1948, 유엔' },
            { type: 'short', prompt: '세계 인권의 날에 기념하는 것을 내 말로 한 문장 써요.' },
          ],
        },
      }),
      M('wrap.balance', {
        title: '권리가 부딪칠 때의 판단 점검', method: '권리가 부딪칠 때의 판단 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '판단 차례 카드 2장(부딪치는 권리 찾기 → 함께 지킬 방법 찾기)을 놓고 점검 칸 두 개에 표시한다.', base: '판단 차례 카드 3장을 놓고 점검 칸 세 개(차례마다 까닭을 말할 수 있다 등)에 표시한다.', challenge: '카드 3장에 함정 카드가 섞이고, 예시 장면 하나에 판단 차례를 대어 말할 수 있는지 점검 칸 하나가 더 있다.' },
        wrap: {
          teacher: '"권리가 부딪칠 때 우리는 어떤 차례로 판단할 수 있을까요?" 판단 차례 카드를 놓은 뒤 점검 칸에 표시하게 하고, 가장 자신 없는 칸에 다음에 할 일을 적게 한다. "목소리 큰 쪽을 따르면 된다"는 학생에게 "그때 말하지 못한 사람의 존엄은 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('권리가 부딪칠 때의 판단 차례 카드를 놓고, 점검 칸에 스스로 표시해요.', '권리가 부딪칠 때', ['두 권리를 함께 지킬 방법 찾기', '어떤 권리끼리 부딪치는지 찾기', '양쪽 사람의 존엄 따져 보기'], ['어떤 권리끼리 부딪치는지 찾기', '양쪽 사람의 존엄 따져 보기', '두 권리를 함께 지킬 방법 찾기'], ['부딪치는 두 권리의 이름을 말할 수 있다', '양쪽 사람이 받는 영향을 말할 수 있다', '한쪽을 지우지 않는 방법을 말할 수 있다']),
              { prompt: '판단 차례 카드 2장을 놓고 점검 칸에 표시해요.', toolOptions: { cards: ['두 권리를 함께 지킬 방법 찾기', '어떤 권리끼리 부딪치는지 찾기'] }, target: { order: ['어떤 권리끼리 부딪치는지 찾기', '두 권리를 함께 지킬 방법 찾기'], selfCheck: ['부딪치는 두 권리의 이름을 말할 수 있다', '한쪽을 지우지 않는 방법을 말할 수 있다'] } },
              { prompt: '함정 카드는 남기고 판단 차례 카드 3장을 놓은 뒤 점검 칸에 표시해요.', toolOptions: { cards: ['두 권리를 함께 지킬 방법 찾기', '어떤 권리끼리 부딪치는지 찾기', '양쪽 사람의 존엄 따져 보기', '목소리 큰 쪽으로 바로 정하기'] }, target: { order: ['어떤 권리끼리 부딪치는지 찾기', '양쪽 사람의 존엄 따져 보기', '두 권리를 함께 지킬 방법 찾기'], selfCheck: ['부딪치는 두 권리의 이름을 말할 수 있다', '양쪽 사람이 받는 영향을 말할 수 있다', '한쪽을 지우지 않는 방법을 말할 수 있다', '예시 장면에 판단 차례를 대어 말할 수 있다'] } }),
            { type: 'choice', prompt: '권리가 서로 부딪칠 때 판단의 기준으로 가장 알맞은 것은?', options: ['내 권리가 늘 먼저다', '모두의 존엄을 지키는 방법을 함께 찾는다', '사람 수가 많은 쪽을 따른다'], answer: 1, difficulty: 0.2, explain: '권리는 다른 사람의 존엄을 해치지 않는 범위에서 함께 지켜져요.' },
          ],
        },
        worksheet: {
          title: '권리가 부딪칠 때',
          items: [
            { type: 'blank', prompt: '판단 차례를 채워요.', text: '어떤 권리끼리 부딪치는지 찾기 → ___ → 두 권리를 함께 지킬 방법 찾기', answer: '양쪽 사람의 존엄 따져 보기' },
            { type: 'short', prompt: '점검 칸 가운데 가장 자신 없는 것 하나와, 다음에 그것을 채우려고 할 일을 써요.' },
          ],
        },
      }),
      M('wrap.self', {
        title: '우리 반 인권 점검', method: '우리 반 인권 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개마다 우리 반이 지키는 정도를 1~5점으로 적는다.', base: '점검 항목 5개마다 1~5점으로 적고, 점검 칸 두 개(근거를 떠올렸다 등)에 표시한다.', challenge: '항목 5개를 적은 뒤 점수가 가장 낮은 항목에서 우리 반이 바꿀 것 하나를 정하는 점검 칸이 하나 더 있고, 활동지에 그것을 쓴다.' },
        wrap: {
          teacher: '"우리 반은 세계 인권 선언의 권리를 얼마나 지키고 있을까요?" 항목마다 1~5점을 적게 하되, 점수는 우리 반 전체를 돌아보는 것이지 누군가를 탓하려는 것이 아니라고 밝힌다. 특정 친구 이름을 말하거나 쓰지 않게 한다. "우리 반은 다 잘 지켜요"라는 말에는 "가장 낮게 준 항목은 무엇이고, 그 까닭이 된 장면은 어떤 장면이었을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '우리 반 인권 점검(1~5점)', unit: '점', fields: [{ label: '존중하는 말', unit: '점' }, { label: '고른 발언 기회', unit: '점' }, { label: '사생활 지키기', unit: '점' }, { label: '차별 없는 모둠', unit: '점' }, { label: '쉴 권리 존중', unit: '점' }] }, prompt: '항목마다 우리 반이 지키는 정도를 1~5점으로 적고 점검 칸에 표시해요.', target: { records: true, selfCheck: ['점수마다 떠오르는 장면(이름 없이)을 생각했다', '누군가를 탓하지 않고 우리 반 전체를 돌아보았다'] }, difficulty: 0.2 },
              { prompt: '항목 3개마다 우리 반이 지키는 정도를 1~5점으로 적어요.', toolOptions: { fields: [{ label: '존중하는 말', unit: '점' }, { label: '고른 발언 기회', unit: '점' }, { label: '사생활 지키기', unit: '점' }] }, target: { records: true } },
              { prompt: '항목 5개를 적고, 가장 낮은 항목에서 바꿀 것 하나를 정한 뒤 점검 칸에 표시해요.', target: { records: true, selfCheck: ['점수마다 떠오르는 장면(이름 없이)을 생각했다', '누군가를 탓하지 않고 우리 반 전체를 돌아보았다', '가장 낮은 항목에서 우리 반이 바꿀 것 하나를 정했다'] } }),
            { type: 'choice', prompt: '우리 반 인권 점검을 할 때 알맞은 태도는?', options: ['점수가 낮은 까닭을 특정 친구 탓으로 돌린다', '우리 반 전체를 돌아보고 바꿀 것을 함께 정한다', '점수를 모두 5점으로 적는다'], answer: 1, difficulty: 0.15, explain: '점검은 누군가를 탓하려는 것이 아니라 함께 나아지려는 것이에요.' },
          ],
        },
        worksheet: {
          title: '우리 반 인권 점검',
          items: [
            { type: 'table', prompt: '우리 반 인권 점검 결과를 옮겨 적어요(이름 없이).', columns: ['항목', '점수(1~5)'], cells: [['존중하는 말', ''], ['고른 발언 기회', ''], ['사생활 지키기', '']], answer: '(스스로 점검 — 정답 없음)' },
            { type: 'short', prompt: '가장 낮은 항목에서 우리 반이 바꿀 것 하나를 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
