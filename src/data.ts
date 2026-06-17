import { Skill, Project, TimelineMilestone, CertificationBadge } from './types';

export const CANDIDATE_NAME = "Tadi Veenila Satya";
export const CANDIDATE_LOCATION = "Visakhapatnam, India";
export const CANDIDATE_TITLE = "Aspiring Software Developer";

export const CAREER_OBJECTIVE = "Aspiring Software Developer and Computer Science student specializing in Artificial Intelligence, with strong foundations in Python, Java, Data Structures, and Full Stack Web Development. Passionate about building efficient software solutions and applying technical, analytical, and problem-solving skills to contribute to innovative projects and organizational growth.";

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
    title: 'Apna Ghar - Building Plan Generator',
    description: 'AI-powered house planning platform that generates layouts, designs, and construction guidance.',
    problemSolved: '',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel AI', 'Node.js'],
    keyFeatures: [
      'AI House Plans',
      'Cost Estimation',
      'Vastu Guidance'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Building-Plan',
    liveUrl: 'https://building-plan-nine.vercel.app',
    category: 'AI',
    highlighted: true
  },
  {
    id: 'ecommerce-zentrova',
    title: 'Giftify AI - Smart Gift Marketplace',
    description: 'AI-powered gifting platform that recommends perfect gifts based on occasion, relationship, and budget.',
    problemSolved: '',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'State Management'],
    keyFeatures: [
      'AI Gift Finder',
      'Occasion-Based Shopping',
      'Gift Reminders'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Ecommerce-Zentrova',
    liveUrl: 'https://ecommerce-zentrova.vercel.app',
    category: 'Full Stack',
    highlighted: true
  },
  {
    id: 'beautyconnect---project1',
    title: 'BeautyConnect - Salon Scheduler',
    description: 'Responsive salon booking platform with appointment scheduling, service catalogs, and modern reservation management.',
    problemSolved: '',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Modern Design'],
    keyFeatures: [
      'Appointment Booking',
      'Service Catalog',
      'Portfolio Gallery'
    ],
    githubUrl: 'https://github.com/vineela-tadi/BeautyConnect---project1',
    liveUrl: 'https://beauty-connect-project1.vercel.app',
    category: 'Frontend',
    highlighted: true
  },
  {
    id: 'green-plantation-to-reduce-pollution',
    title: 'Green Plantation - Eco Tracker',
    description: 'Environmental platform for tracking tree plantations and volunteer activities.',
    problemSolved: '',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQLite'],
    keyFeatures: [
      'Plantation Tracking',
      'GPS Logging',
      'Volunteer Portal'
    ],
    githubUrl: 'https://github.com/vineela-tadi/Green-Plantation-to-reduce-pollution',
    liveUrl: 'https://github.com/vineela-tadi/Green-Plantation-to-reduce-pollution',
    category: 'Backend',
    highlighted: false
  },
  {
    id: 'todo-list',
    title: 'Smart Task Planner',
    description: 'Simple productivity application for organizing tasks and tracking progress.',
    problemSolved: '',
    techStack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    keyFeatures: [
      'Task Management',
      'Local Storage',
      'Progress Tracking'
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
