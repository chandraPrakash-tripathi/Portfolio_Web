import { Project } from "@/lib/types";
import ProjectCard from "./ProjectsCards";



type Props = {
  projectsPromise: Promise<Project[]>;
};

export default async function ProjectsList({ projectsPromise }: Props) {
  let projects: Project[] = [];
  try {
    projects = await projectsPromise; // allowed — this is server-side
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return (
      <div className="text-center text-red-500 my-6">
        Failed to load projects: {message}
      </div>
    );
  }

  const featured = projects.filter((p) => p.is_featured);
  const others = projects.filter((p) => !p.is_featured);

  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
          <span className="font-semibold">Featured</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center px-5 py-2 rounded-full bg-gray-700 text-white shadow-lg">
          <span className="font-semibold">Other Projects</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
