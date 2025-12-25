const https = require('https');
const fs = require('fs');
const path = require('path');

// Skills that need logos downloaded
const skillsToDownload = [
  { name: 'javascript', icon: 'javascript', color: 'F7DF1E' },
  { name: 'bash', icon: 'gnubash', color: '4EAA25' },
  { name: 'bootstrap', icon: 'bootstrap', color: '7952B3' },
  { name: 'linux', icon: 'linux', color: 'FCC624' },
  { name: 'servicenow', icon: 'servicenow', color: '81B5A1' },
  { name: 'blueprism', icon: 'blueprism', color: '0070F3' },
  { name: 'jira', icon: 'jira', color: '0052CC' },
  { name: 'sonarqube', icon: 'sonarqube', color: '4E9BCD' },
  { name: 'mysql', icon: 'mysql', color: '4479A1' },
  { name: 'sql', icon: 'postgresql', color: '4169E1' },
  { name: 'git', icon: 'git', color: 'F05032' },
  { name: 'kubernetes', icon: 'kubernetes', color: '326CE5' },
  { name: 'docker', icon: 'docker', color: '2496ED' },
  { name: 'openai', icon: 'openai', color: '412991' },
  { name: 'anthropic', icon: 'anthropic', color: 'D4A574' },
];

const outputDir = path.join(__dirname, '..', 'public', 'logos', 'skills');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadLogo(skill) {
  return new Promise((resolve, reject) => {
    const url = `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`;
    const filePath = path.join(outputDir, `${skill.name}.svg`);
    
    console.log(`Downloading ${skill.name} from ${url}...`);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${skill.name}: ${response.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded ${skill.name}.svg`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting logo downloads...\n');
  
  for (const skill of skillsToDownload) {
    try {
      await downloadLogo(skill);
    } catch (error) {
      console.error(`✗ Failed to download ${skill.name}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAll();

