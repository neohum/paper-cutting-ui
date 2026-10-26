/* 결과 요약 — 교사 대시보드와 결과 보고서(make-report.mjs)가 같은 계산을 쓴다. 브라우저·Node 둘 다. */
(function (root) {
  'use strict';
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const avg = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);
  const LEVEL_KO = { easy: '쉬움', base: '기본', challenge: '도전' };
  const MOOD_KO = { good: '좋음', ok: '조금 어려움', hard: '많이 어려움' };
  const ORDER = ['easy', 'base', 'challenge'];
  const levelPath = (ch) => (Array.isArray(ch) && ch.length ? [ch[0].from, ...ch.map((c) => c.to)].map((l) => LEVEL_KO[l] || l).join('→') : '');

  // rows: edu-lesson-result.v1 (포털·허브 행이면 .data 안에 있다)
  // labels: { 'a1.1': '3시 15분을 만들어 보세요.' } — 있으면 문항 이름으로 쓴다
  function summarize(rows, labels = {}) {
    // 같은 학생의 재제출은 마지막 것만. 포털 행은 로그인한 학생(deviceLabel)으로 묶는다 —
    // 과제 안에서 번호를 잘못 넣어도 다른 학생 결과를 가리지 않게
    const last = new Map();
    for (const row of rows) {
      const r = row && row.schema ? row : row && row.data; if (!r) continue;
      const who = row.via === 'portal' && row.deviceLabel ? `p:${row.materialId}|${row.deviceLabel}` : `${r.classCode}|${r.seat}`;
      last.set(`${r.lessonId}|${who}`, r);
    }
    const list = [...last.values()];
    const items = new Map(); const exits = new Map(); const moods = { good: 0, ok: 0, hard: 0 };
    const preds = new Map(); // 예상(predict) 고른 보기 분포 — 채점하지 않는다
    const students = [];
    for (const r of list) {
      // 짝 활동(free)은 채점에서 빼고, 손대지 않은 문항(시도 0)은 '건너뜀'으로 따로 센다
      for (const it of r.items || []) {
        if (it.predict == null) continue;
        const m = preds.get(it.key) || { key: it.key, n: 0, counts: {} }; m.n++; m.counts[it.predict] = (m.counts[it.predict] || 0) + 1; preds.set(it.key, m);
      }
      const scored = (r.items || []).filter((it) => !it.free);
      const tried = scored.filter((it) => it.attempts > 0);
      for (const it of tried) {
        const m = items.get(it.key) || { key: it.key, n: 0, first: 0, solved: 0, attempts: [], hints: 0, closed: 0, gaveUp: 0, deepHint: 0 };
        m.n++; if (it.correct && it.attempts === 1) m.first++; if (it.correct) m.solved++;
        m.attempts.push(it.attempts || 0); if (it.hints) m.hints++;
        if (it.closed && !it.correct) m.closed++; else if (it.gaveUp && !it.correct) m.gaveUp++;
        if (Array.isArray(it.hintLevels) && it.hintLevels.some((l) => l >= 3)) m.deepHint++;
        items.set(it.key, m);
      }
      let mood = null;
      for (const e of r.exitTicket || []) {
        if (e.correct == null) { if (e.value in moods) { moods[e.value]++; mood = e.value; } continue; }
        const m = exits.get(e.key) || { key: e.key, n: 0, ok: 0 }; m.n++; if (e.correct) m.ok++; exits.set(e.key, m);
      }
      const exitScored = (r.exitTicket || []).filter((e) => e.correct != null);
      const den = tried.length + exitScored.length;
      // 못 풀고 끝난 문항: 시도를 다 써서 닫힘(closed) · 학생이 '다음 문제로'를 눌러 넘김(gaveUp)
      const closed = tried.filter((i) => i.closed && !i.correct).map((i) => i.key);
      const gaveUp = tried.filter((i) => i.gaveUp && !i.correct && !i.closed).map((i) => i.key);
      const nudges = tried.reduce((a, i) => a + (i.nudges || 0), 0);
      students.push({
        seat: r.seat, nickname: r.nickname || '', classCode: r.classCode, level: r.level, levelChanges: (r.levelChanges || []).length,
        // 단계를 바꾼 길(예: '기본→쉬움→기본') — 제출 코드로 들어온 결과에는 없다
        levelPath: levelPath(r.levelChanges),
        firstTry: pct(tried.filter((i) => i.correct && i.attempts === 1).length + exitScored.filter((e) => e.correct).length, den),
        solved: pct(tried.filter((i) => i.correct).length + exitScored.filter((e) => e.correct).length, den),
        skipped: scored.length - tried.length, closed, gaveUp, nudges, exitCorrect: pct(exitScored.filter((e) => e.correct).length, exitScored.length),
        durationMin: Math.round((r.durationSec / 60) * 10) / 10, mood, via: r.via || '', pairWith: r.pairWith || '',
        perItem: Object.fromEntries(scored.map((i) => [i.key, !i.attempts ? '-' : i.correct ? (i.attempts === 1 ? '◎' : '○') : i.closed ? '×닫힘' : i.gaveUp ? '×넘김' : '×'])),
        perExit: Object.fromEntries(exitScored.map((e) => [e.key, e.correct ? '○' : '×'])),
      });
    }
    students.sort((a, b) => Number(a.seat) - Number(b.seat));
    for (const s of students) s.flag = s.firstTry < 50 || s.mood === 'hard' || s.skipped > 0 || s.closed.length > 0 || s.gaveUp.length > 0;
    const itemRows = [...items.values()].map((m) => ({ key: m.key, label: labels[m.key] || '', n: m.n, firstTry: pct(m.first, m.n), solved: pct(m.solved, m.n), avgAttempts: Math.round(avg(m.attempts) * 10) / 10, hintRate: pct(m.hints, m.n), closed: m.closed, gaveUp: m.gaveUp, deepHintRate: pct(m.deepHint, m.n) }))
      .sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true }));
    const exitRows = [...exits.values()].map((m) => ({ key: m.key, label: labels[m.key] || '', n: m.n, correct: pct(m.ok, m.n) })).sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true }));
    const firstTry = pct(itemRows.reduce((a, r) => a + (r.firstTry * r.n) / 100, 0), itemRows.reduce((a, r) => a + r.n, 0));
    const exitAvg = exitRows.length ? Math.round(avg(exitRows.map((r) => r.correct))) : null;
    const levels = students.reduce((a, s) => { a[s.level] = (a[s.level] || 0) + 1; return a; }, {});
    const flagged = students.filter((s) => s.flag);
    // 단계 바꾸기: 누가 몇 번, 쉽게(↓)·어렵게(↑) 어느 쪽으로
    const moves = { students: 0, total: 0, down: 0, up: 0, who: [] };
    for (const r of list) {
      const ch = Array.isArray(r.levelChanges) ? r.levelChanges : [];
      if (!ch.length) continue;
      moves.students++; moves.total += ch.length;
      for (const c of ch) { const d = ORDER.indexOf(c.to) - ORDER.indexOf(c.from); if (d < 0) moves.down++; else if (d > 0) moves.up++; }
      moves.who.push({ seat: r.seat, n: ch.length, path: levelPath(ch) });
    }
    moves.who.sort((a, b) => Number(a.seat) - Number(b.seat));
    // 난이도 권고: 반 전체 시작 단계 + 도움이 필요한 학생 + 다시 짚을 문항·출구 질문
    const rec = [];
    if (!students.length) rec.push('아직 결과가 없습니다.');
    else {
      if (firstTry < 50) rec.push(`한 번에 맞힌 비율 ${firstTry}% — 다음 차시는 '쉬움'으로 시작하고 도입 시연을 한 번 더 보여 주세요.`);
      else if (firstTry > 85 && (exitAvg ?? 100) >= 80) rec.push(`한 번에 맞힌 비율 ${firstTry}% · 출구 질문 ${exitAvg ?? '-'}% — 다음 차시는 '도전'으로 시작해도 됩니다.`);
      else if (flagged.length >= students.length * 0.3) rec.push(`한 번에 맞힌 비율 ${firstTry}%${exitAvg != null ? ` · 출구 질문 ${exitAvg}%` : ''} — 반을 둘로 나누세요: 대부분은 '기본', 표시된 ${flagged.length}명은 '쉬움'과 짝 도움.`);
      else rec.push(`한 번에 맞힌 비율 ${firstTry}%${exitAvg != null ? ` · 출구 질문 ${exitAvg}%` : ''} — 반 전체는 '기본'이 알맞습니다.`);
      // 표시된 학생이 많으면 '기본이 알맞다'만으로는 낙관적이다 — 따로 묶어 권한다
      if (flagged.length) rec.push(`${flagged.length}명(${pct(flagged.length, students.length)}%)은 '쉬움'으로 시작하거나 짝·교사 도움을 주세요: ${flagged.map((s) => `${s.seat}번`).join(', ')}`);
      for (const r of itemRows.filter((x) => x.firstTry < 50)) rec.push(`${r.label || r.key} — 한 번에 맞힌 학생 ${r.firstTry}%, 정리 시간에 다시 짚어 주세요.`);
      for (const r of exitRows.filter((x) => x.correct < 60)) rec.push(`출구 질문 ${r.label || r.key} — 정답 ${r.correct}%, 오개념이 남아 있습니다. 다음 차시 도입에서 다시 다루세요.`);
      const closers = students.filter((s) => s.closed.length);
      if (closers.length) rec.push(`시도를 다 써서 닫힌 문항(못 풂): ${closers.map((s) => `${s.seat}번(${s.closed.join(', ')})`).join(' · ')} — 풀이를 함께 다시 보세요.`);
      const quitters = students.filter((s) => s.gaveUp.length);
      if (quitters.length) rec.push(`'다음 문제로'를 눌러 넘긴 문항: ${quitters.map((s) => `${s.seat}번(${s.gaveUp.join(', ')})`).join(' · ')}`);
      const skippers = students.filter((s) => s.skipped > 0);
      if (skippers.length) rec.push(`문항을 건너뛴 학생: ${skippers.map((s) => `${s.seat}번(${s.skipped}문항)`).join(', ')}`);
      if (moods.hard > students.length / 4) rec.push(`'많이 어려웠어요'가 ${moods.hard}명 — 활동 시간을 늘리거나 짝 활동으로 바꿔 보세요.`);
    }
    return {
      n: students.length, avgFirstTry: Math.round(avg(students.map((s) => s.firstTry))), avgSolved: Math.round(avg(students.map((s) => s.solved))),
      avgScore: Math.round(avg(students.map((s) => s.firstTry))), // 이전 이름 호환: '한 번에 맞힘' 기준 점수
      avgMinutes: Math.round(avg(students.map((s) => s.durationMin)) * 10) / 10,
      firstTry, exitAvg, levels, moods, items: itemRows, exits: exitRows, students, recommendations: rec,
      levelMoves: moves,
      predicts: [...preds.values()].sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true })),
    };
  }

  // 나이스 평가 메모로 옮기기 쉬운 CSV: 한국어 값, 문항·출구별 열(◎ 한 번에 ○ 나중에 × 못 풂 - 안 함), 성취기준
  function toCSV(rows, labels = {}, standards = []) {
    const s = summarize(rows, labels);
    const itemKeys = s.items.map((r) => r.key); const exitKeys = s.exits.map((r) => r.key);
    const head = ['반코드', '번호', '별명', '짝번호', '단계', '단계바꿈', '한번에맞힘(%)', '끝까지해냄(%)', '출구정답(%)', '건너뜀', '못풂(닫힘·넘김)', '걸린분', '느낌', '도움필요',
      ...itemKeys.map((k) => labels[k] ? `${k} ${labels[k]}` : k), ...exitKeys.map((k) => labels[k] ? `${k} ${labels[k]}` : k), '성취기준'];
    const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const lines = s.students.map((x) => [x.classCode, x.seat, x.nickname, x.pairWith, LEVEL_KO[x.level] || x.level, x.levelChanges, x.firstTry, x.solved, x.exitCorrect, x.skipped, unsolvedText(x), x.durationMin, MOOD_KO[x.mood] || '', x.flag ? '예' : '',
      ...itemKeys.map((k) => x.perItem[k] || '-'), ...exitKeys.map((k) => x.perExit[k] || '-'), standards.join(' ')].map(q).join(','));
    return `﻿${head.map(q).join(',')}\n${lines.join('\n')}\n`;
  }

  // 학생 한 명의 못 푼 문항 한 줄: 'a1.2 닫힘, a2.1 넘김'
  const unsolvedText = (x) => [...(x.closed || []).map((k) => `${k} 닫힘`), ...(x.gaveUp || []).map((k) => `${k} 넘김`)].join(', ');

  // 차시에서 문항 이름표 만들기
  function labelsOf(lesson) {
    const out = {};
    if (!lesson) return out;
    for (const a of lesson.stages[1].activities) a.items.forEach((it, i) => { out[`${a.id}.${i + 1}`] = it.prompt; });
    lesson.stages[2].exitTicket.forEach((q, i) => { out[`exit.${i + 1}`] = q.prompt; });
    return out;
  }

  const api = { summarize, toCSV, labelsOf, unsolvedText, LEVEL_KO, MOOD_KO };
  root.LessonAnalytics = api;
})(typeof window !== 'undefined' ? window : globalThis);
