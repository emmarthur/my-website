// API Route for AI Image Generation
// POST /api/images/generate

import { NextRequest, NextResponse } from 'next/server'
import { generateImage, ImageGenerationOptions } from '@/lib/ai/replicate'

export async function POST(request: NextRequest) {
  try {
    // Check for API token
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { error: 'REPLICATE_API_TOKEN not configured' },
        { status: 500 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { prompt, model, width, height, num_outputs, guidance_scale } = body

    // Validate prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    // Validate prompt length
    if (prompt.length > 1000) {
      return NextResponse.json(
        { error: 'Prompt must be less than 1000 characters' },
        { status: 400 }
      )
    }

    // Rate limiting (simple check - you can enhance this)
    // TODO: Add proper rate limiting with Redis or similar

    // Generate image
    const options: ImageGenerationOptions = {
      prompt: prompt.trim(),
      model: model || 'flux',
      width: width || 1024,
      height: height || 1024,
      num_outputs: num_outputs || 1,
      guidance_scale: guidance_scale || 7.5,
    }

    const images = await generateImage(options)

    return NextResponse.json({
      success: true,
      images,
      prompt: options.prompt,
      model: options.model,
    })
  } catch (error: any) {
    console.error('Error in image generation API:', error)
    
    // Handle specific Replicate errors
    let errorMessage = error.message || 'Unknown error'
    let statusCode = 500

    if (error.message?.includes('402') || error.message?.includes('Insufficient credit')) {
      errorMessage = 'Insufficient credits. Your Replicate account needs credits to generate images. Visit https://replicate.com/account/billing to add credits. Flux Schnell costs only ~$0.003 per image.'
      statusCode = 402
    } else if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
      errorMessage = 'Invalid API token. Please check your REPLICATE_API_TOKEN in .env.local'
      statusCode = 401
    }

    return NextResponse.json(
      {
        error: 'Failed to generate image',
        message: errorMessage,
      },
      { status: statusCode }
    )
  }
}

// GET endpoint to check API status
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    hasApiKey: !!process.env.REPLICATE_API_TOKEN,
    message: 'AI Image Generation API is ready',
  })
}

