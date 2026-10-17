#!/usr/bin/env node
/**
 * tests/paper-art-components.test.mjs
 * Unit & Integration Tests for Declarative Web Components (Step 2):
 * - <paper-art-scene>: 3D viewport, perspective, light orchestration, exploded view, pointer tracking
 * - <paper-cut-layer>: 2.5D elevation, micro-bevel normal rim highlight, PCSS shadow solver
 * - <paper-light>: declarative light positioning & attribute responsiveness
 *
 * Validates:
 * - AC-1: <paper-art-scene> definition, perspective, light management, pointer tracking, responsive viewport
 * - AC-2: <paper-cut-layer> definition, depth, thickness, cut-angle, material, bevel reactivity
 * - AC-3: <paper-light> definition, type, x, y, z, intensity, color, cast-shadow control
 * - AC-4: Custom Elements lifecycle (connectedCallback, attributeChangedCallback, disconnectedCallback) & GC
 * - AC-5: Declarative inline markup assembly without manual JS scripting
 * - AC-6: Real-time CSS Custom Property bindings (--papyrus-depth, --papyrus-light-*, --papyrus-bevel-rim)
 * - AC-7: Shadow DOM / Light DOM support & ARIA landmarks (role, aria-label)
 * - AC-8: 100% test pass rate for lifecycle, mutations, and math calculations
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

// --- Lightweight Web Standards DOM & Custom Elements Mock for Node.js ---

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
  setProperty(name, val) {
    const sVal = String(val);
    this._props.set(name, sVal);
    this[name] = sVal;
  }
  getPropertyValue(name) {
    return this._props.get(name) || '';
  }
  removeProperty(name) {
    this._props.delete(name);
    delete this[name];
  }
}

class MockCustomEvent {
  constructor(type, eventInitDict = {}) {
    this.type = type;
    this.detail = eventInitDict.detail || null;
    this.bubbles = Boolean(eventInitDict.bubbles);
    this.cancelable = Boolean(eventInitDict.cancelable);
  }
}

class MockShadowRoot {
  constructor(host) {
    this.host = host;
    this.innerHTML = '';
    this.children = [];
  }
}

class MockElement {
  constructor(tagName) {
    if (!tagName) {
      if (this.constructor.name === 'PaperArtScene') tagName = 'PAPER-ART-SCENE';
      else if (this.constructor.name === 'PaperCutLayer') tagName = 'PAPER-CUT-LAYER';
      else if (this.constructor.name === 'PaperLight') tagName = 'PAPER-LIGHT';
      else tagName = 'div';
    }
    this.tagName = tagName.toUpperCase();
    this.classList = new MockClassList();
    this.style = new MockStyle();
    this._attrs = new Map();
    this.children = [];
    this.parentNode = null;
    this._listeners = new Map();
    this.shadowRoot = null;
  }

  get className() { return this.classList.toString(); }
  set className(val) {
    this.classList = new MockClassList();
    if (val) val.split(/\s+/).forEach(c => c && this.classList.add(c));
  }

  setAttribute(k, v) {
    const sKey = String(k).toLowerCase();
    const oldVal = this._attrs.get(sKey) || null;
    const newVal = String(v);
    this._attrs.set(sKey, newVal);

    const ctor = this.constructor;
    if (ctor && Array.isArray(ctor.observedAttributes) && ctor.observedAttributes.includes(sKey)) {
      if (typeof this.attributeChangedCallback === 'function' && oldVal !== newVal) {
        this.attributeChangedCallback(sKey, oldVal, newVal);
      }
    }
  }

  getAttribute(k) {
    const sKey = String(k).toLowerCase();
    return this._attrs.has(sKey) ? this._attrs.get(sKey) : null;
  }

  hasAttribute(k) {
    return this._attrs.has(String(k).toLowerCase());
  }

  removeAttribute(k) {
    const sKey = String(k).toLowerCase();
    const oldVal = this._attrs.get(sKey) || null;
    this._attrs.delete(sKey);
    const ctor = this.constructor;
    if (ctor && Array.isArray(ctor.observedAttributes) && ctor.observedAttributes.includes(sKey)) {
      if (typeof this.attributeChangedCallback === 'function' && oldVal !== null) {
        this.attributeChangedCallback(sKey, oldVal, null);
      }
    }
  }

  appendChild(child) {
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    this.children.push(child);
    if (typeof child.connectedCallback === 'function') {
      child.connectedCallback();
    }
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
      if (typeof child.disconnectedCallback === 'function') {
        child.disconnectedCallback();
      }
    }
    return child;
  }

  closest(selector) {
    const targetTag = selector.toUpperCase();
    let curr = this.parentNode;
    while (curr) {
      if (curr.tagName === targetTag) return curr;
      curr = curr.parentNode;
    }
    return null;
  }

  querySelector(sel) {
    const s = sel.toLowerCase();
    for (const child of this.children) {
      if (child.tagName.toLowerCase() === s) return child;
      const found = child.querySelector(sel);
      if (found) return found;
    }
    return null;
  }

  querySelectorAll(sel) {
    const s = sel.toLowerCase();
    const results = [];
    for (const child of this.children) {
      if (child.tagName.toLowerCase() === s) results.push(child);
      results.push(...child.querySelectorAll(sel));
    }
    return results;
  }

  attachShadow(options) {
    this.shadowRoot = new MockShadowRoot(this);
    return this.shadowRoot;
  }

  addEventListener(type, handler, options) {
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    this._listeners.get(type).add(handler);
  }

  removeEventListener(type, handler) {
    if (this._listeners.has(type)) {
      this._listeners.get(type).delete(handler);
    }
  }

  dispatchEvent(event) {
    if (this._listeners.has(event.type)) {
      for (const fn of this._listeners.get(event.type)) {
        fn.call(this, event);
      }
    }
    if (event.bubbles && this.parentNode && typeof this.parentNode.dispatchEvent === 'function') {
      this.parentNode.dispatchEvent(event);
    }
    return true;
  }

  getBoundingClientRect() {
    return { left: 0, top: 0, width: 800, height: 600, right: 800, bottom: 600 };
  }
}

class MockCustomElementsRegistry {
  constructor() {
    this._registry = new Map();
  }
  define(name, ctor) {
    const lower = name.toLowerCase();
    if (this._registry.has(lower)) {
      throw new Error(`CustomElementRegistry: '${lower}' has already been defined`);
    }
    this._registry.set(lower, ctor);
  }
  get(name) {
    return this._registry.get(name.toLowerCase());
  }
}

let rafCallbacks = [];
let nextRafId = 1;

const mockRegistry = new MockCustomElementsRegistry();
const mockDocument = {
  createElement: (tag) => {
    const ctor = mockRegistry.get(tag);
    if (ctor) {
      return new ctor();
    }
    return new MockElement(tag);
  },
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
  body: new MockElement('body')
};

const mockWindow = {
  document: mockDocument,
  customElements: mockRegistry,
  HTMLElement: MockElement,
  CustomEvent: MockCustomEvent,
  requestAnimationFrame: (cb) => {
    const id = nextRafId++;
    rafCallbacks.push({ id, cb });
    return id;
  },
  cancelAnimationFrame: (id) => {
    rafCallbacks = rafCallbacks.filter(item => item.id !== id);
  },
  matchMedia: (query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {}
  }),
  ResizeObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  MutationObserver: class {
    observe() {}
    disconnect() {}
  }
};

// Mount mocks to global scope before importing component module
globalThis.window = mockWindow;
globalThis.document = mockDocument;
globalThis.HTMLElement = MockElement;
globalThis.CustomEvent = MockCustomEvent;
globalThis.customElements = mockRegistry;
globalThis.requestAnimationFrame = mockWindow.requestAnimationFrame;
globalThis.cancelAnimationFrame = mockWindow.cancelAnimationFrame;
globalThis.ResizeObserver = mockWindow.ResizeObserver;
globalThis.MutationObserver = mockWindow.MutationObserver;
globalThis.matchMedia = mockWindow.matchMedia;

// Import the Web Component implementation
const componentPath = resolve(projectRoot, 'src/components/paper-art-scene.js');
await import(`file://${componentPath}`);

const {
  PaperArtScene,
  PaperCutLayer,
  PaperLight,
  computeMicroBevelRim,
  computePcssShadow,
  lerp
} = globalThis.PapyrusComponents;

// ===========================================================================
// Test Suites
// ===========================================================================

describe('Step 2: Declarative Web Components (<paper-art-scene>, <paper-cut-layer>, <paper-light>)', () => {

  beforeEach(() => {
    rafCallbacks = [];
  });

  describe('1. Web Standards Custom Elements Registry (AC-1, AC-2, AC-3)', () => {
    it('registers all 3 custom elements successfully in customElements registry', () => {
      assert.strictEqual(globalThis.customElements.get('paper-art-scene'), PaperArtScene,
        '<paper-art-scene> must be registered');
      assert.strictEqual(globalThis.customElements.get('paper-cut-layer'), PaperCutLayer,
        '<paper-cut-layer> must be registered');
      assert.strictEqual(globalThis.customElements.get('paper-light'), PaperLight,
        '<paper-light> must be registered');
    });

    it('instantiates custom element classes cleanly with standard default attributes', () => {
      const scene = new PaperArtScene();
      const layer = new PaperCutLayer();
      const light = new PaperLight();

      assert.ok(scene instanceof MockElement);
      assert.ok(layer instanceof MockElement);
      assert.ok(light instanceof MockElement);

      assert.strictEqual(scene.perspective, '1200px');
      assert.strictEqual(scene.exploded, false);
      assert.strictEqual(scene.explodedGap, 40);

      assert.strictEqual(layer.depth, 0);
      assert.strictEqual(layer.cutAngle, 45);
      assert.strictEqual(layer.material, 'white-craft');

      assert.strictEqual(light.type, 'point');
      assert.strictEqual(light.z, 250);
    });
  });

  describe('2. <paper-art-scene> Viewport, Lighting & Exploded View (AC-1, AC-5)', () => {
    it('sets perspective via property and attribute, syncing CSS custom properties', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      scene.perspective = '1500px';
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-perspective'), '1500px');

      scene.setAttribute('perspective', '800px');
      assert.strictEqual(scene.perspective, '800px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-perspective'), '800px');
    });

    it('orchestrates setExploded(boolean, gap) across child layers', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      const layer1 = new PaperCutLayer();
      layer1.depth = 1;
      const layer2 = new PaperCutLayer();
      layer2.depth = 3;

      scene.appendChild(layer1);
      scene.appendChild(layer2);

      // Default non-exploded depths
      assert.strictEqual(layer1.getComputedDepth(), 12);
      assert.strictEqual(layer2.getComputedDepth(), 36);

      // Trigger exploded mode with custom gap of 50px
      scene.setExploded(true, 50);

      assert.strictEqual(scene.exploded, true);
      assert.strictEqual(scene.explodedGap, 50);
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-exploded'), '1');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-exploded-gap'), '50px');

      // Exploded computed depths reflect gap
      assert.strictEqual(layer1.getComputedDepth(), 50);
      assert.strictEqual(layer2.getComputedDepth(), 150);
      assert.strictEqual(layer1.style.getPropertyValue('--papyrus-layer-z'), '50px');
      assert.strictEqual(layer2.style.getPropertyValue('--papyrus-layer-z'), '150px');

      // Toggle back to collapsed
      scene.setExploded(false);
      assert.strictEqual(scene.exploded, false);
      assert.strictEqual(layer1.getComputedDepth(), 12);
      assert.strictEqual(layer1.style.getPropertyValue('--papyrus-layer-z'), '12px');
    });

    it('updates light coordinates and broadcasts to scene and child layers via setLight()', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      const layer = new PaperCutLayer();
      layer.depth = 2;
      scene.appendChild(layer);

      scene.setLight(200, -100, 300, 1.5, '#fff4e6');

      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-x'), '200.0px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-y'), '-100.0px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-z'), '300.0px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-color'), '#fff4e6');

      // Layer PCSS and rim highlight update
      assert.ok(layer.style.getPropertyValue('--papyrus-shadow-dx').length > 0);
      assert.ok(layer.style.getPropertyValue('--papyrus-shadow-dy').length > 0);
      assert.ok(layer.style.getPropertyValue('--papyrus-bevel-rim').includes('rgba'));
    });

    it('supports setLightCoordinates(x, y, z) alias without throwing', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();
      assert.strictEqual(typeof scene.setLightCoordinates, 'function');
      scene.setLightCoordinates(140, -180, 220);
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-x'), '140.0px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-y'), '-180.0px');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-z'), '220.0px');
    });
  });

  describe('3. <paper-cut-layer> Reactive Attributes & Physics Calculations (AC-2, AC-6)', () => {
    it('observes attributes [depth, thickness, cut-angle, material, bevel, cast-shadow]', () => {
      const observed = PaperCutLayer.observedAttributes;
      assert.ok(observed.includes('depth'));
      assert.ok(observed.includes('thickness'));
      assert.ok(observed.includes('cut-angle'));
      assert.ok(observed.includes('material'));
      assert.ok(observed.includes('bevel'));
      assert.ok(observed.includes('cast-shadow'));
    });

    it('reacts to depth attribute changes and recalculates PCSS variable shadow', () => {
      const layer = new PaperCutLayer();
      layer.connectedCallback();

      layer.setAttribute('depth', '4');
      assert.strictEqual(layer.depth, 4);
      assert.strictEqual(layer.style.getPropertyValue('--papyrus-depth'), '4');

      const blurVal = parseFloat(layer.style.getPropertyValue('--papyrus-shadow-blur'));
      assert.ok(blurVal > 5, 'PCSS blur must increase with depth');
      assert.ok(layer.style.boxShadow.includes('rgba(46, 30, 20,'),
        'Shadow must apply burnt umber color');
    });

    it('calculates micro-bevel normal rim highlight based on cut-angle', () => {
      const res45 = computeMicroBevelRim(150, -150, 250, 45, 1.0);
      const res90 = computeMicroBevelRim(150, -150, 250, 90, 1.0);

      assert.ok(res45.specular > 0, '45° bevel produces strong specular highlight');
      assert.ok(res45.rimCss.startsWith('rgba(255, 255, 255,'), 'Highlight must be white rim');
      assert.notStrictEqual(res45.specular, res90.specular, 'Different cut angles yield different highlights');
    });

    it('disables shadows when cast-shadow="false" is set', () => {
      const layer = new PaperCutLayer();
      layer.connectedCallback();
      layer.depth = 3;

      layer.setAttribute('cast-shadow', 'false');
      assert.strictEqual(layer.castShadow, false);
      assert.strictEqual(layer.style.boxShadow, 'none');
    });
  });

  describe('4. <paper-light> Declarative Lighting Node (AC-3)', () => {
    it('retrieves structured light data from declarative element', () => {
      const light = new PaperLight();
      light.setAttribute('type', 'directional');
      light.setAttribute('x', '180');
      light.setAttribute('y', '-120');
      light.setAttribute('z', '350');
      light.setAttribute('intensity', '1.2');
      light.setAttribute('color', '#ffeecc');
      light.setAttribute('track-pointer', 'true');

      const data = light.getLightData();
      assert.strictEqual(data.type, 'directional');
      assert.strictEqual(data.x, 180);
      assert.strictEqual(data.y, -120);
      assert.strictEqual(data.z, 350);
      assert.strictEqual(data.intensity, 1.2);
      assert.strictEqual(data.color, '#ffeecc');
      assert.strictEqual(data.trackPointer, true);
    });

    it('notifies parent scene when light attributes change dynamically', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      const light = new PaperLight();
      scene.appendChild(light);

      light.setAttribute('x', '220');
      assert.strictEqual(scene.style.getPropertyValue('--papyrus-light-x'), '220.0px');
    });
  });

  describe('5. Lifecycle, Memory Safety & GC (AC-4, AC-8)', () => {
    it('cancels pending RAF animation loops upon disconnectedCallback to prevent leaks', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      // Trigger pointer tracking loop
      scene._handlePointerMove({ clientX: 200, clientY: 150 });
      assert.ok(rafCallbacks.length > 0, 'RAF callback must be queued during active pointer interaction');

      const activeRafId = rafCallbacks[0].id;
      // Disconnect scene from DOM
      scene.disconnectedCallback();

      // Ensure cancelled
      const found = rafCallbacks.find(item => item.id === activeRafId);
      assert.strictEqual(found, undefined, 'Queued RAF must be cleanly cancelled upon disconnection');
      assert.strictEqual(scene._isLoopRunning, false);
    });

    it('unregisters child layers and lights cleanly upon removal', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      const layer = new PaperCutLayer();
      const light = new PaperLight();
      scene.appendChild(layer);
      scene.appendChild(light);

      assert.strictEqual(scene.getLayers().length, 1);
      assert.strictEqual(scene.getLights().length, 1);

      scene.removeChild(layer);
      scene.removeChild(light);

      assert.strictEqual(scene.getLayers().length, 0);
      assert.strictEqual(scene.getLights().length, 0);
    });
  });

  describe('6. Accessibility, ARIA & Keyboard Navigation (AC-7)', () => {
    it('initializes default ARIA roles and labels on scene and layers', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();
      assert.strictEqual(scene.getAttribute('role'), 'region');
      assert.strictEqual(scene.getAttribute('aria-label'), '2.5D 페이퍼 아트 장면');
      assert.strictEqual(scene.getAttribute('tabindex'), '0');

      const layer = new PaperCutLayer();
      layer.depth = 2;
      layer.connectedCallback();
      assert.strictEqual(layer.getAttribute('role'), 'group');
      assert.strictEqual(layer.getAttribute('aria-label'), '종이 레이어 (깊이: 2)');
    });

    it('supports keyboard navigation (Space/Enter toggles exploded, arrow keys tilt scene)', () => {
      const scene = new PaperArtScene();
      scene.connectedCallback();

      assert.strictEqual(scene.exploded, false);
      scene._handleKeyDown({ key: ' ', preventDefault: () => {} });
      assert.strictEqual(scene.exploded, true, 'Space key must toggle exploded view');

      scene._handleKeyDown({ key: 'Enter', preventDefault: () => {} });
      assert.strictEqual(scene.exploded, false, 'Enter key must collapse exploded view');

      scene._handleKeyDown({ key: 'ArrowUp' });
      assert.strictEqual(scene._currentTiltX, -2, 'ArrowUp key tilts scene negatively on X');

      scene._handleKeyDown({ key: 'ArrowRight' });
      assert.strictEqual(scene._currentTiltY, 2, 'ArrowRight key tilts scene positively on Y');
    });
  });

  describe('7. CSS Component Styles Verification', () => {
    it('verifies papercut-art-components.css exists and contains required standards', () => {
      const cssPath = resolve(projectRoot, 'papercut-art-components.css');
      assert.ok(existsSync(cssPath), 'papercut-art-components.css must exist');

      const css = readFileSync(cssPath, 'utf-8');

      // Custom elements host selectors
      assert.ok(css.includes('paper-art-scene'), 'CSS must style paper-art-scene');
      assert.ok(css.includes('paper-cut-layer'), 'CSS must style paper-cut-layer');
      assert.ok(css.includes('paper-light'), 'CSS must style paper-light');

      // Custom CSS properties
      assert.ok(css.includes('--papyrus-perspective'), 'CSS must include --papyrus-perspective');
      assert.ok(css.includes('--papyrus-exploded-gap'), 'CSS must include --papyrus-exploded-gap');
      assert.ok(css.includes('--papyrus-bevel-rim'), 'CSS must include --papyrus-bevel-rim');

      // ARIA focus ring & touch target
      assert.ok(css.includes(':focus-visible'), 'CSS must define :focus-visible ring');
      assert.ok(css.includes('min-height: 44px'), 'CSS must respect 44px+ touch target standard');

      // Reduced motion query
      assert.ok(css.includes('prefers-reduced-motion: reduce'),
        'CSS must support prefers-reduced-motion fallback');

      // Korean typography standard
      assert.ok(css.includes('word-break: keep-all'), 'CSS must enforce keep-all Korean typography');
      assert.ok(css.includes('text-wrap: balance'), 'CSS must enforce balanced headings');
    });
  });
});
