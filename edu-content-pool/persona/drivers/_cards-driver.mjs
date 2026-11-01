// 카드 엔진(engine/tools/_cards.js)을 쓰는 교구들의 공통 조작기 + 그 곁의 자체 그림 모드(scale·branch·checklist·pay·budget·flip)와 분류판.
// 실제 DOM 입력(page.mouse / page.touchscreen / CDP 터치 / page.keyboard)만 쓰고, 상태는 readState() 로 읽기만 한다. setState·solve·reset·__pl.goto 는 쓰지 않는다.
//
// 입력 방식(persona.input)
//   mouse    카드를 끌어 칸에 놓기(기본). persona.mouseStyle==='click' 이면 카드를 누른 뒤 칸을 누른다(pick 은 기본이 누르기).
//   touch    카드를 누른 뒤 칸을 누른다(기본). persona.touchStyle==='drag' 이면 CDP 터치 이벤트로 끌어 놓는다. 카드·칸이 44px 미만이면 touch-target-small.
//   keyboard Tab 으로 카드에 닿고 Enter→칸 방향키→Enter(기본). persona.keyStyle==='digit' 이면 숫자키, 'arrow' 이면 방향키 한 칸씩. 닿지 못하면 no-keyboard-path.
// persona.settleMs: 카드 이동 애니메이션을 기다리는 시간(기본 300).

const MIN_TOUCH = 44;
const DEFAULT_MODE = { mindmap: 'sort', story: 'order', timeline: 'order', lifecycle: 'order', wordcards: 'match', emotion: 'match', kitchen: 'sort', economy: 'sort' };
const CUSTOM_MODES = { emotion: ['scale', 'branch'], kitchen: ['checklist'], economy: ['pay', 'budget'], wordcards: ['flip'] };

export const tools = ['mindmap', 'story', 'wordcards', 'emotion', 'timeline', 'kitchen', 'economy', 'lifecycle', 'sortboard'];

const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const sleep = (page, ms) => page.waitForTimeout(ms);

// ───────────────────────── 공통 입력 도구 ─────────────────────────
function makeCtx(args) {
  const { page, persona, readState, log } = args;
  const input = (persona && persona.input) || 'mouse'; const root = args.root || '#tool';
  const problems = []; const seen = new Set();
  const ctx = {
    ...args, input, root, actions: 0, problems, errors: [],
    settleMs: (persona && persona.settleMs) || 300,
    problem(kind, msg) { const k = `${kind}|${msg}`; if (seen.has(k)) return; seen.add(k); problems.push({ kind, msg }); if (log) try { log(`[${kind}] ${msg}`); } catch (_) { /* 기록 실패는 무시 */ } },
    async state() { return (await readState()) || {}; },
    async settle(ms) { await sleep(page, ms == null ? ctx.settleMs : ms); },
  };
  return ctx;
}

function watchErrors(ctx) {
  const { page } = ctx;
  const onErr = (e) => ctx.errors.push(`pageerror: ${e && e.message ? e.message : e}`);
  const onCon = (m) => { if (m.type() === 'error' && !/fonts|uicons|favicon|net::ERR|Failed to load resource/.test(m.text())) ctx.errors.push(`console: ${m.text().slice(0, 200)}`); };
  page.on('pageerror', onErr); page.on('console', onCon);
  return () => { page.off('pageerror', onErr); page.off('console', onCon); };
}

const cdpOf = new WeakMap();
async function cdp(page) {
  if (!cdpOf.has(page)) cdpOf.set(page, await page.context().newCDPSession(page));
  return cdpOf.get(page);
}

async function pointerTap(ctx, x, y) {
  ctx.actions++;
  if (ctx.input === 'touch') await ctx.page.touchscreen.tap(x, y);
  else await ctx.page.mouse.click(x, y);
}
async function pointerDrag(ctx, a, b) {
  ctx.actions++;
  const { page } = ctx;
  if (ctx.input === 'touch') {
    const s = await cdp(page);
    const pt = (p) => [{ x: p.x, y: p.y, id: 1 }];
    await s.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(a) });
    for (let i = 1; i <= 8; i++) await s.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt({ x: a.x + ((b.x - a.x) * i) / 8, y: a.y + ((b.y - a.y) * i) / 8 }) });
    await s.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  } else {
    await page.mouse.move(a.x, a.y);
    await page.mouse.down();
    await page.mouse.move(b.x, b.y, { steps: 10 });
    await page.mouse.up();
  }
}
async function key(ctx, k) { ctx.actions++; await ctx.page.keyboard.press(k); }

// 키보드 전용: 화면에서 Tab 으로 가야 하는 대상에 닿을 때까지 누른다. test(page) → 지금 초점이 그 대상인지
async function tabUntil(ctx, test, max = 140) {
  const { page } = ctx;
  if (await page.evaluate(test.fn, test.arg)) return true;
  const inTool = await page.evaluate((r) => !!(document.activeElement && document.activeElement.closest && document.activeElement.closest(r)), ctx.root);
  if (!inTool) await page.evaluate(() => { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); });
  for (let i = 0; i < max; i++) {
    await key(ctx, 'Tab');
    if (await page.evaluate(test.fn, test.arg)) return true;
  }
  for (let i = 0; i < max; i++) {
    await key(ctx, 'Shift+Tab');
    if (await page.evaluate(test.fn, test.arg)) return true;
  }
  return false;
}

// 화면 가운데로 스크롤(사람이 손가락·휠로 내리는 것과 같다)
async function scrollTo(ctx, sel, idx, block = 'center') {
  await ctx.page.evaluate(([s, i, b]) => { const e = document.querySelectorAll(s)[i]; if (e) e.scrollIntoView({ block: b, inline: 'center' }); }, [sel, idx, block]);
}

// n 개 요소 목록의 화면 상자(뒤에 .pk-hit 이 있으면 눌림 영역으로 쓴다)
async function boxesOf(ctx, sel) {
  return ctx.page.evaluate(([s]) => {
    const rc = (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height, cx: r.x + r.width / 2, cy: r.y + r.height / 2 }; };
    return [...document.querySelectorAll(s)].map((e) => { const h = e.querySelector('rect.pk-hit'); return { g: rc(e), hit: h ? rc(h) : rc(e), label: e.getAttribute('aria-label') || '' }; });
  }, [sel]);
}

function touchCheck(ctx, what, box) {
  if (ctx.input !== 'touch' || !box) return;
  const m = Math.min(box.w, box.h);
  if (m < MIN_TOUCH - 0.5) ctx.problem('touch-target-small', `${what}: 눌리는 영역이 ${Math.round(box.w)}×${Math.round(box.h)}px(44px 미만)`);
}

async function viewport(ctx) { return ctx.page.evaluate(() => ({ w: innerWidth, h: innerHeight })); }
const inView = (p, v, pad = 6) => p.x >= pad && p.y >= pad && p.x <= v.w - pad && p.y <= v.h - pad;

// ───────────────────────── 목표 계산(상태·목표만 읽는다) ─────────────────────────
function buildGoal(mode, cards, slots, t) {
  const ids = new Set(cards.map((c) => c.id));
  const slotIdx = (k) => slots.findIndex((s) => s.id === String(k));
  const miss = []; const capOf = (i) => (slots[i].cap > 0 ? slots[i].cap : Infinity);
  t = t || {};
  let kind; let allow; let want; let cyclic = false;
  if (mode === 'sort' || mode === 'pick') {
    kind = 'card'; allow = new Map(cards.map((c) => [c.id, new Set()]));
    if (mode === 'pick') {
      arr(t.pick).map(String).forEach((id) => { if (!ids.has(id)) miss.push(`카드 ‘${id}’`); });
      const w = new Set(arr(t.pick).map(String)); cards.forEach((c) => allow.get(c.id).add(w.has(c.id) ? 0 : null));
    } else {
      for (const [k, v] of Object.entries(t.sort || {})) {
        const si = slotIdx(k);
        if (si >= 0) arr(v).forEach((id) => { if (ids.has(String(id))) allow.get(String(id)).add(si); else miss.push(`카드 ‘${id}’`); });
        else if (ids.has(k)) arr(v).forEach((b) => { const j = slotIdx(b); if (j >= 0) allow.get(k).add(j); else miss.push(`칸 ‘${b}’`); });
        else miss.push(`칸 ‘${k}’`);
      }
      cards.forEach((c) => { if (!allow.get(c.id).size) allow.get(c.id).add(null); });
    }
  } else {
    kind = 'slot';
    if (mode === 'order') {
      const flat = arr(t.order).flat(); flat.forEach((id) => { if (!ids.has(String(id))) miss.push(`카드 ‘${id}’`); });
      if (flat.length > slots.length) miss.push(`자리 ${flat.length}개(지금 ${slots.length}개)`);
      const seq = arr(t.order).flatMap((e) => (Array.isArray(e) ? e.map(() => new Set(e.map(String))) : [new Set([String(e)])]));
      want = slots.map((_, i) => seq[i] || null);
      cyclic = !!t.cyclic && want.every(Boolean);
    } else {
      const src = t.match || t.fill || t.pairs || {};
      want = slots.map((s) => (src[s.id] != null ? new Set(arr(src[s.id]).map(String)) : null));
      for (const [k, v] of Object.entries(src)) { if (slotIdx(k) < 0) miss.push(`칸 ‘${k}’`); else if (!arr(v).some((id) => ids.has(String(id)))) miss.push(`카드 ‘${arr(v).join('|')}’`); }
    }
  }
  // 풀이(카드 → 칸 번호|null)
  const sol = new Map(cards.map((c) => [c.id, null]));
  if (kind === 'card') cards.forEach((c) => sol.set(c.id, [...allow.get(c.id)][0]));
  else {
    const owner = new Map();
    const tryAssign = (i, seenSet) => {
      for (const id of want[i] || []) {
        if (!ids.has(id) || seenSet.has(id)) continue;
        seenSet.add(id);
        if (!owner.has(id) || tryAssign(owner.get(id), seenSet)) { owner.set(id, i); return true; }
      }
      return false;
    };
    want.forEach((w, i) => { if (w && !tryAssign(i, new Set())) miss.push(`${i + 1}번째 칸에 놓을 카드`); });
    for (const [id, i] of owner) sol.set(id, i);
  }
  // 한 칸에 놓을 수 있는 장 수 넘침
  const per = new Map(); for (const v of sol.values()) if (v != null) per.set(v, (per.get(v) || 0) + 1);
  for (const [i, n] of per) if (n > capOf(i)) miss.push(`${i + 1}번 칸에 ${n}장(한 번에 ${capOf(i)}장만 들어감)`);
  const ok = (at) => {
    if (kind === 'card') {
      for (const c of cards) { const a = at[c.id] == null ? null : at[c.id]; if (!allow.get(c.id).has(a)) return false; }
      if (mode === 'pick' && !cards.some((c) => at[c.id] === 0)) return false;
      return true;
    }
    const occ = slots.map((_, i) => cards.find((c) => at[c.id] === i) || null);
    if (slots.some((_, i) => want[i] && !occ[i])) return false;
    const n = slots.length;
    for (let r = 0; r < (cyclic ? n : 1); r++) {
      let good = true;
      for (let i = 0; i < n; i++) { const w = want[(i - r + n) % n]; if (w && occ[i] && !w.has(occ[i].id)) { good = false; break; } }
      if (good) return true;
    }
    return false;
  };
  return { kind, sol, ok, miss: [...new Set(miss)] };
}

// wordcards 의 듣기·철자는 카드 판 모드로 바뀌어 있다 — 겉모양 목표를 카드 판 목표로 읽는다
function mapTarget(toolId, t, M) {
  if (!t || typeof t !== 'object') return t;
  if (toolId === 'wordcards') {
    if (t.listen != null) return { pick: arr(t.listen).map(String) };
    if (t.spell != null) {
      const seen = {}; const fill = {};
      [...String(t.spell)].filter((ch) => ch.trim()).forEach((ch, i) => { seen[ch] = (seen[ch] || 0) + 1; fill[String(i + 1)] = M.cards.map((c) => c.id).filter((id) => id.replace(/\*+$/, '') === ch); });
      return { fill };
    }
  }
  return t;
}

// 화면이 읽어 준 이름(aria-label) 쪽 표기
function slotName(mode, s, i) {
  if (mode === 'pick') return s.label;
  if (mode === 'fill') return `${i + 1}번 빈칸`;
  if (mode === 'order') return s.label ? `‘${s.label}’ 자리` : `${i + 1}번째 자리`;
  return s.label ? `‘${s.label.replace(/_{3,}/g, '□')}’ 칸` : `${i + 1}번 칸`;
}

async function boardModel(ctx) {
  const { page, toolId, options } = ctx;
  const defMode = DEFAULT_MODE[toolId] || 'sort';
  return page.evaluate(([id, o, dm]) => {
    const K = window.PaperKit; if (!K || !K.cards) return { error: 'PaperKit.cards 없음' };
    let o2 = o;
    try { const t = K.tools[id]; const m = t && t.model ? t.model(o) : null; if (m && m.options) o2 = m.options; } catch (_) { /* 겉모양 model 이 없으면 원래 옵션 */ }
    const M = K.cards.model(o2, { mode: dm });
    return { mode: M.mode, cards: M.cards.map((c) => ({ id: c.id, name: c.name })), slots: M.slots.map((s) => ({ id: s.id, label: s.label, cap: s.cap === Infinity ? 0 : s.cap })) };
  }, [toolId, JSON.parse(JSON.stringify(options || {})), defMode]);
}

// ───────────────────────── 카드 판 조작 ─────────────────────────
const cardFinder = ({ name, loc, root }) => {
  const rc = (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height, cx: r.x + r.width / 2, cy: r.y + r.height / 2 }; };
  const els = [...document.querySelectorAll(`${root} .cd-card`)];
  let cand = els.filter((e) => (e.getAttribute('aria-label') || '').startsWith(`${name} 카드. `));
  if (cand.length > 1 && loc) { const f = cand.filter((e) => (e.getAttribute('aria-label') || '').startsWith(`${name} 카드. ${loc}.`)); if (f.length) cand = f; }
  const e = cand[0]; if (!e) return null;
  const h = e.querySelector('rect.pk-hit');
  return { g: rc(e), hit: h ? rc(h) : rc(e), n: cand.length };
};
const cardFocused = ({ name, loc, root }) => {
  const a = document.activeElement; const l = (a && a.getAttribute && a.getAttribute('aria-label')) || '';
  if (!a || !a.classList || !a.classList.contains('cd-card')) return false;
  if (!l.startsWith(`${name} 카드. `)) return false;
  return !loc || l.startsWith(`${name} 카드. ${loc}.`) || [...document.querySelectorAll(`${root} .cd-card`)].filter((e) => (e.getAttribute('aria-label') || '').startsWith(`${name} 카드. `)).length === 1;
};
const destFinder = ({ idx, root }) => {
  const rc = (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height, cx: r.x + r.width / 2, cy: r.y + r.height / 2 }; };
  const e = idx == null ? document.querySelector(`${root} .cd-tray`) : document.querySelectorAll(`${root} .cd-slot`)[idx];
  if (!e) return null;
  const inner = e.querySelector('rect[stroke-dasharray]');
  // 눌리는 칸 바탕 = g 안에서 가장 큰 사각형(칸 이름 띠·번호 동그라미·점선 안쪽 줄은 더 작다)
  let face = null; let fa = 0;
  e.querySelectorAll('rect').forEach((r) => { const b = r.getBoundingClientRect(); if (b.width * b.height > fa) { fa = b.width * b.height; face = rc(r); } });
  return { g: rc(e), inner: inner ? rc(inner) : null, face };
};
const focusedSlot = (root) => {
  const a = document.activeElement; if (!a) return null;
  if (a.classList && a.classList.contains('cd-tray')) return { tray: true };
  const i = [...document.querySelectorAll(`${root} .cd-slot`)].indexOf(a);
  return i >= 0 ? { idx: i } : null;
};

async function locCard(ctx, M, c, at) {
  const loc = at == null ? '아직 놓지 않음' : `${slotName(M.mode, M.slots[at], at)}에 있음`;
  return { name: c.name, loc };
}

async function moveCard(ctx, M, c, toIdx, atNow) {
  const { page, input, persona } = ctx;
  const key0 = { ...(await locCard(ctx, M, c, atNow)), root: ctx.root };
  const find = async () => page.evaluate(cardFinder, key0);
  let f = await find();
  if (!f) { ctx.problem('driver-limit', `카드 ‘${c.name}’ 을(를) 화면에서 찾지 못함(이름 대조 실패)`); return false; }
  if (input === 'keyboard') return kbMove(ctx, M, c, key0, toIdx);
  const style = input === 'touch' ? (persona.touchStyle || 'tap') : (persona.mouseStyle || (M.mode === 'pick' ? 'click' : 'drag'));
  // 화면에 들어오게 가운데로
  const cardIdx = await page.evaluate(({ name, root }) => [...document.querySelectorAll(`${root} .cd-card`)].findIndex((e) => (e.getAttribute('aria-label') || '').startsWith(`${name} 카드. `)), key0);
  await scrollTo(ctx, `${ctx.root} .cd-card`, cardIdx);
  f = await find();
  touchCheck(ctx, `카드 ‘${c.name}’`, f.hit);
  const destIdx = toIdx; const sel = destIdx == null ? `${ctx.root} .cd-tray` : `${ctx.root} .cd-slot`; const si = destIdx == null ? 0 : destIdx;
  let d = await page.evaluate(destFinder, { idx: destIdx, root: ctx.root });
  if (!d) { ctx.problem('unreachable', `${destIdx == null ? '카드 칸' : `${destIdx + 1}번째 칸`}이 화면에 없음`); return false; }
  const vp = await viewport(ctx);
  const pointsOf = (dd) => {
    const out = [];
    if (destIdx == null) { out.push({ x: dd.g.cx, y: dd.g.y + 10 }, { x: dd.g.x + dd.g.w - 24, y: dd.g.y + 10 }); return out; }
    if (dd.inner) out.push({ x: dd.inner.cx, y: dd.inner.cy });
    out.push({ x: dd.g.cx, y: dd.g.cy }, { x: dd.g.cx, y: dd.g.y + dd.g.h * 0.7 }, { x: dd.g.x + dd.g.w * 0.3, y: dd.g.cy });
    return out;
  };
  touchCheck(ctx, destIdx == null ? '카드 칸' : `${destIdx + 1}번째 칸`, d.face || d.inner || d.g);
  const before = JSON.stringify((await ctx.state()).at || {});
  const tries = pointsOf(d).length;
  for (let k = 0; k < tries; k++) {
    // 끌어 놓기는 카드와 칸이 한 화면에 들어올 때만 — 아니면 누르고 → 스크롤 → 칸 누르기
    f = await find(); d = await page.evaluate(destFinder, { idx: destIdx, root: ctx.root });
    const to = pointsOf(d)[k]; const from = { x: f.hit.cx, y: f.hit.cy };
    let mode = style;
    if (mode === 'drag' && !(inView(from, vp) && inView(to, vp))) {
      // 두 곳이 한 화면에 들어오도록 가운데로 한 번 더 맞춰 본다
      const midY = (from.y + to.y) / 2; await page.evaluate((dy) => window.scrollBy(0, dy), midY - vp.h / 2); await ctx.settle(80);
      f = await find(); d = await page.evaluate(destFinder, { idx: destIdx, root: ctx.root });
      const to2 = pointsOf(d)[k]; const from2 = { x: f.hit.cx, y: f.hit.cy };
      if (inView(from2, vp) && inView(to2, vp)) { await pointerDrag(ctx, from2, to2); await ctx.settle(); if (await moved(ctx, before)) return true; continue; }
      mode = input === 'touch' ? 'tap' : 'click';
    }
    if (mode === 'drag') { await pointerDrag(ctx, from, to); }
    else {
      // 눌러 고르기 대체 경로: 위에서 쪽을 굴렸을 수 있으니 카드를 다시 화면에 들이고 그 자리에서 다시 잰 좌표를 누른다(낡은 좌표는 빗나간다)
      await scrollTo(ctx, `${ctx.root} .cd-card`, cardIdx); await ctx.settle(80);
      f = await find();
      if (!f) { ctx.problem('driver-limit', `카드 ‘${c.name}’ 을(를) 스크롤 뒤 화면에서 찾지 못함`); return false; }
      await pointerTap(ctx, f.hit.cx, f.hit.cy); await ctx.settle(120);
      if (M.mode === 'pick') { await ctx.settle(); if (await moved(ctx, before)) return true; continue; }
      await scrollTo(ctx, sel, si); await ctx.settle(80);
      d = await page.evaluate(destFinder, { idx: destIdx, root: ctx.root });
      const to3 = pointsOf(d)[k];
      await pointerTap(ctx, to3.x, to3.y);
    }
    await ctx.settle();
    if (await moved(ctx, before)) return true;
  }
  ctx.problem('driver-limit', `카드 ‘${c.name}’ 을(를) ${destIdx == null ? '카드 칸' : `${destIdx + 1}번째 칸`}에 놓는 조작이 상태를 바꾸지 못함(${style})`);
  return false;
}
async function moved(ctx, before) { return JSON.stringify((await ctx.state()).at || {}) !== before; }

async function kbMove(ctx, M, c, key0, toIdx) {
  const { page, persona } = ctx; const n = M.slots.length;
  const before = JSON.stringify((await ctx.state()).at || {});
  const reach = await tabUntil(ctx, { fn: cardFocused, arg: key0 });
  if (!reach) { ctx.problem('no-keyboard-path', `Tab 으로 카드 ‘${c.name}’ 에 닿지 못함`); return false; }
  if (M.mode === 'pick') {
    await key(ctx, persona.keyStyle === 'space' ? ' ' : 'Enter'); await ctx.settle(150);
    if (await moved(ctx, before)) return true;
    ctx.problem('no-keyboard-path', `카드 ‘${c.name}’ 에서 Enter/Space 로 고르기가 안 됨`); return false;
  }
  const style = persona.keyStyle || 'enter';
  if (style === 'digit' && (toIdx == null || toIdx < 9)) {
    await key(ctx, toIdx == null ? '0' : String(toIdx + 1)); await ctx.settle(150);
  } else if (style === 'arrow') {
    const cur = (await ctx.state()).at && (await ctx.state()).at[c.id]; const pos = cur == null ? 0 : cur + 1; const want = toIdx == null ? 0 : toIdx + 1;
    for (let k = ((want - pos) % (n + 1) + (n + 1)) % (n + 1); k > 0; k--) await key(ctx, 'ArrowRight');
    await ctx.settle(150);
  } else {
    await key(ctx, 'Enter'); await ctx.settle(120);
    let fs = await page.evaluate(focusedSlot, ctx.root);
    if (!fs) { ctx.problem('no-keyboard-path', `카드 ‘${c.name}’ 에서 Enter 를 눌러도 칸으로 초점이 가지 않음`); await key(ctx, 'Escape'); return false; }
    const dst = toIdx == null ? n : toIdx; let cur = fs.tray ? n : fs.idx;
    for (let guard = 0; guard < n + 3 && cur !== dst; guard++) {
      await key(ctx, cur < dst ? 'ArrowRight' : 'ArrowLeft'); await ctx.settle(40);
      fs = await page.evaluate(focusedSlot, ctx.root);
      if (!fs) { ctx.problem('no-keyboard-path', '칸에서 방향키로 다른 칸으로 옮겨 갈 수 없음'); await key(ctx, 'Escape'); return false; }
      const next = fs.tray ? n : fs.idx;
      if (next === cur) { ctx.problem('no-keyboard-path', `칸 사이 방향키 이동이 멈춤(${cur + 1}번째에서)`); await key(ctx, 'Escape'); return false; }
      cur = next;
    }
    await key(ctx, 'Enter'); await ctx.settle(150);
  }
  if (await moved(ctx, before)) return true;
  // 이미 그 자리였던 경우는 바뀌지 않아도 된다
  ctx.problem('no-keyboard-path', `카드 ‘${c.name}’ 을(를) 키보드(${style})로 ${toIdx == null ? '카드 칸' : `${toIdx + 1}번째 칸`}에 놓지 못함`);
  return false;
}

// 카드가 한 장도 없는 판: '해 보았어요' 단추 하나
async function clickDoneButton(ctx) {
  const { page, input } = ctx;
  const sel = `${ctx.root} button[role="checkbox"]`;
  const b = await boxesOf(ctx, sel);
  if (!b.length) { ctx.problem('control-missing', '카드도 칸도 없는 판에 ‘해 보았어요’ 표시가 없음'); return false; }
  const before = JSON.stringify(await ctx.state());
  if (input === 'keyboard') {
    const ok = await tabUntil(ctx, { fn: (r) => { const a = document.activeElement; return !!(a && a.matches && a.matches(`${r} button[role="checkbox"]`)); }, arg: ctx.root });
    if (!ok) { ctx.problem('no-keyboard-path', '‘해 보았어요’ 표시에 Tab 으로 닿지 못함'); return false; }
    await key(ctx, 'Space');
  } else { await scrollTo(ctx, sel, 0); const bb = (await boxesOf(ctx, sel))[0]; touchCheck(ctx, '해 보았어요 표시', bb.g); await pointerTap(ctx, bb.g.cx, bb.g.cy); }
  await ctx.settle(150);
  return JSON.stringify(await ctx.state()) !== before;
}

// 듣기 문항: 학생은 먼저 '듣기' 단추를 누른다(소리 자체는 확인하지 않는다)
async function pressListen(ctx) {
  const idx = await ctx.page.evaluate((root) => [...document.querySelectorAll(`${root} button`)].findIndex((b) => /듣기/.test(b.textContent || '')), ctx.root);
  if (idx < 0) { ctx.problem('control-missing', '듣기 문항인데 ‘듣기’ 단추가 화면에 없음'); return; }
  await scrollTo(ctx, `${ctx.root} button`, idx);
  const b = (await boxesOf(ctx, `${ctx.root} button`))[idx];
  touchCheck(ctx, '듣기 단추', b.g);
  await pointerTap(ctx, b.g.cx, b.g.cy); await ctx.settle(150);
}

async function driveBoard(ctx) {
  const { target, toolId } = ctx;
  const M = await boardModel(ctx);
  if (!M || M.error) { ctx.problem('driver-limit', `카드 판 정보를 읽지 못함: ${M && M.error}`); return false; }
  const free = target == null || (typeof target === 'object' && !Object.keys(target).length);
  const st0 = await ctx.state();
  if (!M.cards.length) { if (free || target) return clickDoneButton(ctx); return false; }
  const t = mapTarget(toolId, target, M);
  if (M.mode === 'pick' && toolId === 'wordcards' && target && target.listen != null && ctx.input !== 'keyboard') await pressListen(ctx);
  const limit = (ctx.options && ctx.options.maxActions) || (M.cards.length * 10 + 40);
  if (free) {
    // 정답 없는 문항: 첫 카드를 첫 칸(또는 고름)에 한 번 놓아 상태를 바꾼다
    const c = M.cards[0]; const to = M.mode === 'pick' ? 0 : 0;
    const okMove = await moveCard(ctx, M, c, to, (st0.at || {})[c.id] == null ? null : st0.at[c.id]);
    return okMove;
  }
  const goal = buildGoal(M.mode, M.cards, M.slots, t);
  if (goal.miss.length) { ctx.problem('unreachable', `이 판의 카드·칸만으로는 목표를 만들 수 없음: ${goal.miss.slice(0, 3).join(', ')}`); }
  let stuck = 0;
  while (ctx.actions < limit) {
    const at = (await ctx.state()).at || {};
    if (goal.ok(at)) return true;
    // 아직 제자리가 아닌 카드 하나
    const next = M.cards.find((c) => (at[c.id] == null ? null : at[c.id]) !== goal.sol.get(c.id));
    if (!next) return goal.ok(at);
    const a0 = JSON.stringify(at);
    const okMove = await moveCard(ctx, M, next, goal.sol.get(next.id), at[next.id] == null ? null : at[next.id]);
    const a1 = JSON.stringify((await ctx.state()).at || {});
    if (!okMove || a1 === a0) { if (++stuck >= 2) break; }
  }
  const at = (await ctx.state()).at || {};
  if (!goal.ok(at) && !goal.miss.length) ctx.problem('driver-limit', `조작 ${ctx.actions}번 안에 목표 상태에 닿지 못함(교구는 ${M.mode} 모드)`);
  return goal.ok(at);
}

// ───────────────────────── 자체 그림 모드들 ─────────────────────────
// 눌러서 켜고 끄는 항목(체크리스트·예산 물건·플립 카드 등)
async function pressItem(ctx, sel, idx, what, { keyAfter } = {}) {
  const { page, input } = ctx;
  if (input === 'keyboard') {
    const ok = await tabUntil(ctx, { fn: ([s, i]) => document.activeElement === document.querySelectorAll(s)[i], arg: [sel, idx] });
    if (!ok) { ctx.problem('no-keyboard-path', `${what} 에 Tab 으로 닿지 못함`); return false; }
    await key(ctx, keyAfter || 'Enter');
    return true;
  }
  await scrollTo(ctx, sel, idx);
  const b = (await boxesOf(ctx, sel))[idx];
  if (!b) { ctx.problem('unreachable', `${what} 이(가) 화면에 없음`); return false; }
  touchCheck(ctx, what, b.hit);
  await pointerTap(ctx, b.hit.cx, b.hit.cy);
  return true;
}

async function driveToggleSet(ctx, { sel, ids, texts, wantIds, stateKey, label }) {
  const miss = wantIds.filter((id) => !ids.includes(id));
  if (miss.length) ctx.problem('unreachable', `목표의 ${label} ${miss.slice(0, 3).map((x) => `‘${x}’`).join(', ')} 이(가) 화면에 없음`);
  const goal = new Set(wantIds.filter((id) => ids.includes(id)));
  for (let guard = 0; guard < ids.length * 3 + 6; guard++) {
    const cur = new Set(arr((await ctx.state())[stateKey]).map(String));
    const idx = ids.findIndex((id) => cur.has(id) !== goal.has(id));
    if (idx < 0) return !miss.length || ids.every((id) => cur.has(id) === goal.has(id));
    const before = JSON.stringify(await ctx.state());
    const ok = await pressItem(ctx, sel, idx, `${label} ‘${texts[idx]}’`, { keyAfter: ctx.persona.keyStyle === 'space' ? ' ' : 'Enter' });
    await ctx.settle(200);
    if (!ok) return false;
    if (JSON.stringify(await ctx.state()) === before) { ctx.problem(ctx.input === 'keyboard' ? 'no-keyboard-path' : 'driver-limit', `${label} ‘${texts[idx]}’ 을(를) 눌러도 상태가 바뀌지 않음`); return false; }
  }
  return false;
}

const idOf = (x, i, p) => String(x && typeof x === 'object' ? (x.id != null ? x.id : x.text != null ? x.text : `${p}${i + 1}`) : x);
const textOf = (x) => String(x && typeof x === 'object' ? (x.text != null ? x.text : x.id) : x);

async function driveChecklist(ctx) {
  const items = arr(ctx.options.items); const ids = items.map((x, i) => idOf(x, i, 'c')); const texts = items.map(textOf);
  const t = ctx.target;
  if (t == null) { return driveToggleSetFree(ctx, `${ctx.root} .cb-check`, items.length, '항목'); }
  const wantIds = t.selfCheck != null ? (t.selfCheck === true ? ids : arr(t.selfCheck).map(String)) : arr(t.checklist).map(String);
  return driveToggleSet(ctx, { sel: `${ctx.root} .cb-check`, ids, texts, wantIds, stateKey: 'checked', label: '항목' });
}
async function driveToggleSetFree(ctx, sel, n, what) {
  if (!n) { ctx.problem('control-missing', `${what}이(가) 하나도 없음`); return false; }
  const before = JSON.stringify(await ctx.state());
  await pressItem(ctx, sel, 0, `첫 ${what}`); await ctx.settle(200);
  return JSON.stringify(await ctx.state()) !== before;
}

async function driveFlip(ctx) {
  const ws = arr(ctx.options.words).map((w) => (typeof w === 'object' && w ? w : { en: String(w) })).filter((w) => w.en != null);
  const ids = ws.map((w) => String(w.en)); const texts = ws.map((w) => w.ko || w.en);
  const t = ctx.target;
  if (t == null) return driveToggleSetFree(ctx, `${ctx.root} .cb-flip`, ws.length, '카드');
  const wantIds = t.flip === 'all' ? ids : arr(t.flip).map(String);
  return driveToggleSet(ctx, { sel: `${ctx.root} .cb-flip`, ids, texts, wantIds, stateKey: 'up', label: '카드' });
}

async function driveBudget(ctx) {
  const o = ctx.options; const items = arr(o.items).map((x, i) => ({ id: idOf(x, i, 'i'), text: textOf(x), price: Math.max(0, Number(x && x.price) || 0) }));
  const ids = items.map((x) => x.id); const t = ctx.target;
  if (t == null) return driveToggleSetFree(ctx, `${ctx.root} .cb-item`, items.length, '물건');
  const b = (t && t.budget) || {};
  const r = { max: b.max != null ? Number(b.max) : Number(o.budget) || Infinity, min: b.min != null ? Number(b.min) : 0, must: arr(b.must).map(String), not: arr(b.not).map(String), count: Number.isInteger(b.count) ? b.count : null };
  const sum = (set) => items.reduce((s, x) => s + (set.has(x.id) ? x.price : 0), 0);
  const fails = (set) => { const s = sum(set); return s > r.max || r.must.some((x) => !set.has(x)) || r.not.some((x) => set.has(x)) || (r.count != null && set.size !== r.count) || s < r.min; };
  let best = null; let bv = -1;
  const lim = 1 << Math.min(items.length, 14);
  for (let m = 1; m < lim; m++) { const set = new Set(ids.filter((_, i) => m & (1 << i))); if (fails(set)) continue; const s = sum(set); if (s > bv || (s === bv && set.size < best.size)) { bv = s; best = set; } }
  if (!best) { ctx.problem('unreachable', '예산·조건을 모두 만족하는 물건 묶음이 없음'); return false; }
  return driveToggleSet(ctx, { sel: `${ctx.root} .cb-item`, ids, texts: items.map((x) => x.text), wantIds: [...best], stateKey: 'picked', label: '물건' });
}

async function drivePay(ctx) {
  const o = ctx.options; const t = ctx.target;
  const denoms = [...new Set(arr(o.coins && o.coins.length ? o.coins : [10, 50, 100, 500, 1000]).map(Number).filter((v) => Number.isInteger(v) && v > 0))].sort((a, b) => a - b);
  const cap = (d) => { const w = o.wallet && o.wallet[d]; return Number.isInteger(w) && w >= 0 ? w : 9; };
  if (t == null || t.pay == null) {
    const before = JSON.stringify(await ctx.state()); await pressItem(ctx, `${ctx.root} .cb-wallet`, 0, '지갑의 돈'); await ctx.settle(200);
    return JSON.stringify(await ctx.state()) !== before;
  }
  const amount = Number(t.pay);
  // 개수가 가장 적은 조합 → 안 되면 큰 돈부터 채우기. 단위마다 개수 제한을 지킨다
  const solve = () => {
    let bestN = null; let bestC = Infinity;
    const rec = (i, left, used, cnt) => {
      if (cnt >= bestC) return;
      if (i < 0) { if (left === 0) { bestC = cnt; bestN = used.slice(); } return; }
      const d = denoms[i];
      for (let k = Math.min(cap(d), Math.floor(left / d)); k >= 0; k--) { used[i] = k; rec(i - 1, left - k * d, used, cnt + k); }
      used[i] = 0;
    };
    rec(denoms.length - 1, amount, denoms.map(() => 0), 0);
    return bestN;
  };
  const plan = solve();
  if (!plan) { ctx.problem('unreachable', `지갑의 돈(${denoms.join('·')}원, 단위마다 최대 개수 제한)으로 ${amount}원을 낼 수 없음`); return false; }
  for (let guard = 0; guard < 400; guard++) {
    const n = (await ctx.state()).n || {};
    const i = denoms.findIndex((d, k) => (n[d] || 0) < plan[k]);
    if (i < 0) break;
    const before = JSON.stringify(await ctx.state());
    // 키보드는 ArrowUp 으로 한 개씩(Enter 도 같다)
    const ok = await pressItem(ctx, `${ctx.root} .cb-wallet`, i, `지갑의 ${denoms[i]}원`);
    await ctx.settle(120);
    if (!ok) return false;
    if (JSON.stringify(await ctx.state()) === before) { ctx.problem('driver-limit', `지갑의 ${denoms[i]}원을 눌러도 낸 돈이 늘지 않음`); return false; }
  }
  const n = (await ctx.state()).n || {};
  return denoms.every((d, k) => (n[d] || 0) === plan[k]) || denoms.reduce((s, d) => s + d * (n[d] || 0), 0) === amount;
}

// 마음 크기 눈금
async function driveScale(ctx) {
  const t = ctx.target; const n = (await boxesOf(ctx, `${ctx.root} .cb-step`)).length;
  if (!n) { ctx.problem('control-missing', '마음 크기 눈금이 화면에 없음'); return false; }
  let level;
  if (t == null || t.level == null || t.level === 'any') level = Math.ceil(n / 2);
  else {
    const L = arr(t.level).map(Number).filter(Number.isFinite);
    const a = Math.max(1, Math.min(...L)); const b = Math.min(n, Math.max(...L));
    if (!L.length || a > b) { ctx.problem('unreachable', `눈금 ${n}칸으로는 목표 ${JSON.stringify(t.level)} 에 닿을 수 없음`); return false; }
    level = Math.round((a + b) / 2);
  }
  if (ctx.input === 'keyboard') {
    const ok = await tabUntil(ctx, { fn: () => { const a = document.activeElement; return !!(a && a.classList && a.classList.contains('cb-scale')); }, arg: null });
    if (!ok) { ctx.problem('no-keyboard-path', '마음 크기 눈금에 Tab 으로 닿지 못함'); return false; }
    if (ctx.persona.keyStyle === 'digit' && n <= 9) { await key(ctx, String(level)); await ctx.settle(100); }
    else for (let g = 0; g < n + 1 && ((await ctx.state()).level || 0) !== level; g++) { await key(ctx, 'ArrowRight'); await ctx.settle(60); }
  } else {
    await pressItem(ctx, `${ctx.root} .cb-step`, level - 1, `눈금 ${level}`); await ctx.settle(150);
  }
  return ((await ctx.state()).level || 0) === level || ((await ctx.state()).level != null && (t == null || t.level === 'any'));
}

// 어떻게 할까(보기 고르기)
async function driveBranch(ctx) {
  const o = ctx.options; const cs = arr(o.choices).map((c, i) => ({ id: idOf(c, i, 'c'), text: textOf(c) })); const t = ctx.target;
  const boxes = await boxesOf(ctx, `${ctx.root} .cb-choice`);
  if (!boxes.length) { ctx.problem('control-missing', '고를 보기가 화면에 없음'); return false; }
  let pick = 0;
  if (t != null && t.choice != null) {
    const want = new Set(arr(t.choice).map(String)); const i = cs.findIndex((c) => want.has(c.id));
    if (i < 0) { ctx.problem('unreachable', `목표 보기 ${[...want].map((x) => `‘${x}’`).join(', ')} 이(가) 화면의 보기에 없음`); return false; }
    pick = i;
  }
  const ok = await pressItem(ctx, `${ctx.root} .cb-choice`, pick, `보기 ${pick + 1}`);
  await ctx.settle(150);
  return ok && ((await ctx.state()).choice === cs[pick].id);
}

// ───────────────────────── 분류판 ─────────────────────────
const SB = {
  색: (c) => ({ r: '빨강', b: '파랑', y: '노랑' }[c[0]]), 구멍: (c) => `구멍 ${c[1]}개`, 모양: (c) => ({ c: '동그라미', s: '네모', t: '세모' }[c[2]]),
};
const SB_VALUES = { 색: ['빨강', '파랑', '노랑'], 구멍: ['구멍 2개', '구멍 4개'], 모양: ['동그라미', '네모', '세모'] };
const SB_ADJ = { r: '빨간', b: '파란', y: '노란' };
const SB_SHAPE = { c: '동그라미', s: '네모', t: '세모' };
const sbLabel = (id) => `${SB_ADJ[id[0]]} ${SB_SHAPE[id[2]]} 단추, 구멍 ${id[1]}개`;

async function driveSortboard(ctx) {
  const { page, input, persona } = ctx; const t = ctx.target || {};
  const st0 = await ctx.state(); const ids = Object.keys(st0.placed || {});
  const critBoxes = await boxesOf(ctx, `${ctx.root} .sb-crit`);
  const by = t.by || ['색', '구멍', '모양'].find((k) => k !== t.not) || '색';
  const withCounts = !!(t.counts || st0.counts);
  // ① 기준 단추(고정 기준이면 단추가 숨겨져 있고 이미 정해져 있다)
  if (st0.by !== by) {
    const idx = await page.evaluate(([b, r]) => [...document.querySelectorAll(`${r} .sb-crit`)].findIndex((e) => e.dataset.by === b), [by, ctx.root]);
    if (idx < 0) { ctx.problem('control-missing', `기준 단추 ‘${by}’ 이(가) 화면에 없음`); return false; }
    const vis = critBoxes[idx] && critBoxes[idx].g.w > 0;
    if (!vis) { ctx.problem('control-missing', `기준 단추 ‘${by}’ 이(가) 숨겨져 있는데 문항은 그 기준으로 나누라고 함`); return false; }
    if (input === 'keyboard') {
      const ok = await tabUntil(ctx, { fn: ([i, r]) => document.activeElement === document.querySelectorAll(`${r} .sb-crit`)[i], arg: [idx, ctx.root] });
      if (!ok) { ctx.problem('no-keyboard-path', `기준 단추 ‘${by}’ 에 Tab 으로 닿지 못함`); return false; }
      await key(ctx, 'Enter');
    } else { await scrollTo(ctx, `${ctx.root} .sb-crit`, idx); const b = (await boxesOf(ctx, `${ctx.root} .sb-crit`))[idx]; touchCheck(ctx, `기준 단추 ‘${by}’`, b.g); await pointerTap(ctx, b.g.cx, b.g.cy); }
    await ctx.settle(300);
    if ((await ctx.state()).by !== by) { ctx.problem('driver-limit', `기준 단추 ‘${by}’ 을(를) 눌러도 기준이 바뀌지 않음`); return false; }
  }
  // ② 카드를 칸에
  const values = SB_VALUES[by];
  const needVal = (id) => SB[by](id);
  for (let guard = 0; guard < ids.length * 4 + 6; guard++) {
    const s = await ctx.state(); const c = ids.find((id) => (s.placed || {})[id] !== needVal(id));
    if (!c) break;
    const before = JSON.stringify(s.placed);
    const label = sbLabel(c); const vi = values.indexOf(needVal(c));
    const finder = ([l, root]) => { const e = [...document.querySelectorAll(`${root} .sb-card`)].find((x) => (x.getAttribute('aria-label') || '').startsWith(`${l}.`)); if (!e) return null; const r = e.getBoundingClientRect(); return { cx: r.x + r.width / 2, cy: r.y + r.height / 2, w: r.width, h: r.height }; };
    if (input === 'keyboard') {
      const ok = await tabUntil(ctx, { fn: (l) => { const a = document.activeElement; return !!(a && a.classList && a.classList.contains('sb-card') && (a.getAttribute('aria-label') || '').startsWith(`${l}.`)); }, arg: label });
      if (!ok) { ctx.problem('no-keyboard-path', `Tab 으로 ‘${label}’ 카드에 닿지 못함`); return false; }
      if (persona.keyStyle === 'digit') await key(ctx, String(vi + 1));
      else { // Enter = 다음 칸으로 — 원하는 칸이 될 때까지
        const cur = (s.placed || {})[c]; let pos = cur ? values.indexOf(cur) : -1;
        for (let k = 0; k < values.length + 1 && pos !== vi; k++) { await key(ctx, 'Enter'); await ctx.settle(80); pos = pos + 1 < values.length ? pos + 1 : -1; }
      }
      await ctx.settle(200);
    } else {
      const cardIdx = await page.evaluate(([l, r]) => [...document.querySelectorAll(`${r} .sb-card`)].findIndex((x) => (x.getAttribute('aria-label') || '').startsWith(`${l}.`)), [label, ctx.root]);
      await scrollTo(ctx, `${ctx.root} .sb-card`, cardIdx);
      const f = await page.evaluate(finder, [label, ctx.root]);
      touchCheck(ctx, `단추 카드 ‘${label}’`, { w: f.w, h: f.h });
      // 칸 = 이름 붙은 g(aria-label '<값> 칸')
      const dest = await page.evaluate(([v, root]) => { const e = [...document.querySelectorAll(`${root} svg g`)].find((x) => x.getAttribute('aria-label') === `${v} 칸`); if (!e) return null; const r = e.getBoundingClientRect(); return { cx: r.x + r.width / 2, cy: r.y + r.height / 2, w: r.width, h: r.height }; }, [needVal(c), ctx.root]);
      if (!dest) { ctx.problem('unreachable', `‘${needVal(c)}’ 칸이 화면에 없음`); return false; }
      touchCheck(ctx, `‘${needVal(c)}’ 칸`, dest);
      const style = input === 'touch' ? (persona.touchStyle || 'drag') : 'drag';
      void style;
      await pointerDrag(ctx, { x: f.cx, y: f.cy }, { x: dest.cx, y: dest.cy - dest.h * 0.1 });
      await ctx.settle(500);
    }
    if (JSON.stringify((await ctx.state()).placed) === before) { ctx.problem(input === 'keyboard' ? 'no-keyboard-path' : 'driver-limit', `단추 ‘${label}’ 을(를) ‘${needVal(c)}’ 칸에 놓는 조작이 상태를 바꾸지 못함`); return false; }
  }
  const sFin = await ctx.state();
  const placedOk = ids.every((id) => (sFin.placed || {})[id] === needVal(id));
  if (!withCounts) return placedOk;
  // ③ 칸마다 개수
  const real = Object.fromEntries(values.map((v) => [v, ids.filter((id) => needVal(id) === v).length]));
  for (const v of values) {
    for (let guard = 0; guard < 25 && (((await ctx.state()).counts || {})[v] ?? null) !== real[v]; guard++) {
      const cur = ((await ctx.state()).counts || {})[v];
      const d = cur == null ? (real[v] >= 1 ? 1 : 1) : Math.sign(real[v] - cur);
      if (input === 'keyboard') {
        const ok = await tabUntil(ctx, { fn: (vv) => { const a = document.activeElement; return !!(a && a.getAttribute && a.getAttribute('role') === 'spinbutton' && a.dataset.v === vv); }, arg: v });
        if (!ok) { ctx.problem('no-keyboard-path', `‘${v}’ 개수 칸에 Tab 으로 닿지 못함`); return false; }
        await key(ctx, d > 0 ? 'ArrowUp' : 'ArrowDown');
      } else {
        const sel = `${ctx.root} button[data-v="${v}"][data-d="${d > 0 ? 1 : -1}"]`;
        const idx = await page.evaluate((s) => { const e = document.querySelector(s); return e ? [...document.querySelectorAll(s.split(' button[')[0] + ' .sb-counts button')].indexOf(e) : -1; }, sel);
        if (idx < 0) { ctx.problem('control-missing', `‘${v}’ 개수를 늘리거나 줄이는 단추가 없음`); return false; }
        await scrollTo(ctx, `${ctx.root} .sb-counts button`, idx);
        const b = (await boxesOf(ctx, `${ctx.root} .sb-counts button`))[idx];
        touchCheck(ctx, `‘${v}’ 개수 단추`, b.g);
        await pointerTap(ctx, b.g.cx, b.g.cy);
      }
      await ctx.settle(60);
    }
  }
  const s2 = await ctx.state();
  return placedOk && values.every((v) => ((s2.counts || {})[v]) === real[v]);
}

// ───────────────────────── 진입점 ─────────────────────────
export async function drive(args) {
  const ctx = makeCtx(args);
  const stop = watchErrors(ctx);
  let reached = false;
  try {
    const toolId = args.toolId; const mode = (args.options && args.options.mode) || null;
    if (toolId === 'sortboard') reached = await driveSortboard(ctx);
    else if ((CUSTOM_MODES[toolId] || []).includes(mode)) {
      reached = await ({ scale: driveScale, branch: driveBranch, checklist: driveChecklist, pay: drivePay, budget: driveBudget, flip: driveFlip })[mode](ctx);
    } else reached = await driveBoard(ctx);
  } catch (e) {
    ctx.problem('driver-limit', `조작기 예외: ${e && e.message ? e.message.split('\n')[0] : e}`);
  } finally { stop(); }
  if (ctx.errors.length) ctx.problem('ui-error', ctx.errors.slice(0, 2).join(' | '));
  return { reached: !!reached, actions: ctx.actions, problems: ctx.problems };
}
