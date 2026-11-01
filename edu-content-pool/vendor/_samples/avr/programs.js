// 생성: build-programs.mjs 가 avr8js 0.21.1 assembler 로 *.asm 을 조립한 결과(손으로 고치지 않는다).
// file:// 에서는 fetch 가 막히므로 hex 를 스크립트 전역으로 싣는다.
window.AVR_PROGRAMS = {
  "blink": {
    "hex": ":1000000000E204B900E205B904D000E005B901D06E\n:10001000F9CF29E23FEF4FEF4A95F1F73A95D9F73B\n:060020002A95C1F70895C6\n:00000001FF\n",
    "paramWordAddress": 9,
    "paramRegister": 18,
    "paramDefault": 41
  },
  "button-led": {
    "hex": ":1000000000E204B904E00BB94A9902C02D9AFCCF72\n:040010002D98FACF5E\n:00000001FF\n"
  }
};
