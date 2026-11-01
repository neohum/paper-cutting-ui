# 창체 모듈 제작 계약 (edu-module.v1)

창체(안전·법정·계기·자율) 수업은 '차시 = 고정 묶음'이 아니라 **도입·활동·정리 모듈**을 조합해 꾸린다.
무엇을 만들지(주제·모듈 계획·추천 조합)는 체계도 `framework/*.json`(형식: `framework/FRAMEWORK_SPEC.md`)이 정하고,
이 문서는 그 계획대로 **모듈 내용**을 쓰는 법과 검사 명령을 적는다. 교구·문항 계약은 `CATALOG_BUILD.md`·`engine/README.md`·`engine/TOOLS.md` 그대로다.

예시: `modules/saf-life/e12.js`(생활안전 초1-2 '우리 집 위험한 물건' — 도입 2·활동 3·정리 2).

## 1. 파일과 id

| 무엇 | 자리 / 모양 |
| --- | --- |
| 모듈 내용 | `modules/<영역 code>/<학년군 code>.js` — 학년군 code: 초1-2 `e12` · 초3-4 `e34` · 초5-6 `e56` · 중 `m` · 고 `h` |
| 등록 | 파일 하나가 `PaperLessons.registerModules([ …모듈 ])` 한 번(file:// 에서도 돌게 script 로 읽는다 — fetch·import 금지) |
| 모듈 id | 체계도 계획(`bands[학년군].modules[].id`)과 **똑같이**: `<주제 id>.<intro\|activity\|wrap>.<영문 이름>` (예 `saf-life.e12.g1-home.activity.touch-sort`) |
| 추천 조합 차시 | `cc-<학년>-<영역>-<두 자리 n>` — 체계도 `sequences[학년].lessons[n]`. 예 `cc-1-saf-life-03` → `player.html?lesson=cc-1-saf-life-03` |
| 교사가 고른 조합 | `player.html?compose=<도입 id>,<활동 id>…,<정리 id>&grade=<학년>&role=student\|teacher\|print` (차시 id 는 `cc-<학년>-<영역>-x<해시 6자>`) |
| 생성 파일 | `modules/<영역>/_framework.js`(체계도의 주제·추천 조합), `modules/index.js`(카탈로그·조합 화면 색인) — `node edu-content-pool/build-modules.mjs` 가 만든다. 손으로 고치지 않는다 |

여러 에이전트가 동시에 쓰므로 **자기 영역·학년군 파일만** 고친다. 생성 파일(`_framework.js`·`index.js`)은 로컬 확인용으로만 다시 만들고 커밋은 코디네이터가 한다. `check-module.mjs` 는 검사하는 영역의 `_framework.js` 를 체계도와 같게 맞춘다(내용이 같으면 쓰지 않음).

## 2. 모듈 형식 (edu-module.v1)

모든 모듈의 공통 칸:

```js
{
  id, schema: 'edu-module.v1', type: 'intro' | 'activity' | 'wrap',
  domain: 'saf-life', band: '초1-2', topic: 'saf-life.e12.g1-home', grades: [1],   // grades ⊆ 체계도 주제 grades
  title: '카드 제목(30자 이하)', method: '학습 방식(체계도 method)', tool: 'mindmap' | null, minutes: 14,   // tool·minutes 는 체계도 계획과 같아야 한다
  levels: { easy: '…', base: '…', challenge: '…' },   // 쉬움·기본·도전에서 무엇이 달라지는지 — 실제 교구 설정과 맞게(화면이 약속한 것은 코드가 한다)
  notes: '교사 메모(선택)',
}
```

종류별 칸:

- **도입** `type: 'intro'` (5~6분): `intro: { teacher, student, demo: { tool, options, sequence[] }, art: { draw, banner, extra? } }`. `tool` = `demo.tool`. `art.draw` 는 영어 장면 묘사(조합기가 그림 프롬프트 틀에 넣는다), `banner` 는 장면 가운데 글.
- **활동** `type: 'activity'`: `activity: { title, tool, teacher, task, levels: { easy:{}, base:{}, challenge:{} }, items: [3~6개] }` + 선택 `worksheet: { items[], easy?[] }`.
  - `title` 에 '활동 1.' 을 붙이지 않는다(조합기가 차례대로 붙인다). `id`·`minutes` 도 쓰지 않는다(조합기가 `a1`·`a2`… 와 모듈 `minutes` 를 쓴다).
  - `activity.levels` 는 **교구 옵션**(예 `{ live: true, instant: true }`), 모듈의 `levels` 는 **설명 글**이다. 문항 단계별 판은 문항 `levels[단계] = { prompt, target, toolOptions, state }`(CATALOG_BUILD.md·check-lesson itemShape). 정리 출구 교구 질문도 같다 — 단계 칸에 `options` 를 쓰면 플레이어가 읽지 않아 단계별 판이 조용히 무시되므로 `check-module --static` 이 실패시킨다. timer 차례(`target.order`)는 앞에서부터 맞춰 보므로 판(`cards`)에 함정 카드가 더 있어도 되지만, 차례의 카드는 모두 판에 있어야 한다.
  - 문항(`items`) 모양·`target`·`hints`·`conclude`·`free` 는 단원 차시와 같다.
- **정리** `type: 'wrap'` (7분 안팎): `wrap: { teacher, exitTicket: [2~4개] }` + `worksheet: { title, items[2개 이상], easy?: { note?, items[] } }`. `tool` = 첫 교구 출구 질문(`type: 'tool'`)의 교구, 없으면 `null`.

## 3. 조합 규칙 (`modules/compose.js` — 플레이어·조합 화면·검사가 같이 쓴다)

- 차시 = 도입 1 + 활동 1~3 + 정리 1. 같은 학년군·같은 영역, 학년이 모든 모듈의 `grades` 안.
- 분: 초 40 · 중 45 · 고 50분. 활동 합은 '수업 − 도입 − 정리' **±3분**까지 받고, 가장 긴 활동의 분을 고쳐 정확히 맞춘다. 3분 넘게 다르면 조합하지 않는다(교사 화면이 이유를 보인다).
- 차시 제목: 추천 조합의 `title` 이 있으면 그것, 없으면 `<주제 제목> · <첫 활동 제목>`(40자 넘으면 체계도 추천 조합에 `title` 을 적는다). 목표: 추천 조합 `objective` → 주제 `objective`.
- 활동지: 활동 모듈 `worksheet.items` 를 차례대로 + 정리 모듈 `worksheet.items`(쉬운 활동지도 같은 순서). 차시마다 4문항 이상이 되게 활동 모듈에 1문항씩 두는 것을 기본으로 한다.
- 수준별 지도(`differentiation`)는 활동 모듈 `levels` 글을 잇고, `teacherNotes` 는 모듈 `notes` 를 잇는다. 성취기준은 없다(`standards: []`, 근거는 영역 `basis`·주제 `source`).

## 4. 학년군 기준 (check-module.mjs 가 재는 것, 글자 수는 띄어쓰기 뺀 수)

| 학년군 | 문항·출구 글 | 도입 학생 글·과제 | 카드·체크 항목 | 칸 이름·고르기 보기 | 금지 낱말(학생이 보는 글) |
| --- | --- | --- | --- | --- | --- |
| 초1-2 | 22 | 45 | 8 | 12 | 법률·법령·조항·제N조·처벌·징역·벌금·형량 |
| 초3-4 | 45 | 80 | 14 | 20 | 제N조·조항·시행령·징역·벌금·형량 |
| 초5-6 | 70 | 120 | 20 | 30 | 제N조·징역·벌금형·형량·'N년 이하' |
| 중 | 120 | 160 | 30 | 50 | — |
| 고 | 160 | 200 | 40 | 60 | — |

모든 학년군: 피해 경험을 묻는 글('당한/겪은 … 적·일·경험') 금지, 개인정보 모양 값 금지, 교사 발문은 실제로 말할 문장과 짚을 오개념("…~를 지도한다" 같은 빈말 금지). 주제 안에서 같은 type·교구·방식 되풀이 금지, 한 학년군(영역)의 교구 있는 모듈이 5개 이상이면 카드 계열(mindmap·story·emotion·timeline·wordcards·sortboard)이 60% 이하. 같은 학년 추천 조합 안에서 같은 모듈·같은 문항(글+정답)·같은 제목 되풀이 금지. 자살예방은 방법 묘사 금지, 계기교육은 정치적 중립(사람이 본다).

## 5. 검사 명령 (종료 코드 0 이 완료)

```bash
node edu-content-pool/classroom-hub.mjs --port 8790 &                     # 브라우저 검사용 허브
node edu-content-pool/check-module.mjs saf-life/e12 --static              # 형식·체계도 일치·학년군 기준·문항 모양·교구 범위(활동 문항·정리 출구 교구)
node edu-content-pool/check-module.mjs saf-life/e12 --hub http://localhost:8790          # + 브라우저(아래)
node edu-content-pool/check-module.mjs saf-life/e12 --hub http://localhost:8790 --touch  # + 휴대폰 누름 영역 44px
node edu-content-pool/check-module.mjs <모듈 id> | <영역> | --all [--verbose]           # --verbose: 주제별 진행(도입·활동·정리 수, 아직 안 쓴 계획 모듈)
node edu-content-pool/build-modules.mjs [--check]                        # 생성 파일 다시 만들기 / 최신인지
node --test tests/edu-modules.test.mjs                                   # 조합기 규칙
```

브라우저 검사는 `check-unit.mjs` 와 같다: 문항마다 시작 상태가 정답 아님 · solve→check · 1단계 힌트에 정답 값 없음 · wrongAnswer(다 했지만 틀림) · 단계(easy·challenge)별 판으로 풀림 · 확인 단추 한 번 · 출구 교구(쉬움·도전 판도 시작 상태 ≠ 정답·solve→check) · 학생 화면 휴대폰 가로 넘침 · 활동지 렌더·2쪽 이하 · 제출. 추천 조합 차시에 아직 안 들어간 모듈(계획 모듈이 덜 써져 그 차시가 안 열리는 경우 등)은 같은 주제의 다른 모듈과 묶은 **시험 조합**(`compose=…&probe=1`, 분 합계는 따지지 않음)으로 돌린다. 실패 줄 끝의 `(모듈 <id>)` 가 고칠 모듈이다.

## 6. 화면

- **교사 조합 화면** `lessons/compose.html?grade=<학년>&domain=<영역>[&topic=<주제 id>&ids=<…>]`: 학년·영역·주제를 고르면 도입·활동·정리 모듈 카드(방식·교구·분·수준)가 나오고, 추천 조합이 먼저 채워진다. 분 합계·조합 오류를 보이며 교사 화면·학생 화면·활동지·미리보기·학생 링크 복사로 연다.
- **카탈로그**: 창체 단원 자리에서 그 영역·학년 추천 조합이 단원 차시 수만큼 준비되면 단원 대신 추천 조합 차시와 '모듈로 꾸리기'를 보이고, 덜 됐으면 단원을 그대로 두고 '모듈로 꾸리기'와 준비 수만 붙인다(점진 교체). 체계도에만 있는 영역은 준비된 학년에 모듈 단원으로 붙는다.
- **교사 배포 화면**(`teacher.html`): `build-bundles.mjs` 가 조합되는 추천 조합 차시를 목록에 넣는다(런처 zip 묶음은 아직 없음 — 플레이어 링크로 배포).
