// 한글 글자 조립(hangul) 조작기 — 자음·모음·받침 조각을 눌러 글자 틀에 놓는다.
// 모음은 autoSlot 이 아니면 누른 뒤 틀의 '자음 오른쪽'·'자음 아래' 자리를 한 번 더 눌러 직접 고른다(키보드는 →·↓).
import { makeCtx, finish, activate, tabTo, press, sleep, pointDrag, box } from './_arts-util.mjs';

export const tools = ['hangul'];

const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const HORZ = 'ㅗㅛㅜㅠㅡ';
const decompose = (s) => {
  const k = String(s || '').charCodeAt(0) - 0xAC00;
  if (!(k >= 0 && k <= 11171)) return null;
  return { cho: CHO[Math.floor(k / 588)], jung: JUNG[Math.floor((k % 588) / 28)], jong: JONG[k % 28] || null };
};

export async function drive({ page, root: rootSel, target, options, prompt, toolId, persona, readState, log }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {};
  const R0 = rootSel || '#tool';
  const tool = page.locator(R0);
  try {
    const want = decompose(t.syllable);
    if (!want) ctx.stop('driver-limit', `문항 글자를 읽을 수 없음: ${t.syllable}`);
    const lock = Array.isArray(o.lock) ? o.lock : [];
    const hasJong = Array.isArray(o.batchim);
    let s = await ctx.read();
    const tile = (kind, ch) => tool.locator(`g.hg-tile--${kind}[aria-label^="${kind === 'c' ? '자음' : kind === 'v' ? '모음' : '받침'} ${ch}"]`);

    const need = async (kind, ch, label) => {
      const loc = tile(kind, ch);
      if (!(await loc.count())) ctx.stop('unreachable', `${label} ‘${ch}’ 조각이 바구니에 없음${lock.includes(kind === 'c' ? 'cho' : 'jung') ? '(고정된 조각)' : ''}`);
      return loc.first();
    };

    // 받침이 없어야 하는데 놓여 있으면 틀 밖으로 끌어 바구니로 돌려보낸다(키보드는 아직 못 함)
    if (hasJong && !want.jong && s.jong) {
      if (ctx.input === 'keyboard') ctx.stop('driver-limit', '놓인 받침을 키보드로 빼는 조작은 아직 못 함');
      const loc = tile('j', s.jong).first(); const b = await box(loc);
      const tray = await box(tool.locator('svg').first());
      if (!b || !tray) ctx.stop('driver-limit', '받침 조각 위치를 못 찾음');
      await pointDrag(ctx, { x: b.x + b.width / 2, y: b.y + b.height / 2 }, { x: tray.x + tray.width / 2, y: tray.y + tray.height - 8 });
      await sleep(300); s = await ctx.read();
    }

    // 1) 자음
    if (s.cho !== want.cho) {
      if (lock.includes('cho')) ctx.stop('unreachable', `자음이 고정(‘${s.cho}’)인데 문항은 ‘${want.cho}’`);
      await activate(ctx, await need('c', want.cho, '자음'), `자음 ‘${want.cho}’ 조각`, { measure: '.pk-hit' });
      await sleep(250);
    }
    // 2) 모음
    if (s.jung !== want.jung) {
      if (lock.includes('jung')) ctx.stop('unreachable', `모음이 고정(‘${s.jung}’)인데 문항은 ‘${want.jung}’`);
      await activate(ctx, await need('v', want.jung, '모음'), `모음 ‘${want.jung}’ 조각`, { measure: '.pk-hit' });
      await sleep(250);
      if (!o.autoSlot) {
        const zoneKind = HORZ.includes(want.jung) ? 'h' : 'v';
        const zone = tool.locator(`rect.hg-zone[aria-label="${zoneKind === 'v' ? '자음 오른쪽 자리' : '자음 아래 자리'}"]`);
        if (!(await zone.count())) ctx.stop('control-missing', '모음 자리(오른쪽·아래) 단추가 화면에 없음');
        if (ctx.input === 'keyboard') {
          // 모음을 고르면 초점이 '오른쪽' 자리로 온다 — 방향키(→·↓)로 자리를 고른다
          const onZone = await page.evaluate(() => !!(document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('hg-zone')));
          if (onZone) await press(ctx, zoneKind === 'v' ? 'ArrowRight' : 'ArrowDown');
          else { await tabTo(ctx, zone.first(), '모음 자리 단추'); await press(ctx, 'Enter'); }
        } else await activate(ctx, zone.first(), zoneKind === 'v' ? '모음 자리 ‘자음 오른쪽’' : '모음 자리 ‘자음 아래’');
        await sleep(250);
      }
    }
    // 3) 받침
    if (want.jong) {
      if (!hasJong) ctx.stop('unreachable', `문항 글자 ‘${t.syllable}’ 에 받침 ‘${want.jong}’ 이 있는데 이 단계 틀에는 받침 자리가 없음`);
      if (s.jong !== want.jong) {
        await activate(ctx, await need('j', want.jong, '받침'), `받침 ‘${want.jong}’ 조각`, { measure: '.pk-hit' });
        await sleep(250);
      }
    }
    s = await ctx.read();
    const ok = s.cho === want.cho && s.jung === want.jung && (!hasJong || (s.jong || null) === (want.jong || null));
    return finish(ctx, null, ok);
  } catch (e) {
    return finish(ctx, e, false);
  }
}
