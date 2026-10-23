export interface ShowcaseProject {
  id: string
  title: string
  description: string
  technologies: string[]
  status: 'completed' | 'in-progress' | 'planned'
  category: 'ai' | 'cybersecurity' | 'web' | 'other'
  github?: string
  /** In-app route for live demos */
  demoPath?: string
  image?: string
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'retail-impact-simulator',
    title: 'Retail Impact Simulator',
    description:
      'Multi-agent retail analysis capstone: describe a store or expansion idea and get a long-term impact breakdown using live market and operations data.',
    technologies: [
      'Python',
      'CrewAI',
      'FastAPI',
      'Docker',
      'REST APIs',
      'Next.js',
    ],
    status: 'completed',
    category: 'ai',
    github: 'https://github.com/emmarthur/Retail-Impact-Simulator',
    demoPath: '/career/projects/retail-impact-simulator',
  },
]
