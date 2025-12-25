# API Setup Guide

## Unsplash API (Optional - for Dynamic Background Images)

The website includes integration with Unsplash API to fetch beautiful, relevant images for backgrounds. This is completely optional - the site works beautifully with the animated particle system and gradient backgrounds even without it.

### Getting Started

1. **Create a Free Unsplash Account**
   - Go to https://unsplash.com/developers
   - Sign up or log in

2. **Create a New Application**
   - Click "Your apps" → "New Application"
   - Fill in the application details
   - Accept the API Use and Access Policy

3. **Get Your Access Key**
   - On the application page, you'll see two keys:
     - **Access Key** (also called Application ID) - ✅ **USE THIS ONE**
     - **Secret Key** - ❌ **DO NOT USE** (only for server-side operations)
   - Copy your **"Access Key"** (the longer one, also labeled as Application ID)

4. **Add to Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add: `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_access_key_here`
   - The `.env.local` file is already in `.gitignore` so your key won't be committed
   
   **Important**: Use the **Access Key**, NOT the Secret Key. The Access Key is safe to use in client-side code (that's why it starts with `NEXT_PUBLIC_`). The Secret Key should never be exposed in client-side code.

### Usage

The API is already integrated in `src/lib/api/unsplash.ts`. You can use it in components like this:

```typescript
import { getUnsplashImage } from '@/lib/api/unsplash'

// In a component
const image = await getUnsplashImage('technology abstract')
```

### Alternative APIs

If you want to use other image/video APIs:

1. **Pexels API** - For videos and images
   - https://www.pexels.com/api/
   - Similar setup process

2. **Pixabay API** - Free images and videos
   - https://pixabay.com/api/docs/

3. **AI Image Generation APIs**
   - **OpenAI DALL-E** - Requires API key from OpenAI
   - **Stability AI** - For AI-generated images
   - **Replicate** - Access to various AI models including image generation

### Note on Midjourney

Midjourney doesn't have a public API. However, you can:
- Use other AI image generation APIs mentioned above
- Generate images manually and add them to `public/images/`
- Use the built-in animated particle system (which is already beautiful!)

### Current Implementation

The website currently uses:
- ✅ Animated particle system with connections (neural network-like)
- ✅ Floating gradient orbs (colorful, dynamic)
- ✅ Deep sea blue gradient backgrounds
- ✅ Vibrant accent colors (orange, purple, teal, gold)

All of these work without any API keys and create a stunning, vibrant background!

