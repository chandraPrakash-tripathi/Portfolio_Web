import axios from 'axios';
import { ContactForm } from './types';

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


export const submitContactForm = async (data: ContactForm): Promise<boolean> => {
  console.log("Submitting form data:", data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate a success response (in a real app, this would be a fetch/axios call)
  // For demonstration, we'll assume it always succeeds.
  // To test error state, you can return false.
  return true; 
};