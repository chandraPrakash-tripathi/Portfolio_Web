export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  slug?: string;
  short_desc?: string;
  long_desc?: string;
  github_url?: string;
  live_url?: string;
  is_featured?: boolean;
}
export interface Skill {
  id: number;
  name: string;
  logo_url?: string;
  level?: string;
}
