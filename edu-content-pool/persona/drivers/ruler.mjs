// 종이 자(ruler) 조작기 — 물건 띠를 자의 시작 눈금(0, 부러진 자는 첫 눈금)에 맞추고 '몇 cm인가요?' 단추에서 길이를 고른다.
// 마우스·터치: 띠를 끈다. 끈 뒤에도 어긋났으면(200% 확대처럼 끌기가 빗나가는 화면) 띠에 Tab 으로 초점을 두고 ←→ 로 0.5cm씩 맞춘다.
// 키보드: Tab 으로 띠에 가서 ←→, Enter 로 내려놓고, 길이 단추에 Tab → Enter.
// 눈금 간격·띠 위치는 교구 소스의 상수를 쓰지 않고 화면의 자 눈금 숫자와 띠 요소를 재서 정한다.
import { makeCtx, press, tabTo, pressN, dragXY, box, sleep } from './_math-common.mjs';

export const tools = ['ruler'];

export async function drive({ page, root: rootSel, target, options, readState, persona, log }) {
  const root = rootSel || '#tool';
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const tool = page.locator(root);
  const svg = tool.locator('svg.pk-stage').first();
  const strip = tool.locator('g.rl-strip').first();
  if (!(await svg.count()) || !(await strip.count())) { ctx.problem('control-missing', '종이 자 그림이 화면에 없음'); return ctx.result(false); }
  const readOnly = !!o.readOnly;

  // 자의 눈금 숫자(1cm마다 하나)를 읽어 화면에서 1cm 가 몇 px 인지, 자가 몇 cm 부터 시작하는지 잰다
  const ticks = async () => svg.evaluate((el) => {
    const out = [];
    for (const tx of el.querySelectorAll('text')) {
      const s = (tx.textContent || '').trim(); if (!/^\d{1,2}$/.test(s)) continue;
      if (tx.closest('.rl-strip, .pk-layer--aid, .pk-layer--readout')) continue;
      const r = tx.getBoundingClientRect(); if (!r.width) continue;
      out.push({ n: Number(s), x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
    return out;
  });
  const scale = async () => {
    const ts = (await ticks()).sort((a, b) => a.n - b.n);
    // 같은 줄(자 위)의 눈금만 — 다른 글자가 섞이면 간격이 어긋난다
    const row = ts.filter((x) => Math.abs(x.y - (ts[ts.length - 1] || x).y) < 4);
    if (row.length < 2) return null;
    const a = row[0]; const b = row[row.length - 1];
    return { min: a.n, perCm: (b.x - a.x) / (b.n - a.n), x0: a.x - a.n * ((b.x - a.x) / (b.n - a.n)) };
  };

  try {
    const sc = await scale();
    if (!sc || !(sc.perCm > 0)) { ctx.problem('driver-limit', '자 눈금 숫자를 화면에서 읽지 못함'); return ctx.result(false); }
    const goalStart = sc.min; // 0, 부러진 자는 첫 눈금
    const free = t.length == null;
    const want = free ? null : Math.round(Number(t.length));

    if (!readOnly) {
      const startNow = async () => (await readState()).start;
      const aim = free ? (await startNow()) + 1 : goalStart; // 짝 활동: 1cm 옮겨 본다
      if ((await startNow()) !== aim) {
        if (ctx.input === 'keyboard') {
          if (!(await tabTo(ctx, strip))) { ctx.problem('no-keyboard-path', '자 위 띠에 Tab 으로 닿지 않음'); return ctx.result(false); }
          await stepKeys(aim);
        } else {
          // 끌기: 띠를 화면에 들인 뒤 다시 잰 띠 상자 가운데를 잡아 (목표-지금) cm 만큼 옮긴다
          for (let k = 0; k < 2 && (await startNow()) !== aim; k++) {
            await box(strip);
            const s2 = await scale(); const hit = strip.locator('rect.pk-hit').first();
            const b = (await hit.count()) ? await hit.boundingBox() : await strip.boundingBox();
            if (!b || !s2) break;
            if (ctx.input === 'touch' && (b.width < 43.5 || b.height < 43.5)) ctx.problem('touch-target-small', `띠 잡는 곳 ${Math.round(b.width)}×${Math.round(b.height)}px (44px 미만)`);
            const from = { x: b.x + b.width / 2, y: b.y + b.height / 2 };
            const dx = (aim - (await startNow())) * s2.perCm;
            const vw = (page.viewportSize() || { width: 1366 }).width;
            const to = { x: Math.max(2, Math.min(vw - 2, from.x + dx)), y: from.y };
            await dragXY(ctx, from, to, 12); await sleep(250);
          }
          // 끌기가 빗나가면(확대된 화면·좁은 화면) 띠에 초점을 두고 방향키로 0.5cm씩 맞춘다 — 마우스 학생도 Tab·방향키를 쓸 수 있다
          if ((await startNow()) !== aim && ctx.input === 'mouse') {
            ctx.log(`끌기 뒤 띠 시작 ${await startNow()} ≠ ${aim} → Tab·방향키로 맞춤`);
            const saved = ctx.input; ctx.input = 'keyboard';
            const ok = await tabTo(ctx, strip);
            if (ok) await stepKeys(aim); else ctx.problem('no-keyboard-path', '자 위 띠에 Tab 으로 닿지 않음');
            ctx.input = saved;
          }
        }
      }
      if ((await startNow()) !== aim) { ctx.problem('driver-limit', `띠를 ${aim} 눈금에 맞추지 못함(지금 ${await startNow()})`); return ctx.result(false); }
    }
    if (free) return ctx.result(true);

    // 길이 고르기
    const btn = tool.locator(`.rl-choices button[data-n="${want}"]`).first();
    if (!(await btn.count())) {
      const have = await tool.locator('.rl-choices button[data-n]').evaluateAll((bs) => bs.map((b) => b.dataset.n)).catch(() => []);
      ctx.problem('unreachable', `길이 보기에 ${want} cm 가 없음(보기 ${have.join(',') || '없음'})`);
      return ctx.result(false);
    }
    await press(ctx, btn, `길이 보기 ${want} cm`);
    const s = await readState();
    return ctx.result(s.read === want && (readOnly || s.start === goalStart));
  } catch (e) {
    ctx.problem('driver-limit', `조작 중 예외: ${String(e.message).slice(0, 120)}`);
    return ctx.result(false);
  }

  // 초점이 띠에 있을 때: ←→ 한 번이 0.5cm. 눌러 가며 상태를 읽어 맞추고 Enter 로 내려놓는다
  async function stepKeys(aim) {
    for (let i = 0; i < 40 && !ctx.over(); i++) {
      const cur = (await readState()).start; if (cur === aim) break;
      const n = Math.max(1, Math.round(Math.abs(aim - cur) * 2));
      await pressN(ctx, aim > cur ? 'ArrowRight' : 'ArrowLeft', n);
      if ((await readState()).start === cur) { ctx.problem('unreachable', `띠가 더 움직이지 않음(시작 ${cur}, 목표 ${aim})`); break; }
    }
    await page.keyboard.press('Enter'); ctx.tick(); await sleep(120);
  }
}
