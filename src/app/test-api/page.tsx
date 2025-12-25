'use client'

import { useState, useEffect } from 'react'
import { getUnsplashImage } from '@/lib/api/unsplash'

export default function TestApiPage() {
  const [status, setStatus] = useState<'checking' | 'success' | 'error' | 'no-key'>('checking')
  const [message, setMessage] = useState('')
  const [imageData, setImageData] = useState<any>(null)

  useEffect(() => {
    const checkApi = async () => {
      // Check if the environment variable is accessible
      const hasKey = !!process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
      
      if (!hasKey) {
        setStatus('no-key')
        setMessage('❌ API key not found in environment variables. Make sure you have NEXT_PUBLIC_UNSPLASH_ACCESS_KEY in your .env.local file and restarted the server.')
        return
      }

      setMessage('✅ API key found! Testing connection...')

      try {
        const image = await getUnsplashImage('technology')
        
        if (image) {
          setStatus('success')
          setMessage('✅ API key is working! Successfully fetched image from Unsplash.')
          setImageData(image)
        } else {
          setStatus('error')
          setMessage('⚠️ API key found but failed to fetch image. Check your key is valid.')
        }
      } catch (error: any) {
        setStatus('error')
        setMessage(`❌ Error: ${error.message || 'Failed to connect to Unsplash API'}`)
      }
    }

    checkApi()
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-deep-sea-blue-100 to-accent-teal bg-clip-text text-transparent">
          API Key Test
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-sea-blue-50">Status</h2>
            
            <div className={`p-4 rounded-lg ${
              status === 'success' ? 'bg-green-500/20 border border-green-500/50' :
              status === 'error' ? 'bg-red-500/20 border border-red-500/50' :
              status === 'no-key' ? 'bg-yellow-500/20 border border-yellow-500/50' :
              'bg-blue-500/20 border border-blue-500/50'
            }`}>
              <p className="text-white font-medium">{message}</p>
            </div>
          </div>

          {status === 'success' && imageData && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-deep-sea-blue-50">Test Image</h3>
              <div className="rounded-lg overflow-hidden border border-deep-sea-blue-400/30">
                <img 
                  src={imageData.urls.regular} 
                  alt={imageData.description || 'Test image'} 
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-2 text-sm text-deep-sea-blue-300">
                Image ID: {imageData.id}
              </p>
            </div>
          )}

          <div className="mt-8 p-4 bg-deep-sea-blue-800/50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-deep-sea-blue-50">Troubleshooting</h3>
            <ul className="list-disc list-inside space-y-2 text-deep-sea-blue-200 text-sm">
              <li>Make sure your .env.local file is in the root directory</li>
              <li>Variable name must be exactly: NEXT_PUBLIC_UNSPLASH_ACCESS_KEY</li>
              <li>Restart your dev server after adding/changing the key</li>
              <li>Use the Access Key (Application ID), not the Secret Key</li>
              <li>Check browser console (F12) for any additional errors</li>
            </ul>
          </div>

          <div className="mt-6">
            <a 
              href="/" 
              className="text-accent-teal hover:text-accent-teal/80 underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

