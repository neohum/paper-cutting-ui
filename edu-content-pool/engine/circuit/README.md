# 회로 실험대 (circuit)

wokwi-elements 부품 위에 학생이 **직접 선을 긋고**, avr8js 가 돌리는 아두이노 프로그램의 핀 출력이
**그 선을 따라서만** 부품에 닿게 하는 우리 엔진. 선을 옮기면 회로 동작이 바뀐다.

| 파일 | 하는 일 |
| --- | --- |
| `circuit-netlist.js` | 회로 판정(DOM 없음). 선 → 전선 묶음(net) → 전위 → LED·부저 켜짐, 입력 핀 값, 실수 경고 |
| `circuit-bench.js` | 실험대 화면: 부품 배치, 선 긋기·지우기, 부품 옮기기, avr8js 포트 연결, 과제 판정, 저장 |
| `circuit-bench.css` | 실험대 모양(변수 `--cb-*` 로 덮어쓰기) |

## 불러오기 (file:// 에서도 동작 — 모두 일반 `<script src>`)

```html
<link rel="stylesheet" href="vendor/uicons/css/uicons-regular-rounded.css">
<link rel="stylesheet" href="engine/circuit/circuit-bench.css">
<script src="vendor/wokwi-elements@1.9.2/wokwi-elements.bundle.min.js"></script>
<script src="vendor/avr8js@0.21.1/avr8js.iife.js"></script>
<script src="vendor/_samples/avr/programs.js"></script>
<script src="engine/circuit/circuit-netlist.js"></script>
<script src="engine/circuit/circuit-bench.js"></script>
<div id="bench"></div>
<script>
  const bench = CircuitBench.mount(document.getElementById('bench'), {
    programs: window.AVR_PROGRAMS,   // { 이름: { hex, paramWordAddress?, paramRegister? } }
    storageKey: 'lesson-id',         // 선택: 학생 브라우저에 회로 저장(막힌 창에서도 화면은 동작)
    circuit: undefined,              // 선택: 시작 회로(edu-circuit.v1). 없으면 기본 부품 배치
    onChange: (json) => {},          // 선택: 회로가 바뀔 때마다
  });
</script>
```

반환값: `ready`(Promise), `connect(a, b)`, `disconnect(i)`, `addPart(type, {color})`, `removePart(id)`,
`load(json)` → 오류 배열, `toJSON()`, `run(name)`, `stop()`, `press(id, down)`, `result()`, `progress()`, `destroy()`.
노드 이름은 `<부품 id>:<핀 이름>` (예: `uno:13`, `led1:A`, `btn1:2.r`, `uno:GND.1`).

## 선 긋는 법 (세 가지 모두 같은 결과)

- 핀을 눌러 다른 핀까지 끌어 놓기 — 손 뗀 자리에서 18px 안의 가장 가까운 핀에 붙는다
- 두 핀을 차례로 누르기(터치) / 핀에 Tab 으로 가서 Enter 두 번(키보드)
- 옆 패널의 '핀 1·핀 2' 선택 상자 + 잇기 (44px 대체 경로)

선을 누르고 Delete 로 지운다. 부품은 이름표를 끌거나 이름표에서 화살표 키(Shift 는 16칸)로 옮긴다.

## 판정 모델 (수업용 논리 수준)

전압·전류는 계산하지 않는다. 세기를 셋으로 나눈다: **센 구동**(출력 핀 HIGH/LOW, 5V·3.3V·IOREF, GND),
**저항 너머 구동**, **내부 풀업**. LED·부저는 + 쪽이 HIGH(풀업 아님), − 쪽이 LOW 이면 켜진다.
경고: 합선(같은 묶음에 HIGH 와 LOW), 저항 없음(양쪽 다 센 구동), 방향 반대, 두 다리가 같은 묶음,
버튼에 이어진 입력이 떠 있음. 보드 안에서 이어진 핀(GND 셋, A4/A4.2, A5/A5.2)은 한 묶음이다.
버튼은 1.l–1.r, 2.l–2.r 이 늘 이어져 있고 누르면 1–2 가 이어진다(실물 4다리 스위치와 같다).

## 한계

- 아날로그 입력(가변저항·조도 센서)·PWM 밝기는 아직 없다.
- 프로그램은 미리 조립한 hex 뿐이다(`vendor/_samples/avr/` 의 blink·button-led·alternate). 학생 C++ 컴파일은 오프라인에서 못 한다.
- 점퍼선은 핀과 핀을 직접 잇는다. 브레드보드는 없다.

검사: `node --test tests/circuit-netlist.test.mjs` (판정 13건), 샘플 `vendor/_samples/circuit-wiring.html`.
