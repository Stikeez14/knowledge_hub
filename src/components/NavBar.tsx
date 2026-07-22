import AIESECLogo from "../assets/logos/Blue-AIESEC-Logo.png";
import type { Page } from "../types";

interface NavBarProps {
  page: Page;
  onBack: () => void;
}

// Shared width — reused by the home page's title block and buttons so
// everything lines up to the same column width as the logo.
export const BRAND_WIDTH = "w-52"; // Logo

export function NavBar({ page, onBack }: NavBarProps) {
  const isHome = page === "home";

  return (
      <header className="sticky top-0 z-50 relative h-20 border-b border-border bg-black/90 backdrop-blur-md">
          {/* Left section */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <button
                  onClick={onBack}
                  className={`h-8 flex items-center gap-1.5 text-xs font-medium px-3 rounded-md border border-border text-subtle transition-colors ${
                      isHome ? "invisible" : ""
                  }`}
              >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                          d="M7.5 2L3.5 6L7.5 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                  </svg>
                  Back
              </button>
          </div>

          {/* Always perfectly centered */}
          <img
              src={AIESECLogo}
              alt="AIESEC logo"
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${BRAND_WIDTH} h-auto object-contain`}
              draggable={false}
          />
      </header>
  );
}