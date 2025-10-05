import { Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
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

  const certifications = [
    { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', color: 'cyan' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', color: 'green' },
    { name: 'Red Team Program', issuer: 'IIT Kanpur', color: 'cyan' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', color: 'green' },
    { name: 'Qualys Web App Scanning', issuer: 'Qualys', color: 'cyan' },
    { name: 'Ethical Hacking Essentials', issuer: 'Cisco NetAcad', color: 'green' },
    { name: 'Networking Basics', issuer: 'Cisco NetAcad', color: 'cyan' },
    { name: 'Endpoint Security', issuer: 'Cisco NetAcad', color: 'green' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco NetAcad', color: 'cyan' },
    { name: 'Postman API Fundamentals', issuer: 'Postman', color: 'green' },
    { name: 'Introduction to Cryptography', issuer: 'NPTEL', color: 'cyan' },
    { name: 'Network Security', issuer: 'NPTEL', color: 'green' },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            CERTIFICATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-zinc-900/50 backdrop-blur-sm border border-${cert.color}-500/30 rounded-xl p-6 hover:scale-105 hover:border-${cert.color}-500/70 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className={`text-${cert.color}-400 group-hover:cyber-glow transition-all duration-300`} size={32} />
                  <div className={`w-3 h-3 rounded-full bg-${cert.color}-500 pulse-glow`}></div>
                </div>
                <h3 className="text-lg font-rajdhani font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className={`text-sm text-${cert.color}-400`}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
