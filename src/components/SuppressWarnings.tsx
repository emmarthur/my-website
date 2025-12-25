'use client'

import { useEffect } from 'react'

export function SuppressWarnings() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const originalWarn = console.warn
      console.warn = (...args: any[]) => {
        // Filter out Cursor-specific hydration warnings
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('data-cursor-ref') || 
           args[0].includes('Extra attributes from the server'))
        ) {
          return // Suppress this warning
        }
        originalWarn.apply(console, args)
      }

      return () => {
        console.warn = originalWarn
      }
    }
  }, [])

  return null
}

