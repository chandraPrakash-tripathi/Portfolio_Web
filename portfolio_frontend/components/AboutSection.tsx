'use client';
import { Cpu, BrainCircuit, Network } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const highlights = [
    {
      icon: Cpu,
      title: "Systems & Data",
      description: "Pipelines • ETL • Cloud workflows • Fast APIs"
    },
    {
      icon: BrainCircuit,
      title: "Machine Intelligence",
      description: "Neural models • TensorFlow • Real-world deployment"
    },
    {
      icon: Network,
      title: "Full-Stack Engineering",
      description: "Next.js • Node • Scalable backend architecture"
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-black to-[#06090f] text-gray-200 relative overflow-hidden"
    >
      {/* Soft AI glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(110,231,183,0.08),transparent),radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.08),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Short AI Story */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-white">
                A builder at the intersection of data, intelligence & design.
              </h3>

              <p className="text-gray-300 leading-relaxed max-w-xl">
                I build systems that <span className="text-cyan-300 font-medium">learn</span>,
                <span className="text-indigo-300 font-medium"> reason</span>, and
                <span className="text-purple-300 font-medium"> scale</span>.
                My work spans machine learning, full-stack development,
                and data engineering — turning ideas into intelligent products.
              </p>

              <p className="text-gray-400 text-sm max-w-xl">
                Currently shaping data workflows & ML-powered automation at
                <span className="text-cyan-300 font-semibold"> Kipi.ai</span>.
              </p>
            </div>

            {/* Right Column – Futuristic Highlight Cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10
                    hover:border-cyan-300/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]
                    transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-600/30 backdrop-blur-md border border-white/10">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
