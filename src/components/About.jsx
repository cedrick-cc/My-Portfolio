import { motion } from 'framer-motion'
import { Blocks, Container, Cpu, Lightbulb, ServerCog } from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const personalityItems = [
  { icon: Lightbulb, text: 'Experimenting with better workflows and cleaner patterns' },
  { icon: ServerCog, text: 'Automating repetitive tasks until systems feel effortless' },
  { icon: Container, text: 'Containerizing apps and tuning Linux environments for reliability' },
  { icon: Blocks, text: 'Breaking complex ideas into practical, scalable components' },
  { icon: Cpu, text: 'Balancing engineering depth with smooth user experience' },
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/30 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="right" mood="soft" threeVariant="softOrb" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mb-8 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="card-premium p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light whitespace-pre-line">
              {"I build systems that work — and experiences people remember.\n\nI’m a Software Engineer and DevOps-focused builder who enjoys turning complex ideas into clean, reliable, and scalable solutions. My work lives at the intersection of Java, Spring Boot, React, and Linux-based infrastructure — where performance meets practicality.\n\nWhat excites me most is bringing structure to chaos. Whether it’s configuring secure servers, automating workflows, or containerizing applications, I enjoy creating systems that feel effortless to use but are deeply engineered underneath.\n\nI recently completed my Bachelor of Science in Information Technology, and I’ve spent that time not just learning — but building, breaking, and rebuilding real-world systems that actually work.\n\nOutside of the technical side, I approach everything with curiosity and creativity. I like experimenting, improving, and finding better ways to do things — because for me, engineering isn’t just about solving problems… it’s about crafting something meaningful."}
            </p>
          </motion.div>

          <motion.div
            className="card-premium p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.14 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
              What I Actually <span className="text-gradient">Enjoy Doing</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {personalityItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.text}
                    className="group rounded-xl border border-primary-700/30 bg-dark-forest/40 p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ scale: 1.015 }}
                  >
                    <Icon className="h-5 w-5 mt-0.5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                    <p className="text-gray-200/95">{item.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

