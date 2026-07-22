import type { CSSProperties } from "react";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META } from "../data/departments";
import { ALL_DEPARTMENTS, type Dept, type Page } from "../types";

interface DepartmentsPageProps {
    onNavigate: (p: Page) => void;
}

// One column per group, rendered generically — every group is
// just a stack of same-size cards.
const SIMPLE_GROUPS: { label: string; depts: Dept[] }[] = [
    { label: "Resources", depts: ["General", "Information Management"] },
    {
        label: "Global Volunteer",
        depts: [
            "Incoming Global Volunteer B2C",
            "Incoming Global Volunteer B2B",
            "Outgoing Global Volunteer",
        ],
    },
    {
        label: "Global Talent",
        depts: [
            "Incoming Global Talent",
            "Outgoing Global Talent",
            "Outgoing Global Teacher",
        ],
    },
    {
        label: "Brand",
        depts: ["Marketing", "Engagement With AIESEC & Public Relations"],
    },
    {
        label: "Back Office",
        depts: [
            "Membership Experience",
            "Finance & Legalities",
            "Board Of Presidents",
        ],
    },
];

// Explicit overrides for titles that don't follow the generic
// "one word per line, merge & onto the previous word" rule.
const TITLE_LINE_OVERRIDES: Partial<Record<Dept, string[]>> = {
    "Board Of Presidents": ["Board Of", "Presidents"],
    "Engagement With AIESEC & Public Relations": [
        "Engagement",
        "With AIESEC",
        "& Public Relations",
    ],
};

// Generic rule: split on spaces, one word per line, but merge a
// bare "&" onto the previous line (e.g. "Finance & Legalities"
// -> ["Finance &", "Legalities"]).
function getTitleLines(dept: Dept): string[] {
    if (TITLE_LINE_OVERRIDES[dept]) return TITLE_LINE_OVERRIDES[dept]!;

    const words = dept.split(" ");
    const lines: string[] = [];
    for (const word of words) {
        if (word === "&" && lines.length > 0) {
            lines[lines.length - 1] = `${lines[lines.length - 1]} &`;
        } else {
            lines.push(word);
        }
    }
    return lines;
}

function DeptCard({
                      dept,
                      onNavigate,
                  }: {
    dept: Dept;
    onNavigate: (p: Page) => void;
}) {
    const meta = DEPT_META[dept];
    const titleLines = getTitleLines(dept);

    return (
        <InteractiveCard
            onClick={() =>
                onNavigate({
                    dept,
                    view: "dept",
                })
            }
            className="group p-0 w-full h-24 overflow-hidden rounded-xl transition-colors duration-150 hover:!bg-[var(--dept-color)]"
            style={
                {
                    "--dept-color": meta.color,
                    backgroundColor: `color-mix(in srgb, ${meta.color} 14%, #141414)`,
                } as CSSProperties
            }
        >
            <div className="relative flex h-full items-center justify-center px-6 py-4">
                {/* BADGE — icon + tag, centered. Default state only. */}
                <div className="flex items-center justify-center gap-5 group-hover:hidden">
                    <span
                        className="dept-badge text-2xl font-bold whitespace-pre-line text-center leading-tight text-white"
                    >
                        {meta.badge}
                    </span>
                    <span
                        className="text-4xl leading-none"
                        style={{
                            color: `color-mix(in srgb, ${meta.color} 65%, white 35%)`,
                        }}
                    >
                        {meta.icon}
                    </span>
                </div>

                {/* TITLE — hidden by default, shown only on hover */}
                <span className="hidden group-hover:inline-block dept-title text-left font-semibold text-base leading-snug transition-colors duration-150 text-white">
                    {titleLines.map((line, i) => (
                        <span key={i} className="block">
                            {line}
                        </span>
                    ))}
                </span>
            </div>
        </InteractiveCard>
    );
}

export function Areas({ onNavigate }: DepartmentsPageProps) {
    return (
        <main className="relative overflow-hidden max-w-[36rem] md:max-w-6xl mx-auto px-5 pt-5 pb-36">
            <div className="relative flex flex-col items-center">
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white text-center">
                    Choose Your Area Of Interest:
                </h1>

                {/* MOBILE: single stack, same as before */}
                <div className="flex md:hidden flex-col gap-4 w-full">
                    {ALL_DEPARTMENTS.map((dept) => (
                        <DeptCard key={dept} dept={dept} onNavigate={onNavigate} />
                    ))}
                </div>

                {/* DESKTOP: single glow behind the whole grid. The
                    wrapper is much larger than the grid itself so the
                    gradient's fade finishes well inside the box —
                    no visible edge. */}
                <div className="relative mt-12 hidden md:block w-full">
                    <div
                        className="pointer-events-none absolute -inset-x-36 -inset-y-36"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(82,86,94,0.3) 0%, rgba(82,86,94,0.3) 15%, rgba(82,86,94,0.2) 40%, transparent 60%)",
                        }}
                        aria-hidden
                    />
                    <div className="relative grid grid-cols-5 gap-6 w-full items-start">
                        {SIMPLE_GROUPS.map((group) => (
                            <div key={group.label} className="flex flex-col gap-4">
                                <div className="text-center text-sm font-semibold text-muted uppercase tracking-wide mb-1">
                                    {group.label}
                                </div>
                                {group.depts.map((dept) => (
                                    <DeptCard
                                        key={dept}
                                        dept={dept}
                                        onNavigate={onNavigate}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}