import type { CSSProperties, ReactNode } from "react";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META } from "../data/departments";
import type { Dept, Page } from "../types";

interface DepartmentPageProps {
  dept: Dept;
  onNavigate: (p: Page) => void;
}

const NORMAL_CARD_HEIGHT_PX = 96;
const QUICK_TOPIC_HEIGHT_PX = NORMAL_CARD_HEIGHT_PX / 2 - 6;

const PLACEHOLDER_TOPICS = [
  "What is this department responsible for?",
  "Key terms you should know",
  "How this team fits into the LC",
  "Common mistakes to avoid",
  "Who to contact for help",
  "Where to find past reports",
];

function AreaCard({
                    title,
                    height,
                    color,
                    onClick,
                  }: {
  title: ReactNode;
  height: number;
  color: string;
  onClick?: () => void;
}) {
  return (
      <InteractiveCard
          onClick={onClick}
          className="group p-0 overflow-hidden rounded-xl transition-colors duration-150 hover:!bg-[var(--dept-color)]"
          style={
            {
              "--dept-color": color,
              backgroundColor: `color-mix(in srgb, ${color} 14%, #141414)`,
              height,
            } as CSSProperties
          }
      >
        <div className="flex h-full items-center justify-center px-6">
        <span className="text-center font-semibold leading-snug text-white">
          {title}
        </span>
        </div>
      </InteractiveCard>
  );
}

export function Area({ dept, onNavigate }: DepartmentPageProps) {
  const meta = DEPT_META[dept];

  return (
      <main className="relative overflow-hidden max-w-[36rem] md:max-w-6xl mx-auto px-5 pt-5 pb-40">
        <div
            className="pointer-events-none absolute -inset-x-40 -inset-y-36"
            style={{
              background: `radial-gradient(ellipse at center,
            color-mix(in srgb, ${meta.color} 20%, transparent) 0%,
            color-mix(in srgb, ${meta.color} 20%, transparent) 15%,
            color-mix(in srgb, ${meta.color} 5%, transparent) 45%,
            transparent 80%)`,
            }}
            aria-hidden
        />

        <div className="relative">
          <div className="flex flex-col items-center mb-10">
            <h1 className="mt-4 flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-center text-white">
              <span>{dept}</span>
              <span className="text-4xl leading-none">{meta.icon}</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* QUICK TOPICS */}
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm font-semibold text-muted uppercase tracking-wide mb-1">
                Quick topics
              </div>

              {PLACEHOLDER_TOPICS.map((topic) => (
                  <AreaCard
                      key={topic}
                      title={
                        <span className="text-sm">
                    {topic}
                  </span>
                      }
                      height={QUICK_TOPIC_HEIGHT_PX}
                      color={meta.color}
                  />
              ))}
            </div>
            {/* RESOURCES */}
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm font-semibold text-muted uppercase tracking-wide mb-1">
                Resources
              </div>

              <AreaCard
                  title={
                    <>
                      Google
                      <br />
                      Drive
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() => window.open("https://drive.google.com", "_blank")}
              />

              <AreaCard
                  title={
                    <>
                      Google
                      <br />
                      Sheet
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() => window.open("https://sheets.google.com", "_blank")}
              />
            </div>

            {/* PRACTICE */}
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm font-semibold text-muted uppercase tracking-wide mb-1">
                Practice
              </div>

              <AreaCard
                  title={
                    <>
                      Learn By Reading
                      <br />
                      Knowledge Cards
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() => onNavigate({ dept, view: "practice" })}
              />

              <AreaCard
                  title={
                    <>
                      Test Your Knowledge
                      <br />
                      With A Quiz
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() => onNavigate({ dept, view: "quiz" })}
              />
            </div>
          </div>
        </div>
      </main>
  );
}