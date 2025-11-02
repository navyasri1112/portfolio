import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Vellore Institute of Technology, Amaravati',
      location: 'Amaravati, Andhra Pradesh',
      period: '2022 - 2026',
      score: 'CGPA: 8.16',
      coursework: ['DSA', 'OOPs', 'CN', 'DBMS', 'TOC', 'AI', 'ML', 'OS'],
      color: 'emerald',
    },
    {
      degree: 'Intermediate Education',
      institution: 'Sarada Educational Institution',
      location: 'Vijayawada, Andhra Pradesh',
      period: '2020 - 2022',
      score: 'Percentage: 83%',
      coursework: ['Mathematics', 'Physics', 'Chemistry'],
      color: 'purple',
    },
    {
      degree: 'Junior Secondary Education (10th)',
      institution: 'Narayana Olympiad',
      location: 'Vijayawada, Andhra Pradesh',
      period: '2019 - 2020',
      score: 'GPA: 10',
      coursework: ['Science', 'Mathematics', 'Social Studies'],
      color: 'teal',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Education
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-purple-400 to-teal-400 opacity-30" />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              } ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className="glass-effect p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                    <div
                      className={`absolute top-0 ${
                        index % 2 === 0 ? 'right-0' : 'left-0'
                      } w-32 h-32 bg-${edu.color}-500/10 rounded-full blur-2xl group-hover:bg-${
                        edu.color
                      }-500/20 transition-colors duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`bg-${edu.color}-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <GraduationCap className={`text-${edu.color}-400`} size={28} />
                        </div>
                        <div
                          className={`bg-${edu.color}-500/20 px-3 py-1 rounded-full text-${edu.color}-400 text-sm font-semibold`}
                        >
                          {edu.score}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-200 mb-2">
                        {edu.degree}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Award className="text-emerald-400" size={16} />
                          <span>{edu.institution}</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin className="text-purple-400" size={16} />
                          <span>{edu.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="text-teal-400" size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-slate-400 text-sm mb-2 font-semibold">
                          Key Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className={`bg-${edu.color}-500/10 text-${edu.color}-400 px-3 py-1 rounded-full text-xs border border-${edu.color}-500/20 hover:bg-${edu.color}-500/20 transition-colors duration-300`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-${edu.color}-500/20 border-4 border-slate-900 flex items-center justify-center animate-pulse`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-${edu.color}-400`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
