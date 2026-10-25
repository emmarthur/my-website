export interface ShowcaseProject {
  id: string
  title: string
  description: string
  technologies: string[]
  status: 'completed' | 'in-progress' | 'planned'
  category: 'ai' | 'cybersecurity' | 'web' | 'other'
  github?: string
  /** External URL for demos hosted outside this site */
  demoUrl?: string
  /** In-app route for live demos embedded in this site */
  demoPath?: string
  image?: string
}

/** Local dev defaults (portfolio 3000; demos 3001–3011). Override via NEXT_PUBLIC_* in .env.local */
function localDemoUrl(port: number, envVar?: string): string {
  const fromEnv = envVar ? process.env[envVar] : undefined
  return fromEnv ?? `http://localhost:${port}`
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'project-management-board',
    title: 'Dynamic Project Management Board',
    description:
      'Kanban-style board with a custom data-fetch hook, HTML5 drag-and-drop lanes, and styled-components—local task data, no sign-in.',
    technologies: ['React', 'TypeScript', 'Next.js', 'styled-components', 'HTML5 DnD'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/project-management-board',
    demoUrl: localDemoUrl(3001, 'NEXT_PUBLIC_PROJECT_MANAGEMENT_BOARD_DEMO_URL'),
  },
  {
    id: 'million-dice-roll-statistics-simulator',
    title: 'Million Dice Roll Statistics',
    description:
      'Simulate one million dice rolls in the browser and compare how often each sum appears—empirical probability in action.',
    technologies: ['TypeScript', 'Next.js', 'Web Workers'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/million-dice-roll-statistics-simulator',
    demoUrl: localDemoUrl(3002, 'NEXT_PUBLIC_MILLION_DICE_DEMO_URL'),
  },
  {
    id: 'image-recognition-vue-tensorflowjs',
    title: 'Image Recognition (Vue & TensorFlow.js)',
    description:
      'Browser-based MobileNet classification and PoseNet body-joint detection—models run locally after download.',
    technologies: ['Vue', 'TypeScript', 'TensorFlow.js'],
    status: 'completed',
    category: 'ai',
    github: 'https://github.com/emmarthur/image-recognition-vue-tensorflowjs',
    demoUrl: localDemoUrl(3003, 'NEXT_PUBLIC_IMAGE_RECOGNITION_DEMO_URL'),
  },
  {
    id: 'conways-game-of-life',
    title: "Conway's Game of Life",
    description:
      'Toroidal cellular automaton: run, step, randomize, and click cells to draw patterns while paused.',
    technologies: ['TypeScript', 'Next.js', 'React'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/conways-game-of-life',
    demoUrl: localDemoUrl(3004, 'NEXT_PUBLIC_CONWAYS_LIFE_DEMO_URL'),
  },
  {
    id: 'dna-visualization',
    title: 'DNA Visualization',
    description:
      'Streaming visualization of random DNA rows—watch A/T/C/G sequences appear in real time.',
    technologies: ['Python', 'FastAPI', 'Server-Sent Events'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/dna-visualization',
    demoUrl: localDemoUrl(3005, 'NEXT_PUBLIC_DNA_VISUALIZATION_DEMO_URL'),
  },
  {
    id: 'birthday-paradox',
    title: 'Birthday Paradox Simulation',
    description:
      'Monte Carlo estimate of shared birthdays in a group—sample once or run 100,000 trials with live progress.',
    technologies: ['Python', 'FastAPI', 'Server-Sent Events'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/birthday-paradox',
    demoUrl: localDemoUrl(3006, 'NEXT_PUBLIC_BIRTHDAY_PARADOX_DEMO_URL'),
  },
  {
    id: 'water-bucket-puzzle',
    title: 'Water Bucket Puzzle',
    description:
      'Classic pouring puzzle with 8L, 5L, and 3L buckets—reach exactly 4 liters using fill, empty, and pour.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/water-bucket-puzzle',
    demoUrl: localDemoUrl(3007, 'NEXT_PUBLIC_WATER_BUCKET_PUZZLE_DEMO_URL'),
  },
  {
    id: 'user-review-sentiment',
    title: 'User Review Sentiment',
    description:
      'Classify short product and restaurant reviews as positive or negative with Doc2Vec embeddings and k-NN.',
    technologies: ['Python', 'FastAPI', 'Gensim', 'scikit-learn'],
    status: 'completed',
    category: 'ai',
    github: 'https://github.com/emmarthur/user-review-sentiment',
    demoUrl: localDemoUrl(3008, 'NEXT_PUBLIC_USER_REVIEW_SENTIMENT_DEMO_URL'),
  },
  {
    id: 'markdown-editor-typescript',
    title: 'Markdown Editor',
    description:
      'Live markdown-to-HTML editor with a custom TypeScript parser (visitor pattern and chain of responsibility).',
    technologies: ['TypeScript', 'Next.js', 'React'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/markdown-editor-typescript',
    demoUrl: localDemoUrl(3009, 'NEXT_PUBLIC_MARKDOWN_EDITOR_DEMO_URL'),
  },
  {
    id: 'guess-the-number',
    title: 'Guess the Number',
    description:
      'Classic higher-or-lower number puzzle—seven guesses to find the secret between 1 and 100.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/guess-the-number',
    demoUrl: localDemoUrl(3010, 'NEXT_PUBLIC_GUESS_THE_NUMBER_DEMO_URL'),
  },
  {
    id: 'caesar-cipher',
    title: 'Caesar Cipher',
    description:
      'Encrypt and decrypt messages with a letter shift key—classic substitution cipher, fully offline.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'cybersecurity',
    github: 'https://github.com/emmarthur/caesar-cipher',
    demoUrl: localDemoUrl(3011, 'NEXT_PUBLIC_CAESAR_CIPHER_DEMO_URL'),
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
    status: 'in-progress',
    category: 'ai',
    github: 'https://github.com/emmarthur/Retail-Impact-Simulator',
    demoPath: '/career/projects/retail-impact-simulator',
  },
]
