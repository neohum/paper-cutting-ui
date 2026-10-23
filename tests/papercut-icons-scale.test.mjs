import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|[\u{2705}]|[\u{2714}]|[\u{2713}]|[\u{2716}]|[\u{274C}]|[\u{2728}]/gu;

test('ICONS-1: index.html has zero raw text emojis in UI layout', () => {
  const html = read('index.html');
  const matches = html.match(EMOJI_REGEX) || [];
  assert.equal(matches.length, 0, `Expected 0 emojis in index.html, found ${matches.length}: ${matches.join(',')}`);
});

test('ICONS-2: papercut-svg-primitives.html has zero emojis and zero external flaticon webfont links', () => {
  const html = read('papercut-svg-primitives.html');
  const emojis = html.match(EMOJI_REGEX) || [];
  assert.equal(emojis.length, 0, `Expected 0 emojis in papercut-svg-primitives.html, found ${emojis.length}`);
  
  assert.equal(html.includes('cdn-uicons.flaticon.com'), false, 'Should not reference external flaticon CDN webfont');
  assert.equal(html.includes('papercut-icons.js'), true, 'Should include standalone papercut-icons.js');
});

test('ICONS-3: papercut-icons.js registers newly crafted vintage newspaper icon', () => {
  const js = read('papercut-icons.js');
  assert.equal(js.includes('"id": "newspaper"'), true, 'papercut-icons.js must register newspaper icon');
  assert.equal(js.includes('id=\\"ps-newspaper\\"'), true, 'newspaper icon must contain papercut filter definitions');
  assert.equal(js.includes('data-layer=\\"base\\"'), true, 'must contain multi-layer papercut layers');
});

test('ICONS-4: icon sizing standards enlarged to guarantee 3D papercraft depth (min 22px)', () => {
  const uiCss = read('papercut-ui.css');
  const pcCss = read('papercut.css');

  // Verify enlarged dimensions in papercut-ui.css
  assert.equal(uiCss.includes('width: 22px !important'), true, 'is-xs must be at least 22px');
  assert.equal(uiCss.includes('width: 26px !important'), true, 'is-sm must be at least 26px');
  assert.equal(uiCss.includes('width: 34px !important'), true, 'is-md must be at least 34px');
  assert.equal(uiCss.includes('width: 44px !important'), true, 'is-lg must be at least 44px');
  assert.equal(uiCss.includes('width: 58px !important'), true, 'is-xl must be at least 58px');

  // Verify enlarged dimensions in papercut.css
  assert.equal(pcCss.includes('width: 22px !important'), true, 'is-xs in papercut.css must be 22px');
  assert.equal(pcCss.includes('width: 26px !important'), true, 'is-sm in papercut.css must be 26px');
  assert.equal(pcCss.includes('width: 34px !important'), true, 'is-md in papercut.css must be 34px');
});

test('ICONS-5: papercut-svg-primitives.js has replaced unicode checks with check-v papercut-icon', () => {
  const js = read('papercut-svg-primitives.js');
  assert.equal(js.includes("data-icon=\"check-v\""), true, 'Must use papercut-icon check-v');
  assert.equal(js.includes("textContent = '✓'"), false, 'Must not assign unicode check character');
});
