import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Authentic 7 Paper Swatches Pure SVG Knife-Edge Rim Light Badge Suite', async (t) => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf-8');
  const papercutUiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');

  const swatches = [
    { tone: 'cloud', name: 'Cloud White', icon: 'cloud-sun', ink: '#3D352E' },
    { tone: 'mint', name: 'Mint Cotton', icon: 'leaf', ink: '#19523C' },
    { tone: 'peach', name: 'Peach Warm', icon: 'heart', ink: '#7A2800' },
    { tone: 'sand', name: 'Sand Yellow', icon: 'sun', ink: '#6E530F' },
    { tone: 'lavender', name: 'Lavender Purple', icon: 'bell', ink: '#473B6B' },
    { tone: 'sky', name: 'Sky Blue', icon: 'paper-plane', ink: '#174E6F' },
    { tone: 'sage', name: 'Sage Green', icon: 'sprout', ink: '#245724' }
  ];

  await t.test('AC-1: All 7 original paper swatches are implemented as pure SVG badges in index.html', () => {
    for (const { tone, name } of swatches) {
      assert.ok(
        indexHtml.includes(`pc-swatch-${tone}`),
        `index.html must include pc-swatch-${tone}`
      );
      assert.ok(
        indexHtml.includes(name),
        `index.html must display swatch badge label: ${name}`
      );
    }
  });

  await t.test('AC-2: Each swatch badge is enclosed in .pc-svg-badge with .pc-kirigami-badge-svg markup', () => {
    for (const { tone } of swatches) {
      const swatchPattern = new RegExp(
        `class="[^"]*pc-svg-badge[^"]*pc-swatch-${tone}[^"]*"[\\s\\S]*?<svg[^>]*class="[^"]*pc-kirigami-badge-svg[^"]*"`,
        'i'
      );
      assert.match(
        indexHtml,
        swatchPattern,
        `Swatch ${tone} must use .pc-svg-badge.pc-swatch-${tone} with .pc-kirigami-badge-svg`
      );
    }
  });

  await t.test('AC-3: Multi-Layer Craft Geometry: 3-Tier Burnt Umber filter, 0.88px knife-edge rim, and highlight rim line', () => {
    for (const { tone } of swatches) {
      // 1. Filter ID definition
      assert.ok(
        indexHtml.includes(`id="svg-bdg-sw-${tone}"`),
        `Filter svg-bdg-sw-${tone} must be defined for ${tone}`
      );
      // 2. Linear Gradient definition
      assert.ok(
        indexHtml.includes(`id="pc-sw-grad-${tone}"`),
        `Linear gradient pc-sw-grad-${tone} must be defined for ${tone}`
      );
    }

    // 3. 0.88px stroke width for authentic knife-cut rim light
    assert.ok(
      indexHtml.includes('stroke-width="0.88"'),
      'index.html must feature 0.88px knife-edge rim light stroke'
    );

    // 4. Knife-cut edge highlight rim line
    assert.ok(
      indexHtml.includes('opacity="0.95"'),
      'index.html must feature top rim highlight line with opacity 0.95'
    );
  });

  await t.test('AC-4: Integrated papercraft micro-vector icons and wood-pulp ink typography', () => {
    for (const { ink, name } of swatches) {
      assert.ok(
        indexHtml.includes(`fill="${ink}"`),
        `Typography ink color ${ink} for ${name} must be applied`
      );
    }

    // Verify presence of pc-badge-icon-layer groups
    assert.ok(
      indexHtml.includes('class="pc-badge-icon-layer"'),
      'Swatch badges must integrate papercraft micro-vector icon layers'
    );
  });

  await t.test('AC-5: CSS Support & Transparent Isolation in papercut.css and papercut-ui.css', () => {
    for (const css of [papercutCss, papercutUiCss]) {
      assert.ok(
        css.includes('.pc-svg-badge'),
        'CSS must define .pc-svg-badge'
      );
      assert.ok(
        css.includes('.pc-kirigami-badge-svg'),
        'CSS must define .pc-kirigami-badge-svg'
      );
      assert.ok(
        css.includes('.pc-svg-badge[class*="pc-swatch-"]') || css.includes('.pc-svg-badge.pc-swatch-cloud'),
        'CSS must provide transparent isolation for SVG swatch badges'
      );
    }
  });
});
