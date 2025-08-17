import { motion } from 'framer-motion'
import { useMemo } from 'react'

const Background = () => {
  // Generate random bokeh spheres with consistent properties
  const spheres = useMemo(() => {
    const sphereCount = 15
    return Array.from({ length: sphereCount }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 40, // 40-160px
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
      duration: Math.random() * 20 + 15, // 15-35 seconds
      delay: Math.random() * 10,
      blur: Math.random() * 30 + 20, // 20-50px blur
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className="absolute rounded-full bg-white"
          style={{
            width: sphere.size,
            height: sphere.size,
            opacity: sphere.opacity,
            filter: `blur(${sphere.blur}px)`,
            background: `radial-gradient(circle, rgba(255,255,255,${sphere.opacity}) 0%, rgba(255,255,255,${sphere.opacity * 0.3}) 70%, transparent 100%)`,
          }}
          initial={{
            x: `${sphere.initialX}vw`,
            y: `${sphere.initialY}vh`,
          }}
          animate={{
            x: [
              `${sphere.initialX}vw`,
              `${(sphere.initialX + 20) % 100}vw`,
              `${(sphere.initialX - 15) % 100}vw`,
              `${sphere.initialX}vw`,
            ],
            y: [
              `${sphere.initialY}vh`,
              `${(sphere.initialY - 25) % 100}vh`,
              `${(sphere.initialY + 30) % 100}vh`,
              `${sphere.initialY}vh`,
            ],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: sphere.duration,
            delay: sphere.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent" />
      
      {/* Soft vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </div>
  )
}

export default Background