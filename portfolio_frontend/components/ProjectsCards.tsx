'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types'; // or '@/lib/projects' whichever type file you use

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  // Synchronous render only — no fetch, no async, no promise creation here.
  const containerClass = project.is_featured
    ? 'p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900/40 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300'
    : 'p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300';

  return (
    <motion.div whileHover={{ scale: 1.03, y: -4 }} className={containerClass}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
      {project.short_desc && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.short_desc}</p>}

      <div className="flex space-x-3 mt-4">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noreferrer" className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
