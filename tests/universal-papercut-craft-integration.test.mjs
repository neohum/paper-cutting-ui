import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('Universal Papercut Craft End-to-End Integration Suite', async (t) => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  const layoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf-8');
  const uiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');

  await t.test('AC-7: Complete Craft Primitives Integration', () => {
    // 1. Cutout window and aperture header
    assert.ok(layoutCss.includes('.pc-cutout-window'), 'layoutCss must contain .pc-cutout-window');
    assert.ok(layoutCss.includes('.pc-aperture-header'), 'layoutCss must contain .pc-aperture-header');
    assert.ok(indexHtml.includes('pc-aperture-header'), 'indexHtml must contain pc-aperture-header');
    assert.ok(indexHtml.includes('pc-cutout-window'), 'indexHtml must contain pc-cutout-window');

    // 2. Die-cut ticket and stamp
    assert.ok(layoutCss.includes('.pc-diecut-ticket'), 'layoutCss must contain .pc-diecut-ticket');
    assert.ok(layoutCss.includes('.pc-diecut-stamp'), 'layoutCss must contain .pc-diecut-stamp');
    assert.ok(indexHtml.includes('pc-diecut-ticket'), 'indexHtml must contain pc-diecut-ticket');
    assert.ok(indexHtml.includes('pc-diecut-stamp'), 'indexHtml must contain pc-diecut-stamp');

    // 3. Paper patch
    assert.ok(layoutCss.includes('.pc-paper-patch'), 'layoutCss must contain .pc-paper-patch');
    assert.ok(indexHtml.includes('pc-paper-patch'), 'indexHtml must contain pc-paper-patch');
  });

  await t.test('AC-8: Strict Preservation of Icons and Background Shapes', () => {
    // Icons & Backgrounds MUST remain unaffected
    assert.ok(indexHtml.includes('id="icon-gallery"'), 'Icon gallery must be retained');
    assert.ok(indexHtml.includes('id="bg-library"'), 'Background library must be retained');
    assert.ok(fs.existsSync(path.join(projectRoot, 'papercut-icons.js')), 'papercut-icons.js must exist');
    assert.ok(fs.existsSync(path.join(projectRoot, 'papercut-backgrounds.js')), 'papercut-backgrounds.js must exist');
  });
});
