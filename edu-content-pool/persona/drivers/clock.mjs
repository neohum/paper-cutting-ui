// 종이 아날로그 시계 조작기 — 바늘을 끌어 돌려 시각 만들기(나타내기), 보기 중에서 시각 고르기(읽기).
// 마우스·터치: 바늘을 잡아 원호를 따라 끈다(긴바늘 먼저, 다음에 시). 키보드: Tab 으로 바늘에 가서 방향키(한 번에 분 단계 하나).
import { makeCtx, press, tabTo, pressN, dragPath, fitPoints, svgToScreen, checkTouchSize, sleep } from './_math-common.mjs';

export const tools = ['clock'];
const CX = 160; const CY = 165;
const mod = (v, m) => ((v % m) + m) % m;
const shortest = (d, m) => { const x = mod(d, m); return x > m / 2 ? x - m : x; };

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log, maxActions: 1000 });
  const o = options || {}; const t = target || {};
  const tool = page.locator(root); const svg = tool.locator('svg.pk-stage');
  if (!(await svg.count())) { ctx.problem('control-missing', '시계 그림이 화면에 없음'); return ctx.result(false); }
  const scr = (x, y) => svgToScreen(page, svg, x, y);
  const step = o.hourOnly ? 60 : o.minuteStep || 1;
  const freeHour = !!o.freeHour && !o.hourOnly;
  const hand = (name) => tool.locator(`g.pk-hand[aria-label=${JSON.stringify(`${name}`)}]`);
  try {
    if (o.readOnly || t.pick != null) return await readMode();
    return await makeMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function readMode() {
    const bs = tool.locator('button.ck-pick');
    const n = await bs.count();
    if (!n) { ctx.problem('control-missing', '시각 보기 단추가 화면에 없음'); return ctx.result(false); }
    if (t.pick == null || t.pick >= n) { ctx.problem('unreachable', `정답 보기 ${t.pick == null ? '?' : t.pick + 1}번이 없음(보기 ${n}개)`); return ctx.result(false); }
    await press(ctx, bs.nth(t.pick), `보기 ${t.pick + 1}`);
    return ctx.result((await readState()).pick === t.pick);
  }

  // 바늘(name)을 지금 각도 a0 에서 a1(도, 12시 기준 시계 방향 누적)까지 원호를 따라 끈다
  async function arc(name, radius, a0, a1) {
    const h = hand(name);
    if (ctx.input === 'touch') await checkTouchSize(ctx, h.locator('.pk-hit').first(), `${name} 잡는 자리`);
    const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / 15));
    const pts = await fitPoints(ctx, async () => { const out = []; for (let k = 0; k <= n; k++) { const a = ((a0 + ((a1 - a0) * k) / n) * Math.PI) / 180; out.push(await scr(CX + Math.sin(a) * radius, CY - Math.cos(a) * radius)); } return out; });
    await dragPath(ctx, pts); await sleep(400);
  }
  async function keys(name, n) {
    const h = hand(name);
    if (!(await tabTo(ctx, h))) { ctx.problem('no-keyboard-path', `${name} 에 Tab 으로 닿지 않음`); return false; }
    await pressN(ctx, n >= 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(n));
    return true;
  }

  async function makeMode() {
    const h = t.h; const m = t.m || 0;
    if (h == null) { ctx.problem('driver-limit', 'target 에 시(h)가 없음'); return ctx.result(false); }
    if (o.hourOnly && m !== 0) { ctx.problem('unreachable', `정각만 되는 판인데 ${h}시 ${m}분을 만들라고 함`); return ctx.result(false); }
    if (m % step) { ctx.problem('unreachable', `분이 ${step}분 단위로만 움직이는데 ${m}분이 필요`); return ctx.result(false); }
    const wantHourAt = (h % 12) + m / 60;
    for (let it = 0; it < 6 && !ctx.over(); it++) {
      let s = await readState();
      const dm = shortest(m - s.m, 60);
      if (dm !== 0 && !o.hourOnly) {
        const total = (s.h % 12) * 60 + s.m; // 지금 긴바늘 각도는 분만으로 정해진다
        void total;
        if (ctx.input === 'keyboard') { if (!(await keys('긴바늘', dm / step))) return ctx.result(false); }
        else { const a0 = s.m * 6; await arc('긴바늘', 92, a0, a0 + dm * 6); }
        s = await readState();
      }
      // 시
      const dh = shortest(h - s.h, 12);
      if (freeHour) {
        const cur = s.hourAt * 30; const want = wantHourAt * 30;
        const d = shortest(want - cur, 360);
        if (Math.abs(d) > 1) {
          if (ctx.input === 'keyboard') { if (!(await keys('짧은바늘', Math.round(d / (step * 0.5))))) return ctx.result(false); }
          else await arc('짧은바늘', 40, cur, cur + d);
        }
      } else if (dh !== 0) {
        const curAng = o.independent ? (s.h % 12) * 30 + s.m * 0.5 : ((s.h % 12) * 60 + s.m) * 0.5;
        if (ctx.input === 'keyboard') { if (!(await keys('짧은바늘', Math.round((dh * (o.hourOnly ? 30 : 30)) / (o.hourOnly ? 30 : step * 0.5))))) return ctx.result(false); }
        else await arc('짧은바늘', 40, curAng, curAng + dh * 30);
      }
      s = await readState();
      if (s.h === h && s.m === m && (!freeHour || Math.abs(shortest(s.hourAt * 30 - wantHourAt * 30, 360)) < 3)) break;
    }
    const s = await readState();
    return ctx.result(s.h === h && s.m === m);
  }
}
void sleep;
