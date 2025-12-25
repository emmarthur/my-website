'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function HobbiesPage() {
  const t = useTranslations('hobbies')
  const tCommon = useTranslations('common')
  
  return (
    <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-deep-sea-blue-100 to-accent-purple bg-clip-text text-transparent font-heading">{t('title')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-deep-sea-blue-50 mb-8 sm:mb-12">
          {t('description')}
        </p>
        
        <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-deep-sea-blue-400/30">
          <p className="text-sm sm:text-base text-deep-sea-blue-200">{tCommon('comingSoon')}</p>
        </div>
      </motion.div>
    </div>
  )
}




