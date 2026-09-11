import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Server, ShieldCheck, Terminal, CheckCircle2, Activity } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const DevOpsProjects = () => {
  const projects = [
    {
      title: 'Linux Server Administration & Automation',
      stack: 'Linux (Ubuntu) • Bash Scripting • Systemd',
      highlights: [
        'Performed Linux server setup, user and permission management, package installation, and service configuration in a CLI environment.',
        'Wrote Bash scripts to automate administrative tasks, cron jobs, and system operations.',
      ],
      evidenceLabel: 'Sample Walkthroughs',
      evidenceUrl:
        'https://drive.google.com/drive/folders/1QLnYGwIsmYzTaWy6bcfc1tokQoIScYVv?usp=sharing',
      icon: Server,
    },
    {
      title: 'Secure Linux Web Server & Network Defence Implementation',
      stack: 'Linux (Ubuntu) • Apache2 • Suricata IDS • UFW & IPTables • SSH',
      highlights: [
        'Deployed custom Apache2 web server with virtual hosts and service management on non-default ports.',
        'Implemented intrusion detection using Suricata with custom rules for SSH brute-force and network scans.',
        'Secured server using UFW/IPTables firewalls, SSH hardening, and validated security through attack simulations and log analysis.',
      ],
      evidenceLabel: 'Sample Walkthroughs',
      evidenceUrl:
        'https://drive.google.com/drive/folders/1rJit4ZEENSfY-MdGqWRmTHWwoMZK24LA?usp=sharing',
      icon: ShieldCheck,
    },
    {
      title: 'Linux Infrastructure, Containerization & Load Balancing with Traefik',
      stack: 'Linux • Docker & Compose • Traefik • Nginx • MySQL • ModSecurity WAF',
      highlights: [
        'Configured network interfaces, static/dynamic web apps on Apache2/Nginx with HTTPS, WAF (ModSecurity), and firewall security rules.',
        'Built containerized microservices with Docker Compose, separating frontend and database layers in Linux.',
        'Implemented Traefik reverse proxy & load balancer with automated SSL certificates and container traffic routing.',
      ],
      evidenceLabel: 'Sample Walkthroughs',
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
        
        {/* Single clean section description */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-50">
            DevOps &amp; <span className="text-gradient">Linux Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Hands-on Linux, security, containerization, deployment, and monitoring projects built through practical engineering labs.
          </p>
        </motion.div>

        {/* Engineering System Cards Grid */}
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
                className="card-premium-hover p-8 relative flex flex-col justify-between group"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.03 } },
                }}
                whileHover={{ y: -6 }}
              >
                <div>
                  {/* Top Bar: Icon + Live Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl glass-pill bg-primary-900/30 text-primary-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="glass-pill px-3 py-1 rounded-full text-xs font-mono text-primary-300 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-primary-400 animate-pulse" />
                      <span>LAB VERIFIED</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-100 mb-3 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-semibold text-primary-300 mb-5 glass-pill px-3 py-1.5 rounded-lg inline-block">
                    {project.stack}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2.5">
                        <Terminal className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Walkthrough Action */}
                <div className="pt-5 border-t border-primary-800/35 flex items-center justify-between">
                  <a
                    href={project.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full glass-button-secondary py-3 px-5 rounded-xl font-bold text-sm text-primary-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Sample Walkthroughs</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
