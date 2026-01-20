import { HiCode, HiExternalLink, HiGlobe } from 'react-icons/hi'
import { SiReact, SiSpring, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'Cinema Ticketing & Scheduling System',
      description:
        'A full-featured ticketing and movie scheduling system with an intuitive interface and efficient seat management algorithms. Built to handle complex scheduling requirements and provide seamless user experience for cinema operations.',
      techStack: ['Java'],
      githubUrl: 'https://github.com/cedrick-cc/Cinema-System',
      icon: HiCode,
      color: 'text-orange-500',
    },
    {
      title: 'Employment Management System',
      description:
        'A role-based employee management platform integrating secure authentication and lifecycle management. Features comprehensive user management, role-based access control, and streamlined HR operations.',
      techStack: ['Spring Boot', 'React'],
      githubUrl: 'https://github.com/cedrick-cc/Employment-Management-System',
      icon: SiReact,
      color: 'text-cyan-400',
    },
    {
      title: 'FoodWagen',
      description:
        'A competition meal management platform with real-time CRUD operations. Features pixel-perfect Figma implementation, advanced search with debounce, responsive grid layouts, and a complete modal system. Built with production-optimized Next.js architecture.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/cedrick-cc/Foodwagen-frontend',
      liveSiteUrl: 'https://foodwagen-frontend-git-main-cedricks-projects-15b73633.vercel.app',
      icon: SiNextdotjs,
      color: 'text-gray-300',
    },
    {
      title: 'SFH Rwanda Outreach Monitoring System',
      description:
        'A comprehensive digital platform designed to streamline community health outreach programs for Society for Family Health Rwanda. Enables centralized tracking and monitoring of outreach activities, volunteer management, beneficiary linkage, and advanced reporting with geographical coverage analytics and participation metrics.',
      techStack: ['In Development'],
      githubUrl: '#',
      icon: HiCode,
      color: 'text-primary-400',
      isComingSoon: true,
    },
  ]

  const getTechIcon = (tech) => {
    const techIcons = {
      Java: HiCode,
      'Spring Boot': SiSpring,
      React: SiReact,
      'Next.js': SiNextdotjs,
      TypeScript: SiTypescript,
      'Tailwind CSS': SiTailwindcss,
    }
    return techIcons[tech] || HiCode
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Production-ready applications showcasing full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const MainIcon = project.icon
            return (
              <div
                key={index}
                className="group card-premium-hover p-10 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-900/40 to-primary-800/20 border border-primary-700/30 group-hover:border-primary-600/50 transition-all duration-300 group-hover:scale-110">
                      <MainIcon className={`w-8 h-8 ${project.color}`} />
                    </div>
                    {project.isComingSoon && (
                      <span className="px-3 py-1.5 text-xs font-bold text-amber-400 bg-amber-900/30 border border-amber-700/30 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {!project.isComingSoon && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <HiExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-gray-50 mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech)
                    return (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 text-sm text-gray-300 border border-gray-700/50 hover:border-primary-600/30 transition-all duration-300 group/tech"
                      >
                        <TechIcon className="w-4 h-4 group-hover/tech:scale-110 transition-transform" />
                        <span className="font-medium">{tech}</span>
                      </span>
                    )
                  })}
                </div>

                {project.isComingSoon ? (
                  <div className="text-gray-400 text-sm font-medium italic">
                    Project in development - Stay tuned!
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 group/link"
                    >
                      <HiCode className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      <span>View on GitHub</span>
                      <HiExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </a>
                    {project.liveSiteUrl && (
                      <a
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 hover:bg-primary-600/20 border border-primary-600/30 hover:border-primary-600/50 text-primary-400 hover:text-primary-300 font-semibold rounded-lg transition-all duration-300 group/live"
                      >
                        <HiGlobe className="w-5 h-5 group-hover/live:scale-110 transition-transform" />
                        <span>View Live Site</span>
                        <HiExternalLink className="w-4 h-4 opacity-0 group-hover/live:opacity-100 group-hover/live:translate-x-1 transition-all" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

