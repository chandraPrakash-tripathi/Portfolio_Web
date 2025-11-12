'use client';
import { Briefcase, Database, Brain, BarChart3 } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Pipelines • ETL • Cloud-native architectures"
    },
    {
      icon: Brain,
      title: "ML & AI",
      description: "TensorFlow • Keras • Real-world model deployment"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Python • SQL • Pandas • Visualization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Quick Intro */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Chandra Prakash Tripathi
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Data Engineer @ Kipi.ai
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I build scalable data systems and deploy ML solutions that power analytics and decision-making.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 
                      border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Card - Minimal */}
          <div className="mt-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900/20 
              border border-purple-200 dark:border-purple-800 max-w-md mx-auto text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-purple-600 rounded-lg mr-3">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Data Engineer @ Kipi.ai</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Focused on data pipelines, scalable analytics, and ML integration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
