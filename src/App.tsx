import { useState } from "react";
import "./styles/globals.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { Dashboard } from "./pages/Dashboard.tsx";
import { DepartmentsPage } from "./pages/DepartmentsPage";
import { DepartmentPage } from "./pages/DepartmentPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { PracticePage } from "./pages/PracticePage";
import type { Page } from "./types";

export default function App() {
  const [history, setHistory] = useState<Page[]>(["home"]);
  const page = history[history.length - 1];

  const navigate = (p: Page) => setHistory((h) => [...h, p]);
  const goBack = () => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));

  return (
    <div className="min-h-screen bg-bg">
      <NavBar page={page} onBack={goBack} />
      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "about" && <Dashboard />}
      {page === "departments" && <DepartmentsPage onNavigate={navigate} />}
      {typeof page === "object" && page.view === "dept" && (
        <DepartmentPage dept={page.dept} onNavigate={navigate} />
      )}
      {typeof page === "object" && page.view === "resources" && (
        <ResourcesPage dept={page.dept} />
      )}
      {typeof page === "object" && page.view === "practice" && (
        <PracticePage dept={page.dept} onNavigate={navigate} />
      )}
    </div>
  );
}
