// pano/*.jpg → scenes.js (data URI 를 담은 전역 PANO_IMAGES) 를 다시 만든다.
// 사용: node edu-content-pool/vendor/_samples/pano/build-scenes.mjs
// 왜 필요한가: file:// 에서는 WebGL 이 로컬 그림 파일을 텍스처로 읽지 못한다
// (pannellum 은 XHR 로, marzipano 는 crossOrigin 이미지로 읽어 origin 'null' 에서 막힌다).
// data URI 는 같은 문서 안이라 막히지 않는다. 네트워크·설치 없음.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const names = ['old-campus', 'lakeside', 'business-district'];

const images = {};
let jpegBytes = 0;
for (const name of names) {
  const buf = readFileSync(join(here, `${name}.jpg`));
  jpegBytes += buf.length;
  images[name] = `data:image/jpeg;base64,${buf.toString('base64')}`;
}

const body = [
  '// 생성: build-scenes.mjs 가 pano/*.jpg 를 data URI 로 바꾼 결과(손으로 고치지 않는다).',
  '// file:// 에서 WebGL 이 그림 파일을 읽지 못하므로 그림을 스크립트 전역으로 싣는다. 출처: CREDITS.txt',
  `window.PANO_IMAGES = ${JSON.stringify(images, null, 2)};`,
  '',
].join('\n');
writeFileSync(join(here, 'scenes.js'), body);
console.log(`JPEG ${jpegBytes} B → scenes.js ${Buffer.byteLength(body)} B`);
