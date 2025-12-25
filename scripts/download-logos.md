# Logo Download Guide

## Quick Setup Using Simple Icons

Simple Icons provides free, consistent SVG logos for all major technologies.

### Method 1: Direct Download from Simple Icons

1. Visit: https://simpleicons.org/
2. Search for each technology
3. Click "Download SVG"
4. Save to `public/logos/skills/` with the correct filename

### Method 2: Using Simple Icons CDN (Alternative)

If you prefer not to store files locally, you can modify the component to use:
```
https://cdn.simpleicons.org/{icon-name}/{color}
```

### Required Logos

Run this in your browser console on simpleicons.org to download all at once:

```javascript
const logos = [
  { name: 'Python', file: 'python.svg' },
  { name: 'C++', file: 'cpp.svg' },
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'Java', file: 'java.svg' },
  { name: 'Bash', file: 'bash.svg' },
  { name: 'Bootstrap', file: 'bootstrap.svg' },
  { name: 'Linux', file: 'linux.svg' },
  { name: 'ServiceNow', file: 'servicenow.svg' },
  { name: 'Jira', file: 'jira.svg' },
  { name: 'SonarQube', file: 'sonarqube.svg' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'Git', file: 'git.svg' },
  { name: 'Azure DevOps', file: 'azuredevops.svg' },
  { name: 'Kubernetes', file: 'kubernetes.svg' },
  { name: 'Docker', file: 'docker.svg' },
  { name: 'GitHub', file: 'github.svg' },
  { name: 'Microsoft', file: 'microsoft.svg' },
  { name: 'OpenAI', file: 'openai.svg' },
  { name: 'Anthropic', file: 'anthropic.svg' },
]

// For custom icons (network, os, sysadmin, ai), you may need to:
// - Use generic icons from icon libraries
// - Create custom SVGs
// - Use placeholder images
```

### Icon Name Mapping

Some technologies need specific icon names on Simple Icons:
- C/C++ → Search for "Cplusplus" or "C"
- Azure DevOps → Search for "Azure DevOps"
- GitHub Copilot → Use "GitHub" icon
- Microsoft Copilot → Use "Microsoft" icon
- OpenAI APIs → Use "OpenAI" icon
- Claude → Search for "Anthropic"

### Custom Icons Needed

For these, you may need to find alternatives or create simple SVGs:
- `network.svg` - Networking icon
- `os.svg` - Operating Systems icon  
- `sysadmin.svg` - Systems Administration icon
- `ai.svg` - Generic AI/Prompt Engineering icon

### Testing

After adding logos, check the portfolio page. Missing logos will automatically fall back to text, so the page will still work.

