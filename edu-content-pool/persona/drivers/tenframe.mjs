// 십칸 수 모형 보드 조작기 — 사과·칩 놓기, 두 색 모으기·가르기, '몇이 되었나요?' 고르기, 수 줄 고르기(lineMode).
// 마우스: 조각을 끌어 칸에 놓는다. 터치: 조각을 눌러 넣고 뺀다. 키보드: Tab 으로 바구니의 다음 조각에 가서 Enter(넣기)·마지막 조각에서 Enter(빼기).
import { makeCtx, box, press, tabTo, dragXY, pointAt, svgToScreen, checkTouchSize, sleep } from './_math-common.mjs';

export const tools = ['tenframe'];
const CELL = 62; const GAP = 6; const PAD = 14; const BX = 20; const BY = 14;
const cellXY = (i) => ({ x: BX + PAD + (i % 5) * (CELL + GAP) + CELL / 2, y: BY + PAD + Math.floor(i / 5) * (CELL + GAP) + CELL / 2 });
const isSecond = (name) => /초록 사과|주황색 칩/.test(name || '');

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const two = !!o.twoColor; const lineMode = !!o.lineMode;
  const tool = page.locator(root);
  const svg = tool.locator('svg.pk-stage');
  if (!(await svg.count())) { ctx.problem('control-missing', '십칸 보드 그림이 화면에 없음'); return ctx.result(false); }
  const supply = two ? 9 : Math.max(1, Math.min(10, o.supply || 10));
  const goalOf = () => (two ? (t.total != null ? t.total : (t.parts || []).reduce((a, b) => a + (b || 0), 0)) : (t.count || 0) + (t.more || 0) - (t.less || 0));
  const answerOf = () => (two && t.ask === 'b' ? goalOf() - ((t.parts || [])[0] || 0) : goalOf());
  const goal = goalOf();

  try {
    if (lineMode) return await lineDrive();
    return await boardDrive();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function lineDrive() {
    if (goal < 0 || goal > 10) { ctx.problem('unreachable', `수 줄(0~10)에서 ${goal} 을(를) 누를 수 없음`); return ctx.result(false); }
    const cell = tool.locator(`[role="radio"][aria-label=${JSON.stringify(`수 ${goal}`)}]`);
    if (!(await cell.count())) { ctx.problem('control-missing', `수 줄의 ${goal} 칸이 화면에 없음`); return ctx.result(false); }
    if (ctx.input === 'touch') await checkTouchSize(ctx, cell.locator('.pk-hit').first(), `수 줄 ${goal}`);
    await press(ctx, cell, `수 줄 ${goal}`, { size: false });
    return ctx.result((await readState()).said === goal);
  }

  async function counterLabels() { return tool.locator('.tf-counter').evaluateAll((els) => els.map((e) => e.getAttribute('aria-label') || '')); }

  async function boardDrive() {
    // 목표 색별 개수
    let want;
    if (two) {
      const p = t.parts || [null, null]; const total = goalOf();
      if (p[0] != null && p[1] != null) want = [p[0], p[1]];
      else if (p[0] != null) want = [p[0], total - p[0]];
      else if (p[1] != null) want = [total - p[1], p[1]];
      else {
        const avoid = Array.isArray(t.avoid) ? t.avoid : [];
        let a = null;
        for (let x = 1; x < total; x++) if (!avoid.some((v) => v[0] === x && v[1] === total - x) && x <= 9 && total - x <= 9) { a = x; break; }
        if (a == null) { ctx.problem('unreachable', `${total}을 둘로 가르는 새 방법이 없음(이미 찾은 방법 ${JSON.stringify(avoid)})`); return ctx.result(false); }
        want = [a, total - a];
      }
      if (want[0] + want[1] > 10 || want.some((x) => x < 0 || x > supply)) { ctx.problem('unreachable', `색별 ${want.join('·')}개는 십칸(10)·바구니(색마다 ${supply}) 한도 밖`); return ctx.result(false); }
    } else {
      if (goal < 0 || goal > 10) { ctx.problem('unreachable', `십칸(10칸)에 ${goal} 개를 놓을 수 없음`); return ctx.result(false); }
      if (goal > supply) { ctx.problem('unreachable', `바구니에 ${supply}개뿐인데 ${goal} 개가 필요`); return ctx.result(false); }
      want = [goal];
    }
    const parts = (s) => (two ? s.parts : [s.count]);
    // 하나씩 맞춘다
    for (let it = 0; it < 60 && !ctx.over(); it++) {
      const s = await readState(); const cur = parts(s);
      const col = want.findIndex((w, k) => cur[k] < w);
      const rm = want.findIndex((w, k) => cur[k] > w);
      if (col < 0 && rm < 0) break;
      if (col >= 0) { if (!(await addOne(col, s))) return ctx.result(false); } else if (!(await removeOne(rm))) return ctx.result(false);
    }
    // 수 고르기
    if (o.askNumber) {
      const ans = answerOf();
      const b = tool.locator(`.tf-ask button[data-n="${ans}"]`);
      if (!(await b.count())) { ctx.problem('unreachable', `수 고르기 보기에 정답 ${ans} 이(가) 없음`); return ctx.result(false); }
      await press(ctx, b, `수 고르기 ${ans}`);
    }
    const s = await readState(); const cur = parts(s);
    return ctx.result(want.every((w, k) => cur[k] === w) && (!o.askNumber || s.said === answerOf()));
  }

  // col 색 조각 하나를 바구니에서 칸으로
  async function addOne(col, s) {
    const trayName = async () => {
      const labels = (await counterLabels()).filter((l) => /바구니/.test(l));
      return labels.map((l) => l.split(',')[0]).find((n) => (two ? (isSecond(n) ? 1 : 0) === col : true));
    };
    const name = await trayName();
    if (!name) { ctx.problem('unreachable', `${col ? '둘째' : '첫째'} 색 바구니에 조각이 더 없음`); return false; }
    const sel = `.tf-counter[aria-label^=${JSON.stringify(`${name}, 바구니`)}]`;
    if (ctx.input === 'keyboard') {
      const c = tool.locator(`${sel}[tabindex="0"]`).first();
      if (!(await c.count()) || !(await tabTo(ctx, c))) { ctx.problem('no-keyboard-path', `${name} 조각에 Tab 으로 닿지 않음`); return false; }
      await page.keyboard.press('Enter'); ctx.tick(); await sleep(60);
      return true;
    }
    // 두 색은 쌓인 맨 위 조각(Tab 칸)이 눌리는 조각이다
    const c = (two ? tool.locator(`${sel}[tabindex="0"]`) : tool.locator(sel)).first();
    if (!(await c.count())) { ctx.problem('control-missing', `${name} 조각이 화면에 없음`); return false; }
    if (ctx.input === 'touch') {
      await checkTouchSize(ctx, c.locator('.pk-hit').first(), `${name} 조각`);
      const b = await box(c.locator('.pk-hit').first()); if (!b) return false;
      await pointAt(ctx, b.x + b.width / 2, b.y + b.height / 2);
    } else {
      const b = await box(c.locator('.pk-hit').first()); if (!b) return false;
      const empty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find((k) => !(s.filled || []).includes(k));
      if (empty == null) { ctx.problem('unreachable', '십칸이 모두 찼는데 더 놓아야 함'); return false; }
      await dragXY(ctx, { x: b.x + b.width / 2, y: b.y + b.height / 2 }, await svgToScreen(page, svg, cellXY(empty).x, cellXY(empty).y));
    }
    await sleep(60);
    return true;
  }

  async function removeOne(col) {
    if (ctx.input === 'keyboard') {
      const c = tool.locator('.tf-counter[tabindex="0"][aria-label*="번 칸"]').first();
      if (!(await c.count()) || !(await tabTo(ctx, c))) { ctx.problem('no-keyboard-path', '놓은 조각에 Tab 으로 닿지 않음'); return false; }
      await page.keyboard.press('Enter'); ctx.tick(); await sleep(60);
      return true;
    }
    const labels = (await counterLabels()).filter((l) => /번 칸/.test(l)).map((l) => l.split(',')[0]);
    const name = labels.find((n) => (two ? (isSecond(n) ? 1 : 0) === col : true));
    if (!name) { ctx.problem('driver-limit', '뺄 조각을 찾지 못함'); return false; }
    const c = tool.locator(`.tf-counter[aria-label^=${JSON.stringify(`${name}, `)}][aria-label*="번 칸"]`).first();
    const b = await box(c.locator('.pk-hit').first()); if (!b) return false;
    await pointAt(ctx, b.x + b.width / 2, b.y + b.height / 2);
    await sleep(60);
    return true;
  }
}
