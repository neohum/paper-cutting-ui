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
        hint(target) {},           // (선택, reveal 교구는 사실상 필수) 힌트 단추 — { hint: '한 문장', correct?: true|false }. 아무것도 드러내지 않는다
        wrongAnswer(target) {},    // (선택) 그럴듯한 오개념 상태 하나 — '다 했지만 틀린' 상태. 모의 수업·자동 검사가 오답 시도로 쓴다
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

### 모의 수업용 오답 (`wrongAnswer`)

- `wrongAnswer(target)`은 `setState()`에 그대로 넣을 수 있는 상태를 돌려준다. 그 상태에서 `check(target)`은 `incomplete`가 아니고 `correct: false`여야 한다(숫자판·보기·핀처럼 '다 채운' 상태). 학생이 실제로 자주 하는 실수를 고른다(예: 반지름 대신 지름, 짧은바늘을 앞 숫자에).
- `simulate-class.mjs`는 틀린 시도를 `wrongAnswer` → 화면의 입력 칸·고르지 않은 보기 → 정답 상태의 숫자 하나를 조금 바꾼 상태(`PaperLessons.flow.findWrong`) → 방향키 순으로 만든다. 확인이 시도로 세지지 않은 비율이 30%를 넘는 문항은 결과 JSON의 `simUnreliable`에 오른다(그 문항의 '한 번에 맞힘'은 믿지 말 것). 문항별 `incompleteAttempts`도 함께 낸다.
- `check-lesson.mjs`는 '다 했지만 틀린 상태'를 만들지 못한 문항을 알림으로 남긴다 — 그 교구에 `wrongAnswer`가 필요하다는 뜻이다.

### 고르기 단추 모양

- 교구 안 HTML 고르기 단추는 `class="pl-btn"`(또는 `pk-choice`)에 `aria-pressed="true"`(라디오 모양이면 `role="radio"` + `aria-checked="true"`)만 달면 플레이어가 '고름' 모양(민트 바탕·안쪽 고리·굵은 글자)을 입힌다. 색만으로 구분하지 않는다.

### 휴대폰(820px 이하)

- 확인·힌트·처음으로 띠는 교구 **바로 아래**에 놓이고 화면에 떠 있지 않는다(띠가 교구 아래쪽을 덮지 않게). 대신 무대 높이를 `100svh − 띠 높이(--pl-bar-h, 64px) − 40px`로 묶어 교구와 띠가 한 화면에 함께 들어온다. 무대 밑에 HTML 칸(고르기 단추 등)을 두는 교구는 그 높이만큼 무대가 더 작아 보일 수 있다.

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
- **문항별 단계 시작(선택):** `items[n].levels = { easy?: { state?, toolOptions? }, base?: …, challenge?: … }`. 학생이 고른 단계에 칸이 있으면 그 단계의 `state`가 문항의 `state`를 **바꾸고**, `toolOptions`는 문항의 `toolOptions` 위에 **같은 키만 덮는다**(활동 `levels` 옵션 → 문항 `toolOptions` → 단계별 `toolOptions` 순). '처음으로'도 그 단계의 시작 상태로 돌아간다. `check-lesson.mjs`가 모양(모르는 단계·칸, 빈 칸)과 '그 단계 시작 상태가 이미 정답'을 검사한다.
- **확인 단추:** 틀린 직후 1.2초 동안 잠긴다(`aria-disabled`). 교구를 바꾸지 않고 다시 누르면 시도로 세지 않고, 보이던 피드백과 자동 힌트는 그대로 둔다. 피드백·힌트 줄에는 누르면 읽어 주는 단추가 붙는다(자동 읽기는 없다).
- **성취기준:** `standards`의 코드는 차시 과목 머리글자와 같아야 한다(국어→국, 수학→수, 과학→과, 사회→사, 통합교과→바·슬·즐, 도덕→도). `units-map.json`의 `catalog.unit` 단원 목록에 같은 과목 코드가 하나라도 있으면, 차시의 코드는 그 목록 안에 있어야 한다. 단원이 없거나 같은 과목 코드가 없으면 검사는 알림만 남긴다.
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

## 검사 도구

- `check-lesson.mjs <id>` — 정적 계약 + 실브라우저 흐름. `--shots <dir>`이면 도입·**활동마다 한 장**·출구·휴대폰·활동지를 찍는다. 교사 화면에서 문항마다 reveal 누출·단계별 시작·오답 만들기를 따로 본다(제출 기록에 남지 않음).
- `simulate-class.mjs <id> --class <반>` — 30명 모의 수업. 결과 JSON에 문항별 `items[].incompleteAttempts`·`incompleteRate`·`wrongVia`(오답을 만든 방법)와 `simUnreliable`(시도로 세지지 않은 확인이 30% 넘는 문항)이 있다.
- **번들 신선도:** 허브 경로 학생은 `dist/<id>/`를 받는다. 두 스크립트는 번들이 차시·교구·플레이어 원본보다 오래되었으면 경고하고, `--rebuild`를 주면 `build-bundles.mjs`로 다시 묶는다.
