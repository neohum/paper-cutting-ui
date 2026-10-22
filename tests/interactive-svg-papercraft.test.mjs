import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Interactive UI Elements Papercraft Architecture Suite (Lane C)', async (t) => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  const papercutUiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');

  await t.test('AC-1: Global 3-Tier SVG Filters Definition (Button Shadow, Inset Well, Lifted Shadow)', () => {
    // 1. pc-paper-sh-button filter with 3-tier drop shadows
    assert.match(indexHtml, /id="pc-paper-sh-button"/, 'index.html must define pc-paper-sh-button filter');
    assert.match(indexHtml, /dx="0"\s+dy="1\.2"\s+stdDeviation="0\.6"\s+flood-color="#2E1E14"\s+flood-opacity="0\.48"/, 'pc-paper-sh-button must have Tier 1 drop shadow');
    assert.match(indexHtml, /dx="0"\s+dy="3\.5"\s+stdDeviation="1\.8"\s+flood-color="#2E1E14"\s+flood-opacity="0\.25"/, 'pc-paper-sh-button must have Tier 2 drop shadow');
    assert.match(indexHtml, /dx="0"\s+dy="-0\.5"\s+stdDeviation="0\.3"\s+flood-color="#FFFFFF"\s+flood-opacity="0\.95"/, 'pc-paper-sh-button must have Tier 3 rim highlight');

    // 2. pc-paper-sh-inset filter
    assert.match(indexHtml, /id="pc-paper-sh-inset"/, 'index.html must define pc-paper-sh-inset filter');

    // 3. pc-paper-sh-lift filter
    assert.match(indexHtml, /id="pc-paper-sh-lift"/, 'index.html must define pc-paper-sh-lift filter');
  });

  await t.test('AC-2: Buttons (pill/ticket data-pc-paper, 3-tier burnt umber shadow, rim light, haptic feedback, 7 swatches)', () => {
    // 1. data-pc-paper="pill" or "ticket" on buttons in index.html
    assert.match(indexHtml, /class="[^"]*pc-btn[^"]*"[^>]*data-pc-paper="(pill|ticket)"|data-pc-paper="(pill|ticket)"[^>]*class="[^"]*pc-btn[^"]*"/, 'Buttons in index.html must have data-pc-paper="pill" or "ticket"');
    assert.match(indexHtml, /class="[^"]*pc-svg-kirigami-btn[^"]*"[^>]*data-pc-paper="(pill|ticket)"|data-pc-paper="(pill|ticket)"[^>]*class="[^"]*pc-svg-kirigami-btn[^"]*"/, 'SVG kirigami buttons in index.html must have data-pc-paper');

    // 2. CSS 3-Tier burnt umber shadow on data-pc-paper pill / ticket
    assert.match(papercutUiCss, /\[data-pc-paper="pill"\][\s\S]*?rgba\(46,\s*30,\s*20,\s*0\.48\)[\s\S]*?rgba\(46,\s*30,\s*20,\s*0\.25\)/, 'papercut-ui.css must define 3-Tier burnt umber shadow for data-pc-paper="pill"');
    assert.match(papercutUiCss, /\[data-pc-paper="(pill|ticket)"\][\s\S]*?0\.88px/, 'papercut-ui.css must define 0.88px rim light on buttons');

    // 3. Haptic press feedback (:active translateY)
    assert.match(papercutUiCss, /\[data-pc-paper="pill"\]:active|\[data-pc-paper="ticket"\]:active/, 'papercut-ui.css must define active press state');

    // 4. 7 pastel swatches support
    const swatches = ['cloud', 'mint', 'peach', 'sand', 'lavender', 'sky', 'sage'];
    for (const swatch of swatches) {
      assert.match(papercutUiCss, new RegExp(`pc-swatch-${swatch}`), `papercut-ui.css must support swatch ${swatch}`);
    }
  });

  await t.test('AC-3: Badges & Tags (stamp/ticket/pill, centering standard)', () => {
    // 1. data-pc-paper="stamp" or "ticket" or "pill" in index.html
    assert.match(indexHtml, /class="[^"]*pc-badge[^"]*"[^>]*data-pc-paper="(stamp|ticket|pill)"|data-pc-paper="(stamp|ticket|pill)"[^>]*class="[^"]*pc-badge[^"]*"/, 'Badges must have data-pc-paper in index.html');

    // 2. Centering standard inline-flex items-center justify-center leading-none
    assert.match(papercutUiCss, /\.pc-badge[\s\S]*?inline-flex[\s\S]*?items-center[\s\S]*?justify-content:\s*center/, 'Badges must have centering styles in papercut-ui.css');

    // 3. CSS rules for data-pc-paper="stamp", "ticket", "pill"
    assert.match(papercutUiCss, /\[data-pc-paper="stamp"\]/, 'CSS must style stamp badges');
    assert.match(papercutUiCss, /\[data-pc-paper="ticket"\]/, 'CSS must style ticket badges');
  });

  await t.test('AC-4: Form Controls (data-pc-paper="field", debossed well cutout filter)', () => {
    // 1. data-pc-paper="field" on input/select in index.html
    assert.match(indexHtml, /class="[^"]*pc-input[^"]*"[^>]*data-pc-paper="field"|data-pc-paper="field"[^>]*class="[^"]*pc-input[^"]*"/, 'Inputs must have data-pc-paper="field" in index.html');

    // 2. CSS debossed well styling
    assert.match(papercutUiCss, /\[data-pc-paper="field"\][\s\S]*?(pc-paper-sh-inset|inset\s+0)/, 'Form controls must have debossed well cutout styling in papercut-ui.css');
  });

  await t.test('AC-5: Tabs, Menus, Modals (data-pc-paper="tab", data-pc-paper="menu", deep lifted shadow)', () => {
    // 1. Tabs with data-pc-paper="tab"
    assert.match(indexHtml, /class="[^"]*pc-filter-btn[^"]*"[^>]*data-pc-paper="tab"|data-pc-paper="tab"[^>]*class="[^"]*pc-filter-btn[^"]*"/, 'Tabs must have data-pc-paper="tab" in index.html');

    // 2. Modals with data-pc-paper="menu"
    assert.match(indexHtml, /class="[^"]*(pc-modal-content|pc-ui-dialog|pc-ui-popover)[^"]*"[^>]*data-pc-paper="menu"|data-pc-paper="menu"[^>]*class="[^"]*(pc-modal-content|pc-ui-dialog|pc-ui-popover)[^"]*"/, 'Modals/menus must have data-pc-paper="menu" in index.html');

    // 3. Deep lifted shadow pc-paper-sh-lift in CSS
    assert.match(papercutUiCss, /\[data-pc-paper="menu"\][\s\S]*?(pc-paper-sh-lift|0\s+12px\s+28px|0\s+2\.5px)/, 'CSS must define lifted shadow for data-pc-paper="menu" in papercut-ui.css');
  });

  await t.test('AC-6: Preserved Protected Sections (icon-gallery, bg-library, etc.)', () => {
    assert.match(indexHtml, /id="icon-gallery"/, 'icon-gallery must be preserved');
    assert.match(indexHtml, /id="bg-library"/, 'bg-library must be preserved');
    assert.match(indexHtml, /id="icon-gallery-grid"/, 'icon-gallery-grid must be preserved');
    assert.match(indexHtml, /id="background-plates-grid"/, 'background-plates-grid must be preserved');
  });
});
