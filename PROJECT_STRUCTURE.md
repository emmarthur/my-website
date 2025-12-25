# Project Structure

Visual representation of the project file structure:

```
MyWebsite/
│
├── 📄 README.md                    # Main project documentation
├── 📄 SETUP.md                     # Setup and quick start guide
├── 📄 PROJECT_STRUCTURE.md         # This file
│
├── 📦 package.json                 # Dependencies and scripts
├── 📦 tsconfig.json                # TypeScript configuration
├── 📦 next.config.js               # Next.js configuration
├── 📦 tailwind.config.js           # Tailwind CSS configuration
├── 📦 postcss.config.js            # PostCSS configuration
├── 📦 .eslintrc.json               # ESLint configuration
├── 📦 .gitignore                   # Git ignore rules
│
├── 📁 public/                      # Static assets (served at root)
│   ├── 📁 images/                  # Image files
│   └── 📁 videos/                  # Video files
│
├── 📁 content/                     # Content files (optional)
│   ├── 📁 thoughts/                # Blog posts/thoughts (markdown)
│   └── 📁 projects/                # Project data files
│
└── 📁 src/                         # Source code
    │
    ├── 📁 app/                     # Next.js App Router
    │   ├── 📄 layout.tsx           # Root layout (Navigation + Footer)
    │   ├── 📄 page.tsx             # Home page
    │   │
    │   ├── 📁 career/
    │   │   └── 📄 page.tsx         # Career section
    │   │
    │   ├── 📁 hobbies/
    │   │   └── 📄 page.tsx         # Hobbies section
    │   │
    │   ├── 📁 relationships/
    │   │   └── 📄 page.tsx         # Relationships section
    │   │
    │   ├── 📁 thoughts/
    │   │   └── 📄 page.tsx         # Thoughts/blog listing
    │   │
    │   └── 📁 media/
    │       └── 📄 page.tsx         # Media/videos section
    │
    ├── 📁 components/               # React components
    │   ├── 📁 ui/                   # Base UI components
    │   │   ├── 📄 Button.tsx        # Animated button component
    │   │   └── 📄 Card.tsx          # Card component with hover effects
    │   │
    │   ├── 📁 layout/               # Layout components
    │   │   ├── 📄 Navigation.tsx    # Main navigation bar
    │   │   └── 📄 Footer.tsx        # Footer component
    │   │
    │   ├── 📁 sections/             # Page sections (to be created)
    │   └── 📁 animations/           # Animation components (to be created)
    │
    ├── 📁 lib/                      # Utility functions
    │   ├── 📄 utils.ts              # General utilities (cn, formatDate)
    │   ├── 📄 data.ts               # Content data (projects, thoughts, etc.)
    │   └── 📄 animations.ts         # Framer Motion animation presets
    │
    ├── 📁 styles/                   # Global styles
    │   └── 📄 globals.css           # Global CSS + Tailwind imports
    │
    └── 📁 types/                    # TypeScript types
        └── 📄 index.ts              # Type definitions (Project, Thought, Video, etc.)
```

## Key Files Explained

### Configuration Files
- **package.json**: All project dependencies (Next.js, React, Framer Motion, Tailwind)
- **tsconfig.json**: TypeScript compiler settings and path aliases
- **next.config.js**: Next.js specific settings (image domains, etc.)
- **tailwind.config.js**: Tailwind theme customization and animations

### Core Application
- **src/app/layout.tsx**: Wraps all pages, includes Navigation and Footer
- **src/app/page.tsx**: Homepage with animated hero and section grid
- **src/app/[section]/page.tsx**: Individual section pages

### Components
- **Navigation.tsx**: Sticky nav bar with active state indicators
- **Button.tsx**: Reusable animated button with variants
- **Card.tsx**: Card component with hover animations

### Utilities
- **lib/utils.ts**: Helper functions (className merging, date formatting)
- **lib/data.ts**: Centralized content data (easy to update)
- **lib/animations.ts**: Reusable animation variants for Framer Motion

### Types
- **types/index.ts**: TypeScript interfaces for type safety

## Adding New Content

1. **Projects**: Add to `src/lib/data.ts` in the `projects` array
2. **Thoughts**: Add to `src/lib/data.ts` in the `thoughts` array
3. **Videos**: Add to `src/lib/data.ts` in the `videos` array
4. **Images**: Place in `public/images/` and reference as `/images/filename.jpg`
5. **Videos**: Place in `public/videos/` or embed YouTube/Vimeo URLs

## Next Steps for Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Customize content in `src/lib/data.ts`
4. Add images to `public/images/`
5. Customize styling in `tailwind.config.js` and `src/styles/globals.css`
6. Build out individual section pages with your content

