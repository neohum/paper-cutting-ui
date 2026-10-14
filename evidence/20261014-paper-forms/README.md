# Evidence: paper-forms (Step 3, Card 1~3)

## WHAT WAS TESTED
- Card 1~3(`#pc-components`)의 버튼을 뺀 모든 컴포넌트에 `data-pc-paper`가 붙었는지 Playwright DOM 전수 검사(34개 요소, 보이는 31개 수화·SVG 레이어 31개, 누락 0, 문서 내 `#pc-paper-defs` 1개).
- 사용한 아이콘 id가 모두 `papercut-icons.js`에 존재하고 수화되는지 확인(sparkles, heart, calendar, clock, history-clock, edit, mail, arrow-down, check-circle, search, check, check-mark, circle-dot).
- 실제 조작: 체크박스 클릭/Space, 라디오 방향키, 스위치 클릭/Space, 슬라이더 방향키·PageDown·마우스 드래그, 토글/토글 그룹 클릭·Enter, 입력 타이핑, 셀렉트(열기·Esc·방향키 선택), 콤보박스(열기·필터·방향키·Enter), OTP 형태 전환과 입력, 포커스 링, 44px 터치 타깃, 콘솔 오류.
- 375/768/1280px 카드별 스크린샷, 엔진을 막은 상태(JS 없음)의 폴백 스크린샷.
- `node scripts/ops/verify-overflow.mjs --page`, `--fixtures --only=form,badge`.

## WHAT WAS OBSERVED
- 모든 조작 검사 PASS, 콘솔 경고·오류 0건(스크립트 `interact.mjs`의 PASS/FAIL 목록 전부 PASS).
- `--page` 8개 폭 PASS, `--fixtures` badge/form 280/360/480px 오프엔더 0.
- 스크린샷: `card{1,2,3}-{375,768,1280}.png`, 상태 캡처 `state-card1.png`, `state-card2-select-open.png`, `state-card2-combo-open.png`, `state-card2-otp-hex.png`, `state-card3-focus.png`, `state-card3-off.png`, 폴백 `fallback-no-engine-card3-1280.png`.
- 색지 받침과 흰 림, 2단 번트 엄버 그림자가 칼선 버튼과 같은 계열로 보이고, 체크·선택 상태는 accent 색과 오프셋으로 구분된다. 체크 표식은 `check-mark`, 라디오 점은 `circle-dot`, 셀렉트 화살표는 `arrow-down`, 콤보박스는 `search`, 옵션 선택 표시는 `check-circle` 3D 아이콘이다.
- 엔진이 없으면 네이티브 체크박스·라디오·스위치 input이 그대로 보인다(점진적 향상).

## WHY IT IS ENOUGH
- AC-1(전부 `data-pc-paper`, 수화 후 SVG 렌더)은 DOM 전수 검사로, AC-2(기호가 3D 아이콘)는 아이콘 id 검사와 스크린샷으로, AC-3(키보드·포커스 링·상태 구분)은 실제 키 입력과 계산된 outline·aria 값으로, AC-4는 스크린샷과 `--page` 통과로 직접 증명했다.
- 상호작용은 단위 모의가 아니라 실제 Chrome에서 입력 이벤트로 검증했다.

## WHAT WAS OMITTED
- 버튼(`.pc-svg-kirigami-btn`, OTP 형태 선택 버튼)과 아이콘 시스템은 범위 밖이라 그대로 두었다.
- OTP 슬롯은 기존 `OTP_BG_SHAPES` SVG를 유지했고 이중 레이어를 만들지 않았다. 형태 선택 패널만 `field`로 감쌌다.
- 닫혀 있는 셀렉트·콤보박스 메뉴(`display:none`)는 열 때 `PaperCutUI.paper.hydrate`로 수화하므로 닫힌 상태의 전수 검사에서는 제외했다.
- 헤드리스 검증이라 사람 눈의 시각 검토는 별도로 남는다(waiting-for-visual-review).
- 네이티브 `<select>`는 OS 팝업을 그릴 수 없어 `.pc-ui-select` 커스텀 리스트박스로 교체했다(ARIA 속성과 키보드 조작 구현).
