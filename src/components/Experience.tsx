import { Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Penetration Tester',
      company: 'VulnOS',
      period: 'July 2025 - September 2025',
      description: 'Actively performing live penetration tests across VulnOS environments. Focused on real-time vulnerability assessment, exploitation, and secure reporting of platform weaknesses.',
      color: 'cyan',
    },
    {
      title: 'CNS TC Cybersecurity Intern',
      company: 'EY',
      period: 'May 2025 - July 2025',
      description: 'Built an automated compliance auditing system tailored for frameworks like ISO 27001, HIPAA, GDPR, PCI DSS, SOX etc. Designed a multi-phase pipeline to extract, evaluate, and visualize policy compliance from internal documentation, streamlining enterprise audit workflows. Containerized the entire system using Docker for easy deployment.',
      color: 'green',
    },
    {
      title: 'Security Analyst',
      company: 'Conversia-AI',
      period: 'January 2025 - March 2025',
      description: 'Conducted VAPT for Conversia\'s home site and client websites using Nessus and Acunetix. Performed manual testing, strengthened cloud security by managing AWS IAM and enhanced overall cybersecurity posture for the AI chatbot startup.',
      color: 'cyan',
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-5xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            EXPERIENCE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-cyan-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-20 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms`, transition: 'all 0.8s ease-out' }}
                >
                  <div className={`absolute left-5 w-8 h-8 rounded-full bg-${exp.color}-500 border-4 border-black flex items-center justify-center pulse-glow`}>
                    <Briefcase size={16} className="text-black" />
                  </div>

                  <div className={`bg-zinc-900/80 backdrop-blur-sm border border-${exp.color}-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 neon-border`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-rajdhani font-bold text-white">{exp.title}</h3>
                      <span className={`text-${exp.color}-400 font-rajdhani font-semibold text-lg`}>{exp.period}</span>
                    </div>
                    <p className={`text-xl text-${exp.color}-400 font-semibold mb-4`}>{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
