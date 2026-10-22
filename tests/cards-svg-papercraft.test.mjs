#!/usr/bin/env node
/**
 * tests/cards-svg-papercraft.test.mjs
 * 
 * Verifies Lane B: Cards, Banners & Content Sections Multi-Layer SVG Papercraft Geometry
 * (Matching the 130 icon background plates standard: Layer 1 base paper + Layer 2 cream drawing paper +
 *  Layer 3 dashed stitching/perforation stroke-dasharray="3 3" + 3-tier feDropShadow filter).
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
assert.ok(existsSync(indexPath), 'index.html must exist');

const indexHtml = readFileSync(indexPath, 'utf-8');

describe('Lane B: Cards, Banners & Sections Multi-Layer SVG Papercraft Geometry', () => {

  // -------------------------------------------------------------------------
  // 1. #overview Hero Banner Section
  // -------------------------------------------------------------------------
  describe('#overview Hero Banner SVG Papercraft', () => {
    it('should have data-pc-paper="sheet" and data-pc-tone="peach" on #overview', () => {
      assert.ok(
        /id="overview"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="peach"|data-pc-paper="sheet"[^>]*data-pc-tone="peach"[^>]*id="overview"/s.test(indexHtml),
        '#overview must declare data-pc-paper="sheet" and data-pc-tone="peach"'
      );
    });

    it('should feature multi-layer perforated stamp teeth and dashed stitching line', () => {
      assert.ok(
        indexHtml.includes('pc-hero-papercraft-plate'),
        '#overview must feature .pc-hero-papercraft-plate SVG banner'
      );
      assert.ok(
        indexHtml.includes('stroke-dasharray="3 3"'),
        '#overview must feature dashed stitching line with stroke-dasharray="3 3"'
      );
    });

    it('should feature 3-tier feDropShadow filter matching 130 background plates', () => {
      assert.ok(
        indexHtml.includes('hero-frame-sh-postage') || indexHtml.includes('hero-sh-postage-plate'),
        '#overview must include 3-tier shadow filter hero-frame-sh-postage or hero-sh-postage-plate'
      );
      assert.ok(
        indexHtml.includes('dx="0" dy="1.2"') &&
        indexHtml.includes('dx="0" dy="4.5"') &&
        indexHtml.includes('dx="0" dy="-0.5"'),
        '#overview filter must implement exact 3-tier shadow (contact, ambient, rim light)'
      );
    });
  });

  // -------------------------------------------------------------------------
  // 2. #papercut-stacking-studio Master Card & Studio Sections
  // -------------------------------------------------------------------------
  describe('#papercut-stacking-studio SVG Multi-Layer Stacking Architecture', () => {
    it('should declare data-pc-paper="sheet" and data-pc-tone="cream" on master section', () => {
      assert.ok(
        /id="papercut-stacking-studio"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '#papercut-stacking-studio must declare data-pc-paper="sheet" and data-pc-tone="cream"'
      );
    });

    it('should feature SVG multi-layer papercraft stitching plate in studio header', () => {
      assert.ok(
        indexHtml.includes('pc-studio-stitch-plate'),
        '#papercut-stacking-studio must contain .pc-studio-stitch-plate'
      );
    });

    it('should set data-pc-paper and data-pc-tone on fanned and cascade stacks', () => {
      assert.ok(
        /class="[^"]*pc-stack-fanned[^"]*"[^>]*data-pc-paper="ticket"[^>]*data-pc-tone="mint"/s.test(indexHtml),
        '.pc-stack-fanned must have data-pc-paper="ticket" and data-pc-tone="mint"'
      );
      assert.ok(
        /class="[^"]*pc-stack-cascade[^"]*"[^>]*data-pc-paper="stamp"[^>]*data-pc-tone="sand"/s.test(indexHtml),
        '.pc-stack-cascade must have data-pc-paper="stamp" and data-pc-tone="sand"'
      );
    });

    it('should set data-pc-paper and data-pc-tone on card well, slot pocket, insert, and shingle cards', () => {
      assert.ok(
        /class="[^"]*pc-card-well[^"]*"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '.pc-card-well must have data-pc-paper="sheet" and data-pc-tone="cream"'
      );
      assert.ok(
        /class="[^"]*pc-slot-pocket[^"]*"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '.pc-slot-pocket must have data-pc-paper="sheet" and data-pc-tone="cream"'
      );
      assert.ok(
        /class="[^"]*pc-slot-insert[^"]*"[^>]*data-pc-paper="ticket"[^>]*data-pc-tone="mint"/s.test(indexHtml),
        '.pc-slot-insert must have data-pc-paper="ticket" and data-pc-tone="mint"'
      );
      assert.ok(
        /class="[^"]*pc-shingle-card[^"]*"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="peach"/s.test(indexHtml),
        'pc-shingle-card must declare data-pc-tone="peach"'
      );
      assert.ok(
        /class="[^"]*pc-shingle-card[^"]*"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="lavender"/s.test(indexHtml),
        'pc-shingle-card must declare data-pc-tone="lavender"'
      );
    });

    it('should set data-pc-paper and data-pc-tone on photo corners and 2-sheet nested cards', () => {
      assert.ok(
        /class="[^"]*pc-has-photo-corners[^"]*"[^>]*data-pc-paper="stamp"[^>]*data-pc-tone="sand"/s.test(indexHtml),
        '.pc-has-photo-corners must declare data-pc-paper="stamp" and data-pc-tone="sand"'
      );
      assert.ok(
        /class="[^"]*pc-card-nested[^"]*"[^>]*data-pc-paper="stamp"[^>]*data-pc-tone="sand"/s.test(indexHtml),
        '.pc-card-nested must support data-pc-paper="stamp"'
      );
      assert.ok(
        /class="[^"]*pc-card-nested[^"]*"[^>]*data-pc-paper="ticket"[^>]*data-pc-tone="mint"/s.test(indexHtml),
        '.pc-card-nested must support data-pc-paper="ticket"'
      );
    });
  });

  // -------------------------------------------------------------------------
  // 3. #pc-components Master Suite and Specialized Cards
  // -------------------------------------------------------------------------
  describe('#pc-components Master Suite and Specialized Cards', () => {
    it('should have data-pc-paper="sheet" and data-pc-tone="cream" on #pc-components', () => {
      assert.ok(
        /id="pc-components"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '#pc-components must declare data-pc-paper="sheet" and data-pc-tone="cream"'
      );
    });

    it('should set data-pc-paper and tone on the 4 specialized cards in #pc-suite-cards', () => {
      // 01. Dogear
      assert.ok(
        /<!-- 01\. 도그이어 접힌 모서리 카드 \(직각\) -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="mint">/.test(indexHtml),
        'Card 01 Dogear must declare data-pc-paper="sheet" and data-pc-tone="mint"'
      );
      // 02. Washi
      assert.ok(
        /<!-- 02\. 마스킹 테이프 메모 패드 카드 \(직각\) -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="peach">/.test(indexHtml),
        'Card 02 Washi must declare data-pc-paper="sheet" and data-pc-tone="peach"'
      );
      // 03. Deckle
      assert.ok(
        /<!-- 03\. 수제 한지 데클 엣지 카드 \(직각\) -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="buttercup">/.test(indexHtml),
        'Card 03 Deckle must declare data-pc-paper="sheet" and data-pc-tone="buttercup"'
      );
      // 04. Ticket
      assert.ok(
        /<!-- 04\. 노치 시네마\/바우처 티켓 카드 \(직각\) -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="ticket" data-pc-tone="sky">/.test(indexHtml),
        'Card 04 Ticket must declare data-pc-paper="ticket" and data-pc-tone="sky"'
      );
    });

    it('should feature inner cream inlay and dashed perforation line in Card 04 Ticket and Card 04-R', () => {
      assert.ok(
        indexHtml.includes('svg-card-sh-ticket'),
        'Card 04 Ticket SVG filter must exist'
      );
      assert.ok(
        indexHtml.includes('svg-card-sh-ticket-rnd'),
        'Card 04-R Ticket SVG filter must exist'
      );
      // Verifying dashed perforation in both cards
      const ticketMatch = indexHtml.match(/<!-- 04\. 노치 시네마\/바우처 티켓 카드 \(직각\) -->[\s\S]*?<\/svg>/);
      assert.ok(ticketMatch, 'Card 04 Ticket SVG must be present');
      assert.ok(ticketMatch[0].includes('stroke-dasharray="3 3"'), 'Card 04 Ticket must feature stroke-dasharray="3 3"');
      assert.ok(ticketMatch[0].includes('#FAF6ED'), 'Card 04 Ticket must feature inner cream inlay');

      const ticketRndMatch = indexHtml.match(/<!-- 04-R\. 둥근 노치 시네마 티켓 카드 -->[\s\S]*?<\/svg>/);
      assert.ok(ticketRndMatch, 'Card 04-R Ticket SVG must be present');
      assert.ok(ticketRndMatch[0].includes('stroke-dasharray="3 3"'), 'Card 04-R Ticket must feature stroke-dasharray="3 3"');
      assert.ok(ticketRndMatch[0].includes('#FAF6ED'), 'Card 04-R Ticket must feature inner cream inlay');
    });

    it('should set data-pc-paper and tone on the 4 rounded variants (01-R to 04-R)', () => {
      assert.ok(
        /<!-- 01-R\. 둥근 도그이어 접힌 카드 -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="mint">/.test(indexHtml),
        'Card 01-R must declare data-pc-paper="sheet" and data-pc-tone="mint"'
      );
      assert.ok(
        /<!-- 02-R\. 둥근 마스킹 테이프 메모 카드 -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="peach">/.test(indexHtml),
        'Card 02-R must declare data-pc-paper="sheet" and data-pc-tone="peach"'
      );
      assert.ok(
        /<!-- 03-R\. 둥근 수제 한지 데클 엣지 카드 -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="sheet" data-pc-tone="buttercup">/.test(indexHtml),
        'Card 03-R must declare data-pc-paper="sheet" and data-pc-tone="buttercup"'
      );
      assert.ok(
        /<!-- 04-R\. 둥근 노치 시네마 티켓 카드 -->\s*<div class="pc-svg-card-frame-wrap" data-pc-paper="ticket" data-pc-tone="sky">/.test(indexHtml),
        'Card 04-R must declare data-pc-paper="ticket" and data-pc-tone="sky"'
      );
    });
  });

  // -------------------------------------------------------------------------
  // 4. #pc-blocks-charts Section & 6 Application Blocks
  // -------------------------------------------------------------------------
  describe('#pc-blocks-charts Section & 6 Core Application Blocks', () => {
    it('should have data-pc-paper="sheet" and data-pc-tone="cream" on #pc-blocks-charts', () => {
      assert.ok(
        /id="pc-blocks-charts"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '#pc-blocks-charts must declare data-pc-paper="sheet" and data-pc-tone="cream"'
      );
    });

    it('should have data-pc-paper="sheet" and data-pc-tone="cream" on #sd-blocks-viewport', () => {
      assert.ok(
        /id="sd-blocks-viewport"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '#sd-blocks-viewport must declare data-pc-paper="sheet" and data-pc-tone="cream"'
      );
    });

    it('should configure all 6 block containers with data-pc-paper="sheet" and respective pastel tones', () => {
      const blocks = [
        { id: 'block-admin-dashboard', tone: 'cream' },
        { id: 'block-auth', tone: 'peach' },
        { id: 'block-settings', tone: 'sky' },
        { id: 'block-ecommerce', tone: 'mint' },
        { id: 'block-pricing', tone: 'lavender' },
        { id: 'block-dropzone', tone: 'sand' },
      ];

      for (const block of blocks) {
        const regex = new RegExp(`id="${block.id}"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="${block.tone}"`);
        assert.ok(
          regex.test(indexHtml),
          `#${block.id} must declare data-pc-paper="sheet" and data-pc-tone="${block.tone}"`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. #pc-charts-section & 12 Master Chart Cards
  // -------------------------------------------------------------------------
  describe('#pc-charts-section & 12 Master Chart Cards', () => {
    it('should have data-pc-paper="sheet" and data-pc-tone="cream" on #pc-charts-section', () => {
      assert.ok(
        /id="pc-charts-section"[^>]*data-pc-paper="sheet"[^>]*data-pc-tone="cream"/s.test(indexHtml),
        '#pc-charts-section must declare data-pc-paper="sheet" and data-pc-tone="cream"'
      );
    });

    it('should configure all 12 chart cards with data-pc-paper="sheet" and category pastel tones', () => {
      const expectedCharts = [
        { num: '01', type: 'area', cat: 'trends', tone: 'mint' },
        { num: '02', type: 'bar', cat: 'comparisons', tone: 'peach' },
        { num: '03', type: 'line', cat: 'trends', tone: 'lavender' },
        { num: '04', type: 'donut', cat: 'comparisons', tone: 'sand' },
        { num: '05', type: 'radar', cat: 'gauges', tone: 'sky' },
        { num: '06', type: 'radial', cat: 'gauges', tone: 'mint' },
        { num: '07', type: 'heatmap', cat: 'distributions', tone: 'peach' },
        { num: '08', type: 'candlestick', cat: 'trends', tone: 'cream' },
        { num: '09', type: 'bubble', cat: 'distributions', tone: 'lavender' },
        { num: '10', type: 'funnel', cat: 'comparisons', tone: 'sand' },
        { num: '11', type: 'treemap', cat: 'comparisons', tone: 'sky' },
        { num: '12', type: 'gauge', cat: 'gauges', tone: 'mint' },
      ];

      for (const chart of expectedCharts) {
        const needle = `data-chart-category="${chart.cat}" data-pc-paper="sheet" data-pc-tone="${chart.tone}"`;
        assert.ok(
          indexHtml.includes(needle),
          `Chart ${chart.num} (${chart.type}) must declare category="${chart.cat}", data-pc-paper="sheet", data-pc-tone="${chart.tone}"`
        );
      }
    });

    it('should feature SVG dashed stitching line (stroke-dasharray="3 3") in each of the 12 chart cards', () => {
      const stitchMatches = indexHtml.match(/class="pc-chart-stitch-plate"[^>]*>[\s\S]*?stroke-dasharray="3 3"/g);
      assert.ok(stitchMatches, 'Chart stitching lines must be present in index.html');
      assert.strictEqual(
        stitchMatches.length,
        12,
        'Exactly 12 chart cards must feature .pc-chart-stitch-plate with stroke-dasharray="3 3"'
      );
    });
  });

  // -------------------------------------------------------------------------
  // 6. Strict Exclusion and AGENTS.md Hard Rules
  // -------------------------------------------------------------------------
  describe('AGENTS.md Hard Rules & Untouched Strict Exclusions', () => {
    it('should maintain strict exclusion sections untouched and present', () => {
      assert.ok(indexHtml.includes('id="icon-gallery"'), '#icon-gallery must remain intact');
      assert.ok(indexHtml.includes('id="bg-library"'), '#bg-library must remain intact');
      assert.ok(existsSync(join(projectRoot, 'icon-simulator.html')), 'icon-simulator.html must remain intact');
      assert.ok(indexHtml.includes('pc-inline-icon'), '.pc-inline-icon classes must remain intact');
      assert.ok(indexHtml.includes('data-bg-shape'), 'data-bg-shape attributes must remain intact');
    });

    it('should enforce Flaticon UIcons fi fi-rr-* standard', () => {
      assert.ok(indexHtml.includes('fi fi-rr-'), 'index.html must maintain fi fi-rr-* standard');
    });

    it('should enforce Anti-Fingernail rule (no asymmetric border-l-4 rounded)', () => {
      assert.strictEqual(
        indexHtml.includes('border-l-4 rounded'),
        false,
        'Anti-fingernail rule: border-l-4 rounded is strictly prohibited'
      );
    });

    it('should enforce Korean typography standards (break-keep, text-balance, no break-all)', () => {
      assert.ok(indexHtml.includes('break-keep'), 'break-keep typography must be used');
      assert.strictEqual(
        indexHtml.includes('break-all'),
        false,
        'break-all is strictly prohibited'
      );
    });
  });
});
