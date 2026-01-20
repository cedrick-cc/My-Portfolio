import { HiArrowDown, HiCode } from 'react-icons/hi'

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div 
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-effect mb-12 animate-fade-in-up group cursor-default"
          style={{ animationDelay: '0.1s' }}
        >
          <HiCode className="w-4 h-4 text-primary-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-medium text-primary-300 tracking-wide">Software Developer</span>
        </div>

        <h1 
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight animate-fade-in-up" 
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gray-50 block mb-2">CEDRICK</span>
          <span className="text-gradient block">NKURUNZIZA</span>
        </h1>

        <p 
          className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        >
          Transforming complex problems into{' '}
          <span className="text-gradient font-medium">intelligent, scalable solutions</span>
        </p>

        <p 
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" 
          style={{ animationDelay: '0.4s' }}
        >
          Specialized in full-stack development with Java, Spring Boot, React.js, and modern AI/ML technologies
        </p>

        {/* Quick Stats for Recruiters */}
        <div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 animate-fade-in-up" 
          style={{ animationDelay: '0.45s' }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">2+</div>
            <div className="text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">3</div>
            <div className="text-sm text-gray-400 font-medium">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">10+</div>
            <div className="text-sm text-gray-400 font-medium">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 font-mono">2026</div>
            <div className="text-sm text-gray-400 font-medium">Graduation</div>
          </div>
        </div>

        <div 
          className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up" 
          style={{ animationDelay: '0.5s' }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border-2 border-primary-600/50 hover:border-primary-500 text-primary-400 hover:text-primary-300 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary-600/10 backdrop-blur-sm"
          >
            Contact Me
          </button>
        </div>

        <div 
          className="mt-24 animate-fade-in-up" 
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-500 hover:text-primary-400 transition-all duration-300 group"
            aria-label="Scroll down"
          >
            <HiArrowDown className="w-7 h-7 mx-auto group-hover:translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

