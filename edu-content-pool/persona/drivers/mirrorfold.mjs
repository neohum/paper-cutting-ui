// 선대칭 접기 종이(mirrorfold) 조작기 — 대응점 핀을 모눈 교점으로 끌거나 방향키로 옮기고, 고르기 칸에 답한다.
import { actor, answerAsk, nudge, sleep, svgToScreen, fitView, rt, hitSize, touchTap } from './_geo-lib.mjs';

export const tools = ['mirrorfold'];
const NAMES = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ'];
const OX = 20; const OY = 20; const C = 36;

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '선대칭 종이'); return { reached: ok, actions: A.n, problems }; }
    const COLS = o.cols || 10; const ROWS = o.rows || 7; const vAxis = o.axis !== 'h';
    const ax = o.at != null ? o.at : (vAxis ? COLS / 2 : ROWS / 2);
    const half = (o.half || [[ax, 1], [ax - 3, 3], [ax - 2, 3], [ax - 2, 6], [ax, 6]]);
    const dist = (p) => (vAxis ? p[0] - ax : p[1] - ax);
    const mirror = (p) => (vAxis ? [2 * ax - p[0], p[1]] : [p[0], 2 * ax - p[1]]);
    const verts = half.map((p, i) => ({ id: NAMES[i], p, onAxis: dist(p) === 0 }));
    const off = verts.filter((v) => !v.onAxis);
    const movable = new Set(Array.isArray(o.only) ? o.only : off.map((v) => v.id));
    const pinIds = off.filter((v) => movable.has(v.id)).map((v) => v.id);
    let ok = true;
    const want = t.complete ? pinIds : (t.pins || []);
    if (!o.readOnly && want.length) {
      const goals = [];
      for (const id of want) {
        const v = verts.find((x) => x.id === id);
        if (!v || !pinIds.includes(id)) { A.problem('unreachable', `핀 ${id}' 이(가) 이 판에 없음(핀: ${pinIds.join(',')})`); return { reached: false, actions: A.n, problems }; }
        const q = mirror(v.p);
        if (!Number.isInteger(q[0]) || !Number.isInteger(q[1]) || q[0] < 0 || q[0] > COLS || q[1] < 0 || q[1] > ROWS) { A.problem('unreachable', `대응점 ${id}' 자리 (${q}) 가 모눈 교점이 아니거나 모눈 밖`); return { reached: false, actions: A.n, problems }; }
        goals.push({ id, q });
      }
      for (const { id, q } of goals) ok = (await movePin(A, page, id, q, readState)) && ok;
      const pins = (await readState()).pins || {};
      ok = ok && goals.every(({ id, q }) => pins[id] && pins[id][0] === q[0] && pins[id][1] === q[1]);
    }
    const pickIdx = t.ask != null ? t.ask : t.pick;
    if (pickIdx != null) {
      const r = await answerAsk(A, page, { pick: pickIdx }, { radios: page.locator((rt(page) + ' .mf-ask [role=radio]')), label: '고르기 칸' }, readState);
      ok = ok && r.ok;
    }
    reached = ok;
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

async function movePin(A, page, id, q, readState) {
  const pin = page.locator(`${rt(page)} .mf-pin[aria-label="점 ${id}'"]`).first();
  if (!(await pin.count())) { A.problem('control-missing', `핀 ${id}' 이(가) 화면에 없음`); return false; }
  const h = await pin.elementHandle();
  const pk = () => h.evaluate((el) => ({ x: el.__pk.x, y: el.__pk.y }));
  if (A.input === 'keyboard') {
    if (!(await A.focus(pin, `핀 ${id}'`))) return false;
    const cur = await pk(); const gc = Math.round((cur.x - OX) / C); const gr = Math.round((cur.y - OY) / C);
    await A.key(q[0] > gc ? 'ArrowRight' : 'ArrowLeft', Math.abs(q[0] - gc), 12);
    await A.key(q[1] > gr ? 'ArrowDown' : 'ArrowUp', Math.abs(q[1] - gr), 12);
    await A.key('Enter', 1, 300);
    return true;
  }
  const placed = async () => { const p = ((await readState()).pins || {})[id]; return !!p && p[0] === q[0] && p[1] === q[1]; };
  if (A.input === 'touch') { const hs = await hitSize(pin.locator('.pk-hit').first()); if (hs && hs.min < 43.5) A.problem('touch-target-small', `핀 ${id}' 잡는 곳 ${Math.round(hs.min)}px`); }
  // 1) 끌기 — 핀과 놓을 교점이 한 화면에 함께 들어올 때만(200% 확대처럼 둘이 한 화면에 안 들어오면 끌 수 없다)
  const cur = await pk();
  const [from, to] = await fitView(page, async () => [await svgToScreen(page, cur.x, cur.y), await svgToScreen(page, OX + q[0] * C, OY + q[1] * C)]);
  const inView = (p) => p && p.y >= 4 && p.y <= p.vh - 4 && p.x >= 0 && p.x <= p.vw;
  if (inView(from) && inView(to)) {
    const pinAt = async () => JSON.stringify(((await readState()).pins || {})[id] ?? null);
    const before = await pinAt();
    await A.drag(from, to, `핀 ${id}' 끌기`);
    if (await placed()) return true;
    // 두 점이 한 화면에 있는데 끌어도 핀이 그대로면 끌기 결함 후보다 — 눌러 고르기로 끝까지 가되 감추지 않는다
    if ((await pinAt()) === before) A.problem('drag-failed', `핀 ${id}' 을(를) 교점 (${q}) 로 끌었는데 핀이 움직이지 않음(눌러 고르기로 대신 진행)`);
  }
  // 2) 눌러 고르고 눌러 놓기 — 핀을 누르면 골라지고(aria-pressed=true), 스크롤해서 놓을 교점을 누른다. 좌표는 스크롤 뒤에 다시 잰다
  // 끌기가 움직임 없이 끝나면 교구가 그것을 '누르기'로 받아 핀이 이미 골라져 있을 수 있다 — 그때 다시 누르면 고르기가 풀린다
  if ((await pin.getAttribute('aria-pressed')) !== 'true' && !(await A.tap(pin, `핀 ${id}'`, { hit: pin.locator('.pk-hit').first() }))) return false;
  if ((await pin.getAttribute('aria-pressed')) !== 'true') { A.problem('ui-error', `핀 ${id}' 을(를) 눌러도 골라지지 않음(끌기를 못 하는 화면에서 놓을 길이 없음)`); return false; }
  const [dst] = await fitView(page, async () => [await svgToScreen(page, OX + q[0] * C, OY + q[1] * C)]);
  A.count();
  if (A.input === 'touch') await touchTap(page, dst.x, dst.y); else await page.mouse.click(dst.x, dst.y);
  await sleep(320);
  return placed();
}
