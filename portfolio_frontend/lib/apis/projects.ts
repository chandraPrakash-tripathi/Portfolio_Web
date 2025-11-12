import { Project } from "../types";

const API_BASE = process.env.API_BASE ?? 'http://127.0.0.1:8000';

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE.replace(/\/$/, "")}/projects`, {
    // pick strategy:
    // cache: 'no-store' // always fresh (dev)
    // next: { revalidate: 60 } // ISR in production
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
  return (await res.json()) as Project[];
}

// returns promise (start fetching but not awaited)
export function getProjectsPromise(): Promise<Project[]> {
  return fetchProjects();
}
