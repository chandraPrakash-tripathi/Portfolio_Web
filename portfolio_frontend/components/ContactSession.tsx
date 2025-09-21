'use client';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      href: 'mailto:tripathi.cp07@gmail.com',
      color: 'from-red-500 to-pink-500',
      label: 'Email',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/Chandraprakash-tripathi',
      color: 'from-blue-600 to-blue-800',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Me
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Feel free to reach out via email or connect on LinkedIn.
        </p>

        <div className="flex justify-center gap-8">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${c.color} text-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1`}
                title={c.label}
              >
                <Icon className="h-8 w-8" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
