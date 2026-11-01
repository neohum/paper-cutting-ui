; 12번(PB4)·13번(PB5) 핀을 번갈아 켜기 — ATmega328P(아두이노 우노) 16MHz
; 같은 동작의 아두이노 C++:
;   void setup() { pinMode(12, OUTPUT); pinMode(13, OUTPUT); }
;   void loop()  { digitalWrite(13, HIGH); digitalWrite(12, LOW); delay(500);
;                  digitalWrite(13, LOW); digitalWrite(12, HIGH); delay(500); }
; 매개변수: 'ldi r18, 41' 의 41 이 바꿔 켜는 간격(≈0.5초)이다.
start:
  ldi r16, 0x30
  out 0x04, r16      ; DDRB: PB4·PB5 출력
loop:
  ldi r16, 0x20
  out 0x05, r16      ; PORTB: 13번 켜짐, 12번 꺼짐
  rcall delay
  ldi r16, 0x10
  out 0x05, r16      ; PORTB: 12번 켜짐, 13번 꺼짐
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
