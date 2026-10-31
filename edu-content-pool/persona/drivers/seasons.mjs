// 계절 나무 분류판(seasons) 조작기 — 그림 카드를 계절 나무 판으로 끌어 넣고, 까닭 보기를 고른다.
import { makeCtx } from './_sci-common.mjs';

export const tools = ['seasons'];
const ALL = ['봄', '여름', '가을', '겨울'];

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const seasons = Array.isArray(o.seasons) && o.seasons.length ? o.seasons : ALL;
  const cardNames = Array.isArray(o.cards) ? o.cards : [];
  let reached = true;
  const svg = page.locator(`${root} svg.pk-stage`).first();

  // 어느 카드가 어느 이름인지: 처음 놓인 차례(옵션의 카드 차례)대로 카드 위 글자를 읽어 둔다
  const cardLocs = page.locator(`${root} .ss-card`);
  const labels = await cardLocs.evaluateAll((els) => els.map((e) => (e.getAttribute('aria-label') || '').split(' 카드')[0]));
  const labelOf = (name) => { const i = cardNames.indexOf(name); return i >= 0 && labels[i] ? labels[i] : name; };
  const cardLoc = (name) => page.locator(`${root} .ss-card[aria-label^="${labelOf(name)} 카드"]`).first();
  const placedOf = async (name) => ((await ctx.state()).placed || {})[name] ?? null;

  const want = {};
  if (t.sorted) Object.assign(want, t.sorted);
  if (t.season && Array.isArray(t.cards)) { for (const c of t.cards) want[c] = t.season; }

  if (Object.keys(want).length) {
    // 판(계절 나무) 위치: 판 머리의 계절 글자 둘레
    const panelPoint = async (season, dyUnits) => {
      const idx = seasons.indexOf(season);
      const lab = page.locator(`${root} svg.pk-stage text`).filter({ hasText: new RegExp(`^${season}$`) }).first();
      let b = (await lab.count()) ? await lab.boundingBox() : null;
      const bx = await ctx.box(svg); const vb = ((await svg.getAttribute('viewBox')) || '0 0 560 420').split(/\s+/).map(Number); const s = bx.width / vb[2];
      if (!b) { // 이름이 가려진 판은 왼쪽부터 차례대로 놓였다고 보고 가로 4등분
        return { x: bx.x + (bx.width * (idx + 0.5)) / seasons.length, y: bx.y + (dyUnits + 20) * s };
      }
      return { x: b.x + b.width / 2, y: b.y + b.height / 2 + dyUnits * s };
    };
    for (const [name, season] of Object.entries(want)) {
      const idx = seasons.indexOf(season);
      if (idx < 0) { ctx.problem('unreachable', `계절 판 '${season}'이(가) 이 판에 없음`); reached = false; continue; }
      if (cardNames.length && !cardNames.includes(name)) { ctx.problem('unreachable', `카드 '${name}'이(가) 이 판에 없음`); reached = false; continue; }
      if ((await placedOf(name)) === season) continue;
      const card = cardLoc(name);
      if (!(await card.count())) { ctx.problem('control-missing', `카드 '${name}'이(가) 화면에 없음`); reached = false; continue; }
      if (ctx.input === 'keyboard') {
        if (!(await ctx.focusViaTab(card, `카드 ${name}`))) { reached = false; continue; }
        await ctx.key(String(idx + 1));
        if ((await placedOf(name)) !== season) { ctx.problem('no-keyboard-path', `카드 ${name}: 숫자 키로 ${season} 판에 넣을 수 없음`); reached = false; }
      } else {
        for (const dy of [50, 90, 20]) {
          const b = await ctx.box(card); if (!b) break;
          ctx.sizeCheck(b, `카드 ${name}`);
          const to = await panelPoint(season, dy);
          await ctx.dragPath(ctx.line(ctx.center(b), to, 12), `카드 ${name} 끌기`);
          await ctx.wait(300);
          if ((await placedOf(name)) === season) break;
        }
        if ((await placedOf(name)) !== season) { reached = false; ctx.problem('driver-limit', `카드 ${name} 를 ${season} 판에 끌어 넣지 못함(지금 ${await placedOf(name)})`); }
      }
    }
    // 목표에 없는 카드가 판에 들어가 있으면 안 되는 문항(season+cards)은 그대로 둔다
  }

  if (t.why != null) {
    const radios = page.locator(`${root} [role="radiogroup"] button[role="radio"]`);
    if (!(await radios.count())) { ctx.problem('control-missing', '까닭 고르기 보기가 없음'); reached = false; }
    else if (t.why >= (await radios.count())) { ctx.problem('unreachable', `까닭 보기 ${await radios.count()}개인데 정답 번호가 ${t.why}`); reached = false; }
    else { await ctx.tapExpect(radios.nth(t.why), `까닭 ${t.why + 1}번`, async () => (await ctx.state()).why === t.why); reached = reached && (await ctx.state()).why === t.why; }
  }
  return ctx.result(reached);
}
