import { Shield, Terminal, Cloud, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const icons = [
    { Icon: Shield, color: 'text-cyan-400', delay: 0 },
    { Icon: Terminal, color: 'text-green-400', delay: 200 },
    { Icon: Cloud, color: 'text-cyan-400', delay: 400 },
    { Icon: Lock, color: 'text-green-400', delay: 600 },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            ABOUT ME
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-around opacity-10">
              {icons.map(({ Icon, color }, index) => (
                <Icon
                  key={index}
                  size={200}
                  className={`${color} ${isVisible ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              ))}
            </div>

            <div className="relative z-10 bg-zinc-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 sm:p-12 neon-border">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-center">
                I am a final-year <span className="text-cyan-400 font-semibold">BTech CSE student</span> at{' '}
                <span className="text-cyan-400 font-semibold">Amity University Uttar Pradesh</span> (CGPA: 8.48).
                My expertise lies in <span className="gradient-text font-semibold">Cybersecurity</span>, <span className="gradient-text font-semibold">Vulnerability Assessment</span>, <span className="gradient-text font-semibold">Penetration Testing</span>, and <span className="gradient-text font-semibold">Cryptography</span>.
                I combine global certifications with hands-on projects and professional experiences to strengthen digital defenses.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {icons.map(({ Icon, color }, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-4 rounded-lg bg-zinc-800/50 border border-${color.split('-')[1]}-500/30 hover:scale-110 transition-transform duration-300`}>
                      <Icon size={48} className={color} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
