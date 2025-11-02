import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-emerald-950 to-purple-950 min-h-screen overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <ParticleBackground />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      <footer className="relative z-10 bg-slate-950/80 backdrop-blur-md border-t border-emerald-500/20 py-8 text-center">
        <p className="text-slate-400">
          &copy; 2025 Kolli Navya Sri. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
