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
      LinkComponent={Link}
    />
  )
}
