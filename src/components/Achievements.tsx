import { useEffect, useState, useRef } from 'react';
import { Trophy, Medal, Star, Target } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      icon: Trophy,
      title: 'CODE STORM - 20th Position',
      description:
        'Secured 20th position nationwide in CODE STORM coding event by SCOPE, NextGen Cloud Club, and Microsoft Student Chapter at VIT-AP University.',
      color: 'emerald',
    },
    {
      icon: Star,
      title: 'Team Leadership & Mentoring',
      description:
        'Led team initiatives and mentored juniors in debugging and project building, fostering collaborative learning environment.',
      color: 'purple',
    },
    {
      icon: Medal,
      title: 'HackerRank SQL Certification',
      description:
        'Earned HackerRank Certificate in SQL, demonstrating proficiency in database queries and data manipulation.',
      color: 'teal',
    },
    {
      icon: Target,
      title: 'AWS Cloud Badges',
      description:
        'Verified and earned badges in AWS Cloud Foundation and AWS Cloud Architecture, showcasing cloud computing expertise.',
      color: 'emerald',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Achievements
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-effect p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-${achievement.color}-500/10 rounded-full blur-2xl group-hover:bg-${achievement.color}-500/20 transition-colors duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`bg-${achievement.color}-500/20 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <achievement.icon
                    className={`text-${achievement.color}-400`}
                    size={32}
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-200 mb-3">
                  {achievement.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
