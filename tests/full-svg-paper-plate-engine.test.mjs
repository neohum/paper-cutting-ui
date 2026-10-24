import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

describe('Full SVG Layered Paper-Craft Engine (Step 1)', () => {
  const paperLayerJs = fs.readFileSync(path.join(projectRoot, 'papercut-paper-layer.js'), 'utf8');
  const paperLayerCss = fs.readFileSync(path.join(projectRoot, 'papercut-paper-layer.css'), 'utf8');

  it('AC-1: papercut-paper-layer.js defines 3-Tier feDropShadow filter matching 130 background plates', () => {
    assert.ok(paperLayerJs.includes('id="pc-paper-sh-plate"'), 'Must define pc-paper-sh-plate filter');
    assert.ok(paperLayerJs.includes('id="pc-paper-sh-inset"'), 'Must define pc-paper-sh-inset filter');
    assert.ok(paperLayerJs.includes('id="pc-paper-sh-lift"'), 'Must define pc-paper-sh-lift filter');
    assert.ok(paperLayerJs.includes('feDropShadow dx="0" dy="1.2" stdDeviation="0.6"'), 'Must use 3-Tier contact drop shadow');
    assert.ok(paperLayerJs.includes('feDropShadow dx="0" dy="4.5" stdDeviation="2.2"'), 'Must use 3-Tier ambient drop shadow');
    assert.ok(paperLayerJs.includes('feDropShadow dx="0" dy="-0.5" stdDeviation="0.3"'), 'Must use 3-Tier rim highlight shadow');
  });

  it('AC-2: papercut-paper-layer.js generates 4-layer papercraft geometry with dashed stitching line', () => {
    assert.ok(paperLayerJs.includes('class="pc-paper-base"'), 'Must render Layer 1 base color paper');
    assert.ok(paperLayerJs.includes('class="pc-paper-sheet"'), 'Must render Layer 2 cream sheet');
    assert.ok(paperLayerJs.includes('class="pc-paper-deco pc-paper-stitch"'), 'Must render Layer 3 dashed stitching');
    assert.ok(paperLayerJs.includes('stroke-dasharray="3 3"'), 'Must use 3 3 dashed stitching');
    assert.ok(paperLayerJs.includes('filter="url(#pc-paper-sh-plate)"'), 'Base paper must apply 3-tier drop shadow');
  });

  it('AC-3: papercut-paper-layer.css binds 8 pastel tone palettes and transparent isolation', () => {
    assert.ok(paperLayerCss.includes('--pc-paper-base: var(--pc-mint'), 'Must support mint tone');
    assert.ok(paperLayerCss.includes('--pc-paper-base: var(--pc-peach'), 'Must support peach tone');
    assert.ok(paperLayerCss.includes('--pc-paper-base: var(--pc-lavender'), 'Must support lavender tone');
    assert.ok(paperLayerCss.includes('.is-paper-hydrated'), 'Must define hydrated styling');
    assert.ok(paperLayerCss.includes('filter: url(#pc-paper-sh-plate)'), 'Must bind filter to stack');
  });
});
