import { GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Education = () => {
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

  const education = [
    {
      degree: 'BTech in Computer Science & Engineering',
      institution: 'Amity University, Uttar Pradesh',
      period: '2022 - 2026',
      score: 'CGPA: 8.48',
      color: 'cyan',
    },
    {
      degree: 'Class XII',
      institution: 'Somerville School',
      period: '2022',
      score: '89.8%',
      color: 'green',
    },
    {
      degree: 'Class X',
      institution: 'Somerville School',
      period: '2020',
      score: '94.8%',
      color: 'cyan',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-5xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            EDUCATION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-cyan-500"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                  style={{ transitionDelay: `${index * 200}ms`, transition: 'all 0.8s ease-out' }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-zinc-900/80 backdrop-blur-sm border border-${edu.color}-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 neon-border`}>
                      <div className="flex items-center justify-between mb-2">
                        <GraduationCap className={`text-${edu.color}-400`} size={24} />
                        <span className={`text-${edu.color}-400 font-rajdhani font-semibold`}>{edu.period}</span>
                      </div>
                      <h3 className="text-xl font-rajdhani font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-gray-400 mb-2">{edu.institution}</p>
                      <p className={`text-${edu.color}-400 font-bold text-lg`}>{edu.score}</p>
                    </div>
                  </div>

                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-${edu.color}-500 border-4 border-black pulse-glow`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
