// 원기둥 펼치기(cylnet) 조작기 — 반지름·높이 단추, 펼치기, 옆면 부분 고르기, 가로 길이 쓰기, 바른 전개도 고르기.
import { actor, nudge, sleep, rt } from './_geo-lib.mjs';

export const tools = ['cylnet'];

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '원기둥'); return { reached: ok, actions: A.n, problems }; }
    const rMax = o.rMax || 6;
    const stepBtn = (d) => page.locator(`${rt(page)} .cy-step [aria-label="밑면의 반지름 ${d > 0 ? '늘리기' : '줄이기'}"]`).first();
    const setR = async (want) => {
      if (want > rMax) { A.problem('unreachable', `반지름 ${want}cm 가 반지름 조절 한계(${rMax}cm)보다 큼`); return false; }
      for (let k = 0; k < 30; k++) {
        const r = (await readState()).r; if (r === want) return true;
        const b = stepBtn(want - r);
        if (!(await b.count())) { A.problem('control-missing', '밑면의 반지름 + − 단추가 화면에 없음(fixed 판)'); return false; }
        if (!(await A.tap(b, `반지름 ${want > r ? '늘리기' : '줄이기'} 단추`, { wait: 120 }))) return false;
      }
      return false;
    };
    let ok = true;
    if (t.judge != null) {
      const radios = page.locator((rt(page) + ' .cy-picks[role=radiogroup] [role=radio]'));
      if (!(await radios.count())) { A.problem('control-missing', '전개도 가·나·다 고르기가 화면에 없음'); return { reached: false, actions: A.n, problems }; }
      ok = await A.choose(radios, t.judge, '전개도 고르기');
      ok = ok && (await readState()).judge === t.judge;
    } else if (t.findR) {
      ok = await setR(t.r);
      const input = page.locator((rt(page) + ' input.cy-in'));
      if (ok && (await input.count())) ok = await A.fill(input.first(), 2 * t.r, '지름 쓰는 칸');
      else if (ok && o.pad) { A.problem('control-missing', '지름을 쓰는 칸이 화면에 없음'); ok = false; }
    } else if (typeof t.width === 'number') {
      const input = page.locator((rt(page) + ' input.cy-in'));
      if (!(await input.count())) { A.problem('control-missing', '옆면의 가로를 쓰는 칸(pad)이 화면에 없음'); return { reached: false, actions: A.n, problems }; }
      ok = await A.fill(input.first(), t.width, '가로 길이 칸');
    } else if (t.unrolled != null) {
      if (t.r != null) ok = (await setR(t.r)) && ok;
      const toggle = page.locator((rt(page) + ' .cy-b--main')).first();
      if ((await readState()).unrolled !== t.unrolled) {
        ok = (await A.tap(toggle, t.unrolled ? '펼치기 단추' : '다시 말기 단추', { wait: 300 })) && ok;
        for (let i = 0; i < 30; i++) { await sleep(150); if ((await toggle.getAttribute('aria-disabled')) !== 'true') break; }
        await sleep(200);
      }
      const want = typeof t.width === 'string' ? t.width : typeof t.height === 'string' ? t.height : null;
      if (want) {
        const radios = page.locator((rt(page) + ' .cy-picks[role=radiogroup] [role=radio]'));
        const n = await radios.count(); let idx = -1;
        for (let i = 0; i < n; i++) if ((await radios.nth(i).textContent()).trim() === want) idx = i;
        if (idx < 0) { A.problem('unreachable', `보기에 '${want}' 가 없음`); return { reached: false, actions: A.n, problems }; }
        ok = (await A.choose(radios, idx, '옆면 부분 고르기')) && ok;
      }
    } else A.problem('driver-limit', `목표 ${JSON.stringify(t)} 를 만드는 방법을 모름`);
    const s = await readState();
    if (t.unrolled != null) ok = ok && s.unrolled === t.unrolled;
    reached = ok;
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}
