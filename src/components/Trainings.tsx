import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Shield, Code, Cloud, Terminal } from 'lucide-react';

const Trainings = () => {
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

  const trainingSections = [
    {
      icon: Shield,
      title: 'Forage Cybersecurity Job Simulator',
      trainings: [
        'Deloitte',
        'PWC',
        'MasterCard',
        'Telestra',
        'Datacom',
        'ANZ',
        'AIG',
        'TCS',
        'Commonwealth Bank',
      ],
      color: 'cyan',
    },
    {
      icon: Cloud,
      title: 'Amazon Web Services',
      trainings: ['Educate Getting Started with Security (AWS IAM)'],
      color: 'green',
    },
    {
      icon: Terminal,
      title: 'TryHackMe',
      trainings: ['Jr Penetration Tester', 'Web Fundamentals'],
      color: 'cyan',
    },
    {
      icon: Code,
      title: 'Microsoft Learn',
      trainings: [
        'SC-200: Configure your Microsoft Sentinel environment',
        'Get started with the Linux command line and the Shell',
        'Introduction to GitHub',
      ],
      color: 'green',
    },
    {
      icon: GraduationCap,
      title: 'SimpliLearn Training',
      trainings: [
        'ISACA CISM (Certified Information Security Manager)',
        'ISC2 CCSP (Certified Cloud Security Professional)',
        'CompTIA Network+',
        'Introduction to Cyber Security',
        'Linux Training',
      ],
      color: 'cyan',
    },
    {
      icon: Shield,
      title: 'Cisco NetAcad',
      trainings: ['CCNA v7: Introduction to Networks Training'],
      color: 'green',
    },
    {
      icon: Shield,
      title: 'EC-Council CodeRed',
      trainings: [
        'Top 100 Interesting Bugs | Ethical Hacking and Bug Bounty',
        'Getting Started with IoT Security',
        'Introduction to Web Forensics',
        'Cybersecurity: Cloud Security',
      ],
      color: 'cyan',
    },
  ];

  return (
    <section id="trainings" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            ADDITIONAL TRAININGS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`bg-zinc-900/80 backdrop-blur-sm border border-${section.color}-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${section.color}-500/10 border border-${section.color}-500/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`text-${section.color}-400 group-hover:cyber-glow`} size={24} />
                    </div>
                    <h3 className={`text-xl font-orbitron font-bold text-${section.color}-400 group-hover:cyber-glow transition-all duration-300`}>
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 list-none pl-6">
                    {section.trainings.map((training, trainingIndex) => (
                      <li
                        key={trainingIndex}
                        className={`flex items-start text-gray-300 hover:text-${section.color}-400 transition-colors duration-200`}
                      >
                        <span className={`text-${section.color}-400 mr-3 flex-shrink-0 font-bold text-lg leading-5`}>•</span>
                        <span className="text-sm leading-relaxed">{training}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
