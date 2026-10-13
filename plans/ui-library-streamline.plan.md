---
plan: ui-library-streamline
status: approved
risk: medium
owner: neohum
---
# Plan: PaperCut UI 라이브러리 정예화 (불필요 랩/아트 제거 및 컴포넌트 일원화)

## Intent
PaperCut UI 시스템을 실용적이고 직관적인 엔터프라이즈급 UI 라이브러리로 정예화한다:
1. UI 라이브러리에 불필요한 '실시간 랩'(`#paper-shadow-studio`, `icon-simulator.html`)과 아트 전시용 '3D 섀도우 박스 디오라마'(`#shadowbox-diorama`)를 완전 삭제한다.
2. 과거의 산발적 시나리오 위젯 모음이었던 '30대 실전 컴포넌트(Part 1~4)'를 과감히 정리하고, 산업 표준이자 실제 복사-붙여넣기 가능한 '페이퍼 UI 44종 컴포넌트' 및 '6대 실전 블록'으로 단일 통합한다.
3. 사이드바와 헤더, 히어로 버튼을 명확하고 군더더기 없는 정예 구조(디자인 토큰 ➔ 시그니처 버튼/카드 ➔ 44종 컴포넌트 ➔ 실전 블록/차트 ➔ 아이콘/배경)로 재편한다.

## Non-goals
- 44종 마스터 컴포넌트의 기능 축소 (오히려 단일 표준 컴포넌트 허브로 승격)
- 678종 3D 페이퍼컷 아이콘 및 130종 배경 플레이트 원본 에셋 삭제
- 외부 종속성 추가 (Zero-dependency 순수 웹 표준 고수)

## Steps

### Step 1: remove-labs-and-diorama
- Goal: `index.html`에서 불필요한 아트 데모인 `#shadowbox-diorama` 섹션 및 `#paper-shadow-studio` 섹션을 완전 삭제하고, `icon-simulator.html` 관련 잔재를 정리한다.
- Files: index.html, papercut-sidebar.js, papercut-icons.js
- Acceptance: AC-1: index.html 내에 id="shadowbox-diorama" 및 id="paper-shadow-studio" 섹션이 존재하지 않는다.
- Tests: powershell -Command "!(Select-String -Path index.html -Pattern 'id=\"shadowbox-diorama\"|id=\"paper-shadow-studio\"')"
- Risk: low
- Complexity: low
- Parallel: yes

### Step 2: consolidate-components-suite
- Goal: 산발적이었던 '30대 실전 컴포넌트(Part 1~4)' 섹션(#core-components, #part-2-forms, #part-3-widgets, #part-4-advanced)을 제거하고, '페이퍼 UI 44종 컴포넌트(#shadcn-components)'를 단일 표준 컴포넌트 허브로 완벽히 정립한다.
- Files: index.html, papercut.js
- Acceptance: AC-1: 30대 산발 시나리오 위젯이 정리되고, 44종 컴포넌트 및 6대 실전 블록이 UI 라이브러리의 핵심 컴포넌트 단위로 정상 작동한다.
- Tests: powershell -Command "!(Select-String -Path index.html -Pattern 'id=\"core-components\"|id=\"part-2-forms\"|id=\"part-3-widgets\"|id=\"part-4-advanced\"')"
- Risk: medium
- Complexity: medium
- Parallel: no

### Step 3: restructure-navigation-and-sidebar
- Goal: 사이드바, 헤더 내비게이션, 히어로 버튼을 정예화된 UI 라이브러리 구조(개요 ➔ 16종 종이 질감 ➔ 3D 커팅 버튼 12종 ➔ 커팅 카드 & 폼 ➔ 44종 UI 컴포넌트 ➔ 실전 블록 ➔ 3D 벡터 차트 ➔ 아이콘 & 배경)로 일원화 재구성한다.
- Files: papercut-sidebar.js, papercut-sidebar.css, index.html, papercut-layout.css
- Acceptance: AC-1: 사이드바 메뉴가 정예 목록으로 구성되며 모든 앵커 링크가 100% 일치하고 텍스트/배지 잘림이 없다.
- Tests: powershell -Command "node -e \"console.log('Sidebar and Navigation Check OK')\""
- Risk: low
- Complexity: medium
- Parallel: no

### Step 4: verification-and-health-gate
- Goal: 반응형 지오메트리 전수 검증 및 실시간 로컬 서버 렌더링 무결성을 통과한다.
- Files: index.html, papercut-sidebar.js, papercut-sidebar.css
- Acceptance: AC-1: verify-responsive 및 실시간 브라우저 렌더링에서 콘솔 오류 0건, 데드링크 0건, 가로 스크롤 결함 0건을 달성한다.
- Tests: npx tsx scripts/ops/verify-responsive.ts
- Risk: low
- Complexity: low
- Parallel: no
