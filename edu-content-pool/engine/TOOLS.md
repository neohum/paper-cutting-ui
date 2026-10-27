# 교구 빠른 참조 (차시 작성용)

교구 파일 첫머리 주석이 정본이다. 이 표는 고르기용 요약이다.

## PaperLessons.registerUnit

- 옵션: { id, schema:'edu-unit.v1', catalogUnit, grade, subject, unitTitle, flow, refs:{번호:기존 id}, lessons:[edu-lesson.v1…] }
- 상태: 새로 만듦
- target: lessons/units/<단원 id>.js (형식 예시 lessons/units/_sample.js)
- 맞는 차시: 단원 레인이 쓰는 파일 형식. player.html?lesson=<단원>-NN이 자동으로 단원 파일을 읽고, refs 번호는 기존 차시로 넘어감

## 카드 판 공통(story·timeline·lifecycle·mindmap·emotion·wordcards·kitchen·economy)

- `T.achievable(target)`: 지금 판(카드·칸)으로 target을 만들 수 없으면 까닭 한 문장(없는 카드 id·칸 id), 만들 수 있으면 null. `check-unit.mjs`가 단계(easy/base/challenge)마다 부른다 — toolOptions만 바꾼 단계도 그 판으로 풀리는지 본다.
- 1단계 기본 힌트는 판을 보고 고른다: timeline은 축 이름이 시간(옛날·먼저·아침…)일 때만 '일이 일어난 차례' 말을, 아니면 축 양 끝 이름으로 말한다. lifecycle은 한살이(가운데 글·생물 모티프)일 때만 '자라는 차례' 말을 쓴다. kitchen sort는 칸이 식품군일 때만 식품군 말을, matter sort는 칸이 물질 성질일 때만 성질 말을 쓴다. story fill은 칸에 who가 있을 때만 인물 말을, mindmap match는 '어울리는 카드'로 말한다(근거 잇기 차시는 문항 hints로 '근거'를 적는다). timer order는 카드가 운동 동작일 때만 체육 말을 쓴다. 차시마다 다른 말이 필요하면 hint1·문항 hints를 쓴다.

## story

- 옵션: Common card board options: cards ['글' or {id,text,motif?,big?,sub?,back?,why?,color?}], slots (number | ['처음','가운데','끝'] | [{id,label,sub?,motif?,big?,who?,cap?}]), mode ('order' default | 'fill' | 'sort' | 'match' | 'pick'), shuffle, live, instant, showBack, revealAfterCheck, hint1, success, trayLabel, basket (pick), cardW, cardH, printCards. Skin-only: title (story title at the top). fill slots: {id, who:'토끼', motif?:'flower', label:'길을 알려 줘서 ___.'}, where ___ is the blank.
- 상태: { at: { 카드id: 칸 번호(0부터) | null } } — null = card is in the tray.
- target: order: { order:[카드id…] } (an array element can be [id,id] to mean either card is fine). fill: { fill:{ 칸id: 카드id | [카드id…] } }. sort: { sort:{ 칸id:[카드id…] } } (cards not listed are distractors and must stay out). match: { match:{ 칸id: 카드id | [ids] } }. pick: { pick:[카드id…] }.
- 맞는 차시: Korean: story sequence, a character's words, sentence completion. 통합/도덕: daily routines, situation stories. English: dialogue blanks. Scene cards: motif + short text (about 12 characters per line, at most 2 lines). Speech-bubble cards: text only.

## timeline

- 옵션: Common card board options plus: axis ['옛날','오늘날'] (axis end labels; default '먼저'/'나중' for order, '옛날'/'오늘날' for others). Slots: {id, label:'1960년', at?: number}. When any slot has `at`, toScale places slots by that value. When slots crowd, they alternate above and below the axis. sort mode: era bands in one row with the axis below; a slot's `sub` shows under its label. back: '1960년' shows after a correct check when revealAfterCheck is on.
- 상태: { at: { 카드id: 눈금 번호 | null } }
- target: order: { order:[ids] } (left = earlier). match: { match:{ 눈금id: 카드id } }. sort: { sort:{ 시대id:[ids] } }. fill and pick use the common shapes.
- 맞는 차시: Social studies: changes in tools, history and the local area; personal timelines (born → kindergarten → grade 3). Daily routine (morning, afternoon, evening). Science: order of changes. Korean: sequence of events.

## lifecycle

- 옵션: Common card board options plus: center ('배추흰나비의 한살이', the label in the middle of the ring); cycle (default true; false = no arrow from the last slot back to the first); spin (default true; adds a '차례대로 따라가 보기' button that lights slots in order and does not change state). Slots: a number, or names like [{id,label:'알에서 막 나옴'}]. 3–8 slots work best. Motifs added by this file: egg, larva, pupa, butterfly, seed, sprout, tadpole, frog, chick.
- 상태: { at: { 카드id: 자리 번호 | null } } — slot 0 is at the top, then clockwise.
- target: order: { order:[ids], cyclic?: true } (cyclic = correct from any starting slot as long as the order is right). match: { match:{ 자리id: 카드id } }. sort/fill/pick use the common shapes.
- 맞는 차시: Science: animal and plant life cycles, the water cycle, seasons. 통합교과: growth. 실과: growing crops. Social studies: recycling loop. Use back to reveal the time each stage takes after a correct check.

## mindmap

- 옵션: Common card board options plus: topic (center topic, about 14 characters), basket (pick basket name; defaults to topic). Slots: branch names ['정직','책임'] or {id,label,sub?,motif?}. Default mode is sort (several cards per branch); match takes one evidence card per branch; pick has a single basket.
- 상태: { at: { 카드id: 가지 번호 | null } }
- target: sort: { sort:{ 가지id:[ids] } } (unlisted cards are distractors). match: { match:{ 가지id: 카드id | [ids] } }. pick: { pick:[ids] }. order and fill use the common shapes.
- 맞는 차시: The catalog's most-used tool. Korean: grouping words, main idea and supporting sentences. 도덕: values and actions, reasons. Social studies: conditions and examples. Science: grouping by property. 통합/실과/영어: collecting theme words. A matching sentence fill is also available.

## numberline

- 옵션: Range and labels: min, max, step, sub (small ticks), format: 'int'|'dec'|'frac', den, mixed, labels: 'major'|'all'|'ends'|'none', labelAt. Mode: mode: 'place'|'jump'|'read'. Place: count (1–6 points), names. Display: showValue, marks: [{v,name}] or numbers. Answer UI: choices, input:true, question, why. Jump: fixedFrom, hopStep, hopSize, backward. target {end, count} without size: solve splits the distance into count hops on the hopStep grid (remainder on the last hop). Also revealAfterCheck and print.
- 상태: place: {points:[v|null,...]}. jump: {from, hops:[...], size}. read: {pick} or {answer}.
- target: place: {points:[3, '3/4', '1 1/2', 0.5]}. jump: {from?, size?, count?, end?}. read: {pick} or {value, form?:'frac'|'dec'|'int', mark?}.
- 맞는 차시: Reading and placing numbers, fractions and decimals on a number line; skip counting and repeated addition (forward or backward jumps); adding and subtracting along a line; estimating and comparing sizes. Also timelines and thermometer or temperature readings in science.

## multiply

- 옵션: Mode: mode: 'array'|'group'|'table'. Array: maxRows, maxCols (≤10), lock (read-only; cells up to 56), total (adds a total input), showCounts, showTotal, bands (row bands), shape, color. Group: count (≤60), by: 'size'|'plates', ask: 'groups'|'size'|'total'|'none', askLabel, rest (adds a remainder input), showCount, maxSize. Table: rowsOf, colsOf, blanks: [[a,b]]|'all'|'row:n'|'col:n', op: '×'|'+'. Also revealAfterCheck and print.
- 상태: array: {rows, cols, total}. group: {size, plates, answer, rest}. table: {cells:{'3x4': n|null}}.
- target: array: {rows?, cols?, product?, anyOrder?, minSide?, total?}. group: {size?, plates?, groups?, answer?, rest?}. table: {cells:true}.
- 맞는 차시: Introducing multiplication with arrays and equal groups; times tables and table completion; equal sharing and grouping division with remainders; area by counting rows and columns; arrays of objects and grouping in practical arts, PE and science.

## pattern

- 옵션: Pieces: a number, 'shape:color', 'shape', text, or {s,c,n,t,k,r}. Shapes: circle, square, triangle, star, heart, diamond, hexagon, arrow. Mode: mode: 'fill'|'rule'|'odd'|'make'. seq or items (null = blank). palette, input: 'number', start, perRow, length (make), names (blank names), choices (rule), question, why. Also revealAfterCheck and print (patterns are drawn with black-and-white textures).
- 상태: fill: {fill:[paletteIdx|number|null,...]}. make: {seq:[...]}. rule and odd: {pick}.
- target: fill: {fill:[piece,...]}. rule: {pick}. odd: {odd}. make: {rule:'repeat', period?, minRepeats?, uses?}, {rule:'add', step?} or {rule:'core', core}.
- 맞는 차시: Finding rules in shapes, colours and numbers (repeating, growing, multiplying); making your own pattern; spotting the piece that breaks the rule; skip-count sequences; rhythm and beat patterns in music; repeating motifs in art.

## chart

- 옵션: Graph: type: 'picture'|'bar'|'line'|'circle'|'band', horizontal (bar), mode: 'build'|'read'. Data and axes: data:[{name,value}], title, unit, xLabel, yLabel, scale, max, from (from > 0 draws a wave mark), step. Picture icons: icons (2–3 sizes, largest first), icon, anyIcons, tickPct. Prefill: given (indexes already filled in). Table: showTable, total, tableBlanks. Questions: question, choices, why, explain, showValues. Also revealAfterCheck and print.
- 상태: build: {values:[...]}, or {icons:[[big,small],...]} for picture graphs. read: {pick}, {answer} or {table:[...]}.
- target: build: {build:true} or {build:[idx,...]}. read: {pick}, {value} or {table:true}.
- 맞는 차시: Statistics and graphs in grades 3–6 math (making and reading picture, bar, line, band and circle graphs, and filling in tables); social studies data such as population, production and land use; science observation records such as temperature, plant growth and measurements; class surveys.

## shapes

- 옵션: mode 'geoboard'(default)|'tangram'|'classify'. geoboard: size(3–10), showCounts, showArea, showRight, maxPts. tangram: figure('square7'|'square2'|'triangle2'|'parallelogram2'|'square3'|'triangle3') or slots[{k,pts}]+pieces, lines(show piece outlines). classify: cards[{id, shape preset|pts, rot}], bins[names]. All modes: ask{q,choices,why?,explain?}, askNum{q,unit,tol?}, readOnly, revealAfterCheck, print
- 상태: geoboard {pts:[[col,row]…]} · tangram {pieces:[{x,y,r,f}]} · classify {placed:{cardId:bin|null}} · plus pick / num when ask / askNum is used
- target: geoboard {sides?, shape?('triangle','right-triangle','acute-triangle','obtuse-triangle','isosceles-triangle','quadrilateral','square','rectangle','rhombus','parallelogram','trapezoid','pentagon','hexagon','polygon'), area?, rightAngles?, parallel?, exact?(quadrilaterals only)} · tangram {fit:true} · classify {bins:{id:idx}} · {pick} · {num}
- 맞는 차시: 수학 도형 단원 — 다각형, 삼각형·사각형 분류, 평행·수직, 넓이 기초, 칠교·조각 맞추기, 도형 성질로 분류, 직각

## measure

- 옵션: mode 'ruler'(default)|'scale'|'volume'|'unit'. ruler: max, mm, object{name,len,start}, make/step/from, tiles{name,len}, split(cm+mm). scale: kind 'balance'(left/right[{name,w}], unit{name,w}, maxUnits, showAmount) | 'spring'(objects[{name,w}], max, step, minor). volume: beakers[{v,max,w,label,ticks}], step, minor, pour, pourStep, split(L+mL), showAmount. unit: things[{name,amount}], units[]. All modes: ask, askNum, readOnly, revealAfterCheck, print
- 상태: ruler {ans} · make {len} · balance {n} · spring {hung, ans} · volume {v:[mL…], ans} · unit {picks:[idx|null…]}
- target: ruler {read} | {make} · balance {balance:true} | {tilt:'left'|'right'} · spring {read} · volume {fill} | {read} · unit {units:[idx…]} · {pick} · {num}
- 맞는 차시: 수학 측정 — 길이(cm·mm·m·km, 시작이 0이 아닌 자), 들이(L·mL), 무게(g·kg, 양팔·용수철저울), 단위 고르기·어림; 과학 물체의 무게

## force

- 옵션: mode 'lever'(default)|'spring'|'ramp'|'push'|'speed'. lever: pegs(2–6), fixed[{pos,n}], maxPer, side('right'|'left'|'both'), unitName, showMoment, showDist. spring: k, natural, maxN, unitName, unitW, showStretch. ramp/push: angles[min,max,step], masses, forces, surfaces[{name,mu}], lock[]. speed: movers[{name,d,t}], control, dRange, tRange, showSpeed, unitD, unitT. All modes: ask, askNum, readOnly, revealAfterCheck, print
- 상태: lever {w:[2·pegs+1 weight counts]} · spring {n, ans} · ramp {angle, mass, surface, ran} · push {force, mass, surface, ran} · speed {ran} | control {d, t, ran}
- target: lever {balance:true, at?, count?} | {tilt} · spring {n} | {stretch} | {read} · ramp/push {set:{…}, run?} | {move:true} · speed {speed} | {beat:idx} | {run:true} · {pick} · {num}
- 맞는 차시: 과학 힘과 우리 생활·수평 잡기(지레·막대 저울), 용수철과 무게, 물체의 운동(빗면·마찰·미는 힘), 속력(거리÷시간) 비교; 수학 비와 비율 응용

## matter

- 옵션: mode 'particles'(default)|'sort'|'dissolve'|'separate'. particles: substance{name,melt,boil}, temps[min,max,step], boxes['solid'|'liquid'|'gas'…], count, showLabel. sort: cards[{id,name,icon:'fi-rr-…',props[]}], bins[]. dissolve: solute{name,perSpoon,limit}, waters[min,max,step], maxSpoons, temps[{name,limit}], compare[{water,spoons,label}], showConc. separate: parts[{name,magnet?,big?,dissolve?,float?}], tools(magnet,sieve,water,float,filter,evaporate). All modes: ask, askNum, readOnly, revealAfterCheck, print
- 상태: particles {temp} (boxes: {}) · sort {placed:{id:bin|null}} · dissolve {water, spoons, temp?} · separate {steps:[toolId…]}
- target: particles {phase:'solid'|'liquid'|'gas'} | {temp} · sort {bins:{id:idx}} · dissolve {set:{water?,spoons?,temp?}} | {saturated:true} | {conc} | {sameAs:n} · separate {separated:true} | {got:name} | {steps:[…]} · {pick} · {num}
- 맞는 차시: 과학 물질의 상태(고체·액체·기체, 입자), 물의 상태 변화, 물체와 물질(성질로 분류), 용해와 용액(포화·진하기·온도), 혼합물의 분리(자석·체·거름·증발)

## keyboard

- 옵션: mode('melody'|'rhythm'|'janggu'), from/to(음역, 예 '도'~'높은도'), black(검은건반), names/nameToggle(계이름 표시), melody(들려줄 가락), maxNotes, showWhileListening, printNames, printBoxes, meter, measures, blocks(리듬 블록 q,e,h,dh,w,qr,er,hr), pattern, showBeats, beats, group, jangdan, strokes(덩,쿵,덕,기덕,더러러), tempo, revealAfterCheck
- 상태: melody: {notes:['도','미',…]} / rhythm: {rhythm:['q','e',…]} / janggu: {strokes:['덩','',…]} / selfCheck 시 checks:[bool]
- target: {notes:[...]} 그대로 치기 | {compose:{length,min,max,startOn,endOn,only}} 가락 짓기 | {rhythm:[...]} 리듬 따라 놓기 | {beats:true,use,rests} 마디 박 채우기 | {strokes:[...]} 장단 | {selfCheck:[...],minNotes}
- 맞는 차시: 음악 연주·가락·리듬·장단 차시: 듣고 따라 치기, 계이름 익히기, 박에 맞는 리듬 짓기, 국악 장단 치기, 짧은 가락 창작

## collage

- 옵션: shapes(circle,square,rect,triangle,semi,star,heart,leaf,diamond), colors(빨강·주황·노랑·초록·파랑·보라·분홍 등 10색), sizes(s/m/l), guide('vertical'|'horizontal' 접는 선), bg, maxPieces, rotStep, readOnly, print, printColors
- 상태: {pieces:[{shape,color,size,x,y,r}], checks?:[bool]} (판 560×400, 격자 20)
- target: symmetry:'vertical'|'horizontal' | repeat:{times,unit,axis} | contrast:'complement'|'warm-cool'|'light-dark'(맞닿음) | has:[{shape,color,size,n,min,max}] | pieces:{n,min,max} | overlap:n | match:[조각...] 따라 만들기 | selfCheck:[...]+minPieces. 섞어 쓰면 모두 맞아야 정답
- 맞는 차시: 미술 표현·조형 원리 차시: 대칭·반복·대비·균형 무늬, 색상환(보색·따뜻한/차가운 색), 겹치기, 보고 따라 만들기, 자유 작품과 스스로 점검. 수학 대칭 도형에도 쓸 수 있음

## timer

- 옵션: plan:{work,rest,rounds} 처음 값, cards:[...](섞어서 적기), fields:['1회',{label,unit,step}], stopwatch, safety:[...], title, unit, showTotal, workStep, restStep, revealAfterCheck, print (옵션으로 준 칸만 보임, 신호음은 단추로 켤 때만)
- 상태: {plan:{work,rest,rounds}, order:[...], records:[수|null], safety:[bool], checks:[bool]}
- target: plan:{work?,rest?,rounds?} | total:전체 초(운동×번+쉬기×(번−1)) | order:[바른 차례] | records:true|n|[수...] | safety:true | selfCheck:[...]. 섞어 쓰면 모두 맞아야 정답
- 맞는 차시: 체육 운동·건강 차시: 구간 운동(인터벌) 계획, 준비·본·정리 운동 차례, 기록 재어 적기와 나의 변화 보기, 활동 전 안전 점검. 실과·창체의 활동 순서 정하기에도 쓸 수 있음

## block-coding

- 옵션: mode('build'|'trace'), cols, rows, start:{x,y,dir:'N'|'E'|'S'|'W'}, goal:{x,y}, rocks:[[x,y]], stars:[[x,y]], blocks(['fwd','left','right','rep','if']), maxBlocks, program(trace용), speed, revealAfterCheck(trace: 맞히기 전 실행 막음), print, printProgram
- 상태: build: {program:['fwd','left','rep:3',…,'end','if:right']} / trace: {mark:{x,y}|null}
- target: build: {reach:true, stars?:true, maxBlocks?:n, use?:['rep'|'if'], maxEdits?:n, from?:[...]} (maxEdits = 시작 프로그램에서 n블록 넘게 바꾸지 않고 디버깅) / trace: {end:{x,y}}
- 맞는 차시: 실과 소프트웨어·디지털 사회 차시: 순차 명령, 반복으로 줄이기, 조건 블록, 프로그램 따라가기(추적), 오류 찾아 고치기(디버깅). 창체 컴퓨팅 사고와 수학 좌표·방향 차시에도 쓸 수 있음

## map

- 옵션: mode 'pin'(default)|'terrain'|'compass'|'legend'|'scale'; grid [cols,rows] (default [6,4]); places [{name, icon, at:[c,r]}]; names; places[].legend (범례에 쓸 이름 — meanings가 없을 때 아이콘 기본 이름 대신 씀); heights 2D (0~4, -1 sea); terrainView 'layers'|'contour'; heightNames; regions [{name, cells, color?, value?}]; regionNames; regionValues; unit; choropleth; rivers; roads; sea; north (degrees, 0 = up); points 4|8; roseStart; colLabels/rowLabels; scale {cell, unit}; distStep; showCells; legend; meanings; extra; from/to; readout; revealAfterCheck; ask {q, choices, why}; readOnly; title; print. About 31 icons: school, hospital, post, police, fire, office, park, mountain, temple, heritage, museum, station, bus, market, library, house, apartment, factory, field, orchard, port, airport, bridge, beach, city, capital, island, forest, lighthouse, castle, dot
- 상태: pin/terrain {pin:[c,r]|null}; compass {rose:0~315, dir|null}; legend {legend:{icon:name|null}}; scale {dist:number|null}; + pick when ask is used
- target: pin: {at:[c,r]} | {place} | {region} | {from, dir, steps?} | {highest} | {lowest} | {height:n} | {most} | {least} | {river} | {sea}; compass: {dir?, from?, to?, align?}; legend: {legend:{…}}; scale: {from, to} | {dist}; any mode: {pick}
- 맞는 차시: 통합 g1-2 우리 마을·나라·세계, 사회 g3 고장 지도(기호·방위·축척), g4 지역·중심지·지형(등고선·높이), g5-6 우리나라 국토(지역·인구 단계구분도·기후·강·바다·독도), 세계 지도 칸(대륙·나라 지역 + value). 실제 지도 그림 대신 단순한 칸 지도

## earth

- 옵션: mode 'spin'(default)|'orbit'|'moon'|'shadow'|'planets'; spin: start, showSides, showArrow, step; orbit: constellations {봄, 여름, 가을, 겨울}, seasonNames, showTilt; moon: days ([3,7,15,22,27] lunar days), shapes, dayLabel ('음력 {d}일'), printShapes, moonNames; shadow: stick (cm, default 10), altStep, minAlt/maxAlt, hours {rise, set, top}, showGrid; planets: planets (subset), tray, slotLabels; common: readout, revealAfterCheck, ask, readOnly, print, printAnswers
- 상태: spin {hour:0~23}; orbit {season:'봄'|'여름'|'가을'|'겨울'}; moon {moon:{'3':shape|null, …}}; shadow {alt} (or {hour} when hours is set); planets {order:[…]}; + pick
- target: spin: {hour} | {time:'낮'|'밤'} | {phase:'아침'|'낮'|'저녁'|'밤'|'해 뜰 무렵'…}; orbit: {season} | {night:'오리온자리'}; moon: {moon:'auto'} | {moon:{…}}; shadow: {alt} | {shortest} | {longest} | {shadow:cm} (nearest reachable altitude); hours: {hour} | {noon}; planets: {order} (default is distance from the sun); {pick}
- 맞는 차시: 과학 g6 지구의 운동(자전 낮밤·공전 계절 별자리), g6 계절의 변화(태양 고도·그림자 길이·남중), g4·g6 달의 위상, g5 태양계와 별(행성 차례·크기 차례). 밀물·썰물, 북극성 찾기는 미지원

## circuit

- 옵션: grid [point cols, point rows] (2~6, default [4,3]); parts palette order (default ['wire','bulb','battery','switch'], add 'coil'); stock {bulb:3, battery:2, switch:1, coil:1}; lock: true (start parts fixed, switches still toggle) | ['h0-0', …]; readout (lit bulb count / paperclip count); glow (default true); revealAfterCheck (glow, clips and N/S hidden until a correct check); ask; readOnly; print. Edge keys: 'h<col>-<row>' horizontal, 'v<col>-<row>' vertical; top-left point is (0,0)
- 상태: {parts:{edge:'wire'|'bulb'|'bat+'(+ at right/bottom)|'bat-'(+ at left/top)|'sw0'(open)|'sw1'(closed)|'coil'}, pick?}
- target: combinable: {lit:'all'|n|0}, {bulbs:n}, {batteries:n}, {connection:'series'|'parallel'}, {batteryLink:'series'|'parallel'}, {switch:'open'|'closed'}, {magnet:true|false}, {strong:true} (2+ batteries in series), {coilN:'left'|'right'|'top'|'bottom'}, {solution:{edge:code}} (optional, for a custom layout), {pick}. Put locked parts on the board's outer edges (series) or the left column (parallel batteries), otherwise give solution
- 맞는 차시: 과학 g6 전기의 이용(전구 켜기·직렬/병렬·전지 잇기·스위치·합선 안전·전자석 세기와 극), 실과 전기 회로 기초. g5 자원과 에너지 전환에는 맞지 않음

## body

- 옵션: mode 'layers'(default)|'find'|'path'|'match'|'arm'|'parts'; organs (subset of 뇌, 코, 입, 기관, 식도, 폐, 심장, 간, 위, 콩팥, 작은창자, 큰창자, 방광, 항문); jobs {organ: job text}; matchBy 'job'|'name'; names (show selected name, easy level); numbers [organ or part] (①② markers, worksheet); parts (pickable parts, default: 눈 귀 코 혀 피부 목 어깨 팔꿈치 손목 허리 허벅지 무릎 발목; also 가슴, 배); step (arm, default 10); start; readout; revealAfterCheck; ask; readOnly; print; printAnswers; wide (worksheet)
- 상태: layers {peeled:0~3}; find {sel:organ|null}; path {path:[…]}; match {match:{organ:value|null}}; arm {angle:0~150}; parts {parts:[…]}; + pick
- target: layers: {layer:'피부'|'근육'|'뼈'|'기관'} | {peeled:n}; find: {sel:'위'} | {job:'<job text exactly as in jobs>'}; path: {system:'소화'|'호흡'|'배설'} | {path:[…]}; match: {match:'auto'} | {match:{…}}; arm: {bent:true|false} | {shorter:'안쪽'|'바깥쪽'} | {angle:n}; parts: {parts:[exact set]}; {pick}
- 맞는 차시: 과학 g5(6과04) 우리 몸의 구조와 기능(뼈·근육·소화·호흡·순환·배설 기관 자리와 하는 일·차례), 통합 g1-2 몸·감각 기관, 체육 준비 운동(스트레칭할 부위 고르기), 보건 g3 감염병·건강 습관(부위·기관 지목 + ask)

## emotion

- 옵션: mode: match(기본)|sort|pick|order|fill → _cards.js 옵션 그대로(cards·slots·basket·live·instant·showBack·revealAfterCheck·hint1·success·print). 카드 글이 6자 이하 마음 낱말(기쁨·속상함·화남·걱정·무서움·놀람·고마움·미안함·뿌듯함·편안함·신남…)이면 날씨 그림이 저절로 붙는다(weather:false로 끔). 새 모티프: rain·storm·rainbow·wind. mode:'scale' → situation, feeling(마음 이름, 날씨 그림), motif?, steps(3~7, 기본 5), scaleLabels?(배열 또는 {1:'조금',5:'아주 많이'}), ask?, after?(맞힌 뒤 보이는 한 문장). mode:'branch' → situation, choices:[{id,text,result?,mood?,why?}] 2~4개, ask?, who?, feeling?, motif?(인쇄·화면 그림, 기본은 feeling의 모티프 또는 house)
- 상태: 카드 판 모드: { at: { 카드id: 칸번호|null } } / scale: { level: 1~steps|null } / branch: { choice: 보기id|null }
- target: match {match:{칸id:카드id|[되는id…]}} · sort {sort:{칸id:[카드id…]}} · pick {pick:[…]} · order {order:[…]} · fill {fill:{칸id:카드id}} · scale {level: n | [최소,최대] | 'any'} · branch {choice: id | [되는id…]}. 예: {mode:'scale', situation:'새치기를 당했어요', feeling:'화남'} + {level:[2,4]}
- 맞는 차시: 도덕·통합교과(마음·감정·배려·존중·가족·친구·약속·규칙·공동체·정직·생명), 국어(인물의 마음), 체육(경기 예절). 상황에 마음 짝 짓기=match, 마음 크기=scale, 어떻게 할까 판단=branch(result로 결과를 보여 줌, revealAfterCheck면 맞힌 뒤에만), 배려하는 말 고르기=pick, 마음 낱말 빈칸=fill, 마음이 바뀐 차례=order

## wordcards

- 옵션: words:[{en, ko, motif?, big?}] — 카드·칸 id = en. mode: match(기본; 왼쪽 그림·뜻, 카드 영어 / reverse:true면 반대) | flip(front:'ko' 기본 또는 'en', speak:true 기본 — 영어 면이 보이게 누를 때만 발음, '다시 듣기' 단추) | listen('듣기' 단추, say?; 카드는 그림·뜻만) | spell(word 또는 words[0].en, ko?, motif?, extra?:['b'] 섞을 글자; '낱말 듣기' 단추) | sort·pick·order·fill(words로 영어 카드를 만들거나 cards·slots를 직접). 새 모티프: cat·dog·fish2·ball·book·pencil·apple·banana·egg·umbrella. 그 밖은 _cards.js 옵션.
- 상태: flip: { up: [en…] } / 카드 판 모드: { at: { 카드id: 칸번호|null } } (spell 카드 id는 글자, 같은 글자 둘째부터 'p*','p**')
- target: flip {flip:[en…] | 'all'} (정확히 이 카드만 뒤집힘) · match {match:{en:en}} · listen {listen:'dog'|[…]} · spell {spell:'apple'} · sort/pick/order/fill은 _cards.js 모양. 예: {mode:'spell', word:'cat', ko:'고양이', motif:'cat'} + {spell:'cat'}
- 맞는 차시: 영어 전 차시(기본 교구): 낱말 뜻·그림 짝(match), 조건에 맞는 낱말 찾아 뒤집기(flip), 소리 듣고 그림 고르기(listen), 철자·파닉스(spell), 낱말 무리 나누기(sort), 문장 어순(order), 문장 빈칸(fill)

## kitchen

- 옵션: mode: sort(기본; slots를 비우면 5가지 식품군 칸 id 곡류·고기·채소·우유·유지, groups:false면 끔) | order | match | pick | fill — _cards.js 옵션 그대로. 음식 이름(밥·빵·감자·생선·고기·달걀·두부·시금치·김치·사과·귤·우유·치즈·버터·꿀…)에는 그림이 저절로 붙는다(autoMotif:false로 끔). 새 모티프: rice·bread·fish·meat·egg·carrot·fruit·milk·oil·pot·broom·shirt. mode:'checklist' → items:['글'…] 또는 [{id,text,motif?}] 2~10개(7개부터 두 줄), title?
- 상태: 카드 판 모드: { at: { 카드id: 칸번호|null } } / checklist: { checked: [항목id…] }
- target: sort {sort:{곡류:[…],고기:[…],채소:[…],우유:[…],유지:[…]}} · order {order:[…]} · match {match:{시간칸id:카드id}} · checklist {checklist:[항목id…]}(정확히 이것만) 또는 {selfCheck:true|[id…]}(실제로 한 일 스스로 점검 — wrongAnswer 없음). 예: {mode:'checklist', title:'조리 전에 할 일', items:[{id:'hand',text:'손을 씻어요'},{id:'tv',text:'TV를 켜요'}]} + {checklist:['hand']}
- 맞는 차시: 실과(식생활 식단·식품군, 간식 조리 순서, 위생·안전 점검, 옷 정리·세탁 순서, 주거 청소, 하루 일과·시간 관리, 재배·동물 돌보기 순서, 자원 관리), 통합교과 생활 습관, 보건 안전 점검. 조리·공구 차시는 lesson.safety[]를 함께 쓴다

## economy

- 옵션: mode: sort(기본; slots를 비우면 생산·소비·교환 칸) | match | order | pick | fill — _cards.js 옵션 그대로. mode:'pay' → item:{text, motif?, price} 또는 price, paid?(낸 돈 — 거스름돈 문제), coins?(기본 [10,50,100,500,1000]; 5000·10000·50000도 됨, 1000부터 지폐), wallet?:{단위:최대개수}(기본 9), ask?, showTotal?(false면 합계 줄 숨김; revealAfterCheck면 맞힌 뒤에만 보임). mode:'budget' → items:[{id,text,price,motif?}] 2~12개, budget(원), ask? — 예산 막대는 늘 보이고, 숫자 합계는 revealAfterCheck면 맞힌 뒤에만. 새 모티프: coin·bill·shop·basket·factory·cart·pencil·book·ball
- 상태: pay: { n: { '10':개수, '50':…, '100':…, '500':…, '1000':… } } / budget: { picked: [물건id…] } / 카드 판 모드: { at: {…} }
- target: pay {pay: 금액, fewest?: true}(fewest = 가장 적은 개수, wrongAnswer는 큰 돈을 작은 돈 여럿으로 바꾼 상태) · budget {budget:{max?(기본 budget), min?, must?:[id], not?:[id], count?}} · sort {sort:{생산:[…],소비:[…],교환:[…]}}. 예: {mode:'pay', item:{text:'지우개',price:300}, paid:1000, coins:[10,50,100,500]} + {pay:700}
- 맞는 차시: 사회(경제활동·시장·생산과 소비·교환·희소성·합리적 선택·지역 간 교류), 실과(용돈 관리·자원), 수학(돈 계산·거스름돈·어림). 값 맞추기=pay, 예산 안에서 고르기=budget, 활동 분류=sort, 물건이 오기까지=order, 가게와 하는 일 짝=match
