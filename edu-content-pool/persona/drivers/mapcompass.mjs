// 종이 지도와 나침반(mapcompass) 조작기 — 방위 단추 누르기, 기호 스티커를 범례 빈칸·지도 빈 터에 붙이기.
import { actor, nudge, sleep, fitView, box, mid, touchTap, rt } from './_geo-lib.mjs';

export const tools = ['mapcompass'];
const DIRS = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
const PLACES = [
  { name: '병원', sym: 'cross', x: 92, y: 82 }, { name: '시청', sym: 'dcircle', x: 182, y: 82 }, { name: '우체국', sym: 'envelope', x: 272, y: 82 },
  { name: '경찰서', sym: 'shield', x: 92, y: 172 }, { name: '학교', sym: 'flag', x: 182, y: 172 }, { name: '공원', sym: 'tree', x: 272, y: 172 },
  { name: '소방서', sym: 'fire', x: 92, y: 262 }, { name: '도서관', sym: 'book', x: 182, y: 262 }, { name: '기차역', sym: 'rail', x: 272, y: 262 },
];
const byName = Object.fromEntries(PLACES.map((p) => [p.name, p]));
const SYM_SHAPE = { cross: '더하기(+) 모양', dcircle: '겹동그라미 모양', envelope: '편지 봉투 모양', shield: '방패 모양', flag: '깃발 모양', tree: '나무 모양', fire: '불꽃 모양', book: '펼친 책 모양', rail: '철길 모양' };
const ROWS = { 82: '위', 172: '가운데', 262: '아래' }; const COLS = { 92: '왼쪽', 182: '가운데', 272: '오른쪽' };
const spotOf = (p) => (p.x === 182 && p.y === 172 ? '지도 한가운데' : `지도 ${COLS[p.x]} ${ROWS[p.y]}`);
const norm = (a) => ((a % 360) + 360) % 360;
const dirOf = (from, to, rr = 0) => DIRS[Math.round(norm((Math.atan2(to.x - from.x, -(to.y - from.y)) * 180) / Math.PI - rr) / 45) % 8];

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const mode = o.mode === 'legend' ? 'legend' : o.mode === 'place' ? 'place' : 'direction';
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '지도'); return { reached: ok, actions: A.n, problems }; }
    if (mode === 'direction') {
      if (!t.direction) { A.problem('driver-limit', '방위 문항 target 에 direction 이 없음'); return { reached: false, actions: A.n, problems }; }
      if (!DIRS.includes(t.direction)) { A.problem('unreachable', `방위 '${t.direction}' 단추가 없음`); return { reached: false, actions: A.n, problems }; }
      if ((o.points === 4) && t.direction.length === 2) { A.problem('unreachable', `4방위 지도라 '${t.direction}' 단추가 없음`); return { reached: false, actions: A.n, problems }; }
      const b = page.locator(`${rt(page)} g.mc-dirbtn[aria-label^="${t.direction}쪽"]`).first();
      if (!(await b.count())) { A.problem('control-missing', `방위 단추 '${t.direction}쪽' 이 화면에 없음`); return { reached: false, actions: A.n, problems }; }
      const ok = await A.tap(b, `방위 단추 ${t.direction}`, { hit: b.locator('.pk-hit').first() });
      const dir = (await readState()).dir;
      reached = ok && (dir === t.direction || dir === DIRS.indexOf(t.direction) * 45 || String(dir).startsWith(t.direction));
    } else if (mode === 'legend') {
      const want = t.legend || {}; let ok = true;
      for (const [name, sym] of Object.entries(want)) {
        const slot = page.locator(`${rt(page)} .mc-slot-hit`); // 빈칸 줄 — 이름 순서로 찾는다
        const label = `${name} 빈칸`;
        const circle = page.locator(`${rt(page)} [aria-label="${label}"]`).first();
        if (!(await circle.count())) { A.problem('control-missing', `범례 빈칸 '${label}' 이 화면에 없음`); ok = false; continue; }
        ok = (await place(A, page, sym, async () => circleHit(page, name, o), `범례 ${name}`)) && ok;
        void slot;
      }
      const lg = (await readState()).legend || {};
      reached = ok && Object.entries(want).every(([n, s]) => lg[n] === s);
    } else {
      const want = t.place || {}; let ok = true;
      const rr = o.roseRotate || 0; const hidden = o.hidden || [];
      for (const [name, sym] of Object.entries(want)) {
        // 같은 방향 자리면 어느 빈 터든 된다 — 학교가 아니라 from 에서 본 방향
        let lots = [name];
        if (t.from && t.direction && byName[t.from]) lots = hidden.filter((n) => byName[n] && dirOf(byName[t.from], byName[n], rr) === t.direction);
        const lot = lots.find((n) => hidden.includes(n)) || null;
        if (!lot) { A.problem('unreachable', `${t.from || ''}에서 ${t.direction || ''}쪽에 스티커를 붙일 빈 터가 없음(빈 터: ${hidden.join(',')})`); ok = false; continue; }
        ok = (await place(A, page, sym, async () => lotHit(page, byName[lot]), `빈 터 ${lot}`)) && ok;
      }
      const pl = (await readState()).place || {};
      reached = ok && Object.entries(want).every(([n, s]) => Object.values(pl).includes(s) || pl[n] === s);
    }
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

// 범례 빈칸: 이름 옆 빈 동그라미의 화면 자리(스티커를 놓을 자리)
async function circleHit(page, name) {
  const c = page.locator(`${rt(page)} [aria-label="${name} 빈칸"]`).first();
  return { loc: c };
}
async function lotHit(page, p) {
  const lots = page.locator((rt(page) + ' g.mc-bld'));
  const n = await lots.count();
  for (let i = 0; i < n; i++) { const lab = (await lots.nth(i).getAttribute('aria-label')) || ''; if (lab.startsWith('빈 터') && lab.includes(spotOf(p))) return { loc: lots.nth(i) }; }
  return { loc: null };
}

// 스티커 sym 을 골라 자리에 붙인다. 마우스: 끌어 놓기, 터치: 눌러 고르고 자리 누르기, 키보드: 스티커에서 방향키·Enter
async function place(A, page, sym, getSlot, what) {
  const sticker = page.locator(`${rt(page)} g.mc-sticker[aria-label="${SYM_SHAPE[sym] || '기호'} 기호 스티커"]`).first();
  if (!(await sticker.count())) { A.problem('unreachable', `${what}: 스티커 '${SYM_SHAPE[sym] || sym}' 가 쟁반에 없음`); return false; }
  const { loc } = await getSlot();
  if (!loc) { A.problem('control-missing', `${what}: 붙일 자리가 화면에 없음`); return false; }
  if (A.input === 'keyboard') {
    if (!(await A.focus(sticker, `스티커(${SYM_SHAPE[sym]})`))) return false;
    // Enter 는 다음 빈칸으로 차례로 옮긴다 — 원하는 자리에 닿을 때까지 누른다
    const sb = async () => ((await loc.getAttribute('aria-label')) || '');
    void sb;
    const slotName = what.replace(/^(범례|빈 터) /, '');
    for (let i = 0; i < 12; i++) {
      A.count(); await page.keyboard.press('Enter'); await sleep(350);
      const st = await A.page.evaluate(() => (window.__pl.tool.getState()));
      const at = (st.legend && st.legend[slotName]) || (st.place && st.place[slotName]);
      if (at === sym) return true;
      const placed = st.legend || st.place || {};
      if (Object.entries(placed).some(([k, v]) => v === sym && k === slotName)) return true;
    }
    return true;
  }
  if (!(await box(sticker))) return false;
  const sh = sticker.locator('.pk-hit').first(); const hb0 = await sh.boundingBox();
  if (A.input === 'touch' && Math.min(hb0.width, hb0.height) < 44) A.problem('touch-target-small', `스티커 ${Math.round(hb0.width)}px`);
  const [from, to] = await fitView(page, async () => [mid(await sh.boundingBox()), mid(await loc.boundingBox())]);
  if (A.input === 'touch') {
    A.count(); await touchTap(page, from.x, from.y); await sleep(200);
    A.count(); await touchTap(page, to.x, to.y); await sleep(500);
  } else await A.drag(from, to, `스티커 끌기 → ${what}`, { steps: 14, wait: 500 });
  return true;
}
