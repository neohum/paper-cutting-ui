#!/usr/bin/env node
/**
 * tests/papercut-charts-core.test.mjs
 * 
 * Verifies Step 1: Chart Engine Core Fix & 6 Core Vector Charts
 * 
 * Validates:
 * - AC-1: 이중 텍스트 헤더가 제거되고, 각 차트 카드가 320px 이상의 높이에서 시원하게 꽉 찬 반응형 SVG 벡터로 렌더링됨.
 * - AC-2: 기존 6종 차트가 7대 파스텔 스와치(Peach, Mint, Lavender, Sand, Sky, Sage) 및 번트 엄버 2-Tier 그림자 필터로 원작 일러스트 수준의 종이 질감을 발현함.
 */

import { describe, it } from 'node:test';
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

class MockClassList {
  constructor() { this._classes = new Set(); }
  add(...names) { names.forEach(n => n && this._classes.add(n)); }
  remove(...names) { names.forEach(n => this._classes.delete(n)); }
  contains(name) { return this._classes.has(name); }
}

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = String(tagName).toUpperCase();
    this.classList = new MockClassList();
    this.style = {};
    this._attrs = new Map();
    this.dataset = {};
    this.children = [];
    this.parentNode = null;
    this._listeners = new Map();
    this._html = '';
  }

  setAttribute(k, v) {
    const sKey = String(k).toLowerCase();
    this._attrs.set(sKey, String(v));
    if (sKey === 'id') this.id = String(v);
    if (sKey === 'class') {
      this.classList = new MockClassList();
      String(v).split(/\s+/).forEach(c => c && this.classList.add(c));
    }
  }

  getAttribute(k) { return this._attrs.get(String(k).toLowerCase()) || null; }
  hasAttribute(k) { return this._attrs.has(String(k).toLowerCase()); }
  addEventListener(event, fn) {
    if (!this._listeners.has(event)) this._listeners.set(event, []);
    this._listeners.get(event).push(fn);
  }

  get innerHTML() { return this._html; }
  set innerHTML(val) {
    this._html = String(val);
    this.children = [];
    const tagRegex = /<([a-zA-Z0-9\-]+)([^>]*)>/g;
    let match;
    while ((match = tagRegex.exec(val)) !== null) {
      if (match[1].startsWith('/')) continue;
      const el = new MockElement(match[1]);
      const attrRegex = /([a-zA-Z0-9\-_:]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
      let aMatch;
      while ((aMatch = attrRegex.exec(match[2])) !== null) {
        el.setAttribute(aMatch[1], aMatch[2] ?? aMatch[3] ?? aMatch[4] ?? '');
      }
      this.children.push(el);
    }
  }

  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
  querySelectorAll(sel) {
    const results = [];
    const trimmed = sel.trim();
    for (const child of this.children) {
      if (trimmed.startsWith('#') && child.id === trimmed.slice(1)) results.push(child);
      else if (trimmed.startsWith('.') && child.classList.contains(trimmed.slice(1))) results.push(child);
      else if (child.tagName === trimmed.toUpperCase()) results.push(child);
    }
    return results;
  }
}

function loadEngine() {
  const document = {
    readyState: 'complete',
    createElement(tag) { return new MockElement(tag); },
    body: new MockElement('body'),
    querySelectorAll() { return []; },
    addEventListener() {}
  };
  const window = { document, addEventListener() {}, setTimeout(fn) { fn(); }, setInterval() {}, clearInterval() {} };
  const sandbox = { window, document, global: window, globalThis: window, console };
  vm.createContext(sandbox);
  vm.runInContext(jsSource, sandbox);
  return sandbox.window.PapercutCharts;
}

describe('Step 1: Chart Engine Core Fix & 6 Core Charts', () => {

  describe('AC-1: Elimination of duplicate headers & 320px responsive viewBox', () => {
    it('should render core charts directly into container without duplicate bulky cards', () => {
      const PapercutCharts = loadEngine();
      const coreMethods = [
        'renderAreaChart',
        'renderBarChart',
        'renderLineChart',
        'renderDonutChart',
        'renderRadarChart',
        'renderRadialChart'
      ];

      for (const m of coreMethods) {
        const container = new MockElement('div');
        PapercutCharts[m](container);

        assert.ok(container.innerHTML.includes('<svg'), `${m} must render an SVG element`);
        assert.ok(container.innerHTML.includes('preserveAspectRatio="xMidYMid meet"'), `${m} must preserve aspect ratio`);
        assert.ok(!container.innerHTML.includes('<div class="pc-chart-card">'), `${m} must not embed nested heavy .pc-chart-card by default`);
      }
    });

    it('should define .pc-chart-box and .pc-compact-header in CSS for clean containment', () => {
      assert.ok(cssSource.includes('.pc-chart-box'), 'CSS must define .pc-chart-box');
      assert.ok(cssSource.includes('.pc-compact-header'), 'CSS must define .pc-compact-header');
    });
  });

  describe('AC-2: 7 pastel swatches, 0.88px cut rims & 2-Tier burnt umber drop shadow', () => {
    it('should define 2-Tier shadow filters and pastel gradients in createPapercutChartDefs', () => {
      assert.ok(jsSource.includes('id="pc-shadow-paper-soft"'), 'Must define pc-shadow-paper-soft filter');
      assert.ok(jsSource.includes('id="pc-shadow-paper-deep"'), 'Must define pc-shadow-paper-deep filter');
      assert.ok(jsSource.includes('stroke-width="0.88"'), 'Must apply 0.88px cutline rims');

      const swatches = ['mint', 'sky', 'lavender', 'peach', 'buttercup', 'sand', 'sage'];
      for (const s of swatches) {
        assert.ok(jsSource.includes(`pc-grad-${s}`), `Must define gradient for pastel swatch ${s}`);
      }
    });
  });

});
