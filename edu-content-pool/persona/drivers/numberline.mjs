// 수직선 조작기 — 점 놓기(place)·뛰어 세기(jump)·점 읽기(read).
// 마우스: 점·출발 깃발을 끌어 놓고 단추를 누른다. 터치: 수직선을 눌러 고른 점을 보내고(점이 작아 끌기 어렵다) 어긋나면 한 칸 단추로 맞춘다.
// 키보드: Tab 으로 점·깃발에 가서 방향키(수직선 눈금 한 칸씩), 나머지는 단추(Tab+Enter).
import { makeCtx, box, press, tabTo, pressN, dragXY, pointAt, typeInto, svgToScreen, checkTouchSize, parseNum, near, sleep } from './_math-common.mjs';

export const tools = ['numberline'];
const MAXP = 6; const MAXH = 30;
const W = 640; const X0 = 44; const X1 = W - 44;
const r6 = (v) => Math.round(v * 1e6) / 1e6;

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const mode = ['place', 'jump', 'read'].includes(o.mode) ? o.mode : 'place';
  const min = Number.isFinite(parseNum(o.min)) ? parseNum(o.min) : 0;
  let max = Number.isFinite(parseNum(o.max)) ? parseNum(o.max) : 10; if (max <= min) max = min + 10;
  const stepV = parseNum(o.step) > 0 ? parseNum(o.step) : 1;
  const sub = Math.max(1, Math.min(20, Math.round(o.sub || 1)));
  const unit = stepV / sub;
  const N = Math.max(1, Math.min(200, Math.round((max - min) / unit)));
  const tickOf = (v) => (v - min) / unit;
  const tickInt = (v) => { const k = tickOf(v); return near(k, Math.round(k), 1e-4) ? Math.round(k) : NaN; };
  const LY = mode === 'jump' ? 150 : 130; const tp = (X1 - X0) / N;
  const xOf = (k) => X0 + k * tp;
  const svg = page.locator(`${root} svg.pk-stage`);
  const scr = (x, y) => svgToScreen(page, svg, x, y);
  const btn = (text) => page.locator(`${root} .nl-b`, { hasText: text });
  const byLabel = (label) => page.locator(`${root} [aria-label=${JSON.stringify(`${label}`)}]`);

  if (!(await svg.count())) { ctx.problem('control-missing', '수직선 그림이 화면에 없음'); return ctx.result(false); }

  try {
    if (mode === 'place') return await place();
    if (mode === 'jump') return await jump();
    return await read();
  } catch (e) {
    ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`);
    return ctx.result(false);
  }

  // ---- place ----
  async function place() {
    const want = (Array.isArray(t.points) ? t.points : []).map(parseNum);
    if (!want.length) { ctx.problem('driver-limit', 'target.points 없음'); return ctx.result(false); }
    if (want.length > MAXP) { ctx.problem('unreachable', `점이 ${want.length}개 필요한데 교구는 ${MAXP}개까지`); return ctx.result(false); }
    const ticks = want.map(tickInt);
    for (let i = 0; i < want.length; i++) {
      if (!Number.isFinite(ticks[i])) { ctx.problem('unreachable', `${want[i]} 은(는) 눈금(${min}~${max}, 한 칸 ${r6(unit)})에 없는 자리`); return ctx.result(false); }
      if (ticks[i] < 0 || ticks[i] > N) { ctx.problem('unreachable', `${want[i]} 은(는) 수직선 범위 ${min}~${max} 밖`); return ctx.result(false); }
    }
    const names = Array.isArray(o.names) && o.names.length ? o.names : ['가', '나', '다', '라', '마', '바'];
    const curTicks = async () => (await readState()).points.map((v) => (v == null ? null : Math.round(tickOf(v))));
    for (let i = 0; i < want.length && !ctx.over(); i++) {
      const pt = page.locator(`${root} .nl-pt`).nth(i);
      if (!(await pt.count())) { ctx.problem('control-missing', `${names[i]} 점이 화면에 없음`); return ctx.result(false); }
      if (want.length > 1 && ctx.input !== 'keyboard') await press(ctx, btn(`${names[i]} 점`).first(), `${names[i]} 점 고르기`);
      const before = (await curTicks())[i];
      if (ctx.input === 'mouse') {
        const from = before == null ? await scr(X0 + 10 + i * 46, 40) : await scr(xOf(before), LY - 30);
        const to = await scr(xOf(ticks[i]), LY - 30);
        await dragXY(ctx, from, to);
      } else if (ctx.input === 'touch') {
        // 수직선을 누르는 띠는 고정값으로 셈하지 않고 실제 요소(수직선 폭만큼 넓은 .pk-hit)를 잰다
        const band = await svg.first().evaluate((el, minW) => {
          const r = [...el.querySelectorAll('rect.pk-hit')].find((x) => Number(x.getAttribute('width')) >= minW);
          if (!r) return null; r.scrollIntoView({ block: 'center' });
          const b = r.getBoundingClientRect(); return { top: b.top, bottom: b.bottom, h: b.height };
        }, X1 - X0);
        if (!band) { ctx.problem('control-missing', '수직선을 누르는 자리가 화면에 없음'); return ctx.result(false); }
        if (band.h < 43.5) ctx.problem('touch-target-small', `수직선 누르는 자리 높이 ${Math.round(band.h)}px (44px 미만)`);
        const hx = (await scr(xOf(ticks[i]), LY)).x;
        // 띠 안, 점이 가리지 않는 아래쪽 1/4 자리
        await pointAt(ctx, hx, band.top + band.h * 0.75);
      } else {
        const handle = byLabel(`${names[i]} 점. 왼쪽 오른쪽 방향키로 옮겨요`);
        if (!(await tabTo(ctx, handle))) { ctx.problem('no-keyboard-path', `${names[i]} 점에 Tab 으로 닿지 않음`); return ctx.result(false); }
        const cur = (await curTicks())[i];
        const first = cur == null ? 1 : 0; // 받침의 점은 첫 방향키가 0 번 눈금으로 올려 놓는다
        const base = cur == null ? 0 : cur;
        await pressN(ctx, 'ArrowRight', first);
        const d = ticks[i] - base;
        await pressN(ctx, d >= 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(d));
        continue;
      }
      // 어긋났으면 한 칸 단추로 맞춘다
      for (let fix = 0; fix < 10 && !ctx.over(); fix++) {
        const cur = (await curTicks())[i];
        if (cur === ticks[i]) break;
        const lab = cur == null || cur < ticks[i] ? '고른 점을 오른쪽으로 한 칸' : '고른 점을 왼쪽으로 한 칸';
        if (want.length > 1) await press(ctx, btn(`${names[i]} 점`).first(), `${names[i]} 점 고르기`);
        await press(ctx, byLabel(lab), lab);
      }
    }
    const cur = await curTicks();
    return ctx.result(want.every((_, i) => cur[i] === ticks[i]));
  }

  // ---- jump ----
  async function jump() {
    const fixedFrom = o.fixedFrom != null && Number.isFinite(parseNum(o.fixedFrom)) ? parseNum(o.fixedFrom) : null;
    const hopStep = parseNum(o.hopStep) > 0 ? parseNum(o.hopStep) : unit;
    const tf = t.from != null ? parseNum(t.from) : null; const ts = t.size != null ? parseNum(t.size) : null; const te = t.end != null ? parseNum(t.end) : null;
    const state0 = await readState();
    let from = tf != null ? tf : fixedFrom != null ? fixedFrom : state0.from != null ? state0.from : (te != null && ts != null && t.count != null ? te - ts * t.count : min);
    if (fixedFrom != null && tf != null && !near(fixedFrom, tf)) { ctx.problem('unreachable', `출발점이 ${fixedFrom}에 잠겼는데 문제는 ${tf}에서 출발`); return ctx.result(false); }
    if (!Number.isFinite(tickInt(from)) || tickInt(from) < 0 || tickInt(from) > N) { ctx.problem('unreachable', `출발점 ${from} 이(가) 눈금(${min}~${max}) 밖`); return ctx.result(false); }
    // 뛸 크기 목록(부호 있음)
    let plan = [];
    if (ts != null && t.count != null) plan = Array(t.count).fill(ts);
    else if (te != null && ts != null) { const n = Math.round((te - from) / ts); plan = Array(Math.abs(n)).fill(Math.sign(n) * ts); }
    else if (te != null && t.count > 1) { const d = r6(te - from); const q = Math.trunc(d / t.count / hopStep) * hopStep || Math.sign(d) * hopStep; plan = Array(t.count - 1).fill(r6(q)); plan.push(r6(d - q * (t.count - 1))); }
    else if (te != null) plan = [r6(te - from)];
    else if (ts != null) plan = [ts];
    else if (t.count != null) plan = Array(t.count).fill(state0.size || hopStep);
    if (!plan.length) { ctx.problem('driver-limit', 'target 에서 뛸 크기·횟수를 정할 수 없음'); return ctx.result(false); }
    if (plan.length > MAXH) { ctx.problem('unreachable', `화살표 ${plan.length}개가 필요한데 교구는 ${MAXH}개까지`); return ctx.result(false); }
    // 반올림한 소수(2/3 → 0.666667)를 더해 가면 2.000001 처럼 밖으로 새므로 hopStep 의 정수배로 누적한다
    let kSum = 0;
    for (const h of plan) {
      if (!near(Math.abs(h) / hopStep, Math.round(Math.abs(h) / hopStep), 1e-4) || Math.abs(h) > max - min + 1e-6) { ctx.problem('unreachable', `뛰는 크기 ${Math.abs(h)} 을(를) 만들 수 없음(한 단위 ${r6(hopStep)}, 최대 ${r6(max - min)})`); return ctx.result(false); }
      if (h < 0 && o.backward === false) { ctx.problem('unreachable', '뒤로 뛰기 단추가 없는데 뒤로 뛰어야 함'); return ctx.result(false); }
      kSum += Math.round(h / hopStep);
      const p = from + kSum * hopStep;
      if (p < min - 1e-6 || p > max + 1e-6) { ctx.problem('unreachable', `뛰다 보면 수직선 밖(${r6(p)})으로 나감`); return ctx.result(false); }
    }
    // 출발점 놓기
    if (fixedFrom == null) {
      const cur = (await readState()).from;
      const k = tickInt(from);
      if (cur == null || Math.round(tickOf(cur)) !== k) {
        const flag = page.locator(`${root} [aria-label^="출발점"]`);
        if (!(await flag.count())) { ctx.problem('control-missing', '출발점 깃발이 화면에 없음'); return ctx.result(false); }
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, flag))) { ctx.problem('no-keyboard-path', '출발점 깃발에 Tab 으로 닿지 않음'); return ctx.result(false); }
          const c0 = cur == null ? null : Math.round(tickOf(cur));
          await pressN(ctx, 'ArrowRight', c0 == null ? 1 : 0);
          const d = k - (c0 == null ? 0 : c0);
          await pressN(ctx, d >= 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(d));
        } else {
          if (ctx.input === 'touch') await checkTouchSize(ctx, flag.locator('.pk-hit').first(), '출발점 깃발');
          const f = await scr(cur == null ? X0 : xOf(Math.round(tickOf(cur))), LY);
          await dragXY(ctx, f, await scr(xOf(k), LY));
        }
      }
    }
    // 뛰기
    for (const h of plan) {
      if (ctx.over()) break;
      const want = Math.abs(h);
      for (let i = 0; i < 80 && !ctx.over(); i++) {
        const s = (await readState()).size;
        if (near(s, want, 1e-6)) break;
        const lab = s < want ? '뛰는 크기 늘리기' : '뛰는 크기 줄이기';
        const b = byLabel(lab);
        if (!(await b.count())) { ctx.problem('control-missing', `${lab} 단추가 없음`); return ctx.result(false); }
        await press(ctx, b, lab);
        if (i === 79) { ctx.problem('unreachable', `뛰는 크기를 ${want} 로 맞출 수 없음`); return ctx.result(false); }
      }
      const hopB = btn(h < 0 ? '뒤로 뛰기' : '앞으로 뛰기').first();
      if (!(await hopB.count())) { ctx.problem('control-missing', `${h < 0 ? '뒤로' : '앞으로'} 뛰기 단추가 없음`); return ctx.result(false); }
      await press(ctx, hopB, h < 0 ? '뒤로 뛰기' : '앞으로 뛰기');
      await sleep(20);
    }
    const s = await readState();
    return ctx.result(s.from != null && near(s.from, from, 1e-6) && s.hops.length === plan.length && s.hops.every((x, i) => near(x, plan[i], 1e-6)));
  }

  // ---- read ----
  async function read() {
    if (t.pick != null) {
      const choices = page.locator(`${root} .pk-choice`);
      const n = await choices.count();
      if (!n) { ctx.problem('control-missing', '고르기 보기가 화면에 없음'); return ctx.result(false); }
      if (t.pick >= n) { ctx.problem('unreachable', `정답 보기 ${t.pick + 1}번이 없음(보기 ${n}개)`); return ctx.result(false); }
      await press(ctx, choices.nth(t.pick), `보기 ${t.pick + 1}`);
      return ctx.result((await readState()).pick === t.pick);
    }
    const inp = page.locator(`${root} .nl-in`);
    if (!(await inp.count())) { ctx.problem('control-missing', '수를 쓰는 칸이 화면에 없음'); return ctx.result(false); }
    const v = parseNum(t.value);
    if (!Number.isFinite(v)) { ctx.problem('driver-limit', `target.value 를 읽을 수 없음: ${t.value}`); return ctx.result(false); }
    const den = Math.max(1, Math.round(o.den || (Number.isInteger(stepV) ? sub / stepV : sub)));
    let txt;
    if (t.form === 'frac' || (typeof t.value === 'string' && /\//.test(t.value) && t.form !== 'dec')) {
      const k = Math.round(v * den);
      txt = near(v * den, k, 1e-4) ? (k % den === 0 ? String(k / den) : `${k}/${den}`) : String(t.value);
    } else txt = String(Math.round(v * 1000) / 1000);
    const maxLen = 10;
    if (txt.length > maxLen) { ctx.problem('unreachable', `쓸 글 "${txt}" 이(가) 입력 칸 한도(${maxLen}자)를 넘음`); return ctx.result(false); }
    if (!(await typeInto(ctx, inp, txt, '수 쓰는 칸'))) return ctx.result(false);
    const s = await readState();
    return ctx.result(s.answer != null && near(parseNum(s.answer), v, 1e-6));
  }
}
