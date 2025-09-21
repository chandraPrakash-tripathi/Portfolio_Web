'use client';
import { useState } from 'react';
import { useIntersectionObserver } from '../lib/hooks';
import type { ContactForm } from '../lib/types';
import { submitContactForm } from '../lib/api';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone, Calendar, Brain, Database, Code } from 'lucide-react';

const ContactSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    const success = await submitContactForm(formData);
    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tripathi.cp07@gmail.com',
      href: 'mailto:tripathi.cp07@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8368522736',
      href: 'tel:+918368522736',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka, IN',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Available for opportunities',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/chandraPrakash-tripathi',
      color: 'hover:bg-gray-900 hover:text-white',
      description: 'Check out my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/Chandraprakash-tripathi',
      color: 'hover:bg-blue-600 hover:text-white',
      description: 'Connect with me professionally'
    }
  ];

  const collaborationAreas = [
    {
      icon: Brain,
      title: 'Machine Learning Projects',
      description: 'AI/ML model development, deep learning, computer vision'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL pipelines, data warehousing, big data processing'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Modern web applications with data-driven features'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to collaborate on data science projects, discuss ML opportunities, or explore innovative solutions? 
              I&apos;d love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Info & Social */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className={`group flex items-center p-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg 
                          hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                          ${info.href !== '#' ? 'hover:scale-[1.02]' : 'cursor-default'}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent 
                            group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 
                            transition-all duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Social Profiles</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center p-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg 
                          hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]`}
                        style={{ animationDelay: `${(index + contactInfo.length) * 100}ms` }}
                      >
                        <div className={`p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 mr-4 
                          transition-all duration-300 ${social.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{social.label}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Collaboration Areas */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Collaboration Areas</h3>
                <div className="space-y-4">
                  {collaborationAreas.map((area, index) => {
                    const IconComponent = area.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                          border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300"
                        style={{ animationDelay: `${(index + contactInfo.length + socialLinks.length) * 100}ms` }}
                      >
                        <div className="flex items-start">
                          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4 mt-1">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {area.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send Message</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a project in mind or want to discuss data science opportunities? Drop me a message!
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                  <p className="text-red-800 dark:text-red-300 font-medium">
                    Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                        placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                        placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                      bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                      placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Project collaboration, Job opportunity, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                      bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                      placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 
                    transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                />
                  {submitStatus === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-3" />
                      Send Message
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;