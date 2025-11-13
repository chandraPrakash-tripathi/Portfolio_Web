'use client';

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-14 bg-gradient-to-b from-black to-[#05060a] text-gray-300 overflow-hidden">
      
      {/* Background AI Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
            {["about", "projects", "skills", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative group hover:text-white transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {/* Underline glow */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full 
                  group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/chandraPrakash-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition group"
            >
              <Github className="h-5 w-5 text-cyan-300 group-hover:text-white transition" />
            </a>

            <a
              href="https://linkedin.com/in/chandraprakash-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition group"
            >
              <Linkedin className="h-5 w-5 text-cyan-300 group-hover:text-white transition" />
            </a>

            <a
              href="mailto:tripathi.cp07@gmail.com"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition group"
            >
              <Mail className="h-5 w-5 text-cyan-300 group-hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} — Built with passion & precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
