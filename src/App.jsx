import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import DevOpsProjects from './components/DevOpsProjects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const glowX = useSpring(0, { stiffness: 120, damping: 18 })
  const glowY = useSpring(0, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id]')

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      glowX.set(event.clientX - 180)
      glowY.set(event.clientY - 180)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [glowX, glowY])

  return (
    <div className="min-h-screen bg-dark-base relative overflow-x-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          background:
            'radial-gradient(circle at center, rgba(74, 222, 128, 0.24) 0%, rgba(34, 197, 94, 0.12) 40%, rgba(0,0,0,0) 70%)',
          opacity: mousePosition.x === 0 ? 0 : 1,
        }}
      />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <DevOpsProjects />
        <Projects />
        <About />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

