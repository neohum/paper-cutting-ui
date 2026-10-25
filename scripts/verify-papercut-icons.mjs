/**
 * Standalone Verification Script for PaperCut 3D Kirigami Icons
 * Verifies 100% 3-Tier SVG standards, defs filters, layers, hydration and index.html compliance.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const REQUIRED_ICONS = [
  'chevron-right',
  'chevron-down',
  'chevron-left',
  'chevron-up',
  'star',
  'box',
  'stamp',
  'shapes',
  'disc',
  'menu',
  'folders',
  'help-circle'
];

console.log('=== PaperCut Icons 3D Vector Verification ===\n');

// 1. Check papercut-icons.js content
const iconsJsPath = path.join(rootDir, 'papercut-icons.js');
const iconsJs = fs.readFileSync(iconsJsPath, 'utf8');

let passedCount = 0;
let totalChecks = 0;

function check(desc, cond) {
  totalChecks++;
  if (cond) {
    passedCount++;
    console.log(`  [PASS] ${desc}`);
  } else {
    console.error(`  [FAIL] ${desc}`);
  }
}

console.log('1. Checking Icon Registration & 3-Tier Specs:');
for (const id of REQUIRED_ICONS) {
  check(`Icon '${id}' registered in window.PAPERCUT_ICONS`, iconsJs.includes(`"id": "${id}"`));
  check(`Icon '${id}' has filter defs ps-${id}`, iconsJs.includes(`id=\\"ps-${id}\\"`));
  check(`Icon '${id}' has filter defs ps-${id}-base`, iconsJs.includes(`id=\\"ps-${id}-base\\"`));
  check(`Icon '${id}' has filter defs ps-${id}-mid`, iconsJs.includes(`id=\\"ps-${id}-mid\\"`));
  check(`Icon '${id}' has filter defs ps-${id}-top`, iconsJs.includes(`id=\\"ps-${id}-top\\"`));
}

// 2. Check VM evaluation & SVG generation
console.log('\n2. Testing in-memory VM DOM hydration & ID uniquification:');
const context = {
  window: {
    addEventListener: () => {},
    removeEventListener: () => {}
  },
  document: {
    addEventListener: () => {},
    createElement: (tag) => ({
      tagName: tag.toUpperCase(),
      content: { cloneNode: () => ({ querySelectorAll: () => [], childNodes: [] }) },
      attributes: [],
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      setAttribute: () => {},
      getAttribute: () => null,
      appendChild: () => {}
    }),
    querySelectorAll: () => [],
    getElementById: () => null
  },
  navigator: { clipboard: {} },
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {},
  setTimeout: () => 0
};
context.window.window = context.window;
context.window.document = context.document;

vm.createContext(context);
vm.runInContext(iconsJs, context);

check('window.PAPERCUT_ICONS array loaded', Array.isArray(context.window.PAPERCUT_ICONS));
check(`Total registered icons count >= 631 (actual: ${context.window.PAPERCUT_ICONS?.length})`, (context.window.PAPERCUT_ICONS?.length || 0) >= 631);

for (const id of REQUIRED_ICONS) {
  const svg1 = context.window.getPapercutIconSvg(id);
  const svg2 = context.window.getPapercutIconSvg(id);
  check(`Icon '${id}' getPapercutIconSvg returns valid SVG markup`, Boolean(svg1 && svg1.includes('<svg') && svg1.includes('data-layer="base"')));
  check(`Icon '${id}' generates unique IDs on successive calls`, svg1 !== svg2);
}

// 3. Check index.html compliance
console.log('\n3. Checking index.html line 1923 replacement:');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

check('Zero raw fi-rr-interrogation in index.html', !indexHtml.includes('fi-rr-interrogation'));
check('Contains <span class="pc-inline-icon" data-icon="help-circle"></span>', indexHtml.includes('data-icon="help-circle"'));

console.log(`\n=== Verification Complete: ${passedCount}/${totalChecks} checks passed ===\n`);
if (passedCount !== totalChecks) {
  process.exit(1);
}
