export type ProjectLink = {
  href: string;
  label: string;
  note?: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: ProjectLink;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const PROFILE = {
  name: "Alok Sharma",
  title: "Senior Software Engineer · GRC Platform Engineer",
  tagline:
    "6+ years building enterprise software and multi-tenant SaaS platforms — turning GDPR, ISO 27001, SOC 2 and DPDP requirements into software that ships.",
  badges: ["DPDP", "GDPR", "ISO 27001", "SOC 2"],
};

export const CONTACT = {
  email: "thakuralok99@gmail.com",
  github: "https://github.com/At0kSharma",
  githubLabel: "github.com/At0kSharma",
  phone: "+91-9288389180",
  phoneHref: "tel:+919288389180",
  // Currently unused: the download buttons were removed until the PDF
  // exists. To restore them, drop Alok_Sharma_Software_Engineer.pdf into
  // public/ and re-add the button in Hero.astro and Contact.astro.
  resumeFile: "/Alok_Sharma_Software_Engineer.pdf",
};

export const PROJECTS: Project[] = [
  {
    name: "AI Policy Builder",
    tagline: "AI-generated compliance policies, end to end",
    description:
      "Multi-tenant SaaS that generates compliance policies with AI, then maps them to framework controls, runs gap analysis, and produces evidence requirements. Async generation pipeline with job polling, per-org rate limiting and token budgets, BYOK AI providers, and PDF/Markdown export.",
    stack: ["FastAPI", "React", "TypeScript", "Celery", "MySQL", "Redis", "Docker", "LiteLLM"],
    link: {
      href: "https://aipolicy.at0k.com",
      label: "aipolicy.at0k.com",
      note: "Live deployment — private demo, credentials on request",
    },
  },
  {
    name: "PurpleCop",
    tagline: "Multi-tenant enterprise GRC & cybersecurity platform",
    description:
      "Technical lead and core developer on a 10-module GRC platform. Shipped policy automation, risk register, TPRM, DPDP compliance, LMS, trust center, document management, compliance scoring and audit management — plus continuous compliance monitoring that pulls configuration from AWS, GCP, Salesforce, Zoho and HRMS platforms to evaluate controls.",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    name: "at0k Editor + Collab",
    tagline: "Rich-text editing infrastructure with self-hosted collaboration",
    description:
      "An editor core and pro extension set, paired with a real-time collaboration server teams host themselves — no vendor lock-in. Backed by a licensing service issuing Ed25519-signed license JWTs with heartbeat reporting and revocation.",
    stack: ["TypeScript", "Tiptap", "Hocuspocus", "FastAPI", "PostgreSQL"],
  },
  {
    name: "Commercial LMS Platforms",
    tagline: "Course sales and student learning, in production",
    description:
      "Customer-facing learning platforms covering course management, student enrollment, authentication, payment workflows, progress tracking, assessments and certification.",
    stack: ["Laravel", "React", "MySQL", "Payments"],
  },
];

export const EXPERIENCE: Role[] = [
  {
    company: "Purplecop Security Pvt. Ltd",
    title: "Senior Software Developer",
    period: "Apr 2025 – Jul 2026",
    bullets: [
      "Led technical design and development of PurpleCop across architecture and multiple GRC modules.",
      "Implemented GDPR, ISO 27001 and SOC 2 requirements across product workflows, data models, controls and audit trails.",
      "Bridged product, compliance and engineering — translating regulation into shippable technical specifications.",
      "Oversaw CI/CD pipelines, Docker-based deployments and production infrastructure hardening.",
    ],
  },
  {
    company: "Froximo Technology Pvt. Ltd",
    title: "Senior Web Developer",
    period: "Feb 2023 – Mar 2025",
    bullets: [
      "Delivered multiple web platforms end to end — frontend, backend, APIs and databases.",
      "Built commercial LMS platforms for course sales and student learning.",
      "Built a Flutter lead-generation app with OTP login and client website integration.",
    ],
  },
  {
    company: "Softechpark Pvt. Ltd",
    title: "Junior Web Developer",
    period: "Nov 2020 – Oct 2022",
    bullets: [
      "Delivered frontend and backend features on client applications using React.js, Laravel and WordPress.",
      "Built responsive interfaces and improved application performance and usability.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech in Information Technology",
  institution: "Sona College of Technology, Anna University",
  year: "2019",
};

export const SKILLS: SkillGroup[] = [
  { label: "Backend", items: ["Python", "FastAPI", "Laravel", "Node.js", "Flask", "PHP"] },
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "ChakraUI"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"] },
  { label: "DevOps", items: ["Docker", "Nginx", "Ubuntu Server", "SSL/TLS", "CI/CD", "Proxmox"] },
  { label: "Compliance", items: ["GDPR", "ISO 27001", "SOC 2", "DPDP Act 2023", "NIST CSF"] },
  {
    label: "Domain Expertise",
    items: ["RBAC & Access Control", "Consent Management", "DSR Workflows", "TPRM", "Multi-Tenant SaaS", "Audit Trails"],
  },
];
