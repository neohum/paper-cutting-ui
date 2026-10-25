import test, { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

describe('Section Headers Icon Plate Enlargement & Inline Alignment Suite', () => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
  const layoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf8');
  const sidebarJs = fs.readFileSync(path.join(projectRoot, 'papercut-sidebar.js'), 'utf8');
  const shadowStudioJs = fs.readFileSync(path.join(projectRoot, 'papercut-shadow-studio.js'), 'utf8');

  it('Requirement 1 & 2: index.html 9 core section header plates enlarged to data-size="88" with inline text and shadow studio', () => {
    // Match all .pc-section-plate elements in index.html
    const plateRegex = /<span[^>]*class="[^"]*pc-section-plate[^"]*"[^>]*>/g;
    const matches = indexHtml.match(plateRegex) || [];
    assert.equal(matches.length, 9, `Expected exactly 9 .pc-section-plate elements in index.html, found ${matches.length}`);

    // Verify all 9 have data-size="88"
    matches.forEach((plateTag, idx) => {
      assert.ok(
        plateTag.includes('data-size="88"'),
        `Plate #${idx + 1} (${plateTag}) must have data-size="88"`
      );
      assert.ok(
        !plateTag.includes('data-size="68"'),
        `Plate #${idx + 1} must not have old data-size="68"`
      );
      assert.ok(
        !plateTag.includes('data-size="52"'),
        `Plate #${idx + 1} must not have old data-size="52"`
      );
      assert.ok(
        !plateTag.includes('data-size="44"'),
        `Plate #${idx + 1} must not have old data-size="44"`
      );
    });

    // Check specific core sections contain their respective enlarged plates
    const expectedSections = [
      { id: 'quick-start', icon: 'download' },
      { id: 'texture-showcase', icon: 'palette' },
      { id: 'paper-sound-studio', icon: 'volume' },
      { id: 'paper-alerts-toasts', icon: 'bell-ring' },
      { id: 'icon-gallery', icon: 'star-cluster' },
      { id: 'bg-library', icon: 'shield-star' },
      { id: 'pc-components', icon: 'grid-view' },
      { id: 'pc-blocks-charts', icon: 'contacts-book' },
      { id: 'pc-charts-section', icon: 'pie-chart-clean' }
    ];

    expectedSections.forEach(({ id, icon }) => {
      const sectionRegex = new RegExp(`id="${id}"[\\s\\S]*?data-icon="${icon}"[\\s\\S]*?data-size="88"`);
      assert.ok(sectionRegex.test(indexHtml), `Section #${id} must contain plate with icon "${icon}" and data-size="88"`);
    });

    // Check papercut-shadow-studio.js line 408 shadow studio plate has data-size="88"
    assert.ok(
      shadowStudioJs.includes('data-size="88"'),
      'papercut-shadow-studio.js must specify data-size="88" for shadow studio plate'
    );
    assert.ok(
      !shadowStudioJs.includes('data-size="52"'),
      'papercut-shadow-studio.js must not retain old data-size="52"'
    );

    // Ensure line 3569 has nowrap and 16px gap in style
    const compSectionMatch = indexHtml.match(/id="pc-components"[\s\S]*?<h2([^>]*)>/);
    assert.ok(compSectionMatch, 'pc-components section h2 must exist');
    const compHeaderAttrs = compSectionMatch[1];
    assert.ok(compHeaderAttrs.includes('flex-wrap: nowrap'), 'pc-components h2 must declare flex-wrap: nowrap');
    assert.ok(compHeaderAttrs.includes('gap: 16px'), 'pc-components h2 must declare gap: 16px');
    assert.ok(!compHeaderAttrs.includes('gap: 14px'), 'pc-components h2 must not retain gap: 14px');
    assert.ok(!compHeaderAttrs.includes('flex-wrap: wrap'), 'pc-components h2 must not retain flex-wrap: wrap');
  });

  it('Requirement 1 & 2: papercut-layout.css enforces 88px plate, 100% SVG, nowrap, gap: 16px, min-height: 88px, and flex-shrink: 0', () => {
    // 1. Plate size 88px !important & shadow
    assert.ok(
      layoutCss.includes('width: var(--pc-section-plate-size, 88px) !important;'),
      'papercut-layout.css must specify width: var(--pc-section-plate-size, 88px) !important for .pc-section-plate'
    );
    assert.ok(
      layoutCss.includes('height: var(--pc-section-plate-size, 88px) !important;'),
      'papercut-layout.css must specify height: var(--pc-section-plate-size, 88px) !important for .pc-section-plate'
    );
    assert.ok(
      layoutCss.includes('min-width: var(--pc-section-plate-size, 88px) !important;'),
      'papercut-layout.css must specify min-width: var(--pc-section-plate-size, 88px) !important for .pc-section-plate'
    );
    assert.ok(
      layoutCss.includes('min-height: var(--pc-section-plate-size, 88px) !important;'),
      'papercut-layout.css must specify min-height: var(--pc-section-plate-size, 88px) !important for .pc-section-plate'
    );
    assert.ok(
      layoutCss.includes('filter: drop-shadow(0 4px 12px rgba(46, 30, 20, 0.24)) !important;'),
      'papercut-layout.css must apply 88px enriched drop shadow'
    );

    // 2. SVG fills 100% of 88px plate
    assert.ok(
      layoutCss.includes('width: 100% !important;'),
      'papercut-layout.css must set svg.pc-mounted-plate-svg width: 100% !important'
    );
    assert.ok(
      layoutCss.includes('height: 100% !important;'),
      'papercut-layout.css must set svg.pc-mounted-plate-svg height: 100% !important'
    );

    // 3. Section Title flex-wrap: nowrap !important, gap: 16px !important, min-height: 88px !important, margin: 0 0 12px 0 !important
    assert.ok(
      layoutCss.includes('gap: 16px !important;'),
      'papercut-layout.css must specify gap: 16px !important for .pc-section-title'
    );
    assert.ok(
      layoutCss.includes('min-height: 88px !important;'),
      'papercut-layout.css must specify min-height: 88px !important for .pc-section-title'
    );
    assert.ok(
      layoutCss.includes('flex-wrap: nowrap !important;'),
      'papercut-layout.css must specify flex-wrap: nowrap !important for .pc-section-title'
    );
    assert.ok(
      layoutCss.includes('margin: 0 0 12px 0 !important;'),
      'papercut-layout.css must specify margin: 0 0 12px 0 !important for .pc-section-title'
    );

    // 4. Flex shrink 0 on plate child
    assert.ok(
      layoutCss.includes('.pc-section-title > .pc-section-plate') && layoutCss.includes('flex-shrink: 0 !important;'),
      'papercut-layout.css must ensure plate does not compress with flex-shrink: 0 !important'
    );

    // 5. Title text span styling (flex: 1 1 auto; min-width: 0; word-break: keep-all; line-height: 1.3;)
    assert.ok(
      layoutCss.includes('.pc-section-title > span:not(.pc-section-plate):not(.pc-mounted-plate)'),
      'papercut-layout.css must style text span sibling next to plate'
    );
    assert.ok(
      layoutCss.includes('word-break: keep-all;'),
      'papercut-layout.css text span must use word-break: keep-all for Korean typography'
    );
    assert.ok(
      layoutCss.includes('line-height: 1.3;'),
      'papercut-layout.css text span must use line-height: 1.3'
    );
  });

  it('Requirement 1: papercut-sidebar.js sets data-size default 88 and proportional iconScale Math.round(size * 0.56)', () => {
    // Check hydrateMountedPlates default size 88
    assert.ok(
      sidebarJs.includes("getAttribute('data-size') || (root.dataset && root.dataset.size) || '88'"),
      'hydrateMountedPlates must default root data-size to 88'
    );
    assert.ok(
      sidebarJs.includes("getAttribute('data-size') || (el.dataset && el.dataset.size) || '88'"),
      'hydrateMountedPlates must default element data-size to 88'
    );

    // Check iconScale computation
    assert.ok(
      sidebarJs.includes('Math.round(size * 0.56)'),
      'hydrateMountedPlates must compute iconScale as Math.round(size * 0.56)'
    );

    // Check template call passes iconScale
    assert.ok(
      sidebarJs.includes('iconScale: iconScale'),
      'hydrateMountedPlates must pass dynamic iconScale to getMountedPapercutPlateTemplate'
    );
  });
});
