/**
 * tests/paper-flutter-scatter.test.mjs
 * Unit & Physics Tests for Kirigami Paper Flutter & Scatter Particles (Step 3)
 *
 * Validates:
 * - AC-1: 8~16 Kirigami confetti scraps with random aerodynamic lift/drag tumbling trajectory
 * - AC-2: Full DOM lifecycle synchronization and complete garbage collection / cleanup
 * - AC-3: Integration with exit animations (.pc-exit-scatter, .pc-exit-flutter)
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// --- Lightweight DOM Mock for Node.js Environment ---
class MockClassList {
  constructor() {
    this._classes = new Set();
  }
  add(...names) { names.forEach(n => this._classes.add(n)); }
  remove(...names) { names.forEach(n => this._classes.delete(n)); }
  contains(name) { return this._classes.has(name); }
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
    this._listeners = new Map();
    this.children = [];
    this.parentNode = null;
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
    if (child.parentNode) child.parentNode.removeChild(child);
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
  remove() {
    if (this.parentNode) this.parentNode.removeChild(this);
  }
  getBoundingClientRect() {
    return { left: 40, top: 40, right: 240, bottom: 180, width: 200, height: 140 };
  }
  querySelector(sel) {
    const all = this.querySelectorAll(sel);
    return all.length > 0 ? all[0] : null;
  }
  querySelectorAll(sel) {
    const res = [];
    function search(el) {
      for (const child of el.children) {
        if (sel.startsWith('.') && child.classList.contains(sel.slice(1))) res.push(child);
        search(child);
      }
    }
    search(this);
    return res;
  }
}

// Global DOM Mock Setup
const rootDir = process.cwd();
const docMock = {
  createElement(tag) { return new MockElement(tag); },
  querySelector(sel) { return rootMock.querySelector(sel); },
  querySelectorAll(sel) { return rootMock.querySelectorAll(sel); },
  body: null,
  addEventListener() {},
  removeEventListener() {}
};
const rootMock = new MockElement('body');
docMock.body = rootMock;

globalThis.document = docMock;
globalThis.window = {
  matchMedia: () => ({ matches: false }),
  addEventListener() {},
  removeEventListener() {}
};
globalThis.requestAnimationFrame = (cb) => {
  return setTimeout(() => cb(Date.now()), 16);
};
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);

// Import PaperCutUI
const imported = await import(pathToFileURL(join(rootDir, 'papercut-ui.js')).href);
const PaperCutUI = imported.default || imported.PaperCutUI || globalThis.PaperCutUI || imported;

describe('Paper Flutter & Scatter Engine (Step 3)', () => {

  describe('CSS Particles & Exit Keyframe Specifications', () => {
    const cssContent = readFileSync(join(rootDir, 'papercut-ui.css'), 'utf-8');
    const animCssContent = readFileSync(join(rootDir, 'papercut-animations.css'), 'utf-8');

    it('defines .pc-flutter-leaf and .pc-scatter-particle styles', () => {
      assert.ok(cssContent.includes('.pc-flutter-leaf'), 'papercut-ui.css must define .pc-flutter-leaf');
      assert.ok(cssContent.includes('.pc-scatter-particle'), 'papercut-ui.css must define .pc-scatter-particle');
      assert.ok(cssContent.includes('transform-style: preserve-3d'), 'must have 3D transform preserve');
      assert.ok(cssContent.includes('will-change: transform, opacity'), 'must optimize GPU will-change');
    });

    it('defines authentic paper color variations for confetti scraps', () => {
      ['cream', 'mint', 'peach', 'lavender', 'buttercup', 'sky', 'kraft'].forEach(col => {
        assert.ok(cssContent.includes(`data-color="${col}"`), `must support pastel color token ${col}`);
      });
    });

    it('defines exit animation classes .pc-exit-scatter and .pc-exit-flutter', () => {
      assert.ok(cssContent.includes('.pc-exit-scatter'), 'must define .pc-exit-scatter');
      assert.ok(cssContent.includes('.pc-exit-flutter'), 'must define .pc-exit-flutter');
      assert.ok(cssContent.includes('@keyframes pcExitScatterAnim'), 'must define scatter keyframes');
      assert.ok(cssContent.includes('@keyframes pcExitFlutterAnim'), 'must define flutter keyframes');
    });
  });

  describe('AC-1: Aerodynamic Particle Burst (8~16 Confetti Scraps)', () => {
    it('spawns between 8 and 16 paper leaf particles by default', async () => {
      const container = new MockElement('div');
      rootMock.appendChild(container);

      assert.equal(typeof PaperCutUI.spawnPaperFlutterBurst, 'function');

      const burstPromise = PaperCutUI.spawnPaperFlutterBurst(container, {
        duration: 80 // short duration for test
      });

      // Immediately after spawning, particles are created in container
      const leaves = container.querySelectorAll('.pc-flutter-leaf');
      assert.ok(leaves.length >= 8 && leaves.length <= 16, `Particle count must be 8~16, was ${leaves.length}`);

      // Check first leaf properties
      const firstLeaf = leaves[0];
      assert.ok(firstLeaf.hasAttribute('data-color'), 'must have pastel color attribute');
      assert.ok(firstLeaf.style.getPropertyValue('--pc-leaf-w'), 'must have dynamic leaf width');
      assert.ok(firstLeaf.style.getPropertyValue('--pc-leaf-h'), 'must have dynamic leaf height');

      await burstPromise;
    });

    it('clamps custom particle counts to [8, 16] range', async () => {
      const containerLow = new MockElement('div');
      rootMock.appendChild(containerLow);
      const lowPromise = PaperCutUI.spawnPaperFlutterBurst(containerLow, { count: 3, duration: 40 });
      const lowLeaves = containerLow.querySelectorAll('.pc-flutter-leaf');
      assert.equal(lowLeaves.length, 8, 'count < 8 should be clamped to 8');
      await lowPromise;

      const containerHigh = new MockElement('div');
      rootMock.appendChild(containerHigh);
      const highPromise = PaperCutUI.spawnPaperFlutterBurst(containerHigh, { count: 50, duration: 40 });
      const highLeaves = containerHigh.querySelectorAll('.pc-flutter-leaf');
      assert.equal(highLeaves.length, 16, 'count > 16 should be clamped to 16');
      await highPromise;
    });

    it('simulates 3D rotation and fluid trajectory', async () => {
      const container = new MockElement('div');
      rootMock.appendChild(container);

      const promise = PaperCutUI.spawnPaperFlutterBurst(container, { duration: 60 });
      const leaf = container.children[0];
      assert.ok(leaf);
      const transform = leaf.style.transform;
      assert.ok(transform.includes('translate3d('), 'must apply 3D translation');
      assert.ok(transform.includes('rotateX('), 'must apply rotateX tumbling');
      assert.ok(transform.includes('rotateY('), 'must apply rotateY tumbling');
      assert.ok(transform.includes('rotateZ('), 'must apply rotateZ tumbling');

      await promise;
    });
  });

  describe('AC-2: Full DOM Lifecycle Synchronization & Zero Memory Leak', () => {
    it('completely removes all particles from the DOM upon animation completion', async () => {
      const container = new MockElement('div');
      rootMock.appendChild(container);

      let completeCalled = false;
      await PaperCutUI.spawnPaperFlutterBurst(container, {
        duration: 60,
        onComplete: () => { completeCalled = true; }
      });

      assert.ok(completeCalled, 'onComplete callback must be fired');
      assert.equal(container.children.length, 0, 'all particle elements must be removed from DOM');
    });
  });

  describe('AC-3: Element Exit Transitions (Scatter & Flutter)', () => {
    it('applies exitWithScatter with animation class and burst', async () => {
      const parent = new MockElement('div');
      const targetCard = new MockElement('div');
      targetCard.className = 'pc-ui-card';
      parent.appendChild(targetCard);
      rootMock.appendChild(parent);

      let onDoneCalled = false;
      const promise = PaperCutUI.exitWithScatter(targetCard, {
        duration: 50,
        burstDuration: 60,
        container: parent,
        onComplete: () => { onDoneCalled = true; }
      });

      assert.ok(targetCard.classList.contains('pc-exit-scatter'), 'must apply .pc-exit-scatter class');
      await promise;

      assert.ok(onDoneCalled, 'onComplete must be called');
      assert.equal(targetCard.parentNode, null, 'element must be removed from parent DOM by default');
      assert.equal(parent.children.length, 0, 'burst particles and card are completely cleaned up');
    });

    it('applies exitWithFlutter with animation class and graceful exit', async () => {
      const parent = new MockElement('div');
      const targetToast = new MockElement('div');
      targetToast.className = 'pc-ui-toast';
      parent.appendChild(targetToast);
      rootMock.appendChild(parent);

      let onDoneCalled = false;
      const promise = PaperCutUI.exitWithFlutter(targetToast, {
        duration: 50,
        burstDuration: 60,
        container: parent,
        onComplete: () => { onDoneCalled = true; }
      });

      assert.ok(targetToast.classList.contains('pc-exit-flutter'), 'must apply .pc-exit-flutter class');
      await promise;

      assert.ok(onDoneCalled);
      assert.equal(targetToast.parentNode, null, 'target element must be cleanly removed');
    });
  });
});
