# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? (your-portfolio)
# - Directory? ./
# - Override settings? No
```

### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

## Environment Variables (Optional)
If you need any environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or create `.env.local` file locally

## Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in `package.json`
2. **Routes not working**: Ensure `next.config.ts` is properly configured
3. **Images not loading**: Check image paths and domains in config

### Build Commands:
- Build: `npm run build`
- Start: `npm run start`
- Dev: `npm run dev`

## Files Created for Deployment:
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to ignore during deployment
- `next.config.ts` - Next.js configuration optimized for Vercel
- `DEPLOYMENT.md` - This guide

Your portfolio is now ready for Vercel deployment! 🚀
