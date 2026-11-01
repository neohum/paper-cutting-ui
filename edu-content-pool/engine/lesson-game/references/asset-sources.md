# 그림·소리 자료 가져오기

순서: **① 코드로 그린다 → ② 프로젝트 자료 보관소 → ③ CC0 공개 자료.** 유료 생성 API, API 키가 필요한 서비스,
라이선스가 불분명한 검색 결과 이미지는 쓰지 않는다.

## ① 코드로 그리기 (기본)

대부분의 수업 게임은 이것으로 충분하다. 출처 기록이 필요 없고 파일 크기가 0 이다.

- 도형: `ctx.roundRect`, `arc`, `bezierCurveTo` 로 비커, 동물 실루엣, 카드, 표지판.
- 질감: `createLinearGradient`/`createRadialGradient`, 반투명 도형 몇 겹, 시드 난수로 흩뿌린 점.
- 움직임: 실행기의 `game.tween(obj, key, to, 초)`, 입자는 배열에 담아 `update` 에서 위치를 바꾼다.
- 글자: 캔버스 안 글자는 짧은 이름표만. 설명은 HTML 쪽에 둔다(낭독기가 읽고 크기를 바꿀 수 있다).
- 소리: `game.sound.play('tap'|'ok'|'no'|'win')` — Web Audio 로 그 자리에서 만든다.

## ② 프로젝트 게임 자료 보관소 (Cloudflare R2)

Kenney·KayKit CC0 자료 18,418개(초등 부적합 그림·중복 제거, WebP·GLB)가 올라가 있다(2026-11-01 확인).
- 목록: `https://pub-254eeb376c724df29fd4930b668b4586.r2.dev/cc0/v1/manifest.json` (약 3MB)
- 항목 모양: `{"i":id, "n":한국어 이름, "c":분류, "f":파일 경로, "t":[태그], "p":출처 팩, "a":저작자, "w","h":크기}`
- 파일 주소: 같은 앞부분 + `cc0/v1/` + `f` 값. 분류는 manifest 의 `categories`(건물·자연·캐릭터·아이템·우주·동물 등 16개).
- 태그(`t`)가 한국어라 "동물", "우주" 처럼 찾으면 된다. 쓰지 않는 큰 목록을 통째로 게임에 넣지 않는다.

쓸 때 지킬 것:

- 게임을 만들 때 내려받아 게임 폴더의 `assets/` 에 **복사해 넣는다.** 게임이 실행 중에 R2 주소를 부르면 안 된다
  (오프라인·외부 요청 0 건 규칙).
- 보관소 목록에 적힌 라이선스(CC0 또는 CC-BY)와 원저작자를 그대로 credits.md 에 옮긴다.

## ③ CC0 공개 자료

받기 전에 **그 자료 페이지에서 라이선스가 CC0 인지 직접 확인**한다. 같은 사이트 안에서도 자료마다 다를 수 있다.

| 출처 | 주소 | 무엇 | 라이선스 확인 방법 |
|---|---|---|---|
| Kenney | https://kenney.nl/assets | 2D 스프라이트, UI, 효과음, 3D | 각 묶음에 `License.txt` (CC0 1.0). 받은 zip 안에서 확인 |
| Poly Haven | https://polyhaven.com | 질감(textures), HDRI, 3D 모델 | 사이트 전체 CC0. 자료 페이지 하단 License 표시 확인 |
| OpenGameArt | https://opengameart.org | 스프라이트, 타일, 음악, 효과음 | **자료마다 다르다.** 고급 검색에서 License 를 CC0 만 체크하고, 자료 페이지의 License 칸이 CC0 인지 다시 본다 |
| ambientCG | https://ambientcg.com | 질감, HDRI | 사이트 전체 CC0. 자료 페이지 확인 |

쓰지 않는 것: CC-BY-SA·CC-BY-NC(배포 조건이 복잡하다), GPL 그림, "무료"라고만 적힌 자료, 저작자 표시 없는
재업로드본, 상용 게임에서 뽑은 그림.

CC-BY 는 ②의 보관소 자료처럼 원저작자가 분명할 때만 쓰고, 게임 정리 화면에도 출처를 보이게 적는다.

## 받은 파일 다루기

- 게임 폴더의 `assets/` 아래에 원래 이름이 아니라 **게임 안 역할로 이름을 짓는다** (`beaker-glass.png`,
  `drop-sound.ogg`). 원래 이름과 주소는 credits.md 에 남는다.
- 필요한 것만 넣는다. 묶음 전체를 넣지 않는다. 그림은 긴 변 512px 이하, 소리는 ogg 와 mp3 중 하나.
- 이미지를 `<img>` 나 `new Image()` 로 부를 때 주소는 `assets/…` 상대 경로. `make-single-file.cjs` 가 이 경로를
  data: 주소로 바꿔 한 장에 넣는다.

## credits.md 형식

```
# 자료 출처

| 게임 안 파일 | 원래 자료 | 만든 사람 | 출처 주소 | 라이선스 | 고친 점 |
|---|---|---|---|---|---|
| assets/beaker-glass.png | Science Pack / beaker.png | Kenney | https://kenney.nl/assets/... | CC0 1.0 | 크기 줄임 |
| (코드로 그림) | — | 게임 제작자 | — | — | 비커·리트머스 종이·바구니 |
```

코드로만 그렸다면 그 사실을 한 줄로 적는다. 비워 두지 않는다.
