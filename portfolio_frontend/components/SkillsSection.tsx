'use client';
import { useIntersectionObserver } from '../lib/hooks';

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, category: 'Frontend', color: 'bg-yellow-500' },
    { name: 'React/Next.js', level: 90, category: 'Frontend', color: 'bg-blue-500' },
    { name: 'Python/Django', level: 88, category: 'Backend', color: 'bg-green-500' },
    { name: 'Node.js', level: 85, category: 'Backend', color: 'bg-green-600' },
    { name: 'PostgreSQL', level: 82, category: 'Database', color: 'bg-blue-600' },
    { name: 'AWS/Cloud', level: 78, category: 'DevOps', color: 'bg-orange-500' },
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800" ref={ref}>
       {/* ... (rest of the SkillsSection JSX code) ... */}
    </section>
  );
};

export default SkillsSection;