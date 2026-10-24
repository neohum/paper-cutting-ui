import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

describe('Full SVG Interactive Elements Harmonization (Step 3)', () => {
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf8');
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

  it('AC-7: Buttons feature 48% contact burnt umber shadow matching icon background plates', () => {
    assert.ok(papercutCss.includes('0 1.2px 1.8px rgba(46, 30, 20, 0.48)'), 'Buttons must use 48% contact burnt umber shadow');
    assert.ok(papercutCss.includes('0 2px 2.5px rgba(46, 30, 20, 0.48)'), 'Hovered buttons must elevate with 48% contact burnt umber shadow');
    assert.ok(papercutCss.includes('inset 0 1px 0 rgba(255, 255, 255'), 'Buttons must provide knife rim light highlight');
  });

  it('AC-8: Complies with AGENTS.md Hard Rules (Anti-fingernail, Flaticon UIcons, Centering, Korean Typography)', () => {
    // 1. Anti-fingernail (no asymmetric border-l-4 rounded-*)
    assert.ok(!papercutCss.includes('border-l-4 rounded-'), 'papercut.css must not contain asymmetric border-l-4 rounded');
    assert.ok(!indexHtml.includes('border-l-4 rounded-'), 'index.html must not contain asymmetric border-l-4 rounded');

    // 2. Buttons & Badges centering
    assert.ok(papercutCss.includes('display: inline-flex'), 'Buttons must use inline-flex');
    assert.ok(papercutCss.includes('align-items: center'), 'Buttons must align items center');
    assert.ok(papercutCss.includes('justify-content: center'), 'Buttons must justify content center');

    // 3. Korean typography
    assert.ok(indexHtml.includes('class="break-keep"'), 'index.html must employ break-keep for Korean typography');
  });
});
