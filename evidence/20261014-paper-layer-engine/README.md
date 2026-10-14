# 증거: paper-layer-engine (Step 2)

## WHAT WAS TESTED
- `node scripts/ops/verify-overflow.mjs --fixtures --only=paper` (280/360/480px), 전체 `--fixtures`, `--page`(320~1920px).
- `tests/paper-layer/swatches.html`: 8 변형 x 7 톤 + 상태(기본/hover 강제/focus/체크·열림/비활성)를 375px, 1280px로 캡처(`swatches-375.png`, `swatches-1280.png`), 3배 확대(`zoom-*.png`)로 칼선 버튼과 비교.
- 크기 변경: 필드 폭을 181px -> 280px -> 900px로 바꾸고 `path d`와 svg width를 읽음.
- JS 비활성 컨텍스트(`nojs.png`), 동적 삽입 요소 수화, 콘솔 오류, 필터 id 중복.
- 성능: index.html에 `data-pc-paper` 요소 104개를 주입하고 PerformanceObserver longtask 기록.

## WHAT WAS OBSERVED
- fixtures paper 280/360/480 offenders=0, 전체 fixtures PASS, --page PASS(8개 폭 전부).
- 견본 96개 전부 `svg.pc-ui-paper-layer` 주입 및 `is-paper-hydrated`, `#pc-paper-defs` 1개, 엔진 필터 id(`pc-paper-sh*`) 중복 0. (index.html의 기존 `ps-*` 아이콘 id 중복은 엔진과 무관한 기존 상태.)
- 경로 갱신: 폭 181 -> 280 -> 900에서 윗변 H 값이 169.25 -> 268.06 -> 888.06으로 바뀌고 모서리 반지름은 항상 10px로 유지(왜곡 없음).
- 성능: 주입한 104개(스크롤 밖 포함) 수화 후 longtask 0건, 동기 `hydrate()` 호출 0.3ms(그리기는 ResizeObserver 콜백에서 같은 프레임). index.html 기준선 longtask 1건(227ms)은 엔진과 무관(data-pc-paper 요소 0개 상태에서 발생).
- JS 끔: 레이어 0개, CSS 모양 그대로(`nojs.png`).
- 콘솔 오류 0(favicon 404 제외).

## WHY IT IS ENOUGH
- AC-1(주입·재그리기), AC-2(defs 1개), AC-3(견본 캡처, paper 넘침 0), AC-4(longtask, JS 끔)을 각각 직접 측정으로 확인했다. 시각 품질은 칼선 버튼과 3배 확대로 나란히 비교했다.

## WHAT WAS OMITTED
- 실제 index.html 컴포넌트에는 아직 `data-pc-paper`가 없다(Step 3~5 범위). 키보드 포커스 링은 sheet에서만 캡처로 확인, 나머지는 같은 CSS 규칙.
- Firefox/Safari 미검증(Chrome만). `<input>`/`<select>` 같은 void 요소에는 직접 붙일 수 없어 경고만 낸다(감싸는 요소 사용).
