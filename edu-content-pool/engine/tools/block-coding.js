/* 종이 거북이 코딩판 — 실과(소프트웨어)·창체: 칸 판 위의 거북이 로봇을 명령 블록으로 움직인다.
 * 블록을 고르면 프로그램 줄에 차례로 붙고, '실행'을 누르면 거북이가 한 블록씩 움직인다(실행은 상태를 바꾸지 않는다).
 * 판정은 실행 결과로 한다: 목표 칸 도착, 바위·판 밖 피하기, 별 모으기, 블록 수, 꼭 쓸 블록, 고친 블록 수.
 *
 * 블록(상태의 글자)   | 화면                       | 뜻
 * ------------------- | -------------------------- | ------------------------------------------------------------
 * 'fwd'               | 앞으로 한 칸               | 바라보는 쪽으로 한 칸(바위나 판 밖이면 부딪혀 멈춤)
 * 'left' / 'right'    | 왼쪽으로 돌기 / 오른쪽으로 돌기 | 자리는 그대로, 거북이 쪽에서 본 왼쪽/오른쪽으로 90°
 * 'rep:3' … 'end'     | 반복 3번 [ … ]             | 사이의 블록을 n번(2~9) 되풀이. 'end'가 없으면 끝까지
 * 'if:right' / 'if:left' | 막히면 오른쪽(왼쪽), 아니면 앞으로 | 조건 블록: 앞 칸이 바위·판 밖이면 돌고, 아니면 한 칸 간다
 *
 * mode  | 상태                         | target
 * ----- | ---------------------------- | ------------------------------------------------------------------------
 * build | { program: ['fwd', …] }      | { reach: true, stars?: true, maxBlocks?: n, use?: ['rep'|'if'], maxEdits?: n, from?: [...] }
 *       |                              |   maxEdits: 시작 프로그램(from 또는 문항 state)에서 n블록 넘게 바꾸지 않고 고치기(디버깅)
 * trace | { mark: {x, y} | null }      | { end: {x, y} } 프로그램(옵션 program)을 따라가 거북이가 멈출 칸 고르기
 * 옵션: mode('build'|'trace'), cols(기본 5), rows(기본 5), start({ x, y, dir: 'N'|'E'|'S'|'W' }, 기본 { x:0, y:4, dir:'E' }), goal({ x, y }),
 *       rocks([[x, y], …]), stars([[x, y], …]), blocks(고르개, 기본 ['fwd','left','right','rep']; 'if' 더하기), maxBlocks(붙일 수 있는 수, 기본 16),
 *       program(trace 문항의 프로그램), speed(실행 한 걸음 ms, 기본 380), revealAfterCheck(trace: 맞힌 확인 전에는 '실행'을 막는다), print, printProgram
 * 칸 좌표: 왼쪽 위가 (0, 0), x는 오른쪽, y는 아래로. 블록 수는 'end'를 세지 않는다.
 * 키보드: 고르개 단추 Enter = 붙이기(고른 블록 뒤에). 프로그램 블록에서 ←/→ = 자리 옮기기, ↑/↓ = 반복 수, Delete = 빼기, Enter = 고르기.
 *        trace는 판 칸에 Tab → Enter = 여기서 멈춰요.
 * 예: { toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3]] }, target: { reach: true, maxBlocks: 6 } }
 */
(function (K) {
  'use strict';
  // ‘…칸’으로 / ‘…돌기’로 — 받침이 없거나 ㄹ이면 ‘로’
  const euro = (w) => { const c = String(w).charCodeAt(String(w).length - 1) - 0xac00; return c >= 0 && c <= 11171 && c % 28 !== 0 && c % 28 !== 8 ? '으로' : '로'; };
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  const DIRS = ['N', 'E', 'S', 'W']; const DX = [0, 1, 0, -1]; const DY = [-1, 0, 1, 0];
  const DIRNAME = { N: '위', E: '오른쪽', S: '아래', W: '왼쪽' };
  const lev = (a, b) => {
    const m = a.length; const n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  };
  const isRep = (b) => /^rep:\d$/.test(b); const repN = (b) => Number(String(b).slice(4));
  const isIf = (b) => b === 'if:right' || b === 'if:left';
  const okBlock = (b) => ['fwd', 'left', 'right', 'end'].includes(b) || isIf(b) || (isRep(b) && repN(b) >= 2 && repN(b) <= 9);
  const label = (b) => (b === 'fwd' ? '앞으로 한 칸' : b === 'left' ? '왼쪽으로 돌기' : b === 'right' ? '오른쪽으로 돌기' : b === 'end' ? '반복 끝' : isRep(b) ? `반복 ${repN(b)}번` : b === 'if:right' ? '막히면 오른쪽, 아니면 앞으로' : b === 'if:left' ? '막히면 왼쪽, 아니면 앞으로' : b);
  const countBlocks = (p) => p.filter((b) => b !== 'end').length;

  function cfg(o) {
    o = o || {};
    const cols = Math.max(2, Math.min(9, o.cols || 5)); const rows = Math.max(2, Math.min(8, o.rows || 5));
    const s0 = Object.assign({ x: 0, y: rows - 1, dir: 'E' }, o.start || {});
    const goal = o.goal ? { x: o.goal.x, y: o.goal.y } : { x: cols - 1, y: 0 };
    return {
      cols, rows, start: { x: s0.x, y: s0.y, d: Math.max(0, DIRS.indexOf(s0.dir)) }, goal,
      rocks: (o.rocks || []).map(([x, y]) => `${x},${y}`), stars: (o.stars || []).map(([x, y]) => `${x},${y}`),
      blocks: (o.blocks || ['fwd', 'left', 'right', 'rep']), maxBlocks: Math.max(4, Math.min(30, o.maxBlocks || 16)), mode: o.mode === 'trace' ? 'trace' : 'build',
    };
  }
  // 실행: 걸음 목록과 결과. 반복은 짝 'end'까지(없으면 끝까지), 겹쳐 쓸 수 있다.
  function run(program, c) {
    const p = (program || []).filter(okBlock);
    let x = c.start.x; let y = c.start.y; let d = c.start.d; const got = new Set(); const steps = [{ x, y, d, i: -1 }];
    const blocked = (nx, ny) => nx < 0 || ny < 0 || nx >= c.cols || ny >= c.rows || c.rocks.includes(`${nx},${ny}`);
    let crash = null; let n = 0;
    function exec(from, to) {
      for (let i = from; i < to && !crash; i++) {
        const b = p[i];
        if (++n > 400) { crash = { i, why: 'loop' }; return; }
        if (isRep(b)) {
          let depth = 1; let j = i + 1; for (; j < to; j++) { if (isRep(p[j])) depth++; else if (p[j] === 'end' && --depth === 0) break; }
          for (let k = 0; k < repN(b) && !crash; k++) exec(i + 1, Math.min(j, to));
          i = j; continue;
        }
        if (b === 'end') continue;
        if (b === 'left') d = (d + 3) % 4; else if (b === 'right') d = (d + 1) % 4;
        else {
          const nx = x + DX[d]; const ny = y + DY[d];
          if (isIf(b) && blocked(nx, ny)) d = b === 'if:right' ? (d + 1) % 4 : (d + 3) % 4;
          else if (blocked(nx, ny)) { crash = { i, why: nx < 0 || ny < 0 || nx >= c.cols || ny >= c.rows ? 'edge' : 'rock', x: nx, y: ny }; steps.push({ x, y, d, i, crash: true }); return; }
          else { x = nx; y = ny; if (c.stars.includes(`${x},${y}`)) got.add(`${x},${y}`); }
        }
        steps.push({ x, y, d, i });
      }
    }
    exec(0, p.length);
    return { x, y, d, steps, crash, stars: got, atGoal: !crash && x === c.goal.x && y === c.goal.y };
  }
  const where = (c, x, y) => { const dx = c.goal.x - x; const dy = c.goal.y - y; const out = []; if (dy) out.push(`${dy < 0 ? '위로' : '아래로'} ${Math.abs(dy)}칸`); if (dx) out.push(`${dx < 0 ? '왼쪽으로' : '오른쪽으로'} ${Math.abs(dx)}칸`); return out.join(', '); };

  function judge(s, t, o, base) {
    s = s || {}; t = t || {}; const c = cfg(o);
    if (t.end) {
      if (!s.mark) return { correct: false, incomplete: true, feedback: '거북이가 멈출 칸을 판에서 눌러 골라요.', hint: '블록을 하나씩 따라가 보세요.' };
      if (s.mark.x === t.end.x && s.mark.y === t.end.y) return { correct: true, feedback: '맞아요! 블록을 차례대로 따라가면 거북이가 그 칸에 멈춰요.' };
      const r = run(o.program || [], c);
      const swapped = run((o.program || []).map((b) => (b === 'left' ? 'right' : b === 'right' ? 'left' : b === 'if:left' ? 'if:right' : b === 'if:right' ? 'if:left' : b)), c);
      if (s.mark.x === swapped.x && s.mark.y === swapped.y) return { correct: false, feedback: '왼쪽과 오른쪽이 바뀐 것 같아요. 돌기는 거북이가 바라보는 쪽에서 생각해요.', hint: '내 몸을 거북이와 같은 쪽으로 돌려 보고 왼쪽·오른쪽을 정해요.' };
      const near = Math.abs(s.mark.x - r.x) + Math.abs(s.mark.y - r.y) === 1;
      return { correct: false, feedback: near ? '거의 왔어요. 한 칸이 달라요. 앞으로 블록 수와 반복 횟수를 다시 세어 보세요.' : '거북이는 그 칸에 멈추지 않아요. 블록을 처음부터 다시 따라가 보세요.', hint: '반복 블록은 안의 블록을 그 횟수만큼 모두 다시 해요.' };
    }
    const p = (s.program || []).filter(okBlock);
    if (!p.length) return { correct: false, incomplete: true, feedback: '위에서 블록을 골라 프로그램을 만들어 보세요.', hint: '거북이가 바라보는 쪽부터 확인해요.' };
    const r = run(p, c);
    if (r.crash) {
      if (r.crash.why === 'loop') return { correct: false, feedback: '프로그램이 너무 오래 돌아요. 반복 횟수를 줄여요.', hint: '반복 블록의 수를 확인해요.', step: r.crash.i };
      return { correct: false, feedback: `${r.crash.i + 1}번째 블록에서 거북이가 ${r.crash.why === 'rock' ? '바위에 부딪혀요' : '판 밖으로 나가려 해요'}.`, hint: `${r.crash.i + 1}번째 블록 앞에서 거북이가 어느 쪽을 보고 있는지 살펴요. 돌기 블록이 빠졌거나 방향이 반대일 수 있어요.`, step: r.crash.i };
    }
    if (!r.atGoal) return { correct: false, feedback: `거북이가 목표 깃발에 닿지 못했어요. 깃발은 거북이가 멈춘 곳에서 ${where(c, r.x, r.y)}에 있어요.`, hint: '멈춘 곳에서 깃발까지 가는 블록을 더하거나, 앞의 블록을 고쳐요.', stop: { x: r.x, y: r.y } };
    if (t.stars && r.stars.size < c.stars.length) return { correct: false, feedback: `깃발에는 닿았지만 별을 ${c.stars.length - r.stars.size}개 못 모았어요.`, hint: '별이 있는 칸을 지나가도록 길을 바꾸어요.' };
    const n = countBlocks(p);
    if (t.maxBlocks && n > t.maxBlocks) return { correct: false, feedback: `깃발에 닿았어요! 그런데 블록을 ${n}개 썼어요. 더 적게 써 보세요.`, hint: '똑같이 되풀이되는 블록을 반복 블록으로 묶어요.', rule: 'maxBlocks' };
    if (t.use) {
      if (t.use.includes('rep') && !p.some(isRep)) return { correct: false, feedback: '깃발에 닿았어요! 이번에는 반복 블록을 꼭 써서 만들어요.', hint: '여러 번 나오는 블록 묶음을 찾아 반복 블록으로 바꾸어요.', rule: 'use' };
      if (t.use.includes('if') && !p.some(isIf)) return { correct: false, feedback: '깃발에 닿았어요! 이번에는 조건 블록(막히면 돌기)을 꼭 써요.', hint: '반복 블록 안에 조건 블록을 넣으면 길을 스스로 찾아가요.', rule: 'use' };
    }
    const from = t.from || base;
    if (t.maxEdits != null && from) {
      const e = lev(from.filter(okBlock), p);
      if (e > t.maxEdits) return { correct: false, feedback: `깃발에 닿았어요! 그런데 처음 프로그램에서 블록을 ${e}개나 바꾸었어요. 틀린 블록만 찾아 고쳐요.`, hint: '처음 프로그램으로 돌아가(처음으로) 실행해 보고, 거북이가 처음 엉뚱하게 가는 블록만 고쳐요.', rule: 'edits' };
    }
    return { correct: true, feedback: `맞아요! 블록 ${n}개로 거북이가 깃발에 도착했어요.` };
  }

  // ---- 정답 만들기: 가장 짧은 길 → 블록 → 반복으로 묶기 ----
  function path(c, needStars) {
    const key = (x, y, d, m) => `${x},${y},${d},${m}`; const full = (1 << c.stars.length) - 1;
    const q = [[c.start.x, c.start.y, c.start.d, 0, []]]; const seen = new Set([key(c.start.x, c.start.y, c.start.d, 0)]);
    while (q.length) {
      const [x, y, d, m, acts] = q.shift();
      if (x === c.goal.x && y === c.goal.y && (!needStars || m === full)) return acts;
      if (acts.length > 60) continue;
      const next = [['fwd', x + DX[d], y + DY[d], d], ['left', x, y, (d + 3) % 4], ['right', x, y, (d + 1) % 4]];
      for (const [a, nx, ny, nd] of next) {
        if (nx < 0 || ny < 0 || nx >= c.cols || ny >= c.rows || c.rocks.includes(`${nx},${ny}`)) continue;
        const si = c.stars.indexOf(`${nx},${ny}`); const nm = si >= 0 ? m | (1 << si) : m;
        const k = key(nx, ny, nd, nm); if (seen.has(k)) continue; seen.add(k); q.push([nx, ny, nd, nm, acts.concat(a)]);
      }
    }
    return null;
  }
  // 반복 블록으로 가장 적게: 묶음 길이 1~6, 2~9번
  function compress(seq) {
    const n = seq.length; const best = Array(n + 1).fill(null); best[n] = { cost: 0, out: [] };
    for (let i = n - 1; i >= 0; i--) {
      let b = { cost: 1 + best[i + 1].cost, out: [seq[i]].concat(best[i + 1].out) };
      for (let L = 1; L <= 6 && i + L <= n; L++) for (let k = 2; k <= 9 && i + L * k <= n; k++) {
        let same = true; for (let j = 0; j < L * k && same; j++) if (seq[i + j] !== seq[i + (j % L)]) same = false;
        if (!same) break;
        const cost = 1 + L + best[i + L * k].cost;
        if (cost < b.cost) b = { cost, out: [`rep:${k}`].concat(seq.slice(i, i + L), ['end'], best[i + L * k].out) };
      }
      best[i] = b;
    }
    return best[0].out;
  }
  function solve(t, o, base) {
    t = t || {}; const c = cfg(o);
    if (t.end) return { mark: (() => { const r = run(o.program || [], c); return { x: r.x, y: r.y }; })() };
    const ok = (p) => judge({ program: p }, t, o, base).correct;
    const from = (t.from || base || []).filter(okBlock);
    if (t.maxEdits != null && from.length) {
      // 디버깅: 시작 프로그램에서 한두 블록만 바꾸어 고친다(바꾸기·빼기·끼우기)
      const pool = ['fwd', 'left', 'right', 'if:right', 'if:left'].concat(from.filter(isRep).map((b) => [`rep:${repN(b) - 1}`, `rep:${repN(b) + 1}`]).flat().filter(okBlock));
      const edits1 = (p) => { const out = []; for (let i = 0; i <= p.length; i++) { if (i < p.length) { out.push(p.slice(0, i).concat(p.slice(i + 1))); for (const b of pool) if (b !== p[i]) out.push(p.slice(0, i).concat([b], p.slice(i + 1))); } for (const b of pool) out.push(p.slice(0, i).concat([b], p.slice(i))); } return out; };
      if (ok(from)) return { program: from };
      let layer = [from];
      for (let e = 1; e <= Math.min(2, t.maxEdits); e++) { const next = []; for (const p of layer) for (const q of edits1(p)) { if (ok(q)) return { program: q }; if (e < 2) next.push(q); } layer = next; }
    }
    if (t.use && t.use.includes('if')) {
      for (const turn of ['if:right', 'if:left']) for (let k = 2; k <= 9; k++) for (let m = 1; m <= 3; m++) { const p = [`rep:${k}`].concat(Array(m).fill(turn), ['end']); if (ok(p)) return { program: p }; }
      for (const turn of ['if:right', 'if:left']) for (let k = 2; k <= 9; k++) for (let j = 2; j <= 9; j++) { const p = [`rep:${k}`, `rep:${j}`, turn, 'end', 'end']; if (ok(p)) return { program: p }; }
    }
    const acts = path(c, !!t.stars) || [];
    let p = compress(acts);
    if (t.use && t.use.includes('rep') && !p.some(isRep)) {
      const i = acts.findIndex((a, k) => a === acts[k + 1]);
      if (i >= 0) { let k = 2; while (k < 9 && acts[i + k] === acts[i]) k++; p = acts.slice(0, i).concat([`rep:${k}`, acts[i], 'end'], acts.slice(i + k)); }
    }
    return { program: p };
  }
  function wrongAnswer(t, o, cur, base) {
    t = t || {}; const c = cfg(o); const list = [];
    if (t.end) {
      const prog = o.program || [];
      const sw = run(prog.map((b) => (b === 'left' ? 'right' : b === 'right' ? 'left' : b)), c); list.push({ mark: { x: sw.x, y: sw.y } });
      const r = run(prog, c);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const x = r.x + dx; const y = r.y + dy; if (x >= 0 && y >= 0 && x < c.cols && y < c.rows) list.push({ mark: { x, y } }); }
      const short = run(prog.slice(0, -1), c); list.push({ mark: { x: short.x, y: short.y } });
    } else {
      const good = solve(t, o, base).program;
      // 거북이 쪽이 아니라 화면 쪽으로 왼쪽·오른쪽을 정함(돌기 블록 하나 반대로)
      good.forEach((b, i) => { if (b === 'left' || b === 'right') { const x = good.slice(); x[i] = b === 'left' ? 'right' : 'left'; list.push({ program: x }); } });
      // 한 칸 덜 감, 반복 한 번 덜
      const li = good.lastIndexOf('fwd'); if (li >= 0) list.push({ program: good.slice(0, li).concat(good.slice(li + 1)) });
      good.forEach((b, i) => { if (isRep(b) && repN(b) > 2) { const x = good.slice(); x[i] = `rep:${repN(b) - 1}`; list.push({ program: x }); } });
      list.push({ program: good.concat(['fwd']) });
      if (t.maxBlocks || t.use) { const flat = path(c, !!t.stars); if (flat) list.push({ program: flat }); }
      if (base && base.length) list.push({ program: base.slice() });
    }
    const curJ = JSON.stringify(cur || {});
    const cand = list.filter((x) => { const r = judge(x, t, o, base); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }
  function hintFor(s, t, o, opts, base) {
    t = t || {}; const c = cfg(o); const r = judge(s, t, o, base);
    if (r.correct) return { hint: '지금 프로그램이 맞아요.', correct: true };
    const lv = levelOf(opts);
    if (lv <= 1) {
      if (t.end) return { hint: '블록을 처음부터 하나씩 따라가며 손가락으로 거북이를 옮겨 보세요. 돌기 블록은 자리는 그대로, 방향만 바꿔요.', correct: false };
      if (t.maxEdits != null) return { hint: '먼저 실행해 보고, 거북이가 처음으로 엉뚱하게 움직이는 블록을 찾아요. 그 블록만 고쳐요.', correct: false };
      if (t.use && t.use.includes('if')) return { hint: '거북이가 앞이 막힐 때마다 스스로 돌게 하려면 조건 블록을 반복 블록 안에 넣어요.', correct: false };
      return { hint: '거북이가 바라보는 쪽을 먼저 보세요. 왼쪽·오른쪽은 거북이 쪽에서 본 방향이에요. 깃발까지 가는 길을 손가락으로 먼저 그려 보세요.', correct: false };
    }
    if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
    if (t.end) { const rr = run(o.program || [], c); const mid = rr.steps[Math.max(1, Math.floor(rr.steps.length / 2))]; return { hint: mid ? `${mid.i + 1}번째 블록까지 하면 거북이는 왼쪽에서 ${mid.x + 1}번째, 위에서 ${mid.y + 1}번째 칸에서 ${DIRNAME[DIRS[mid.d]]}쪽을 봐요. 거기서부터 이어 가 보세요.` : '첫 블록부터 따라가요.', correct: false }; }
    const good = solve(t, o, base).program; const mine = (s.program || []).filter(okBlock);
    const i = good.findIndex((b, k) => mine[k] !== b);
    if (i < 0) return { hint: `${good.length + 1}번째부터 남는 블록을 빼요.`, correct: false };
    return { hint: `${i + 1}번째 블록을 ‘${label(good[i])}’${euro(label(good[i]))} ${mine[i] ? '바꾸어' : '붙여'} 보세요. 앞의 ${i}개는 그대로 두어요.`, correct: false };
  }
  function distance(a, b) {
    if ((a && a.mark) || (b && b.mark)) { const p = (a && a.mark) || { x: -9, y: -9 }; const q = (b && b.mark) || { x: -9, y: -9 }; return Math.abs(p.x - q.x) + Math.abs(p.y - q.y); }
    return lev(((a && a.program) || []), ((b && b.program) || []));
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, run, compress, cfg };

  K.registerTool('block-coding', {
    name: '종이 거북이 코딩판',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const c = cfg(o); const trace = c.mode === 'trace';
      let program = []; let mark = null; let sel = -1; let target = null; let base = null; let revealed = false; let busy = false;
      const W = 560; const cell = Math.min((W - 40) / c.cols, 380 / c.rows); const BW = cell * c.cols; const BH = cell * c.rows;
      const ox = (W - BW) / 2; const oy = 14; const H = oy + BH + 14;
      const cx = (x) => ox + (x + 0.5) * cell; const cy = (y) => oy + (y + 0.5) * cell;
      let pal = null; let prog = null; let ctl = null; let msg = null;
      const say = (t) => { if (msg) msg.textContent = t; kit.announce(t); };

      // ---- 블록 고르개(위) ----
      const ICON = { fwd: 'fi-rr-arrow-small-up', left: 'fi-rr-rotate-left', right: 'fi-rr-rotate-right', rep: 'fi-rr-refresh', end: 'fi-rr-angle-up', if: 'fi-rr-shuffle' };
      const palList = trace ? [] : c.blocks.flatMap((b) => (b === 'rep' ? ['rep:2', 'end'] : b === 'if' ? ['if:right', 'if:left'] : [b])).filter(okBlock);
      if (!print && palList.length) {
        pal = document.createElement('div'); pal.className = 'bc-pal'; pal.setAttribute('role', 'group'); pal.setAttribute('aria-label', '명령 블록 고르기');
        pal.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px';
        pal.innerHTML = `<b style="flex-basis:100%;font-size:15px">블록을 눌러 붙여요</b>${palList.map((b) => `<button type="button" class="pl-btn pl-btn--small bc-add" data-b="${b}" tabindex="0" style="min-height:44px;background:${isRep(b) || b === 'end' ? 'var(--pc-lavender-light,#F4F0FA)' : isIf(b) ? 'var(--pc-buttercup-light,#FFF9E8)' : 'var(--pc-sky-light,#EDF7FA)'}"><i class="fi ${ICON[isRep(b) ? 'rep' : isIf(b) ? 'if' : b]}" aria-hidden="true"></i> ${isRep(b) ? '반복 [' : b === 'end' ? '] 반복 끝' : label(b)}</button>`).join('')}`;
        pal.addEventListener('click', (e) => { const b = e.target.closest('[data-b]'); if (b) insert(b.dataset.b); });
        box.prepend(pal);
      }
      const st = kit.stage(box, { viewBox: [W, H], label: trace ? '거북이 코딩판. 프로그램을 따라가 거북이가 멈출 칸을 골라요.' : '거북이 코딩판. 블록으로 거북이를 깃발까지 보내요.' });
      const GL = st.layer('grid'); const TL = st.layer('trail'); const ML = st.layer('mark'); const RL = st.layer('robot');
      kit.piece(st, GL, { shape: { type: 'rect', x: ox - 6, y: oy - 6, w: BW + 12, h: BH + 12, rx: 14 }, color: 'mint', depth: 2, texture: !print });
      const cells = [];
      for (let y = 0; y < c.rows; y++) for (let x = 0; x < c.cols; x++) {
        const g = kit.el('g', { class: 'bc-cell' }, GL);
        kit.el('rect', { x: ox + x * cell + 2, y: oy + y * cell + 2, width: cell - 4, height: cell - 4, rx: 8, fill: print ? '#fff' : (x + y) % 2 ? '#F4FBF7' : '#FFFDF8', stroke: print ? '#000' : '#D6E9DE', 'stroke-width': 1 }, g);
        cells.push({ x, y, g });
      }
      // 바위·별·깃발
      for (const k of c.rocks) { const [x, y] = k.split(',').map(Number); const g = kit.el('g', null, GL); kit.piece(st, g, { shape: { type: 'path', d: `M${-cell * 0.32} ${cell * 0.22} Q ${-cell * 0.36} ${-cell * 0.12} ${-cell * 0.1} ${-cell * 0.26} Q ${cell * 0.18} ${-cell * 0.34} ${cell * 0.32} ${-cell * 0.06} Q ${cell * 0.4} ${cell * 0.22} ${cell * 0.1} ${cell * 0.26} Z` }, color: 'ink', depth: 2, fill: '#9A9086' }); kit.transform(g, { x: cx(x), y: cy(y) }); if (print) kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#000' }, g).textContent = '바위'; }
      const starEls = new Map();
      for (const k of c.stars) { const [x, y] = k.split(',').map(Number); const g = kit.el('g', null, GL); kit.motifs.star(st, g, { x: 0, y: 0, color: 'buttercup' }); kit.transform(g, { x: cx(x), y: cy(y), s: cell / 48 }); starEls.set(k, g); }
      // 따라가기 문항은 목표 칸이 없다 — 깃발을 그리면 답처럼 보인다
      if (!trace || o.goal) { const g = kit.el('g', null, GL); kit.piece(st, g, { shape: { type: 'rect', x: -2, y: -cell * 0.34, w: 4, h: cell * 0.62 }, color: 'peach', depth: 0, flat: true }); kit.piece(st, g, { shape: { type: 'poly', points: `2,${-cell * 0.34} ${cell * 0.32},${-cell * 0.22} 2,${-cell * 0.08}` }, color: 'rose', depth: 1 }); kit.transform(g, { x: cx(c.goal.x) - cell * 0.08, y: cy(c.goal.y) + cell * 0.05 }); }
      // 거북이(종이 조각): 0° = 위를 봄
      const robot = kit.el('g', { class: 'bc-robot', 'aria-hidden': 'true' }, RL);
      const body = kit.el('g', null, robot); const sc = cell / 72;
      for (const [lx, ly] of [[-17, -14], [17, -14], [-17, 14], [17, 14]]) kit.piece(st, body, { shape: { type: 'ellipse', rx: 7 * sc, ry: 9 * sc, cx: lx * sc, cy: ly * sc }, color: 'mint', depth: 1 });
      kit.piece(st, body, { shape: { type: 'circle', r: 9 * sc, cy: -25 * sc }, color: 'mint', depth: 1 });
      kit.piece(st, body, { shape: { type: 'ellipse', rx: 19 * sc, ry: 22 * sc }, color: 'buttercup', depth: 2 });
      kit.piece(st, body, { shape: { type: 'poly', points: `0,${-12 * sc} ${10 * sc},0 0,${12 * sc} ${-10 * sc},0` }, color: 'peach', depth: 0 });
      kit.el('circle', { cx: -3.5 * sc, cy: -28 * sc, r: 1.8 * sc, fill: P.ink.base }, body); kit.el('circle', { cx: 3.5 * sc, cy: -28 * sc, r: 1.8 * sc, fill: P.ink.base }, body);
      const place = (x, y, d) => { kit.transform(robot, { x: cx(x), y: cy(y) }); kit.transform(body, { r: d * 90 }); };
      place(c.start.x, c.start.y, c.start.d);

      // trace: 칸 고르기
      if (trace && !print) cells.forEach((q) => {
        q.g.setAttribute('tabindex', '0'); q.g.setAttribute('role', 'button'); q.g.style.cursor = 'pointer';
        q.g.setAttribute('aria-label', `왼쪽에서 ${q.x + 1}번째, 위에서 ${q.y + 1}번째 칸`);
        const pickCell = (e) => { if (e) e.preventDefault(); mark = { x: q.x, y: q.y }; changed(`왼쪽에서 ${q.x + 1}번째, 위에서 ${q.y + 1}번째 칸을 골랐어요.`); q.g.focus(); };
        q.g.addEventListener('click', pickCell);
        q.g.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { pickCell(e); return; }
          const d = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowDown: [0, 1], ArrowUp: [0, -1] }[e.key]; if (!d) return;
          e.preventDefault(); const n = cells.find((z) => z.x === q.x + d[0] && z.y === q.y + d[1]); if (n) n.g.focus();
        });
      });
      function paintMark() {
        ML.textContent = '';
        if (!mark) return;
        kit.el('circle', { cx: cx(mark.x), cy: cy(mark.y), r: cell * 0.4, fill: 'none', stroke: P.rose.dark, 'stroke-width': 4, 'stroke-dasharray': '7 5' }, ML);
        // 글은 동그라미 안에 흰 바탕으로 — 칸 테두리에 걸치지 않게
        const fs = Math.max(12, Math.min(16, cell * 0.17));
        kit.el('rect', { x: cx(mark.x) - fs * 3.3, y: cy(mark.y) - fs * 0.75, width: fs * 6.6, height: fs * 1.5, rx: fs * 0.4, fill: '#fff', stroke: P.rose.dark, 'stroke-width': 1.5 }, ML);
        kit.el('text', { x: cx(mark.x), y: cy(mark.y) + fs * 0.36, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, class: 'pk-text', fill: P.rose.dark }, ML).textContent = '여기서 멈춰요';
      }

      // ---- 프로그램 줄·실행 단추(아래) ----
      if (!print) {
        prog = document.createElement('div'); prog.className = 'bc-prog'; prog.setAttribute('role', 'list'); prog.setAttribute('aria-label', '프로그램');
        prog.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px;padding:8px;border-radius:12px;background:#FFF9EE;border:1.5px dashed #E9D9BF;min-height:52px';
        box.appendChild(prog);
        ctl = document.createElement('div'); ctl.className = 'bc-ctl'; ctl.setAttribute('role', 'group'); ctl.setAttribute('aria-label', '실행');
        ctl.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px';
        const b = (act, icon, text) => `<button type="button" class="pl-btn pl-btn--small" data-bc="${act}" tabindex="0" style="min-height:44px"><i class="fi ${icon}" aria-hidden="true"></i> ${text}</button>`;
        ctl.innerHTML = b('run', 'fi-rr-play', '실행') + b('home', 'fi-rr-rotate-left', '처음 자리로') + (trace ? '' : b('del', 'fi-rr-delete', '고른 블록 빼기') + b('clear', 'fi-rr-trash', '모두 지우기'));
        ctl.addEventListener('click', (e) => { const x = e.target.closest('[data-bc]'); if (!x) return; const a = x.dataset.bc; if (a === 'run') play(); else if (a === 'home') { home(); say('거북이를 처음 자리로 돌려놓았어요.'); } else if (a === 'del') removeAt(sel); else if (a === 'clear') { program = []; sel = -1; changed('블록을 모두 지웠어요.'); } });
        box.appendChild(ctl);
        msg = document.createElement('p'); msg.className = 'bc-msg'; msg.setAttribute('aria-live', 'polite');
        msg.style.cssText = 'margin:6px 2px 0;min-height:1.4em;font-weight:700;line-height:1.45;word-break:keep-all';
        box.appendChild(msg);
        prog.addEventListener('click', (e) => { const x = e.target.closest('[data-i]'); if (!x || trace) return; sel = Number(x.dataset.i); paintProg(); focusChip(sel); });
        prog.addEventListener('keydown', (e) => {
          const x = e.target.closest('[data-i]'); if (!x || trace) return; const i = Number(x.dataset.i);
          if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeAt(i); return; }
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); const j = i + (e.key === 'ArrowRight' ? 1 : -1); if (j < 0 || j >= program.length) return; [program[i], program[j]] = [program[j], program[i]]; sel = j; changed(`${label(program[j])} 블록을 ${j + 1}번째로 옮겼어요.`); focusChip(j); return; }
          if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && isRep(program[i])) { e.preventDefault(); const n = Math.max(2, Math.min(9, repN(program[i]) + (e.key === 'ArrowUp' ? 1 : -1))); program[i] = `rep:${n}`; sel = i; changed(`반복 ${n}번`); focusChip(i); }
        });
      }
      const focusChip = (i) => { const x = prog && prog.querySelector(`[data-i="${i}"]`); if (x) x.focus(); };
      function paintProg() {
        if (!prog) return;
        const p = trace ? (o.program || []) : program; let depth = 0;
        if (!p.length) { prog.innerHTML = `<span style="color:#8A7F72;font-weight:700">${trace ? '프로그램이 없어요' : '여기에 블록이 차례로 붙어요'}</span>`; return; }
        prog.innerHTML = p.map((b, i) => {
          if (b === 'end') depth = Math.max(0, depth - 1);
          const inRep = depth > 0; const html = `<span role="listitem" style="display:inline-flex;align-items:center;gap:4px">${isRep(b) && !trace ? `<button type="button" class="pl-btn pl-btn--small" data-rn="${i}" data-d="-1" tabindex="-1" aria-label="반복 수 줄이기" style="min-width:44px;min-height:44px;padding:4px"><i class="fi fi-rr-minus" aria-hidden="true"></i></button>` : ''}<button type="button" class="pl-btn pl-btn--small bc-chip" data-i="${i}" tabindex="0" aria-pressed="${i === sel}" aria-label="${i + 1}번째 블록: ${label(b)}${trace ? '' : '. ←/→ 옮기기, Delete 빼기'}${isRep(b) && !trace ? ', ↑/↓ 반복 수' : ''}" style="min-height:44px;padding:4px 10px;${isRep(b) || b === 'end' ? 'background:var(--pc-lavender-light,#F4F0FA);' : inRep ? 'background:#F4F0FA;' : isIf(b) ? 'background:var(--pc-buttercup-light,#FFF9E8);' : ''}"><small style="opacity:.7">${i + 1}</small> <i class="fi ${ICON[isRep(b) ? 'rep' : isIf(b) ? 'if' : b]}" aria-hidden="true"></i> ${isRep(b) ? `반복 ${repN(b)}번 [` : b === 'end' ? ']' : label(b)}</button>${isRep(b) && !trace ? `<button type="button" class="pl-btn pl-btn--small" data-rn="${i}" data-d="1" tabindex="-1" aria-label="반복 수 늘리기" style="min-width:44px;min-height:44px;padding:4px"><i class="fi fi-rr-plus" aria-hidden="true"></i></button>` : ''}</span>`;
          if (isRep(b)) depth++;
          return html;
        }).join('');
        prog.querySelectorAll('[data-rn]').forEach((x) => x.addEventListener('click', (e) => { e.stopPropagation(); const i = Number(x.dataset.rn); const n = Math.max(2, Math.min(9, repN(program[i]) + Number(x.dataset.d))); program[i] = `rep:${n}`; sel = i; changed(`반복 ${n}번`); }));
      }
      function paintCtl() {
        if (!ctl) return;
        const lock = trace && o.revealAfterCheck && !revealed;
        const r = ctl.querySelector('[data-bc="run"]'); if (r) { r.setAttribute('aria-disabled', String(lock || busy)); r.title = lock ? '맞힌 뒤에 실행해 볼 수 있어요' : ''; }
        const d = ctl.querySelector('[data-bc="del"]'); if (d) d.setAttribute('aria-disabled', String(sel < 0));
      }
      function insert(b) {
        if (countBlocks(program) >= c.maxBlocks && b !== 'end') { kit.tick('no'); say(`블록은 ${c.maxBlocks}개까지 붙여요.`); return; }
        const at = sel >= 0 ? sel + 1 : program.length;
        program.splice(at, 0, b); sel = at; kit.tick();
        changed(`${at + 1}번째에 ‘${label(b)}’ 블록을 붙였어요.`);
        const f = pal && pal.querySelector(`[data-b="${b}"]`); if (f) f.focus();
      }
      function removeAt(i) { if (i < 0 || i >= program.length) { say('먼저 뺄 블록을 눌러 골라요.'); return; } const b = program.splice(i, 1)[0]; sel = Math.min(i, program.length - 1); changed(`‘${label(b)}’ 블록을 뺐어요.`); if (sel >= 0) focusChip(sel); }
      function home() { TL.textContent = ''; starEls.forEach((g) => g.setAttribute('opacity', '1')); place(c.start.x, c.start.y, c.start.d); robot.classList.remove('pk-no'); }
      async function play() {
        if (busy) return;
        if (trace && o.revealAfterCheck && !revealed) { say('먼저 멈출 칸을 고르고 확인해요. 맞힌 뒤에 실행해 볼 수 있어요.'); return; }
        const p = trace ? (o.program || []) : program;
        if (!p.length) { say('먼저 블록을 붙여요.'); return; }
        busy = true; paintCtl(); home();
        const r = run(p, c); const ms = o.speed || 380;
        let prev = r.steps[0];
        for (const s of r.steps.slice(1)) {
          if (!box.isConnected) break;
          prog && prog.querySelectorAll('.bc-chip').forEach((x) => { x.style.outline = Number(x.dataset.i) === s.i ? `3px solid ${P.peach.layer}` : ''; });
          if (s.crash) {
            const f = Object.assign({}, robot.__pk);
            await kit.tween(ms, (q) => kit.transform(robot, { x: f.x + Math.sin(q * Math.PI) * DX[s.d] * cell * 0.3, y: f.y + Math.sin(q * Math.PI) * DY[s.d] * cell * 0.3 }));
            robot.classList.add('pk-no'); kit.tick('no'); break;
          }
          if (s.x !== prev.x || s.y !== prev.y) kit.el('line', { x1: cx(prev.x), y1: cy(prev.y), x2: cx(s.x), y2: cy(s.y), stroke: P.peach.layer, 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-dasharray': '2 9' }, TL);
          const f = { x: cx(prev.x), y: cy(prev.y), r: prev.d * 90 }; const tR = s.d * 90; let dr = tR - f.r; if (dr > 180) dr -= 360; if (dr < -180) dr += 360;
          await kit.tween(ms, (q) => { kit.transform(robot, { x: f.x + (cx(s.x) - f.x) * q, y: f.y + (cy(s.y) - f.y) * q }); kit.transform(body, { r: f.r + dr * q }); });
          const sk = `${s.x},${s.y}`; if (starEls.has(sk)) starEls.get(sk).setAttribute('opacity', '0.3');
          prev = s;
        }
        prog && prog.querySelectorAll('.bc-chip').forEach((x) => { x.style.outline = ''; });
        busy = false; paintCtl();
        say(r.crash ? `${r.crash.i + 1}번째 블록에서 ${r.crash.why === 'rock' ? '바위에 부딪혔어요' : r.crash.why === 'loop' ? '너무 오래 돌았어요' : '판 밖으로 나가려 했어요'}.` : r.atGoal ? '깃발에 도착했어요!' : '거북이가 멈췄어요. 깃발까지 아직 남았어요.');
        kit.recorder.log('block-coding', Object.assign({ run: true, atGoal: r.atGoal, crash: !!r.crash }, state()));
      }

      function state() { return trace ? { mark: mark ? { x: mark.x, y: mark.y } : null } : { program: program.slice() }; }
      function changed(text) {
        revealed = false; home();
        paintMark(); paintProg(); paintCtl();
        if (text) say(text);
        kit.recorder.log('block-coding', state());
      }
      function load(s) {
        s = s || {};
        program = (s.program || []).filter(okBlock); mark = s.mark && Number.isInteger(s.mark.x) ? { x: s.mark.x, y: s.mark.y } : null;
        sel = -1; revealed = false; if (msg) msg.textContent = '';
        home(); paintMark(); paintProg(); paintCtl();
      }
      // 활동지: 프로그램을 그림 아래에 글로 적는다(printProgram)
      if (print && o.printProgram && o.program) {
        const n = o.program.length; st.svg.setAttribute('viewBox', `0 0 ${W} ${H + 40 + Math.ceil(n / 2) * 34}`);
        o.program.forEach((b, i) => { kit.el('text', { x: 20 + (i % 2) * (W / 2), y: H + 34 + Math.floor(i / 2) * 34, 'font-size': 24, class: 'pk-text', fill: '#000' }, st.svg).textContent = `${i + 1}. ${isRep(b) ? `반복 ${repN(b)}번 [` : b === 'end' ? ']' : label(b)}`; });
      }
      load({});
      return {
        getState: state,
        setState(s) { if (base == null && s && s.program) base = s.program.filter(okBlock); load(s); },
        setTarget(t) { target = t || null; },
        reset() { load({}); },
        solve(t) { load(solve(t || target, o, base)); },
        check(t, opts) {
          const r = judge(state(), t || target, o, base);
          if (!(opts && opts.forHint) && r.correct && trace && o.revealAfterCheck) { revealed = true; paintCtl(); }
          if (!(opts && opts.forHint) && !r.correct && r.step != null && prog) { const x = prog.querySelector(`[data-i="${r.step}"]`); if (x) { x.classList.add('pk-no'); x.style.boxShadow = `0 0 0 3px ${P.rose.layer}`; setTimeout(() => { if (x.isConnected) x.style.boxShadow = ''; }, 2200); } }
          return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback, hint: r.hint };
        },
        hint(t, opts) { return hintFor(state(), t || target, o, opts, base); },
        wrongAnswer(t) { return wrongAnswer(t || target, o, state(), base); },
        distance,
        async demo(t) { load(solve(t || target, o, base)); await play(); },
      };
    },
  });
})(window.PaperKit);
