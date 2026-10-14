---
plan: responsive-library-readiness
status: done
risk: medium
owner: neohum
---
# Plan: PaperCut UI 반응형 라이브러리 준비

## Intent
PaperCut UI 컴포넌트를 데모 페이지(`index.html`) 밖으로 복사해 **어떤 폭의 컨테이너(최소 280px)에 넣어도** 화면이나 부모 박스를 벗어나지 않게 한다. 이 보장은 실제 브라우저 테스트로 증명하고, 반응형 규칙(브레이크포인트·컨테이너 쿼리)은 문서화된 공개 계약으로 만든다.

## Background (2026-10-14 진단)
- 데모 페이지는 320~1920px에서 가로 넘침 0을 달성했다. 하지만 수정 대부분이 `.pc-site-main` 범위나 `[style*="display: flex"]` 속성 선택자로 데모 전용으로 걸려 있다.
- `papercut.css`에 `min-width: max-content / fit-content`가 7곳 있다. `papercut-blocks-charts.css`에 3곳, `papercut-layout.css`에 2곳이 더 있다. 이 때문에 버튼·배지가 줄어들지 못한다.
- 컨테이너 쿼리(`@container`)가 0개다. 모든 반응형이 뷰포트 기준이다. 히어로(1279px)와 푸터의 접힘 기준은 "뷰포트 - 사이드바 295px"를 계산해 맞춘 값이다.
- `@media` 브레이크포인트가 18가지 값으로 흩어져 있고, 공통 기준이 없다.
- `index.html`에 인라인 `style` 836개가 있다. 그중 200px 이상 고정 폭이 26개다. 복사-붙여넣기 예제에 고정 레이아웃이 딸려 간다.
- `verify-responsive.ts`는 브라우저 없이 정적 기하 계산만 한다. 컴포넌트를 좁은 컨테이너에 넣어 보는 테스트는 없다.

## Non-goals
- 컴포넌트의 시각 디자인(색지 팔레트, 2-Tier 그림자, 칼선 림) 변경
- 런타임 JS 의존성 추가 — 라이브러리는 제로 런타임 Vanilla로 유지한다. 테스트용 devDependency만 허용한다
- 사이드바·헤더의 정보 구조 재편 (`ui-library-streamline` 계획의 범위)
- 구형 섹션 삭제와 ESM 번들링 (`2026-10-14-idea-audit-and-master-roadmap` 계획의 범위)
- 678종 아이콘·130종 배경 플레이트 에셋 수정

## Decisions
- **실측 도구:** `playwright-core`를 devDependency로 쓰고 시스템 Chrome(`channel: "chrome"`)을 사용한다. 브라우저 내려받기는 없다. CDP를 직접 구현하는 것보다 유지보수 비용이 낮다.
- **브레이크포인트 계약:** `sm 480 / md 768 / lg 1024 / xl 1280` 네 단계로 정한다. CSS 변수는 `@media` 조건 안에서 쓸 수 없다. 그래서 값은 문서로 고정하고, 컴포넌트 내부 접힘은 컨테이너 쿼리로 처리해 뷰포트 값에 의존하지 않게 한다.
- **`package.json` 조정:** roadmap 계획 Step 3도 `package.json`을 만든다. 먼저 머지되는 쪽이 파일을 만들고, 나중 쪽은 기존 파일에 항목만 추가한다.

## Steps

### Step 1: overflow-test-harness
- Goal: 실제 Chrome으로 데모 페이지와 컴포넌트 픽스처의 넘침을 재는 테스트를 만들고, 현재 기준선을 기록한다.
- Files: package.json, scripts/ops/verify-overflow.mjs, tests/responsive/component-fixtures.html, evidence/
- Acceptance:
  - AC-1: `node scripts/ops/verify-overflow.mjs --page` 실행 결과가 다음과 같다. 대상 폭은 320/360/375/414/768/1024/1280/1920px다. 각 폭에서 페이지를 끝까지 스크롤해 지연 수화된 부분까지 띄운 뒤, `documentElement.scrollWidth`와 `.pc-content-wrapper`의 `scrollWidth`가 각각 `clientWidth`와 같다. 이를 JSON 리포트로 남기고 exit 0으로 끝난다.
  - AC-2: `--fixtures` 모드는 버튼·SVG 칼선 버튼·배지·카드·폼·탭·테이블·모달·토스트를 280/360/480px 컨테이너에 각각 넣는다. 그리고 부모 박스를 벗어난 요소 목록을 컴포넌트별로 출력한다. 이 단계에서는 실패가 있어도 exit 0으로 끝나고, 기준선을 evidence에 저장한다.
  - AC-3: 픽스처 페이지는 `logo.svg`와 `favicon.svg`를 그대로 재사용해 참조한다. 375/768/1280px 스크린샷 3장을 evidence에 캡처한다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --report-only
- Risk: low
- Complexity: medium

### Step 2: component-base-containment
- Goal: 넘침 방지를 데모 전용 범위에서 컴포넌트 기본 스타일로 옮겨, 컴포넌트가 어디에 놓여도 부모 폭 안으로 줄어들게 한다.
- Files: papercut.css, papercut-layout.css, papercut-shadcn.css, papercut-blocks-charts.css, papercut-modals.css
- Acceptance:
  - AC-1: 라이브러리 CSS에서 `min-width: max-content`와 `fit-content`가 0건이다. 버튼 계열(`.pc-btn`, `.pc-svg-kirigami-btn`, `.pc-toggle-btn`, `.pc-filter-btn`)은 `min-width: 0; max-width: 100%`를 기본값으로 가진다. 단, 의도적인 가로 스크롤 스트립(`.pc-filter-pills-row`, `.pc-icon-category-pills`, `.pc-bg-category-pills`) 안에서는 `flex-shrink: 0`을 유지한다.
  - AC-2: 상한 없는 고정 폭 요소(호버 카드 280px, `papercut-shadcn.css`의 260px 요소)에 `max-width: 100%`, 또는 `calc(100vw - 32px)`가 붙는다.
  - AC-3: `papercut-layout.css`의 "5. Viewport Containment" 블록에서 `.pc-site-main` 범위로 한정된 넘침 규칙이 제거되거나 컴포넌트 기본 스타일로 옮겨진다.
  - AC-4: `--fixtures` 모드에서 버튼·배지·카드·폼 픽스처가 280px 컨테이너에서 넘침 0건이다. `--page` 모드는 계속 통과한다.
  - AC-5: 375/768/1280px 스크린샷에서 버튼 글자 잘림이나 겹침이 없다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --only=button,badge,card,form
- Risk: medium
- Complexity: medium

### Step 3: container-queries
- Goal: 카드·그리드·폼·푸터·히어로가 뷰포트가 아니라 자기가 놓인 컨테이너 폭에 반응하게 한다.
- Files: papercut.css, papercut-layout.css, papercut-shadcn.css, papercut-blocks-charts.css, index.html
- Acceptance:
  - AC-1: 구조 컴포넌트(`.pc-card`, `.pc-sd-card`, `.examples-grid`, `.pc-footer-top-grid`, `.hero-content`, 폼 그룹)가 `container-type: inline-size`를 선언한다. 내부 열 접힘은 `@container` 규칙으로 처리한다.
  - AC-2: 뷰포트에서 사이드바 폭을 뺀 계산에 기대던 미디어 쿼리 두 개가 `@container` 규칙으로 바뀐다. 대상은 히어로의 `@media (max-width: 1279px)`와 푸터의 `@media (max-width: 1279px)`다.
  - AC-3: 같은 카드 픽스처가 280px 컨테이너에서는 한 열, 720px 컨테이너에서는 다단으로 렌더링된다. `--fixtures` 리포트에 두 폭의 열 수가 기록된다.
  - AC-4: `--page`와 `--fixtures --only=button,badge,card,form,grid` 모두 넘침 0건이다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures --only=button,badge,card,form,grid
- Risk: medium
- Complexity: medium

### Step 4: breakpoint-normalization
- Goal: 흩어진 18개 `@media` 값을 문서화된 네 단계 계약(480/768/1024/1280)으로 정리한다.
- Files: papercut.css, papercut-layout.css, papercut-sidebar.css, papercut-blocks-charts.css, papercut-reader.css, papercut-icon-sim.css, papercut-shadow-studio.css, docs/responsive.md
- Acceptance:
  - AC-1: `grep -ohE "@media[^{]*" papercut*.css`에 나오는 폭 값이 {479, 480, 767, 768, 1023, 1024, 1279, 1280}과 `prefers-*`, `print`뿐이다.
  - AC-2: `docs/responsive.md`에 다음이 표로 정리된다: 네 단계 브레이크포인트, 컨테이너 쿼리 기준 폭, 컴포넌트별 접힘 동작.
  - AC-3: `--page` 모드가 8개 폭 모두에서 통과한다. 정리 전과 후의 768/1024px 스크린샷을 evidence에 나란히 남겨 의도하지 않은 레이아웃 변화가 없음을 보인다.
- Tests: node scripts/ops/verify-overflow.mjs --page
- Risk: medium
- Complexity: low

### Step 5: demo-inline-to-utilities
- Goal: 데모의 인라인 레이아웃 스타일을 공개 유틸리티 클래스로 바꿔, 복사한 예제가 같은 반응형을 갖게 한다.
- Files: index.html, papercut-layout.css, papercut.css
- Acceptance:
  - AC-1: `papercut-layout.css`에 유틸리티 클래스 `.pc-grid-auto`, `.pc-row`, `.pc-row-wrap`, `.pc-stack`가 생긴다. `.pc-grid-auto`는 `--pc-grid-min` 변수로 최소 열 폭을 오버라이드할 수 있다.
  - AC-2: `index.html`의 인라인 `display: grid` / `display: flex` 레이아웃이 유틸리티 클래스로 바뀐다. 200px 이상 인라인 고정 폭은 0건이다.
  - AC-3: `papercut-layout.css`에서 `[style*="display: flex"]`, `[style*="display: grid"]` 속성 선택자 해킹이 0건이다.
  - AC-4: `--page` 모드가 통과한다. 375/768/1280px 스크린샷을 evidence에 남긴다.
- Tests: node scripts/ops/verify-overflow.mjs --page
- Risk: medium
- Complexity: high

### Step 6: responsive-docs-and-gate
- Goal: 반응형 계약을 사용자 문서에 싣고, 실측 테스트를 품질 게이트에 연결한다.
- Files: README.md, CUSTOMIZATION.md, docs/responsive.md, .harness-quality.json
- Acceptance:
  - AC-1: `README.md`와 `CUSTOMIZATION.md`에 "반응형" 절이 생긴다. 내용은 브레이크포인트 계약, 컨테이너 쿼리 사용법, `--pc-grid-min` 오버라이드 예시, 최소 지원 폭 280px이다.
  - AC-2: `.harness-quality.json`의 `responsive` 명령이 `verify-overflow.mjs --page`와 `--fixtures`를 함께 실행한다. 기존 `verify-responsive.ts`는 보조 검사로 유지한다.
  - AC-3: 전체 픽스처(`--fixtures`, `--report-only` 없음)가 280/360/480px 컨테이너에서 넘침 0건으로 exit 0이다.
- Tests: node scripts/ops/verify-overflow.mjs --page && node scripts/ops/verify-overflow.mjs --fixtures && node scripts/ops/verify-responsive.ts
- Risk: low
- Complexity: low

## Verification
- **Tier 1 (정적 검사):** `min-width: max-content/fit-content` 0건, `@media` 폭 값이 계약 집합 안에 있음, `.pc-site-main` 범위나 `[style*=…]` 속성 선택자로 건 넘침 규칙 0건
- **Tier 2 (테스트):** `verify-overflow.mjs --page`(8개 폭)와 `--fixtures`(280/360/480px 컨테이너 × 컴포넌트), `verify-responsive.ts` 통과
- **Tier 3 (실행·시각 검증):** `node scripts/ops/serve.ts`로 로컬에서 띄운 뒤 375/768/1280px 실화면 스크린샷을 남긴다. 단계별 evidence 디렉터리(`evidence/날짜-카드명/`)에 리포트 JSON과 함께 저장한다.

## Reviewer topology
builder=codex, reviewer=claude(독립 프로바이더), challenge=on (Step 2·3·5는 공개 CSS 동작을 바꾸므로 교차 모델 챌린지를 필수로 돌린다)
