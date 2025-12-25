'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Link } from '@/i18n/routing'

const lifeSectionIds = [
  { id: 'career', path: '/career' },
  { id: 'hobbies', path: '/hobbies' },
  { id: 'relationships', path: '/relationships' },
  { id: 'thoughts', path: '/thoughts' },
  { id: 'media', path: '/media' },
]

export default function Home() {
  const t = useTranslations('home')
  const tCareer = useTranslations('career')
  const tHobbies = useTranslations('hobbies')
  const tRelationships = useTranslations('relationships')
  const tThoughts = useTranslations('thoughts')
  const tMedia = useTranslations('media')
  
  const getSectionTitle = (id: string) => {
    switch (id) {
      case 'career': return tCareer('title')
      case 'hobbies': return tHobbies('title')
      case 'relationships': return tRelationships('title')
      case 'thoughts': return tThoughts('title')
      case 'media': return tMedia('title')
      default: return ''
    }
  }
  
  const getSectionDescription = (id: string) => {
    switch (id) {
      case 'career': return tCareer('description')
      case 'hobbies': return tHobbies('description')
      case 'relationships': return tRelationships('description')
      case 'thoughts': return tThoughts('description')
      case 'media': return tMedia('description')
      default: return ''
    }
  }
  
  return (
    <div className="min-h-screen relative z-10">
      {/* Background is now handled in layout.tsx */}
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto relative z-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 relative z-20 font-heading"
            style={{ 
              background: 'linear-gradient(to right, #b3d9ff, #1abc9c, #9b59b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#b3d9ff', // Fallback color
            }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-deep-sea-blue-50 mb-12 drop-shadow-md relative z-20"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Life Sections Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-20"
        >
          {lifeSectionIds.map((section) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={section.path}>
                <div className="bg-white/90 dark:bg-deep-sea-blue-900/90 backdrop-blur-md rounded-xl p-6 shadow-2xl hover:shadow-deep-sea-blue-500/50 transition-all cursor-pointer border border-deep-sea-blue-300/30 dark:border-deep-sea-blue-600/30 hover:border-accent-teal/50">
                  <h2 className="text-2xl font-semibold mb-2 text-deep-sea-blue-900 dark:text-deep-sea-blue-50 font-heading">{getSectionTitle(section.id)}</h2>
                  <p className="text-deep-sea-blue-700 dark:text-deep-sea-blue-200">{getSectionDescription(section.id)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

