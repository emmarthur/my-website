'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Link } from '@/i18n/routing'
import { useState, useEffect } from 'react'

export default function SettingsPage() {
  const t = useTranslations('settings')
  const [currentTimezone, setCurrentTimezone] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load timezone from localStorage
    const savedTimezone = localStorage.getItem('timezone')
    if (savedTimezone) {
      setCurrentTimezone(savedTimezone)
    } else {
      // Try to detect user's timezone
      try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        setCurrentTimezone(userTimezone)
      } catch (e) {
        // Fallback to default
        setCurrentTimezone('America/Los_Angeles')
      }
    }

    // Listen for timezone changes
    const handleTimezoneChange = (event: CustomEvent) => {
      setCurrentTimezone(event.detail)
    }
    window.addEventListener('timezoneChanged', handleTimezoneChange as EventListener)

    return () => {
      window.removeEventListener('timezoneChanged', handleTimezoneChange as EventListener)
    }
  }, [])

  const getTimezoneLabel = (tz: string) => {
    const timezoneMap: Record<string, string> = {
      'America/Los_Angeles': 'Pacific Time (PT)',
      'America/Denver': 'Mountain Time (MT)',
      'America/Chicago': 'Central Time (CT)',
      'America/New_York': 'Eastern Time (ET)',
      'America/Phoenix': 'Arizona Time',
      'America/Anchorage': 'Alaska Time',
      'Pacific/Honolulu': 'Hawaii Time',
      'Europe/London': 'London (GMT)',
      'Europe/Paris': 'Paris (CET)',
      'Europe/Berlin': 'Berlin (CET)',
      'Europe/Moscow': 'Moscow (MSK)',
      'Asia/Dubai': 'Dubai (GST)',
      'Asia/Kolkata': 'India (IST)',
      'Asia/Shanghai': 'Shanghai (CST)',
      'Asia/Tokyo': 'Tokyo (JST)',
      'Australia/Sydney': 'Sydney (AEDT)',
      'Africa/Accra': 'Accra (GMT)',
      'UTC': 'UTC',
    }
    return timezoneMap[tz] || tz
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-teal bg-clip-text text-transparent font-heading">{t('title')}</h1>
        <p className="text-xl text-deep-sea-blue-50 mb-12">
          {t('description')}
        </p>
        
        <div className="space-y-4">
          {/* Timezone Option */}
          <Link href="/settings/timezone">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-deep-sea-blue-400/30 hover:border-accent-teal/50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-deep-sea-blue-50 font-heading">{t('timezone.title')}</h2>
                  <p className="text-deep-sea-blue-200 mb-2">{t('timezone.description')}</p>
                  {currentTimezone && (
                    <p className="text-sm text-deep-sea-blue-300">
                      <strong className="text-accent-teal">{t('timezone.current')}:</strong> {getTimezoneLabel(currentTimezone)}
                    </p>
                  )}
                </div>
                <svg className="w-6 h-6 text-deep-sea-blue-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

