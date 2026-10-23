'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { runRetailSimulation, type AnalysisResult } from '@/lib/retail-simulator'
import { RetailReportView } from '@/components/retail-simulator/RetailReportView'

const EXAMPLES = [
  'Opening a sustainable fashion store in downtown Seattle with a 2,500 sq ft showroom and e-commerce. Target: eco-conscious shoppers 25–45. Initial inventory $150k; projected $75k monthly sales year one.',
  'Launching a premium tech accessories shop in Shibuya, Tokyo (1,800 sq ft) with repair services and workshops. Investment $200k; projected $90k monthly sales.',
]

export function RetailSimulatorPanel() {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError(null)
    setResult(null)
    setProgress(null)

    const trimmed = description.trim()
    if (trimmed.length < 40) {
      setError('Please add more detail (at least 40 characters).')
      return
    }

    setLoading(true)
    try {
      const data = await runRetailSimulation(trimmed, setProgress)
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
      setProgress(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Link
          href="/career/projects"
          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 mb-6 transition-colors"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-deep-sea-blue-100 to-accent-orange bg-clip-text text-transparent">
          Retail Impact Simulator
        </h1>
        <p className="text-lg text-deep-sea-blue-50 max-w-3xl mb-10">
          Describe a retail business or expansion idea. Specialist agents pull live
          market and operations signals, then synthesize a long-term impact report.
        </p>

        <form onSubmit={onSubmit} className="space-y-5 max-w-3xl">
          <label className="block text-sm font-medium text-deep-sea-blue-100" htmlFor="retail-description">
            Your retail project
          </label>
          <textarea
            id="retail-description"
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
            placeholder="Location, customers, channels (store, online), budget, timeline, and goals."
            className="w-full rounded-xl border border-deep-sea-blue-600/40 bg-deep-sea-blue-900/40 px-4 py-3 text-sm text-deep-sea-blue-50 placeholder:text-deep-sea-blue-400 focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal disabled:opacity-60"
          />

          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((sample, index) => (
              <button
                key={index}
                type="button"
                disabled={loading}
                onClick={() => setDescription(sample)}
                className="rounded-full border border-deep-sea-blue-600/40 px-3 py-1.5 text-xs text-deep-sea-blue-200 hover:border-accent-teal/50 transition disabled:opacity-50"
              >
                Example {index + 1}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-accent-teal px-6 py-3 text-sm font-semibold text-deep-sea-blue-950 hover:bg-accent-teal/90 transition disabled:opacity-60"
          >
            {loading ? 'Running simulation…' : 'Run simulation'}
          </button>

          {loading && (
            <p className="text-sm text-deep-sea-blue-200">
              {progress === 'running' || progress === 'queued'
                ? 'Agents are working. This usually takes 5–15 minutes. Keep this tab open.'
                : 'Starting simulation…'}
            </p>
          )}

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </form>

        {result && <RetailReportView result={result} />}
      </motion.div>
    </div>
  )
}
