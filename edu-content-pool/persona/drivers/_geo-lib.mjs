// 도형·공간·지도 조작기들이 함께 쓰는 입력 도구.
// 실제 마우스·터치·키보드 이벤트만 만든다 — 교구의 setState·solve·reset 은 부르지 않는다.
export const rt = (page) => page.__root || '#tool';
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const MIN_TOUCH = 44;
const MAX_ACTIONS = 600;

async function cdp(page) {
  if (!page.__geoCdp) page.__geoCdp = await page.context().newCDPSession(page);
  return page.__geoCdp;
}

// 보이는 곳으로 스크롤한 뒤 화면 좌표를 돌려준다.
// 부드러운 스크롤이 끝날 때까지 기다린다(끝나기 전에 잰 좌표는 틀어진다)
export async function settleScroll(page) {
  let last = await page.evaluate(() => scrollY).catch(() => 0);
  for (let i = 0; i < 20; i++) { await sleep(60); const y = await page.evaluate(() => scrollY).catch(() => last); if (y === last) return; last = y; }
}
export async function box(loc) {
  await loc.scrollIntoViewIfNeeded({ timeout: 2500 }).catch(() => {});
  await settleScroll(loc.page());
  return loc.boundingBox().catch(() => null);
}
export const mid = (b) => ({ x: b.x + b.width / 2, y: b.y + b.height / 2 });

// 교구 무대(svg) 좌표 → 화면 좌표(스크롤하지 않는다). 여러 점을 함께 보이게 하려면 fitView 와 같이 쓴다.
export async function svgToScreen(page, x, y, sel = (rt(page) + ' svg.pk-stage')) {
  return page.evaluate(([x0, y0, s]) => {
    const svg = document.querySelector(s); if (!svg) return null;
    const p = svg.createSVGPoint(); p.x = x0; p.y = y0;
    const q = p.matrixTransform(svg.getScreenCTM());
    return { x: q.x, y: q.y, scale: svg.getScreenCTM().a, vw: innerWidth, vh: innerHeight };
  }, [x, y, sel]);
}

// 실제 요소의 눌리는 크기(화면 px): SVG 요소 자기 좌표의 너비·높이에 화면 변환 배율을 곱한다(돌아간 띠도 제 폭으로 잰다).
// 고정 상수(52*배율 등)로 셈하지 않는다 — 교구가 화면 크기에 따라 잡는 곳을 키우기 때문이다.
export async function hitSize(loc) {
  if (!(await loc.count())) return null;
  return loc.first().evaluate((el) => {
    const b = el.getBBox(); const m = el.getScreenCTM(); if (!m) return null;
    const sx = Math.hypot(m.a, m.b); const sy = Math.hypot(m.c, m.d);
    const w = b.width * sx; const h = b.height * sy;
    return { w, h, min: Math.min(w, h) };
  }).catch(() => null);
}

// getPts() 가 돌려주는 화면 점들이 모두 보일 때까지(최대 3번) 스크롤하고, 마지막 점들을 돌려준다.
// 점을 구하는 일은 스크롤 뒤에 해야 좌표가 틀어지지 않는다 — 그래서 점을 구하는 함수를 받는다.
export async function fitView(page, getPts) {
  let pts = await getPts();
  for (let i = 0; i < 3; i++) {
    const vh = await page.evaluate(() => innerHeight);
    const lo = Math.min(...pts.map((p) => p.y)); const hi = Math.max(...pts.map((p) => p.y));
    if (lo >= 4 && hi <= vh - 4) break;
    await page.evaluate((dy) => window.scrollBy(0, dy), (lo + hi) / 2 - vh / 2);
    await settleScroll(page); pts = await getPts();
  }
  return pts;
}

export async function ensureStageVisible(page, sel) {
  await page.locator(sel || rt(page)).first().scrollIntoViewIfNeeded({ timeout: 2500 }).catch(() => {});
}

// 키보드: 대상이 초점을 받을 때까지 Tab(앞으로, 안 되면 Shift+Tab). 못 받으면 false.
export async function tabTo(page, loc, max = 140) {
  const h = await loc.first().elementHandle({ timeout: 1500 }).catch(() => null);
  if (!h) return false;
  const focused = () => h.evaluate((el) => el === document.activeElement).catch(() => false);
  if (await focused()) return true;
  for (let i = 0; i < max; i++) { await page.keyboard.press('Tab'); if (await focused()) return true; }
  for (let i = 0; i < max * 2; i++) { await page.keyboard.press('Shift+Tab'); if (await focused()) return true; }
  return false;
}

export function actor({ page, persona, problems }) {
  const input = (persona && persona.input) || 'mouse';
  const seen = new Set();
  const A = { page, input, n: 0, problems };
  A.problem = (kind, msg) => { const k = `${kind}|${msg}`; if (seen.has(k)) return; seen.add(k); problems.push({ kind, msg }); };
  A.count = () => { A.n++; if (A.n > MAX_ACTIONS) throw new Error('action-cap'); };

  // 누르기: 마우스는 클릭, 터치는 탭, 키보드는 Tab 으로 가서 Enter
  A.tap = async (loc, what, opt = {}) => {
    A.count();
    if (input === 'keyboard') {
      if (!(await tabTo(page, loc))) { A.problem('no-keyboard-path', `${what}: Tab 으로 초점이 닿지 않음`); return false; }
      await page.keyboard.press(opt.key || 'Enter'); await sleep(opt.wait ?? 90); return true;
    }
    const b = await box(loc);
    if (!b) { A.problem('control-missing', `${what}: 화면에 없음`); return false; }
    if (input === 'touch') {
      const hb = opt.hit ? await opt.hit.boundingBox().catch(() => null) : b;
      const m = hb || b;
      if (Math.min(m.width, m.height) < MIN_TOUCH - 0.5) A.problem('touch-target-small', `${what}: ${Math.round(m.width)}x${Math.round(m.height)}px`);
      const p = mid(b);
      await touchTap(page, p.x, p.y);
    } else {
      const p = mid(b); await page.mouse.click(p.x, p.y);
    }
    await sleep(opt.wait ?? 90);
    return true;
  };

  // 끌기: pts[0] 에서 누르고 나머지를 지나 마지막에서 뗀다
  A.dragPath = async (pts, what, opt = {}) => {
    A.count();
    if (input === 'touch') {
      const c = await cdp(page);
      await c.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [pts[0]] });
      for (const p of pts.slice(1)) { await c.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [p] }); await sleep(8); }
      await c.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    } else {
      await page.mouse.move(pts[0].x, pts[0].y); await page.mouse.down();
      for (const p of pts.slice(1)) { await page.mouse.move(p.x, p.y); await sleep(6); }
      await page.mouse.up();
    }
    await sleep(opt.wait ?? 380);
  };
  A.drag = async (from, to, what, opt = {}) => {
    const steps = opt.steps || 14; const pts = [from];
    for (let i = 1; i <= steps; i++) pts.push({ x: from.x + ((to.x - from.x) * i) / steps, y: from.y + ((to.y - from.y) * i) / steps });
    await A.dragPath(pts, what, opt);
  };
  A.key = async (k, n = 1, wait = 25) => { for (let i = 0; i < n; i++) { A.count(); await page.keyboard.press(k); await sleep(wait); } };
  A.type = async (text) => { A.count(); await page.keyboard.type(String(text), { delay: 20 }); await sleep(60); };
  // 키보드 초점 맞추기(그 뒤 키를 보낸다). 못 닿으면 no-keyboard-path
  A.focus = async (loc, what) => {
    if (await tabTo(page, loc)) return true;
    A.problem('no-keyboard-path', `${what}: Tab 으로 초점이 닿지 않음`); return false;
  };
  // 고르기 단추 묶음(role=radio) 에서 i 번째 고르기
  A.choose = async (radios, i, what) => {
    const n = await radios.count();
    if (i == null || i < 0 || i >= n) { A.problem('unreachable', `${what}: 보기 ${i}번이 없음(보기 ${n}개)`); return false; }
    if (input !== 'keyboard') return A.tap(radios.nth(i), `${what} 보기 ${i + 1}`);
    A.count();
    if (await tabTo(page, radios.nth(i), 40)) { await page.keyboard.press('Enter'); await sleep(80); return true; }
    if (!(await tabTo(page, radios.first()))) { A.problem('no-keyboard-path', `${what}: 보기에 Tab 이 닿지 않음`); return false; }
    if (i === 0) await page.keyboard.press('Enter'); else await A.key('ArrowRight', i, 40);
    await sleep(80); return true;
  };
  // 글자 칸에 수 쓰기
  A.fill = async (loc, text, what) => {
    if (input === 'keyboard') {
      if (!(await A.focus(loc, what))) return false;
    } else if (!(await A.tap(loc, what))) return false;
    A.count();
    await page.keyboard.press('Control+A'); await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(String(text), { delay: 25 }); await sleep(80);
    await page.keyboard.press('Tab').catch(() => {}); // change 이벤트
    return true;
  };
  return A;
}

export async function touchTap(page, x, y) {
  try { await page.touchscreen.tap(x, y); } catch (_) {
    const c = await cdp(page);
    await c.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    await c.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  }
}

// 조각 목표가 없는 '짝 활동'(free): 상태가 한 번 바뀌도록 눈에 띄는 조작 하나를 한다
export async function nudge(A, readState, what = '교구') {
  const page = A.page; const before = JSON.stringify(await readState());
  const cands = [(rt(page) + ' .sh-dot'), (rt(page) + ' .sh-card'), (rt(page) + ' .pk-arm'), (rt(page) + ' .ra-arm'), (rt(page) + ' .cp-compass'), (rt(page) + ' .mf-pin'), (rt(page) + ' .cn-face'), (rt(page) + ' .mp-pin'),
    (rt(page) + ' .cy-b--main'), (rt(page) + ' .ca-btn'), (rt(page) + ' .mc-dirbtn'), (rt(page) + ' [data-dir]'), (rt(page) + ' [data-d]'), (rt(page) + ' button:not([disabled])'), (rt(page) + ' [role=button]')];
  const pinG = page.locator((rt(page) + ' .mp-pin')).first();
  if (await pinG.count()) {
    if (A.input === 'keyboard') { if (await A.focus(pinG, '핀')) { await A.key('ArrowRight', 2); await sleep(200); } }
    else {
      const sv = await box(page.locator((rt(page) + ' svg.pk-stage')).first()); const pb = await box(pinG.locator('.pk-hit').first());
      if (sv && pb) {
        const tgt = { x: sv.x + sv.width * 0.35, y: sv.y + sv.height * 0.5 };
        if (A.input === 'touch') { await touchTap(page, tgt.x, tgt.y); await sleep(400); } else await A.drag(mid(pb), tgt, '핀 끌기', { wait: 450 });
      }
    }
    if (JSON.stringify(await readState()) !== before) return true;
  }
  for (const c of cands) {
    const loc = page.locator(c).first();
    if (!(await loc.count())) continue;
    if (A.input === 'keyboard') { if (await A.focus(loc, `${what} 움직이기`)) { await A.key('ArrowRight', 2); await page.keyboard.press('Enter'); await sleep(200); } }
    else await A.tap(loc, `${what} 움직이기`, { wait: 300 });
    if (JSON.stringify(await readState()) !== before) return true;
  }
  return false;
}

// 문항의 보기 고르기(pick)·수 쓰기(num) — 도형판·거울접기 등 ask 칸 공통
export async function answerAsk(A, scope, target, { radios, numInput, label = '보기' }, readState) {
  const out = { ok: true };
  if (target && target.pick != null) {
    if (!radios || !(await radios.count())) { A.problem('control-missing', `${label}: 고르기 보기가 화면에 없음`); out.ok = false; }
    else out.ok = (await A.choose(radios, target.pick, label)) && out.ok;
  }
  if (target && target.num != null) {
    if (!numInput || !(await numInput.count())) { A.problem('control-missing', '수 쓰기 칸이 화면에 없음'); out.ok = false; }
    else out.ok = (await A.fill(numInput.first(), target.num, '수 쓰기 칸')) && out.ok;
  }
  return out;
}
