// 종이 각도기(protractor) 조작기 — 띠 돌려 각 만들기, 눈금 읽어 각도 정하기(재기), 각도기 맞추기(옮기고 돌린 뒤 재기).
import { actor, nudge, sleep, svgToScreen, box, mid, rt } from './_geo-lib.mjs';

export const tools = ['protractor'];

// target 에서 만들 각도를 정한다(kind 만 있으면 그 종류에 드는, step 의 배수)
function wantAngle(t, step) {
  if (t.angle != null) return t.angle;
  const ok = (a) => {
    if (t.kind === '예각') return a > 0 && a < 90;
    if (t.kind === '직각') return a === 90;
    if (t.kind === '둔각') return a > 90 && a < 180;
    return true;
  };
  const lo = t.min != null ? t.min : -Infinity; const hi = t.max != null ? t.max : Infinity;
  const c = []; for (let a = step; a < 180; a += step) if (ok(a) && a > lo && a < hi) c.push(a);
  if (!c.length) return null;
  return c[Math.floor(c.length / 2)];
}

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const step = o.step || 5; const base = o.base === 'left' ? 'left' : 'right';
  const place = !!o.place; const measure = place || !!o.measure;
  const tol = o.tolerance ?? (step <= 1 ? 1 : 0);
  let reached = false;
  try {
    if (!target || (t.angle == null && !t.kind)) { const ok = await nudge(A, readState, '각도기'); return { reached: ok, actions: A.n, problems }; }
    const a = wantAngle(t, step);
    if (a == null) { A.problem('unreachable', `목표(${JSON.stringify(t)})에 드는 각도가 단계(${step}°)로 만들어지지 않음`); return { reached: false, actions: A.n, problems }; }
    if (place) await placeProtractor(A, page, o, readState);
    if (measure) {
      reached = await measureEntry(A, page, a, readState);
    } else {
      reached = await turnArm(A, page, { a, step, base, tol }, readState);
    }
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

const stepButtons = (page, step) => {
  const ds = step === 1 ? [-10, -1, 1, 10] : [-step, step];
  return ds.map((d) => ({ d, loc: page.locator(`${rt(page)} g[role=button][aria-label="각을 ${Math.abs(d)}도 ${d > 0 ? '벌리기' : '좁히기'}"]`).first() }));
};

async function turnArm(A, page, { a, step, base, tol }, readState) {
  const read = async () => (await readState()).angle;
  const arm = page.locator((rt(page) + ' .pk-arm')).first();
  if (!(await arm.count())) { A.problem('control-missing', '움직이는 종이 띠가 화면에 없음'); return false; }
  let cur = await read();
  if (Math.abs(cur - a) <= tol) return true;
  if (A.input === 'keyboard') {
    if (!(await A.focus(arm, '움직이는 종이 띠'))) return false;
    const d = a - cur;
    if (d % step !== 0) { A.problem('driver-limit', `각도 차 ${d}° 가 단계 ${step}° 의 배수가 아님`); return false; }
    const big = Math.floor(Math.abs(d) / (step * 5)); const small = Math.abs(d) / step - big * 5;
    await A.key(d > 0 ? 'PageUp' : 'PageDown', big, 40);
    await A.key(d > 0 ? 'ArrowRight' : 'ArrowLeft', small, 40);
    await sleep(350);
  } else {
    const center = mid(await box(page.locator((rt(page) + ' .pk-layer--brad .pk-face')).first()));
    const hit = page.locator((rt(page) + ' .pk-arm .pk-hit')).first();
    const hb = await hit.boundingBox(); const hc = mid(hb);
    if (A.input === 'touch') {
      const sc = (await svgToScreen(page, 0, 0)).scale;
      if (52 * sc < 44) A.problem('touch-target-small', `움직이는 띠 잡는 곳 폭 ${Math.round(52 * sc)}px`);
    }
    const R = Math.hypot(hc.x - center.x, hc.y - center.y);
    const phi0 = (Math.atan2(hc.x - center.x, -(hc.y - center.y)) * 180) / Math.PI;
    const sgn = base === 'left' ? 1 : -1;
    const phi1 = sgn * (a - 90);
    const n = Math.max(2, Math.ceil(Math.abs(phi1 - phi0) / 10)); const pts = [];
    for (let i = 0; i <= n; i++) { const p = ((phi0 + ((phi1 - phi0) * i) / n) * Math.PI) / 180; pts.push({ x: center.x + R * Math.sin(p), y: center.y - R * Math.cos(p) }); }
    await A.dragPath(pts, '띠 돌리기', { wait: 600 });
    // 어긋난 만큼 단추로 마저 맞춘다
    for (let k = 0; k < 40; k++) {
      cur = await read(); const d = a - cur;
      if (Math.abs(d) <= tol) break;
      const btns = stepButtons(page, step).filter((b) => (b.d > 0) === (d > 0));
      const best = btns.sort((x, y) => Math.abs(Math.abs(d) - Math.abs(x.d)) - Math.abs(Math.abs(d) - Math.abs(y.d)))[0];
      const useful = btns.filter((b) => Math.abs(b.d) <= Math.abs(d)).sort((x, y) => Math.abs(y.d) - Math.abs(x.d))[0] || best;
      if (!(await A.tap(useful.loc, '각 조절 단추', { hit: useful.loc.locator('.pk-hit'), wait: 120 }))) break;
    }
  }
  cur = await read();
  return Math.abs(cur - a) <= tol;
}

async function measureEntry(A, page, a, readState) {
  const btn = (d) => page.locator(`${rt(page)} g[role=button][aria-label="각도 ${Math.abs(d)}도 ${d > 0 ? '늘리기' : '줄이기'}"]`).first();
  let entry = (await readState()).entry;
  let cur = entry == null ? 0 : entry;
  const press = async (d, times) => { for (let i = 0; i < times; i++) { if (!(await A.tap(btn(d), `각도 ${d > 0 ? '+' : '−'}${Math.abs(d)} 단추`, { hit: btn(d).locator('.pk-hit'), wait: 70 }))) return false; } return true; };
  if (entry == null && a === 0) return false;
  const diff = a - cur;
  if (entry == null) { if (!(await press(diff >= 0 ? 10 : -10, 0))) return false; }
  const d10 = Math.trunc(diff / 10); const d1 = diff - d10 * 10;
  if (!(await press(d10 > 0 ? 10 : -10, Math.abs(d10)))) return false;
  if (!(await press(d1 > 0 ? 1 : -1, Math.abs(d1)))) return false;
  if (entry == null && diff === 0) await press(1, 0);
  entry = (await readState()).entry;
  return entry === a;
}

async function placeProtractor(A, page, o, readState) {
  const base = o.base === 'left' ? 'left' : 'right'; const tilt = o.tilt ?? 30; const tiltRot = base === 'right' ? -tilt : tilt;
  const s0 = (await readState()).place || { x: 0, y: 0, r: 0 };
  const PL = page.locator((rt(page) + ' .pk-layer--protractor')).first();
  if (!(await PL.count())) { A.problem('control-missing', '종이 각도기 조각이 화면에 없음'); return false; }
  if (Math.hypot(s0.x, s0.y) > 6) {
    if (A.input === 'keyboard') {
      if (!(await A.focus(PL, '종이 각도기'))) return false;
      const nx = Math.round(-s0.x / 10); const ny = Math.round(-s0.y / 10);
      if (Math.hypot(s0.x + nx * 10, s0.y + ny * 10) > 6) { A.problem('driver-limit', `방향키 10 단위로는 중심을 할핀에 맞출 수 없음(처음 자리 ${s0.x},${s0.y})`); }
      await A.key(nx > 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(nx), 25);
      await A.key(ny > 0 ? 'ArrowDown' : 'ArrowUp', Math.abs(ny), 25);
      await A.key('Enter', 1, 200);
    } else {
      const c0 = mid(await box(page.locator((rt(page) + ' .pk-layer--brad .pk-face')).first()));
      const sc = (await svgToScreen(page, 0, 0)).scale;
      const pc = { x: c0.x + s0.x * sc, y: c0.y + s0.y * sc };
      const rr = ((s0.r || 0) * Math.PI) / 180;
      for (const off of [[0, -30], [0, -8], [-30, -10], [30, -10]]) {
        const gx = pc.x + (off[0] * Math.cos(rr) - off[1] * Math.sin(rr)) * sc; const gy = pc.y + (off[0] * Math.sin(rr) + off[1] * Math.cos(rr)) * sc;
        await A.drag({ x: gx, y: gy }, { x: gx - s0.x * sc, y: gy - s0.y * sc }, '각도기 끌기', { wait: 450 });
        const s1 = (await readState()).place || s0;
        if (Math.hypot(s1.x, s1.y) <= 6) break;
      }
    }
  }
  // 돌리기: 밑금을 고정 띠에 맞춘다
  const cur = ((await readState()).place || s0).r || 0;
  let need = ((tiltRot - cur + 540) % 360) - 180; // (-180, 180]
  const n = Math.round(need / 15);
  const left = page.locator((rt(page) + ' g[role=button][aria-label="각도기를 왼쪽으로 15도 돌리기"]')).first();
  const right = page.locator((rt(page) + ' g[role=button][aria-label="각도기를 오른쪽으로 15도 돌리기"]')).first();
  const b = n > 0 ? right : left;
  for (let i = 0; i < Math.abs(n); i++) if (!(await A.tap(b, '각도기 돌리기 단추', { hit: b.locator('.pk-hit'), wait: 80 }))) return false;
  return true;
}
