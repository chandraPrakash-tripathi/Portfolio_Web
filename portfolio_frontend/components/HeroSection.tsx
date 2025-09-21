'use client';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, ChevronRight, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Data Engineer"];

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
            Chandra Prakash <span className="block text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">Tripathi</span>
          </h1>

          {/* Role */}
          <div className="text-xl md:text-2xl font-medium text-gray-400 mt-3 h-8 flex justify-center md:justify-start items-center overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentRole * 2}rem)` }}
            >
              {roles.map((role, i) => (
                <div key={i} className="h-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Turning <span className="font-semibold text-cyan-400">data</span> into intelligent <span className="font-semibold text-blue-400">solutions</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-8">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-full font-semibold hover:scale-105 transition flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" /> Collaborate
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
            <a href="#projects" className="px-6 py-3 bg-white/10 text-gray-100 border border-gray-600 rounded-full font-semibold hover:scale-105 transition">
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start space-x-5 mt-8">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a key={i} href={link.href} target="_blank" rel="noreferrer"
                  className="p-3 bg-white/10 rounded-full shadow hover:scale-110 transition border border-gray-700"
                  title={link.label}
                >
                  <Icon className="h-5 w-5 text-cyan-400" />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce hidden md:flex">
            <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-cyan-400 transition">
              <span className="text-sm mb-1">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex items-center justify-center">
          {/* Transparent area for games */}
          <div className="w-full h-96 md:h-[28rem] flex items-center justify-center text-gray-500 text-lg font-semibold">
            Interactive Content Here
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
