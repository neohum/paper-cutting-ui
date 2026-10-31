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
  return { reached: true|false, actions: n, problems: [ { kind, msg } ] };
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
  - `driver-limit` — 조작기가 아직 이 조작을 못 함 **← 검사 도구 한계(결함으로 세지 않음)**
- 조작기 결함과 교구 결함을 섞지 않는다. 확실하지 않으면 `driver-limit` 으로 두고 msg 에 까닭을 쓴다.

## 페르소나 (runner 가 정의, 조작기는 persona.input 만 본다)

교사(교사 화면·결과 화면, 가르치는 입장)
- T1 저학년 담임 — 전자칠판(1920×1080, 마우스), 시연 단추로 교구를 보여 주고 단계를 넘긴다.
- T2 고학년 담임 — 크롬북 반(1366×768), 학생 결과 화면에서 제출·오답을 읽는다.
- T3 지원 교사 — 태블릿(1024×768, 터치), 쉬움 단계·힌트·읽어 주기가 쓸 만한지 본다.

학생(학생 화면, 배우는 입장)
- S1 크롬북·마우스·보통 / S2 크롬북·키보드만 / S3 휴대폰 390×844 터치 / S4 태블릿 터치
- S5 서두르는 학생(처음엔 틀린 조작 → 피드백 보고 고침) / S6 힘든 학생(쉬움 단계 + 힌트 1→3)
- S7 잘하는 학생(도전 단계) / S8 한국어가 서툰 학생(읽어 주기·쉬움 단계) / S9 저시력(브라우저 200% 확대)
- S10 끊기는 와이파이(제출 중 오프라인 → 다시 연결)

## 출력

- runner 는 차시마다 JSONL 한 줄: `{ lesson, persona, stage, items: [{ key, tool, level, reached, checked, feedback, problems[] }], flow: [...], errors: [...] }`
- 요약·보고서는 이 JSONL 에서 만든다(보고서 단계는 나중에).
