'use client'

import { motion } from 'framer-motion'

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Large floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(155, 89, 182, 0.4) 0%, transparent 70%)',
          top: '60%',
          right: '10%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(26, 188, 156, 0.4) 0%, transparent 70%)',
          bottom: '20%',
          left: '50%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(243, 156, 18, 0.3) 0%, transparent 70%)',
          top: '40%',
          right: '30%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 70, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

