import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
const Section3DAccent = lazy(() => import('./Section3DAccent'))

const variants = {
  left: {
    primary: 'left-[-110px] top-16 h-72 w-72 bg-primary-500/12',
    secondary: 'right-[-80px] bottom-12 h-56 w-56 bg-primary-400/10',
  },
  right: {
    primary: 'right-[-110px] top-16 h-72 w-72 bg-primary-500/12',
    secondary: 'left-[-80px] bottom-12 h-56 w-56 bg-primary-400/10',
  },
  balanced: {
    primary: 'left-[-100px] top-20 h-64 w-64 bg-primary-500/12',
    secondary: 'right-[-90px] bottom-10 h-64 w-64 bg-primary-400/10',
  },
}

const moods = {
  soft: {
    primaryColor: 'bg-primary-400/10',
    secondaryColor: 'bg-primary-300/10',
    primaryShape: 'rounded-full',
    secondaryShape: 'rounded-[42%]',
    primaryDuration: 11,
    secondaryDuration: 13,
    movement: 8,
  },
  vibrant: {
    primaryColor: 'bg-primary-500/14',
    secondaryColor: 'bg-primary-400/12',
    primaryShape: 'rounded-[36%]',
    secondaryShape: 'rounded-full',
    primaryDuration: 7,
    secondaryDuration: 9,
    movement: 12,
  },
  techy: {
    primaryColor: 'bg-primary-500/13',
    secondaryColor: 'bg-primary-300/10',
    primaryShape: 'rounded-[28%]',
    secondaryShape: 'rounded-[18%]',
    primaryDuration: 8,
    secondaryDuration: 10,
    movement: 10,
  },
}

const SectionFloatingObjects = ({ placement = 'balanced', mood = 'soft', threeVariant = 'softOrb' }) => {
  const style = variants[placement] || variants.balanced
  const visual = moods[mood] || moods.soft

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute blur-3xl ${style.primary.replace('bg-primary-500/12', visual.primaryColor)} ${visual.primaryShape}`}
        animate={{
          y: [0, -visual.movement, 0],
          x: [0, Math.round(visual.movement * 0.66), 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: visual.primaryDuration, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute blur-3xl ${style.secondary.replace('bg-primary-400/10', visual.secondaryColor)} ${visual.secondaryShape}`}
        animate={{
          y: [0, visual.movement - 1, 0],
          x: [0, -Math.round(visual.movement * 0.66), 0],
          scale: [1, 1.04, 1],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: visual.secondaryDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
      />
      <Suspense fallback={null}>
        <Section3DAccent variant={threeVariant} placement={placement} />
      </Suspense>
    </>
  )
}

export default SectionFloatingObjects
