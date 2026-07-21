import type { CSSProperties } from "react";
import { InteractiveCard } from "../components/InteractiveCard";
import { DEPT_META } from "../data/departments";
import { ALL_DEPARTMENTS, type Page } from "../types";

interface DepartmentsPageProps {
    onNavigate: (p: Page) => void;
}

export function DepartmentsPage({ onNavigate }: DepartmentsPageProps) {
    return (
        <main className="max-w-[36rem] mx-auto px-5 py-14">
            <div className="flex flex-col items-center">

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white text-center">
                    Choose your department
                </h1>

                <p className="mt-4 mb-10 max-w-md text-center text-base leading-relaxed text-muted">
                    Select a department to access resources and practice materials.
                </p>

                <div className="flex flex-col gap-4 w-full">
                    {ALL_DEPARTMENTS.map((dept) => {
                        const meta = DEPT_META[dept];

                        return (
                            <InteractiveCard
                                key={dept}
                                onClick={() =>
                                    onNavigate({
                                        dept,
                                        view: "dept",
                                    })
                                }
                                className="px-6 py-5"
                                style={
                                    {
                                        borderColor: meta.color,
                                        "--dept-color": meta.color,
                                    } as CSSProperties
                                }
                            >
                                <div className="grid grid-cols-[56px_1fr_56px] items-center">

                                    {/* LEFT BADGE */}

                                    <div className="flex justify-start">
                    <span
                        className="dept-badge flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold"
                        style={{
                            backgroundColor: `${meta.color}20`,
                            color: meta.color,
                        }}
                    >
                      {meta.badge}
                    </span>
                                    </div>

                                    {/* TITLE */}

                                    <div
                                        className="dept-title text-center font-semibold text-base"
                                        style={{
                                            color: meta.color,
                                        }}
                                    >
                                        {dept}
                                    </div>

                                    {/* RIGHT EMOJI */}

                                    <div className="flex justify-end">
                    <span
                        className="dept-badge flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                        style={{
                            backgroundColor: `${meta.color}20`,
                            color: meta.color,
                        }}
                    >
                      {meta.icon}
                    </span>
                                    </div>

                                </div>
                            </InteractiveCard>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}