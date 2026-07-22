import type { Page } from "../types";
import { BRAND_WIDTH } from "../components/NavBar";

interface HomePageProps {
  onNavigate: (p: Page) => void;
}

export function Home({ onNavigate }: HomePageProps) {
  return (
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-5 py-16 text-center overflow-hidden">
          <div
              className="pointer-events-none absolute left-1/2 top-1/2
             -translate-x-1/2 -translate-y-1/2
             w-[300px] h-[450px]
             sm:w-[250px] sm:h-[400px]
             rounded-full bg-[#037EF3]/35 blur-[80px]"
              aria-hidden
          />

        <div className="relative max-w-xl mx-auto flex flex-col items-center">
            <div className={`${BRAND_WIDTH} mx-auto mb-5 flex justify-center`}>
                <h1 className="inline-flex items-center gap-2 text-4xl font-extrabold leading-tight tracking-tight text-white">
                    <span>Welcome</span>
                    <span aria-hidden>👋</span>
                </h1>
            </div>

            <p
                className={`${BRAND_WIDTH} mx-auto mb-12 text-center text-base leading-relaxed text-muted`}
            >
                Learning platform for all
                <br />
                AIESEC in Romania areas.
            </p>

          <div className="flex flex-col gap-4 items-center">
            <button
                onClick={() => onNavigate("about")}
                className={`${BRAND_WIDTH} flex items-center justify-center px-3 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap border border-brand bg-white text-brand hover:bg-brand hover:text-white transition-colors`}            >
              LC Dashboard
            </button>
            <button
                onClick={() => onNavigate("departments")}
                className={`${BRAND_WIDTH} flex items-center justify-center px-3 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap border border-brand bg-white text-brand hover:bg-brand hover:text-white transition-colors`}
            >
              Knowledge Hub
            </button>
          </div>
        </div>
      </main>
  );
}