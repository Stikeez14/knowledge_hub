import { Tag } from "../components/Tag";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META, RESOURCES } from "../data/departments";
import type { Dept } from "../types";

interface ResourcesPageProps {
  dept: Dept;
}

const DriveIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M5 24l5.5-9.5L16 24H5z" fill="#00C9A7" opacity="0.9" />
    <path d="M11.5 14.5L17 5l5.5 9.5H11.5z" fill="#5B8FFF" opacity="0.9" />
    <path d="M16 24h11l-5.5-9.5L16 24z" fill="#FFB547" opacity="0.9" />
  </svg>
);

const SheetsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="#1C2030" />
    <rect x="8" y="8" width="7" height="4" rx="1" fill="#00C9A7" opacity="0.8" />
    <rect x="17" y="8" width="7" height="4" rx="1" fill="#5B8FFF" opacity="0.8" />
    <rect x="8" y="14" width="7" height="4" rx="1" fill="#5A6380" opacity="0.6" />
    <rect x="17" y="14" width="7" height="4" rx="1" fill="#5A6380" opacity="0.6" />
    <rect x="8" y="20" width="7" height="4" rx="1" fill="#5A6380" opacity="0.4" />
    <rect x="17" y="20" width="7" height="4" rx="1" fill="#5A6380" opacity="0.4" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ResourcesPage({ dept }: ResourcesPageProps) {
  const meta = DEPT_META[dept];
  const links = RESOURCES[dept];

  const cards = [
    {
      key: "drive",
      href: links.drive,
      icon: <DriveIcon />,
      label: "Google Drive",
      title: "Materials library",
      desc: "Sessions, tools and PDFs — all department files organised in one shared Drive folder.",
      items: ["Training sessions", "Tools & templates", "PDF guides & decks"],
      accent: "#00C9A7",
    },
    {
      key: "sheets",
      href: links.sheets,
      icon: <SheetsIcon />,
      label: "Google Sheets",
      title: "Video & media database",
      desc: "A curated sheet tracking podcasts, video content and other media resources for the team.",
      items: ["Podcasts & audio", "Video walkthroughs", "Recommended external content"],
      accent: "#5B8FFF",
    },
  ];

  return (
    <main className="max-w-2xl mx-auto px-5 py-14">
      <div className="flex items-center gap-2 mb-2">
        <Tag label={dept} color={meta.color} />
        <Tag label="Resources" color="#5B8FFF" />
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mt-3 mb-2 text-ink">{dept} resources</h1>
      <p className="text-sm mb-10 text-muted">
        Two central hubs for all department materials — files and media.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {cards.map((card) => (
          <InteractiveCard key={card.key} href={card.href} accent={card.accent} className="p-7 flex flex-col">
            <div className="mb-5">{card.icon}</div>
            <Tag label={card.label} color={card.accent} />
            <h2 className="font-bold text-lg mt-3 mb-2 leading-snug text-ink">{card.title}</h2>
            <p className="text-xs leading-relaxed mb-5 text-muted">{card.desc}</p>
            <ul className="space-y-2 flex-1 mb-6">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-subtle">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.accent }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: card.accent }}>
              Open {card.label}
              <ArrowIcon />
            </div>
          </InteractiveCard>
        ))}
      </div>
    </main>
  );
}
