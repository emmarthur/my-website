import { NextResponse } from 'next/server'

const API_BASE = process.env.RETAIL_ANALYSIS_API_URL?.replace(/\/$/, '')

type RouteContext = {
  params: { jobId: string }
}

export async function GET(_request: Request, context: RouteContext) {
  if (!API_BASE) {
    return NextResponse.json(
      { error: 'Simulator API is not configured yet.' },
      { status: 503 },
    )
  }

  const jobId = context.params.jobId
  const upstream = await fetch(`${API_BASE}/api/jobs/${jobId}`, {
    method: 'GET',
    cache: 'no-store',
  })

  const payload = await upstream.json().catch(() => ({}))
  if (!upstream.ok) {
    return NextResponse.json(
      { error: 'Job not found.' },
      { status: upstream.status },
    )
  }

  return NextResponse.json({
    status: payload.status,
    report: payload.report,
    sections: payload.sections,
    error: payload.error,
  })
}
