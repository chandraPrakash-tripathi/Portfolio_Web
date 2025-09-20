'use client';
import { useState } from 'react';
import { useIntersectionObserver } from '../lib/hooks';
import type { ContactForm } from '../lib/types';
import { submitContactForm } from '../lib/api';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

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

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800" ref={ref}>
      {/* ... (rest of the ContactSection JSX code) ... */}
    </section>
  );
};

export default ContactSection;