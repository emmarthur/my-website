'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <Link 
          href="/career"
          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 mb-6 transition-colors"
        >
          ← Back to Career
        </Link>
        
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-gold bg-clip-text text-transparent">Portfolio</h1>
          <p className="text-xl text-deep-sea-blue-50 mb-12">
            A comprehensive summary of my career journey, education, and professional experience
          </p>
        </motion.div>

        {/* Education Summary */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-2xl font-semibold mb-4 text-deep-sea-blue-50 flex items-center">
              <span className="mr-3">🎓</span>
              Education Summary
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent-teal pl-4">
                <h3 className="text-lg font-semibold text-deep-sea-blue-100">Master&apos;s in Computer Science</h3>
                <p className="text-deep-sea-blue-300">Portland State University</p>
                <p className="text-sm text-deep-sea-blue-400 mt-1">Currently pursuing</p>
              </div>
              <Link 
                href="/career/education"
                className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
              >
                View full education details →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Summary */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-2xl font-semibold mb-4 text-deep-sea-blue-50 flex items-center">
              <span className="mr-3">💼</span>
              Work Experience Summary
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent-purple pl-4">
                <h3 className="text-lg font-semibold text-deep-sea-blue-100">Professional Experience</h3>
                <p className="text-deep-sea-blue-300">Building expertise in AI, Cybersecurity, and Software Engineering</p>
                <p className="text-sm text-deep-sea-blue-400 mt-1">Focus areas: AI development, security solutions, full-stack engineering</p>
              </div>
              <Link 
                href="/career/work"
                className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
              >
                View full work experience →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-2xl font-semibold mb-4 text-deep-sea-blue-50 flex items-center">
              <span className="mr-3">🚀</span>
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-deep-sea-blue-800/50 rounded-lg p-4 border border-deep-sea-blue-600/30">
                <h3 className="font-semibold text-accent-teal mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-deep-sea-blue-300">Deep learning, neural networks, AI applications</p>
              </div>
              <div className="bg-deep-sea-blue-800/50 rounded-lg p-4 border border-deep-sea-blue-600/30">
                <h3 className="font-semibold text-accent-purple mb-2">Cybersecurity</h3>
                <p className="text-sm text-deep-sea-blue-300">Security protocols, threat analysis, protection</p>
              </div>
              <div className="bg-deep-sea-blue-800/50 rounded-lg p-4 border border-deep-sea-blue-600/30">
                <h3 className="font-semibold text-accent-orange mb-2">Software Engineering</h3>
                <p className="text-sm text-deep-sea-blue-300">Full-stack development, system design</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

