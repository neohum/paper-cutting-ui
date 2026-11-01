# 페르소나 화면 조작 검사 — 공통 명세

교사 3명·학생 10명 페르소나가 **학생 화면(player.html)을 사람처럼 조작**해 모든 차시를 진행하고, 인터랙티브 교구의 결함·빠진 활동을 찾는다.
기존 check-unit·simulate-class 는 교구에 정답을 직접 넣는다(`solve()`/`setState()`). 이 검사는 그것을 **금지**하고 실제 DOM 입력만 쓴다.

## 실행 환경

- 내용은 수업 허브 `http://localhost:8791` 이 서빙한다(작업 공간 `/Users/nm/works/paper-cutting-ui-edu-catalog` 의 최신 단원). 허브를 끄거나 다시 띄우지 않는다.
- 이 검사 코드는 `/Users/nm/works/paper-cutting-ui-persona/edu-content-pool/persona/` 에 둔다(브랜치 feat/persona-walk). 다른 경로는 고치지 않는다.
- Playwright: `import { chromium } from 'playwright-core'`, 크롬 경로는 `edu-content-pool/check-lesson.mjs` 의 `findChrome()` 을 가져다 쓴다.
- 학생 화면 URL: `${hub}/edu-content-pool/lessons/player.html?lesson=<차시 id>&role=student&class=<12자 이하>&seat=<번호>`
- 교사 화면 URL: `...&role=teacher` (전자칠판 투영 화면), 결과 화면 `${hub}/edu-content-pool/lessons/teacher.html?class=<코드>`.
- 플레이어 DOM 훅(바꾸지 말 것): 다음 단계 `[data-next]`, 확인/다 했어요 `#check`, 난이도 `[data-level="easy|base|challenge"]`, 힌트 `.pl-hint`(힌트 단추는 player.js 에서 확인), 교구 루트 `#tool`.
- 읽기 전용으로 쓸 수 있는 것: `window.__pl` (현재 차시·단계·활동·문항, `window.__pl.tool.getState()`, `window.__pl.lesson`). **쓰면 안 되는 것**: `tool.setState`, `tool.solve`, `tool.reset`, `__pl.goto` 등 상태·흐름을 바꾸는 호출. 흐름 이동은 화면의 단추로만 한다.

## 조작기(driver) 인터페이스

파일: `persona/drivers/<교구 id>.mjs` (카드형 교구처럼 엔진을 공유하면 한 파일을 여러 id 가 재수출해도 된다).

```js
// target: 그 문항(그 단계)의 target — 학생이 '지시를 이해했다'는 것에 해당하므로 읽어도 된다.
// options: 그 단계에 실제로 적용된 toolOptions(활동 levels + 문항 toolOptions + 문항 levels 를 합친 것, runner 가 넘긴다).
// persona.input: 'mouse' | 'touch' | 'keyboard' — keyboard 페르소나는 Tab/방향키/Enter/Space 만 쓴다.
// root: 교구가 그려진 상자의 CSS 선택자. 전개 문항은 '#tool', 출구 질문 교구는 '#exit-tool-N' — 조작기는 반드시 root 안에서만 찾고 누른다.
export async function drive({ page, root = '#tool', target, options, prompt, toolId, persona, readState, log }) {
  // DOM 입력(page.mouse / page.touchscreen / page.keyboard / locator.click / dragTo)만으로 target 에 닿게 조작한다.
  // 상태는 readState() 로 읽어 다음 조작을 정한다(최대 조작 수 제한을 둔다).
  return { reached: true|false, actions: n, problems: [ { kind, msg } ], approx?: { ... } };
}
export const tools = ['<교구 id>', ...];
```

- `reached` 는 조작이 끝난 뒤 상태가 target 을 만족한다고 조작기가 판단했는지다. 실제 정답 판정은 runner 가 `#check` 를 눌러 화면 피드백으로 본다.
- problem `kind`(이 목록만 쓴다):
  - `unreachable` — 그 단계 화면의 조작만으로는 target 에 닿을 수 없음(재료·보기·칸이 없음 등) **← 내용/교구 결함**
  - `no-keyboard-path` — 키보드만으로 조작할 수 없음 **← 접근성 결함**
  - `touch-target-small` — 눌러야 하는 대상이 44px 미만 **← 접근성 결함**
  - `control-missing` — 지시가 말하는 단추·칸·카드가 화면에 없음 **← 내용 결함**
  - `ui-error` — 조작 중 콘솔 오류·예외·화면이 멈춤 **← 교구 결함**
  - `drag-failed` — 잡을 곳과 놓을 곳이 **한 화면에 함께 있어** 끌기를 실제로 했는데 상태가 바뀌지 않아 대체 경로(눌러 고르기·단추·입력칸)로 넘어감.
    msg 에 무엇을 어디로 끌었는지 쓴다. 차시는 대체 경로로 끝까지 간다. 둘이 한 화면에 안 들어와 처음부터 대체 경로를 타는 경우(S9 200% 확대 등)는
    설계된 경로이므로 남기지 않는다 **← 교구 끌기 결함 후보(조작기 좌표 오차일 수도 있어 재현해 확인)**
  - `driver-limit` — 조작기가 아직 이 조작을 못 함 **← 검사 도구 한계(결함으로 세지 않음)**
- `approx` — 목표와 꼭 같은 자리가 판에 없어 가장 가까운 자리로 옮겼을 때 남긴다(earth 그림자 길이). 실행기는 그 문항의 확인이 오답(checked=false)이면
  `unreachable`('가장 가까운 자리도 오답 — 문항 목표값 확인 필요')을 더한다.
- 조작기 결함과 교구 결함을 섞지 않는다. 확실하지 않으면 `driver-limit` 으로 두고 msg 에 까닭을 쓴다.

## 판정 원칙 (2026-11-01 개정)

점검기가 교구보다 엄격하거나 교구와 다른 규칙을 쓰면, 이미 고친 교구를 결함으로 보고한다. 그래서 조작기는 아래를 지킨다.

1. **고정값 대신 실제 요소를 잰다.** 눌리는 크기·잡는 곳·띠 높이는 상수(`52*배율`, `±34`, `18*배율` 등)로 셈하지 않고,
   그 순간 화면의 요소를 잰다(`getBoundingClientRect`, SVG 는 `getBBox()` × `getScreenCTM()` 배율 — `_geo-lib.mjs` 의 `hitSize`).
   교구는 화면 폭에 따라 잡는 곳을 키우므로 상수는 금방 틀린다.
2. **입력 상한을 박아 두지 않는다.** 자릿수·수 범위(3자리, 0~9999 등)는 미리 거절하지 말고 실제로 써 넣은 뒤 칸·상태에 남은 값으로 판정한다.
   남은 값이 다르면 그때 `unreachable`(무엇을 썼고 무엇이 남았는지 msg 에). 옵션(`digits`, `timeUnit` 등)이 범위·단위를 바꾸면 그 옵션을 따른다
   (예: timer `timeUnit:'min'` 이면 칸은 분, 운동 1~60·쉬기 0~30, 1분씩).
3. **교구 check 결과가 우선이다.** 목표가 판의 자리와 꼭 맞지 않아도 교구가 '가장 가까운 자리'를 정답으로 받는다면(earth 그림자 길이 등),
   조작기는 학생처럼 가장 가까운 자리로 옮기고 결과에 `approx` 를 남기며, 정답 여부는 실행기가 누르는 확인(화면 피드백)으로 본다. 조작기 자신의 더 엄격한 기준으로 `unreachable` 을 내지 않는다.
   확인이 오답이면 실행기가 `unreachable` 로 센다(목표값이 판으로 닿을 수 없는 값). 태양이 움직이는 범위 밖의 목표는 입력 방식과 관계없이 `unreachable`.
   수를 누적할 때는 반올림한 소수를 더하지 말고 단위의 정수배로 센다(2/3 를 0.666667 로 세 번 더하면 2.000001 이 되어 범위 밖으로 샌다).
4. **눌러 고르기 대체 경로를 탄다.** 끌기가 안 되는 화면(200% 확대 S9, 휴대폰 S3)에서 교구가 다른 길을 주면 그 길로 간다:
   번호 단추(곱셈 배열 '한 줄의 개수'·'줄 수'), 핀을 누른 뒤 놓을 점 누르기(선대칭 접기), 카드 누르기 → 칸 누르기, 띠에 초점을 두고 방향키(종이 자).
   교구가 칸을 보기 전용으로 바꾸고 단추를 내준 경우, 보기 전용 칸의 크기는 `touch-target-small` 로 세지 않는다.
   끌기를 할 수 있는 화면에서 끌기를 해 봤는데 안 되어 대체 경로로 넘어간 것은 감추지 않고 `drag-failed` 로 남긴다(카드·선대칭 접기·곱셈 배열·수직선·컴퍼스).
5. **쪽을 굴린 뒤에는 좌표를 다시 잰다.** `scrollIntoView`·`scrollBy`·`fitView` 뒤에 앞서 잰 좌표를 쓰면 빗나간다. 굴린 다음에 다시 재고, 끌 점은 그 대상이 맨 위에 있는 곳(`elementFromPoint`)을 고른다.
6. **실행기(walk.mjs)도 같다.** 시연 판정은 `#demo` 의 innerHTML 에 더해 입력칸 값·체크 상태·글자를 함께 비교한다(시연 교구는 `__pl` 에 드러나지 않아 getState 를 못 읽는다).
   더듬기는 `locator.click`(겹친 칩에서 timeout 내내 재시도) 대신 요소 가운데 화면 좌표를 한 번 누른다.

실행기 안전: 차시 6분·문항 60초 상한, 창 닫기 10초 상한(넘으면 기다리지 않고 다음), 허브 fetch 10초 상한.
작업 중 크롬이 끊기면 그 작업을 `runnerError` 로 적고 크롬을 다시 띄워 다음 작업을 잇는다(최대 3번). `--shard i/n` 은 1부터(`1/n`…`n/n`), `0/n` 은 거부.

엄격함을 잃지 않는 장치: 위 완화는 '교구가 실제로 받아 주는 것'에만 적용한다. 써 넣은 값이 잘리거나, 대체 경로를 눌러도 상태가 바뀌지 않거나, 교구 check 가 틀렸다고 하면 그대로 문제로 남는다.

## 페르소나 (runner 가 정의, 조작기는 persona.input 만 본다)

교사(교사 화면·결과 화면, 가르치는 입장)
- T1 저학년 담임 — 전자칠판(1920×1080, 마우스), 시연 단추로 교구를 보여 주고 단계를 넘긴다.
- T2 고학년 담임 — 크롬북 반(1366×768), 학생 결과 화면에서 제출·오답을 읽는다.
- T3 지원 교사 — 태블릿(1024×768, 터치), 쉬움 단계·힌트·읽어 주기가 쓸 만한지 본다.

학생(학생 화면, 배우는 입장)
- S1 크롬북·마우스·보통 / S2 크롬북·키보드만 / S3 휴대폰 390×844 터치(카드는 눌러 고르기) / S4 태블릿 터치(카드는 터치로 끌어 놓기, `touchStyle: 'drag'`)
  — S3·S4 가 카드 계열 교구의 두 터치 경로(눌러 고르기·끌어 놓기)를 함께 덮는다. S4 의 터치 끌기가 안 되면 `drag-failed` 를 남기고 눌러 고르기로 끝까지 간다.
- S5 서두르는 학생(처음엔 틀린 조작 → 피드백 보고 고침) / S6 힘든 학생(쉬움 단계 + 힌트 1→3)
- S7 잘하는 학생(도전 단계) / S8 한국어가 서툰 학생(읽어 주기·쉬움 단계) / S9 저시력(브라우저 200% 확대)
- S10 끊기는 와이파이(제출 중 오프라인 → 다시 연결)

## 출력

- runner 는 차시마다 JSONL 한 줄: `{ lesson, persona, stage, items: [{ key, tool, level, reached, checked, feedback, problems[] }], flow: [...], errors: [...] }`
- 요약·보고서는 이 JSONL 에서 만든다(보고서 단계는 나중에).
