export const profile = {
  name: 'Trideep Ghosh',
  title: 'Senior Full-Stack Developer',
  location: 'Bengaluru, India',
  email: 'trideepghosh83@gmail.com',
  phone: '+91-7488134557',
  leetcodeUsername: '3deep_0019',
  leetcodeUrl: 'https://leetcode.com/u/3deep_0019/',
  githubUrl: 'https://github.com/3deep0019',
  linkedinUrl: 'https://www.linkedin.com/in/trideep-ghosh-95000613a/',
  resumeUrl: './assets/Trideep_Ghosh_Resume.pdf',
  resumeFileName: 'Trideep_Ghosh_Resume.pdf',
  status: 'ACTIVELY BUILDING — OPEN TO WORK',
  version: 'v2.5.0_STABLE',
  yearsExperience: '05+',
}

export const hero = {
  headline: ['BUILDING', 'SCALABLE', 'ENTERPRISE', 'PLATFORMS.'],
  accentWords: [1, 2],
  description:
    '5+ years building SaaS platforms, enterprise applications, and workflow automation systems. Specialized in Node.js, Vue.js, event-driven architectures, and Identity & Security (SSO, Okta, OAuth 2.0). The infrastructure depth is what makes products reliable in production.',
  currentBuild: {
    label: '// CURRENT_BUILD: Workflow Automation Platform',
    detail: '// Node.js, Vue.js, GitLab API — repository-driven CI/CD orchestration',
  },
  benchmarks: [
    { label: 'AUTH SUCCESS RATE', value: '99.9%', suffix: 'UPTIME' },
    { label: 'SCALE THRESHOLD', value: '1K+', suffix: 'ENTERPRISE USERS' },
  ],
  capabilities: [
    'Enterprise SSO & Identity',
    'Workflow Automation',
    'Event-Driven Microservices',
  ],
  featured: {
    title: 'Enterprise SSO Ecosystem',
    subtitle: 'Okta + SAML 2.0 + Passport.js — 40% fewer support tickets',
    tags: ['OKTA', 'SAML', 'NODE.JS', 'RBAC'],
    metrics: [
      { label: 'TICKET_REDUCTION', value: '40%' },
      { label: 'USERS_ONBOARDED', value: '1K+' },
      { label: 'AUTH_UPTIME', value: '99.9%' },
    ],
  },
}

export const techStack = {
  categories: [
    {
      icon: '⚙',
      title: 'FRONTEND & UI',
      subtitle: 'COMPONENT ARCHITECTURE & INTERACTIVE SYSTEMS',
      badge: 'CORE_SPECIALIZATION',
      items: [
        { name: 'Vue.js', context: 'primary framework at E9ine' },
        { name: 'React.js', context: 'component-based UIs' },
        { name: 'TypeScript', context: 'type-safe development' },
      ],
      integrations: ['HTML5', 'CSS3', 'Responsive UI'],
    },
    {
      icon: '⌨',
      title: 'BACKEND',
      subtitle: 'SCALABLE LOGIC LAYERS',
      items: [
        { name: 'Node.js', context: 'primary runtime since 2020' },
        { name: 'Express.js', context: 'REST API layer' },
        { name: 'FastAPI', context: 'Python microservices' },
        { name: 'WebSockets', context: 'real-time communication' },
      ],
    },
    {
      icon: '☷',
      title: 'DATABASES & INFRA',
      subtitle: 'DISTRIBUTED SYSTEMS & DEVOPS',
      status: 'PRODUCTION_READY 99.99%',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'GCP', 'Firebase', 'Docker', 'GitLab CI/CD'],
    },
  ],
  philosophy: [
    {
      title: 'ARCHITECTURE_PHILOSOPHY',
      text: 'I specialize in building production-grade full-stack systems where enterprise reliability meets modern developer experience. My stack bridges workflow automation, identity security, and scalable microservice architecture.',
    },
    {
      title: 'IDENTITY & SECURITY',
      text: 'Deep expertise in Okta, SAML 2.0, OAuth 2.0, and RBAC — designing SSO ecosystems that streamline authentication for thousands of enterprise users while reducing operational overhead.',
    },
    {
      title: 'AUTOMATION_STRATEGY',
      text: 'Building repository-driven workflow orchestration and self-service platforms integrated with Jira, GitLab, and business systems — turning days of manual setup into hours of automated provisioning.',
    },
  ],
}

export const experience = [
  {
    period: 'FEB 2023 — PRESENT',
    role: 'SENIOR FULL-STACK DEVELOPER',
    company: 'E9INE',
    focus: 'FULLSTACK // ENTERPRISE // AUTOMATION',
    projects: [
      {
        title: 'ENTERPRISE SSO ECOSYSTEM',
        description:
          'Designed enterprise-grade SSO with Okta, SAML 2.0, Passport.js, and RBAC. Streamlined authentication for 1,000+ users and reduced support tickets by 40%.',
        tags: ['OKTA', 'SAML 2.0', 'PASSPORT.JS', 'RBAC'],
      },
      {
        title: 'WORKFLOW AUTOMATION PLATFORM',
        description:
          'Repository-driven orchestration platform using Node.js, Vue.js, GitLab APIs, and MongoDB. Reduced project setup timelines from days to hours.',
        tags: ['NODE.JS', 'VUE.JS', 'GITLAB API', 'MONGODB'],
      },
    ],
    impact: {
      label: 'SYSTEM_IMPACT',
      metrics: [
        { label: 'SETUP TIME', before: 'Days', after: 'Hours' },
        { label: 'TEST COVERAGE', before: 'Baseline', after: '90%' },
      ],
      description:
        'Built self-service platforms with dynamic form builders integrated with Jira. Contributed to AI-assisted booking prediction and SaaS product roadmaps.',
      tags: ['VUE.JS', 'NODE.JS', 'JIRA API', 'CYPRESS'],
    },
  },
  {
    period: 'NOV 2020 — FEB 2023',
    role: 'SOFTWARE DEVELOPER',
    company: 'E9INE',
    focus: 'REALTIME // MESSAGING // MOBILE',
    metrics: [
      { label: 'AUTH DELIVERY', before: 'Baseline', after: '99.9%' },
      { label: 'DEFECT REDUCTION', before: 'Baseline', after: '-35%' },
    ],
    metricsDescription:
      'Engineered real-time communication infrastructure with WebSockets, Firebase, and Google Pub/Sub. Built event-driven messaging and SMS authentication for 50,000+ monthly verifications.',
    metricsTags: ['WEBSOCKETS', 'FIREBASE', 'PUB/SUB', 'TWILIO'],
    deliverables: {
      label: 'CORE_DELIVERABLES',
      text: 'Implemented Cypress-based test automation achieving 90% coverage. Developed Android and iOS WebView applications with focus on performance and user experience.',
      tags: ['CYPRESS', 'NODE.JS', 'WEBVIEW', 'REST API'],
    },
  },
]

export const projects = [
  {
    number: '01',
    badge: 'MISSION CRITICAL',
    title: 'Enterprise SSO Ecosystem',
    description:
      'Enterprise-grade SSO with Okta, SAML 2.0, Passport.js, and RBAC. Hard-gated authentication flows with role-based access — streamlining onboarding for 1,000+ enterprise users.',
    features: [
      { label: 'TICKET_REDUCTION', value: '40%', detail: 'Fewer auth-related support tickets.' },
      { label: 'SSO_ENGINE', value: 'Okta', detail: 'SAML 2.0 + OAuth 2.0 integration.' },
      { label: 'ACCESS_CONTROL', value: 'RBAC', detail: 'Role-based permission layers.' },
    ],
    tags: ['OKTA', 'SAML 2.0', 'PASSPORT.JS', 'NODE.JS'],
    links: { github: null, live: null },
  },
  {
    number: '02',
    badge: 'ARCHITECTURE',
    title: 'Workflow Automation Platform',
    description:
      'Repository-driven workflow orchestration using Node.js, Vue.js, and GitLab APIs. Automated project creation, CI/CD orchestration, and repository lifecycle management.',
    metrics: [
      { label: 'SETUP_TIME', value: 'Hours' },
      { label: 'PROVISIONING', value: '+50%' },
      { label: 'ENGINE', value: 'GitLab API' },
    ],
    tags: ['NODE.JS', 'VUE.JS', 'GITLAB', 'MONGODB'],
    links: { github: null, live: null },
  },
  {
    number: '03',
    badge: 'ENTERPRISE',
    title: 'Self-Service Form Builder',
    description:
      'Customizable drag-and-drop form builder integrated with Jira and business systems. Enabled self-service workflows and reduced manual effort by 60% across teams.',
    features: [
      { label: 'CORE_UI', value: 'Vue.js', detail: 'Dynamic form engine' },
      { label: 'INTEGRATION', value: 'Jira API', detail: 'Workflow automation' },
      { label: 'EFFORT_SAVED', value: '60%', detail: 'Manual process reduction' },
    ],
    tags: ['VUE.JS', 'NODE.JS', 'JIRA', 'WORKFLOW'],
    links: { github: null, live: null },
    note: 'Enterprise deliverable at E9ine. Architecture available for technical discussion.',
  },
]

export const education = {
  institution: 'Bankura Unnayani Institute of Engineering',
  degree: 'B.Tech in Computer Science & Engineering',
  details: 'CGPA: 7.4 • Graduated 2020',
  coursework: ['Data Structures', 'OS', 'DBMS', 'System Architecture'],
}

export const contact = {
  headline: 'OPEN TO THE RIGHT OPPORTUNITY.',
  description:
    'Looking for a senior full-stack engineering role at a product company where I can own the full stack — from frontend elegance to the infrastructure that runs it. Bangalore-based, open to hybrid.',
}

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/3deep0019' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/trideep-ghosh-95000613a/' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/3deep_0019/' },
  { name: 'Email', url: 'mailto:trideepghosh83@gmail.com' },
]
