// 종이 자석 실험대(magnet) 조작기 — 나침반(compass), 극끼리 붙고 밀리기(poles), 극 표시가 지워진 자석(hidden).
import { makeCtx } from './_sci-common.mjs';

export const tools = ['magnet'];

const HALF = 54; const POLE = 42; const EARTH = 1 / 52000;
const rad = (d) => (d * Math.PI) / 180;
const norm = (v) => ((v % 360) + 360) % 360;
const DIRS = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
const dirName = (b) => DIRS[Math.round(norm(b) / 45) % 8];
const BEAR = { 북: 0, 동: 90, 남: 180, 서: 270 };
const angDiff = (a, b) => { const d = norm(a - b); return d > 180 ? 360 - d : d; };

// 막대자석 둘레의 나침반 바늘이 가리킬 방향(북이 0°, 시계 방향) — 학생이 '이쯤 두면 이쪽을 가리키겠지' 하고 어림하는 것
function fieldBearing(p, mag) {
  let bx = 0; let by = -EARTH;
  const c = Math.cos(rad(mag.r)); const s = Math.sin(rad(mag.r));
  for (const [q, pp] of [[1, [mag.x + POLE * c, mag.y + POLE * s]], [-1, [mag.x - POLE * c, mag.y - POLE * s]]]) {
    const dx = p[0] - pp[0]; const dy = p[1] - pp[1]; const d2 = Math.max(dx * dx + dy * dy, 400); const d3 = d2 * Math.sqrt(d2);
    bx += (q * dx) / d3; by += (q * dy) / d3;
  }
  return (Math.atan2(bx, -by) * 180) / Math.PI;
}

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const mode = ['poles', 'hidden'].includes(o.mode) ? o.mode : 'compass';
  let reached = true;
  const svg = page.locator(`${root} svg.pk-stage`).first();
  const scale = async () => { const b = await ctx.box(svg); const vb = ((await svg.getAttribute('viewBox')) || '0 0 440 340').split(/\s+/).map(Number); return { s: b.width / vb[2], b }; };
  const btn = (aria) => page.locator(`${root} [role="button"][aria-label="${aria}"]`);

  // 끌 조각을 (dx, dy) svg 단위만큼 옮긴다. 키보드는 방향키 한 번에 10, 마지막에 Enter 로 내려놓는다
  async function moveBy(loc, label, dx, dy) {
    if (!dx && !dy) return true;
    if (ctx.input === 'keyboard') {
      if (!(await ctx.focusViaTab(loc, label))) return false;
      const nx = Math.round(dx / 10); const ny = Math.round(dy / 10);
      if (nx) await ctx.key(nx > 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(nx));
      if (ny) await ctx.key(ny > 0 ? 'ArrowDown' : 'ArrowUp', Math.abs(ny));
      await ctx.key('Enter');
      return true;
    }
    const { s } = await scale();
    const b = await ctx.box(loc); if (!b) return false;
    ctx.sizeCheck(b, label);
    const from = ctx.center(b);
    return ctx.dragPath(ctx.line(from, { x: from.x + dx * s, y: from.y + dy * s }, 10), `${label} 끌기`);
  }

  if (mode === 'compass' && (t.away || t.needle)) {
    if (t.away) {
      const away = btn('자석을 실험대에서 치우거나 다시 꺼내기');
      if (!(await away.count())) { ctx.problem('control-missing', '자석 치우기 단추가 없음'); reached = false; }
      else {
        if ((await ctx.state()).magnet) await ctx.tapExpect(away, '자석 치우기', async () => !(await ctx.state()).magnet);
        reached = (await ctx.state()).magnet === null;
      }
    } else {
      const k = t.compass || 0; const want = BEAR[t.needle];
      const spots = o.compasses || [[96, 92], [344, 92], [96, 232], [344, 232]];
      const spot = spots[k];
      if (!spot || want == null) { ctx.problem('unreachable', `나침반 ${k + 1}번이나 방위 '${t.needle}'가 없음`); reached = false; }
      else {
        // 자석을 놓을 수 있는 자리(81~)와 45° 돌림 가운데, 그 나침반 바늘이 목표 쪽을 가리키는 자리를 고른다(가까운 것 먼저)
        const st0 = await ctx.state();
        if (!st0.magnet) { await ctx.tap(btn('자석을 실험대에서 치우거나 다시 꺼내기'), '자석 꺼내기'); }
        const cur = (await ctx.state()).magnet || { x: 220, y: 162, r: 0 };
        let best = null;
        for (let x = 60; x <= 380; x += 10) for (let y = 50; y <= 250; y += 10) for (let r = 0; r < 360; r += 45) {
          const b = fieldBearing(spot, { x, y, r });
          if (angDiff(b, want) > 15) continue;
          const dist = Math.hypot(x - cur.x, y - cur.y) + (((r - cur.r + 360) % 360) / 45) * 12;
          if (!best || dist < best.dist) best = { x, y, r, dist };
        }
        if (!best) { ctx.problem('unreachable', `나침반 ${k + 1}번 바늘 N극을 ${t.needle}쪽으로 돌릴 자석 자리가 없음`); reached = false; }
        else {
          const turn = btn('자석을 45도 돌리기');
          const nTurn = (((best.r - cur.r) % 360) + 360) % 360 / 45;
          if (nTurn) { for (let i = 0; i < nTurn && !ctx.over(); i++) await ctx.tap(turn, '자석 돌리기'); }
          const now = (await ctx.state()).magnet;
          await moveBy(page.locator(`${root} .mg-magnet.pk-draggable`).first(), '막대자석', best.x - now.x, best.y - now.y);
          await ctx.wait(500);
          const needles = (await ctx.state()).needles || [];
          reached = needles[k] === t.needle || angDiff(BEAR[needles[k]] ?? 0, want) <= 25;
          if (!reached) ctx.problem('driver-limit', `나침반 ${k + 1}번 바늘이 ${needles[k]}쪽(목표 ${t.needle})`);
        }
      }
    }
  }

  if (mode === 'poles' && (t.attract || t.repel)) {
    const want = t.repel ? 'repel' : 'attract';
    const flip = btn('자석 나의 N극과 S극 자리를 바꾸기');
    const mover = page.locator(`${root} .mg-magnet.pk-draggable`).first();
    // 나를 가의 오른쪽 끝에 대어 본다: 뒤집기 상태 둘 × 대는 자리 몇 곳을 차례로 시험
    const tries = [];
    for (const r of [0, 180]) for (const x of [318, 330, 300, 340]) tries.push({ r, x });
    let ok = false;
    for (const tr of tries) {
      const s0 = await ctx.state();
      if (s0.b.r !== tr.r) { await ctx.tapExpect(flip, 'N·S 뒤집기', async () => (await ctx.state()).b.r !== s0.b.r); }
      const b = (await ctx.state()).b;
      await moveBy(mover, '자석 나', tr.x - b.x, 170 - b.y);
      await ctx.wait(500);
      ctx.note(`try r=${tr.r} x=${tr.x} → ${JSON.stringify(await ctx.state())}`);
      if ((await ctx.state()).event === want) { ok = true; break; }
      if (ctx.over()) break;
    }
    reached = ok;
    if (!ok) ctx.problem('unreachable', `나를 가에 어떻게 대어 봐도 '${want === 'attract' ? '붙기' : '밀리기'}'가 나오지 않음`);
  }

  if (mode === 'hidden' && t.nEnd) {
    const probe = page.locator(`${root} .mg-compass`).first();
    const bearingNow = async () => (await (await probe.elementHandle()).evaluate((g) => {
      const nd = [...g.querySelectorAll('g')].find((x) => /rotate\(/.test(x.getAttribute('transform') || ''));
      const m = nd && /rotate\(([-\d.]+)/.exec(nd.getAttribute('transform')); return m ? Number(m[1]) : 0;
    }));
    const where = {}; // 끝 이름 → 바늘 방향
    for (const [end, x] of [['ㄱ', 178], ['ㄴ', 262]]) {
      const p0 = (await ctx.state()).probe;
      await moveBy(probe, '나침반', x - p0.x, 200 - p0.y);
      await ctx.wait(600);
      where[end] = await bearingNow();
    }
    // 자석 끝 바로 아래에서 바늘 N극이 아래(남쪽)를 향하면 그 끝이 N극(같은 극끼리 밀어냄)
    const down = (b) => Math.cos(rad(b)) < 0;
    let answer = null;
    if (down(where['ㄱ']) !== down(where['ㄴ'])) answer = down(where['ㄱ']) ? 'ㄱ' : 'ㄴ';
    else answer = down(where['ㄱ']) ? ((where['ㄱ'] > where['ㄴ']) ? 'ㄱ' : 'ㄴ') : null;
    if (!answer) { ctx.problem('driver-limit', '두 끝에서 바늘이 같은 쪽을 가리켜 N극 끝을 가르지 못함'); reached = false; }
    else {
      const b = btn(`${answer} 끝이 N극이에요`);
      if (!(await b.count())) { ctx.problem('control-missing', `'${answer} 끝이 N극이에요' 단추가 없음`); reached = false; }
      else { await ctx.tapExpect(b, `${answer} 끝이 N극`, async () => (await ctx.state()).choice === answer); reached = (await ctx.state()).choice === answer; }
    }
  }
  void dirName;
  return ctx.result(reached);
}
