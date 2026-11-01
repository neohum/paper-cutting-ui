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
