import { useState } from "react";
import { Tag } from "../components/Tag";
import { Question } from "./Question.tsx";
import { DEPT_META } from "../data/departments";
import { QUESTIONS } from "../data/questions";
import type { Dept, Page } from "../types";

interface PracticePageProps {
  dept: Dept;
  onNavigate: (p: Page) => void;
}

function resultCopy(pct: number) {
  if (pct >= 80) return { emoji: "🎉", color: "#00C9A7", text: "Outstanding! You have a strong grasp of this material." };
  if (pct >= 50) return { emoji: "👍", color: "#FFB547", text: "Good progress. Review the missed questions and try again." };
  return { emoji: "📖", color: "#FF5C7A", text: "Keep studying the resources and give it another shot." };
}

export function Practice({ dept, onNavigate }: PracticePageProps) {
  const meta = DEPT_META[dept];
  const questions = QUESTIONS[dept];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setDone(false);
  };

  const pct = Math.round((score / questions.length) * 100);
  const result = resultCopy(pct);

  return (
    <main className="max-w-2xl mx-auto px-5 py-14">
      <div className="flex items-center gap-2 mb-2">
        <Tag label={dept} color={meta.color} />
        <Tag label="Practice Knowledge" color="#C47AFF" />
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mt-3 mb-2 text-ink">{dept} quiz</h1>
      <p className="text-sm mb-10 text-muted">
        {questions.length} questions · Multiple choice, true/false & fill-in-the-blank
      </p>

      {done ? (
        <div className="rounded-2xl p-8 text-center bg-surface border border-border">
          <div className="text-5xl mb-4">{result.emoji}</div>
          <div className="text-4xl font-extrabold mb-1" style={{ color: result.color }}>{pct}%</div>
          <div className="text-sm mb-2 font-semibold text-ink">{score} of {questions.length} correct</div>
          <div className="text-xs mb-8 text-subtle">{result.text}</div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={restart}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-success text-[#0C0E15] hover:opacity-90 transition-opacity"
            >
              Try again
            </button>
            <button
              onClick={() => onNavigate({ dept, view: "resources" })}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-[#1C2030] text-subtle border border-border hover:text-ink hover:border-[#3A4258] transition-colors"
            >
              Review resources
            </button>
          </div>
        </div>
      ) : (
        <Question
          key={current}
          q={questions[current]}
          index={current}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </main>
  );
}
