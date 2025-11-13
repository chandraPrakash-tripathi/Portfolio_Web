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
  { name: 'MongoDB', logo: '/logos/mongodb.png' },
  { name: 'Firebase', logo: '/logos/firebase.png' },
  { name: 'Git', logo: '/logos/github.png' },
];

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#06080d] to-black text-gray-200 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(110,231,183,0.12),transparent),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.12),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Animated entrance */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tools I use to build intelligent, scalable systems.
            </p>
          </div>

          {/* Grid of Skills */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative p-4 w-24 h-24 bg-white/5 border border-white/10 rounded-2xl 
                  backdrop-blur-md flex flex-col items-center justify-center
                  hover:border-cyan-300/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
                  transition-all duration-300 cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-xl" />

                <div className="w-10 h-10 mb-2 relative z-10">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]"
                  />
                </div>
                <span className="text-xs text-gray-300 font-medium relative z-10">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
