'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SectionImageProps {
  sectionId: string
  size?: number
  className?: string
}

// Map section IDs to their image paths
const sectionImageMap: Record<string, string> = {
  'career': '/images/sections/career.svg',
  'hobbies': '/images/sections/hobbies.svg',
  'health': '/images/sections/health.svg',
  'thoughts': '/images/sections/thoughts.svg',
  'media': '/images/sections/media.svg',
  'portfolio': '/images/sections/portfolio.svg',
  'education': '/images/sections/education.svg',
  'work': '/images/sections/work.svg',
  'projects': '/images/sections/projects.svg',
}

export function SectionImage({ sectionId, size = 64, className = '' }: SectionImageProps) {
  const [imageError, setImageError] = useState(false)
  const imagePath = sectionImageMap[sectionId]

  // If image doesn't exist or fails to load, show a fallback icon
  if (imageError || !imagePath) {
    return (
      <div 
        className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-deep-sea-blue-700 to-deep-sea-blue-800 border border-deep-sea-blue-600/30 ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-2xl text-deep-sea-blue-200">
          {getFallbackIcon(sectionId)}
        </span>
      </div>
    )
  }

  return (
    <div 
      className={`relative rounded-lg overflow-hidden bg-gradient-to-br from-deep-sea-blue-700/50 to-deep-sea-blue-800/50 border border-deep-sea-blue-600/30 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={imagePath}
        alt={sectionId}
        width={size}
        height={size}
        className="object-contain p-2"
        onError={() => setImageError(true)}
        unoptimized
      />
    </div>
  )
}

// Fallback icons if images don't exist
function getFallbackIcon(sectionId: string): string {
  const iconMap: Record<string, string> = {
    'career': '💼',
    'hobbies': '🎨',
    'health': '💚',
    'thoughts': '💭',
    'media': '🎬',
    'portfolio': '📋',
    'education': '🎓',
    'work': '💼',
    'projects': '🚀',
  }
  return iconMap[sectionId] || '📄'
}

