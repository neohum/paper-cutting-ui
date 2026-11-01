// 중·고 교구 dilemma(갈림길 상황)·rubric-writing(기준표 글쓰기)의 판정 핵심(core)을 화면 없이 검사한다.
// 교구마다 solve → check 참, wrongAnswer → check 거짓이고 incomplete 아님, 시작 상태는 정답 아님, 1단계 힌트에 target 값 없음,
// getState/setState 왕복(cleanState), distance. 브라우저 흐름은 check-unit.mjs·플레이어 시험 차시가 본다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { PII as HUB_PII } from '../edu-content-pool/classroom-hub.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const tools = {};
for (const id of ['dilemma', 'rubric-writing']) {
  const K = { registerTool(name, def) { tools[name] = def; } };
  vm.runInNewContext(readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8'), { window: { PaperKit: K } });
}

// check-lesson.mjs targetLeak 과 같은 규칙
function targetLeak(text, target) {
  const vals = [];
  (function walk(v) {
    if (typeof v === 'number' && Number.isFinite(v) && Math.abs(v) >= 2) vals.push(String(v));
    else if (typeof v === 'string' && /[가-힣]/.test(v)) vals.push(v);
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k]);
  })(target);
  for (const v of vals) {
    const esc = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hit = /^-?\d/.test(v) ? new RegExp(`(?<![\\d.])${esc}(?![\\d])`).test(text)
      : v.length <= 2 ? new RegExp(`(?<![가-힣])${esc}(?![가-힣])`).test(text) : text.includes(v);
    if (hit) return v;
  }
  return null;
}
const J = (x) => JSON.parse(JSON.stringify(x));

function contract(id, cases, { allowNoWrong = [] } = {}) {
  const C = tools[id].core;
  assert.ok(C, `${id}: core 없음`);
  for (const [name, o, start, t] of cases) {
    const key = `${id}/${name}`;
    assert.equal(C.achievable(t, o), null, `${key}: achievable — ${C.achievable(t, o)}`);
    const s = J(C.solve(t, o));
    const ok = C.judge(s, t, o);
    assert.equal(ok.correct, true, `${key}: solve 뒤 정답이 아님 — ${ok.feedback} ${JSON.stringify(s)}`);
    assert.equal(C.judge(start, t, o).correct, false, `${key}: 시작 상태가 이미 정답`);
    const w = C.wrongAnswer(t, o, start);
    if (allowNoWrong.includes(name)) assert.equal(w, null, `${key}: 스스로 점검만인데 wrongAnswer가 있음`);
    else {
      assert.ok(w, `${key}: wrongAnswer 없음`);
      const r = C.judge(J(w), t, o);
      assert.equal(r.correct, false, `${key}: wrongAnswer가 정답 ${JSON.stringify(w)}`);
      assert.ok(!r.incomplete, `${key}: wrongAnswer가 incomplete — ${r.feedback}`);
      assert.ok(r.feedback && r.feedback.trim(), `${key}: 오답 피드백 비어 있음`);
      assert.ok(C.distance(s, w) > 0, `${key}: 정답과 오답 distance 0`);
    }
    for (const st of [start, w].filter(Boolean)) {
      const h = C.hint(st, t, o, { level: 1, attempts: 0 });
      assert.ok(h.hint, `${key}: 1단계 힌트 없음`);
      assert.equal(targetLeak(h.hint, t), null, `${key}: 1단계 힌트에 정답 값 '${targetLeak(h.hint, t)}' — ${h.hint}`);
      // 시도 전에는 level 3을 달라고 해도 1단계
      assert.equal(C.hint(st, t, o, { level: 3, attempts: 0 }).hint, h.hint, `${key}: 시도 전 3단계 요청이 1단계가 아님`);
      for (const lv of [2, 3]) assert.ok(C.hint(st, t, o, { level: lv, attempts: lv - 1 }).hint, `${key}: ${lv}단계 힌트 없음`);
    }
    assert.equal(C.hint(s, t, o, { level: 1, attempts: 0 }).correct, true, `${key}: 정답 상태에서 힌트가 correct 아님`);
    assert.equal(C.distance(s, s), 0, `${key}: 같은 상태 distance ≠ 0`);
  }
}

// ---- dilemma ----
const sns = {
  title: '단톡방 사진',
  scene: {
    text: '반 단체 대화방에 같은 반 친구의 우스운 사진이 놀리는 글과 함께 올라왔다. 벌써 몇 명이 웃는 이모티콘을 달았다.', motif: 'house',
    choices: [
      { id: 'join', text: '분위기를 깨지 않으려고 웃는 이모티콘을 단다', result: '사진이 더 많은 사람에게 퍼진다.', impact: [{ who: '사진 속 친구', text: '더 큰 상처를 받는다', tone: -1 }], why: '여럿이 웃는다고 사진 속 친구의 상처가 작아지지는 않아요.' },
      { id: 'quiet', text: '아무 반응 없이 대화방을 나간다', result: '나는 빠졌지만 사진은 그대로 남아 있다.', impact: [{ who: '사진 속 친구', text: '여전히 놀림을 받는다', tone: 0 }],
        next: { text: '다음 날 사진 속 친구가 학교에 오지 않았다.', choices: [
          { id: 'tell', text: '담임 선생님께 있었던 일을 알린다', result: '선생님이 사진을 내리게 하고 사과 자리를 만든다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }], ending: '모르는 척하지 않고 도움을 구한 길이다.' },
          { id: 'skip', text: '내가 올린 것이 아니니 넘어간다', result: '사진이 계속 돌아다닌다.', impact: [{ who: '사진 속 친구', text: '혼자 괴로워한다', tone: -1 }], why: '내가 올리지 않았어도 알고 있는 사람이 도울 수 있어요.' }] } },
      { id: 'stop', text: '올린 친구에게 사진을 내리자고 말한다', result: '올린 친구가 "장난인데 왜 그래?"라고 답한다.', impact: [{ who: '올린 친구', text: '당황한다', tone: 0 }],
        next: { text: '올린 친구는 사진을 내리지 않고 있다.', choices: [
          { id: 'tell', text: '사진 속 친구의 동의를 얻어 선생님께 알린다', result: '사진이 내려가고 사과가 이루어진다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }, { who: '올린 친구', text: '잘못을 깨닫는다', tone: 1 }] },
          { id: 'repost', text: '올린 친구의 사진도 올려 똑같이 갚는다', result: '대화방이 다툼으로 번진다.', impact: [{ who: '반 친구들', text: '서로 믿지 못한다', tone: -1 }], why: '똑같이 갚으면 또 한 사람의 권리가 침해돼요.' }] } },
    ],
  },
  reasons: [
    { id: 'right', text: '누구나 자기 사진이 동의 없이 퍼지지 않을 권리가 있다' },
    { id: 'help', text: '알고 있는 사람이 도움을 구하면 피해를 줄일 수 있다' },
    { id: 'all', text: '다른 친구들도 다 웃었으니 괜찮다', why: '여럿이 한다고 옳은 일이 되지는 않아요.' },
    { id: 'safe', text: '나만 피해를 보지 않으면 된다', why: '내 안전만 생각하면 친구의 피해가 그대로 남아요.' },
  ],
};
const open = {
  scene: { text: '모둠 과제 발표 날, 한 친구가 맡은 부분을 해 오지 않았다. 선생님은 모둠 점수를 함께 준다고 하셨다.', choices: [
    { id: 'cover', text: '내가 대신 발표하고 넘어간다', result: '발표는 끝났지만 그 친구는 다음에도 같을 수 있다.', impact: [{ who: '나', text: '부담이 커진다', tone: -1 }] },
    { id: 'talk', text: '발표 뒤 그 친구와 이유를 이야기한다', result: '그 친구에게 사정이 있었다는 것을 알게 된다.', impact: [{ who: '모둠', text: '서로 이해한다', tone: 1 }] },
    { id: 'tellT', text: '선생님께 사실대로 말씀드린다', result: '점수는 공정해지지만 그 친구가 서운해한다.', impact: [{ who: '그 친구', text: '서운해한다', tone: -1 }, { who: '모둠', text: '공정하게 평가받는다', tone: 1 }] },
  ] },
  reasons: ['공정함이 중요하다', '친구의 사정을 먼저 알아야 한다', '모둠의 관계가 오래 간다'],
};

test('dilemma: 정답 길·근거·탐색·스스로 점검', () => {
  contract('dilemma', [
    ['정답 길(여러 길)', sns, { path: [] }, { path: [['quiet', 'tell'], ['stop', 'tell']] }],
    ['정답 길 + 근거', sns, { path: ['join'] }, { path: [['stop', 'tell']], reasons: ['right', 'help'] }],
    ['근거만(some)', sns, { path: [] }, { reasons: ['right', 'help'], some: true }],
    ['* 길 + 두 길 가 보기', sns, { path: [] }, { path: [['stop', '*']], explore: 2 }],
    ['열린 딜레마 + 점검 목록', open, { path: [] }, { selfCheck: ['다른 선택의 결과도 읽어 보았다', '내 근거를 짝에게 말했다'] }],
    ['열린 딜레마 스스로 점검', open, { path: [] }, { selfCheck: true }],
  ], { allowNoWrong: ['열린 딜레마 스스로 점검'] });
  const C = tools.dilemma.core;
  // 길 중간은 incomplete, 끝 장면인데 근거가 없으면 incomplete
  assert.equal(C.judge({ path: ['stop'] }, { path: [['stop', 'tell']] }, sns).incomplete, true);
  assert.equal(C.judge({ path: ['stop', 'tell'] }, { path: [['stop', 'tell']], reasons: ['right'] }, sns).incomplete, true);
  // 두 길 가 보기: 맞는 길이어도 한 길만 가 보았으면 틀림(incomplete 아님), 두 길이면 맞음
  const one = C.judge({ path: ['stop', 'tell'], seen: [] }, { path: [['stop', '*']], explore: 2 }, sns);
  assert.equal(one.correct, false); assert.ok(!one.incomplete);
  assert.equal(C.judge({ path: ['stop', 'tell'], seen: ['join'] }, { path: [['stop', '*']], explore: 2 }, sns).correct, true);
  // 틀린 길의 피드백은 그 선택의 why
  assert.match(C.judge({ path: ['stop', 'repost'] }, { path: [['stop', 'tell']] }, sns).feedback, /똑같이 갚으면/);
  // 3단계 힌트는 되돌아가 고를 선택을 말한다
  assert.match(C.hint({ path: ['stop', 'repost'] }, { path: [['stop', 'tell']] }, sns, { level: 3, attempts: 2 }).hint, /동의를 얻어/);
  // 깊이 3을 넘는 장면은 버린다
  const deep = { scene: { text: '1', choices: [{ id: 'a', text: 'a', next: { text: '2', choices: [{ id: 'b', text: 'b', next: { text: '3', choices: [{ id: 'c', text: 'c', next: { text: '4', choices: [{ id: 'd', text: 'd' }] } }] } }] } }] } };
  assert.deepEqual(J(C.treeOf(deep).leaves), [['a', 'b', 'c']]);
  // getState/setState 왕복: cleanState 가 고정점이고 모르는 id·길은 버린다
  const s = C.solve({ path: [['stop', 'tell']], reasons: ['right'], explore: 2 }, sns);
  assert.deepEqual(J(C.cleanState(C.treeOf(sns), J(s))), J(C.cleanState(C.treeOf(sns), C.cleanState(C.treeOf(sns), J(s)))));
  assert.deepEqual(J(C.cleanState(C.treeOf(sns), { path: ['stop', 'nope', 'x'], reasons: ['right', 'zzz'], seen: ['bad>path'] })), { path: ['stop'], reasons: ['right'], seen: [] });
  // 끝에 닿으면 seen 에 그 길이 남는다(되돌아가도 남음)
  assert.deepEqual(J(C.cleanState(C.treeOf(sns), { path: ['join'] }).seen), ['join']);
  assert.deepEqual(J(C.cleanState(C.treeOf(sns), { path: [], seen: ['join'] }).seen), ['join']);
  // distance: 마지막 선택만 바꾸면 1
  assert.equal(C.distance({ path: ['stop', 'tell'] }, { path: ['stop', 'repost'] }), 1);
  // 없는 길을 요구하는 target 은 achievable 이 까닭을 말한다
  assert.ok(C.achievable({ path: [['join', 'tell']] }, sns));
});

// ---- rubric-writing ----
const crit = ['내 의견을 첫 문장에 썼다', '근거를 하나 이상 썼다', '상대 입장을 언급했다'];
test('rubric-writing: 글자 수·문장 수·꼭 넣을 낱말·기준표', () => {
  contract('rubric-writing', [
    ['기준표만', { topic: '급식 남기지 않기에 대한 내 생각을 쓰세요.' }, { text: '' }, { selfCheck: crit }],
    ['글자 수 + 기준표', { minChars: 60, maxChars: 200 }, { text: '좋다.' }, { selfCheck: crit }],
    ['꼭 넣을 낱말(동의어)', { minChars: 40, maxChars: 220, maxSentences: 4 }, { text: '' }, { selfCheck: crit, mustInclude: ['안전', ['왜냐하면', '때문에']] }],
    ['target 범위', {}, { text: '' }, { selfCheck: crit, chars: [80, 160], sentences: [2, 5] }],
    ['띄어쓰기 빼고', { countSpaces: false, minChars: 50, maxChars: 120 }, { text: '' }, { selfCheck: crit.slice(0, 2), mustInclude: ['규칙'] }],
    ['예시 글 사용', { minChars: 30, maxChars: 150, sample: '나는 휴대폰 수거에 찬성한다. 왜냐하면 수업에 집중할 수 있기 때문이다. 연락이 급한 친구의 걱정도 이해한다.' }, { text: '' }, { selfCheck: crit, mustInclude: [['왜냐하면', '때문에']] }],
  ]);
  const C = tools['rubric-writing'].core;
  // 예시 글이 맞으면 그대로 정답 글이 된다
  assert.match(C.solve({ selfCheck: crit }, { sample: '나는 찬성한다. 왜냐하면 안전하기 때문이다.' }).text, /^나는 찬성한다/);
  // 동의어 가운데 하나면 된다
  const o = { minChars: 5 };
  assert.equal(C.judge({ text: '나는 찬성한다. 안전하기 때문에 그렇다.', checks: [true] }, { selfCheck: ['a'], mustInclude: [['왜냐하면', '때문에']] }, o).correct, true);
  // 개인정보: 정답 처리하지 않고(incomplete 아님), getState 는 가린다
  const pii = '내 번호는 010-1234-5678 이다. 나는 찬성한다.';
  const r = C.judge({ text: pii, checks: [true] }, { selfCheck: ['a'] }, {});
  assert.equal(r.correct, false); assert.ok(!r.incomplete); assert.match(r.feedback, /개인정보/);
  assert.ok(!HUB_PII.test(C.mask(pii)), '가린 글에 PII 가 남음');
  assert.ok(!HUB_PII.test(C.mask('메일 student.kim@school.kr 로 보내요')));
  assert.equal(C.mask('소수 0.142857142857 은 괜찮다'), '소수 0.142857142857 은 괜찮다');
  // 허브의 PII 식과 글자 하나 다르지 않다
  assert.equal(C.PII.source, HUB_PII.source);
  assert.equal(C.PII.flags, HUB_PII.flags);
  // 이름 밝히는 말투는 경고만(판정은 막지 않음)
  assert.ok(C.SELF_INFO.test('제 이름은 민지입니다.'));
  assert.equal(C.judge({ text: '제 이름은 민지입니다. 나는 찬성한다.', checks: [true] }, { selfCheck: ['a'] }, {}).correct, true);
  // 글자 수 세기
  assert.equal(C.countChars('가 나  다', {}), 5);
  assert.equal(C.countChars('가 나  다', { countSpaces: false }), 3);
  assert.equal(C.countSentences('하나. 둘! 셋? 넷'), 4);
  assert.equal(C.countSentences('3.5는 소수다.'), 1);
  // 빈 글·기준표 안 함은 incomplete
  assert.equal(C.judge({ text: '' }, { selfCheck: crit }, {}).incomplete, true);
  assert.equal(C.judge({ text: '나는 찬성한다.', checks: [] }, { selfCheck: crit }, {}).incomplete, true);
  // 거꾸로 된 범위는 achievable 이 알린다
  assert.ok(C.achievable({ selfCheck: crit, chars: [200, 100] }, {}));
});
