'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Link } from '@/i18n/routing'
import { SkillLogo } from '@/components/skills/SkillLogo'
import Image from 'next/image'

export default function PortfolioPage() {
  const t = useTranslations('career')
  const tPortfolio = useTranslations('career.portfolioSection')
  const tCommon = useTranslations('common')
  
  // Skills organized by category (technical terms, no translation needed)
  const skills = {
    languages: ['Python', 'C/C++', 'JavaScript', 'Java', 'Bash'],
    frameworks: ['Bootstrap', 'Python unittest'],
    systems: ['Linux', 'Networking', 'Operating Systems', 'Systems Administration'],
    tools: ['ServiceNow', 'Blue Prism', 'JIRA', 'SonarQube'],
    databases: ['MySQL', 'SQL'],
    cloud: ['Git', 'Azure DevOps', 'Kubernetes', 'Docker', 'Google Cloud'],
    ai: ['GitHub Copilot', 'Microsoft Copilot', 'CrewAI', 'OpenAI APIs', 'Claude']
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <Link 
          href="/career"
          className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 mb-6 transition-colors"
        >
          ← {tCommon('back')} {t('title')}
        </Link>
        
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-deep-sea-blue-100 via-accent-teal to-accent-gold bg-clip-text text-transparent font-heading">
            EMMANUEL ARTHUR
          </h1>
          <div className="flex flex-wrap gap-4 text-deep-sea-blue-200 mb-6">
            <a href="mailto:emmakarthur1800@gmail.com" className="hover:text-accent-teal transition-colors">
              📧 emmakarthur1800@gmail.com
            </a>
            <a href="https://github.com/emmarthur" target="_blank" rel="noopener noreferrer" className="hover:text-accent-teal transition-colors">
              💻 github.com/emmarthur
            </a>
            <span>📞 (503) 995-5621</span>
          </div>
          <p className="text-xl text-deep-sea-blue-50 mb-6">
            {t('portfolioDescription')}
          </p>
          {tPortfolio('professionalSummary') && (
            <div className="bg-gradient-to-r from-deep-sea-blue-800/50 to-deep-sea-blue-900/50 rounded-lg p-6 border border-deep-sea-blue-600/30">
              <h2 className="text-lg font-semibold text-accent-teal mb-3 font-heading">{tPortfolio('summary.title')}</h2>
              <p className="text-deep-sea-blue-200 leading-relaxed">{tPortfolio('professionalSummary')}</p>
            </div>
          )}
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-deep-sea-blue-50 flex items-center font-heading">
              <span className="mr-3 text-4xl">🚀</span>
              {tPortfolio('skills')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-accent-teal mb-3 font-heading">{tPortfolio('programmingLanguages')}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <SkillLogo skill={skill} size={skill === 'Java' ? 64 : 48} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-purple mb-3 font-heading">{tPortfolio('cloudDevOps')}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.cloud.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <SkillLogo skill={skill} size={48} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-orange mb-3 font-heading">{tPortfolio('aiTools')}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.ai.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <SkillLogo skill={skill} size={48} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-accent-gold mb-3 font-heading">{tPortfolio('databases')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.databases.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <SkillLogo skill={skill} size={48} />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-teal mb-3 font-heading">{tPortfolio('developmentTools')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.tools.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <SkillLogo skill={skill} size={48} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-deep-sea-blue-50 flex items-center font-heading">
              <span className="mr-3 text-4xl">🎓</span>
              {tPortfolio('education')}
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative pl-8 border-l-4 border-accent-teal"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-teal rounded-full border-4 border-deep-sea-blue-900"></div>
                <div className="bg-deep-sea-blue-800/50 rounded-lg p-6 border border-deep-sea-blue-600/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Image 
                          src="/logos/universities/portland-state.png" 
                          alt="Portland State University" 
                          width={120} 
                          height={120} 
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-deep-sea-blue-50 font-heading">{tPortfolio('educationData.masters.degree')}</h3>
                        <p className="text-lg text-accent-teal mb-1">{tPortfolio('educationData.masters.school')}</p>
                        <p className="text-deep-sea-blue-300 mb-2">{tPortfolio('educationData.masters.location')}</p>
                      </div>
                    </div>
                    <span className="text-sm text-accent-teal font-medium mt-2 md:mt-0">{tPortfolio('educationData.masters.period')}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-orange/20 text-accent-orange border border-accent-orange/30">
                    {tPortfolio('educationData.masters.status')}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 border-l-4 border-accent-teal"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-teal rounded-full border-4 border-deep-sea-blue-900"></div>
                <div className="bg-deep-sea-blue-800/50 rounded-lg p-6 border border-deep-sea-blue-600/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Image 
                          src="/logos/universities/reed-college.svg" 
                          alt="Reed College" 
                          width={140} 
                          height={40} 
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-deep-sea-blue-50 font-heading">{tPortfolio('educationData.bachelors.degree')}</h3>
                        <p className="text-lg text-accent-teal mb-1">{tPortfolio('educationData.bachelors.school')}</p>
                        <p className="text-deep-sea-blue-300 mb-2">{tPortfolio('educationData.bachelors.location')}</p>
                      </div>
                    </div>
                    <span className="text-sm text-accent-teal font-medium mt-2 md:mt-0">{tPortfolio('educationData.bachelors.period')}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-teal/20 text-accent-teal border border-accent-teal/30">
                    {tPortfolio('educationData.bachelors.status')}
                  </span>
                </div>
              </motion.div>
            </div>
            <Link 
              href="/career/education"
              className="inline-flex items-center mt-6 text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
            >
              {tCommon('viewDetails')} →
            </Link>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-deep-sea-blue-50 flex items-center font-heading">
              <span className="mr-3 text-4xl">💼</span>
              {tPortfolio('professionalExperience')}
            </h2>
            <div className="space-y-8">
              {/* Blackrock - Aladdin Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-deep-sea-blue-800/50 rounded-lg p-6 border border-deep-sea-blue-600/30"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="/logos/skills/blackrock.svg" 
                        alt="BlackRock" 
                        width={120} 
                        height={30} 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-deep-sea-blue-50 mb-1 font-heading">{tPortfolio('workExperience.blackrock1.title')}</h3>
                      <p className="text-lg text-accent-purple font-semibold">{tPortfolio('workExperience.blackrock1.company')}</p>
                      <p className="text-deep-sea-blue-300">{tPortfolio('workExperience.blackrock1.location')}</p>
                    </div>
                  </div>
                  <span className="text-sm text-deep-sea-blue-400 mt-2 md:mt-0">{tPortfolio('workExperience.blackrock1.period')}</span>
                </div>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-deep-sea-blue-900/50 rounded-lg p-4 border-l-4 border-accent-purple">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-accent-teal font-heading">{tPortfolio('workExperience.blackrock1.projects.servicenow.name')}</h4>
                      <span className="text-xs text-deep-sea-blue-400">{tPortfolio('workExperience.blackrock1.projects.servicenow.period')}</span>
                    </div>
                    <p className="text-sm text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('workExperience.blackrock1.projects.servicenow.description')}</p>
                    <div className="flex flex-wrap gap-2">
                      <SkillLogo skill="ServiceNow" size={32} />
                      <SkillLogo skill="JIRA" size={32} />
                    </div>
                  </div>
                  <div className="bg-deep-sea-blue-900/50 rounded-lg p-4 border-l-4 border-accent-purple">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-accent-teal font-heading">{tPortfolio('workExperience.blackrock1.projects.cpadmin.name')}</h4>
                      <span className="text-xs text-deep-sea-blue-400">{tPortfolio('workExperience.blackrock1.projects.cpadmin.period')}</span>
                    </div>
                    <p className="text-sm text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('workExperience.blackrock1.projects.cpadmin.description')}</p>
                    <div className="flex flex-wrap gap-2">
                      <SkillLogo skill="JavaScript" size={32} />
                      <SkillLogo skill="Bootstrap" size={32} />
                      <SkillLogo skill="Java" size={40} />
                      <SkillLogo skill="Kubernetes" size={32} />
                      <SkillLogo skill="Python unittest" size={32} />
                    </div>
                  </div>
                  <div className="bg-deep-sea-blue-900/50 rounded-lg p-4 border-l-4 border-accent-purple">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-accent-teal font-heading">{tPortfolio('workExperience.blackrock1.projects.filenameEncoder.name')}</h4>
                      <span className="text-xs text-deep-sea-blue-400">{tPortfolio('workExperience.blackrock1.projects.filenameEncoder.period')}</span>
                    </div>
                    <p className="text-sm text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('workExperience.blackrock1.projects.filenameEncoder.description')}</p>
                    <div className="flex flex-wrap gap-2">
                      <SkillLogo skill="Python" size={32} />
                      <SkillLogo skill="Python unittest" size={32} />
                      <SkillLogo skill="Azure DevOps" size={32} />
                      <SkillLogo skill="Git" size={32} />
                    </div>
                  </div>
                  <div className="bg-deep-sea-blue-900/50 rounded-lg p-4 border-l-4 border-accent-purple">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-accent-teal font-heading">{tPortfolio('workExperience.blackrock1.projects.cusip.name')}</h4>
                      <span className="text-xs text-deep-sea-blue-400">{tPortfolio('workExperience.blackrock1.projects.cusip.period')}</span>
                    </div>
                    <p className="text-sm text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('workExperience.blackrock1.projects.cusip.description')}</p>
                    <div className="flex flex-wrap gap-2">
                      <SkillLogo skill="Python" size={32} />
                      <SkillLogo skill="SQL" size={32} />
                      <SkillLogo skill="Python unittest" size={32} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Blackrock - Technology Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-deep-sea-blue-800/50 rounded-lg p-6 border border-deep-sea-blue-600/30"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="/logos/skills/blackrock.svg" 
                        alt="BlackRock" 
                        width={120} 
                        height={30} 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-deep-sea-blue-50 mb-1 font-heading">{tPortfolio('workExperience.blackrock2.title')}</h3>
                      <p className="text-lg text-accent-purple font-semibold">{tPortfolio('workExperience.blackrock2.company')}</p>
                      <p className="text-deep-sea-blue-300">{tPortfolio('workExperience.blackrock2.location')}</p>
                    </div>
                  </div>
                  <span className="text-sm text-deep-sea-blue-400 mt-2 md:mt-0">{tPortfolio('workExperience.blackrock2.period')}</span>
                </div>
                <p className="text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('workExperience.blackrock2.description')}</p>
                <div className="flex flex-wrap gap-2">
                  <SkillLogo skill="ServiceNow" size={32} />
                </div>
              </motion.div>
            </div>
            <Link 
              href="/career/work"
              className="inline-flex items-center mt-6 text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
            >
              {tCommon('viewDetails')} →
            </Link>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-deep-sea-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-deep-sea-blue-50 flex items-center font-heading">
              <span className="mr-3 text-4xl">⚡</span>
              {tPortfolio('notableProjects')}
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-deep-sea-blue-800/60 to-deep-sea-blue-900/60 rounded-lg p-6 border border-deep-sea-blue-600/30 hover:border-accent-teal/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-deep-sea-blue-50 font-heading">{tPortfolio('projects.businessImpact.name')}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-orange/20 text-accent-orange border border-accent-orange/30">
                    {tPortfolio('projects.businessImpact.status')}
                  </span>
                </div>
                <p className="text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('projects.businessImpact.description')}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <SkillLogo skill="Python" size={32} />
                  <SkillLogo skill="CrewAI" size={32} />
                  <SkillLogo skill="OpenAI APIs" size={32} />
                  <SkillLogo skill="Claude" size={32} />
                  <SkillLogo skill="Git" size={32} />
                </div>
                <a 
                  href={tPortfolio('projects.businessImpact.github')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                >
                  {tPortfolio('viewOnGitHub')} →
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-deep-sea-blue-800/60 to-deep-sea-blue-900/60 rounded-lg p-6 border border-deep-sea-blue-600/30 hover:border-accent-teal/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-deep-sea-blue-50 font-heading">{tPortfolio('projects.retailImpact.name')}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-teal/20 text-accent-teal border border-accent-teal/30">
                    {tPortfolio('projects.retailImpact.status')}
                  </span>
                </div>
                <p className="text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('projects.retailImpact.description')}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <SkillLogo skill="Python" size={32} />
                  <SkillLogo skill="Docker" size={32} />
                  <SkillLogo skill="Kubernetes" size={32} />
                  <SkillLogo skill="Git" size={32} />
                  <SkillLogo skill="Google Cloud" size={32} />
                  <SkillLogo skill="CrewAI" size={32} />
                </div>
                <a 
                  href={tPortfolio('projects.retailImpact.github')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                >
                  {tPortfolio('viewOnGitHub')} →
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-deep-sea-blue-800/60 to-deep-sea-blue-900/60 rounded-lg p-6 border border-deep-sea-blue-600/30 hover:border-accent-teal/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-deep-sea-blue-50 font-heading">{tPortfolio('projects.directoryChallenge.name')}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-teal/20 text-accent-teal border border-accent-teal/30">
                    {tPortfolio('projects.directoryChallenge.status')}
                  </span>
                </div>
                <p className="text-deep-sea-blue-200 leading-relaxed mb-3">{tPortfolio('projects.directoryChallenge.description')}</p>
                <div className="flex items-center gap-4 mb-3">
                  <Image 
                    src="/logos/skills/tryhackme.svg" 
                    alt="TryHackMe" 
                    width={120} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={tPortfolio('projects.directoryChallenge.github')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
                  >
                    {tPortfolio('viewOnGitHub')} →
                  </a>
                  <a 
                    href={tPortfolio('projects.directoryChallenge.tryhackme')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-purple hover:text-accent-purple/80 text-sm font-medium transition-colors"
                  >
                    {tPortfolio('projects.directoryChallenge.viewOnTryHackMe')} →
                  </a>
                </div>
              </motion.div>
            </div>
            <Link 
              href="/career/projects"
              className="inline-flex items-center mt-6 text-accent-teal hover:text-accent-teal/80 text-sm font-medium transition-colors"
            >
              {tCommon('viewDetails')} →
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}




