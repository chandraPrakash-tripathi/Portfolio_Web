'use client';
import { useIntersectionObserver } from '../lib/hooks';
import Image from 'next/image';

const skills = [
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'JavaScript', logo: '/logos/java-script.png' },
  { name: 'TypeScript', logo: '/logos/typescript.png' },
  { name: 'React', logo: '/logos/react.png' },
  { name: 'Next.js', logo: '/logos/nextjs.png' },
  { name: 'Node.js', logo: '/logos/nodejs.png' },
  { name: 'FastAPI', logo: '/logos/fastapi.png' },
  { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
  { name: 'Pandas', logo: '/logos/pandas.png' },
  { name: 'MongoDB', logo: '/logos/mongodb.png' },
  { name: 'Firebase', logo: '/logos/firebase.png' },
  { name: 'Git', logo: '/logos/github.png' },
  { name: 'ML & DL', logo: '/logos/brain.png' },
];

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Some of the main tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`relative p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:rotate-3 hover:scale-105`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2">
                    <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                  </div>
                  <span className="text-sm text-center text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
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
