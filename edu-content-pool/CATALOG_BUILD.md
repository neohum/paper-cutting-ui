# 카탈로그 전 차시 제작 계약 (5,199차시 · 330단원)

24개 차시(`lessons/data/*.js`)와 **같은 품질 계약**으로 카탈로그의 모든 차시를 수업에 바로 쓸 수 있게 만든다.
배포는 all-market.kr 무료 배포이며 학생에게는 **런처가** 차시를 나눠 준다. 그래서 학생 입장 화면(반 코드·번호 입력)은 없다.

기준 문서: `engine/README.md`(교구·차시 계약 전문 — 이 문서가 그 위에 덧붙이는 것만 적는다), 기준 차시: `lessons/data/g2-math-clock.js`.

## 1. 단원·차시 식별자

- 목록 정본: `units-index.json` (330단원, 5,199차시). 단원마다 `id`, `catalogUnit`, `plan[]`(차시 번호 `i`, `lessonId`, `role`, 카탈로그 제목, `catalogTool`, `topic`), `existing`(이미 있는 24개 차시).
- 단원 id: `g<학년>-<과목>-<학기>-<단원 두 자리>` — 과목: 국어 `kor`, 수학 `math`, 통합교과 `int`, 사회 `soc`, 도덕 `mor`, 과학 `sci`, 체육 `pe`, 음악 `mus`, 미술 `art`, 영어 `eng`, 실과 `prac`. 예: `g3-sci-1-02`.
- 차시 id: `<단원 id>-<차시 두 자리>`. 예: `g3-sci-1-02-04`.
- 주제 정보: `catalog-data.js`의 `EDU_CATALOG.topics[topic]` — `n` 주제, `f` 성격(concept·representation·procedure·reflection…), `e` 기대 행동, `a` 평가 문항, `m` 흔한 오개념. 목표·출구 질문·힌트·`wrongAnswer`의 근거로 쓴다.

## 2. 단원 파일 (`lessons/units/<단원 id>.js`)

```js
PaperLessons.registerUnit({
  id: 'g3-sci-1-02', schema: 'edu-unit.v1', catalogUnit: 'g3-과학-1학기-2',
  grade: 3, subject: '과학', unitTitle: '2. 동물의 생활',
  flow: '단원 진행 방향 — 차시들이 어떤 순서로 무엇을 쌓는지 3~6문장 (교사용)',
  refs: { 2: 'g3-science-sound' },      // existing에 있는 차시 번호 → 이미 있는 차시 id (그 번호는 lessons에 쓰지 않는다)
  lessons: [ { id: 'g3-sci-1-02-01', schema: 'edu-lesson.v1', catalog: { unit: 'g3-과학-1학기-2', lesson: 1 }, … }, … ],
});
```

- `lessons[]`의 각 차시는 `edu-lesson.v1` **전부**를 따른다(3단계 40분, 활동·문항·`target`, 출구 질문, 활동지, 그림 `illustration.prompt`+`scene`). `illustration.image`는 쓰지 않는다(단원 그림은 뒤에 따로 만든다).
- 차시 수와 번호는 `units-index.json`의 `plan`과 똑같다. `refs`의 번호만 빠진다.
- 차시 제목은 카탈로그 제목을 그대로 베끼지 않는다. 카탈로그 제목은 '주제 - 성격' 틀에서 나온 것이므로, 그 차시에서 학생이 실제로 하는 일을 쓴 제목으로 바꾼다(예: "동물을 관찰하여 특징에 따라 동물을 분류 - 개념 확인" → "다리 수와 사는 곳으로 동물 나누기").
- **같은 단원 안에서 차시가 반복되면 안 된다.** `role`이 연습(practice)·확장(extend)이어도 새 상황·새 수·새 자료를 쓴다. `intro`는 단원 첫 시간(동기·사전 지식 확인), `wrap`은 단원 정리(배운 것 묶기·자기 평가).
- 교구 선택: `catalogTool`은 출발점일 뿐이다. 차시에 더 맞는 교구가 있으면 바꾼다(아래 교구 표). 한 차시 안에서 활동마다 다른 교구를 써도 된다. 엔진 교구로 할 수 없는 활동은 `free: true` 짝 활동으로 쓰되, 한 차시의 전개 문항이 모두 free이면 안 된다(체육·미술·음악의 표현 차시는 예외 — 대신 `timer`·`collage`·`keyboard`의 자기 점검 모드를 쓴다).
- 성취기준: `units-map.json`의 같은 과목 코드만. 단원 목록이 비었거나 미확인(`standardsVerified:false`)이면 `standards: []`로 두고 지어내지 않는다.
- 체육·과학 실험·실과 조리/공구 차시는 `safety[]`를 쓴다.
- 학생 개인정보(이름·사진·연락처)를 상태나 문항에 넣지 않는다. 학생 이름 예시는 가명 한두 글자(민지, 준호)만.

## 3. 교구 (`engine/tools/<id>.js`)

카탈로그 교구 id마다 엔진 교구가 하나씩 있어야 한다. **교구는 차시 데이터만으로 수천 개의 서로 다른 문항을 만들 수 있게 설정형으로 만든다** — 낱말·그림 이름·칸 수·보기는 모두 `toolOptions`/`state`/`target`으로 들어온다. 교구 안에 특정 차시 내용을 박지 않는다.

| 카탈로그 id | 엔진 교구 | 상태 |
| --- | --- | --- |
| clock, tenframe, fraction, hangul | 같은 id | 있음 |
| numberline, multiply, pattern, chart | 같은 id | 새로 |
| shapes, measure, force, matter | 같은 id | 새로 |
| story, timeline, lifecycle, mindmap | 같은 id (공통 카드 판 `engine/tools/_cards.js`) | 새로 |
| emotion, wordcards, kitchen, economy | 같은 id (`_cards.js` 위) | 새로 |
| map, earth, circuit, body | 같은 id | 새로 |
| keyboard, collage, timer, block-coding | 같은 id | 새로 |

있는 특수 교구(protractor, ruler, compass, rightangle, magnet, lightray, soundwave, mirrorfold, cubenet, cylnet, circlearea, ratiobar, fracstrips, sortboard, seasons, mapcompass, earthspin)도 맞으면 쓴다.

모든 새 교구가 지킬 것(`engine/README.md` 계약에 더해):
- `getState/setState/check/reset/solve`, `hint(target,{level,attempts})` 3단계, `wrongAnswer(target)`, `distance(a,b)`, `o.print` 흑백 활동지, 키보드만으로 끝낼 수 있음, 터치 44px, `revealAfterCheck` 지원(값이 드러나는 교구).
- 정답 판정이 없는 표현 활동(그리기·작곡·몸 움직임)은 `check(target)`이 `target.selfCheck`(체크리스트 항목들)를 모두 표시했는지로 판정한다 — 교사 확인용 결과는 `getState()`에 남는다.
- 소리(건반·발음)는 Web Audio/`speechSynthesis`로 **누를 때만** 낸다. 자동 재생·자동 읽기 금지.
- 교구 파일 첫머리 주석에 옵션·상태·target 모양을 표로 적는다. 차시 작성자가 이것만 보고 쓴다.
- `tests/edu-tools.test.mjs`(없으면 만든다)에 교구마다 solve→check 참, wrongAnswer→check 거짓·incomplete 아님, 1단계 힌트에 target 값 없음을 jsdom 없이 돌릴 수 있는 범위에서 넣고, 브라우저 검사는 `check-unit.mjs`로 한다.

## 4. 플레이어·카탈로그·검사

- **학생 입장 화면 삭제**: `role=student`는 바로 수업을 연다. 반·번호는 런처가 URL(`class`, `seat`)이나 포털 `material_id` 문맥으로 넘긴다. 없으면 번호 없이 수업하고, 제출은 런처 허브/포털 경로가 주는 문맥으로만 한다(입력 화면을 띄우지 않는다).
- 레지스트리: `lesson=<id>`가 `data/`에 없으면 `units/<단원 id>.js`를 읽고 `registerUnit`이 차시들을 등록한다. `refs`는 기존 차시로 넘긴다.
- 카탈로그(`catalog.html`): 모든 차시 줄에서 **교사(전자칠판)·활동지·미리보기(학생 화면)** 로 바로 간다. 단원 머리에 `flow`(진행 방향)를 보인다. 학생 입장·반 코드 화면으로 가는 링크는 없다.
- `check-unit.mjs <단원 id>|--all [--hub URL]`: 브라우저 하나로 단원의 모든 차시를 돌린다 — 정적 검사(스키마·40분·성취기준·문항 모양·글 길이·중복 차시) + 문항마다 solve→check, 시작 상태가 이미 정답 아님, 1단계 힌트 누출 없음, wrongAnswer, 출구 교구, 활동지 인쇄 렌더. 실패는 차시 id·문항 키·이유 한 줄씩. `check-lesson.mjs`의 검사를 재사용한다.
  - **교구 범위(정적, `check-reach.mjs`)**: 단계(easy·base·challenge)마다 문항 target 을 그 단계 교구 옵션의 화면 조작만으로 만들 수 있는지 데이터로 본다 — 입력 칸 자릿수(multiply·pattern `digits`), 고르개·바구니·보기 목록(keyboard `blocks`, hangul 조각, map 범례 보기, collage 팔레트 — 대칭 문항은 시작 조각의 짝까지, fracstrips `divisors`·최대공약수 단추), 건반 범위·리듬 마디 박, −/+ 간격·범위(timer `workStep`·`restStep`·`timeUnit`, numberline `hopStep`, map `distStep`), 수직선 눈금(점·출발점·도착·읽을 점은 눈금 위). solve→check 는 solve 가 상태를 직접 써서 이 제약을 지나치므로 따로 본다. `--static` 에서도 돈다. 이 검사를 넣을 때 이미 있던 결함은 `KNOWN_REACH` 목록이 알림으로 낮추며, 고치면 목록에서 지우라고 실패로 알린다(목록에 새 줄을 더하지 않는다).
  - **터치(`--touch`, 기본 꺼짐)**: 390×844·deviceScaleFactor 3·터치 화면에서 문항마다(단계가 판을 바꾸면 그 단계도, 출구 교구 포함) 교구의 누르는 요소(단추·role·`tabindex="0"`·`.pk-draggable`·처리기가 붙은 `.pk-hit`)의 상자를 재어 44px 미만이면 실패. 그룹 상자는 안의 투명 누름 영역까지 덮으므로 보이는 그림이 아니라 누름 영역을 잰다. 구조적 예외(분수 띠 조각, 선대칭 휴대폰 교점·핀)는 `TOUCH_ALLOW`에 까닭과 함께 둔다. 차시당 수 초가 더 든다 — 교구·배치를 바꾼 단원에 돌린다.
- `build-bundles.mjs`는 단원 묶음(`dist/units/<단원 id>.zip`)과 전체 manifest를 만든다(런처 배포 단위 = 단원).

## 5. 완료 기준 (단원 하나)

1. `node edu-content-pool/check-unit.mjs <단원 id>` 종료 코드 0(교구 범위 정적 검사 포함). 교구 배치나 누르는 요소를 바꿨으면 `--touch`도 0.
2. 차시 수 = plan 수 − refs 수, 차시 id·번호 일치.
3. 같은 단원 안에서 같은 문항(prompt+target) 중복 없음, 차시 제목 중복 없음.
4. 차시마다 전개 활동 1~3개, 활동마다 문항 3~6개, 출구 질문 2~4개, 활동지 문항 4개 이상, `levels` 세 단계.
5. 교사 발문(`teacher`)은 실제로 말할 문장과 짚을 오개념을 담는다(“~를 지도한다” 같은 빈말 금지).
