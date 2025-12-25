// Unsplash API integration for dynamic backgrounds
// Get your free API key from https://unsplash.com/developers

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''

export interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
    thumb: string
  }
  description: string | null
  color: string
  width: number
  height: number
}

export async function getUnsplashImage(query: string = 'technology abstract'): Promise<UnsplashImage | null> {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash API key not found. Using fallback gradients.')
    return null
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching Unsplash image:', error)
    return null
  }
}

export async function getUnsplashImages(query: string = 'technology', count: number = 5): Promise<UnsplashImage[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    return []
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=${count}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching Unsplash images:', error)
    return []
  }
}

