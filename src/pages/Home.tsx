import type { CSSProperties } from "react";
import { InteractiveCard } from "../components/InteractiveCard";
import type { Page } from "../types";

interface HomePageProps {
    onNavigate: (p: Page) => void;
}

const HOME_BLUE = "#037EF3";

export function Home({ onNavigate }: HomePageProps) {
    return (
        <main className="relative overflow-hidden max-w-[36rem] md:max-w-6xl mx-auto px-5 pt-5 pb-40">
            {/* Fog */}
            <div
                className="pointer-events-none absolute -inset-x-40 -inset-y-36"
                style={{
                    background: `radial-gradient(
            ellipse at center,
            color-mix(in srgb, ${HOME_BLUE} 20%, transparent) 0%,
            color-mix(in srgb, ${HOME_BLUE} 20%, transparent) 10%,
            color-mix(in srgb, ${HOME_BLUE} 2%, transparent) 40%,
            transparent 80%
          )`,
                }}
                aria-hidden
            />

            <div className="relative flex flex-col items-center">
                {/* Title */}
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white text-center">
                    Welcome <span aria-hidden>👋</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base leading-relaxed text-muted text-center">
                    to our learning platform for
                    <br />
                    all AIESEC in Romania areas.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-col gap-4 w-55 max-w-xs">
                    <InteractiveCard
                        onClick={() => onNavigate("about")}
                        className="group p-0 overflow-hidden rounded-xl transition-colors duration-150 hover:!bg-[var(--home-color)]"
                        style={
                            {
                                "--home-color": HOME_BLUE,
                                backgroundColor: `color-mix(in srgb, ${HOME_BLUE} 24%, #141414)`,
                                height: 68,
                            } as CSSProperties
                        }
                    >
                        <div className="flex h-full items-center justify-center px-6">
              <span className="text-lg font-semibold text-white">
                LC Dashboard
              </span>
                        </div>
                    </InteractiveCard>

                    <InteractiveCard
                        onClick={() => onNavigate("departments")}
                        className="group p-0 overflow-hidden rounded-xl transition-colors duration-150 hover:!bg-[var(--home-color)]"
                        style={
                            {
                                "--home-color": HOME_BLUE,
                                backgroundColor: `color-mix(in srgb, ${HOME_BLUE} 24%, #141414)`,
                                height: 68,
                            } as CSSProperties
                        }
                    >
                        <div className="flex h-full items-center justify-center px-6">
              <span className="text-lg font-semibold text-white">
                Knowledge Hub
              </span>
                        </div>
                    </InteractiveCard>
                </div>
            </div>
        </main>
    );
}