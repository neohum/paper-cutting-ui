#!/usr/bin/env node
/**
 * scripts/ops/serve.ts
 * 
 * High-Performance HTTP Static Server with Compression & Smart Caching.
 * Zero external npm dependencies — uses pure Node.js built-in modules:
 * http, fs, path, zlib, url, crypto, stream.
 * 
 * Key Features:
 * 1. Multi-algorithm Compression: Gzip, Deflate, and Brotli based on client Accept-Encoding.
 * 2. Smart Browser Caching:
 *    - Static assets (.css, .js, .svg, .png, .jpg, .woff2, etc.):
 *      Cache-Control: public, max-age=86400, stale-while-revalidate=604800
 *    - HTML documents (.html):
 *      Cache-Control: no-cache, must-revalidate
 *    - ETag & Last-Modified 304 Not Modified validation for instant 0ms responses.
 * 3. Security: Path traversal protection, nosniff header, canonical directory redirects.
 * 4. Compression stats benchmark mode:
 *    - Run `node scripts/ops/serve.ts --stats` to inspect compression ratio across all project assets.
 * 
 * Usage:
 *   node scripts/ops/serve.ts               # Runs server on default port 8000
 *   PORT=8080 node scripts/ops/serve.ts    # Custom port
 *   node scripts/ops/serve.ts --port 8000  # CLI flag port
 *   node scripts/ops/serve.ts --stats      # Benchmark compression ratios
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Configuration & Constants
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root: two levels up from scripts/ops/
export const ROOT_DIR = process.env.SERVE_ROOT
  ? path.resolve(process.env.SERVE_ROOT)
  : path.resolve(__dirname, '..', '..');

export const DEFAULT_PORT = 8000;
export const DEFAULT_HOST = '0.0.0.0';

// Minimum size in bytes for applying compression
export const COMPRESSION_MIN_BYTES = 128;

// MIME Type Map
export const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.cjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.wasm': 'application/wasm',
  '.pdf': 'application/pdf',
};

// MIME Types eligible for text-based compression
export const COMPRESSIBLE_TYPES = new Set([
  'text/html; charset=utf-8',
  'text/css; charset=utf-8',
  'application/javascript; charset=utf-8',
  'application/json; charset=utf-8',
  'image/svg+xml; charset=utf-8',
  'application/xml; charset=utf-8',
  'text/plain; charset=utf-8',
  'application/wasm',
]);

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

export function isCompressible(mimeType: string): boolean {
  if (COMPRESSIBLE_TYPES.has(mimeType)) return true;
  return mimeType.startsWith('text/') || mimeType.includes('javascript') || mimeType.includes('json');
}

export function generateETag(stat: fs.Stats): string {
  // Fast, deterministic weak ETag from mtime and size
  const mtimeHex = Math.floor(stat.mtimeMs).toString(16);
  const sizeHex = stat.size.toString(16);
  return `W/"${sizeHex}-${mtimeHex}"`;
}

export type CompressionEncoding = 'br' | 'gzip' | 'deflate' | 'identity';

export function selectEncoding(acceptEncodingHeader: string | undefined): CompressionEncoding {
  if (!acceptEncodingHeader) return 'identity';
  const header = acceptEncodingHeader.toLowerCase();

  // Prefer brotli (br) if client supports it
  if (header.includes('br')) return 'br';
  // Then gzip
  if (header.includes('gzip')) return 'gzip';
  // Then deflate
  if (header.includes('deflate')) return 'deflate';

  return 'identity';
}

export function createCompressionStream(encoding: CompressionEncoding) {
  switch (encoding) {
    case 'br':
      return zlib.createBrotliCompress({
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 5,
        },
      });
    case 'gzip':
      return zlib.createGzip({ level: 6 });
    case 'deflate':
      return zlib.createDeflate({ level: 6 });
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Static File Server Logic
// ---------------------------------------------------------------------------

export function createStaticServer(rootDir: string = ROOT_DIR): http.Server {
  const server = http.createServer((req, res) => {
    const startTime = Date.now();
    const method = req.method || 'GET';

    if (method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS') {
      res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Method Not Allowed');
      return;
    }

    if (method === 'OPTIONS') {
      res.writeHead(204, {
        'Allow': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept-Encoding',
      });
      res.end();
      return;
    }

    // Parse URL and sanitize path
    const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Prevent path traversal
    let safePath = path.normalize(path.join(rootDir, pathname));
    if (!safePath.startsWith(rootDir)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden: Access Denied');
      return;
    }

    // Check file stats
    fs.stat(safePath, (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><title>404 Not Found</title></head>
<body style="font-family: system-ui, sans-serif; padding: 40px; text-align: center;">
  <h1>404 - 리소스를 찾을 수 없습니다</h1>
  <p>요청하신 경로 <code>${pathname}</code> 를 찾을 수 없습니다.</p>
  <p><a href="/">메인 홈으로 이동</a></p>
</body>
</html>`);
        return;
      }

      // If directory, serve index.html or redirect with trailing slash
      if (stats.isDirectory()) {
        if (!pathname.endsWith('/')) {
          res.writeHead(301, { 'Location': pathname + '/' + (parsedUrl.search || '') });
          res.end();
          return;
        }
        safePath = path.join(safePath, 'index.html');
        fs.stat(safePath, (indexErr, indexStats) => {
          if (indexErr || !indexStats.isFile()) {
            res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Directory listing forbidden');
            return;
          }
          serveFile(req, res, safePath, indexStats, startTime);
        });
        return;
      }

      if (!stats.isFile()) {
        res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bad Request: Not a regular file');
        return;
      }

      serveFile(req, res, safePath, stats, startTime);
    });
  });

  return server;
}

function serveFile(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  filePath: string,
  stats: fs.Stats,
  startTime: number
) {
  const mimeType = getMimeType(filePath);
  const isHtml = mimeType.startsWith('text/html');
  const etag = generateETag(stats);
  const lastModified = stats.mtime.toUTCString();

  // 1. Browser Caching Headers
  // HTML: no-cache, must-revalidate (instant updates, revalidates with ETag)
  // Static Assets: public, max-age=86400 (1 day), stale-while-revalidate=604800 (7 days)
  const cacheControl = isHtml
    ? 'no-cache, must-revalidate'
    : 'public, max-age=86400, stale-while-revalidate=604800';

  const headers: Record<string, string | number> = {
    'Content-Type': mimeType,
    'Cache-Control': cacheControl,
    'ETag': etag,
    'Last-Modified': lastModified,
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': '*',
  };

  // 2. Conditional Requests (304 Not Modified)
  const ifNoneMatch = req.headers['if-none-match'];
  const ifModifiedSince = req.headers['if-modified-since'];

  if (ifNoneMatch === etag || (ifModifiedSince && new Date(ifModifiedSince) >= stats.mtime)) {
    headers['Content-Length'] = 0;
    res.writeHead(304, headers);
    res.end();
    return;
  }

  // 3. Compression Negotiation
  const shouldCompress = isCompressible(mimeType) && stats.size >= COMPRESSION_MIN_BYTES;
  const acceptEncoding = req.headers['accept-encoding'] as string | undefined;
  const encoding = shouldCompress ? selectEncoding(acceptEncoding) : 'identity';

  if (req.method === 'HEAD') {
    if (encoding === 'identity') {
      headers['Content-Length'] = stats.size;
    }
    res.writeHead(200, headers);
    res.end();
    return;
  }

  // 4. Response Streaming
  if (encoding !== 'identity') {
    headers['Content-Encoding'] = encoding;
    headers['Vary'] = 'Accept-Encoding';

    const compressStream = createCompressionStream(encoding);
    if (compressStream) {
      res.writeHead(200, headers);
      const readStream = fs.createReadStream(filePath);

      let compressedBytes = 0;
      compressStream.on('data', (chunk: Buffer) => {
        compressedBytes += chunk.length;
      });

      pipeline(readStream, compressStream, res, (err) => {
        if (err && !res.writableEnded) {
          console.error(`[Error] Stream failed for ${filePath}:`, err.message);
        } else {
          const duration = Date.now() - startTime;
          const ratio = ((1 - compressedBytes / stats.size) * 100).toFixed(1);
          console.log(
            `[${req.method}] ${req.url} -> 200 OK (${encoding}) ${stats.size}B -> ${compressedBytes}B (-${ratio}%) [${duration}ms]`
          );
        }
      });
      return;
    }
  }

  // Uncompressed / Identity fallback
  headers['Content-Length'] = stats.size;
  res.writeHead(200, headers);
  const readStream = fs.createReadStream(filePath);
  pipeline(readStream, res, (err) => {
    if (err && !res.writableEnded) {
      console.error(`[Error] Stream failed for ${filePath}:`, err.message);
    } else {
      const duration = Date.now() - startTime;
      console.log(`[${req.method}] ${req.url} -> 200 OK (raw) ${stats.size}B [${duration}ms]`);
    }
  });
}

// ---------------------------------------------------------------------------
// Benchmark / Compression Analysis Mode
// ---------------------------------------------------------------------------

export function runCompressionBenchmark(rootDir: string = ROOT_DIR) {
  console.log('\n===============================================================');
  console.log('  HTTP Static Server Compression & Caching Analysis');
  console.log(`  Target Root: ${rootDir}`);
  console.log('===============================================================\n');

  const filesToAnalyze: string[] = [];

  function collectFiles(dir: string, depth = 0) {
    if (depth > 2) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        collectFiles(fullPath, depth + 1);
      } else if (entry.isFile()) {
        filesToAnalyze.push(fullPath);
      }
    }
  }

  collectFiles(rootDir);

  let totalRawBytes = 0;
  let totalGzipBytes = 0;
  let totalBrotliBytes = 0;

  interface AssetStat {
    file: string;
    rawSize: number;
    gzipSize: number;
    brotliSize: number;
    gzipSavedPct: number;
    mime: string;
    cacheControl: string;
  }

  const results: AssetStat[] = [];

  for (const filePath of filesToAnalyze) {
    const stat = fs.statSync(filePath);
    const mime = getMimeType(filePath);
    const isHtml = mime.startsWith('text/html');
    const cacheControl = isHtml
      ? 'no-cache, must-revalidate'
      : 'public, max-age=86400, stale-while-revalidate=604800';

    if (!isCompressible(mime) || stat.size < COMPRESSION_MIN_BYTES) {
      continue;
    }

    const content = fs.readFileSync(filePath);
    const gzipBuf = zlib.gzipSync(content, { level: 6 });
    const brotliBuf = zlib.brotliCompressSync(content, {
      params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 },
    });

    const gzipSavedPct = ((1 - gzipBuf.length / content.length) * 100);

    totalRawBytes += content.length;
    totalGzipBytes += gzipBuf.length;
    totalBrotliBytes += brotliBuf.length;

    results.push({
      file: path.relative(rootDir, filePath).replace(/\\/g, '/'),
      rawSize: content.length,
      gzipSize: gzipBuf.length,
      brotliSize: brotliBuf.length,
      gzipSavedPct,
      mime,
      cacheControl,
    });
  }

  // Sort by raw size descending
  results.sort((a, b) => b.rawSize - a.rawSize);

  console.log('| 파일명 | 원본 크기 | Gzip 크기 | 절감율 | Brotli 크기 | Cache-Control |');
  console.log('| :--- | :---: | :---: | :---: | :---: | :--- |');

  for (const r of results.slice(0, 20)) {
    const rawKb = (r.rawSize / 1024).toFixed(1) + ' KB';
    const gzKb = (r.gzipSize / 1024).toFixed(1) + ' KB';
    const brKb = (r.brotliSize / 1024).toFixed(1) + ' KB';
    const pct = `${r.gzipSavedPct.toFixed(1)}%`;
    console.log(`| \`${r.file}\` | ${rawKb} | **${gzKb}** | **-${pct}** | ${brKb} | \`${r.cacheControl.split(',')[0]}\` |`);
  }

  const overallGzipPct = ((1 - totalGzipBytes / totalRawBytes) * 100).toFixed(1);
  const overallBrotliPct = ((1 - totalBrotliBytes / totalRawBytes) * 100).toFixed(1);
  const totalRawMb = (totalRawBytes / (1024 * 1024)).toFixed(2);
  const totalGzMb = (totalGzipBytes / (1024 * 1024)).toFixed(2);
  const totalBrMb = (totalBrotliBytes / (1024 * 1024)).toFixed(2);

  console.log('\n--- 압축 요약 지표 ---');
  console.log(`- 분석 대상 텍스트/코드 자산: ${results.length}개 파일`);
  console.log(`- 원본 총 전송량: ${totalRawMb} MB (${totalRawBytes.toLocaleString()} bytes)`);
  console.log(`- Gzip 압축 전송량: ${totalGzMb} MB (${totalGzipBytes.toLocaleString()} bytes) ➔ **${overallGzipPct}% 절감** (-${((totalRawBytes - totalGzipBytes) / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`- Brotli 압축 전송량: ${totalBrMb} MB (${totalBrotliBytes.toLocaleString()} bytes) ➔ **${overallBrotliPct}% 절감** (-${((totalRawBytes - totalBrotliBytes) / (1024 * 1024)).toFixed(2)} MB)`);
  console.log('===============================================================\n');

  return {
    totalRawBytes,
    totalGzipBytes,
    totalBrotliBytes,
    overallGzipPct,
    overallBrotliPct,
    results,
  };
}

// ---------------------------------------------------------------------------
// CLI Execution
// ---------------------------------------------------------------------------

function parseArgs(): { port: number; host: string; root: string; statsOnly: boolean } {
  const args = process.argv.slice(2);
  let port = parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10);
  let host = process.env.HOST || DEFAULT_HOST;
  let root = ROOT_DIR;
  let statsOnly = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--port' || arg === '-p') {
      port = parseInt(args[++i], 10);
    } else if (arg === '--host' || arg === '-h') {
      host = args[++i];
    } else if (arg === '--root' || arg === '-r') {
      root = path.resolve(args[++i]);
    } else if (arg === '--stats' || arg === '--benchmark') {
      statsOnly = true;
    }
  }

  return { port, host, root, statsOnly };
}

if (process.argv[1] && (process.argv[1].endsWith('serve.ts') || process.argv[1].endsWith('serve.mjs') || process.argv[1].endsWith('serve.js'))) {
  const { port, host, root, statsOnly } = parseArgs();

  if (statsOnly) {
    runCompressionBenchmark(root);
  } else {
    const server = createStaticServer(root);

    server.listen(port, host, () => {
      console.log('===============================================================');
      console.log(`🚀 PaperCut UI 고성능 압축 정적 서버 가동 완료`);
      console.log(`- 주소: http://localhost:${port}/ (Host: ${host})`);
      console.log(`- 루트: ${root}`);
      console.log(`- 전송 압축: Gzip, Brotli, Deflate 활성화 (Accept-Encoding 지원)`);
      console.log(`- 캐시 정책:`);
      console.log(`  * HTML: no-cache, must-revalidate (ETag 기반 즉시 갱신)`);
      console.log(`  * 정적자산: public, max-age=86400, stale-while-revalidate=604800`);
      console.log('===============================================================');
    });

    const shutdown = () => {
      console.log('\n[서버 종료 중...]');
      server.close(() => {
        console.log('[서버 안전하게 종료됨]');
        process.exit(0);
      });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  }
}
