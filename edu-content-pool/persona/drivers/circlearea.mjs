// 원 조각 다시 붙이기(circlearea) 조작기 — 조각 수 단추, 엇갈려 붙이기, 반지름 손잡이, 가로·세로·식 고르기, 숫자판으로 넓이 쓰기.
import { actor, nudge, sleep, box, mid, svgToScreen, fitView, rt } from './_geo-lib.mjs';

export const tools = ['circlearea'];
const PI = 3.14;

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '원'); return { reached: ok, actions: A.n, problems }; }
    const btn = (label) => page.locator(`${rt(page)} g.ca-btn[aria-label="${label}"]`).first();
    const press = (label, what, wait) => { const l = btn(label); return A.tap(l, what || label, { hit: l.locator('.pk-hit'), wait }); };
    const waitIdle = async () => { for (let i = 0; i < 30; i++) { await sleep(120); const d = await page.locator((rt(page) + ' g.ca-btn[aria-label*="조각으로 자르기"]')).first().getAttribute('aria-disabled'); if (d !== 'true') break; } await sleep(150); };
    let ok = true;
    // 조각 수·엇갈려 붙이기
    if (t.arranged != null) {
      const s = await readState();
      if (t.n != null && s.n !== t.n) { if (!(await btn(`${t.n}조각으로 자르기`).count())) { A.problem('unreachable', `${t.n}조각 단추가 없음`); return { reached: false, actions: A.n, problems }; } ok = (await press(`${t.n}조각으로 자르기`, `${t.n}조각 단추`, 250)) && ok; await waitIdle(); }
      const s2 = await readState();
      if (s2.arranged !== t.arranged) {
        ok = (await press(s2.arranged ? '다시 원으로 모으기' : '조각을 엇갈려 붙이기', '엇갈려 붙이기 단추', 250)) && ok; await waitIdle();
      }
      ok = ok && (await readState()).arranged === t.arranged;
    }
    const want = t.width || t.height || t.formula || null;
    if (want) {
      const label = t.formula ? `넓이 식: ${want}` : t.width ? `가로는 ${want}` : `세로는 ${want}`;
      if (!(await btn(label).count())) { A.problem('unreachable', `보기 '${label}' 가 화면에 없음`); return { reached: false, actions: A.n, problems }; }
      ok = (await press(label, label)) && ok;
    }
    if (t.findR != null) ok = (await setKnob(A, page, t.findR, readState, o)) && ok;
    // 넓이 쓰기: 숫자판
    const typeNum = async (text, what) => {
      if (!(await page.locator((rt(page) + ' g.ca-btn[aria-label="1"]')).count())) { A.problem('control-missing', `${what}: 숫자판이 화면에 없음(pad 옵션 없음)`); return false; }
      if (A.input === 'keyboard') {
        const first = btn('1');
        if (!(await A.focus(first, '숫자판'))) return false;
        await A.type(text); return true;
      }
      for (const ch of String(text)) { const lab = ch === '.' ? '소수점' : ch; if (!(await press(lab, `숫자 ${ch}`, 60))) return false; }
      return true;
    };
    if (t.findR != null && o.pad) { ok = (await typeNum(String(Math.round((t.area / PI) * 100) / 100), '넓이÷3.14')) && ok; }
    else if (t.findR == null && t.area != null) {
      if (o.steps) { const r = t.r != null ? t.r : (await readState()).r; ok = (await typeNum(String(r * r), '① 반지름×반지름')) && ok; }
      ok = (await typeNum(String(t.area), '넓이')) && ok;
    }
    reached = ok;
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

// 반지름 손잡이를 want(cm)에 맞춘다
async function setKnob(A, page, want, readState, o) {
  const knob = page.locator((rt(page) + ' g[aria-label="반지름 손잡이"], #tool g[aria-label="지름 손잡이"]')).first();
  if (!(await knob.count())) { A.problem('control-missing', '반지름 손잡이가 화면에 없음'); return false; }
  const rd = async () => (await readState()).r;
  let r = await rd();
  if (r === want) return true;
  if (want < 1 || want > 10) { A.problem('unreachable', `반지름 ${want}cm 가 손잡이 범위(1~10)를 벗어남`); return false; }
  if (A.input === 'keyboard') {
    if (!(await A.focus(knob, '반지름 손잡이'))) return false;
    await A.key(want > r ? 'ArrowRight' : 'ArrowLeft', Math.abs(want - r), 50);
    await sleep(300);
    return (await rd()) === want;
  }
  const dots = page.locator((rt(page) + ' .pk-layer--ui circle[r="2"]'));
  if ((await dots.count()) < 10) { A.problem('driver-limit', '손잡이 눈금을 찾지 못함'); return false; }
  await box(knob);
  const [kc, d0, d9] = await fitView(page, async () => [mid(await knob.locator('.pk-hit').first().boundingBox()), mid(await dots.nth(0).boundingBox()), mid(await dots.nth(9).boundingBox())]);
  const stepPx = (d9.x - d0.x) / 9;
  if (A.input === 'touch') { const sc = (await svgToScreen(page, 0, 0)).scale; if (48 * sc < 44) A.problem('touch-target-small', `손잡이 잡는 곳 ${Math.round(48 * sc)}px`); }
  await A.drag(kc, { x: kc.x + (want - r) * stepPx, y: kc.y }, '반지름 손잡이 끌기', { steps: 12 });
  r = await rd();
  return r === want;
}
