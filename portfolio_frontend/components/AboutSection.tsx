'use client';
import { Code, ExternalLink, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      Hii
    </section>
  );
};

export default AboutSection;