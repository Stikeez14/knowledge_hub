import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META } from "../data/departments";
import type { Dept, Page } from "../types";

interface DepartmentPageProps {
  dept: Dept;
  onNavigate: (p: Page) => void;
}

const NORMAL_CARD_HEIGHT_PX = 96;
const QUICK_TOPIC_HEIGHT_PX = 45;

const DEPT_TOPICS: Record<Dept, string[]> = {
  "General": [
    "What is AIESEC?",
    "LC Structure",
    "Member Journey",
    "Leadership Qualities",
    "XP Cycle",
    "MyAIESEC",
    "National Standards",
    "LC Meetings",
    "Conferences",
    "Goal Setting",
    "AIESEC Way",
    "Culture Book",
  ],

  "Incoming Global Volunteer B2C": [
    "Lead Generation",
    "Sales Funnel",
    "Customer Flow",
    "Opportunity Portal",
    "Matching",
    "Raising",
    "Realization",
    "Customer Care",
    "CRM",
    "KPIs",
    "Objections",
    "Standards",
  ],

  "Incoming Global Volunteer B2B": [
    "Company Prospecting",
    "Cold Outreach",
    "Meetings",
    "Sales Pipeline",
    "CRM",
    "Matching",
    "Contracts",
    "Delivery",
    "Partner Care",
    "KPIs",
    "Account Management",
    "Standards",
  ],

  "Incoming Global Talent": [
    "BD Process",
    "Prospecting",
    "Meetings",
    "Opportunity Creation",
    "Matching",
    "Contracts",
    "TN Forms",
    "Delivery",
    "Company Care",
    "CRM",
    "KPIs",
    "National Standards",
  ],

  "Outgoing Global Volunteer": [
    "Lead Generation",
    "Customer Flow",
    "Sales",
    "Matching",
    "Preparation Seminar",
    "Realization",
    "Reintegration",
    "Standards",
    "CRM",
    "KPIs",
    "Follow-up",
    "Exchange Journey",
  ],

  "Outgoing Global Talent": [
    "Sales",
    "Matching",
    "CV Review",
    "Interviews",
    "Preparation",
    "Visa",
    "Standards",
    "CRM",
    "Customer Care",
    "KPIs",
    "Opportunity Portal",
    "Realization",
  ],

  "Outgoing Global Teacher": [
    "Teacher Opportunities",
    "Matching",
    "Preparation",
    "Education Partners",
    "CRM",
    "Visa",
    "Standards",
    "KPIs",
    "Exchange Process",
    "Interviews",
    "Follow-up",
    "Reintegration",
  ],

  "Marketing": [
    "Brand Guidelines",
    "Social Media",
    "Canva",
    "Content Calendar",
    "Campaign Planning",
    "Photography",
    "Video",
    "Copywriting",
    "Analytics",
    "Design",
    "Promotion",
    "KPIs",
  ],

  "Engagement With AIESEC & Public Relations": [
    "Member Engagement",
    "Community",
    "Events",
    "Newsletter",
    "PR",
    "Media",
    "External Relations",
    "Campaigns",
    "Communication",
    "Brand Voice",
    "Partners",
    "KPIs",
  ],

  "Membership Experience": [
    "Recruitment",
    "Selection",
    "Onboarding",
    "Education",
    "Tracking",
    "Performance",
    "Retention",
    "One-to-Ones",
    "Coaching",
    "Team Standards",
    "Feedback",
    "Culture",
  ],

  "Finance & Legalities": [
    "Budget",
    "Invoices",
    "Contracts",
    "Cash Flow",
    "Accounting",
    "Legal Documents",
    "Reporting",
    "Taxes",
    "Compliance",
    "Approvals",
    "Planning",
    "KPIs",
  ],

  "Board Of Presidents": [
    "Strategy",
    "Planning",
    "Vision",
    "Governance",
    "Tracking",
    "Decision Making",
    "Risk Management",
    "National Alignment",
    "Planning Cycle",
    "Leadership",
    "Performance",
    "Review",
  ],

  "Information Management": [
    "Google Drive",
    "Knowledge Hub",
    "Database",
    "Permissions",
    "Automation",
    "Dashboards",
    "Google Sheets",
    "Documentation",
    "Backups",
    "Data Quality",
    "Integrations",
    "Reporting",
  ],
};

function AreaCard({
                    title,
                    height,
                    color,
                    onClick,
                    titleClassName = "text-lg",
                  }: {
  title: ReactNode;
  height: number;
  color: string;
  onClick?: () => void;
  titleClassName?: string;
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
        <div className="relative flex h-full items-center justify-center px-6 py-4">
        <span
            className={`${titleClassName} font-semibold leading-snug text-center text-white`}
        >
          {title}
        </span>
        </div>
      </InteractiveCard>
  );
}

export function Area({ dept, onNavigate }: DepartmentPageProps) {
  const meta = DEPT_META[dept];

  const topics = useMemo(() => {
    return DEPT_TOPICS[dept] ?? [];
  }, [dept]);

  const [startIndex, setStartIndex] = useState(0);

  // Reset carousel whenever department changes
  useEffect(() => {
    setStartIndex(0);
  }, [dept]);

  // Rotate every 5 seconds
  useEffect(() => {
    if (topics.length <= 6) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % topics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [topics]);

  // Always display 6 cards
  const visibleTopics = useMemo(() => {
    if (topics.length <= 6) return topics;

    return Array.from({ length: 6 }, (_, i) => {
      return topics[(startIndex + i) % topics.length];
    });
  }, [topics, startIndex]);

  return (
      <main className="relative overflow-hidden max-w-[36rem] md:max-w-6xl mx-auto px-5 pt-5 pb-36">
        {/* Department-colored fog */}
        <div
            className="pointer-events-none absolute -inset-x-40 -inset-y-36"
            style={{
              background: `radial-gradient(
            ellipse at center,
            color-mix(in srgb, ${meta.color} 20%, transparent) 0%,
            color-mix(in srgb, ${meta.color} 20%, transparent) 15%,
            color-mix(in srgb, ${meta.color} 5%, transparent) 45%,
            transparent 80%
          )`,
            }}
            aria-hidden
        />

        <div className="relative flex flex-col">

          {/* HEADER */}
          <div className="flex flex-col items-center mt-4 mb-12">

            <h1 className="flex items-center justify-center gap-2 text-center text-4xl font-extrabold tracking-tight text-white">
              <span>{dept}</span>

              <span
                  className="text-4xl leading-none"
                  style={{
                    color: `color-mix(in srgb, ${meta.color} 65%, white 35%)`,
                  }}
              >
              {meta.icon}
            </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* QUICK TOPICS */}
            <div className="flex flex-col gap-3">

              <div className="text-center text-sm font-semibold text-muted uppercase tracking-wide mb-1">
                Quick Topics
              </div>
              {visibleTopics.map((topic, index) => (
                  <AreaCard
                      key={`${topic}-${index}`}
                      title={topic}
                      titleClassName="text-sm"
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
                  onClick={() =>
                      window.open("https://drive.google.com", "_blank")
                  }
              />

              <AreaCard
                  title={
                    <>
                      Google
                      <br />
                      Sheets
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() =>
                      window.open("https://sheets.google.com", "_blank")
                  }
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
                      Learning
                      <br />
                      Cards
                    </>
                  }
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() =>
                      onNavigate({
                        dept,
                        view: "practice",
                      })
                  }
              />

              <AreaCard
                  title="Quiz"
                  height={NORMAL_CARD_HEIGHT_PX}
                  color={meta.color}
                  onClick={() =>
                      onNavigate({
                        dept,
                        view: "quiz",
                      })
                  }
              />
            </div>
          </div>
        </div>
      </main>
  );
}