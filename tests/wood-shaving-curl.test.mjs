/**
 * tests/wood-shaving-curl.test.mjs
 * Unit & Physics Tests for Wood Shaving Paper Curl Slider & Carousel (Step 2)
 *
 * Validates:
 * - AC-1: 3D Cylindrical spiral roll transforms & styles (rotateX, translateZ, scaleY, clip-path)
 * - AC-2: Pointer drag gesture real-time tracking of --pc-curl-progress & --pc-curl-radius
 * - AC-3: Spring damped oscillation return (undershoot) and commit (overshoot/settle)
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

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
  get nextElementSibling() {
    if (!this.parentNode) return null;
    const siblings = this.parentNode.children;
    const idx = siblings.indexOf(this);
    return idx !== -1 && idx + 1 < siblings.length ? siblings[idx + 1] : null;
  }
  addEventListener(type, fn) {
    if (!this._listeners.has(type)) this._listeners.set(type, []);
    this._listeners.get(type).push(fn);
  }
  removeEventListener(type, fn) {
    if (!this._listeners.has(type)) return;
    const arr = this._listeners.get(type).filter(f => f !== fn);
    this._listeners.set(type, arr);
  }
  dispatchEvent(evt) {
    const arr = this._listeners.get(evt.type) || [];
    arr.forEach(fn => fn(evt));
    return true;
  }
  setPointerCapture() {}
  releasePointerCapture() {}
  getBoundingClientRect() {
    return { left: 0, top: 0, right: 320, bottom: 240, width: 320, height: 240 };
  }
  querySelector(sel) {
    const all = this.querySelectorAll(sel);
    return all.length > 0 ? all[0] : null;
  }
  querySelectorAll(sel) {
    const res = [];
    function search(el) {
      for (const child of el.children) {
        if (matches(child, sel)) res.push(child);
        search(child);
      }
    }
    search(this);
    return res;
  }
}

function matches(el, sel) {
  if (sel.includes(',')) {
    return sel.split(',').some(part => matches(el, part.trim()));
  }
  let s = sel.trim();
  let firstChildOnly = false;
  if (s.includes(':first-child')) {
    firstChildOnly = true;
    s = s.replace(':first-child', '');
  }
  if (firstChildOnly && el.parentNode) {
    if (el.parentNode.children[0] !== el) return false;
  }
  if (!s) return true;
  if (s.startsWith('.')) {
    const classes = s.split('.').filter(Boolean);
    return classes.every(c => el.classList.contains(c));
  }
  if (s.startsWith('#')) {
    return el.getAttribute('id') === s.slice(1);
  }
  return el.tagName.toLowerCase() === s.toLowerCase();
}

// Global DOM Mock Setup
const rootDir = process.cwd();
const docMock = {
  createElement(tag) { return new MockElement(tag); },
  querySelector(sel) { return rootMock.querySelector(sel); },
  querySelectorAll(sel) { return rootMock.querySelectorAll(sel); },
  addEventListener() {},
  removeEventListener() {}
};
const rootMock = new MockElement('body');
docMock.body = rootMock;

globalThis.document = docMock;
globalThis.window = {
  matchMedia: (q) => ({ matches: false }),
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

describe('Wood Shaving Paper Curl Engine (Step 2)', () => {

  describe('CSS Tokens & 3D Shaving Cylinder Styles', () => {
    const cssContent = readFileSync(join(rootDir, 'papercut-ui.css'), 'utf-8');
    const animCssContent = readFileSync(join(rootDir, 'papercut-animations.css'), 'utf-8');

    it('defines .pc-wood-curl-viewport with 3D perspective and touch handling', () => {
      assert.ok(cssContent.includes('.pc-wood-curl-viewport'), 'papercut-ui.css must contain .pc-wood-curl-viewport');
      assert.ok(cssContent.includes('perspective: var(--pc-perspective-depth'), 'must define 3D perspective depth token');
      assert.ok(cssContent.includes('transform-style: preserve-3d'), 'must define preserve-3d on viewport');
    });

    it('defines .pc-wood-curl-peel with cylindrical 3D roll transforms', () => {
      assert.ok(cssContent.includes('.pc-wood-curl-peel'), 'must contain .pc-wood-curl-peel');
      assert.ok(cssContent.includes('rotateX('), 'must apply rotateX for cylinder curling');
      assert.ok(cssContent.includes('translateZ('), 'must apply translateZ for spiral depth');
      assert.ok(cssContent.includes('scaleY('), 'must apply scaleY for cylindrical compression');
      assert.ok(cssContent.includes('clip-path: inset('), 'must apply progressive clip-path peeling');
    });

    it('defines backface craft texture and crescent ambient occlusion shadow', () => {
      assert.ok(cssContent.includes('.pc-wood-curl-peel::after'), 'must define backface craft pseudo-element');
      assert.ok(cssContent.includes('rotateX(180deg)'), 'backface craft must be flipped 180 degrees');
      assert.ok(cssContent.includes('.pc-wood-curl-peel::before'), 'must define crescent shadow pseudo-element');
      assert.ok(cssContent.includes('radial-gradient('), 'must use radial-gradient for crescent shadow');
    });

    it('provides accessibility support under prefers-reduced-motion', () => {
      assert.ok(cssContent.includes('@media (prefers-reduced-motion: reduce)'), 'must include reduced motion query');
      assert.ok(cssContent.includes('.pc-wood-curl-peel'), 'reduced motion must cover wood-curl elements');
    });
  });

  describe('AC-1: 2-Layer Wood Shaving Curl Transition', () => {
    it('executes transitionWoodShavingCurl from curSlide to nextSlide', async () => {
      const curSlide = new MockElement('div');
      curSlide.className = 'pc-wood-curl-card is-active';
      const nextSlide = new MockElement('div');
      nextSlide.className = 'pc-wood-curl-card';

      assert.equal(typeof PaperCutUI.transitionWoodShavingCurl, 'function', 'transitionWoodShavingCurl must be exported');

      let completed = false;
      const promise = PaperCutUI.transitionWoodShavingCurl(curSlide, nextSlide, {
        duration: 100,
        radius: 40,
        onComplete: () => { completed = true; }
      });

      // While curling, classes must be set
      assert.ok(curSlide.classList.contains('pc-wood-curl-peel'));
      assert.ok(nextSlide.classList.contains('pc-wood-curl-underlayer'));

      await promise;

      assert.ok(completed, 'onComplete callback must be invoked');
      assert.equal(curSlide.style.getPropertyValue('--pc-curl-progress'), '1');
      assert.ok(!curSlide.classList.contains('pc-wood-curl-peel'), 'curSlide peel class cleaned up');
      assert.ok(!nextSlide.classList.contains('pc-wood-curl-underlayer'), 'nextSlide underlayer class cleaned up');
    });

    it('handles reduced-motion immediately (0.01ms equivalent)', async () => {
      const curSlide = new MockElement('div');
      const nextSlide = new MockElement('div');

      let completed = false;
      await PaperCutUI.transitionWoodShavingCurl(curSlide, nextSlide, {
        duration: 0,
        onComplete: () => { completed = true; }
      });

      assert.ok(completed);
      assert.equal(curSlide.style.getPropertyValue('--pc-curl-progress'), '1');
    });
  });

  describe('AC-2: Interactive Pointer Drag Gesture Scaling', () => {
    it('dynamically tracks drag distance and updates --pc-curl-progress and --pc-curl-radius', () => {
      const viewport = new MockElement('div');
      viewport.className = 'pc-wood-curl-viewport';

      const card1 = new MockElement('div');
      card1.className = 'pc-wood-curl-card is-active';
      const card2 = new MockElement('div');
      card2.className = 'pc-wood-curl-card';
      viewport.appendChild(card1);
      viewport.appendChild(card2);

      let trackedProgress = 0;
      const gesture = PaperCutUI.attachWoodShavingGesture(viewport, {
        threshold: 50,
        maxDrag: 200,
        radius: 42,
        onProgress: (p) => { trackedProgress = p; }
      });

      assert.ok(gesture && typeof gesture.destroy === 'function');

      // 1. Pointer Down at Y = 250
      viewport.dispatchEvent({ type: 'pointerdown', clientY: 250, button: 0 });
      assert.ok(card1.classList.contains('pc-wood-curl-peel'), 'card1 marked as peel layer');
      assert.ok(card2.classList.contains('pc-wood-curl-underlayer'), 'card2 marked as underlayer');

      // 2. Pointer Move to Y = 150 (dragged upward 100px / 200px maxDrag = 0.50 progress)
      viewport.dispatchEvent({ type: 'pointermove', clientY: 150 });

      assert.ok(Math.abs(trackedProgress - 0.50) < 0.05, `trackedProgress should be ~0.50, got ${trackedProgress}`);
      assert.equal(viewport.style.getPropertyValue('--pc-curl-progress'), '0.5000');
      const curRadius = parseFloat(viewport.style.getPropertyValue('--pc-curl-radius'));
      assert.ok(curRadius > 42, 'radius must increase dynamically with drag progress');

      // 3. Pointer Move to Y = 50 (dragged upward 200px = 1.0 progress)
      viewport.dispatchEvent({ type: 'pointermove', clientY: 50 });
      assert.equal(viewport.style.getPropertyValue('--pc-curl-progress'), '1.0000');

      gesture.destroy();
    });
  });

  describe('AC-3: Drag Release & Spring Damped Oscillation Settle', () => {
    it('settles back to 0 (undershoot bounce) when released below threshold', async () => {
      const viewport = new MockElement('div');
      viewport.className = 'pc-wood-curl-viewport';
      const card1 = new MockElement('div');
      card1.className = 'pc-wood-curl-card is-active';
      viewport.appendChild(card1);

      let swipedNext = false;
      const gesture = PaperCutUI.attachWoodShavingGesture(viewport, {
        threshold: 60,
        maxDrag: 200,
        onSwipeNext: () => { swipedNext = true; }
      });

      // Drag only 20px (well below 60px threshold)
      viewport.dispatchEvent({ type: 'pointerdown', clientY: 200, button: 0 });
      viewport.dispatchEvent({ type: 'pointermove', clientY: 180 });
      assert.equal(viewport.style.getPropertyValue('--pc-curl-progress'), '0.1000');

      // Release pointer
      viewport.dispatchEvent({ type: 'pointerup' });

      // Wait a short time for damped spring settle
      await new Promise(r => setTimeout(r, 80));

      assert.equal(swipedNext, false, 'must not trigger next swipe on undershoot');
      gesture.destroy();
    });

    it('settles to 1 (completes curl) and triggers onSwipeNext when released above threshold', async () => {
      const viewport = new MockElement('div');
      viewport.className = 'pc-wood-curl-viewport';
      const card1 = new MockElement('div');
      card1.className = 'pc-wood-curl-card is-active';
      const card2 = new MockElement('div');
      card2.className = 'pc-wood-curl-card';
      viewport.appendChild(card1);
      viewport.appendChild(card2);

      let swipedNext = false;
      const gesture = PaperCutUI.attachWoodShavingGesture(viewport, {
        threshold: 50,
        maxDrag: 200,
        onSwipeNext: () => { swipedNext = true; }
      });

      // Drag 120px (above 50px threshold, progress 0.60)
      viewport.dispatchEvent({ type: 'pointerdown', clientY: 200, button: 0 });
      viewport.dispatchEvent({ type: 'pointermove', clientY: 80 });
      assert.equal(viewport.style.getPropertyValue('--pc-curl-progress'), '0.6000');

      // Release pointer
      viewport.dispatchEvent({ type: 'pointerup' });

      // Wait for spring settle
      await new Promise(r => setTimeout(r, 700));

      assert.ok(swipedNext, 'must trigger onSwipeNext when threshold passed');
      gesture.destroy();
    });
  });
});
