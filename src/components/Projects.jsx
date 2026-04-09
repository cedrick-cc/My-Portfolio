import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const Projects = () => {
  const projects = [
    {
      title: 'Cinema Ticketing & Scheduling System',
      shortDescription: 'Ticketing and movie scheduling platform with smart seat management.',
      techStack: ['Java', 'Scheduling', 'Algorithms'],
      githubUrl: 'https://github.com/cedrick-cc/Cinema-System',
      imageUrl:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Employment Management System',
      shortDescription: 'Role-based employee lifecycle platform with secure access control.',
      techStack: ['Spring Boot', 'React', 'RBAC'],
      githubUrl: 'https://github.com/cedrick-cc/Employment-Management-System',
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'FoodWagen',
      shortDescription: 'Competition meal management interface with responsive UX and real-time updates.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/cedrick-cc/Foodwagen-frontend',
      liveSiteUrl: 'https://foodwagen-frontend-git-main-cedricks-projects-15b73633.vercel.app',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'SFH Rwanda Outreach Monitoring System',
      shortDescription: 'Outreach monitoring system for health program coordination and reporting.',
      techStack: ['In Development'],
      githubUrl: '#',
      isComingSoon: true,
      imageUrl:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'TaskFlow - Premium Task Management App',
      shortDescription:
        'A modern to-do list application with glassmorphism UI and full-stack CRUD.',
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/cedrick-cc/TO-DO-LIST.git',
      imageUrl:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/25 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="balanced" mood="vibrant" threeVariant="vibrantKnot" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Interactive builds with strong engineering foundations
          </p>
        </motion.div>

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
                className="group relative overflow-hidden rounded-2xl border border-primary-800/30 bg-dark-forest/20 min-h-[420px]"
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-base/10 via-dark-base/50 to-dark-base/95" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.3),transparent_55%)]" />
                </div>

                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <div className="rounded-xl border border-primary-700/35 bg-dark-base/45 backdrop-blur-md p-5 shadow-xl shadow-primary-950/70 transition-all duration-500 group-hover:border-primary-500/45 group-hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-gray-50 mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-primary-700/35 text-primary-200 bg-primary-700/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.isComingSoon ? (
                        <span className="text-sm font-semibold text-amber-300">Coming Soon</span>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-primary-500/20 text-primary-100 border border-primary-500/40 hover:bg-primary-500/30 transition-all duration-300"
                        >
                          <GitBranch className="h-4 w-4" />
                          <span>View Project</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                      {!project.isComingSoon && project.liveSiteUrl && (
                        <a
                          href={project.liveSiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-primary-500/20 text-primary-100 border border-primary-500/40 hover:bg-primary-500/30 transition-all duration-300"
                        >
                          <GitBranch className="h-4 w-4" />
                          Live Site
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
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

