import { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Securing systems. Breaking barriers. Building trust.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 font-mono text-xs opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fadeIn ${2 + Math.random() * 3}s ease-in-out infinite`,
              }}
            >
              {Math.random().toString(2).substr(2, 8)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-orbitron font-black text-white cyber-glow mb-4">
            ADITYA BHATT
          </h1>
          <div className="h-12 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-rajdhani font-semibold text-cyan-400">
              Information Security Analyst | Vulnerability Assessment Specialist | Penetration Tester
            </h2>
          </div>
          <div className="h-16 mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono min-h-[2rem]">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/AdityaBhatt3010/Portfolio/blob/main/Aditya_Bhatt_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-cyan-500/20 border-2 border-cyan-400 text-cyan-400 rounded-lg font-rajdhani font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-border hover:bg-cyan-500/30"
            >
              <Download className="inline-block mr-2" size={20} />
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-rajdhani font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-green-500/20"
            >
              <Mail className="inline-block mr-2" size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
