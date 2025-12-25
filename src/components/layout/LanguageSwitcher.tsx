'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { useState } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-deep-sea-blue-800/50 hover:bg-deep-sea-blue-700/50 border border-deep-sea-blue-600/30 text-deep-sea-blue-200 transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.name}</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-deep-sea-blue-900/95 backdrop-blur-md rounded-lg border border-deep-sea-blue-600/50 shadow-xl z-50 min-w-[180px]"
          >
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-deep-sea-blue-800/50 transition-colors ${
                    locale === lang.code
                      ? 'bg-accent-teal/20 text-accent-teal'
                      : 'text-deep-sea-blue-200'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                  {locale === lang.code && (
                    <span className="ml-auto text-accent-teal">✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

