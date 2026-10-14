# paper-navigation (Step 4) 증거

## WHAT WAS TESTED
- Playwright(chrome 채널)로 `/index.html#pc-components`를 375/768/1280px에서 열어 Card 4·6·7을 DOM 전수 감사:
  대상 43개 요소(아코디언 항목, 콜랩서블, 아이콘 디스크, 배지, 폴더 탭, 탭 패널, 브레드크럼 칩, 진행 막대와 채움, 페이지네이션 버튼, 메뉴바와 트리거와 패널, 내비 pill과 패널, 커맨드 힌트, 키캡)에 `data-pc-paper` 존재, 화면에 보이는 요소의 `is-paper-hydrated`, 빈 아이콘 0건, `#pc-paper-defs` 1개.
- 상호작용: 아코디언 클릭/방향키/Space, 콜랩서블, 폴더 탭 클릭/방향키/Home, 페이지네이션 번호와 이전/다음, 메뉴바 열기/좌우 이동/아래 방향키로 항목 포커스/Esc 복귀, 내비 pill 현재 위치 이동과 패널 열기.
- `verify-overflow.mjs --page`, `--fixtures --only=tabs`.

## WHAT WAS OBSERVED
- 감사: missing 0, visibleNotHydrated 0, emptyIcons 0, defs 1. 콘솔 오류/경고 0건.
- aria-expanded/aria-selected/aria-current가 상태와 함께 바뀌고, 열린 아코디언·활성 탭은 accent 색지로 눌린다(스크린샷).
- 열린 메뉴 패널은 `menu` 색지로 그려지고 카드 밖으로 나와도 잘리지 않는다. 375px에서 패널 right=285 <= 375, 문서 가로 넘침 0.
- `--page` 8개 폭 PASS, `--fixtures --only=tabs` 3개 폭 PASS.
- 스크린샷: card4/6/7-{375,768,1280}.png, card7-menu-open-*.png, card7-nav-open-1280.png, accordion-open2-1280.png, collapsible-open-1280.png, tabs-state-1280.png, pagination-1280.png.

## WHY IT IS ENOUGH
AC-1~4를 각각 DOM 감사, 상태 속성 관찰, 스크린샷, 넘침 스크립트로 직접 확인했다.

## WHAT WAS OMITTED
- 검증 중 `animation:none`을 주입해 무한 애니메이션(다른 섹션)으로 인한 "not stable" 대기를 피했다. 메뉴 열림 애니메이션(`pc-ui-fan-in`)은 시각 확인에서 제외됐다.
- arrow-left 아이콘은 아이콘 엔진의 필터 id 중복(첫 인스턴스가 숨은 영역) 때문에 그려지지 않아 arrow-right를 `scaleX(-1)`로 뒤집어 썼다. 아이콘 엔진 자체는 수정하지 않았다.
- `verify-responsive.ts`는 Step 6 범위라 실행하지 않았다.
