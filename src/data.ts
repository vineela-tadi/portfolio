import { Skill, Project, TimelineMilestone, CertificationBadge } from './types';

export const CANDIDATE_NAME = "Tadi Veenila Satya";
export const CANDIDATE_LOCATION = "Visakhapatnam, India";
export const CANDIDATE_TITLE = "Aspiring Software Developer";

export const CAREER_OBJECTIVE = "Aspiring Software Developer and Computer Science student specializing in Artificial Intelligence with strong foundations in Python, Java, and Full Stack Web Development. Seeking an opportunity to apply technical and problem-solving skills in software development.";

export const SKILLS_DATA: Skill[] = [
  // Languages
  { name: 'Python', level: 85, category: 'Artificial Intelligence', icon: 'FileCode2' },
  { name: 'Java', level: 80, category: 'Artificial Intelligence', icon: 'Code2' },
  
  // Frontend
  { name: 'HTML', level: 90, category: 'Frontend', icon: 'Html5' },
  { name: 'CSS', level: 85, category: 'Frontend', icon: 'Palette' },
  { name: 'JavaScript', level: 85, category: 'Frontend', icon: 'FileJson' },

  // Backend
  { name: 'Flask', level: 78, category: 'Backend', icon: 'Flame' },
  { name: 'REST API Development', level: 80, category: 'Backend', icon: 'Network' },

  // Databases
  { name: 'MySQL', level: 82, category: 'Backend', icon: 'Database' },
  { name: 'SQL', level: 85, category: 'Backend', icon: 'DatabaseCircuit' },

  // Tools
  { name: 'Git', level: 80, category: 'Tools', icon: 'GitBranch' },
  { name: 'GitHub', level: 85, category: 'Tools', icon: 'Github' },
  { name: 'VS Code', level: 90, category: 'Tools', icon: 'Laptop' },

  // Concepts
  { name: 'Data Structures', level: 80, category: 'Frontend', icon: 'Binary' }, // categorization can fall under these default types
  { name: 'Debugging', level: 85, category: 'Tools', icon: 'Bug' },
  { name: 'Problem Solving', level: 88, category: 'Artificial Intelligence', icon: 'Puzzle' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'building-plan',
    title: 'Apna Ghar (Building Plan Generator)',
    description: 'An AI-powered virtual architect and building plan generator that outputs customized structural house designs, conceptual interior and exterior renderings, layout plans, and Vastu compliance guidance.',
    problemSolved: 'Simplifies domestic construction drafting by supplying customized, professional architectural schematics and layout solutions instantly with AI.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel AI', 'Node.js'],
    keyFeatures: [
      'Generative Architect: Generates customizable building conceptual structures from user prompts.',
      'Vastu-Compliant Analytics: Ensures fundamental structures align with historical design guidelines.',
      'Instant Calculations: Supplies convenient estimators to calculate draft materials and overall construction cost targets.'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Building-Plan',
    liveUrl: 'https://building-plan-nine.vercel.app',
    category: 'AI',
    highlighted: true
  },
  {
    id: 'ecommerce-zentrova',
    title: 'Zentrova - E-Commerce Marketplace',
    description: 'A modern, premium digital marketplace showcasing high-performance electronic hardware, apparel, beauty catalogs, and accessories built on responsive frameworks.',
    problemSolved: 'Resolves cart-friction in web-based commerce setups by optimizing items filtering, responsive searching, catalog adjustments, and payment flows.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'State Management'],
    keyFeatures: [
      'Interactive Shopping Cart: Complete reactive add-to-cart operations with quantity edits.',
      'Smart Categories: Search query filters allowing multi-item discovery seamlessly across devices.',
      'Polished Layout Dynamics: Smooth UI sliding, hover depth, and elegant transitions.'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Ecommerce-Zentrova',
    liveUrl: 'https://ecommerce-zentrova.vercel.app',
    category: 'Full Stack',
    highlighted: true
  },
  {
    id: 'beautyconnect---project1',
    title: 'BeautyConnect - Salon Scheduler',
    description: 'A responsive beauty scheduler website detailing dynamic treatment menus, beautiful portfolio layouts, service tiers, and interactive reservation systems.',
    problemSolved: 'Connects boutique salons with active clients through reliable appointment reserving panels and service transparency grids.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Modern Design'],
    keyFeatures: [
      'Appointment Reserving: User-friendly calendar panel for selecting and securing stylist sessions.',
      'Treatment Grid and Pricing: High-contrast tables showing clear comparison options.',
      'Professional Portfolio Gallery: Eye-catching photography carousels showcasing beauty creations.'
    ],
    githubUrl: 'https://github.com/vineela-tadi/BeautyConnect---project1',
    liveUrl: 'https://beauty-connect-project1.vercel.app',
    category: 'Frontend',
    highlighted: true
  },
  {
    id: 'green-plantation-to-reduce-pollution',
    title: 'Green Plantation - Eco Tracker',
    description: 'An interactive environmental monitoring hub designed to map botanical distribution registries and coordinate tree plantation strategies.',
    problemSolved: 'Enables organized environmental volunteer networks by providing detailed logs for classifying botanical categories and recording local plantings.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQLite'],
    keyFeatures: [
      'Botanical Directory: Organizes classifications and local climate guidelines.',
      'Citizen Portal: Allows community members to record their plantation achievements in dynamic reports.'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Green-Plantation-to-reduce-pollution',
    liveUrl: 'https://github.com/vineela-tadi/Green-Plantation-to-reduce-pollution',
    category: 'Backend',
    highlighted: false
  },
  {
    id: 'todo-list',
    title: 'Smart Task Planner',
    description: 'A lightweight productivity manager featuring clean state controls, prioritization flags, and secure client-side storage configurations.',
    problemSolved: 'Assists student teams in managing and cataloging programming sub-tasks without setup friction.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    keyFeatures: [
      'Local Storage Syncing: Remembers item states and progress markers across offline browser refreshes.',
      'Tick Checklist Operations: Seamless transition animations on completing or editing entries.'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Todo-list',
    liveUrl: 'https://github.com/vineela-tadi/Todo-list',
    category: 'Frontend',
    highlighted: false
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    role: 'AI & Machine Learning Intern',
    organization: 'Data Valley India Pvt Ltd',
    period: 'Internship Duration',
    location: 'India',
    description: [
      'Analyzed datasets using Python algorithms to extract patterns.',
      'Developed robust backend scripts for automation workflows.',
      'Performed intensive data preprocessing and custom feature engineering.',
      'Collaborated actively with cross-functional technical teams for systems integration.'
    ],
    skillsApplied: ['Python', 'Data Analytics', 'Pandas', 'Script Automation', 'Preprocessing', 'Feature Engineering']
  }
];

export const EDUCATION_DATA = [
  {
    degree: "B.Tech – CSE (Artificial Intelligence)",
    institution: "Vignan's Institute of Engineering for Women, Visakhapatnam, India",
    gpa: "CGPA: 8.36",
    period: "2023 – 2027"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "G.B.R Junior College, Anaparthi, India",
    gpa: "92.30%",
    period: "2021 – 2023"
  },
  {
    degree: "Secondary Education",
    institution: "Paleti English Medium High School, Bhimadole, India",
    gpa: "99.00%",
    period: "2020 – 2021"
  }
];

export const CERTIFICATIONS_DATA: CertificationBadge[] = [
  {
    title: 'Full Stack Development',
    issuer: 'Infosys Springboard',
    date: 'Verified Certificate',
    badgeType: 'Specialization',
    credentialUrl: 'https://springboard.infosys.com',
    skillsVerified: ['HTML', 'CSS', 'JavaScript', 'Full Stack Development']
  },
  {
    title: 'Python Data Visualization',
    issuer: 'Coursera',
    date: 'Certified',
    badgeType: 'Course',
    credentialUrl: 'https://www.coursera.org',
    skillsVerified: ['Python', 'Matplotlib / Seaborn', 'Data Plotting']
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025 Credential',
    badgeType: 'Specialization',
    credentialUrl: 'https://education.oracle.com',
    skillsVerified: ['AI Core Foundations', 'Oracle Cloud Infrastructure', 'Machine Learning Basics']
  },
  {
    title: 'DBMS',
    issuer: 'NPTEL',
    date: 'National Certification',
    badgeType: 'Course',
    credentialUrl: 'https://nptel.ac.in',
    skillsVerified: ['Database Management Systems', 'Relational Models', 'SQL Writing']
  },
  {
    title: 'Software Engineering',
    issuer: 'NPTEL',
    date: 'National Certification',
    badgeType: 'Course',
    credentialUrl: 'https://nptel.ac.in',
    skillsVerified: ['Software Development Life Cycle', 'Design Patterns', 'Project Methodologies']
  }
];

export const ACHIEVEMENTS_DATA = [
  "Participated in Research Conclave presenting academic concepts and reviews",
  "Participated in hackathons and technical competitions applying high-level code solutions",
  "Active core member of the Coding Ninjas Club"
];
