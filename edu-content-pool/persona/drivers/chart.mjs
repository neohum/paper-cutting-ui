// 그래프 판 조작기 — 막대·꺾은선(눌러서 높이 정하기), 원·띠(항목 고르고 − +), 그림그래프(줄 고르고 그림 더하기), 읽기(보기 고르기·수 쓰기·표 채우기).
// 마우스·터치: 막대·점 자리를 눌러 값을 정하고 모자라면 '고른 항목 늘리기/줄이기' 단추로 맞춘다. 키보드: 막대·점에 Tab → 방향키, 나머지는 단추(Tab+Enter).
import { makeCtx, box, press, tabTo, tabNear, pressN, typeInto, pointAt, svgToScreen, fitPoints, checkTouchSize, near, sleep } from './_math-common.mjs';

export const tools = ['chart'];
const r6 = (v) => Math.round(v * 1e6) / 1e6;
const niceScale = (mx) => { for (const s of [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000]) if (mx / s <= 12) return s; return 10000; };

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log, maxActions: 800 });
  const o = options || {}; const t = target || {};
  const type = ['picture', 'bar', 'line', 'circle', 'band'].includes(o.type) ? o.type : 'bar';
  const mode = o.mode === 'read' ? 'read' : 'build';
  const ratio = type === 'circle' || type === 'band';
  const data = (Array.isArray(o.data) ? o.data : []).slice(0, type === 'picture' ? 6 : ratio ? 8 : 12)
    .map((d) => (Array.isArray(d) ? { label: String(d[0]), value: Number(d[1]) } : { label: String(d.label), value: Number(d.value) })).filter((d) => Number.isFinite(d.value));
  const n = data.length; const unit = o.unit || (ratio ? '%' : '');
  const given = new Set(mode === 'build' ? (o.given || []).filter((i) => i >= 0 && i < n) : []);
  const noun = type === 'bar' ? '막대' : type === 'line' ? '점' : type === 'picture' ? '그림' : '부분';
  const maxData = Math.max(1, ...data.map((d) => d.value));
  const from = type === 'line' ? Number(o.from) || 0 : 0;
  const scale = o.scale > 0 ? Number(o.scale) : niceScale(maxData - from);
  const axisMax = o.max > from ? Number(o.max) : Math.ceil((maxData + (mode === 'build' ? scale : 0)) / scale) * scale;
  const tickPct = o.tickPct > 0 ? Number(o.tickPct) : 5;
  const step = o.step > 0 ? Number(o.step) : ratio ? tickPct : data.every((d) => Math.abs((d.value - from) / scale - Math.round((d.value - from) / scale)) < 1e-9) ? scale : 1;
  const iconsDef = (Array.isArray(o.icons) && o.icons.length ? o.icons : [{ value: 10 }, { value: 1 }]).slice(0, 3).map((x) => ({ value: Number(x.value) || 1, name: x.name || `${x.value}${unit}` })).sort((a, b) => b.value - a.value);
  const greedy = (v) => { let left = v; return iconsDef.map((ic) => { const k = Math.floor(left / ic.value + 1e-9); left = r6(left - k * ic.value); return k; }); };
  const hz = type === 'bar' && !!o.horizontal;
  const tool = page.locator(root); const svg = tool.locator('svg.pk-stage');
  if (!(await tool.count())) { ctx.problem('control-missing', '그래프 판 화면이 없음'); return ctx.result(false); }
  const scr = (x, y) => svgToScreen(page, svg, x, y);
  const btn = (label) => tool.locator(`button[aria-label=${JSON.stringify(`${label}`)}]`);

  // 막대·점 좌표(그래프 판 안 좌표계)
  const W = 640; const H = 400;
  const PL = hz ? 110 : 74; const PR = 28; const PT = 56; const PB = hz ? 56 : 74;
  const plotW = W - PL - PR; const plotH = H - PT - PB;
  const slot = (hz ? plotH : plotW) / Math.max(1, n);
  const catPos = (i) => (hz ? PT + slot * (i + 0.5) : PL + slot * (i + 0.5));
  const valPos = (v) => (hz ? PL + ((v - from) / (axisMax - from)) * plotW : PT + plotH - ((v - from) / (axisMax - from)) * plotH);

  try {
    if (mode === 'read') return await readMode();
    if (type === 'picture') return await pictureMode();
    return await valueMode();
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  async function readMode() {
    if (t.table) {
      const blanks = (Array.isArray(o.tableBlanks) ? o.tableBlanks : []).filter((i) => i >= 0 && i < n);
      if (!blanks.length) { ctx.problem('control-missing', '채울 표 빈칸이 없음'); return ctx.result(false); }
      for (const i of blanks) {
        const v = data[i].value;
        if (String(v).length > 6) { ctx.problem('unreachable', `표 칸에 ${v} 을(를) 쓸 수 없음(6자까지)`); return ctx.result(false); }
        if (!(await typeInto(ctx, tool.locator(`input[aria-label=${JSON.stringify(`${data[i].label}의 수`)}]`), String(v), `${data[i].label} 칸`))) return ctx.result(false);
      }
      const s = await readState();
      return ctx.result(blanks.every((i, k) => near(s.table[k], data[i].value, 1e-6)));
    }
    if (t.pick != null) {
      const bs = tool.locator('[role="radiogroup"] button.pk-choice');
      const c = await bs.count();
      if (!c) { ctx.problem('control-missing', '고르기 보기가 화면에 없음'); return ctx.result(false); }
      if (t.pick >= c) { ctx.problem('unreachable', `정답 보기 ${t.pick + 1}번이 없음(보기 ${c}개)`); return ctx.result(false); }
      await press(ctx, bs.nth(t.pick), `보기 ${t.pick + 1}`);
      return ctx.result((await readState()).pick === t.pick);
    }
    if (t.value != null) {
      const inp = tool.locator('input.ch-in').first();
      if (!(await inp.count())) { ctx.problem('control-missing', '수를 쓰는 칸이 화면에 없음'); return ctx.result(false); }
      const txt = String(t.value);
      if (txt.length > 7 || !/^[0-9.]+$/.test(txt)) { ctx.problem('unreachable', `답 ${txt} 을(를) 칸에 쓸 수 없음(0~9와 점, 7자까지)`); return ctx.result(false); }
      await typeInto(ctx, inp, txt, '답 칸');
      const s = await readState();
      return ctx.result(s.answer != null && near(s.answer, t.value, 1e-6));
    }
    ctx.problem('driver-limit', '읽기 문항의 target 모양을 모름'); return ctx.result(false);
  }

  function wanted() {
    const all = data.map((_, i) => i).filter((i) => !given.has(i));
    if (Array.isArray(t.build)) return t.build.filter((i) => i >= 0 && i < n);
    return all;
  }

  async function selectItem(i) {
    const b = btn(`${data[i].label} 고르기`);
    if (!(await b.count())) { ctx.problem('control-missing', `${data[i].label} 고르기 단추가 화면에 없음`); return false; }
    return press(ctx, b, `${data[i].label} 고르기`);
  }

  async function valueMode() {
    const base = type === 'line' ? from : 0;
    const top = ratio ? 100 : axisMax;
    const idxs = wanted();
    if (!idxs.length) { ctx.problem('driver-limit', '그릴 항목이 없음'); return ctx.result(false); }
    for (const i of idxs) {
      const v = data[i].value;
      if (!near((v - base) / step, Math.round((v - base) / step), 1e-6)) { ctx.problem('unreachable', `${data[i].label} ${v}${unit} 은(는) 한 번에 바뀌는 크기(${step}${unit})로 만들 수 없음`); return ctx.result(false); }
      if (v < base - 1e-9 || v > top + 1e-9) { ctx.problem('unreachable', `${data[i].label} ${v}${unit} 이(가) 눈금 범위(${base}~${top}) 밖`); return ctx.result(false); }
    }
    for (const i of idxs) {
      if (ctx.over()) break;
      const v = data[i].value;
      const cur = () => readState().then((s) => s.values[i]);
      if (!ratio) {
        const tgt = tool.locator(`g[aria-label^=${JSON.stringify(`${data[i].label} ${noun}.`)}]`);
        if (!(await tgt.count())) { ctx.problem('control-missing', `${data[i].label} ${noun}이(가) 화면에 없음`); return ctx.result(false); }
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, tgt))) { ctx.problem('no-keyboard-path', `${data[i].label} ${noun}에 Tab 으로 닿지 않음`); return ctx.result(false); }
          const c0 = await cur(); const from0 = c0 == null ? base : c0;
          const d = Math.round((v - from0) / step);
          if (c0 == null && d === 0) await pressN(ctx, 'ArrowDown', 1); else await pressN(ctx, d >= 0 ? 'ArrowUp' : 'ArrowDown', Math.abs(d));
          continue;
        }
        if (ctx.input === 'touch') await checkTouchSize(ctx, tgt.locator('.pk-hit').first(), `${data[i].label} ${noun} 누르는 자리`);
        const [p] = await fitPoints(ctx, async () => [await (hz ? scr(valPos(v), catPos(i)) : scr(catPos(i), valPos(v)))]);
        await pointAt(ctx, p.x, p.y);
        await sleep(60);
      }
      // 모자라면 단추로 맞춘다(원·띠는 처음부터 단추)
      for (let fix = 0; fix < 80 && !ctx.over(); fix++) {
        const c0 = await cur();
        if (c0 != null && near(c0, v, 1e-6)) break;
        if (fix === 0 && !(await selectItem(i))) return ctx.result(false);
        const up = c0 == null || c0 < v;
        const b = btn(up ? '고른 항목 늘리기' : '고른 항목 줄이기');
        if (!(await b.count())) { ctx.problem('control-missing', '고른 항목 늘리기·줄이기 단추가 화면에 없음'); return ctx.result(false); }
        if (c0 == null && !up) { await press(ctx, btn('고른 항목 줄이기'), '줄이기'); continue; }
        await press(ctx, b, up ? '늘리기' : '줄이기');
      }
    }
    const s = await readState();
    return ctx.result(idxs.every((i) => s.values[i] != null && near(s.values[i], data[i].value, 1e-6)));
  }

  async function pictureMode() {
    const idxs = wanted();
    for (const i of idxs) {
      const g = greedy(data[i].value);
      if (g.some((k) => k > 12)) { ctx.problem('unreachable', `${data[i].label} ${data[i].value}${unit} 은(는) 그림이 12개를 넘어 줄에 놓을 수 없음(${g.join('·')})`); return ctx.result(false); }
    }
    for (const i of idxs) {
      if (ctx.over()) break;
      const row = tool.locator(`g[aria-label^=${JSON.stringify(`${data[i].label} 줄.`)}]`);
      if (!(await row.count())) { ctx.problem('control-missing', `${data[i].label} 줄이 화면에 없음`); return ctx.result(false); }
      // 키보드: 줄에 Tab 으로 가면 뒤의 줄들을 지나며 고른 줄이 바뀐다 — 항목 고르기 단추로 고른 뒤 그림 단추를 누른다
      if (ctx.input === 'keyboard') { if (!(await selectItem(i))) return ctx.result(false); }
      else {
        if (ctx.input === 'touch') await checkTouchSize(ctx, row.locator('.pk-hit').first(), `${data[i].label} 줄`);
        const bb = await box(row.locator('.pk-hit').first()); if (!bb) return ctx.result(false);
        await pointAt(ctx, bb.x + bb.width / 2, bb.y + bb.height / 2);
      }
      const want = greedy(data[i].value);
      for (let j = 0; j < iconsDef.length; j++) {
        for (let k = 0; k < 14 && !ctx.over(); k++) {
          const cur = (await readState()).icons[i][j];
          if (cur === want[j]) break;
          const lab = `${iconsDef[j].name} 그림 ${cur < want[j] ? '더하기' : '빼기'}`;
          const b = btn(lab);
          if (!(await b.count())) { ctx.problem('control-missing', `${lab} 단추가 화면에 없음`); return ctx.result(false); }
          if (ctx.input === 'keyboard') {
            if (!(await tabNear(ctx, b))) { ctx.problem('no-keyboard-path', `${lab}: Tab 으로 닿지 않음`); return ctx.result(false); }
            await page.keyboard.press('Enter'); ctx.tick(); await sleep(30);
          } else await press(ctx, b, lab);
        }
      }
    }
    const s = await readState();
    return ctx.result(idxs.every((i) => greedy(data[i].value).every((k, j) => s.icons[i][j] === k)));
  }
}
