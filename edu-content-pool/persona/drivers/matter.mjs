// 물질 실험대(matter) 조작기 — 입자 상자(온도), 카드 분류, 용해·진하기, 혼합물 분리.
// 학생이 보는 단추(−/+, 카드, 칸, 도구)만 누른다. 상태는 읽기만 한다.
import { makeCtx, answerAsk, answerNum } from './_sci-common.mjs';

export const tools = ['matter'];

const TOOL_NAME = { magnet: '자석 대기', sieve: '체로 치기', water: '물 붓기', float: '뜬 것 건지기', filter: '거름종이로 거르기', evaporate: '물 증발시키기' };
const ALL_TOOLS = Object.keys(TOOL_NAME);

// 혼합물 분리: 학생이 머릿속으로 해 보는 '이 도구를 쓰면 무엇이 나뉘는가' 어림
function simulate(parts, seq) {
  const S = { mix: parts.map((_, i) => i), water: false, dis: [], piles: [] };
  for (const k of seq) {
    const take = (f) => { const got = S.mix.filter((i) => f(parts[i])); S.mix = S.mix.filter((i) => !f(parts[i])); return got; };
    let got = [];
    if (k === 'magnet') got = take((p) => p.magnet);
    else if (k === 'sieve') got = take((p) => p.big);
    else if (k === 'float') got = S.water ? take((p) => p.float) : [];
    else if (k === 'water') { if (!S.water) { S.water = true; const d = S.mix.filter((i) => parts[i].dissolve); S.dis = S.dis.concat(d); S.mix = S.mix.filter((i) => !parts[i].dissolve); } }
    else if (k === 'filter') got = S.water ? take(() => true) : [];
    else if (k === 'evaporate') { if (S.water) { got = S.dis.concat(S.mix); S.dis = []; S.mix = []; S.water = false; } }
    if (k !== 'water' && got.length) S.piles.push(got);
  }
  return S;
}
const inCup = (S) => S.mix.concat(S.dis);
const aloneIn = (S, i) => S.piles.some((p) => p.length === 1 && p[0] === i) || (inCup(S).length === 1 && S.mix[0] === i && !S.dis.length);
const allSeparated = (S) => S.piles.every((p) => p.length === 1) && (inCup(S).length === 0 || (inCup(S).length === 1 && !S.dis.length));

function findSequence(parts, avail, ok) {
  let q = [[]];
  for (let d = 0; d <= 6; d++) {
    for (const seq of q) if (ok(simulate(parts, seq))) return seq;
    const nx = [];
    for (const seq of q) for (const k of avail) if (seq[seq.length - 1] !== k) nx.push(seq.concat(k));
    q = nx.slice(0, 4000);
  }
  return null;
}

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const mode = ['sort', 'dissolve', 'separate'].includes(o.mode) ? o.mode : 'particles';
  const root = rootSel || '#tool';
  let reached = true;

  const stepper = (label) => page.locator(`${root} [role="group"][aria-label="${label}"]`);
  // −/+ 단추로 값을 getter 가 target 에 닿을 때까지 누른다
  async function stepTo(label, key, want, unit) {
    const g = stepper(label);
    if (!(await g.count())) { ctx.problem('control-missing', `'${label}' 조절 단추가 없음`); return false; }
    let cur = (await ctx.state())[key];
    for (let guard = 0; guard < 40 && cur !== want && !ctx.over(); guard++) {
      const n = Math.max(1, Math.round(Math.abs(want - cur) / unit));
      const btn = g.locator(`button[aria-label="${label} ${want > cur ? '늘리기' : '줄이기'}"]`);
      const ok = await ctx.tapN(btn, `${label} ${want > cur ? '+' : '−'}`, n);
      if (!ok) return false;
      const nx = (await ctx.state())[key];
      if (nx === cur) { ctx.problem('unreachable', `'${label}'이(가) ${want} 까지 바뀌지 않음(지금 ${cur})`); return false; }
      cur = nx;
    }
    if (cur !== want) { ctx.problem('unreachable', `'${label}'을(를) ${want}로 맞출 수 없음(지금 ${cur})`); return false; }
    return true;
  }

  async function pickRadio(groupLabel, idx) {
    const g = page.locator(`${root} [role="radiogroup"][aria-label="${groupLabel}"] [role="radio"]`);
    if (idx >= (await g.count())) { ctx.problem('unreachable', `'${groupLabel}' 보기에 ${idx + 1}번이 없음`); return false; }
    return ctx.tapExpect(g.nth(idx), `${groupLabel} ${idx + 1}번`, async () => (await g.nth(idx).getAttribute('aria-checked')) === 'true');
  }

  // ---------- 입자 상자 ----------
  if (mode === 'particles' && !Array.isArray(o.boxes)) {
    const sub = Object.assign({ melt: 0, boil: 100 }, o.substance || {});
    const [tmin, tmax, tstep] = Array.isArray(o.temps) && o.temps.length === 3 ? o.temps : [-20, 120, 10];
    const phaseOf = (c) => (c < sub.melt ? 'solid' : c >= sub.boil ? 'gas' : 'liquid');
    if (t.phase != null || t.temp != null) {
      const cur = (await ctx.state()).temp;
      let want = null;
      if (t.temp != null) want = t.temp;
      else {
        const cands = []; for (let c = tmin; c <= tmax; c += tstep) if (phaseOf(c) === t.phase) cands.push(c);
        if (!cands.length) { ctx.problem('unreachable', `온도 눈금(${tmin}~${tmax})에서 ${t.phase} 상태가 되는 온도가 없음`); reached = false; }
        else want = cands.sort((a, b) => Math.abs(a - cur) - Math.abs(b - cur))[0];
      }
      if (want != null) {
        if (want < tmin || want > tmax || (want - tmin) % tstep !== 0) { ctx.problem('unreachable', `온도 ${want}°C 는 눈금(${tmin}~${tmax}, ${tstep}칸)에 없음`); reached = false; }
        else reached = (await stepTo('온도', 'temp', want, tstep)) && reached;
      }
    }
  }

  // ---------- 카드 분류 ----------
  if (mode === 'sort' && t.bins) {
    const cards = (o.cards || []).map((c) => ({ id: String(c.id), name: c.name || String(c.id) }));
    const bins = (o.bins || []).map(String);
    for (const [id, bin] of Object.entries(t.bins)) {
      const card = cards.find((c) => c.id === id);
      if (!card) { ctx.problem('unreachable', `카드 '${id}'가 이 판에 없음`); reached = false; continue; }
      if (bin >= bins.length) { ctx.problem('unreachable', `칸 ${bin + 1}번이 없음(칸 ${bins.length}개)`); reached = false; continue; }
      if (((await ctx.state()).placed || {})[id] === bin) continue;
      const cardLoc = page.locator(`${root} .mt-card:has(> span:text-is("${card.name.replace(/"/g, '\\"')}"))`);
      if (!(await cardLoc.count())) { ctx.problem('control-missing', `카드 '${card.name}'가 화면에 없음`); reached = false; continue; }
      const placedOk = async () => ((await ctx.state()).placed || {})[id] === bin;
      if (ctx.input === 'keyboard') {
        // 카드에 초점을 두고 숫자 키(칸 번호)로 넣는다 — 숫자 키는 9번 칸까지만
        if (bin + 1 > 9) { ctx.problem('no-keyboard-path', `칸 ${bin + 1}번은 숫자 키로 고를 수 없음`); reached = false; continue; }
        if (!(await ctx.focusViaTab(cardLoc, `카드 ${card.name}`))) { reached = false; continue; }
        await ctx.key(String(bin + 1));
        if (!(await placedOk())) { ctx.problem('no-keyboard-path', `카드 ${card.name}: 숫자 키로 칸에 넣히지 않음`); reached = false; }
      } else {
        await ctx.tap(cardLoc, `카드 ${card.name}`);
        const binBtn = page.locator(`${root} button[aria-label^="${bin + 1}번 칸 "]`);
        if (!(await binBtn.count())) { ctx.problem('control-missing', `칸 ${bin + 1}번 단추가 없음`); reached = false; continue; }
        await ctx.tap(binBtn.first(), `칸 ${bin + 1}번`);
        if (!(await placedOk())) {
          // 카드가 이미 골라진 채여서 눌러도 돌기만 했을 수 있다 — 한 번 더
          await ctx.tap(cardLoc, `카드 ${card.name}`); await ctx.tap(binBtn.first(), `칸 ${bin + 1}번`);
          if (!(await placedOk())) { reached = false; ctx.problem('driver-limit', `카드 ${card.name} 를 ${bin + 1}번 칸에 넣지 못함`); }
        }
      }
    }
  }

  // ---------- 용해·진하기 ----------
  if (mode === 'dissolve') {
    const sol = Object.assign({ name: '설탕', perSpoon: 5, limit: 35 }, o.solute || {});
    const [wmin, wmax, wstep] = Array.isArray(o.waters) && o.waters.length === 3 ? o.waters : [50, 200, 50];
    const maxS = o.maxSpoons || 12;
    const temps = Array.isArray(o.temps) && o.temps.length ? o.temps : null;
    const spoonLabel = `${sol.name} 숟가락`;
    const limitOf = (ti) => (temps ? Number(temps[ti].limit) : sol.limit);
    let water; let spoons; let temp;
    const refresh = async () => { const s = await ctx.state(); water = s.water; spoons = s.spoons; temp = s.temp || 0; };
    await refresh();
    const setWater = async (w) => (w === water ? true : (await stepTo('물의 양', 'water', w, wstep)));
    const setSpoons = async (s) => (s === spoons ? true : (await stepTo(spoonLabel, 'spoons', s, 1)));
    if (t.set) {
      if (t.set.temp != null) { if (temps) { reached = (await pickRadio('물의 온도', t.set.temp)) && reached; } else { ctx.problem('control-missing', '물의 온도를 고르는 칸이 없음'); reached = false; } }
      if (t.set.water != null) reached = (await setWater(t.set.water)) && reached;
      await refresh();
      if (t.set.spoons != null) reached = (await setSpoons(t.set.spoons)) && reached;
      await refresh();
    }
    if (t.saturated) {
      // 한 숟가락씩 넣으며 바닥에 알갱이가 남는 첫 숟가락을 찾는다
      let s = 1; const cap = (limitOf(temp) * water) / 100;
      while (s <= maxS && s * sol.perSpoon <= cap) s++;
      if (s > maxS) { ctx.problem('unreachable', `숟가락 ${maxS}개까지 넣어도 포화가 되지 않음(물 ${water} mL)`); reached = false; }
      else reached = (await setSpoons(s)) && reached;
    }
    if (t.conc != null) {
      let pick = null;
      for (let w = wmin; w <= wmax; w += wstep) { const s = (t.conc * w) / 100; if (Number.isInteger(s) && s >= 0 && s <= maxS && (!pick || w === water)) pick = [w, s]; }
      if (!pick) { ctx.problem('unreachable', `진하기 ${t.conc} g/100mL 를 물 ${wmin}~${wmax} mL·숟가락 ${maxS}개로 만들 수 없음`); reached = false; }
      else { reached = (await setWater(pick[0])) && reached; await refresh(); reached = (await setSpoons(pick[1])) && reached; }
    }
    if (t.sameAs != null) {
      const c = (o.compare || [])[t.sameAs - 1];
      if (!c) { ctx.problem('control-missing', `견줄 ${t.sameAs}번 그릇이 없음`); reached = false; }
      else {
        const cw = Number(c.water) || 100; const cs = Number(c.spoons) || 0; let pick = null;
        for (let w = wmin; w <= wmax; w += wstep) { const s = (cs * w) / cw; if (Number.isInteger(s) && s <= maxS && (!pick || pick[0] === cw)) pick = [w, s]; }
        if (!pick) { ctx.problem('unreachable', '견줄 그릇과 진하기가 같은 물·숟가락 짝을 만들 수 없음'); reached = false; }
        else { reached = (await setWater(pick[0])) && reached; await refresh(); reached = (await setSpoons(pick[1])) && reached; }
      }
    }
  }

  // ---------- 혼합물 분리 ----------
  if (mode === 'separate' && (t.separated || t.got != null || t.steps)) {
    const parts = (Array.isArray(o.parts) && o.parts.length ? o.parts : [{ name: '철 가루', magnet: true }, { name: '소금', dissolve: true }, { name: '모래' }]).slice(0, 6).map((p) => Object.assign({}, p, { name: String(p.name) }));
    const avail = (Array.isArray(o.tools) && o.tools.length ? o.tools : ALL_TOOLS).filter((k) => TOOL_NAME[k]);
    let seq = null;
    if (t.steps) seq = t.steps.slice();
    else {
      seq = findSequence(parts, avail, (S) => (!t.separated || allSeparated(S)) && (t.got == null || (() => { const i = parts.findIndex((p) => p.name === t.got); return i >= 0 && aloneIn(S, i); })()));
    }
    if (!seq || !seq.length) { ctx.problem('unreachable', '쓸 수 있는 도구를 차례로 써도 목표대로 나눌 수 없음'); reached = false; }
    else {
      // 처음으로 눌러 둔 도구가 있으면 되돌린 뒤 시작
      let guard = 0;
      while (((await ctx.state()).steps || []).length && guard++ < 10) await ctx.tap(page.locator(`${root} button[aria-label="한 단계 되돌리기"]`), '한 단계 되돌리기');
      for (const k of seq) {
        const btn = page.locator(`${root} button[aria-label="${TOOL_NAME[k]}"]`);
        if (!(await btn.count())) { ctx.problem('control-missing', `도구 단추 '${TOOL_NAME[k]}'가 없음`); reached = false; break; }
        const before = ((await ctx.state()).steps || []).length;
        await ctx.tapExpect(btn, TOOL_NAME[k], async () => ((await ctx.state()).steps || []).length === before + 1);
      }
      reached = ((await ctx.state()).steps || []).join() === seq.join() && reached;
    }
  }

  // ---------- 묻기 칸(보기 고르기·수 쓰기) ----------
  if (t.pick != null) reached = (await answerAsk(ctx, `${root} [role="radiogroup"][aria-label="${((o.ask && o.ask.q) || '고르기').replace(/"/g, '\\"')}"] [role="radio"]`, t)) && reached;
  if (t.num != null) reached = (await answerNum(ctx, root, t)) && reached;

  return ctx.result(reached);
}
