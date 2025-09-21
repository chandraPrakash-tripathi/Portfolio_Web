// Defines shared TypeScript interfaces used across components.

export interface Project {
  id: number;
  title: string;
  impact: string;
  technologies: string[];
  github_url: string;
  live_url?: string;
  is_featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}