"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { fetchProjects } from "@/lib/apis/projects";

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="p-6">
      <motion.h2
        className="text-2xl font-semibold mb-4 text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        layout
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            layout
            className="border rounded p-4 shadow-sm bg-black cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.short_desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
