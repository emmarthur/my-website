# Backend Image Generation Service

## Overview

The AI image generation is now a **backend service** that automatically generates images based on your content. This runs server-side and can be triggered when you add new content to your website.

## How It Works

1. **You add content** (thoughts, projects, etc.)
2. **Backend analyzes** the content and creates an appropriate image prompt
3. **AI generates** a relevant image
4. **Image is stored** and can be used on your website

## Usage

### Automatic Generation

When you create new content, the backend can automatically generate images:

```typescript
// Example: When creating a new thought
const thought = {
  title: "My thoughts on AI",
  content: "AI is transforming how we work and create...",
  category: "thoughts"
}

// Backend automatically generates an image
const imageUrl = await autoGenerateImage({
  content: thought.content,
  category: 'thoughts',
  context: thought.title
})
```

### API Endpoint

You can also trigger generation via API:

```bash
POST /api/images/auto-generate
Content-Type: application/json

{
  "content": "Your content here...",
  "category": "career", // or "hobbies", "thoughts", "media", "general"
  "context": "Optional additional context"
}
```

## Integration Examples

### When Creating a Thought

```typescript
// In your content creation API
import { autoGenerateImage } from '@/lib/ai/auto-generate'

export async function createThought(thoughtData) {
  // Create the thought
  const thought = await thoughtsDB.create(thoughtData)
  
  // Auto-generate an image based on the content
  const imageUrl = await autoGenerateImage({
    content: thought.content,
    category: 'thoughts',
    context: thought.title
  })
  
  // Update thought with generated image
  if (imageUrl) {
    await thoughtsDB.update(thought.id, { imageUrl })
  }
  
  return thought
}
```

### When Creating a Project

```typescript
// Auto-generate project image
const imageUrl = await autoGenerateImage({
  content: project.description,
  category: 'career',
  context: `${project.title} - ${project.technologies.join(', ')}`
})
```

## How Prompts Are Created

The service automatically:
1. **Extracts themes** from your content
2. **Applies category-specific styles**:
   - Career: professional, modern, tech-focused
   - Hobbies: creative, vibrant, artistic
   - Thoughts: abstract, contemplative, philosophical
   - Media: visual, cinematic, engaging
3. **Adds your color theme** (deep sea blue)
4. **Creates a high-quality prompt** for the AI

## Stored Images

Generated images are stored in:
- Database: `data/generated_images.json`
- Metadata includes: URL, prompt, category, content snippet, timestamp

## Cost

- Uses Flux Schnell: ~$0.003 per image
- Very affordable for automatic generation
- Images are cached/stored, so you don't regenerate unnecessarily

## Future Enhancements

- [ ] Batch generation for existing content
- [ ] Image caching (don't regenerate for similar content)
- [ ] Scheduled regeneration
- [ ] Image optimization and storage
- [ ] Multiple image styles per content

## Example Workflow

1. You write a new thought: "Reflecting on my journey in AI..."
2. Backend extracts themes: "reflecting", "journey", "AI"
3. Creates prompt: "A beautiful, vibrant image representing: reflecting, journey, AI. Style: abstract, contemplative, philosophical..."
4. Generates image
5. Stores image URL with your thought
6. Image appears on your website automatically

This way, your website gets beautiful, relevant images without you having to manually create or find them!

