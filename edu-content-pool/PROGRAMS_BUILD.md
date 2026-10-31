# 창체 트랙 차시 제작 안내 (초1~고3)

교과 밖 **창체** 단원(안전교육 7대 영역, 법정 의무교육, 계기교육, 자율·자치)을 교과 카탈로그와 같은 엔진·플레이어·검사로 만든다.
차시 계약은 교과와 같다 — `CATALOG_BUILD.md` 2·5절과 `engine/README.md` '차시 계약'을 먼저 읽는다. 이 문서는 창체에서 **다른 것만** 적는다.
본보기: `lessons/units/g3-cc-saf-life.js`(초3 생활안전), `lessons/units/g10-cc-dokdo.js`(고1 독도의 날).

## 1. 여러 에이전트가 동시에 일할 때 — 무엇을 만들고 무엇을 만들지 않나

- **에이전트는 자기 조각 파일 `programs/<그룹>.json`과 자기 단원 파일 `lessons/units/<단원 id>.js`만 만든다.** 다른 그룹의 조각·단원 파일은 고치지 않는다.
- **`units-index.json`·`programs-data.js`는 코디네이터가 마지막에 `build-programs.mjs`로 다시 만든다.** 자기 단원을 검사하기 전에 로컬에서 `build-programs`를 돌려도 되지만, **그 두 생성 파일은 커밋하지 않는다**(`git checkout -- edu-content-pool/units-index.json edu-content-pool/programs-data.js`로 되돌린다). `lessons/manifest.js`·`lessons/units/index.js`(`build-bundles.mjs` 생성)도 같다.
- `check-unit.mjs`는 `units-index.json`에 아직 없는 창체 단원을 `programs/*.json` 조각에서 직접 찾아 검사한다 — 생성 파일을 다시 만들지 않아도 자기 단원을 검사할 수 있다.
- 조각 파일 이름: 영문 소문자·하이픈(예: `programs/safety-elem.json`, `programs/law-high.json`). 합치는 순서는 파일 이름순이고, `_`로 시작하는 예시 조각(`programs/_example.json`)도 함께 합친다.

## 2. 조각 파일 `programs/<그룹>.json`

```json
{ "note": "그룹 설명(선택)", "units": [ {
  "id": "g3-cc-saf-life", "grade": 3, "subject": "창체",
  "area": "안전교육",                       // 안전교육 | 법정교육 | 계기교육 | 자율·자치
  "unitTitle": "생활안전",
  "basis": "근거 법령·고시 한 줄",
  "lessons": 2,                              // plan 길이와 같아야 한다
  "plan": [ { "i": 1, "title": "카탈로그에 보일 차시 제목", "role": "intro", "tool": "mindmap", "topic": "주제 한 줄" } ]
} ] }
```

- **단원 id**: `g<학년 1~12>-cc-<영역코드>`. 학년 1~6 = 초1~6, 7~9 = 중1~3, 10~12 = 고1~3. 영역코드는 **영문 소문자와 하이픈만**(숫자 금지 — 차시 id 끝의 `-NN`과 헷갈린다). 예: `g5-cc-law-sex`, `g8-cc-day-hangul`, `g11-cc-saf-disaster`.
- **차시 id**: `<단원 id>-<두 자리>`(예: `g10-cc-dokdo-01`). **catalogUnit**: `g<학년>-창체-<영역코드>`(예: `g10-창체-dokdo`).
- `plan[].i`는 1부터 빈틈없이, `role`은 `intro|core|practice|extend|wrap`, `tool`은 `engine/tools/<id>.js`가 있는 교구 id.
- 단원 id가 두 조각에 겹치면 `build-programs.mjs`와 `check-unit.mjs`가 오류로 멈춘다. 다른 그룹과 영역코드가 겹치지 않게 그룹 접두어를 쓴다(예: 안전 `saf-`, 법정 `law-`, 계기 `day-`, 자율·자치 `self-`).

## 3. 단원 파일 `lessons/units/<단원 id>.js`

- `subject: '창체'`, `catalogUnit: 'g<학년>-창체-<영역코드>'`, `grade`는 1~12, 차시 수·번호는 조각의 `plan`과 같다(`refs`는 `{}`).
- **`standards: []`** — 창체는 성취기준이 아니라 근거 법령·고시(`basis`)를 따른다. 성취기준을 적으면 검사가 실패한다.
- 차시 제목은 `plan.title`을 그대로 베끼지 않는다(학생이 실제로 하는 일). 같은 단원 안에서 문항·제목을 되풀이하지 않는다.
- 교구 카드 글은 **20자 안쪽**으로 쓴다. 길면 카드에서 '…'로 잘린다(검사는 잡지 않는다 — `check-lesson.mjs --shots`로 눈으로 본다).
- 학생 개인정보 금지(이름은 가명 한두 글자, 연락처·실제 번호를 적게 하지 않는다).

### 학교급별 말투·난이도

| 학교급 | 말투·활동 |
| --- | --- |
| 초1~2 | 그림 카드·짧은 문장(한 문장 15자 안팎), "~해요" 말투, 고르기·나누기 위주. 겁주는 장면·자극적 그림 금지. |
| 초3~6 | 생활 장면 카드, 까닭 말하기, 갈림길(`emotion` branch)로 행동 결과 보기, 짝 말하기. |
| 중1~3 | 사례 읽기와 판단, 모둠 토의(짝 활동 `free`+`talk`), 근거를 들어 말하기. |
| 고1~3 | 사례 분석·자료(사료·통계·법 조문) 읽기, 사실·의견·주장 가려내기, 쟁점 토의와 대응 글쓰기. |

### 영역별 주의

- **안전교육**: 「학교 안전교육 실시 기준 등에 관한 고시」 7대 영역(생활·교통·폭력예방 및 신변보호·약물 및 사이버 중독 예방·재난·직업·응급처치). "이렇게 하면 안전해요"라는 행동을 익히게 하고 공포를 키우지 않는다. 응급처치는 학교급 범위(초: 알리기·도움 청하기, 중·고: 심폐소생술 절차 이해)를 넘지 않는다.
- **법정교육**(성교육·학교폭력 예방·장애인식개선·자살 예방·아동학대 예방 등): 근거 법령을 `basis`에 적는다. **성교육은 학교급별 교육부 「학교 성교육 표준안」 범위 안에서만** 다룬다(초: 몸의 이름·경계 존중·싫어요 말하기, 중·고: 표준안의 해당 학교급 주제). 피해 경험을 드러내게 하는 문항(자기 경험 쓰기·고백)은 쓰지 않고, 도움 받을 곳(담임·보건·Wee클래스·117)을 알린다.
- **계기교육**(독도의 날·한글날·현충일 등): **정치적 중립**을 지킨다. 교육부·정부 기관·공공기관(외교부, 동북아역사재단, 국가보훈부, 국립국어원 등)의 공식 자료에 실린 사실만 근거로 쓰고, 날짜·문서 이름은 그 자료의 서술대로 쓴다. 특정 정당·인물·국가의 국민 전체를 비난하는 표현을 쓰지 않는다. 논쟁이 있는 주제는 사실·의견을 가르는 활동으로 다룬다.
- **자율·자치**: 학급 회의·역할 정하기·규칙 만들기처럼 학생이 정하는 활동은 정답이 하나인 문항으로 만들지 말고, 절차(차례)·조건(공정한 규칙의 요건)을 확인하는 문항과 짝 활동으로 짠다.

## 4. 완료 기준 (단원 하나)

1. `node edu-content-pool/check-unit.mjs <단원 id>` 종료 코드 0(브라우저 검사 포함 — 허브가 떠 있어야 한다, `--hub http://localhost:<포트>`).
2. 차시 수 = 조각 `plan` 수, 차시 id·번호 일치, `standards: []`.
3. 같은 단원 안 문항(prompt+target)·차시 제목 중복 없음.
4. 차시마다 전개 활동 1~3개, 활동마다 문항 3~6개, 출구 질문 2~4개, 활동지 문항 4개 이상, `levels` 세 단계.
5. 교사 발문은 실제로 말할 문장("…")과 짚을 오개념을 담는다.
6. 카드 글이 잘리지 않았는지 `check-lesson.mjs <차시 id> --shots <dir>` 활동 캡처로 한 번 본다.

## 5. 명령

```bash
# 허브(다른 작업이 쓰는 포트는 피한다)
node edu-content-pool/classroom-hub.mjs --port 8793
# 자기 조각 형식 확인(쓰지 않음 — 형식 오류·id 중복이 있으면 종료 코드 1)
node edu-content-pool/build-programs.mjs --lint
# 단원 검사(조각에서 바로 찾는다)
node edu-content-pool/check-unit.mjs g3-cc-saf-life --hub http://localhost:8793
node edu-content-pool/check-unit.mjs g3-cc-saf-life --static          # 브라우저 없이
node edu-content-pool/check-lesson.mjs g3-cc-saf-life-01 --hub http://localhost:8793 --shots /tmp/shots
# 카탈로그에서 보고 싶을 때만(커밋하지 않는다)
node edu-content-pool/build-programs.mjs
node edu-content-pool/build-bundles.mjs --unit g3-cc-saf-life
git checkout -- edu-content-pool/units-index.json edu-content-pool/programs-data.js edu-content-pool/lessons/manifest.js edu-content-pool/lessons/units/index.js
```

`--check`는 코디네이터용이다 — 생성 파일이 조각보다 낡았으면 종료 코드 1. 에이전트는 `--lint`만 쓴다.
