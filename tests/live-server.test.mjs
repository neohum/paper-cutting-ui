import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Live-Reload Server Specification & Implementation', async (t) => {
  const serverScriptPath = path.join(projectRoot, 'scripts', 'dev', 'live-server.mjs');

  await t.test('live-server.mjs exists and contains SSE & Hot-Reload implementation', () => {
    assert.ok(fs.existsSync(serverScriptPath), 'scripts/dev/live-server.mjs must exist');
    const content = fs.readFileSync(serverScriptPath, 'utf-8');

    assert.ok(content.includes('__livereload'), 'Must implement /__livereload endpoint');
    assert.ok(content.includes('text/event-stream'), 'Must serve text/event-stream for SSE');
    assert.ok(content.includes('fs.watch'), 'Must implement fs.watch for file change detection');
    assert.ok(content.includes('broadcastEvent'), 'Must broadcast reload events');
    assert.ok(content.includes('Hot-reloading CSS'), 'Must support smart CSS hot reloading');
  });

  await t.test('package.json contains dev script', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf-8'));
    assert.strictEqual(pkg.scripts.dev, 'node scripts/dev/live-server.mjs');
    assert.strictEqual(pkg.scripts.serve, 'node scripts/dev/live-server.mjs');
  });
});
