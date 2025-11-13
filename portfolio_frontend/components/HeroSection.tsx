'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, ChevronRight, ArrowDown } from 'lucide-react';

/**
 * HeroSection - AI-themed
 * - Short typed AI line
 * - Glowing nodes + links SVG background
 * - Roles carousel
 * - Compact CTAs and interactive demo placeholder
 */

const roles = ['AI/ML Engineer', 'Software Engineer', 'Builder'];

const TypingAI: React.FC = () => {
  const phrase = "Teaching machines to understand people.";
  const [display, setDisplay] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= phrase.length) return;
    const t = setTimeout(() => {
      setDisplay((s) => s + phrase[i]);
      setI((p) => p + 1);
    }, 28);
    return () => clearTimeout(t);
  }, [i, phrase]);

  return (
    <p className="text-sm md:text-base text-gray-300/90 mb-3" aria-live="polite">
      <span className="inline-block">{display}</span>
      <span className="ml-2 inline-block w-1 h-5 align-middle bg-cyan-300 animate-pulse" />
    </p>
  );
};

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/chandraPrakash-tripathi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/chandraprakash-tripathi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tripathi.cp07@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#05060a] via-[#071021] to-[#000000] text-gray-100"
      aria-label="Home"
    >
      {/* Glowing nodes + links (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-35"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="gA" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gB" cx="70%" cy="70%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.10" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* subtle gradient glows */}
        <rect width="100%" height="100%" fill="url(#gA)" />
        <rect width="100%" height="100%" fill="url(#gB)" />

        {/* nodes + links - animated via small translate animations */}
        <g filter="url(#soft)" strokeLinecap="round" strokeWidth="0.75" strokeOpacity="0.06">
          <line x1="12%" y1="22%" x2="28%" y2="30%" stroke="#6EE7B7">
            <animate attributeName="x1" values="12%;14%;12%" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="30%" y1="30%" x2="60%" y2="18%" stroke="#60A5FA">
            <animate attributeName="y2" values="18%;20%;18%" dur="7s" repeatCount="indefinite" />
          </line>
          <circle cx="12%" cy="22%" r="3.6" fill="#6EE7B7" opacity="0.12">
            <animate attributeName="r" values="3.6;4.2;3.6" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="60%" cy="18%" r="2.8" fill="#60A5FA" opacity="0.10">
            <animate attributeName="r" values="2.8;3.4;2.8" dur="4.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="78%" cy="72%" r="4.5" fill="#6EE7B7" opacity="0.08">
            <animate attributeName="cy" values="72%;70%;72%" dur="6.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left column */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <TypingAI />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Chandra Prakash{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400">
              Tripathi
            </span>
          </h1>

          <div className="mt-3 h-10 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentRole * 2.5}rem)` }}
              aria-live="polite"
            >
              {roles.map((role, i) => (
                <div key={i} className="h-10 text-cyan-300 font-semibold text-lg">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-gray-300 max-w-xl">
            I build ML systems and full-stack products that solve user problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Explore Work
              <ChevronRight className="h-4 w-4 opacity-90" />
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-full border border-gray-700 bg-white/5 text-gray-100 hover:scale-105 transition"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-gray-800 hover:scale-110 transition"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 text-cyan-300" />
                </a>
              );
            })}
          </div>

          <div className="mt-10 hidden md:flex items-center gap-3 text-sm text-gray-400">
            <ArrowDown className="h-4 w-4" aria-hidden />
            <a href="#about" className="hover:text-cyan-300 transition">Scroll to learn more</a>
          </div>
        </div>

        {/* Right column - interactive placeholder */}
        <div className="w-full md:flex-1 flex items-center justify-center">
          <div
            className="w-full max-w-xl h-96 md:h-[28rem] rounded-2xl bg-gradient-to-br from-white/4 to-white/8 border border-white/8 backdrop-blur-sm flex items-center justify-center"
            role="img"
            aria-label="Interactive demo placeholder"
          >
            <div className="text-center px-6">
              <div className="mb-3 text-xs uppercase tracking-wide text-gray-400">Live demo</div>
              <div className="w-64 h-44 rounded-md bg-black/40 border border-white/6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Drop demo (iframe / canvas)</span>
              </div>
              <div className="mt-3 text-xs text-gray-500">Tip: embed a small ML demo or GIF here</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
