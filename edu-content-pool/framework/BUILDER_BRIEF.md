# 모듈 작성자 지침 (영역 하나 × 학년군 하나)

작업 디렉터리: `/Users/nm/works/paper-cutting-ui-modules` (브랜치 `feat/changche-modules`). 브라우저 검사 허브: `http://localhost:8799` (이미 떠 있다 — 새로 띄우지 않는다).

## 할 일

체계도 `edu-content-pool/framework/*.json` 에서 맡은 영역·학년군(`bands[학년군].modules[]`)의 **계획 모듈 전부**를 내용까지 쓴다. 파일은 `edu-content-pool/modules/<영역>/<학년군 code>.js` 하나뿐이다(학년군 code: 초1-2 `e12` · 초3-4 `e34` · 초5-6 `e56` · 중 `m` · 고 `h`). 이미 있는 모듈은 지우지 않고 이어 쓴다.

## 먼저 읽을 것 (이 순서)

1. `edu-content-pool/MODULES_BUILD.md` — 모듈 형식·조합 규칙·학년군 기준·검사 명령 (계약 전문)
2. `edu-content-pool/framework/FRAMEWORK_SPEC.md` — 학년군별 학습 방식과 피할 것
3. `edu-content-pool/modules/saf-life/e12.js` — 기준 예시
4. `edu-content-pool/engine/TOOLS.md` 와 쓰는 교구 파일 첫머리 주석(`engine/tools/<id>.js`) — 옵션·상태·target 모양
5. 근거: `edu-content-pool/sources/changche/research-*.md` — 사실·수치·법 조항은 여기 있는 것만 쓴다

## 지킬 것

- 모듈 id·type·tool·minutes 는 체계도 계획과 **똑같이**. `brief`·`levels` 가 약속한 것을 교구 설정이 실제로 한다.
- 자기 파일만 고친다. `_framework.js`·`index.js`·다른 영역 파일·체계도 json 은 고치지 않는다. 커밋하지 않는다. `git stash`·`pkill`·허브 재시작 금지.
- 임시 파일은 `/tmp/mod-<영역>-<학년군>/` 아래에만.
- 학생 이름 예시는 가명 한두 글자만. 피해 경험 묻기 금지, 자살예방은 방법 묘사 금지, 계기교육은 정치적 중립(정당·현직 정치인 언급 금지).
- 파일이 커지면 주제 단위로 나눠 쓰고 주제마다 검사한다.

## 생활안전(1차)에서 배운 것 — 계획을 고쳐야 하는 교구 한계

다섯 작성자가 모두 같은 자리에서 막혔다. 계획 글을 그대로 못 하면 아래처럼 바꾸고, 모듈 `levels` 글은 **실제 설정대로** 적는다.

- **body**: 손·손가락·손바닥·머리·얼굴·입술·발 칸이 없다. 가까운 칸(손목·목·혀·피부·발목)으로 바꾸거나 학생이 자기 몸을 짚게 하고 notes 에 적는다.
- **map**: 문항마다 핀 하나. "핀 1·2·3개"는 이름 보이기·이름 숨기기·헷갈리는 장소 더하기·"왜 여기" 보기 고르기로 단계를 나눈다.
- **카드 계열(mindmap·sortboard 등)**: 카드 한 장의 정답 칸은 하나. "두 칸에 다 맞는 카드"는 따로 고르기 문항으로.
- **문항 수는 단계마다 같다**: "쉬움은 2개만"은 할 수 없다 — 쉬움은 이름·단서를 보이는 쪽으로.
- **정리(출구) 질문은 단계별 판이 없다**: 단계 차이는 교사 진행 방식으로 적는다.
- **economy**: 돈(원)만 센다. 시간 예산은 카드 정렬·차례로.
- **자유 글쓰기·말하기**는 채점되지 않는다: rubric-writing 이 아니면 활동지나 `free`·talk 문항으로.
- **표지·그림문자**는 교구가 그리지 못한다: 카드에 말로 적고 교사 메모에 실물을 보이라고 쓴다.
- **sortboard 글 카드 모드**(2026-11-01 추가): `toolOptions: { slots: ['칸 이름', …](2~4개), cards: ['글' 또는 { id, text, icon? }] }`, `target: { sort: { '칸 이름': [카드 id…] } }` — mindmap sort 와 같은 꼴, target 에 없는 카드는 함정 카드. 카드 글 40자 안팎. 쉬움 `instant`·`showCount`·`limit: n`, 도전 `more: [더할 카드]`(글 카드 모드에서는 배열). 카드 한 장의 정답 바구니는 하나. 생김새가 '선반 위 종이 바구니'라 mindmap 가지와 구별된다. 자세한 표는 `engine/tools/sortboard.js` 첫머리.
- **wordcards** 는 원래 영어 낱말 교구다. flip·listen·spell 은 영어 발음(en-US)을 낸다 — 창체에서는 sort·pick·order·fill(공통 카드 판, 한국어 글 카드)을 쓰고, flip 이 꼭 필요하면 `speak: false`.
- **map 핀(큰 격자)·chart 표 칸·body 팔 손잡이**의 휴대폰 44px 결함은 2026-11-01 교구에서 고쳤다 — 격자를 줄이거나 tableBlanks 를 줄이는 우회는 이제 필요 없다.
- **활동 모듈 id 는 `<주제>.activity.<이름>`**. 법정교육 체계도(mandatory.json)는 `.act.` 로 적혀 있었는데 2026-11-02 `.activity.` 로 바꿨다 — 예전 사본을 보고 `act.` 를 쓰지 않는다.
- **pattern** 칸 44px·**map 범례 빈칸**·**chart 꺾은선 점**도 2026-11-02 교구에서 고쳤다. pattern 금지 표시는 `'circle:red'`(빨강)를 쓴다(rose 대신).
- **timer** 두 구간 이름은 `toolOptions.labels: ['게임', '쉬기']`(각 5자 이하)로 바꿀 수 있다 — '운동' 칸을 다른 뜻으로 읽게 하는 우회는 이제 하지 않는다. state·target 은 그대로 work/rest.
- **clock**: 단계마다 target 분이 그 단계 `minuteStep` 의 배수여야 한다(정적 검사가 잡는다).
- **emotion branch** 보기 누름 영역이 휴대폰에서 43.7px 이던 결함은 2026-11-01 교구에서 고쳤다(정리 질문에도 branch 를 써도 된다).
- **차시 제목 40자**를 넘으면 활동 제목을 줄인다(체계도 json 은 고치지 않는다).

## 근거에 없는 수칙은 한곳에 모은다

근거 파일(`research-*.md`)에는 고시 항목 제목뿐 세부 수칙이 거의 없다. 일반 안전 수칙을 쓸 때는:

- 파일 첫머리 주석에 `사람 확인:` 목록으로 **모든** 그런 문장을 모듈 id 와 함께 적는다(보고에도 같은 목록). 공식 안내처(국민재난안전포털·소방청·도로교통공단·질병관리청·식품의약품안전처·한국소비자원 등) 중 어디서 확인해야 하는지 함께 적는다.
- 수치(초·m·%·명)는 근거에 있는 것만. 연습용 값은 "우리 반 약속", 그래프는 '가상'이라고 화면에 밝힌다.
- 전화번호는 체계도 concepts 에 있는 것만(112·119·1388 등).

## 완료 기준 (셋 다 종료 코드 0)

```bash
cd /Users/nm/works/paper-cutting-ui-modules
node edu-content-pool/check-module.mjs <영역>/<학년군 code> --static
node edu-content-pool/check-module.mjs <영역>/<학년군 code> --hub http://localhost:8799
node edu-content-pool/check-module.mjs <영역>/<학년군 code> --hub http://localhost:8799 --touch
```

그리고 `--static --verbose` 출력에 "아직 안 쓴 계획 모듈"이 없어야 한다. 종료 코드는 `rc=$?` 로 바로 받는다(파이프 뒤 종료 코드는 tail 의 것이다).

## 보고 (마지막 메시지)

쓴 모듈 수 / 계획 모듈 수, 세 검사의 종료 코드, 체계도 계획대로 할 수 없었던 모듈과 이유(교구가 그 활동을 못 하는 경우 등), 사람이 확인해야 할 사실·문구.
