import { useState } from "react";
import { Tag } from "../components/Tag";
import type { Question } from "../types";

interface PracticeQuestionProps {
  q: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}

const TF_OPTIONS = ["True", "False"];

/** True if `opt` is the correct choice for this question, for tf/mcq types. */
function isOptionCorrect(q: Question, opt: string): boolean {
  if (q.type === "tf") return opt === (q.answer ? "True" : "False");
  return opt === q.answer;
}

export function PracticeQuestion({ q, index, total, onAnswer }: PracticeQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [fillInput, setFillInput] = useState("");
  const [revealed, setRevealed] = useState(false);

  const options = q.type === "tf" ? TF_OPTIONS : q.options ?? [];
  const canSubmit = q.type === "fill" ? fillInput.trim().length > 0 : selected !== null;
  const fillIsCorrect = fillInput.trim().toLowerCase() === String(q.answer).toLowerCase();

  const handleSubmit = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    const correct = q.type === "fill" ? fillIsCorrect : selected !== null && isOptionCorrect(q, selected);
    onAnswer(correct);
    setSelected(null);
    setFillInput("");
    setRevealed(false);
  };

  const typeLabel =
    q.type === "mcq" ? { label: "Multiple Choice", color: "#5B8FFF" } :
    q.type === "tf" ? { label: "True / False", color: "#FFB547" } :
    { label: "Complete the Sentence", color: "#C47AFF" };

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-surface border border-border">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-subtle">Question {index + 1} of {total}</span>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-1.5 rounded-full transition-all"
              style={{ background: i < index ? "#00C9A7" : i === index ? "#5B8FFF" : "#252B3B" }}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Tag label={typeLabel.label} color={typeLabel.color} />
      </div>

      <div className="text-base font-semibold mb-6 leading-snug text-ink">
        {q.type === "fill" ? (
          q.sentence?.split("_____").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 &&
                (revealed ? (
                  <span className="font-bold px-1" style={{ color: "#C47AFF" }}>{String(q.answer)}</span>
                ) : (
                  <span className="inline-block w-24 border-b-2 mx-1 align-bottom" style={{ borderColor: "#C47AFF" }} />
                ))}
            </span>
          ))
        ) : (
          q.question
        )}
      </div>

      {q.type === "fill" ? (
        <div className="mb-6">
          <input
            type="text"
            value={fillInput}
            onChange={(e) => setFillInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && canSubmit && handleSubmit()}
            placeholder="Type your answer…"
            disabled={revealed}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none bg-[#1C2030] border border-border text-ink"
          />
          {revealed && (
            <div className="mt-3 text-sm" style={{ color: fillIsCorrect ? "#00C9A7" : "#FF5C7A" }}>
              {fillIsCorrect ? "✓ Correct!" : `✗ The answer is: "${q.answer}"`}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2.5 mb-6">
          {options.map((opt) => {
            const correct = isOptionCorrect(q, opt);
            const isSelected = selected === opt;

            let bg = "#1C2030";
            let border = "#252B3B";
            let textColor = "#A8B0CC";
            if (revealed && correct) {
              bg = "#00C9A71A"; border = "#00C9A7"; textColor = "#00C9A7";
            } else if (revealed && isSelected) {
              bg = "#FF5C7A1A"; border = "#FF5C7A"; textColor = "#FF5C7A";
            } else if (!revealed && isSelected) {
              border = "#5B8FFF"; textColor = "#EEF1FF";
            }

            return (
              <button
                key={opt}
                onClick={() => !revealed && setSelected(opt)}
                disabled={revealed}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="w-full py-3 rounded-xl text-sm font-bold transition-colors disabled:cursor-not-allowed"
        style={{
          background: canSubmit ? (revealed ? "#00C9A7" : "#5B8FFF") : "#1C2030",
          color: canSubmit ? "#0C0E15" : "#3A4258",
        }}
      >
        {revealed ? "Next question →" : "Check answer"}
      </button>
    </div>
  );
}
