// 규칙 판 조작기 — 빈칸 채우기(fill)·규칙 고르기(rule)·틀린 조각 찾기(odd)·규칙 만들기(make).
// 마우스·터치: 칸을 눌러 고르고 아래 조각 단추를 누른다(수 입력은 칸에 글쓰기). 키보드: Tab 으로 칸에 가서 ↑↓로 조각을 바꾼다(수는 칸에 글쓰기).
import { makeCtx, press, tabTo, pressN, typeInto, checkTouchSize, near, sleep } from './_math-common.mjs';

export const tools = ['pattern'];
const SHAPES = ['circle', 'square', 'triangle', 'star', 'heart', 'diamond', 'hexagon', 'arrow'];
function norm(p) {
  if (p == null) return null;
  if (typeof p === 'number') return { n: p };
  if (typeof p === 'string') {
    const m = /^([a-z]+):([a-z]+)$/.exec(p);
    if (m && SHAPES.includes(m[1])) return { s: m[1], c: m[2] };
    if (SHAPES.includes(p)) return { s: p, c: 'peach' };
    if (/^-?\d+(\.\d+)?$/.test(p)) return { n: Number(p) };
    return { t: p };
  }
  if (typeof p === 'object') {
    const q = {};
    if (p.s) { q.s = SHAPES.includes(p.s) ? p.s : 'circle'; q.c = p.c || 'peach'; }
    if (p.n != null) q.n = Number(p.n);
    if (p.t != null) q.t = String(p.t);
    if (p.k != null) q.k = Math.max(1, Math.min(16, Math.round(p.k)));
    if (p.r) q.r = ((Math.round(p.r) % 360) + 360) % 360;
    return q;
  }
  return null;
}
const keyOf = (p) => { const q = norm(p); if (!q) return ''; return ['s', 'c', 'n', 't', 'k', 'r'].map((k) => (q[k] == null ? '' : q[k])).join('|'); };

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const mode = ['fill', 'rule', 'odd', 'make'].includes(o.mode) ? o.mode : 'fill';
  const names = Array.isArray(o.names) && o.names.length ? o.names : ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타'];
  const seq = (Array.isArray(o.seq) ? o.seq : []).slice(0, 16).map(norm);
  const allNum = seq.filter(Boolean).length > 0 && seq.filter(Boolean).every((p) => p.n != null && !p.s && p.t == null);
  let palette = Array.isArray(o.palette) ? o.palette.map(norm).filter(Boolean) : [];
  if (!palette.length) { const seen = new Set(); for (const p of seq) if (p && !seen.has(keyOf(p))) { seen.add(keyOf(p)); palette.push(p); } }
  const numInput = o.input === 'number' || (o.input == null && !Array.isArray(o.palette) && (mode === 'fill' ? allNum : mode === 'make' && allNum));
  const blanksAt = mode === 'fill' ? seq.map((p, i) => (p == null ? i : -1)).filter((i) => i >= 0) : [];
  const length = mode === 'make' ? Math.max(4, Math.min(12, o.length || 8)) : seq.length;
  const tool = page.locator(root);
  if (!(await tool.count())) { ctx.problem('control-missing', '교구 화면이 없음'); return ctx.result(false); }

  // 칸 locator: fill 은 "<이름> 빈칸", make 는 "<n>번째 칸", odd 는 "<n>번째 조각 …"
  const slotLoc = (j) => (mode === 'fill' ? tool.locator(`[aria-label=${JSON.stringify(`${names[j]} 빈칸`)}]`) : tool.locator(`[aria-label=${JSON.stringify(`${j + 1}번째 칸`)}]`));
  const numLoc = (j) => tool.locator(`input.pt-in[aria-label=${JSON.stringify(`${mode === 'fill' ? `${names[j]} 칸에 들어갈 수` : `${j + 1}번째 수`}`)}]`);
  const palBtn = (k) => tool.locator('.pt-row[aria-label="조각 고르기"] .pt-b').nth(k);

  // 한 칸에 값 하나 넣기. v: 수(numInput) 또는 팔레트 번호
  async function putSlot(j, v) {
    if (numInput) {
      const inp = numLoc(j);
      if (!(await inp.count())) { ctx.problem('control-missing', `${j + 1}번째 수 칸이 화면에 없음`); return false; }
      // 범위를 박아 두지 않는다 — 써 넣은 뒤 칸에 실제로 남은 값으로 판정한다(교구가 정답 길이에 맞춰 자릿수를 정한다)
      if (!(await typeInto(ctx, inp, String(v), `${j + 1}번째 수 칸`))) return false;
      const got = await inp.first().inputValue().catch(() => null);
      if (got !== String(v)) { ctx.problem('unreachable', `수 ${v} 을(를) ${j + 1}번째 칸에 썼는데 '${got ?? ''}' 이(가) 남음(칸이 받는 글자 범위 밖)`); return false; }
      return true;
    }
    const slot = slotLoc(j);
    if (!(await slot.count())) { ctx.problem('control-missing', `${j + 1}번째 칸이 화면에 없음`); return false; }
    if (ctx.input === 'keyboard') {
      if (!(await tabTo(ctx, slot))) { ctx.problem('no-keyboard-path', `${j + 1}번째 칸에 Tab 으로 닿지 않음`); return false; }
      // 빈칸에서 ↓(왼쪽)는 맨 끝 조각, ↑(오른쪽)는 첫 조각 — 짧은 쪽으로 돌린다
      const cur = (await slotValue(j));
      const L = palette.length;
      const right = cur == null ? v + 1 : ((v - cur) % L + L) % L;
      const left = cur == null ? L - v : (L - right) % L;
      if (right <= left) await pressN(ctx, 'ArrowRight', right); else await pressN(ctx, 'ArrowLeft', left);
      return true;
    }
    if (ctx.input === 'touch') await checkTouchSize(ctx, slot.locator('.pk-hit').first(), `${j + 1}번째 칸`);
    await press(ctx, slot, `${j + 1}번째 칸`, { size: false });
    const b = palBtn(v);
    if (!(await b.count())) { ctx.problem('control-missing', `조각 단추 ${v + 1}번이 화면에 없음`); return false; }
    return press(ctx, b, `조각 단추 ${v + 1}`);
  }
  const slotValue = async (j) => { const s = await readState(); const a = mode === 'fill' ? s.fill : s.seq; return a ? a[j] : null; };

  try {
    if (mode === 'fill') return await fillMode();
    if (mode === 'make') return await makeMode();
    if (mode === 'odd') return await oddMode();
    return await ruleMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  // 팔레트(또는 수)에서 조각 번호 찾기. 없으면 null
  function indexIn(p) {
    const q = norm(p);
    if (numInput) return q && q.n != null ? q.n : null;
    const k = palette.findIndex((x) => keyOf(x) === keyOf(q));
    return k < 0 ? null : k;
  }

  async function fillMode() {
    const want = Array.isArray(t.fill) ? t.fill : [];
    if (!blanksAt.length) { ctx.problem('control-missing', '채울 빈칸이 줄에 없음'); return ctx.result(false); }
    const goal = [];
    for (let j = 0; j < Math.max(want.length, 0); j++) {
      const v = indexIn(want[j]);
      if (v == null) { ctx.problem('unreachable', `${names[j]} 칸에 넣을 조각(${JSON.stringify(want[j])})이 조각 판에 없음`); return ctx.result(false); }
      if (j >= blanksAt.length) { ctx.problem('unreachable', `빈칸이 ${blanksAt.length}개인데 target 은 ${want.length}개`); return ctx.result(false); }
      goal.push(v);
    }
    if (goal.length < blanksAt.length) { ctx.problem('driver-limit', 'target.fill 이 빈칸보다 적음'); return ctx.result(false); }
    for (let j = 0; j < goal.length && !ctx.over(); j++) { if (!(await putSlot(j, goal[j]))) return ctx.result(false); }
    const s = (await readState()).fill;
    return ctx.result(goal.every((v, j) => s[j] === v));
  }

  async function makeMode() {
    let goal = null;
    const rule = t.rule || 'repeat';
    if (rule === 'core') {
      const core = (t.core || []).map(indexIn);
      if (!core.length || core.some((v) => v == null)) { ctx.problem('unreachable', '묶음 조각이 조각 판에 없음'); return ctx.result(false); }
      goal = Array.from({ length }, (_, i) => core[i % core.length]);
    } else if (rule === 'add' || rule === 'mul') {
      if (!numInput) { ctx.problem('driver-limit', '수 칸이 아닌 판의 수 규칙 만들기'); return ctx.result(false); }
      const step = t.step != null ? t.step : (rule === 'add' ? 2 : 2);
      let start = Number.isFinite(Number(o.start)) ? Number(o.start) : 1;
      if (rule === 'add' && step < 0) start = Math.max(start, -step * (length - 1));
      if (rule === 'add' && step === 0) { ctx.problem('unreachable', '변하지 않는 수는 규칙이 될 수 없음'); return ctx.result(false); }
      goal = Array.from({ length }, (_, i) => (rule === 'add' ? start + step * i : start * step ** i));
    } else {
      const uses = t.uses || 0; const p = t.period || Math.max(2, uses); const minR = t.minRepeats || 2;
      const L = numInput ? 99 : palette.length;
      if (length < p * minR) { ctx.problem('unreachable', `칸 ${length}개로는 ${p}개 묶음을 ${minR}번 되풀이할 수 없음`); return ctx.result(false); }
      if (uses > p) { ctx.problem('unreachable', `묶음이 ${p}개인데 서로 다른 조각 ${uses}가지를 쓰라고 함`); return ctx.result(false); }
      if (uses > L) { ctx.problem('unreachable', `조각이 ${L}가지뿐인데 ${uses}가지를 쓰라고 함`); return ctx.result(false); }
      if (L < 2) { ctx.problem('unreachable', '조각이 한 가지뿐이라 되풀이 규칙을 만들 수 없음'); return ctx.result(false); }
      const base = Array.from({ length: p }, (_, i) => (numInput ? (Number(o.start) || 1) + i : Math.min(i, L - 1)));
      goal = Array.from({ length }, (_, i) => base[i % p]);
    }
    for (let j = 0; j < goal.length && !ctx.over(); j++) { if (!(await putSlot(j, goal[j]))) return ctx.result(false); }
    const s = (await readState()).seq;
    return ctx.result(goal.every((v, j) => s[j] === v));
  }

  async function oddMode() {
    const n = seq.length;
    if (t.odd == null || t.odd < 0 || t.odd >= n) { ctx.problem('unreachable', `틀린 조각 자리 ${t.odd} 이(가) 줄(${n}칸) 밖`); return ctx.result(false); }
    const tile = tool.locator(`[role="radio"][aria-label^=${JSON.stringify(`${t.odd + 1}번째 조각`)}]`);
    if (!(await tile.count())) { ctx.problem('control-missing', `${t.odd + 1}번째 조각이 화면에 없음`); return ctx.result(false); }
    if (ctx.input === 'touch') await checkTouchSize(ctx, tile.locator('.pk-hit').first(), `${t.odd + 1}번째 조각`);
    await press(ctx, tile, `${t.odd + 1}번째 조각`, { size: false });
    return ctx.result((await readState()).pick === t.odd);
  }

  async function ruleMode() {
    const choices = tool.locator('.pk-choice');
    const n = await choices.count();
    if (!n) { ctx.problem('control-missing', '규칙 보기가 화면에 없음'); return ctx.result(false); }
    if (t.pick == null || t.pick >= n) { ctx.problem('unreachable', `정답 보기 ${t.pick == null ? '?' : t.pick + 1}번이 없음(보기 ${n}개)`); return ctx.result(false); }
    await press(ctx, choices.nth(t.pick), `보기 ${t.pick + 1}`);
    return ctx.result((await readState()).pick === t.pick);
  }
}
void near; void sleep;
