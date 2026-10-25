'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Card } from '@/components/ui/Card'
import { showcaseProjects } from '@/lib/projects'
import Link from 'next/link'

type LinkComponent = typeof Link

type Props = {
  backHref: string
  backLabel: string
  title: string
  description: string
  LinkComponent?: LinkComponent
}

export function ProjectsGrid({
  backHref,
  backLabel,
  title,
  description,
  LinkComponent = Link,
}: Props) {
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

  const L = LinkComponent

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <L
          href={backHref}
          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 mb-6 transition-colors"
        >
          ← {backLabel}
        </L>

        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-orange bg-clip-text text-transparent font-heading">
            {title}
          </h1>
          <p className="text-xl text-deep-sea-blue-50 mb-12">{description}</p>
        </motion.div>

        {showcaseProjects.length === 0 ? (
          <motion.div variants={fadeInUp}>
            <Card className="p-8 text-center">
              <p className="text-deep-sea-blue-200 mb-4">No projects added yet.</p>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {showcaseProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
                <Card className="h-full flex flex-col">
                  <div className="w-full h-48 bg-gradient-to-br from-deep-sea-blue-700 via-accent-teal/20 to-accent-purple/20 rounded-t-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🛍️</span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(project.status)}`}
                      >
                        {project.status.replace('-', ' ')}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(project.category)}`}
                      >
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-deep-sea-blue-50">
                      {project.title}
                    </h3>
                    <p className="text-deep-sea-blue-300 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-deep-sea-blue-400 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-deep-sea-blue-800/50 text-deep-sea-blue-200 rounded text-xs border border-deep-sea-blue-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                        >
                          Try live demo →
                        </a>
                      )}
                      {project.demoPath && (
                        <L
                          href={project.demoPath}
                          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                        >
                          Try live simulation →
                        </L>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-deep-sea-blue-300 hover:text-deep-sea-blue-100 text-sm transition-colors"
                        >
                          Source on GitHub →
                        </a>
                      )}
                    </div>
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
