'use client';
import { useIntersectionObserver } from '../lib/hooks';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';
import type { Project } from '../lib/types';

const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Mock data - replace with actual API call
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Django...',
      technologies: 'Next.js, Django, PostgreSQL, Redis, Stripe',
      github_url: 'https://github.com/example/ecommerce',
      live_url: 'https://demo-ecommerce.vercel.app',
      created_at: '2024-01-15',
      is_featured: true,
    },
    // ... (other project objects) ...
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
       {/* ... (rest of the ProjectsSection JSX code) ... */}
    </section>
  );
};

export default ProjectsSection;