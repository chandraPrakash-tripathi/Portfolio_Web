'use client';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, ChevronRight, ArrowDown, User } from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Data Engineer", "ML Engineer", "Data Scientist", "AI Enthusiast"];

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/chandraPrakash-tripathi", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/Chandraprakash-tripathi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:tripathi.cp07@gmail.com", label: "Email" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-blue-900/40 dark:to-indigo-900/40">
      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Profile */}
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-xl mb-6">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <User className="h-12 w-12 text-gray-600 dark:text-gray-400" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Chandra Prakash <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tripathi</span>
        </h1>

        {/* Role */}
        <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mt-3 h-8 flex justify-center items-center overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentRole * 2}rem)` }}
          >
            {roles.map((role, i) => (
              <div key={i} className="h-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-4">
          Turning <span className="font-semibold">data</span> into intelligent <span className="font-semibold">solutions</span>.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" /> Collaborate
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
          <a href="#projects" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:scale-105 transition">
            View Projects
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-5 mt-8">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a key={i} href={link.href} target="_blank" rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition border border-gray-200 dark:border-gray-700"
                title={link.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
