// *.asm → *.hex 와 programs.js 를 다시 만들고, avr8js CPU 로 돌려 동작을 확인한다.
// 사용: node edu-content-pool/vendor/_samples/avr/build-programs.mjs
// 필요한 것: Node 22.15+ (module.registerHooks). 네트워크·설치 없음.
import { registerHooks } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// avr8js 의 esm 배포본은 확장자 없는 상대 import('./cpu/cpu')를 쓴다(번들러용).
// 원본을 고치지 않고 Node 에서 읽으려고 '.js' 를 붙여 해석한다.
registerHooks({
  resolve(spec, ctx, next) {
    if (spec.startsWith('.') && !spec.endsWith('.js')) {
      try { return next(spec + '.js', ctx); } catch { /* 그대로 둔다 */ }
    }
    return next(spec, ctx);
  },
});

const here = dirname(fileURLToPath(import.meta.url));
const esm = join(here, '..', '..', 'avr8js@0.21.1', 'esm');
const { assemble } = await import(join(esm, 'utils', 'assembler.js'));
const avr = await import(join(esm, 'index.js'));

function toIntelHex(bytes) {
  const out = [];
  for (let a = 0; a < bytes.length; a += 16) {
    const chunk = bytes.slice(a, a + 16);
    const rec = [chunk.length, (a >> 8) & 0xff, a & 0xff, 0, ...chunk];
    const sum = (0x100 - (rec.reduce((s, b) => s + b, 0) & 0xff)) & 0xff;
    out.push(':' + [...rec, sum].map((b) => b.toString(16).toUpperCase().padStart(2, '0')).join(''));
  }
  out.push(':00000001FF');
  return out.join('\n') + '\n';
}

function boot(bytes) {
  const prog = new Uint16Array(0x4000);
  new Uint8Array(prog.buffer).set(bytes);
  const cpu = new avr.CPU(prog);
  const portB = new avr.AVRIOPort(cpu, avr.portBConfig);
  const portD = new avr.AVRIOPort(cpu, avr.portDConfig);
  const run = (cycles) => { const end = cpu.cycles + cycles; while (cpu.cycles < end) { avr.avrInstruction(cpu); cpu.tick(); } };
  return { cpu, prog, portB, portD, run };
}

const programs = {};
let failed = false;

for (const name of ['blink', 'button-led', 'alternate']) {
  const r = assemble(readFileSync(join(here, `${name}.asm`), 'utf8'));
  if (r.errors.length) { console.error(name, r.errors); process.exit(1); }
  const bytes = [...r.bytes];
  const entry = { hex: toIntelHex(bytes) };
  writeFileSync(join(here, `${name}.hex`), entry.hex);
  const m = boot(bytes);

  if (name === 'blink') {
    entry.paramWordAddress = r.labels.delay / 2; // 'delay:' 첫 명령이 ldi r18, K
    entry.paramRegister = 18;
    entry.paramDefault = 41;
    const highs = [];
    m.portB.addListener(() => { if (m.portB.pinState(5) === avr.PinState.High) highs.push(m.cpu.cycles); });
    m.run(16e6 * 2.2);
    const period = highs.length > 1 ? (highs[1] - highs[0]) / 16e6 : 0;
    const ok = highs.length >= 2 && period > 0.9 && period < 1.1;
    console.log(`blink: ${bytes.length}B, 켜짐 ${highs.length}회, 주기 ${period.toFixed(3)}s ${ok ? 'OK' : 'FAIL'}`);
    failed ||= !ok;
  } else if (name === 'alternate') {
    entry.paramWordAddress = r.labels.delay / 2;
    entry.paramRegister = 18;
    entry.paramDefault = 41;
    const seen = [];
    m.portB.addListener(() => { seen.push(`${m.portB.pinState(4)}${m.portB.pinState(5)}`); });
    m.run(16e6 * 2.2);
    // 12번만 켜짐(10)과 13번만 켜짐(01)이 번갈아 나와야 한다(PinState: Low 0, High 1)
    const lit = seen.filter((x) => x === '10' || x === '01');
    const alternates = lit.length >= 3 && lit.every((x, i) => i === 0 || x !== lit[i - 1]);
    console.log(`alternate: ${bytes.length}B, 바뀜 ${lit.length}회 [${lit.slice(0, 4).join(' ')}] ${alternates ? 'OK' : 'FAIL'}`);
    failed ||= !alternates;
  } else {
    m.portD.setPin(2, true); m.run(1e5); const released = m.portB.pinState(5);
    m.portD.setPin(2, false); m.run(1e5); const pressed = m.portB.pinState(5);
    const ok = released === avr.PinState.Low && pressed === avr.PinState.High;
    console.log(`button-led: ${bytes.length}B, 뗌→${released} 누름→${pressed} ${ok ? 'OK' : 'FAIL'}`);
    failed ||= !ok;
  }
  programs[name] = entry;
}

writeFileSync(join(here, 'programs.js'),
  '// 생성: build-programs.mjs 가 avr8js 0.21.1 assembler 로 *.asm 을 조립한 결과(손으로 고치지 않는다).\n' +
  '// file:// 에서는 fetch 가 막히므로 hex 를 스크립트 전역으로 싣는다.\n' +
  `window.AVR_PROGRAMS = ${JSON.stringify(programs, null, 2)};\n`);
process.exit(failed ? 1 : 0);
