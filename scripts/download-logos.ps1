$skills = @{
    'javascript' = @{ icon = 'javascript'; color = 'F7DF1E' }
    'bash' = @{ icon = 'gnubash'; color = '4EAA25' }
    'bootstrap' = @{ icon = 'bootstrap'; color = '7952B3' }
    'linux' = @{ icon = 'linux'; color = 'FCC624' }
    'servicenow' = @{ icon = 'servicenow'; color = '81B5A1' }
    'blueprism' = @{ icon = 'blueprism'; color = '0070F3' }
    'jira' = @{ icon = 'jira'; color = '0052CC' }
    'sonarqube' = @{ icon = 'sonarqube'; color = '4E9BCD' }
    'mysql' = @{ icon = 'mysql'; color = '4479A1' }
    'sql' = @{ icon = 'postgresql'; color = '4169E1' }
    'git' = @{ icon = 'git'; color = 'F05032' }
    'kubernetes' = @{ icon = 'kubernetes'; color = '326CE5' }
    'docker' = @{ icon = 'docker'; color = '2496ED' }
    'openai' = @{ icon = 'openai'; color = '412991' }
    'anthropic' = @{ icon = 'anthropic'; color = 'D4A574' }
}

$outputDir = "public\logos\skills"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

foreach ($skillName in $skills.Keys) {
    $skill = $skills[$skillName]
    $url = "https://cdn.simpleicons.org/$($skill.icon)/$($skill.color)"
    $output = "$outputDir\$skillName.svg"
    
    Write-Host "Downloading $skillName..." -NoNewline
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        Write-Host " OK" -ForegroundColor Green
    } catch {
        Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Download complete!" -ForegroundColor Cyan
