# PaperCut UI 반응형 계약

PaperCut UI 컴포넌트는 **폭 280px 이상의 어떤 컨테이너에 넣어도** 부모 박스나 화면을 벗어나지 않는다.
이 문서는 그 보장을 지키는 규칙과 검사 방법을 적는다.

## 1. 브레이크포인트 (뷰포트 기준)

뷰포트 `@media`는 페이지 골격(헤더, 사이드바, 본문 여백)에만 쓰고, 아래 네 단계 값만 허용한다.

| 이름 | 이하 (`max-width`) | 이상 (`min-width`) | 쓰임 |
| --- | --- | --- | --- |
| sm | 479px | 480px | 소형 폰. 헤더 로고 글자 숨김, 큰 버튼 줄바꿈 |
| md | 767px | 768px | 사이드바가 고정(≥768) ↔ 오프캔버스 서랍(<768)으로 바뀌는 경계 |
| lg | 1023px | 1024px | 태블릿 가로. 헤더 가운데 내비게이션 숨김 |
| xl | 1279px | 1280px | 노트북 이상 |

CSS 변수는 `@media` 조건 안에서 쓸 수 없다. 그래서 위 값은 변수가 아닌 고정 계약으로 둔다.
컴포넌트 안쪽의 열 접힘은 뷰포트가 아니라 아래 컨테이너 쿼리로 처리하므로, 이 값들에 의존하지 않는다.

## 2. 컨테이너 쿼리 (놓인 자리 기준)

| 컨테이너 | 선언 위치 | 접힘 동작 |
| --- | --- | --- |
| `pc-main` (`.pc-site-main`) | papercut-layout.css | 히어로 여백: ≤767 / ≤479에서 축소 |
| `hero` (`.hero-banner`) | index.html | ≥800px에서만 두 열, 그 아래는 한 열 |
| `examples` (`.examples-grid`) | index.html | 예제 카드 그리드 |
| `pc-footer` (`.pc-footer-inner`) | papercut-layout.css | ≤899 자동 맞춤 열, ≤519 한 열 |
| `.pc-block-container`, `.pc-block-admin`, `.pc-block-ecommerce`, `.pc-block-pricing` | papercut-blocks-charts.css | 지표 그리드 4→2→1열, 상품 그리드 3→2→1열, 요금표·관리자 분할 한 열 |
| `.pc-reader-split` | papercut-reader.css | ≤719 한 열 |
| `.pc-shadow-studio` | papercut-shadow-studio.css | ≤767 한 열 |

**카드 자체(`.pc-card`, `.pc-ui-card`)는 컨테이너로 선언하지 않는다.** `container-type: inline-size`를 걸면
카드가 내용 폭에 기여하지 않게 되어, flex 항목이나 `inline-block` 안에서 패딩만 남기고 무너진다.
카드 안쪽을 컨테이너 기준으로 접고 싶다면 카드를 감싸는 블록 요소에 직접 선언한다.

```html
<div style="container-type: inline-size;">
  <div class="pc-card">…</div>
</div>
```

## 3. 레이아웃 유틸리티

데모의 인라인 레이아웃 대신 아래 클래스를 쓴다. 복사한 예제도 같은 반응형을 갖는다.

| 클래스 | 동작 | 조절 변수 |
| --- | --- | --- |
| `.pc-grid-auto` | 컨테이너 폭에 맞춰 열 수가 자동으로 정해지는 그리드. 최소 열 폭보다 좁으면 한 열 | `--pc-grid-min` (기본 280px), `--pc-grid-gap` (기본 20px) |
| `.pc-grid-auto.pc-grid-fill` | 빈 트랙을 남겨 항목 폭을 일정하게 유지 | 위와 같음 |
| `.pc-grid-cols` | 고정 열 수 그리드. 항목은 줄어들 수 있다 | `--pc-cols` |
| `.pc-row` | 가로 줄, 줄바꿈 없음 | `--pc-gap` |
| `.pc-row-wrap` | 가로 줄, 좁아지면 다음 줄로 넘김 | `--pc-gap` |
| `.pc-row-scroll` | 줄바꿈 없는 가로 스와이프 스트립 (필터 칩 등) | `--pc-gap` |
| `.pc-stack` | 세로 쌓기 | `--pc-gap` |

```html
<div class="pc-grid-auto" style="--pc-grid-min: 320px; --pc-grid-gap: 24px;">
  <div class="pc-card">…</div>
  <div class="pc-card">…</div>
</div>
```

## 4. 컴포넌트 기본 규칙

- 버튼·배지(`.pc-btn`, `.pc-svg-kirigami-btn`, `.pc-toggle-btn`, `.pc-badge`, `.pc-tag`)는 `min-width: 0; max-width: 100%`가 기본이다.
  좁은 자리에서는 어절 단위(`word-break: keep-all`)로 줄바꿈된다. `min-width: max-content`는 쓰지 않는다.
- 고정 폭 팝오버·호버 카드·메뉴는 `max-width: calc(100vw - 32px)`로 상한을 둔다. 모달 대화상자는 `max-width: min(calc(100vw - 32px), 100%)`.
- 가로 스크롤 스트립(`.pc-row-scroll`, `.pc-icon-category-pills`, `.pc-bg-category-pills`, `.pc-filter-pills-row`) 안의 항목만 의도적으로 줄어들지 않는다.

## 5. 검사

```bash
npm install                                          # devDependency: playwright-core (시스템 Chrome 사용)
node scripts/ops/verify-overflow.mjs --page          # index.html을 320~1920px 8개 폭에서 실측
node scripts/ops/verify-overflow.mjs --fixtures      # 컴포넌트를 280/360/480px 컨테이너에 넣어 실측 + 카드 무너짐 검사
node scripts/ops/verify-overflow.mjs --fixtures --only=button,card --json out.json --screenshots shots/
```

픽스처는 `tests/responsive/component-fixtures.html`에 있다. 새 컴포넌트를 추가하면
`<section class="fx-group" data-fixture="이름">` 안의 `<template>`에 실제 마크업을 넣는다.
품질 게이트(`.harness-quality.json`의 `responsive`)가 두 모드와 `verify-responsive.ts`를 함께 돌린다.
