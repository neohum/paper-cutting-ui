# PaperKit — 움직이는 페이퍼커팅 교구 엔진

`paperkit.js`는 의존성이 없다. SVG와 Pointer Events만 쓴다. 그래서 크롬북, 런처 허브(`/dist/<id>/`, CSP `connect-src 'self'`), `file://` 어디서나 똑같이 돈다.

## 교구 계약 (`engine/tools/<id>.js`)

```js
(function (K) {
  K.registerTool('<id>', {
    name: '한국어 이름',
    create(box, o, kit) {          // box: 담을 div, o: 옵션(레벨·문항별로 합쳐져 들어옴), kit === PaperKit
      const st = kit.stage(box, { viewBox: [w, h], label: '스크린리더용 설명' });
      // ... kit.piece / kit.drag / kit.rotate / kit.spring / kit.tween 로 만든다
      return {
        getState() {},             // JSON으로 직렬화되는 현재 상태 (결과 수집에 그대로 들어감)
        setState(s) {},            // 문항 시작 상태·활동지 그림 상태
        check(target) {            // 문항의 target과 비교
          return { correct: true|false, feedback: '학생에게 보이는 한 문장', hint: '두 번 틀리면 자동으로 보이는 힌트' };
        },
        reset() {},
        solve(target) {},          // target을 만족하는 상태로 바로 맞춘다 — 자동 검사(check-lesson.mjs)와 교사 '정답 보기'에 쓴다
        demo(target) {},           // (선택) 교사 시연 — 스스로 움직여 target 상태로 간다. Promise 반환
        hint(target, { level, attempts }) {}, // (선택, reveal 교구는 사실상 필수) 힌트 사다리 한 칸 — { hint: '한 문장', correct?: true|false }. 아무것도 드러내지 않는다
        wrongAnswer(target) {},    // (선택) 그럴듯한 오개념 상태 하나 — '다 했지만 틀린' 상태. 모의 수업·자동 검사가 오답 시도로 쓴다
        achievable(target) {},     // (선택) 지금 판(팔레트·카드·칸)으로 target을 만들 수 없으면 까닭 한 문장, 되면 null — check-unit이 단계마다 부른다
        distance(a, b) {},         // (선택) 두 상태 사이 '걸음' 수(0 이상 수). 1 이하면 학생이 한 걸음만 바꿔 다시 확인한 것(쓸어 보기)으로 센다
      };
    },
  });
})(window.PaperKit);
```

### 반드시 지킬 것

- **움직임은 `kit.transform(g, {...})`만 쓴다.** 조각 DOM은 다시 만들지 않는다. 크롬북 60fps를 지키기 위해서다.
- **종이 결 필터(`texture: true`)는 움직이지 않는 큰 조각에만 쓴다.**
- **키보드로도 같은 과제를 끝낼 수 있어야 한다.** 방법은 둘 중 하나다.
  - `kit.drag` / `kit.rotate`를 쓴다(방향키·Enter 내장).
  - 버튼 조각이면 `tabindex=0`, `role=button`을 달고 Enter와 Space를 처리한다.
- **터치 대상은 44px 이상이다.** 작은 조각에는 투명 판정 영역(`class="pk-hit"`)을 덧댄다.
- **무대는 세로 스크롤을 막지 않는다**(`.pk-stage { touch-action: pan-y }`). `.pk-draggable`·`.pk-rotatable` 위에서 움직인 터치는 무대가 touchmove를 취소해 스크롤을 막는다. Chrome은 SVG 안쪽 요소의 CSS `touch-action`을 무시하기 때문이다. `kit.drag`/`kit.rotate`는 이 클래스를 스스로 단다. 직접 `pointerdown`으로 끄는 조각도 `pk-draggable`을 달아야 한다. 교구에서 touchstart를 취소하지 않는다. 취소하면 단추 조각의 탭이 click이 되지 않는다.
- **글자 크기:** `kit.mount`는 무대가 줄어 화면 글자가 12px 아래로 내려가면 `<text font-size>`를 원래의 1.5배까지 키운다(인라인 style). 글자 칸은 그만큼 여유를 둔다. `font-size`는 속성으로 적는다.
- **`o.print`가 참이면 활동지 그림이다.**
  - 정답이 드러나는 표기(디지털 숫자, 각도 값, 결과 문구)는 숨긴다.
  - 인쇄 흑백 처리는 CSS가 한다. `.pk-face`는 흰 바탕 검은 칼선(굵기 1px, `vector-effect: non-scaling-stroke` — `sx`/`sy`로 늘인 조각도 선만 남는다), `.pk-under`는 숨김.
- `kit.transform(g, { sx, sy })`로 한 방향만 늘일 수 있다. 직접 `transform` 속성을 쓰지 않는다.
- 자체 소리를 내면 `kit.soundOn()`이 거짓일 때 소리를 끈다. 출구 질문 교구는 `exitTicket[].state`로 시작 상태를 받는다.
- 조작이 끝날 때마다 `kit.recorder.log('<id>', state)`를 남긴다. 한 문장 상태 안내는 `kit.announce(text)`로 한다.
- 소리는 `kit.tick('ok'|'no')` 정도만 쓴다. 학생 이름 같은 개인정보는 상태에 넣지 않는다.

### 힌트·확인 전 숨김 (`hint`, `forHint`)

- **힌트 단추는 확인이 아니다.** 플레이어는 힌트 단추를 누르면 `hint(target)`이 있으면 그것만 부르고, 없으면 `check(target, { forHint: true })`를 부른다.
- `hint(target)`은 `{ hint, correct? }`를 돌려준다. 읽기 값·결과 문구·정답 표시를 켜지 않고, 상태도 바꾸지 않는다. `correct: true`면 플레이어가 "지금 상태가 맞아요. 확인을 눌러 보세요."를 띄운다.
- `check(target, opts)`에서 **`opts.forHint`가 참이면 아무것도 드러내지 않는다** — `revealAfterCheck`로 숨긴 읽기 값을 켜지 않고, 맞음·틀림 표시(`pk-ok`/`pk-no`)도 그리지 않는다. 반환 모양은 같다. 자동 검사·모의 수업도 '검사만 해 보기'에 이 옵션을 쓴다.
- **`o.revealAfterCheck`가 참이면 맞힌 확인에서만 드러낸다.** 틀린 확인도 숨긴 값을 보여 주면 학생이 확인을 연달아 눌러 값을 읽어 가며 맞춘다.
- 플레이어의 안전망: `reveal:'after-check'` 문항에서 **`hint()`가 없는 교구**는 틀린 확인과 힌트 뒤에 플레이어가 `reset()` 뒤에 확인 직전 상태를 `setState()`로 다시 넣어 숨긴다. 그래서 `reset(); setState(getState() 사본)`은 상태를 그대로 되살리고 숨김만 되돌려야 한다(`getState()`에 없는 상태가 있으면 사라진다). 이 길은 교구 안의 틀림 표시도 지우므로, reveal을 지원하는 교구는 `hint()`를 넣고 위 규칙을 스스로 지킨다. `hint()`가 있는 교구는 다시 넣지 않는다.
- `check-lesson.mjs`는 reveal 문항마다 힌트 전후·틀린 확인 전후의 교구 글자를 견주어, 숨긴 값이 드러나면 실패로 적는다.

### 힌트 사다리 (`hint(target, { level, attempts })`, `items[n].hints`)

플레이어는 힌트를 세 단계로 낸다. 교구는 `level`에 맞는 글을 돌려준다.

| 단계 | 언제 | 무엇을 말하나 |
| --- | --- | --- |
| 1 | 언제나(시도 전에는 1단계만) | **개념·전략만.** 목표(target)의 수·자리·이름·값을 쓰지 않는다. 예: "긴바늘이 분, 짧은바늘이 시예요." |
| 2 | 틀린 확인 1번 뒤(`attempts ≥ 1`) | **틀린 단계를 짚는다.** 지금 상태에서 어디가 어긋났는지. 아직 최종 답은 말하지 않는다. |
| 3 | 틀린 확인 2번 뒤(`attempts ≥ 2`) | **그 단계의 풀이.** 답에 이르는 길을 보여 줘도 된다. |

- `level`은 이 문항에서 몇 번째 힌트 요청인지(1, 2, 3)인데 `attempts + 1`을 넘지 않는다. 그래서 시도 전에는 몇 번 눌러도 1단계다. 두 번째 틀린 확인부터는 플레이어가 다음 단계 힌트를 자동으로 붙인다.
- `attempts`는 이 문항에서 지금까지 틀린 확인 횟수다.
- 둘째 인자를 모르는 옛 교구 `hint(target)`도 그대로 돈다(단계와 관계없이 같은 글이 나간다). `hint()`가 없으면 플레이어는 `check(target, { forHint: true, level, attempts })`를 부른다.
- 차시 문항에 `hints: ['1단계 글', '2단계 글', '3단계 글']`이 있으면 **그 단계의 글이 교구 글을 대신한다**(없는 단계는 교구 글). 1~3개, 200자 이하. `check-lesson.mjs`는 1단계 글(교구 `hint(target, { level: 1, attempts: 0 })`와 `hints[0]`)에 목표의 수(0·1 제외)나 한글 값이 들어 있으면 실패로 적는다.
- 힌트 단추 글은 시도 전 `힌트`, 한 번 틀린 뒤부터 다음에 받을 단계 `힌트 2/3`. 피드백 아래 힌트 줄 머리에도 `힌트 1/3`처럼 단계가 붙는다.
- 결과의 문항마다 `hints`(횟수)와 `hintLevels`(받은 단계 목록, 예: `[1, 2, 3]`)가 남는다. 교사 화면 문항별 표의 '(풀이 n%)'는 3단계까지 본 학생 비율이다.

### 쓸어 보기 막기 (`maxAttempts`, `distance`)

- **확인은 언제나 답한다.** 틀린 확인은 피드백 줄이 비지 않는다(교구가 `feedback`을 비워 돌려줘도 플레이어가 한 문장을 넣는다). 틀린 직후 잠깐(1.2초) 잠긴 동안 다시 누르면 '방금 받은 피드백을 먼저 읽어요…', 바꾸지 않고 누르면 '교구를 움직여 바꾼 뒤에…' 안내 줄이 뜬다. `check-lesson.mjs`는 reveal 문항마다 키보드로 한 칸씩 바꾸며 닫힐 때까지 확인을 눌러, 틀린 확인의 빈 피드백과 말없는 확인을 실패로 적는다.

- 확인 전 숨김 문항에서 한 걸음씩 바꾸며 확인을 연달아 눌러 답을 찾는 것을 막는다. 문항의 `maxAttempts`(1~10 정수)만큼 틀리면 그 문항을 **못 풂으로 닫는다**. 기본은 `reveal: 'after-check'` 문항 3번, 그 밖의 문항은 끝없음(4번 틀리면 '다음 문제로' 단추가 생기는 예전 길 그대로).
- 닫히면 3단계 힌트(풀이)와 `conclude`(있으면)를 보여 주고 '다음 문제'만 남긴다. 결과에는 `correct: false, closed: 'attempts'`. 단계 바꾸기·교사 바로 가기로 돌아와도 닫힌 모양 그대로이고, '전개'로 돌아올 때 첫 못 푼 문항을 찾는 길도 닫힌 문항은 건너뛴다.
- 직전 틀린 상태에서 한 걸음만 바꾼 확인도 **시도로 센다**(바꾼 것이 없을 때만 세지 않는다). 그런 확인은 문항의 `nudges`로 따로 센다. 교구에 `distance(a, b)`가 있으면 1 이하일 때, 없으면 JSON 잎 하나만 1(또는 참거짓 뒤집기)만큼 바뀌었을 때다. `distance`는 숫자를 돌려주고, 같은 상태면 0이다(예: 각도기 5° 눈금이면 `Math.abs(a.deg - b.deg) / 5`).
- 교사 화면 학생별 표의 '못 푼 문항' 칸에 `a1.2 닫힘`(시도를 다 씀), `a2.1 넘김`(학생이 '다음 문제로'를 누름)이 보이고, 난이도 권고에도 한 줄씩 오른다. CSV에는 '못풂(닫힘·넘김)' 열이 있다.

### 출구 질문 교구

- 출구 `tool` 문항은 전개 문항과 똑같이 장착한다: `options`(+ `levels[단계].toolOptions`) → 시작 상태(`state` 또는 `levels[단계].state`) → `setTarget(target)`. 그래서 `setTarget`으로 보기·질문을 만드는 교구도 출구에서 같은 화면이 된다.
- `check-lesson.mjs`는 출구 교구마다 같은 순서로 따로 세운 교구와 상태·글자가 같은지, `solve(target)` 뒤 `check(target).correct`인지 본다.
- 출구 질문에는 확인 단추가 없다. 문항 글에 '확인을 누르세요' 같은 말이 있으면 `check-lesson.mjs`가 실패로 적는다.

### 모의 수업용 오답 (`wrongAnswer`)

- `wrongAnswer(target)`은 `setState()`에 그대로 넣을 수 있는 상태를 돌려준다. 그 상태에서 `check(target)`은 `incomplete`가 아니고 `correct: false`여야 한다(숫자판·보기·핀처럼 '다 채운' 상태). 학생이 실제로 자주 하는 실수를 고른다(예: 반지름 대신 지름, 짧은바늘을 앞 숫자에).
- `simulate-class.mjs`는 틀린 시도를 `wrongAnswer` → 화면의 입력 칸·고르지 않은 보기 → 정답 상태의 숫자 하나를 조금 바꾼 상태(`PaperLessons.flow.findWrong`) → 방향키 순으로 만든다. 확인이 시도로 세지지 않은 비율이 30%를 넘는 문항은 결과 JSON의 `simUnreliable`에 오른다(그 문항의 '한 번에 맞힘'은 믿지 말 것). 문항별 `incompleteAttempts`도 함께 낸다.
- `check-lesson.mjs`는 '다 했지만 틀린 상태'를 만들지 못한 문항을 알림으로 남긴다 — 그 교구에 `wrongAnswer`가 필요하다는 뜻이다.
- 스스로 점검 문항(`target.selfCheck`, 척도의 `level: 'any'`)은 틀린 답이 없으므로 `wrongAnswer`가 null이어도 된다. 말하기만 하는 짝 활동(`free` + `talk: true`)은 키보드로 움직일 조각이 없어도 된다.
- `check-lesson.mjs <id>`는 단원 차시 id(`g4-art-1-01-01`)도 받는다 — `lessons/units/<단원 id>.js`에서 읽고, 단원 계약은 `check-unit.mjs`에 맡긴다.

### 고르기 단추 모양

- 교구 안 HTML 고르기 단추는 `class="pl-btn"`(또는 `pk-choice`)에 `aria-pressed="true"`(라디오 모양이면 `role="radio"` + `aria-checked="true"`)만 달면 플레이어가 '고름' 모양(민트 바탕·안쪽 고리·굵은 글자)을 입힌다. 색만으로 구분하지 않는다.

### 휴대폰(820px 이하)

- 확인·힌트·처음으로 띠는 교구 **바로 아래**에 놓이고 화면에 떠 있지 않는다(띠가 교구 아래쪽을 덮지 않게). 대신 무대 높이를 `100svh − 띠 높이(--pl-bar-h, 64px) − 40px`로 묶어 교구와 띠가 한 화면에 함께 들어온다. 무대 밑에 HTML 칸(고르기 단추 등)을 두는 교구는 그 높이만큼 무대가 더 작아 보일 수 있다.
- 좁은 화면의 순서(DOM·Tab 순서와 같다): 문항 → 교구 → 예상(있으면) → 확인 띠 → 피드백·힌트·'다음 문제'. 넓은 화면은 교구가 왼쪽, 오른쪽에 문항 → 예상 → 피드백 → 확인 띠.

### 휴대폰(480px 이하) 머리말

- 머리말은 두 줄이다: `[학년 과목] 제목(한 줄, 넘치면 …)` / `[목표 보기] [쉬움 기본 도전] [소리] 번호`. 목표는 도입에서 펼치고 그 뒤로 접는다(학생이 펼치거나 접으면 그대로 기억). 단계 띠(도입·전개·정리)는 수업 화면 **아래**로 간다. 활동 안내(`task`)·안전 약속은 교구 아래로 내려간다.
- 390×844에서 전개 첫 문항 교구 위쪽이 260px 이하가 되어야 한다(24개 차시, 문항 글이 네 줄일 때 약 258px). 문항(`prompt`) 글은 네 줄(약 80자) 안쪽으로 쓴다.

### 색과 모양

- 팔레트: `mint`, `peach`, `lavender`, `buttercup`, `sky`, `rose`, `cream`, `ink`.
- `kit.piece(st, parent, { shape, color, depth })`가 종이 조각 하나를 만든다. 구성은 아래층(`-layer` 색)과 칼선 그림자, 윗면이다.
- `shape`의 형식은 다섯 가지다.
  - `{ type: 'circle', r, cx, cy }`
  - `{ type: 'rect', w, h, x?, y?, rx }`
  - `{ type: 'ellipse', rx, ry }`
  - `{ type: 'poly', points }`
  - `{ type: 'path', d }`

## 차시 계약 (`lessons/data/<id>.js`, schema `edu-lesson.v1`)

`lessons/data/g2-math-clock.js`가 기준 예시다.

- **단계:** `stages`는 정확히 3개다. 순서는 `intro`(도입), `main`(전개), `wrapup`(정리)이다. 이는 all_market `lesson-package.v1`과 같다.
- **시간:** `minutes`의 합은 40이다.
- **활동:** `main.activities[]`의 각 활동은 다음을 가진다.
  - `tool`, `task`
  - `levels: { easy, base, challenge }`(도구 옵션)
  - `items[]`. 각 문항은 `{ prompt, target }` 또는 `{ prompt, free: true }`다. 필요하면 `state`·`toolOptions`를 더한다.
- **예상 → 관찰 → 정리(선택):** 문항에 아래 세 칸을 더할 수 있다. `check-lesson.mjs`가 모양을 검사한다.
  - `predict: { q: '예상 질문', options: ['…', '…'], answer? }` — 보기는 글자 2~5개다. 플레이어는 질문과 보기 단추를 교구 위에 띄운다. 교구는 보이고 만질 수 있지만, 예상을 고르기 전에는 확인이 잠긴다. 고른 번호는 문항 결과에 `predict: <번호>`로 남고 **채점하지 않는다.** 첫 확인 뒤에는 바꿀 수 없다. `answer`(0부터)는 교사 대시보드 분포와 모의 수업에만 쓴다.
  - `conclude: '한 문장 정리'` — 120자 이하. 맞힌 뒤 "예상: <고른 보기> → 관찰한 결과를 떠올려 보세요"와 함께 보인다.
  - `predict`나 `conclude`가 있는 문항은 맞힌 뒤 자동으로 넘어가지 않고 '다음 문제' 단추를 띄운다(견주어 볼 시간).
  - `reveal: 'after-check'` — 교구 옵션에 `o.revealAfterCheck = true`가 들어간다. 지원하는 교구는 **맞힌** 확인 전까지 실시간 읽기 값을 숨긴다. 힌트와 틀린 확인은 아무것도 드러내지 않는다(위 '힌트·확인 전 숨김'). 지원하지 않는 교구는 무시한다.
- **문항별 단계 시작(선택):** `items[n].levels = { easy?: { state?, toolOptions?, prompt?, target? }, base?: …, challenge?: … }`. 학생이 고른 단계에 칸이 있으면 그 단계의 `state`가 문항의 `state`를 **바꾸고**, `toolOptions`는 문항의 `toolOptions` 위에 **같은 키만 덮는다**(활동 `levels` 옵션 → 문항 `toolOptions` → 단계별 `toolOptions` 순). '처음으로'도 그 단계의 시작 상태로 돌아간다. `check-lesson.mjs`가 모양(모르는 단계·칸, 빈 칸)과 '그 단계 시작 상태가 이미 정답'을 검사한다.
- **단계별 문항(선택):** 같은 칸에 `prompt`(160자 이하)와 `target`을 두면 그 단계에서는 문항 글과 목표가 그것으로 바뀐다(예: 도전은 더 어려운 목표). 플레이어·출구·`check-lesson.mjs`·`simulate-class.mjs`가 모두 `PaperLessons.flow.itemAt(item, level)`로 그 단계의 문항을 쓴다 — 확인·`solve`·힌트·모의 수업이 그 단계 `target`을 본다. `target`은 짝 활동(free) 문항에 쓰지 않고, 문항 `target`과 같은 모양(객체/배열)이어야 하며, 바꿨다면 `prompt`도 함께 바꿔야 한다(글과 목표가 어긋나지 않게). `check-lesson.mjs`는 단계마다 `solve(target)` 뒤 `check(target).correct`, 1단계 힌트에 그 단계 정답 값이 없는지도 본다.
- **확인 단추:** 틀린 직후 1.2초 동안 잠긴다(`aria-disabled`). 교구를 바꾸지 않고 다시 누르면 시도로 세지 않고, 보이던 피드백과 자동 힌트는 그대로 둔다. 피드백·힌트 줄에는 누르면 읽어 주는 단추가 붙는다(자동 읽기는 없다).
- **성취기준:** `standards`의 코드는 차시 과목 머리글자와 같아야 한다(국어→국, 수학→수, 과학→과, 사회→사, 통합교과→바·슬·즐, 도덕→도, 영어→영, 체육→체, 음악→음, 미술→미, 실과→실). `units-map.json`의 `catalog.unit` 단원 목록에 같은 과목 코드가 하나라도 있으면, 차시의 코드는 그 목록 안에 있어야 한다. 단원이 없거나 같은 과목 코드가 없으면 검사는 알림만 남긴다.
- **출구 질문**은 전개 문항과 문항(prompt)·정답(target)이 똑같으면 안 된다. 숫자나 상황을 바꿔 옮겨 쓰는지를 잰다.
- **출구 질문:** `wrapup.exitTicket[]`의 `type`은 `choice`, `tool`, `short`, `mood` 중 하나다.
- **활동지:** `worksheet.items[]`의 `type`은 `figure`, `choice`, `blank`, `check`, `table`, `short`, `draw` 중 하나다.
  - `figure`는 엔진 교구를 흑백으로 그린다.
  - `choice` 보기 앞에는 ①②③④ 번호가 찍힌다(종이에서 '몇 번'으로 말하고 ○ 할 자리).
  - `table`은 `columns`와 `rows`(빈 줄 수, 기본 3) 또는 `cells`를 쓴다. `cells`는 미리 채운 칸의 2차원 글자 배열이고 `''`는 학생이 채울 빈칸이다. 줄마다 칸 수가 `columns`와 같아야 하고, `cells`를 쓰면 `rows`는 쓰지 않는다(`check-lesson.mjs`가 검사). 예: `cells: [['봄', ''], ['여름', '']]`.
- **그림:** `illustration.prompt`는 아래 문장 틀을 그대로 쓰고 `[ ]`만 채운다. 이 틀은 그대로 이미지 생성기에 넘긴다.
  > Layered paper-cut illustration of [ ], with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.
- `illustration.scene`은 같은 장면을 `PaperKit.scene` 모티프로 조립한 벡터판이다. 화면에는 이것을 띄운다.
  - 쓸 수 있는 모티프: `hills`, `sun`, `moon`, `cloud`, `tree`, `flower`, `house`, `star`, `wave`, `mountain`, `bird`, `leaf`, `snow`, `text`

## 단원 파일 (`lessons/units/<단원 id>.js`, schema `edu-unit.v1`)

카탈로그 차시(330단원·5,199차시)는 단원 하나를 파일 하나에 담는다. `lessons/units/_sample.js`가 형식 예시다(차시 2개, `check-unit.mjs _sample`이 통과한다). 무엇을 써야 하는지(단원·차시 id, 차시 수, 제목, 교구 선택, 성취기준)는 `CATALOG_BUILD.md` 2·5절이 정본이다.

```js
PaperLessons.registerUnit({
  id: 'g3-sci-1-02', schema: 'edu-unit.v1', catalogUnit: 'g3-과학-1학기-2',
  grade: 3, subject: '과학', unitTitle: '2. 동물의 생활',
  flow: '교사용 진행 방향 3~6문장',
  refs: { 2: 'g3-science-sound' },   // units-index.json existing의 번호 → 이미 있는 lessons/data 차시(그 번호는 lessons에 쓰지 않는다)
  lessons: [ { id: 'g3-sci-1-02-01', schema: 'edu-lesson.v1', catalog: { unit: 'g3-과학-1학기-2', lesson: 1 }, … }, … ],
});
```

- **차시:** `lessons[]`의 각 차시는 위 '차시 계약'을 전부 따른다. `grade`·`subject`·`unitTitle`은 단원과 같고, 차시 id는 `<단원 id>-<두 자리 번호>`, `catalog.lesson`은 그 번호다. `illustration.image`는 쓰지 않는다(`scene`만).
- **레지스트리:** `PaperLessons.registerUnit(unit)`이 차시마다 `lesson.unit = { id, catalogUnit, unitTitle, flow, index }`를 붙여 등록하고, `refs` 번호(`<단원 id>-NN`)는 기존 차시의 별칭으로 둔다. `load(id)`는 id가 `-NN`으로 끝나면 `units/<단원 id>.js`를, 아니면 `data/<id>.js`를 읽는다(못 찾으면 다른 쪽도 본다). 교구를 읽기 전에 카드 계열 공통 판 `engine/tools/_cards.js`를 언제나 먼저 읽는다(없으면 조용히 건너뛴다).
- **검사용 차시:** 이름이 `_`로 시작하는 파일(`data/_tool-*.js`, `units/_sample.js`)은 manifest·카탈로그·묶음에서 빠진다. `player.html?lesson=_tool-x`로는 열린다.
- **학생 화면:** `role=student`는 입장 화면 없이 바로 수업을 연다. 반·번호는 런처·포털이 주소(`class`, `seat`, `pair`)나 포털 `material_id` 문맥으로 넘긴다. 번호가 없으면 결과의 `seat`는 비고 `studentKey`는 `<반 코드|m<자료 id>>-d<기기 키 8자>`(이 기기의 무작위 키)다 — 제출은 포털(부모 창)·허브(`/dist/`·`collect`)가 주는 길로만 가고, 길이 없으면 대기열과 제출 코드로 남는다. 포털로 갈 때 `deviceLabel`은 '번호 없음'이고 포털이 로그인한 학생으로 저장한다.
- **묶음:** `build-bundles.mjs`가 `dist/units/<단원 id>/`(첫 화면 `index.html` = 차시 고르기, 차시마다 `<차시 id>.html`, `packages/<차시 id>.json` lesson-package.v1)와 `dist/units/<단원 id>.zip`을 만든다. `lessons/manifest.js`에는 차시 항목(`EDU_LESSONS`, 단원 차시는 `unitId`·`hub`·`zip`)과 단원 목록(`EDU_UNITS`)을, `lessons/units/index.js`에는 카탈로그 색인(`EDU_UNIT_INDEX`: 카탈로그 차시 → 차시 id, 단원 진행 방향)을 쓴다. 성취기준이 비어 있는 차시는 lesson-package를 만들지 않는다(스키마가 성취기준을 요구한다).

## 검사 도구

- `check-lesson.mjs <id>` — 정적 계약 + 실브라우저 흐름. `--shots <dir>`이면 도입·**활동마다 한 장**·출구·휴대폰·활동지를 찍는다. 교사 화면에서 문항마다 reveal 누출·단계별 시작·오답 만들기를 따로 본다(제출 기록에 남지 않음).
- `check-unit.mjs <단원 id>|--all [--hub URL] [--shots dir] [--no-pdf] [--static]` — 단원의 모든 차시를 크롬 하나·페이지 재사용으로 차시당 몇 초에 본다. 정적: `check-lesson.mjs`의 차시 계약 + `CATALOG_BUILD.md` 2·5절(차시 수·번호 = plan − refs, id 형식, 단원 안 중복 문항·제목, 활동 1~3·문항 3~6·출구 2~4·활동지 4 이상, `illustration.image` 없음, 성취기준 과목 코드, 교사 발문, 안전). 동적: 문항마다 시작 상태가 정답 아님·`solve`→`check`·1단계 힌트 누출 없음·`wrongAnswer`, 확인 단추 한 번, 출구 교구, 학생 화면이 바로 열리고 휴대폰 폭에서 넘치지 않음, 활동지 렌더·2쪽 이하, 단원마다 번호 있는/없는 제출. 실패는 `차시 id · 위치 · 이유` 한 줄씩, 종료 코드 1. `check-lesson.mjs`는 학생처럼 끝까지 푸는 느린 검사(차시당 1분 남짓)로 그대로 남는다.
- `simulate-class.mjs <id> --class <반>` — 30명 모의 수업. 결과 JSON에 문항별 `items[].incompleteAttempts`·`incompleteRate`·`wrongVia`(오답을 만든 방법)와 `simUnreliable`(시도로 세지지 않은 확인이 30% 넘는 문항)이 있다. 학생은 `maxAttempts`를 지킨다(닫히면 '다음 문제' → `closedByAttempts`, 문항별 `closed`). 약한 학생은 틀린 뒤 힌트 사다리를 올라가고(문항별 `hintLevels`), 힌트 단계만큼 다음 시도가 조금 쉬워진다. 문항 하나가 `--item-timeout`초(기본 60)를 넘으면 건너뛰고 `timedOut`에 적는다(페이지가 통째로 멈추면 그 학생만 끝낸다).
- `classroom-hub.mjs`의 개인정보 거름(`PII`)은 모듈에서 가져다 쓸 수 있다(가져올 때는 서버를 띄우지 않는다). 숫자 앞이 숫자·소수점이면 시작하지 않아 긴 소수(0.142857142857, 1.3333333333333333)는 걸리지 않는다.
- **번들 신선도:** 허브 경로 학생은 `dist/<id>/`를 받는다. 두 스크립트는 번들이 차시·교구·플레이어 원본보다 오래되었으면 경고하고, `--rebuild`를 주면 `build-bundles.mjs`로 다시 묶는다.
