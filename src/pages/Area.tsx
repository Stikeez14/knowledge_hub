import { Tag } from "../components/Tag";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META } from "../data/departments";
import type { Dept, Page } from "../types";

interface DepartmentPageProps {
  dept: Dept;
  onNavigate: (p: Page) => void;
}

export function Area({ dept, onNavigate }: DepartmentPageProps) {
  const meta = DEPT_META[dept];

  return (
    <main className="max-w-2xl mx-auto px-5 py-14">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${meta.color}1A` }}
        >
          {meta.icon}
        </div>
        <div>
          <Tag label="Department" color={meta.color} />
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-ink">{dept}</h1>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-12 text-muted">
        {meta.tagline}. Access your team's curated resources or test your
        knowledge with interactive practice sessions.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <InteractiveCard accent="#5B8FFF" onClick={() => onNavigate({ dept, view: "resources" })} className="p-7">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#5B8FFF1A]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 5h12M4 10h8M4 15h10" stroke="#5B8FFF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="font-bold text-base mb-1 text-ink">Resources</div>
          <div className="text-xs leading-relaxed text-subtle">
            Links to guides, templates, policies and department materials.
          </div>
          <div className="mt-6 text-xs font-semibold text-[#5B8FFF]">View resources →</div>
        </InteractiveCard>

        <InteractiveCard accent={meta.color} onClick={() => onNavigate({ dept, view: "practice" })} className="p-7">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: `${meta.color}1A` }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3a7 7 0 100 14A7 7 0 0010 3z" stroke={meta.color} strokeWidth="1.5" />
              <path d="M10 8v2.5l2 1.5" stroke={meta.color} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="font-bold text-base mb-1 text-ink">Practice knowledge</div>
          <div className="text-xs leading-relaxed text-subtle">
            Learning cards and quizzes with multiple choice, true/false, and
            fill-in-the-blank.
          </div>
          <div className="mt-6 text-xs font-semibold" style={{ color: meta.color }}>
            Start practicing →
          </div>
        </InteractiveCard>
      </div>
    </main>
  );
}
