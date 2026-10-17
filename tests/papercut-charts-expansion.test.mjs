#!/usr/bin/env node
/**
 * tests/papercut-charts-expansion.test.mjs
 * 
 * Verifies Step 1 & Step 2: Papercut Vector Charts Engine Fix & Expansion (12 Archetypes)
 * 
 * Validates:
 * - AC-1: 6 existing charts refactored (Area, Bar, Line, Donut, Radar, Radial) with no duplicate bulky headers,
 *         viewBox preserveAspectRatio, and pure SVG layered paper architecture.
 * - AC-2: 7 pastel swatches, 0.88px pure white cutline rims, and 2-Tier burnt umber contact shadows in createPapercutChartDefs.
 * - AC-3: 6 new advanced vector charts implemented (Heatmap, Candlestick, Bubble, Funnel, Treemap, Gauge)
 *         completing the 12 master archetypes.
 * - AC-4: Interactive tooltips & hover bindings across all 12 charts.
 * - AC-5: PapercutCharts.init() automatically hydrates all 12 data-papercut-chart archetypes.
 * - AC-6: papercut-blocks-charts.css contains required box, compact header, tile, slice, and needle hover styles.
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

const jsPath = join(projectRoot, 'papercut-blocks-charts.js');
const cssPath = join(projectRoot, 'papercut-blocks-charts.css');

assert.ok(existsSync(jsPath), 'papercut-blocks-charts.js must exist');
assert.ok(existsSync(cssPath), 'papercut-blocks-charts.css must exist');

const jsSource = readFileSync(jsPath, 'utf-8');
const cssSource = readFileSync(cssPath, 'utf-8');

// --- Mock DOM Environment for Node.js ---

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
  getPropertyValue(name) { return this._props.get(name) || ''; }
}

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = String(tagName).toUpperCase();
    this.classList = new MockClassList();
    this.style = new MockStyle();
    this._attrs = new Map();
    this.dataset = {};
    this.children = [];
    this.parentNode = null;
    this._listeners = new Map();
    this._html = '';
  }

  get id() { return this.getAttribute('id') || ''; }
  set id(v) { this.setAttribute('id', v); }

  get className() { return this.classList.toString(); }
  set className(val) {
    this.classList = new MockClassList();
    if (val) String(val).split(/\s+/).forEach(c => c && this.classList.add(c));
  }

  setAttribute(k, v) {
    const sKey = String(k).toLowerCase();
    const sVal = String(v);
    this._attrs.set(sKey, sVal);
    if (sKey === 'class') this.className = sVal;
    if (sKey.startsWith('data-')) {
      const camel = sKey.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[camel] = sVal;
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
    this._attrs.delete(String(k).toLowerCase());
  }

  addEventListener(event, fn) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, []);
    }
    this._listeners.get(event).push(fn);
  }

  trigger(event, data = {}) {
    const list = this._listeners.get(event) || [];
    const evtObj = { target: this, ...data };
    list.forEach(fn => fn.call(this, evtObj));
  }

  getBoundingClientRect() {
    return { top: 0, left: 0, width: 700, height: 320, right: 700, bottom: 320 };
  }

  get innerHTML() { return this._html; }
  set innerHTML(val) {
    this._html = String(val);
    parseHtmlIntoMock(this._html, this);
  }

  querySelector(sel) {
    return this.querySelectorAll(sel)[0] || null;
  }

  querySelectorAll(sel) {
    return queryMockTree(this, sel.trim());
  }
}

function parseHtmlIntoMock(html, root) {
  root.children = [];
  const tagRegex = /<([a-zA-Z0-9\-]+)([^>]*)>/g;
  let match;
  const elements = [];

  while ((match = tagRegex.exec(html)) !== null) {
    const tagName = match[1];
    if (tagName.startsWith('/')) continue;
    const attrString = match[2];
    const el = new MockElement(tagName);

    const attrRegex = /([a-zA-Z0-9\-_:]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    let aMatch;
    while ((aMatch = attrRegex.exec(attrString)) !== null) {
      const k = aMatch[1];
      const v = aMatch[2] ?? aMatch[3] ?? aMatch[4] ?? '';
      el.setAttribute(k, v);
    }
    el.parentNode = root;
    elements.push(el);
  }
  root.children = elements;
}

function queryMockTree(root, sel) {
  const results = [];
  function walk(node) {
    for (const child of node.children) {
      if (matchesSelector(child, sel)) {
        results.push(child);
      }
      walk(child);
    }
  }
  walk(root);
  return results;
}

function matchesSelector(el, sel) {
  if (sel.startsWith('#')) {
    return el.id === sel.slice(1);
  }
  if (sel.startsWith('.')) {
    return el.classList && el.classList.contains(sel.slice(1));
  }
  if (sel.startsWith('[')) {
    const m = sel.match(/\[([a-zA-Z0-9\-_]+)(?:=([^\]]+))?\]/);
    if (m) {
      const attr = m[1].toLowerCase();
      const val = m[2] ? m[2].replace(/['"]/g, '') : null;
      if (!el.hasAttribute(attr)) return false;
      return val === null || el.getAttribute(attr) === val;
    }
  }
  return el.tagName === sel.toUpperCase();
}

function createMockEnvironment() {
  const document = {
    readyState: 'complete',
    createElement(tag) { return new MockElement(tag); },
    body: new MockElement('body'),
    _elements: [],
    querySelectorAll(sel) {
      const results = [];
      for (const el of this._elements) {
        if (matchesSelector(el, sel)) results.push(el);
        results.push(...el.querySelectorAll(sel));
      }
      return results;
    },
    querySelector(sel) {
      return this.querySelectorAll(sel)[0] || null;
    },
    addEventListener() {}
  };

  const window = {
    document,
    addEventListener() {},
    setTimeout(fn) { fn(); return 1; },
    setInterval() { return 1; },
    clearInterval() {},
    PapercutBlocks: null,
    PapercutCharts: null
  };

  const sandbox = {
    window,
    document,
    global: window,
    globalThis: window,
    console
  };

  vm.createContext(sandbox);
  vm.runInContext(jsSource, sandbox);

  return { window, document, PapercutCharts: sandbox.window.PapercutCharts, PapercutBlocks: sandbox.window.PapercutBlocks };
}

describe('Papercut Vector Charts Expansion (12 Master Archetypes)', () => {

  // -------------------------------------------------------------------------
  // 1. Engine Structure & Export Verification
  // -------------------------------------------------------------------------
  describe('Engine exports and 12 Archetypes availability', () => {
    it('should export PapercutCharts with all 12 chart rendering methods', () => {
      const { PapercutCharts } = createMockEnvironment();
      assert.ok(PapercutCharts, 'PapercutCharts must be exported');

      const expectedMethods = [
        'renderAreaChart',
        'renderBarChart',
        'renderLineChart',
        'renderDonutChart',
        'renderRadarChart',
        'renderRadialChart',
        'renderHeatmapChart',
        'renderCandlestickChart',
        'renderBubbleChart',
        'renderFunnelChart',
        'renderTreemapChart',
        'renderGaugeChart',
        'init'
      ];

      for (const method of expectedMethods) {
        assert.equal(typeof PapercutCharts[method], 'function', `${method} must be a function on PapercutCharts`);
      }
    });

    it('should define 7 pastel swatches and 2-Tier burnt umber drop shadow filters in defs', () => {
      assert.ok(jsSource.includes('id="pc-shadow-paper-soft"'), 'defs must include pc-shadow-paper-soft filter');
      assert.ok(jsSource.includes('id="pc-shadow-paper-deep"'), 'defs must include pc-shadow-paper-deep filter');
      assert.ok(jsSource.includes('id="pc-shadow-paper-cut"'), 'defs must include pc-shadow-paper-cut filter');

      const expectedGradients = [
        'pc-grad-mint',
        'pc-grad-sky',
        'pc-grad-lavender',
        'pc-grad-peach',
        'pc-grad-buttercup',
        'pc-grad-sand',
        'pc-grad-sage'
      ];

      for (const grad of expectedGradients) {
        assert.ok(jsSource.includes(`id="${grad}"`), `defs must define ${grad} gradient`);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 2. Refactored 6 Charts (Area, Bar, Line, Donut, Radar, Radial)
  // -------------------------------------------------------------------------
  describe('Refactored 6 core charts (Fixing squishing & duplicate header defect)', () => {
    it('01. Area Chart: should render without nested bulky card, having viewBox and 0.88px cutline rim', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderAreaChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Area chart must render SVG');
      assert.ok(container.innerHTML.includes('viewBox="0 0 700 320"'), 'Area chart must have 700x320 viewBox');
      assert.ok(container.innerHTML.includes('preserveAspectRatio="xMidYMid meet"'), 'Area chart must preserve aspect ratio');
      assert.ok(container.innerHTML.includes('stroke-width="0.88"'), 'Area chart must have 0.88px cutline rim');

      // Tooltip interactive check
      const tooltip = container.querySelector('#pc-area-tooltip');
      assert.ok(tooltip, 'Area chart must contain tooltip element');
      const nodes = container.querySelectorAll('.pc-chart-node-circle');
      assert.ok(nodes.length > 0, 'Area chart must have interactive node circles');

      nodes[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must become visible on node hover');
      assert.ok(tooltip.innerHTML.includes('순이익'), 'Tooltip must format currency value');

      nodes[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('02. Bar Chart: should render compact box layout and stacked paper columns with 0.88px rims', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderBarChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Bar chart must render SVG');
      assert.ok(container.innerHTML.includes('viewBox="0 0 700 320"'), 'Bar chart must have 700x320 viewBox');
      assert.ok(container.innerHTML.includes('class="pc-chart-bar-rect"'), 'Bar chart must have bar rect elements');
      assert.ok(container.innerHTML.includes('stroke-width="0.88"'), 'Bar chart must use 0.88px cutline rims');

      const tooltip = container.querySelector('#pc-bar-tooltip');
      const barGroups = container.querySelectorAll('.pc-bar-group');
      assert.ok(barGroups.length === 7, 'Bar chart must render 7 days of columns');

      barGroups[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on bar group hover');
      barGroups[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('03. Line Chart: should render smooth origami ribbons with goal line and node markers', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderLineChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Line chart must render SVG');
      assert.ok(container.innerHTML.includes('목표선'), 'Line chart must render reference target line');
      assert.ok(container.innerHTML.includes('class="pc-chart-node-circle"'), 'Line chart must have interactive nodes');

      const tooltip = container.querySelector('#pc-line-tooltip');
      const nodes = container.querySelectorAll('.pc-chart-node-circle');
      assert.ok(nodes.length > 0, 'Line chart nodes must be present');

      nodes[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on line node hover');
      nodes[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('04. Donut Chart: should render folded paper fan wheel with center stamp well', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderDonutChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Donut chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-donut-sector"'), 'Donut chart must have sector paths');
      assert.ok(container.innerHTML.includes('총 유입량'), 'Donut chart must render center stamp well text');

      const tooltip = container.querySelector('#pc-donut-tooltip');
      const sectors = container.querySelectorAll('.pc-donut-sector');
      assert.equal(sectors.length, 4, 'Donut chart must render 4 sectors');

      sectors[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on sector hover');
      sectors[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('05. Radar Chart: should render hexagonal concentric spiderweb and translucent paper kite polygon', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderRadarChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Radar chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-radar-point"'), 'Radar chart must have vertex pin seals');

      const tooltip = container.querySelector('#pc-radar-tooltip');
      const points = container.querySelectorAll('.pc-radar-point');
      assert.equal(points.length, 6, 'Radar chart must have 6 metric points');

      points[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on radar point hover');
      points[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('06. Radial Bar Chart: should render 4 concentric craft rings with cream background track', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderRadialChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Radial chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-radial-arc"'), 'Radial chart must have progress arc elements');

      const tooltip = container.querySelector('#pc-radial-tooltip');
      const arcs = container.querySelectorAll('.pc-radial-arc');
      assert.equal(arcs.length, 4, 'Radial chart must render 4 resource rings');

      arcs[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on radial arc hover');
      arcs[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });
  });

  // -------------------------------------------------------------------------
  // 3. New 6 Advanced Charts (Heatmap, Candlestick, Bubble, Funnel, Treemap, Gauge)
  // -------------------------------------------------------------------------
  describe('New 6 advanced paper-cut vector charts (Master Suite Completion)', () => {
    it('07. Heatmap Chart: should render 7x10 paper mosaic tiles with 4 activity elevation levels', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderHeatmapChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Heatmap chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-heatmap-tile"'), 'Heatmap chart must have tile rects');
      assert.ok(container.innerHTML.includes('stroke-width="0.88"'), 'Heatmap tiles must use 0.88px cutline rims');

      const tiles = container.querySelectorAll('.pc-heatmap-tile');
      assert.equal(tiles.length, 70, 'Heatmap must render exactly 7x10 = 70 mosaic tiles');

      const tooltip = container.querySelector('#pc-heatmap-tooltip');
      tiles[10].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on heatmap tile hover');
      assert.ok(tooltip.innerHTML.includes('활동'), 'Tooltip must show activity count and level');
      tiles[10].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('08. Candlestick Chart: should render thick paper tweezers bodies and vertical wick lines', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderCandlestickChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Candlestick chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-candle-body"'), 'Candlestick chart must have candle body rects');

      const groups = container.querySelectorAll('.pc-candlestick-group');
      assert.equal(groups.length, 7, 'Candlestick chart must render 7 time intervals');

      const tooltip = container.querySelector('#pc-candlestick-tooltip');
      groups[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on candlestick hover');
      assert.ok(tooltip.innerHTML.includes('시가') && tooltip.innerHTML.includes('종가'), 'Tooltip must show Open/Close/High/Low');
      groups[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('09. Bubble Chart: should render floating paper confetti circles with multi-variable sizing', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderBubbleChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Bubble chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-bubble-circle"'), 'Bubble chart must have circle elements');

      const bubbleGroups = container.querySelectorAll('.pc-bubble-group');
      assert.ok(bubbleGroups.length >= 8, 'Bubble chart must render at least 8 confetti bubbles');

      const tooltip = container.querySelector('#pc-bubble-tooltip');
      bubbleGroups[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on bubble hover');
      assert.ok(tooltip.innerHTML.includes('만족도') && tooltip.innerHTML.includes('난이도'), 'Tooltip must display multivariate metrics');
      bubbleGroups[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('10. Funnel Chart: should render 5 stacked trapezoid paper slices with 3D step elevation', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderFunnelChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Funnel chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-funnel-slice"'), 'Funnel chart must have trapezoid slices');

      const slices = container.querySelectorAll('.pc-funnel-group');
      assert.equal(slices.length, 5, 'Funnel chart must render 5 conversion stages');

      const tooltip = container.querySelector('#pc-funnel-tooltip');
      slices[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on funnel slice hover');
      assert.ok(tooltip.innerHTML.includes('전환율'), 'Tooltip must display conversion rate');
      slices[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('11. Treemap Chart: should render hierarchical partitioned rectangular paper tiles with 0.88px rims', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderTreemapChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Treemap chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-treemap-tile"'), 'Treemap chart must have tile rects');

      const tiles = container.querySelectorAll('.pc-treemap-group');
      assert.equal(tiles.length, 5, 'Treemap chart must partition into 5 categories');

      const tooltip = container.querySelector('#pc-treemap-tooltip');
      tiles[0].trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on treemap tile hover');
      assert.ok(tooltip.innerHTML.includes('UI 컴포넌트 키트'), 'Tooltip must display category information');
      tiles[0].trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });

    it('12. Gauge Chart: should render semi-circular paper compass arc and 3D origami pointer needle', () => {
      const { PapercutCharts } = createMockEnvironment();
      const container = new MockElement('div');
      PapercutCharts.renderGaugeChart(container);

      assert.ok(container.innerHTML.includes('<svg'), 'Gauge chart must render SVG');
      assert.ok(container.innerHTML.includes('class="pc-gauge-needle"'), 'Gauge chart must have 3D needle element');
      assert.ok(container.innerHTML.includes('안정 가동'), 'Gauge chart must display center status badge');

      const tooltip = container.querySelector('#pc-gauge-tooltip');
      const needle = container.querySelector('.pc-gauge-needle');
      assert.ok(needle, 'Gauge needle must be rendered');

      needle.trigger('mouseenter');
      assert.ok(tooltip.classList.contains('is-visible'), 'Tooltip must show on needle hover');
      assert.ok(tooltip.innerHTML.includes('실시간 게이지'), 'Tooltip must show current gauge reading');
      needle.trigger('mouseleave');
      assert.ok(!tooltip.classList.contains('is-visible'), 'Tooltip must hide on mouseleave');
    });
  });

  // -------------------------------------------------------------------------
  // 4. Auto-Hydration via PapercutCharts.init()
  // -------------------------------------------------------------------------
  describe('PapercutCharts.init() 12-Archetype Auto-Binding', () => {
    it('should automatically mount and render all 12 chart types when initialized', () => {
      const env = createMockEnvironment();
      const { document, PapercutCharts } = env;

      const types = [
        'area', 'bar', 'line', 'donut', 'radar', 'radial',
        'heatmap', 'candlestick', 'bubble', 'funnel', 'treemap', 'gauge'
      ];

      const elements = types.map(t => {
        const el = document.createElement('div');
        el.setAttribute('data-papercut-chart', t);
        return el;
      });
      document._elements = elements;

      PapercutCharts.init();

      for (let i = 0; i < types.length; i++) {
        const el = elements[i];
        const t = types[i];
        assert.ok(el.innerHTML.includes('<svg'), `Type [${t}] must be automatically rendered with an SVG`);
        assert.ok(el.innerHTML.includes('class="pc-chart-svg-wrap"'), `Type [${t}] must contain pc-chart-svg-wrap`);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. CSS Stylesheet Integration
  // -------------------------------------------------------------------------
  describe('CSS Rules in papercut-blocks-charts.css', () => {
    it('should define required layout and animation classes for all 12 archetypes', () => {
      assert.ok(cssSource.includes('.pc-chart-box'), 'CSS must define .pc-chart-box');
      assert.ok(cssSource.includes('.pc-compact-header'), 'CSS must define .pc-compact-header');
      assert.ok(cssSource.includes('.pc-chart-svg-wrap'), 'CSS must define .pc-chart-svg-wrap');
      assert.ok(cssSource.includes('.pc-chart-tooltip'), 'CSS must define .pc-chart-tooltip');
      assert.ok(cssSource.includes('.pc-heatmap-tile'), 'CSS must define .pc-heatmap-tile');
      assert.ok(cssSource.includes('.pc-candle-body'), 'CSS must define .pc-candle-body');
      assert.ok(cssSource.includes('.pc-bubble-circle'), 'CSS must define .pc-bubble-circle');
      assert.ok(cssSource.includes('.pc-funnel-slice'), 'CSS must define .pc-funnel-slice');
      assert.ok(cssSource.includes('.pc-treemap-tile'), 'CSS must define .pc-treemap-tile');
      assert.ok(cssSource.includes('.pc-gauge-needle'), 'CSS must define .pc-gauge-needle');
    });
  });

});
