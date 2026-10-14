# overflow-test-harness 증거 (2026-10-14)

## WHAT WAS TESTED
- `node scripts/ops/verify-overflow.mjs --page`: 실제 Chrome(playwright-core, `channel: chrome`)으로 `/index.html`을 320/360/375/414/768/1024/1280/1920px(높이 900)에서 로드, 700px 단위 스크롤로 지연 수화를 띄운 뒤 `documentElement`와 `.pc-content-wrapper`의 `scrollWidth <= clientWidth`(+1px)를 검사하고 뿌리 원인 요소를 수집.
- `node scripts/ops/verify-overflow.mjs --fixtures --report-only`: `tests/responsive/component-fixtures.html`의 button/badge/card/form/tabs/table/modal/toast/grid를 280/360/480px(card, grid는 720px 추가) 컨테이너에 넣고 컨테이너 밖으로 나간 요소(박스 및 글자 흐름)를 수집, card/grid의 열 수 기록.
- 탐지기 자가 검증: 일부러 넘치는 스크래치 HTML(`--url`)에서 넓은 박스, 글자 넘침, 경계 밖 overflow:hidden 조상 아래 요소가 잡히고 경계 안 스크롤 컨테이너 내부는 허용됨을 확인(exit 1).

## WHAT WAS OBSERVED
- 리포트: `report-page.json`, `report-fixtures.json`, 실행 로그 `run-page.log`, `run-fixtures.log`.
- 스크린샷: `screenshots/index-375.png`, `index-768.png`, `index-1280.png`, `fixtures-1280.png`.
- page 기준선(측정 시점의 CSS, 다른 작업이 동시에 CSS를 수정 중): 320px wrapper 362/320, 360px wrapper 362/360 실패, 나머지 6개 폭 통과. 320px 뿌리 원인은 `#overview span` 글자 넘침 1건. 연속 2회 실행 결과 동일.
- fixtures 기준선(현재 CSS): 모든 그룹/폭 offender 0. card 열 수 280px=1 -> 720px=2, grid 280px=[1,1,1] -> 720px=[1,2,2]. 초기 실행에서는 CSS 수정 중이라 card(washi 카드 폭 붕괴), tabs(280px), modal 실패가 관측되었고 이후 CSS 변경으로 사라짐(결과는 CSS 상태에 의존).
- 픽스처 페이지는 `logo.svg`(헤더 이미지)와 `favicon.svg`(아이콘 링크)를 재사용.

## WHY IT IS ENOUGH
- 정적 계산이 아니라 실제 레이아웃 엔진의 `getBoundingClientRect`/`scrollWidth`로 재므로 Step 2~5의 회귀를 같은 명령으로 잡을 수 있다. 외부 네트워크를 차단해 오프라인에서도 같은 결과가 나온다. 탐지기는 양성/음성 사례로 검증했다.

## WHAT WAS OMITTED
- Google Fonts 차단으로 시스템 폴백 폰트 기준(실제 폰트와 글자 폭이 다를 수 있음).
- 모달은 fixed 백드롭의 배치만 정적으로 풀어 렌더(열린 상태 클래스는 실제 것). 토스트는 컨테이너 없이 카드 본체만 렌더. 모달/토스트의 뷰포트 기준 배치 동작은 미검증.
- 장식용 position:absolute(텍스트 없음) 요소와 SVG 내부 도형은 제외, 페이지 모드는 absolute 전부 제외.
- 페이지 모드의 뿌리 원인 목록은 참고용이며 통과 판정은 scrollWidth 기준만 사용.
- `--page` 실패 원인은 CSS 담당 범위라 이 단계에서 수정하지 않음. Chrome 외 브라우저 미검증.
