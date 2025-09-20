import type { Project } from '../lib/types';
import { Calendar, Code, ExternalLink, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const technologies = project.technologies.split(',').map(tech => tech.trim());
  
  return (
    <div className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg ...`}>
      {/* ... (rest of the ProjectCard JSX code) ... */}
    </div>
  );
};

export default ProjectCard;