import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('PaperCut UI: Quick Installation & Copy-Paste Workflow', () => {
  const pkgPath = path.join(rootDir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const indexPath = path.join(rootDir, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');

  const primitivesPath = path.join(rootDir, 'papercut-svg-primitives.html');
  const primitivesHtml = fs.readFileSync(primitivesPath, 'utf8');

  const cssPath = path.join(rootDir, 'papercut.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  const jsPath = path.join(rootDir, 'papercut.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  describe('1. Package Configuration & Exports', () => {
    it('should configure name, main, module, style and bin in package.json', () => {
      assert.equal(pkg.name, 'paper-cutting-ui');
      assert.equal(pkg.main, 'papercut.js');
      assert.equal(pkg.module, 'papercut.js');
      assert.equal(pkg.style, 'papercut.css');
      assert.ok(pkg.bin && (pkg.bin['paper-cutting-ui'] || pkg.bin['papercut-ui']), 'Must provide bin');
    });

    it('should configure exports for CSS and submodules', () => {
      assert.ok(pkg.exports, 'package.json must declare exports');
      assert.ok(pkg.exports['.'], 'Must export root .');
      assert.ok(pkg.exports['./css'], 'Must export ./css');
      assert.ok(pkg.exports['./primitives'], 'Must export ./primitives');
      assert.ok(pkg.exports['./icons'], 'Must export ./icons');
    });
  });

  describe('2. CLI Generator (bin/papercut.mjs)', () => {
    const cliPath = path.join(rootDir, 'bin', 'papercut.mjs');

    it('should exist and be executable', () => {
      assert.ok(fs.existsSync(cliPath), 'bin/papercut.mjs must exist');
    });

    it('should support "list" command and output available components', () => {
      const output = execSync(`node ${cliPath} list`, { encoding: 'utf8' });
      assert.ok(output.includes('button'), 'list must include button');
      assert.ok(output.includes('input'), 'list must include input');
      assert.ok(output.includes('card'), 'list must include card');
      assert.ok(output.includes('switch'), 'list must include switch');
      assert.ok(output.includes('checkbox'), 'list must include checkbox');
    });

    it('should support "snippet" command and output copyable HTML', () => {
      const btnSnippet = execSync(`node ${cliPath} snippet button`, { encoding: 'utf8' });
      assert.ok(btnSnippet.includes('pc-btn--mint'), 'button snippet must include pc-btn--mint');
      assert.ok(btnSnippet.includes('pc-btn--ticket'), 'button snippet must include pc-btn--ticket');

      const cardSnippet = execSync(`node ${cliPath} snippet card`, { encoding: 'utf8' });
      assert.ok(cardSnippet.includes('pc-card'), 'card snippet must include pc-card');
    });
  });

  describe('3. Showcase Quick Install & Copy-Paste Section (index.html)', () => {
    it('should contain #quick-start section with title and badges', () => {
      assert.ok(indexHtml.includes('id="quick-start"'), 'index.html must have #quick-start section');
      assert.ok(indexHtml.includes('초간단 설치 &amp; 복사 붙여넣기 가이드') || indexHtml.includes('초간단 설치 & 복사 붙여넣기 가이드'), 'Must have heading');
      assert.ok(indexHtml.includes('pc-copy-deck-card'), 'Must contain copy deck cards');
    });

    it('should provide full HTML starter template with copy button', () => {
      assert.ok(indexHtml.includes('id="pc-starter-template-code"'), 'Must have starter template element');
      assert.ok(indexHtml.includes('data-copy-target="pc-starter-template-code"'), 'Must have copy button for starter template');
      assert.ok(indexHtml.includes('전체 HTML 템플릿 복사'), 'Must have Korean copy label');
      assert.ok(indexHtml.includes('https://cdn.jsdelivr.net/gh/neohum/paper-cutting-ui@main/papercut.css'), 'Must provide jsDelivr CDN CSS link in starter');
      assert.ok(indexHtml.includes('CDN 태그 복사'), 'Must have CDN tag copy button');
    });

    it('should contain copy cards for core primitives', () => {
      assert.ok(indexHtml.includes('snippet-code-btn'), 'Must have button snippet');
      assert.ok(indexHtml.includes('snippet-code-input'), 'Must have input snippet');
      assert.ok(indexHtml.includes('snippet-code-card'), 'Must have card snippet');
      assert.ok(indexHtml.includes('snippet-code-switch'), 'Must have switch snippet');
      assert.ok(indexHtml.includes('snippet-code-checkbox'), 'Must have checkbox snippet');
      assert.ok(indexHtml.includes('snippet-code-toast'), 'Must have toast snippet');
    });

    it('should provide CSS vs JS installation guide info card', () => {
      assert.ok(indexHtml.includes('CSS 경로만 있으면 되나요'), 'Must contain CSS vs JS guide title');
      assert.ok(indexHtml.includes('CSS vs JS 필요 여부 가이드'), 'Must contain badge');
      assert.ok(indexHtml.includes('CSS만 필요'), 'Must explain CSS-only usage for styling');
    });

    it('should have a navigation link to #quick-start in sidebar', () => {
      assert.ok(indexHtml.includes('href="#quick-start"'), 'Sidebar must link to #quick-start');
    });

    it('should register quick-start in papercut-sidebar.js SECTIONS array for multi-page router', () => {
      const sidebarJs = fs.readFileSync(path.join(rootDir, 'papercut-sidebar.js'), 'utf8');
      assert.ok(sidebarJs.includes("id: 'quick-start'"), 'papercut-sidebar.js SECTIONS must include quick-start');
    });
  });

  describe('4. Dedicated Primitives Showcase (papercut-svg-primitives.html)', () => {
    it('should have quick install snippet banner', () => {
      assert.ok(primitivesHtml.includes('1초 설치:'), 'Must have 1초 설치 label');
      assert.ok(primitivesHtml.includes('전체 CDN 태그 복사'), 'Must have copy CDN tags button');
    });

    it('should have SVG copy buttons across primitive cards', () => {
      assert.ok(primitivesHtml.includes('data-copy-html-of="btn-container-1"'), 'Button card must have copy button');
      assert.ok(primitivesHtml.includes('data-copy-html-of="switch-container-1"'), 'Switch card must have copy button');
      assert.ok(primitivesHtml.includes('data-copy-html-of="checkbox-container-1"'), 'Checkbox card must have copy button');
      assert.ok(primitivesHtml.includes('data-copy-html-of="card-container"'), 'Card card must have copy button');
    });

    it('should link papercut.js to enable copy click handling', () => {
      assert.ok(primitivesHtml.includes('<script src="papercut.js"></script>'), 'Must link papercut.js');
    });
  });

  describe('5. Interactive Copy Engine & CSS Styles', () => {
    it('should export window.copyPaperCutSnippet in papercut.js', () => {
      assert.ok(js.includes('copyPaperCutSnippet'), 'papercut.js must define copyPaperCutSnippet');
      assert.ok(js.includes('copyTextToClipboard'), 'papercut.js must define copyTextToClipboard');
    });

    it('should define .pc-copy-code-btn and .pc-code-preview in papercut.css', () => {
      assert.ok(css.includes('.pc-copy-code-btn'), 'papercut.css must style .pc-copy-code-btn');
      assert.ok(css.includes('.pc-code-preview'), 'papercut.css must style .pc-code-preview');
      assert.ok(css.includes('.pc-copy-deck-grid'), 'papercut.css must style .pc-copy-deck-grid');
    });
  });
});
