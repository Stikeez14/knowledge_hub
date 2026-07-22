import { useState } from "react";
import "./styles/globals.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Areas } from "./pages/Areas.tsx";
import { Area } from "./pages/Area.tsx";
import { Resource } from "./pages/Resource.tsx";
import { Practice } from "./pages/Practice.tsx";
import type { Page } from "./types";

export default function App() {
  const [history, setHistory] = useState<Page[]>(["home"]);
  const page = history[history.length - 1];

  const navigate = (p: Page) => setHistory((h) => [...h, p]);
  const goBack = () => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));

  return (
    <div className="min-h-screen bg-bg">
      <NavBar page={page} onBack={goBack} />
      {page === "home" && <Home onNavigate={navigate} />}
      {page === "about" && <Dashboard />}
      {page === "departments" && <Areas onNavigate={navigate} />}
      {typeof page === "object" && page.view === "dept" && (
        <Area dept={page.dept} onNavigate={navigate} />
      )}
      {typeof page === "object" && page.view === "resources" && (
        <Resource dept={page.dept} />
      )}
      {typeof page === "object" && page.view === "practice" && (
        <Practice dept={page.dept} onNavigate={navigate} />
      )}
    </div>
  );
}
