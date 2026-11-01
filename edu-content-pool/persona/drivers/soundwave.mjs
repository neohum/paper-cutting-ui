// 종이 줄 떨림 실험대(soundwave) 조작기 — 고무줄 당기기, 받침(길이)·손잡이(팽팽함) 옮기기, 작은북 치기, 떨림 멈추기.
import { makeCtx } from './_sci-common.mjs';

export const tools = ['soundwave'];

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const t = target || {};
  const root = rootSel || '#tool';
  let reached = true;
  const svg = page.locator(`${root} svg.pk-stage`).first();
  const string = page.locator(`${root} [aria-label^="고무줄."]`).first();
  const bridge = page.locator(`${root} [aria-label^="받침."]`).first();
  const knob = page.locator(`${root} [aria-label="팽팽함 손잡이"]`).first();
  const stick = page.locator(`${root} [aria-label^="북채."]`).first();
  const scale = async () => { const b = await ctx.box(svg); const vb = ((await svg.getAttribute('viewBox')) || '0 0 520 300').split(/\s+/).map(Number); return b.width / vb[2]; };

  // 끌기(마우스·터치): 조각 가운데에서 (dx, dy) svg 단위만큼
  // 배율을 재려고 svg 를 화면에 들이면 쪽이 굴러 앞서 잰 좌표가 낡는다(200% 확대 S9) — 배율을 먼저 재고, 굴린 뒤 대상을 다시 잰다.
  // 잡는 점도 실제로 그 대상이 맨 위에 있는 곳을 고른다(다른 조각이 덮은 가운데를 잡지 않게).
  async function dragBy(loc, label, dx, dy) {
    const s = await scale();
    await ctx.box(loc);
    const b = await loc.first().boundingBox().catch(() => null); if (!b) return false;
    ctx.sizeCheck(b, label);
    const from = (await loc.first().evaluate((el, bb) => {
      for (const [fx, fy] of [[0.5, 0.5], [0.5, 0.3], [0.5, 0.7], [0.3, 0.5], [0.7, 0.5], [0.2, 0.2], [0.8, 0.8], [0.2, 0.8], [0.8, 0.2]]) {
        const x = bb.x + bb.width * fx; const y = bb.y + bb.height * fy;
        if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) continue;
        const top = document.elementFromPoint(x, y); if (top && (top === el || el.contains(top))) return { x, y };
      }
      return null;
    }, b).catch(() => null)) || ctx.center(b);
    return ctx.dragPath(ctx.line(from, { x: from.x + dx * s, y: from.y + dy * s }, 8), `${label} 끌기`);
  }

  // 고무줄을 튕긴다. strength: 'loud'(큰 소리) | 'quiet'(작은 소리) | 'any'
  async function pluckString(strength) {
    if (!(await string.count())) { ctx.problem('control-missing', '튕길 고무줄이 없음'); return false; }
    const n0 = (await ctx.state()).sounds;
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(string, '고무줄'))) return false;
      const presses = strength === 'loud' ? 3 : strength === 'quiet' ? 1 : 2;
      await ctx.key('ArrowUp', presses); await ctx.key('Enter');
    } else {
      const amt = strength === 'loud' ? 32 : strength === 'quiet' ? 10 : 20;
      await dragBy(string, '고무줄', 0, -amt);
    }
    await ctx.wait(250);
    if ((await ctx.state()).sounds > n0) return true;
    // 처음 한 번은 소리 장치가 깨어나느라 못 울릴 수 있다 — 한 번 더 튕긴다
    if (ctx.input !== 'keyboard') await dragBy(string, '고무줄', 0, strength === 'loud' ? -32 : strength === 'quiet' ? -10 : -20);
    await ctx.wait(300);
    return (await ctx.state()).sounds > n0;
  }

  async function hitDrum(strength) {
    if (!(await stick.count())) { ctx.problem('control-missing', '칠 북채가 없음'); return false; }
    const n0 = (await ctx.state()).sounds;
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(stick, '북채'))) return false;
      await ctx.key('ArrowUp', strength === 'loud' ? 3 : strength === 'quiet' ? 1 : 2); await ctx.key('Enter');
    } else await dragBy(stick, '북채', 0, strength === 'loud' ? -52 : strength === 'quiet' ? -14 : -30);
    await ctx.wait(250);
    return (await ctx.state()).sounds > n0;
  }

  // 받침(length) / 손잡이(tension) 를 d 단계 옮긴다
  async function shift(which, d) {
    const loc = which === 'length' ? bridge : knob;
    if (!(await loc.count())) { ctx.problem('control-missing', which === 'length' ? '받침이 없음' : '팽팽함 손잡이가 없음'); return false; }
    const before = (await ctx.state())[which];
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(loc, which === 'length' ? '받침' : '팽팽함 손잡이'))) return false;
      await ctx.key(d > 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(d));
    } else await dragBy(loc, which === 'length' ? '받침' : '팽팽함 손잡이', d * (which === 'length' ? 42 : 40), 0);
    await ctx.wait(350);
    return (await ctx.state())[which] !== before;
  }

  const strengthWant = t.loud === true ? 'loud' : t.loud === false ? 'quiet' : 'any';
  const src = t.source || 'string';

  if (t.pitch) {
    const only = t.only || 'tension';
    const matches = (s) => (t.pitch === 'higher' || t.pitch === 'lower' ? s.rel === t.pitch : s.pitch === t.pitch);
    // 높은 소리: 받침을 줄이고(길이 짧게) 손잡이를 조인다. 낮은 소리는 반대
    const up = t.pitch === 'higher' || t.pitch === 'high';
    const plan = only === 'length' ? [['length', up ? -1 : 1]] : only === 'tension' ? [['tension', up ? 1 : -1]] : [['tension', up ? 1 : -1], ['length', up ? -1 : 1]];
    for (let g = 0; g < 8 && !matches(await ctx.state()) && !ctx.over(); g++) {
      const [which, d] = plan[g % plan.length];
      if (!(await shift(which, d))) { if (plan.length === 1) break; }
    }
    if (!matches(await ctx.state())) { ctx.problem('unreachable', `받침·손잡이를 옮겨도 '${t.pitch}' 소리가 되지 않음`); reached = false; }
    reached = (await pluckString(strengthWant)) && reached;
    reached = reached && matches(await ctx.state());
  } else if (t.stopped) {
    const ok = await pluckString('any');
    // 떨리는 동안 다시 눌러 멈춘다(마우스: 누르기, 키보드: Esc)
    if (ctx.input === 'keyboard') await ctx.key('Escape'); else await ctx.tap(string, '떨리는 고무줄');
    await ctx.wait(150);
    reached = ok && (await ctx.state()).stopped === true;
    if (!reached && ok) ctx.problem('driver-limit', '떨림을 멈추기 전에 떨림이 저절로 끝났을 수 있음');
  } else if (t.vibrating || t.loud != null) {
    const ok = src === 'drum' ? await hitDrum(strengthWant) : await pluckString(strengthWant);
    const s = await ctx.state();
    reached = ok && s.last && s.last.source === src
      && (t.loud == null || (t.loud ? s.last.strength >= 61 : s.last.strength <= 40));
  }
  return ctx.result(Boolean(reached));
}
