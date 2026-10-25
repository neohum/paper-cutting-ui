import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('PaperCut Alerts & Toasts System Verification', async (t) => {
  const cssFile = path.join(projectRoot, 'papercut-alerts-toasts.css');
  const jsFile = path.join(projectRoot, 'papercut-alerts-toasts.js');
  const htmlFile = path.join(projectRoot, 'index.html');
  const blocksCss = path.join(projectRoot, 'papercut-blocks-charts.css');

  const css = fs.readFileSync(cssFile, 'utf8');
  const js = fs.readFileSync(jsFile, 'utf8');
  const html = fs.readFileSync(htmlFile, 'utf8');
  const blocks = fs.readFileSync(blocksCss, 'utf8');

  await t.test('1. Studio Card Radius Fix (No 0px radius regression)', () => {
    // Check that papercut-blocks-charts.css does not corrupt root with 0px
    assert.ok(!blocks.includes(':root {\n  --pc-radius-md: 0px;\n}'), 'Global root radius 0px should be removed');
    // Check concentric 2-sheet rounding for studio card
    assert.ok(css.includes('.pc-toast-studio-card') || css.includes('#paper-alerts-toasts .pc-card-nested'), 'Studio card concentric styles present');
  });

  await t.test('2. Alert Slips: 2-Sheet Underlay & Soft Paper Shadows', () => {
    // Check soft shadow in .pc-alert
    assert.ok(css.includes('.pc-alert::after'), '2-Sheet underlay pseudo-element must exist');
    assert.ok(css.includes('--pc-alert-underlay'), 'Theme-based underlay custom properties must exist');
    assert.ok(!css.includes('0 4.5px 12px rgba(46, 30, 20, 0.24)'), 'Heavy 24% dark shadow removed from alert');
  });

  await t.test('3. Alert Slips: 3D Plates on Left Icon and Right Close Button', () => {
    // Check index.html has pc-mounted-plate on alert icons
    assert.ok(html.includes('data-bg-shape="shield-crest"') || html.includes('data-bg-shape="postage-stamp"'), 'Left alert icons have 3D background shapes');
    assert.ok(html.includes('data-icon="close"') && (html.includes('data-bg-shape="coin-medallion"') || html.includes('data-bg-shape="seal-wax"')), 'Right close buttons have 3D background plate');
    // Check dynamic PaperCutAlert.create hydration
    assert.ok(js.includes('hydrateMountedPlates'), 'Dynamic alert creator hydrates 3D plates');
  });

  await t.test('4. All 5 Toast Archetypes: Pure 3D Kirigami SVG Frames Matching Studio Buttons', () => {
    // 01. Ticket
    assert.ok(js.includes('TOAST_TICKET_SVG'), 'Ticket SVG frame constant defined');
    assert.ok(js.includes('pc-ticket-icon-wrap'), 'Gold star medallion inside ticket toast defined');
    assert.ok(css.includes('.pc-toast-card.pc-toast-ticket'), 'Ticket toast styles present');
    // 02. Washi
    assert.ok(js.includes('TOAST_WASHI_SVG'), 'Washi tape SVG frame constant defined');
    assert.ok(js.includes('pc-washi-icon-wrap'), 'Washi note pin medallion defined');
    assert.ok(css.includes('.pc-toast-card.pc-toast-washi'), 'Washi toast styles present');
    // 03. Dogear
    assert.ok(js.includes('TOAST_DOGEAR_SVG'), 'Dogear folded corner SVG frame constant defined');
    assert.ok(js.includes('pc-dogear-icon-wrap'), 'Dogear warning seal defined');
    assert.ok(css.includes('.pc-toast-card.pc-toast-dogear'), 'Dogear toast styles present');
    // 04. Stamp
    assert.ok(js.includes('TOAST_STAMP_SVG'), 'Perforated stamp SVG frame constant defined');
    assert.ok(js.includes('pc-stamp-icon-wrap'), 'Stamp scissors seal defined');
    assert.ok(css.includes('.pc-toast-card.pc-toast-stamp'), 'Stamp toast styles present');
    // 05. Wax
    assert.ok(js.includes('TOAST_WAX_FRAME_SVG'), 'Wax seal pill SVG frame constant defined');
    assert.ok(js.includes('pc-wax-icon-wrap'), 'Wax seal heart medallion defined');
    assert.ok(css.includes('.pc-toast-card.pc-toast-wax'), 'Wax toast styles present');
    assert.ok(css.includes('.pc-toast-archetype-bg'), 'Archetype SVG background class present');
  });

  await t.test('5. Toast Anchor Position & Original Toast Compatibility', () => {
    // Position classes
    assert.ok(css.includes('#pc-toast-container.pos-top-right'), 'Top-right position style present');
    assert.ok(css.includes('#pc-toast-container.pos-bottom-right'), 'Bottom-right position style present');
    assert.ok(css.includes('#pc-toast-container.pos-top-center'), 'Top-center position style present');
    // Original showPaperToast compatibility
    assert.ok(js.includes('_originalShowPaperToast'), 'Preserves original showPaperToast function');
  });
});
