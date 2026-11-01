// 힘 실험대(force) 조작기 — 수평 잡기(lever), 용수철(spring), 빗면(ramp), 미는 힘(push), 빠르기(speed).
import { makeCtx, answerAsk, answerNum, stepTo } from './_sci-common.mjs';

export const tools = ['force'];
const r2 = (v) => Math.round(v * 100) / 100;
const range = (a, d) => (Array.isArray(a) && a.length === 3 ? { min: a[0], max: a[1], step: a[2] } : { min: d[0], max: d[1], step: d[2] });

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const mode = ['spring', 'ramp', 'push', 'speed'].includes(o.mode) ? o.mode : 'lever';
  let reached = true;

  // ---------- 수평 잡기 ----------
  if (mode === 'lever' && (t.balance || t.tilt) && !o.readOnly) {
    const N = Math.max(2, Math.min(6, Math.round(o.pegs || 4))); const maxPer = o.maxPer || 6;
    const side = ['left', 'right'].includes(o.side) ? o.side : 'both';
    const allowed = (p) => p !== 0 && Math.abs(p) <= N && (side === 'both' || (side === 'right' ? p > 0 : p < 0));
    const fixedTau = (Array.isArray(o.fixed) ? o.fixed : []).reduce((s, f) => s + Math.round(f.pos) * Math.max(0, Math.round(f.n || 1)), 0);
    const want = {}; // 자리 → 내가 올릴 추 수
    if (t.balance) {
      const tauNeed = -fixedTau; // 내 추가 만들어야 하는 모멘트
      const cand = t.at != null ? [t.at, -t.at].filter((p) => allowed(p)) : Array.from({ length: 2 * N + 1 }, (_, i) => i - N).filter(allowed).sort((a, b) => Math.abs(a) - Math.abs(b));
      let done = false;
      if (tauNeed === 0) done = true;
      for (const p of cand) {
        if (done) break;
        if (t.at != null && Math.abs(p) !== Math.abs(t.at)) continue;
        const c = tauNeed / p;
        if (Number.isInteger(c) && c > 0 && c <= maxPer && (t.count == null || c === t.count)) { want[p] = c; done = true; }
      }
      if (!done) { ctx.problem('unreachable', `고정 추(모멘트 ${fixedTau})와 수평이 되는 ${t.at != null ? `${t.at}번 자리의 ` : ''}추 수를 만들 수 없음`); reached = false; }
    } else {
      const wantSign = t.tilt === 'right' ? 1 : -1;
      const p = Array.from({ length: 2 * N + 1 }, (_, i) => i - N).filter(allowed).find((q) => Math.sign(q) === wantSign);
      if (p == null) { ctx.problem('unreachable', `내가 ${t.tilt} 쪽에 추를 올릴 수 없는 판`); reached = false; }
      else { let c = 0; while (c <= maxPer && Math.sign(fixedTau + p * c) !== wantSign) c++; if (c > maxPer) { ctx.problem('unreachable', '추를 최대로 올려도 기울지 않음'); reached = false; } else want[p] = c; }
    }
    if (reached) {
      const wState = async () => (await ctx.state()).w || [];
      const cnt = async (p) => (await wState())[p + N] || 0;
      const svg = page.locator(`${root} svg.pk-stage`).first();
      const targets = Object.entries(want).map(([p, c]) => [Number(p), c]);
      // 먼저 내가 올려 둔 다른 자리의 추를 모두 내린다
      const extra = []; { const w = await wState(); w.forEach((c, i) => { const p = i - N; if (c && !(p in want)) extra.push([p, 0]); }); }
      const plan = [...extra, ...targets.map(([p, c]) => [p, c])];
      if (ctx.input === 'keyboard') {
        const beam = page.locator(`${root} [role="application"]`).first();
        if (!(await ctx.focusViaTab(beam, '막대'))) reached = false;
        else {
          const selNow = async () => { const tx = await page.locator(`${root} [role="group"][aria-label="고른 자리의 추"]`).innerText().catch(() => ''); const m = /(왼쪽|오른쪽)\s*(\d+)/.exec(tx); return m ? (m[1] === '왼쪽' ? -1 : 1) * Number(m[2]) : null; };
          for (const [p, c] of plan) {
            for (let g = 0; g < 2 * N + 2 && (await selNow()) !== p; g++) await ctx.key('ArrowRight');
            if ((await selNow()) !== p) { ctx.problem('no-keyboard-path', `방향키로 ${p < 0 ? '왼쪽' : '오른쪽'} ${Math.abs(p)}번 자리를 고를 수 없음`); reached = false; break; }
            const d = c - (await cnt(p));
            if (d) await ctx.key(d > 0 ? 'ArrowUp' : 'ArrowDown', Math.abs(d));
          }
        }
      } else {
        const box = await ctx.box(svg);
        const vb = ((await svg.getAttribute('viewBox')) || '0 0 640 340').split(/\s+/).map(Number);
        const s = box.width / vb[2]; const GAP = 270 / N;
        const at = (p) => ({ x: box.x + (320 + p * GAP) * s, y: box.y + 170 * s });
        for (const [p, c] of plan) {
          // 올리기: 그 자리를 누를 때마다 한 개. 내리기: '고른 자리의 추 줄이기' 단추(그 자리를 먼저 눌러 골라야 함)
          let d = c - (await cnt(p));
          while (d > 0 && !ctx.over()) { const pt = at(p); if (ctx.input === 'touch') await page.touchscreen.tap(pt.x, pt.y).catch(() => page.mouse.click(pt.x, pt.y)); else await page.mouse.click(pt.x, pt.y); ctx.count(); await ctx.wait(40); d--; }
          d = c - (await cnt(p));
          if (d < 0) {
            const pt = at(p); await page.mouse.click(pt.x, pt.y); ctx.count();
            const minus = page.locator(`${root} button[aria-label="고른 자리의 추 줄이기"]`);
            await ctx.tapN(minus, '추 줄이기', Math.max(0, (await cnt(p)) - c));
          }
        }
      }
      const w = await wState();
      reached = reached && w.every((c, i) => c === (want[i - N] || 0));
    }
  }

  // ---------- 용수철 ----------
  if (mode === 'spring' && !o.readOnly && (t.n != null || t.stretch != null || t.read != null)) {
    const k = o.k || 2; const unitName = o.unitName || '추'; const maxN = o.maxN || 6;
    let n = t.n;
    if (n == null && t.stretch != null) n = t.stretch / k;
    if (n != null) {
      if (!Number.isInteger(n) || n < 0 || n > maxN) { ctx.problem('unreachable', `추 하나에 ${k}cm 로는 ${t.stretch != null ? `${t.stretch}cm` : `${n}개`}를 만들 수 없음(최대 ${maxN}개)`); reached = false; }
      else reached = (await stepTo(ctx, root, `매단 ${unitName}`, 'n', n, 1)) && reached;
    }
    if (t.read != null) {
      const inp = page.locator(`${root} input.fo-in`);
      if (!(await inp.count())) { ctx.problem('control-missing', '읽은 길이를 쓰는 칸이 없음'); reached = false; }
      else { await ctx.typeInto(inp.first(), String(t.read), '늘어난 길이 칸'); reached = reached && (await ctx.state()).ans === t.read; }
    }
  }

  // ---------- 빗면·밀기 ----------
  if ((mode === 'ramp' || mode === 'push') && !o.readOnly && (t.set || t.run || t.move)) {
    const spec = mode === 'ramp'
      ? { angle: ['기울기', range(o.angles, [10, 50, 10])], mass: ['무게', range(o.masses, [1, 4, 1])] }
      : { force: ['미는 힘', range(o.forces, [0, 10, 1])], mass: ['무게', range(o.masses, [1, 4, 1])] };
    const set = Object.assign({}, t.set || {});
    if (t.move && !t.set) { // 움직이게 하려면 힘 크게·무게 작게·매끄럽게
      if (mode === 'push') { set.force = spec.force[1].max; set.mass = spec.mass[1].min; set.surface = 0; } else set.angle = spec.angle[1].max;
    }
    const lockd = o.lock || [];
    for (const [key, val] of Object.entries(set)) {
      if (key === 'surface') {
        if (lockd.includes('surface')) { reached = reached && (await ctx.state()).surface === val; continue; }
        const radios = page.locator(`${root} [role="radiogroup"][aria-label="면"] [role="radio"]`);
        if (val >= (await radios.count())) { ctx.problem('unreachable', `면 ${val + 1}번이 없음`); reached = false; continue; }
        await ctx.tapExpect(radios.nth(val), `면 ${val + 1}번`, async () => (await radios.nth(val).getAttribute('aria-checked')) === 'true');
      } else if (spec[key]) {
        const [label, rg] = spec[key];
        if (lockd.includes(key)) { if ((await ctx.state())[key] !== val) { ctx.problem('unreachable', `${label}이(가) 잠겨 있어 ${val}로 바꿀 수 없음`); reached = false; } continue; }
        if (val < rg.min || val > rg.max || (val - rg.min) % rg.step !== 0) { ctx.problem('unreachable', `${label} ${val}은(는) 눈금(${rg.min}~${rg.max}, ${rg.step}칸)에 없음`); reached = false; continue; }
        reached = (await stepTo(ctx, root, label, key, val, rg.step)) && reached;
      }
    }
    if (t.run || t.move) {
      const go = page.locator(`${root} button[aria-label="${mode === 'ramp' ? '굴리기' : '밀기'}"]`);
      if (!(await go.count())) { ctx.problem('control-missing', `${mode === 'ramp' ? '굴리기' : '밀기'} 단추가 없음`); reached = false; }
      else { await ctx.tapExpect(go, mode === 'ramp' ? '굴리기' : '밀기', async () => Boolean((await ctx.state()).ran)); await ctx.wait(1600); reached = reached && Boolean((await ctx.state()).ran); }
    }
  }

  // ---------- 빠르기 ----------
  if (mode === 'speed' && !o.readOnly && (t.speed != null || t.beat != null || t.run)) {
    const movers = o.movers || [];
    const ctl = !!o.control; const DR = range(o.dRange, [10, 200, 10]); const TR = range(o.tRange, [5, 60, 5]);
    if (ctl && (t.speed != null || t.beat != null)) {
      let pick = null;
      if (t.speed != null) { for (let tt = TR.min; tt <= TR.max + 1e-9; tt = r2(tt + TR.step)) { const dd = r2(t.speed * tt); if (dd >= DR.min && dd <= DR.max && Math.abs((dd - DR.min) / DR.step - Math.round((dd - DR.min) / DR.step)) < 1e-6) { pick = [dd, tt]; break; } } }
      else {
        const other = movers[t.beat];
        if (other) for (let tt = TR.min; tt <= TR.max + 1e-9 && !pick; tt = r2(tt + TR.step)) for (let dd = DR.max; dd >= DR.min && !pick; dd = r2(dd - DR.step)) if (dd / tt > other.d / other.t + 1e-9) pick = [dd, tt];
      }
      if (!pick) { ctx.problem('unreachable', '거리·시간 눈금으로는 목표 빠르기를 만들 수 없음'); reached = false; }
      else {
        const nm = (movers[0] && movers[0].name) || '나';
        reached = (await stepTo(ctx, root, `${nm}의 거리`, 'd', pick[0], DR.step)) && reached;
        reached = (await stepTo(ctx, root, `${nm}의 시간`, 't', pick[1], TR.step)) && reached;
      }
    }
    if (t.run || t.speed != null || t.beat != null) {
      const go = page.locator(`${root} button[aria-label="출발"]`);
      if (await go.count()) { await ctx.tapExpect(go, '출발', async () => Boolean((await ctx.state()).ran)); await ctx.wait(1200); }
      else if (t.run) { ctx.problem('control-missing', '출발 단추가 없음'); reached = false; }
    }
  }

  if (t.pick != null) reached = (await answerAsk(ctx, `${root} [role="radiogroup"][aria-label="${((o.ask && o.ask.q) || '고르기').replace(/"/g, '\\"')}"] [role="radio"]`, t)) && reached;
  if (t.num != null) reached = (await answerNum(ctx, root, t)) && reached;
  return ctx.result(reached);
}
