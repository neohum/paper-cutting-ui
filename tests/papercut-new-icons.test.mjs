import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');

const NEW_ICONS = [
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

test('NEW-ICONS-1: papercut-icons.js registers all 12 requested kirigami papercut icons', () => {
  const js = read('papercut-icons.js');

  for (const id of NEW_ICONS) {
    assert.equal(
      js.includes(`"id": "${id}"`),
      true,
      `papercut-icons.js must register icon with id: ${id}`
    );
  }
});

test('NEW-ICONS-2: all 12 newly added icons conform strictly to 3-Tier SVG papercut kirigami standards', () => {
  const js = read('papercut-icons.js');

  for (const id of NEW_ICONS) {
    // 1. Defs filters
    assert.equal(
      js.includes(`id=\\"ps-${id}\\"`),
      true,
      `Icon ${id} must contain defs filter ps-${id}`
    );
    assert.equal(
      js.includes(`id=\\"ps-${id}-base\\"`),
      true,
      `Icon ${id} must contain defs filter ps-${id}-base`
    );
    assert.equal(
      js.includes(`id=\\"ps-${id}-mid\\"`),
      true,
      `Icon ${id} must contain defs filter ps-${id}-mid`
    );
    assert.equal(
      js.includes(`id=\\"ps-${id}-top\\"`),
      true,
      `Icon ${id} must contain defs filter ps-${id}-top`
    );

    // 2. Drop shadow filter values
    assert.equal(
      js.includes(`dx=\\"1.11\\" dy=\\"1.11\\"`),
      true,
      `Icon ${id} must contain feDropShadow dx=1.11 dy=1.11`
    );
    assert.equal(
      js.includes(`dx=\\"3.18\\" dy=\\"3.18\\"`),
      true,
      `Icon ${id} must contain feDropShadow dx=3.18 dy=3.18`
    );
    assert.equal(
      js.includes(`dx=\\"-0.51\\" dy=\\"-0.51\\"`),
      true,
      `Icon ${id} must contain pure white rim feDropShadow dx=-0.51 dy=-0.51`
    );
  }
});

test('NEW-ICONS-3: index.html has replaced fi-rr-interrogation with data-icon="help-circle"', () => {
  const html = read('index.html');
  assert.equal(
    html.includes('fi-rr-interrogation'),
    false,
    'index.html must not contain fi-rr-interrogation'
  );
  assert.equal(
    html.includes('data-icon="help-circle"'),
    true,
    'index.html must contain data-icon="help-circle"'
  );
});

test('NEW-ICONS-4: papercut-svg-primitives.html icons all exist in papercut-icons.js', () => {
  const html = read('papercut-svg-primitives.html');
  const js = read('papercut-icons.js');

  const matches = [...html.matchAll(/data-icon="([^"]+)"/g)].map(m => m[1]);
  assert.ok(matches.length > 0, 'papercut-svg-primitives.html must have data-icon usages');

  for (const iconId of matches) {
    const hasDirect = js.includes(`"id": "${iconId}"`);
    const hasAlias = js.includes(`"${iconId}":`);
    assert.ok(
      hasDirect || hasAlias,
      `data-icon="${iconId}" in papercut-svg-primitives.html must be defined or aliased in papercut-icons.js`
    );
  }
});

test('NEW-ICONS-5: node execution simulation verifies window.getPapercutIconSvg and template cloning', () => {
  const js = read('papercut-icons.js');

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

  assert.ok(context.window.PAPERCUT_ICONS, 'window.PAPERCUT_ICONS must be defined');
  assert.ok(typeof context.window.getPapercutIconSvg === 'function', 'window.getPapercutIconSvg must be a function');

  // Verify all 12 icons return non-empty SVG strings with unique instance IDs
  for (const id of NEW_ICONS) {
    const svg1 = context.window.getPapercutIconSvg(id);
    assert.ok(svg1 && svg1.length > 50, `getPapercutIconSvg("${id}") must return valid SVG markup`);
    assert.ok(svg1.includes('<svg'), `Icon ${id} markup must include <svg`);
    assert.ok(svg1.includes('data-layer="base"'), `Icon ${id} markup must include base layer`);
    assert.ok(svg1.includes('data-layer="mid"'), `Icon ${id} markup must include mid layer`);
    assert.ok(svg1.includes('data-layer="top"'), `Icon ${id} markup must include top layer`);

    // Verify ID uniquification across separate instances
    const svg2 = context.window.getPapercutIconSvg(id);
    assert.notEqual(svg1, svg2, `Sequential calls to getPapercutIconSvg("${id}") must generate unique instance IDs to prevent SVG filter collisions`);
  }
});
