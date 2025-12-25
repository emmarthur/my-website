# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure Overview

The project is set up with:
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Responsive design
- ✅ Dark mode support

## Next Steps

1. **Add Your Content**
   - Edit `src/lib/data.ts` to add your projects, thoughts, videos, and hobbies
   - Add images to `public/images/`
   - Add videos to `public/videos/`

2. **Customize Design**
   - Modify colors in `tailwind.config.js`
   - Update styles in `src/styles/globals.css`
   - Customize components in `src/components/`

3. **Add More Features**
   - Implement blog system for thoughts
   - Add video gallery with YouTube integration
   - Create project showcase pages
   - Add search functionality

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- The linter errors you see are normal until you run `npm install`
- All pages are set up with basic structure - customize as needed
- Animation presets are available in `src/lib/animations.ts`

