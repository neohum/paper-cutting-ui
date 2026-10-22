/**
 * PaperCut UI - 3D Papercraft Animation Studio Controller
 * Handles live preview simulation, target switching, preset triggers, and CSS code generator.
 */

(function (root) {
  'use strict';

  const TOKENS = {
    stiffness: 280,
    damping: 24,
    mass: 1.0,
    perspectiveDepth: '1200px',
    lightDistance: '800px',
    airDrag: 0.15,
    curlRadius: '40px',
    bounce: 0.25,
    friction: 0.08,
    shearAngle: '12deg',
    tearThreshold: '60px'
  };

  const PRESETS = [
    {
      id: 'popup',
      name: '01. 팝업북 스프링 (Pop-up Spring)',
      className: 'pc-anim-popup',
      hoverClass: 'pc-hover-popup',
      desc: '어린이 3D 팝업북처럼 바닥에서 탄력 있게 솟아오르는 페이퍼 입체감 효과',
      recommended: '아이콘, 배지, 툴팁, 토스트, 아바타',
      duration: '0.65s'
    },
    {
      id: 'unfold',
      name: '02. 오리가미 언폴드 (Origami Unfold)',
      className: 'pc-anim-unfold',
      hoverClass: 'pc-hover-unfold',
      desc: '접혀 있던 색종이/편지지가 3D 원근 접힘선을 따라 앞으로 펼쳐지는 효과',
      recommended: '다이얼로그 모달, 드롭다운 메뉴, 알림창, 카드',
      duration: '0.55s'
    },
    {
      id: 'flutter',
      name: '03. 공중 부유 플러터 (Paper Flutter)',
      className: 'pc-anim-flutter',
      hoverClass: 'pc-hover-flutter',
      desc: '미풍에 종이가 공중에 떠서 살랑살랑 부드럽게 펄럭이는 자연스러운 유기적 움직임',
      recommended: '히어로 열기구 아이콘, 플로팅 액션 버튼, 장식 오브젝트',
      duration: '3.2s'
    },
    {
      id: 'peel',
      name: '04. 스티커 필오프 (Sticker Peel-off)',
      className: 'pc-anim-peel',
      hoverClass: 'pc-hover-peel',
      desc: '마스킹 테이프나 크래프트 스티커 한쪽 모서리가 살짝 들뜨며 그림자가 길어지는 효과',
      recommended: '버튼 호버, 카드 호버, 가격표 태그, 와시 테이프',
      duration: '0.4s'
    },
    {
      id: 'stamp',
      name: '05. 왁스 실링 스탬프 (Stamp Press)',
      className: 'pc-anim-stamp',
      hoverClass: 'pc-hover-stamp',
      desc: '수제 왁스 실링이나 고무 인장을 꾹 눌렀다 뗄 때의 물리적 압축과 탄성 복원',
      recommended: '버튼 클릭, 체크박스 체크, 라디오버튼 선택, 좋아요',
      duration: '0.45s'
    },
    {
      id: 'snip',
      name: '06. 페이퍼 커팅 가위질 (Scissors Snip)',
      className: 'pc-anim-snip',
      hoverClass: 'pc-hover-snip',
      desc: '가위로 종이를 싹둑 자를 때 발생하는 순간적인 전단 미세 진동 효과',
      recommended: '삭제 액션, 가위 아이콘, 절취선 티켓, 구분선 분할',
      duration: '0.42s'
    },
    {
      id: 'flip',
      name: '07. 책장 넘김 3D 플립 (Page Turn)',
      className: 'pc-anim-flip',
      hoverClass: 'pc-hover-flip',
      desc: '두꺼운 스케치북이나 일기장 책장을 3D 원근감으로 뒤집어 넘기는 모션',
      recommended: '페이지네이션 stubs, 플래시 카드, 북마크 전환',
      duration: '0.75s'
    },
    {
      id: 'accordion',
      name: '08. 아코디언 주름 (Accordion Pleat)',
      className: 'pc-anim-accordion',
      hoverClass: 'pc-hover-accordion',
      desc: '부채꼴 색종이나 주름진 종이 서랍이 지그재그로 늘어났다 줄어드는 효과',
      recommended: '아코디언 리스트, 바텀 서랍, 모바일 내비게이션 드로어',
      duration: '0.48s'
    },
    {
      id: 'hinge-spring',
      name: '09. 팝업북 힌지 스프링 (Hinge Spring)',
      className: 'pc-anim-hinge-spring',
      hoverClass: 'pc-hover-hinge-spring',
      desc: '바닥 힌지선을 축으로 각도 연동형 3D 원근 입체 전개 및 스프링 안착 모션',
      recommended: '팝업 모달, 다이얼로그, 3D 선물상자 카드, 플로팅 메뉴',
      duration: '0.72s'
    },
    {
      id: 'wax-slam',
      name: '10. 왁스 실링 쿵 낙하 & 스쿼시 (Wax Slam)',
      className: 'pc-anim-wax-slam',
      hoverClass: 'pc-hover-wax-slam',
      desc: '공중에서 쿵 낙하하며 실링이 짓눌리고 방사형 림이 팽창하는 임팩트 스쿼시 물리',
      recommended: '스탬프 승인 버튼, 결제 완료 배지, 봉인 라벨, 확인 모달',
      duration: '0.58s'
    },
    {
      id: 'snip-split',
      name: '11. 가위선 전단 절단 (Kirigami Snip Split)',
      className: 'pc-anim-snip-split',
      hoverClass: 'pc-hover-snip-split',
      desc: '절단선 분리 시 발생하는 미세한 고주파 탄성 전단 진동 및 0.15초 잔여 흔들림 연출',
      recommended: '쿠폰 절취, 삭제 액션, 티켓 분리선, 탭 닫기',
      duration: '0.5s'
    },
    {
      id: 'deckle-tear',
      name: '12. 데클 엣지 찢김 (Deckle Edge Tear)',
      className: 'pc-anim-deckle-tear',
      hoverClass: 'pc-hover-deckle-tear',
      desc: '수제 한지 절취선이 당겨지다 분리 임계값 초과 시 입체 파열 햅틱 찢김 모션',
      recommended: '영수증 뜯기, 스크래치 티켓, 태그 제거, 봉투 개봉',
      duration: '0.62s'
    }
  ];

  /**
   * 2nd-Order ODE Spring-Damper Physics Solver
   * m * a + c * v + k * (x - target) = 0
   */
  function createSpringSolver(config = {}) {
    const stiffness = typeof config.stiffness === 'number' ? config.stiffness : TOKENS.stiffness;
    const damping = typeof config.damping === 'number' ? config.damping : TOKENS.damping;
    const mass = typeof config.mass === 'number' ? config.mass : TOKENS.mass;
    const precision = typeof config.precision === 'number' ? config.precision : 0.001;
    const velocityThreshold = typeof config.velocityThreshold === 'number' ? config.velocityThreshold : 0.001;

    let target = typeof config.target === 'number' ? config.target : (typeof config.to === 'number' ? config.to : 1.0);
    let current = typeof config.current === 'number' ? config.current : (typeof config.from === 'number' ? config.from : 0.0);
    let velocity = typeof config.velocity === 'number' ? config.velocity : (typeof config.initialVelocity === 'number' ? config.initialVelocity : 0.0);

    return {
      stiffness,
      damping,
      mass,
      precision,
      velocityThreshold,
      step(dt = 1 / 60) {
        if (this.isSettled()) return current;
        // Clamp dt to avoid numerical instability
        const clampedDt = Math.min(Math.max(dt, 0.001), 0.064);
        const springForce = -stiffness * (current - target);
        const dampingForce = -damping * velocity;
        const acceleration = (springForce + dampingForce) / mass;

        // Semi-implicit Euler integration
        velocity += acceleration * clampedDt;
        current += velocity * clampedDt;

        if (this.isSettled()) {
          current = target;
          velocity = 0;
        }
        return current;
      },
      isSettled() {
        return Math.abs(current - target) <= precision && Math.abs(velocity) <= velocityThreshold;
      },
      getValue() {
        return current;
      },
      getVelocity() {
        return velocity;
      },
      getTarget() {
        return target;
      },
      setTarget(newTarget) {
        target = newTarget;
      },
      reset(newCurrent = 0, newTarget = 1, newVelocity = 0) {
        current = newCurrent;
        target = newTarget;
        velocity = newVelocity;
      },
      solveAll(maxSteps = 600, dt = 1 / 60) {
        const frames = [];
        let time = 0;
        for (let i = 0; i < maxSteps; i++) {
          frames.push({ time, value: current, velocity });
          if (this.isSettled()) break;
          this.step(dt);
          time += dt;
        }
        return frames;
      }
    };
  }

  function isReducedMotion() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }

  /**
   * requestAnimationFrame Sleep-on-Settle Motion Controller
   * Computes spring physics at 60fps and injects into CSS custom properties or DOM styles.
   * Cancels rAF immediately upon settle to achieve zero idle CPU/battery consumption.
   */
  function animateSpring(targetOrOptions, maybeOptions) {
    let el = null;
    let options = {};

    if (targetOrOptions && (targetOrOptions.nodeType || typeof targetOrOptions.style === 'object')) {
      el = targetOrOptions;
      options = maybeOptions || {};
    } else {
      options = targetOrOptions || {};
      el = options.target || options.element || null;
    }

    const {
      from = 0,
      to = 1,
      stiffness = TOKENS.stiffness,
      damping = TOKENS.damping,
      mass = TOKENS.mass,
      cssProperty = null,
      onUpdate = null,
      onSettle = null,
      precision = 0.001,
      velocityThreshold = 0.001
    } = options;

    const solver = createSpringSolver({
      from,
      target: to,
      stiffness,
      damping,
      mass,
      precision,
      velocityThreshold
    });

    let rafId = null;
    let isRunning = false;
    let isSettled = false;
    let lastTime = null;

    let resolvePromise;
    let rejectPromise;
    const promise = new Promise((res, rej) => {
      resolvePromise = res;
      rejectPromise = rej;
    });

    // Immediate settle for reduced motion accessibility
    if (isReducedMotion()) {
      isSettled = true;
      isRunning = false;
      solver.reset(to, to, 0);
      if (el && cssProperty && typeof el.style?.setProperty === 'function') {
        el.style.setProperty(cssProperty, typeof to === 'number' && !cssProperty.endsWith('unit') ? `${to}` : to);
      }
      if (typeof onUpdate === 'function') onUpdate(to, 0);
      if (typeof onSettle === 'function') onSettle(to);
      resolvePromise(to);
      return {
        stop: () => {},
        cancel: () => {},
        isRunning: () => false,
        isSettled: () => true,
        solver,
        promise
      };
    }

    function tick(timestamp) {
      if (!isRunning) return;

      if (!lastTime) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      const val = solver.step(dt);
      const vel = solver.getVelocity();

      if (el && cssProperty && typeof el.style?.setProperty === 'function') {
        el.style.setProperty(cssProperty, `${val}`);
      }

      if (typeof onUpdate === 'function') {
        onUpdate(val, vel);
      }

      if (solver.isSettled()) {
        isRunning = false;
        isSettled = true;
        if (el && cssProperty && typeof el.style?.setProperty === 'function') {
          el.style.setProperty(cssProperty, `${to}`);
        }
        if (typeof onSettle === 'function') {
          onSettle(to);
        }
        resolvePromise(to);
        return;
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        rafId = requestAnimationFrame(tick);
      }
    }

    isRunning = true;
    if (typeof requestAnimationFrame !== 'undefined') {
      rafId = requestAnimationFrame(tick);
    } else {
      // Synchronous tick loop for headless / test environments
      while (!solver.isSettled()) {
        const val = solver.step(1 / 60);
        if (el && cssProperty && typeof el.style?.setProperty === 'function') {
          el.style.setProperty(cssProperty, `${val}`);
        }
        if (typeof onUpdate === 'function') onUpdate(val, solver.getVelocity());
      }
      isSettled = true;
      isRunning = false;
      if (el && cssProperty && typeof el.style?.setProperty === 'function') {
        el.style.setProperty(cssProperty, `${to}`);
      }
      if (typeof onSettle === 'function') onSettle(to);
      resolvePromise(to);
    }

    const controller = {
      stop() {
        isRunning = false;
        if (rafId && typeof cancelAnimationFrame !== 'undefined') {
          cancelAnimationFrame(rafId);
        }
      },
      cancel() {
        controller.stop();
        rejectPromise(new Error('Animation cancelled'));
      },
      isRunning() {
        return isRunning;
      },
      isSettled() {
        return isSettled;
      },
      solver,
      promise
    };

    return controller;
  }

  /**
   * Kirigami Interaction Trigger Helper
   */
  function triggerInteraction(element, interactionType, options = {}) {
    if (!element) return;
    const classMap = {
      'hinge-spring': 'pc-anim-hinge-spring',
      'wax-slam': 'pc-anim-wax-slam',
      'snip-split': 'pc-anim-snip-split',
      'deckle-tear': 'pc-anim-deckle-tear',
      'popup': 'pc-anim-popup',
      'unfold': 'pc-anim-unfold',
      'flutter': 'pc-anim-flutter',
      'peel': 'pc-anim-peel',
      'stamp': 'pc-anim-stamp',
      'snip': 'pc-anim-snip',
      'flip': 'pc-anim-flip',
      'accordion': 'pc-anim-accordion'
    };
    const cls = classMap[interactionType] || interactionType;
    if (element.classList) {
      element.classList.remove(cls);
      if (typeof element.offsetWidth === 'number') {
        void element.offsetWidth; // force reflow
      }
      element.classList.add(cls);
    }

    if (options.haptic && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(options.haptic === true ? [15, 30, 20] : options.haptic);
    }

    if (options.onComplete) {
      if (typeof element.addEventListener === 'function') {
        const handler = () => {
          element.removeEventListener('animationend', handler);
          options.onComplete();
        };
        element.addEventListener('animationend', handler, { once: true });
      } else if (typeof queueMicrotask === 'function') {
        queueMicrotask(options.onComplete);
      } else {
        setTimeout(options.onComplete, 0);
      }
    }
  }

  /**
   * Animated Paper-Cutting Checkbox / Radio / Switch Trigger (pcCutSnipCarve)
   * Synchronizes blade cut progress (--pc-cut-progress), shear vibration,
   * 3D scrap flap lift, Web Audio snip sound, and haptic feedback.
   */
  function playPaperSound(type = 'snip') {
    const extFn = (typeof window !== 'undefined' && typeof window.playPaperSound === 'function' && window.playPaperSound) ||
                  (typeof globalThis !== 'undefined' && typeof globalThis.playPaperSound === 'function' && globalThis.playPaperSound);
    if (extFn && extFn !== playPaperSound) {
      try { extFn(type); } catch (_) {}
    }
  }

  function triggerCutCheck(element, options = {}) {
    if (!element) {
      const empty = Promise.resolve(false);
      empty.cancel = () => {};
      return empty;
    }
    const checked = options.checked !== undefined
      ? Boolean(options.checked)
      : (element.getAttribute && (element.getAttribute('data-state') === 'checked' || element.getAttribute('aria-checked') === 'true'));
    const fromVal = checked ? 0 : 1;
    const toVal = checked ? 1 : 0;
    const duration = typeof options.duration === 'number' ? options.duration : 360;

    // Web Audio paper scissors snip sound & haptic feedback
    if (options.sound !== false) {
      playPaperSound('snip');
    }
    if (options.haptic !== false && typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(Array.isArray(options.haptic) ? options.haptic : [12, 20, 15]);
      } catch (_) {}
    }

    const box = (element.querySelector && element.querySelector('.pc-checkbox-box, .pc-radio-box, .pc-toggle-track')) || element;

    if (isReducedMotion() || duration <= 1) {
      if (element.style && typeof element.style.setProperty === 'function') {
        element.style.setProperty('--pc-cut-progress', String(toVal));
      }
      if (box !== element && box.style && typeof box.style.setProperty === 'function') {
        box.style.setProperty('--pc-cut-progress', String(toVal));
      }
      if (element.classList) {
        element.classList.remove('pc-anim-cut-carve');
        element.classList.toggle('is-cut-complete', checked);
      }
      if (typeof options.onComplete === 'function') options.onComplete(checked);
      const immediate = Promise.resolve(checked);
      immediate.cancel = () => {};
      return immediate;
    }

    if (element.classList) {
      element.classList.remove('pc-anim-cut-carve');
      if (typeof element.offsetWidth === 'number') void element.offsetWidth;
      element.classList.add('pc-anim-cut-carve');
      element.classList.toggle('is-cutting', checked);
      element.classList.toggle('is-resealing', !checked);
    }

    const ctrl = animateSpring(element, {
      from: fromVal,
      to: toVal,
      stiffness: 320,
      damping: 26,
      mass: 0.9,
      cssProperty: '--pc-cut-progress',
      onUpdate(val) {
        const clamped = Math.max(0, Math.min(1, val));
        if (element.style && typeof element.style.setProperty === 'function') {
          element.style.setProperty('--pc-cut-progress', clamped.toFixed(4));
        }
        if (box !== element && box.style && typeof box.style.setProperty === 'function') {
          box.style.setProperty('--pc-cut-progress', clamped.toFixed(4));
        }
      },
      onSettle() {
        if (element.style && typeof element.style.setProperty === 'function') {
          element.style.setProperty('--pc-cut-progress', String(toVal));
        }
        if (box !== element && box.style && typeof box.style.setProperty === 'function') {
          box.style.setProperty('--pc-cut-progress', String(toVal));
        }
        if (element.classList) {
          element.classList.remove('pc-anim-cut-carve');
          element.classList.toggle('is-cut-complete', checked);
        }
        if (typeof options.onComplete === 'function') options.onComplete(checked);
      }
    });

    const resPromise = ctrl.promise.then(() => checked);
    resPromise.cancel = () => ctrl.cancel();
    return resPromise;
  }

  const PaperCutMotion = {
    tokens: TOKENS,
    PRESETS,
    createSpringSolver,
    animate: animateSpring,
    spring: animateSpring,
    isReducedMotion,
    triggerInteraction,
    triggerCutCheck
  };

  let currentPreset = PRESETS[0];
  let currentTargetType = 'icon';
  let isLooping = true;
  let animSpeed = 1.0;

  function initAnimationStudio() {
    const stageTarget = document.getElementById('anim-stage-target');
    if (!stageTarget) return;

    // Preset Chips
    const presetContainer = document.getElementById('anim-preset-chips');
    if (presetContainer) {
      presetContainer.innerHTML = PRESETS.map(p => `
        <button type="button" class="pc-anim-preset-chip ${p.id === currentPreset.id ? 'is-active' : ''}" data-preset="${p.id}">
          <span class="pc-inline-icon is-xs" data-icon="sparkles"></span>
          <span>${p.name.split(' (')[0]}</span>
        </button>
      `).join('');

      presetContainer.querySelectorAll('.pc-anim-preset-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          presetContainer.querySelectorAll('.pc-anim-preset-chip').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const pId = btn.getAttribute('data-preset');
          currentPreset = PRESETS.find(p => p.id === pId) || PRESETS[0];
          applyAnimation();
        });
      });
    }

    // Target Selection Tabs
    const targetTabs = document.querySelectorAll('.pc-anim-target-tab');
    targetTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        targetTabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        currentTargetType = tab.getAttribute('data-target-type') || 'icon';
        renderTargetElement();
        applyAnimation();
      });
    });

    // Speed Slider & Quick Preset Buttons
    const speedSlider = document.getElementById('anim-speed-slider');
    const speedVal = document.getElementById('anim-speed-val');
    const speedPresets = document.querySelectorAll('.pc-anim-speed-btn');

    speedPresets.forEach(btn => {
      btn.addEventListener('click', () => {
        speedPresets.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        animSpeed = parseFloat(btn.getAttribute('data-speed'));
        if (speedSlider) speedSlider.value = animSpeed;
        if (speedVal) speedVal.textContent = `${animSpeed.toFixed(1)}x`;
        applyAnimation();
      });
    });

    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        animSpeed = parseFloat(e.target.value);
        if (speedVal) speedVal.textContent = `${animSpeed.toFixed(1)}x`;
        speedPresets.forEach(btn => {
          btn.classList.toggle('is-active', Math.abs(parseFloat(btn.getAttribute('data-speed')) - animSpeed) < 0.05);
        });
        applyAnimation();
      });
    }

    // Loop Toggle
    const loopToggle = document.getElementById('anim-loop-toggle');
    if (loopToggle) {
      loopToggle.addEventListener('change', (e) => {
        isLooping = e.target.checked;
        applyAnimation();
      });
    }

    // Replay Button
    const replayBtn = document.getElementById('anim-btn-replay');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        replayAnimation();
      });
    }

    // Copy Code Button
    const copyBtn = document.getElementById('anim-btn-copy-code');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const codeText = document.getElementById('anim-code-preview')?.textContent || '';
        if (navigator.clipboard) {
          navigator.clipboard.writeText(codeText).then(() => {
            if (window.triggerPaperToast) {
              window.triggerPaperToast('애니메이션 CSS 코드가 클립보드에 복사되었습니다!', 'mint', 'check');
            }
          });
        }
      });
    }

    renderTargetElement();
    applyAnimation();
  }

  function renderTargetElement() {
    const stageTarget = document.getElementById('anim-stage-target');
    if (!stageTarget) return;

    let html = '';
    if (currentTargetType === 'icon') {
      html = `
        <div class="pc-anim-wrapper" style="width: 96px; height: 96px; display: flex; align-items: center; justify-content: center;">
          <span class="pc-inline-icon is-xl" data-icon="sparkles"></span>
        </div>
      `;
    } else if (currentTargetType === 'button') {
      html = `
        <button type="button" class="pc-svg-kirigami-btn" style="border:none; background:transparent; padding:0; cursor:pointer;" title="오리가미 액션 버튼">
          <svg class="pc-kirigami-btn-svg" viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:200px; height:50px; display:block;">
            <defs>
              <filter id="anim-stage-btn-sh" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.48"/>
                <feDropShadow dx="0" dy="3.5" stdDeviation="1.8" flood-color="#2E1E14" flood-opacity="0.26"/>
                <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
              </filter>
            </defs>
            <rect x="8" y="7" width="204" height="40" rx="10" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#anim-stage-btn-sh)"/>
            <rect x="11" y="10" width="198" height="34" rx="8" fill="#FFFDF9"/>
            <g transform="translate(24, 15) scale(0.38)">
              <circle cx="16" cy="18" r="9" fill="#F7BA9E"/>
              <circle cx="16" cy="18" r="5" fill="#FFFDF9"/>
              <circle cx="16" cy="46" r="9" fill="#F7BA9E"/>
              <circle cx="16" cy="46" r="5" fill="#FFFDF9"/>
              <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#FFFDF9" stroke-width="6" stroke-linecap="round"/>
              <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#A3D8C3" stroke-width="3" stroke-linecap="round"/>
            </g>
            <text x="56" y="32" font-family="'Nanum Square Round', sans-serif" font-size="14" font-weight="800" fill="#1C4736" letter-spacing="-0.3">오리가미 액션 버튼</text>
          </svg>
        </button>
      `;
    } else if (currentTargetType === 'card') {
      html = `
        <div class="pc-card" style="width: 240px; padding: 18px; background: #FFFFFF; border-radius: 16px; border: 1.5px solid #E6DCCB;">
          <div class="pc-washi-tape pc-washi-tape-peach"></div>
          <div style="font-weight: 800; font-size: 15px; color: #37281E; margin-bottom: 6px;">페이퍼 엽서 카드</div>
          <p style="font-size: 12.5px; color: #7A6958; margin: 0;">종이의 결이 살아 숨쉬는 수제 카드스톡입니다.</p>
        </div>
      `;
    } else if (currentTargetType === 'badge') {
      html = `
        <span class="pc-badge pc-badge--stamp pc-badge--lavender" style="font-size: 15px; padding: 8px 18px; font-weight: 800;">
          <span class="pc-inline-icon is-sm" data-icon="heart"></span>
          <span>파스텔 크래프트 실링</span>
        </span>
      `;
    } else if (currentTargetType === 'alert') {
      html = `
        <div class="pc-alert pc-alert-success" style="width: 320px; margin: 0;">
          <div class="pc-alert-icon-box"><span class="pc-inline-icon is-sm" data-icon="check"></span></div>
          <div class="pc-alert-content">
            <div class="pc-alert-title">페이퍼 알림 메시지</div>
            <div class="pc-alert-desc" style="font-size: 12px;">애니메이션과 결합된 알림 배너입니다.</div>
          </div>
        </div>
      `;
    } else if (currentTargetType === 'checkbox') {
      html = `
        <label class="pc-checkbox-label" style="font-size: 15px; background: #FAF7F0; padding: 12px 18px; border-radius: 12px; border: 1.5px solid #E6DCCB;">
          <input type="checkbox" class="pc-checkbox-input" checked>
          <span class="pc-checkbox-box"></span>
          <span>3D 오리가미 스탬프 체크</span>
        </label>
      `;
    } else if (currentTargetType === 'radio') {
      html = `
        <div class="pc-radio-group is-horizontal" style="background: #FAF7F0; padding: 12px 18px; border-radius: 12px; border: 1.5px solid #E6DCCB;">
          <label class="pc-radio-label">
            <input type="radio" name="anim-demo-radio" class="pc-radio-input" checked>
            <span class="pc-radio-box"></span>
            <span>민트 실링</span>
          </label>
          <label class="pc-radio-label pc-radio-peach">
            <input type="radio" name="anim-demo-radio" class="pc-radio-input">
            <span class="pc-radio-box"></span>
            <span>피치 실링</span>
          </label>
        </div>
      `;
    }

    stageTarget.innerHTML = html;

    // Hydrate icons
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(stageTarget);
    }
  }

  function applyAnimation() {
    const stageTarget = document.getElementById('anim-stage-target');
    if (!stageTarget) return;

    const animEl = stageTarget.firstElementChild;
    if (!animEl) return;

    // Remove old anim classes
    PRESETS.forEach(p => {
      animEl.classList.remove(p.className);
      animEl.classList.remove(p.hoverClass);
    });
    animEl.classList.remove('pc-anim-loop');

    // Force reflow
    void animEl.offsetWidth;

    // Apply new classes
    animEl.classList.add(currentPreset.className);
    if (isLooping) {
      animEl.classList.add('pc-anim-loop');
    }

    // Set animation duration with speed factor
    const baseDuration = parseFloat(currentPreset.duration);
    const computedDuration = (baseDuration / animSpeed).toFixed(2);
    animEl.style.animationDuration = `${computedDuration}s`;

    // Update Meta and Recommendations
    document.getElementById('anim-info-title').textContent = currentPreset.name;
    document.getElementById('anim-info-desc').textContent = currentPreset.desc;
    document.getElementById('anim-info-recommended').textContent = currentPreset.recommended;

    // Update Code Preview
    updateCodePreview();
  }

  function replayAnimation() {
    const stageTarget = document.getElementById('anim-stage-target');
    if (!stageTarget) return;
    const animEl = stageTarget.firstElementChild;
    if (!animEl) return;

    animEl.style.animation = 'none';
    void animEl.offsetWidth;
    animEl.style.animation = '';
    applyAnimation();
  }

  function updateCodePreview() {
    const codeEl = document.getElementById('anim-code-preview');
    if (!codeEl) return;

    const code = `/* 1. HTML 적용 예시 */
<div class="${currentPreset.className}${isLooping ? ' pc-anim-loop' : ''}">
  <span class="pc-inline-icon is-md" data-icon="sparkles"></span>
</div>

/* 2. 호버 시에만 동작하게 하려면 */
<button class="pc-btn ${currentPreset.hoverClass}">
  호버 페이퍼 액션
</button>

/* 3. 추천 적용 시나리오 */
// 추천 컴포넌트: ${currentPreset.recommended}
// 기본 지속시간: ${currentPreset.duration}`;

    codeEl.textContent = code;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimationStudio);
    } else {
      initAnimationStudio();
    }
  }

  const api = {
    init: initAnimationStudio,
    selectPreset: (id) => {
      const p = PRESETS.find(x => x.id === id);
      if (p) {
        currentPreset = p;
        applyAnimation();
      }
    },
    presets: PRESETS,
    PRESETS,
    spawnPaperFlutterBurst: (container, config) => {
      if (typeof window !== 'undefined' && window.PaperCutUI && typeof window.PaperCutUI.spawnPaperFlutterBurst === 'function') {
        return window.PaperCutUI.spawnPaperFlutterBurst(container, config);
      }
      return Promise.resolve();
    },
    transitionWoodShavingCurl: (cur, next, opts) => {
      if (typeof window !== 'undefined' && window.PaperCutUI && typeof window.PaperCutUI.transitionWoodShavingCurl === 'function') {
        return window.PaperCutUI.transitionWoodShavingCurl(cur, next, opts);
      }
      return Promise.resolve();
    }
  };

  PaperCutMotion.spawnPaperFlutterBurst = api.spawnPaperFlutterBurst;
  PaperCutMotion.transitionWoodShavingCurl = api.transitionWoodShavingCurl;

  if (typeof window !== 'undefined') {
    window.PaperCutAnimationStudio = api;
    window.PaperCutMotion = PaperCutMotion;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.PaperCutAnimationStudio = api;
    globalThis.PaperCutMotion = PaperCutMotion;
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = {
      PaperCutMotion,
      PaperCutAnimationStudio: api,
      PRESETS
    };
  }

})(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this);
