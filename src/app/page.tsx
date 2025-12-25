'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { lifeSections } from '@/lib/data'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto relative z-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 relative z-20"
            style={{ 
              background: 'linear-gradient(to right, #b3d9ff, #1abc9c, #9b59b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#b3d9ff', // Fallback color
            }}
          >
            Welcome to My Digital Diary
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-deep-sea-blue-50 mb-12 drop-shadow-md relative z-20"
          >
            A journey through life, work, creativity, and everything in between
          </motion.p>
        </motion.div>

        {/* Life Sections Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-20"
        >
          {lifeSections.map((section) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={section.path}>
                <div className="bg-white/90 dark:bg-deep-sea-blue-900/90 backdrop-blur-md rounded-xl p-6 shadow-2xl hover:shadow-deep-sea-blue-500/50 transition-all cursor-pointer border border-deep-sea-blue-300/30 dark:border-deep-sea-blue-600/30 hover:border-accent-teal/50">
                  <h2 className="text-2xl font-semibold mb-2 text-deep-sea-blue-900 dark:text-deep-sea-blue-50">{section.title}</h2>
                  <p className="text-deep-sea-blue-700 dark:text-deep-sea-blue-200">{section.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

