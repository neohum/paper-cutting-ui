/**
 * tests/animated-papercut-checkbox.test.mjs
 * Comprehensive Unit & Integration Test Suite for Animated Paper-Cutting Checkbox, RadioGroup & Switch
 *
 * Validates:
 * - Step 1: 4-Layer SVG Paper-Cutting Geometry, Blade Path & Scrap Flap (AC-1, AC-2, AC-3, AC-4)
 * - Step 2: Snip-Carve Motion Engine, PaperCutMotion.triggerCutCheck, Audio & Reduced Motion (AC-1, AC-2, AC-3, AC-4)
 * - Step 3: RadioGroup / Switch Extension, Showcase Integration & Korean Typography / Flaticon UIcons (AC-1, AC-2, AC-3, AC-4)
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();

// --- Lightweight DOM Mock for Node.js Environment ---
class MockClassList {
  constructor() {
    this._classes = new Set();
  }
  add(...names) { names.forEach(n => n && this._classes.add(n)); }
  remove(...names) { names.forEach(n => this._classes.delete(n)); }
  contains(name) { return this._classes.has(name); }
  toggle(name, force) {
    if (force === undefined) {
      if (this.contains(name)) { this.remove(name); return false; }
      this.add(name); return true;
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
    this.checked = false;
    this.disabled = false;
    this.type = '';
    this.name = '';
    this._innerHTML = '';
  }
  get className() { return this.classList.toString(); }
  set className(val) {
    this.classList = new MockClassList();
    if (val) val.split(/\s+/).forEach(c => c && this.classList.add(c));
  }
  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = String(val || '');
    // Create synthetic child elements for key SVG classes when innerHTML is assigned
    if (this._innerHTML.includes('pc-cut-svg')) {
      const svg = new MockElement('svg');
      svg.className = 'pc-cut-svg';
      const blade = new MockElement('path');
      blade.className = 'pc-cut-blade-path';
      blade.setAttribute('stroke-dasharray', '1');
      blade.setAttribute('stroke-dashoffset', this._innerHTML.includes('stroke-dashoffset="0"') ? '0' : '1');
      const flap = new MockElement('path');
      flap.className = 'pc-cut-scrap-flap';
      const recess = new MockElement('g');
      recess.className = 'pc-cut-recess';
      svg.appendChild(recess);
      svg.appendChild(blade);
      svg.appendChild(flap);
      this.appendChild(svg);
    }
  }
  setAttribute(k, v) {
    this._attrs.set(k, String(v));
    if (k === 'class') this.className = String(v);
  }
  getAttribute(k) { return this._attrs.get(k) ?? null; }
  hasAttribute(k) { return this._attrs.has(k); }
  removeAttribute(k) { this._attrs.delete(k); }
  appendChild(child) {
    if (child.parentNode) child.parentNode.removeChild(child);
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
  insertBefore(child, ref) {
    if (child.parentNode) child.parentNode.removeChild(child);
    child.parentNode = this;
    const idx = ref ? this.children.indexOf(ref) : -1;
    if (idx >= 0) this.children.splice(idx, 0, child);
    else this.children.push(child);
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
  addEventListener(type, fn) {
    if (!this._listeners.has(type)) this._listeners.set(type, []);
    this._listeners.get(type).push(fn);
  }
  removeEventListener(type, fn) {
    if (!this._listeners.has(type)) return;
    this._listeners.set(type, this._listeners.get(type).filter(f => f !== fn));
  }
  dispatchEvent(evt) {
    const arr = this._listeners.get(evt.type) || [];
    arr.forEach(fn => fn(evt));
    return true;
  }
  getBoundingClientRect() {
    return { left: 10, top: 10, right: 54, bottom: 54, width: 44, height: 44 };
  }
  querySelector(sel) {
    const all = this.querySelectorAll(sel);
    return all.length > 0 ? all[0] : null;
  }
  querySelectorAll(sel) {
    const res = [];
    const selectors = sel.split(',').map(s => s.trim()).filter(Boolean);
    function matchesSingle(el, s) {
      if (s === 'input[type="checkbox"]') return el.tagName === 'INPUT' && el.type === 'checkbox';
      if (s === 'input[type="radio"]') return el.tagName === 'INPUT' && el.type === 'radio';
      if (s.startsWith('.')) {
        const cls = s.replace(/\[.*\]/, '').slice(1);
        if (cls && !el.classList.contains(cls)) return false;
        if (s.includes('[data-pc-cut="animated"]')) return el.getAttribute('data-pc-cut') === 'animated';
        return true;
      }
      if (s.startsWith('[data-pc-cut="animated"]')) return el.getAttribute('data-pc-cut') === 'animated';
      return el.tagName.toLowerCase() === s.toLowerCase();
    }
    function walk(node) {
      for (const child of node.children) {
        if (selectors.some(s => matchesSingle(child, s))) res.push(child);
        walk(child);
      }
    }
    walk(this);
    return res;
  }
}

let reducedMotionFlag = false;
const rootMock = new MockElement('body');
const docMock = {
  createElement(tag) { return new MockElement(tag); },
  createElementNS(_ns, tag) { return new MockElement(tag); },
  querySelector(sel) { return rootMock.querySelector(sel); },
  querySelectorAll(sel) { return rootMock.querySelectorAll(sel); },
  getElementById() { return null; },
  body: rootMock,
  head: new MockElement('head'),
  documentElement: new MockElement('html'),
  addEventListener() {},
  removeEventListener() {}
};

globalThis.document = docMock;
globalThis.window = {
  document: docMock,
  matchMedia: (q) => ({
    matches: q.includes('prefers-reduced-motion') ? reducedMotionFlag : false
  }),
  addEventListener() {},
  removeEventListener() {}
};
globalThis.CustomEvent = class CustomEvent {
  constructor(type, opts = {}) {
    this.type = type;
    this.detail = opts.detail || {};
    this.bubbles = !!opts.bubbles;
  }
};
globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 8);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);

// Load modules in order
await import(pathToFileURL(join(rootDir, 'papercut-paper-layer.js')).href);
await import(pathToFileURL(join(rootDir, 'papercut-animations.js')).href);
const uiMod = await import(pathToFileURL(join(rootDir, 'papercut-ui.js')).href);
const PaperCutUI = uiMod.default || uiMod.PaperCutUI || globalThis.PaperCutUI;
const PaperCutMotion = globalThis.PaperCutMotion;

describe('Animated Paper-Cutting Checkbox, RadioGroup & Switch Suite', () => {

  beforeEach(() => {
    reducedMotionFlag = false;
    rootMock.children = [];
  });

  // =========================================================================
  // STEP 1: 4-Layer SVG Paper-Cutting Geometry & Blade Path
  // =========================================================================
  describe('Step 1: 4-Layer SVG Paper-Cutting Geometry & Blade Path', () => {
    it('AC-1: cutCheckMarkup generates 4-layer SVG with shared filter defs (#pc-paper-sh-plate, #pc-paper-sh-inset, #pc-paper-sh-lift)', () => {
      assert.ok(PaperCutUI.paper && typeof PaperCutUI.paper.cutCheckMarkup === 'function', 'PaperCutUI.paper.cutCheckMarkup must be exported');
      const markup = PaperCutUI.paper.cutCheckMarkup('mint', true);
      assert.ok(markup.includes('<svg'), 'must return SVG markup');
      assert.ok(markup.includes('url(#pc-paper-sh-plate)'), 'must reference #pc-paper-sh-plate');
      assert.ok(markup.includes('url(#pc-paper-sh-inset)'), 'must reference #pc-paper-sh-inset');
      assert.ok(markup.includes('url(#pc-paper-sh-lift)'), 'must reference #pc-paper-sh-lift');
      assert.ok(markup.includes('<mask') || markup.includes('<clipPath'), 'must include SVG <mask> or <clipPath> for cutout geometry');
      assert.ok(markup.includes('pc-cut-blade-path'), 'must include .pc-cut-blade-path');
      assert.ok(markup.includes('pc-cut-scrap-flap'), 'must include .pc-cut-scrap-flap');
    });

    it('AC-2: .pc-cut-blade-path uses pathLength="1" and stroke-dashoffset synced with checked/unchecked state', () => {
      const uncheckedMarkup = PaperCutUI.paper.cutCheckMarkup('mint', false);
      const checkedMarkup = PaperCutUI.paper.cutCheckMarkup('mint', true);
      assert.ok(uncheckedMarkup.includes('pathLength="1"'), 'blade path must declare pathLength="1"');
      assert.ok(uncheckedMarkup.includes('stroke-dashoffset="1"'), 'unchecked state must have stroke-dashoffset="1"');
      assert.ok(checkedMarkup.includes('stroke-dashoffset="0"'), 'checked state must have stroke-dashoffset="0"');

      const cssContent = readFileSync(join(rootDir, 'papercut-ui.css'), 'utf-8');
      assert.ok(cssContent.includes('--pc-cut-progress'), 'papercut-ui.css must bind --pc-cut-progress');
      assert.ok(cssContent.includes('.pc-cut-blade-path'), 'papercut-ui.css must style .pc-cut-blade-path');
    });

    it('AC-3: .pc-cut-scrap-flap applies 3D lift transform (rotateX / translateZ) and #FFFFFF rim highlight', () => {
      const animCss = readFileSync(join(rootDir, 'papercut-animations.css'), 'utf-8');
      const uiCss = readFileSync(join(rootDir, 'papercut-ui.css'), 'utf-8');
      const combinedCss = animCss + '\n' + uiCss;
      assert.ok(combinedCss.includes('.pc-cut-scrap-flap'), 'CSS must style .pc-cut-scrap-flap');
      assert.ok(combinedCss.includes('rotateX(') && combinedCss.includes('translateZ('), 'scrap flap must use 3D rotateX and translateZ lift');

      const markup = PaperCutUI.paper.cutCheckMarkup('peach', true);
      assert.ok(markup.includes('stroke="#FFFFFF"') && markup.includes('stroke-width="0.88"'), 'scrap flap must have 0.88px #FFFFFF rim highlight');
    });

    it('AC-4: Keyboard Space/Enter and click toggle aria-checked, .is-checked, and native input.checked with 44x44px touch target', () => {
      const el = new MockElement('label');
      el.className = 'pc-checkbox-cut';
      el.setAttribute('data-pc-cut', 'animated');
      const input = new MockElement('input');
      input.type = 'checkbox';
      input.checked = false;
      el.appendChild(input);
      rootMock.appendChild(el);

      PaperCutUI.Checkbox.hydrateCut(el);
      assert.equal(el.getAttribute('role'), 'checkbox');
      assert.equal(el.getAttribute('aria-checked'), 'false');

      // Toggle via Space key
      let prevented = false;
      el.dispatchEvent({
        type: 'keydown',
        key: ' ',
        preventDefault() { prevented = true; }
      });
      assert.equal(prevented, true, 'Space keydown must call preventDefault()');
      assert.equal(el.classList.contains('is-checked'), true, 'must add .is-checked class');
      assert.equal(el.getAttribute('aria-checked'), 'true', 'must set aria-checked="true"');
      assert.equal(input.checked, true, 'must sync native input.checked = true');

      // Toggle via Enter key
      el.dispatchEvent({
        type: 'keydown',
        key: 'Enter',
        preventDefault() {}
      });
      assert.equal(el.classList.contains('is-checked'), false, 'second toggle must remove .is-checked');
      assert.equal(el.getAttribute('aria-checked'), 'false', 'second toggle must set aria-checked="false"');
      assert.equal(input.checked, false, 'second toggle must sync native input.checked = false');

      const papercutCss = readFileSync(join(rootDir, 'papercut.css'), 'utf-8');
      assert.ok(papercutCss.includes('min-width: 44px') && papercutCss.includes('min-height: 44px'), 'must enforce 44x44px minimum touch target');
      assert.ok(papercutCss.includes(':focus-visible'), 'must include :focus-visible outline ring');
    });
  });

  // =========================================================================
  // STEP 2: Snip-Carve Motion Engine & PaperCutMotion Integration
  // =========================================================================
  describe('Step 2: Snip-Carve Motion Engine & PaperCutMotion Integration', () => {
    it('AC-1 & AC-2: PaperCutMotion.triggerCutCheck animates --pc-cut-progress and toggles .pc-anim-cut-carve', async () => {
      assert.ok(PaperCutMotion && typeof PaperCutMotion.triggerCutCheck === 'function', 'PaperCutMotion.triggerCutCheck must be defined');

      const el = new MockElement('label');
      el.className = 'pc-checkbox-cut';
      PaperCutUI.Checkbox.hydrateCut(el);

      let completedState = null;
      const ctrl = PaperCutMotion.triggerCutCheck(el, {
        checked: true,
        duration: 40,
        onComplete(chk) { completedState = chk; }
      });
      assert.ok(ctrl && typeof ctrl.cancel === 'function', 'must return controller with cancel()');

      await ctrl;
      assert.equal(el.style.getPropertyValue('--pc-cut-progress'), '1', 'checked animation must settle at --pc-cut-progress = 1');
      assert.equal(completedState, true, 'onComplete must be called with checked=true');
    });

    it('AC-3: Synchronizes Web Audio snip sound cleanly without errors when AudioContext is unavailable', () => {
      const animJs = readFileSync(join(rootDir, 'papercut-animations.js'), 'utf-8');
      assert.ok(animJs.includes("playPaperSound('snip')") || animJs.includes('playPaperSound("snip")'), 'triggerCutCheck must trigger snip sound effect');

      const el = new MockElement('label');
      el.className = 'pc-checkbox-cut';
      assert.doesNotThrow(() => {
        PaperCutMotion.triggerCutCheck(el, { checked: true, duration: 20 });
      }, 'must not throw when Web Audio API is absent in headless Node environment');
    });

    it('AC-4: Respects prefers-reduced-motion: reduce by completing state transition in 0ms without frame loop', () => {
      reducedMotionFlag = true;
      const el = new MockElement('label');
      el.className = 'pc-checkbox-cut';
      PaperCutUI.Checkbox.hydrateCut(el);

      let doneSynchronously = false;
      PaperCutMotion.triggerCutCheck(el, {
        checked: true,
        onComplete() { doneSynchronously = true; }
      });

      assert.equal(doneSynchronously, true, 'under prefers-reduced-motion: reduce, onComplete must fire immediately');
      assert.equal(el.style.getPropertyValue('--pc-cut-progress'), '1', 'must immediately set --pc-cut-progress to 1');
      assert.equal(el.classList.contains('pc-anim-cut-carve'), false, 'must not leave active animation class under reduced motion');

      const animCss = readFileSync(join(rootDir, 'papercut-animations.css'), 'utf-8');
      assert.ok(animCss.includes('prefers-reduced-motion: reduce'), 'papercut-animations.css must include @media (prefers-reduced-motion: reduce)');
    });
  });

  // =========================================================================
  // STEP 3: RadioGroup / Switch Extension & Showcase Verification
  // =========================================================================
  describe('Step 3: RadioGroup / Switch Extension & Showcase Verification', () => {
    it('AC-1: RadioGroup (.pc-radio-cut) and Switch (.pc-switch-cut) support 4-layer SVG markup and interactive toggle', () => {
      assert.equal(typeof PaperCutUI.paper.cutRadioMarkup, 'function', 'cutRadioMarkup must be exported');
      assert.equal(typeof PaperCutUI.paper.cutSwitchMarkup, 'function', 'cutSwitchMarkup must be exported');

      const radioWrap = new MockElement('div');
      const r1 = new MockElement('label');
      r1.className = 'pc-radio-cut is-checked';
      r1.setAttribute('data-pc-cut', 'animated');
      const r1In = new MockElement('input');
      r1In.type = 'radio';
      r1In.name = 'demo-grp';
      r1In.checked = true;
      r1.appendChild(r1In);

      const r2 = new MockElement('label');
      r2.className = 'pc-radio-cut';
      r2.setAttribute('data-pc-cut', 'animated');
      const r2In = new MockElement('input');
      r2In.type = 'radio';
      r2In.name = 'demo-grp';
      r2In.checked = false;
      r2.appendChild(r2In);

      radioWrap.appendChild(r1);
      radioWrap.appendChild(r2);
      rootMock.appendChild(radioWrap);

      PaperCutUI.RadioGroup.hydrateCut(radioWrap);
      PaperCutUI.RadioGroup.selectCut(r2, radioWrap);
      assert.equal(r2.classList.contains('is-checked'), true, 'selected radio must become .is-checked');
      assert.equal(r1.classList.contains('is-checked'), false, 'sibling radio in same group must uncheck');

      const sw = new MockElement('label');
      sw.className = 'pc-switch-cut';
      sw.setAttribute('data-pc-cut', 'animated');
      rootMock.appendChild(sw);
      PaperCutUI.Switch.hydrateCut(sw);
      PaperCutUI.Switch.toggleCut(sw);
      assert.equal(sw.classList.contains('is-checked'), true, 'switch toggleCut must activate .is-checked');
      assert.equal(sw.getAttribute('aria-checked'), 'true', 'switch toggleCut must update aria-checked="true"');
    });

    it('AC-2 & AC-3: index.html includes Animated Paper-Cutting Checkbox/Radio/Switch showcase with Korean copy and Flaticon UIcons', () => {
      const html = readFileSync(join(rootDir, 'index.html'), 'utf-8');
      assert.ok(html.includes('pc-checkbox-cut'), 'index.html must include .pc-checkbox-cut showcase');
      assert.ok(html.includes('pc-radio-cut'), 'index.html must include .pc-radio-cut showcase');
      assert.ok(html.includes('pc-switch-cut'), 'index.html must include .pc-switch-cut showcase');
      assert.ok(html.includes('data-pc-cut="animated"'), 'index.html must include data-pc-cut="animated" attributes');
      assert.ok(html.includes('fi fi-rr-scissors'), 'showcase must use Flaticon UIcons (fi fi-rr-scissors)');

      const papercutCss = readFileSync(join(rootDir, 'papercut.css'), 'utf-8');
      assert.ok(papercutCss.includes('word-break: keep-all'), 'must enforce word-break: keep-all for Korean labels');
    });
  });
});
