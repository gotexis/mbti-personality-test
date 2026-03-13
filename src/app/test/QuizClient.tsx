"use client";

import { useState, useMemo } from "react";
import { questions } from "@/data/questions";
import { mbtiTypes, groupColors } from "@/data/types";
import Link from "next/link";

const SCALE = [
  { label: "Strongly Disagree", value: -3 },
  { label: "Disagree", value: -2 },
  { label: "Slightly Disagree", value: -1 },
  { label: "Neutral", value: 0 },
  { label: "Slightly Agree", value: 1 },
  { label: "Agree", value: 2 },
  { label: "Strongly Agree", value: 3 },
];

export default function QuizClient() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const QUESTIONS_PER_PAGE = 10;
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const pageQuestions = questions.slice(currentPage * QUESTIONS_PER_PAGE, (currentPage + 1) * QUESTIONS_PER_PAGE);
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const result = useMemo(() => {
    if (answeredCount < questions.length) return null;
    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    for (const q of questions) {
      const ans = answers[q.id] ?? 0;
      scores[q.dimension] += ans * q.direction;
    }
    const code =
      (scores.EI >= 0 ? "E" : "I") +
      (scores.SN >= 0 ? "N" : "S") +
      (scores.TF >= 0 ? "T" : "F") +
      (scores.JP >= 0 ? "J" : "P");

    const percentages = {
      E: Math.round(50 + (scores.EI / 45) * 50),
      I: Math.round(50 - (scores.EI / 45) * 50),
      N: Math.round(50 + (scores.SN / 45) * 50),
      S: Math.round(50 - (scores.SN / 45) * 50),
      T: Math.round(50 + (scores.TF / 45) * 50),
      F: Math.round(50 - (scores.TF / 45) * 50),
      J: Math.round(50 + (scores.JP / 45) * 50),
      P: Math.round(50 - (scores.JP / 45) * 50),
    };
    return { code, percentages, type: mbtiTypes.find((t) => t.code === code) };
  }, [answers, answeredCount]);

  if (showResult && result?.type) {
    const t = result.type;
    const color = groupColors[t.group];
    const dims: [string, string, string, string][] = [
      ["E", "Extraversion", "I", "Introversion"],
      ["N", "Intuition", "S", "Sensing"],
      ["T", "Thinking", "F", "Feeling"],
      ["J", "Judging", "P", "Perceiving"],
    ];
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className={`rounded-2xl p-8 text-center mb-8 ${color.bg}`}>
          <p className="text-sm font-medium opacity-60 mb-2">Your personality type is</p>
          <h1 className="text-5xl font-extrabold mb-2">{t.code}</h1>
          <p className="text-2xl font-bold mb-2">{t.name}</p>
          <p className="italic opacity-70">{t.tagline}</p>
        </div>

        <div className="space-y-4 mb-8">
          {dims.map(([a, aLabel, b, bLabel]) => {
            const pctA = result.percentages[a as keyof typeof result.percentages];
            return (
              <div key={a + b}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{a} — {aLabel} ({pctA}%)</span>
                  <span>{b} — {bLabel} ({100 - pctA}%)</span>
                </div>
                <progress className="progress progress-primary w-full" value={pctA} max={100} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 items-center">
          <Link href={`/types/${t.code.toLowerCase()}`} className="btn btn-primary btn-lg">
            Read Full {t.code} Profile →
          </Link>
          <button className="btn btn-ghost" onClick={() => { setAnswers({}); setShowResult(false); setCurrentPage(0); }}>
            Retake Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold text-center mb-2">MBTI Personality Test</h1>
      <p className="text-center opacity-60 mb-6">Answer all 60 questions honestly — there are no right or wrong answers.</p>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-1">
          <span>{answeredCount} / {questions.length} answered</span>
          <span>Page {currentPage + 1} / {totalPages}</span>
        </div>
        <progress className="progress progress-primary w-full" value={progress} max={100} />
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {pageQuestions.map((q) => (
          <div key={q.id} className="card bg-base-200">
            <div className="card-body p-5">
              <p className="font-medium mb-3">
                <span className="opacity-40 mr-2">Q{q.id}.</span>
                {q.text}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SCALE.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: s.value }))}
                    className={`btn btn-sm ${answers[q.id] === s.value ? "btn-primary" : "btn-ghost"}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button className="btn btn-outline" disabled={currentPage === 0} onClick={() => setCurrentPage((p) => p - 1)}>
          ← Previous
        </button>
        {currentPage < totalPages - 1 ? (
          <button className="btn btn-primary" onClick={() => setCurrentPage((p) => p + 1)}>
            Next →
          </button>
        ) : (
          <button
            className="btn btn-primary"
            disabled={answeredCount < questions.length}
            onClick={() => setShowResult(true)}
          >
            🎯 See Results ({answeredCount}/{questions.length})
          </button>
        )}
      </div>
    </div>
  );
}
