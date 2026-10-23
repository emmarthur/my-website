'use client'

import { ProjectsGrid } from '@/components/career/ProjectsGrid'

export default function ProjectsPage() {
  return (
    <ProjectsGrid
      backHref="/career"
      backLabel="Back to Career"
      title="Projects"
      description="Standout projects I've completed or am currently working on"
    />
  )
}
