// 거울과 빛의 길(lightray) 조작기 — 거울을 돌려 손전등 빛이 별에 닿게 한다.
// 학생처럼 거울을 한 칸씩 돌려 가며 빛이 별에 닿는지(상태의 hit) 본다. 거울이 둘이면 첫 거울을 한 칸 돌릴 때마다 둘째 거울을 한 바퀴 돌려 본다.
import { makeCtx } from './_sci-common.mjs';

export const tools = ['lightray'];

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log, maxActions: 2500 });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const step = o.step || 15;
  const n = Math.round(360 / step);
  let reached = true;
  const mirrorsLoc = page.locator(`${root} .lr-mirror`);
  const nm = await mirrorsLoc.count();

  // 거울의 돌림 중심(거울 한가운데 작은 동그라미)
  const pivot = async (m) => {
    const h = await m.elementHandle();
    return h.evaluate((g) => { const c = g.querySelector('circle[r="4"]'); const r = (c || g).getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
  };
  const good = (s) => s.hit === 'star' && (t.bounces == null || s.bounces === t.bounces);

  if (t.hit === 'star' && !o.readOnly) {
    if (!nm) { ctx.problem('control-missing', '돌릴 거울이 없음'); reached = false; }
    else if (!good(await ctx.state())) {
      // 거울 i 를 한 바퀴(n 칸) 돌리며 good 을 찾는다. 찾으면 그 자리에서 멈춘다(true)
      const sweep = async (i) => {
        const m = mirrorsLoc.nth(i);
        if (ctx.input === 'keyboard') {
          if (!(await ctx.focusViaTab(m, `거울 ${i + 1}`))) return 'nokey';
          const a0 = (await ctx.state()).mirrors[i];
          await ctx.key('ArrowRight');
          if ((await ctx.state()).mirrors[i] === a0) { ctx.problem('no-keyboard-path', `거울 ${i + 1}: 방향키를 눌러도 거울이 돌지 않음`); return 'nokey'; }
          for (let k = 1; k < n; k++) { if (good(await ctx.state())) return 'found'; await ctx.key('ArrowRight'); if (ctx.over()) return 'limit'; }
          return good(await ctx.state()) ? 'found' : 'no';
        }
        const b = await ctx.box(m);
        if (!b) return 'nobox';
        ctx.sizeCheck(b, `거울 ${i + 1}`);
        const C = await pivot(m); const r = Math.max(14, Math.min(b.width, b.height) * 0.32);
        const pts = [{ x: C.x, y: C.y - r }];
        // 포인터는 누른 채, 한 칸(step°)씩 돌리며 상태를 읽는다
        const down = pts[0];
        const touch = ctx.input === 'touch';
        let cdp = null;
        if (touch) cdp = await page.context().newCDPSession(page);
        const send = async (type, p) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: p ? [{ x: p.x, y: p.y, id: 1 }] : [] });
        if (touch) await send('touchStart', down); else { await page.mouse.move(down.x, down.y); await page.mouse.down(); }
        let found = false;
        for (let k = 1; k <= n && !found; k++) {
          // 한 칸 안을 몇 번 나눠 움직여 급한 점프를 피한다
          for (let q = 1; q <= 3; q++) {
            const a = ((k - 1 + q / 3) * step * Math.PI) / 180;
            const p = { x: C.x + r * Math.sin(a), y: C.y - r * Math.cos(a) };
            if (touch) await send('touchMove', p); else await page.mouse.move(p.x, p.y);
          }
          ctx.count();
          if (good(await ctx.state())) found = true;
          if (ctx.over()) break;
        }
        if (touch) await send('touchEnd'); else await page.mouse.up();
        await ctx.wait(350);
        return good(await ctx.state()) ? 'found' : 'no';
      };
      if (nm === 1) { const r = await sweep(0); reached = r === 'found'; }
      else {
        let ok = false;
        for (let a = 0; a < n && !ok && !ctx.over(); a++) {
          const r2 = await sweep(nm - 1);
          if (r2 === 'found') { ok = true; break; }
          if (r2 === 'nokey' || r2 === 'nobox') break;
          // 첫 거울을 한 칸 돌린다(둘째 거울은 한 바퀴 돌아 제자리)
          if (ctx.input === 'keyboard') { if (await ctx.focusViaTab(mirrorsLoc.nth(0), '거울 1')) await ctx.key('ArrowRight'); }
          else {
            const b = await ctx.box(mirrorsLoc.nth(0)); const C = await pivot(mirrorsLoc.nth(0)); const r = Math.max(14, Math.min(b.width, b.height) * 0.32);
            const pts = ctx.arc(C, r, 0, step, 4);
            await ctx.dragPath(pts, '거울 1 돌리기');
          }
        }
        reached = ok;
      }
      if (!reached) ctx.problem('unreachable', `거울을 모두 돌려 봐도 빛이 별에 닿지 않음${t.bounces != null ? `(튕김 ${t.bounces}번 조건)` : ''}`);
    }
    reached = reached && good(await ctx.state());
  }

  if (t.compare) {
    const btns = page.locator(`${root} .lr-ask button`);
    const pickIdx = t.compare === 'same' ? 1 : -1;
    if (!(await btns.count())) { ctx.problem('control-missing', '들어온 각과 나간 각을 견주어 고르는 단추가 없음'); reached = false; }
    else if (pickIdx < 0) { ctx.problem('driver-limit', `견주기 '${t.compare}' 단추를 고르지 못함`); reached = false; }
    else {
      const b = btns.nth(pickIdx);
      await ctx.tapExpect(b, '견주기 단추', async () => (await b.getAttribute('aria-pressed')) === 'true');
      reached = reached && (await b.getAttribute('aria-pressed')) === 'true';
    }
  }
  return ctx.result(reached);
}
