// Defines shared TypeScript interfaces used across components.

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  github_url?: string;
  live_url?: string;
  technologies: string;
  created_at: string;
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