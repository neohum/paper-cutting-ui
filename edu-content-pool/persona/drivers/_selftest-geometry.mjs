// 도형·공간·지도 조작기 자가 시험 진입점 — 직접 실행할 때만 돈다(runner 가 import 해도 아무 일 없음).
// 사용: node persona/drivers/_selftest-geometry.mjs [--hub URL] [--tool shapes,map] [--input mouse,touch,phone,keyboard] [--lessons 2] [--items 12] [--lesson id,id] [--verbose]
import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await import('./_selftest-geometry-run.mjs');
