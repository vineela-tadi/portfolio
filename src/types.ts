export interface Skill {
  name: string;
  level: number; // 0-100%
  category: 'Frontend' | 'Backend' | 'Artificial Intelligence' | 'Tools';
  icon: string; // Lucide icon string
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  techStack: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'AI' | 'Full Stack' | 'Data Science' | 'Frontend' | 'Backend';
  highlighted: boolean;
}

export interface TimelineMilestone {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  skillsApplied: string[];
}

export interface CertificationBadge {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeType: 'Specialization' | 'Course' | 'Hackathon';
  skillsVerified: string[];
}

export interface LearningItem {
  topic: string;
  level: 'Novice' | 'Intermediate' | 'Deep Dive';
  progress: number;
  learningResource: string;
}
