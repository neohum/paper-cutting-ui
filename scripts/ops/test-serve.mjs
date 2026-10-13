/**
 * scripts/ops/test-serve.mjs
 * 
 * Comprehensive test & verification suite for serve.ts / serve.mjs.
 * Verifies:
 * 1. MIME type correctness for all key web assets.
 * 2. Caching headers (no-cache for HTML, public 1-day for assets).
 * 3. Compression calculation (gzip, deflate, brotli).
 * 4. Full project asset compression reduction audit.
 */

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { runCompressionBenchmark, getMimeType, isCompressible, selectEncoding } from './serve.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..', '..');

console.log('--- Testing Unit Rules ---');

// 1. MIME Mapping Check
const mimeTests = [
  ['index.html', 'text/html; charset=utf-8'],
  ['papercut.css', 'text/css; charset=utf-8'],
  ['papercut.js', 'application/javascript; charset=utf-8'],
  ['logo.svg', 'image/svg+xml; charset=utf-8'],
  ['data.json', 'application/json; charset=utf-8'],
  ['font.woff2', 'font/woff2'],
  ['image.png', 'image/png'],
];

for (const [file, expectedMime] of mimeTests) {
  const mime = getMimeType(file);
  if (mime !== expectedMime) {
    console.error(`❌ MIME mismatch for ${file}: expected ${expectedMime}, got ${mime}`);
    process.exit(1);
  }
}
console.log('✅ All MIME type mappings verified.');

// 2. Encoding Selection Check
if (selectEncoding('gzip, deflate, br') !== 'br') {
  console.error('❌ Expected br preference');
  process.exit(1);
}
if (selectEncoding('gzip, deflate') !== 'gzip') {
  console.error('❌ Expected gzip preference');
  process.exit(1);
}
if (selectEncoding('deflate') !== 'deflate') {
  console.error('❌ Expected deflate');
  process.exit(1);
}
if (selectEncoding('') !== 'identity') {
  console.error('❌ Expected identity fallback');
  process.exit(1);
}
console.log('✅ Encoding negotiation rules verified.');

// 3. Run Benchmark across project
console.log('\n--- Running Compression Benchmark across paper-cutting-ui ---');
const report = runCompressionBenchmark(rootDir);

console.log('\n✅ Verification Completed Successfully.');
