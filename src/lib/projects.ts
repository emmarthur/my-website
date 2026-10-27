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

/** Local dev defaults (portfolio 3000; demos 3001–3018). Override via NEXT_PUBLIC_* in .env.local */
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
    id: 'monty-hall-problem',
    title: 'Monty Hall Problem',
    description:
      'Play the three-door game or run 100,000 trials—see why switching doors wins about twice as often.',
    technologies: ['Python', 'FastAPI', 'Server-Sent Events'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/monty-hall-problem',
    demoUrl: localDemoUrl(3012, 'NEXT_PUBLIC_MONTY_HALL_DEMO_URL'),
  },
  {
    id: 'ssr-community-feed',
    title: 'SSR Community Feed',
    description:
      'Next.js server-rendered question feed from local data—browse a page of posts, open a question, and move between pages without a cloud API.',
    technologies: ['TypeScript', 'Next.js', 'React', 'App Router'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/ssr-community-feed',
    demoUrl: localDemoUrl(3013, 'NEXT_PUBLIC_SSR_COMMUNITY_FEED_DEMO_URL'),
  },
  {
    id: 'bagels',
    title: 'Bagels',
    description:
      'Deduce a secret 3-digit number in 10 guesses. Pico, Fermi, and Bagels clues tell you what you hit—without revealing which digit.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/bagels',
    demoUrl: localDemoUrl(3014, 'NEXT_PUBLIC_BAGELS_DEMO_URL'),
  },
  {
    id: 'langtons-ant',
    title: "Langton's Ant",
    description:
      'Cellular automaton with flip-and-turn ants on a wrapping grid—run, step, or reset with up to fifty ants.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/langtons-ant',
    demoUrl: localDemoUrl(3015, 'NEXT_PUBLIC_LANGTONS_ANT_DEMO_URL'),
  },
  {
    id: 'hangman',
    title: 'Hangman',
    description:
      'Classic letter-guessing game with ASCII gallows—reveal the animal word before six wrong guesses.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/hangman',
    demoUrl: localDemoUrl(3016, 'NEXT_PUBLIC_HANGMAN_DEMO_URL'),
  },
  {
    id: 'collatz-sequence',
    title: 'Collatz Sequence',
    description:
      'Explore the 3n + 1 sequence—chart each step from your starting number down to 1, with play and step controls.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/collatz-sequence',
    demoUrl: localDemoUrl(3017, 'NEXT_PUBLIC_COLLATZ_SEQUENCE_DEMO_URL'),
  },
  {
    id: 'personal-shopping-list',
    title: 'Personal Shopping List',
    description:
      'Multi-list grocery app with nested React Context, useReducer, and add-item flows—mirrors production list UIs without a backend service.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Context API', 'styled-components'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/personal-shopping-list',
    demoUrl: localDemoUrl(3018, 'NEXT_PUBLIC_PERSONAL_SHOPPING_LIST_DEMO_URL'),
  },
  {
    id: 'spam-detector',
    title: 'Comment Spam Detector',
    description:
      'Classify short comments as ham or spam using TF-IDF features and a small Keras neural network trained on labelled YouTube comments.',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'scikit-learn', 'pandas'],
    status: 'completed',
    category: 'ai',
    github: 'https://github.com/emmarthur/spam-detector',
    demoUrl: localDemoUrl(3019, 'NEXT_PUBLIC_SPAM_DETECTOR_DEMO_URL'),
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description:
      'Play rock, paper, scissors against the computer with session scoring and a dramatic countdown before each reveal.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/rock-paper-scissors',
    demoUrl: localDemoUrl(3020, 'NEXT_PUBLIC_ROCK_PAPER_SCISSORS_DEMO_URL'),
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description:
      'Classic 3×3 two-player board game with dictionary-based win detection—hot-seat play in the browser or numbered moves in the CLI.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/tic-tac-toe',
    demoUrl: localDemoUrl(3021, 'NEXT_PUBLIC_TIC_TAC_TOE_DEMO_URL'),
  },
  {
    id: 'dice-roller',
    title: 'Dice Roller',
    description:
      'Parse tabletop dice notation (e.g. 3d6+2), roll random faces, and show each die plus the modified total.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/dice-roller',
    demoUrl: localDemoUrl(3022, 'NEXT_PUBLIC_DICE_ROLLER_DEMO_URL'),
  },
  {
    id: 'fast-draw',
    title: 'Fast Draw',
    description:
      'Reflex duel: wait for a random high-noon pause, then hit DRAW within 0.3 seconds—foul if you jump the gun.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/fast-draw',
    demoUrl: localDemoUrl(3023, 'NEXT_PUBLIC_FAST_DRAW_DEMO_URL'),
  },
  {
    id: 'pig-latin',
    title: 'Pig Latin Translator',
    description:
      'Convert English phrases to Pig Latin while keeping punctuation and ALL CAPS / Title Case intact on each word.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/pig-latin',
    demoUrl: localDemoUrl(3024, 'NEXT_PUBLIC_PIG_LATIN_DEMO_URL'),
  },
  {
    id: 'twenty-forty-eight',
    title: 'Twenty Forty-Eight',
    description:
      'Slide and merge numbered tiles on a 4×4 grid—classic 2048-style play with keyboard controls and running score.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/twenty-forty-eight',
    demoUrl: localDemoUrl(3025, 'NEXT_PUBLIC_TWENTY_FORTY_EIGHT_DEMO_URL'),
  },
  {
    id: 'four-in-a-row',
    title: 'Four in a Row',
    description:
      'Drop X and O discs into a 7×6 grid and connect four in a row—hot-seat play with column controls and win detection.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/four-in-a-row',
    demoUrl: localDemoUrl(3026, 'NEXT_PUBLIC_FOUR_IN_A_ROW_DEMO_URL'),
  },
  {
    id: 'blackjack',
    title: 'Blackjack',
    description:
      'Play 21 against the dealer with hit, stand, and double down—$5,000 play bankroll and standard card values.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/blackjack',
    demoUrl: localDemoUrl(3027, 'NEXT_PUBLIC_BLACKJACK_DEMO_URL'),
  },
  {
    id: 'student-performance',
    title: 'Student Performance Predictor',
    description:
      'Decision tree pass/fail model on student survey features—one-hot categoricals, holdout and cross-validation metrics.',
    technologies: ['Python', 'FastAPI', 'scikit-learn'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/student-performance',
    demoUrl: localDemoUrl(3028, 'NEXT_PUBLIC_STUDENT_PERFORMANCE_DEMO_URL'),
  },
  {
    id: 'chat-room',
    title: 'Chat Room',
    description:
      'Real-time multi-room chat with Socket.IO—join channels, broadcast messages, and see presence updates on localhost.',
    technologies: ['TypeScript', 'Socket.IO', 'Express'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/chat-room',
    demoUrl: localDemoUrl(3029, 'NEXT_PUBLIC_CHAT_ROOM_DEMO_URL'),
  },
  {
    id: 'tower-of-hanoi',
    title: 'Tower of Hanoi',
    description:
      'Classic five-disk stack puzzle—move one disk at a time with colored towers and move counting toward the optimal 31.',
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/emmarthur/tower-of-hanoi',
    demoUrl: localDemoUrl(3030, 'NEXT_PUBLIC_TOWER_OF_HANOI_DEMO_URL'),
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
