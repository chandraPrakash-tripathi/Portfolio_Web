'use client';
import { useIntersectionObserver } from '../lib/hooks';
import { Github, ExternalLink, Star, Database } from 'lucide-react';
import type { Project } from '../lib/types';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Gesture Recognition',
      impact: '98% accuracy • Real-time sign language recognition',
      technologies: ['Python', 'TensorFlow', 'Mediapipe', 'Raspberry Pi'],
      github_url: 'https://github.com/chandraPrakash-tripathi/gesture-recognition',
      live_url: 'https://gesture-recognition-demo.vercel.app',
      is_featured: true,
    },
    {
      id: 2,
      title: 'AI Meal Planner',
      impact: 'Llama-3 powered personalized diet planner',
      technologies: ['Python', 'Streamlit', 'Llama-3', 'NLP'],
      github_url: 'https://github.com/chandraPrakash-tripathi/ai-meal-planner',
      live_url: 'https://ai-meal-planner-demo.streamlit.app',
      is_featured: true,
    },
    {
      id: 3,
      title: 'Sports Analytics',
      impact: 'Real-time sports performance dashboards',
      technologies: ['Next.js', 'Flask', 'MySQL', 'Tailwind'],
      github_url: 'https://github.com/chandraPrakash-tripathi/sports-analytics',
      live_url: 'https://nuava-sports-platform.vercel.app',
      is_featured: true,
    },
    {
      id: 4,
      title: 'Data Pipeline ETL',
      impact: 'Automated ETL with validation & monitoring',
      technologies: ['Airflow', 'PostgreSQL', 'Docker', 'Pandas'],
      github_url: 'https://github.com/chandraPrakash-tripathi/data-pipeline-etl',
      is_featured: false,
    },
    {
      id: 5,
      title: 'ML Model Deployment',
      impact: 'Production-ready ML APIs with A/B testing',
      technologies: ['FastAPI', 'MLflow', 'Docker', 'K8s'],
      github_url: 'https://github.com/chandraPrakash-tripathi/ml-model-deployment',
      is_featured: false,
    }
  ];

  const featured = projects.filter(p => p.is_featured);
  const others = projects.filter(p => !p.is_featured);

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={container}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
              Crisp snapshots — impact first, details later
            </p>
          </div>

          {/* Featured */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Star className="h-4 w-4 mr-2" />
              <span className="font-semibold">Featured</span>
            </div>
          </div>

          <motion.div className="grid md:grid-cols-2 gap-6 mb-16" variants={container}>
            {featured.map((p) => (
              <motion.div 
                key={p.id} 
                variants={item}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900/40 
                  rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.impact}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.technologies.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 mt-4">
                  {p.github_url && (
                    <a href={p.github_url} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-110 transition">
                      <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </a>
                  )}
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" rel="noreferrer" className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:scale-110 transition">
                      <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Others */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg">
              <Database className="h-4 w-4 mr-2" />
              <span className="font-semibold">Other Projects</span>
            </div>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container}>
            {others.map((p) => (
              <motion.div 
                key={p.id} 
                variants={item}
                whileHover={{ scale: 1.04, y: -3 }}
                className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">{p.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{p.impact}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.technologies.slice(0, 2).map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2 mt-3">
                  {p.github_url && (
                    <a href={p.github_url} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-110 transition">
                      <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </a>
                  )}
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" rel="noreferrer" className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:scale-110 transition">
                      <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
