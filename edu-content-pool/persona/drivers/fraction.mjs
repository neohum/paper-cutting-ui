// 분수 피자·띠 조각 조작기 — 조각 수 정하고 색칠하기, 칼집 옮겨 똑같이 나누기(freeCut), 똑같이 나누었나요?(judge),
// 분수 쓰기(write), 짝 놀이(proper). 마우스·터치는 조각·단추를 누르고 칼집은 끌며, 키보드는 Tab+Enter, 칼집은 Tab+좌우 방향키.
import { makeCtx, box, press, tabTo, pressN, pointAt, dragXY, dragPath, fitPoints, svgToScreen, checkTouchSize, near, sleep } from './_math-common.mjs';

export const tools = ['fraction'];
const GRID = 24;

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const shape = o.shape === 'strip' ? 'strip' : 'pizza';
  const minN = o.min || 1; const maxN = o.max || (shape === 'pizza' ? 12 : 10);
  const locked = new Set(o.locked || []);
  const freeCut = !o.judge && !o.write && !!o.freeCut;
  const geo = shape === 'pizza' ? { cx: 195, cy: 200, r: 156 } : { x: 30, y: 62, w: 500, h: 108 };
  const tool = page.locator(root); const svg = tool.locator('svg.pk-stage');
  if (!(await svg.count())) { ctx.problem('control-missing', '분수 교구 그림이 화면에 없음'); return ctx.result(false); }
  const scr = (x, y) => svgToScreen(page, svg, x, y);
  const btn = (label) => tool.locator(`[role="button"][aria-label=${JSON.stringify(`${label}`)}]`);
  const partLoc = (k, i) => tool.locator(`.fr-part[aria-label^=${JSON.stringify(`${k}조각 중 ${i + 1}번째 조각`)}]`);
  const r4 = (v) => Math.round(v * 10000) / 10000;

  // 조각 i 의 화면 자리(조각 안쪽)
  async function partPoint(s, i) {
    const k = s.n;
    if (shape === 'pizza') {
      const c = s.cuts ? [...s.cuts].sort((a, b) => a - b) : Array.from({ length: k }, (_, j) => (360 * j) / k);
      const a = c[i]; const z = i + 1 < c.length ? c[i + 1] : c[0] + 360;
      if (k === 1) return scr(geo.cx, geo.cy);
      const m = (((a + z) / 2) * Math.PI) / 180; const rr = geo.r * 0.62;
      return scr(geo.cx + Math.sin(m) * rr, geo.cy - Math.cos(m) * rr);
    }
    const c = [0, ...(s.cuts ? [...s.cuts].sort((a, b) => a - b) : Array.from({ length: k - 1 }, (_, j) => (j + 1) / k)), 1];
    return scr(geo.x + ((c[i] + c[i + 1]) / 2) * geo.w, geo.y + geo.h / 2);
  }

  async function pressPart(s, i, label) {
    const loc = partLoc(s.n, i);
    if (!(await loc.count())) { ctx.problem('control-missing', `${s.n}조각 중 ${i + 1}번째 조각이 화면에 없음`); return false; }
    if (ctx.input === 'keyboard') {
      if (!(await tabTo(ctx, loc))) { ctx.problem('no-keyboard-path', `${label}에 Tab 으로 닿지 않음`); return false; }
      await page.keyboard.press('Enter'); ctx.tick(); await sleep(50); return true;
    }
    if (ctx.input === 'touch') await checkTouchSize(ctx, loc, label);
    const p = await partPoint(s, i);
    await pointAt(ctx, p.x, p.y); await sleep(40);
    return true;
  }

  async function pressBtn(label, times) {
    const b = btn(label);
    if (!(await b.count())) { ctx.problem('control-missing', `${label} 단추가 화면에 없음`); return false; }
    if (ctx.input === 'touch') await checkTouchSize(ctx, b.locator('.pk-hit').first(), label);
    for (let i = 0; i < times && !ctx.over(); i++) {
      if (ctx.input === 'keyboard') {
        if (i === 0 || !(await b.evaluate((el) => el === document.activeElement))) {
          if (!(await tabTo(ctx, b))) { ctx.problem('no-keyboard-path', `${label} 단추에 Tab 으로 닿지 않음`); return false; }
        }
        await page.keyboard.press('Enter'); ctx.tick(); await sleep(30);
      } else {
        const bb = await box(b.locator('.pk-hit').first()); if (!bb) return false;
        await pointAt(ctx, bb.x + bb.width / 2, bb.y + bb.height / 2);
      }
    }
    return true;
  }

  try {
    if ('equal' in t) return await judgeMode();
    if (o.write) return await writeMode();
    if (t.proper) return await properMode();
    return await colorMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function judgeMode() {
    const label = t.equal ? '똑같이 나눴어요' : '똑같지 않아요';
    const b = btn(label);
    if (!(await b.count())) { ctx.problem('control-missing', `'${label}' 단추가 화면에 없음`); return ctx.result(false); }
    if (ctx.input === 'touch') await checkTouchSize(ctx, b.locator('.pk-hit').first(), label);
    if (!(await pressBtn(label, 1))) return ctx.result(false);
    if (o.judgeWhy && !t.equal) {
      const s = await readState();
      const bnd = shape === 'pizza'
        ? (() => { const c = [...(s.cuts || [])].sort((a, b2) => a - b2); return c.map((a, i) => [a, i + 1 < c.length ? c[i + 1] : c[0] + 360]); })()
        : (() => { const c = [0, ...[...(s.cuts || [])].sort((a, b2) => a - b2), 1]; return c.slice(1).map((z, i) => [c[i], z]); })();
      const sz = bnd.map(([a, z]) => z - a); const big = sz.indexOf(Math.max(...sz));
      if (!(await pressPart({ ...s, n: bnd.length }, big, `가장 큰 조각(${big + 1}번째)`))) return ctx.result(false);
    }
    const s = await readState();
    return ctx.result(s.judge === t.equal && (!(o.judgeWhy && !t.equal) || s.picked != null));
  }

  async function writeMode() {
    const top = Math.max(24, maxN * 2);
    if (t.den == null || t.num == null) { ctx.problem('driver-limit', 'write 문항의 target 에 분모·분자가 없음'); return ctx.result(false); }
    if (t.den > top || t.num > top || t.den < 1) { ctx.problem('unreachable', `쓰기 단추로 ${t.num}/${t.den} 을(를) 만들 수 없음(최대 ${top})`); return ctx.result(false); }
    if (!(await pressBtn('분자 늘리기', t.num))) return ctx.result(false);
    if (!(await pressBtn('분모 늘리기', t.den))) return ctx.result(false);
    const s = await readState();
    return ctx.result(s.wNum === t.num && s.wDen === t.den);
  }

  async function properMode() {
    const k = Math.max(5, t.minDen || 0);
    const c = t.lessThanHalf ? Math.max(1, Math.floor((k - 1) / 2)) : t.moreThanHalf ? Math.floor(k / 2) + 1 : Math.max(2, t.minNum || 0);
    if (k > maxN) { ctx.problem('unreachable', `분모 ${k}가 필요한데 조각 수는 최대 ${maxN}`); return ctx.result(false); }
    if (c >= k || (t.lessThanHalf && c * 2 >= k) || (t.moreThanHalf && c * 2 <= k) || (t.minNum && c < t.minNum)) { ctx.problem('unreachable', `조건(분모 ≥ ${t.minDen ?? '-'}, 분자 ≥ ${t.minNum ?? '-'}, ${t.lessThanHalf ? '절반 미만' : t.moreThanHalf ? '절반 초과' : '조건 없음'})을 만족하는 진분수를 만들 수 없음`); return ctx.result(false); }
    return setAndColor(k, c);
  }

  async function colorMode() {
    if (t.den == null) { ctx.problem('driver-limit', 'target 에 분모(den)가 없음'); return ctx.result(false); }
    const den = t.den; const num = t.num != null ? t.num : 0;
    if (!freeCut && (den < minN || den > maxN) && !(await readState()).cuts) { ctx.problem('unreachable', `조각 수 ${den} 은(는) 판의 범위 ${minN}~${maxN} 밖`); return ctx.result(false); }
    if (num > den) { ctx.problem('unreachable', `${num}/${den}: 색칠할 조각이 전체보다 많음`); return ctx.result(false); }
    return setAndColor(den, num);
  }

  async function setAndColor(den, num) {
    let s = await readState();
    if (freeCut) { if (!(await cutEqually(den, s))) return ctx.result(false); }
    else if (s.cuts) {
      if (s.n !== den) { ctx.problem('unreachable', `칼집이 고정된 판(${s.n}조각)에서 ${den}조각을 만들 수 없음`); return ctx.result(false); }
    } else {
      // 조각 수 단추
      for (let i = 0; i < 40 && !ctx.over(); i++) {
        s = await readState();
        if (s.n === den) break;
        if (!(await btn('조각 수 늘리기').count())) { ctx.problem(s.n === den ? 'driver-limit' : 'unreachable', `조각 수 단추가 없어 ${s.n}조각에서 ${den}조각으로 바꿀 수 없음(조각 수 고정 판)`); return ctx.result(false); }
        if (!(await pressBtn(s.n < den ? '조각 수 늘리기' : '조각 수 줄이기', 1))) return ctx.result(false);
        const s2 = await readState();
        if (s2.n === s.n) { ctx.problem('unreachable', `조각 수를 ${s.n}에서 ${den}로 바꿀 수 없음(범위 ${minN}~${maxN})`); return ctx.result(false); }
      }
    }
    s = await readState();
    if (s.n !== den) { ctx.problem('driver-limit', `조각 수를 ${den} 으로 맞추지 못함(지금 ${s.n})`); return ctx.result(false); }
    // 색칠
    for (let i = 0; i < den && !ctx.over(); i++) {
      s = await readState();
      if (s.colored.length === num) break;
      if (s.colored.length > num) {
        const rm = s.colored.find((x) => !locked.has(x));
        if (rm == null) { ctx.problem('unreachable', `처음부터 칠해진 조각이 ${s.colored.length}개라 ${num}개만 칠할 수 없음`); return ctx.result(false); }
        if (!(await pressPart(s, rm, `${rm + 1}번째 조각`))) return ctx.result(false);
        continue;
      }
      const next = Array.from({ length: den }, (_, j) => j).find((j) => !s.colored.includes(j));
      if (next == null) break;
      if (!(await pressPart(s, next, `${next + 1}번째 조각`))) return ctx.result(false);
    }
    s = await readState();
    return ctx.result(s.n === den && s.colored.length === num && (shape === 'pizza' || !s.cuts || s.equal));
  }

  // ---- 칼집 옮겨 똑같이 나누기 ----
  async function cutEqually(den, s) {
    if (GRID % den !== 0) { ctx.problem('unreachable', `${den}조각은 24칸 눈금에 맞지 않아 칼집으로 똑같이 나눌 수 없음`); return false; }
    const cur = s.cuts || [];
    const handles = shape === 'pizza' ? cur.length - 1 : cur.length; // 피자의 12시 칼집(0번)은 고정
    if (handles !== den - 1) { ctx.problem('unreachable', `움직이는 칼집이 ${handles}개인데 ${den}조각에는 ${den - 1}개가 필요`); return false; }
    const want = shape === 'pizza' ? Array.from({ length: den - 1 }, (_, i) => (360 * (i + 1)) / den) : Array.from({ length: den - 1 }, (_, i) => r4((i + 1) / den));
    const off = shape === 'pizza' ? 1 : 0;
    const eps = shape === 'pizza' ? 0.5 : 0.002;
    for (let pass = 0; pass < 30 && !ctx.over(); pass++) {
      const now = (await readState()).cuts; const vals = now.slice(off);
      if (vals.every((v) => want.some((w) => near(v, w, eps))) && new Set(vals.map((v) => Math.round(v * 1000))).size === vals.length) break;
      // 칼집을 현재 자리 순서대로 목표 자리 순서에 맞춰 짝짓고, 가는 길에 다른 칼집이 없는 짝부터 옮긴다(키보드는 칼집을 건너뛸 수 없다)
      const idx = vals.map((v, k) => k).sort((a, b) => vals[a] - vals[b]);
      const pairs = idx.map((k, r) => ({ j: k, to: want[r] })).filter((q) => !near(vals[q.j], q.to, eps));
      let moved = false;
      const clear = pairs.filter((q) => { const lo = Math.min(vals[q.j], q.to); const hi = Math.max(vals[q.j], q.to); return !vals.some((v, k) => k !== q.j && v > lo - eps && v < hi + eps); });
      const pickPlan = clear[0] || pairs[0];
      if (pickPlan) { await moveCut(pickPlan.j + off, now[pickPlan.j + off], pickPlan.to); moved = true; }
      if (!moved) { ctx.problem('driver-limit', '칼집을 옮길 빈 자리를 찾지 못함'); return false; }
    }
    return near(Math.max(...(await readState()).cuts.slice(off)), Math.max(...want), eps) || (await readState()).equal;
  }

  async function moveCut(j, from, to) {
    const handle = tool.locator(`[aria-label^=${JSON.stringify(`칼집 ${j + 1}.`)}]`);
    if (!(await handle.count())) { ctx.problem('control-missing', `칼집 ${j + 1} 손잡이가 화면에 없음`); return; }
    if (ctx.input === 'keyboard') {
      if (!(await tabTo(ctx, handle))) { ctx.problem('no-keyboard-path', `칼집 ${j + 1} 에 Tab 으로 닿지 않음`); return; }
      const steps = shape === 'pizza' ? Math.round((to - from) / 15) : Math.round((to - from) * GRID);
      await pressN(ctx, steps >= 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(steps));
      return;
    }
    if (shape === 'strip') {
      const y = geo.y + geo.h / 2;
      if (ctx.input === 'touch') await checkTouchSize(ctx, handle.locator('.pk-hit').first(), `칼집 ${j + 1} 손잡이`);
      // 이웃 칼집의 잡는 자리가 겹치면 손잡이 가운데를 눌러도 이웃이 잡힌다 — 이웃에 덮이지 않는 자리를 골라 잡는다
      const lab = `칼집 ${j + 1}.`;
      let grab = 0;
      for (const dx of [0, -16, 16, -9, 9]) {
        const q = await scr(geo.x + from * geo.w + dx, y);
        const hit = await page.evaluate(({ x, yy, l }) => { const e = document.elementFromPoint(x, yy); const g = e && e.closest && e.closest('[aria-label]'); return !!(g && (g.getAttribute('aria-label') || '').startsWith(l)); }, { x: q.x, yy: q.y, l: lab });
        if (hit) { grab = dx; break; }
      }
      const [p0, p1] = await fitPoints(ctx, async () => [await scr(geo.x + from * geo.w + grab, y), await scr(geo.x + to * geo.w + grab, y)]);
      await dragXY(ctx, p0, p1, 8); await sleep(350);
    } else {
      const R = geo.r + 24;
      if (ctx.input === 'touch') await checkTouchSize(ctx, handle.locator('.pk-hit').first(), `칼집 ${j + 1} 손잡이`);
      const n = 6;
      const pts = await fitPoints(ctx, async () => { const out = []; for (let k = 0; k <= n; k++) { const a = ((from + ((to - from) * k) / n) * Math.PI) / 180; out.push(await scr(geo.cx + Math.sin(a) * R, geo.cy - Math.cos(a) * R)); } return out; });
      await dragPath(ctx, pts); await sleep(350);
    }
  }
}
void sleep;
