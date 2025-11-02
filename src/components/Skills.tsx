import { useEffect, useState, useRef } from 'react';
import { Code, Database, Wrench, Cloud, Brain, Globe } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Brain,
      title: 'Coursework',
      color: 'emerald',
      skills: [
        { name: 'DSA', level: 90 },
        { name: 'OOPs', level: 85 },
        { name: 'CN', level: 80 },
        { name: 'DBMS', level: 85 },
        { name: 'TOC', level: 75 },
        { name: 'AI', level: 88 },
        { name: 'ML', level: 90 },
        { name: 'OS', level: 82 },
      ],
    },
    {
      icon: Code,
      title: 'Languages',
      color: 'purple',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'Java', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 86 },
        { name: 'TypeScript', level: 82 },
      ],
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      color: 'teal',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Eclipse', level: 80 },
        { name: 'Android Studio', level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: 'Technologies',
      color: 'emerald',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Next.js', level: 82 },
        { name: 'Linux', level: 85 },
        { name: 'WordPress', level: 78 },
      ],
    },
    {
      icon: Database,
      title: 'Data Science & ML',
      color: 'purple',
      skills: [
        { name: 'ML Algorithms', level: 90 },
        { name: 'Model Evaluation', level: 85 },
        { name: 'Data Handling', level: 88 },
        { name: 'GenAI', level: 80 },
      ],
    },
    {
      icon: Globe,
      title: 'Languages',
      color: 'teal',
      skills: [
        { name: 'Telugu (Native)', level: 100 },
        { name: 'English (Fluent)', level: 95 },
        { name: 'Hindi (Intermediate)', level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-500 group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`bg-${category.color}-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className={`text-${category.color}-400`} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-${category.color}-400 text-sm font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 rounded-full transition-all duration-1000 ease-out group-hover/skill:scale-x-105 origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.5 + i * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
