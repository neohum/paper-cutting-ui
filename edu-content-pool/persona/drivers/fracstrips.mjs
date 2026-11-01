// 분수 띠 견주기 조작기 — 같은 크기의 분수 만들기(make), 약분(divide), 고르기(ask). 조작 칸은 HTML 단추·입력 칸이라
// 마우스·터치는 누르고 쓰며, 키보드는 Tab 으로 가서 Enter(단추)·글자(입력 칸).
import { makeCtx, press, typeInto, checkTouchSize } from './_math-common.mjs';

export const tools = ['fracstrips'];
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const tool = page.locator(root);
  const maxDen = o.maxDen || 12;
  const divide = o.mode === 'divide';
  const btn = (label) => tool.locator(`button[aria-label=${JSON.stringify(`${label}`)}]`);
  try {
    if (divide || t.reduce) return await divideMode();
    return await makeMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function pickAsk() {
    if (!Number.isInteger(t.ask)) return true;
    const bs = tool.locator('button[role="radio"]:not([data-div])');
    const n = await bs.count();
    if (!n) { ctx.problem('control-missing', '고르기 보기가 화면에 없음'); return false; }
    if (t.ask >= n) { ctx.problem('unreachable', `정답 보기 ${t.ask + 1}번이 없음(보기 ${n}개)`); return false; }
    return press(ctx, bs.nth(t.ask), `보기 ${t.ask + 1}`);
  }

  async function step(label, want, key) {
    for (let i = 0; i < 60 && !ctx.over(); i++) {
      const cur = (await readState())[key];
      if (cur === want) return true;
      const b = btn(`${label} 하나 ${cur < want ? '늘리기' : '줄이기'}`);
      if (!(await b.count())) { ctx.problem('control-missing', `${label} 단추가 화면에 없음`); return false; }
      if (await b.isDisabled()) { ctx.problem('unreachable', `${label} 을(를) ${want} 로 바꿀 수 없음(${cur} 에서 멈춤)`); return false; }
      await press(ctx, b, `${label} ${cur < want ? '+' : '−'}`);
    }
    return false;
  }

  async function makeMode() {
    if (!t.equalTo) { if (Number.isInteger(t.ask)) { const ok = await pickAsk(); return ctx.result(ok); } ctx.problem('driver-limit', 'target 에 equalTo 가 없음'); return ctx.result(false); }
    const [n, d] = t.equalTo; const g = gcd(n, d);
    let den = t.den;
    if (!den) {
      if (t.smallest) den = d / g;
      else { den = d; for (let k = d / g; k <= maxDen; k += d / g) if (k !== d) { den = k; break; } }
    }
    if (den > maxDen || den < 1) { ctx.problem('unreachable', `아래 띠 조각 수 ${den} 이(가) 한계(${maxDen}) 밖`); return ctx.result(false); }
    if ((n * den) % d) { ctx.problem('unreachable', `${n}/${d} 와 크기가 같은 분수를 분모 ${den} 으로 만들 수 없음`); return ctx.result(false); }
    const num = (n * den) / d;
    if (!(await step('조각 수(분모)', den, 'den'))) return ctx.result(false);
    if (!(await step('색칠한 조각(분자)', num, 'num'))) return ctx.result(false);
    if (!(await pickAsk())) return ctx.result(false);
    const s = await readState();
    return ctx.result(s.den === den && s.num === num && (!Number.isInteger(t.ask) || s.pick === t.ask));
  }

  async function divideMode() {
    if (!t.reduce) { ctx.problem('driver-limit', '약분 문항의 target 에 reduce 가 없음'); return ctx.result(false); }
    const [a, b] = t.reduce; const g = gcd(a, b);
    const divisors = o.divisors || [2, 3, 4, 5, 6];
    const div = t.div || (t.lowest ? g : divisors.find((x) => a % x === 0 && b % x === 0) || g);
    if (!divisors.includes(div)) { ctx.problem('unreachable', `나눌 수 ${div} 단추가 없음(단추 ${divisors.join(', ')})`); return ctx.result(false); }
    if (a % div || b % div) { ctx.problem('unreachable', `${a}/${b} 은(는) ${div} 로 약분할 수 없음`); return ctx.result(false); }
    const num = t.lowest ? a / g : a / div; const den = t.lowest ? b / g : b / div;
    const chip = tool.locator(`button[data-div="${div}"]`);
    if (!(await chip.count())) { ctx.problem('control-missing', `÷ ${div} 단추가 화면에 없음`); return ctx.result(false); }
    await press(ctx, chip, `÷ ${div}`);
    if (!(await typeInto(ctx, tool.locator('input[aria-label="약분한 분수의 분자"]'), String(num), '분자 칸'))) return ctx.result(false);
    if (!(await typeInto(ctx, tool.locator('input[aria-label="약분한 분수의 분모"]'), String(den), '분모 칸'))) return ctx.result(false);
    if (!(await pickAsk())) return ctx.result(false);
    const s = await readState();
    return ctx.result(s.div === div && s.num === num && s.den === den);
  }
}
void checkTouchSize;
