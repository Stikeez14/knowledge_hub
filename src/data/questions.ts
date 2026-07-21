import type { Dept, Question } from "../types";

export const QUESTIONS: Record<Dept, Question[]> = {
  "Incoming Global Volunteer B2C": [
    {
      type: "mcq",
      question: "What is the primary goal of the iGV B2C sales process?",
      options: [
        "Signing partnership contracts",
        "Converting individual applicants into confirmed exchange participants",
        "Managing host entity relations",
        "Running internal trainings",
      ],
      answer: "Converting individual applicants into confirmed exchange participants",
    },
    {
      type: "tf",
      question: "Following up with a lead within 24 hours of first contact significantly increases conversion rates.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "The iGV sales funnel ends when the applicant receives a confirmed _____ from the host entity.",
      blank: "match",
      answer: "match",
    },
  ],
  "Incoming Global Volunteer B2B": [
    {
      type: "mcq",
      question: 'In iGV B2B, what does "raising" an opportunity mean?',
      options: [
        "Publishing a volunteer project on the platform",
        "Recruiting a new member",
        "Sending an EP abroad",
        "Collecting membership fees",
      ],
      answer: "Publishing a volunteer project on the platform",
    },
    {
      type: "tf",
      question: "A partnership with a host entity should be renewed after each exchange cycle to ensure alignment.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "The document formalizing the terms of a volunteer hosting arrangement is called a _____ agreement.",
      blank: "partnership",
      answer: "partnership",
    },
  ],
  "Incoming Global Talent": [
    {
      type: "mcq",
      question: "iGT primarily targets which type of candidate?",
      options: [
        "Students seeking academic credits",
        "Young professionals seeking paid international internships",
        "Companies needing marketing support",
        "AIESEC alumni",
      ],
      answer: "Young professionals seeking paid international internships",
    },
    {
      type: "tf",
      question: "In iGT, the host entity is responsible for providing a work contract to the incoming talent.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "iGT opportunities are classified as _____ exchanges because participants receive remuneration.",
      blank: "professional",
      answer: "professional",
    },
  ],
  "Outgoing Global Volunteer": [
    {
      type: "mcq",
      question: "What is the first step in the oGV process after a member expresses interest?",
      options: [
        "Booking flights",
        "Conducting a preparation session",
        "Signing the partnership agreement",
        "Collecting the program fee",
      ],
      answer: "Conducting a preparation session",
    },
    {
      type: "tf",
      question: "An oGV EP can be matched to a project in any AIESEC entity globally, not only nearby countries.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "Before departure, every oGV participant must complete a _____ preparation to be ready for their experience.",
      blank: "cross-cultural",
      answer: "cross-cultural",
    },
  ],
  "Outgoing Global Talent": [
    {
      type: "mcq",
      question: "oGT exchanges are distinguished from oGV primarily because they involve:",
      options: [
        "Volunteer work only",
        "Paid professional internships",
        "Teaching programs",
        "Local community projects",
      ],
      answer: "Paid professional internships",
    },
    {
      type: "tf",
      question: "oGT participants are responsible for securing their own visa without any support from AIESEC.",
      answer: false,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "An oGT participant must have a confirmed _____ before applying for their work visa.",
      blank: "job offer",
      answer: "job offer",
    },
  ],
  "Outgoing Global Teacher": [
    {
      type: "mcq",
      question: "oGTe participants primarily go abroad to:",
      options: [
        "Attend university courses",
        "Teach English or other subjects in schools and communities",
        "Work in corporate offices",
        "Conduct scientific research",
      ],
      answer: "Teach English or other subjects in schools and communities",
    },
    {
      type: "tf",
      question: "oGTe participants must have a formal teaching degree to qualify for the program.",
      answer: false,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "Before departure, oGTe participants attend a _____ workshop to prepare their teaching approach.",
      blank: "pedagogical",
      answer: "pedagogical",
    },
  ],
  Marketing: [
    {
      type: "mcq",
      question: "Which metric best measures content reach on social media?",
      options: ["CPM", "Impressions", "ROAS", "CPC"],
      answer: "Impressions",
    },
    {
      type: "tf",
      question: "A/B testing should run until statistical significance is reached before drawing conclusions.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "The marketing _____ defines the organization's unique position relative to competitors.",
      blank: "positioning",
      answer: "positioning",
    },
  ],
  "Engagement With AIESEC & Public Relations": [
    {
      type: "mcq",
      question: "What is the main purpose of stakeholder mapping in public relations?",
      options: [
        "Tracking financial budgets",
        "Identifying and prioritizing key audiences for communication",
        "Scheduling internal meetings",
        "Designing social media posts",
      ],
      answer: "Identifying and prioritizing key audiences for communication",
    },
    {
      type: "tf",
      question: "AIESEC's global network can be leveraged to support local entity campaigns and partnerships.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "A _____ statement communicates the organization's response to a crisis or sensitive public issue.",
      blank: "press",
      answer: "press",
    },
  ],
  "Membership Experience": [
    {
      type: "mcq",
      question: "Which phase of the member journey focuses on welcoming and orienting new members?",
      options: ["Recruitment", "Onboarding", "Development", "Alumni transition"],
      answer: "Onboarding",
    },
    {
      type: "tf",
      question: "A strong team culture directly contributes to member retention and satisfaction.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "Regular one-on-one _____ sessions between team leaders and members support personal development.",
      blank: "coaching",
      answer: "coaching",
    },
  ],
  "Finance & Legalities": [
    {
      type: "mcq",
      question: "Which financial document summarizes revenues, expenses and net result over a period?",
      options: ["Balance sheet", "Cash flow statement", "Income statement", "Budget forecast"],
      answer: "Income statement",
    },
    {
      type: "tf",
      question: "Every financial transaction of the local committee must be recorded and documented.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "The process of comparing actual spend against planned spend is called budget _____.",
      blank: "tracking",
      answer: "tracking",
    },
  ],
  "Its Great To Be An LCP": [
    {
      type: "mcq",
      question: "What is the primary responsibility of a Local Committee President (LCP)?",
      options: [
        "Managing social media accounts",
        "Leading the overall strategy and performance of the local committee",
        "Conducting member recruitment only",
        "Handling visa applications",
      ],
      answer: "Leading the overall strategy and performance of the local committee",
    },
    {
      type: "tf",
      question: "An LCP should delegate tasks effectively while remaining accountable for overall outcomes.",
      answer: true,
    },
    {
      type: "fill",
      question: "Complete the sentence:",
      sentence: "An LCP sets the _____ for the local committee, defining goals and priorities for the term.",
      blank: "strategy",
      answer: "strategy",
    },
  ],
};
