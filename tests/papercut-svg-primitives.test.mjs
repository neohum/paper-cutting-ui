import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Full SVG UI Library: PaperCut SVG Primitives', () => {
  const cssPath = path.join(rootDir, 'papercut-svg-primitives.css');
  const jsPath = path.join(rootDir, 'papercut-svg-primitives.js');

  const cssContent = fs.readFileSync(cssPath, 'utf8');
  const jsContent = fs.readFileSync(jsPath, 'utf8');

  describe('AC-1: Radix UI 12 Master SVG Primitives Architecture', () => {
    it('should export all 12 master component factories in papercut-svg-primitives.js', () => {
      const requiredFactories = [
        'createButton',
        'createSwitch',
        'createCheckbox',
        'createRadioGroup',
        'createSlider',
        'createAccordion',
        'createTabs',
        'createCard',
        'createDialog',
        'createProgress',
        'createTooltip',
        'createSelect',
        'createBadge',
        'createInput',
        'createAvatar',
        'createBreadcrumb',
        'createPagination',
        'createToast',
        'createStepper'
      ];

      for (const fnName of requiredFactories) {
        assert.ok(
          jsContent.includes(fnName),
          `papercut-svg-primitives.js must declare factory function ${fnName}`
        );
      }
    });

    it('should provide authentic 7 pastel color swatches plus kraft in palettes', () => {
      const swatches = ['cloud', 'mint', 'peach', 'sand', 'lavender', 'sky', 'sage', 'rose', 'kraft'];
      for (const swatch of swatches) {
        assert.ok(
          jsContent.includes(`${swatch}:`),
          `PALETTES must include swatch ${swatch}`
        );
      }
    });
  });

  describe('AC-2: Handcrafted Paper Texture, Filters & Shadows', () => {
    it('should declare SVG paper texture and shadow filters in master defs', () => {
      assert.ok(
        jsContent.includes('pc-filter-paper-fiber') && jsContent.includes('feTurbulence'),
        'Must declare paper fiber turbulence filter pc-filter-paper-fiber'
      );
      assert.ok(
        jsContent.includes('pc-filter-contact-shadow') && jsContent.includes('feDropShadow'),
        'Must declare 2-tier contact drop shadow filter'
      );
      assert.ok(
        jsContent.includes('pc-filter-depth-shadow'),
        'Must declare multi-tier depth shadow filter'
      );
      assert.ok(
        jsContent.includes('pc-filter-cutout-inset'),
        'Must declare cutout well recessed inset filter'
      );
    });

    it('should configure 0.88px knife-cut rim light and burnt umber contact shadow tokens in CSS', () => {
      assert.ok(
        cssContent.includes('--pc-svg-canvas: #FAF7F0') || cssContent.includes('#FAF7F0'),
        'Must define matte cream canvas background #FAF7F0'
      );
      assert.ok(
        cssContent.includes('--pc-svg-contact-shadow') && cssContent.includes('rgba(46, 30, 20'),
        'Must define burnt umber contact shadow token'
      );
      assert.ok(
        cssContent.includes('--pc-svg-knife-rim'),
        'Must define pure white knife-cut bevel rim token'
      );
    });
  });

  describe('AC-3: WAI-ARIA Semantics & Keyboard Navigation', () => {
    it('should enforce proper ARIA roles and semantics in primitives', () => {
      assert.ok(jsContent.includes("role', 'button'") || jsContent.includes('role="button"'), 'Button must declare role="button"');
      assert.ok(jsContent.includes("role', 'switch'") || jsContent.includes('role="switch"'), 'Switch must declare role="switch"');
      assert.ok(jsContent.includes("role', 'checkbox'") || jsContent.includes('role="checkbox"'), 'Checkbox must declare role="checkbox"');
      assert.ok(jsContent.includes("role', 'radiogroup'") || jsContent.includes('role="radiogroup"'), 'Radio must declare role="radiogroup"');
      assert.ok(jsContent.includes("role', 'slider'") || jsContent.includes('role="slider"'), 'Slider must declare role="slider"');
      assert.ok(jsContent.includes("role', 'tab'") || jsContent.includes('role="tab"'), 'Tabs must declare role="tab"');
      assert.ok(jsContent.includes("role', 'dialog'") || jsContent.includes('role="dialog"'), 'Dialog must declare role="dialog"');
      assert.ok(jsContent.includes("role', 'progressbar'") || jsContent.includes('role="progressbar"'), 'Progress must declare role="progressbar"');
      assert.ok(jsContent.includes("role', 'combobox'") || jsContent.includes('role="combobox"'), 'Select must declare role="combobox"');
    });

    it('should support accessible keyboard interaction in components', () => {
      assert.ok(jsContent.includes("e.key === ' ' || e.key === 'Enter'"), 'Must handle Space/Enter toggle');
      assert.ok(jsContent.includes("ArrowDown") && jsContent.includes("ArrowUp"), 'Must handle arrow navigation in radio/slider');
      assert.ok(jsContent.includes("e.key === 'Escape'"), 'Must handle Escape close in dialog');
    });

    it('should support prefers-reduced-motion accessibility in CSS', () => {
      assert.ok(
        cssContent.includes('@media (prefers-reduced-motion: reduce)'),
        'CSS must define prefers-reduced-motion downgrade'
      );
    });
  });
});
