# ✂️ PaperCut UI - Layered Paper-Cut Design System

> **Aesthetic Foundation**:  
> *"Layered paper-cut illustration of [ ], with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling."*

본 프로젝트는 수제 종이 공예의 따스한 질감과 물리적 입체감을 디지털 인터페이스로 구현한 **레이어드 페이퍼 아트(Paper-Cut) UI 컴포넌트 라이브러리**입니다. 가장 기본이 되는 **버튼, 인풋박스, 체크박스, 드롭다운** 4대 원형(Primitive)만을 조합하여 30가지의 풍부하고 감성적인 실전 예제를 제공합니다.

---

## 📂 프로젝트 구조

```text
paper-cutting-ui/
├── index.html                  # 메인 종합 쇼케이스 (30개 실전 예제, 45개 PC 컴포넌트, 6대 벡터 차트, 678 아이콘 갤러리)
├── icon-simulator.html         # 3D 페이퍼컷 아이콘 라이브러리 (index.html#icon-gallery 연동)
├── papercut.css                # 페이퍼 아트 UI 전용 독립 CSS 라이브러리 (B 표준: 2-Tier · 4.5px · 48% Stacking 적용)
├── papercut.js                 # 기본 인터랙션, 드롭다운, 토스트, 복사, 오디오 합성 스크립트
├── papercut-icons.js           # 678종 스탠드얼론 레이어드 페이퍼 컷팅 아이콘 시스템 (659개 SVG + 19개 별칭) & 동적 스케일 엔진
├── papercut-shadow-studio.css  # 3D 페이퍼 입체감 & 다층 그림자 시뮬레이터 스타일
├── papercut-shadow-studio.js   # 3D 가상 크래프트 조명 (360°) & 다층 그림자 물리 연산 스크립트
├── papercut-ui.css / .js      # 45개 PC UI 페이퍼컷 컴포넌트 라이브러리 (shadcn/ui 참고, THIRD_PARTY_NOTICES.md)
├── papercut-paper-layer.css / .js  # 컴포넌트를 칼선 버튼처럼 그리는 SVG 색지 레이어 엔진 (data-pc-paper)
├── papercut-blocks-charts.css / .js # 6대 프로덕션 블록 & 6대 3D 페이퍼 벡터 차트
├── papercut-alerts-toasts.css / .js # 3D 페이퍼 알림 & 플로팅 토스트 스튜디오
├── papercut-sidebar.css / .js  # 반응형 사이드바 내비게이션
├── DESIGN_SYSTEM.md            # 마스터 디자인 시스템 명세서 (색상 토큰, 고도 시스템, 원형 명세, 30개 앱 명세)
├── DESIGN.md                   # UI/UX 시스템 & 컴포넌트 계약 (SSOT)
└── assets/
    ├── papercut-hero.jpg       # AI 에이전트 협업 생성: 열기구와 마을 페이퍼 컷팅 아트
    ├── papercut-botanical.jpg  # AI 에이전트 협업 생성: 보태니컬 온실 페이퍼 컷팅 아트
    └── avatars/                # 페이퍼컷 아바타 자산
```

---

## 🎨 주요 디자인 특징

1. **마테 크림 캔버스 (`#F8F4EC`)**: 차가운 흰색 대신 따스한 크림/아이보리 톤 배경과 미세한 페이퍼 노이즈 텍스처.
2. **소프트 파스텔 팔레트**: 민트(`--pc-mint`), 피치(`--pc-peach`), 라벤더(`--pc-lavender`), 버터컵(`--pc-buttercup`), 스카이(`--pc-sky`), 로즈(`--pc-rose`), 세이지(`--pc-sage`) 7가지 천연 색지 컬러웨이.
3. **'B. 양각 위로 쌓기 (2-Tier · 4.5px · 48% Stacking)' 물리 표준**:
   - 315° 탑레프트 사광 조명 (3200K 크래프트 데스크 램프)
   - Tier 1: 0.88px 칼선 직하 60% 번트 엄버(`rgba(46, 30, 20, 0.60)`) 접촉 그림자(Contact Edge)
   - Tier 2: 4.5px 단차 높이 48% 부유 그림자(Mid-air Float)로 층간 분리감 구현
   - 1px 칼선 화이트 반사 림(Knife Bevel Highlight)으로 종이 두께감 형성
   - 내부 다층 적층: `base ➔ mid ➔ top ➔ steam` 각 층이 하부 층으로 독립 그림자를 투사하여 완벽한 입체감(양각) 연출
4. **678종 스탠드얼론 Pure 3D 종이공예 아이콘 시스템**:
   - **Universal Full-Color 3D Kirigami Standard (16px ~ 256px 전역)**: 모노크롬 철선을 전면 배제하고, AI 원작 아트워크의 파스텔 7색지(Mint, Peach, Lavender, Buttercup, Sky, Rose, Cream)와 2-Tier 48% 번트 엄버 그림자가 살아있는 독립형 풀컬러 3D 종이공예 SVG(678종 시스템)를 단일 표준으로 적용.
   - 659개 마스터크래프트 Kirigami SVG + 19개 호환 별칭 = 678개 아이콘 토큰.
5. **130가지 종이 배경 플레이트 컬렉션**: 클래식 우표, 실링 왁스, 유기적 조약돌, 로마네스크 아치, 접지 공예 등 5개 아키타입 배경 플레이트.
6. **45개 PC UI 페이퍼컷 컴포넌트 & 6대 프로덕션 블록 & 6대 3D 벡터 차트**: 아코디언부터 툴팁까지 전체 UI 컴포넌트 및 SaaS 대시보드, 인증, 이커머스, 인터랙티브 벡터 차트 완비.
7. **햅틱 프레스 인터랙션**: 버튼 클릭 시 실제로 두꺼운 종이가 눌리는 듯한 물리적 깊이 모션과 최상위 면판 기준 기하학적 정렬(`dy=0, dx=0`).
8. **음각 프레스 카빙 인풋**: 종이 표면을 조각도로 파낸 듯한 은은한 안쪽 그림자(Inset Shadow).

---

## 🚀 설치 및 복사 붙여넣기 가이드 (Installation & Copy-Paste)

PaperCut UI는 **Zero-Runtime(빌드 도구 불필요 Vanilla HTML/CSS/JS)** 기반으로 설계되어, 설치 후 원하는 컴포넌트를 그대로 복사 붙여넣기하여 즉시 사용하실 수 있습니다.

### 방법 1: 1초 CDN & HTML 템플릿 복사 붙여넣기 (가장 빠름)

HTML 파일 하나만 만들고 아래 코드를 그대로 붙여넣으면 즉시 3D 페이퍼 아트 UI가 동작합니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My PaperCut App</title>
  
  <!-- PaperCut 핵심 스타일시트 (글로벌 CDN) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neohum/paper-cutting-ui@main/papercut.css">
</head>
<body style="background: #FAF7F0; padding: 40px 20px; font-family: sans-serif;">
  <div style="max-width: 520px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
    <h1 style="color: #2E1E14; margin: 0;">✂️ PaperCut UI</h1>

    <!-- 01. 버튼 -->
    <div style="display: flex; gap: 10px;">
      <button type="button" class="pc-btn pc-btn--mint">민트 버튼</button>
      <button type="button" class="pc-btn pc-btn--ticket pc-btn--peach">티켓 버튼</button>
    </div>

    <!-- 02. 카드 -->
    <div class="pc-card pc-card-sheet" style="padding: 24px; border-radius: 16px; background: #FFFDF9; border: 1.5px solid #D5C7B4; box-shadow: 0 4px 14px rgba(46,30,20,0.10);">
      <h3 style="margin-top: 0;">수제 종이 카드</h3>
      <p style="color: #5C4331;">설치와 복사 붙여넣기로 즉시 완성되는 3D 페이퍼 인터페이스입니다.</p>
    </div>
  </div>

  <!-- PaperCut 678종 3D 아이콘 & 핵심 스크립트 (글로벌 CDN) -->
  <script src="https://cdn.jsdelivr.net/gh/neohum/paper-cutting-ui@main/papercut-icons.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/neohum/paper-cutting-ui@main/papercut.js"></script>
</body>
</html>
```

---

### 방법 2: NPM 패키지 설치 & Import (React / Vue / Vite / Next.js)

```bash
# npm 설치
npm install papercut-ui

# 또는 pnpm / yarn
pnpm add papercut-ui
yarn add papercut-ui
```

```javascript
// main.js 또는 App.jsx / App.tsx 에서 스타일시트 임포트
import 'papercut-ui/css';
import 'papercut-ui/svg-primitives.css';

// 순수 SVG Radix 프리미티브 엔진 사용 (선택 사항)
import { PaperCutSVG } from 'papercut-ui/primitives';
```

---

### 방법 3: npx CLI (shadcn/ui 방식 컴포넌트 추가)

별도의 복잡한 세팅 없이 CLI 한 줄로 프로젝트에 파일과 컴포넌트를 바로 가져올 수 있습니다:

```bash
# 프로젝트 초기화 (핵심 CSS/JS 및 스타터 HTML 복사)
npx papercut-ui init

# 원하는 컴포넌트 스니펫 추가 (components/<component>.html 파일 생성)
npx papercut-ui add button
npx papercut-ui add card
npx papercut-ui add switch

# 사용 가능한 전체 컴포넌트 목록 확인
npx papercut-ui list

# 콘솔에 컴포넌트 코드 직접 출력
npx papercut-ui snippet button
```

---

### 📋 주요 컴포넌트 복사 붙여넣기 스니펫 (Copy-Paste Snippets)

#### 01. 버튼 (Button)
```html
<!-- 민트 솔리드 버튼 -->
<button type="button" class="pc-btn pc-btn--mint">민트 버튼</button>

<!-- 피치 티켓 노치 버튼 -->
<button type="button" class="pc-btn pc-btn--ticket pc-btn--peach">티켓 버튼</button>

<!-- 라벤더 우표 천공 버튼 -->
<button type="button" class="pc-btn pc-btn--stamp pc-btn--lavender">우표 버튼</button>
```

#### 02. 인풋 입력창 (Input)
```html
<!-- 음각 프레스 카빙 인풋 -->
<input type="text" class="pc-input" data-pc-paper="field" placeholder="내용을 입력하세요..." />
```

#### 03. 카드 & 패널 (Card)
```html
<!-- 티켓 노치 수제 종이 카드 -->
<div class="pc-card pc-card-sheet" data-pc-paper="ticket" data-pc-tone="cream" style="padding: 24px; border-radius: 16px; background: #FFFDF9; border: 1.5px solid #D5C7B4;">
  <h3 class="pc-card-title">종이 공예 카드</h3>
  <p>3D 다층 단차와 2-Tier 번트 엄버 그림자가 적용된 카드입니다.</p>
</div>
```

#### 04. 스위치 토글 (Switch)
```html
<!-- 슬라이딩 셔터 스위치 -->
<label class="pc-switch" role="switch" tabindex="0">
  <span>알림 설정</span>
  <input type="checkbox" />
  <span class="pc-switch-thumb"></span>
</label>
```

#### 05. 체크박스 (Checkbox)
```html
<!-- 종이접기 도그이어 체크박스 -->
<label class="pc-checkbox">
  <input type="checkbox" checked />
  <span>약관에 동의합니다</span>
</label>
```

#### 06. 배지 (Badge)
```html
<span class="pc-badge pc-badge--mint">Mint</span>
<span class="pc-badge pc-badge--peach">Peach</span>
<span class="pc-badge pc-badge--ticket pc-badge--lavender">Ticket</span>
<span class="pc-badge pc-badge--stamp pc-badge--sand">Stamp</span>
```

#### 07. 토스트 알림 (Toast)
```javascript
// 토스트 메시지 띄우기 (메시지, 톤, 아이콘)
window.showPaperToast('작업이 완료되었습니다!', 'mint', 'check');
```

---

## 🚀 빠른 시작 (Quick Start - 로컬 미리보기)

웹 브라우저에서 `index.html` 파일을 더블 클릭하거나 아래 명령어로 로컬 서버를 실행하여 즉시 확인하실 수 있습니다:

```bash
# 옵션 1: 브라우저로 직접 열기 (Windows)
start index.html

# 옵션 2: Python 간이 서버 실행
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 📱 반응형

폭 280px 이상의 어떤 컨테이너에서도 컴포넌트가 부모를 벗어나지 않습니다. 브레이크포인트는 `480 / 768 / 1024 / 1280px` 네 단계이고, 블록 컴포넌트는 컨테이너 쿼리로 놓인 자리의 폭에 반응합니다. 레이아웃 유틸리티(`.pc-grid-auto` 등)와 검사 방법은 [`docs/responsive.md`](docs/responsive.md)를 보세요.

```bash
npm install
node scripts/ops/verify-overflow.mjs --page      # 320~1920px 실측
node scripts/ops/verify-overflow.mjs --fixtures  # 컴포넌트 280/360/480px 실측
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

PC 컴포넌트는 [shadcn/ui](https://github.com/shadcn-ui/ui)(MIT)의 컴포넌트 구성과 명세를 참고했습니다. 고지 전문은 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)에 있습니다.

