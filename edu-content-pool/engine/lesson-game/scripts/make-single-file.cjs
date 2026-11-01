#!/usr/bin/env node
/*
 * 게임 폴더를 HTML 한 장으로 묶는다 (메신저·USB·LMS 첨부용).
 *   node make-single-file.cjs <게임 폴더> <출력.html>
 * 같은 폴더의 <script src="x.js"> 만 안에 넣는다. 다른 주소를 가리키는 script 가 있으면 멈춘다.
 * 이미지는 assets/ 의 파일을 data: 주소로 바꾼다 (png, jpg, webp, svg, ogg, mp3, wav).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.argv[2] || '.');
const out = path.resolve(process.argv[3] || path.join(dir, 'single.html'));
let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

html = html.replace(/<script\s+src="([^"]+)"\s*><\/script>/g, (all, src) => {
  if (/^[a-z]+:|^\/\//i.test(src)) throw new Error('외부 스크립트는 묶을 수 없다: ' + src);
  const code = fs.readFileSync(path.join(dir, src), 'utf8').replace(/<\/script/gi, '<\\/script');
  return '<script>\n' + code + '\n</script>';
});

const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };
html = html.replace(/(["'(])(assets\/[^"')]+)(["')])/g, (all, a, rel, b) => {
  const type = types[path.extname(rel).toLowerCase()];
  const file = path.join(dir, rel);
  if (!type || !fs.existsSync(file)) return all;
  return a + 'data:' + type + ';base64,' + fs.readFileSync(file).toString('base64') + b;
});

const left = html.match(/<script\s+src=/g);
if (left) throw new Error('묶지 못한 script src 가 남았다: ' + left.length);
fs.writeFileSync(out, html);
console.log('만들었다:', out, (fs.statSync(out).size / 1024).toFixed(1) + ' KB');
