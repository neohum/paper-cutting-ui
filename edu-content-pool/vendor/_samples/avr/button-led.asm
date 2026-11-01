; 2번 핀(PD2) 버튼을 누르는 동안 13번 핀(PB5) LED 켜기 — ATmega328P
; 같은 동작의 아두이노 C++:
;   void setup() { pinMode(13, OUTPUT); pinMode(2, INPUT_PULLUP); }
;   void loop()  { digitalWrite(13, digitalRead(2) == LOW ? HIGH : LOW); }
start:
  ldi r16, 0x20
  out 0x04, r16      ; DDRB: PB5 출력
  ldi r16, 0x04
  out 0x0B, r16      ; PORTD: PD2 풀업
loop:
  sbic 0x09, 2       ; PIND bit2 가 0(눌림)이면 다음 줄 건너뜀
  rjmp off
  sbi 0x05, 5
  rjmp loop
off:
  cbi 0x05, 5
  rjmp loop
