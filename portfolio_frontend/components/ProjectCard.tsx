import type { Project } from '../lib/types';
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  Star,
  Brain,
  Database,
  Smartphone,
  BarChart3,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.split(',').map((tech) => tech.trim());

  // Pick an icon based on project
  const getProjectIcon = () => {
    const title = project.title.toLowerCase();
    const techs = project.technologies.toLowerCase();

    if (
      title.includes('gesture') ||
      title.includes('recognition') ||
      techs.includes('tensorflow') ||
      techs.includes('neural')
    ) {
      return Brain;
    } else if (title.includes('smart') || title.includes('iot') || techs.includes('arduino')) {
      return Smartphone;
    } else if (title.includes('data') || title.includes('etl') || techs.includes('pipeline')) {
      return Database;
    } else if (title.includes('analytics') || title.includes('dashboard') || techs.includes('streamlit')) {
      return BarChart3;
    }
    return Code;
  };

  const ProjectIcon = getProjectIcon();

  // Gradient selection
  const getProjectGradient = () => {
    const title = project.title.toLowerCase();
    if (title.includes('ai') || title.includes('ml') || title.includes('gesture')) {
      return 'from-purple-600 to-pink-600';
    } else if (title.includes('data') || title.includes('analytics')) {
      return 'from-blue-600 to-cyan-600';
    } else if (title.includes('smart') || title.includes('iot')) {
      return 'from-green-600 to-teal-600';
    }
    return 'from-indigo-600 to-purple-600';
  };

  return (
    <div
      className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700
        hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden ${
          project.is_featured ? 'lg:flex lg:items-center lg:gap-8' : ''
        }`}
    >
      {/* Project Image/Icon */}
      <div className={`${project.is_featured ? 'lg:w-1/3' : ''} relative`}>
        <div
          className={`h-48 bg-gradient-to-br ${getProjectGradient()} flex items-center justify-center relative overflow-hidden`}
        >
          {/* Background Pattern via CSS class */}
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

          {/* Project Icon */}
          <div className="relative z-10">
            <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <ProjectIcon className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Featured Badge */}
          {project.is_featured && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold">
                <Star className="h-4 w-4 mr-1" />
                Featured
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className={`p-8 ${project.is_featured ? 'lg:w-2/3' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className={`font-bold text-gray-900 dark:text-white group-hover:text-transparent 
                group-hover:bg-clip-text group-hover:bg-gradient-to-r ${getProjectGradient().replace('from-', 'group-hover:from-').replace('to-', 'group-hover:to-')} 
                transition-all duration-300 ${project.is_featured ? 'text-2xl mb-2' : 'text-xl mb-3'}`}
            >
              {project.title}
            </h3>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(project.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 ml-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 
                  transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/btn"
                title="View Source Code"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white" />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gradient-to-r ${getProjectGradient()} rounded-xl hover:shadow-lg 
                  transition-all duration-300 transform hover:scale-110 group/btn`}
                title="View Live Demo"
              >
                <ExternalLink className="h-5 w-5 text-white group-hover/btn:scale-110 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ${
            project.is_featured ? 'text-lg' : 'text-base'
          }`}
        >
          {project.description}
        </p>

        {/* Key Highlights (Featured Only) */}
        {project.is_featured && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Key Achievements
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.title.includes('Gesture') && (
                <>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    98% Recognition Accuracy
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Real-time Processing
                  </div>
                </>
              )}
              {project.title.includes('AI Meal') && (
                <>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Llama-3 70B Integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Personalized Nutrition
                  </div>
                </>
              )}
              {project.title.includes('Sports') && (
                <>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Real-time Analytics
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Dynamic Visualizations
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => {
              const getTechColor = (technology: string) => {
                const lowerTech = technology.toLowerCase();
                if (lowerTech.includes('python') || lowerTech.includes('tensorflow') || lowerTech.includes('keras')) {
                  return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700';
                } else if (lowerTech.includes('react') || lowerTech.includes('next') || lowerTech.includes('javascript')) {
                  return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700';
                } else if (lowerTech.includes('sql') || lowerTech.includes('database') || lowerTech.includes('mongodb')) {
                  return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700';
                } else if (lowerTech.includes('arduino') || lowerTech.includes('iot') || lowerTech.includes('esp32')) {
                  return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700';
                }
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700';
              };

              return (
                <span
                  key={techIndex}
                  className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-200 
                    hover:scale-105 hover:shadow-sm ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
