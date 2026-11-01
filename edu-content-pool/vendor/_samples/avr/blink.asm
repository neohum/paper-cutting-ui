; 13번 핀(PB5) LED 깜빡임 — ATmega328P(아두이노 우노) 16MHz
; 같은 동작의 아두이노 C++:
;   void setup() { pinMode(13, OUTPUT); }
;   void loop()  { digitalWrite(13, HIGH); delay(500); digitalWrite(13, LOW); delay(500); }
; 매개변수: 'ldi r18, 41' 의 41(바깥 반복 횟수)이 깜빡임 간격이다. 41 ≈ 0.5초.
; 화면은 이 명령어 한 개(워드 주소는 생성기가 programs.js 에 적는다)만 다시 써서 속도를 바꾼다.
start:
  ldi r16, 0x20
  out 0x04, r16      ; DDRB: PB5 출력
loop:
  ldi r16, 0x20
  out 0x05, r16      ; PORTB: PB5 = 1 (켜짐)
  rcall delay
  ldi r16, 0x00
  out 0x05, r16      ; PORTB: PB5 = 0 (꺼짐)
  rcall delay
  rjmp loop
delay:
  ldi r18, 41        ; PARAM
d1:
  ldi r19, 0xFF
d2:
  ldi r20, 0xFF
d3:
  dec r20
  brne d3
  dec r19
  brne d2
  dec r18
  brne d1
  ret
