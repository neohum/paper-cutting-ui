import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const indexHtmlPath = path.join(projectRoot, 'index.html');
const primitivesHtmlPath = path.join(projectRoot, 'papercut-svg-primitives.html');
const papercutCssPath = path.join(projectRoot, 'papercut.css');
const layoutCssPath = path.join(projectRoot, 'papercut-layout.css');

test('3D Layered Paper-Cut Spinner & Anti-FOUC Page Loader Suite', async (t) => {
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const primitivesHtml = fs.readFileSync(primitivesHtmlPath, 'utf8');
  const papercutCss = fs.readFileSync(papercutCssPath, 'utf8');
  const layoutCss = fs.readFileSync(layoutCssPath, 'utf8');

  await t.test('AC-1: FOUC Prevention & Critical Inline Style in Head', () => {
    for (const [filename, html] of [['index.html', indexHtml], ['papercut-svg-primitives.html', primitivesHtml]]) {
      // 1. Critical Inline Style tag in <head>
      assert.ok(
        html.includes('id="pc-critical-loader-style"'),
        `${filename} must contain #pc-critical-loader-style inline in head`
      );

      // 2. body:not(.pc-loaded) overflow hidden
      assert.match(
        html,
        /body:not\(\.pc-loaded\)\s*\{\s*overflow:\s*hidden\s*!important;\s*\}/,
        `${filename} must prevent scrollbar flicker with body:not(.pc-loaded) { overflow: hidden !important; }`
      );

      // 3. Full viewport fixed coverage with #FAF7F0 background & z-index: 9999999
      assert.match(
        html,
        /#pc-page-loader\s*\{[^}]*position:\s*fixed;[^}]*background:\s*#FAF7F0;[^}]*z-index:\s*9999999;/s,
        `${filename} #pc-page-loader must cover full viewport with background #FAF7F0 and z-index: 9999999`
      );

      // 4. Smooth fade-out transition: opacity 0.4s ease, visibility 0.4s ease
      assert.match(
        html,
        /#pc-page-loader\s*\{[^}]*transition:\s*opacity\s*0\.4s\s*ease,\s*visibility\s*0\.4s\s*ease;/s,
        `${filename} #pc-page-loader must declare smooth 0.4s fade-out transition`
      );

      // 5. Dismissed state
      assert.match(
        html,
        /#pc-page-loader\.pc-dismissed\s*\{[^}]*opacity:\s*0;[^}]*visibility:\s*hidden;/s,
        `${filename} .pc-dismissed must set opacity: 0 and visibility: hidden`
      );
    }
  });

  await t.test('AC-2: 3D Layered Paper-Cut Wi-Fi Wave Flying Spinner SVG Multi-Tier Architecture', () => {
    for (const [filename, html] of [['index.html', indexHtml], ['papercut-svg-primitives.html', primitivesHtml]]) {
      // 1. Loader markup presence
      assert.ok(
        html.includes('id="pc-page-loader"') && html.includes('class="pc-layered-loader"'),
        `${filename} must contain #pc-page-loader with class pc-layered-loader`
      );

      // 2. SVG paper spinner element
      assert.match(
        html,
        /<svg[^>]*class="pc-paper-spinner"[^>]*viewBox="0 0 160 160"/,
        `${filename} must contain SVG spinner with viewBox 0 0 160 160`
      );

      // 3. Pure white knife-edge rim light in filter defs
      assert.match(
        html,
        /<feDropShadow[^>]*flood-color="#FFFFFF"[^>]*flood-opacity="0\.95"/,
        `${filename} defs must include knife-edge rim light (flood-color="#FFFFFF" flood-opacity="0.95")`
      );

      // 4. 2-Tier Burnt Umber shadow in filter defs
      assert.match(
        html,
        /<feDropShadow[^>]*flood-color="#2E1E14"/,
        `${filename} defs must include burnt umber shadow (flood-color="#2E1E14")`
      );

      // 5. Layer 1: Underlay Base (Kraft/sand paper sheet circle)
      assert.ok(
        html.includes('pc-loader-layer-base') && (html.includes('#F4EBD9') || html.includes('#F5EFE3')),
        `${filename} must contain Layer 1 Underlay Base with kraft/sand cardstock circle`
      );

      // 6. Layer 2: Wave Top (최상단 가장 큰 호 - 0s delay)
      assert.ok(
        html.includes('pc-wifi-wave-top') && html.includes('pc-loader-layer-wave-top'),
        `${filename} must contain Layer 2 Top Wave with .pc-wifi-wave-top`
      );
      assert.match(
        html,
        /\.pc-wifi-wave-top\s*\{[^}]*animation:\s*pc-wifi-fly-away\s*2\.2s[^}]*0s\s*infinite;/s,
        `${filename} must animate top wave with pc-wifi-fly-away starting at 0s delay`
      );

      // 7. Layer 3: Wave Mid (중간 호선 - 0.22s delay)
      assert.ok(
        html.includes('pc-wifi-wave-mid') && html.includes('pc-loader-layer-wave-mid'),
        `${filename} must contain Layer 3 Mid Wave with .pc-wifi-wave-mid`
      );
      assert.match(
        html,
        /\.pc-wifi-wave-mid\s*\{[^}]*animation:\s*pc-wifi-fly-away\s*2\.2s[^}]*0\.22s\s*infinite;/s,
        `${filename} must animate mid wave with 0.22s staggered delay`
      );

      // 8. Layer 4: Wave Inner (작은 호선 - 0.44s delay)
      assert.ok(
        html.includes('pc-wifi-wave-inner') && html.includes('pc-loader-layer-wave-inner'),
        `${filename} must contain Layer 4 Inner Wave with .pc-wifi-wave-inner`
      );
      assert.match(
        html,
        /\.pc-wifi-wave-inner\s*\{[^}]*animation:\s*pc-wifi-fly-away\s*2\.2s[^}]*0\.44s\s*infinite;/s,
        `${filename} must animate inner wave with 0.44s staggered delay`
      );

      // 9. Layer 5: Bottom Dot (최하단 신호점 - 0.66s delay)
      assert.ok(
        html.includes('pc-wifi-dot') && html.includes('pc-loader-layer-dot'),
        `${filename} must contain Layer 5 Bottom Dot with .pc-wifi-dot`
      );
      assert.match(
        html,
        /\.pc-wifi-dot\s*\{[^}]*animation:\s*pc-wifi-fly-away\s*2\.2s[^}]*0\.66s\s*infinite;/s,
        `${filename} must animate bottom dot with 0.66s staggered delay`
      );

      // 10. 4 Cardstock Gradients for Wi-Fi Layers (Sky, Mint, Lavender, Peach)
      const gradients = ['top', 'mid', 'inner', 'dot'];
      for (const grad of gradients) {
        assert.ok(
          html.includes(`pc-wifi-grad-${grad}`),
          `${filename} must include gradient #pc-wifi-grad-${grad}`
        );
      }

      // 11. Loading guidance announcement text in Nanum Square Round & burnt umber ink
      assert.ok(
        html.includes('pc-loader-text') && html.includes('종이 공예 신호를 연결하는 중...'),
        `${filename} must display loading text "종이 공예 신호를 연결하는 중..."`
      );
      assert.match(
        html,
        /\.pc-loader-text\s*\{[^}]*font-family:\s*'Nanum Square Round'[^}]*color:\s*#2E1E14;/s,
        `${filename} loading text must style with Nanum Square Round font and #2E1E14 ink`
      );
    }
  });

  await t.test('AC-3: Smooth Fade-out Dismissal & 2.5s Safety Timeout', () => {
    for (const [filename, html] of [['index.html', indexHtml], ['papercut-svg-primitives.html', primitivesHtml]]) {
      assert.ok(
        html.includes('id="pc-loader-script"'),
        `${filename} must include #pc-loader-script`
      );

      // Listens to window load event
      assert.match(
        html,
        /window\.addEventListener\(['"]load['"]/,
        `${filename} script must hook window load event`
      );

      // Checks readyState complete
      assert.match(
        html,
        /document\.readyState\s*===\s*['"]complete['"]/,
        `${filename} script must check document.readyState === 'complete'`
      );

      // Adds pc-loaded to body and pc-dismissed to loader
      assert.match(
        html,
        /document\.body\.classList\.add\(['"]pc-loaded['"]\)/,
        `${filename} script must add pc-loaded class to body`
      );
      assert.match(
        html,
        /loader\.classList\.add\(['"]pc-dismissed['"]\)/,
        `${filename} script must add pc-dismissed class to loader`
      );

      // DOM cleanup
      assert.match(
        html,
        /loader\.parentNode\.removeChild\(loader\)/,
        `${filename} script must cleanly remove loader from DOM after transition`
      );

      // 2.5s (2500ms) safety fallback timeout
      assert.match(
        html,
        /setTimeout\(dismissLoader,\s*2500\)/,
        `${filename} script must have 2500ms safety fallback timeout`
      );
    }
  });

  await t.test('AC-4: Reusable CSS Classes in papercut.css & papercut-layout.css', () => {
    for (const [sheetName, css] of [['papercut.css', papercutCss], ['papercut-layout.css', layoutCss]]) {
      assert.ok(
        css.includes('.pc-layered-loader'),
        `${sheetName} must define .pc-layered-loader`
      );
      assert.ok(
        css.includes('.pc-paper-spinner'),
        `${sheetName} must define .pc-paper-spinner`
      );
      assert.ok(
        css.includes('.pc-loader-text'),
        `${sheetName} must define .pc-loader-text`
      );
      assert.ok(
        css.includes('pc-wifi-fly-away'),
        `${sheetName} must define @keyframes pc-wifi-fly-away`
      );
      assert.ok(
        css.includes('.pc-wifi-wave-top') && css.includes('.pc-wifi-wave-mid') && css.includes('.pc-wifi-wave-inner') && css.includes('.pc-wifi-dot'),
        `${sheetName} must define 4 Wi-Fi wave layer classes (.pc-wifi-wave-top, etc.)`
      );
      assert.ok(
        css.includes('@media (prefers-reduced-motion: reduce)'),
        `${sheetName} must support prefers-reduced-motion accessibility`
      );
    }
  });

  await t.test('AC-5: AGENTS.md Standards Compliance', () => {
    // 1. Anti-fingernail check: no border-l-4 rounded-*
    assert.doesNotMatch(
      indexHtml,
      /border-l-4\s+rounded/,
      'Must strictly avoid asymmetric border-l-4 rounded-*'
    );

    // 2. Korean typography: no break-all on loader text
    assert.doesNotMatch(
      indexHtml,
      /\.pc-loader-text\s*\{[^}]*\bbreak-all\b/s,
      'Must avoid break-all on Korean loader text'
    );
    assert.match(
      indexHtml,
      /\.pc-loader-text\s*\{[^}]*word-break:\s*keep-all;/s,
      'Korean loader text must enforce word-break: keep-all'
    );
  });
});
