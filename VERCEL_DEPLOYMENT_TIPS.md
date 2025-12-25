# Vercel Deployment Tips

## Project Naming Rules

Vercel project names must:
- ✅ Only contain lowercase letters
- ✅ Can include digits (0-9)
- ✅ Can include: `.` (period), `_` (underscore), `-` (hyphen)
- ✅ Maximum 100 characters
- ❌ Cannot contain uppercase letters
- ❌ Cannot contain spaces

## Valid Project Names:
- `my-website` ✅
- `my_website` ✅
- `mywebsite` ✅
- `my-website-v2` ✅
- `my.website` ✅

## Invalid Project Names:
- `MyWebsite` ❌ (uppercase letters)
- `My Website` ❌ (uppercase + space)
- `my website` ❌ (space)

## Quick Fix

When deploying on Vercel:
1. Change "Private Repository Name" from `MyWebsite` to `my-website`
2. The error will disappear
3. Click "Create"

## Note

The project name on Vercel is separate from your GitHub repository name. Your GitHub repo can still be called `MyWebsite`, but the Vercel project name must be lowercase.

