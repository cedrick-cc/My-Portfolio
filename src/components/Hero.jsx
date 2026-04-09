import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Sparkles } from 'lucide-react'
const HeroOrb3D = lazy(() => import('./HeroOrb3D'))

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-base via-dark-forest/70 to-dark-base" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(74,222,128,0.22),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(34,197,94,0.18),transparent_38%)]" />
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.15) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>
      <Suspense
        fallback={
          <div className="absolute right-[-120px] top-24 h-[380px] w-[380px] rounded-full bg-primary-500/15 blur-3xl md:right-2" />
        }
      >
        <HeroOrb3D />
      </Suspense>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <FadeUp delay={0.05} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-effect mb-10 group">
          <Code2 className="w-4 h-4 text-primary-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-medium text-primary-300 tracking-wide">
            Software Engineer / Junior DevOps Engineer
          </span>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight">
          <span className="text-gray-50 block mb-2">CEDRICK</span>
          <span className="text-gradient block">NKURUNZIZA</span>
        </h1>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
            I build things that work. Then I make them better.
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="text-lg sm:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Blending product-focused software engineering with DevOps precision to deliver secure, scalable, and delightful systems.
          </p>
        </FadeUp>

        <FadeUp delay={0.42} className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">2+</div>
            <div className="text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">5</div>
            <div className="text-sm text-gray-400 font-medium">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">10+</div>
            <div className="text-sm text-gray-400 font-medium">Technologies</div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/40 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-dark-base/40 border-2 border-primary-600/50 hover:border-primary-400 text-primary-300 hover:text-primary-200 font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600/10 backdrop-blur-sm"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Contact Me
            </span>
          </motion.button>
        </FadeUp>

        <FadeUp delay={0.58} className="mt-20">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-500 hover:text-primary-400 transition-all duration-300 group"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-7 h-7 mx-auto group-hover:translate-y-2 transition-transform duration-500" />
          </button>
        </FadeUp>
      </div>
    </section>
  )
}

export default Hero

