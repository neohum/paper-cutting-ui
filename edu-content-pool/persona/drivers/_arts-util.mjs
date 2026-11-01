// 예술·언어·코딩 교구 조작기가 함께 쓰는 입력 도우미 — 상태를 쓰지 않고 실제 DOM 입력(마우스·터치·키보드)만 쓴다.
// 터치는 CDP Input.dispatchTouchEvent 로 보낸다(탭·끌기 모두 같은 길). 키보드는 Tab/Shift+Tab 으로 대상까지 찾아가 Enter/Space/방향키만 쓴다.

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MAX_ACTIONS = 1500;
class Stop extends Error { constructor(kind, msg) { super(msg); this.kind = kind; } }
export { Stop };

const cdps = new WeakMap();
async function cdpOf(page) {
  let c = cdps.get(page);
  if (!c) { c = await page.context().newCDPSession(page); cdps.set(page, c); }
  return c;
}

// ctx: 한 번의 drive 동안 쓰는 상태(문제 목록·조작 수·입력 방식)
export function makeCtx({ page, persona, readState, log }) {
  const input = (persona && persona.input) || 'mouse';
  const problems = [];
  const seen = new Set();
  const errors = [];
  const onErr = (e) => errors.push(String((e && e.message) || e));
  page.on('pageerror', onErr);
  const ctx = {
    page, input, problems, actions: 0, errors,
    note(kind, msg) { const k = `${kind}|${msg}`; if (seen.has(k)) return; seen.add(k); problems.push({ kind, msg }); if (log) { try { log(`${kind}: ${msg}`); } catch (_) { /* 로그는 부가 */ } } },
    stop(kind, msg) { throw new Stop(kind, msg); },
    tick() { if (++ctx.actions > MAX_ACTIONS) throw new Stop('driver-limit', `조작 수 한도(${MAX_ACTIONS})를 넘음`); },
    async read() { return (await readState()) || {}; },
    done() { page.off('pageerror', onErr); },
  };
  return ctx;
}

// 마무리: 예외를 problem 으로 바꾼다
export function finish(ctx, e, reached) {
  ctx.done();
  if (e && !(e instanceof Stop)) ctx.note('driver-limit', `조작기 예외: ${String(e.message || e).split('\n')[0].slice(0, 160)}`);
  if (e instanceof Stop) ctx.note(e.kind, e.message);
  if (ctx.errors.length) ctx.note('ui-error', `조작 중 예외: ${ctx.errors[0].slice(0, 160)}`);
  return { reached: !e && !!reached && !ctx.errors.length, actions: ctx.actions, problems: ctx.problems };
}

// ---- 위치 ----
export async function box(loc) {
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  const b = await loc.boundingBox();
  return b;
}
const center = (b) => ({ x: b.x + b.width / 2, y: b.y + b.height / 2 });

// 터치 대상이 44px 미만이면 알린다(마우스·키보드는 재지 않는다). measure: 실제로 눌리는 하위 요소(예: .pk-hit)
export async function checkTouchSize(ctx, loc, what, measure) {
  if (ctx.input !== 'touch') return;
  const m = measure ? loc.locator(measure).first() : loc;
  const b = (await m.count()) ? await m.boundingBox() : await loc.boundingBox();
  if (b && Math.min(b.width, b.height) < 43.5) ctx.note('touch-target-small', `${what}: ${Math.round(b.width)}×${Math.round(b.height)}px(44px 미만)`);
}

// ---- 터치 ----
async function touchTap(ctx, x, y) {
  const c = await cdpOf(ctx.page);
  await c.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await sleep(30);
  await c.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await sleep(40);
}
async function touchDrag(ctx, a, b) {
  const c = await cdpOf(ctx.page);
  await c.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: a.x, y: a.y }] });
  await sleep(40);
  const n = 8;
  for (let i = 1; i <= n; i++) {
    await c.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: a.x + ((b.x - a.x) * i) / n, y: a.y + ((b.y - a.y) * i) / n }] });
    await sleep(16);
  }
  await sleep(40);
  await c.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await sleep(60);
}

// 점 (x,y) 를 마우스로 누르거나 손가락으로 두드린다
export async function pointTap(ctx, x, y) {
  ctx.tick();
  if (ctx.input === 'touch') await touchTap(ctx, x, y);
  else { await ctx.page.mouse.move(x, y); await ctx.page.mouse.down(); await ctx.page.mouse.up(); await sleep(40); }
}
export async function pointDrag(ctx, a, b) {
  ctx.tick();
  if (ctx.input === 'touch') return touchDrag(ctx, a, b);
  const m = ctx.page.mouse;
  await m.move(a.x, a.y); await m.down();
  await m.move(a.x + (b.x - a.x) / 3, a.y + (b.y - a.y) / 3, { steps: 3 });
  await m.move(b.x, b.y, { steps: 6 });
  await m.up(); await sleep(70);
}

// ---- 키보드 ----
export async function press(ctx, key) { ctx.tick(); await ctx.page.keyboard.press(key); await sleep(25); }

// 키보드만으로 loc 에 초점을 옮긴다(Tab → 못 찾으면 Shift+Tab). 못 찾으면 no-keyboard-path.
export async function tabTo(ctx, loc, what) {
  const h = await loc.elementHandle({ timeout: 3000 }).catch(() => null);
  if (!h) ctx.stop('control-missing', `${what}: 화면에 없음`);
  const focusable = await h.evaluate((el) => { const r = el.getBoundingClientRect(); return el.tabIndex >= 0 && !el.disabled && r.width > 0 && r.height > 0; });
  if (!focusable) ctx.stop('no-keyboard-path', `${what}: Tab 으로 닿지 않음(tabindex 없음)`);
  const on = () => h.evaluate((el) => document.activeElement === el);
  if (await on()) return;
  for (const key of ['Tab', 'Shift+Tab']) {
    for (let i = 0; i < 160; i++) {
      ctx.tick(); await ctx.page.keyboard.press(key);
      if (await on()) return;
    }
  }
  ctx.stop('no-keyboard-path', `${what}: Tab 으로 닿지 않음`);
}

// 단추·칸 하나를 '누른다': 마우스·터치는 누르고, 키보드는 Tab 으로 찾아가 Enter
export async function activate(ctx, loc, what, opts = {}) {
  if (ctx.input === 'keyboard') {
    await tabTo(ctx, loc, what);
    await press(ctx, opts.key || 'Enter');
    return;
  }
  const b = await box(loc);
  if (!b) ctx.stop('control-missing', `${what}: 화면에 보이지 않음`);
  await checkTouchSize(ctx, loc, what, opts.measure);
  const p = center(b);
  await pointTap(ctx, p.x, p.y);
}

// 같은 이름 단추를 여러 번 누른다
export async function activateN(ctx, loc, what, n, opts) { for (let i = 0; i < n; i++) await activate(ctx, loc, what, opts); }

export const sameJSON = (a, b) => JSON.stringify(a) === JSON.stringify(b);
