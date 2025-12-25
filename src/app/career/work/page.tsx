'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <Link 
          href="/career"
          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 mb-6 transition-colors"
        >
          ← Back to Career
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-purple bg-clip-text text-transparent">Work</h1>
        <p className="text-xl text-deep-sea-blue-50 mb-12">
          My professional experience and projects
        </p>
        
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
          <p className="text-deep-sea-blue-200">Content coming soon...</p>
        </div>
      </motion.div>
    </div>
  )
}

