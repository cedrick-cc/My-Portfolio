import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const brandColors = [
  { text: '#16a34a', glow: 'rgba(22, 163, 74, 0.65)' },   // Deep green
  { text: '#22c55e', glow: 'rgba(34, 197, 94, 0.65)' },   // Emerald green
  { text: '#4ade80', glow: 'rgba(74, 222, 128, 0.65)' },  // Soft green
  { text: '#ffffff', glow: 'rgba(255, 255, 255, 0.55)' }, // White
  { text: '#e2e8f0', glow: 'rgba(226, 232, 240, 0.5)' },  // Cool light grey
  { text: '#94a3b8', glow: 'rgba(148, 163, 184, 0.45)' }, // Dark grey
  { text: '#0d9488', glow: 'rgba(13, 148, 136, 0.6)' },   // Deep blue-green
  { text: '#15803d', glow: 'rgba(21, 128, 61, 0.65)' },   // Dark green
]

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % brandColors.length)
    }, 5000)
    return () => clearInterval(colorInterval)
  }, [])

  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'devops-projects', label: 'DevOps & Linux' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const currentColor = brandColors[colorIndex]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-base/85 backdrop-blur-2xl shadow-2xl shadow-black/50 border-b border-primary-800/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Living/Glowing CK Brand Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-black tracking-wider px-3 py-1.5 rounded-xl glass-pill flex items-center justify-center cursor-pointer transition-all duration-1000"
            style={{
              color: currentColor.text,
              boxShadow: `0 0 20px 2px ${currentColor.glow}, inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.4)`,
              textShadow: `0 0 12px ${currentColor.glow}`,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            CK
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 glass-effect px-4 py-1.5 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'text-primary-300'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-primary-500/20 rounded-full border border-primary-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-primary-400 transition-all duration-300 p-2.5 rounded-xl glass-pill"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-effect border-t border-primary-800/30 mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary-300 bg-primary-900/40 border border-primary-700/40'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-forest/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
