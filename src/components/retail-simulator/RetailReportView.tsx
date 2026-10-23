'use client'

import type { AnalysisResult } from '@/lib/retail-simulator'

type Props = {
  result: AnalysisResult
}

function renderBlock(text: string) {
  return text.split('\n').map((line, index) => (
    <p key={index} className="text-deep-sea-blue-200 text-sm leading-relaxed mb-2">
      {line.trim() === '' ? '\u00A0' : line}
    </p>
  ))
}

export function RetailReportView({ result }: Props) {
  const sections =
    result.sections.length > 0
      ? result.sections
      : [{ id: 'summary', title: 'Impact summary', content: result.report }]

  return (
    <section className="mt-12 space-y-6 border-t border-deep-sea-blue-700/50 pt-10">
      <h2 className="text-2xl font-semibold text-deep-sea-blue-50">Results</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        {sections.map((section, index) => (
          <article
            key={section.id}
            className={`rounded-2xl border border-deep-sea-blue-600/30 bg-deep-sea-blue-900/30 p-5 ${
              index === sections.length - 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-teal mb-3">
              {section.title}
            </h3>
            <div className="max-h-[24rem] overflow-y-auto pr-1">
              {renderBlock(section.content)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
