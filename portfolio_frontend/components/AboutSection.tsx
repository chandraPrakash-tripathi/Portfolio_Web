'use client';
import { Code,  Briefcase, Database, Brain, BarChart3, GitBranch, Award, Users, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Currently working as Data Engineer at Kipi.ai, specializing in data pipelines, ETL processes, and scalable data architectures."
    },
    {
      icon: Brain,
      title: "ML & AI Expertise", 
      description: "Experienced in machine learning with TensorFlow, Keras, and deep learning. Built gesture recognition systems with 98% accuracy."
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Proficient in data analysis, visualization with Pandas, NumPy, and Matplotlib. Passionate about extracting insights from complex datasets."
    }
  ];

  const achievements = [
    { icon: Award, text: "Best Final Year Project among 100+ teams" },
    { icon: Users, text: "Led 500+ students as Theatrix President" },
    { icon: Heart, text: "100+ philanthropic hours volunteering" },
    { icon: GitBranch, text: "Top contender in Electhon (Election Commission of India)" }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Chandra Prakash Tripathi
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    Data Engineer | ML Enthusiast | Problem Solver
                  </p>
                  
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Currently working as a <strong className="text-gray-900 dark:text-white">Data Engineer at Kipi.ai</strong>, 
                      I&apos;m passionate about transforming raw data into actionable insights. My journey from Electronics & 
                      Telecommunications Engineering to the world of data science has equipped me with a unique perspective 
                      on solving complex problems.
                    </p>
                    
                    <p>
                      With expertise in <strong className="text-gray-900 dark:text-white">Python, SQL, machine learning, and data engineering</strong>, 
                      I specialize in building robust data pipelines, implementing ML models, and creating intelligent systems. 
                      My recent projects include developing gesture recognition systems with 98% accuracy and AI-powered applications.
                    </p>
                    
                    <p>
                      I believe in the power of data to drive innovation and am constantly exploring new technologies in 
                      AI/ML, big data, and cloud computing to stay at the forefront of the data revolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Key Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 
                      border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education & Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Education Card */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 
                border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg mr-4">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">B.E. Electronics & Telecommunications</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ramaiah Institute of Technology (2020-2024)</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Specialized in Data Structures, Algorithms, Machine Learning, Deep Learning, and Database Management Systems.
                </p>
              </div>

              {/* Current Role Card */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900/20 
                border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg mr-4">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Data Engineer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kipi.ai (Current Position)</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Building data pipelines, implementing ML solutions, and working with big data technologies to drive business insights.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                      hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-600`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                        {achievement.text}
                      </p>
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