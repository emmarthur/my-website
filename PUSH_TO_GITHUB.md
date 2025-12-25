# Push to GitHub - Quick Guide

## Step 1: Add Your GitHub Remote

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-website.git
```

Or if you're using SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/my-website.git
```

## Step 2: Push to GitHub

```bash
git push -u origin main
```

## If You Get Authentication Errors

### Option 1: Use Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password when pushing

### Option 2: Use GitHub CLI
```bash
gh auth login
git push -u origin main
```

### Option 3: Use SSH Key
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL for remote

## Verify Remote is Added

```bash
git remote -v
```

Should show:
```
origin  https://github.com/YOUR_USERNAME/my-website.git (fetch)
origin  https://github.com/YOUR_USERNAME/my-website.git (push)
```

