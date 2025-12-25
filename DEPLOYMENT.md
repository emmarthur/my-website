# Website Deployment Guide

## Free Hosting Options for Next.js

### 🚀 **Recommended: Vercel (Best for Next.js)**

Vercel is made by the creators of Next.js and offers the best free hosting experience.

#### **Free Tier Includes:**
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth per month
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Preview deployments for every PR
- ✅ Serverless functions (API routes)
- ✅ Edge functions
- ✅ Custom domains

#### **Step-by-Step Deployment:**

1. **Prepare Your Repository**
   - Make sure your code is pushed to GitHub, GitLab, or Bitbucket
   - Ensure `.env.local` is in `.gitignore` (should already be there)

2. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended)

3. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

4. **Configure Environment Variables**
   - In the project settings, go to "Environment Variables"
   - Add your environment variables:
     - `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` (if using Unsplash)
     - `REPLICATE_API_TOKEN` (if using AI image generation)
   - Add them for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### **Automatic Deployments:**
- Every push to `main` branch = Production deployment
- Every PR = Preview deployment (unique URL)
- Automatic rollback on errors

---

### 🌐 **Alternative: Netlify**

Netlify also offers excellent free hosting for Next.js.

#### **Free Tier Includes:**
- ✅ 100GB bandwidth per month
- ✅ 300 build minutes per month
- ✅ Automatic SSL
- ✅ Form handling
- ✅ Serverless functions

#### **Deployment Steps:**

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Environment Variables**
   - Site settings → Environment variables
   - Add your API keys

---

### 📦 **Alternative: Railway**

Railway offers a free tier with $5 credit per month.

#### **Deployment Steps:**

1. Sign up at [railway.app](https://railway.app)
2. Create new project → Deploy from GitHub
3. Select your repository
4. Add environment variables in the Variables tab
5. Railway auto-detects Next.js and deploys

---

## Pre-Deployment Checklist

### ✅ **Before Deploying:**

1. **Environment Variables**
   - [ ] Move all secrets to Vercel/Netlify environment variables
   - [ ] Remove any hardcoded API keys
   - [ ] Ensure `.env.local` is in `.gitignore`

2. **Build Test**
   ```bash
   npm run build
   ```
   - [ ] Build completes without errors
   - [ ] No TypeScript errors
   - [ ] No linting errors

3. **Production Test**
   ```bash
   npm start
   ```
   - [ ] Site loads correctly
   - [ ] All pages work
   - [ ] API routes function (if any)

4. **Optimize Assets**
   - [ ] Images are optimized
   - [ ] Large files are in `public/` folder
   - [ ] No unnecessary dependencies

5. **Git Repository**
   - [ ] Code is pushed to GitHub/GitLab/Bitbucket
   - [ ] `.gitignore` includes `.env.local`, `node_modules`, `.next`
   - [ ] No sensitive data in repository

---

## Recommended: Vercel Configuration

### **Create `vercel.json` (Optional)**

You can create a `vercel.json` file for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### **Next.js Configuration**

Your `next.config.js` should already be configured correctly. Make sure it includes:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
}

module.exports = nextConfig
```

---

## Post-Deployment

### **Monitor Your Site:**

1. **Vercel Dashboard**
   - View deployment logs
   - Monitor analytics
   - Check function logs

2. **Performance**
   - Use Vercel Analytics (optional, paid)
   - Check Lighthouse scores
   - Monitor Core Web Vitals

3. **Updates**
   - Push to `main` branch = auto-deploy
   - Use preview deployments for testing
   - Rollback if needed from dashboard

---

## Troubleshooting

### **Common Issues:**

1. **Build Fails**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors locally

2. **Environment Variables Not Working**
   - Ensure variables are set in Vercel dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

3. **API Routes Not Working**
   - Ensure serverless functions are enabled
   - Check function timeout settings
   - Review function logs

4. **Images Not Loading**
   - Check `next.config.js` image domains
   - Ensure images are in `public/` folder
   - Verify image paths are correct

---

## Cost Comparison

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Vercel** | Unlimited projects, 100GB bandwidth | Next.js apps (Recommended) |
| **Netlify** | 100GB bandwidth, 300 build min/month | Static sites, JAMstack |
| **Railway** | $5 credit/month | Full-stack apps |
| **Render** | Free tier available | Docker containers |

---

## Quick Start: Deploy to Vercel Now

1. **Push your code to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign up

3. **Click "Add New Project"**

4. **Import your repository**

5. **Add environment variables** (if needed)

6. **Click "Deploy"**

7. **Done!** Your site is live 🎉

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: Available in dashboard

