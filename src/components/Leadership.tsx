import { useEffect, useState, useRef } from 'react';
import { Users, Lightbulb, Calendar } from 'lucide-react';

const Leadership = () => {
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

  const roles = [
    {
      icon: Users,
      title: 'CSI Chapter VIT-AP',
      role: 'Machine Learning Monitor',
      period: 'August 2022 - July 2023',
      description:
        'Served as Machine Learning Monitor under CSI at VIT-AP, mentoring peers in applied ML concepts and projects.',
      responsibilities: [
        'Mentored students in ML algorithms and implementations',
        'Organized workshops on data science and ML',
        'Led project guidance sessions',
        'Facilitated peer learning environment',
      ],
      color: 'emerald',
    },
    {
      icon: Lightbulb,
      title: 'NGC Club VIT-AP',
      role: 'Creative Member',
      period: '2022 - 2023',
      description:
        'Contributed to designing engaging technical events, creating content, and driving student participation in cloud-based initiatives.',
      responsibilities: [
        'Designed engaging technical events',
        'Created promotional content and materials',
        'Drove student participation in cloud initiatives',
        'Collaborated with Microsoft Student Chapter',
      ],
      color: 'purple',
    },
  ];

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Leadership & Extra-Curricular
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`glass-effect p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-${role.color}-500/10 rounded-full blur-2xl group-hover:bg-${role.color}-500/20 transition-colors duration-300`}
              />
              <div
                className={`absolute bottom-0 left-0 w-32 h-32 bg-${role.color}-500/5 rounded-full blur-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`bg-${role.color}-500/20 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <role.icon className={`text-${role.color}-400`} size={28} />
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className={`text-${role.color}-400`} size={16} />
                    <span className={`text-${role.color}-400 text-sm font-semibold`}>
                      {role.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-200 mb-2">{role.title}</h3>

                <p className={`text-${role.color}-400 font-semibold mb-4`}>{role.role}</p>

                <p className="text-slate-400 mb-6 leading-relaxed">{role.description}</p>

                <div>
                  <p className="text-slate-300 font-semibold mb-3 text-sm">
                    KEY RESPONSIBILITIES:
                  </p>
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="text-slate-400 text-sm flex items-start gap-2"
                      >
                        <span
                          className={`w-1.5 h-1.5 bg-${role.color}-400 rounded-full mt-1.5 flex-shrink-0`}
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
