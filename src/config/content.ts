export type ProjectLink = {
  href: string;
  label: string;
  note?: string;
};

export type DemoAccess = {
  email: string;
  password: string;
};

export type Count = {
  /** The number itself. Only ever something that exists in the system. */
  value: string;
  label: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  /**
   * Presence of a link is what makes a project "live" — the status dot in the
   * register and the live tally in the Work band are both derived from it,
   * so there is no separate status field to keep in sync with reality.
   */
  link?: ProjectLink;
  /** Evidence of scale. Left empty rather than padded with soft numbers. */
  counts?: Count[];
  /**
   * Shown in place of a demo grant when there is nothing to sign into.
   * One entry per rendered line - kept as an array rather than embedded
   * newlines so the template needs no string surgery.
   */
  noAccess?: string[];
  /**
   * Published sign-in for a public demo. Deliberately plain text: these are
   * seeded sample tenants with no real data, and a reviewer who has to email
   * for access simply will not. Never point this at an environment holding
   * anything real.
   */
  demo?: DemoAccess;
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
  /** The opening line. A claim about the work, not a job title. */
  thesis:
    "I turn regulation into software that ships — and then run it in production.",
  whereabouts: [
    "Bengaluru, India",
    "Five years, three companies",
    "Open to senior full stack & platform roles",
  ],
  /** Also the page's meta description, so the two can never drift apart. */
  tagline:
    "5+ years building enterprise software and multi-tenant SaaS platforms — turning GDPR, ISO 27001, SOC 2 and DPDP requirements into software that ships.",
  badges: ["DPDP", "GDPR", "ISO 27001", "SOC 2"],
};

/**
 * The masthead strip. Every figure here is checkable against something further
 * down the page rather than asserted on its own.
 */
export const HEADLINE_COUNTS: Count[] = [
  { value: "5", label: "years shipping" },
  { value: "2", label: "systems live in production" },
  { value: "10", label: "modules on the GRC platform I led" },
  { value: "7", label: "jurisdictions schema-drafted" },
];

export const CONTACT = {
  email: "thakuralok99@gmail.com",
  github: "https://github.com/At0kSharma",
  githubLabel: "github.com/At0kSharma",
  phone: "+91-9288389180",
  phoneHref: "tel:+919288389180",
  // Currently unused: the download buttons were removed until the PDF
  // exists. To restore them, drop Alok_Sharma_Software_Engineer.pdf into
  // public/ and re-add the button in the rail and Contact.astro.
  resumeFile: "/Alok_Sharma_Software_Engineer.pdf",
};

export const PROJECTS: Project[] = [
  {
    name: "at0k Privacy",
    tagline: "Multi-jurisdiction privacy compliance, DPDP live",
    description:
      "Privacy operations platform built around India's DPDP Act, with field schemas drafted for GDPR, CCPA, PIPEDA, POPIA, PDPA, PDPL and DORA — a law-config engine activates the same modules per jurisdiction. Every consent record pins an immutable SHA-256 snapshot of the form that captured it, so the append-only audit trail can replay any agreement exactly as it was given: purposes, notice text and all. Covers data inventory and ROPA, DPIA, vendor and breach management, and data subject requests with evidence attachments. Ships an embeddable JavaScript consent SDK — bcrypt-hashed API keys, origin allow-listing, anonymous-visitor capture with post-login identity merge, Global Privacy Control — alongside a public DSR intake, email OTP sign-in and per-tenant isolation throughout.",
    stack: [
      "FastAPI",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL 16",
      "SQLAlchemy 2",
      "Celery",
      "Redis",
      "Docker",
    ],
    counts: [
      { value: "25", label: "backend modules" },
      { value: "7", label: "jurisdictions schema-drafted" },
      { value: "~900", label: "passing tests" },
    ],
    link: {
      href: "https://privacy.at0k.com",
      label: "privacy.at0k.com",
    },
    // The same pair as AI Policy Builder below, on purpose: one credential
    // opens both systems, so a reviewer never has to work out which set goes
    // where. Seeded on the demo tenant by app/seeds/demo_data.py.
    demo: {
      email: "demouser@at0k.com",
      password: "demo@r00t",
    },
  },
  {
    name: "AI Policy Builder",
    tagline: "AI-generated compliance policies, end to end",
    description:
      "Multi-tenant SaaS that generates compliance policies with AI, then maps them to framework controls, runs gap analysis, and produces evidence requirements. Async generation pipeline with job polling, per-plan token budgets, per-org rate limiting, bring-your-own-key providers through LiteLLM with encrypted key storage, and PDF/Markdown export. Policies are drafted in a real-time collaborative editor — a Tiptap core over a Hocuspocus server teams host themselves, gated by a separately deployed licensing service issuing Ed25519-signed license JWTs with heartbeat reporting and revocation. Auth on AWS Cognito, Stripe subscription billing, self-hosted on GCP behind Nginx with Let's Encrypt and Cloudflare.",
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "Celery",
      "MySQL",
      "Redis",
      "Cognito",
      "LiteLLM",
      "Tiptap",
      "Hocuspocus",
      "Stripe",
    ],
    counts: [
      { value: "4", label: "frameworks" },
      { value: "212", label: "controls catalogued" },
      { value: "24", label: "canonical policies" },
    ],
    link: {
      href: "https://aipolicy.at0k.com",
      label: "aipolicy.at0k.com",
    },
    demo: {
      email: "demouser@at0k.com",
      password: "demo@r00t",
    },
  },
  {
    name: "PurpleCop",
    tagline: "Multi-tenant enterprise GRC & cybersecurity platform",
    description:
      "Technical lead and core developer on a 10-module GRC platform. Shipped policy automation, risk register, TPRM, DPDP compliance, LMS, trust center, document management, compliance scoring and audit management — plus continuous compliance monitoring that pulls configuration from AWS, GCP, Salesforce, Zoho and HRMS platforms to evaluate controls.",
    stack: ["Laravel", "React", "PostgreSQL", "Docker", "CI/CD"],
    counts: [
      { value: "10", label: "modules" },
      { value: "5", label: "cloud integrations" },
    ],
    // noAccess: ["Commercial product.", "Walkthrough on request."],
  },
  {
    name: "Commercial LMS Platforms",
    tagline: "Course sales and student learning, in production",
    description:
      "Customer-facing learning platforms covering course management, student enrollment, authentication, payment workflows, progress tracking, assessments and certification.",
    stack: ["Laravel", "React", "MySQL", "Payments"],
    // noAccess: ["Client products.", "Walkthrough on request."],
  },
];

export const EXPERIENCE: Role[] = [
  {
    company: "Purplecop Security Pvt. Ltd",
    title: "Senior Software Engineer",
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

/**
 * Judgment rather than tooling — the things that survive a change of stack.
 * Frameworks and domain expertise live here rather than in SKILLS so that
 * nothing is claimed twice on the same page.
 */
export const DOMAINS: SkillGroup[] = [
  {
    label: "GRC & Compliance",
    items: [
      "Multi-tenant enterprise GRC",
      "Cybersecurity platforms",
      "Continuous compliance monitoring",
      "Compliance scoring",
    ],
  },
  {
    label: "Compliance frameworks",
    items: ["GDPR", "ISO 27001", "SOC 2", "DPDP Act 2023", "HIPAA", "NIST CSF"],
  },
  {
    label: "Product domains",
    items: [
      "Policy automation",
      "Consent management",
      "DSR workflows",
      "TPRM",
      "Risk register",
      "Audit management",
      "Trust center",
      "LMS",
      "Compliance gap analysis",
    ],
  },
  {
    label: "AI & automation",
    items: [
      "Generative policy drafting",
      "AI-assisted compliance",
      "Automated control mapping",
      "LLM integration",
      "Multi-provider orchestration",
    ],
  },
  {
    label: "Architecture patterns",
    items: [
      "Multi-tenant SaaS",
      "RBAC & access control",
      "Append-only audit trails",
      "Event-driven systems",
      "Real-time collaboration",
      "Docker-based deployments",
    ],
  },
  {
    label: "Regulatory translation",
    items: [
      "Requirements → technical specifications",
      "Framework mapping",
      "Control implementation",
      "Evidence-based compliance tracking",
    ],
  },
];

/** Tools only. Everything a hiring manager could infer from a repo. */
export const SKILLS: SkillGroup[] = [
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Laravel", "Node.js", "Flask", "PHP"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "ChakraUI",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Nginx", "Ubuntu Server", "SSL/TLS", "CI/CD", "Proxmox"],
  },
];
