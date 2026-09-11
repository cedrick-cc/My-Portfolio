import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const projects = [
  {
    title: 'Cinema Ticketing & Scheduling System',
    shortDescription: 'Ticketing and movie scheduling platform with smart seat management algorithms.',
    techStack: ['Java', 'Scheduling Algorithms', 'OOP Architecture'],
    githubUrl: 'https://github.com/cedrick-cc/Cinema-System',
    imageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Employment Management System',
    shortDescription: 'Role-based employee lifecycle platform with secure RBAC access control.',
    techStack: ['Spring Boot', 'React', 'PostgreSQL', 'RBAC'],
    githubUrl: 'https://github.com/cedrick-cc/Employment-Management-System',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'FoodWagen',
    shortDescription: 'Competition meal management interface with responsive UX and real-time order updates.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/cedrick-cc/Foodwagen-frontend',
    liveSiteUrl: 'https://foodwagen-frontend-git-main-cedricks-projects-15b73633.vercel.app',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'SFH Rwanda Outreach Monitoring System',
    shortDescription: 'Outreach monitoring system for health program coordination and reporting.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: '#',
    isComingSoon: true,
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'TaskFlow - Premium Task Management App',
    shortDescription: 'A modern to-do list application with glassmorphism UI and full-stack CRUD.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com/cedrick-cc/TO-DO-LIST.git',
    imageUrl:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/25 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="balanced" mood="vibrant" threeVariant="vibrantKnot" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header without redundant subtitle */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-50">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Image-Forward Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                className="card-premium-hover flex flex-col overflow-hidden group rounded-2xl border border-primary-800/30"
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                whileHover={{ y: -8 }}
              >
                {/* 100% Unblocked Top Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Subtle Top & Bottom Gradient Fades */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-black/20" />
                </div>

                {/* Bottom Anchored Liquid-Glass Details Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-dark-forest/40 backdrop-blur-xl">
                  <div>
                    <h3 className="text-xl font-bold text-gray-50 mb-2 group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="glass-pill px-3 py-1 text-xs rounded-full text-primary-300 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-primary-800/30">
                    {project.isComingSoon ? (
                      <span className="text-sm font-semibold text-amber-300 glass-pill px-4 py-2 rounded-xl">
                        In Development
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button-secondary px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-primary-200 flex items-center gap-1.5"
                      >
                        <GitBranch className="h-4 w-4 text-primary-400" />
                        <span>Code</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-primary-400" />
                      </a>
                    )}
                    {!project.isComingSoon && project.liveSiteUrl && (
                      <a
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button-primary px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
