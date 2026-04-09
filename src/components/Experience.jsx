import { motion } from 'framer-motion'
import { BriefcaseBusiness, Calendar, ChevronRight, MapPin } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const Experience = () => {
  const experiences = [
    {
      title: 'IT Systems Support & Implementation Associate',
      company: 'DIRECA',
      location: 'Kigali, Rwanda',
      period: '2026 - Present',
      responsibilities: [
        'Perform functional testing of organizational software systems to identify bugs, usability issues, and performance gaps before deployment',
        'Document and report system issues to the development team, contributing to continuous improvement and system reliability',
        'Acquire in-depth knowledge of the platform architecture and workflows to effectively support troubleshooting and user guidance',
        'Participate in system demonstrations and onboarding sessions with partner organizations, explaining system features, workflows, and operational benefits',
        'Assist organizations during initial adoption by providing technical guidance and answering operational questions about the platform',
        'Collaborate with developers and internal teams to ensure feedback from field usage is incorporated into system improvements',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Career Access Africa',
      location: 'Kigali, Rwanda',
      period: 'July 2025 - October 2025',
      responsibilities: [
        'Developed and enhanced full-stack applications using modern web technologies, integrating dynamic front-end interfaces with efficient and secure back-end services',
        'Collaborated with cross-functional teams to design scalable solutions that improved platform performance and user engagement',
        'Implemented RESTful APIs and database models, ensuring seamless data flow between front-end and back-end systems',
        'Participated in code reviews, debugging, and version control (Git) to maintain clean, maintainable, and production-ready code',
      ],
    },
    {
      title: 'Library Operation Assistant',
      company: 'Adventist University Of Central Africa',
      location: 'Kigali, Rwanda',
      period: 'April 2024 - Present',
      responsibilities: [
        'Assist in organizing and managing digital resource systems, improving data accessibility and reliability for over 200 users monthly',
        'Apply technical and analytical skills to streamline library workflows through structured data handling and process optimization',
        'Collaborate with staff to enhance system efficiency and user support, demonstrating adaptability and a proactive approach to technology-driven operations',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/30 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="right" mood="soft" threeVariant="ribbonRing" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl font-light">
            Building scalable solutions and driving technical excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600/70 via-primary-500 to-primary-600/70 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-br from-primary-400 to-primary-700 rounded-full border-4 border-dark-base transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary-500/45" />

                <div
                  className={`ml-14 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div className="card-premium-hover p-8" whileHover={{ y: -4 }}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-300 mb-1 group-hover:text-primary-200 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-300">
                          <span className="font-bold text-lg inline-flex items-center gap-2">
                            <BriefcaseBusiness className="w-4 h-4 text-primary-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-gray-400">
                            <MapPin className="w-4 h-4 text-primary-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 font-semibold bg-gradient-to-r from-primary-900/35 to-primary-800/20 border border-primary-700/30 px-4 py-1.5 rounded-full mt-2 sm:mt-0 inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary-300" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-base leading-relaxed flex items-start gap-3 group/item"
                        >
                          <ChevronRight className="w-4 h-4 mt-1.5 text-primary-500 group-hover/item:scale-110 transition-transform" />
                          <span className="font-light">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

