import { useEffect, useState, useRef } from 'react';
import { Sparkles, Target, Zap, Users } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Sparkles,
      title: 'Quick Learner',
      description: 'Adapts rapidly to new technologies and frameworks',
      color: 'emerald',
    },
    {
      icon: Target,
      title: 'Solution-Focused',
      description: 'Passionate about scalable tech solutions',
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Adaptable',
      description: 'Easily adjusts to new challenges and maintains high performance',
      color: 'teal',
    },
    {
      icon: Users,
      title: 'Team-Oriented',
      description: 'Works collaboratively to achieve shared goals through clear communication',
      color: 'emerald',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="glass-effect p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-300" />

              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                Self-driven Computer Science student with hands-on experience in{' '}
                <span className="text-emerald-400 font-semibold">
                  artificial intelligence
                </span>
                ,{' '}
                <span className="text-purple-400 font-semibold">
                  machine learning
                </span>
                , and{' '}
                <span className="text-teal-400 font-semibold">
                  cloud integration
                </span>
                . Quick learner and effective communicator, thriving in dynamic and
                fast-paced environments.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed mt-4 relative z-10">
                Demonstrated leadership as{' '}
                <span className="text-emerald-400 font-semibold">
                  NGC Club Creative member
                </span>{' '}
                and{' '}
                <span className="text-purple-400 font-semibold">
                  CSI Chapter monitor
                </span>
                , passionate about developing scalable tech solutions.
              </p>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`glass-effect p-6 rounded-xl hover:bg-${item.color}-500/10 transition-all duration-300 hover:scale-105 group`}
              >
                <div
                  className={`bg-${item.color}-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`text-${item.color}-400`} size={28} />
                </div>
                <h3 className="text-slate-200 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
