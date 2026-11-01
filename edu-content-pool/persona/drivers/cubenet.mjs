// 정육면체 전개도 접기(cubenet) 조작기 — 면을 끌어(또는 눌러 고르고 빈칸을 눌러, 또는 방향키로) 전개도를 만들고, 붓으로 마주 보는 면을 칠한다.
import { actor, nudge, sleep, svgToScreen, fitView, rt } from './_geo-lib.mjs';

export const tools = ['cubenet'];
const IDS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'];
const NETS = {
  cross: { ㄱ: [1, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [1, 2] },
  step: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] },
  zig: { ㄱ: [0, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] },
  three: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [2, 0], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [4, 1] },
};
const BRUSH = { rose: '분홍색 붓', mint: '연두색 붓', sky: '하늘색 붓' };
const PAINTS = ['rose', 'mint', 'sky'];
const OX = 24; const OY = 20; const C = 56;

// ---- 접기 계산(교구와 같은 정의): 마주 보는 면과 정육면체 여부 ----
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
function rot(p, a, d, th) { const v = sub(p, a); const c = Math.cos(th); const s = Math.sin(th); return add(add(add(scl(v, c), scl(cross3(d, v), s)), scl(d, dot(d, v) * (1 - c))), a); }
function foldResult(cells) {
  const at = {}; for (const id of IDS) at[cells[id].join(',')] = id;
  const nb = (id) => { const [c, r] = cells[id]; return [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dc, dr]) => at[`${c + dc},${r + dr}`]).filter(Boolean); };
  let root = IDS[0]; for (const id of IDS) if (nb(id).length > nb(root).length) root = id;
  const tree = { [root]: null }; const order = [root];
  for (let i = 0; i < order.length; i++) {
    const p = order[i];
    for (const q of nb(p)) {
      if (q in tree) continue;
      const [pc, pr] = cells[p]; const [qc, qr] = cells[q]; let a; let d;
      if (qc !== pc) { const x = Math.max(pc, qc); a = [x, pr, 0]; d = [0, 1, 0]; } else { const y = Math.max(pr, qr); a = [pc, y, 0]; d = [1, 0, 0]; }
      if (rot([qc + 0.5, qr + 0.5, 0], a, d, 0.3)[2] > 0) d = scl(d, -1);
      tree[q] = { parent: p, a, d }; order.push(q);
    }
  }
  if (order.length !== 6) return { valid: false };
  const place = (id, p) => { let cur = id; let q = p; while (tree[cur]) { const h = tree[cur]; q = rot(q, h.a, h.d, Math.PI / 2); cur = h.parent; } return q; };
  const ctr = {}; const keys = new Set();
  for (const id of IDS) { const [c, r] = cells[id]; const q = place(id, [c + 0.5, r + 0.5, 0]); ctr[id] = q; keys.add(q.map((v) => Math.round(v * 2)).join(',')); }
  if (keys.size !== 6) return { valid: false };
  const m = scl(IDS.reduce((s, id) => add(s, ctr[id]), [0, 0, 0]), 1 / 6); const opp = {};
  for (const a of IDS) for (const b of IDS) if (a !== b && Math.hypot(...add(sub(ctr[a], m), sub(ctr[b], m))) < 0.01) opp[a] = b;
  return { valid: true, opp };
}
const hasLine4 = (cells) => { const set = new Set(IDS.map((id) => cells[id].join(','))); return IDS.some((id) => { const [c, r] = cells[id]; return [0, 1, 2, 3].every((k) => set.has(`${c + k},${r}`)) || [0, 1, 2, 3].every((k) => set.has(`${c},${r + k}`)); }); };
function isCross(cells) {
  const list = IDS.map((id) => cells[id]); const set = new Set(list.map((p) => p.join(',')));
  for (const [c, r] of list) for (const horiz of [true, false]) {
    const line = [0, 1, 2, 3].map((k) => (horiz ? [c + k, r] : [c, r + k]));
    if (!line.every((p) => set.has(p.join(',')))) continue;
    const key = new Set(line.map((p) => p.join(','))); const rest = list.filter((p) => !key.has(p.join(',')));
    if (rest.length !== 2) continue;
    const along = rest.map((p) => (horiz ? p[0] - c : p[1] - r)); const side = rest.map((p) => (horiz ? p[1] - r : p[0] - c));
    if (along[0] === along[1] && (along[0] === 1 || along[0] === 2) && side[0] === -side[1] && Math.abs(side[0]) === 1) return true;
  }
  return false;
}
function isThreeThree(cells) {
  const rows = {}; const cols = {};
  IDS.forEach((id) => { const [c, r] = cells[id]; (rows[r] = rows[r] || []).push(c); (cols[c] = cols[c] || []).push(r); });
  const ok = (g) => { const ks = Object.keys(g); if (ks.length !== 2) return false; return ks.every((k) => { const v = g[k].slice().sort((x, y) => x - y); return v.length === 3 && v[2] - v[0] === 2; }); };
  return ok(rows) || ok(cols);
}
const meets = (cells, t) => foldResult(cells).valid && (t.line4 == null || hasLine4(cells) === t.line4) && !(t.notCross && isCross(cells)) && (t.shape !== '3-3' || isThreeThree(cells));

export async function drive({ page, root, target, options, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const COLS = o.cols || 6; const ROWS = o.rows || 4;
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '전개도'); return { reached: ok, actions: A.n, problems }; }
    if (o.blank) { A.problem('driver-limit', '활동지 그리기 칸(blank)은 종이에 직접 그린다 — 화면 조작 없음'); return { reached: false, actions: A.n, problems }; }
    if (t.valid) {
      const cur = (await readState()).cells;
      if (meets(cur, t)) reached = true;
      else {
        const name = t.shape === '3-3' ? 'three' : t.line4 === false ? 'step' : t.notCross ? 'zig' : 'cross';
        const net = NETS[name];
        const maxC = Math.max(...IDS.map((id) => net[id][0])); const maxR = Math.max(...IDS.map((id) => net[id][1]));
        if (o.locked) { A.problem('unreachable', '면이 잠겨(locked) 있어 전개도를 바꿀 수 없는데 처음 모양이 목표를 만족하지 않음'); return { reached: false, actions: A.n, problems }; }
        if (maxC >= COLS || maxR >= ROWS) { A.problem('unreachable', `목표 전개도가 모눈(${COLS}x${ROWS})에 들어가지 않음`); return { reached: false, actions: A.n, problems }; }
        await arrange(A, page, net, { COLS, ROWS }, readState);
        reached = meets((await readState()).cells, t);
      }
    } else if (t.opposite || t.pairs) {
      const cells = (await readState()).cells; const fr = foldResult(cells);
      if (!fr.valid) { A.problem('unreachable', '놓인 면이 정육면체 전개도가 아니어서 마주 보는 면을 칠할 수 없음'); return { reached: false, actions: A.n, problems }; }
      const jobs = [];
      if (t.opposite) jobs.push({ color: 'rose', faces: t.opposite });
      else { const done = new Set(); let k = 0; for (const a of IDS) { if (done.has(a)) continue; done.add(a); done.add(fr.opp[a]); jobs.push({ color: PAINTS[k++], faces: [a, fr.opp[a]] }); } }
      let ok = true;
      for (const j of jobs) {
        const b = page.locator(`${rt(page)} g[role=button][aria-label="${BRUSH[j.color]}"]`).first();
        if (!(await b.count())) { A.problem('control-missing', `${BRUSH[j.color]} 가 화면에 없음`); return { reached: false, actions: A.n, problems }; }
        ok = (await A.tap(b, BRUSH[j.color], { hit: b.locator('.pk-hit') })) && ok;
        // 이미 칠해진 면은 다시 누르면 지워지므로 상태를 보고 누른다. 같은 색이 다른 면에 남아 있으면 먼저 지운다.
        let paintNow = (await readState()).paint || {};
        for (const f of IDS) if (paintNow[f] === j.color && !j.faces.includes(f)) { const fl = page.locator(`${rt(page)} .cn-face[aria-label="면 ${f}"]`).first(); ok = (await A.tap(fl, `면 ${f} 지우기`, { hit: fl.locator('.pk-hit').first() })) && ok; }
        for (const f of j.faces) {
          paintNow = (await readState()).paint || {};
          if (paintNow[f] === j.color) continue;
          const fl = page.locator(`${rt(page)} .cn-face[aria-label="면 ${f}"]`).first();
          ok = (await A.tap(fl, `면 ${f} 칠하기`, { hit: fl.locator('.pk-hit').first() })) && ok;
        }
      }
      const pt = (await readState()).paint || {};
      reached = ok && jobs.every((j) => j.faces.every((f) => pt[f] === j.color));
    } else {
      A.problem('driver-limit', `목표 ${JSON.stringify(t)} 를 만드는 방법을 모름`);
    }
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
  }
  return { reached, actions: A.n, problems };
}

async function arrange(A, page, net, { COLS, ROWS }, readState) {
  const tgt = new Set(IDS.map((id) => net[id].join(',')));
  for (let guard = 0; guard < 40; guard++) {
    const cells = (await readState()).cells;
    const todo = IDS.find((id) => cells[id].join(',') !== net[id].join(','));
    if (!todo) return;
    const occ = IDS.find((id) => id !== todo && cells[id].join(',') === net[todo].join(','));
    if (occ) {
      let park = null;
      const taken = new Set(IDS.map((id) => cells[id].join(',')));
      for (let r = 0; r < ROWS && !park; r++) for (let c = COLS - 1; c >= 0 && !park; c--) if (!taken.has(`${c},${r}`) && !tgt.has(`${c},${r}`)) park = [c, r];
      if (!park) { A.problem('driver-limit', '면을 잠시 둘 빈칸이 없음'); return; }
      await moveFace(A, page, occ, cells[occ], park, COLS, ROWS);
    } else await moveFace(A, page, todo, cells[todo], net[todo], COLS, ROWS);
  }
}

async function moveFace(A, page, id, from, to, COLS, ROWS) {
  const face = page.locator(`${rt(page)} .cn-face[aria-label="면 ${id}"]`).first();
  if (!(await face.count())) { A.problem('control-missing', `면 ${id} 가 화면에 없음`); return; }
  if (A.input === 'keyboard') {
    if (!(await A.focus(face, `면 ${id}`))) return;
    await A.key(to[0] > from[0] ? 'ArrowRight' : 'ArrowLeft', Math.abs(to[0] - from[0]), 15);
    await A.key(to[1] > from[1] ? 'ArrowDown' : 'ArrowUp', Math.abs(to[1] - from[1]), 15);
    await A.key('Enter', 1, 350);
    return;
  }
  const ctr = (c, r) => svgToScreen(page, OX + c * C + C / 2, OY + r * C + C / 2);
  const [a, b] = await fitView(page, async () => [await ctr(from[0], from[1]), await ctr(to[0], to[1])]);
  if (A.input === 'touch') {
    // 휴대폰에서 끌기는 어렵다 — 면을 눌러 고르고 빈칸을 누른다
    if (Math.min(C * a.scale, C * a.scale) < 44) A.problem('touch-target-small', `면 ${id} 크기 ${Math.round(C * a.scale)}px`);
    A.count(); const { touchTap } = await import('./_geo-lib.mjs');
    await touchTap(page, a.x, a.y); await sleep(200);
    const cell = page.locator((rt(page) + ' .cn-cell')).nth(to[0] * ROWS + to[1]);
    A.count(); await touchTap(page, b.x, b.y); await sleep(400);
    void cell;
  } else await A.drag(a, b, `면 ${id} 끌기`);
}
