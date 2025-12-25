// API Route for individual thought operations
// GET /api/content/thoughts/[id] - Get a specific thought
// PUT /api/content/thoughts/[id] - Update a thought
// DELETE /api/content/thoughts/[id] - Delete a thought

import { NextRequest, NextResponse } from 'next/server'
import { thoughtsDB } from '@/lib/db/json-db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const thought = await thoughtsDB.findById(params.id)
    if (!thought) {
      return NextResponse.json({ error: 'Thought not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, thought })
  } catch (error: any) {
    console.error('Error fetching thought:', error)
    return NextResponse.json(
      { error: 'Failed to fetch thought', message: error.message },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const thought = await thoughtsDB.update(params.id, body)
    if (!thought) {
      return NextResponse.json({ error: 'Thought not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, thought })
  } catch (error: any) {
    console.error('Error updating thought:', error)
    return NextResponse.json(
      { error: 'Failed to update thought', message: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await thoughtsDB.delete(params.id)
    if (!deleted) {
      return NextResponse.json({ error: 'Thought not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, message: 'Thought deleted' })
  } catch (error: any) {
    console.error('Error deleting thought:', error)
    return NextResponse.json(
      { error: 'Failed to delete thought', message: error.message },
      { status: 500 }
    )
  }
}

