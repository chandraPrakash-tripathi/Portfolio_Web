'use client';
import { useIntersectionObserver } from '../lib/hooks';
import ProjectCard from './ProjectCard';
import { Github, Brain, Database, ExternalLink, Calendar, Star } from 'lucide-react';
import type { Project } from '../lib/types';

const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Data Science and ML focused projects based on your resume
  const projects: Project[] = [
    {
      id: 1,
      title: 'Embedded Gesture Recognition System',
      description: 'Developed a high-precision gesture recognition system using Feed-Forward Neural Network and Google Mediapipe, achieving 98% accuracy. Integrated with smart glove prototype featuring flex sensors for real-time sign language recognition tailored for the deaf and mute community.',
      technologies: 'Python, TensorFlow, Mediapipe, React.js, Redux, Firebase, Raspberry Pi, Neural Networks',
      github_url: 'https://github.com/chandraPrakash-tripathi/gesture-recognition',
      live_url: 'https://gesture-recognition-demo.vercel.app',
      created_at: '2024-05-15',
      is_featured: true,
    },
    {
      id: 2,
      title: 'AI Meal Planner',
      description: 'Deployed an AI-powered meal planner application utilizing the Llama-3 70B Language Model to generate personalized meal plans. Implemented accurate alignment of ingredients with dietary restrictions and nutritional targets with an intuitive Streamlit interface.',
      technologies: 'Python, Llama-3 70B, Streamlit, API Integration, NLP, Machine Learning',
      github_url: 'https://github.com/chandraPrakash-tripathi/ai-meal-planner',
      live_url: 'https://ai-meal-planner-demo.streamlit.app',
      created_at: '2023-09-15',
      is_featured: true,
    },
    {
      id: 3,
      title: 'Smart Sports Analytics Platform',
      description: 'Developed a modern web application for NUAVA SPORTS using Next.js 15, Tailwind CSS, and Framer Motion with Flask backend. Integrated real-time sports data analytics, dynamic visualizations, and MySQL database for comprehensive sports performance tracking.',
      technologies: 'Next.js 15, Flask, MySQL, Tailwind CSS, Framer Motion, Data Analytics, REST APIs',
      github_url: 'https://github.com/chandraPrakash-tripathi/sports-analytics',
      live_url: 'https://nuava-sports-platform.vercel.app',
      created_at: '2024-11-01',
      is_featured: true,
    },
    {
      id: 4,
      title: 'IoT Smart Things Device Kit',
      description: 'Successfully integrated Smart Things Kit with Arduino achieving optimal hardware compatibility. Configured ESP32 modules for robust Wi-Fi connections and engineered seamless operation of up to 10 connected devices simultaneously with instantaneous response times.',
      technologies: 'Arduino, ESP32, IoT, Wi-Fi Protocols, C++, Smart Home Integration, Hardware Programming',
      github_url: 'https://github.com/chandraPrakash-tripathi/smart-things-kit',
      live_url: undefined,
      created_at: '2023-08-15',
      is_featured: false,
    },
    {
      id: 5,
      title: 'Data Pipeline ETL System',
      description: 'Built a robust ETL system for processing large-scale datasets with automated data validation, transformation, and loading capabilities. Implemented real-time data processing with error handling and monitoring dashboards for production environments.',
      technologies: 'Python, Apache Airflow, PostgreSQL, Docker, Pandas, Data Validation, ETL Pipelines',
      github_url: 'https://github.com/chandraPrakash-tripathi/data-pipeline-etl',
      live_url: undefined,
      created_at: '2024-08-20',
      is_featured: false,
    },
    {
      id: 6,
      title: 'Machine Learning Model Deployment',
      description: 'Developed and deployed multiple ML models including predictive analytics for business metrics, customer segmentation, and recommendation systems. Implemented model versioning, A/B testing, and performance monitoring in production.',
      technologies: 'Python, scikit-learn, MLflow, FastAPI, Docker, Kubernetes, Model Deployment, MLOps',
      github_url: 'https://github.com/chandraPrakash-tripathi/ml-model-deployment',
      live_url: 'https://ml-models-api.herokuapp.com',
      created_at: '2024-07-10',
      is_featured: false,
    }
  ];

  const featuredProjects = projects.filter(project => project.is_featured);
  const otherProjects = projects.filter(project => !project.is_featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Showcasing my expertise in Data Science, Machine Learning, and AI through innovative projects that solve real-world problems
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                <Star className="h-5 w-5 mr-2" />
                <span className="font-bold">Featured Projects</span>
              </div>
            </div>
            
            <div className="grid gap-8 mb-16">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg">
                <Database className="h-5 w-5 mr-2" />
                <span className="font-bold">Additional Projects</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + featuredProjects.length) * 150}ms` }}
                >
                  <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700
                    hover:border-blue-300 dark:hover:border-blue-600 h-full">
                    
                    <div className="p-6 h-full flex flex-col">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3">
                            <Brain className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 
                              dark:group-hover:text-blue-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(project.created_at).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short' 
                              })}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 
                                transition-all duration-300 transform hover:scale-110"
                            >
                              <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 
                                transition-all duration-300 transform hover:scale-110"
                            >
                              <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description.length > 150 
                          ? `${project.description.substring(0, 150)}...` 
                          : project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.split(',').slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 
                                dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 
                                rounded-full border border-blue-200 dark:border-blue-700"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                          {project.technologies.split(',').length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 
                              text-gray-600 dark:text-gray-300 rounded-full">
                              +{project.technologies.split(',').length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Interested in seeing more of my work or discussing potential collaborations in data science and machine learning?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/chandraPrakash-tripathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                    rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 
                    transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Github className="h-5 w-5 mr-3" />
                  View All Projects on GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 
                    transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Brain className="h-5 w-5 mr-3" />
                  Let&apos;s Discuss Data Science
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;