import { Mail, Phone, Linkedin, Github, BookOpen, Link as LinkIcon, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info.adityabhatt3010@gmail.com',
      link: 'mailto:info.adityabhatt3010@gmail.com',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98189 93884',
      link: 'tel:+919818993884',
      color: 'green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'aditya-bhatt-b61868250',
      link: 'https://linkedin.com/in/aditya-bhatt-b61868250',
      color: 'cyan',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AdityaBhatt3010',
      link: 'https://github.com/AdityaBhatt3010',
      color: 'green',
    },
    {
      icon: BookOpen,
      label: 'Medium',
      value: '@adityabhatt3010',
      link: 'https://medium.com/@adityabhatt3010',
      color: 'cyan',
    },
    {
      icon: Target,
      label: 'TryHackMe',
      value: 'info.adityabhatt',
      link: 'https://tryhackme.com/p/info.adityabhatt',
      color: 'green',
    },
    {
      icon: LinkIcon,
      label: 'Credly',
      value: 'View Profile',
      link: 'https://www.credly.com/users/aditya-bhatt',
      color: 'cyan',
    },
    {
      icon: LinkIcon,
      label: 'Linktree',
      value: 'AdityaBhatt3010',
      link: 'https://linktr.ee/AdityaBhatt3010',
      color: 'green',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-zinc-900/80 backdrop-blur-sm border border-${contact.color}-500/30 rounded-xl p-6 hover:scale-105 hover:border-${contact.color}-500/70 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <Icon className={`text-${contact.color}-400 mb-4 group-hover:cyber-glow transition-all duration-300`} size={32} />
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                  <p className={`text-${contact.color}-400 font-rajdhani font-semibold break-all`}>{contact.value}</p>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 font-rajdhani">
              &copy; 2025 Aditya Bhatt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
