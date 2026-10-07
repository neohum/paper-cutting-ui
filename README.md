# ✂️ PaperCut UI - Layered Paper-Cut Design System

> **Aesthetic Foundation**:  
> *"Layered paper-cut illustration of [ ], with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling."*

본 프로젝트는 수제 종이 공예의 따스한 질감과 물리적 입체감을 디지털 인터페이스로 구현한 **레이어드 페이퍼 아트(Paper-Cut) UI 컴포넌트 라이브러리**입니다. 가장 기본이 되는 **버튼, 인풋박스, 체크박스, 드롭다운** 4대 원형(Primitive)만을 조합하여 30가지의 풍부하고 감성적인 실전 예제를 제공합니다.

---

## 📂 프로젝트 구조

```text
paper-cutting-ui/
├── index.html                  # 30가지 추천 예제 & 실시간 플레이그라운드 쇼케이스
├── papercut.css                # 페이퍼 아트 UI 전용 독립 CSS 라이브러리
├── papercut.js                 # 드롭다운, 토스트, 복사, 오디오 합성, 인터랙션 스크립트
├── DESIGN_SYSTEM.md            # 디자인 시스템 명세서 (색상 토큰, 고도 시스템, 원형 명세)
└── assets/
    ├── papercut-hero.jpg       # AI 에이전트 협업 생성: 열기구와 마을 페이퍼 컷팅 아트
    └── papercut-botanical.jpg  # AI 에이전트 협업 생성: 보태니컬 온실 페이퍼 컷팅 아트
```

---

## 🎨 주요 디자인 특징

1. **마테 크림 캔버스 (`#FAF7F0`)**: 차가운 흰색 대신 따스한 크림/아이보리 톤 배경과 미세한 페이퍼 노이즈 텍스처.
2. **소프트 파스텔 팔레트**: 민트, 피치, 라벤더, 버터컵, 스카이, 로즈, 세이지 7가지 천연 색지 컬러웨이.
3. **물리적 레이어링 & 온화한 그림자**: 차가운 검은색 그림자 대신 웜 엄버(Warm Umber) 계열의 다층 소프트 섀도우 적용.
4. **햅틱 프레스 인터랙션**: 버튼 클릭 시 실제로 두꺼운 종이가 눌리는 듯한 3px 물리적 깊이 모션.
5. **음각 프레스 카빙 인풋**: 종이 표면을 조각도로 파낸 듯한 은은한 안쪽 그림자(Inset Shadow).
6. **오리가미 & 데클 엣지 디테일**: 모서리가 접히는 체크박스, 우표 천공지, 스캘럽 레이저 컷팅, 책갈피 드롭다운.

---

## 🚀 빠른 시작 (Quick Start)

웹 브라우저에서 `index.html` 파일을 더블 클릭하거나 아래 명령어로 로컬 서버를 실행하여 즉시 확인하실 수 있습니다:

```bash
# 옵션 1: 브라우저로 직접 열기 (Windows)
start index.html

# 옵션 2: Python 간이 서버 실행
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 📑 30가지 추천 예제 목록

### Part 1: 기본 컴포넌트 원형 & 스타일 변형 (Core Primitives)
- **01. 3D 다층 스택 카드스톡 버튼** (Stacked Cardstock Button)
- **02. 음각 프레스 카빙 페이퍼 인풋** (Carved Inset Well Input)
- **03. 종이접기 모서리 폴드 체크박스** (Origami Dog-Ear Checkbox)
- **04. 스택 책갈피 부채꼴 드롭다운** (Bookmark Fan-out Dropdown)
- **05. 물결 레이저컷 스캘럽 버튼** (Wavy Scallop Edge Button)
- **06. 우표 천공지 텍스트 인풋** (Perforated Stamp Input)
- **07. 파스텔 리본 뱃지 체크 토글** (Ribbon Tag Toggle Checkbox)
- **08. 다층 카드스톡 네이티브 셀렉트** (Cardstock Native Select)

### Part 2: 감성 인터랙티브 폼 모듈 (Form Controls)
- **09. 주간 종이비둘기 레터 구독함** (Cozy Pigeon Newsletter)
- **10. 파스텔 감성 검색 & 카테고리 필터** (Pastel Search & Category Pill)
- **11. 페이퍼 크래프트 북클럽 가입 카드** (Papercraft Book Club Signup)
- **12. 반려식물 물주기 & 햇빛 다이어리** (Plant Care & Sunshine Reminder)
- **13. 따뜻한 베이커리 영수증 주문 슬립** (Bakery Order & Sugar Level)
- **14. 나만의 로스팅 원두 커스터마이저** (Coffee Roastery Customizer)
- **15. 파스텔 꿈 일기 퀵 캡처 서랍** (Dream Journal Quick Note)
- **16. 비밀 페이퍼 암호 금고 잠금** (Secret Origami Safe Lock)

### Part 3: 스토리텔링 시나리오 위젯 (Scenario Widgets)
- **17. 빈티지 러기지 여행 태그 발권기** (Travel Luggage Tag Maker)
- **18. 핸드메이드 입체 축하카드 빌더** (Handcrafted Gift Card Builder)
- **19. 페이퍼 커팅 원데이 클래스 신청서** (Paper-Cut Workshop Entry)
- **20. 오늘의 하늘 & 구름 감성 예보** (Pastel Sky & Cloud Reporter)
- **21. 유기동물 임시보호 희망 신청서** (Pet Adoption Wishlist Card)
- **22. 수제 티하우스 블렌딩 바** (Artisan Tea Blending Bar)
- **23. 빈티지 소포 우편 발송장 슬립** (Postage Parcel Dispatch Slip)
- **24. 아늑한 로파이 사운드스케이프 콘솔** (Cozy Lo-Fi Ambience Console)

### Part 4: 고급 복합 페이퍼 컴포넌트 & 디자인 랩 (Advanced)
- **25. 3단계 종이접기 온보딩 스텝퍼** (Multi-Step Origami Stepper)
- **26. 파스텔 종이 팔레트 스와치 생성기** (Pastel Color Swatch Creator)
- **27. 절취선 할 일 스트립 매니저** (Tear-off Todo Paper Strips - 실제 동적 추가 지원)
- **28. 빈티지 항공권 페이퍼 보딩패스** (Origami Boarding Pass Ticket)
- **29. 추억의 도서관 도서 대출 슬립 카드** (Handmade Library Checkout Slip)
- **30. 인터랙티브 페이퍼 4대 원형 실험실** (Interactive Lab)
- **+ 실시간 페이퍼 컷팅 디자인 랩 (Live Playground)**: 그림자 깊이, 곡률, 테마 실시간 튜닝

---

## 📄 라이선스 (License)

본 프로젝트는 [MIT License](LICENSE)에 따라 배포됩니다.

