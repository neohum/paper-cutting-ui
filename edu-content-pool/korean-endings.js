// 평가 증거 문장(현재형 "-는다/-ㄴ다")을 학습목표("-ㄹ 수 있다")와 학생 과제("-아/어 봅시다")로 바꾼다.
// 원천 문장 3,912개 전수 검사는 tests/edu-content-pool.test.mjs가 한다.
(function (root) {
  const BASE = 0xac00;
  const isHangul = (ch) => !!ch && ch.charCodeAt(0) >= BASE && ch.charCodeAt(0) <= 0xd7a3;
  const parts = (ch) => { const c = ch.charCodeAt(0) - BASE; return { cho: Math.floor(c / 588), jung: Math.floor((c % 588) / 28), jong: c % 28 }; };
  const join = (cho, jung, jong = 0) => String.fromCharCode(BASE + cho * 588 + jung * 28 + jong);
  const J = { A: 0, AE: 1, EO: 4, E: 5, YEO: 6, O: 8, WA: 9, WAE: 10, OE: 11, U: 13, WEO: 14, WI: 16, EU: 18, I: 20 };
  const L = 8; const N = 4; const D = 7; const S = 19; const B = 17;

  // "-ㄴ다"에서 ㄴ을 떼면 ㄹ 받침이 사라진 줄기가 나온다(만든다 → 만드). 실제 ㄹ 줄기인 것만 되돌린다.
  // 간다(가다/갈다)·산다(사다/살다)·판다(파다/팔다)처럼 겹치는 것은 흔한 쪽(ㄹ 없음)을 둔다.
  const L_STEM_LAST = new Set(['드', '노', '아', '도', '부', '푸', '여', '거', '비']);

  // 문장 → { body: 줄기 앞부분, stem: 동사 줄기 } 또는 null
  function splitStem(sentence) {
    const s = sentence.trim().replace(/[.!]$/, '');
    if (!s.endsWith('다')) return null;
    const before = s.at(-2);
    if (s.endsWith('는다') && isHangul(s.at(-3)) && parts(s.at(-3)).jong !== 0) {
      return { text: s.slice(0, -2) }; // 읽는다 → 읽
    }
    if (isHangul(before) && parts(before).jong === N) {
      const p = parts(before);
      let last = join(p.cho, p.jung, 0);
      if (L_STEM_LAST.has(last) && !/하$/.test(last)) last = join(p.cho, p.jung, L);
      return { text: s.slice(0, -2) + last }; // 설명한다 → 설명하, 만든다 → 만들
    }
    return null;
  }

  // 가능형: 줄기 + 을/ㄹ
  function toAbility(sentence, ending) {
    const st = splitStem(sentence);
    if (!st) return null;
    const w = st.text; const last = w.at(-1); const p = parts(last);
    if (p.jong === 0) return `${w.slice(0, -1)}${join(p.cho, p.jung, L)} ${ending}`;
    if (p.jong === L) return `${w} ${ending}`; // 만들 수
    if (/[듣묻걷]$/.test(w) && p.jong === D) return `${w.slice(0, -1)}${join(p.cho, p.jung, L)}을 ${ending}`; // 들을
    if (/[짓긋잇낫붓젓]$/.test(w) && p.jong === S) return `${w.slice(0, -1)}${join(p.cho, p.jung, 0)}을 ${ending}`; // 이을
    if (/[돕눕굽]$/.test(w) && p.jong === B && last !== '굽') return `${w.slice(0, -1)}${join(p.cho, p.jung, 0)}울 ${ending}`; // 도울
    return `${w}을 ${ending}`;
  }

  // 해 보기형: 줄기 + 아/어 → "봅시다"
  function toTask(sentence) {
    const st = splitStem(sentence);
    if (!st) return null;
    const w = st.text; const head = w.slice(0, -1); const last = w.at(-1); const p = parts(last);
    let conj;
    if (last === '하') conj = `${head}해`;
    else if (p.jong === 0) {
      const prev = head.at(-1);
      if (last === '르' && prev && isHangul(prev)) { // 르 불규칙: 고르 → 골라, 부르 → 불러
        const q = parts(prev);
        const bright = q.jung === J.A || q.jung === J.O;
        conj = `${head.slice(0, -1)}${join(q.cho, q.jung, L)}${bright ? '라' : '러'}`;
      } else if (p.jung === J.EU) { // 쓰 → 써, 모으 → 모아, 따르 제외(르 위에서 처리)
        const q = prev && isHangul(prev) ? parts(prev) : null;
        const bright = q && (q.jung === J.A || q.jung === J.O);
        conj = `${head}${join(p.cho, bright ? J.A : J.EO)}`;
      } else if (p.jung === J.O) conj = `${head}${join(p.cho, J.WA)}`; // 보 → 봐
      else if (p.jung === J.U) conj = `${head}${join(p.cho, J.WEO)}`; // 나누 → 나눠
      else if (p.jung === J.I) conj = `${head}${join(p.cho, J.YEO)}`; // 그리 → 그려
      else if (p.jung === J.OE) conj = `${head}${join(p.cho, J.WAE)}`; // 되 → 돼
      else if (p.jung === J.WI) conj = `${w}어`; // 쉬 → 쉬어
      else conj = w; // 가·서·내·세 → 그대로
    } else if (/[듣묻걷싣]$/.test(w) && p.jong === D) conj = `${head}${join(p.cho, p.jung, L)}어`; // 들어
    else if (/[짓긋잇낫붓젓]$/.test(w) && p.jong === S) conj = `${head}${join(p.cho, p.jung, 0)}${p.jung === J.A ? '아' : '어'}`; // 이어
    else if (/[돕]$/.test(w) && p.jong === B) conj = `${head}${join(p.cho, p.jung, 0)}와`; // 도와
    else {
      const bright = p.jung === J.A || p.jung === J.O;
      conj = `${w}${bright ? '아' : '어'}`; // 찾아, 읽어, 만들어
    }
    // "보다"로 끝나면 "봐 봅시다"가 어색하다 → "살펴봅시다"처럼 붙여 쓴다
    return /봐$/.test(conj) ? `${conj.slice(0, -1)}봅시다.` : `${conj} 봅시다.`;
  }

  root.KoEndings = { toAbility, toTask };
  if (typeof module !== 'undefined') module.exports = root.KoEndings;
})(typeof window !== 'undefined' ? window : globalThis);
