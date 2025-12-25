'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { useState, useEffect } from 'react'
import { Link } from '@/i18n/routing'

const TIMEZONES = [
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Phoenix', label: 'Arizona Time' },
  { value: 'America/Anchorage', label: 'Alaska Time' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Europe/Moscow', label: 'Moscow (MSK)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT)' },
  { value: 'Africa/Accra', label: 'Accra (GMT)' },
  { value: 'UTC', label: 'UTC' },
]

export default function TimezoneSettingsPage() {
  const t = useTranslations('settings.timezone')
  const tCommon = useTranslations('common')
  const [selectedTimezone, setSelectedTimezone] = useState<string>('America/Los_Angeles')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load timezone from localStorage
    const savedTimezone = localStorage.getItem('timezone')
    if (savedTimezone) {
      setSelectedTimezone(savedTimezone)
    } else {
      // Try to detect user's timezone
      try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        setSelectedTimezone(userTimezone)
      } catch (e) {
        // Fallback to default
        setSelectedTimezone('America/Los_Angeles')
      }
    }
  }, [])

  const handleTimezoneChange = (timezone: string) => {
    setSelectedTimezone(timezone)
    localStorage.setItem('timezone', timezone)
    // Trigger a custom event to notify DateTimeDisplay
    window.dispatchEvent(new CustomEvent('timezoneChanged', { detail: timezone }))
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="mb-6">
          <Link 
            href="/settings"
            className="inline-flex items-center text-deep-sea-blue-200 hover:text-accent-teal transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('back')} to Settings
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-teal bg-clip-text text-transparent font-heading">{t('title')}</h1>
        <p className="text-xl text-deep-sea-blue-50 mb-12">
          {t('description')}
        </p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMEZONES.map((tz) => (
              <button
                key={tz.value}
                onClick={() => handleTimezoneChange(tz.value)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedTimezone === tz.value
                    ? 'border-accent-teal bg-accent-teal/20 text-accent-teal'
                    : 'border-deep-sea-blue-600/30 bg-deep-sea-blue-800/30 text-deep-sea-blue-200 hover:border-accent-teal/50'
                }`}
              >
                <div className="font-semibold">{tz.label}</div>
                <div className="text-sm text-deep-sea-blue-400 mt-1">{tz.value}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-deep-sea-blue-900/50 rounded-lg border border-deep-sea-blue-600/30">
            <p className="text-sm text-deep-sea-blue-300">
              <strong className="text-accent-teal">{t('current')}:</strong> {selectedTimezone}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

