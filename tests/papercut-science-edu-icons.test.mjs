import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');

// 1. 과학 실험도구 (12종)
const SCIENCE_ICONS = [
  'beaker-glass',
  'flask-conical',
  'test-tube-rack',
  'alcohol-burner',
  'dropper-pipette',
  'optical-microscope',
  'horseshoe-magnet',
  'pan-balance',
  'lab-thermometer',
  'glass-prism',
  'tuning-fork',
  'spring-scale'
];

// 2. 전 교과 도구 (54종)
const EDU_ICONS = [
  // 수학 (8종)
  'set-square',
  'protractor',
  'drafting-compass',
  'wooden-ruler',
  'abacus-counting',
  'fraction-circles',
  'geometric-solids',
  'graph-paper-pad',
  // 국어/언어 (6종)
  'fountain-pen',
  'manuscript-paper',
  'quill-pen',
  'dictionary-book',
  'speech-bubbles',
  'reading-stand',
  // 사회/역사/지리 (6종)
  'desk-globe',
  'folded-map',
  'magnetic-compass',
  'comb-pattern-pottery',
  'scales-justice',
  'historic-scroll',
  // 미술 (6종)
  'artist-palette',
  'paint-brushes',
  'paint-tube-squeeze',
  'carving-chisel',
  'easel-canvas',
  'pottery-wheel',
  // 음악 (6종)
  'metronome-tempo',
  'recorder-flute',
  'janggu-drum',
  'tambourine-percussion',
  'harmonica-metal',
  'piano-keyboard',
  // 체육 (6종)
  'pe-whistle',
  'pe-stopwatch',
  'relay-baton',
  'jump-rope',
  'soccer-ball',
  'traffic-cone',
  // 실과/기술가정 (6종)
  'sewing-needle-thread',
  'gardening-trowel',
  'measuring-tape',
  'craft-handsaw',
  'chef-whisk',
  'smart-plug',
  // 정보/컴퓨팅 (6종)
  'coding-block-puzzle',
  'robot-chassis',
  'circuit-board-chip',
  'binary-matrix',
  'flowchart-diamonds',
  'ethernet-lan-cable',
  // 도덕/보건 (4종)
  'candle-conscience',
  'caring-hands-heart',
  'stethoscope-medical',
  'first-aid-kit'
];

const ALL_NEW_ICONS = [...SCIENCE_ICONS, ...EDU_ICONS];

function setupVmContext(js) {
  const context = {
    window: {
      addEventListener: () => {},
      removeEventListener: () => {}
    },
    document: {
      addEventListener: () => {},
      createElement: (tag) => {
        const el = {
          tagName: tag.toUpperCase(),
          content: {
            cloneNode: () => ({
              querySelectorAll: () => [],
              childNodes: []
            })
          },
          attributes: [],
          classList: { add: () => {}, remove: () => {}, contains: () => false },
          setAttribute: () => {},
          getAttribute: () => null,
          appendChild: () => {}
        };
        return el;
      },
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
  vm.runInContext(js, context);
  return context;
}

test('SCI-EDU-1: Total new science and education icons count is exactly 66', () => {
  assert.equal(SCIENCE_ICONS.length, 12, 'Must have exactly 12 science lab tools');
  assert.equal(EDU_ICONS.length, 54, 'Must have exactly 54 curriculum education tools');
  assert.equal(ALL_NEW_ICONS.length, 66, 'Must have exactly 66 new icons in total');
});

test('SCI-EDU-2: papercut-icons.js registers all 66 new science and curriculum tools', () => {
  const js = read('papercut-icons.js');

  for (const id of ALL_NEW_ICONS) {
    assert.equal(
      js.includes(`"id": "${id}"`),
      true,
      `papercut-icons.js must register icon with id: ${id}`
    );
  }
});

test('SCI-EDU-3: All 66 icons adhere strictly to 3-tier SVG papercut kirigami standards', () => {
  const js = read('papercut-icons.js');

  for (const id of ALL_NEW_ICONS) {
    // 1. Defs filters
    assert.equal(js.includes(`id=\\"ps-${id}\\"`), true, `Icon ${id} must contain defs filter ps-${id}`);
    assert.equal(js.includes(`id=\\"ps-${id}-base\\"`), true, `Icon ${id} must contain defs filter ps-${id}-base`);
    assert.equal(js.includes(`id=\\"ps-${id}-mid\\"`), true, `Icon ${id} must contain defs filter ps-${id}-mid`);
    assert.equal(js.includes(`id=\\"ps-${id}-top\\"`), true, `Icon ${id} must contain defs filter ps-${id}-top`);

    // 2. Drop shadow filter values
    assert.equal(js.includes(`dx=\\"1.11\\" dy=\\"1.11\\"`), true, `Icon ${id} must contain feDropShadow dx=1.11 dy=1.11`);
    assert.equal(js.includes(`dx=\\"3.18\\" dy=\\"3.18\\"`), true, `Icon ${id} must contain feDropShadow dx=3.18 dy=3.18`);
    assert.equal(js.includes(`dx=\\"-0.51\\" dy=\\"-0.51\\"`), true, `Icon ${id} must contain pure white rim feDropShadow dx=-0.51 dy=-0.51`);

    // 3. Multi-layer data-layer separation
    assert.equal(js.includes(`data-layer=\\"base\\"`), true, `Icon ${id} must contain base layer`);
    assert.equal(js.includes(`data-layer=\\"mid\\"`), true, `Icon ${id} must contain mid layer`);
    assert.equal(js.includes(`data-layer=\\"top\\"`), true, `Icon ${id} must contain top layer`);
  }
});

test('SCI-EDU-4: All 66 icons assign proper categories: science for lab tools, education for subject tools', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);
  const icons = context.window.PAPERCUT_ICONS || [];
  const iconMap = new Map(icons.map(i => [i.id, i]));

  for (const id of SCIENCE_ICONS) {
    const icon = iconMap.get(id);
    assert.ok(icon, `Science icon ${id} must exist in PAPERCUT_ICONS`);
    assert.equal(icon.category, 'science', `Science icon ${id} must have category "science"`);
  }

  for (const id of EDU_ICONS) {
    const icon = iconMap.get(id);
    assert.ok(icon, `Education icon ${id} must exist in PAPERCUT_ICONS`);
    assert.equal(icon.category, 'education', `Education icon ${id} must have category "education"`);
  }
});

test('SCI-EDU-5: getPapercutIconSvg returns valid unique SVGs with 3-tier layers for all 66 icons', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);

  for (const id of ALL_NEW_ICONS) {
    const svg1 = context.window.getPapercutIconSvg(id);
    assert.ok(svg1 && svg1.length > 50, `getPapercutIconSvg("${id}") must return valid SVG`);
    assert.ok(svg1.includes('viewBox="0 0 64 64"'), `Icon ${id} must have viewBox="0 0 64 64"`);
    assert.ok(svg1.includes('data-layer="base"'), `Icon ${id} must contain base layer`);
    assert.ok(svg1.includes('data-layer="mid"'), `Icon ${id} must contain mid layer`);
    assert.ok(svg1.includes('data-layer="top"'), `Icon ${id} must contain top layer`);

    // Must NOT have background box rects (freestanding kirigami)
    assert.ok(!svg1.includes('width="50" height="50"'), `Icon ${id} must NOT have background box 50x50 rect`);
    assert.ok(!svg1.includes('x="7" y="7"'), `Icon ${id} must NOT have background box origin x=7 y=7`);

    // Sequential calls generate unique IDs
    const svg2 = context.window.getPapercutIconSvg(id);
    assert.notEqual(svg1, svg2, `getPapercutIconSvg("${id}") sequential calls must generate unique IDs`);
  }
});

test('SCI-EDU-6: getIconMap resolves all 66 new icons by ID, nameKo, and tags', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);
  const map = context.window.getIconMap();

  assert.ok(map && typeof map.get === 'function', 'getIconMap() must return a Map instance');

  for (const id of ALL_NEW_ICONS) {
    const item = map.get(id);
    assert.ok(item, `getIconMap().get("${id}") must resolve the icon`);
    assert.equal(item.id, id, `Resolved icon must have id "${id}"`);

    // Korean name resolution
    assert.ok(item.nameKo, `Icon ${id} must have nameKo`);
    const resolvedByKo = map.get(item.nameKo);
    assert.ok(resolvedByKo, `Icon must resolve by nameKo "${item.nameKo}"`);
    assert.equal(resolvedByKo.id, id, `nameKo "${item.nameKo}" must map to id "${id}"`);
  }
});

test('SCI-EDU-7: Metadata and counts reflect 816 icons in papercut-icons.js and index.html', () => {
  const iconsJs = read('papercut-icons.js');
  const html = read('index.html');

  // papercut-icons.js
  assert.match(iconsJs, /Total Icons:\s*816/i, 'papercut-icons.js comment must specify Total Icons: 816');
  assert.match(iconsJs, /816\s*Standalone Layered Paper-Cut Icons/i, 'papercut-icons.js must state 816 icons');

  // index.html
  assert.match(html, /816개 아이콘/, 'index.html must display 816개 아이콘');
  assert.match(html, /전체 \(816\)/, 'index.html category pill must display 전체 (816)');
  assert.match(html, /816종/, 'index.html must reflect 816종 icon collection');
});
