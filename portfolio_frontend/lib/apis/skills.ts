// lib/apis/skills.ts
import { Skill } from "../types";

const API_BASE = process.env.API_BASE ?? 'http://127.0.0.1:8000';

export async function fetchSkills(): Promise<Skill[]> {
  const res = await fetch(`${API_BASE.replace(/\/$/, "")}/skills`, {
    cache: 'no-store', // disable cache in dev
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch skills: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as Skill[];
}

// optional: for prefetch usage
export function getSkillsPromise(): Promise<Skill[]> {
  return fetchSkills();
}
