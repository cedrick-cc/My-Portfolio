import { motion } from 'framer-motion'
import { BriefcaseBusiness, Calendar, ChevronRight, MapPin, Plane, ShieldCheck, Globe, GraduationCap } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const experiences = [
  {
    title: 'IT / RISE Graduate Development Programme',
    company: 'RwandAir',
    location: 'Kigali, Rwanda',
    period: 'June 2026 - Present',
    logo: Plane,
    logoBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    responsibilities: [
      'Rotating across key aviation IT divisions including Infrastructure, DevOps, and Corporate Applications to support global airline systems and flight-critical tech operations.',
      'Monitoring network traffic and system health across regional outstations, identifying performance lags and room for infrastructural optimization to ensure zero system downtime.',
      'Collaborating with senior engineers to build, automate, and secure internal deployment pipelines, transitioning manual processes into fast, scalable workflows.',
      'Troubleshooting specialized aviation software and network issues, ensuring core enterprise systems stay synchronized and run without interruption.',
    ],
  },
  {
    title: 'IT Systems Support & Implementation Associate',
    company: 'DIRECA',
    location: 'Kigali, Rwanda',
    period: 'February 2026 - May 2026',
    logo: ShieldCheck,
    logoBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    responsibilities: [
      'Perform functional testing of organizational software systems to identify bugs, usability issues, and performance gaps before deployment.',
      'Document and report system issues to the development team, contributing to continuous improvement and system reliability.',
      'Acquire in-depth knowledge of the platform architecture and workflows to effectively support troubleshooting and user guidance.',
      'Participate in system demonstrations and onboarding sessions with partner organizations, explaining system features, workflows, and operational benefits.',
      'Assist organizations during initial adoption by providing technical guidance and answering operational questions about the platform.',
      'Collaborate with developers and internal teams to ensure feedback from field usage is incorporated into system improvements.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Career Access Africa',
    location: 'Kigali, Rwanda',
    period: 'July 2025 - October 2025',
    logo: Globe,
    logoBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    responsibilities: [
      'Developed and enhanced full-stack applications using modern web technologies, integrating dynamic front-end interfaces with efficient and secure back-end services.',
      'Collaborated with cross-functional teams to design scalable solutions that improved platform performance and user engagement.',
      'Implemented RESTful APIs and database models, ensuring seamless data flow between front-end and back-end systems.',
      'Participated in code reviews, debugging, and version control (Git) to maintain clean, maintainable, and production-ready code.',
    ],
  },
  {
    title: 'Library Operation Assistant',
    company: 'Adventist University Of Central Africa',
    location: 'Kigali, Rwanda',
    period: 'April 2024 - June 2026',
    logo: GraduationCap,
    logoBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    responsibilities: [
      'Assist in organizing and managing digital resource systems, improving data accessibility and reliability for over 200 users monthly.',
      'Apply technical and analytical skills to streamline library workflows through structured data handling and process optimization.',
      'Collaborate with staff to enhance system efficiency and user support, demonstrating adaptability and a proactive approach to technology-driven operations.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/30 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="right" mood="soft" threeVariant="ribbonRing" />
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-50">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Career progression across aviation systems, software engineering, and IT infrastructure
          </p>
        </motion.div>

        {/* Engineering Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-700 transform md:-translate-x-1/2 rounded-full opacity-60" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const LogoIcon = exp.logo
              return (
                <motion.div
                  key={exp.company + index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start md:items-center`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  {/* Timeline Pulse Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-4 border-dark-base transform md:-translate-x-1/2 z-10 shadow-xl shadow-primary-500/50 animate-pulse" />

                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                    }`}
                  >
                    <div className="card-premium-hover p-7 md:p-8 relative group">
                      
                      {/* Header info */}
                      <div className="flex flex-col gap-3 mb-5">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-mono font-bold text-primary-300 glass-pill px-3 py-1 rounded-full flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary-400" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-primary-400" />
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-gray-100 group-hover:text-primary-300 transition-colors">
                          {exp.title}
                        </h3>

                        {/* Company Logo + Name */}
                        <div className="flex items-center gap-2.5 pt-1">
                          <div className={`p-2 rounded-xl border flex items-center justify-center shadow-md ${exp.logoBg}`}>
                            <LogoIcon className="w-5 h-5" />
                          </div>
                          <span className="font-extrabold text-lg text-primary-300">
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3 pt-3 border-t border-primary-700/25">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2.5">
                            <ChevronRight className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
