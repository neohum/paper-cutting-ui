import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');

const ALL_NEW_ICONS = [
  // Digits (10)
  'digit-0', 'digit-1', 'digit-2', 'digit-3', 'digit-4',
  'digit-5', 'digit-6', 'digit-7', 'digit-8', 'digit-9',
  // Basic math (7)
  'symbol-plus', 'symbol-minus', 'symbol-multiply', 'symbol-divide',
  'symbol-equal', 'symbol-not-equal', 'symbol-percent',
  // Advanced math (16)
  'math-lim', 'math-sigma', 'math-integral', 'math-sqrt',
  'math-infinity', 'math-pi', 'math-delta', 'math-partial',
  'math-plus-minus', 'math-lte', 'math-gte', 'math-approx',
  'math-proportional', 'math-element', 'math-union', 'math-intersection',
  // Hangul 14 Consonants (14)
  'hangul-giyeok', 'hangul-nieun', 'hangul-digeut', 'hangul-rieul',
  'hangul-mieum', 'hangul-bieup', 'hangul-siot', 'hangul-ieung',
  'hangul-jieut', 'hangul-chieut', 'hangul-kieuk', 'hangul-tieut',
  'hangul-pieup', 'hangul-hieut',
  // Hangul Representative Syllables (6)
  'hangul-han', 'hangul-geul', 'hangul-kkot',
  'hangul-byeol', 'hangul-bom', 'hangul-kkum',
  // Special symbols (5)
  'symbol-star', 'symbol-heart', 'symbol-music', 'symbol-check', 'symbol-cross'
];

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

test('AC-5: papercut-icons.js registers all 58 math, hangul, digit, and special symbol icons with 3-tier filters', () => {
  const js = read('papercut-icons.js');

  assert.equal(ALL_NEW_ICONS.length, 58, 'Total new icons must be exactly 58');

  for (const id of ALL_NEW_ICONS) {
    // 1. Registered id check
    assert.equal(
      js.includes(`"id": "${id}"`),
      true,
      `papercut-icons.js must register icon with id: ${id}`
    );

    // 2. 3-tier defs filter checks
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

    // 3. 3-Tier Layer attributes check
    assert.equal(
      js.includes(`data-layer=\\"base\\"`),
      true,
      `Icon ${id} must contain base layer`
    );
    assert.equal(
      js.includes(`data-layer=\\"mid\\"`),
      true,
      `Icon ${id} must contain mid layer`
    );
    assert.equal(
      js.includes(`data-layer=\\"top\\"`),
      true,
      `Icon ${id} must contain top layer`
    );
  }
});

test('AC-6: getIconMap resolves direct symbols, hangul, and aliases accurately', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);
  const map = context.window.getIconMap();

  assert.ok(map && typeof map.get === 'function', 'getIconMap() must return a Map instance');

  // Math direct symbols
  assert.equal(map.get('+')?.id, 'symbol-plus', '+ must map to symbol-plus');
  assert.equal(map.get('-')?.id, 'symbol-minus', '- must map to symbol-minus');
  assert.equal(map.get('×')?.id, 'symbol-multiply', '× must map to symbol-multiply');
  assert.equal(map.get('*')?.id, 'symbol-multiply', '* must map to symbol-multiply');
  assert.equal(map.get('÷')?.id, 'symbol-divide', '÷ must map to symbol-divide');
  assert.equal(map.get('/')?.id, 'symbol-divide', '/ must map to symbol-divide');
  assert.equal(map.get('=')?.id, 'symbol-equal', '= must map to symbol-equal');
  assert.equal(map.get('≠')?.id, 'symbol-not-equal', '≠ must map to symbol-not-equal');
  assert.equal(map.get('!=')?.id, 'symbol-not-equal', '!= must map to symbol-not-equal');
  assert.equal(map.get('%')?.id, 'symbol-percent', '% must map to symbol-percent');

  // Digits 0-9
  for (let d = 0; d <= 9; d++) {
    assert.equal(map.get(String(d))?.id, `digit-${d}`, `"${d}" must map to digit-${d}`);
  }

  // Advanced math
  assert.equal(map.get('lim')?.id, 'math-lim', 'lim must map to math-lim');
  assert.equal(map.get('리미트')?.id, 'math-lim', '리미트 must map to math-lim');
  assert.equal(map.get('sigma')?.id, 'math-sigma', 'sigma must map to math-sigma');
  assert.equal(map.get('시그마')?.id, 'math-sigma', '시그마 must map to math-sigma');
  assert.equal(map.get('∑')?.id, 'math-sigma', '∑ must map to math-sigma');
  assert.equal(map.get('integral')?.id, 'math-integral', 'integral must map to math-integral');
  assert.equal(map.get('적분')?.id, 'math-integral', '적분 must map to math-integral');
  assert.equal(map.get('∫')?.id, 'math-integral', '∫ must map to math-integral');
  assert.equal(map.get('sqrt')?.id, 'math-sqrt', 'sqrt must map to math-sqrt');
  assert.equal(map.get('루트')?.id, 'math-sqrt', '루트 must map to math-sqrt');
  assert.equal(map.get('√')?.id, 'math-sqrt', '√ must map to math-sqrt');
  assert.equal(map.get('infinity')?.id, 'math-infinity', 'infinity must map to math-infinity');
  assert.equal(map.get('무한대')?.id, 'math-infinity', '무한대 must map to math-infinity');
  assert.equal(map.get('∞')?.id, 'math-infinity', '∞ must map to math-infinity');
  assert.equal(map.get('pi')?.id, 'math-pi', 'pi must map to math-pi');
  assert.equal(map.get('파이')?.id, 'math-pi', '파이 must map to math-pi');
  assert.equal(map.get('π')?.id, 'math-pi', 'π must map to math-pi');

  // Hangul consonants
  assert.equal(map.get('ㄱ')?.id, 'hangul-giyeok', 'ㄱ must map to hangul-giyeok');
  assert.equal(map.get('ㄴ')?.id, 'hangul-nieun', 'ㄴ must map to hangul-nieun');
  assert.equal(map.get('ㄷ')?.id, 'hangul-digeut', 'ㄷ must map to hangul-digeut');
  assert.equal(map.get('ㄹ')?.id, 'hangul-rieul', 'ㄹ must map to hangul-rieul');
  assert.equal(map.get('ㅁ')?.id, 'hangul-mieum', 'ㅁ must map to hangul-mieum');
  assert.equal(map.get('ㅂ')?.id, 'hangul-bieup', 'ㅂ must map to hangul-bieup');
  assert.equal(map.get('ㅅ')?.id, 'hangul-siot', 'ㅅ must map to hangul-siot');
  assert.equal(map.get('ㅇ')?.id, 'hangul-ieung', 'ㅇ must map to hangul-ieung');
  assert.equal(map.get('ㅈ')?.id, 'hangul-jieut', 'ㅈ must map to hangul-jieut');
  assert.equal(map.get('ㅊ')?.id, 'hangul-chieut', 'ㅊ must map to hangul-chieut');
  assert.equal(map.get('ㅋ')?.id, 'hangul-kieuk', 'ㅋ must map to hangul-kieuk');
  assert.equal(map.get('ㅌ')?.id, 'hangul-tieut', 'ㅌ must map to hangul-tieut');
  assert.equal(map.get('ㅍ')?.id, 'hangul-pieup', 'ㅍ must map to hangul-pieup');
  assert.equal(map.get('ㅎ')?.id, 'hangul-hieut', 'ㅎ must map to hangul-hieut');

  // Hangul syllables
  assert.equal(map.get('한')?.id, 'hangul-han', '한 must map to hangul-han');
  assert.equal(map.get('글')?.id, 'hangul-geul', '글 must map to hangul-geul');
  assert.equal(map.get('꽃')?.id, 'hangul-kkot', '꽃 must map to hangul-kkot');
  assert.equal(map.get('별')?.id, 'hangul-byeol', '별 must map to hangul-byeol');
  assert.equal(map.get('봄')?.id, 'hangul-bom', '봄 must map to hangul-bom');
  assert.equal(map.get('꿈')?.id, 'hangul-kkum', '꿈 must map to hangul-kkum');

  // Special symbols
  assert.equal(map.get('★')?.id, 'symbol-star', '★ must map to symbol-star');
  assert.equal(map.get('♥')?.id, 'symbol-heart', '♥ must map to symbol-heart');
  assert.equal(map.get('♪')?.id, 'symbol-music', '♪ must map to symbol-music');
  assert.equal(map.get('✓')?.id, 'symbol-check', '✓ must map to symbol-check');
  assert.equal(map.get('✕')?.id, 'symbol-cross', '✕ must map to symbol-cross');
});

test('AC-7: dynamic papercut glyph fallback engine generates 3D layered SVG for unregistered characters', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);

  assert.equal(typeof context.window.getPapercutGlyphSvg, 'function', 'window.getPapercutGlyphSvg must be exported');

  // 1. Direct call with unregistered character (e.g. '희')
  const glyphSvg = context.window.getPapercutGlyphSvg('희');
  assert.ok(glyphSvg && glyphSvg.length > 100, 'getPapercutGlyphSvg("희") must return valid SVG string');
  assert.ok(glyphSvg.includes('<svg'), 'Glyph SVG must include <svg');
  assert.ok(glyphSvg.includes('viewBox="0 0 64 64"'), 'Glyph SVG must have viewBox="0 0 64 64"');
  assert.ok(glyphSvg.includes('data-layer="base"'), 'Glyph SVG must include base layer');
  assert.ok(glyphSvg.includes('data-layer="mid"'), 'Glyph SVG must include mid layer');
  assert.ok(glyphSvg.includes('data-layer="top"'), 'Glyph SVG must include top layer');
  assert.ok(glyphSvg.includes('feDropShadow'), 'Glyph SVG must include feDropShadow 3D filters');
  assert.ok(glyphSvg.includes('희'), 'Glyph SVG must render the character text');

  // 2. getPapercutIconSvg fallback with unregistered character
  const fallbackSvg = context.window.getPapercutIconSvg('희');
  assert.ok(fallbackSvg && fallbackSvg.length > 100, 'getPapercutIconSvg("희") must fall back to dynamic glyph engine');
  assert.ok(fallbackSvg.includes('data-layer="base"'), 'Fallback SVG must have base layer');
  assert.ok(fallbackSvg.includes('data-layer="mid"'), 'Fallback SVG must have mid layer');
  assert.ok(fallbackSvg.includes('data-layer="top"'), 'Fallback SVG must have top layer');

  // 3. Another arbitrary symbol (e.g. 'Ω')
  const omegaSvg = context.window.getPapercutIconSvg('Ω');
  assert.ok(omegaSvg && omegaSvg.includes('Ω'), 'getPapercutIconSvg("Ω") must render Ω dynamically');
});

test('AC-8: getPapercutIconSvg returns valid unique SVGs for all 58 new icons', () => {
  const js = read('papercut-icons.js');
  const context = setupVmContext(js);

  for (const id of ALL_NEW_ICONS) {
    const svg1 = context.window.getPapercutIconSvg(id);
    assert.ok(svg1 && svg1.length > 50, `getPapercutIconSvg("${id}") must return valid SVG`);
    assert.ok(svg1.includes('data-layer="base"'), `Icon ${id} must contain base layer`);
    assert.ok(svg1.includes('data-layer="mid"'), `Icon ${id} must contain mid layer`);
    assert.ok(svg1.includes('data-layer="top"'), `Icon ${id} must contain top layer`);

    const svg2 = context.window.getPapercutIconSvg(id);
    assert.notEqual(svg1, svg2, `getPapercutIconSvg("${id}") sequential calls must generate unique IDs`);
  }
});
