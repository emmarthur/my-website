'use client'

import { useEffect, useRef } from 'react'

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function ChristmasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snowflakesRef = useRef<Snowflake[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create snowflakes
    const createSnowflakes = () => {
      const count = 50
      snowflakesRef.current = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    }
    createSnowflakes()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakesRef.current.forEach((flake) => {
        // Update position
        flake.y += flake.speed
        flake.x += Math.sin(flake.y * 0.01) * 0.5

        // Reset if off screen
        if (flake.y > canvas.height) {
          flake.y = -10
          flake.x = Math.random() * canvas.width
        }
        if (flake.x > canvas.width) flake.x = 0
        if (flake.x < 0) flake.x = canvas.width

        // Draw snowflake
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Keep the deep sea blue base with subtle Christmas overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-sea-blue-900 via-deep-sea-blue-800 to-deep-sea-blue-900" />
      {/* Subtle Christmas gradient overlay - very light to preserve blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-green-900/5 to-deep-sea-blue-900/20" />
      
      {/* Animated snowflakes canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Decorative Christmas Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top decorative border with holly */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-red-900/30 to-transparent">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            {/* Holly leaves pattern */}
            <g fill="#16a34a" opacity="0.4">
              <path d="M50 30 Q60 20 70 30 Q60 40 50 30" />
              <path d="M200 25 Q210 15 220 25 Q210 35 200 25" />
              <path d="M350 35 Q360 25 370 35 Q360 45 350 35" />
              <path d="M500 20 Q510 10 520 20 Q510 30 500 20" />
              <path d="M650 30 Q660 20 670 30 Q660 40 650 30" />
              <path d="M800 25 Q810 15 820 25 Q810 35 800 25" />
              <path d="M950 35 Q960 25 970 35 Q960 45 950 35" />
              <path d="M1100 20 Q1110 10 1120 20 Q1110 30 1100 20" />
            </g>
            {/* Berries */}
            <g fill="#dc2626" opacity="0.5">
              <circle cx="60" cy="30" r="4" />
              <circle cx="210" cy="25" r="4" />
              <circle cx="360" cy="35" r="4" />
              <circle cx="510" cy="20" r="4" />
              <circle cx="660" cy="30" r="4" />
              <circle cx="810" cy="25" r="4" />
              <circle cx="960" cy="35" r="4" />
              <circle cx="1110" cy="20" r="4" />
            </g>
          </svg>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/30 to-transparent">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <g fill="#16a34a" opacity="0.4">
              <path d="M100 70 Q110 60 120 70 Q110 80 100 70" />
              <path d="M250 75 Q260 65 270 75 Q260 85 250 75" />
              <path d="M400 65 Q410 55 420 65 Q410 75 400 65" />
              <path d="M550 80 Q560 70 570 80 Q560 90 550 80" />
              <path d="M700 70 Q710 60 720 70 Q710 80 700 70" />
              <path d="M850 75 Q860 65 870 75 Q860 85 850 75" />
              <path d="M1000 65 Q1010 55 1020 65 Q1010 75 1000 65" />
              <path d="M1150 80 Q1160 70 1170 80 Q1160 90 1150 80" />
            </g>
            <g fill="#dc2626" opacity="0.5">
              <circle cx="110" cy="70" r="4" />
              <circle cx="260" cy="75" r="4" />
              <circle cx="410" cy="65" r="4" />
              <circle cx="560" cy="80" r="4" />
              <circle cx="710" cy="70" r="4" />
              <circle cx="860" cy="75" r="4" />
              <circle cx="1010" cy="65" r="4" />
              <circle cx="1160" cy="80" r="4" />
            </g>
          </svg>
        </div>

        {/* Left side decorative ornaments */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-16">
          <div className="h-full flex flex-col justify-around items-center">
            {[...Array(3)].map((_, i) => (
              <div key={`left-ornament-${i}`} className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-yellow-300/60 bg-gradient-to-br from-yellow-200/40 to-yellow-400/40 shadow-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side decorative ornaments */}
        <div className="absolute right-0 top-1/4 bottom-1/4 w-16">
          <div className="h-full flex flex-col justify-around items-center">
            {[...Array(3)].map((_, i) => (
              <div key={`right-ornament-${i}`} className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-red-300/60 bg-gradient-to-br from-red-200/40 to-red-400/40 shadow-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Christmas tree silhouettes in corners */}
        <div className="absolute top-20 left-10 w-32 h-40 opacity-20">
          <svg viewBox="0 0 100 120" className="w-full h-full">
            <path d="M50 10 L30 50 L50 45 L70 50 Z" fill="#16a34a" />
            <path d="M50 35 L20 80 L50 70 L80 80 Z" fill="#16a34a" />
            <path d="M50 65 L10 120 L50 100 L90 120 Z" fill="#16a34a" />
            <rect x="45" y="110" width="10" height="10" fill="#8b4513" />
            <circle cx="50" cy="25" r="3" fill="#dc2626" />
            <circle cx="35" cy="60" r="3" fill="#dc2626" />
            <circle cx="65" cy="60" r="3" fill="#dc2626" />
            <circle cx="50" cy="85" r="3" fill="#dc2626" />
          </svg>
        </div>

        <div className="absolute top-20 right-10 w-32 h-40 opacity-20">
          <svg viewBox="0 0 100 120" className="w-full h-full">
            <path d="M50 10 L30 50 L50 45 L70 50 Z" fill="#16a34a" />
            <path d="M50 35 L20 80 L50 70 L80 80 Z" fill="#16a34a" />
            <path d="M50 65 L10 120 L50 100 L90 120 Z" fill="#16a34a" />
            <rect x="45" y="110" width="10" height="10" fill="#8b4513" />
            <circle cx="50" cy="25" r="3" fill="#dc2626" />
            <circle cx="35" cy="60" r="3" fill="#dc2626" />
            <circle cx="65" cy="60" r="3" fill="#dc2626" />
            <circle cx="50" cy="85" r="3" fill="#dc2626" />
          </svg>
        </div>

        {/* Subtle star pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,5 55,20 70,20 58,30 63,45 50,35 37,45 42,30 30,20 45,20" fill="#fbbf24" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
          </svg>
        </div>
      </div>
    </div>
  )
}

