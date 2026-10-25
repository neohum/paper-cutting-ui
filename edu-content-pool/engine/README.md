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
- **`o.print`가 참이면 활동지 그림이다.**
  - 정답이 드러나는 표기(디지털 숫자, 각도 값, 결과 문구)는 숨긴다.
  - 인쇄 흑백 처리는 CSS가 한다. `.pk-face`는 흰 바탕 검은 칼선, `.pk-under`는 숨김.
- `kit.transform(g, { sx, sy })`로 한 방향만 늘일 수 있다. 직접 `transform` 속성을 쓰지 않는다.
- 자체 소리를 내면 `kit.soundOn()`이 거짓일 때 소리를 끈다. 출구 질문 교구는 `exitTicket[].state`로 시작 상태를 받는다.
- 조작이 끝날 때마다 `kit.recorder.log('<id>', state)`를 남긴다. 한 문장 상태 안내는 `kit.announce(text)`로 한다.
- 소리는 `kit.tick('ok'|'no')` 정도만 쓴다. 학생 이름 같은 개인정보는 상태에 넣지 않는다.

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
- **출구 질문:** `wrapup.exitTicket[]`의 `type`은 `choice`, `tool`, `short`, `mood` 중 하나다.
- **활동지:** `worksheet.items[]`의 `type`은 `figure`, `choice`, `blank`, `check`, `table`, `short`, `draw` 중 하나다.
  - `figure`는 엔진 교구를 흑백으로 그린다.
- **그림:** `illustration.prompt`는 아래 문장 틀을 그대로 쓰고 `[ ]`만 채운다. 이 틀은 그대로 이미지 생성기에 넘긴다.
  > Layered paper-cut illustration of [ ], with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.
- `illustration.scene`은 같은 장면을 `PaperKit.scene` 모티프로 조립한 벡터판이다. 화면에는 이것을 띄운다.
  - 쓸 수 있는 모티프: `hills`, `sun`, `moon`, `cloud`, `tree`, `flower`, `house`, `star`, `wave`, `mountain`, `bird`, `leaf`, `snow`, `text`
