import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  github_url?: string;
  live_url?: string;
  technologies: string;
  created_at: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('/projects/');
  return response.data;
};

export const getSkills = async (): Promise<Skill[]> => {
  const response = await api.get('/skills/');
  return response.data;
};