---
plan: pc-components-paper-rebrand
status: done
risk: medium
owner: neohum
---
# Plan: PC 컴포넌트 명칭 정리와 페이퍼 레이어 재구현

## Intent
`#shadcn-components` 섹션의 컴포넌트 이름에서 shadcn을 걷어내고 `pc-ui` 체계로 바꾼다. shadcn/ui 참고 사실은 MIT 고지와 함께 명시한다.
버튼과 아이콘을 뺀 모든 컴포넌트(배지, 슬라이더, 토글, 입력, 셀렉트, 콤보박스, OTP, 체크박스, 라디오, 스위치, 아코디언, 탭, 브레드크럼, 페이지네이션, 진행 막대, 메뉴바, 내비게이션 메뉴, 드롭다운, 컨텍스트 메뉴, 팝오버, 대화상자, 시트, 드로어, 알림, 토스트, 테이블, 캘린더, 카드, 캐러셀, 툴팁, 리사이저블)는 칼선 버튼과 같은 방식으로 다시 그린다. 그 방식이란 인라인 SVG 색지 레이어와 2단 번트 엄버 그림자에 3D 풀컬러 아이콘을 얹는 것이다.

## Decisions (2026-10-14 사용자 확정)
- **라이선스:** shadcn/ui는 MIT(`Copyright (c) 2023 shadcn`)다. 참고 사실을 명시하면 쓸 수 있다. 코드 일부가 옮겨졌을 가능성까지 덮도록 `THIRD_PARTY_NOTICES.md`에 저작권 고지와 MIT 전문을 넣는다. 섹션의 "참고: shadcn/ui" 문구는 출처 표기이므로 **이름을 바꾸지 않고 남긴다.**
- **명칭 규칙:** `pc-shadcn-*`와 `pc-sd-*`는 모두 `pc-ui-*`로 바꾼다. 나머지는 다음과 같이 바꾼다.
  - 파일: `papercut-shadcn.css/js` → `papercut-ui.css/js`
  - JS 전역: `PaperCutShadcnUI`, `PaperCutShadcn` → `PaperCutUI`
  - 섹션 id: `#shadcn-components` → `#pc-components`. `shadcn-blocks-charts`와 `shadcn-charts-section`은 `pc-blocks-charts`와 `pc-charts-section`으로 바꾼다.
  - 기존 `.pc-card`, `.pc-badge` 등과 충돌하지 않는다. `pc-ui-` 접두사는 현재 `pc-ui-stack-scene` 1건만 쓰고 있어 겹치지 않는다.
- **표현 방식:** 런타임 페이퍼 레이어 엔진을 쓴다. 컴포넌트는 폭이 유동적이어서 버튼처럼 고정 viewBox를 쓰면 반응형 계약(280px 이상 넘침 0)이 깨진다. 그래서 요소의 실제 px 크기로 SVG를 그리는 엔진을 둔다.
  - 엔진은 OTP 슬롯에 이미 쓰고 있는 `otp-bg-svg-layer` 주입 방식을 일반화한 것이다.
  - JS가 없으면 기존 CSS 모양이 그대로 남는다(점진적 향상).
- **범위 제외:** `plans/`와 `evidence/`의 과거 기록, 그리고 AGENTS.md의 하네스 계약 문구("Shadcn 스타일 단일 컴포넌트 복사-붙여넣기"는 일반 개념 설명)는 바꾸지 않는다.

## Paper Layer API 계약 (Step 2가 구현하고 Step 3~5가 사용)
- **마크업:** `data-pc-paper="<variant>"`, 선택적으로 `data-pc-tone="<tone>"`.
  - variant: `sheet`(카드·패널·대화상자), `field`(입력·셀렉트·텍스트영역), `pill`(배지·토글·칩), `tab`(탭·폴더 탭), `ticket`(알림·토스트), `track`(슬라이더·진행 막대·스위치 트랙), `knob`(슬라이더 손잡이·스위치 손잡이·라디오·체크박스), `menu`(드롭다운·메뉴 패널)
  - tone: `mint | peach | lavender | buttercup | sky | rose | cream`. 기본값은 cream이다.
- **동작:** 엔진이 요소의 첫 자식으로 `<svg class="pc-ui-paper-layer" aria-hidden="true" focusable="false">`를 넣는다. 그리고 ResizeObserver로 요소의 px 크기에 맞춰 경로를 다시 그린다.
  - 레이어는 세 장이다: 아래쪽 받침 색지(1.5~3px 어긋남), 위쪽 색지(0.88px 흰 림), variant별 장식(점선 천공, 노치, 접힌 모서리 등).
  - 그림자 필터는 칼선 버튼과 같은 2단 번트 엄버(#2E1E14, 불투명도 0.48 / 0.25)에 흰 하이라이트 한 겹이다. 문서 전체에서 공유 `<defs>` 하나만 쓴다(필터 id 중복 금지).
  - 상태 클래스는 `is-paper-hydrated`이고, 이 클래스가 붙으면 CSS의 배경·테두리·box-shadow를 끈다. 엔진은 `:hover`, `:focus-visible`, `[data-state=open|checked|active]`, `[aria-selected=true]`, `:disabled`에 따라 색과 오프셋을 바꾼다. 이 변경은 CSS 변수 `--pc-paper-fill`, `--pc-paper-base`, `--pc-paper-rim`으로 SVG에 전달한다.
- **성능과 접근성:** IntersectionObserver(rootMargin 200px)로 화면 근처에 온 요소만 수화하고, 초기 메인 스레드 작업은 10ms 미만이어야 한다. `:focus-visible` 링은 SVG 위에 그대로 보여야 한다. `prefers-reduced-motion`에서는 전환 효과를 끈다.
- **공개 API:** `PaperCutUI.paper.hydrate(root?)`, `PaperCutUI.paper.refresh(el)`. 동적으로 렌더링되는 캘린더나 토스트는 렌더링 후 `hydrate`를 호출한다.
- **아이콘:** 컴포넌트 안의 글자 기호(▾, ✓, ×, ●, 화살표)와 단색 아이콘은 `data-icon="<id>"` 3D 컬러 아이콘으로 바꾼다. id는 `papercut-icons.js`의 `"id"`에 실제로 있는 것만 쓴다.

## Non-goals
- 칼선 버튼(`.pc-svg-kirigami-btn`)과 아이콘 시스템 자체의 변경
- 컴포넌트의 동작, 키보드 조작, ARIA 의미 변경
- 데모 페이지의 다른 섹션(블록, 차트, 리더 등)을 페이퍼 레이어로 바꾸는 일. 이름 변경만 적용한다
- 새 런타임 의존성 추가

## Steps

### Step 1: pc-rename-and-attribution
- Goal: shadcn 명칭을 `pc-ui` 체계로 일괄 변경하고, shadcn/ui 참고 고지를 남긴다.
- Files: papercut-shadcn.css→papercut-ui.css, papercut-shadcn.js→papercut-ui.js, index.html, papercut-sidebar.js, papercut-modals.js, papercut-blocks-charts.js, papercut-blocks-charts.css, papercut-icons.js, tests/responsive/component-fixtures.html, scratch/*.js, README.md, CUSTOMIZATION.md, DESIGN_SYSTEM.md, lat.md, THIRD_PARTY_NOTICES.md
- Acceptance:
  - AC-1: `plans/`, `evidence/`, `node_modules/`, AGENTS.md, THIRD_PARTY_NOTICES.md를 뺀 저장소에서 `grep -ri shadcn` 결과가 출처 표기 문구("참고: shadcn/ui")뿐이다.
  - AC-2: `THIRD_PARTY_NOTICES.md`에 shadcn/ui 저작권 고지와 MIT 전문이 있다. README에 이 파일을 가리키는 링크가 있다.
  - AC-3: 이름을 바꾼 뒤 `#pc-components`의 필터 탭, 토스트, 아코디언, 캘린더, 대화상자가 콘솔 오류 없이 동작한다. 사이드바 링크도 새 id로 이동한다.
  - AC-4: `verify-overflow.mjs --page`와 `--fixtures`가 통과한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures
- Risk: medium
- Complexity: medium

### Step 2: paper-layer-engine
- Goal: 위 API 계약대로 런타임 페이퍼 레이어 엔진을 만든다.
- Files: papercut-paper-layer.js, papercut-paper-layer.css, index.html (link·script 태그만), tests/responsive/component-fixtures.html (paper 그룹 추가)
- Acceptance:
  - AC-1: `data-pc-paper` 요소가 화면에 들어오면 `svg.pc-ui-paper-layer`가 주입된다. 요소 크기가 바뀌면 SVG 경로가 새 px 크기로 다시 그려진다.
  - AC-2: 문서 전체에서 그림자 필터 `<defs>`가 하나뿐이고, 필터 id가 중복되지 않는다.
  - AC-3: 8개 variant × 7개 tone 견본 페이지를 375px와 1280px로 캡처해 스크린샷 증거를 남긴다. 픽스처 `paper` 그룹이 280/360/480px에서 넘침 0이다.
  - AC-4: 초기 수화의 long task가 10ms 미만이다(Performance API 측정값을 증거에 남김). JS를 끄면 기존 CSS 모양이 그대로 보인다.
- Tests: node scripts/ops/verify-overflow.mjs --fixtures --only=paper
- Risk: medium
- Complexity: high

### Step 3: paper-forms
- Goal: Card 1~3의 버튼을 뺀 컴포넌트를 페이퍼 레이어와 3D 아이콘으로 바꾼다. 대상은 배지·슬라이더·토글·토글 그룹, 입력·셀렉트·콤보박스·OTP, 체크박스·라디오·스위치다.
- Files: index.html (#pc-components의 Card 1~3), papercut-ui.css, papercut-ui.js
- Acceptance:
  - AC-1: 대상 컴포넌트 전부에 `data-pc-paper`가 붙고, 수화 뒤 CSS 상자 대신 SVG 색지로 렌더링된다.
  - AC-2: 체크 표시, 셀렉트 화살표, 라디오 점 같은 기호가 3D 컬러 아이콘이다.
  - AC-3: 키보드 조작(Tab, Space, 방향키)과 `:focus-visible` 링이 유지된다. 체크·선택·켜짐 상태가 색지 색이나 오프셋으로 구분된다.
  - AC-4: 375/768/1280px 스크린샷 증거가 있고 `--page`가 통과한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --only=form,badge
- Depends on: paper-layer-engine
- Risk: medium
- Complexity: high

### Step 4: paper-navigation
- Goal: Card 4·6·7을 페이퍼 레이어와 3D 아이콘으로 바꾼다. 대상은 아코디언·콜랩서블, 탭·브레드크럼·페이지네이션·진행 막대, 메뉴바·내비게이션 메뉴다.
- Files: index.html (#pc-components의 Card 4, 6, 7), papercut-ui.css, papercut-ui.js
- Acceptance:
  - AC-1: 대상 컴포넌트 전부가 `data-pc-paper`로 렌더링된다. 활성 탭과 열린 아코디언 항목이 색지 상태로 구분된다.
  - AC-2: 펼침 화살표, 브레드크럼 구분자, 페이지 이동 화살표가 3D 컬러 아이콘이다.
  - AC-3: `aria-expanded`와 `aria-selected` 동작, 키보드 조작이 유지된다.
  - AC-4: 375/768/1280px 스크린샷 증거가 있고 `--page`가 통과한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --only=tabs
- Depends on: paper-layer-engine
- Parallel: yes
- Risk: medium
- Complexity: high

### Step 5: paper-overlays-data
- Goal: Card 5·8·9·10·11을 페이퍼 레이어와 3D 아이콘으로 바꾼다. 대상은 대화상자·시트·드로어·팝오버, 드롭다운·컨텍스트 메뉴, 알림·알림 대화상자·토스트, 데이터 테이블·캘린더, 카드·캐러셀·툴팁·리사이저블이다.
- Files: index.html (#pc-components의 Card 5, 8, 9, 10, 11 및 해당 오버레이 마크업), papercut-ui.css, papercut-ui.js
- Acceptance:
  - AC-1: 정적 컴포넌트와 열린 오버레이 패널이 모두 페이퍼 레이어로 렌더링된다. 동적으로 생성되는 캘린더 날짜와 토스트는 생성 직후 수화된다.
  - AC-2: 닫기(×), 메뉴 화살표, 알림 종류 기호가 3D 컬러 아이콘이다.
  - AC-3: 포커스 가두기, Esc 닫기, 포커스 복귀 같은 오버레이 동작이 유지된다.
  - AC-4: 375/768/1280px 스크린샷 증거(오버레이를 연 상태 포함)가 있고 `--page`와 `--fixtures --only=modal,toast,table,card`가 통과한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --only=modal,toast,table,card
- Depends on: paper-layer-engine
- Parallel: yes
- Risk: medium
- Complexity: high

### Step 6: verification-and-docs
- Goal: 통합 검증을 하고 문서에 페이퍼 레이어 사용법을 반영한다.
- Files: README.md, CUSTOMIZATION.md, docs/responsive.md, DESIGN_SYSTEM.md
- Acceptance:
  - AC-1: 전체 게이트가 통과한다(`verify-overflow --page`, `--fixtures`, `verify-responsive`). 콘솔 오류는 0건이다.
  - AC-2: CUSTOMIZATION.md에 `data-pc-paper` variant·tone 표와 `PaperCutUI.paper.hydrate` 사용법이 있다.
  - AC-3: 버튼과 아이콘을 뺀 `#pc-components`의 모든 컴포넌트에 `data-pc-paper`가 있다. 이는 DOM 전수 검사 스크립트 결과로 증명한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures && node scripts/ops/verify-responsive.ts
- Depends on: paper-forms, paper-navigation, paper-overlays-data
- Risk: low
- Complexity: low

## Verification
- **Tier 1 (정적 검사):** shadcn 잔존 검사(출처 표기 제외), `data-pc-paper` 전수 검사, 필터 id 중복 검사
- **Tier 2 (테스트):** `verify-overflow.mjs --page / --fixtures`(paper 그룹 포함), `verify-responsive.ts`
- **Tier 3 (실행·시각 검증):** 로컬 서버에서 375/768/1280px 스크린샷, 오버레이를 연 상태 캡처, 콘솔 오류 0건, 초기 수화 long task 측정

## Reviewer topology
builder=서브에이전트(병렬 3레인, Step 3~5), reviewer=claude 메인 세션. 단, 같은 모델 계열이므로 하네스 기준의 독립 provider 리뷰는 PR 단계에서 별도로 받는다. challenge=on
