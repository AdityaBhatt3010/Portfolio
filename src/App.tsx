import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Trainings from './components/Trainings';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'education', 'certifications', 'experience', 'projects', 'achievements', 'trainings', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-gray-300 font-sans">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Achievements />
      <Trainings />
      <Contact />
    </div>
  );
}

export default App;
