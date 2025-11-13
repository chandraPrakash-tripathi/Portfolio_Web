'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/types';
import { fetchProjects } from '@/lib/apis/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((res) => setProjects(res ?? []))
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const Card = ({ p }: { p: Project }) => {
    const tech = (p.github_url || p.short_desc || '').match(/(Next\.js|React|TensorFlow|FastAPI|Flask|MongoDB|Firebase|Node\.js|Python|TypeScript|TensorFlow|Mediapipe)/gi) || [];
    return (
      <motion.article
        layout
        role="article"
        aria-labelledby={`project-${p.id}-title`}
        className="relative rounded-2xl p-6 bg-gradient-to-br from-white/3 to-white/6 border border-white/8 backdrop-blur-md shadow-[0_10px_30px_rgba(2,6,23,0.6)]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.995 }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 id={`project-${p.id}-title`} className="text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              {p.short_desc ?? 'No description available.'}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.is_featured && (
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/10">
                  Featured
                </span>
              )}
              {tech.slice(0, 4).map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-200 border border-white/6"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {p.live_url && (
              <a
                href={p.live_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-medium text-sm shadow hover:scale-105 transition"
                aria-label={`Open live demo for ${p.title}`}
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}

            {p.github_url && (
              <a
                href={p.github_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/8 bg-white/2 text-sm text-gray-100 hover:scale-105 transition"
                aria-label={`Open source for ${p.title}`}
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        </div>

        {/* subtle bottom accent */}
        <div className="absolute -bottom-3 left-6 right-6 h-2 rounded-b-2xl bg-gradient-to-r from-cyan-400/20 to-indigo-400/10 opacity-80 pointer-events-none" />
      </motion.article>
    );
  };

  // Loading skeleton grid
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-[#06080d] to-black text-gray-200">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-36 rounded-2xl bg-white/4 border border-white/8 animate-pulse"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#06080d] to-black text-gray-200">
      <div className="container mx-auto px-6">
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-gray-400">Selected work — short, focused, and deployable.</p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          layout
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.length === 0 && (
            <div className="text-gray-400">No projects found.</div>
          )}

          {projects.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
