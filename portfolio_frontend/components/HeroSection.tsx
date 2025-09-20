'use client';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Briefcase, MessageCircle, ChevronRight, ArrowDown, User } from 'lucide-react';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30">
      {/* ... (rest of the HeroSection JSX code) ... */}
    </section>
  );
};

export default HeroSection;