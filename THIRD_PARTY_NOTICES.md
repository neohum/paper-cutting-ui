# 서드파티 고지 (Third-Party Notices)

PaperCut UI의 PC 컴포넌트(`papercut-ui.css`, `papercut-ui.js`, 데모의 `#pc-components` 섹션)는
아래 프로젝트의 컴포넌트 구성과 API 명세를 **참고**해 종이공예 디자인으로 새로 구현했습니다.

## shadcn/ui

- 저장소: https://github.com/shadcn-ui/ui
- 라이선스: MIT

```
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

"shadcn"과 "shadcn/ui"는 해당 프로젝트의 이름입니다. PaperCut UI는 shadcn/ui와 제휴하거나 보증받은 프로젝트가 아닙니다.

## 공용 학습자료 도구 (edu-content-pool/vendor)

`edu-content-pool/vendor/<이름>@<버전>/` 에 실은 wokwi-elements(MIT, 번들 안 lit BSD-3), avr8js(MIT),
hairline(MIT), pannellum(MIT), marzipano(Apache-2.0, 번들 안 bowser·gl-matrix·hammerjs MIT)은 각 폴더의
`LICENSE` 원문과 `SOURCE.txt`(출처·버전·integrity)를 따른다. 용도·불러오는 법·표기 의무는
`edu-content-pool/vendor/SHARED_TOOLS.md`.

Apache-2.0 고지 (marzipano):

```text
Marzipano 0.10.2 — https://github.com/google/marzipano
Copyright 2016 Google Inc. Licensed under the Apache License, Version 2.0
(edu-content-pool/vendor/marzipano@0.10.2/LICENSE). 원본 패키지에 NOTICE 파일은 없다.
수정하지 않고 dist/marzipano.js 를 그대로 싣는다.
```

예제의 360도 사진(`edu-content-pool/vendor/_samples/pano/`)은 Poly Haven 의 CC0 자료다. 출처는 같은 폴더의 `CREDITS.txt`.
