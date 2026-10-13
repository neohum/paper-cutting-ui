---
plan: papercut-system-unification
status: approved
risk: medium
owner: neohum
---
# Plan: PaperCut 시스템 일원화 및 아이콘/버튼 기반 UI 전면 개편

## Intent
헤더 로고의 우표 천공 플레이트 + 3D 가위 아이콘을 기반으로 메인 로고 및 파비콘을 일원화하고,
'키리가미' 용어를 전면 퇴출하며, 뱃지·사이드바·헤더·콘텐츠 카드 스크롤 등 모든 UI 구성요소를
입체 종이 컷팅(우표 천공, 앤틱 왁스 실링, 노치 티켓, 챔퍼 다이컷) 아이콘/버튼 시스템으로 전면 재구성한다.

## Non-goals
- 백엔드 API 신규 구축
- 외부 CSS 프레임워크(Tailwind/Bootstrap 등) 외부 의존성 추가
- 모노크롬 철선 아이콘(Lucide/Heroicons) 혼용

## Steps

### Step 1: logo-favicon-unification
- Goal: 헤더의 우표 천공 배경 플레이트 + 3D 가위 아이콘을 메인 로고(`logo.svg`) 및 파비콘(`favicon.svg`)에 완벽히 이식하고, 헤더 로고 좌측 불필요 아이콘/토글 제거 확인.
- Files: logo.svg, favicon.svg, index.html
- Acceptance: AC-1: logo.svg와 favicon.svg가 우표 천공 테두리 및 3D 가위 SVG 그래픽을 갖추고 유효하게 렌더링된다.
- Tests: powershell -Command "Test-Path logo.svg; Test-Path favicon.svg"
- Risk: low
- Complexity: low
- Parallel: yes

### Step 2: terminology-purge
- Goal: 전체 HTML, CSS, JS, 카피 문구에서 '키리가미(Kirigami)' 용어를 전면 삭제하고 '페이퍼 커팅' 또는 'PaperCut'으로 전면 교체하며, 헤더 메뉴의 '3D 키리가미 버튼' 및 '키리가미 컴포넌트' 링크를 영구 삭제한다.
- Files: index.html, papercut-sidebar.js, papercut-sidebar.css, papercut.css, papercut.js, papercut-layout.css
- Acceptance: AC-1: index.html 및 핵심 JS/CSS 파일 내에 '키리가미' 텍스트 및 링크가 0건이어야 한다.
- Tests: powershell -Command "Select-String -Path index.html,papercut*.js,papercut*.css -Pattern '키리가미' | Measure-Object | Select-Object -ExpandProperty Count"
- Risk: low
- Complexity: low
- Parallel: yes

### Step 3: badge-system-overhaul
- Goal: 뱃지 컴포넌트를 버튼 및 아이콘과 동일한 페이퍼 크래프트 기법(우표 천공 미니 타공, 앤틱 왁스 실링, 노치 티켓, 0.88px 화이트 나이프 엣지, 2-Tier 번트 엄버 그림자)으로 전면 재설계한다.
- Files: papercut.css, papercut-sidebar.css, index.html
- Acceptance: AC-1: .pc-badge 클래스가 우표 천공, 왁스 인장, 티켓 노치 스타일을 지원하며 버튼/아이콘과 완벽한 시각적 일관성을 갖춘다.
- Tests: powershell -Command "Select-String -Path papercut.css -Pattern 'pc-badge' | Measure-Object"
- Risk: medium
- Complexity: medium
- Parallel: yes

### Step 4: sidebar-header-card-restructure
- Goal: 사이드바 타이틀 아이콘을 우표 천공 가위 로고로 변경하고, 사이드바 메뉴 버튼을 3D 페이퍼 컷팅 버튼/아이콘 플레이트 구조로 재설계하며, 버전 뱃지, 헤더 및 콘텐츠 카드 섹션 스크롤 레이아웃을 통일된 아이콘/버튼 시스템으로 재구성한다.
- Files: index.html, papercut-sidebar.css, papercut-sidebar.js, papercut-layout.css
- Acceptance: AC-1: 사이드바 타이틀 및 메뉴 버튼이 3D 페이퍼 컷팅 아이콘/버튼 방식으로 작동하며, 섹션 스크롤과 카드 뷰가 종이 레이어 스택으로 유려하게 렌더링된다.
- Tests: npx tsx scripts/ops/verify-responsive.ts
- Risk: medium
- Complexity: medium
- Parallel: no

## Verification
- Tier 1: 정적 검증 (`Select-String`을 통한 '키리가미' 완전 제거 및 SVG 유효성)
- Tier 2: 반응형 검증 (`npx tsx scripts/ops/verify-responsive.ts`)
- Tier 3: 시각적 실행 검증 (http://localhost:8000/index.html 브라우저 렌더링 확인)
