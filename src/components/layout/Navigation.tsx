'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from './LanguageSwitcher'
import { DateTimeDisplay } from './DateTimeDisplay'

const navItems = [
  { key: 'home', path: '/' },
  { key: 'career', path: '/career' },
  { key: 'hobbies', path: '/hobbies' },
  { key: 'health', path: '/health' },
  { key: 'thoughts', path: '/thoughts' },
  { key: 'media', path: '/media' },
  { key: 'settings', path: '/settings' },
]

export function Navigation() {
  const t = useTranslations('nav')
  const pathname = usePathname()

  return (
    <>
      <nav className="sticky top-0 z-50 bg-deep-sea-blue-900/80 backdrop-blur-md border-b border-deep-sea-blue-700/50 shadow-lg">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                href="/" 
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-deep-sea-blue-100 to-accent-teal bg-clip-text text-transparent font-heading"
                suppressHydrationWarning
              >
                My Diary
              </Link>
              <LanguageSwitcher />
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "relative px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent-teal"
                        : "text-deep-sea-blue-200 hover:text-accent-teal"
                    )}
                    suppressHydrationWarning
                  >
                    {t(item.key)}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
            
            {/* Mobile Menu - Simple dropdown for now */}
            <div className="md:hidden flex items-center">
              <select
                value={pathname}
                onChange={(e) => {
                  window.location.href = e.target.value
                }}
                className="bg-deep-sea-blue-800/50 border border-deep-sea-blue-600/30 rounded px-2 py-1 text-xs text-deep-sea-blue-200 focus:outline-none focus:ring-2 focus:ring-accent-teal"
                suppressHydrationWarning
              >
                {navItems.map((item) => (
                  <option key={item.path} value={item.path}>
                    {t(item.key)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
      <DateTimeDisplay />
    </>
  )
}

