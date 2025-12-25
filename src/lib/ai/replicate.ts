// Replicate API for AI image generation (Midjourney-style models)
// Get your API key from https://replicate.com/account/api-tokens

import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
})

export interface ImageGenerationOptions {
  prompt: string
  model?: 'midjourney' | 'flux' | 'stable-diffusion'
  width?: number
  height?: number
  num_outputs?: number
  guidance_scale?: number
}

export interface GeneratedImage {
  url: string
  id?: string
}

/**
 * Generate images using Replicate (supports Midjourney-style models)
 */
export async function generateImage(
  options: ImageGenerationOptions
): Promise<GeneratedImage[]> {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not set in environment variables')
  }

  const {
    prompt,
    model = 'flux',
    width = 1024,
    height = 1024,
    num_outputs = 1,
    guidance_scale = 7.5,
  } = options

  try {
    // Model mappings for different AI image generators
    // Using free/cheaper models that work with free tier
    const modelMap: Record<string, string> = {
      midjourney: 'black-forest-labs/flux-schnell', // Free tier alternative
      flux: 'black-forest-labs/flux-schnell', // Free tier - faster and cheaper
      'flux-pro': 'black-forest-labs/flux-pro', // Premium (requires credits)
      'stable-diffusion': 'stability-ai/sdxl', // Alternative option
      'flux-dev': 'black-forest-labs/flux-dev', // Development model (free tier)
    }

    // Default to flux-schnell (free tier friendly)
    const selectedModel = modelMap[model] || modelMap.flux

      // Adjust parameters based on model
      const isFluxSchnell = selectedModel.includes('flux-schnell')
      const input: any = {
        prompt,
      }

      // Flux-schnell has different parameters
      if (isFluxSchnell) {
        input.width = width
        input.height = height
        input.num_outputs = num_outputs
        // Flux-schnell doesn't use guidance_scale
      } else {
        input.width = width
        input.height = height
        input.num_outputs = num_outputs
        input.guidance_scale = guidance_scale
      }

      const output = await replicate.run(selectedModel as any, { input })

    // Handle different response formats
    if (Array.isArray(output)) {
      return output.map((url: string) => ({ url }))
    } else if (typeof output === 'string') {
      return [{ url: output }]
    } else if (output && typeof output === 'object' && 'url' in output) {
      return [output as GeneratedImage]
    }

    throw new Error('Unexpected response format from Replicate')
  } catch (error: any) {
    console.error('Error generating image with Replicate:', error)
    throw new Error(`Failed to generate image: ${error.message}`)
  }
}

/**
 * List available models
 */
export async function listModels() {
  // This would require Replicate API to list models
  // For now, return common models
  return [
    {
      id: 'flux-pro',
      name: 'Flux Pro (Midjourney-style)',
      description: 'High-quality image generation similar to Midjourney',
    },
    {
      id: 'stable-diffusion',
      name: 'Stable Diffusion XL',
      description: 'Open-source image generation model',
    },
  ]
}

