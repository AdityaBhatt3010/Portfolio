import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      category: 'Cybersecurity Expertise',
      skills: ['VAPT', 'App Scanning', 'Cryptography', 'Network Security'],
      color: 'cyan',
    },
    {
      category: 'Scripting',
      skills: ['Bash', 'PowerShell'],
      color: 'green',
    },
    {
      category: 'Programming',
      skills: ['Java', 'Python', 'C', 'C++'],
      color: 'cyan',
    },
    {
      category: 'Cloud',
      skills: ['AWS'],
      color: 'green',
    },
    {
      category: 'Database',
      skills: ['MySQL', 'Oracle SQL'],
      color: 'cyan',
    },
    {
      category: 'Tools & Technologies',
      skills: ['GitHub', 'Docker'],
      color: 'green',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            SKILLS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-zinc-900/50 backdrop-blur-sm border border-${category.color}-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-2xl font-rajdhani font-bold text-${category.color}-400 mb-4 group-hover:cyber-glow transition-all duration-300`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 bg-${category.color}-500/10 border border-${category.color}-500/50 text-${category.color}-300 rounded-lg text-sm font-medium hover:bg-${category.color}-500/20 transition-all duration-300 hover-glitch`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
