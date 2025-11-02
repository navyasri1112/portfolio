import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Brain, Hand, Car, ShoppingCart, ListTodo, Store } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      icon: Brain,
      title: 'Intelligent Vehicle Damage Assessment',
      description:
        'AI-powered system using hybrid CNN (ResNet-50 + DenseNet-169) to detect vehicle damage, classify severity, and estimate repair costs for insurance companies.',
      tech: ['Python', 'Deep Learning', 'CNN', 'Image Processing'],
      highlights: [
        'Hybrid CNN approach for 95%+ accuracy',
        'Real-world dataset integration',
        'Cost estimation algorithm',
      ],
      link: 'https://drive.google.com/file/d/1OIk51Un9xcmb4NQwEhFvKfFnEA_PDVz8/view',
      color: 'emerald',
    },
    {
      icon: Hand,
      title: 'Hand Gesture Calculator',
      description:
        'Touchless calculator using OpenCV and MediaPipe that performs arithmetic operations through real-time hand gesture recognition.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      highlights: [
        'Real-time gesture recognition',
        'Low-latency performance',
        'Intuitive touchless interface',
      ],
      link: 'https://www.linkedin.com/posts/navya-sri-11dec2004_ai-powered-voice-gesture-calculator-built-activity-7344025650086760451-nbpM?utm_source=social_share_send&utm_medium=member_desktop_web',
      color: 'purple',
    },
    {
      icon: Car,
      title: 'Smart Parking System',
      description:
        'Web-based application streamlining parking slot booking and management with responsive UI and real-time availability tracking.',
      tech: ['React.js', 'TypeScript', 'JavaScript', 'Vite', 'GitHub Pages'],
      highlights: [
        'Real-time slot management',
        'Responsive design',
        'Optimized frontend performance',
      ],
      link: 'https://navyasri1112.github.io/smart-parking/',
      color: 'teal',
    },
    {
      icon: ListTodo,
      title: 'Smart Task Planner',
      description:
        'AI-driven task planning system converting user goals into actionable subtasks with estimated timelines using LLM reasoning.',
      tech: ['React.js', 'Node.js', 'Express.js', 'OpenAI API', 'MongoDB'],
      highlights: [
        'AI-powered task breakdown',
        'Timeline visualization',
        'Progress tracking dashboard',
      ],
      link: 'https://navyasri1112.github.io/smart-task-planner/',
      color: 'emerald',
    },
    {
      icon: Store,
      title: 'Full Stack E-commerce Platform',
      description:
        'Scalable MERN stack e-commerce platform with product search, shopping cart, admin panel, and multiple payment gateways.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      highlights: [
        'Multiple payment gateways (Stripe, Razorpay, COD)',
        'Role-based access control',
        'CI/CD pipeline deployment',
      ],
      link: 'https://ecommerce-frontend-six-sable.vercel.app/',
      color: 'purple',
    },
    {
      icon: ShoppingCart,
      title: 'Automating Shopping Cart System',
      description:
        'Smart shopping cart using Arduino, RFID, and NodeMCU to automate billing with real-time product detection and mobile app integration.',
      tech: ['Arduino', 'RFID', 'NodeMCU', 'IoT', 'Mobile App'],
      highlights: [
        'Real-time product detection',
        'Digital billing automation',
        'Eliminated checkout queues',
      ],
      link: '#',
      color: 'teal',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0'
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-2xl relative overflow-hidden group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                transform:
                  hoveredIndex === index ? 'translateY(-10px) rotateX(5deg)' : '',
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}-500/10 rounded-full blur-2xl group-hover:bg-${project.color}-500/20 transition-colors duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`bg-${project.color}-500/20 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <project.icon className={`text-${project.color}-400`} size={28} />
                  </div>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-${project.color}-500/20 p-2 rounded-lg hover:bg-${project.color}-500/30 transition-colors duration-300`}
                    >
                      <ExternalLink className={`text-${project.color}-400`} size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-200 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-slate-500 text-xs font-semibold mb-2">
                    KEY HIGHLIGHTS:
                  </p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`text-${project.color}-400 text-xs flex items-center gap-2`}
                      >
                        <span className="w-1.5 h-1.5 bg-current rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`bg-${project.color}-500/10 text-${project.color}-400 px-3 py-1 rounded-full text-xs border border-${project.color}-500/20 hover:bg-${project.color}-500/20 transition-colors duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
