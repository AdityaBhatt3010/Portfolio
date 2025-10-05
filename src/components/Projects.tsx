import { Code2, GitBranch } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'KeySentry',
      subtitle: 'API Key & Secret Leak Detector',
      tech: 'Python, TypeScript, Docker',
      description: 'Advanced security tool that scans codebases and repositories to detect exposed API keys, secrets, and sensitive credentials. Features automated scanning, real-time alerts, and comprehensive reporting.',
      color: 'cyan',
      link: 'https://github.com/AdityaBhatt3010/KeySentry',
    },
    {
      title: 'PixelPhantomX',
      subtitle: 'Ghost Image Generator',
      tech: 'Python',
      description: 'AI privacy protection tool that generates adversarial images to protect against facial recognition systems. Implements cutting-edge techniques to create ghost images that maintain visual quality while evading detection.',
      color: 'green',
      link: 'https://github.com/AdityaBhatt3010/PixelPhantomX',
    },
    {
      title: 'ShadowHash',
      subtitle: 'Cryptographic Suite',
      tech: 'Java, HTML/CSS/JS',
      description: 'Custom cryptographic implementation featuring the proprietary ShadowHash algorithm. Provides secure hashing, encryption, and key management capabilities with an intuitive web interface.',
      color: 'cyan',
      link: 'https://github.com/AdityaBhatt3010/ShadowHash-All-in-One-Crypto-Solution',
    },
    {
      title: 'AWS-ScriptEngine',
      subtitle: 'Cloud Automation Scripts',
      tech: 'Bash, PowerShell',
      description: 'Comprehensive collection of automation scripts for AWS infrastructure management. Streamlines deployment, monitoring, and maintenance tasks with robust error handling and logging.',
      color: 'green',
      link: 'https://github.com/AdityaBhatt3010/AWS-ScriptEngine-Engineered-Scripts-for-AWS-Operations',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            PROJECTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative h-80 cursor-pointer block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  perspective: '1000px',
                }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-zinc-900/80 backdrop-blur-sm border border-${project.color}-500/30 rounded-xl p-8 flex flex-col justify-center items-center neon-border`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Code2 className={`text-${project.color}-400 mb-4`} size={64} />
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-2 text-center">{project.title}</h3>
                    <p className={`text-lg text-${project.color}-400 font-rajdhani text-center`}>{project.subtitle}</p>
                    <div className="flex items-center mt-4 text-gray-400">
                      <GitBranch size={16} className="mr-2" />
                      <span className="text-sm">{project.tech}</span>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-zinc-900/95 backdrop-blur-sm border border-${project.color}-500/50 rounded-xl p-8 flex flex-col justify-center`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <h3 className={`text-2xl font-orbitron font-bold text-${project.color}-400 mb-4`}>{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400">
                        <span className="font-semibold">Tech Stack:</span> {project.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
