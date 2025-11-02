import { Github, Linkedin, Code, Mail, Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`mb-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="inline-block relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-purple-500 p-1 animate-rotate-slow">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">NS</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-emerald-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="gradient-text glow-green">KOLLI NAVYA SRI</span>
          </h1>

          <p
            className={`text-2xl md:text-3xl text-slate-300 mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            Computer Science & Engineering
          </p>

          <p
            className={`text-xl text-emerald-400 mb-8 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            Full Stack Developer | AI/ML Enthusiast | Cloud Integration Specialist
          </p>

          <div
            className={`flex justify-center gap-6 mb-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            <a
              href="mailto:navyasri9292@gmail.com"
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105"
            >
              <Mail className="text-emerald-400" size={20} />
              <span className="text-slate-300">navyasri9292@gmail.com</span>
            </a>
            <a
              href="tel:+919493368919"
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="text-purple-400" size={20} />
              <span className="text-slate-300">+91-9493368919</span>
            </a>
          </div>

          <div
            className={`flex justify-center gap-6 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '1s' }}
          >
            <a
              href="https://www.linkedin.com/in/navya-sri-11dec2004"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 animate-glow"
            >
              <Linkedin className="text-emerald-400" size={28} />
            </a>
            <a
              href="https://github.com/navyasri1112"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 animate-glow"
            >
              <Github className="text-purple-400" size={28} />
            </a>
            <a
              href="https://leetcode.com/u/kolli_navyasri/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-teal-500/20 transition-all duration-300 hover:scale-110 animate-glow"
            >
              <Code className="text-teal-400" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-emerald-400" size={36} />
      </div>
    </section>
  );
};

export default Hero;
