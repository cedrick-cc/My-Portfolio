import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiSpring, 
  SiTailwindcss, 
  SiGit, 
  SiKubernetes,
  SiFigma,
  SiMui
} from 'react-icons/si'
import { HiCode, HiDesktopComputer } from 'react-icons/hi'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Python', icon: SiPython, color: 'text-blue-400' },
        { name: 'Java', icon: HiCode, color: 'text-orange-500' },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-600' },
        { name: 'CSS/SCSS', icon: SiCss3, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Spring Boot', icon: SiSpring, color: 'text-green-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Material UI', icon: SiMui, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
        { name: 'VS Code', icon: HiDesktopComputer, color: 'text-blue-500' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/20 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Full-stack expertise in modern web technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-premium-hover p-6 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary-400 mb-6 pb-3 border-b border-gray-800/50">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-5 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 border border-gray-800/30 hover:border-primary-600/30 transition-all duration-300 group cursor-default"
                    >
                      <div className="p-3 rounded-lg bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors mb-3">
                        <Icon className={`w-7 h-7 ${skill.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`} />
                      </div>
                      <span className="text-sm text-gray-300 text-center font-semibold group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

