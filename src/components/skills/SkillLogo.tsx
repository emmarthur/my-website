'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SkillLogoProps {
  skill: string
  size?: number
  className?: string
}

// Map skill names to their local logo filenames and CDN fallback
// First tries local files in public/logos/skills/, then falls back to Simple Icons CDN
const skillLogoMap: Record<string, { local?: string; cdn?: { icon: string; color: string } }> = {
  'Python': { local: 'python.svg', cdn: { icon: 'python', color: '3776AB' } },
  'C/C++': { local: 'cpp.svg', cdn: { icon: 'cplusplus', color: '00599C' } },
  'JavaScript': { local: 'javascript.svg', cdn: { icon: 'javascript', color: 'F7DF1E' } },
  'Java': { local: 'java.svg', cdn: { icon: 'java', color: 'ED8B00' } },
  'Bash': { local: 'bash.svg', cdn: { icon: 'gnubash', color: '4EAA25' } },
  'Bootstrap': { local: 'bootstrap.svg', cdn: { icon: 'bootstrap', color: '7952B3' } },
  'Python unittest': { local: 'python.svg', cdn: { icon: 'python', color: '3776AB' } },
  'Linux': { local: 'linux.svg', cdn: { icon: 'linux', color: 'FCC624' } },
  'Networking': { }, // No logo available, will show text fallback
  'Operating Systems': { }, // No logo available, will show text fallback
  'Systems Administration': { }, // No logo available, will show text fallback
  'ServiceNow': { local: 'servicenow.svg', cdn: { icon: 'servicenow', color: '81B5A1' } },
  'Blue Prism': { local: 'blueprism.svg', cdn: { icon: 'blueprism', color: '0070F3' } },
  'JIRA': { local: 'jira.svg', cdn: { icon: 'jira', color: '0052CC' } },
  'SonarQube': { local: 'sonarqube.svg', cdn: { icon: 'sonarqube', color: '4E9BCD' } },
  'MySQL': { local: 'mysql.svg', cdn: { icon: 'mysql', color: '4479A1' } },
  'SQL': { local: 'sql.svg', cdn: { icon: 'postgresql', color: '4169E1' } },
  'Git': { local: 'git.svg', cdn: { icon: 'git', color: 'F05032' } },
  'Azure DevOps': { local: 'azuredevops.svg', cdn: { icon: 'azuredevops', color: '0078D4' } },
  'Kubernetes': { local: 'kubernetes.svg', cdn: { icon: 'kubernetes', color: '326CE5' } },
  'Docker': { local: 'docker.svg', cdn: { icon: 'docker', color: '2496ED' } },
  'Google Cloud': { local: 'google-cloud.png', cdn: { icon: 'googlecloud', color: '4285F4' } },
  'GitHub Copilot': { local: 'github.svg', cdn: { icon: 'github', color: '181717' } },
  'Microsoft Copilot': { local: 'microsoft.svg', cdn: { icon: 'microsoft', color: '0078D4' } },
  'CrewAI': { local: 'crewai.svg', cdn: { icon: 'crewai', color: '6366F1' } },
  'OpenAI APIs': { local: 'openai.svg', cdn: { icon: 'openai', color: '412991' } },
  'Claude': { local: 'anthropic.svg', cdn: { icon: 'anthropic', color: 'D4A574' } },
}

export function SkillLogo({ skill, size = 40, className = '' }: SkillLogoProps) {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [useCdn, setUseCdn] = useState(false)
  
  const logoInfo = skillLogoMap[skill]
  
  // Try local file first, then fallback to CDN
  const localPath = logoInfo?.local ? `/logos/skills/${logoInfo.local}` : null
  const cdnUrl = logoInfo?.cdn 
    ? `https://cdn.simpleicons.org/${logoInfo.cdn.icon}/${logoInfo.cdn.color}`
    : null
  
  // If no local path but CDN exists, use CDN directly
  // Otherwise try local first, then CDN on error
  const shouldUseCdn = !localPath && !!cdnUrl
  const logoUrl = (useCdn || shouldUseCdn) ? cdnUrl : localPath
  
  // Fallback to text if icon not found or image fails to load
  if (imageError || !logoUrl) {
    return (
      <div 
        className={`relative flex items-center justify-center rounded-lg bg-deep-sea-blue-800/50 border border-deep-sea-blue-600/30 ${className}`}
        style={{ width: size, height: size }}
        title={skill}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-xs text-deep-sea-blue-200 font-medium">{skill.charAt(0)}</span>
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-deep-sea-blue-900/95 text-deep-sea-blue-100 text-xs rounded whitespace-nowrap z-50 pointer-events-none">
            {skill}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-deep-sea-blue-900/95"></div>
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center justify-center rounded-lg bg-deep-sea-blue-800/50 border border-deep-sea-blue-600/30 hover:border-accent-teal/60 transition-all cursor-pointer ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label={skill}
      >
        <Image
          src={logoUrl}
          alt={skill}
          width={size}
          height={size}
          className="object-contain p-1"
          style={{ maxWidth: `${size}px`, maxHeight: `${size}px` }}
          onError={() => {
            // If local file fails and CDN is available, try CDN
            if (!useCdn && !shouldUseCdn && cdnUrl) {
              setUseCdn(true)
              setImageError(false)
            } else {
              setImageError(true)
            }
          }}
          unoptimized={useCdn} // CDN handles optimization, local files can be optimized
        />
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-deep-sea-blue-900/95 text-deep-sea-blue-100 text-xs rounded whitespace-nowrap z-50 pointer-events-none">
          {skill}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-deep-sea-blue-900/95"></div>
        </div>
      )}
    </div>
  )
}
