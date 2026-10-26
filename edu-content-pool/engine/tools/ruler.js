/* 종이 자 — 0~15cm 종이 자 위에 물건 띠(연필·크레파스·지우개·리본·막대)를 끌어 놓고 길이를 잰다.
 * 조작: 띠를 좌우로 끌기(0.5cm씩 딱 붙음). 키보드는 띠에서 ←→로 0.5cm씩 옮기고 Enter로 내려놓는다.
 *       그다음 자 아래 '몇 cm인가요?' 단추에서 길이를 고른다(read).
 * 이 교구가 일부러 부딪치게 하는 오개념 두 가지:
 *   ① 0이 아니라 1(또는 아무 데)에 맞추고 끝 눈금을 그대로 읽는다 → '0에 맞추지 않았어요'와 까닭
 *   ② 시작이 0이 아닌 자(부러진 자 brokenFrom)에서 끝 눈금 숫자를 길이로 읽는다 → '1cm 칸이 몇 개인지 세어요'
 *   (그리고 눈금 '선'을 세어 하나 더 많게 읽는 것)
 * 옵션: item('pencil'|'crayon'|'eraser'|'ribbon'|'stick'), len(띠 길이 cm, 소수 가능 — '약 몇 cm' 문항),
 *       brokenFrom(도전: 자가 부러져 이 눈금부터 시작), readOnly(읽기 문항: 띠가 놓인 채 잠기고 고르기만),
 *       approx(보기에 '약'을 붙임 — 끝이 눈금 사이일 때 가까운 눈금 읽기), choices(보기 수 배열, 없으면 자동),
 *       guides(쉬움: 띠 양 끝에서 눈금으로 내려오는 점선), countAid(쉬움: 띠 아래 1cm 칸마다 점 — 확인 뒤에만 번호),
 *       revealAfterCheck(확인 전에는 길이를 알려 주는 표시를 모두 숨기고, 맞힌 확인 뒤에 보여 줌), print
 * 상태: { start, end, read } — start·end는 띠 양 끝이 닿은 자의 눈금(cm), read는 학생이 고른 길이(없으면 null)
 * check({ length, zero?, approx? }) — zero: 왼쪽 끝을 꼭 0에 맞춰야 맞음(부러진 자에서는 무시)
 */
(function (K) {
  // 숫자를 읽는 소리(일·이·삼…)의 받침에 맞는 조사: 8을, 5를, 10을
  const hasB = (n) => { const d = Math.abs(Math.round(n)) % 10; return d === 0 || [1, 3, 6, 7, 8].includes(d); };
  const eul = (n) => `${n}${hasB(n) ? '을' : '를'}`;
  const ieyo = (n) => `${n}${hasB(n) ? '이에요' : '예요'}`;
  const NOUN = { pencil: '연필', crayon: '크레파스', eraser: '지우개', ribbon: '리본', stick: '막대' };
  const r1 = (v) => Math.round(v * 10) / 10;
  const grid = (v) => Math.round(v * 2) / 2;
  // 끝이 눈금 사이면 '5와 6 사이'로 말한다(2학년은 소수를 배우지 않았다)
  const tickText = (v) => (Number.isInteger(r1(v)) ? String(r1(v)) : `${Math.floor(v)}과 ${Math.ceil(v)} 사이`.replace(/(\d+)과/, (m, a) => `${a}${hasB(Number(a)) ? '과' : '와'}`));

  K.registerTool('ruler', {
    name: '종이 자',
    create(box, o, kit) {
      const print = !!o.print;
      const kind = NOUN[o.item] ? o.item : 'pencil';
      const noun = NOUN[kind];
      const L = Math.max(1, Math.min(14, Number(o.len) || 6));
      const MIN = Math.max(0, Math.min(8, Math.round(o.brokenFrom || 0)));
      const broken = MIN > 0;
      const readOnly = !!o.readOnly;
      const W = 640; const U = 34; const X0 = 56; const RY = 110; const RH = 84; const H = RY + RH + 14;
      const SY = RY - 16; // 띠 가운데 높이(띠 아랫변이 자 윗변에 닿는다)
      const xOf = (cm) => X0 + cm * U;
      const st = kit.stage(box, { viewBox: [W, H], label: `종이 자. ${noun}${kind === 'pencil' || kind === 'stick' ? '을' : '를'} 자 위에 놓고 길이를 재어요.` });
      if (print) st.svg.setAttribute('viewBox', `${xOf(MIN) - 26} ${SY - 26} ${xOf(15) - xOf(MIN) + 52} ${RY + RH - SY + 30}`);

      // ---- 자: 버터컵 종이 판 + 1cm 눈금과 수 ----
      const R = st.layer('ruler');
      const left = xOf(MIN) - 14; const right = xOf(15) + 18;
      if (broken) {
        // 부러진 왼쪽 끝은 톱니 모양
        const zig = [0, 1, 2, 3, 4, 5, 6].map((k) => `${left + (k % 2 ? 7 : 0)},${RY + (k * RH) / 6}`).join(' ');
        kit.piece(st, R, { shape: { type: 'poly', points: `${zig} ${right},${RY + RH} ${right},${RY}` }, color: 'buttercup', depth: 3, texture: !print });
      } else kit.piece(st, R, { shape: { type: 'rect', x: left, y: RY, w: right - left, h: RH, rx: 8 }, color: 'buttercup', depth: 3, texture: !print });
      for (let i = MIN; i <= 15; i++) {
        kit.el('line', { x1: xOf(i), y1: RY, x2: xOf(i), y2: RY + 26, stroke: '#3D352E', 'stroke-width': 2.4, 'stroke-linecap': 'round', class: 'pk-text' }, R);
        kit.el('text', { x: xOf(i), y: RY + 46, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#3D352E' }, R).textContent = i;
      }
      // 0.5cm 짧은 눈금 — 끝이 눈금 사이에 있을 때 가까운 쪽을 보게
      for (let i = MIN; i < 15; i++) kit.el('line', { x1: xOf(i + 0.5), y1: RY, x2: xOf(i + 0.5), y2: RY + 12, stroke: '#3D352E', 'stroke-width': 1.4, class: 'pk-text' }, R);
      kit.el('text', { x: right - 10, y: RY + RH - 10, 'text-anchor': 'end', 'font-size': 14, class: 'pk-text', fill: '#6E5A2A' }, R).textContent = 'cm';

      // ---- 쉬움 도움: 1cm 칸 점(번호는 맞힌 확인 뒤에만) ----
      const A = st.layer('aid');
      const bubbles = [];
      if (o.countAid && !print) {
        for (let k = 0; k < 16; k++) {
          const g = kit.el('g', { display: 'none' }, A);
          kit.el('circle', { r: 10, fill: kit.palette.rose.light, stroke: kit.palette.rose.dark, 'stroke-width': 1.5 }, g);
          const t = kit.el('text', { y: 5, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: kit.palette.rose.dark }, g);
          bubbles.push({ g, t });
        }
      }
      const guideL = []; // 띠 양 끝 점선
      if (o.guides && !print) for (let k = 0; k < 2; k++) guideL.push(kit.el('line', { y1: SY - 20, y2: RY + 28, stroke: kit.palette.rose.dark, 'stroke-width': 2, 'stroke-dasharray': '5 4', display: 'none' }, A));
      const readout = print ? null : kit.el('text', { x: W / 2, y: 34, 'text-anchor': 'middle', 'font-size': 20, 'font-weight': 700, class: 'pk-text', fill: kit.palette.lavender.dark }, st.layer('readout'));

      // ---- 띠(물건) ----
      const S = st.layer('strip');
      const strip = kit.el('g', { class: 'rl-strip' }, S);
      const Lp = L * U;
      // 판정 영역: 위아래로 넉넉히(휴대폰에서 0.55배로 줄어도 44px 이상)
      if (!readOnly && !print) kit.el('rect', { x: -6, y: -58, width: Lp + 12, height: 96, class: 'pk-hit' }, strip);
      const P = (shape, color, extra) => kit.piece(st, strip, Object.assign({ shape, color, depth: 2 }, extra || {}));
      const h = 28;
      if (kind === 'pencil') {
        P({ type: 'rect', x: 0, y: -h / 2, w: 16, h, rx: 5 }, 'rose');
        P({ type: 'rect', x: 14, y: -h / 2, w: 8, h }, 'lavender', { depth: 1 });
        P({ type: 'rect', x: 22, y: -h / 2, w: Lp - 22 - 26, h }, 'buttercup');
        P({ type: 'poly', points: `${Lp - 26},${-h / 2} ${Lp},0 ${Lp - 26},${h / 2}` }, 'peach');
        P({ type: 'poly', points: `${Lp - 9},-5 ${Lp},0 ${Lp - 9},5` }, 'ink', { depth: 0, flat: true });
      } else if (kind === 'crayon') {
        P({ type: 'rect', x: 0, y: -h / 2, w: Lp - 16, h, rx: 6 }, 'sky');
        P({ type: 'rect', x: 10, y: -h / 2 + 3, w: Lp - 40, h: h - 6, rx: 4 }, 'cream', { depth: 0, flat: true });
        P({ type: 'poly', points: `${Lp - 16},${-h / 2 + 3} ${Lp},-4 ${Lp},4 ${Lp - 16},${h / 2 - 3}` }, 'sky');
      } else if (kind === 'eraser') {
        P({ type: 'rect', x: 0, y: -h / 2 - 2, w: Lp, h: h + 4, rx: 7 }, 'rose');
        P({ type: 'rect', x: Lp * 0.3, y: -h / 2 - 2, w: Lp * 0.5, h: h + 4 }, 'sky', { depth: 1 });
      } else if (kind === 'ribbon') {
        P({ type: 'poly', points: `0,${-h / 2 + 2} ${Lp},${-h / 2 + 2} ${Lp - 10},0 ${Lp},${h / 2 - 2} 0,${h / 2 - 2}` }, 'mint');
      } else {
        P({ type: 'rect', x: 0, y: -h / 2 + 3, w: Lp, h: h - 6, rx: 4 }, 'peach');
      }
      // 왼쪽 끝 표시(작은 삼각) — '어디가 끝인지'를 보게
      if (!print) kit.el('path', { d: 'M0 -26 L-6 -36 L6 -36 Z', fill: kit.palette.rose.dark, class: 'rl-end' }, strip);

      // ---- 길이 고르기 단추 ----
      let read = null; let revealed = false; let checkedWrong = false; let start = 0;
      let choiceBar = null; let choiceList = [];
      const label = (n) => `${o.approx ? '약 ' : ''}${n} cm`;
      const autoChoices = () => {
        const R0 = Math.round(L);
        const c = new Set([R0 - 1, R0, R0 + 1]);
        if (broken) c.add(R0 + MIN);
        if (readOnly && start > 0) c.add(Math.round(start + L));
        if (o.moreChoices) c.add(R0 + 2);
        return [...c].filter((v) => v > 0 && v <= 20).sort((a, b) => a - b);
      };
      const buildChoices = () => {
        if (!choiceBar) return;
        choiceList = Array.isArray(o.choices) && o.choices.length ? o.choices.slice() : autoChoices();
        choiceBar.innerHTML = `<span style="font-weight:700;flex-basis:100%;text-align:center">${o.approx ? '약 몇 cm인가요?' : '몇 cm인가요?'}</span>${choiceList.map((v) => `<button type="button" class="pl-btn rl-pick" role="radio" tabindex="0" data-n="${v}" aria-checked="false" style="min-width:64px;min-height:48px;font-size:19px;padding-inline:10px">${label(v)}</button>`).join('')}`;
        paintChoices();
      };
      function paintChoices() {
        if (!choiceBar) return;
        choiceBar.querySelectorAll('button').forEach((b) => {
          const on = Number(b.dataset.n) === read;
          b.setAttribute('aria-checked', String(on));
          b.style.background = on ? 'var(--pc-lavender-light, #ECE6F8)' : '';
          b.style.boxShadow = on ? '0 0 0 3px var(--pc-lavender-layer, #9C8BD0)' : '';
        });
      }
      if (!print) {
        choiceBar = document.createElement('div');
        choiceBar.className = 'rl-choices';
        choiceBar.setAttribute('role', 'radiogroup');
        choiceBar.setAttribute('aria-label', '길이 고르기');
        choiceBar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-top:8px';
        box.appendChild(choiceBar);
        const choose = (n) => {
          read = n; revealed = false; paintChoices(); paint(); kit.tick();
          kit.recorder.log('ruler', state());
          kit.announce(`${label(read)}를 골랐어요.`);
        };
        choiceBar.addEventListener('click', (e) => {
          const b = e.target.closest('button[data-n]'); if (!b) return;
          choose(Number(b.dataset.n));
        });
        // 라디오 묶음 키보드 약속: ←→(↑↓)로 옆 보기를 고르며 초점도 옮긴다
        choiceBar.addEventListener('keydown', (e) => {
          const b = e.target.closest('button[data-n]'); if (!b) return;
          const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
          e.preventDefault();
          const all = [...choiceBar.querySelectorAll('button[data-n]')];
          const nb = all[(all.indexOf(b) + d + all.length) % all.length];
          nb.focus(); choose(Number(nb.dataset.n));
        });
      }

      const onRuler = (s) => s >= MIN - 0.001 && s + L <= 15 + 0.001;
      const state = () => ({ start: r1(start), end: r1(start + L), read });
      const minStart = -1; const maxStart = Math.floor(((W - 16 - X0) / U - L) * 2) / 2;
      const clampStart = (s) => Math.max(minStart, Math.min(maxStart, grid(s)));

      function paint(liveStart) {
        const s = liveStart == null ? start : liveStart;
        if (print) return;
        const on = onRuler(s);
        // 점선·칸 점: 띠가 자 위에 있을 때만
        guideL.forEach((ln, k) => { const x = xOf(k ? s + L : s); ln.setAttribute('x1', x); ln.setAttribute('x2', x); ln.setAttribute('display', on ? 'inline' : 'none'); });
        const n = Math.floor(L + 1e-6);
        bubbles.forEach((b, k) => {
          const show = on && k < n;
          b.g.setAttribute('display', show ? 'inline' : 'none');
          if (show) { kit.transform(b.g, { x: xOf(s + k + 0.5), y: RY + 68 }); b.t.textContent = revealed ? String(k + 1) : ''; }
        });
        if (!readout) return;
        const e = r1(s + L);
        if (revealed) readout.textContent = o.approx || !Number.isInteger(e) ? `끝이 ${Math.round(L)}에 가까워요 → 약 ${Math.round(L)} cm` : `${r1(s)}부터 ${e}까지 1cm가 ${Math.round(L)}번 → ${Math.round(L)} cm`;
        else if (checkedWrong && on) readout.textContent = `왼쪽 끝 ${tickText(s)}, 오른쪽 끝 ${tickText(e)}`;
        else readout.textContent = o.revealAfterCheck ? '길이: ? cm' : '';
      }
      const labelStrip = () => strip.setAttribute('aria-label', `${noun} 띠, 왼쪽 끝 ${onRuler(start) || start >= MIN ? `${tickText(start)} 눈금` : '자 밖'}. 왼쪽 오른쪽 화살표로 0.5cm씩 옮기고 Enter로 내려놓아요.`);
      const place = (s) => { start = clampStart(s); kit.transform(strip, { x: xOf(start), y: SY }); labelStrip(); };

      if (!readOnly && !print) {
        kit.drag(st, strip, {
          keyStep: U / 2,
          onStart() { kit.tick(); },
          // 방향키·끌기 모두 움직이는 즉시 상태가 바뀐다(키보드 학생이 Enter를 잊어도 확인에 반영되게)
          onMove(x) { kit.transform(strip, { y: SY }); const s = clampStart((x - X0) / U); if (s !== start) { start = s; revealed = false; checkedWrong = false; labelStrip(); } paint(); },
          snap(x) { const s = clampStart((x - X0) / U); return { x: xOf(s), y: SY }; },
          onDrop(x, _y, via) {
            start = clampStart((x - X0) / U); labelStrip();
            paint();
            kit.recorder.log('ruler', state());
            kit.announce(onRuler(start) ? `${noun} 왼쪽 끝 ${tickText(start)}, 오른쪽 끝 ${tickText(start + L)}` : `${noun}가 자 밖에 있어요.`);
            if (via) kit.tick();
          },
        });
      }

      const setState = (s) => {
        s = s || {};
        place(Number.isFinite(s.start) ? s.start : (o.start != null ? o.start : 4));
        read = Number.isFinite(s.read) ? s.read : null;
        revealed = false; checkedWrong = false;
        buildChoices();
        paint();
      };
      const initial = { start: o.start != null ? o.start : 4 };
      setState(initial);

      const celebrate = () => kit.spring(-14, 0, { stiffness: 300, damping: 8, onUpdate: (v) => kit.transform(strip, { y: SY + v }) });
      return {
        getState: state,
        setState,
        reset() { setState(initial); },
        setTarget() { buildChoices(); },
        solve(t) {
          const want = Math.round(t.length);
          if (!readOnly && (!onRuler(start) || (t.zero && !broken && start !== 0))) place(broken ? MIN : 0);
          read = want; revealed = false; checkedWrong = false; paintChoices(); paint();
        },
        check(t, opts) {
          const want = Math.round(t.length); const s = r1(start); const e = r1(start + L);
          const needZero = !!t.zero && !broken && !readOnly;
          const quiet = !!(opts && opts.forHint);
          // 힌트용 검사는 표시를 바꾸지 않는다. revealAfterCheck이면 틀린 확인에도 양 끝 눈금 안내를 띄우지 않는다
          const out = (res) => { if (quiet) return res; checkedWrong = !res.correct && !res.incomplete && !o.revealAfterCheck; revealed = !!res.correct; paint(); return res; };
          if (!onRuler(start)) {
            return out({ correct: false, feedback: `${noun}가 자 밖으로 나가 있어요. 띠 전체가 자의 눈금 위에 있어야 잴 수 있어요.`, hint: broken ? `이 자는 ${MIN}부터 있어요. 왼쪽 끝을 ${eul(MIN)} 가리키는 긴 눈금에 맞춰 봐요.` : '왼쪽 끝을 0 눈금 선에 맞춰 봐요.' });
          }
          if (needZero && s !== 0) {
            const fb = read === Math.round(e) ? `0에 맞추지 않았어요. 왼쪽 끝이 ${tickText(s)}에 있어서 끝 눈금 ${e}은 길이가 아니에요. 0에서 시작해야 끝 눈금의 수가 바로 길이가 돼요.`
              : read === want ? '길이는 맞게 세었어요! 이번에는 왼쪽 끝을 0에 맞추어 확인해 보세요. 0에 맞추면 끝 눈금만 읽으면 돼요.'
                : `0에 맞추지 않았어요. 지금 왼쪽 끝은 ${tickText(s)}에 있어요. 왼쪽 끝을 0 눈금에 딱 맞춰요.`;
            return out({ correct: false, feedback: fb.replace(`눈금 ${e}은`, `눈금 ${e}${hasB(e) ? '은' : '는'}`), hint: '띠를 끌어(또는 ← → 키) 왼쪽 끝 세모가 0 눈금 선에 닿게 해요.' });
          }
          if (read == null) return { correct: false, incomplete: true, feedback: '이제 몇 cm인지 아래에서 골라요.', hint: `왼쪽 끝 ${tickText(s)}에서 오른쪽 끝까지 1cm 칸을 세어요.` };
          if (read === want) {
            if (!quiet) celebrate();
            const fb = t.approx || o.approx ? `맞아요! 끝이 ${want}에 더 가까워서 약 ${want}cm예요.`
              : s === 0 ? `맞아요! 0에서 ${e}까지예요. 0에 맞추면 끝 눈금 ${e}${hasB(e) ? '이' : '가'} 바로 길이, ${want}cm예요.`
                : `맞아요! ${s}부터 ${e}까지 1cm가 ${want}번 들어가요. 그래서 ${want}cm예요.`;
            if (!quiet) kit.recorder.log('ruler', Object.assign({ ok: true }, state()));
            return out({ correct: true, feedback: fb });
          }
          const eR = Math.round(e);
          if (s !== 0 && read === eR && eR !== want) {
            return out({ correct: false, feedback: `끝 눈금의 수 ${eul(eR)} 그대로 읽었어요. ${noun}${kind === 'pencil' || kind === 'stick' ? '은' : '는'} ${tickText(s)}에서 시작해요. 끝 숫자가 아니라 1cm 칸이 몇 개인지 세어요.`, hint: `${s}에서 ${s + 1}까지가 1칸, ${s + 1}에서 ${s + 2}까지가 2칸 … 이렇게 끝까지 세어요.` });
          }
          if ((t.approx || o.approx) && Math.abs(read - L) < 1) {
            return out({ correct: false, feedback: `끝이 ${Math.floor(e)}과 ${Math.ceil(e)} 사이에 있어요. 어느 눈금에 더 가까운지 다시 보세요.`.replace(/(\d+)과/, (m, a) => `${a}${hasB(Number(a)) ? '과' : '와'}`), hint: '끝에서 더 가까운 긴 눈금의 수를 읽고 앞에 "약"을 붙여요.' });
          }
          if (read === want + 1) return out({ correct: false, feedback: '눈금 선을 센 것 같아요. 선이 아니라 선과 선 사이의 1cm 칸을 세어요.', hint: `시작하는 선(${s})은 세지 않아요. 칸 하나가 1cm예요.` });
          if (read === want - 1) return out({ correct: false, feedback: '한 칸을 덜 센 것 같아요. 오른쪽 끝까지 다시 세어 볼까요?', hint: `왼쪽 끝 ${s}에서 오른쪽 끝 ${tickText(e)}까지 1cm 칸을 하나씩 짚으며 세어요.` });
          return out({ correct: false, feedback: '다시 세어 볼까요? 왼쪽 끝과 오른쪽 끝이 어느 눈금에 닿았는지 먼저 보세요.', hint: `왼쪽 끝 ${tickText(s)}에서 오른쪽 끝 ${tickText(e)}까지 1cm 칸을 하나씩 세어요.` });
        },
        // 힌트 단추: 양 끝 눈금 수·길이를 말하지 않고, 지금 실수의 까닭과 세는 방법만 알려 준다
        hint(t, opts) {
          const want = Math.round(t.length); const s = r1(start); const e = r1(start + L);
          const needZero = !!t.zero && !broken && !readOnly;
          const approx = t.approx || o.approx;
          // 힌트 단계(새 계약): 1 = 방법만(시도 전에도), 2 = 지금 실수의 까닭, 3 = 칸 세기 한 걸음(양 끝 눈금, 길이는 말하지 않음)
          const lvWant = opts && Number.isInteger(opts.level) ? opts.level : 1;
          const att = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
          const lv = Math.max(1, Math.min(3, lvWant, att == null ? 3 : att >= 2 ? 3 : att >= 1 ? 2 : 1));
          if (!onRuler(start)) return { hint: '띠 전체가 자의 눈금 위에 올라와야 잴 수 있어요. 띠를 자 위로 옮겨요.' };
          if (needZero && s !== 0) return { hint: '0에 맞추면 끝 눈금의 수가 바로 길이가 돼요. 왼쪽 끝 세모를 0 눈금 선에 맞춰요.' };
          if (read === want) return { hint: '알맞은 길이를 골랐어요.', correct: true };
          if (lv <= 1) return { hint: approx ? '끝이 두 긴 눈금 사이에 있으면 어느 쪽 긴 눈금에 더 가까운지 보고 그 수 앞에 "약"을 붙여요.' : '길이는 1cm 칸이 몇 개인지예요. 왼쪽 끝이 닿은 눈금에서 오른쪽 끝까지 칸을 하나씩 짚으며 세어요.', correct: false };
          if (lv >= 3) return { hint: approx ? `끝은 ${Math.floor(e)}과 ${Math.ceil(e)} 사이에 있어요. 가운데 짧은 눈금보다 어느 쪽에 있는지 보세요.`.replace(/(\d+)과/, (m, a) => `${a}${hasB(Number(a)) ? '과' : '와'}`) : `${s}에서 ${s + 1}까지가 1칸, ${s + 1}에서 ${s + 2}까지가 2칸 … 이렇게 오른쪽 끝 ${tickText(e)}까지 세어요.`, correct: false };
          if (read == null) return { hint: approx ? '끝이 닿은 곳에서 더 가까운 긴 눈금을 찾아요. 그 수 앞에 "약"을 붙여 골라요.' : '왼쪽 끝에서 오른쪽 끝까지 1cm 칸을 하나씩 짚으며 세어 보고 골라요.' };
          if (s !== 0 && read === Math.round(e)) return { hint: '끝 눈금의 수는 0에서 시작할 때만 길이예요. 시작한 눈금부터 1cm 칸이 몇 개인지 세어요.', correct: false };
          if (approx) return { hint: '끝이 두 긴 눈금 사이에 있으면 가운데 짧은 눈금을 봐요. 끝이 어느 쪽 긴 눈금에 더 가까운지 보고 그 수를 읽어요.', correct: false };
          if (read === want + 1) return { hint: '눈금 선이 아니라 선과 선 사이의 칸을 세어요. 시작하는 선은 세지 않아요.', correct: false };
          if (read === want - 1) return { hint: '오른쪽 끝에 닿은 마지막 칸까지 세었는지 봐요. 칸 하나가 1cm예요.', correct: false };
          return { hint: '왼쪽 끝이 닿은 눈금부터 1cm 칸을 하나씩 짚으며 세어요.', correct: false };
        },
        // 모의 수업·자동 검사용 오답: 0에 안 맞추고 끝 눈금 읽기(부러진 자도 같다) / '약'에서 먼 쪽 눈금 / 눈금 선을 세어 하나 더 / 한 칸 덜
        // 지금 띠·보기와 같은 오답은 건너뛴다(같은 오답을 다시 내면 시도로 세지 않는다)
        wrongAnswer(t) {
          const want = Math.round(t.length); const approx = t.approx || o.approx;
          const ok = (n) => n != null && n !== want && n > 0 && (!choiceList.length || choiceList.includes(n));
          const fit = (s0) => (onRuler(s0) ? s0 : broken ? MIN : 0);
          const list = [];
          const add = (s0, n) => { s0 = fit(s0); if (ok(n)) list.push({ start: s0, end: r1(s0 + L), read: n }); };
          const far = L - Math.floor(L) >= 0.5 ? Math.floor(L) : Math.ceil(L);
          if (readOnly) { if (start > 0) add(start, Math.round(start + L)); add(start, want + 1); add(start, want - 1); }
          else if (approx) { add(0, far); add(0, want + 1); add(0, want - 1); }
          else {
            const s1 = broken ? MIN : t.zero ? 1 : start;
            add(s1, Math.round(s1 + L)); // 끝 눈금을 그대로 읽기
            if (broken && onRuler(MIN + 1)) add(MIN + 1, Math.round(MIN + 1 + L));
            add(broken ? MIN : 0, want + 1); add(broken ? MIN : 0, want - 1);
          }
          choiceList.filter(ok).forEach((n) => add(readOnly ? start : broken ? MIN : 0, n));
          const cur = state();
          return list.find((x) => x.start !== cur.start || x.read !== cur.read) || list[0] || null;
        },
        // 교사 시연: 띠가 0(부러진 자는 첫 눈금)으로 미끄러져 가고, 1cm 칸이 하나씩 세어진 뒤 길이가 나온다
        async demo(t) {
          const want = Math.round((t && t.length) || L);
          const from = start; const to = broken ? MIN : 0;
          read = null; revealed = false; checkedWrong = false; paintChoices(); paint();
          await kit.tween(900, (q) => { kit.transform(strip, { x: xOf(from + (to - from) * q), y: SY }); });
          start = to; labelStrip(); paint();
          revealed = true;
          for (let k = 0; k < bubbles.length && k < want; k++) { bubbles[k].t.textContent = String(k + 1); kit.tick(); await kit.wait(260); }
          read = want; paintChoices(); paint(); celebrate();
          kit.announce(`${to}부터 ${r1(to + L)}까지, ${want}cm`);
        },
      };
    },
  });
})(window.PaperKit);
