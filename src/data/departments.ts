import type { Dept, DeptMeta, DeptResources } from "../types";

export const DEPT_META: Record<Dept, DeptMeta> = {
  "Incoming Global Volunteer B2C": {
    color: "#F85A40",
    icon: "🌍",
    badge: "iGV",
    tagline: "Converting individual applicants into confirmed volunteer exchanges",
  },

  "Incoming Global Volunteer B2B": {
    color: "#F85A40",
    icon: "🏢",
    badge: "iGV",
    tagline: "Partnering with organizations to host global volunteers",
  },

  "Incoming Global Talent": {
    color: "#0CB9C1",
    icon: "💼",
    badge: "iGT",
    tagline: "Recruiting international talent for local opportunities",
  },

  "Outgoing Global Volunteer": {
    color: "#F85A40",
    icon: "✈️",
    badge: "oGV",
    tagline: "Sending members on volunteer exchange experiences abroad",
  },

  "Outgoing Global Talent": {
    color: "#0CB9C1",
    icon: "🚀",
    badge: "oGTa",
    tagline: "Connecting members with global professional opportunities",
  },

  "Outgoing Global Teacher": {
    color: "#F48924",
    icon: "📚",
    badge: "oGTe",
    tagline: "Facilitating teaching exchange programs across borders",
  },

  Marketing: {
    color: "#037EF3",
    icon: "📣",
    badge: "MKT",
    tagline: "Brand, campaigns & content strategy",
  },

  "Engagement With AIESEC & Public Relations": {
    color: "#E6A700",
    icon: "🤝",
    badge: "EwA",
    tagline: "Stakeholder engagement, PR & AIESEC network relations",
  },

  "Membership Experience": {
    color: "#7552CC",
    icon: "⭐",
    badge: "MXP",
    tagline: "Member journey, culture & retention",
  },

  "Finance & Legalities": {
    color: "#00c16e",
    icon: "📊",
    badge: "F&L",
    tagline: "Financial management, compliance & legal governance",
  },

  "Its Great To Be An LCP": {
    color: "#037EF3",
    icon: "👑",
    badge: "LCP",
    tagline: "Leadership development & LCP excellence framework",
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