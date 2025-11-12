import React, { Suspense } from 'react';
import { getProjectsPromise } from '@/lib/projects';
import ProjectsSkeleton from './ProjectsSkeleton';
import ProjectsList from './ProjectsList';

export default function ProjectsSection() {
  const projectsPromise = getProjectsPromise();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">Crisp snapshots — impact first, details later</p>
        </div>

        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsList projectsPromise={projectsPromise} />
        </Suspense>
      </div>
    </section>
  );
}
