import {
  Bot,
  ClipboardCheck,
  LayoutGrid,
  Smartphone,
} from "lucide-react";

export const filters = [
  "All",
  "AI",
  "QA",
  "Mobile",
  "UI/UX",
  "Automation",
];

export const projectSections = [
  {
    title: "AI & Automation Projects",
    subtitle:
      "AI workflows, automation concepts, API integrations, and mobile proof-of-concepts.",
    projects: [
      {
        slug: "develab-mobile-app-quality-assurance",
        title: "Mobile App Quality Assurance — Develab",
        description:
          "Performed quality assurance testing for a mobile application project developed at Develab, validating its functionality and behavior across multiple mobile devices.",
        status: "Professional Experience",
        techStack: [
          "Quality Assurance",
          "Mobile App Testing",
          "Manual Testing",
          "Functional Testing",
          "Cross-Device Testing",
        ],
        categories: ["QA", "Mobile"],
        icon: ClipboardCheck,
        sourceCodeHref: null,
        screenshotFolder: "public/screnshoot project/QA",
        screenshots: [
          {
            title: "Mobile App Cross-Device Testing",
            type: "Quality Assurance",
            src: "/screnshoot%20project/QA/testing%20mobile%20app.jpeg",
            width: 1280,
            height: 960,
          },
        ],
      },
      {
        slug: "schedule-chat-platform",
        title: "Schedule Chat Platform",
        description:
          "Frontend assignment during internship at Develab, Flutter App to manage schedule, chat, guest contact, and notification in one practical platform.",
        status: "Completed",
        techStack: [
          "Flutter",
          "Firebase",
          "Mobile UI",
          "Chat Platform",
          "Scheduling",
          "Prototype",
        ],
        categories: ["Mobile"],
        icon: Smartphone,
        sourceCodeHref: "https://github.com/Valiantalhakim/Schedule-chat-app-Intern",
        screenshotFolder: "public/screnshoot project/mobile",
        screenshots: [
          {
            title: "Schedule Chat Screen 1",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/schedule%20chat%20platform%201.png",
            width: 682,
            height: 919,
          },
          {
            title: "Schedule Chat Screen 2",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/schedule%20chat%20platform%202.png",
            width: 738,
            height: 901,
          },
          {
            title: "Schedule Chat Screen 3",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/schedule%20chat%20platform%203.png",
            width: 538,
            height: 822,
          },
          {
            title: "Schedule Chat Screen 4",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/schedule%20chat%20platform%204.png",
            width: 598,
            height: 858,
          },
          {
            title: "Schedule Chat Screen 5",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/schedule%20chat%20platform%205.png",
            width: 574,
            height: 849,
          },
          {
            title: "Schedule Chat Flutter Development",
            type: "Flutter Development",
            src: "/screnshoot%20project/mobile/coding%20flutter.jpeg",
            width: 960,
            height: 1280,
          },
        ],
      },
      {
        slug: "ticket-mobile-app",
        title: "Ticket Mobile App",
        description:
          "Self-learning Flutter project built during my internship at Develab.",
        status: "Completed",
        techStack: ["Flutter", "Mobile UI", "Prototype"],
        categories: ["Mobile"],
        icon: Smartphone,
        sourceCodeHref: "https://github.com/Valiantalhakim/movie_ticket",
        screenshotFolder: "public/screnshoot project/mobile",
        screenshots: [
          {
            title: "Ticket Mobile Screen 1",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket_mobile.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 2",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%202.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 3",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%203.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 4",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%204.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 5",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%205.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 6",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%206.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 7",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%207.jpeg",
            width: 739,
            height: 1600,
          },
          {
            title: "Ticket Mobile Screen 8",
            type: "Mobile UI",
            src: "/screnshoot%20project/mobile/ticket%20mobile%208.jpeg",
            width: 739,
            height: 1600,
          },
        ],
      },
      {
        slug: "ai-powered-qa-workflow",
        title: "AI-Powered QA Workflow",
        description:
          "Explored how Langflow can help QA engineers generate test cases, Selenium scripts, and structured bug reports using AI workflows.",
        status: "Research / Prototype",
        techStack: ["Langflow", "Selenium", "Python", "FastAPI", "AI Workflow"],
        categories: ["AI", "Automation"],
        icon: Bot,
        sourceCodeHref: null,
        screenshotFolder: "public/screnshoot project/langflow",
        screenshots: [
          {
            title: "Langflow QA Selenium Workflow",
            type: "AI Workflow",
            src: "/screnshoot%20project/langflow/langflow%20QA%20selenium.png",
            width: 1491,
            height: 798,
          },
        ],
      },
      {
        slug: "n8n-whatsapp-chatbot-automation",
        title: "n8n WhatsApp Chatbot Automation",
        description:
          "Built an AI-powered WhatsApp chatbot using n8n and WAHA API that retrieves information from PDF documents and Google Sheets. The chatbot answers interviewer questions via private WhatsApp chat based on my CV, skills, experience, and internship daily reports.",
        status: "Completed",
        techStack: ["n8n", "Automation", "WhatsApp", "Chatbot", "AI Workflow"],
        categories: ["AI", "Automation"],
        icon: Bot,
        sourceCodeHref: null,
        screenshotFolder: "public/screnshoot project/n8n automation",
        screenshots: [
          {
            title: "WhatsApp Chatbot Flow",
            type: "n8n Workflow",
            src: "/screnshoot%20project/n8n%20automation/flow%20chat%20bot%20whasapp.png",
            width: 1315,
            height: 693,
          },
          {
            title: "n8n Automation Experiment",
            type: "Automation Flow",
            src: "/screnshoot%20project/n8n%20automation/exp.png",
            width: 662,
            height: 928,
          },
          {
            title: "n8n Automation Result",
            type: "Automation Flow",
            src: "/screnshoot%20project/n8n%20automation/exp%202.png",
            width: 660,
            height: 795,
          },
        ],
      },
    ],
  },
  {
    title: "Business Workflow & UI/UX Projects",
    subtitle:
      "Business analysis, workflow exploration, and UI/UX proposal projects.",
    projects: [
      {
        slug: "first-media-movie-uiux-proposal",
        title: "First Media Movie UI/UX Proposal",
        description:
          "Created UI/UX proposal concepts and interface exploration for media-related digital platform ideas.",
        status: "Completed",
        techStack: ["Figma", "UI/UX", "Wireframing", "Prototype Design"],
        categories: ["UI/UX"],
        icon: LayoutGrid,
        screenshotFolder: "public/screnshoot project/uiux",
        screenshots: [
          {
            title: "Movie App Home",
            type: "UI/UX",
            src: "/screnshoot%20project/uiux/first%20media%20movie.png",
            width: 334,
            height: 726,
          },
          {
            title: "Movie Detail Screen",
            type: "UI/UX",
            src: "/screnshoot%20project/uiux/first%20media%20movie%202.png",
            width: 342,
            height: 700,
          },
          {
            title: "Prototype Flow",
            type: "Figma",
            src: "/screnshoot%20project/uiux/first%20media%20prototype.png",
            width: 927,
            height: 766,
          },
        ],
      },
    ],
  },
];

export const projects = projectSections.flatMap((section) => section.projects);
