'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Link } from '@/i18n/routing'

export default function CareerPage() {
  const t = useTranslations('career')
  const tCommon = useTranslations('common')
  
  const careerSections = [
    {
      id: 'portfolio',
      titleKey: 'portfolio',
      descriptionKey: 'portfolioDescription',
      path: '/career/portfolio',
      gradient: 'from-deep-sea-blue-100 to-accent-gold',
      icon: '📋',
    },
    {
      id: 'education',
      titleKey: 'education',
      descriptionKey: 'educationDescription',
      path: '/career/education',
      gradient: 'from-deep-sea-blue-100 to-accent-teal',
      icon: '🎓',
    },
    {
      id: 'work',
      titleKey: 'work',
      descriptionKey: 'workDescription',
      path: '/career/work',
      gradient: 'from-deep-sea-blue-100 to-accent-purple',
      icon: '💼',
    },
    {
      id: 'projects',
      titleKey: 'projects',
      descriptionKey: 'projectsDescription',
      path: '/career/projects',
      gradient: 'from-deep-sea-blue-100 to-accent-orange',
      icon: '🚀',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-teal bg-clip-text text-transparent font-heading">{t('title')}</h1>
          <p className="text-xl text-deep-sea-blue-50 mb-12">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {careerSections.map((section) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={section.path}>
                <div className="bg-white/90 dark:bg-deep-sea-blue-900/90 backdrop-blur-md rounded-xl p-6 shadow-2xl hover:shadow-deep-sea-blue-500/50 transition-all cursor-pointer border border-deep-sea-blue-300/30 dark:border-deep-sea-blue-600/30 hover:border-accent-teal/50 h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{section.icon}</span>
                    <div className="flex-1">
                      <h2 className={`text-3xl font-semibold mb-3 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent font-heading`}>
                        {t(section.titleKey)}
                      </h2>
                      <p className="text-deep-sea-blue-700 dark:text-deep-sea-blue-200">
                        {t(section.descriptionKey)}
                      </p>
                      <div className="mt-4 flex items-center text-accent-teal text-sm font-medium">
                        {tCommon('explore')} →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}




