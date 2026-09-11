import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Sparkles, Terminal, Activity, Layers } from 'lucide-react'
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32 pb-20"
    >
      {/* Background Gradients & Tech Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-base via-dark-forest/60 to-dark-base" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(74,222,128,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(34,197,94,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Positioning, Typography & Personality Intro */}
          <div className="lg:col-span-7 text-left">
            <FadeUp delay={0.05} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-pill mb-6 group">
              <Code2 className="w-4 h-4 text-primary-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-semibold text-primary-300 tracking-wide uppercase">
                Software, Networks &amp; DevOps Engineering
              </span>
            </FadeUp>

            <FadeUp delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-gray-100 block sm:inline mr-3">CEDRICK</span>
                <span className="text-gradient block sm:inline">NKURUNZIZA</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2} className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-2xl">
              <p className="font-medium text-gray-200">
                Well hello there! I’m Cedrick--but you can call me CK ( just a friendly nickname).
              </p>
              <p>
                You know how the best food comes from throwing unexpected ingredients into one pot? That’s pretty much my side of the story. Instead of just picking one lane, I serve up a weirdly effective combo of Software, Networks and Devops Engineering.
              </p>
              <p className="text-gray-400/95 text-sm sm:text-base">
                It all started with diving into codes, but just staying inside a code editor started feeling a bit limited. I wanted to know where the packets go, how we orchestrate deployments, and how we track system behavior to see exactly where we can squeeze out more performance. That curiosity is what dragged me down the infrastructure rabbit hole.
              </p>
            </FadeUp>

            <FadeUp delay={0.35} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-3.5 glass-button-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 overflow-hidden shadow-lg"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 glass-button-secondary text-primary-300 hover:text-primary-200 font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span>Contact Me</span>
              </motion.button>
            </FadeUp>
          </div>

          {/* RIGHT SIDE: Interactive Engineering Workspace & Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background 3D Orb Canvas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
              <Suspense fallback={<div className="h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />}>
                <HeroOrb3D />
              </Suspense>
            </div>

            {/* Profile Picture & Liquid Glass Workspace composition */}
            <FadeUp delay={0.25} className="relative z-10 w-full max-w-sm">
              <div className="relative group p-6 rounded-3xl card-premium backdrop-blur-2xl border border-primary-500/30 shadow-2xl">
                
                {/* Specular Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500/30 via-primary-400/10 to-primary-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Profile Photograph Container */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative p-1.5 glass-pill rounded-full shadow-2xl group-hover:border-primary-400/70 transition-all duration-500">
                    <img
                      src="/profile.jpg"
                      alt="Cedrick Nkurunziza (CK)"
                      className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover object-top ring-2 ring-primary-500/30 group-hover:scale-105 transition-transform duration-500 shadow-inner"
                    />
                    <span
                      className="absolute bottom-2 right-2 w-5 h-5 bg-primary-500 rounded-full border-2 border-dark-base ring-4 ring-primary-400/40 animate-pulse"
                      title="Available for opportunities"
                    />
                  </div>
                </div>

                {/* Identity Tag & System Telemetry */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-gray-100 tracking-tight">Cedrick Nkurunziza</h3>
                  <p className="text-xs font-mono font-medium text-primary-300 tracking-wider uppercase">
                    Software • Networks • DevOps
                  </p>
                </div>

                {/* Floating Metric Badges */}
                <div className="grid grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-primary-700/30">
                  <div className="glass-pill p-2.5 rounded-xl text-center">
                    <div className="text-lg font-black text-primary-400 font-mono">2+</div>
                    <div className="text-[11px] text-gray-400 font-medium">Years Exp</div>
                  </div>
                  <div className="glass-pill p-2.5 rounded-xl text-center">
                    <div className="text-lg font-black text-primary-400 font-mono">5</div>
                    <div className="text-[11px] text-gray-400 font-medium">Projects</div>
                  </div>
                  <div className="glass-pill p-2.5 rounded-xl text-center">
                    <div className="text-lg font-black text-primary-400 font-mono">10+</div>
                    <div className="text-[11px] text-gray-400 font-medium">Tech Stack</div>
                  </div>
                </div>

                {/* Floating Glass Badges around card */}
                <motion.div
                  className="absolute -top-4 -left-4 glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-primary-300 flex items-center gap-1.5 shadow-xl hidden sm:flex"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Terminal className="w-3.5 h-3.5 text-primary-400" />
                  <span>bash ./deploy.sh</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-primary-300 flex items-center gap-1.5 shadow-xl hidden sm:flex"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Activity className="w-3.5 h-3.5 text-primary-400" />
                  <span>99.9% Uptime</span>
                </motion.div>

              </div>
            </FadeUp>
          </div>

        </div>

        {/* Scroll Indicator */}
        <FadeUp delay={0.45} className="mt-16 text-center">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-500 hover:text-primary-400 transition-all duration-300 group"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 mx-auto group-hover:translate-y-2 transition-transform duration-500" />
          </button>
        </FadeUp>
      </div>
    </section>
  )
}

export default Hero
