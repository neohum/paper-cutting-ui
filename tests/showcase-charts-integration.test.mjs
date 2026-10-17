#!/usr/bin/env node
/**
 * tests/showcase-charts-integration.test.mjs
 * 
 * Verifies Step 3: Showcase Charts Integration & Layout Redesign (12 Master Archetypes)
 * 
 * Acceptance Criteria:
 * - AC-5: index.html에 12종 차트 마운트 포인트 완비 및 카테고리 필터(전체, 추세/시계열, 비교/비율, 분포/상관, 게이지) 지원.
 * - AC-6: Flaticon UIcons (fi fi-rr-*) 단일 표준, 한국어 줄바꿈(break-keep, text-balance), 안티-핑거네일 준수, 0px 오버플로우 유지.
 * - AC-7: 12종 마스터 차트 렌더링 엔진 메서드 완비 및 SVG/범례/툴팁 정상 생성 검증.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

const indexPath = join(projectRoot, 'index.html');
const sidebarJsPath = join(projectRoot, 'papercut-sidebar.js');
const chartsJsPath = join(projectRoot, 'papercut-blocks-charts.js');
const chartsCssPath = join(projectRoot, 'papercut-blocks-charts.css');

assert.ok(existsSync(indexPath), 'index.html must exist');
assert.ok(existsSync(sidebarJsPath), 'papercut-sidebar.js must exist');
assert.ok(existsSync(chartsJsPath), 'papercut-blocks-charts.js must exist');
assert.ok(existsSync(chartsCssPath), 'papercut-blocks-charts.css must exist');

const indexHtml = readFileSync(indexPath, 'utf-8');
const sidebarJs = readFileSync(sidebarJsPath, 'utf-8');
const chartsJs = readFileSync(chartsJsPath, 'utf-8');
const chartsCss = readFileSync(chartsCssPath, 'utf-8');

describe('Step 3: Showcase Charts Integration & Layout Redesign', () => {

  // -------------------------------------------------------------------------
  // AC-5: 12 Master Vector Charts Mount Points & Category Filter Tabs
  // -------------------------------------------------------------------------
  describe('AC-5: 12 Master Vector Charts Mount Points & Category Filter Tabs', () => {
    it('should declare #pc-charts-section dedicated section in index.html', () => {
      assert.ok(
        indexHtml.includes('id="pc-charts-section"'),
        'index.html must contain #pc-charts-section'
      );
      assert.ok(
        indexHtml.includes('3D 페이퍼 컷팅 벡터 차트 (12종 마스터 시각화 스위트)'),
        'Section title must reflect 12 master charts suite'
      );
    });

    it('should include all 12 master chart mount points (data-papercut-chart)', () => {
      const expectedCharts = [
        'area', 'bar', 'line', 'donut', 'radar', 'radial',
        'heatmap', 'candlestick', 'bubble', 'funnel', 'treemap', 'gauge'
      ];
      for (const chartType of expectedCharts) {
        assert.ok(
          indexHtml.includes(`data-papercut-chart="${chartType}"`),
          `index.html must have mount point data-papercut-chart="${chartType}"`
        );
      }
    });

    it('should feature category filter tabs bar with 5 filter buttons', () => {
      const expectedFilters = ['all', 'trends', 'comparisons', 'distributions', 'gauges'];
      for (const filter of expectedFilters) {
        assert.ok(
          indexHtml.includes(`data-chart-filter="${filter}"`),
          `Category filter bar must include tab data-chart-filter="${filter}"`
        );
      }
      assert.ok(
        indexHtml.includes('PaperCutUI.filterCharts'),
        'Filter buttons must trigger PaperCutUI.filterCharts'
      );
    });

    it('should categorize all 12 chart cards into 4 distinct categories via data-chart-category', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      
      // Trends: area, line, candlestick
      const trendsMatches = chartsSection.match(/data-chart-category="trends"/g) || [];
      assert.equal(trendsMatches.length, 3, 'Must have exactly 3 trends charts (area, line, candlestick)');

      // Comparisons: bar, donut, funnel, treemap
      const comparisonsMatches = chartsSection.match(/data-chart-category="comparisons"/g) || [];
      assert.equal(comparisonsMatches.length, 4, 'Must have exactly 4 comparisons charts (bar, donut, funnel, treemap)');

      // Distributions: heatmap, bubble
      const distributionsMatches = chartsSection.match(/data-chart-category="distributions"/g) || [];
      assert.equal(distributionsMatches.length, 2, 'Must have exactly 2 distributions charts (heatmap, bubble)');

      // Gauges: radar, radial, gauge
      const gaugesMatches = chartsSection.match(/data-chart-category="gauges"/g) || [];
      assert.equal(gaugesMatches.length, 3, 'Must have exactly 3 gauges charts (radar, radial, gauge)');
    });

    it('should synchronize sidebar navigation badge to "12종 차트"', () => {
      // Static sidebar in index.html
      assert.ok(
        indexHtml.includes('12종 차트'),
        'index.html static sidebar must display badge "12종 차트"'
      );

      // Dynamic router in papercut-sidebar.js
      assert.ok(
        sidebarJs.includes("id: 'pc-charts-section'") && sidebarJs.includes("badge: '12종 차트'"),
        'papercut-sidebar.js must register pc-charts-section with badge "12종 차트"'
      );
    });

    it('should implement PaperCutUI.filterCharts method in index.html', () => {
      assert.ok(
        indexHtml.includes('filterCharts(cat, btn)'),
        'PaperCutUI must implement filterCharts method'
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-6: AGENTS.md Hard Rules & Layout Standard
  // -------------------------------------------------------------------------
  describe('AC-6: AGENTS.md Hard Rules & Typographic Layout Standard', () => {
    it('should use Flaticon UIcons (fi fi-rr-*) standard without foreign icon sets', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      const iconMatches = chartsSection.match(/fi fi-rr-[a-z0-9-]+/g) || [];
      assert.ok(
        iconMatches.length >= 12,
        `Charts section must use standard Flaticon UIcons (fi fi-rr-*), found ${iconMatches.length}`
      );
      assert.ok(!chartsSection.includes('lucide-'), 'Must not mix Lucide icon classes');
      assert.ok(!chartsSection.includes('heroicon-'), 'Must not mix Heroicon classes');
    });

    it('should adhere to Korean typography standards (break-keep, text-wrap: pretty) and forbid break-all', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      assert.ok(
        chartsSection.includes('break-keep'),
        'Charts section must apply Korean break-keep typography'
      );
      assert.ok(
        !chartsSection.includes('break-all'),
        'break-all is strictly forbidden by AGENTS.md Hard Rules'
      );
    });

    it('should enforce button and badge centering standards (inline-flex items-center justify-center leading-none)', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      assert.ok(
        chartsSection.includes('inline-flex items-center justify-center leading-none'),
        'Badges and filter buttons must enforce inline-flex items-center justify-center leading-none'
      );
    });

    it('should adhere to anti-fingernail design standard (forbid border-l-4 rounded-*)', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      assert.ok(
        !chartsSection.includes('border-l-4 rounded-'),
        'Anti-fingernail rule: border-l-4 rounded-* is strictly forbidden'
      );
    });

    it('should enforce non-squishing card layout (min-height: 380px; display: flex; flex-direction: column;)', () => {
      const chartsSection = indexHtml.split('id="pc-charts-section"')[1]?.split('</section>')[0] || '';
      const minHeightMatches = chartsSection.match(/min-height:\s*380px/g) || [];
      assert.ok(
        minHeightMatches.length >= 12,
        `All 12 chart cards must enforce min-height: 380px, found ${minHeightMatches.length}`
      );
      const flexColMatches = chartsSection.match(/flex-direction:\s*column/g) || [];
      assert.ok(
        flexColMatches.length >= 12,
        `All 12 chart cards must enforce flex-direction: column, found ${flexColMatches.length}`
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-7: 12 Master Chart Rendering Methods & SVG Craft Generation
  // -------------------------------------------------------------------------
  describe('AC-7: 12 Master Chart Rendering Methods & SVG Craft Generation', () => {
    // Dynamic import of PapercutCharts engine
    let PapercutCharts;

    it('should load PapercutCharts from papercut-blocks-charts.js in module context', async () => {
      const mod = await import('../papercut-blocks-charts.js');
      PapercutCharts = mod.PapercutCharts || globalThis.PapercutCharts;
      assert.ok(PapercutCharts, 'PapercutCharts must be exported');
    });

    it('should provide all 12 rendering methods on PapercutCharts', () => {
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
        'renderGaugeChart'
      ];

      for (const method of expectedMethods) {
        assert.equal(
          typeof PapercutCharts[method],
          'function',
          `PapercutCharts.${method} must be a valid rendering function`
        );
      }
    });

    it('should render pure SVG vector content and interactive tooltips for each of the 12 charts', () => {
      const chartMethodMap = {
        area: 'renderAreaChart',
        bar: 'renderBarChart',
        line: 'renderLineChart',
        donut: 'renderDonutChart',
        radar: 'renderRadarChart',
        radial: 'renderRadialChart',
        heatmap: 'renderHeatmapChart',
        candlestick: 'renderCandlestickChart',
        bubble: 'renderBubbleChart',
        funnel: 'renderFunnelChart',
        treemap: 'renderTreemapChart',
        gauge: 'renderGaugeChart'
      };

      for (const [chartType, methodName] of Object.entries(chartMethodMap)) {
        const mockContainer = {
          innerHTML: '',
          querySelector: () => null,
          querySelectorAll: () => []
        };

        PapercutCharts[methodName](mockContainer);

        assert.ok(
          mockContainer.innerHTML.includes('<svg'),
          `${methodName} must generate an <svg> element`
        );
        assert.ok(
          mockContainer.innerHTML.includes('pc-chart-tooltip'),
          `${methodName} must generate a pc-chart-tooltip element`
        );
        assert.ok(
          mockContainer.innerHTML.includes('pc-chart-legend'),
          `${methodName} must generate a pc-chart-legend element`
        );
        assert.ok(
          mockContainer.innerHTML.includes('pc-shadow-paper-'),
          `${methodName} must apply authentic burnt umber drop shadow filters`
        );
      }
    });

    it('should support auto-hydration of all 12 charts in PapercutCharts.init()', () => {
      assert.ok(
        chartsJs.includes("type === 'area'"),
        'init() must handle area chart'
      );
      assert.ok(
        chartsJs.includes("type === 'heatmap'"),
        'init() must handle heatmap chart'
      );
      assert.ok(
        chartsJs.includes("type === 'candlestick'"),
        'init() must handle candlestick chart'
      );
      assert.ok(
        chartsJs.includes("type === 'bubble'"),
        'init() must handle bubble chart'
      );
      assert.ok(
        chartsJs.includes("type === 'funnel'"),
        'init() must handle funnel chart'
      );
      assert.ok(
        chartsJs.includes("type === 'treemap'"),
        'init() must handle treemap chart'
      );
      assert.ok(
        chartsJs.includes("type === 'gauge'"),
        'init() must handle gauge chart'
      );
    });
  });

});
