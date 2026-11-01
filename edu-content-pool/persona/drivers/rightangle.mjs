// 종이 직각(rightangle) 조작기 — 띠 돌려 직각·작은 각·큰 각 만들기, 삼각자 대 보고 고르기, 두 각 견주기, 꼭짓점·변 누르기.
import { actor, nudge, sleep, svgToScreen, box, mid, rt, hitSize } from './_geo-lib.mjs';
void svgToScreen;

export const tools = ['rightangle'];

const JUDGE_LABEL = { less: '직각보다 작아요', right: '직각이에요', more: '직각보다 커요' };
const BIGGER_LABEL = { 가: '가가 더 커요', 나: '나가 더 커요', same: '크기가 같아요' };

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const mode = ['judge', 'compare', 'parts'].includes(o.mode) ? o.mode : 'make';
  const step = o.step || 15;
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '직각'); return { reached: ok, actions: A.n, problems }; }
    const btn = (label) => page.locator(`${rt(page)} g[role=button][aria-label="${label}"]`).first();
    const press = (label, what) => { const l = btn(label); return A.tap(l, what, { hit: l.locator('.pk-hit') }); };
    if (mode === 'make') {
      let a;
      if (t.right) a = 90;
      else if (t.kind === 'less' || t.kind === 'more') {
        const c = []; for (let x = step; x < 180; x += step) if (t.kind === 'less' ? x < 90 : x > 90) c.push(x);
        const want = t.kind === 'less' ? 45 : 135; a = c.sort((p, q) => Math.abs(p - want) - Math.abs(q - want))[0];
      }
      if (a == null) { A.problem('driver-limit', `목표 ${JSON.stringify(t)} 를 만드는 방법을 모름`); return { reached: false, actions: A.n, problems }; }
      if (t.right && 90 % step !== 0) { A.problem('unreachable', `돌리기 단위 ${step}° 로는 직각(90°)을 만들 수 없음`); return { reached: false, actions: A.n, problems }; }
      reached = await makeAngle(A, page, a, step, readState);
      // 삼각자를 대 보는 것은 학생의 자연스러운 확인 — 있으면 눌러 본다
      if (o.square !== false && (await btn('종이 삼각자를 꼭짓점에 대 보기').count())) await press('종이 삼각자를 꼭짓점에 대 보기', '삼각자 대 보기 단추');
    } else if (mode === 'judge') {
      if (o.square === false || !(await btn('종이 삼각자를 꼭짓점에 대 보기').count())) { A.problem('unreachable', '삼각자 대 보기 단추가 없어 판단을 열 수 없음'); return { reached: false, actions: A.n, problems }; }
      let ok = await press('종이 삼각자를 꼭짓점에 대 보기', '삼각자 대 보기 단추');
      ok = (await press(JUDGE_LABEL[t.judge], `'${JUDGE_LABEL[t.judge]}' 단추`)) && ok;
      reached = ok && (await readState()).choice === t.judge;
    } else if (mode === 'compare') {
      if (await btn('가의 각을 본떠 나 위에 겹쳐 보기').count()) { await press('가의 각을 본떠 나 위에 겹쳐 보기', '겹쳐 보기 단추'); await sleep(900); }
      const ok = await press(BIGGER_LABEL[t.bigger], `'${BIGGER_LABEL[t.bigger]}' 단추`);
      reached = ok && (await readState()).choice === t.bigger;
    } else {
      const label = t.part === 'vertex' ? '할핀이 있는 점' : '초록 띠';
      const l = btn(label); let ok;
      if (A.input === 'touch') { ok = await A.tap(l, label, { hit: l.locator('.pk-hit').first() }); } else ok = await A.tap(l, label);
      reached = ok && (await readState()).part === t.part;
    }
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

async function makeAngle(A, page, a, step, readState) {
  const read = async () => (await readState()).angle;
  const arm = page.locator((rt(page) + ' .ra-arm')).first();
  if (!(await arm.count())) { A.problem('control-missing', '움직이는 종이 띠가 화면에 없음'); return false; }
  if ((await read()) === a) return true;
  if (A.input === 'keyboard') {
    if (!(await A.focus(arm, '움직이는 종이 띠'))) return false;
    // 키 한 번은 먼저 단위 눈금에 맞춘 뒤 한 칸 움직인다 — 눌러 가며 읽는다
    for (let i = 0; i < 24; i++) {
      const cur = await read(); if (cur === a) break;
      await A.key(a > cur ? 'ArrowLeft' : 'ArrowRight', 1, 60); // 값이 커지면 각은 작아진다
    }
    await sleep(350);
    return (await read()) === a;
  }
  for (let attempt = 0; attempt < 3; attempt++) {
    const cur = await read(); if (cur === a) return true;
    const center = mid(await box(page.locator((rt(page) + ' .ra-vertex .pk-face')).first()));
    const hc = mid(await page.locator((rt(page) + ' .ra-arm .pk-hit')).first().boundingBox());
    if (A.input === 'touch') { const hs = await hitSize(page.locator((rt(page) + ' .ra-arm .pk-hit')).first()); if (hs && hs.min < 43.5) A.problem('touch-target-small', `움직이는 띠 잡는 곳 폭 ${Math.round(hs.min)}px`); }
    const R = Math.hypot(hc.x - center.x, hc.y - center.y);
    const phi0 = (Math.atan2(hc.x - center.x, -(hc.y - center.y)) * 180) / Math.PI;
    const phi1 = phi0 + (cur - a); // 각이 커지면 띠는 시계 반대 방향으로
    const n = Math.max(2, Math.ceil(Math.abs(phi1 - phi0) / 10)); const pts = [];
    for (let i = 0; i <= n; i++) { const p = ((phi0 + ((phi1 - phi0) * i) / n) * Math.PI) / 180; pts.push({ x: center.x + R * Math.sin(p), y: center.y - R * Math.cos(p) }); }
    await A.dragPath(pts, '띠 돌리기', { wait: 600 });
  }
  return (await read()) === a;
}
