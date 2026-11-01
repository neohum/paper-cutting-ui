// 레이어드 종이 지도(map) 조작기 — 핀 꽂기(끌기·칸 누르기·방향키), 방위표 돌리고 방위 고르기, 범례 빈칸 채우기, 축척 거리 넣기, 보기 고르기.
import { actor, answerAsk, nudge, sleep, svgToScreen, fitView, box, mid, touchTap, rt } from './_geo-lib.mjs';

export const tools = ['map'];
const DIRS8 = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
const DIRS4 = ['북', '동', '남', '서'];
const ICON_NAME = { school: '학교', hospital: '병원', post: '우체국', police: '경찰서', fire: '소방서', office: '시청', park: '공원', mountain: '산', temple: '절', heritage: '문화유산', museum: '박물관', station: '기차역', bus: '버스 터미널', market: '시장', library: '도서관', house: '집', apartment: '아파트', factory: '공장', field: '논', orchard: '과수원', port: '항구', airport: '공항', bridge: '다리', beach: '해수욕장', city: '도시', capital: '수도', island: '섬', forest: '숲', lighthouse: '등대', castle: '성', dot: '장소' };
const norm = (a) => ((a % 360) + 360) % 360;

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const mode = ['terrain', 'compass', 'legend', 'scale'].includes(o.mode) ? o.mode : 'pin';
  const [COLS, ROWS] = Array.isArray(o.grid) ? o.grid : [6, 4];
  const places = (o.places || []).filter((p) => p && p.name && Array.isArray(p.at)).map((p) => ({ name: String(p.name), icon: ICON_NAME[p.icon] ? p.icon : 'dot', at: p.at, legend: p.legend != null && String(p.legend).trim() ? String(p.legend) : null }));
  const placeBy = (n) => places.find((p) => p.name === n) || null;
  const north = norm(Number(o.north) || 0);
  const points = o.points === 4 ? 4 : 8;
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '지도'); return { reached: ok, actions: A.n, problems }; }
    let ok = true; let did = false;
    const pinKey = Array.isArray(t.at) || t.place || t.region || t.most || t.least || (t.from && t.dir) || t.highest || t.lowest || Number.isFinite(t.height) || t.river || t.sea;
    if ((mode === 'pin' || mode === 'terrain') && pinKey) { did = true; ok = (await pin(A, page, o, t, { COLS, ROWS, places, placeBy, north, points }, readState)) && ok; }
    else if (mode === 'compass' && (t.dir || t.align || (t.from && t.to))) { did = true; ok = (await compass(A, page, o, t, { placeBy, north, points }, readState)) && ok; }
    else if (mode === 'legend') { did = true; ok = (await legend(A, page, o, t, places, readState)) && ok; }
    else if (mode === 'scale' && (Number.isFinite(t.dist) || (t.from && t.to))) { did = true; ok = (await scale(A, page, o, t, placeBy, readState)) && ok; }
    if (t.pick != null) {
      did = true;
      const r = await answerAsk(A, page, { pick: t.pick }, { radios: page.locator((rt(page) + ' [role=radiogroup] [data-pick]')), label: '보기 고르기' }, readState);
      ok = ok && r.ok && (await readState()).pick === t.pick;
    }
    if (!did) A.problem('driver-limit', `목표 ${JSON.stringify(t)} 를 만드는 방법을 모름`);
    reached = did && ok;
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

function pinCells(o, t, { COLS, ROWS, placeBy, north, points }) {
  const inMap = (c, r) => c >= 0 && r >= 0 && c < COLS && r < ROWS;
  const heights = Array.isArray(o.heights) ? o.heights : null;
  const hAt = (c, r) => (heights && heights[r] && Number.isFinite(heights[r][c]) ? heights[r][c] : null);
  const all = []; for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) all.push([c, r]);
  const regions = (o.regions || []).filter((g) => g && g.name && Array.isArray(g.cells));
  const seaSet = new Set((o.sea || []).map((x) => `${x[0]},${x[1]}`));
  if (heights) heights.forEach((row, r) => row.forEach((v, c) => { if (v < 0) seaSet.add(`${c},${r}`); }));
  const riverSet = new Set(); (o.rivers || []).filter(Array.isArray).forEach((ln) => ln.forEach((x) => riverSet.add(`${x[0]},${x[1]}`)));
  if (Array.isArray(t.at)) return [[t.at[0], t.at[1]]];
  if (t.place) { const p = placeBy(t.place); return p ? [p.at] : []; }
  if (t.region) { const g = regions.find((x) => x.name === t.region); return g ? g.cells : []; }
  if (t.most || t.least) {
    const vs = regions.filter((g) => g.value != null); if (!vs.length) return [];
    const v = t.most ? Math.max(...vs.map((g) => g.value)) : Math.min(...vs.map((g) => g.value));
    return vs.filter((g) => g.value === v).flatMap((g) => g.cells);
  }
  if (t.from && t.dir) {
    const p = placeBy(t.from); const i = DIRS8.indexOf(t.dir); if (!p || i < 0) return [];
    const a = ((i * 45 + north) * Math.PI) / 180; const v = [Math.round(Math.sin(a)), Math.round(-Math.cos(a))]; const out = [];
    for (let k = 1; k < 20; k++) { const c = [p.at[0] + v[0] * k, p.at[1] + v[1] * k]; if (!inMap(c[0], c[1])) break; if (!t.steps || t.steps === k) out.push(c); }
    return out;
  }
  if (heights && (t.highest || t.lowest || Number.isFinite(t.height))) {
    const land = all.filter(([c, r]) => hAt(c, r) != null && hAt(c, r) >= 0);
    const want = t.highest ? Math.max(...land.map(([c, r]) => hAt(c, r))) : t.lowest ? Math.min(...land.map(([c, r]) => hAt(c, r))) : t.height;
    return land.filter(([c, r]) => hAt(c, r) === want);
  }
  if (t.river) return all.filter(([c, r]) => riverSet.has(`${c},${r}`));
  if (t.sea) return all.filter(([c, r]) => seaSet.has(`${c},${r}`));
  return [];
}

async function pin(A, page, o, t, g, readState) {
  const { COLS, ROWS } = g;
  if (o.readOnly) { A.problem('unreachable', '핀이 잠겨(readOnly) 있는데 목표가 핀 꽂기'); return false; }
  const cells = pinCells(o, t, g);
  if (!cells.length) { A.problem('unreachable', `목표(${JSON.stringify(t)})를 만족하는 칸이 이 지도에 없음`); return false; }
  const [c, r] = cells[0];
  const LW = o.rowLabels ? 30 : 0; const TH = o.colLabels ? 24 : 0; const TT = o.title ? 30 : 0;
  const CELL = Math.max(40, Math.min(84, Math.floor(440 / Math.max(COLS, ROWS * 1.15))));
  const MX = 12 + LW; const MY = 12 + TT + TH;
  const pinG = page.locator((rt(page) + ' .mp-pin')).first();
  if (!(await pinG.count())) { A.problem('control-missing', '핀이 화면에 없음'); return false; }
  const okCell = (p) => p && cells.some((x) => x[0] === p[0] && x[1] === p[1]);
  if (A.input === 'keyboard') {
    if (!(await A.focus(pinG, '핀'))) return false;
    let cur = (await readState()).pin;
    if (!cur) { await A.key('ArrowRight', 1, 40); cur = (await readState()).pin; }
    if (!cur) { A.problem('ui-error', '방향키를 눌러도 핀이 지도에 놓이지 않음'); return false; }
    await A.key(c > cur[0] ? 'ArrowRight' : 'ArrowLeft', Math.abs(c - cur[0]), 25);
    await A.key(r > cur[1] ? 'ArrowDown' : 'ArrowUp', Math.abs(r - cur[1]), 25);
    await sleep(200);
  } else if (A.input === 'touch') {
    // 휴대폰: 칸을 눌러 핀이 그 칸으로 가게 한다
    const [p] = await fitView(page, async () => [await svgToScreen(page, MX + (c + 0.5) * CELL, MY + (r + 0.5) * CELL)]);
    if (CELL * p.scale < 44) A.problem('touch-target-small', `지도 칸 ${Math.round(CELL * p.scale)}px`);
    A.count(); await touchTap(page, p.x, p.y); await sleep(500);
  } else {
    const hit = pinG.locator('.pk-hit').first();
    const [head, to] = await fitView(page, async () => {
      const hb = await hit.boundingBox(); const sc = await svgToScreen(page, MX + (c + 0.5) * CELL, MY + (r + 0.5) * CELL + 8);
      return [mid(hb), sc];
    });
    const sc = (await svgToScreen(page, 0, 0)).scale;
    const origin = { x: head.x, y: head.y + 15 * sc };
    await A.drag(head, { x: head.x + (to.x - origin.x), y: head.y + (to.y - origin.y) }, '핀 끌기', { steps: 16, wait: 500 });
  }
  return okCell((await readState()).pin);
}

async function compass(A, page, o, t, g, readState) {
  const { placeBy, north, points } = g;
  let ok = true;
  const step = 360 / points;
  const rose = page.locator((rt(page) + ' .mp-rose')).first();
  if (t.align) {
    if (o.readOnly) { A.problem('unreachable', '방위표가 잠겨(readOnly) 있는데 목표가 방위표 맞추기'); return false; }
    if (!(await rose.count())) { A.problem('control-missing', '방위표가 화면에 없음'); return false; }
    const cur = (await readState()).rose || 0;
    let d = ((north - cur + 540) % 360) - 180; // (-180,180]
    if (A.input === 'keyboard') {
      if (!(await A.focus(rose, '방위표'))) return false;
      await A.key(d > 0 ? 'ArrowRight' : 'ArrowLeft', Math.round(Math.abs(d) / step), 40); await sleep(300);
    } else {
      const c = mid(await box(rose.locator('.pk-hit').first())); const sc = (await svgToScreen(page, 0, 0)).scale;
      if (A.input === 'touch' && 92 * sc < 44) A.problem('touch-target-small', `방위표 ${Math.round(92 * sc)}px`);
      const rad = 30 * sc; const n = Math.max(2, Math.ceil(Math.abs(d) / 12)); const pts = [];
      for (let i = 0; i <= n; i++) { const p = ((d * i) / n) * Math.PI / 180; pts.push({ x: c.x + rad * Math.sin(p), y: c.y - rad * Math.cos(p) }); }
      await A.dragPath(pts, '방위표 돌리기', { wait: 600 });
    }
    ok = norm((await readState()).rose || 0) === north;
  }
  let want = t.dir;
  if (!want && t.from && t.to) {
    const a = placeBy(t.from); const b = placeBy(t.to);
    if (a && b) { const dx = b.at[0] - a.at[0]; const dy = b.at[1] - a.at[1]; if (dx || dy) { const sb = norm((Math.atan2(dx, -dy) * 180) / Math.PI - north); want = points === 4 ? DIRS4[Math.round(sb / 90) % 4] : DIRS8[Math.round(sb / 45) % 8]; } }
  }
  if (want) {
    if (!(points === 4 ? DIRS4 : DIRS8).includes(want)) { A.problem('unreachable', `방위 단추(${points}방위)에 '${want}' 가 없음`); return false; }
    const b = page.locator(`${rt(page)} [data-dir="${want}"]`).first();
    if (!(await b.count())) { A.problem('control-missing', `방위 단추 '${want}' 가 화면에 없음`); return false; }
    ok = (await A.tap(b, `방위 단추 ${want}`)) && ok;
    ok = ok && (await readState()).dir === want;
  }
  return ok;
}

async function legend(A, page, o, t, places, readState) {
  const keys = Object.keys((await readState()).legend || {});
  const blanks = page.locator((rt(page) + ' g.mp-blank'));
  if ((await blanks.count()) < keys.length) { A.problem('control-missing', '범례 빈칸이 화면에 없음'); return false; }
  const meaning = (k) => (o.meanings && o.meanings[k]) || (places.find((p) => p.icon === k && p.legend) || {}).legend || ICON_NAME[k] || k;
  const want = t.legend || Object.fromEntries(keys.map((k) => [k, meaning(k)]));
  let ok = true;
  for (const k of Object.keys(want)) {
    const i = keys.indexOf(k);
    if (i < 0) { A.problem('unreachable', `범례에 기호 ${k} 가 없음`); ok = false; continue; }
    const b = blanks.nth(i); let hit = false;
    for (let n = 0; n < 16; n++) {
      const label = (await b.getAttribute('aria-label')) || '';
      if (label.includes(`지금 ${want[k]}.`)) { hit = true; break; }
      if (!(await A.tap(b, `범례 빈칸 ${k}`, { hit: b.locator('.pk-hit'), wait: 60 }))) { ok = false; break; }
    }
    if (!hit) { const label = (await b.getAttribute('aria-label')) || ''; if (label.includes(`지금 ${want[k]}.`)) hit = true; }
    if (!hit && ok) { A.problem('unreachable', `범례 빈칸 ${k} 에서 '${want[k]}' 를 고를 수 없음(눌러 돌려도 안 나옴)`); ok = false; }
  }
  return ok;
}

async function scale(A, page, o, t, placeBy, readState) {
  const sc = o.scale && Number.isFinite(o.scale.cell) ? o.scale : { cell: 100, unit: 'm' };
  const distStep = Number.isFinite(o.distStep) && o.distStep > 0 ? o.distStep : sc.cell;
  let want = t.dist;
  if (!Number.isFinite(want)) { const a = placeBy(t.from); const b = placeBy(t.to); if (!a || !b) { A.problem('unreachable', '출발·도착 장소가 지도에 없음'); return false; } want = (Math.abs(a.at[0] - b.at[0]) + Math.abs(a.at[1] - b.at[1])) * sc.cell; }
  if (want % distStep !== 0 || want > distStep * 40) { A.problem('unreachable', `거리 ${want}${sc.unit} 를 거리 단추(${distStep} 단위, 최대 ${distStep * 40})로 만들 수 없음`); return false; }
  const b = page.locator((rt(page) + ' [data-d="1"]')).first();
  if (!(await b.count())) { A.problem('control-missing', '거리 늘리기 단추가 화면에 없음'); return false; }
  const cur = (await readState()).dist || 0; const n = Math.round((want - cur) / distStep);
  const bm = page.locator((rt(page) + ' [data-d="-1"]')).first();
  for (let i = 0; i < Math.abs(n); i++) if (!(await A.tap(n > 0 ? b : bm, `거리 ${n > 0 ? '늘리기' : '줄이기'} 단추`, { wait: 40 }))) return false;
  return (await readState()).dist === want;
}
