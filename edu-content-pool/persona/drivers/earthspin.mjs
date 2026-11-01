// 지구의 자전 낮과 밤(earthspin) 조작기 — 지구를 서→동(시계 반대 방향)으로 돌려 우리나라의 때를 맞춘다.
import { makeCtx } from './_sci-common.mjs';
import { spinHours, spinToHour } from './_sci-spin.mjs';

export const tools = ['earthspin'];

const PHASE_HOUR = { '아침': 6, '해 뜰 무렵': 6, '낮': 12, '한낮': 12, '정오': 12, '저녁': 18, '해 질 무렵': 18, '밤': 0, '한밤중': 0 };
const mod = (v, m) => ((v % m) + m) % m;

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const step = (o.step || 15) / 15;
  let reached = true;
  const earth = page.locator(`${root} .es-earth`);

  if (t.hour != null || t.time || t.phase || t.elapsed != null) {
    if (!(await earth.count())) { ctx.problem('control-missing', '돌릴 지구가 없음'); reached = false; }
    else {
      const s0 = await ctx.state();
      if (t.elapsed != null) {
        // 돌린 시간 = 앞으로 돌린 시간의 합 → 앞으로 elapsed 시간만 돌린다
        await spinHours(ctx, earth, t.elapsed - (s0.elapsed || 0), step, '지구');
        if (t.hour != null && (await ctx.state()).hour !== t.hour) ctx.problem('unreachable', `${t.elapsed}시간 돌려도 ${t.hour}시가 되지 않음(처음 ${s0.hour}시)`);
      } else {
        let want = t.hour;
        if (want == null && t.phase) want = PHASE_HOUR[t.phase];
        if (want == null && t.time) want = t.time === '밤' ? 0 : 12;
        if (want == null) { ctx.problem('driver-limit', '목표 시각을 정하지 못함'); reached = false; }
        else await spinToHour(ctx, earth, want, step, 'forward', '지구');
      }
      const s = await ctx.state();
      reached = reached && (t.hour == null || s.hour === t.hour) && (t.elapsed == null || s.elapsed === t.elapsed)
        && (!t.phase || s.phase === (t.phase in PHASE_HOUR ? ({ 6: '아침', 12: '낮', 18: '저녁', 0: '밤' })[PHASE_HOUR[t.phase]] : s.phase))
        && (!t.time || s.time === t.time);
    }
  }

  if (t.ask != null) {
    const btns = page.locator(`${root} .es-ask button`);
    if (!(await btns.count())) { ctx.problem('control-missing', '보기 고르기 칸이 없음'); reached = false; }
    else if (t.ask >= (await btns.count())) { ctx.problem('unreachable', `보기 ${await btns.count()}개인데 정답 번호가 ${t.ask}`); reached = false; }
    else {
      await ctx.tapExpect(btns.nth(t.ask), `보기 ${t.ask + 1}번`, async () => (await ctx.state()).pick === t.ask);
      reached = reached && (await ctx.state()).pick === t.ask;
    }
  }
  void mod;
  return ctx.result(reached);
}
