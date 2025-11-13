'use client';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      href: 'mailto:tripathi.cp07@gmail.com',
      label: 'Email',
      glow: 'from-cyan-400/40 to-blue-500/40',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/chandraprakash-tripathi',
      label: 'LinkedIn',
      glow: 'from-purple-400/40 to-pink-500/40',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#05060a] to-black text-gray-200 overflow-hidden"
    >
      {/* Background AI glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(110,231,183,0.15),transparent),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.15),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-12">
          Let’s connect — I’m always open to conversations.
        </p>

        {/* Contact Nodes */}
        <div className="flex justify-center gap-10">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                title={c.label}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${c.glow} blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                />

                {/* Main icon container */}
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full 
                  bg-white/5 border border-white/10 backdrop-blur-md shadow-lg
                  group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
                  transition-all duration-300 group-hover:scale-110"
                >
                  <Icon className="h-8 w-8 text-cyan-300 group-hover:text-white transition" />
                </div>

                {/* Label on hover */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition mt-2">
                  {c.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
