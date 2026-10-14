# 증거: paper-overlays-data (Step 5, Card 5·8·9·10·11)

날짜: 2026-10-14 / 계획서: `plans/pc-components-paper-rebrand.plan.md` Step 5

## WHAT WAS TESTED

실제 Chrome(playwright-core, `channel: 'chrome'`)으로 `node scripts/ops/serve.ts --port 8153`를 띄워 `/index.html#pc-components`를 375 / 768 / 1280px에서 실행했다.

1. **DOM 전수 검사** (`logs/dom-audit.txt`): Card 5·8·9·10·11 안의 모든 대상에 `data-pc-paper`가 있고, `PaperCutUI.paper.hydrate`를 부른 뒤 `is-paper-hydrated`가 붙는지 확인했다. 대상은 그룹 래퍼, 배지(`.pc-badge`, `.pc-pill-badge`), 드롭다운 패널·항목, 컨텍스트 메뉴 영역·항목, 팝오버, 알림 4종, 테이블 sheet, 캘린더·날짜 칸·이전/다음, 샘플 카드, 캐러셀 슬라이드·점·화살표, 리사이저블 그룹·손잡이·그립, 툴팁이다. 글자 기호(× ✓ ▾ ▼ › ‹ ● ⎋ 등) 잔존 검사와, 쓴 아이콘 id가 `papercut-icons.js`에 실제로 있는지도 같이 검사했다.
2. **오버레이 동작** (`logs/open-modals-*.txt`): 대화상자 4종(washi/wax/ticket/dogear), 사이드 시트, 바텀 드로어를 열어 패널에 `data-pc-paper`·`is-paper-hydrated`·`svg.pc-ui-paper-layer`가 있는지, 화면 안에 놓였는지, Esc로 닫히고 포커스가 트리거로 돌아오는지 확인했다. 대화상자의 확인 버튼을 눌러 `triggerPaperToast` 토스트가 생성 직후 수화되는지도 봤다.
3. **인터랙션** (`logs/interaction-*.txt`): 드롭다운 항목 ↑ ↓ End 이동과 `data-state="active"` 하이라이트, 컨텍스트 메뉴(우클릭, Esc, 포커스 복귀), 팝오버(클릭, Esc, 포커스 복귀), 성공 토스트 즉시 수화·톤, 알림 대화상자(열기, Tab 가두기, Esc, 포커스 복귀, 액션 버튼의 destructive 토스트), 캘린더(다음·이전 달, 날짜 선택, 선택 날짜 `data-state="active"`, 날짜 칸 수화), 테이블 행 선택(`aria-selected`), 캐러셀(다음, 점 클릭, 점 `is-active` 수화), 툴팁 호버, 리사이저블(← → 키, 드래그)을 실제로 조작했다.
4. **라이브러리 클래스 픽스처** (`fixture.html`, `logs/fixture-1280.txt`): 페이지 카드에 없는 `pc-ui-*` 컴포넌트를 따로 검증했다. 라이브러리 드롭다운 메뉴, 호버 카드, `data-tooltip`, 글자 × 닫기 버튼이 든 알림 4종, 토스트 4종, `PaperCutToast.ticket`, `PaperCutAlert.create`, 라이브러리 Dialog·Sheet·Drawer, `.pc-ui-table-wrap`, 영어 기본 캘린더, 라이브러리 캐러셀, 리사이저블.
5. **JS 차단 폴백**: `papercut-paper-layer.js` 요청을 막고 Card 8·10·11을 캡처했다 (`screenshots/nojs-*.png`). 기존 CSS 모양이 남는다.
6. **반응형 게이트**: `node scripts/ops/verify-overflow.mjs --page` 와 `--fixtures --only=modal,toast,table,card`.

## WHAT WAS OBSERVED

- DOM 전수 검사: 대상 전부 `data-pc-paper`가 있고 수화되었다. 글자 기호 잔존 0건, 존재하지 않는 아이콘 id 0건, 비어 있는 아이콘 0건. 닫혀 있는 컨텍스트 메뉴와 팝오버 패널은 `display:none`이라 크기가 0이어서 열리는 순간에 수화된다 (열기 직후 `is-paper-hydrated` 확인됨).
- 대화상자 6종, 시트, 드로어: 모두 `is-paper-hydrated` + 레이어 SVG, Esc로 닫힘, 포커스가 트리거로 복귀. ticket 모달만 `ticket` 변형(반원 노치), 나머지는 `sheet`. 톤은 모달 색지 변형(mint/rose/buttercup 등)을 따른다.
- 토스트(`pc-ui-toast`, `pc-toast-card`)와 `PaperCutAlert`는 생성 직후 `is-paper-hydrated`. 톤이 종류를 나타낸다 (info 하늘, success 민트, warning 버터컵, destructive 로즈).
- 캘린더 날짜 칸 35개는 다음 달·이전 달·날짜 선택으로 다시 그려질 때마다 즉시 수화되고, 선택일은 `data-state="active"`로 눌린 색지가 된다.
- 세 폭 모두 콘솔 오류 0건. `verify-overflow --page`: 320~1920px 8개 폭 PASS. `--fixtures --only=modal,toast,table,card`: PASS.
- 375px에서 테이블의 상태·금액 열은 안쪽 스크롤 영역으로 들어가 가로로 밀어 보아야 한다 (카드 안쪽 폭이 약 190px이라서). 문서 가로 넘침은 없다.

스크린샷은 `screenshots/`에 있다.

| 내용 | 파일 |
| --- | --- |
| Card 5·8·9·10·11 정지 상태 | `card5-{375,768,1280}.png` `card8-…` `card9-…` `card10-…` `card11-…` |
| 대화상자 4종·시트·드로어 열림 | `open-dialog-{washi,wax,ticket,dogear}-*.png` `open-sheet-*.png` `open-drawer-*.png` |
| 킬리가미 토스트(모달 확인 후) | `open-paper-toast-*.png` |
| 드롭다운 active, 컨텍스트 메뉴, 팝오버 | `dd-active-*.png` `ctx-open-*.png` `popover-open-*.png` |
| 토스트, 알림 대화상자, 툴팁 | `toast-*.png` `toast2-*.png` `alertdialog-*.png` `tooltip-*.png` |
| 라이브러리 클래스 픽스처 | `fx-*.png` |
| JS 차단 폴백 | `nojs-card{8,10,11}.png` |

## WHY IT IS ENOUGH

- AC-1(정적 컴포넌트와 열린 오버레이 패널이 페이퍼 레이어로 렌더링, 동적 캘린더 날짜·토스트는 생성 직후 수화): DOM 전수 검사와, 열린 뒤 패널 단위 검사, 토스트·캘린더 즉시 수화 로그가 직접 증명한다.
- AC-2(×, 메뉴 화살표, 알림 종류 기호가 3D 컬러 아이콘): 글자 기호 잔존 0건과 아이콘 id 존재 검사. 라이브러리 JS의 글자 × 닫기 버튼도 `iconifyCloseButtons`가 아이콘으로 바꾸는 것을 픽스처로 확인했다.
- AC-3(포커스 가두기, Esc, 포커스 복귀): 모달 6종과 알림 대화상자·팝오버·컨텍스트 메뉴·드롭다운을 키보드로 조작해 확인했다.
- AC-4: 세 폭 스크린샷(열린 상태 포함)과 두 게이트 통과.
- 실제 Chrome에서 눈으로 본 스크린샷과 수치(DOM, 포커스, 넘침)를 함께 남겨 Tier 1·2·3을 모두 덮는다.

## WHAT WAS OMITTED

- 실제 키보드·스크린리더로 읽어 본 확인은 하지 않았다 (포커스 이동과 ARIA 속성은 자동 점검).
- Firefox/Safari 확인은 하지 않았다 (Chrome만).
- `prefers-reduced-motion` 렌더는 CSS 규칙만 넣었고 별도 캡처는 없다.
- 라이브러리 `Dialog`/`Sheet`의 포커스 가두기·포커스 복귀는 원래 없던 기능이라 추가하지 않았다 (Esc는 원래 있었고, Drawer에는 Esc를 추가했다).
- 수화된 요소가 아주 많은 경우의 성능 측정(long task)은 Step 2의 범위라 이번에는 재측정하지 않았다.
