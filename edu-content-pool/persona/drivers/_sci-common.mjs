// 과학·몸 교구 조작기 공용 입력 도우미 — 마우스·터치·키보드(persona.input)로만 화면을 조작한다.
// 상태는 읽기만 하고(readState) 쓰지 않는다. tool.setState/solve/reset, __pl.goto 는 쓰지 않는다.

const FOCUS_MAX = 220;
const TOUCH_MIN = 44;

export function makeCtx({ page, persona, readState, log, maxActions = 400 }) {
  const input = (persona && persona.input) || 'mouse';
  const problems = [];
  const seen = new Set();
  let actions = 0;
  let cdp = null;
  const ctx = {
    page, input, problems, readState,
    get actions() { return actions; },
    note(msg) { if (log) log(msg); },
    problem(kind, msg) {
      const k = `${kind}|${msg}`;
      if (seen.has(k)) return;
      seen.add(k); problems.push({ kind, msg });
    },
    over() { return actions >= maxActions; },
    count(n = 1) { actions += n; },
    wait: (ms = 50) => page.waitForTimeout(ms),
    state: () => readState(),
    result(reached) { return { reached: Boolean(reached), actions, problems }; },
  };

  ctx.box = async (loc) => {
    try { await loc.first().scrollIntoViewIfNeeded({ timeout: 2000 }); } catch (_) { /* 보이지 않는 대상 */ }
    return loc.first().boundingBox().catch(() => null);
  };

  const sizeCheck = (box, label) => {
    if (ctx.input === 'touch' && box && (box.width < TOUCH_MIN - 0.5 || box.height < TOUCH_MIN - 0.5)) {
      ctx.problem('touch-target-small', `${label}: ${Math.round(box.width)}×${Math.round(box.height)}px (44px 미만)`);
    }
  };
  ctx.sizeCheck = sizeCheck;

  async function touchCdp() {
    if (!cdp) cdp = await page.context().newCDPSession(page);
    return cdp;
  }

  // 키보드: Tab/Shift+Tab 으로만 대상에 초점을 옮긴다
  ctx.focusViaTab = async (loc, label) => {
    const h = await loc.first().elementHandle().catch(() => null);
    if (!h) return false;
    const focusable = await h.evaluate((e) => {
      const st = getComputedStyle(e);
      return e.tabIndex >= 0 && !e.disabled && st.visibility !== 'hidden' && st.display !== 'none';
    }).catch(() => false);
    if (!focusable) { ctx.problem('no-keyboard-path', `${label}: Tab 으로 닿는 초점이 없음(tabindex 없음)`); return false; }
    for (let i = 0; i < FOCUS_MAX; i++) {
      const dir = await h.evaluate((e) => {
        const a = document.activeElement;
        if (a === e) return 0;
        if (!a || a === document.body) return 1;
        return (a.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) ? 1 : -1;
      });
      if (dir === 0) return true;
      await page.keyboard.press(dir > 0 ? 'Tab' : 'Shift+Tab'); ctx.count();
    }
    ctx.problem('no-keyboard-path', `${label}: Tab ${FOCUS_MAX}번 안에 초점이 닿지 않음`);
    return false;
  };

  ctx.key = async (k, times = 1) => { for (let i = 0; i < times; i++) { await page.keyboard.press(k); ctx.count(); } await ctx.wait(30); };

  // 누르기: 마우스 클릭 / 터치 탭 / 키보드 초점 + Enter
  ctx.tap = async (loc, label = '대상', opts = {}) => {
    if (ctx.over()) return false;
    const n = await loc.count().catch(() => 0);
    if (!n) return false;
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(loc, label))) return false;
      await page.keyboard.press(opts.key || 'Enter'); ctx.count(); await ctx.wait(40);
      return true;
    }
    const b = await ctx.box(loc);
    if (!b || b.width < 1 || b.height < 1) return false;
    sizeCheck(b, label);
    const x = b.x + b.width / 2; const y = b.y + b.height / 2;
    if (ctx.input === 'touch') {
      try { await page.touchscreen.tap(x, y); } catch (_) { await page.mouse.click(x, y); }
    } else await page.mouse.click(x, y);
    ctx.count(); await ctx.wait(40);
    return true;
  };

  // 같은 단추를 n 번 누르기(키보드는 초점을 한 번만 옮기고 Enter 를 n 번)
  ctx.tapN = async (loc, label, n) => {
    if (n <= 0) return true;
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(loc, label))) return false;
      for (let i = 0; i < n && !ctx.over(); i++) { await page.keyboard.press('Enter'); ctx.count(); await ctx.wait(25); }
      return true;
    }
    for (let i = 0; i < n && !ctx.over(); i++) { if (!(await ctx.tap(loc, label))) return false; }
    return true;
  };

  // 누르고 결과를 상태로 확인. 키보드가 Enter 로 안 되면 Space 도 해 본다. 끝내 안 되면 키보드 길 없음.
  ctx.tapExpect = async (loc, label, okFn, opts = {}) => {
    if (!(await ctx.tap(loc, label, opts))) return false;
    if (await okFn()) return true;
    if (ctx.input === 'keyboard') {
      await page.keyboard.press(' '); ctx.count(); await ctx.wait(40);
      if (await okFn()) return true;
      ctx.problem('no-keyboard-path', `${label}: 초점을 두고 Enter/Space 를 눌러도 반응이 없음`);
    }
    return false;
  };

  // 글자 칸 채우기(마우스·터치는 눌러서 초점, 키보드는 Tab 초점)
  ctx.typeInto = async (loc, text, label = '입력 칸') => {
    if (ctx.input === 'keyboard') { if (!(await ctx.focusViaTab(loc, label))) return false; }
    else if (!(await ctx.tap(loc, label))) return false;
    await page.keyboard.press('Control+A'); await page.keyboard.press('Delete');
    await page.keyboard.type(String(text), { delay: 5 }); ctx.count(String(text).length + 2); await ctx.wait(40);
    return true;
  };

  // 끌기(마우스: 포인터 이동, 터치: 실제 터치 이벤트). from/to 는 화면 좌표, mid 는 선택 중간 점들
  ctx.dragPath = async (pts, label = '끌기') => {
    if (ctx.over() || pts.length < 2) return false;
    if (ctx.input === 'touch') {
      try {
        const c = await touchCdp();
        await c.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: pts[0].x, y: pts[0].y, id: 1 }] });
        for (const p of pts.slice(1)) { await c.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: p.x, y: p.y, id: 1 }] }); await page.waitForTimeout(8); }
        await c.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
        ctx.count(); await ctx.wait(80);
        return true;
      } catch (e) { ctx.problem('driver-limit', `${label}: 터치 끌기 입력을 보내지 못함(${String(e.message).slice(0, 60)})`); return false; }
    }
    await page.mouse.move(pts[0].x, pts[0].y); await page.mouse.down();
    for (const p of pts.slice(1)) { await page.mouse.move(p.x, p.y); await page.waitForTimeout(6); }
    await page.mouse.up(); ctx.count(); await ctx.wait(80);
    return true;
  };

  // 두 점 사이 직선을 n 칸으로 나눈 점들
  ctx.line = (a, b, n = 12) => Array.from({ length: n + 1 }, (_, i) => ({ x: a.x + ((b.x - a.x) * i) / n, y: a.y + ((b.y - a.y) * i) / n }));
  // 중심 둘레 호(도 단위, 화면 좌표: 0°=12시, 시계 방향 +)
  ctx.arc = (c, r, fromDeg, toDeg, n = 16) => Array.from({ length: n + 1 }, (_, i) => {
    const a = ((fromDeg + ((toDeg - fromDeg) * i) / n) * Math.PI) / 180;
    return { x: c.x + r * Math.sin(a), y: c.y - r * Math.cos(a) };
  });
  ctx.center = (b) => ({ x: b.x + b.width / 2, y: b.y + b.height / 2 });

  return ctx;
}

// 보기 고르기(ask) / 수 쓰기(askNum) — 물질·힘·몸·지구 등 여러 교구가 같은 모양을 쓴다
export async function answerAsk(ctx, choiceSel, target) {
  const page = ctx.page;
  if (target && target.pick != null) {
    const radios = page.locator(choiceSel);
    const n = await radios.count();
    if (!n) { ctx.problem('control-missing', `보기 고르기 칸이 없음(target.pick=${target.pick})`); return false; }
    if (target.pick >= n) { ctx.problem('unreachable', `보기 ${n}개인데 정답 번호가 ${target.pick}`); return false; }
    const r = radios.nth(target.pick);
    const ok = await ctx.tapExpect(r, `보기 ${target.pick + 1}번`, async () => (await ctx.state()).pick === target.pick);
    return ok || (await ctx.state()).pick === target.pick;
  }
  return true;
}

export async function answerNum(ctx, root, target) {
  if (target && target.num != null) {
    const inp = ctx.page.locator(`${root} input`);
    if (!(await inp.count())) { ctx.problem('control-missing', `수를 쓰는 칸이 없음(target.num=${target.num})`); return false; }
    await ctx.typeInto(inp.first(), String(target.num), '수 쓰는 칸');
    return (await ctx.state()).num === target.num;
  }
  return true;
}

// 같은 판이 여러 번 같은 대상을 누르며 풀 때 쓰는 대기 상한 도우미
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 'label' 묶음 안의 "<label> 줄이기/늘리기" 단추로 상태 key 를 want 까지 맞춘다(한 번에 unit 씩 변하는 −/+ 단추)
export async function stepTo(ctx, root, label, key, want, unit) {
  const g = ctx.page.locator(`${root} [role="group"][aria-label="${label}"]`);
  if (!(await g.count())) { ctx.problem('control-missing', `'${label}' 조절 단추가 없음`); return false; }
  let cur = (await ctx.state())[key];
  for (let guard = 0; guard < 40 && cur !== want && !ctx.over(); guard++) {
    const n = Math.max(1, Math.round(Math.abs(want - cur) / unit));
    const btn = g.locator(`button[aria-label="${label} ${want > cur ? '늘리기' : '줄이기'}"]`);
    if (!(await ctx.tapN(btn, `${label} ${want > cur ? '+' : '−'}`, n))) return false;
    const nx = (await ctx.state())[key];
    if (nx === cur) { ctx.problem('unreachable', `'${label}'이(가) ${want} 까지 바뀌지 않음(지금 ${cur})`); return false; }
    cur = nx;
  }
  if (cur !== want) { ctx.problem('unreachable', `'${label}'을(를) ${want}로 맞출 수 없음(지금 ${cur})`); return false; }
  return true;
}
