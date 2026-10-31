// 수·측정 교구 조작기들이 함께 쓰는 입력 도우미 — 마우스·터치·키보드(Tab/방향키/Enter/Space/글자)만 쓴다.
// 상태를 쓰는 호출(setState·solve·reset·goto)은 어느 것도 부르지 않는다.
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 한 조작기 실행의 맥락: 조작 수 세기·문제 모으기(같은 kind+라벨은 한 번만)
export function makeCtx({ page, persona, readState, log, maxActions = 400 }) {
  const input = (persona && persona.input) || 'mouse';
  const problems = []; const seen = new Set();
  const ctx = {
    page, input, readState, problems, actions: 0, maxActions, touchSession: null,
    log: log || (() => {}),
    problem(kind, msg) { const k = `${kind}|${msg}`; if (seen.has(k)) return; seen.add(k); problems.push({ kind, msg }); },
    over() { return ctx.actions >= ctx.maxActions; },
    tick(n = 1) { ctx.actions += n; },
    result(reached) { return { reached: !!reached, actions: ctx.actions, problems }; },
  };
  return ctx;
}

// 보이는 상자(화면 좌표). 없거나 숨겨졌으면 null
export async function box(loc) {
  try {
    if (!(await loc.count())) return null;
    const el = loc.first();
    await el.scrollIntoViewIfNeeded({ timeout: 1500 }).catch(() => {});
    const b = await el.boundingBox();
    return b && b.width > 0 && b.height > 0 ? b : null;
  } catch (_) { return null; }
}

// 터치 대상 크기 검사 — 눌러야 하는 대상이 44px 미만이면 한 번만 알린다
export async function checkTouchSize(ctx, loc, label) {
  if (ctx.input !== 'touch') return;
  const b = await box(loc);
  if (b && (b.width < 43.5 || b.height < 43.5)) ctx.problem('touch-target-small', `${label}: ${Math.round(b.width)}×${Math.round(b.height)}px (44px 미만)`);
}

// 지금 포커스된 요소가 loc 과 같은가
export async function isFocused(loc) {
  try { return await loc.first().evaluate((el) => el === document.activeElement || el.contains(document.activeElement)); } catch (_) { return false; }
}

// Tab 으로만 loc 에 닿는다(앞으로 max 번, 못 닿으면 거꾸로 max 번). 포커스가 이미 있으면 그대로.
export async function tabTo(ctx, loc, max = 90, keys = ['Tab', 'Shift+Tab']) {
  const { page } = ctx;
  if (!(await loc.count())) return false;
  if (await isFocused(loc)) return true;
  for (const key of keys) {
    for (let i = 0; i < max; i++) {
      await page.keyboard.press(key); ctx.tick();
      if (await isFocused(loc)) return true;
    }
  }
  return false;
}

// 가까운 곳부터 찾는 Tab: 앞으로 fwd 번, 못 닿으면 거꾸로 fwd+back 번(멀리 돌아가며 다른 칸의 포커스 동작을 건드리지 않게)
export async function tabNear(ctx, loc, fwd = 8, back = 16) {
  const { page } = ctx;
  if (!(await loc.count())) return false;
  if (await isFocused(loc)) return true;
  for (const [key, n] of [['Tab', fwd], ['Shift+Tab', fwd + back]]) {
    for (let i = 0; i < n; i++) { await page.keyboard.press(key); ctx.tick(); if (await isFocused(loc)) return true; }
  }
  return false;
}

export async function pressN(ctx, key, n) {
  for (let i = 0; i < n && !ctx.over(); i++) { await ctx.page.keyboard.press(key); ctx.tick(); }
}

// 화면 좌표 (x, y) 한 번 누르기
export async function pointAt(ctx, x, y) {
  const { page } = ctx;
  if (ctx.input === 'touch') await page.touchscreen.tap(x, y); else await page.mouse.click(x, y);
  ctx.tick(); await sleep(40);
}

// loc 한 번 누르기. 키보드면 Tab 으로 가서 Enter. 안 되면 false
export async function press(ctx, loc, label, { key = 'Enter', size = true, tabKeys } = {}) {
  if (!(await loc.count())) return false;
  if (ctx.input === 'keyboard') {
    if (!(await tabTo(ctx, loc, 90, tabKeys))) { ctx.problem('no-keyboard-path', `${label}: Tab 으로 닿지 않음`); return false; }
    await ctx.page.keyboard.press(key); ctx.tick(); await sleep(30); return true;
  }
  const b = await box(loc);
  if (!b) return false;
  if (size) await checkTouchSize(ctx, loc, label);
  await pointAt(ctx, b.x + b.width / 2, b.y + b.height / 2);
  return true;
}

// 끌기: 마우스는 눌러 끌고, 터치는 CDP 터치 이벤트로 끈다(포인터 이벤트가 touch 로 나간다)
export async function dragXY(ctx, from, to, steps = 10) {
  const { page } = ctx;
  if (ctx.input === 'touch') {
    ctx.touchSession ||= await page.context().newCDPSession(page);
    const s = ctx.touchSession;
    const send = (type, p) => s.send('Input.dispatchTouchEvent', { type, touchPoints: p ? [{ x: p.x, y: p.y, id: 1 }] : [] });
    await send('touchStart', from);
    for (let i = 1; i <= steps; i++) await send('touchMove', { x: from.x + ((to.x - from.x) * i) / steps, y: from.y + ((to.y - from.y) * i) / steps });
    await send('touchEnd', null);
  } else {
    await page.mouse.move(from.x, from.y); await page.mouse.down();
    await page.mouse.move(to.x, to.y, { steps }); await page.mouse.up();
  }
  ctx.tick(); await sleep(50);
}

// 입력 칸에 글 쓰기(마우스·터치는 눌러 포커스, 키보드는 Tab). 기존 글은 지운다
export async function typeInto(ctx, loc, text, label) {
  if (!(await loc.count())) return false;
  const { page } = ctx;
  if (ctx.input === 'keyboard') {
    if (!(await tabTo(ctx, loc))) { ctx.problem('no-keyboard-path', `${label}: Tab 으로 닿지 않음`); return false; }
  } else {
    const b = await box(loc); if (!b) return false;
    await checkTouchSize(ctx, loc, label);
    await pointAt(ctx, b.x + b.width / 2, b.y + b.height / 2);
  }
  await page.keyboard.press('ControlOrMeta+A'); await page.keyboard.press('Backspace');
  await page.keyboard.type(String(text), { delay: 15 }); ctx.tick(String(text).length + 1);
  await sleep(30);
  return true;
}

// SVG 좌표 → 화면 좌표(스테이지 svg 의 현재 변환 기준)
export async function svgToScreen(page, svgLoc, x, y) {
  return svgLoc.first().evaluate((svg, [px, py]) => {
    const pt = svg.createSVGPoint(); pt.x = px; pt.y = py;
    const m = svg.getScreenCTM(); const q = pt.matrixTransform(m);
    return { x: q.x, y: q.y };
  }, [x, y]);
}

// 분수·대분수·소수 글 → 수. 못 읽으면 NaN
export function parseNum(v) {
  if (typeof v === 'number') return v;
  const s = String(v ?? '').trim().replace('−', '-');
  let m = /^(-?\d+) (\d+)\/(\d+)$/.exec(s);
  if (m) return Number(m[1]) + Math.sign(Number(m[1]) || 1) * (Number(m[2]) / Number(m[3]));
  m = /^(-?\d+)\/(\d+)$/.exec(s);
  if (m) return Number(m[2]) ? Number(m[1]) / Number(m[2]) : NaN;
  if (/^-?\d*\.?\d+$/.test(s)) return Number(s);
  return NaN;
}
export const near = (a, b, e = 1e-6) => Math.abs(a - b) < e;

// 점 목록을 따라 끌기(원호 같은 굽은 길). 마우스는 눌러 끌고 터치는 CDP 터치 이벤트로 끈다
export async function dragPath(ctx, pts) {
  const { page } = ctx;
  if (pts.length < 2) return;
  if (ctx.input === 'touch') {
    ctx.touchSession ||= await page.context().newCDPSession(page);
    const s = ctx.touchSession;
    const send = (type, p) => s.send('Input.dispatchTouchEvent', { type, touchPoints: p ? [{ x: p.x, y: p.y, id: 1 }] : [] });
    await send('touchStart', pts[0]);
    for (const p of pts.slice(1)) await send('touchMove', p);
    await send('touchEnd', null);
  } else {
    await page.mouse.move(pts[0].x, pts[0].y); await page.mouse.down();
    for (const p of pts.slice(1)) await page.mouse.move(p.x, p.y);
    await page.mouse.up();
  }
  ctx.tick(); await sleep(60);
}

// 점들이 모두 화면 안에 들어오도록 쪽을 굴린 뒤의 화면 좌표(굴린 뒤에는 좌표가 바뀌므로 매번 다시 계산한다)
export async function fitPoints(ctx, compute) {
  const { page } = ctx;
  let pts = await compute();
  for (let i = 0; i < 3; i++) {
    const vh = (page.viewportSize() || { height: 768 }).height;
    const ys = pts.map((p) => p.y); const lo = Math.min(...ys); const hi = Math.max(...ys);
    let dy = 0;
    if (hi > vh - 10) dy = hi - (vh - 24); else if (lo < 10) dy = lo - 24;
    if (!dy) break;
    await page.evaluate((d) => window.scrollBy(0, d), dy); await sleep(60);
    pts = await compute();
  }
  return pts;
}
