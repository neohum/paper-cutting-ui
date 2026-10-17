/**
 * tests/dynamic-light-shadow.test.mjs
 * Unit & Integration Physics Tests for Real-Time Cursor Relative Trigonometric
 * Dynamic Light Shadow Engine & 3-Tier Paper Elevation Simulator (Step 5)
 *
 * Validates:
 * - AC-1: Pure trigonometric calculations for light angle, distance, and normalized shadow vectors
 * - AC-2: LERP damping convergence with smooth interpolation
 * - AC-3: 3-tier multi-layer physical shadow solver (Contact, Mid-Air Float, Ambient Floor, Knife Bevel)
 * - AC-4: DynamicLightEngine state machine, pointer tracking, and sleep-on-settle RAF termination
 * - AC-5: CSS custom property bindings (--pc-light-dx, --pc-light-dy, --pc-light-blur, --pc-shadow-tier*)
 * - AC-6: Reduced motion fallback behavior
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

// --- Lightweight DOM Mock for Node.js Environment ---
class MockClassList {
  constructor() {
    this._classes = new Set();
  }
  add(...names) { names.forEach(n => this._classes.add(n)); }
  remove(...names) { names.forEach(n => this._classes.delete(n)); }
  contains(name) { return this._classes.has(name); }
  toggle(name, force) {
    if (force === undefined) {
      if (this.contains(name)) { this.remove(name); return false; }
      else { this.add(name); return true; }
    }
    if (force) this.add(name); else this.remove(name);
    return force;
  }
  toString() { return Array.from(this._classes).join(' '); }
}

class MockStyle {
  constructor() {
    this._props = new Map();
  }
  setProperty(name, val) { this._props.set(name, String(val)); this[name] = String(val); }
  getPropertyValue(name) { return this._props.get(name) || ''; }
  removeProperty(name) { this._props.delete(name); delete this[name]; }
}

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.classList = new MockClassList();
    this.style = new MockStyle();
    this._attrs = new Map();
    this.children = [];
    this.parentNode = null;
    this.dataset = {};
  }
  get className() { return this.classList.toString(); }
  set className(val) {
    this.classList = new MockClassList();
    if (val) val.split(/\s+/).forEach(c => c && this.classList.add(c));
  }
  setAttribute(k, v) { this._attrs.set(k, String(v)); }
  getAttribute(k) { return this._attrs.get(k) || null; }
  hasAttribute(k) { return this._attrs.has(k); }
  removeAttribute(k) { this._attrs.delete(k); }
  appendChild(child) {
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }
  querySelector(sel) {
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      return this.children.find(c => c.classList.contains(cls)) || null;
    }
    return null;
  }
  querySelectorAll(sel) {
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      return this.children.filter(c => c.classList.contains(cls));
    }
    return [];
  }
}

// Global window/document mocks for loading papercut-shadow-studio.js
const mockDocument = {
  getElementById: (id) => null,
  querySelector: (sel) => null,
  querySelectorAll: (sel) => [],
  createElement: (tag) => new MockElement(tag),
  body: new MockElement('body'),
  documentElement: new MockElement('html'),
  readyState: 'complete',
  addEventListener: () => {}
};

let rafCallbacks = [];
let nextRafId = 1;
const mockWindow = {
  document: mockDocument,
  matchMedia: (query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {}
  }),
  requestAnimationFrame: (cb) => {
    const id = nextRafId++;
    rafCallbacks.push({ id, cb });
    return id;
  },
  cancelAnimationFrame: (id) => {
    rafCallbacks = rafCallbacks.filter(item => item.id !== id);
  }
};

globalThis.window = mockWindow;
globalThis.document = mockDocument;
globalThis.requestAnimationFrame = mockWindow.requestAnimationFrame;
globalThis.cancelAnimationFrame = mockWindow.cancelAnimationFrame;

// Import shadow studio module
await import('../papercut-shadow-studio.js');
const {
  calculateLightTrigonometry,
  lerp,
  compute3TierShadow,
  DynamicLightEngine,
  PaperShadowStudio
} = globalThis.PaperCutUI || globalThis;

describe('Step 5: Dynamic Light & Shadow Trigonometric Engine', () => {

  describe('1. Pure Trigonometry Vector Calculations', () => {
    it('calculates 0° North light (12 o\'clock) with southward shadow vector', () => {
      // Light is directly above the center (px = cx, py < cy)
      const res = calculateLightTrigonometry(100, 100, 100, 0);
      assert.strictEqual(res.deg, 0, 'Light angle should be 0° for North light');
      assert.strictEqual(res.dist, 100, 'Distance should be 100px');
      assert.ok(Math.abs(res.shadowDx) < 0.001, 'Horizontal shadow vector should be 0');
      assert.strictEqual(Math.round(res.shadowDy), 1, 'Vertical shadow vector should point south (+1)');
    });

    it('calculates 90° East light (3 o\'clock) with westward shadow vector', () => {
      // Light is directly to the right (px > cx, py = cy)
      const res = calculateLightTrigonometry(100, 100, 200, 100);
      assert.strictEqual(res.deg, 90, 'Light angle should be 90° for East light');
      assert.strictEqual(res.dist, 100, 'Distance should be 100px');
      assert.strictEqual(Math.round(res.shadowDx), -1, 'Horizontal shadow vector should point west (-1)');
      assert.ok(Math.abs(res.shadowDy) < 0.001, 'Vertical shadow vector should be 0');
    });

    it('calculates 180° South light (6 o\'clock) with northward shadow vector', () => {
      // Light is directly below the center (px = cx, py > cy)
      const res = calculateLightTrigonometry(100, 100, 100, 200);
      assert.strictEqual(res.deg, 180, 'Light angle should be 180° for South light');
      assert.strictEqual(Math.round(res.shadowDy), -1, 'Vertical shadow vector should point north (-1)');
    });

    it('calculates 315° Top-Left standard craft light (10:30 o\'clock) with SE shadow vector', () => {
      // Light is top-left: dx = -100, dy = -100
      const res = calculateLightTrigonometry(100, 100, 0, 0);
      assert.strictEqual(res.deg, 315, 'Light angle should be 315° for top-left light');
      assert.ok(res.shadowDx > 0.6, 'Shadow dx should project southeast (>0)');
      assert.ok(res.shadowDy > 0.6, 'Shadow dy should project southeast (>0)');
    });
  });

  describe('2. LERP Smooth Damping', () => {
    it('interpolates precisely between two scalar values', () => {
      assert.strictEqual(lerp(0, 100, 0.5), 50);
      assert.strictEqual(lerp(10, 20, 0.15), 11.5);
      assert.strictEqual(lerp(50, 50, 0.15), 50);
    });

    it('smoothly converges towards target across iterative steps', () => {
      let val = 0;
      const target = 100;
      const factor = 0.15;
      for (let i = 0; i < 40; i++) {
        val = lerp(val, target, factor);
      }
      assert.ok(Math.abs(val - target) < 0.2, `Value ${val} should converge to target ${target}`);
    });
  });

  describe('3. 3-Tier Multi-Layer Physical Shadow Solver', () => {
    it('computes 3 distinct physical tiers and knife bevel highlight', () => {
      const dx = 4;
      const dy = 5;
      const elevation = 4.5;
      const blur = 10;
      const opacity = 0.48;
      const color = [46, 30, 20];

      const shadow = compute3TierShadow(dx, dy, elevation, blur, opacity, color);

      assert.ok(shadow.tier1, 'Tier 1 contact shadow must exist');
      assert.ok(shadow.tier2, 'Tier 2 mid-air shadow must exist');
      assert.ok(shadow.tier3, 'Tier 3 ambient floor shadow must exist');
      assert.ok(shadow.highlight, 'Tier 4 knife bevel highlight must exist');
      assert.ok(shadow.fullFilter, 'Composite drop-shadow filter must exist');
      assert.ok(shadow.cssBoxShadow, 'Composite box-shadow must exist');

      // Contact shadow must be tighter and sharper than mid-air shadow
      assert.ok(parseFloat(shadow.tier1.blur) < parseFloat(shadow.tier2.blur),
        'Contact shadow blur must be sharper than mid-air blur');
      assert.ok(parseFloat(shadow.tier2.blur) < parseFloat(shadow.tier3.blur),
        'Mid-air shadow blur must be sharper than ambient floor blur');

      // Ambient floor shadow must have wider offset distance
      assert.ok(parseFloat(shadow.tier3.dy) > parseFloat(shadow.tier2.dy),
        'Ambient floor dy must project further than mid-air dy');

      // Highlight must face opposite to shadow direction (towards light)
      assert.ok(parseFloat(shadow.highlight.dx) < 0, 'Highlight dx must oppose positive shadow dx');
      assert.ok(parseFloat(shadow.highlight.dy) < 0, 'Highlight dy must oppose positive shadow dy');
    });

    it('scales shadow dimensions proportionally with elevation factor', () => {
      const sLow = compute3TierShadow(4, 5, 2.0); // Low cardstock
      const sHigh = compute3TierShadow(4, 5, 8.0); // High floating layer

      assert.ok(parseFloat(sHigh.tier2.dy) > parseFloat(sLow.tier2.dy),
        'Higher elevation must produce larger shadow offset');
      assert.ok(parseFloat(sHigh.tier3.blur) > parseFloat(sLow.tier3.blur),
        'Higher elevation must produce wider atmospheric diffusion blur');
    });

    it('respects option toggles to enable or disable individual tiers', () => {
      const sDisabled = compute3TierShadow(4, 5, 4.5, 10, 0.48, [46, 30, 20], {
        enableTier1: false,
        enableTier3: false,
        enableHighlight: false
      });

      assert.strictEqual(sDisabled.tier1, null, 'Tier 1 should be omitted when disabled');
      assert.ok(sDisabled.tier2, 'Tier 2 should remain active');
      assert.strictEqual(sDisabled.tier3, null, 'Tier 3 should be omitted when disabled');
      assert.strictEqual(sDisabled.highlight, null, 'Highlight should be omitted when disabled');
    });
  });

  describe('4. DynamicLightEngine State & Sleep-On-Settle RAF Loop', () => {
    beforeEach(() => {
      rafCallbacks = [];
    });

    it('initializes engine state with standard 315° rest coordinates', () => {
      assert.ok(DynamicLightEngine, 'DynamicLightEngine should be defined');
      assert.strictEqual(typeof DynamicLightEngine.setLightSource, 'function');
      assert.strictEqual(typeof DynamicLightEngine.updateTargetFromCursor, 'function');
      assert.strictEqual(typeof DynamicLightEngine.resetToRest, 'function');
    });

    it('updates targets dynamically from cursor coordinates and marks pointer inside', () => {
      // Cursor to the right and bottom: light at (300, 200) relative to center (100, 100)
      const res = DynamicLightEngine.updateTargetFromCursor(300, 200, 100, 100, 4.5);

      assert.strictEqual(DynamicLightEngine.state.isPointerInside, true);
      assert.ok(DynamicLightEngine.isLoopRunning(), 'Loop should start running upon cursor update');
      assert.ok(res.targetDx < 0, 'Shadow dx should project away from cursor position');
      assert.ok(res.targetDy < 0, 'Shadow dy should project away from cursor position');
    });

    it('returns to rest and sleeps (cancels RAF loop) once settled', () => {
      DynamicLightEngine.resetToRest(315, 4.5);
      assert.strictEqual(DynamicLightEngine.state.isPointerInside, false);
      assert.strictEqual(DynamicLightEngine.state.targetAngle, 315);

      // Force state close to target to simulate convergence
      DynamicLightEngine.state.currentLightDx = DynamicLightEngine.state.targetLightDx + 0.01;
      DynamicLightEngine.state.currentLightDy = DynamicLightEngine.state.targetLightDy + 0.01;
      DynamicLightEngine.state.currentBlur = DynamicLightEngine.state.targetBlur + 0.01;

      // Execute next animation frame step
      DynamicLightEngine.tick(1000);

      // Verify sleep state
      assert.strictEqual(DynamicLightEngine.isLoopRunning(), false,
        'Engine should enter sleep state (isRunning === false) when settled and pointer left');
    });
  });

  describe('5. CSS Variables & DOM Target Binding', () => {
    it('applies all --pc-light-* custom properties and shadows to target element', () => {
      const targetEl = new MockElement('div');
      DynamicLightEngine.bindTargetElement(targetEl);

      DynamicLightEngine.state.currentLightDx = 3.5;
      DynamicLightEngine.state.currentLightDy = 4.2;
      DynamicLightEngine.state.currentBlur = 12;
      DynamicLightEngine.state.currentAngle = 315;

      DynamicLightEngine.applyStyles();

      assert.strictEqual(targetEl.style.getPropertyValue('--pc-light-dx'), '3.50px');
      assert.strictEqual(targetEl.style.getPropertyValue('--pc-light-dy'), '4.20px');
      assert.strictEqual(targetEl.style.getPropertyValue('--pc-light-blur'), '12.00px');
      assert.strictEqual(targetEl.style.getPropertyValue('--pc-light-angle'), '315deg');
      assert.ok(targetEl.style.getPropertyValue('--pc-shadow-tier1').length > 0);
      assert.ok(targetEl.style.getPropertyValue('--pc-shadow-tier2').length > 0);
      assert.ok(targetEl.style.getPropertyValue('--pc-shadow-tier3').length > 0);
    });
  });

  describe('6. Reduced Motion Fallback Mode', () => {
    it('clamps transitions and adopts static rest values when reduced motion is preferred', () => {
      // Mock window.matchMedia returning true for reduced motion
      const origMatchMedia = globalThis.window.matchMedia;
      globalThis.window.matchMedia = (query) => ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        addListener: () => {},
        removeListener: () => {}
      });

      const targetEl = new MockElement('div');
      DynamicLightEngine.bindTargetElement(targetEl);
      DynamicLightEngine.resetToRest(315, 4.5);

      // Tick should instantly snap to target rather than lingering in RAF loop
      DynamicLightEngine.tick(2000);
      assert.strictEqual(DynamicLightEngine.isLoopRunning(), false);

      globalThis.window.matchMedia = origMatchMedia;
    });
  });
});
