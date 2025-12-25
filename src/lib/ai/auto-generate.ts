// Backend service for automatically generating images based on user content
// This runs server-side to generate images for use on the website

import { generateImage } from './replicate'
import { generatedImagesDB } from '../db/json-db'

export interface AutoGenerateOptions {
  content: string // User's content (thought, project description, etc.)
  category: 'career' | 'hobbies' | 'thoughts' | 'media' | 'general'
  context?: string // Additional context
}

/**
 * Automatically generate an image based on user content
 * This analyzes the content and creates an appropriate prompt
 */
export async function autoGenerateImage(options: AutoGenerateOptions): Promise<string | null> {
  const { content, category, context } = options

  try {
    // Create a prompt based on the content and category
    const prompt = createPromptFromContent(content, category, context)

    // Generate the image
    const images = await generateImage({
      prompt,
      model: 'flux', // Uses flux-schnell (cheap)
      width: 1024,
      height: 1024,
    })

    if (images.length === 0) {
      return null
    }

    const imageUrl = images[0].url

    // Store the generated image metadata
    await generatedImagesDB.create({
      url: imageUrl,
      prompt,
      category,
      content: content.substring(0, 200), // Store first 200 chars
      context,
      createdAt: new Date().toISOString(),
    })

    return imageUrl
  } catch (error) {
    console.error('Error auto-generating image:', error)
    return null
  }
}

/**
 * Create an AI prompt from user content
 */
function createPromptFromContent(
  content: string,
  category: string,
  context?: string
): string {
  // Extract key themes and concepts from content
  const themes = extractThemes(content)
  
  // Category-specific prompt templates
  const categoryPrompts: Record<string, string> = {
    career: 'professional, modern, tech-focused, innovative, clean design',
    hobbies: 'creative, vibrant, artistic, colorful, dynamic',
    thoughts: 'abstract, contemplative, philosophical, serene, deep',
    media: 'visual, cinematic, engaging, high-quality, artistic',
    general: 'beautiful, vibrant, modern, engaging',
  }

  const categoryStyle = categoryPrompts[category] || categoryPrompts.general
  
  // Build the prompt
  let prompt = `A beautiful, vibrant image representing: ${themes.join(', ')}. `
  prompt += `Style: ${categoryStyle}, deep sea blue color theme, `
  prompt += `modern digital art, high quality, cinematic lighting`
  
  if (context) {
    prompt += `. Context: ${context}`
  }

  return prompt
}

/**
 * Extract key themes and concepts from text content
 */
function extractThemes(content: string): string[] {
  // Simple keyword extraction (you can enhance this with NLP)
  const keywords = content
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 4) // Filter short words
    .filter(word => !isCommonWord(word)) // Filter common words
  
  // Get unique keywords (limit to 5 most relevant)
  const uniqueKeywords = Array.from(new Set(keywords)).slice(0, 5)
  
  // If no keywords found, use generic themes
  if (uniqueKeywords.length === 0) {
    return ['abstract', 'modern', 'vibrant']
  }
  
  return uniqueKeywords
}

/**
 * Check if a word is a common word (stop words)
 */
function isCommonWord(word: string): boolean {
  const commonWords = [
    'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'her',
    'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how',
    'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy',
    'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use', 'that', 'this',
    'with', 'have', 'from', 'they', 'know', 'want', 'been', 'good', 'much',
    'some', 'time', 'very', 'when', 'come', 'here', 'just', 'like', 'long',
    'make', 'many', 'over', 'such', 'take', 'than', 'them', 'well', 'were',
    'what', 'your', 'about', 'after', 'again', 'before', 'being', 'below',
    'could', 'every', 'first', 'found', 'great', 'might', 'never', 'other',
    'place', 'right', 'should', 'still', 'think', 'those', 'three', 'under',
    'while', 'where', 'which', 'would', 'years', 'their', 'there', 'these',
    'thing', 'think', 'those', 'three', 'under', 'until', 'water', 'which',
    'while', 'where', 'would', 'write', 'years', 'after', 'again', 'being',
    'below', 'could', 'every', 'first', 'found', 'great', 'might', 'never',
    'other', 'place', 'right', 'should', 'still', 'think', 'those', 'three',
  ]
  
  return commonWords.includes(word.toLowerCase())
}

/**
 * Generate images for multiple content items in batch
 */
export async function batchGenerateImages(
  items: Array<{ content: string; category: string; id?: string }>
): Promise<Record<string, string>> {
  const results: Record<string, string> = {}

  for (const item of items) {
    try {
      const imageUrl = await autoGenerateImage({
        content: item.content,
        category: item.category as any,
      })

      if (imageUrl && item.id) {
        results[item.id] = imageUrl
      }

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`Error generating image for item ${item.id}:`, error)
    }
  }

  return results
}

