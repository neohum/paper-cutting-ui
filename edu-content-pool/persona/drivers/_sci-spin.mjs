// 지구를 돌리는 교구(earth spin·earthspin)가 함께 쓰는 회전 조작.
// 시계 반대 방향으로 15° 돌리면 한 시간 뒤(서→동 자전)다. 상태의 hour 만 읽고 상태는 쓰지 않는다.

const mod = (v, m) => ((v % m) + m) % m;

// 보이는 지구 원판(가장 큰 원)의 가운데
export async function earthCenter(ctx, loc) {
  const h = await loc.first().elementHandle();
  if (!h) return null;
  return h.evaluate((g) => {
    let best = null;
    g.querySelectorAll('circle').forEach((c) => { const r = c.getBoundingClientRect(); if (!best || r.width > best.w) best = { w: r.width, x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
    return best;
  });
}

// forwardHours: 앞(시각이 늘어나는) 방향으로 돌릴 시간 수(음수면 거꾸로). 눈금 한 칸 = stepHours 시간
export async function spinHours(ctx, loc, forwardHours, stepHours, label = '지구') {
  if (!forwardHours) return true;
  if (ctx.input === 'keyboard') {
    if (!(await ctx.focusViaTab(loc, label))) return false;
    const read = async () => (await ctx.state()).hour;
    const h0 = await read();
    // 방향키를 한 번 눌러 보아 어느 키가 시각을 앞으로 보내는지 안다(교구마다 키 방향이 다르다)
    let probe = 'ArrowRight';
    await ctx.key(probe);
    let d1 = mod((await read()) - h0 + 12, 24) - 12;
    if (d1 === 0) { probe = 'ArrowLeft'; await ctx.key(probe); d1 = mod((await read()) - h0 + 12, 24) - 12; }
    if (d1 === 0) { ctx.problem('no-keyboard-path', `${label}: 방향키를 눌러도 지구가 돌지 않음`); return false; }
    const other = probe === 'ArrowRight' ? 'ArrowLeft' : 'ArrowRight';
    const keyFwd = d1 > 0 ? probe : other; const keyBack = d1 > 0 ? other : probe;
    const need = forwardHours - d1; // d1 은 이미 앞(+)으로 간 시간
    if (need !== 0) await ctx.key(need > 0 ? keyFwd : keyBack, Math.round(Math.abs(need) / stepHours));
    return true;
  }
  const C = await earthCenter(ctx, loc);
  if (!C) { ctx.problem('control-missing', `${label}를 찾지 못함`); return false; }
  const r = Math.max(20, (await ctx.box(loc)).width * 0.18) + 30;
  const deg = -forwardHours * 15; // 화면에서 시계 방향이 +
  const n = Math.max(6, Math.ceil(Math.abs(deg) / 8));
  const a0 = 0;
  const pts = ctx.arc({ x: C.x, y: C.y }, r, a0, a0 + deg, n);
  // 시작점이 원판 안(손잡이)인지 확인
  ctx.sizeCheck(await ctx.box(loc), label);
  const ok = await ctx.dragPath(pts, `${label} 돌리기`);
  await ctx.wait(600); // 놓은 뒤 눈금에 맞춰 붙는 움직임이 끝나길 기다린다
  return ok;
}

// 목표 시각까지 돌린 뒤 어긋나면 한 번 더 고친다. mode: 'forward'(앞으로만) | 'short'(가까운 쪽)
export async function spinToHour(ctx, loc, wantHour, stepHours, how = 'short', label = '지구') {
  await ctx.wait(300); // 처음 그려지는 움직임이 끝난 뒤 잡는다
  for (let i = 0; i < 4; i++) {
    const cur = (await ctx.state()).hour;
    if (cur === wantHour) return true;
    const fwd = mod(wantHour - cur, 24);
    const dh = how === 'forward' ? fwd : (fwd > 12 ? fwd - 24 : fwd);
    ctx.note(`spin cur=${cur} want=${wantHour} dh=${dh}`);
    if (!(await spinHours(ctx, loc, dh, stepHours, label))) return false;
    if (ctx.over()) break;
  }
  return (await ctx.state()).hour === wantHour;
}
