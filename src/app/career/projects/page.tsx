'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status: 'completed' | 'in-progress' | 'planned'
  category: 'ai' | 'cybersecurity' | 'web' | 'other'
  link?: string
  image?: string
}

// Example projects - replace with your actual projects
const projects: Project[] = [
  // Add your projects here
  // {
  //   id: '1',
  //   title: 'AI-Powered Security System',
  //   description: 'An intelligent security system using machine learning to detect threats',
  //   technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
  //   status: 'in-progress',
  //   category: 'ai',
  // },
]

export default function ProjectsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/50'
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50'
      case 'planned':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/50'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai':
        return 'bg-accent-teal/20 text-accent-teal border-accent-teal/50'
      case 'cybersecurity':
        return 'bg-accent-purple/20 text-accent-purple border-accent-purple/50'
      case 'web':
        return 'bg-accent-orange/20 text-accent-orange border-accent-orange/50'
      default:
        return 'bg-deep-sea-blue-400/20 text-deep-sea-blue-300 border-deep-sea-blue-400/50'
    }
  }

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-orange bg-clip-text text-transparent">Projects</h1>
          <p className="text-xl text-deep-sea-blue-50 mb-12">
            Standout projects I&apos;ve completed or am currently working on
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div variants={fadeInUp}>
            <Card className="p-8 text-center">
              <p className="text-deep-sea-blue-200 mb-4">No projects added yet.</p>
              <p className="text-sm text-deep-sea-blue-300">
                Add your projects to showcase your work and achievements.
              </p>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  {project.image ? (
                    <div className="w-full h-48 bg-gradient-to-br from-deep-sea-blue-700 to-deep-sea-blue-900 rounded-t-lg overflow-hidden mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-deep-sea-blue-700 via-accent-teal/20 to-accent-purple/20 rounded-t-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Status and Category Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(project.category)}`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 text-deep-sea-blue-50">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-deep-sea-blue-300 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-xs text-deep-sea-blue-400 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-deep-sea-blue-800/50 text-deep-sea-blue-200 rounded text-xs border border-deep-sea-blue-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

