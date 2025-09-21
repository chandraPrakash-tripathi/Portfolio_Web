'use client';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Briefcase, MessageCircle, ChevronRight, ArrowDown, User, Database, Brain, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Data Engineer", "ML Engineer", "Data Scientist", "AI Enthusiast"];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/chandraPrakash-tripathi", label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com/in/Chandraprakash-tripathi", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Mail, href: "mailto:tripathi.cp07@gmail.com", label: "Email", color: "hover:bg-red-600 hover:text-white" }
  ];

  const stats = [
    { icon: Database, label: "Data Projects", value: "10+" },
    { icon: Brain, label: "ML Models", value: "15+" },
    { icon: BarChart3, label: "Accuracy Rate", value: "98%" },
    { icon: Briefcase, label: "Experience", value: "2+ Years" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-blue-900/40 dark:to-indigo-900/40">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1500 transform ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Chandra Prakash
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Tripathi
            </span>
          </h1>

          {/* Animated Role */}
          <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12 flex items-center justify-center">
            <span className="mr-2">I&apos;m a</span>
            <div className="relative overflow-hidden h-8">
              <div 
                className="flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentRole * 2}rem)`, willChange: "transform" }}
              >
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Currently working as a <strong className="text-gray-900 dark:text-white">Data Engineer at Kipi.ai</strong>, 
            passionate about transforming data into intelligent solutions with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              Machine Learning, AI, and Data Science
            </span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 text-center">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="#contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <MessageCircle className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Let&apos;s Collaborate
              <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a href="#projects" className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <BarChart3 className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              View My Data Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${link.color} border border-gray-200 dark:border-gray-700`} title={link.label}>
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group">
              <span className="text-sm font-medium mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                Explore My Journey
              </span>
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
          <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="p-3 bg-purple-500/10 rounded-lg backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30">
          <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-3 bg-green-500/10 rounded-lg backdrop-blur-sm border border-green-200/30 dark:border-green-700/30">
          <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
