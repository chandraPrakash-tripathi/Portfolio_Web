"use client";

import React, { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/projects";
import type { Project } from "@/lib/types";

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
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border rounded p-4 shadow-sm">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.short_desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
