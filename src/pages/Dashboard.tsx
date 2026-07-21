import { Tag } from "../components/Tag";
import { ALL_DEPARTMENTS } from "../types";
import { QUESTIONS } from "../data/questions";

const STATS = [
  { value: String(ALL_DEPARTMENTS.length), label: "Departments" },
  { value: "18+", label: "Resources" },
  {
    value: String(
      Object.values(QUESTIONS).reduce((sum, qs) => sum + qs.length, 0)
    ),
    label: "Practice questions",
  },
  { value: "2026", label: "Current edition" },
];

const SECTIONS = [
  {
    title: "Our mission",
    body: "We believe great organizations are built on shared knowledge. KnowledgeHub exists to remove information silos, accelerate onboarding, and create a culture of continuous learning across every department.",
  },
  {
    title: "How it works",
    body: "Each department has its own curated resource library and a set of interactive practice questions. Resources give you access to the latest guides, templates and policies. Practice Knowledge lets you test your understanding through quizzes and learning cards.",
  },
  {
    title: "Keeping content fresh",
    body: "Content is reviewed quarterly by department leads. If you spot outdated information or want to contribute new material, reach out to your department knowledge champion.",
  },
];

export function Dashboard() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-14">
      <div className="mb-10">
        <Tag label="About us" color="#5B8FFF" />
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight text-ink">
          Who we are
        </h1>
        <p className="text-base leading-relaxed text-muted">
          KnowledgeHub is the company's internal learning and resource
          platform, built to keep every team member informed, aligned, and
          equipped with the knowledge they need to do their best work.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl p-5 text-center bg-surface border border-border">
            <div className="text-2xl font-extrabold mb-1 text-success">{s.value}</div>
            <div className="text-xs font-medium text-subtle">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {SECTIONS.map(({ title, body }) => (
          <div key={title} className="rounded-xl p-6 bg-surface border border-border">
            <h3 className="font-bold text-base mb-2 text-ink">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
