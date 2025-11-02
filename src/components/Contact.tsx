import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'navyasri9292@gmail.com',
      link: 'mailto:navyasri9292@gmail.com',
      color: 'emerald',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9493368919',
      link: 'tel:+919493368919',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vijayawada, Andhra Pradesh',
      link: '#',
      color: 'teal',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/navya-sri-11dec2004',
      color: 'emerald',
    },
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/navyasri1112',
      color: 'purple',
    },
    {
      icon: Code,
      name: 'LeetCode',
      link: 'https://leetcode.com/u/kolli_navyasri/',
      color: 'teal',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
          <p
            className={`text-slate-400 mt-6 text-lg ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            Let's collaborate on exciting projects and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="glass-effect p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
                >
                  <div
                    className={`bg-${info.color}-500/20 p-4 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <info.icon className={`text-${info.color}-400`} size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-slate-200 font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div
              className={`mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <p className="text-slate-400 mb-4 text-center">Connect with me on:</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-effect p-4 rounded-full hover:bg-${social.color}-500/20 transition-all duration-300 hover:scale-110 group`}
                  >
                    <social.icon
                      className={`text-${social.color}-400 group-hover:scale-110 transition-transform duration-300`}
                      size={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`glass-effect p-8 rounded-2xl ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

              <div className="relative z-10 text-center py-12">
                <div className="mb-6">
                  <Send className="text-emerald-400 mx-auto animate-bounce-slow" size={64} />
                </div>

                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Ready to Collaborate?
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <a
                  href="mailto:navyasri9292@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-purple-500 px-8 py-4 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 animate-glow"
                >
                  <Mail size={20} />
                  navyasri9292@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
