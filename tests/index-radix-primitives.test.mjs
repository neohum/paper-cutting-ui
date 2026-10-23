import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Revitalize Index.html with Radix UI Pure SVG Primitives', () => {
  const indexPath = path.join(rootDir, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');

  describe('AC-3: Integration of Radix Primitives in index.html', () => {
    it('should link papercut-svg-primitives.css in index.html head', () => {
      assert.ok(
        indexHtml.includes('papercut-svg-primitives.css'),
        'index.html must link papercut-svg-primitives.css'
      );
    });

    it('should load papercut-svg-primitives.js before closing body', () => {
      assert.ok(
        indexHtml.includes('src="papercut-svg-primitives.js"'),
        'index.html must include script tag for papercut-svg-primitives.js'
      );
    });

    it('should declare the Radix UI Full SVG Primitives master deck', () => {
      assert.ok(
        indexHtml.includes('id="pc-radix-primitives-live-deck"'),
        'index.html must include pc-radix-primitives-live-deck container'
      );
    });

    it('should provide mount slots for buttons, switch, checkbox, radio, slider, progress, select, badges, tabs, stepper, accordion, dialog', () => {
      const requiredSlots = [
        'pc-live-btn-slot',
        'pc-live-switch-slot',
        'pc-live-chk-slot',
        'pc-live-rad-slot',
        'pc-live-slider-slot',
        'pc-live-progress-slot',
        'pc-live-select-slot',
        'pc-live-badge-slot',
        'pc-live-tabs-slot',
        'pc-live-stepper-slot',
        'pc-live-accordion-slot',
        'pc-live-dialog-slot'
      ];

      for (const slotId of requiredSlots) {
        assert.ok(
          indexHtml.includes(`id="${slotId}"`),
          `index.html must contain mount slot ${slotId}`
        );
      }
    });
  });

  describe('AC-4: Handcrafted Aesthetic & Prompt Fidelity', () => {
    it('should embed the core visual paper-cut prompt in the master banner', () => {
      assert.ok(
        indexHtml.includes('Layered paper-cut illustration') &&
        indexHtml.includes('soft pastel colors') &&
        indexHtml.includes('clean vector edges'),
        'index.html banner must feature the core paper-cut visual prompt'
      );
    });

    it('should preserve Flaticon UIcons standard (fi fi-rr-*) and avoid foreign icons', () => {
      assert.ok(
        !indexHtml.includes('lucide-') && !indexHtml.includes('feather-'),
        'index.html must avoid foreign icon sets'
      );
    });
  });

  describe('AC-5: WAI-ARIA and Keyboard Accessibility in index.html', () => {
    it('should contain proper WAI-ARIA roles across components in index.html', () => {
      const expectedAriaRoles = ['role="button"', 'role="switch"', 'role="radiogroup"', 'role="slider"', 'role="listbox"'];
      for (const role of expectedAriaRoles) {
        assert.ok(
          indexHtml.includes(role),
          `index.html must include WAI-ARIA ${role}`
        );
      }
    });
  });
});
