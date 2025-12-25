// API Route for managing thoughts/blog posts
// GET /api/content/thoughts - Get all thoughts
// POST /api/content/thoughts - Create a new thought

import { NextRequest, NextResponse } from 'next/server'
import { thoughtsDB } from '@/lib/db/json-db'

export async function GET() {
  try {
    const thoughts = await thoughtsDB.findAll()
    return NextResponse.json({ success: true, thoughts })
  } catch (error: any) {
    console.error('Error fetching thoughts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch thoughts', message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, category, tags } = body

    // Validation
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const thought = await thoughtsDB.create({
      title,
      content,
      category: category || 'general',
      tags: tags || [],
      date: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, thought }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating thought:', error)
    return NextResponse.json(
      { error: 'Failed to create thought', message: error.message },
      { status: 500 }
    )
  }
}

