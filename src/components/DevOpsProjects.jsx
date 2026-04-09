import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Server, ShieldCheck, TerminalSquare } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const DevOpsProjects = () => {
  const projects = [
    {
      title: 'Linux Server Administration & Automation',
      stack: 'Linux (Ubuntu), Bash Scripting',
      highlights: [
        'Performed Linux server setup, user and permission management, package installation, and service configuration in a command-line environment',
        'Wrote Bash scripts to automate administrative tasks and system operations',
      ],
      evidenceLabel: 'Bash scripting videos',
      evidenceUrl:
        'https://drive.google.com/drive/folders/1QLnYGwIsmYzTaWy6bcfc1tokQoIScYVv?usp=sharing',
      icon: Server,
    },
    {
      title: 'Secure Linux Web Server & Network Defence Implementation',
      stack: 'Linux (Ubuntu) | Apache2 | Suricata IDS | UFW & IPTables | SSH',
      highlights: [
        'Deployed and hosted a custom Apache2 web server on Linux, including virtual host configuration and service management on non-default ports',
        'Implemented intrusion detection using Suricata, creating and testing custom security rules for SSH brute-force attempts and network scans',
        'Secured the server using UFW and IPTables firewall rules, restricted SSH access, and validated security through live attack simulations and log analysis',
      ],
      evidenceLabel: 'Secure Web Server – videos, logs & documentation',
      evidenceUrl:
        'https://drive.google.com/drive/folders/1rJit4ZEENSfY-MdGqWRmTHWwoMZK24LA?usp=sharing',
      icon: ShieldCheck,
    },
    {
      title: 'Linux Infrastructure, Containerization & Load Balancing with Traefik',
      stack: 'Linux (Ubuntu) | Apache2 | Nginx | Docker | Traefik | MySQL | UFW | ModSecurity',
      highlights: [
        'Configured Linux network interfaces, hosted static and dynamic web applications using Apache2 and Nginx, and implemented HTTPS, WAF (ModSecurity), and firewall rules to secure services',
        'Built and deployed containerized web applications using Docker and Docker Compose, separating frontend and database services in a Linux environment',
        'Implemented Traefik as a reverse proxy and load balancer, enabling HTTPS with automated certificates and managing traffic routing across containerized services',
      ],
      evidenceLabel: 'Linux Infrastructure – videos & documentation',
      evidenceUrl:
        'https://drive.google.com/drive/folders/1XZ0bF-HHPjB8MLALSFVy6SshPn6KFBjH?usp=sharing',
      icon: Cpu,
    },
  ]

  return (
    <section
      id="devops-projects"
      className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/30 to-dark-base relative overflow-hidden"
    >
      <SectionFloatingObjects placement="balanced" mood="techy" threeVariant="techCube" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            DevOps &amp; <span className="text-gradient">Linux Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Hands-on Linux, security, and containerization projects with real deployment and
            monitoring evidence
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                className="card-premium-hover p-8"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.03 } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-900/40 to-primary-800/20 border border-primary-700/30">
                      <Icon className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-50 mb-3">{project.title}</h3>
                <p className="text-sm font-semibold text-primary-300 mb-4">{project.stack}</p>

                <ul className="space-y-3 mb-5">
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <TerminalSquare className="w-4 h-4 text-primary-500 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-primary-800/35">
                  <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
                    Project Evidence
                  </p>
                  <a
                    href={project.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-primary-500/20 text-primary-100 border border-primary-500/40 hover:bg-primary-500/30 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{project.evidenceLabel}</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default DevOpsProjects

