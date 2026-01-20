import { HiCalendar, HiLocationMarker } from 'react-icons/hi'

const Experience = () => {
  const experiences = [
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
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl font-light">
            Building scalable solutions and driving technical excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary-500/50" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 animate-fade-in-up ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="card-premium-hover p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-400 mb-1 group-hover:text-primary-300 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-300">
                          <span className="font-bold text-lg">{exp.company}</span>
                          <span className="flex items-center gap-1.5 text-sm text-gray-400">
                            <HiLocationMarker className="w-4 h-4 text-primary-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 font-semibold bg-gradient-to-r from-primary-900/40 to-primary-800/20 border border-primary-700/30 px-4 py-1.5 rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Key Highlights */}
                    {index === 0 && (
                      <div className="mb-5 p-4 rounded-lg bg-primary-900/20 border border-primary-700/30">
                        <p className="text-sm font-semibold text-primary-300 mb-1">Key Focus:</p>
                        <p className="text-sm text-gray-300">Full-stack development • RESTful APIs • Code quality • Team collaboration</p>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-base leading-relaxed flex items-start gap-3 group/item"
                        >
                          <span className="text-primary-500 mt-1.5 text-lg group-hover/item:scale-110 transition-transform">▸</span>
                          <span className="font-light">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

