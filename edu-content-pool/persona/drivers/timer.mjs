// 체육 활동판(timer) 조작기 — 타이머 맞추기(−/+ 단추·방향키), 순서 카드 바꾸기, 기록 칸, 안전 점검·스스로 점검 표시.
import { makeCtx, finish, activate, tabTo, press, sleep } from './_arts-util.mjs';

export const tools = ['timer'];

// 칸의 범위·간격은 단위를 따른다: 기본 초(운동 5~300·쉬기 0~120, 5초씩), timeUnit 'min' 이면 분(운동 1~60·쉬기 0~30, 1분씩)
const unitOf = (o) => (o && o.timeUnit === 'min'
  ? { lim: { work: [1, 60], rest: [0, 30], rounds: [1, 10] }, ws: o.workStep || 1, rs: o.restStep || 1, u: '분' }
  : { lim: { work: [5, 300], rest: [0, 120], rounds: [1, 10] }, ws: (o && o.workStep) || 5, rs: (o && o.restStep) || 5, u: '초' });
const PLAN0 = { work: 30, rest: 10, rounds: 3 };
const totalOf = (p) => p.rounds * p.work + Math.max(0, p.rounds - 1) * p.rest;

// 목표 계획 값: t.plan 의 준 칸은 그대로, t.total 이 있으면 나머지 칸을 지금 값에 가깝게 찾는다(학생이 계산해 맞추는 것과 같다)
function wantPlan(cur, t, o) {
  const fixed = t.plan || {};
  const want = Object.assign({}, cur, fixed);
  if (t.total == null || totalOf(want) === t.total) return want;
  const U = unitOf(o); const ws = U.ws; const rs = U.rs; let best = null; let bestD = Infinity;
  for (let r = 1; r <= 10; r++) for (let w = U.lim.work[0]; w <= U.lim.work[1]; w += ws) for (let q = U.lim.rest[0]; q <= U.lim.rest[1]; q += rs) {
    const p = { work: fixed.work ?? w, rest: fixed.rest ?? q, rounds: fixed.rounds ?? r };
    if (totalOf(p) !== t.total) continue;
    const d = Math.abs(p.work - cur.work) / ws + Math.abs(p.rest - cur.rest) / rs + Math.abs(p.rounds - cur.rounds);
    if (d < bestD) { bestD = d; best = p; }
  }
  return best;
}

export async function drive({ page, root: rootSel, target, options, prompt, toolId, persona, readState, log }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const R0 = rootSel || '#tool';
  const tool = page.locator(R0);
  try {
    let s = await ctx.read();
    const spin = (k, i = 0) => tool.locator(`[role="spinbutton"][data-k="${k}"][data-i="${i}"]`);
    const bumpBtn = (k, i, d) => tool.locator(`[data-bump="${k}"][data-i="${i}"][data-d="${d}"]`);
    // 수 칸을 want 가 되게 −/+ 로 맞춘다
    const setNumber = async (k, i, cur, want, step, what) => {
      const diff = want - cur;
      if (Math.abs(diff) < 1e-9) return;
      const n = Math.round(Math.abs(diff) / step);
      if (Math.abs(n * step - Math.abs(diff)) > 1e-6) ctx.stop('unreachable', `${what}: ${want} 은(는) ${step} 씩 바뀌는 칸으로 맞출 수 없음(지금 ${cur})`);
      if (ctx.input === 'keyboard') {
        await tabTo(ctx, spin(k, i), what);
        for (let c = 0; c < n; c++) await press(ctx, diff > 0 ? 'ArrowUp' : 'ArrowDown');
      } else {
        const b = bumpBtn(k, i, diff > 0 ? 1 : -1);
        if (!(await b.count())) ctx.stop('control-missing', `${what}: ${diff > 0 ? '늘리기' : '줄이기'} 단추가 없음`);
        for (let c = 0; c < n; c++) await activate(ctx, b, `${what} ${diff > 0 ? '늘리기' : '줄이기'} 단추`);
      }
    };
    const readBack = async () => { await sleep(60); s = await ctx.read(); };

    // 1) 안전 점검
    if (t.safety) {
      const items = o.safety || [];
      if (!(await tool.locator('[data-chk="safety"]').count())) ctx.stop('control-missing', '안전 점검 칸이 화면에 없음');
      for (let pass = 0; pass < 2; pass++) { // 눌렀는데 표시가 안 되면(느린 화면에서 클릭을 놓침) 한 번 더 누른다
        for (let i = 0; i < items.length; i++) {
          if (!(s.safety || [])[i]) await activate(ctx, tool.locator(`[data-chk="safety"][data-i="${i}"]`), `안전 점검 ‘${items[i]}’`, { key: ' ' });
        }
        await readBack();
      }
    }

    // 2) 순서 카드
    if (t.order) {
      const want = t.order;
      const cards = () => tool.locator('.tm-card');
      if ((await cards().count()) < want.length) ctx.stop('control-missing', '순서 카드가 화면에 모자람');
      const cur = (s.order || []).slice();
      for (let i = 0; i < want.length; i++) {
        if (cur[i] === want[i]) continue;
        const j = cur.findIndex((x, k) => k > i && x === want[i]);
        if (j < 0) ctx.stop('unreachable', `순서 카드에 ‘${want[i]}’ 카드가 없음`);
        if (ctx.input === 'keyboard') {
          await tabTo(ctx, cards().nth(j), `순서 카드 ${j + 1}번째`);
          for (let c = 0; c < j - i; c++) await press(ctx, 'ArrowLeft');
        } else {
          await activate(ctx, cards().nth(i), `순서 카드 ${i + 1}번째`);
          await activate(ctx, cards().nth(j), `순서 카드 ${j + 1}번째`);
        }
        if (ctx.input === 'keyboard') cur.splice(i, 0, cur.splice(j, 1)[0]); // ←로 한 칸씩 옮기면 사이 카드는 밀려난다
        else [cur[i], cur[j]] = [cur[j], cur[i]];
      }
      await readBack();
    }

    // 3) 타이머 맞추기
    if (t.plan || t.total != null) {
      if (!(await tool.locator('[data-k="work"]').count())) ctx.stop('control-missing', '타이머 맞추기 칸이 화면에 없음');
      const cur = Object.assign({}, PLAN0, s.plan || o.plan || {});
      const want = wantPlan(cur, t, o);
      const U = unitOf(o);
      if (!want) ctx.stop('unreachable', `전체 ${t.total}${U.u}가 되는 운동·쉬기·횟수 조합이 없음`);
      for (const [k, step, what] of [['work', U.ws, '운동 시간'], ['rest', U.rs, '쉬는 시간'], ['rounds', 1, '횟수']]) {
        if (want[k] < U.lim[k][0] || want[k] > U.lim[k][1]) ctx.stop('unreachable', `${what} ${want[k]} 은(는) 칸의 범위(${U.lim[k].join('~')}${k === 'rounds' ? '' : U.u}) 밖`);
        await setNumber(k, 0, cur[k], want[k], step, what);
      }
      await readBack();
    }

    // 4) 기록판
    if (t.records != null) {
      const fields = (o.fields || []).map((f) => (typeof f === 'string' ? { label: f } : f));
      if (!fields.length) ctx.stop('control-missing', '기록 칸이 화면에 없음');
      const need = Array.isArray(t.records) ? t.records.length : t.records === true ? fields.length : Math.min(fields.length, Number(t.records) || 1);
      for (let i = 0; i < need; i++) {
        const f = fields[i]; const step = f.step || 1;
        const cur = (s.records || [])[i];
        const want = Array.isArray(t.records) ? t.records[i] : (cur != null ? cur : step * 2);
        if (want == null) continue;
        await setNumber('rec', i, cur == null ? 0 : cur, want, step, `기록 ‘${f.label}’`);
      }
      await readBack();
    }

    // 5) 스스로 점검
    if (t.selfCheck) {
      if ((await tool.locator('[data-chk="self"]').count()) < t.selfCheck.length) ctx.stop('control-missing', '스스로 점검 칸이 모자람');
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < t.selfCheck.length; i++) {
          if (!(s.checks || [])[i]) await activate(ctx, tool.locator(`[data-chk="self"][data-i="${i}"]`), `스스로 점검 ‘${t.selfCheck[i]}’`, { key: ' ' });
        }
        await readBack();
      }
    }

    // 도착 판단
    let ok = true;
    if (t.safety) ok = ok && (o.safety || []).every((_, i) => (s.safety || [])[i]);
    if (t.order) ok = ok && JSON.stringify(s.order) === JSON.stringify(t.order);
    if (t.plan) ok = ok && Object.entries(t.plan).every(([k, v]) => v == null || (s.plan || {})[k] === v);
    if (t.total != null) ok = ok && !!s.plan && totalOf(s.plan) === t.total;
    if (t.records != null) {
      if (Array.isArray(t.records)) ok = ok && t.records.every((v, i) => v == null || Number((s.records || [])[i]) === v);
      else { const n = (s.records || []).filter((v) => v != null).length; ok = ok && n >= (t.records === true ? (o.fields || []).length : Number(t.records) || 1); }
    }
    if (t.selfCheck) ok = ok && t.selfCheck.every((_, i) => (s.checks || [])[i]);
    return finish(ctx, null, ok);
  } catch (e) {
    return finish(ctx, e, false);
  }
}
