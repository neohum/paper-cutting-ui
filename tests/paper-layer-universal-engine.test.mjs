import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('Universal Paper Layer Engine & SVG Plate Generator Suite', async (t) => {
  const jsContent = fs.readFileSync(path.join(projectRoot, 'papercut-paper-layer.js'), 'utf-8');
  const cssContent = fs.readFileSync(path.join(projectRoot, 'papercut-paper-layer.css'), 'utf-8');

  // Node 환경에서 papercut-paper-layer.js 모듈 로드
  const sandbox = {
    window: {},
    document: undefined,
    module: { exports: {} },
    ResizeObserver: class { observe() {} unobserve() {} },
    IntersectionObserver: class { observe() {} unobserve() {} },
    MutationObserver: class { observe() {} unobserve() {} }
  };
  const execFn = new Function('window', 'document', 'module', 'ResizeObserver', 'IntersectionObserver', 'MutationObserver', jsContent);
  execFn(sandbox.window, sandbox.document, sandbox.module, sandbox.ResizeObserver, sandbox.IntersectionObserver, sandbox.MutationObserver);
  const PaperCutUI = sandbox.window.PaperCutUI || sandbox.module.exports;
  const paper = PaperCutUI.paper;

  await t.test('AC-1: Engine Variants & 5 Core Archetypes Registration', () => {
    assert.ok(paper, 'PaperCutUI.paper API must be exported');
    const expectedArchetypes = ['stamp', 'wax', 'ticket', 'pebble', 'deckle', 'sheet', 'field', 'pill', 'tab'];
    expectedArchetypes.forEach((archetype) => {
      assert.ok(
        paper.variants.includes(archetype),
        `paper.variants must include archetype: ${archetype}`
      );
    });
  });

  await t.test('AC-2: 8 Pastel Tones (Tone-on-Tone) Palette Registration', () => {
    const expectedTones = ['mint', 'peach', 'lavender', 'buttercup', 'sky', 'sand', 'rose', 'cream'];
    expectedTones.forEach((tone) => {
      assert.ok(
        paper.tones.includes(tone),
        `paper.tones must include tone: ${tone}`
      );
    });
  });

  await t.test('AC-3: High-Precision 3-Tier Burnt Umber feDropShadow Filter Defs (#pc-paper-sh-plate)', () => {
    const defsHtml = paper.getDefsContent();
    assert.ok(defsHtml.includes('id="pc-paper-sh-plate"'), 'Defs must contain #pc-paper-sh-plate filter');
    assert.match(
      defsHtml,
      /<feDropShadow\s+dx="0"\s+dy="1\.2"\s+stdDeviation="0\.6"\s+flood-color="#2E1E14"\s+flood-opacity="0\.48"\/>/,
      'Must contain exact tier 1 contact shadow'
    );
    assert.match(
      defsHtml,
      /<feDropShadow\s+dx="0"\s+dy="4\.5"\s+stdDeviation="2\.2"\s+flood-color="#2E1E14"\s+flood-opacity="0\.26"\/>/,
      'Must contain exact tier 2 deep ambient shadow'
    );
    assert.match(
      defsHtml,
      /<feDropShadow\s+dx="0"\s+dy="-0\.5"\s+stdDeviation="0\.3"\s+flood-color="#FFFFFF"\s+flood-opacity="0\.95"\/>/,
      'Must contain exact tier 3 top razor edge highlight'
    );
    assert.ok(defsHtml.includes('id="pc-paper-sh-inset"'), 'Defs must contain inset well filter #pc-paper-sh-inset');
  });

  await t.test('AC-4: Physical Multilayer SVG Generation for Stamp Archetype', () => {
    const res = paper.markup('stamp', 120, 100);
    assert.ok(res.html.length > 0, 'Stamp markup must be generated');
    // Layer 1: 하단 베이스 색지 + 3-Tier 그림자
    assert.match(res.html, /class="pc-paper-base"[^>]*fill="var\(--pc-paper-base,\s*#BBD5B8\)"[^>]*filter="url\(#pc-paper-sh-plate\)"/);
    // Layer 2: 본문 크림 도화지 + 0.88px 흰 림
    assert.match(res.html, /class="pc-paper-sheet"[^>]*fill="var\(--pc-paper-fill,\s*#FFFDF9\)"[^>]*stroke="#FFFFFF"[^>]*stroke-width="0\.88"/);
    // Layer 3: 장식 점선 스티칭/천공선
    assert.match(res.html, /class="pc-paper-deco pc-paper-stitch"[^>]*stroke-dasharray="3 3"/);
    // Layer 4: 빈티지 소인 액센트
    assert.match(res.html, /class="pc-paper-accent"/);
  });

  await t.test('AC-5: Physical Multilayer SVG Generation for Wax Archetype', () => {
    const res = paper.markup('wax', 100, 100);
    assert.ok(res.html.length > 0, 'Wax markup must be generated');
    // Layer 1: 멜팅 외곽선 베이스 + 3-Tier 그림자
    assert.match(res.html, /class="pc-paper-base"[^>]*filter="url\(#pc-paper-sh-plate\)"/);
    // Layer 2: 본체 시트
    assert.match(res.html, /class="pc-paper-sheet"/);
    // Layer 3: 돋음 링 및 스티칭
    assert.match(res.html, /class="pc-paper-well"/);
    assert.match(res.html, /class="pc-paper-deco pc-paper-stitch"[^>]*stroke-dasharray="3 3"/);
    // Layer 4: 크레센트 반사광
    assert.match(res.html, /class="pc-paper-accent pc-paper-crescent"/);
  });

  await t.test('AC-6: Physical Multilayer SVG Generation for Ticket Archetype', () => {
    const res = paper.markup('ticket', 160, 60);
    assert.ok(res.html.length > 0, 'Ticket markup must be generated');
    // Layer 1: 노치 외곽선 베이스
    assert.match(res.html, /class="pc-paper-base"[^>]*filter="url\(#pc-paper-sh-plate\)"/);
    // Layer 2: 크림 티켓 본체
    assert.match(res.html, /class="pc-paper-sheet"/);
    // Layer 3: 중앙 세로 점선 절취선
    assert.match(res.html, /<line class="pc-paper-deco pc-paper-stitch"[^>]*stroke-dasharray="3 3"/);
    // Layer 4: 스터브 스타 스탬프
    assert.match(res.html, /<polygon class="pc-paper-accent"/);
  });

  await t.test('AC-7: Physical Multilayer SVG Generation for Pebble Archetype', () => {
    const res = paper.markup('pebble', 120, 90);
    assert.ok(res.html.length > 0, 'Pebble markup must be generated');
    assert.match(res.html, /class="pc-paper-base"[^>]*filter="url\(#pc-paper-sh-plate\)"/);
    assert.match(res.html, /class="pc-paper-sheet"/);
    assert.match(res.html, /class="pc-paper-deco pc-paper-stitch"/);
    assert.match(res.html, /class="pc-paper-accent pc-paper-crescent"/);
  });

  await t.test('AC-8: Physical Multilayer SVG Generation for Deckle, Sheet, Field, Pill & Tab', () => {
    ['deckle', 'sheet', 'field', 'pill', 'tab'].forEach((variant) => {
      const res = paper.markup(variant, 140, 70);
      assert.ok(res.html.length > 0, `${variant} markup must be generated`);
      assert.match(res.html, /class="pc-paper-base"/);
      assert.match(res.html, /class="pc-paper-sheet"/);
      if (variant === 'field') {
        assert.match(res.html, /class="pc-paper-well"[^>]*filter="url\(#pc-paper-sh-inset\)"/);
      }
    });
  });

  await t.test('AC-9: CSS Architecture & Spec Compliance', () => {
    // 1. .pc-ui-paper-layer absolute positioning and styling
    assert.match(cssContent, /\.pc-ui-paper-layer\s*\{[^}]*position:\s*absolute/);
    assert.match(cssContent, /\.pc-ui-paper-layer\s*\{[^}]*z-index:\s*-1/);
    assert.match(cssContent, /\.pc-ui-paper-layer\s*\{[^}]*pointer-events:\s*none/);
    assert.match(cssContent, /\.pc-ui-paper-layer\s*\{[^}]*overflow:\s*visible/);

    // 2. 8 tones defined in CSS
    ['cream', 'mint', 'peach', 'lavender', 'buttercup', 'sky', 'sand', 'rose'].forEach((tone) => {
      assert.match(
        cssContent,
        new RegExp(`\\[data-pc-tone="${tone}"\\]`),
        `CSS must define tone selector for ${tone}`
      );
    });

    // 3. 3-Tier Plate filter bound to .pc-paper-stack
    assert.match(cssContent, /\.pc-paper-stack\s*\{[^}]*filter:\s*url\(#pc-paper-sh-plate\)/);

    // 4. prefers-reduced-motion media query
    assert.match(cssContent, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  });

  await t.test('AC-10: Strict Exclusion Enforcement (Icons & Icon Backgrounds Unmodified)', () => {
    // papercut-icons.js 및 papercut-backgrounds.js 원형 보존 확인
    const bgJs = fs.readFileSync(path.join(projectRoot, 'papercut-backgrounds.js'), 'utf-8');
    assert.ok(bgJs.includes('PAPERCUT_BACKGROUNDS'), 'papercut-backgrounds.js must remain intact');
    assert.match(jsContent, /#icon-gallery,\s*#bg-library,\s*#icon-simulator/, 'Must explicitly exclude icon gallery & simulator containers');
    assert.match(jsContent, /pc-layered-paper-icon/, 'Must strictly exclude .pc-layered-paper-icon elements');
    assert.match(jsContent, /pc-mounted-plate-svg/, 'Must strictly exclude .pc-mounted-plate-svg elements');
  });
});
