import { Bot, Code2 } from "lucide-react";

export const experiences = [
  {
    company: "Develab Sdn. Bhd.",
    role: "Software Engineer Intern",
    location: "Malaysia - Kuala Lumpur",
    duration: "Apr 2026 - Oct 2026",
    logo: "/logos/develab_logo_.png",
    href: "/experience/develab",
    description:
      "i'm worked as software engineer intern, focusing development mobile application, testing mobile application, AI workflow exploration",
    responsibilities: [
      "Developed a scheduling mobile app for 1 Vietnamese client using Flutter, as part of a team project",
      "Tested app features, reported bugs, and verified fixes before release.",
      "Researched AI-assisted Selenium testing concepts",
      "Built speech-to-text mobile prototype using Flutter",
      "Implemented Google Calendar synchronization flow",
      "Explored Microsoft Graph delta sync architecture",
      "Worked with OAuth authentication and API integration",
      "Participated in R&D-style engineering tasks",
      "Learning how to implement Langflow-based QA workflow automation",
    ],
    techStack: [
      "Python",
      "Flutter",
      "Langflow",
      "Selenium",
      "Google Calendar API",
      "Microsoft Graph API",
      "MySQL",
      "FastAPI",
      "GitHub",
    ],
    accent: "from-sky-300 via-blue-500 to-indigo-500",
    icon: Bot,
  },
  {
    company: "PT Linknet Tbk",
    role: "Business Analyst Intern",
    location: "Indonesia - South Tangerang",
    duration: "June 2024 - Sept 2024 ",
    logo: "/logos/LinkNet_logo.png",
    href: "/experience/linknet",
    description:
      "Contributed part of business analysis, chatbot workflow exploration, UI/UX creation, and data-related operational tasks during internship activities.",
    responsibilities: [
      "Built an ML-powered auto reply system for Linknet X account to handle customer tweets automatically.",
      "Assisted business analysis activities",
      "Explored chatbot workflow concepts",
      "Worked on UI/UX proposal design",
      "Supported data collection and data cleaning process",
      "Collaborated with internal team workflows",
    ],
    techStack: [
      "Figma",
      "Microsoft Excel",
      "Data Processing",
      "UI/UX Design",
      "Workflow Analysis",
    ],
    accent: "from-cyan-300 via-sky-500 to-blue-700",
    icon: Code2,
  },
];

export const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};
