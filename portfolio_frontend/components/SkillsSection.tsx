'use client';
import { useIntersectionObserver } from '../lib/hooks';
import { Database, Brain, Code2, Cloud, BarChart3, GitBranch, Server, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
    // Data Science & ML
    { name: 'Python', level: 95, category: 'Data Science & ML', color: 'bg-green-500', icon: Code2 },
    { name: 'Machine Learning', level: 90, category: 'Data Science & ML', color: 'bg-purple-500', icon: Brain },
    { name: 'TensorFlow/Keras', level: 88, category: 'Data Science & ML', color: 'bg-orange-500', icon: Cpu },
    { name: 'Pandas/NumPy', level: 92, category: 'Data Science & ML', color: 'bg-blue-500', icon: BarChart3 },
    { name: 'Deep Learning', level: 85, category: 'Data Science & ML', color: 'bg-indigo-500', icon: Brain },
    { name: 'Streamlit', level: 88, category: 'Data Science & ML', color: 'bg-red-500', icon: BarChart3 },
    
    // Data Engineering
    { name: 'SQL/MySQL', level: 90, category: 'Data Engineering', color: 'bg-blue-600', icon: Database },
    { name: 'MongoDB', level: 82, category: 'Data Engineering', color: 'bg-green-600', icon: Database },
    { name: 'Firebase', level: 80, category: 'Data Engineering', color: 'bg-yellow-500', icon: Database },
    { name: 'Data Pipelines', level: 85, category: 'Data Engineering', color: 'bg-purple-600', icon: GitBranch },
    { name: 'ETL Processes', level: 83, category: 'Data Engineering', color: 'bg-teal-500', icon: Server },
    
    // Full-Stack Development
    { name: 'React.js/Next.js', level: 88, category: 'Full-Stack Development', color: 'bg-cyan-500', icon: Code2 },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Full-Stack Development', color: 'bg-yellow-600', icon: Code2 },
    { name: 'Node.js', level: 82, category: 'Full-Stack Development', color: 'bg-green-700', icon: Server },
    { name: 'Flask/FastAPI', level: 85, category: 'Full-Stack Development', color: 'bg-gray-600', icon: Server },
    { name: 'Redux Toolkit', level: 80, category: 'Full-Stack Development', color: 'bg-purple-700', icon: Code2 },
    
    // Tools & DevOps
    { name: 'Git/GitHub', level: 92, category: 'Tools & DevOps', color: 'bg-gray-700', icon: GitBranch },
    { name: 'Docker', level: 75, category: 'Tools & DevOps', color: 'bg-blue-700', icon: Cloud },
    { name: 'Linux/Unix', level: 85, category: 'Tools & DevOps', color: 'bg-black', icon: Server },
    { name: 'VS Code/PyCharm', level: 95, category: 'Tools & DevOps', color: 'bg-indigo-600', icon: Code2 }
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryIcons = {
    'Data Science & ML': Brain,
    'Data Engineering': Database,
    'Full-Stack Development': Code2,
    'Tools & DevOps': Cloud
  };

  const categoryColors = {
    'Data Science & ML': 'from-purple-600 to-pink-600',
    'Data Engineering': 'from-blue-600 to-cyan-600',
    'Full-Stack Development': 'from-green-600 to-teal-600',
    'Tools & DevOps': 'from-orange-600 to-red-600'
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized in Data Science, Machine Learning, and Data Engineering with full-stack development capabilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
              const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
              const categoryColor = categoryColors[category as keyof typeof categoryColors];
              
              return (
                <div
                  key={category}
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 300}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-center mb-12">
                    <div className={`flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${categoryColor} text-white shadow-lg`}>
                      <CategoryIcon className="h-6 w-6 mr-3" />
                      <h3 className="text-xl font-bold">{category}</h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorySkills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className={`group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700
                            hover:border-blue-300 dark:hover:border-blue-600`}
                          style={{ animationDelay: `${(categoryIndex * 300) + (skillIndex * 100)}ms` }}
                        >
                          <div className="flex items-center mb-4">
                            <div className={`p-2 rounded-lg mr-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                              <SkillIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {skill.name}
                              </h4>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Proficiency
                                </span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                                style={{
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${(categoryIndex * 300) + (skillIndex * 100) + 200}ms`
                                }}
                              >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transform -skew-x-12 animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications & Learning */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
              text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Brain className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">Microsoft Technology Associate Certified</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Continuously learning and adapting to new technologies in AI, ML, and data engineering to stay ahead in the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;