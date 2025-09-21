'use client';
import { useIntersectionObserver } from '../lib/hooks';
import { Database, Brain, Code2, Cloud, BarChart3, GitBranch, Server, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
    // Languages
    { name: 'Python', category: 'Languages', icon: Code2 },
    { name: 'JavaScript / TypeScript', category: 'Languages', icon: Code2 },
    { name: 'SQL / MySQL', category: 'Languages', icon: Database },

    // Frameworks & Libraries
    { name: 'React.js / Next.js', category: 'Frameworks & Libraries', icon: Code2 },
    { name: 'Node.js', category: 'Frameworks & Libraries', icon: Server },
    { name: 'Flask / FastAPI', category: 'Frameworks & Libraries', icon: Server },
    { name: 'TensorFlow / Keras', category: 'Frameworks & Libraries', icon: Cpu },
    { name: 'Pandas / NumPy', category: 'Frameworks & Libraries', icon: BarChart3 },
    { name: 'Redux Toolkit', category: 'Frameworks & Libraries', icon: Code2 },
    { name: 'Streamlit', category: 'Frameworks & Libraries', icon: BarChart3 },

    // Databases
    { name: 'MongoDB', category: 'Databases', icon: Database },
    { name: 'Firebase', category: 'Databases', icon: Database },

    // Tools & Platforms
    { name: 'Git / GitHub', category: 'Tools & Platforms', icon: GitBranch },
    { name: 'Docker', category: 'Tools & Platforms', icon: Cloud },
    { name: 'Linux / Unix', category: 'Tools & Platforms', icon: Server },
    { name: 'VS Code / PyCharm', category: 'Tools & Platforms', icon: Code2 },

    // Concepts & Processes
    { name: 'Machine Learning', category: 'Concepts & Processes', icon: Brain },
    { name: 'Deep Learning', category: 'Concepts & Processes', icon: Brain },
    { name: 'Data Pipelines', category: 'Concepts & Processes', icon: GitBranch },
    { name: 'ETL Processes', category: 'Concepts & Processes', icon: Server }
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Languages, frameworks, databases, tools, and concepts I work with
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all w-28"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-2">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm text-center text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
