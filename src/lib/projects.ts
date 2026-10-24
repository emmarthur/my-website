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
    id: 'project-management-board',
    title: 'Dynamic Project Management Board',
    description:
      'Kanban-style board from React Projects (Ch. 3): custom data-fetch hook, HTML5 drag-and-drop lanes, and styled-components—book-guided demo with local task data.',
    technologies: ['React', 'TypeScript', 'Next.js', 'styled-components', 'HTML5 DnD'],
    status: 'completed',
    category: 'web',
    github:
      'https://github.com/PacktPublishing/React-Projects-Second-Edition/tree/main/Chapter03',
    demoPath: '/career/projects/project-management-board',
  },
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
