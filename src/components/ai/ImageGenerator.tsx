'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    setLoading(true)
    setError(null)
    setImages([])

    try {
      const response = await fetch('/api/images/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          model: 'flux', // Uses flux-schnell (free tier friendly)
          width: 1024,
          height: 1024,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image')
      }

      if (data.images && data.images.length > 0) {
        setImages(data.images.map((img: any) => img.url))
      } else {
        throw new Error('No images generated')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate image')
      console.error('Error generating image:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-deep-sea-blue-50">
        AI Image Generator
      </h2>
      <p className="text-deep-sea-blue-200 mb-4">
        Generate beautiful images using AI (Flux Schnell model)
      </p>
      <div className="mb-4 p-3 bg-deep-sea-blue-800/50 rounded-lg border border-deep-sea-blue-600">
        <p className="text-sm text-deep-sea-blue-200">
          💰 <strong>Credits Required:</strong> You need credits in your Replicate account to generate images. 
          Flux Schnell costs only <strong>~$0.003 per image</strong> (very affordable!).
        </p>
        <p className="text-xs text-deep-sea-blue-300 mt-2">
          Add credits at: <a href="https://replicate.com/account/billing" target="_blank" rel="noopener noreferrer" className="text-accent-teal underline">replicate.com/account/billing</a>
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-deep-sea-blue-200 mb-2">
            Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full px-4 py-2 bg-deep-sea-blue-800/50 border border-deep-sea-blue-600 rounded-lg text-deep-sea-blue-50 placeholder-deep-sea-blue-400 focus:outline-none focus:ring-2 focus:ring-accent-teal"
            rows={3}
          />
        </div>

        <Button
          onClick={generateImage}
          disabled={loading || !prompt.trim()}
          variant="primary"
          className="w-full"
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </Button>

        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-200 font-semibold mb-2">⚠️ Error: {error}</p>
            {error.includes('credit') || error.includes('402') ? (
              <div className="text-red-200 text-sm space-y-2">
                <p>Your Replicate account needs credits to generate images.</p>
                <div className="mt-3 p-3 bg-deep-sea-blue-800/50 rounded border border-deep-sea-blue-600">
                  <p className="font-semibold mb-2">How to get credits:</p>
                  <ol className="list-decimal list-inside space-y-1 text-xs">
                    <li>Go to <a href="https://replicate.com/account/billing" target="_blank" rel="noopener noreferrer" className="text-accent-teal underline">Replicate Billing</a></li>
                    <li>Add credits (minimum $5, but very cheap per image)</li>
                    <li>Flux Schnell costs ~$0.003 per image (very affordable!)</li>
                    <li>Wait a few minutes after adding credits</li>
                  </ol>
                  <p className="mt-2 text-xs text-deep-sea-blue-300">
                    💡 Tip: Replicate sometimes offers free credits for new accounts. Check your account dashboard!
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-red-200 text-sm">{error}</p>
            )}
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-deep-sea-blue-50">
              Generated Images:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative rounded-lg overflow-hidden border border-deep-sea-blue-600"
                >
                  <img
                    src={url}
                    alt={`Generated image ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <a
                    href={url}
                    download
                    className="absolute bottom-2 right-2 px-3 py-1 bg-deep-sea-blue-900/80 text-deep-sea-blue-50 rounded text-sm hover:bg-deep-sea-blue-800"
                  >
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

