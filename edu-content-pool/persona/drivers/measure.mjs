// 재기 실험대 조작기 — 자(읽기·띠 만들기·조각 세기), 양팔저울·용수철저울, 눈금 그릇(붓기·읽기), 단위 고르기, 고르기·수 쓰기 공통 칸.
// 조작 칸은 대부분 HTML 단추·입력 칸이라 마우스·터치는 누르고 쓰며, 키보드는 Tab 으로 가서 Enter·글자·방향키.
// 띠 끝만 끌기(마우스·터치) 또는 방향키(키보드)다.
import { makeCtx, box, press, tabTo, pressN, typeInto, dragXY, svgToScreen, fitPoints, checkTouchSize, near, sleep } from './_math-common.mjs';

export const tools = ['measure'];
const r2 = (v) => Math.round(v * 100) / 100;

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log, maxActions: 800 });
  const o = options || {}; const t = target || {};
  const mode = ['scale', 'volume', 'unit'].includes(o.mode) ? o.mode : 'ruler';
  const tool = page.locator(root);
  const byLabel = (l) => tool.locator(`[aria-label=${JSON.stringify(`${l}`)}]`);
  const inputBy = (l) => tool.locator(`input[aria-label=${JSON.stringify(`${l}`)}]`);
  const fits = (v) => String(v).length <= 6;
  if (!(await tool.count())) { ctx.problem('control-missing', '재기 교구 화면이 없음'); return ctx.result(false); }

  try {
    let ok = true;
    if (mode === 'ruler') ok = await ruler();
    else if (mode === 'scale') ok = o.kind === 'spring' ? await spring() : await balance();
    else if (mode === 'volume') ok = await volume();
    else ok = await units();
    if (ok === false) return ctx.result(false);
    if (t.num != null) { if (!(await writeNum(inputBy((o.askNum && o.askNum.q) || '답'), t.num, '답 칸'))) return ctx.result(false); }
    if (t.pick != null) { if (!(await pickAsk())) return ctx.result(false); }
    const s = await readState();
    return ctx.result(verify(s));
  } catch (e) { ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`); return ctx.result(false); }

  function verify(s) {
    if (t.pick != null && s.pick !== t.pick) return false;
    if (t.num != null && !(s.num != null && near(s.num, t.num, (o.askNum && o.askNum.tol) || 1e-6))) return false;
    if (t.read != null && !(s.ans != null && near(s.ans, t.read, 1e-6))) return false;
    if (t.make != null && !(s.len != null && near(s.len, t.make, 1e-6))) return false;
    if (t.fill != null && !(s.v && near(s.v[0], t.fill, 1e-6))) return false;
    if (Array.isArray(t.units) && !(s.picks && t.units.every((u, i) => s.picks[i] === u))) return false;
    return true;
  }

  async function writeNum(inp, v, label) {
    if (!(await inp.count())) { ctx.problem('control-missing', `${label} 이(가) 화면에 없음`); return false; }
    if (!fits(v) || !(Number(v) >= 0)) { ctx.problem('unreachable', `${label}에 ${v} 을(를) 쓸 수 없음(6자·0 이상 수만)`); return false; }
    return typeInto(ctx, inp, String(v), label);
  }

  async function pickAsk() {
    const q = o.ask && o.ask.q ? o.ask.q : '고르기';
    const group = tool.locator(`[role="radiogroup"][aria-label=${JSON.stringify(`${q}`)}]`).first();
    const bs = group.locator('button[role="radio"]');
    const n = await bs.count();
    if (!n) { ctx.problem('control-missing', '고르기 보기가 화면에 없음'); return false; }
    if (t.pick >= n) { ctx.problem('unreachable', `정답 보기 ${t.pick + 1}번이 없음(보기 ${n}개)`); return false; }
    return press(ctx, bs.nth(t.pick), `보기 ${t.pick + 1}`);
  }

  // 답 칸에 읽은 값 쓰기(split 이면 두 칸)
  async function writeRead(labelBase, unitA, unitB, v, parts) {
    if (!unitB) return writeNum(inputBy(labelBase), v, labelBase);
    const [a, b] = parts(v);
    return (await writeNum(inputBy(`${labelBase} ${unitA}`), a, `${labelBase} ${unitA} 칸`)) && (await writeNum(inputBy(`${labelBase} ${unitB}`), b, `${labelBase} ${unitB} 칸`));
  }

  async function ruler() {
    const tiles = o.tiles && o.tiles.len > 0 ? o.tiles : null;
    const mm = o.mm !== false && !tiles;
    if (o.make) {
      if (t.make == null) return true;
      const max = Math.max(3, Math.min(30, o.max || 15)); const from = o.from || 0; const step = o.step || (mm ? 0.1 : 1);
      if (!near(t.make / step, Math.round(t.make / step), 1e-6)) { ctx.problem('unreachable', `띠 길이 ${t.make} 은(는) 한 칸(${step}) 단위에 맞지 않음`); return false; }
      if (t.make < 0 || t.make > max - from + 1e-9) { ctx.problem('unreachable', `띠 길이 ${t.make} 이(가) 자의 남은 길이(${r2(max - from)}) 밖`); return false; }
      const handle = tool.locator('g[aria-label^="띠 끝"]');
      if (!(await handle.count())) { ctx.problem('control-missing', '띠 끝 손잡이가 화면에 없음'); return false; }
      const svg = tool.locator('svg.pk-stage'); const PX = (640 - 80) / max;
      for (let it = 0; it < 5 && !ctx.over(); it++) {
        const len = (await readState()).len;
        if (near(len, t.make, 1e-6)) break;
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, handle))) { ctx.problem('no-keyboard-path', '띠 끝에 Tab 으로 닿지 않음'); return false; }
          await pressN(ctx, t.make > len ? 'ArrowRight' : 'ArrowLeft', Math.round(Math.abs(t.make - len) / step));
        } else {
          if (ctx.input === 'touch') await checkTouchSize(ctx, handle.locator('.pk-hit').first(), '띠 끝 손잡이');
          const [p0, p1] = await fitPoints(ctx, async () => [await svgToScreen(page, svg, 40 + (from + len) * PX, 123), await svgToScreen(page, svg, 40 + (from + t.make) * PX, 123)]);
          await dragXY(ctx, p0, p1, 10);
        }
      }
      return true;
    }
    if (t.read == null) return true;
    if (tiles) return writeRead(`${tiles.name} 몇 개?`, '개', null, t.read, null);
    return writeRead('길이', 'cm', o.split && mm ? 'mm' : null, t.read, (v) => [Math.floor(v + 1e-9), Math.round((v - Math.floor(v + 1e-9)) * 10)]);
  }

  async function balance() {
    if (t.balance == null && t.tilt == null) return true;
    const left = Array.isArray(o.left) ? o.left : [{ name: '물체', w: 5 }];
    const right = Array.isArray(o.right) ? o.right : [];
    const unit = o.unit && o.unit.w > 0 ? o.unit : null;
    const maxU = o.maxUnits || 20;
    const sum = (l) => l.reduce((s, x) => s + (Number(x.w) || 0), 0);
    const a = sum(left); const b0 = sum(right);
    let n;
    if (!unit) {
      const ok = t.balance ? a === b0 : t.tilt === 'left' ? a > b0 : b0 > a;
      if (!ok) { ctx.problem('unreachable', '저울에 올릴 추가 없고 지금 무게로는 문제의 상태가 안 됨'); return false; }
      return true;
    }
    const need = (a - b0) / unit.w;
    if (t.balance) { n = Math.round(need); if (!near(need, n, 1e-6) || n < 0 || n > maxU) { ctx.problem('unreachable', `수평이 되려면 ${unit.name} ${r2(need)}개가 필요한데 올릴 수 있는 것은 0~${maxU}개 정수`); return false; } }
    else { n = t.tilt === 'left' ? Math.ceil(need - 1e-9) - 1 : Math.floor(need) + 1; if (n < 0 || n > maxU) { ctx.problem('unreachable', `${t.tilt === 'left' ? '왼쪽' : '오른쪽'}이 내려가게 하려면 ${unit.name} ${n}개가 필요(0~${maxU} 밖)`); return false; } }
    for (let i = 0; i < maxU * 2 + 4 && !ctx.over(); i++) {
      const cur = (await readState()).n;
      if (cur === n) break;
      const lab = `오른쪽 ${unit.name} ${cur < n ? '늘리기' : '줄이기'}`;
      const b = byLabel(lab);
      if (!(await b.count())) { ctx.problem('control-missing', `${lab} 단추가 화면에 없음`); return false; }
      await press(ctx, b, lab);
    }
    return (await readState()).n === n;
  }

  async function spring() {
    if (t.read == null) return true;
    const objs = Array.isArray(o.objects) && o.objects.length ? o.objects : [{ name: '물체', w: 200 }];
    if (objs.length > 1) {
      const idx = Math.max(0, objs.findIndex((x) => Number(x.w) === t.read));
      const bs = tool.locator('[role="radiogroup"][aria-label="매달 물체"] button[role="radio"]');
      if (!(await bs.count())) { ctx.problem('control-missing', '매달 물체 고르기가 화면에 없음'); return false; }
      if (!(await press(ctx, bs.nth(idx), `매달 물체 ${idx + 1}`))) return false;
    }
    return writeNum(inputBy('눈금'), t.read, '눈금 칸');
  }

  async function volume() {
    const list = (Array.isArray(o.beakers) && o.beakers.length ? o.beakers : [{ v: 0 }]).slice(0, 3);
    const step = o.step || 100; const minor = o.minor || 1; const maxAll = o.max || 1000;
    if (t.fill != null) {
      const pourStep = o.pourStep || step / minor;
      const v0 = Number(list[0].v) || 0; const cap = list[0].max || maxAll;
      if (t.fill < 0 || t.fill > cap) { ctx.problem('unreachable', `${t.fill} mL 은(는) 첫 그릇 들이(${cap} mL) 밖`); return false; }
      if (!near((t.fill - v0) / pourStep, Math.round((t.fill - v0) / pourStep), 1e-6)) { ctx.problem('unreachable', `${t.fill} mL 은(는) 붓는 단위(${pourStep} mL)로 만들 수 없음`); return false; }
      const plus = tool.locator('button[aria-label$="물 덜기·붓기 늘리기"]'); const minus = tool.locator('button[aria-label$="물 덜기·붓기 줄이기"]');
      if (!(await plus.count())) { ctx.problem('control-missing', '물 붓기 단추가 화면에 없음'); return false; }
      for (let i = 0; i < 200 && !ctx.over(); i++) {
        const cur = (await readState()).v[0];
        if (near(cur, t.fill, 1e-6)) break;
        await press(ctx, cur < t.fill ? plus : minus, cur < t.fill ? '물 붓기' : '물 덜기');
      }
    }
    if (t.read != null) {
      if (!(await writeRead('들이', o.split ? 'L' : 'mL', o.split ? 'mL' : null, t.read, (v) => [Math.floor(v / 1000), v % 1000]))) return false;
    }
    return true;
  }

  async function units() {
    if (!Array.isArray(t.units)) return true;
    const things = (Array.isArray(o.things) ? o.things : []).map((x) => (typeof x === 'string' ? { name: x } : x));
    for (let i = 0; i < t.units.length && !ctx.over(); i++) {
      if (!things[i]) { ctx.problem('unreachable', `${i + 1}번 물건이 없는데 단위를 골라야 함`); return false; }
      const bs = tool.locator(`[role="radiogroup"][aria-label=${JSON.stringify(`${things[i].name}의 단위`)}] button[role="radio"]`);
      const n = await bs.count();
      if (!n) { ctx.problem('control-missing', `${things[i].name} 의 단위 고르기가 화면에 없음`); return false; }
      if (t.units[i] >= n) { ctx.problem('unreachable', `${things[i].name}: 정답 단위 ${t.units[i] + 1}번이 없음(단위 ${n}개)`); return false; }
      if (!(await press(ctx, bs.nth(t.units[i]), `${things[i].name} 단위`))) return false;
    }
    return true;
  }
}
void box; void sleep;
