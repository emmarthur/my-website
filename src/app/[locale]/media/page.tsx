'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function MediaPage() {
  const t = useTranslations('media')
  const tCommon = useTranslations('common')
  
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
        
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
          <p className="text-deep-sea-blue-200">{tCommon('comingSoon')}</p>
        </div>
      </motion.div>
    </div>
  )
}




