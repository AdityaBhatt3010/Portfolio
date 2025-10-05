import { Trophy, BookOpen, Target, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Achievements = () => {
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

  const achievements = [
    {
      icon: BookOpen,
      title: 'Published Author',
      description: 'Book chapter titled "Robotics and Cybersecurity Fundamentals: Understanding Robotics, Penetration Testing Tools and Attack Vectors" accepted for publication in Book "Robot Automation: Principle, Design and Applications" (CRC Press, Taylor & Francis, Scopus Indexed) on 11/02/2025',
      color: 'cyan',
      link: 'https://www.routledge.com/Robot-Automation-Principle-Design-and-Applications/Singh-Gehlot-Maini/p/book/9781032902036',
    },
    {
      icon: Trophy,
      title: 'Hacknovate 5.0 (2024)',
      description: 'Top 10 finalist in Offline Category',
      color: 'green',
      link: null,
    },
    {
      icon: Target,
      title: 'TryHackMe',
      description: 'Ranked in Global Top 2%',
      color: 'cyan',
      link: null,
    },
    {
      icon: Award,
      title: 'Technical Writer',
      description: 'Written cybersecurity and tech focused articles on Medium published in InfoSec WriteUps, OSINT Team, System Weakness, AWS in Plain English, AI in Plain English, Stackademic, Python in Plain English, JavaScript in Plain English, Cubed, Venture, GoPenAI among others.',
      color: 'green',
      link: null,
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            ACHIEVEMENTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const Component = achievement.link ? 'a' : 'div';
              const linkProps = achievement.link
                ? { href: achievement.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Component
                  key={index}
                  {...linkProps}
                  className={`relative bg-zinc-900/80 backdrop-blur-sm border border-${achievement.color}-500/30 rounded-xl p-8 hover:scale-105 transition-all duration-300 group block ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon size={128} className={`text-${achievement.color}-400`} />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg bg-${achievement.color}-500/10 border border-${achievement.color}-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`text-${achievement.color}-400 group-hover:cyber-glow`} size={32} />
                    </div>
                    <h3 className={`text-2xl font-orbitron font-bold text-${achievement.color}-400 mb-3 group-hover:cyber-glow transition-all duration-300`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${achievement.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </Component>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
