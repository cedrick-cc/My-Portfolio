import { motion } from 'framer-motion'
import {
  Braces,
  CloudCog,
  Code2,
  Container,
  Cpu,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  Monitor,
  Palette,
  Server,
  Terminal,
  Wind,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const row1Skills = [
  { name: 'Linux (Ubuntu)', icon: Terminal },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Server },
  { name: 'Bash Scripting', icon: Terminal },
  { name: 'React', icon: Cpu },
  { name: 'JavaScript', icon: FileCode2 },
  { name: 'TypeScript', icon: Braces },
  { name: 'Python', icon: Terminal },
  { name: 'Java', icon: Code2 },
]

const row2Skills = [
  { name: 'Node.js', icon: Server },
  { name: 'Spring Boot', icon: CloudCog },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Networking & Protocols', icon: Globe },
  { name: 'Suricata IDS', icon: ShieldCheck },
  { name: 'Nginx & Traefik', icon: Layers },
  { name: 'PostgreSQL & MySQL', icon: Zap },
  { name: 'Material UI', icon: LayoutGrid },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/20 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="left" mood="techy" threeVariant="techCube" />
      
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-50">
            Technical <span className="text-gradient">Stream</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Continuous technology stack across Software, Networks, and Infrastructure
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Liquid Glass Marquee */}
      <div className="space-y-6 overflow-hidden py-4 relative z-10">
        
        {/* Row 1: Left to Right Loop */}
        <div className="marquee-container flex overflow-hidden select-none">
          <div className="animate-marquee-left flex gap-4 pr-4">
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="glass-pill px-6 py-4 rounded-2xl flex items-center gap-3.5 whitespace-nowrap group hover:border-primary-400/60 transition-all cursor-pointer shadow-lg"
                >
                  <div className="p-2.5 rounded-xl bg-dark-base/70 text-primary-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-bold text-gray-200 group-hover:text-primary-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 2: Right to Left Loop */}
        <div className="marquee-container flex overflow-hidden select-none">
          <div className="animate-marquee-right flex gap-4 pr-4">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="glass-pill px-6 py-4 rounded-2xl flex items-center gap-3.5 whitespace-nowrap group hover:border-primary-400/60 transition-all cursor-pointer shadow-lg"
                >
                  <div className="p-2.5 rounded-xl bg-dark-base/70 text-primary-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-bold text-gray-200 group-hover:text-primary-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
