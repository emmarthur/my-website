// API Route for automatic image generation based on content
// POST /api/images/auto-generate
// This is a backend service - not for frontend use

import { NextRequest, NextResponse } from 'next/server'
import { autoGenerateImage } from '@/lib/ai/auto-generate'

export async function POST(request: NextRequest) {
  try {
    // Check for API token
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { error: 'REPLICATE_API_TOKEN not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { content, category, context } = body

    // Validation
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Content is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    if (!category || !['career', 'hobbies', 'thoughts', 'media', 'general'].includes(category)) {
      return NextResponse.json(
        { error: 'Valid category is required (career, hobbies, thoughts, media, general)' },
        { status: 400 }
      )
    }

    // Generate image
    const imageUrl = await autoGenerateImage({
      content: content.trim(),
      category: category as any,
      context: context || undefined,
    })

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      imageUrl,
      category,
    })
  } catch (error: any) {
    console.error('Error in auto-generate API:', error)
    return NextResponse.json(
      {
        error: 'Failed to generate image',
        message: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

