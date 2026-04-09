import { motion } from 'framer-motion'
import { BookOpenText, Calendar, GraduationCap, MapPin } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/20 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="left" mood="soft" threeVariant="softOrb" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl font-light">
            Bachelor's in Information Technology with hands-on project experience
          </p>
        </motion.div>

        <motion.div
          className="card-premium-hover p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="p-5 rounded-xl bg-gradient-to-br from-primary-900/40 to-primary-800/20 border border-primary-700/30 shadow-lg shadow-primary-500/10">
              <GraduationCap className="w-8 h-8 text-primary-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-50 mb-4">
                Bachelor of Science in Information Technology
              </h3>
              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
                <span className="flex items-center gap-2 text-lg">
                  <BookOpenText className="w-5 h-5 text-primary-300" />
                  <span className="font-medium">Adventist University of Central Africa</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-300" />
                  Kigali, Rwanda
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-300" />
                  Graduation - 2026
                </span>
              </div>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-900/40 to-primary-800/20 border border-primary-700/30 rounded-xl">
                <span className="text-primary-300 font-bold text-lg">GPA: 3.2/4.0</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-800/30">
            <h4 className="text-2xl font-bold text-gray-200 mb-6">
              Relevant Coursework & Projects
            </h4>
            <div className="space-y-4">
              <div className="bg-dark-forest/40 rounded-xl p-6 border border-primary-700/25 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/15">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  <span className="font-bold text-primary-400">Cinema Ticketing & Scheduling System:</span>{' '}
                  Developed a full-featured ticketing and movie scheduling system using Java with an intuitive interface 
                  and efficient seat management algorithms.
                </p>
              </div>
              <div className="bg-dark-forest/40 rounded-xl p-6 border border-primary-700/25 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/15">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  <span className="font-bold text-primary-400">Employment Management System:</span>{' '}
                  Built a role-based employee management platform integrating secure authentication and lifecycle 
                  management using Spring Boot and React.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

