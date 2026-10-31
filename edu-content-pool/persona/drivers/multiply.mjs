// 곱셈 배열판 조작기 — 배열 만들기(array)·묶어 세기(group)·곱셈표 채우기(table).
// 배열: 마우스는 모서리를 끌고, 터치는 칸을 눌러(어긋나면 줄 수·개수 칸에 쓴다), 키보드는 모서리에 Tab → 방향키.
// 묶기: −/＋ 단추와 답 칸. 표: 마우스는 빈칸을 눌러 숫자 키, 터치는 숫자 단추와 '다음 빈칸', 키보드는 Tab 으로 빈칸에 가서 숫자 키.
import { makeCtx, box, press, tabTo, pressN, dragXY, pointAt, typeInto, svgToScreen, checkTouchSize, near, sleep } from './_math-common.mjs';

export const tools = ['multiply'];
const intOr = (v, d) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : d);

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const mode = ['array', 'group', 'table'].includes(o.mode) ? o.mode : 'array';
  const tool = page.locator(root);
  const svg = tool.locator('svg.pk-stage');
  if (!(await svg.count())) { ctx.problem('control-missing', '곱셈 배열판 그림이 화면에 없음'); return ctx.result(false); }
  const byLabel = (l) => tool.locator(`[aria-label=${JSON.stringify(`${l}`)}]`);
  try {
    if (mode === 'array') return await arrayMode();
    if (mode === 'group') return await groupMode();
    return await tableMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function arrayMode() {
    const maxR = Math.max(1, Math.min(10, o.maxRows || 10)); const maxC = Math.max(1, Math.min(10, o.maxCols || 10));
    const lock = !!o.lock;
    // 목표 줄 수·개수
    let r = t.rows != null ? t.rows : null; let c = t.cols != null ? t.cols : null;
    if (lock) { const s0 = await readState(); if (r == null) r = s0.rows; if (c == null) c = s0.cols; }
    if (r == null || c == null) {
      if (t.product != null) {
        const cand = [];
        for (let a = 1; a <= maxR; a++) for (let b = 1; b <= maxC; b++) {
          if (a * b !== t.product) continue;
          if (r != null && a !== r) continue; if (c != null && b !== c) continue;
          if (t.minSide && (a < t.minSide || b < t.minSide)) continue;
          cand.push([a, b]);
        }
        cand.sort((x, y) => Math.abs(x[0] - x[1]) - Math.abs(y[0] - y[1]));
        if (!cand.length) { ctx.problem('unreachable', `${t.product}개 배열을 ${maxR}줄×${maxC}개 안에서 만들 수 없음${t.minSide ? `(${t.minSide}줄 이상)` : ''}`); return ctx.result(false); }
        [r, c] = cand[0];
      } else {
        if (r == null) r = t.minSide || 2; if (c == null) c = t.minSide || 3;
        if (t.minSide) { r = Math.max(r, t.minSide); c = Math.max(c, t.minSide); }
      }
    }
    if (r < 1 || r > maxR || c < 1 || c > maxC) { ctx.problem('unreachable', `${c}개씩 ${r}줄은 판(최대 ${maxC}개×${maxR}줄)에서 만들 수 없음`); return ctx.result(false); }
    if (lock) {
      const s0 = await readState();
      if (s0.rows !== r || s0.cols !== c) { ctx.problem('unreachable', `배열이 잠겨 있어(${s0.cols}개씩 ${s0.rows}줄) ${c}개씩 ${r}줄로 바꿀 수 없음`); return ctx.result(false); }
    }
    if (!lock) {
      const corner = tool.locator('g[aria-label^="배열 모서리"]');
      if (!(await corner.count())) { ctx.problem('control-missing', '배열 모서리가 화면에 없음'); return ctx.result(false); }
      const W = 560; const H = 400; const GX = 96; const GY = 64;
      const CS = Math.min(34, Math.floor(Math.min((W - GX - 40) / maxC, (H - GY - 70) / maxR)));
      const cur = await readState();
      if (cur.rows !== r || cur.cols !== c) {
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, corner))) { ctx.problem('no-keyboard-path', '배열 모서리에 Tab 으로 닿지 않음'); return ctx.result(false); }
          const dr = r - cur.rows; const dc = c - cur.cols;
          await pressN(ctx, dr >= 0 ? 'ArrowDown' : 'ArrowUp', Math.abs(dr));
          await pressN(ctx, dc >= 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(dc));
        } else if (ctx.input === 'mouse') {
          const from = await svgToScreen(page, svg, GX + cur.cols * CS, GY + cur.rows * CS);
          await dragXY(ctx, from, await svgToScreen(page, svg, GX + c * CS, GY + r * CS));
        } else {
          // 터치: 모서리를 끌기 어려우니 가로·세로 칸을 눌러 배열을 정한다(칸이 모서리에 가려지면 아래 쓰기 칸으로)
          const cells = tool.locator('rect.mu-cell');
          const cell = cells.nth((r - 1) * maxC + (c - 1));
          const b = await box(cell);
          if (b) {
            if (b.width < 43.5 || b.height < 43.5) ctx.problem('touch-target-small', `배열 칸 ${Math.round(b.width)}×${Math.round(b.height)}px (44px 미만)`);
            await pointAt(ctx, b.x + b.width / 2, b.y + b.height / 2);
          }
        }
      }
      // 어긋났으면 줄 수·개수 칸으로 맞춘다(키보드는 같은 칸에 Tab 으로 가서 쓴다)
      for (let fix = 0; fix < 3 && !ctx.over(); fix++) {
        const s = await readState();
        if (s.rows === r && s.cols === c) break;
        if (s.cols !== c) await typeInto(ctx, byLabel('한 줄의 개수'), String(c), '한 줄의 개수 칸');
        if ((await readState()).rows !== r) await typeInto(ctx, byLabel('줄 수'), String(r), '줄 수 칸');
      }
    }
    if (t.total) {
      const inp = byLabel('모두 몇 개');
      if (!(await inp.count())) { ctx.problem('control-missing', '"모두 몇 개" 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      await typeInto(ctx, inp, String(r * c), '모두 몇 개 칸');
    }
    const s = await readState();
    return ctx.result(s.rows === r && s.cols === c && (!t.total || s.total === r * c));
  }

  async function groupMode() {
    const count = Math.max(1, Math.min(60, intOr(o.count, 12)));
    const by = o.by === 'plates' ? 'plates' : 'size';
    const maxSize = Math.max(1, Math.min(count, intOr(o.maxSize, count)));
    const eachOf = (v) => (by === 'plates' ? (v ? Math.floor(count / v) : 0) : v || 0);
    const grpOf = (v) => (by === 'plates' ? v || 0 : v ? Math.floor(count / v) : 0);
    const askKind = o.ask || (t.answer != null ? (by === 'plates' ? 'size' : 'groups') : 'none');
    const needChoose = !(askKind === 'total' && t.size == null && t.plates == null && t.groups == null);
    // 고를 수 정하기
    let v = null;
    if (needChoose) {
      const ok = [];
      for (let x = 1; x <= maxSize; x++) {
        if (t.size != null && by === 'size' && x !== t.size) continue;
        if (t.plates != null && by === 'plates' && x !== t.plates) continue;
        if (t.size != null && by === 'plates' && eachOf(x) !== t.size) continue;
        if (t.groups != null && grpOf(x) !== t.groups) continue;
        ok.push(x);
      }
      if (t.plates != null && by === 'size') { /* 접시 수를 묻는데 묶기 방식이 size — 맞춰 줄 수 있는 길이 아니다 */ ctx.problem('unreachable', `문제는 접시 ${t.plates}개인데 판은 '몇 개씩 묶기' 방식`); return ctx.result(false); }
      if (!ok.length) { ctx.problem('unreachable', `${count}개를 ${by === 'plates' ? '접시' : '묶음'} 조건(size ${t.size ?? '-'}, plates ${t.plates ?? '-'}, groups ${t.groups ?? '-'})에 맞게 나눌 수 없음(고를 수 1~${maxSize})`); return ctx.result(false); }
      v = ok[0];
      const plus = byLabel(by === 'plates' ? '접시 수 늘리기' : '묶는 수 늘리기'); const minus = byLabel(by === 'plates' ? '접시 수 줄이기' : '묶는 수 줄이기');
      if (!(await plus.count())) { ctx.problem('control-missing', '묶는 수 단추가 화면에 없음'); return ctx.result(false); }
      for (let i = 0; i < 70 && !ctx.over(); i++) {
        const s = await readState(); const cur = by === 'plates' ? s.plates : s.size;
        if (cur === v) break;
        await press(ctx, cur == null || cur < v ? plus : minus, cur == null || cur < v ? '묶는 수 늘리기' : '묶는 수 줄이기');
      }
    }
    const n = grpOf(v); const each = eachOf(v); const left = count - n * each;
    // 답 칸
    const inputs = tool.locator('input.mu-in');
    const wantAns = t.answer != null; const wantRest = t.rest != null;
    if (wantAns) {
      const inp = tool.locator('input.mu-in:not([aria-label="남은 것"])').first();
      if (!(await inp.count())) { ctx.problem('control-missing', '답을 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      await typeInto(ctx, inp, String(t.answer), '답 칸');
    }
    if (wantRest) {
      const inp = byLabel('남은 것');
      if (!(await inp.count())) { ctx.problem('control-missing', '남은 것 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      await typeInto(ctx, inp, String(t.rest), '남은 것 칸');
    }
    void inputs; void left; void near;
    const s = await readState();
    return ctx.result((!needChoose || (by === 'plates' ? s.plates : s.size) === v) && (!wantAns || s.answer === t.answer) && (!wantRest || s.rest === t.rest));
  }

  async function tableMode() {
    ctx.maxActions = 1500;
    const op = o.op === '+' ? '+' : '×';
    const calc = (a, b) => (op === '+' ? a + b : a * b);
    const keys = Object.keys((await readState()).cells || {});
    if (!keys.length) { ctx.problem('control-missing', '채울 빈칸이 표에 없음'); return ctx.result(false); }
    const cellLoc = (k) => { const [a, b] = k.split('x'); return byLabel(`${a} ${op} ${b} 빈칸`); };
    const selected = async () => page.evaluate((rt) => { const gs = [...document.querySelectorAll(`${rt} .mu-blank`)]; return gs.findIndex((g) => g.querySelector('rect')?.getAttribute('stroke-width') === '4'); }, root);
    for (let i = 0; i < keys.length && !ctx.over(); i++) {
      const k = keys[i]; const [a, b] = k.split('x').map(Number); const val = calc(a, b);
      if (String(val).length > 3) { ctx.problem('unreachable', `${a} ${op} ${b} = ${val} 은(는) 칸에 쓸 수 없음(3자리까지)`); return ctx.result(false); }
      if (ctx.input === 'touch') {
        // 숫자 단추 + 다음 빈칸(44px 단추만 쓴다)
        const next = byLabel('다음 빈칸');
        for (let g = 0; g < keys.length + 1 && (await selected()) !== i && i > 0; g++) await press(ctx, next, '다음 빈칸');
        for (const d of String(val)) await press(ctx, byLabel(`${d} 쓰기`), `${d} 쓰기`);
      } else {
        const cell = cellLoc(k);
        if (!(await cell.count())) { ctx.problem('control-missing', `${a} ${op} ${b} 빈칸이 화면에 없음`); return ctx.result(false); }
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, cell))) { ctx.problem('no-keyboard-path', `${a} ${op} ${b} 빈칸에 Tab 으로 닿지 않음`); return ctx.result(false); }
        } else { await press(ctx, cell, `${a} ${op} ${b} 빈칸`); }
        for (const d of String(val)) { await page.keyboard.press(d); ctx.tick(); }
      }
    }
    const s = (await readState()).cells;
    return ctx.result(keys.every((k) => { const [a, b] = k.split('x').map(Number); return s[k] === calc(a, b); }));
  }
}
void sleep;
