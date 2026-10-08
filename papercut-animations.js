/**
 * PaperCut UI - 3D Papercraft Animation Studio Controller
 * Handles live preview simulation, target switching, preset triggers, and CSS code generator.
 */

(function () {
  'use strict';

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
      name: '06. 키리가미 가위질 (Scissors Snip)',
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
    }
  ];

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

    // Speed Slider
    const speedSlider = document.getElementById('anim-speed-slider');
    const speedVal = document.getElementById('anim-speed-val');
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        animSpeed = parseFloat(e.target.value);
        if (speedVal) speedVal.textContent = `${animSpeed.toFixed(1)}x`;
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
        <button type="button" class="pc-btn pc-btn-mint pc-btn-lg">
          <span class="pc-inline-icon is-sm" data-icon="scissors"></span>
          <span>오리가미 액션 버튼</span>
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
        <span class="pc-badge pc-badge-lavender" style="font-size: 15px; padding: 8px 18px; font-weight: 800;">
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimationStudio);
  } else {
    initAnimationStudio();
  }

  window.PaperCutAnimationStudio = {
    init: initAnimationStudio,
    selectPreset: (id) => {
      const p = PRESETS.find(x => x.id === id);
      if (p) {
        currentPreset = p;
        applyAnimation();
      }
    }
  };

})();
