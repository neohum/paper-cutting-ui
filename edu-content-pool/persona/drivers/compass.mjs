// 종이 컴퍼스(compass) 조작기 — 연필 다리를 자를 따라 벌리고 손잡이를 한 바퀴 돌려 원 그리기, 원에서 중심·반지름·지름 고르기.
import { actor, nudge, sleep, svgToScreen, fitView, touchTap, box, mid, rt, hitSize } from './_geo-lib.mjs';

export const tools = ['compass'];

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const mode = o.mode === 'pick' ? 'pick' : 'draw';
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '컴퍼스'); return { reached: ok, actions: A.n, problems }; }
    if (mode === 'pick') reached = await pick(A, page, o, t, readState);
    else reached = await draw(A, page, o, t, readState);
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

async function pick(A, page, o, t, readState) {
  let loc;
  if (t.pick === 'center') loc = page.locator((rt(page) + ' g[role=button][aria-label="점 ㄱ"]')).first();
  else {
    const marks = o.marks || ['radius', 'diameter', 'chord']; const k = marks.indexOf(t.pick);
    if (k < 0) { A.problem('unreachable', `고를 선분 목록(${marks.join(',')})에 ${t.pick} 이 없음`); return false; }
    loc = page.locator(`${rt(page)} g[role=button][aria-label="선분 ${['가', '나', '다', '라'][k]}"]`).first();
  }
  if (!(await loc.count())) { A.problem('control-missing', `${t.pick} 을 고를 선분·점이 화면에 없음`); return false; }
  let ok;
  const clickAt = async (p) => { A.count(); if (A.input === 'touch') await touchTap(page, p.x, p.y); else await page.mouse.click(p.x, p.y); await sleep(150); };
  if (A.input === 'keyboard') ok = await A.tap(loc, `${t.pick} 고르기`);
  else if (t.pick === 'center') {
    const hb = await box(loc.locator('.pk-hit').first()); const c = mid(hb);
    if (A.input === 'touch' && Math.min(hb.width, hb.height) < 44) A.problem('touch-target-small', `점 ㄱ ${Math.round(hb.width)}px`);
    await clickAt(c);
    if ((await readState()).picked !== 'center') {
      // 학생은 점 한가운데를 누른다 — 그 자리를 다른 것이 가로채면 결함 후보
      A.problem('ui-error', '원의 중심 점 ㄱ 한가운데를 눌러도 골라지지 않음(중심에 그려진 점·선분이 눌림을 가로챔)');
      const r = hb.width * 0.3;
      for (const ang of [100, 190, 280, 10, 145, 235]) { await clickAt({ x: c.x + r * Math.cos((ang * Math.PI) / 180), y: c.y + r * Math.sin((ang * Math.PI) / 180) }); if ((await readState()).picked === 'center') break; }
    }
    ok = true;
  } else {
    // 선분은 선 위를 눌러야 한다. 중심(선분 가운데)은 다른 것과 겹치므로 끝 쪽 80% 자리를 누른다
    const line = loc.locator('line').first(); await box(line);
    const q = await line.evaluate((el) => { const n = (k) => Number(el.getAttribute(k)); return { x1: n('x1'), y1: n('y1'), x2: n('x2'), y2: n('y2') }; });
    const f = t.pick === 'diameter' || t.pick === 'radius' ? 0.8 : 0.5;
    const [pt] = await fitView(page, async () => [await svgToScreen(page, q.x1 + (q.x2 - q.x1) * f, q.y1 + (q.y2 - q.y1) * f)]);
    await clickAt(pt); ok = true;
  }
  return ok && (await readState()).picked === t.pick;
}

async function draw(A, page, o, t, readState) {
  const maxCm = o.maxCm || 6;
  const r = t.radius != null ? t.radius : t.diameter != null ? t.diameter / 2 : null;
  if (r == null) { A.problem('driver-limit', '목표에 radius·diameter 가 없음'); return false; }
  if (r > maxCm) { A.problem('unreachable', `목표 반지름 ${r}cm 가 자의 길이 ${maxCm}cm 보다 김`); return false; }
  if ((r * 2) % 1 !== 0) { A.problem('unreachable', `반지름 ${r}cm 는 0.5cm 단위로 벌릴 수 없음`); return false; }
  const readW = async () => (await readState()).width;
  const tip = page.locator((rt(page) + ' .cp-tip')).first();
  if (!(await tip.count())) { A.problem('control-missing', '컴퍼스 연필 다리가 화면에 없음'); return false; }
  let w = await readW();
  if (w !== r) {
    if (A.input === 'keyboard') {
      if (!(await A.focus(tip, '컴퍼스 연필 다리'))) return false;
      const n = Math.round((r - w) / 0.5);
      await A.key(n > 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(n), 30);
      await A.key('Enter', 1, 250);
    } else {
      const O = mid(await box(page.locator((rt(page) + ' .pk-layer--center .pk-face')).first()));
      const tc = mid(await tip.locator('.pk-hit').first().boundingBox());
      if (A.input === 'touch') { const hs = await hitSize(tip.locator('.pk-hit').first()); if (hs && hs.min < 43.5) A.problem('touch-target-small', `연필 다리 잡는 곳 ${Math.round(hs.min)}px`); }
      const perCm = (tc.x - O.x) / w;
      const dst = { x: O.x + perCm * r, y: tc.y };
      await A.drag(tc, dst, '연필 끝 끌기', { steps: 10 });
      // 연필 다리와 놓을 자리가 한 화면에 있는데 끌어도 벌어진 폭이 그대로면 끌기 결함 후보 — 0.5cm 단추로 대신 맞추되 남긴다
      const vp = await page.evaluate(() => ({ w: innerWidth, h: innerHeight }));
      const inV = (p) => p && p.x >= 0 && p.y >= 4 && p.x <= vp.w && p.y <= vp.h - 4;
      if (inV(tc) && inV(dst) && (await readW()) === w) A.problem('drag-failed', `컴퍼스 연필 다리를 ${w}cm 에서 ${r}cm 자리로 끌었는데 폭이 바뀌지 않음(0.5cm 단추로 대신 맞춤)`);
      for (let k = 0; k < 24; k++) {
        w = await readW(); if (w === r) break;
        const lab = w < r ? '컴퍼스를 0.5cm 벌리기' : '컴퍼스를 0.5cm 좁히기';
        const b = page.locator(`${rt(page)} g[role=button][aria-label="${lab}"]`).first();
        if (!(await A.tap(b, lab, { hit: b.locator('.pk-hit'), wait: 80 }))) break;
      }
    }
  }
  if ((await readW()) !== r) return false;
  // 손잡이를 한 바퀴 돌려 원을 그린다
  const outer = page.locator((rt(page) + ' .cp-compass')).first();
  if (A.input === 'keyboard') {
    if (!(await A.focus(outer, '컴퍼스 손잡이'))) return false;
    await A.key('Enter', 1, 100);
    for (let i = 0; i < 20; i++) { await sleep(150); if ((await readState()).drawn) break; }
  } else {
    const O = mid(await box(page.locator((rt(page) + ' .pk-layer--center .pk-face')).first()));
    const hinge0 = mid(await box(page.locator((rt(page) + ' .cp-compass > g:not(.cp-tip):has(.pk-hit)')).first().locator('.pk-hit').first()));
    // 연필 다리가 할핀 위를 덮으므로 학생처럼 맨 위 동그란 손잡이를 잡는다(할핀 중심에서 위로 36)
    const sc0 = (await svgToScreen(page, 0, 0)).scale;
    // 맨 위 손잡이의 실제 잡는 원(.pk-hit, cy -36)을 재고 그 가운데를 잡는다
    const grip = page.locator((rt(page) + ' .cp-compass > g:not(.cp-tip) circle.pk-hit[cy="-36"]')).first();
    const gs = await hitSize(grip);
    if (A.input === 'touch' && gs && gs.min < 43.5) A.problem('touch-target-small', `컴퍼스 손잡이 ${Math.round(gs.min)}px`);
    const gb = (await grip.count()) ? await grip.boundingBox().catch(() => null) : null;
    const hinge = gb ? mid(gb) : { x: hinge0.x, y: hinge0.y - 36 * sc0 };
    const rho = 110; const phi0 = (Math.atan2(hinge.x - O.x, -(hinge.y - O.y)) * 180) / Math.PI;
    const pts = [hinge];
    for (let a = 0; a <= 375; a += 15) { const p = ((phi0 + a) * Math.PI) / 180; pts.push({ x: O.x + rho * Math.sin(p), y: O.y - rho * Math.cos(p) }); }
    await A.dragPath(pts, '손잡이 돌리기', { wait: 700 });
  }
  const s = await readState();
  return !!s.drawn && s.radius === r;
}
