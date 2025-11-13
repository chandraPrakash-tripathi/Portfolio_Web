'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-black/60 border-b border-white/6 shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Primary navigation"
    >
      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white/5 focus:text-white px-3 py-2 rounded">
        Skip to content
      </a>

      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 text-white select-none"
          aria-label="Home — Chandra Prakash Tripathi"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-md border border-white/8">
            <span className="font-mono text-sm font-semibold text-black">CP</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold">Chandra Prakash</span>
            <span className="text-xs text-gray-300 -mt-0.5">AI · ML · Systems</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-300 hover:text-white transition px-1 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 rounded"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-white/3 border border-white/6 hover:scale-105 transition transform"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-cyan-300" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-white/3 border border-white/6 hover:scale-105 transition transform mr-2"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-cyan-300" />}
          </button>

          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-md bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!isOpen}
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-black/60 backdrop-blur-md border-t border-white/6`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-md text-lg text-gray-200 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/25"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
