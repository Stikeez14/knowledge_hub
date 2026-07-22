import { useState } from "react";
import "./styles/globals.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Areas } from "./pages/Areas";
import { Area } from "./pages/Area";
import { Resource } from "./pages/Resource";
import { Practice } from "./pages/Practice";
import type { Page } from "./types";

export default function App() {
  const [history, setHistory] = useState<Page[]>(["home"]);
  const page = history[history.length - 1];

  const navigate = (p: Page) =>
      setHistory((history) => [...history, p]);

  const goBack = () =>
      setHistory((history) =>
          history.length > 1 ? history.slice(0, -1) : history
      );

  return (
      <div className="min-h-screen flex flex-col bg-bg">
        {/* Navigation */}
        <NavBar page={page} onBack={goBack} />

        {/* Main content */}
        <main className="flex-1">
          {page === "home" && <Home onNavigate={navigate} />}

          {page === "about" && <Dashboard />}

          {page === "departments" && (
              <Areas onNavigate={navigate} />
          )}

          {typeof page === "object" && page.view === "dept" && (
              <Area
                  dept={page.dept}
                  onNavigate={navigate}
              />
          )}

          {typeof page === "object" && page.view === "resources" && (
              <Resource dept={page.dept} />
          )}

          {typeof page === "object" && page.view === "practice" && (
              <Practice
                  dept={page.dept}
                  onNavigate={navigate}
              />
          )}
        </main>

        {/* Footer */}
        <footer className="h-20 border-t border-border bg-black/90 backdrop-blur-md">
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-sm font-medium tracking-wide text-subtle">
              Designed &amp; Developed by{" "}
              <span className="font-bold text-muted">
              AIESEC in Timișoara
            </span>
            </p>

            <p className="mt-0.5 text-[10px] uppercase tracking-[0.10em] text-subtle">
              Knowledge Hub{" "}
              <span className="font-bold text-muted">
              v1.0
            </span>
            </p>
          </div>
        </footer>
      </div>
  );
}