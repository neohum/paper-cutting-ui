// 비율 띠 조작기 — 기준량 고르기, 띠 나누고 색칠하기, 분수·소수로 비율 쓰기, 비 읽기 고르기.
// 조작 칸이 모두 HTML 단추·입력 칸이라 마우스·터치는 누르고 쓰며, 키보드는 Tab 으로 가서 글자·방향키(라디오 묶음)·Enter.
import { makeCtx, press, tabTo, pressN, typeInto, near } from './_math-common.mjs';

export const tools = ['ratiobar'];
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const sc = Object.assign({ baseName: '반 학생 수', base: 25, compareName: '안경 쓴 학생 수', compare: 10, unit: '명' }, o.scene || {});
  const B = sc.base; const C = sc.compare; const maxParts = o.maxParts || 40;
  const tool = page.locator(root);
  const inputBy = (l) => tool.locator(`input[aria-label=${JSON.stringify(`${l}`)}]`);
  if (!(await tool.count())) { ctx.problem('control-missing', '비율 띠 화면이 없음'); return ctx.result(false); }

  // 라디오 묶음에서 idx 번째 고르기(키보드는 Tab 으로 묶음에 들어가 방향키)
  async function pickRadio(group, idx, label) {
    const radios = group.locator('button[role="radio"]');
    const n = await radios.count();
    if (!n) { ctx.problem('control-missing', `${label}: 보기가 화면에 없음`); return false; }
    if (idx < 0 || idx >= n) { ctx.problem('unreachable', `${label}: ${idx + 1}번 보기가 없음(보기 ${n}개)`); return false; }
    if (ctx.input !== 'keyboard') return press(ctx, radios.nth(idx), `${label} ${idx + 1}번`);
    const stop = group.locator('button[role="radio"][tabindex="0"]').first();
    if (!(await tabTo(ctx, stop))) { ctx.problem('no-keyboard-path', `${label}에 Tab 으로 닿지 않음`); return false; }
    const cur = await radios.evaluateAll((els) => els.findIndex((e) => e === document.activeElement));
    if (cur === idx) { await page.keyboard.press('Enter'); ctx.tick(); } else await pressN(ctx, 'ArrowRight', ((idx - cur) % n + n) % n);
    return true;
  }

  try {
    const s0 = await readState();
    if (t.whole != null) {
      const q = '띠 전체(기준량)로 삼을 양을 고르세요.';
      const choices = 2 + (sc.other ? 1 : 0);
      const order = Array.isArray(o.wholeOrder) && o.wholeOrder.length === choices ? o.wholeOrder : Array.from({ length: choices }, (_, i) => i);
      const group = tool.locator(`[role="radiogroup"][aria-label=${JSON.stringify(`${q}`)}]`);
      if (!(await group.count())) { if (s0.whole !== t.whole) { ctx.problem('control-missing', '띠 전체(기준량) 고르기가 화면에 없음'); return ctx.result(false); } }
      else if (!(await pickRadio(group, order.indexOf(t.whole), '띠 전체'))) return ctx.result(false);
    }
    if (t.bar) {
      const g = gcd(B, C); const parts = B / g; const shaded = C / g;
      if (parts > maxParts) { ctx.problem('unreachable', `${C}/${B} 을(를) 칠하려면 ${parts}칸이 필요한데 최대 ${maxParts}칸`); return ctx.result(false); }
      if (o.cut === false) {
        if (s0.parts * C !== s0.shaded * B) { ctx.problem('unreachable', '칸·색칠을 바꿀 수 없는 판(cut:false)인데 처음 상태가 비율과 다름'); return ctx.result(false); }
      } else {
        if (!(await typeInto(ctx, inputBy('띠를 나눈 칸 수'), String(parts), '칸 수 칸'))) return ctx.result(false);
        if (!(await typeInto(ctx, inputBy('색칠한 칸 수'), String(shaded), '색칠한 칸 칸'))) return ctx.result(false);
      }
    }
    if (t.fraction) {
      let n = C; let d = B;
      if (t.fraction === 'lowest') { const g = gcd(B, C); n = C / g; d = B / g; }
      if (!inputBy('분자').count()) { ctx.problem('control-missing', '분수 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      if (!(await typeInto(ctx, inputBy('분자'), String(n), '분자 칸'))) return ctx.result(false);
      if (!(await typeInto(ctx, inputBy('분모'), String(d), '분모 칸'))) return ctx.result(false);
    }
    if (t.decimal) {
      const v = C / B; const txt = String(Math.round(v * 1e6) / 1e6);
      if (Math.abs(Number(txt) - v) > 1e-6 || txt.length > 7) { ctx.problem('unreachable', `비율 ${C}/${B} 을(를) 소수로 정확히 쓸 수 없음(칸 7자)`); return ctx.result(false); }
      if (!(await inputBy('비율을 소수로').count())) { ctx.problem('control-missing', '소수 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      if (!(await typeInto(ctx, inputBy('비율을 소수로'), txt, '소수 칸'))) return ctx.result(false);
    }
    if (t.read != null) {
      const q = o.read && o.read.q ? o.read.q : '알맞은 것을 고르세요.';
      if (!(await pickRadio(tool.locator(`[role="radiogroup"][aria-label=${JSON.stringify(`${q}`)}]`), t.read, '비 읽기'))) return ctx.result(false);
    }
    const s = await readState();
    const g = gcd(B, C);
    const ok = (t.whole == null || s.whole === t.whole)
      && (!t.bar || s.parts * C === s.shaded * B)
      && (!t.fraction || (s.num != null && s.den != null && s.num * B === s.den * C))
      && (!t.decimal || (s.dec != null && near(s.dec, C / B, 1e-6)))
      && (t.read == null || s.read === t.read);
    void g;
    return ctx.result(ok);
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }
}
