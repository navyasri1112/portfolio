import { useEffect, useState, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'AWS Cloud Partitioner',
      issuer: 'Amazon Web Services',
      date: 'June 2025',
      link: '#',
      color: 'emerald',
    },
    {
      title: 'Azure AI-900 Fundamentals',
      issuer: 'Microsoft',
      date: 'July 2024',
      link: '#',
      color: 'purple',
    },
    {
      title: 'Oracle Cloud Generative AI Professional',
      issuer: 'Oracle',
      date: 'July 2025',
      link: '#',
      color: 'teal',
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft & LinkedIn',
      date: 'Sept 2024',
      link: '#',
      color: 'emerald',
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Certifications
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-${cert.color}-500/10 rounded-full blur-2xl group-hover:bg-${cert.color}-500/20 transition-colors duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`bg-${cert.color}-500/20 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <Award className={`text-${cert.color}-400`} size={24} />
                  </div>
                  {cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-${cert.color}-500/20 p-2 rounded-lg hover:bg-${cert.color}-500/30 transition-colors duration-300`}
                    >
                      <ExternalLink className={`text-${cert.color}-400`} size={18} />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-200 mb-2">{cert.title}</h3>

                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2">
                  <Calendar className={`text-${cert.color}-400`} size={16} />
                  <span className={`text-${cert.color}-400 text-sm font-semibold`}>
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
