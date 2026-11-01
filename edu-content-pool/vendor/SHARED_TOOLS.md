# 공용 학습자료 도구 (vendor)

교실 LAN·런처·`file://` 에서 네트워크 없이 돌도록 정확한 버전을 이 폴더에 실었다.
도구마다 폴더가 `<이름>@<버전>/` 이고, 안에 원본 `LICENSE`, 고른 배포 파일, `SOURCE.txt`
(출처 URL·버전·integrity·sha256·받은 날짜·검토 결과·파생 파일을 만든 명령)가 있다.
동작하는 최소 예제는 `_samples/<이름>.html` 이다. 받은 날짜는 모두 2026-11-01.

| 도구 | 버전 | 라이선스 | 어디에 쓰나 (우리 다섯 엔진) | 브라우저에서 읽는 파일 |
| --- | --- | --- | --- | --- |
| wokwi-elements | 1.9.2 | MIT (+ 번들 안 lit, BSD-3) | 레슨 + 시뮬레이터 — 보드·부품 그림 | `wokwi-elements@1.9.2/wokwi-elements.bundle.min.js` |
| avr8js | 0.21.1 | MIT | 레슨 + 시뮬레이터 — 아두이노 우노 CPU | `avr8js@0.21.1/avr8js.iife.js` |
| hairline | 0.5.1 | MIT | 선화 — 가벼운 등각 선화, 기존 SVG 를 선화로 바꾸기 | `hairline@0.5.1/hairline.iife.js` |
| pst-labo | 2.08 | LPPL | 시험용 삽화 — **참고 자료만**, 코드 없음 | (싣지 않음) |

## 불러오는 법

### 왜 `.iife.js` 인가

Chrome 은 `file://` 페이지에서 `<script type="module">` 을 막는다(origin 이 `null` 이라 CORS 실패).
그래서 모든 도구를 **일반 `<script src>` 로 읽는 파일**로 맞췄다. 원본에 그런 파일이 없으면
(avr8js·hairline) esbuild 로 코드 변경 없이 IIFE 로 묶어 `*.iife.js` 로 두었고, 만든 명령은
각 `SOURCE.txt` 에 있다. 원본 ESM 도 함께 두었으니 http 로 서빙하는 화면이나 번들러는 그것을 써도 된다.

경로는 화면 파일에서 상대 경로로 적는다. 예: 차시 HTML 이 `edu-content-pool/lessons/x/index.html` 이면
`../../vendor/avr8js@0.21.1/avr8js.iife.js`. 버전을 올릴 때는 새 폴더를 만들고 참조를 옮긴 뒤 옛 폴더를 지운다.

### wokwi-elements — 보드·부품 그림

```html
<script src="vendor/wokwi-elements@1.9.2/wokwi-elements.bundle.min.js"></script>
<wokwi-arduino-uno id="uno"></wokwi-arduino-uno>
<wokwi-led id="led" color="red"></wokwi-led>
<wokwi-pushbutton id="btn" color="green"></wokwi-pushbutton>
<script>
  btn.addEventListener('button-press',   () => { led.value = true;  uno.led13 = true; });
  btn.addEventListener('button-release', () => { led.value = false; uno.led13 = false; });
</script>
```

그림일 뿐이다 — 전기 계산을 하지 않는다. 부품끼리 잇는 것은 화면 스크립트나 avr8js 가 한다.
예제: `_samples/wokwi-elements.html`.

### avr8js — 아두이노 우노 CPU

```js
const { CPU, avrInstruction, AVRIOPort, AVRTimer, portBConfig, portDConfig, timer0Config, PinState } = avr8js;
const program = new Uint16Array(0x4000);           // 32KB 플래시
loadHex(hexText, new Uint8Array(program.buffer));  // Intel HEX → 바이트 (예제에 15줄짜리 함수)
const cpu = new CPU(program);
new AVRTimer(cpu, timer0Config);                   // millis()/delay() 를 쓰는 프로그램이면 필요
const portB = new AVRIOPort(cpu, portBConfig);
portB.addListener(() => { led.value = portB.pinState(5) === PinState.High; }); // 13번 핀 = PB5
// 매 프레임 실제 시간만큼(16MHz) 돌린다
const end = cpu.cycles + 16e6 * dtSeconds;
while (cpu.cycles < end) { avrInstruction(cpu); cpu.tick(); }
```

입력은 `new AVRIOPort(cpu, portDConfig).setPin(2, false)` 처럼 핀에 넣는다(2번 핀 = PD2).
avr8js 는 풀업을 스스로 흉내 내지 않으므로 시작할 때 `setPin(2, true)`(버튼 뗌)를 먼저 넣는다.
예제: `_samples/avr8js.html` (wokwi 그림과 연결, 13번 핀 출력으로 LED 가 켜진다).

#### 중요한 한계: 학생이 쓴 C++ 는 브라우저에서 돌지 않는다

avr8js 는 **CPU 에뮬레이터**다. 컴파일된 기계어(.hex)만 실행한다. 아두이노 C++ 를 기계어로 바꾸려면
avr-gcc 와 Arduino 코어가 필요하고, Wokwi 는 이것을 **원격 빌드 서버**에서 돌린다. 이 저장소에도,
교실 LAN 에도 그 컴파일러는 없다(이 컴퓨터에 avr-gcc·arduino-cli 도 없다). 그래서 오프라인에서 되는 길과
안 되는 길을 이렇게 나눈다.

| 길 | 오프라인 | 판단 |
| --- | --- | --- |
| 미리 조립·컴파일한 .hex 를 싣고 실행 | 됨 | **기본 방식.** 예제가 이것이다 |
| .hex 안의 매개변수 한 개를 화면에서 바꿔 쓰기 | 됨 | **채택.** 깜빡임 간격처럼 정해 둔 명령어 한 워드만 다시 쓴다. 예제의 슬라이더 |
| 학생이 고른 블록·선택지마다 미리 만든 .hex 중 하나를 고르기 | 됨 | 차시가 필요하면 쓴다. 경우의 수만큼 .hex 를 미리 만든다 |
| 학생이 쓴 C++ 를 그 자리에서 컴파일 | **안 됨** | 원격 빌드(인터넷) 또는 교실 허브에 avr-gcc 서버를 따로 두어야 한다. 지금은 하지 않으며, 화면에도 그렇게 적는다 |
| 브라우저 안 C 컴파일러(wasm clang + AVR 백엔드 + Arduino 코어) | 이론상 | 수십 MB 이고 검증된 배포본이 없다. 싣지 않았다 |

예제 프로그램은 `_samples/avr/*.asm` 에 원본(옆에 같은 동작의 C++ 를 주석으로)이 있고,
`node edu-content-pool/vendor/_samples/avr/build-programs.mjs` 가 avr8js 에 들어 있는 assembler 로 조립해
`*.hex` 와 `programs.js` 를 다시 만들고, CPU 로 돌려 동작을 확인한다(깜빡임 주기 1.004초,
버튼 뗌→LOW·누름→HIGH). 네트워크·설치 없음, Node 22.15+ 필요. `file://` 에서는 `fetch` 가 막히므로
hex 를 `programs.js` 의 전역 `AVR_PROGRAMS` 로 싣는다. 실제 Arduino 스케치를 쓰고 싶으면 인터넷이 되는
제작 단계에서 Arduino IDE/arduino-cli 로 컴파일해 나온 `.hex` 를 같은 방식으로 싣는다(시간 함수를 쓰면
`AVRTimer(timer0Config)` 가 있어야 한다).

### 회로 실험대 — 학생이 선을 직접 잇기 (우리 엔진)

wokwi-elements(부품 그림)와 avr8js(CPU) 위에 얹은 우리 코드 `engine/circuit/`. 핀을 끌어 선을 긋고, 프로그램의
핀 출력은 그 선을 따라서만 LED·부저·입력 핀에 닿는다. 합선·저항 없음·방향 반대·떠 있는 입력을 알려 주고,
프로그램마다 과제(깜빡이기·버튼으로 켜기·번갈아 켜기) 완료를 판정한다. 사용법과 판정 모델은
`engine/circuit/README.md`, 예제는 `_samples/circuit-wiring.html`.

### hairline — 포인터에 반응하는 등각 선화

```html
<script src="vendor/hairline@0.5.1/hairline.iife.js"></script>
<div id="fig"></div>
<script>
  const f = hairline.sieve(document.getElementById('fig'), { theme: 'light', label: '겹쳐 쌓은 체 세 개',
    onRead: (t) => { /* 읽은 값 */ } });
  // f.update({ intensity: 0.8 }); f.destroy();
</script>
```

- 그림 33개(sieve·loupe·drawer·basket 처럼 교실 물건에 가까운 것도 있으나 대부분 IT 물건)와 공통 엔진이다.
  색은 CSS 변수 `--hairline-plate|hi|edge|mid|lo|stroke` 로 맞춘다. 종이 바탕 위에서는 `--hairline-plate` 를
  바탕색으로 꼭 지정한다. 기본 `label` 이 영어이므로 한국어 `label` 을 넣는다.
- **우리 그림을 새로 만들기**: 스킬 `hairline-create`(아이디어 → 한 파일 HTML 그림),
  **기존 SVG 를 선화로**: `hairline-adopt <파일.svg>`. 둘 다 `~/.claude/skills/`, `~/.codex/skills/` 에 설치했다.
  스킬의 `look.mjs` 는 처음 실행 때 `npm install playwright-core@1`(버전 미고정, 네트워크)을 캐시 폴더에 한다.
  그러지 않게 이미 있는 설치본을 가리킨다:
  `HAIRLINE_LOOK_CACHE=/Users/nm/works/paper-cutting-ui-harness node …/look.mjs …`
  (그 폴더의 `node_modules/playwright-core` 를 찾으면 설치하지 않는다.)
- shadcn 레지스트리(외부 도메인)는 쓰지 않는다. React 래퍼(`react.js`)는 싣지 않았다.
- 예제: `_samples/hairline.html` (체·돋보기·서랍).

## 참고 자료 (코드를 싣지 않음)

### pst-labo — 시험용 삽화의 실험 기구 모양·선 굵기 기준

- CTAN: https://ctan.org/pkg/pst-labo (2.08, 2026-07-30) · 문서 https://mirrors.ctan.org/graphics/pstricks/contrib/pst-labo/doc/pst-labo-doc.pdf
- 라이선스: LPPL (LaTeX Project Public License). 저자: Herbert Voß, Manuel Luque, Christophe Jorssen, Denis Girou.
- PSTricks(PostScript) 매크로라 브라우저에서 돌지 않고, 이 컴퓨터에 TeX 도 없다. **코드를 싣거나 옮겨 적지 않는다.**
  우리 시험용 삽화 렌더러는 모양과 비례를 눈으로 참고해 우리 코드로 새로 그린다(이름도 우리 말로 짓는다).
- 우리 렌더러가 갖출 기구 목록(pst-labo 소스 `pst-labo.tex`, `pst-laboObj.tex` 의 매크로에서 확인, 우리 말 이름):

| 우리 이름 | pst-labo 에서 해당하는 것 |
| --- | --- |
| 시험관 | `\pstTubeEssais` (`glassType=tube`) |
| 둥근바닥 플라스크 | `glassType=ballon`, `\pstBallon` |
| 비커 | `glassType=becher` |
| 삼각 플라스크 | `glassType=erlen` |
| 시약병 | `glassType=flacon` |
| 부피 플라스크 | `glassType=fioleJauge` |
| 컵(유리잔) | `glassType=Verre` |
| 눈금 실린더 | `\pstEprouvette` |
| 깔때기 · 분별 깔때기 | `\pstEntonnoir`, `\pstSeparateFunnel` |
| 피펫 | `\pstBigPipette` |
| 뷰렛과 적정 장치(pH 미터 선택) | `\pstDosage` (`burette`, `phmetre`) |
| 알코올램프 · 분젠 버너 가열 | `\pstChauffageTube`, `\pstChauffageBallon`, `becBunsen` |
| 증류 장치(냉각기 포함) | `\pstDistillation` |
| 스탠드 | `\pstSupport` |
| 온도계 | `\thermo` |
| 수조(결정 접시) | `\Cristallisoir` |
| 고무마개 · 꺾인 유리관 · U자관 · 집게 | `bouchon`, `tubeCoude`, `tubeCoudeU`, `pince` |
| 기체 모으기 · 기포 | `recuperationGaz`, `barbotage`, `\pstBULLES` |
| 자석 젓개 | `agitateurMagnetique` |
| 고체 시료(아연 알갱이·구리 부스러기·쇠못) | `\pstGrenailleZinc`, `\pstTournureCuivre`, `\pstClouFer` |

- 선 굵기 참고(소스의 기본값, 단위 cm): 유리 몸체 `linewidth=0.053`(약 1.5pt), 눈금 `0.02`(약 0.57pt),
  입구 테두리 타원 `0.07`. 몸체 선 하나에 눈금 선은 그 0.4배쯤이라는 **비율**을 쓴다. 액체는 선 없이 면으로
  채운다(`linestyle=none, fillstyle=solid`). 시험지 인쇄용 삽화는 흑백이므로 액체는 옅은 회색 면이나 빗금으로 바꾼다.

## 외부 도구 (코드를 싣지 않음)

### Spetchbook — 3D 스케치

- 사이트: https://notebysebas.github.io/spetchpad/ · 소스: https://github.com/notebysebas/spetchpad
- 라이선스: **Polyform Noncommercial 1.0.0** + `LICENSE-USAGE.md` — 코드는 비상업 용도로만 쓸 수 있고,
  사용자가 만든 결과물(그림)은 상업 용도를 포함해 자유롭게 쓸 수 있다.
- 우리 마켓·에디터는 유료 판매(중개수수료)가 있는 **상업 맥락**이다. 그래서 코드를 `vendor/` 에 싣지 않고,
  엔진·에디터에 넣지 않으며, 받지도 실행하지도 않는다.
- 쓰는 법: 선생님이 원래 사이트에서 3D 스케치를 그리고 SVG·PNG·GLB 로 내보낸 뒤, 에디터나 차시에 그림으로
  넣는다. 내보낸 결과물은 그린 사람의 것이다.
- 코드를 상업 맥락에서 써야 한다면(우리 화면에 넣기 등) 먼저 제작자에게 **서면 허가**를 받아야 한다.

## 라이선스 표기 의무

- MIT(wokwi-elements, avr8js, hairline): 저작권 고지와 허가 문구를 사본에 함께 둔다.
  각 폴더의 `LICENSE` 를 지우거나 고치지 않는다. 묶은 `*.iife.js` 에는 `--legal-comments=inline` 으로 원본의
  라이선스 주석이 남아 있다. 학습자료를 배포 묶음(zip·설치본·런처 동봉)으로 낼 때는 이 폴더째 넣는다.
- lit(BSD-3-Clause, wokwi 번들 안): `wokwi-elements@1.9.2/LICENSE-lit` 를 함께 둔다. Google 이름을 홍보에 쓰지 않는다.
- avr8js 의 assembler 는 Avrian-Jump(MIT) 고지가 `esm/utils/assembler.js` 머리에 있다.
- pst-labo(LPPL): 코드를 싣지 않으므로 배포 의무는 없다. 참고했다는 사실과 링크를 이 문서에 남긴다.
- Spetchbook(Polyform Noncommercial): 코드를 쓰지 않는다. 결과물만 쓴다.
- 이름 규칙: 이 도구들을 감싸는 우리 코드의 함수·변수·CSS 클래스는 우리 도메인 말로 짓는다(예: `wokwi-led` 를 감싸면 `wokwi` 가 아니라 우리 부품 이름).

## 검증 (2026-11-01)

세 예제를 헤드리스 Chrome(Playwright, WebGL 은 SwiftShader)으로 `file://` 에서 열어 확인했다.
콘솔 오류 0, 외부 네트워크 요청 0. 동작 확인:
wokwi 버튼 누름→LED 켜짐·뗌→꺼짐, avr8js 깜빡임(150ms 간격 표본 `111000111000`)·버튼 프로그램 누름→켜짐,
hairline 그림 3개 렌더·읽은 값 표시.
