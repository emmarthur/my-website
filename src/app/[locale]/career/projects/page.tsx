'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ProjectsGrid } from '@/components/career/ProjectsGrid'

export default function ProjectsPage() {
  const t = useTranslations('career')
  const tCommon = useTranslations('common')

  return (
    <ProjectsGrid
      backHref="/career"
      backLabel={`${tCommon('back')} ${t('title')}`}
      title={t('projects')}
      description={t('projectsDescription')}
      // next-intl Link vs next/link prop types after Next 14.2 upgrade
      LinkComponent={Link as typeof import('next/link').default}
    />
  )
}
