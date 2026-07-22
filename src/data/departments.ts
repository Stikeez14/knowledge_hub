import type { Dept, DeptMeta, DeptResources } from "../types";

export const DEPT_META: Record<Dept, DeptMeta> = {
  "General": {
    color: "#52565E",
    icon: "📦",
    badge: "GN",
  },

  "Incoming Global Volunteer B2C": {
    color: "#F85A40",
    icon: "🎒",
    badge: "iGV\nB2C",
  },

  "Incoming Global Volunteer B2B": {
    color: "#F85A40",
    icon: "🤝",
    badge: "iGV\nB2B",
  },

  "Incoming Global Talent": {
    color: "#0CB9C1",
    icon: "🎯",
    badge: "iGT",
  },

  "Outgoing Global Volunteer": {
    color: "#F85A40",
    icon: "🏖️",
    badge: "oGV",
  },

  "Outgoing Global Talent": {
    color: "#0CB9C1",
    icon: "🚀",
    badge: "oGTa",
  },

  "Outgoing Global Teacher": {
    color: "#F48924",
    icon: "📚",
    badge: "oGTe",
  },

  Marketing: {
    color: "#037EF3",
    icon: "📣",
    badge: "MKT",
  },

  "Engagement With AIESEC & Public Relations": {
    color: "#E6A700",
    icon: "🏆",
    badge: "EwA\n&PR",
  },

  "Membership Experience": {
    color: "#7552CC",
    icon: "🌟",
    badge: "MxP",
  },

  "Finance & Legalities": {
    color: "#00c16e",
    icon: "💰",
    badge: "F&L",
  },

  "Board Of Presidents": {
    color: "#037EF3",
    icon: "🎖️",
    badge: "BoP",
  },

  "Information Management": {
    color: "#52565E",
    icon: "💻",
    badge: "IM",
  },
};

export const RESOURCES: Record<Dept, DeptResources> = Object.keys(
    DEPT_META
).reduce(
    (acc, dept) => {
      acc[dept as Dept] = {
        drive: "https://drive.google.com",
        sheets: "https://sheets.google.com",
      };
      return acc;
    },
    {} as Record<Dept, DeptResources>
);