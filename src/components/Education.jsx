import { motion } from 'framer-motion'
import { BookOpenText, Calendar, GraduationCap, MapPin, Award } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/20 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="left" mood="soft" threeVariant="softOrb" />
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-50">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Formal engineering education in Information Technology and Computer Systems
          </p>
        </motion.div>

        {/* Liquid Glass Academic Panel */}
        <motion.div
          className="card-premium-hover p-8 sm:p-12 relative overflow-hidden group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="p-5 rounded-2xl glass-pill bg-primary-900/40 text-primary-300 shadow-xl">
              <GraduationCap className="w-10 h-10" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="glass-pill px-4 py-1.5 rounded-full text-xs font-mono font-bold text-primary-300 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-primary-400" />
                  Graduation — 2026
                </span>
                <span className="glass-pill px-4 py-1.5 rounded-full text-xs font-mono font-bold text-amber-300 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  GPA: 3.2 / 4.0
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-50 leading-tight">
                Bachelor of Science in Information Technology
              </h3>

              <div className="flex flex-wrap items-center gap-6 text-gray-300 pt-2 font-medium">
                <span className="flex items-center gap-2 text-base text-primary-300">
                  <BookOpenText className="w-5 h-5 text-primary-400" />
                  Adventist University of Central Africa (AUCA)
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  Kigali, Rwanda
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Education
