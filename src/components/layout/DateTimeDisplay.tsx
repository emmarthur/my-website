'use client'

import { useState, useEffect } from 'react'

export function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)
  const [timezone, setTimezone] = useState<string>('America/Los_Angeles')

  useEffect(() => {
    setMounted(true)
    
    // Load timezone from localStorage
    const savedTimezone = localStorage.getItem('timezone')
    if (savedTimezone) {
      setTimezone(savedTimezone)
    } else {
      // Try to detect user's timezone
      try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        setTimezone(userTimezone)
      } catch (e) {
        // Fallback to default
        setTimezone('America/Los_Angeles')
      }
    }

    // Listen for timezone changes
    const handleTimezoneChange = (event: CustomEvent) => {
      setTimezone(event.detail)
    }
    window.addEventListener('timezoneChanged', handleTimezoneChange as EventListener)

    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000) // Update every second

    return () => {
      clearInterval(timer)
      window.removeEventListener('timezoneChanged', handleTimezoneChange as EventListener)
    }
  }, [])

  const formatDate = (date: Date, tz: string) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: tz
    })
  }

  const formatTime = (date: Date, tz: string) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: tz
    })
  }

  const getTimezoneAbbr = (tz: string) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        timeZoneName: 'short'
      })
      const parts = formatter.formatToParts(new Date())
      const tzName = parts.find(part => part.type === 'timeZoneName')
      return tzName?.value || tz.split('/').pop()?.replace('_', ' ') || tz
    } catch (e) {
      return tz.split('/').pop()?.replace('_', ' ') || tz
    }
  }

  // Prevent hydration mismatch by not rendering time until client-side
  if (!mounted) {
    return (
      <div className="bg-deep-sea-blue-800/60 backdrop-blur-sm border-b border-deep-sea-blue-700/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm text-deep-sea-blue-200 flex-wrap">
            <span className="font-medium font-heading">{formatDate(new Date(), timezone)}</span>
            <span className="text-deep-sea-blue-400">•</span>
            <span className="font-mono text-accent-teal">--:--:-- --</span>
            <span className="text-deep-sea-blue-400">•</span>
            <span className="text-accent-purple">--</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-deep-sea-blue-800/60 backdrop-blur-sm border-b border-deep-sea-blue-700/30 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-sm text-deep-sea-blue-200 flex-wrap">
          <span className="font-medium font-heading" suppressHydrationWarning>{formatDate(dateTime, timezone)}</span>
          <span className="text-deep-sea-blue-400">•</span>
          <span className="font-mono text-accent-teal" suppressHydrationWarning>{formatTime(dateTime, timezone)}</span>
          <span className="text-deep-sea-blue-400">•</span>
          <span className="text-accent-purple font-semibold" suppressHydrationWarning>{getTimezoneAbbr(timezone)}</span>
        </div>
      </div>
    </div>
  )
}

