export type AnalysisSection = {
  id: string
  title: string
  content: string
}

export type AnalysisResult = {
  report: string
  sections: AnalysisSection[]
  success: boolean
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function runRetailSimulation(
  description: string,
  onProgress?: (status: string) => void,
): Promise<AnalysisResult> {
  const startResponse = await fetch('/api/retail-simulator/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  })

  const startPayload = await startResponse.json().catch(() => ({}))
  if (!startResponse.ok) {
    const detail =
      typeof startPayload.error === 'string'
        ? startPayload.error
        : 'Could not start the simulation. Try again later.'
    throw new Error(detail)
  }

  const jobId = startPayload.jobId as string
  onProgress?.('queued')

  for (let attempt = 0; attempt < 240; attempt += 1) {
    await sleep(5000)
    const statusResponse = await fetch(`/api/retail-simulator/jobs/${jobId}`)
    const statusPayload = await statusResponse.json().catch(() => ({}))

    if (!statusResponse.ok) {
      throw new Error('Lost connection while the simulation was running.')
    }

    const status = statusPayload.status as string
    onProgress?.(status)

    if (status === 'completed') {
      return {
        report: statusPayload.report as string,
        sections: (statusPayload.sections as AnalysisSection[]) ?? [],
        success: true,
      }
    }

    if (status === 'failed') {
      throw new Error(
        (statusPayload.error as string) || 'Simulation failed on the server.',
      )
    }
  }

  throw new Error(
    'Simulation is taking longer than expected. Leave the tab open or try again.',
  )
}
