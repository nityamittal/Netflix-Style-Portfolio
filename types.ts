export interface Education {
  school: string;
  degree: string;
  duration: string;
  gpa?: string;
  location?: string;
  courses?: string[];
  scores?: string[];
  activities?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  technologies?: string[];
  description: string[];
}

export interface Project {
  title: string;
  duration: string;
  techStack: string[];
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  year?: string;
  description?: string;
  link?: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description?: string[];
}
