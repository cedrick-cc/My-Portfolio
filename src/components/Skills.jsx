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
} from 'lucide-react'
import SectionFloatingObjects from './SectionFloatingObjects'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: FileCode2 },
        { name: 'TypeScript', icon: Braces },
        { name: 'Python', icon: Terminal },
        { name: 'Java', icon: Code2 },
        { name: 'HTML', icon: Globe },
        { name: 'CSS/SCSS', icon: Wind },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'Cloud fundamentals', icon: CloudCog },
        { name: 'Infrastructure concepts', icon: Layers },
        { name: 'Linux', icon: Terminal },
        { name: 'Docker', icon: Container },
        { name: 'Kubernetes', icon: Server },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: Cpu },
        { name: 'Node.js', icon: Server },
        { name: 'Spring Boot', icon: CloudCog },
        { name: 'Tailwind CSS', icon: Wind },
        { name: 'Material UI', icon: LayoutGrid },
      ],
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'VS Code', icon: Monitor },
        { name: 'Figma', icon: Palette },
        { name: 'Bash scripting', icon: Terminal },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-base via-dark-forest/20 to-dark-base relative overflow-hidden">
      <SectionFloatingObjects placement="left" mood="techy" threeVariant="techCube" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Full-stack expertise in modern web technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-premium-hover p-6"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: categoryIndex * 0.03 } },
              }}
            >
              <h3 className="text-xl font-bold text-primary-300 mb-6 pb-3 border-b border-primary-700/25">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center p-5 rounded-xl bg-dark-forest/35 hover:bg-dark-forest/55 border border-primary-800/25 hover:border-primary-500/45 transition-all duration-300 group cursor-default hover:shadow-lg hover:shadow-primary-500/20"
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="p-3 rounded-lg bg-dark-base/70 group-hover:bg-dark-base/90 transition-colors mb-3">
                        <Icon className="w-7 h-7 text-primary-300 group-hover:text-primary-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                      </div>
                      <span className="text-sm text-gray-300 text-center font-semibold group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

