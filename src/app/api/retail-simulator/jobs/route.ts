import { NextResponse } from 'next/server'

const API_BASE = process.env.RETAIL_ANALYSIS_API_URL?.replace(/\/$/, '')

export async function POST(request: Request) {
  if (!API_BASE) {
    return NextResponse.json(
      { error: 'Simulator API is not configured yet.' },
      { status: 503 },
    )
  }

  const body = await request.json().catch(() => null)
  const description = body?.description?.trim()

  if (!description || description.length < 40) {
    return NextResponse.json(
      { error: 'Please provide a longer project description (40+ characters).' },
      { status: 400 },
    )
  }

  const upstream = await fetch(`${API_BASE}/api/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  })

  const payload = await upstream.json().catch(() => ({}))
  if (!upstream.ok) {
    const detail =
      typeof payload.detail === 'string'
        ? payload.detail
        : 'Could not start simulation on the analysis server.'
    return NextResponse.json({ error: detail }, { status: upstream.status })
  }

  return NextResponse.json({
    jobId: payload.job_id,
    status: payload.status,
  })
}
