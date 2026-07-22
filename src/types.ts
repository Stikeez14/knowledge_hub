export type Dept =
  | "General"
  | "Incoming Global Volunteer B2C"
  | "Incoming Global Volunteer B2B"
  | "Incoming Global Talent"
  | "Outgoing Global Volunteer"
  | "Outgoing Global Talent"
  | "Outgoing Global Teacher"
  | "Marketing"
  | "Engagement With AIESEC & Public Relations"
  | "Membership Experience"
  | "Finance & Legalities"
  | "Board Of Presidents"
  | "Information Management";

// Single ordered list — every page that needs "all departments"
// (the directory grid, nav, etc.) reads from this instead of
// re-typing the array in each component.
export const ALL_DEPARTMENTS: Dept[] = [
    "General",
    "Incoming Global Volunteer B2C",
    "Incoming Global Volunteer B2B",
    "Incoming Global Talent",
    "Outgoing Global Volunteer",
    "Outgoing Global Talent",
    "Outgoing Global Teacher",
    "Marketing",
    "Engagement With AIESEC & Public Relations",
    "Membership Experience",
    "Finance & Legalities",
    "Board Of Presidents",
    "Information Management",
];

export interface DeptMeta {
  color: string;
  icon: string;
  badge: string;
  tagline: string;
}

export interface DeptResources {
  drive: string;
  sheets: string;
}

export type QuestionType = "mcq" | "tf" | "fill";

export interface Question {
  type: QuestionType;
  question: string;
  options?: string[];      // mcq only
  answer: string | boolean;
  blank?: string;          // fill only — the word being tested
  sentence?: string;       // fill only — full sentence with a "_____" gap
}

// Page/navigation model, shared by App.tsx and every page component.
export type Page =
  | "home"
  | "about"
  | "departments"
  | { dept: Dept; view: "dept" | "resources" | "practice" };
